export const BASE_TITLE = 'My Minter';
export const BASE_DESCRIPTION = '';
export const MYMINTER_API_URL = 'https://my.beta.minter.network/api/v1/';
export const NETWORK = process.env.APP_ENV === 'production' ? 'mainnet' : 'testnet';
export const COIN_NAME = process.env.APP_ENV === 'production' ? 'BIP' : 'MNT';
export const EXPLORER_MAINNET_URL = 'https://explorer.minter.network';
export const EXPLORER_TESTNET_URL = 'https://testnet.explorer.minter.network';
export const EXPLORER_URL = process.env.APP_ENV === 'production' ? EXPLORER_MAINNET_URL : EXPLORER_TESTNET_URL;
