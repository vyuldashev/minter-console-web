(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(459);t.default=function(e){return(0,o.withParams)({type:"minValue",min:e},(function(t){return!(0,o.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(459);t.default=function(e){return(0,o.withParams)({type:"minLength",min:e},(function(t){return!(0,o.req)(t)||(0,o.len)(t)>=e}))}},470:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(459);t.default=function(e){return(0,o.withParams)({type:"maxLength",max:e},(function(t){return!(0,o.req)(t)||(0,o.len)(t)<=e}))}},472:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(82),r(25);var o={};var n={inheritAttrs:!1,render(e){return this.isLoaded?e("svg",{on:this.$listeners,attrs:Object.assign(this.initialAttrs,(t=this.$attrs,Object.keys(t).reduce((e,r)=>(!1!==t[r]&&null!==t[r]&&void 0!==t[r]&&(e[r]=t[r]),e),{}))),domProps:{innerHTML:this.initialContent}}):null;var t},props:{src:{type:String,required:!0},transformSource:{type:Function,default:svg=>svg}},data:()=>({isLoaded:!1,initialAttrs:{},initialContent:""}),watch:{src(e){this.inline(e)}},mounted(){this.inline(this.src)},methods:{inline(e){o[e]||(this.isLoaded&&(this.isLoaded=!1,this.$emit("unloaded")),o[e]=this.download(e)),o[e].then(svg=>{this.initialAttrs={};for(var e=svg.attributes,i=e.length-1;i>=0;i--)this.initialAttrs[e[i].name]=e[i].value;this.initialContent=svg.innerHTML,this.isLoaded=!0,this.$emit("loaded")}).catch(t=>{delete o[e],this.$emit("error",t)})},download(e){return new Promise((t,r)=>{var o=new XMLHttpRequest;o.open("GET",e,!0),o.onload=()=>{if(o.status>=200&&o.status<400)try{var e=(new DOMParser).parseFromString(o.responseText,"text/xml").getElementsByTagName("svg")[0];e?(e=this.transformSource(e),t(e)):r(new Error('Loaded file is not valid SVG"'))}catch(e){r(e)}else r(new Error("Error loading SVG"))},o.onerror=r,o.send()})}}}},476:function(e,t,r){"use strict";function o(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var r=document.getSelection(),o=r.rangeCount>0&&r.getRangeAt(0);t.select(),t.selectionStart=0,t.selectionEnd=e.length;var n=document.execCommand("copy");return document.body.removeChild(t),o&&(r.removeAllRanges(),r.addRange(o)),n}function n(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}))},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(459);t.default=function(e){return(0,o.withParams)({type:"maxValue",max:e},(function(t){return!(0,o.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},609:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(459).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=o},620:function(e,t,r){"use strict";r.r(t);r(25);var o=r(455),n=(r(507),r(15),r(31)),l=r(125),d=r(471),c=r(462),m=r(463),f=r.n(m),h=r(468),v=r.n(h),_=r(469),$=r.n(_),C=r(470),y=r.n(C),w=r(564),x=r.n(w),M=r(609),S=r.n(M),P=r(506),A=r(168),O=r(456),E=r(461),T=r(452),k=r(475),I=r(448),L=r(170),N=r(74),j=r(487),D=r(457),F=r(464),V=r(453),G=r(458),R=r(449);function U(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var H,B={prettyRound:N.o,MULTISIG_WEIGHT_MIN:0,MULTISIG_WEIGHT_MAX:1023,components:{QrcodeVue:d.a,FieldDomain:j.a,FieldQr:D.a,InputUppercase:F.a,InputMaskedInteger:V.a,ButtonCopyIcon:G.a,Loader:R.a},directives:{checkEmpty:I.a},filters:{pretty:N.i,uppercase:e=>e?e.toUpperCase():e},mixins:[c.validationMixin],data(){var e=this.$store.getters.balance;return{isFormSending:!1,serverError:"",serverSuccess:"",form:{nonce:"",addressList:[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],threshold:"",gasCoin:e&&e.length?e[0].coin:"",payload:"",gasPrice:""},formAdvanced:{gasCoin:e&&e.length?e[0].coin:"",payload:""},isModeAdvanced:!1,fee:{},signedTx:null,addressDomain:"",isAddressDomainResolving:!1}},validations(){var form={addressList:{required:f.a,minLength:$()(1),maxLength:y()(32),$each:{address:{required:f.a,validAddress:this.isAddressDomainResolving?()=>new Promise(()=>0):O.e},weight:{required:f.a,minValue:v()(0),maxValue:x()(1023),integer:S.a}}},threshold:{required:f.a,maxValue:x()(this.weightSum),minValue:v()(this.weightMin)},gasCoin:{required:f.a,minLength:$()(3),maxLength:y()(10)},payload:{maxLength:y()(1024)}};return this.$store.getters.isOfflineMode&&(form.nonce={required:f.a,minValue:v()(1)},form.gasPrice={minValue:v()(1)}),{form:form}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({balance:"balance"}),{multisigData(){var e={addresses:[],weights:[],threshold:this.form.threshold};return this.form.addressList.forEach(t=>{e.addresses.push(t.address),e.weights.push(t.weight)}),e},weightSum(){return this.multisigData.weights.reduce((e,t)=>Number(e)+Number(t))||""},weightMin(){return this.multisigData.weights.reduce((e,t)=>t?Number(e)<Number(t)?Number(e):Number(t):e)||0},showAdvanced(){return this.isModeAdvanced||this.$store.getters.isOfflineMode},feeBusParams(){return{txType:A.a.CREATE_MULTISIG,txFeeOptions:{payload:this.form.payload},selectedCoinSymbol:this.form.coinSymbol,selectedFeeCoinSymbol:this.form.gasCoin,baseCoinAmount:this.$store.getters.baseCoin&&this.$store.getters.baseCoin.amount,isOffline:this.$store.getters.isOfflineMode}}}),watch:{feeBusParams:{handler(e){H&&"function"==typeof H.$emit&&H.$emit("updateParams",e)},deep:!0}},created(){H=new k.a(this.feeBusParams),this.fee=H.fee,H.$on("updateFee",e=>{this.fee=e})},methods:{pretty:N.i,addParticipant(){this.form.addressList.push({address:"",weight:""})},removeParticipant(e){this.form.addressList.splice(e,1)},submit(){this.$store.getters.isOfflineMode?this.generateTx():this.postTx()},generateTx(){this.$v.$invalid?this.$v.$touch():(this.signedTx=null,this.serverError="",this.serverSuccess="",this.signedTx=Object(E.a)({type:A.a.CREATE_MULTISIG,chainId:this.$store.getters.CHAIN_ID,data:new P.a(this.multisigData),gasCoin:this.fee.coinSymbol,gasPrice:this.form.gasPrice||void 0,payload:this.form.payload||void 0},{privateKey:this.$store.getters.privateKey}).serialize().toString("hex"),this.clearForm())},postTx(){this.isFormSending||(this.$v.$invalid?this.$v.$touch():(this.isFormSending=!0,this.signedTx=null,this.serverError="",this.serverSuccess="",this.$store.dispatch("FETCH_ADDRESS_ENCRYPTED").then(()=>{Object(T.f)({privateKey:this.$store.getters.privateKey,type:A.a.CREATE_MULTISIG,chainId:this.$store.getters.CHAIN_ID,data:new P.a(this.multisigData),gasCoin:this.fee.coinSymbol,gasPrice:this.form.gasPrice||void 0,payload:this.form.payload||void 0}).then(e=>{this.isFormSending=!1,this.serverSuccess=e,this.clearForm()}).catch(e=>{console.log(e),this.isFormSending=!1,this.serverError=Object(L.a)(e)})}).catch(e=>{this.isFormSending=!1,this.serverError=Object(L.a)(e)})))},switchToAdvanced(){this.isModeAdvanced=!0,this.form.gasCoin=this.formAdvanced.gasCoin,this.form.payload=this.formAdvanced.payload},switchToSimple(){this.isModeAdvanced=!1,this.formAdvanced.gasCoin=this.form.gasCoin,this.formAdvanced.payload=this.form.payload,this.form.gasCoin=this.balance&&this.balance.length?this.balance[0].coin:"",this.form.payload=""},clearForm(){this.form.addressList=[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],this.form.threshold="",this.form.gasCoin=this.balance&&this.balance.length?this.balance[0].coin:"",this.form.payload="",this.formAdvanced.gasCoin=this.balance&&this.balance.length?this.balance[0].coin:"",this.formAdvanced.payload="",this.form.nonce&&this.$store.getters.isOfflineMode?this.form.nonce+=1:this.form.nonce="",this.form.gasPrice="",this.$v.$reset()},getExplorerTxUrl:N.d}},W=r(30),K={components:{MultisigCreateForm:Object(W.a)(B,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"panel__section panel__section--wrap",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e._l(e.$v.form.addressList.$each.$iter,(function(t,o){return r("div",{key:o,staticClass:"panel__section panel__section--medium"},[r("div",{staticClass:"multisig-participant u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{staticClass:"multisig-participant__number-cell u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:""},domProps:{value:"#"+(Number(o)+1)}})])]),e._v(" "),r("div",{staticClass:"multisig-participant__address-cell u-cell u-cell--small--3-4"},[r("FieldDomain",{attrs:{$value:t.address,valueType:"address",label:e.$td("Address or domain","form.multisig-create-address")},on:{"update:domain":function(t){e.addressDomain=t},"update:resolving":function(t){e.isAddressDomainResolving=t}},model:{value:t.address.$model,callback:function(r){e.$set(t.address,"$model","string"==typeof r?r.trim():r)},expression:"v.address.$model"}})],1),e._v(" "),r("div",{staticClass:"multisig-participant__weight-cell u-cell u-cell--small--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":t.weight.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.weight.$model,expression:"v.weight.$model",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:t.weight.$model},on:{blur:[function(e){return t.weight.$touch()},function(t){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(t.weight,"$model",r.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Weight","form.multisig-create-weight")))])]),e._v(" "),t.weight.$dirty&&!t.weight.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter weight","form.multisig-create-weight-error-required")))]):t.weight.$dirty&&!t.weight.integer?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Weight must be integer","form.multisig-create-weight-error-integer")))]):t.weight.$dirty&&!t.weight.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Maximum weight:","form.multisig-create-weight-error-max"))+" "+e._s(e.$options.MULTISIG_WEIGHT_MAX))]):t.weight.$dirty&&!t.weight.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum weight:","form.multisig-create-weight-error-min"))+" "+e._s(e.$options.MULTISIG_WEIGHT_MIN))]):e._e()]),e._v(" "),r("div",{staticClass:"multisig-participant__remove-cell u-cell"},[o>0?r("button",{staticClass:"multisig-participant__remove u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(t){return e.removeParticipant(o)}}},[r("img",{attrs:{src:"/img/icon-remove.svg",alt:"Remove address"}})]):e._e()])])])})),e._v(" "),r("div",{staticClass:"panel__section"},[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced,expression:"showAdvanced"}],staticClass:"u-cell u-cell--xlarge--1-4 u-cell--xlarge--order-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.gasCoin.$error}},[e.balance&&e.balance.length?r("select",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model",value:e.form.gasCoin,expression:"form.gasCoin"}],staticClass:"form-field__input form-field__input--select",on:{blur:function(t){return e.$v.form.gasCoin.$touch()},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"gasCoin",t.target.multiple?r:r[0])}}},e._l(e.balance,(function(t){return r("option",{key:t.coin,domProps:{value:t.coin}},[e._v("\n                            "+e._s(e._f("uppercase")(t.coin))+" ("+e._s(e._f("pretty")(t.amount))+")\n                        ")])})),0):r("InputUppercase",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text"},on:{blur:function(t){return e.$v.form.gasCoin.$touch()}},model:{value:e.form.gasCoin,callback:function(t){e.$set(e.form,"gasCoin","string"==typeof t?t.trim():t)},expression:"form.gasCoin"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Coin to pay fee","form.fee")))])],1),e._v(" "),e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin","form.coin-error-required")))]):e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 10 letters","form.coin-error-max")))]):this.$store.getters.isOfflineMode?r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Equivalent of "+e.$store.getters.COIN_NAME+" "+e.pretty(e.fee.baseCoinValue),"form.fee-help",{value:e.pretty(e.fee.baseCoinValue),coin:e.$store.getters.COIN_NAME})))]):r("div",{staticClass:"form-field__help"},[e._v("\n                    "+e._s(e.fee.coinSymbol)+" "+e._s(e._f("pretty")(e.fee.value))+"\n                    "),e.fee.isBaseCoin?e._e():r("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.$store.getters.COIN_NAME)+" "+e._s(e._f("pretty")(e.fee.baseCoinValue))+")")])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanced,expression:"showAdvanced"}],staticClass:"u-cell u-cell--xlarge--3-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.payload.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.payload,expression:"form.payload",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.payload},on:{blur:[function(t){return e.$v.form.payload.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"payload",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Message","form.message")))])]),e._v(" "),e.$v.form.payload.$dirty&&!e.$v.form.payload.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 1024 symbols","form.message-error-max")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Any additional information about the transaction. Please note it will be stored on the blockchain and visible to anyone. May include up to 1024 symbols.","form.message-help")))])]),e._v(" "),e.$store.getters.isOfflineMode?r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--small--1-2 u-cell--order-2"},[r("FieldQr",{attrs:{$value:e.$v.form.nonce,label:e.$td("Nonce","form.checks-issue-nonce"),isInteger:!0},model:{value:e.form.nonce,callback:function(t){e.$set(e.form,"nonce",t)},expression:"form.nonce"}}),e._v(" "),e.$v.form.nonce.$error&&!e.$v.form.nonce.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter nonce","form.checks-issue-nonce-error-required")))]):e.$v.form.nonce.$dirty&&!e.$v.form.nonce.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum nonce is 1","form.generate-nonce-error-min")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Tx's unique ID. Should be: current user's tx count + 1","form.generate-nonce-help")))])],1):e._e(),e._v(" "),e.$store.getters.isOfflineMode?r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--small--1-2 u-cell--order-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.gasPrice.$error}},[r("InputMaskedInteger",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.gasPrice.$touch()}},model:{value:e.form.gasPrice,callback:function(t){e.$set(e.form,"gasPrice",t)},expression:"form.gasPrice"}}),e._v(" "),e.$v.form.gasPrice.$dirty&&!e.$v.form.gasPrice.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum gas price is 1","form.gas-price-error-min")))]):e._e(),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Gas Price","form.gas-price")))])],1),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("By default: 1","form.gas-price-help")))])]):e._e(),e._v(" "),e.$store.getters.isOfflineMode?r("div",{staticClass:"u-cell u-cell--xlarge--1-2 u-cell--order-2"},[r("button",{staticClass:"button button--main button--full",class:{"is-disabled":e.$v.$invalid}},[e._v("\n                    "+e._s(e.$td("Generate","form.generate-button"))+"\n                ")])]):e._e(),e._v(" "),e.$store.getters.isOfflineMode?e._e():r("div",{staticClass:"u-cell u-cell--xlarge--1-2 u-cell--order-2 u-cell--small--1-2 u-cell--align-center"},[e.showAdvanced?r("button",{staticClass:"link--default u-semantic-button",attrs:{type:"button"},on:{click:e.switchToSimple}},[e._v("\n                    "+e._s(e.$td("Simple mode","form.toggle-simple-mode"))+"\n                ")]):e._e(),e._v(" "),e.showAdvanced?e._e():r("button",{staticClass:"link--default u-semantic-button",attrs:{type:"button"},on:{click:e.switchToAdvanced}},[e._v("\n                    "+e._s(e.$td("Advanced mode","form.toggle-advanced-mode"))+"\n                ")])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--order-2 u-hidden-xlarge-down"}),e._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--order-2 u-cell--small--1-2"},[r("button",{staticClass:"button button--ghost-main button--full",class:{"is-disabled":e.form.addressList.length>=32},attrs:{type:"button"},on:{click:e.addParticipant}},[r("span",{staticClass:"button__content"},[e._v(e._s(e.$td("+ Add More","form.multisig-create-add-participant")))])])])])]),e._v(" "),r("div",{staticClass:"panel__section panel__section--tint"},[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--xlarge--1-4"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",readonly:""},domProps:{value:e.$options.prettyRound(e.weightSum)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Total weights sum","form.multisig-create-weight-sum")))])])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--xlarge--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.threshold.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.threshold,expression:"form.threshold",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.threshold},on:{blur:[function(t){return e.$v.form.threshold.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"threshold",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Threshold","form.multisig-create-threshold")))])]),e._v(" "),e.$v.form.threshold.$dirty&&!e.$v.form.threshold.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter threshold","form.multisig-create-threshold-error-required")))]):e.$v.form.threshold.$dirty&&!e.$v.form.threshold.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Should be greater or equal than Weights Sum","form.multisig-create-threshold-error-max")))]):e.$v.form.threshold.$dirty&&!e.$v.form.threshold.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Should be less or equal than minimal Weight:","form.multisig-create-threshold-error-min"))+" "+e._s(e.weightMin))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-4"}),e._v(" "),e.$store.getters.isOfflineMode?e._e():r("div",{staticClass:"u-cell u-cell--xlarge--1-4"},[r("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending,"is-disabled":e.$v.$invalid}},[r("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Create Multisig","form.multisig-create-submit")))]),e._v(" "),r("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?r("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.serverSuccess?r("div",{staticClass:"u-cell u-cell--order-2"},[r("strong",[e._v(e._s(e.$td("Tx sent:","form.tx-sent")))]),e._v(" "),r("a",{staticClass:"link--default u-text-break",attrs:{href:e.getExplorerTxUrl(e.serverSuccess),target:"_blank"}},[e._v(e._s(e.serverSuccess))])]):e._e(),e._v(" "),e.signedTx?r("div",{staticClass:"u-cell u-cell--order-2"},[r("dl",[r("dt",[e._v(e._s(e.$td("Signed tx:","form.generate-result-tx")))]),e._v(" "),r("dd",{staticClass:"u-icon-wrap"},[r("span",{staticClass:"u-select-all u-icon-text"},[e._v("\n                            "+e._s(e.signedTx)+"\n                        ")]),e._v(" "),r("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.signedTx}})],1)]),e._v(" "),r("br"),e._v(" "),r("qrcode-vue",{attrs:{value:e.signedTx,size:200,level:"L"}})],1):e._e()])])],2)}),[],!1,null,null,null).exports},fetch(e){var{app:t,store:r}=e;return r.commit("SET_SECTION_NAME",t.$td("Multisignature","common.page-multisignature")),Promise.resolve()},head(){var title=Object(o.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Create multisignature address.","multisig.seo-description");"en"===this.$i18n.locale||this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e}]}}},Q=Object(W.a)(K,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"u-section u-container"},[t("div",{staticClass:"panel"},[t("div",{staticClass:"panel__header"},[t("h1",{staticClass:"panel__header-title"},[this._v("\n                "+this._s(this.$td("Create Multisig Address","multisig.create-title"))+"\n            ")])]),this._v(" "),t("MultisigCreateForm")],1)])}),[],!1,null,null,null);t.default=Q.exports}}]);