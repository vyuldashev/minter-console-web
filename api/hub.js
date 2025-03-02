import MinterHub from 'minter-js-hub';
import {TxStatusType} from 'minter-js-hub/gen/mhub2/v1/mhub2_pb.js';
import axios from 'axios';
import {cacheAdapterEnhancer, Cache} from 'axios-extensions';
import {TinyEmitter as Emitter} from 'tiny-emitter';
import {isValidAddress as isValidMinterAddress} from 'minterjs-util';
import {isValidAddress as isValidEthAddress} from 'ethereumjs-util';
import {getCoinList} from '@/api/explorer.js';
import Big from '~/assets/big.js';
import {HUB_API_URL, HUB_TRANSFER_STATUS, HUB_CHAIN_ID, NETWORK, MAINNET} from "~/assets/variables.js";
import addToCamelInterceptor from '~/assets/to-camel.js';
import {isHubTransferFinished} from '~/assets/utils.js';

const minterHub = new MinterHub(HUB_API_URL);

const instance = axios.create({
    baseURL: HUB_API_URL,
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false}),
});
addToCamelInterceptor(instance);

/**
 * @param {HUB_CHAIN_ID} network
 * @return {Promise<{min: string, fast: string}>}
 */
export function getOracleFee(network) {
    let promise;
    if (network === HUB_CHAIN_ID.ETHEREUM) {
        promise = minterHub.getOracleEthFee();
    }
    if (network === HUB_CHAIN_ID.BSC) {
        promise = minterHub.getOracleBscFee();
    }
    if (promise) {
        return promise.then((result) => {
            result.min = new Big(result.min).div(10 ** 18).toString();
            result.fast =new Big(result.fast).div(10 ** 18).toString();
            return result;
        });
    } else {
        return Promise.reject(new Error('Network not specified'));
    }
    // eslint-disable-next-line no-unreachable
    return instance.get('oracle/eth_fee')
        .then((response) => {
            return response.data.result;
        });
}


/**
 * @return {Promise<Array<HubCoinItem>>}
 */
export function getOracleCoinList() {
    return Promise.all([_getOracleCoinList(), getCoinList({skipMeta: true})])
        .then(([oracleCoinList, minterCoinList]) => {
            oracleCoinList.forEach((oracleCoin) => {
                const minterCoin = minterCoinList.find((item) => item.id === Number(oracleCoin.minterId));
                oracleCoin.symbol = minterCoin?.symbol;
            });
            // filter out not existent coins
            return oracleCoinList.filter((item) => item.symbol);
        });
}

// 1 min cache
const coinsCache = new Cache({maxAge: 1 * 60 * 1000});

/**
 * #@return {Promise<TokenInfo.AsObject[]>}
 * @return {Promise<Array<HubCoinItem>>}
 */
export function _getOracleCoinList() {
    return minterHub.getTokenList()
        .then((tokenList) => {
            tokenList = tokenList.map((item) => {
                item.commission = new Big(item.commission).div(10 ** 18).toString();
                return item;
            });
            const minterTokenList = tokenList.filter((token) => token.chainId === HUB_CHAIN_ID.MINTER);

            return minterTokenList
                .map((minterToken) => {
                    function findToken(denom, chainId) {
                        return tokenList.find((item) => item.denom === denom && item.chainId === chainId);
                    }

                    return {
                        minterId: minterToken.externalTokenId,
                        ...minterToken,
                        ethereum: findToken(minterToken.denom, HUB_CHAIN_ID.ETHEREUM),
                        bsc: findToken(minterToken.denom, HUB_CHAIN_ID.BSC),
                    };
                });
        });
    // eslint-disable-next-line no-unreachable
    return instance.get('oracle/coins', {
            cache: coinsCache,
        })
        .then((response) => {
            return response.data.result;
        });
}

const priceCache = new Cache({maxAge: 10 * 1000});

/**
 * @return {Promise<Array<HubPriceItem>>}
 */
export function getOraclePriceList() {
    return minterHub.getOraclePriceList();
    // eslint-disable-next-line no-unreachable
    return instance.get('oracle/prices', {
            cache: priceCache,
        })
        .then((response) => {
            return response.data.result.list;
        });
}

/**
 * @param {string} address
 * @return {Promise<number|string>}
 */
