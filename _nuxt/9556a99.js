(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{739:function(e,t,n){"use strict";n(31),n(61),n(66);var r=n(0),o=n(39),l=n(60),c=(n(1),n(35),n(131),n(37),n(43),n(11),n(52),n(95),n(16),n(36),n(765)),d=n(732),f=n(733),m=n.n(f),v=n(747),h=n.n(v),_=n(734),C=n.n(_),$=n(737),y=n(5),x=n(54),O=n(146),S=n(771),w=n(742),A=n(108),E=n(767),P=n(730),L=n(326),j=n(117),M=n(12),T=n(741),D=n(743),k=n(751),F=n(762),V=n(754),B=n(744),N=n(755),I=(n(68),n(328),n(738)),R=n.n(I);function U(e){return e.map((function(e){return{signature:e}}))}var K={directives:{autosize:$.a,checkEmpty:P.a},mixins:[d.validationMixin],props:{value:{type:Array,required:!0}},data:function(){return{list:U(this.value)}},validations:function(){return{list:{minLength:C()(1),maxLength:R()(32),$each:{signature:{required:m.a}}}}},computed:{listHash:function(){var e=this.list.reduce((function(e,t){return e+t.signature}),"");return this.list.length.toString()+e}},watch:{value:function(e){this.list=U(e)},listHash:function(){this.updateModel()}},methods:{addParticipant:function(){this.list.push({signature:""})},removeParticipant:function(e){var t=this;setTimeout((function(){t.list.splice(e,1)}),100)},updateModel:function(){this.$emit("input",this.list.map((function(e){return e.signature})))}}},z=n(59),H=Object(z.a)(K,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[e._l(e.$v.list.$each.$iter,(function(t,r){return n("div",{key:r,staticClass:"multisig-signature__cell u-cell"},[n("label",{staticClass:"form-field multisig-signature__field",class:{"is-error":t.signature.$error}},[n("textarea",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model.trim",value:t.signature.$model,expression:"v.signature.$model",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{autocapitalize:"off",spellcheck:"false",rows:"1"},domProps:{value:t.signature.$model},on:{blur:[function(e){return t.signature.$touch()},function(t){return e.$forceUpdate()}],input:function(n){n.target.composing||e.$set(t.signature,"$model",n.target.value.trim())}}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Signature","form.multisig-signature-list-item"))+" #"+e._s(Number(r)+1))])]),e._v(" "),r>0?n("button",{staticClass:"multisig-signature__remove u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(t){return e.removeParticipant(r)}}},[n("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-remove.svg",alt:"Remove signature"}})]):e._e(),e._v(" "),t.signature.$dirty&&!t.signature.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter signature","form.multisig-signature-list-item-error-required")))]):e._e()])})),e._v(" "),n("div",{staticClass:"u-cell u-text-left"},[n("button",{staticClass:"button button--ghost",attrs:{type:"button"},on:{click:e.addParticipant}},[e._v("\n            "+e._s(e.$td("+ Add signature","form.multisig-signature-list-add"))+"\n        ")])])],2)}),[],!1,null,null,null).exports;function Y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Y(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):Y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function Q(e){var t={};return Object.keys(e).forEach((function(n){(e[n]||0===e[n]||!1===e[n])&&(t[n]=e[n])})),t}var W={feeBus:null,components:{QrcodeVue:c.a,FieldCoin:T.a,FieldDomain:D.a,FieldQr:k.a,InputMaskedInteger:F.a,ButtonCopyIcon:V.a,Loader:B.a,Modal:N.a,SignatureList:H},directives:{autosize:$.a,checkEmpty:P.a},mixins:[d.validationMixin],props:{txData:{type:Object,required:!0},$txData:{type:Object,required:!0,validator:function(e){return"boolean"==typeof e.$error&&"boolean"==typeof e.$dirty&&"boolean"==typeof e.$invalid&&"object"===Object(l.a)(e.$model)&&"object"===Object(l.a)(e.$params)}},txType:{type:String,required:!0},beforeConfirmModalShow:{type:[Function,null],default:null},alwaysAdvanced:{type:Boolean,default:!1}},fetch:function(){var e=this;return Object(A.i)(this.$store.getters.BASE_COIN,1).then((function(t){e.swapBaseCoinList=t}))},data:function(){return{isFormSending:!1,serverError:"",serverSuccess:null,form:{nonce:"",gasCoin:"",payload:"",signatureList:["",""],multisigAddress:"",gasPrice:""},formAdvanced:{gasCoin:"",payload:""},isModeAdvanced:!1,fee:{},isConfirmModalVisible:!1,isSuccessModalVisible:!1,isSigning:!1,signature:null,signedTx:null,multisigDomain:"",isMultisigDomainResolving:!1,swapBaseCoinList:[]}},validations:function(){var e=this,form={gasCoin:{minLength:this.$store.getters.isOfflineMode?function(){return!0}:C()(3),fee:function(){return!!e.$store.getters.isOfflineMode||!e.fee.error}},payload:{maxLength:function(t){return e.payloadLength<=1e4},isNotMnemonic:function(e){return!Object(O.b)(e)}},multisigAddress:{required:function(){return!0},validAddress:this.isMultisigDomainResolving?function(){return new Promise((function(){return 0}))}:this.form.multisigAddress?x.c:function(){return!0}},nonce:{}};return this.$store.getters.isOfflineMode&&(form.nonce={required:m.a,minValue:h()(1)},form.gasPrice={minValue:h()(1)}),{form:form,txData:{valid:function(){return!e.$txData.$invalid}}}},computed:{balance:function(){var e;return this.form.multisigAddress&&(e=[]),e=this.$store.getters.balance,this.$emit("update:addressBalance",e),e},gasSuitableBalance:function(){var e=this;return this.balance.filter((function(t){return t.coin.type===M.h.COIN||!!e.swapBaseCoinList.find((function(e){return e.id===t.coin.id}))}))},isShowPayload:function(){return this.txType!==y.a.REDEEM_CHECK},isShowGasCoin:function(){return this.txType!==y.a.REDEEM_CHECK&&this.txType!==y.a.SELL_ALL},showAdvanced:function(){return this.alwaysAdvanced||this.isModeAdvanced||this.$store.getters.isOfflineMode},showSwitcherAdvanced:function(){return this.alwaysAdvanced||this.$store.getters.isOfflineMode},whatAffectsTxHash:function(){return[this.form.gasCoin,this.form.gasPrice,this.form.nonce,this.form.payload,this.txData]},payloadLength:function(){return new Blob([this.form.payload]).size},feeBusParams:function(){var e,t=this.txType,n=this.txData;return t!==y.a.BUY_SWAP_POOL&&t!==y.a.SELL_SWAP_POOL&&t!==y.a.SELL_ALL_SWAP_POOL||n.coins.length-1,t===y.a.MULTISEND&&n.list.length,{txParams:{gasCoin:this.form.gasCoin,payload:this.form.payload,type:t,data:n},baseCoinAmount:null===(e=this.$store.getters.baseCoin)||void 0===e?void 0:e.amount,isOffline:this.$store.getters.isOfflineMode}}},watch:{feeBusParams:{handler:function(e){this.$options.feeBus&&"function"==typeof this.$options.feeBus.$emit&&this.$options.feeBus.$emit("update-params",e)},deep:!0},"form.multisigAddress":{handler:function(e,t){!!e!=!!t&&this.$emit("update:isMultisigAddress",!!e),t&&this.clearSignatureData()}},form:{handler:function(e){this.$emit("update:txForm",e)},deep:!0},whatAffectsTxHash:{handler:function(){this.clearSignatureData()},deep:!0}},created:function(){var e=this;this.$options.feeBus=new E.a(this.feeBusParams),this.fee=this.$options.feeBus.fee,this.$options.feeBus.$on("update-fee",(function(t){e.fee=t}))},methods:{pretty:function(e){return Object(j.p)(e,void 0,!0)},prettyExact:j.q,submitConfirm:function(){var e=this;if(!this.isFormSending){if(this.$v.$invalid)return this.$v.$touch(),void this.$txData.$touch();var t;"function"==typeof this.beforeConfirmModalShow&&(t=this.beforeConfirmModalShow(this)),t&&"function"==typeof t.then||(t=Promise.resolve()),t.then((function(){e.$store.getters.isOfflineMode?e.submit():e.isConfirmModalVisible=!0})).catch((function(e){console.log(e)}))}},submit:function(){this.isConfirmModalVisible=!1,this.isSuccessModalVisible=!1,this.signature=null,this.signedTx=null,this.serverError="",this.serverSuccess=null,this.$emit("success-tx",null),this.$store.getters.isOfflineMode?this.generateTx():this.postTx()},generateTx:function(){var e;try{e=this.form.multisigAddress?Object(S.c)(this.getTxParamsMultisigData(),{address:this.form.multisigAddress}):Object(S.c)(this.getTxParams(),{privateKey:this.$store.getters.privateKey})}catch(e){return console.log(e),void(this.serverError=e.message)}this.signedTx=e.serializeToString(),this.clearForm()},postTx:function(){var e,t=this;if(this.isFormSending=!0,this.form.multisigAddress){var n=this.getTxParamsMultisigData();e=Promise.all([Object(w.a)(n,{address:this.form.multisigAddress}),Object(w.j)(n)]).then((function(e){var r=Object(o.a)(e,1)[0];return Object(w.i)(G(G({},n),{},{nonce:r}),{address:t.form.multisigAddress})}))}else{var r=this.getTxParams();e=Promise.all([Object(w.a)(r,{address:this.$store.getters.address}),Object(w.j)(r),this.$store.dispatch("FETCH_ADDRESS_ENCRYPTED")]).then((function(e){var n=Object(o.a)(e,1)[0];return Object(w.i)(G(G({},r),{},{nonce:n}),{privateKey:t.$store.getters.privateKey,gasRetryLimit:t.fee.isHighFee?0:2})}))}e.then((function(e){t.isFormSending=!1,t.serverSuccess=e,t.$emit("success-tx",t.serverSuccess),t.isSuccessModalVisible=!0,t.clearForm()})).catch((function(e){console.log(e),t.isFormSending=!1,t.serverError=Object(L.a)(e)}))},signTx:function(){var e=this;if(!this.isSigning&&this.form.multisigAddress){if(this.$v.$invalid)return this.$v.$touch(),void this.$txData.$touch();this.isSigning=!0,this.signature=null;var t=this.getTxParams();Promise.all([Object(w.a)(t,{address:this.form.multisigAddress}),Object(w.j)(t),this.$store.dispatch("FETCH_ADDRESS_ENCRYPTED")]).then((function(n){var r=Object(o.a)(n,1)[0],l=Object(S.c)(G(G({},t),{},{nonce:r}),{address:e.form.multisigAddress}),c=Object(S.b)(l,e.$store.getters.privateKey).toString("hex");e.signature="0x".concat(c),e.form.signatureList[0]=e.signature,e.isSigning=!1})).catch((function(t){console.log(t),e.serverError=t.message,e.isSigning=!1}))}},getTxParams:function(){return G(G({chainId:this.$store.getters.CHAIN_ID},Q(this.form)),{},{data:Q(this.txData),type:this.txType,gasCoin:this.fee.coin,signatureType:this.form.multisigAddress?2:1})},getTxParamsMultisigData:function(){var e;return G(G({},this.getTxParams()),{},{signatureData:{multisig:this.form.multisigAddress,signatures:null===(e=this.form.signatureList)||void 0===e?void 0:e.filter((function(e){return!!e}))}})},switchToAdvanced:function(){this.isModeAdvanced=!0,this.form.gasCoin=this.formAdvanced.gasCoin,this.form.payload=this.formAdvanced.payload},switchToSimple:function(){this.isModeAdvanced=!1,this.formAdvanced.gasCoin=this.form.gasCoin,this.formAdvanced.payload=this.form.payload,this.form.gasCoin="",this.form.payload=""},clearSignatureData:function(){this.form.signatureList=this.form.signatureList.map((function(){return""})),this.signature=null},clearForm:function(){this.form.gasCoin="",this.form.payload="",this.form.multisigAddress="",this.form.signatureList=["",""],this.formAdvanced.gasCoin="",this.formAdvanced.payload="",this.form.nonce&&this.$store.getters.isOfflineMode?this.form.nonce=Number(this.form.nonce)+1:this.form.nonce="",this.form.gasPrice="",this.$v.$reset(),this.$txData.$reset(),this.$emit("clear-form")},getExplorerTxUrl:j.i}},X=Object(z.a)(W,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[e._t("panel-header")],2),e._v(" "),e._t("extra-panel",null,{fee:e.fee,addressBalance:e.balance}),e._v(" "),n("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submitConfirm(t)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[e._t("default",null,{fee:e.fee,addressBalance:e.balance}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced&&e.isShowGasCoin,expression:"showAdvanced && isShowGasCoin"}],staticClass:"u-cell u-cell--xlarge--1-4 u-cell--xlarge--order-2"},[n("FieldCoin",{attrs:{$value:e.$v.form.gasCoin,label:e.$td("Coin to pay fee","form.fee"),"coin-list":e.gasSuitableBalance},model:{value:e.form.gasCoin,callback:function(t){e.$set(e.form,"gasCoin",t)},expression:"form.gasCoin"}}),e._v(" "),e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.minLength?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.fee?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.fee.error))]):e.$store.getters.isOfflineMode?n("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Equivalent of "+e.$store.getters.COIN_NAME+" "+e.pretty(e.fee.baseCoinValue),"form.fee-help",{value:e.pretty(e.fee.baseCoinValue),coin:e.$store.getters.COIN_NAME})))]):n("div",{staticClass:"form-field__help"},[e._v("\n                    "+e._s(e.fee.coin)+" "+e._s(e.pretty(e.fee.value))+"\n                    "),e.fee.isBaseCoin?e._e():n("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.$store.getters.COIN_NAME)+" "+e._s(e.pretty(e.fee.baseCoinValue))+")")])])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced&&e.isShowPayload,expression:"showAdvanced && isShowPayload"}],staticClass:"u-cell",class:{"u-cell--xlarge--3-4":e.isShowGasCoin}},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.form.payload.$error}},[n("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.payload,expression:"form.payload",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text","data-test-id":"walletTxFormInputPayload"},domProps:{value:e.form.payload},on:{blur:[function(t){return e.$v.form.payload.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"payload",t.target.value.trim())}}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Message","form.message")))])]),e._v(" "),e.$v.form.payload.$dirty&&!e.$v.form.payload.maxLength?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 10000 symbols, given "+e.payloadLength,"form.message-error-max")))]):e._e(),e._v(" "),e.$v.form.payload.$dirty&&!e.$v.form.payload.isNotMnemonic?n("span",{staticClass:"form-field__error",attrs:{"data-test-id":"payloadIsMnemonicErrorMessage"}},[e._v(e._s(e.$td("Message contains seed phrase","form.message-error-contains-seed")))]):e._e(),e._v(" "),n("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Any additional information about the transaction. Please note it will be stored on the blockchain and visible to anyone.","form.message-help")))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced,expression:"showAdvanced"}],staticClass:"u-cell u-cell--xlarge--1-2 u-cell--xlarge--order-2"},[n("FieldDomain",{attrs:{$value:e.$v.form.multisigAddress,valueType:"address",label:e.$td("Multisig address","form.multisig-address")},on:{"update:domain":function(t){e.multisigDomain=t},"update:resolving":function(t){e.isMultisigDomainResolving=t}},model:{value:e.form.multisigAddress,callback:function(t){e.$set(e.form,"multisigAddress","string"==typeof t?t.trim():t)},expression:"form.multisigAddress"}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced&&!e.$store.getters.isOfflineMode,expression:"showAdvanced && !$store.getters.isOfflineMode"}],staticClass:"u-cell u-cell--xlarge--1-2 u-cell--xlarge--order-2 u-hidden-xlarge-down"}),e._v(" "),e.$store.getters.isOfflineMode?n("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--small--1-2 u-cell--order-2"},[n("FieldQr",{attrs:{$value:e.$v.form.nonce,label:e.$td("Nonce","form.checks-issue-nonce"),isInteger:!0},model:{value:e.form.nonce,callback:function(t){e.$set(e.form,"nonce",t)},expression:"form.nonce"}}),e._v(" "),e.$v.form.nonce.$error&&!e.$v.form.nonce.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter nonce","form.checks-issue-nonce-error-required")))]):e.$v.form.nonce.$dirty&&!e.$v.form.nonce.minValue?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum nonce is 1","form.generate-nonce-error-min")))]):e._e(),e._v(" "),n("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Tx's unique ID. Should be: current user's tx count + 1","form.generate-nonce-help")))])],1):e._e(),e._v(" "),e.$store.getters.isOfflineMode?n("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--small--1-2 u-cell--order-2"},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.form.gasPrice.$error}},[n("InputMaskedInteger",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.gasPrice.$touch()}},model:{value:e.form.gasPrice,callback:function(t){e.$set(e.form,"gasPrice",t)},expression:"form.gasPrice"}}),e._v(" "),e.$v.form.gasPrice.$dirty&&!e.$v.form.gasPrice.minValue?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum gas price is 1","form.gas-price-error-min")))]):e._e(),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Gas Price","form.gas-price")))])],1),e._v(" "),n("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Default:","form.help-default"))+" 1")])]):e._e(),e._v(" "),e.showSwitcherAdvanced?e._e():n("div",{staticClass:"u-cell u-cell--1-2 u-cell--xlarge--1-4 u-cell--order-2 u-cell--align-center"},[e.showAdvanced?n("button",{staticClass:"link--default u-semantic-button",attrs:{type:"button","data-test-id":"walletTxFormHideAdvanced"},on:{click:e.switchToSimple}},[e._v("\n                    "+e._s(e.$td("Simple mode","form.toggle-simple-mode"))+"\n                ")]):e._e(),e._v(" "),e.showAdvanced?e._e():n("button",{staticClass:"link--default u-semantic-button",attrs:{type:"button","data-test-id":"walletTxFormShowAdvanced"},on:{click:e.switchToAdvanced}},[e._v("\n                    "+e._s(e.$td("Advanced mode","form.toggle-advanced-mode"))+"\n                ")])]),e._v(" "),e.showSwitcherAdvanced?n("div",{staticClass:"u-cell u-cell--1-2 u-cell--xlarge--1-4 u-cell--order-2 u-hidden-xlarge-down"}):e._e(),e._v(" "),n("div",{staticClass:"u-cell u-cell--1-2 u-cell--xlarge--1-4 u-cell--order-2"},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced,expression:"showAdvanced"}],staticClass:"button button--ghost-main button--full",class:{"is-disabled":e.$v.form.multisigAddress.$invalid,"is-loading":e.isSigning},attrs:{type:"button"},on:{click:e.signTx}},[n("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Sign","form.multisig-sign")))]),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1)]),e._v(" "),n("div",{staticClass:"u-cell u-cell--xlarge--1-2 u-cell--order-2"},[e.$store.getters.isOfflineMode?n("button",{staticClass:"button button--main button--full",class:{"is-disabled":e.$v.$invalid}},[e._v("\n                    "+e._s(e.$td("Generate","form.generate-button"))+"\n                ")]):e._e(),e._v(" "),e.$store.getters.isOfflineMode?e._e():n("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending,"is-disabled":e.$v.$invalid},attrs:{"data-test-id":"txSubmitButton"}},[n("span",{staticClass:"button__content"},[e._t("submit-title",[e._v("\n                            "+e._s(e.$td("Send","form.wallet-send-button"))+"\n                        ")])],2),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?n("div",{staticClass:"form-field__error",attrs:{"data-test-id":"txErrorMessage"}},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.signature?n("div",{staticClass:"u-cell u-cell--order-2"},[n("dl",[n("dt",[e._v(e._s(e.$td("Signature","form.multisig-result-signature")))]),e._v(" "),n("dd",{staticClass:"u-icon-wrap"},[n("span",{staticClass:"u-select-all u-icon-text"},[e._v("\n                            "+e._s(e.signature)+"\n                        ")]),e._v(" "),n("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.signature}})],1)])]):e._e(),e._v(" "),e.signedTx?n("div",{staticClass:"u-cell u-cell--order-2"},[n("dl",[n("dt",[e._v(e._s(e.$td("Signed tx:","form.generate-result-tx")))]),e._v(" "),n("dd",{staticClass:"u-icon-wrap"},[n("span",{staticClass:"u-select-all u-icon-text"},[e._v("\n                            "+e._s(e.signedTx)+"\n                        ")]),e._v(" "),n("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.signedTx}})],1)]),e._v(" "),n("br"),e._v(" "),n("qrcode-vue",{attrs:{value:e.signedTx,size:200,level:"L"}})],1):e._e()],2)]),e._v(" "),e.$slots["panel-footer"]?n("div",{staticClass:"panel__section panel__section--tint"},[e._t("panel-footer")],2):e._e(),e._v(" "),n("Modal",{attrs:{isOpen:e.isConfirmModalVisible},on:{"update:isOpen":function(t){e.isConfirmModalVisible=t},"update:is-open":function(t){e.isConfirmModalVisible=t}}},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[e._t("confirm-modal-header",[n("h1",{staticClass:"panel__header-title"},[e._v("\n                        "+e._s(e.$td("Send transaction","form.confirm-title"))+"\n                    ")])])],2),e._v(" "),e.$slots["confirm-modal-body"]?n("div",{staticClass:"panel__section"},[e._t("confirm-modal-body")],2):e._e(),e._v(" "),e.form.multisigAddress?n("div",{staticClass:"panel__section"},[n("SignatureList",{model:{value:e.form.signatureList,callback:function(t){e.$set(e.form,"signatureList",t)},expression:"form.signatureList"}})],1):e._e(),e._v(" "),n("div",{staticClass:"panel__section u-text-left"},[n("div",{staticClass:"form-field form-field--dashed"},[n("div",{staticClass:"form-field__input is-not-empty"},[e._v("\n                        "+e._s(e.pretty(e.fee.value))+" "+e._s(e.fee.coin)+"\n                        "),e.fee.isBaseCoin?e._e():n("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.pretty(e.fee.baseCoinValue))+" "+e._s(e.$store.getters.COIN_NAME)+")")]),e._v(" "),e.fee.priceCoin.id>0?n("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.pretty(e.fee.priceCoinValue))+" "+e._s(e.fee.priceCoin.symbol)+")")]):e._e()]),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Fee","form.fee-amount")))])]),e._v(" "),e.fee.isHighFee?n("div",{staticClass:"u-mt-10 u-fw-700"},[n("span",{staticClass:"u-emoji"},[e._v("⚠️")]),e._v(" Transaction requires high fee.")]):e._e()]),e._v(" "),n("div",{staticClass:"panel__section"},[n("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending},attrs:{type:"button","data-test-id":"txModalSubmitButton","data-focus-on-open":""},on:{click:e.submit}},[n("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Confirm","form.submit-confirm-button")))]),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.isFormSending?e._e():n("button",{staticClass:"button button--ghost-main button--full",attrs:{type:"button"},on:{click:function(t){e.isConfirmModalVisible=!1}}},[e._v("\n                    "+e._s(e.$td("Cancel","form.submit-cancel-button"))+"\n                ")])]),e._v(" "),e.$slots["confirm-modal-footer"]?n("div",{staticClass:"panel__section"},[e._t("confirm-modal-footer")],2):e._e()])]),e._v(" "),n("Modal",{attrs:{isOpen:e.isSuccessModalVisible},on:{"update:isOpen":function(t){e.isSuccessModalVisible=t},"update:is-open":function(t){e.isSuccessModalVisible=t}}},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[e._t("success-modal-header",[n("h1",{staticClass:"panel__header-title"},[e._v("\n                        "+e._s(e.$td("Success!","form.success-title"))+"\n                    ")])])],2),e._v(" "),n("div",{staticClass:"panel__section u-text-left"},[e._t("success-modal-body",[n("strong",[e._v(e._s(e.$td("Tx sent:","form.tx-sent")))]),e._v(" "),e.serverSuccess?n("a",{staticClass:"link--default u-text-break",attrs:{href:e.getExplorerTxUrl(e.serverSuccess.hash),target:"_blank"}},[e._v(e._s(e.serverSuccess.hash))]):e._e()]),e._v(" "),e._t("success-modal-body-extra",null,{successTx:e.serverSuccess})],2),e._v(" "),n("div",{staticClass:"panel__section"},[e._t("success-modal-button",[e.serverSuccess?n("a",{staticClass:"button button--main button--full",attrs:{href:e.getExplorerTxUrl(e.serverSuccess.hash),target:"_blank"}},[e._v("\n                        "+e._s(e.$td("View transaction","form.success-view-button"))+"\n                    ")]):e._e()]),e._v(" "),n("button",{staticClass:"button button--ghost-main button--full",attrs:{type:"button","data-test-id":"txModalSuccessClose"},on:{click:function(t){e.isSuccessModalVisible=!1}}},[e._v("\n                    "+e._s(e.$td("Close","form.success-close-button"))+"\n                ")])],2)])])],2)}),[],!1,null,null,null);t.a=X.exports},741:function(e,t,n){"use strict";var r=n(60),o=n(327),l=(n(35),n(52),n(749),n(7),n(776)),c=n(730),d=n(117),f=n(12),m=n(108),v=n(757);function h(e,t){return t===f.h.ANY||(t===f.h.ANY_TOKEN?e===f.h.TOKEN||e===f.h.POOL_TOKEN:e===t)}var _={ideFix:null,MAX_ITEM_COUNT:6,components:{VueSimpleSuggest:l.a,InputUppercase:v.a},directives:{checkEmpty:c.a},inheritAttrs:!1,props:{value:{type:String,default:""},$value:{type:Object,required:!0},label:{type:String,required:!0},coinList:{type:Array,default:function(){return[]}},coinType:{type:String,default:f.h.ANY}},data:function(){return{coinListAll:[]}},computed:{listeners:function(){var e=this.$listeners,t=(e.input,Object(o.a)(e,["input"]));return t},isConListSpecified:function(){return this.coinList&&this.coinList.length},currentCoinList:function(){var e=this;return this.isConListSpecified?this.coinList.filter((function(t){return"object"!==Object(r.a)(t)||h(t.coin.type,e.coinType)})):this.coinListAll.filter((function(t){return h(t.type,e.coinType)})).map((function(e){return e.symbol}))},maxSuggestions:function(){return this.isConListSpecified?0:6}},watch:{currentCoinList:function(){var e=this.$refs.vss;e.canSend?e.research():e.getSuggestions(e.text).then((function(t){e.$set(e,"suggestions",t)}))}},mounted:function(){var e=this;this.$store.getters.isOfflineMode||Object(m.d)().then((function(t){e.coinListAll=Object.freeze(t)})).catch((function(e){console.log(e)}))},methods:{suggestionOrder:function(e){return e?this.currentCoinList.slice(0).sort((function(a,b){return a===e?-1:b===e?1:0})):this.currentCoinList},suggestionFilter:function(e,t){return!t||0===this.getSuggestionCoin(e).indexOf(t)},handleSuggestionClick:function(e,t){t.preventDefault()},getSuggestionCoin:function(e){var t;return(null===(t=e.coin)||void 0===t?void 0:t.symbol)||e},getSuggestionAmount:function(e){var t=e.value||e.amount;return t?"(".concat(Object(d.p)(t),")"):""}}},C=n(59),component=Object(C.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"form-field",class:{"is-error":e.$value.$error}},[n("VueSimpleSuggest",{ref:"vss",attrs:{value:e.value,list:e.suggestionOrder,"max-suggestions":e.maxSuggestions,"min-length":0,"filter-by-query":!0,filter:e.suggestionFilter,"display-attribute":"coin.symbol","value-attribute":"coin.symbol",destyled:!0,controls:{showList:[38,40]}},on:{input:function(t){return e.$emit("input",t)},blur:function(t){e.$value.$touch(),e.$emit("blur",t)},"suggestion-click":e.handleSuggestionClick},scopedSlots:e._u([{key:"suggestion-item",fn:function(t){var r=t.suggestion;return n("span",{},[e._v("\n            "+e._s(e.getSuggestionCoin(r))),e.getSuggestionAmount(r)?n("span",[e._v(" "+e._s(e.getSuggestionAmount(r)))]):e._e()])}}])},[n("InputUppercase",e._b({directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",value:e.value}},"InputUppercase",e.$attrs,!1)),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.label))])],1)],1)}),[],!1,null,null,null);t.a=component.exports},743:function(e,t,n){"use strict";n(95),n(52),n(32),n(132);var r=n(54),o=n(191),l=n(769),c=n(117),d=n(751),f={ADDRESS:"address",PUBLIC_KEY:"publicKey"},m={ideFix:null,VALUE_TYPE:f,components:{FieldQr:d.a},inheritAttrs:!1,suggestionValidatorFilter:c.y,suggestionValidatorContent:c.x,props:{valueType:{type:String,required:!0},value:{type:[String,Number],required:!0},$value:{type:Object,required:!0},label:{type:String,required:!0},help:{type:String,default:""},suggestionList:{type:Array,default:void 0},suggestionDisabled:{type:Boolean,default:!1},suggestionMinInputLength:{type:Number,default:void 0}},data:function(){return{domain:this.value,isResolving:0,mnsResolveDomain:Object(l.a)()}},computed:{validatorList:function(){if(this.valueType===f.PUBLIC_KEY)return this.$store.state.validatorList.map((function(e){return{name:e.name||"",value:e.publicKey}}))}},methods:{handleInput:function(e){e=e.trim(),Object(l.c)(e)?(this.resolveDomain(e,{throttle:!0}),this.$emit("input",""),this.$emit("update:domain",e),this.domain=e):(this.$emit("input",e),this.$emit("update:domain",""),this.domain="")},handleBlur:function(){this.domain&&this.resolveDomain(this.domain)},resolveDomain:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=n.throttle;if(Object(l.d)(e))return this.isResolving+=1,this.$emit("update:resolving",!!this.isResolving),this.mnsResolveDomain(e,{throttle:c}).then((function(e){"address"===t.valueType&&Object(r.c)(e.address)&&Object(l.b)(e)?t.$emit("input",e.address):"publicKey"===t.valueType&&Object(o.a)(e.publickey)&&Object(l.b)(e)&&t.$emit("input",e.publickey),t.isResolving-=1,t.$emit("update:resolving",!!t.isResolving)})).catch((function(){t.isResolving-=1,t.$emit("update:resolving",!!t.isResolving)}))}}},v=n(59),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FieldQr",e._b({attrs:{value:e.domain?e.domain:e.value,$value:e.$value,label:e.label,suggestionList:e.suggestionDisabled?[]:e.suggestionList||e.validatorList,suggestionMinInputLength:e.suggestionMinInputLength,suggestionContent:e.$options.suggestionValidatorContent,suggestionFilter:e.$options.suggestionValidatorFilter},on:{input:e.handleInput,blur:e.handleBlur}},"FieldQr",e.$attrs,!1)),e._v(" "),e.valueType!==e.$options.VALUE_TYPE.ADDRESS||e.$value.$pending?e._e():[!e.$value.$dirty||e.$value.required||e.domain?!e.$value.$dirty||e.$value.validAddress||e.domain?e.$value.$dirty&&!e.$value.validAddress&&e.domain?n("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Address not found for such domain","form.wallet-send-domain-error-invalid"))+"\n        ")]):e._e():n("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Address is invalid","form.wallet-send-address-error-invalid"))+"\n        ")]):n("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Enter address","form.wallet-send-address-error-required"))+"\n        ")])],e._v(" "),e.valueType!==e.$options.VALUE_TYPE.PUBLIC_KEY||e.$value.$pending?e._e():[!e.$value.$dirty||e.$value.required||e.domain?!e.$value.$dirty||e.$value.validPublicKey||e.domain?e.$value.$dirty&&!e.$value.validPublicKey&&e.domain?n("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Public key not found for such domain","form.masternode-domain-error-invalid"))+"\n        ")]):e._e():n("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Public key is invalid","form.masternode-public-error-invalid"))+"\n        ")]):n("span",{staticClass:"form-field__error"},[e._v("\n            "+e._s(e.$td("Enter public key","form.masternode-public-error-required"))+"\n        ")])],e._v(" "),e.help?n("div",{staticClass:"form-field__help"},[e._v(e._s(e.help))]):e._e()],2)}),[],!1,null,null,null);t.a=component.exports},754:function(e,t,n){"use strict";var r=n(752),o=n(756),l={components:{InlineSvg:r.a,ButtonCopy:o.a},props:{copyText:{type:String,required:!0}}},c=n(59),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ButtonCopy",{staticClass:"u-icon u-semantic-button link--opacity",attrs:{"aria-label":"Copy","copy-text":e.copyText}},[n("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-copy.svg"}})],1)}),[],!1,null,null,null);t.a=component.exports},756:function(e,t,n){"use strict";var r=n(759),o={props:{copyText:{type:String,required:!0}},computed:{isClipboardSupported:function(){return r.b()}},methods:{copy:function(e){r.a(e)&&this.$store.commit("SET_SNACKBAR_ACTIVE")}}},l=n(59),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isClipboardSupported?n("button",{attrs:{type:"button"},on:{click:function(t){return e.copy(e.copyText)}}},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.a=component.exports},757:function(e,t,n){"use strict";var r=n(327),o={props:{value:{type:String,default:""}},computed:{listeners:function(){var e=this.$listeners,t=(e.input,e.blur,e.focus,Object(r.a)(e,["input","blur","focus"]));return t}},mounted:function(){this.updateValue(this.$refs.input.value)},methods:{updateValue:function(e){(e=e.toUpperCase())!==this.value&&this.$emit("input",e)}}},l=n(59),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",e._g({ref:"input",domProps:{value:e.value},on:{input:function(t){return e.updateValue(t.target.value)},blur:function(t){return e.$emit("blur",t)},focus:function(t){return e.$emit("focus",t)}}},e.listeners))}),[],!1,null,null,null);t.a=component.exports},767:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(0),o=(n(16),n(36),n(31),n(35),n(61),n(66),n(4)),l=n(15),c=n(329),d=n(5),f=n(12),m=n(742),v=n(326);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function C(e){var t=e.txParams,n=e.baseCoinAmount,r=void 0===n?0:n,h=e.isOffline;return new o.a({data:{txParams:t,baseCoinAmount:r,priceCoinFeeValue:0,baseCoinFeeValue:0,feeValue:"",feeError:"",commissionPriceData:null,isLoading:!1,isOffline:h},computed:{isBaseCoinEnough:function(){return new l.a(this.baseCoinAmount||0).gte(this.baseCoinFeeValue)},isBaseCoinFee:function(){return(e=this.feeCoin)===f.d||0===e||"0"===e;var e},feeCoin:function(){return(e=this.txParams.gasCoin)||0===e?this.txParams.gasCoin:f.d;var e},isHighFee:function(){if(!this.commissionPriceData)return!1;var e=new c.a(this.commissionPriceData).getFeeValue(d.a.SEND);return e&&this.priceCoinFeeValue/e>=1e4},fee:function(){var e;return{priceCoinValue:this.priceCoinFeeValue,priceCoin:(null===(e=this.commissionPriceData)||void 0===e?void 0:e.coin)||{},baseCoinValue:this.baseCoinFeeValue,isBaseCoin:this.isBaseCoinFee,isBaseCoinEnough:this.isBaseCoinEnough,value:this.feeValue,coin:this.feeCoin,isHighFee:this.isHighFee,error:this.feeError,isLoading:this.isLoading}}},watch:{fee:{handler:function(e){this.$emit("update-fee",e)},deep:!0}},created:function(){this.fetchCoinData(),this.$on("update-params",(function(e){var t=this;Object.keys(e).forEach((function(n){t[n]=e[n]})),this.fetchCoinData()}))},methods:{fetchCoinData:function(){var e=this;this.isOffline||(this.isLoading=!0,this.feeError="",this.priceCoinFeeValue=0,this.baseCoinFeeValue=0,this.feeValue="",this.$nextTick((function(){var t=e.feeCoin;Object(m.d)(_(_({},e.txParams),{},{chainId:f.g,gasCoin:t})).then((function(n){t===e.feeCoin&&(e.priceCoinFeeValue=n.priceCoinCommission,e.baseCoinFeeValue=n.baseCoinCommission,e.feeValue=n.commission,e.commissionPriceData=n.commissionPriceData,e.isLoading=!1)})).catch((function(n){t===e.feeCoin&&(e.feeError=Object(v.a)(n,""),"not possible to exchange"===e.feeError.toLowerCase()&&(e.feeError=e.feeError+" to pay fee"),e.feeError="Error: "+e.feeError,e.isLoading=!1)}))})))}}})}},769:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return $})),n.d(t,"b",(function(){return y}));n(1),n(68),n(11);var r=n(145),o=n.n(r),l=n(479),c=n(772),d=n(12),f=o.a.create({baseURL:d.x});function m(){var e,t,n,r,l;return function(o){var f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},m=f.throttle;return e===o?(m||(v(n),n=null),t):(e=o,v(r,{isCancel:!0}),v(l,{isCancel:!0}),r=null,l=null,t=m?d(700).then((function(){return c(o)})):c(o))};function c(e){return f.get("resolve",{params:{domain:e},cancelToken:new o.a.CancelToken((function(e){l=e}))}).then((function(e){return e.data}))}function d(e){return new Promise((function(t,o){n=t,r=o,setTimeout(t,e)}))}}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isCancel;"function"==typeof e&&e(n?"Request aborted":void 0)}var h=/^([a-z0-9][a-z0-9-_]*\.)+[a-z]*$/i,_=/^([a-z0-9][a-z0-9-_]*\.)+[a-z]{2,}$/i;function C(e){return h.test(e)}function $(e){return _.test(e)}function y(t){var address=t.address,n=t.publickey,r=t.ticker,o=t.signature,f=address+n+r,m=Object(l.keccak)(f),v=e.from(o.r,"hex"),s=e.from(o.s,"hex");return"Mp"+Object(c.ecrecover)(m,o.v,v,s).toString("hex")===d.y}}).call(this,n(6).Buffer)}}]);