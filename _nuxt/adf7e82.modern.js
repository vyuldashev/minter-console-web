(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{647:function(e,t,r){"use strict";var n=r(24),o=(r(21),r(17),r(22),r(7),r(676)),l=r(640),c=r(641),d=r.n(c),m=r(656),f=r.n(m),h=r(642),v=r.n(h),_=r(645),C=r(2),$=r(35),y=r(116),x=r(680),S=r(651),O=r(53),w=r(677),A=r(638),P=r(249),E=r(75),T=r(4),j=r(658),L=r(654),M=r(652),k=r(659),D=r(665),B=r(664),F=r(650),V=r(660),I=(r(115),r(646)),N=r.n(I);function R(e){return e.map((e=>({signature:e})))}var U={directives:{autosize:_.a,checkEmpty:A.a},mixins:[l.validationMixin],props:{value:{type:Array,required:!0}},data(){return{list:R(this.value)}},validations:()=>({list:{minLength:v()(1),maxLength:N()(32),$each:{signature:{required:d.a}}}}),computed:{listHash(){var e=this.list.reduce(((e,t)=>e+t.signature),"");return this.list.length.toString()+e}},watch:{value(e){this.list=R(e)},listHash(){this.updateModel()}},methods:{addParticipant(){this.list.push({signature:""})},removeParticipant(e){setTimeout((()=>{this.list.splice(e,1)}),100)},updateModel(){this.$emit("input",this.list.map((e=>e.signature)))}}},z=r(41),K=Object(z.a)(U,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[e._l(e.$v.list.$each.$iter,(function(t,n){return r("div",{key:n,staticClass:"multisig-signature__cell u-cell"},[r("label",{staticClass:"form-field multisig-signature__field",class:{"is-error":t.signature.$error}},[r("textarea",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model.trim",value:t.signature.$model,expression:"v.signature.$model",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{autocapitalize:"off",spellcheck:"false",rows:"1"},domProps:{value:t.signature.$model},on:{blur:[function(e){return t.signature.$touch()},function(t){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(t.signature,"$model",r.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Signature","form.multisig-signature-list-item"))+" #"+e._s(Number(n)+1))])]),e._v(" "),n>0?r("button",{staticClass:"multisig-signature__remove u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(t){return e.removeParticipant(n)}}},[r("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-remove.svg",alt:"Remove signature"}})]):e._e(),e._v(" "),t.signature.$dirty&&!t.signature.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter signature","form.multisig-signature-list-item-error-required")))]):e._e()])})),e._v(" "),r("div",{staticClass:"u-cell u-text-left"},[r("button",{staticClass:"button button--ghost",attrs:{type:"button"},on:{click:e.addParticipant}},[e._v("\n            "+e._s(e.$td("+ Add signature","form.multisig-signature-list-add"))+"\n        ")])])],2)}),[],!1,null,null,null).exports;function H(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?H(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):H(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function G(e){var t={};return Object.keys(e).forEach((r=>{(e[r]||0===e[r]||!1===e[r])&&(t[r]=e[r])})),t}var Q={feeBus:null,components:{QrcodeVue:o.a,BaseAmount:j.a,FieldCoin:L.a,FieldDomain:M.a,FieldQr:k.a,InputMaskedInteger:D.a,ButtonCopyIcon:B.a,Loader:F.a,Modal:V.a,SignatureList:K},directives:{autosize:_.a,checkEmpty:A.a},mixins:[l.validationMixin],props:{txData:{type:Object,required:!0},$txData:{type:Object,required:!0,validator:e=>"boolean"==typeof e.$error&&"boolean"==typeof e.$dirty&&"boolean"==typeof e.$invalid&&"object"==typeof e.$model&&"object"==typeof e.$params},txType:{type:String,required:!0},beforeConfirmModalShow:{type:[Function,null],default:null},alwaysAdvanced:{type:Boolean,default:!1}},fetch(){return Object(O.j)(this.$store.getters.BASE_COIN,1).then((e=>{this.swapBaseCoinList=e}))},data:()=>({isFormSending:!1,serverError:"",serverSuccess:null,form:{nonce:"",gasCoin:"",payload:"",signatureList:["",""],multisigAddress:"",gasPrice:""},formAdvanced:{gasCoin:"",payload:""},isModeAdvanced:!1,fee:{},isConfirmModalVisible:!1,isSuccessModalVisible:!1,isSigning:!1,signature:null,signedTx:null,multisigDomain:"",isMultisigDomainResolving:!1,swapBaseCoinList:[]}),validations(){var form={gasCoin:{minLength:this.$store.getters.isOfflineMode?()=>!0:v()(3),fee:()=>!!this.$store.getters.isOfflineMode||!this.fee.error,notLp:e=>0!==e.indexOf("LP-")},payload:{maxLength:e=>this.payloadLength<=1e4,isNotMnemonic:e=>!Object(y.b)(e)},multisigAddress:{required:()=>!0,validAddress:this.isMultisigDomainResolving?()=>new Promise((()=>0)):this.form.multisigAddress?$.c:()=>!0},nonce:{}};return this.$store.getters.isOfflineMode&&(form.nonce={required:d.a,minValue:f()(1)},form.gasPrice={minValue:f()(1)}),{form:form,txData:{valid:()=>!this.$txData.$invalid}}},computed:{balance(){var e;return this.form.multisigAddress&&(e=[]),e=this.$store.getters.balance,this.$emit("update:addressBalance",e),e},gasSuitableBalance(){return this.balance.filter((e=>e.coin.type===T.h.COIN||!!this.swapBaseCoinList.find((t=>t.id===e.coin.id))))},isShowPayload(){return this.txType!==C.a.REDEEM_CHECK},isShowGasCoin(){return this.txType!==C.a.REDEEM_CHECK&&this.txType!==C.a.SELL_ALL},showAdvanced(){return this.alwaysAdvanced||this.isModeAdvanced||this.$store.getters.isOfflineMode},showSwitcherAdvanced(){return this.alwaysAdvanced||this.$store.getters.isOfflineMode},whatAffectsTxHash(){return[this.form.gasCoin,this.form.gasPrice,this.form.nonce,this.form.payload,this.txData]},payloadLength(){return new Blob([this.form.payload]).size},feeBusParams(){var e,t=this.txType,r=this.txData;return t!==C.a.BUY_SWAP_POOL&&t!==C.a.SELL_SWAP_POOL&&t!==C.a.SELL_ALL_SWAP_POOL||r.coins.length-1,t===C.a.MULTISEND&&r.list.length,{txParams:{gasCoin:this.form.gasCoin||void 0,payload:this.form.payload,type:t,data:r},baseCoinAmount:null===(e=this.$store.getters.baseCoin)||void 0===e?void 0:e.amount,fallbackToCoinToSpend:!0,isOffline:this.$store.getters.isOfflineMode}}},watch:{feeBusParams:{handler(e){this.$options.feeBus&&"function"==typeof this.$options.feeBus.$emit&&this.$options.feeBus.$emit("update-params",e)},deep:!0},"form.multisigAddress":{handler(e,t){!!e!=!!t&&this.$emit("update:isMultisigAddress",!!e),t&&this.clearSignatureData()}},form:{handler(e){this.$emit("update:txForm",e)},deep:!0},whatAffectsTxHash:{handler(){this.clearSignatureData()},deep:!0}},created(){this.$options.feeBus=new w.a(this.feeBusParams),this.fee=this.$options.feeBus.fee,this.$options.feeBus.$on("update-fee",(e=>{this.fee=e}))},methods:{pretty:e=>Object(E.p)(e,void 0,!0),prettyExact:E.q,submitConfirm(){if(!this.isFormSending){if(this.$v.$invalid)return this.$v.$touch(),void this.$txData.$touch();var e;"function"==typeof this.beforeConfirmModalShow&&(e=this.beforeConfirmModalShow(this)),e&&"function"==typeof e.then||(e=Promise.resolve()),e.then((()=>{this.$store.getters.isOfflineMode?this.submit():this.isConfirmModalVisible=!0})).catch((e=>{console.log(e)}))}},submit(){this.isConfirmModalVisible=!1,this.isSuccessModalVisible=!1,this.signature=null,this.signedTx=null,this.serverError="",this.serverSuccess=null,this.$emit("success-tx",null),this.$store.getters.isOfflineMode?this.generateTx():this.postTx()},generateTx(){var e;try{e=this.form.multisigAddress?Object(x.c)(this.getTxParamsMultisigData(),{address:this.form.multisigAddress}):Object(x.c)(this.getTxParams(),{privateKey:this.$store.getters.privateKey})}catch(e){return console.log(e),void(this.serverError=e.message)}this.signedTx=e.serializeToString(),this.clearForm()},postTx(){var e;if(this.isFormSending=!0,this.form.multisigAddress){var t=this.getTxParamsMultisigData();e=Promise.all([Object(S.a)(t,{address:this.form.multisigAddress}),Object(S.j)(t)]).then((e=>{var[r]=e;return Object(S.i)(Y(Y({},t),{},{nonce:r}),{address:this.form.multisigAddress})}))}else{var r=this.getTxParams();e=Promise.all([Object(S.a)(r,{address:this.$store.getters.address}),Object(S.j)(r),this.$store.dispatch("FETCH_ADDRESS_ENCRYPTED")]).then((e=>{var[t]=e;return Object(S.i)(Y(Y({},r),{},{nonce:t}),{privateKey:this.$store.getters.privateKey,gasRetryLimit:this.fee.isHighFee?0:2})}))}e.then((e=>{this.isFormSending=!1,this.serverSuccess=e,this.$emit("success-tx",this.serverSuccess),this.isSuccessModalVisible=!0,this.clearForm()})).catch((e=>{console.log(e),this.isFormSending=!1,this.serverError=Object(P.a)(e)}))},signTx(){if(!this.isSigning&&this.form.multisigAddress){if(this.$v.$invalid)return this.$v.$touch(),void this.$txData.$touch();this.isSigning=!0,this.signature=null;var e=this.getTxParams();Promise.all([Object(S.a)(e,{address:this.form.multisigAddress}),Object(S.j)(e),this.$store.dispatch("FETCH_ADDRESS_ENCRYPTED")]).then((t=>{var[r]=t,n=Object(x.c)(Y(Y({},e),{},{nonce:r}),{address:this.form.multisigAddress}),o=Object(x.b)(n,this.$store.getters.privateKey).toString("hex");this.signature="0x".concat(o),this.form.signatureList[0]=this.signature,this.isSigning=!1})).catch((e=>{console.log(e),this.serverError=e.message,this.isSigning=!1}))}},getTxParams(){return Y(Y({chainId:this.$store.getters.CHAIN_ID},G(this.form)),{},{data:G(this.txData),type:this.txType,gasCoin:this.fee.coin,signatureType:this.form.multisigAddress?2:1})},getTxParamsMultisigData(){var e;return Y(Y({},this.getTxParams()),{},{signatureData:{multisig:this.form.multisigAddress,signatures:null===(e=this.form.signatureList)||void 0===e?void 0:e.filter((e=>!!e))}})},switchToAdvanced(){this.isModeAdvanced=!0,this.form.gasCoin=this.formAdvanced.gasCoin,this.form.payload=this.formAdvanced.payload},switchToSimple(){this.isModeAdvanced=!1,this.formAdvanced.gasCoin=this.form.gasCoin,this.formAdvanced.payload=this.form.payload,this.form.gasCoin="",this.form.payload=""},clearSignatureData(){this.form.signatureList=this.form.signatureList.map((()=>"")),this.signature=null},clearForm(){this.form.gasCoin="",this.form.payload="",this.form.multisigAddress="",this.form.signatureList=["",""],this.formAdvanced.gasCoin="",this.formAdvanced.payload="",this.form.nonce&&this.$store.getters.isOfflineMode?this.form.nonce=Number(this.form.nonce)+1:this.form.nonce="",this.form.gasPrice="",this.$v.$reset(),this.$txData.$reset(),this.$emit("clear-form")},getExplorerTxUrl:E.i}},W=Object(z.a)(Q,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"panel"},[r("div",{staticClass:"panel__header"},[e._t("panel-header")],2),e._v(" "),e._t("extra-panel",null,{fee:e.fee,addressBalance:e.balance}),e._v(" "),r("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submitConfirm(t)}}},[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[e._t("default",null,{fee:e.fee,addressBalance:e.balance}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced&&e.isShowGasCoin,expression:"showAdvanced && isShowGasCoin"}],staticClass:"u-cell u-cell--xlarge--1-4 u-cell--xlarge--order-2"},[r("FieldCoin",{attrs:{$value:e.$v.form.gasCoin,label:e.$td("Coin to pay fee","form.fee"),"coin-list":e.gasSuitableBalance},model:{value:e.form.gasCoin,callback:function(t){e.$set(e.form,"gasCoin",t)},expression:"form.gasCoin"}}),e._v(" "),e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.notLp?r("span",{staticClass:"form-field__error"},[e._v("LP tokens not allowed")]):e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.fee?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.fee.error))]):e.$store.getters.isOfflineMode?r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Equivalent of "+e.$store.getters.COIN_NAME+" "+e.pretty(e.fee.baseCoinValue),"form.fee-help",{value:e.pretty(e.fee.baseCoinValue),coin:e.$store.getters.COIN_NAME})))]):r("div",{staticClass:"form-field__help"},[e._v("\n                    "+e._s(e.pretty(e.fee.value))+" "+e._s(e.fee.coinSymbol)+"\n                    "),e.fee.isBaseCoin?e._e():r("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.pretty(e.fee.baseCoinValue))+" "+e._s(e.$store.getters.COIN_NAME)+")")])])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced&&e.isShowPayload,expression:"showAdvanced && isShowPayload"}],staticClass:"u-cell",class:{"u-cell--xlarge--3-4":e.isShowGasCoin}},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.payload.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.payload,expression:"form.payload",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text","data-test-id":"walletTxFormInputPayload"},domProps:{value:e.form.payload},on:{blur:[function(t){return e.$v.form.payload.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"payload",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Message","form.message")))])]),e._v(" "),e.$v.form.payload.$dirty&&!e.$v.form.payload.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 10000 symbols, given "+e.payloadLength,"form.message-error-max")))]):e._e(),e._v(" "),e.$v.form.payload.$dirty&&!e.$v.form.payload.isNotMnemonic?r("span",{staticClass:"form-field__error",attrs:{"data-test-id":"payloadIsMnemonicErrorMessage"}},[e._v(e._s(e.$td("Message contains seed phrase","form.message-error-contains-seed")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Any additional information about the transaction. Please note it will be stored on the blockchain and visible to anyone.","form.message-help")))])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced,expression:"showAdvanced"}],staticClass:"u-cell u-cell--xlarge--1-2 u-cell--xlarge--order-2"},[r("FieldDomain",{attrs:{$value:e.$v.form.multisigAddress,valueType:"address",label:e.$td("Multisig address","form.multisig-address")},on:{"update:domain":function(t){e.multisigDomain=t},"update:resolving":function(t){e.isMultisigDomainResolving=t}},model:{value:e.form.multisigAddress,callback:function(t){e.$set(e.form,"multisigAddress","string"==typeof t?t.trim():t)},expression:"form.multisigAddress"}})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced&&!e.$store.getters.isOfflineMode,expression:"showAdvanced && !$store.getters.isOfflineMode"}],staticClass:"u-cell u-cell--xlarge--1-2 u-cell--xlarge--order-2 u-hidden-xlarge-down"}),e._v(" "),e.$store.getters.isOfflineMode?r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--small--1-2 u-cell--order-2"},[r("FieldQr",{attrs:{$value:e.$v.form.nonce,label:e.$td("Nonce","form.checks-issue-nonce"),isInteger:!0},model:{value:e.form.nonce,callback:function(t){e.$set(e.form,"nonce",t)},expression:"form.nonce"}}),e._v(" "),e.$v.form.nonce.$error&&!e.$v.form.nonce.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter nonce","form.checks-issue-nonce-error-required")))]):e.$v.form.nonce.$dirty&&!e.$v.form.nonce.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum nonce is 1","form.generate-nonce-error-min")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Tx's unique ID. Should be: current user's tx count + 1","form.generate-nonce-help")))])],1):e._e(),e._v(" "),e.$store.getters.isOfflineMode?r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--small--1-2 u-cell--order-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.gasPrice.$error}},[r("InputMaskedInteger",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.gasPrice.$touch()}},model:{value:e.form.gasPrice,callback:function(t){e.$set(e.form,"gasPrice",t)},expression:"form.gasPrice"}}),e._v(" "),e.$v.form.gasPrice.$dirty&&!e.$v.form.gasPrice.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum gas price is 1","form.gas-price-error-min")))]):e._e(),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Gas Price","form.gas-price")))])],1),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Default:","form.help-default"))+" 1")])]):e._e(),e._v(" "),e.showSwitcherAdvanced?e._e():r("div",{staticClass:"u-cell u-cell--1-2 u-cell--xlarge--1-4 u-cell--order-2 u-cell--align-center"},[e.showAdvanced?r("button",{staticClass:"link--default u-semantic-button",attrs:{type:"button","data-test-id":"walletTxFormHideAdvanced"},on:{click:e.switchToSimple}},[e._v("\n                    "+e._s(e.$td("Simple mode","form.toggle-simple-mode"))+"\n                ")]):e._e(),e._v(" "),e.showAdvanced?e._e():r("button",{staticClass:"link--default u-semantic-button",attrs:{type:"button","data-test-id":"walletTxFormShowAdvanced"},on:{click:e.switchToAdvanced}},[e._v("\n                    "+e._s(e.$td("Advanced mode","form.toggle-advanced-mode"))+"\n                ")])]),e._v(" "),e.showSwitcherAdvanced?r("div",{staticClass:"u-cell u-cell--1-2 u-cell--xlarge--1-4 u-cell--order-2 u-hidden-xlarge-down"}):e._e(),e._v(" "),r("div",{staticClass:"u-cell u-cell--1-2 u-cell--xlarge--1-4 u-cell--order-2"},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced,expression:"showAdvanced"}],staticClass:"button button--ghost-main button--full",class:{"is-disabled":e.$v.form.multisigAddress.$invalid,"is-loading":e.isSigning},attrs:{type:"button"},on:{click:e.signTx}},[r("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Sign","form.multisig-sign")))]),e._v(" "),r("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1)]),e._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-2 u-cell--order-2"},[e.$store.getters.isOfflineMode?r("button",{staticClass:"button button--main button--full",class:{"is-disabled":e.$v.$invalid}},[e._v("\n                    "+e._s(e.$td("Generate","form.generate-button"))+"\n                ")]):e._e(),e._v(" "),e.$store.getters.isOfflineMode?e._e():r("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending,"is-disabled":e.$v.$invalid},attrs:{"data-test-id":"txSubmitButton"}},[r("span",{staticClass:"button__content"},[e._t("submit-title",[e._v("\n                            "+e._s(e.$td("Send","form.wallet-send-button"))+"\n                        ")])],2),e._v(" "),r("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?r("div",{staticClass:"form-field__error",attrs:{"data-test-id":"txErrorMessage"}},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.signature?r("div",{staticClass:"u-cell u-cell--order-2"},[r("dl",[r("dt",[e._v(e._s(e.$td("Signature","form.multisig-result-signature")))]),e._v(" "),r("dd",{staticClass:"u-icon-wrap"},[r("span",{staticClass:"u-select-all u-icon-text"},[e._v("\n                            "+e._s(e.signature)+"\n                        ")]),e._v(" "),r("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.signature}})],1)])]):e._e(),e._v(" "),e.signedTx?r("div",{staticClass:"u-cell u-cell--order-2"},[r("dl",[r("dt",[e._v(e._s(e.$td("Signed tx:","form.generate-result-tx")))]),e._v(" "),r("dd",{staticClass:"u-icon-wrap"},[r("span",{staticClass:"u-select-all u-icon-text"},[e._v("\n                            "+e._s(e.signedTx)+"\n                        ")]),e._v(" "),r("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.signedTx}})],1)]),e._v(" "),r("br"),e._v(" "),r("qrcode-vue",{attrs:{value:e.signedTx,size:200,level:"L"}})],1):e._e()],2)]),e._v(" "),e.$slots["panel-footer"]?r("div",{staticClass:"panel__section panel__section--tint"},[e._t("panel-footer")],2):e._e(),e._v(" "),r("Modal",{attrs:{isOpen:e.isConfirmModalVisible},on:{"update:isOpen":function(t){e.isConfirmModalVisible=t},"update:is-open":function(t){e.isConfirmModalVisible=t}}},[r("div",{staticClass:"panel"},[r("div",{staticClass:"panel__header"},[e._t("confirm-modal-header",[r("h1",{staticClass:"panel__header-title"},[e._v("\n                        "+e._s(e.$td("Send transaction","form.confirm-title"))+"\n                    ")])])],2),e._v(" "),e.$slots["confirm-modal-body"]?r("div",{staticClass:"panel__section"},[e._t("confirm-modal-body")],2):e._e(),e._v(" "),e.form.multisigAddress?r("div",{staticClass:"panel__section"},[r("SignatureList",{model:{value:e.form.signatureList,callback:function(t){e.$set(e.form,"signatureList",t)},expression:"form.signatureList"}})],1):e._e(),e._v(" "),r("div",{staticClass:"panel__section u-text-left"},[r("div",{staticClass:"form-field form-field--dashed"},[r("div",{staticClass:"form-field__input is-not-empty"},[r("BaseAmount",{attrs:{coin:e.fee.coinSymbol,amount:e.fee.value,"base-coin-amount":e.fee.baseCoinValue}}),e._v(" "),e.fee.priceCoin.id>0?r("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.pretty(e.fee.priceCoinValue))+" "+e._s(e.fee.priceCoin.symbol)+")")]):e._e()],1),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Fee","form.fee-amount")))])]),e._v(" "),e.fee.isHighFee?r("div",{staticClass:"u-mt-10 u-fw-700"},[r("span",{staticClass:"u-emoji"},[e._v("⚠️")]),e._v(" Transaction requires high fee.")]):e._e()]),e._v(" "),r("div",{staticClass:"panel__section"},[r("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending},attrs:{type:"button","data-test-id":"txModalSubmitButton","data-focus-on-open":""},on:{click:e.submit}},[r("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Confirm","form.submit-confirm-button")))]),e._v(" "),r("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.isFormSending?e._e():r("button",{staticClass:"button button--ghost-main button--full",attrs:{type:"button"},on:{click:function(t){e.isConfirmModalVisible=!1}}},[e._v("\n                    "+e._s(e.$td("Cancel","form.submit-cancel-button"))+"\n                ")])]),e._v(" "),e.$slots["confirm-modal-footer"]?r("div",{staticClass:"panel__section"},[e._t("confirm-modal-footer")],2):e._e()])]),e._v(" "),r("Modal",{attrs:{isOpen:e.isSuccessModalVisible},on:{"update:isOpen":function(t){e.isSuccessModalVisible=t},"update:is-open":function(t){e.isSuccessModalVisible=t}}},[r("div",{staticClass:"panel"},[r("div",{staticClass:"panel__header"},[e._t("success-modal-header",[r("h1",{staticClass:"panel__header-title"},[e._v("\n                        "+e._s(e.$td("Success!","form.success-title"))+"\n                    ")])])],2),e._v(" "),r("div",{staticClass:"panel__section u-text-left"},[e._t("success-modal-body",[r("strong",[e._v(e._s(e.$td("Tx sent:","form.tx-sent")))]),e._v(" "),e.serverSuccess?r("a",{staticClass:"link--default u-text-break",attrs:{href:e.getExplorerTxUrl(e.serverSuccess.hash),target:"_blank"}},[e._v(e._s(e.serverSuccess.hash))]):e._e()]),e._v(" "),e._t("success-modal-body-extra",null,{successTx:e.serverSuccess})],2),e._v(" "),r("div",{staticClass:"panel__section"},[e._t("success-modal-button",[e.serverSuccess?r("a",{staticClass:"button button--main button--full",attrs:{href:e.getExplorerTxUrl(e.serverSuccess.hash),target:"_blank"}},[e._v("\n                        "+e._s(e.$td("View transaction","form.success-view-button"))+"\n                    ")]):e._e()]),e._v(" "),r("button",{staticClass:"button button--ghost-main button--full",attrs:{type:"button","data-test-id":"txModalSuccessClose"},on:{click:function(t){e.isSuccessModalVisible=!1}}},[e._v("\n                    "+e._s(e.$td("Close","form.success-close-button"))+"\n                ")])],2)])])],2)}),[],!1,null,null,null);t.a=W.exports},652:function(e,t,r){"use strict";r(100);var n=r(35),o=r(149),l=r(679),c=r(75),d=r(659),m={ADDRESS:"address",PUBLIC_KEY:"publicKey"},f={ideFix:null,VALUE_TYPE:m,components:{FieldQr:d.a},inheritAttrs:!1,suggestionValidatorFilter:c.y,suggestionValidatorContent:c.x,props:{valueType:{type:String,required:!0},value:{type:[String,Number],required:!0},$value:{type:Object,required:!0},label:{type:String,required:!0},help:{type:String,default:""},suggestionList:{type:Array,default:void 0},suggestionDisabled:{type:Boolean,default:!1},suggestionMinInputLength:{type:Number,default:void 0}},data(){return{domain:this.value,isResolving:0,mnsResolveDomain:Object(l.a)()}},computed:{validatorList(){if(this.valueType===m.PUBLIC_KEY)return this.$store.state.validatorList.map((e=>({name:e.name||"",value:e.publicKey})))}},methods:{handleInput(e){e=e.trim(),Object(l.c)(e)?(this.resolveDomain(e,{throttle:!0}),this.$emit("input",""),this.$emit("update:domain",e),this.domain=e):(this.$emit("input",e),this.$emit("update:domain",""),this.domain="")},handleBlur(){this.domain&&this.resolveDomain(this.domain)},resolveDomain(e){var{throttle:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Object(l.d)(e))return this.isResolving+=1,this.$emit("update:resolving",!!this.isResolving),this.mnsResolveDomain(e,{throttle:t}).then((e=>{"address"===this.valueType&&Object(n.c)(e.address)&&Object(l.b)(e)?this.$emit("input",e.address):"publicKey"===this.valueType&&Object(o.a)(e.publickey)&&Object(l.b)(e)&&this.$emit("input",e.publickey),this.isResolving-=1,this.$emit("update:resolving",!!this.isResolving)})).catch((()=>{this.isResolving-=1,this.$emit("update:resolving",!!this.isResolving)}))}}},h=r(41),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("FieldQr",e._b({attrs:{value:e.domain?e.domain:e.value,$value:e.$value,label:e.label,suggestionList:e.suggestionDisabled?[]:e.suggestionList||e.validatorList,suggestionMinInputLength:e.suggestionMinInputLength,suggestionContent:e.$options.suggestionValidatorContent,suggestionFilter:e.$options.suggestionValidatorFilter},on:{input:e.handleInput,blur:e.handleBlur}},"FieldQr",e.$attrs,!1)),e._v(" "),e.valueType!==e.$options.VALUE_TYPE.ADDRESS||e.$value.$pending?e._e():[!e.$value.$dirty||e.$value.required||e.domain?!e.$value.$dirty||e.$value.validAddress||e.domain?e.$value.$dirty&&!e.$value.validAddress&&e.domain?r("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Address not found for such domain","form.wallet-send-domain-error-invalid"))+"\n        ")]):e._e():r("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Address is invalid","form.wallet-send-address-error-invalid"))+"\n        ")]):r("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Enter address","form.wallet-send-address-error-required"))+"\n        ")])],e._v(" "),e.valueType!==e.$options.VALUE_TYPE.PUBLIC_KEY||e.$value.$pending?e._e():[!e.$value.$dirty||e.$value.required||e.domain?!e.$value.$dirty||e.$value.validPublicKey||e.domain?e.$value.$dirty&&!e.$value.validPublicKey&&e.domain?r("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Public key not found for such domain","form.masternode-domain-error-invalid"))+"\n        ")]):e._e():r("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Public key is invalid","form.masternode-public-error-invalid"))+"\n        ")]):r("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Enter public key","form.masternode-public-error-required"))+"\n        ")])],e._v(" "),e.help?r("div",{staticClass:"form-field__help"},[e._v(e._s(e.help))]):e._e()],2)}),[],!1,null,null,null);t.a=component.exports},658:function(e,t,r){"use strict";var n=r(75),o={props:{amount:{type:[String,Number],required:!0},coin:{type:String,default:""},tag:{type:String,default:"span"},exact:{type:Boolean,default:!1},coinFirst:{type:Boolean,default:!1},baseCoinAmount:{type:[String,Number]}},computed:{amountUsd(){var e;return this.coin===this.$store.getters.BASE_COIN&&this.amount>0?e=this.amount:this.baseCoinAmount&&(e=this.baseCoinAmount),e*this.$store.getters["explorer/bipPriceUsd"]}},methods:{pretty:n.p,prettyExact:n.q,prettyAmount(e){return this.exact?Object(n.q)(e):Object(n.p)(e)}}},l=r(41),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.tag,{tag:"component"},[e.coinFirst?[e._v(e._s(e.coin))]:e._e(),e._v(" "),r("span",{attrs:{title:e.exact?"":e.prettyExact(e.amount)}},[e._v(e._s(e.prettyAmount(e.amount)))]),e._v(" "),e.coinFirst?e._e():[e._v(e._s(e.coin))],e._v(" "),e.baseCoinAmount&&e.coin!==e.$store.getters.BASE_COIN?r("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.pretty(e.baseCoinAmount))+" "+e._s(e.$store.getters.BASE_COIN)+")")]):e._e(),e._v(" "),e.amountUsd?r("span",{staticClass:"u-text-muted"},[e._v("($"+e._s(e.pretty(e.amountUsd))+")")]):e._e()],2)}),[],!1,null,null,null);t.a=component.exports},664:function(e,t,r){"use strict";var n=r(662),o=r(666),l={components:{InlineSvg:n.a,ButtonCopy:o.a},props:{copyText:{type:String,required:!0}}},c=r(41),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ButtonCopy",{staticClass:"u-icon u-semantic-button link--opacity",attrs:{"aria-label":"Copy","copy-text":e.copyText}},[r("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-copy.svg"}})],1)}),[],!1,null,null,null);t.a=component.exports},666:function(e,t,r){"use strict";var n=r(668),o={props:{copyText:{type:String,required:!0}},computed:{isClipboardSupported:()=>n.b()},methods:{copy(e){n.a(e)&&this.$store.commit("SET_SNACKBAR_ACTIVE")}}},l=r(41),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isClipboardSupported?r("button",{attrs:{type:"button"},on:{click:function(t){return e.copy(e.copyText)}}},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.a=component.exports},677:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var n=r(24),o=(r(21),r(17),r(678),r(22),r(1)),l=r(10),c=r(252),d=r(2),m=r(694),f=r(639),h=r(4),v=r(651),_=r(53),C=r(249);function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function x(e){var{txParams:t,baseCoinAmount:r=0,fallbackToCoinToSpend:n,isOffline:$}=e;return new o.a({data:{txParams:t,baseCoinAmount:r,fallbackToCoinToSpend:n,priceCoinFeeValue:0,baseCoinFeeValue:0,isBaseCoinEnough:!0,feeCoin:h.c,feeValue:"",feeError:"",coinList:{},commissionPriceData:null,isLoading:!1,isOffline:$},computed:{isBaseCoinFee(){return O(this.feeCoin)},isHighFee(){if(!this.commissionPriceData)return!1;var e=new c.a(this.commissionPriceData).getFeeValue(d.a.SEND);return e&&this.priceCoinFeeValue/e>=1e4},feeCoinSymbol(){return Object(f.h)(this.feeCoin)?this.coinList[this.feeCoin]:this.feeCoin},fee(){var e;return{priceCoinValue:this.priceCoinFeeValue,priceCoin:(null===(e=this.commissionPriceData)||void 0===e?void 0:e.coin)||{},baseCoinValue:this.baseCoinFeeValue,isBaseCoin:this.isBaseCoinFee,isBaseCoinEnough:this.isBaseCoinEnough,value:this.feeValue,coin:this.feeCoin,coinSymbol:this.feeCoinSymbol,isHighFee:this.isHighFee,error:this.feeError,isLoading:this.isLoading}}},watch:{fee:{handler(e){this.$emit("update-fee",e)},deep:!0}},created(){this.fetchCoinData(),this.$on("update-params",(function(e){Object.keys(e).forEach((t=>{this[t]=e[t]})),this.fetchCoinData()})),this.isOffline||Object(_.d)().then((e=>{var t={};e.forEach((e=>{t[e.id]=e.symbol})),this.coinList=Object.freeze(t)}))},methods:{getPrimaryCoinToCheck(){return S(this.txParams.gasCoin)?this.txParams.gasCoin:h.c},getSecondaryCoinToCheck(){if(!this.fallbackToCoinToSpend||S(this.txParams.gasCoin))return"";try{var e=y({},this.txParams),{gasCoin:t}=Object(m.a)(e,{setGasCoinAsCoinToSpend:!0});if(void 0!==t&&!O(t))return t}catch(e){}return""},fetchCoinData(){if(!this.isOffline){var e=this.getPrimaryCoinToCheck(),t=this.getSecondaryCoinToCheck(),r=Object(v.d)(y(y({},this.txParams),{},{chainId:h.g,gasCoin:e})),n=t&&t!==e?Object(v.d)(y(y({},this.txParams),{},{chainId:h.g,gasCoin:t})):Promise.reject();this.isLoading=!0,this.feeError="",Promise.allSettled([r,n]).then((r=>{var[n,o]=r;if(e===this.getPrimaryCoinToCheck()&&t===this.getSecondaryCoinToCheck()){var c=n.value,d=o.value;if(!c)throw new Error(n.reason);this.priceCoinFeeValue=c.priceCoinCommission,this.baseCoinFeeValue=c.baseCoinCommission,this.isBaseCoinEnough=new l.a(this.baseCoinAmount||0).gte(this.baseCoinFeeValue);var m=d&&!this.isBaseCoinEnough;this.feeCoin=m?t:e,this.feeValue=m?d.commission:c.commission,this.commissionPriceData=c.commissionPriceData,Object(f.h)(this.feeCoin),this.isLoading=!1}})).catch((r=>{e===this.getPrimaryCoinToCheck()&&t===this.getSecondaryCoinToCheck()&&(this.feeError=Object(C.a)(r),this.isLoading=!1)}))}}}})}function S(e){return!!e||0===e}function O(e){return e===h.c||0===e||"0"===e}},679:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return f})),r.d(t,"c",(function(){return C})),r.d(t,"d",(function(){return $})),r.d(t,"b",(function(){return y}));r(21),r(7);var n=r(82),o=r.n(n),l=r(392),c=r(681),d=r(4),m=o.a.create({baseURL:d.y});function f(){var e,t,r,n,l;return function(o){var{throttle:m}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e===o?(m||(h(r),r=null),t):(e=o,h(n,{isCancel:!0}),h(l,{isCancel:!0}),n=null,l=null,t=m?d(700).then((()=>c(o))):c(o))};function c(e){return m.get("resolve",{params:{domain:e},cancelToken:new o.a.CancelToken((e=>{l=e}))}).then((e=>e.data))}function d(e){return new Promise(((t,o)=>{r=t,n=o,setTimeout(t,e)}))}}function h(e){var{isCancel:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"function"==typeof e&&e(t?"Request aborted":void 0)}var v=/^([a-z0-9][a-z0-9-_]*\.)+[a-z]*$/i,_=/^([a-z0-9][a-z0-9-_]*\.)+[a-z]{2,}$/i;function C(e){return v.test(e)}function $(e){return _.test(e)}function y(t){var{address:address,publickey:r,ticker:n,signature:o}=t,m=address+r+n,f=Object(l.keccak)(m),h=e.from(o.r,"hex"),s=e.from(o.s,"hex");return"Mp"+Object(c.ecrecover)(f,o.v,h,s).toString("hex")===d.z}}).call(this,r(3).Buffer)}}]);