export function getDiscountForHolder(address) {
    if (!isValidMinterAddress(address) && !isValidEthAddress(address)) {
        return Promise.resolve(0);
    }
    address = address.replace(/^Mx/, '').replace(/^0x/, '');
    return minterHub.getDiscountForHolder(address)
        .then((discount) => {
            return new Big(discount).div(10 ** 18).toString();
        });
}

/**
 *
 * @param {string} hash
 * @return {Promise<HubTransfer>}
 */
export function getMinterTxStatus(hash) {
    return minterHub.getTxStatus(hash)
        .then((statusData) => {
            // cast {string: number} obj to {number: string} array-like obj
            const hubStatusTypes = Object.fromEntries(
                Object.entries(TxStatusType)
                    .map((entry) => [entry[1], entry[0]]),
            );

            // get string representation from number, e.g. replace 0 with 'TX_STATUS_NOT_FOUND'
            statusData.status = hubStatusTypes[statusData.status];
            return statusData;
        });
    // eslint-disable-next-line no-unreachable
    return instance.get(`minter/tx_status/${hash}`)
        .then((response) => {
            return response.data.result;
        });
}

/**
 *
 * @param {string} hash
 * @param [timestamp]
 * @return {Promise<HubTransfer>}
 */
export function subscribeTransfer(hash, timestamp) {
    if (!hash) {
        throw new Error('Tx hash not specified');
    }
    let isUnsubscribed = false;
    let lastStatus;
    const emitter = new Emitter();

    const statusPromise = pollMinterTxStatus()
        .then((transfer) => {
            emitter.emit('finished', transfer);
            return transfer;
        });

    // proxy `.on` and `.once`
    proxyEmitter(statusPromise, emitter);

    // unsubscribe from all events and disable polling
    statusPromise.unsubscribe = function() {
        isUnsubscribed = true;
        emitter.off('update');
        emitter.off('finished');
    };

    return statusPromise;


    function proxyEmitter(target, emitter) {
        target.on = function() {
            emitter.on(...arguments);
            return target;
        };
        target.once = function() {
            emitter.once(...arguments);
            return target;
        };
        // target.off = function () {
        //     emitter.off(...arguments);
        //     return target;
        // }
    }

    function pollMinterTxStatus() {
        return getMinterTxStatus(hash)
            .catch((error) => {
                console.log(error);
            })
            .then((transfer) => {
                // reject
                if (isUnsubscribed) {
                    throw new Error('unsubscribed');
                }

                // no transfer when error
                if (transfer) {
                    const txDate = timestamp ? new Date(timestamp) : new Date();
                    const isLong = Date.now() - txDate.getTime() > 10 * 60 * 1000;
                    if (isLong && transfer.status === HUB_TRANSFER_STATUS.not_found) {
                        transfer = {
                            ...transfer,
                            status: HUB_TRANSFER_STATUS.not_found_long,
                        };
                    }

                    if (lastStatus !== transfer.status) {
                        lastStatus = transfer.status;
                        emitter.emit('update', transfer);
                    }

                    if (isHubTransferFinished(transfer.status)) {
                        return transfer;
                    }
                }

                return wait(10000).then(() => pollMinterTxStatus(hash));
            });
    }
}

/**
 * @param {Array<HubPriceItem>} priceList
 * @return {number}
 */
export function getGasPriceGwei(priceList) {
    const priceItem = priceList.find((item) => item.name === 'eth/gas');
    let gasPriceGwei;
    if (!priceItem) {
        gasPriceGwei = 100;
    } else {
        gasPriceGwei = priceItem.value / 10 ** 18;
    }

    return NETWORK === MAINNET ? gasPriceGwei : gasPriceGwei * 10;
}

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

/**
 * @typedef {object} HubCoinItemMinterExtra
 * @property {string} symbol - minter symbol
 * @property {string} minterId
 */
/**
 * @typedef {TokenInfo.AsObject & HubCoinItemMinterExtra & {ethereum: TokenInfo.AsObject, bsc: TokenInfo.AsObject}} HubCoinItem
 */

/**
 * @typedef {object} HubPriceItem
 * @property {string} name
 * @property {number|string} value
 */

/**
 * @typedef {object} HubTransfer
 * @property {HUB_TRANSFER_STATUS} status
 * @property {string} inTxHash
 * @property {string} outTxHash
 */
