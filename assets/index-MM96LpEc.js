(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))H(C);new MutationObserver(C=>{for(const R of C)if(R.type==="childList")for(const ee of R.addedNodes)ee.tagName==="LINK"&&ee.rel==="modulepreload"&&H(ee)}).observe(document,{childList:!0,subtree:!0});function c(C){const R={};return C.integrity&&(R.integrity=C.integrity),C.referrerPolicy&&(R.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?R.credentials="include":C.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function H(C){if(C.ep)return;C.ep=!0;const R=c(C);fetch(C.href,R)}})();function ec(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var Va={exports:{}},Ar={},Wa={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function nf(){if(Bu)return re;Bu=1;var y=Symbol.for("react.element"),x=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),ee=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),U=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),te=Symbol.iterator;function ne(s){return s===null||typeof s!="object"?null:(s=te&&s[te]||s["@@iterator"],typeof s=="function"?s:null)}var Te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pe=Object.assign,le={};function V(s,h,S){this.props=s,this.context=h,this.refs=le,this.updater=S||Te}V.prototype.isReactComponent={},V.prototype.setState=function(s,h){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,h,"setState")},V.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Fe(){}Fe.prototype=V.prototype;function oe(s,h,S){this.props=s,this.context=h,this.refs=le,this.updater=S||Te}var me=oe.prototype=new Fe;me.constructor=oe,pe(me,V.prototype),me.isPureReactComponent=!0;var Z=Array.isArray,ze=Object.prototype.hasOwnProperty,ce={current:null},ke={key:!0,ref:!0,__self:!0,__source:!0};function O(s,h,S){var E,M={},I=null,P=null;if(h!=null)for(E in h.ref!==void 0&&(P=h.ref),h.key!==void 0&&(I=""+h.key),h)ze.call(h,E)&&!ke.hasOwnProperty(E)&&(M[E]=h[E]);var _=arguments.length-2;if(_===1)M.children=S;else if(1<_){for(var Q=Array(_),ae=0;ae<_;ae++)Q[ae]=arguments[ae+2];M.children=Q}if(s&&s.defaultProps)for(E in _=s.defaultProps,_)M[E]===void 0&&(M[E]=_[E]);return{$$typeof:y,type:s,key:I,ref:P,props:M,_owner:ce.current}}function K(s,h){return{$$typeof:y,type:s.type,key:h,ref:s.ref,props:s.props,_owner:s._owner}}function B(s){return typeof s=="object"&&s!==null&&s.$$typeof===y}function ge(s){var h={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(S){return h[S]})}var et=/\/+/g;function Le(s,h){return typeof s=="object"&&s!==null&&s.key!=null?ge(""+s.key):h.toString(36)}function Se(s,h,S,E,M){var I=typeof s;(I==="undefined"||I==="boolean")&&(s=null);var P=!1;if(s===null)P=!0;else switch(I){case"string":case"number":P=!0;break;case"object":switch(s.$$typeof){case y:case x:P=!0}}if(P)return P=s,M=M(P),s=E===""?"."+Le(P,0):E,Z(M)?(S="",s!=null&&(S=s.replace(et,"$&/")+"/"),Se(M,h,S,"",function(ae){return ae})):M!=null&&(B(M)&&(M=K(M,S+(!M.key||P&&P.key===M.key?"":(""+M.key).replace(et,"$&/")+"/")+s)),h.push(M)),1;if(P=0,E=E===""?".":E+":",Z(s))for(var _=0;_<s.length;_++){I=s[_];var Q=E+Le(I,_);P+=Se(I,h,S,Q,M)}else if(Q=ne(s),typeof Q=="function")for(s=Q.call(s),_=0;!(I=s.next()).done;)I=I.value,Q=E+Le(I,_++),P+=Se(I,h,S,Q,M);else if(I==="object")throw h=String(s),Error("Objects are not valid as a React child (found: "+(h==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":h)+"). If you meant to render a collection of children, use an array instead.");return P}function Ae(s,h,S){if(s==null)return s;var E=[],M=0;return Se(s,E,"","",function(I){return h.call(S,I,M++)}),E}function ve(s){if(s._status===-1){var h=s._result;h=h(),h.then(function(S){(s._status===0||s._status===-1)&&(s._status=1,s._result=S)},function(S){(s._status===0||s._status===-1)&&(s._status=2,s._result=S)}),s._status===-1&&(s._status=0,s._result=h)}if(s._status===1)return s._result.default;throw s._result}var ye={current:null},z={transition:null},W={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:z,ReactCurrentOwner:ce};function f(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Ae,forEach:function(s,h,S){Ae(s,function(){h.apply(this,arguments)},S)},count:function(s){var h=0;return Ae(s,function(){h++}),h},toArray:function(s){return Ae(s,function(h){return h})||[]},only:function(s){if(!B(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},re.Component=V,re.Fragment=c,re.Profiler=C,re.PureComponent=oe,re.StrictMode=H,re.Suspense=b,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,re.act=f,re.cloneElement=function(s,h,S){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var E=pe({},s.props),M=s.key,I=s.ref,P=s._owner;if(h!=null){if(h.ref!==void 0&&(I=h.ref,P=ce.current),h.key!==void 0&&(M=""+h.key),s.type&&s.type.defaultProps)var _=s.type.defaultProps;for(Q in h)ze.call(h,Q)&&!ke.hasOwnProperty(Q)&&(E[Q]=h[Q]===void 0&&_!==void 0?_[Q]:h[Q])}var Q=arguments.length-2;if(Q===1)E.children=S;else if(1<Q){_=Array(Q);for(var ae=0;ae<Q;ae++)_[ae]=arguments[ae+2];E.children=_}return{$$typeof:y,type:s.type,key:M,ref:I,props:E,_owner:P}},re.createContext=function(s){return s={$$typeof:ee,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:R,_context:s},s.Consumer=s},re.createElement=O,re.createFactory=function(s){var h=O.bind(null,s);return h.type=s,h},re.createRef=function(){return{current:null}},re.forwardRef=function(s){return{$$typeof:Y,render:s}},re.isValidElement=B,re.lazy=function(s){return{$$typeof:X,_payload:{_status:-1,_result:s},_init:ve}},re.memo=function(s,h){return{$$typeof:U,type:s,compare:h===void 0?null:h}},re.startTransition=function(s){var h=z.transition;z.transition={};try{s()}finally{z.transition=h}},re.unstable_act=f,re.useCallback=function(s,h){return ye.current.useCallback(s,h)},re.useContext=function(s){return ye.current.useContext(s)},re.useDebugValue=function(){},re.useDeferredValue=function(s){return ye.current.useDeferredValue(s)},re.useEffect=function(s,h){return ye.current.useEffect(s,h)},re.useId=function(){return ye.current.useId()},re.useImperativeHandle=function(s,h,S){return ye.current.useImperativeHandle(s,h,S)},re.useInsertionEffect=function(s,h){return ye.current.useInsertionEffect(s,h)},re.useLayoutEffect=function(s,h){return ye.current.useLayoutEffect(s,h)},re.useMemo=function(s,h){return ye.current.useMemo(s,h)},re.useReducer=function(s,h,S){return ye.current.useReducer(s,h,S)},re.useRef=function(s){return ye.current.useRef(s)},re.useState=function(s){return ye.current.useState(s)},re.useSyncExternalStore=function(s,h,S){return ye.current.useSyncExternalStore(s,h,S)},re.useTransition=function(){return ye.current.useTransition()},re.version="18.3.1",re}var Vu;function Xa(){return Vu||(Vu=1,Wa.exports=nf()),Wa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu;function rf(){if(Wu)return Ar;Wu=1;var y=Xa(),x=Symbol.for("react.element"),c=Symbol.for("react.fragment"),H=Object.prototype.hasOwnProperty,C=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function ee(Y,b,U){var X,te={},ne=null,Te=null;U!==void 0&&(ne=""+U),b.key!==void 0&&(ne=""+b.key),b.ref!==void 0&&(Te=b.ref);for(X in b)H.call(b,X)&&!R.hasOwnProperty(X)&&(te[X]=b[X]);if(Y&&Y.defaultProps)for(X in b=Y.defaultProps,b)te[X]===void 0&&(te[X]=b[X]);return{$$typeof:x,type:Y,key:ne,ref:Te,props:te,_owner:C.current}}return Ar.Fragment=c,Ar.jsx=ee,Ar.jsxs=ee,Ar}var $u;function lf(){return $u||($u=1,Va.exports=rf()),Va.exports}var i=lf(),se=Xa();const af=ec(se);var Jl={},$a={exports:{}},st={},qa={exports:{}},Qa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu;function sf(){return qu||(qu=1,(function(y){function x(z,W){var f=z.length;z.push(W);e:for(;0<f;){var s=f-1>>>1,h=z[s];if(0<C(h,W))z[s]=W,z[f]=h,f=s;else break e}}function c(z){return z.length===0?null:z[0]}function H(z){if(z.length===0)return null;var W=z[0],f=z.pop();if(f!==W){z[0]=f;e:for(var s=0,h=z.length,S=h>>>1;s<S;){var E=2*(s+1)-1,M=z[E],I=E+1,P=z[I];if(0>C(M,f))I<h&&0>C(P,M)?(z[s]=P,z[I]=f,s=I):(z[s]=M,z[E]=f,s=E);else if(I<h&&0>C(P,f))z[s]=P,z[I]=f,s=I;else break e}}return W}function C(z,W){var f=z.sortIndex-W.sortIndex;return f!==0?f:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var R=performance;y.unstable_now=function(){return R.now()}}else{var ee=Date,Y=ee.now();y.unstable_now=function(){return ee.now()-Y}}var b=[],U=[],X=1,te=null,ne=3,Te=!1,pe=!1,le=!1,V=typeof setTimeout=="function"?setTimeout:null,Fe=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(z){for(var W=c(U);W!==null;){if(W.callback===null)H(U);else if(W.startTime<=z)H(U),W.sortIndex=W.expirationTime,x(b,W);else break;W=c(U)}}function Z(z){if(le=!1,me(z),!pe)if(c(b)!==null)pe=!0,ve(ze);else{var W=c(U);W!==null&&ye(Z,W.startTime-z)}}function ze(z,W){pe=!1,le&&(le=!1,Fe(O),O=-1),Te=!0;var f=ne;try{for(me(W),te=c(b);te!==null&&(!(te.expirationTime>W)||z&&!ge());){var s=te.callback;if(typeof s=="function"){te.callback=null,ne=te.priorityLevel;var h=s(te.expirationTime<=W);W=y.unstable_now(),typeof h=="function"?te.callback=h:te===c(b)&&H(b),me(W)}else H(b);te=c(b)}if(te!==null)var S=!0;else{var E=c(U);E!==null&&ye(Z,E.startTime-W),S=!1}return S}finally{te=null,ne=f,Te=!1}}var ce=!1,ke=null,O=-1,K=5,B=-1;function ge(){return!(y.unstable_now()-B<K)}function et(){if(ke!==null){var z=y.unstable_now();B=z;var W=!0;try{W=ke(!0,z)}finally{W?Le():(ce=!1,ke=null)}}else ce=!1}var Le;if(typeof oe=="function")Le=function(){oe(et)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ae=Se.port2;Se.port1.onmessage=et,Le=function(){Ae.postMessage(null)}}else Le=function(){V(et,0)};function ve(z){ke=z,ce||(ce=!0,Le())}function ye(z,W){O=V(function(){z(y.unstable_now())},W)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(z){z.callback=null},y.unstable_continueExecution=function(){pe||Te||(pe=!0,ve(ze))},y.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},y.unstable_getCurrentPriorityLevel=function(){return ne},y.unstable_getFirstCallbackNode=function(){return c(b)},y.unstable_next=function(z){switch(ne){case 1:case 2:case 3:var W=3;break;default:W=ne}var f=ne;ne=W;try{return z()}finally{ne=f}},y.unstable_pauseExecution=function(){},y.unstable_requestPaint=function(){},y.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var f=ne;ne=z;try{return W()}finally{ne=f}},y.unstable_scheduleCallback=function(z,W,f){var s=y.unstable_now();switch(typeof f=="object"&&f!==null?(f=f.delay,f=typeof f=="number"&&0<f?s+f:s):f=s,z){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=f+h,z={id:X++,callback:W,priorityLevel:z,startTime:f,expirationTime:h,sortIndex:-1},f>s?(z.sortIndex=f,x(U,z),c(b)===null&&z===c(U)&&(le?(Fe(O),O=-1):le=!0,ye(Z,f-s))):(z.sortIndex=h,x(b,z),pe||Te||(pe=!0,ve(ze))),z},y.unstable_shouldYield=ge,y.unstable_wrapCallback=function(z){var W=ne;return function(){var f=ne;ne=W;try{return z.apply(this,arguments)}finally{ne=f}}}})(Qa)),Qa}var Qu;function of(){return Qu||(Qu=1,qa.exports=sf()),qa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku;function uf(){if(Ku)return st;Ku=1;var y=Xa(),x=of();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H=new Set,C={};function R(e,t){ee(e,t),ee(e+"Capture",t)}function ee(e,t){for(C[e]=t,e=0;e<t.length;e++)H.add(t[e])}var Y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,U=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,X={},te={};function ne(e){return b.call(te,e)?!0:b.call(X,e)?!1:U.test(e)?te[e]=!0:(X[e]=!0,!1)}function Te(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pe(e,t,n,r){if(t===null||typeof t>"u"||Te(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,r,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new le(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new le(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new le(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new le(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new le(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new le(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fe=/[\-:]([a-z])/g;function oe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fe,oe);V[t]=new le(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fe,oe);V[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fe,oe);V[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function me(e,t,n,r){var l=V.hasOwnProperty(t)?V[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pe(t,n,l,r)&&(n=null),r||l===null?ne(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Z=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),ce=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),ge=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),z=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var f=Object.assign,s;function h(e){if(s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);s=t&&t[1]||""}return`
`+s+e}var S=!1;function E(e,t){if(!e||S)return"";S=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var r=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){r=v}e.call(t.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var l=v.stack.split(`
`),a=r.stack.split(`
`),o=l.length-1,u=a.length-1;1<=o&&0<=u&&l[o]!==a[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==a[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==a[u]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=u);break}}}finally{S=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?h(e):""}function M(e){switch(e.tag){case 5:return h(e.type);case 16:return h("Lazy");case 13:return h("Suspense");case 19:return h("SuspenseList");case 0:case 2:case 15:return e=E(e.type,!1),e;case 11:return e=E(e.type.render,!1),e;case 1:return e=E(e.type,!0),e;default:return""}}function I(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case ce:return"Portal";case K:return"Profiler";case O:return"StrictMode";case Le:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ge:return(e.displayName||"Context")+".Consumer";case B:return(e._context.displayName||"Context")+".Provider";case et:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return t=e.displayName||null,t!==null?t:I(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return I(e(t))}catch{}}return null}function P(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return I(t);case 8:return t===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Q(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ae(e){var t=Q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fe(e){e._valueTracker||(e._valueTracker=ae(e))}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Q(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ie(e,t){var n=t.checked;return f({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ve(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tt(e,t){t=t.checked,t!=null&&me(e,"checked",t,!1)}function Ge(e,t){tt(e,t);var n=_(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kt(e,t.type,n):t.hasOwnProperty("defaultValue")&&kt(e,t.type,_(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kt(e,t,n){(t!=="number"||Pe(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qe=Array.isArray;function Bt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Yn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return f({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ur(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(qe(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_(n)}}function Jn(e,t){var n=_(t.value),r=_(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nn,Zn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nn=Nn||document.createElement("div"),Nn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ei=["Webkit","ms","Moz","O"];Object.keys(_t).forEach(function(e){ei.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_t[t]=_t[e]})});function Br(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_t.hasOwnProperty(e)&&_t[e]?(""+t).trim():t+"px"}function rs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Br(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var sc=f({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ti(e,t){if(t){if(sc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function ni(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function li(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Sn=null,Cn=null;function ls(e){if(e=wr(e)){if(typeof ii!="function")throw Error(c(280));var t=e.stateNode;t&&(t=dl(t),ii(e.stateNode,e.type,t))}}function is(e){Sn?Cn?Cn.push(e):Cn=[e]:Sn=e}function as(){if(Sn){var e=Sn,t=Cn;if(Cn=Sn=null,ls(e),t)for(e=0;e<t.length;e++)ls(t[e])}}function ss(e,t){return e(t)}function os(){}var ai=!1;function us(e,t,n){if(ai)return e(t,n);ai=!0;try{return ss(e,t,n)}finally{ai=!1,(Sn!==null||Cn!==null)&&(os(),as())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var si=!1;if(Y)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){si=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{si=!1}function oc(e,t,n,r,l,a,o,u,d){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(w){this.onError(w)}}var nr=!1,Vr=null,Wr=!1,oi=null,uc={onError:function(e){nr=!0,Vr=e}};function cc(e,t,n,r,l,a,o,u,d){nr=!1,Vr=null,oc.apply(uc,arguments)}function dc(e,t,n,r,l,a,o,u,d){if(cc.apply(this,arguments),nr){if(nr){var v=Vr;nr=!1,Vr=null}else throw Error(c(198));Wr||(Wr=!0,oi=v)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ds(e){if(cn(e)!==e)throw Error(c(188))}function fc(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return ds(l),e;if(a===r)return ds(l),t;a=a.sibling}throw Error(c(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=a;break}if(u===r){o=!0,r=l,n=a;break}u=u.sibling}if(!o){for(u=a.child;u;){if(u===n){o=!0,n=a,r=l;break}if(u===r){o=!0,r=a,n=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function fs(e){return e=fc(e),e!==null?ps(e):null}function ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ps(e);if(t!==null)return t;e=e.sibling}return null}var ms=x.unstable_scheduleCallback,hs=x.unstable_cancelCallback,pc=x.unstable_shouldYield,mc=x.unstable_requestPaint,Ie=x.unstable_now,hc=x.unstable_getCurrentPriorityLevel,ui=x.unstable_ImmediatePriority,gs=x.unstable_UserBlockingPriority,$r=x.unstable_NormalPriority,gc=x.unstable_LowPriority,vs=x.unstable_IdlePriority,qr=null,zt=null;function vc(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(qr,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:kc,yc=Math.log,xc=Math.LN2;function kc(e){return e>>>=0,e===0?32:31-(yc(e)/xc|0)|0}var Qr=64,Kr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=rr(u):(a&=o,a!==0&&(r=rr(a)))}else o=n&~l,o!==0?r=rr(o):a!==0&&(r=rr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),l=1<<n,r|=e[n],t&=~l;return r}function wc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-wt(a),u=1<<o,d=l[o];d===-1?((u&n)===0||(u&r)!==0)&&(l[o]=wc(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ys(){var e=Qr;return Qr<<=1,(Qr&4194240)===0&&(Qr=64),e}function di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function Nc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-wt(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function fi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var he=0;function xs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ks,pi,ws,js,Ns,mi=!1,Jr=[],Wt=null,$t=null,qt=null,ir=new Map,ar=new Map,Qt=[],Sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(t.pointerId)}}function sr(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=wr(t),t!==null&&pi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cc(e,t,n,r,l){switch(t){case"focusin":return Wt=sr(Wt,e,t,n,r,l),!0;case"dragenter":return $t=sr($t,e,t,n,r,l),!0;case"mouseover":return qt=sr(qt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return ir.set(a,sr(ir.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,ar.set(a,sr(ar.get(a)||null,e,t,n,r,l)),!0}return!1}function Cs(e){var t=dn(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=cs(n),t!==null){e.blockedOn=t,Ns(e.priority,function(){ws(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ri=r,n.target.dispatchEvent(r),ri=null}else return t=wr(n),t!==null&&pi(t),e.blockedOn=n,!1;t.shift()}return!0}function bs(e,t,n){Gr(e)&&n.delete(t)}function bc(){mi=!1,Wt!==null&&Gr(Wt)&&(Wt=null),$t!==null&&Gr($t)&&($t=null),qt!==null&&Gr(qt)&&(qt=null),ir.forEach(bs),ar.forEach(bs)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,mi||(mi=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,bc)))}function ur(e){function t(l){return or(l,e)}if(0<Jr.length){or(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&or(Wt,e),$t!==null&&or($t,e),qt!==null&&or(qt,e),ir.forEach(t),ar.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)Cs(n),n.blockedOn===null&&Qt.shift()}var bn=Z.ReactCurrentBatchConfig,Xr=!0;function Ec(e,t,n,r){var l=he,a=bn.transition;bn.transition=null;try{he=1,hi(e,t,n,r)}finally{he=l,bn.transition=a}}function zc(e,t,n,r){var l=he,a=bn.transition;bn.transition=null;try{he=4,hi(e,t,n,r)}finally{he=l,bn.transition=a}}function hi(e,t,n,r){if(Xr){var l=gi(e,t,n,r);if(l===null)_i(e,t,r,Zr,n),Ss(e,r);else if(Cc(l,e,t,n,r))r.stopPropagation();else if(Ss(e,r),t&4&&-1<Sc.indexOf(e)){for(;l!==null;){var a=wr(l);if(a!==null&&ks(a),a=gi(e,t,n,r),a===null&&_i(e,t,r,Zr,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var Zr=null;function gi(e,t,n,r){if(Zr=null,e=li(r),e=dn(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function Es(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hc()){case ui:return 1;case gs:return 4;case $r:case gc:return 16;case vs:return 536870912;default:return 16}default:return 16}}var Kt=null,vi=null,el=null;function zs(){if(el)return el;var e,t=vi,n=t.length,r,l="value"in Kt?Kt.value:Kt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[a-r];r++);return el=l.slice(e,1<r?1-r:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function Ps(){return!1}function ot(e){function t(n,r,l,a,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?nl:Ps,this.isPropagationStopped=Ps,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=ot(En),cr=f({},En,{view:0,detail:0}),Pc=ot(cr),xi,ki,dr,rl=f({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(xi=e.screenX-dr.screenX,ki=e.screenY-dr.screenY):ki=xi=0,dr=e),xi)},movementY:function(e){return"movementY"in e?e.movementY:ki}}),Ms=ot(rl),Mc=f({},rl,{dataTransfer:0}),Tc=ot(Mc),Ic=f({},cr,{relatedTarget:0}),wi=ot(Ic),_c=f({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),Lc=ot(_c),Dc=f({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ac=ot(Dc),Rc=f({},En,{data:0}),Ts=ot(Rc),Oc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uc[e])?!!t[e]:!1}function ji(){return Hc}var Bc=f({},cr,{key:function(e){if(e.key){var t=Oc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vc=ot(Bc),Wc=f({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=ot(Wc),$c=f({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),qc=ot($c),Qc=f({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kc=ot(Qc),Yc=f({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jc=ot(Yc),Gc=[9,13,27,32],Ni=Y&&"CompositionEvent"in window,fr=null;Y&&"documentMode"in document&&(fr=document.documentMode);var Xc=Y&&"TextEvent"in window&&!fr,_s=Y&&(!Ni||fr&&8<fr&&11>=fr),Ls=" ",Ds=!1;function As(e,t){switch(e){case"keyup":return Gc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Zc(e,t){switch(e){case"compositionend":return Rs(t);case"keypress":return t.which!==32?null:(Ds=!0,Ls);case"textInput":return e=t.data,e===Ls&&Ds?null:e;default:return null}}function ed(e,t){if(zn)return e==="compositionend"||!Ni&&As(e,t)?(e=zs(),el=vi=Kt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _s&&t.locale!=="ko"?null:t.data;default:return null}}var td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!td[e.type]:t==="textarea"}function Fs(e,t,n,r){is(r),t=ol(t,"onChange"),0<t.length&&(n=new yi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function nd(e){ro(e,0)}function ll(e){var t=_n(e);if(we(t))return e}function rd(e,t){if(e==="change")return t}var Us=!1;if(Y){var Si;if(Y){var Ci="oninput"in document;if(!Ci){var Hs=document.createElement("div");Hs.setAttribute("oninput","return;"),Ci=typeof Hs.oninput=="function"}Si=Ci}else Si=!1;Us=Si&&(!document.documentMode||9<document.documentMode)}function Bs(){pr&&(pr.detachEvent("onpropertychange",Vs),mr=pr=null)}function Vs(e){if(e.propertyName==="value"&&ll(mr)){var t=[];Fs(t,mr,e,li(e)),us(nd,t)}}function ld(e,t,n){e==="focusin"?(Bs(),pr=t,mr=n,pr.attachEvent("onpropertychange",Vs)):e==="focusout"&&Bs()}function id(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(mr)}function ad(e,t){if(e==="click")return ll(t)}function sd(e,t){if(e==="input"||e==="change")return ll(t)}function od(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:od;function hr(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!b.call(t,l)||!jt(e[l],t[l]))return!1}return!0}function Ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,t){var n=Ws(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ws(n)}}function qs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qs(){for(var e=window,t=Pe();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pe(e.document)}return t}function bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ud(e){var t=Qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qs(n.ownerDocument.documentElement,n)){if(r!==null&&bi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=$s(n,a);var o=$s(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cd=Y&&"documentMode"in document&&11>=document.documentMode,Pn=null,Ei=null,gr=null,zi=!1;function Ks(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||Pn==null||Pn!==Pe(r)||(r=Pn,"selectionStart"in r&&bi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&hr(gr,r)||(gr=r,r=ol(Ei,"onSelect"),0<r.length&&(t=new yi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function il(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Pi={},Ys={};Y&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function al(e){if(Pi[e])return Pi[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ys)return Pi[e]=t[n];return e}var Js=al("animationend"),Gs=al("animationiteration"),Xs=al("animationstart"),Zs=al("transitionend"),eo=new Map,to="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){eo.set(e,t),R(t,[e])}for(var Mi=0;Mi<to.length;Mi++){var Ti=to[Mi],dd=Ti.toLowerCase(),fd=Ti[0].toUpperCase()+Ti.slice(1);Yt(dd,"on"+fd)}Yt(Js,"onAnimationEnd"),Yt(Gs,"onAnimationIteration"),Yt(Xs,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(Zs,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pd=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function no(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dc(r,t,void 0,e),e.currentTarget=null}function ro(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],d=u.instance,v=u.currentTarget;if(u=u.listener,d!==a&&l.isPropagationStopped())break e;no(l,u,v),a=d}else for(o=0;o<r.length;o++){if(u=r[o],d=u.instance,v=u.currentTarget,u=u.listener,d!==a&&l.isPropagationStopped())break e;no(l,u,v),a=d}}}if(Wr)throw e=oi,Wr=!1,oi=null,e}function je(e,t){var n=t[Fi];n===void 0&&(n=t[Fi]=new Set);var r=e+"__bubble";n.has(r)||(lo(t,e,2,!1),n.add(r))}function Ii(e,t,n){var r=0;t&&(r|=4),lo(n,e,r,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[sl]){e[sl]=!0,H.forEach(function(n){n!=="selectionchange"&&(pd.has(n)||Ii(n,!1,e),Ii(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,Ii("selectionchange",!1,t))}}function lo(e,t,n,r){switch(Es(t)){case 1:var l=Ec;break;case 4:l=zc;break;default:l=hi}n=l.bind(null,t,n,e),l=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function _i(e,t,n,r,l){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;u!==null;){if(o=dn(u),o===null)return;if(d=o.tag,d===5||d===6){r=a=o;continue e}u=u.parentNode}}r=r.return}us(function(){var v=a,w=li(n),j=[];e:{var k=eo.get(e);if(k!==void 0){var T=yi,D=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":T=Vc;break;case"focusin":D="focus",T=wi;break;case"focusout":D="blur",T=wi;break;case"beforeblur":case"afterblur":T=wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Tc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=qc;break;case Js:case Gs:case Xs:T=Lc;break;case Zs:T=Kc;break;case"scroll":T=Pc;break;case"wheel":T=Jc;break;case"copy":case"cut":case"paste":T=Ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Is}var A=(t&4)!==0,_e=!A&&e==="scroll",m=A?k!==null?k+"Capture":null:k;A=[];for(var p=v,g;p!==null;){g=p;var N=g.stateNode;if(g.tag===5&&N!==null&&(g=N,m!==null&&(N=er(p,m),N!=null&&A.push(xr(p,N,g)))),_e)break;p=p.return}0<A.length&&(k=new T(k,D,null,n,w),j.push({event:k,listeners:A}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",k&&n!==ri&&(D=n.relatedTarget||n.fromElement)&&(dn(D)||D[Lt]))break e;if((T||k)&&(k=w.window===w?w:(k=w.ownerDocument)?k.defaultView||k.parentWindow:window,T?(D=n.relatedTarget||n.toElement,T=v,D=D?dn(D):null,D!==null&&(_e=cn(D),D!==_e||D.tag!==5&&D.tag!==6)&&(D=null)):(T=null,D=v),T!==D)){if(A=Ms,N="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(A=Is,N="onPointerLeave",m="onPointerEnter",p="pointer"),_e=T==null?k:_n(T),g=D==null?k:_n(D),k=new A(N,p+"leave",T,n,w),k.target=_e,k.relatedTarget=g,N=null,dn(w)===v&&(A=new A(m,p+"enter",D,n,w),A.target=g,A.relatedTarget=_e,N=A),_e=N,T&&D)t:{for(A=T,m=D,p=0,g=A;g;g=Tn(g))p++;for(g=0,N=m;N;N=Tn(N))g++;for(;0<p-g;)A=Tn(A),p--;for(;0<g-p;)m=Tn(m),g--;for(;p--;){if(A===m||m!==null&&A===m.alternate)break t;A=Tn(A),m=Tn(m)}A=null}else A=null;T!==null&&io(j,k,T,A,!1),D!==null&&_e!==null&&io(j,_e,D,A,!0)}}e:{if(k=v?_n(v):window,T=k.nodeName&&k.nodeName.toLowerCase(),T==="select"||T==="input"&&k.type==="file")var F=rd;else if(Os(k))if(Us)F=sd;else{F=id;var $=ld}else(T=k.nodeName)&&T.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(F=ad);if(F&&(F=F(e,v))){Fs(j,F,n,w);break e}$&&$(e,k,v),e==="focusout"&&($=k._wrapperState)&&$.controlled&&k.type==="number"&&kt(k,"number",k.value)}switch($=v?_n(v):window,e){case"focusin":(Os($)||$.contentEditable==="true")&&(Pn=$,Ei=v,gr=null);break;case"focusout":gr=Ei=Pn=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Ks(j,n,w);break;case"selectionchange":if(cd)break;case"keydown":case"keyup":Ks(j,n,w)}var q;if(Ni)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else zn?As(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(_s&&n.locale!=="ko"&&(zn||J!=="onCompositionStart"?J==="onCompositionEnd"&&zn&&(q=zs()):(Kt=w,vi="value"in Kt?Kt.value:Kt.textContent,zn=!0)),$=ol(v,J),0<$.length&&(J=new Ts(J,e,null,n,w),j.push({event:J,listeners:$}),q?J.data=q:(q=Rs(n),q!==null&&(J.data=q)))),(q=Xc?Zc(e,n):ed(e,n))&&(v=ol(v,"onBeforeInput"),0<v.length&&(w=new Ts("onBeforeInput","beforeinput",null,n,w),j.push({event:w,listeners:v}),w.data=q))}ro(j,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ol(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=er(e,n),a!=null&&r.unshift(xr(e,a,l)),a=er(e,t),a!=null&&r.push(xr(e,a,l))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function io(e,t,n,r,l){for(var a=t._reactName,o=[];n!==null&&n!==r;){var u=n,d=u.alternate,v=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&v!==null&&(u=v,l?(d=er(n,a),d!=null&&o.unshift(xr(n,d,u))):l||(d=er(n,a),d!=null&&o.push(xr(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var md=/\r\n?/g,hd=/\u0000|\uFFFD/g;function ao(e){return(typeof e=="string"?e:""+e).replace(md,`
`).replace(hd,"")}function ul(e,t,n){if(t=ao(t),ao(e)!==t&&n)throw Error(c(425))}function cl(){}var Li=null,Di=null;function Ai(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ri=typeof setTimeout=="function"?setTimeout:void 0,gd=typeof clearTimeout=="function"?clearTimeout:void 0,so=typeof Promise=="function"?Promise:void 0,vd=typeof queueMicrotask=="function"?queueMicrotask:typeof so<"u"?function(e){return so.resolve(null).then(e).catch(yd)}:Ri;function yd(e){setTimeout(function(){throw e})}function Oi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ur(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function oo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),Pt="__reactFiber$"+In,kr="__reactProps$"+In,Lt="__reactContainer$"+In,Fi="__reactEvents$"+In,xd="__reactListeners$"+In,kd="__reactHandles$"+In;function dn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=oo(e);e!==null;){if(n=e[Pt])return n;e=oo(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Pt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function dl(e){return e[kr]||null}var Ui=[],Ln=-1;function Gt(e){return{current:e}}function Ne(e){0>Ln||(e.current=Ui[Ln],Ui[Ln]=null,Ln--)}function xe(e,t){Ln++,Ui[Ln]=e.current,e.current=t}var Xt={},Qe=Gt(Xt),nt=Gt(!1),fn=Xt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function rt(e){return e=e.childContextTypes,e!=null}function fl(){Ne(nt),Ne(Qe)}function uo(e,t,n){if(Qe.current!==Xt)throw Error(c(168));xe(Qe,t),xe(nt,n)}function co(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(c(108,P(e)||"Unknown",l));return f({},n,r)}function pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,fn=Qe.current,xe(Qe,e),xe(nt,nt.current),!0}function fo(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=co(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,Ne(nt),Ne(Qe),xe(Qe,e)):Ne(nt),xe(nt,n)}var Dt=null,ml=!1,Hi=!1;function po(e){Dt===null?Dt=[e]:Dt.push(e)}function wd(e){ml=!0,po(e)}function Zt(){if(!Hi&&Dt!==null){Hi=!0;var e=0,t=he;try{var n=Dt;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,ml=!1}catch(l){throw Dt!==null&&(Dt=Dt.slice(e+1)),ms(ui,Zt),l}finally{he=t,Hi=!1}}return null}var An=[],Rn=0,hl=null,gl=0,mt=[],ht=0,pn=null,At=1,Rt="";function mn(e,t){An[Rn++]=gl,An[Rn++]=hl,hl=e,gl=t}function mo(e,t,n){mt[ht++]=At,mt[ht++]=Rt,mt[ht++]=pn,pn=e;var r=At;e=Rt;var l=32-wt(r)-1;r&=~(1<<l),n+=1;var a=32-wt(t)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,At=1<<32-wt(t)+l|n<<l|r,Rt=a+e}else At=1<<a|n<<l|r,Rt=e}function Bi(e){e.return!==null&&(mn(e,1),mo(e,1,0))}function Vi(e){for(;e===hl;)hl=An[--Rn],An[Rn]=null,gl=An[--Rn],An[Rn]=null;for(;e===pn;)pn=mt[--ht],mt[ht]=null,Rt=mt[--ht],mt[ht]=null,At=mt[--ht],mt[ht]=null}var ut=null,ct=null,Ce=!1,Nt=null;function ho(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function go(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:At,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,ct=null,!0):!1;default:return!1}}function Wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $i(e){if(Ce){var t=ct;if(t){var n=t;if(!go(e,t)){if(Wi(e))throw Error(c(418));t=Jt(n.nextSibling);var r=ut;t&&go(e,t)?ho(r,n):(e.flags=e.flags&-4097|2,Ce=!1,ut=e)}}else{if(Wi(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ce=!1,ut=e}}}function vo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function vl(e){if(e!==ut)return!1;if(!Ce)return vo(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ai(e.type,e.memoizedProps)),t&&(t=ct)){if(Wi(e))throw yo(),Error(c(418));for(;t;)ho(e,t),t=Jt(t.nextSibling)}if(vo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?Jt(e.stateNode.nextSibling):null;return!0}function yo(){for(var e=ct;e;)e=Jt(e.nextSibling)}function On(){ct=ut=null,Ce=!1}function qi(e){Nt===null?Nt=[e]:Nt.push(e)}var jd=Z.ReactCurrentBatchConfig;function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var u=l.refs;o===null?delete u[a]:u[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function yl(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){var t=e._init;return t(e._payload)}function ko(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function l(m,p){return m=on(m,p),m.index=0,m.sibling=null,m}function a(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,p,g,N){return p===null||p.tag!==6?(p=Ra(g,m.mode,N),p.return=m,p):(p=l(p,g),p.return=m,p)}function d(m,p,g,N){var F=g.type;return F===ke?w(m,p,g.props.children,N,g.key):p!==null&&(p.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ve&&xo(F)===p.type)?(N=l(p,g.props),N.ref=jr(m,p,g),N.return=m,N):(N=Bl(g.type,g.key,g.props,null,m.mode,N),N.ref=jr(m,p,g),N.return=m,N)}function v(m,p,g,N){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Oa(g,m.mode,N),p.return=m,p):(p=l(p,g.children||[]),p.return=m,p)}function w(m,p,g,N,F){return p===null||p.tag!==7?(p=jn(g,m.mode,N,F),p.return=m,p):(p=l(p,g),p.return=m,p)}function j(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ra(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ze:return g=Bl(p.type,p.key,p.props,null,m.mode,g),g.ref=jr(m,null,p),g.return=m,g;case ce:return p=Oa(p,m.mode,g),p.return=m,p;case ve:var N=p._init;return j(m,N(p._payload),g)}if(qe(p)||W(p))return p=jn(p,m.mode,g,null),p.return=m,p;yl(m,p)}return null}function k(m,p,g,N){var F=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return F!==null?null:u(m,p,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ze:return g.key===F?d(m,p,g,N):null;case ce:return g.key===F?v(m,p,g,N):null;case ve:return F=g._init,k(m,p,F(g._payload),N)}if(qe(g)||W(g))return F!==null?null:w(m,p,g,N,null);yl(m,g)}return null}function T(m,p,g,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return m=m.get(g)||null,u(p,m,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ze:return m=m.get(N.key===null?g:N.key)||null,d(p,m,N,F);case ce:return m=m.get(N.key===null?g:N.key)||null,v(p,m,N,F);case ve:var $=N._init;return T(m,p,g,$(N._payload),F)}if(qe(N)||W(N))return m=m.get(g)||null,w(p,m,N,F,null);yl(p,N)}return null}function D(m,p,g,N){for(var F=null,$=null,q=p,J=p=0,Be=null;q!==null&&J<g.length;J++){q.index>J?(Be=q,q=null):Be=q.sibling;var de=k(m,q,g[J],N);if(de===null){q===null&&(q=Be);break}e&&q&&de.alternate===null&&t(m,q),p=a(de,p,J),$===null?F=de:$.sibling=de,$=de,q=Be}if(J===g.length)return n(m,q),Ce&&mn(m,J),F;if(q===null){for(;J<g.length;J++)q=j(m,g[J],N),q!==null&&(p=a(q,p,J),$===null?F=q:$.sibling=q,$=q);return Ce&&mn(m,J),F}for(q=r(m,q);J<g.length;J++)Be=T(q,m,J,g[J],N),Be!==null&&(e&&Be.alternate!==null&&q.delete(Be.key===null?J:Be.key),p=a(Be,p,J),$===null?F=Be:$.sibling=Be,$=Be);return e&&q.forEach(function(un){return t(m,un)}),Ce&&mn(m,J),F}function A(m,p,g,N){var F=W(g);if(typeof F!="function")throw Error(c(150));if(g=F.call(g),g==null)throw Error(c(151));for(var $=F=null,q=p,J=p=0,Be=null,de=g.next();q!==null&&!de.done;J++,de=g.next()){q.index>J?(Be=q,q=null):Be=q.sibling;var un=k(m,q,de.value,N);if(un===null){q===null&&(q=Be);break}e&&q&&un.alternate===null&&t(m,q),p=a(un,p,J),$===null?F=un:$.sibling=un,$=un,q=Be}if(de.done)return n(m,q),Ce&&mn(m,J),F;if(q===null){for(;!de.done;J++,de=g.next())de=j(m,de.value,N),de!==null&&(p=a(de,p,J),$===null?F=de:$.sibling=de,$=de);return Ce&&mn(m,J),F}for(q=r(m,q);!de.done;J++,de=g.next())de=T(q,m,J,de.value,N),de!==null&&(e&&de.alternate!==null&&q.delete(de.key===null?J:de.key),p=a(de,p,J),$===null?F=de:$.sibling=de,$=de);return e&&q.forEach(function(tf){return t(m,tf)}),Ce&&mn(m,J),F}function _e(m,p,g,N){if(typeof g=="object"&&g!==null&&g.type===ke&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ze:e:{for(var F=g.key,$=p;$!==null;){if($.key===F){if(F=g.type,F===ke){if($.tag===7){n(m,$.sibling),p=l($,g.props.children),p.return=m,m=p;break e}}else if($.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ve&&xo(F)===$.type){n(m,$.sibling),p=l($,g.props),p.ref=jr(m,$,g),p.return=m,m=p;break e}n(m,$);break}else t(m,$);$=$.sibling}g.type===ke?(p=jn(g.props.children,m.mode,N,g.key),p.return=m,m=p):(N=Bl(g.type,g.key,g.props,null,m.mode,N),N.ref=jr(m,p,g),N.return=m,m=N)}return o(m);case ce:e:{for($=g.key;p!==null;){if(p.key===$)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=l(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Oa(g,m.mode,N),p.return=m,m=p}return o(m);case ve:return $=g._init,_e(m,p,$(g._payload),N)}if(qe(g))return D(m,p,g,N);if(W(g))return A(m,p,g,N);yl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=l(p,g),p.return=m,m=p):(n(m,p),p=Ra(g,m.mode,N),p.return=m,m=p),o(m)):n(m,p)}return _e}var Fn=ko(!0),wo=ko(!1),xl=Gt(null),kl=null,Un=null,Qi=null;function Ki(){Qi=Un=kl=null}function Yi(e){var t=xl.current;Ne(xl),e._currentValue=t}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){kl=e,Qi=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(kl===null)throw Error(c(308));Un=e,kl.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var hn=null;function Gi(e){hn===null?hn=[e]:hn.push(e)}function jo(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Gi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function No(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ue&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ot(e,n)}return l=r.interleaved,l===null?(t.next=t,Gi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ot(e,n)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fi(e,n)}}function So(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jl(e,t,n,r){var l=e.updateQueue;en=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var d=u,v=d.next;d.next=null,o===null?a=v:o.next=v,o=d;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==o&&(u===null?w.firstBaseUpdate=v:u.next=v,w.lastBaseUpdate=d))}if(a!==null){var j=l.baseState;o=0,w=v=d=null,u=a;do{var k=u.lane,T=u.eventTime;if((r&k)===k){w!==null&&(w=w.next={eventTime:T,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var D=e,A=u;switch(k=t,T=n,A.tag){case 1:if(D=A.payload,typeof D=="function"){j=D.call(T,j,k);break e}j=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=A.payload,k=typeof D=="function"?D.call(T,j,k):D,k==null)break e;j=f({},j,k);break e;case 2:en=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,k=l.effects,k===null?l.effects=[u]:k.push(u))}else T={eventTime:T,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(v=w=T,d=j):w=w.next=T,o|=k;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;k=u,u=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);if(w===null&&(d=j),l.baseState=d,l.firstBaseUpdate=v,l.lastBaseUpdate=w,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);yn|=o,e.lanes=o,e.memoizedState=j}}function Co(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(c(191,l));l.call(r)}}}var Nr={},Mt=Gt(Nr),Sr=Gt(Nr),Cr=Gt(Nr);function gn(e){if(e===Nr)throw Error(c(174));return e}function Zi(e,t){switch(xe(Cr,t),xe(Sr,e),xe(Mt,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xn(t,e)}Ne(Mt),xe(Mt,t)}function Bn(){Ne(Mt),Ne(Sr),Ne(Cr)}function bo(e){gn(Cr.current);var t=gn(Mt.current),n=Xn(t,e.type);t!==n&&(xe(Sr,e),xe(Mt,n))}function ea(e){Sr.current===e&&(Ne(Mt),Ne(Sr))}var be=Gt(0);function Nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ta=[];function na(){for(var e=0;e<ta.length;e++)ta[e]._workInProgressVersionPrimary=null;ta.length=0}var Sl=Z.ReactCurrentDispatcher,ra=Z.ReactCurrentBatchConfig,vn=0,Ee=null,Re=null,Ue=null,Cl=!1,br=!1,Er=0,Nd=0;function Ke(){throw Error(c(321))}function la(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,l,a){if(vn=a,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sl.current=e===null||e.memoizedState===null?Ed:zd,e=n(r,l),br){a=0;do{if(br=!1,Er=0,25<=a)throw Error(c(301));a+=1,Ue=Re=null,t.updateQueue=null,Sl.current=Pd,e=n(r,l)}while(br)}if(Sl.current=zl,t=Re!==null&&Re.next!==null,vn=0,Ue=Re=Ee=null,Cl=!1,t)throw Error(c(300));return e}function aa(){var e=Er!==0;return Er=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ee.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function vt(){if(Re===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ue===null?Ee.memoizedState:Ue.next;if(t!==null)Ue=t,Re=e;else{if(e===null)throw Error(c(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ue===null?Ee.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function zr(e,t){return typeof t=="function"?t(e):t}function sa(e){var t=vt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=Re,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var u=o=null,d=null,v=a;do{var w=v.lane;if((vn&w)===w)d!==null&&(d=d.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var j={lane:w,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};d===null?(u=d=j,o=r):d=d.next=j,Ee.lanes|=w,yn|=w}v=v.next}while(v!==null&&v!==a);d===null?o=r:d.next=u,jt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,Ee.lanes|=a,yn|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oa(e){var t=vt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);jt(a,t.memoizedState)||(lt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Eo(){}function zo(e,t){var n=Ee,r=vt(),l=t(),a=!jt(r.memoizedState,l);if(a&&(r.memoizedState=l,lt=!0),r=r.queue,ua(To.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Pr(9,Mo.bind(null,n,r,l,t),void 0,null),He===null)throw Error(c(349));(vn&30)!==0||Po(n,t,l)}return l}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mo(e,t,n,r){t.value=n,t.getSnapshot=r,Io(t)&&_o(e)}function To(e,t,n){return n(function(){Io(t)&&_o(e)})}function Io(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function _o(e){var t=Ot(e,1);t!==null&&Et(t,e,1,-1)}function Lo(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=bd.bind(null,Ee,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Do(){return vt().memoizedState}function bl(e,t,n,r){var l=Tt();Ee.flags|=e,l.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var l=vt();r=r===void 0?null:r;var a=void 0;if(Re!==null){var o=Re.memoizedState;if(a=o.destroy,r!==null&&la(r,o.deps)){l.memoizedState=Pr(t,n,a,r);return}}Ee.flags|=e,l.memoizedState=Pr(1|t,n,a,r)}function Ao(e,t){return bl(8390656,8,e,t)}function ua(e,t){return El(2048,8,e,t)}function Ro(e,t){return El(4,2,e,t)}function Oo(e,t){return El(4,4,e,t)}function Fo(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uo(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,Fo.bind(null,t,e),n)}function ca(){}function Ho(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&la(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bo(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&la(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vo(e,t,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(jt(n,t)||(n=ys(),Ee.lanes|=n,yn|=n,e.baseState=!0),t)}function Sd(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=ra.transition;ra.transition={};try{e(!1),t()}finally{he=n,ra.transition=r}}function Wo(){return vt().memoizedState}function Cd(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$o(e))qo(t,n);else if(n=jo(e,t,n,r),n!==null){var l=Ze();Et(n,e,r,l),Qo(n,t,r)}}function bd(e,t,n){var r=an(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($o(e))qo(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,u=a(o,n);if(l.hasEagerState=!0,l.eagerState=u,jt(u,o)){var d=t.interleaved;d===null?(l.next=l,Gi(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=jo(e,t,l,r),n!==null&&(l=Ze(),Et(n,e,r,l),Qo(n,t,r))}}function $o(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function qo(e,t){br=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fi(e,n)}}var zl={readContext:gt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Ed={readContext:gt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Ao,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bl(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bl(4194308,4,e,t)},useInsertionEffect:function(e,t){return bl(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cd.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Lo,useDebugValue:ca,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Lo(!1),t=e[0];return e=Sd.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,l=Tt();if(Ce){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),He===null)throw Error(c(349));(vn&30)!==0||Po(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,Ao(To.bind(null,r,a,e),[e]),r.flags|=2048,Pr(9,Mo.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Tt(),t=He.identifierPrefix;if(Ce){var n=Rt,r=At;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zd={readContext:gt,useCallback:Ho,useContext:gt,useEffect:ua,useImperativeHandle:Uo,useInsertionEffect:Ro,useLayoutEffect:Oo,useMemo:Bo,useReducer:sa,useRef:Do,useState:function(){return sa(zr)},useDebugValue:ca,useDeferredValue:function(e){var t=vt();return Vo(t,Re.memoizedState,e)},useTransition:function(){var e=sa(zr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Eo,useSyncExternalStore:zo,useId:Wo,unstable_isNewReconciler:!1},Pd={readContext:gt,useCallback:Ho,useContext:gt,useEffect:ua,useImperativeHandle:Uo,useInsertionEffect:Ro,useLayoutEffect:Oo,useMemo:Bo,useReducer:oa,useRef:Do,useState:function(){return oa(zr)},useDebugValue:ca,useDeferredValue:function(e){var t=vt();return Re===null?t.memoizedState=e:Vo(t,Re.memoizedState,e)},useTransition:function(){var e=oa(zr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Eo,useSyncExternalStore:zo,useId:Wo,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=f({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pl={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=an(e),a=Ft(r,l);a.payload=t,n!=null&&(a.callback=n),t=tn(e,a,l),t!==null&&(Et(t,e,l,r),wl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=an(e),a=Ft(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=tn(e,a,l),t!==null&&(Et(t,e,l,r),wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=an(e),l=Ft(n,r);l.tag=2,t!=null&&(l.callback=t),t=tn(e,l,r),t!==null&&(Et(t,e,r,n),wl(t,e,r))}};function Ko(e,t,n,r,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(l,a):!0}function Yo(e,t,n){var r=!1,l=Xt,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(l=rt(t)?fn:Qe.current,r=t.contextTypes,a=(r=r!=null)?Dn(e,l):Xt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Jo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pl.enqueueReplaceState(t,t.state,null)}function fa(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Xi(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=gt(a):(a=rt(t)?fn:Qe.current,l.context=Dn(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(da(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Pl.enqueueReplaceState(l,l.state,null),jl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=M(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Md=typeof WeakMap=="function"?WeakMap:Map;function Go(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Al||(Al=!0,Pa=r),ma(e,t)},n}function Xo(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ma(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ma(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Zo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Md;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Wd.bind(null,e,t,n),t.then(e,e))}function eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Td=Z.ReactCurrentOwner,lt=!1;function Xe(e,t,n,r){t.child=e===null?wo(t,null,n,r):Fn(t,e.child,n,r)}function nu(e,t,n,r,l){n=n.render;var a=t.ref;return Hn(t,l),r=ia(e,t,n,r,a,l),n=aa(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ut(e,t,l)):(Ce&&n&&Bi(t),t.flags|=1,Xe(e,t,r,l),t.child)}function ru(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!Aa(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,lu(e,t,a,r,l)):(e=Bl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&l)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:hr,n(o,r)&&e.ref===t.ref)return Ut(e,t,l)}return t.flags|=1,e=on(a,r),e.ref=t.ref,e.return=t,t.child=e}function lu(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(hr(a,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Ut(e,t,l)}return ha(e,t,n,r,l)}function iu(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe($n,dt),dt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe($n,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,xe($n,dt),dt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,xe($n,dt),dt|=r;return Xe(e,t,l,n),t.child}function au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ha(e,t,n,r,l){var a=rt(n)?fn:Qe.current;return a=Dn(t,a),Hn(t,l),n=ia(e,t,n,r,a,l),r=aa(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ut(e,t,l)):(Ce&&r&&Bi(t),t.flags|=1,Xe(e,t,n,l),t.child)}function su(e,t,n,r,l){if(rt(n)){var a=!0;pl(t)}else a=!1;if(Hn(t,l),t.stateNode===null)Tl(e,t),Yo(t,n,r),fa(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var d=o.context,v=n.contextType;typeof v=="object"&&v!==null?v=gt(v):(v=rt(n)?fn:Qe.current,v=Dn(t,v));var w=n.getDerivedStateFromProps,j=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function";j||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||d!==v)&&Jo(t,o,r,v),en=!1;var k=t.memoizedState;o.state=k,jl(t,r,o,l),d=t.memoizedState,u!==r||k!==d||nt.current||en?(typeof w=="function"&&(da(t,n,w,r),d=t.memoizedState),(u=en||Ko(t,n,u,r,k,d,v))?(j||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=v,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,No(e,t),u=t.memoizedProps,v=t.type===t.elementType?u:St(t.type,u),o.props=v,j=t.pendingProps,k=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=gt(d):(d=rt(n)?fn:Qe.current,d=Dn(t,d));var T=n.getDerivedStateFromProps;(w=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==j||k!==d)&&Jo(t,o,r,d),en=!1,k=t.memoizedState,o.state=k,jl(t,r,o,l);var D=t.memoizedState;u!==j||k!==D||nt.current||en?(typeof T=="function"&&(da(t,n,T,r),D=t.memoizedState),(v=en||Ko(t,n,v,r,k,D,d)||!1)?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,D,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,D,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=D),o.props=r,o.state=D,o.context=d,r=v):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,a,l)}function ga(e,t,n,r,l,a){au(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&fo(t,n,!1),Ut(e,t,a);r=t.stateNode,Td.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fn(t,e.child,null,a),t.child=Fn(t,null,u,a)):Xe(e,t,u,a),t.memoizedState=r.state,l&&fo(t,n,!0),t.child}function ou(e){var t=e.stateNode;t.pendingContext?uo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uo(e,t.context,!1),Zi(e,t.containerInfo)}function uu(e,t,n,r,l){return On(),qi(l),t.flags|=256,Xe(e,t,n,r),t.child}var va={dehydrated:null,treeContext:null,retryLane:0};function ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function cu(e,t,n){var r=t.pendingProps,l=be.current,a=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),xe(be,l&1),e===null)return $i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Vl(o,r,0,null),e=jn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ya(n),t.memoizedState=va,e):xa(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Id(e,t,o,r,u,l,n);if(a){a=r.fallback,o=t.mode,l=e.child,u=l.sibling;var d={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=on(l,d),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?a=on(u,a):(a=jn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ya(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=va,r}return a=e.child,e=a.sibling,r=on(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xa(e,t){return t=Vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ml(e,t,n,r){return r!==null&&qi(r),Fn(t,e.child,null,n),e=xa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Id(e,t,n,r,l,a,o){if(n)return t.flags&256?(t.flags&=-257,r=pa(Error(c(422))),Ml(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=Vl({mode:"visible",children:r.children},l,0,null),a=jn(a,l,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Fn(t,e.child,null,o),t.child.memoizedState=ya(o),t.memoizedState=va,a);if((t.mode&1)===0)return Ml(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(c(419)),r=pa(a,r,void 0),Ml(e,t,o,r)}if(u=(o&e.childLanes)!==0,lt||u){if(r=He,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,Ot(e,l),Et(r,e,l,-1))}return Da(),r=pa(Error(c(421))),Ml(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=$d.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,ct=Jt(l.nextSibling),ut=t,Ce=!0,Nt=null,e!==null&&(mt[ht++]=At,mt[ht++]=Rt,mt[ht++]=pn,At=e.id,Rt=e.overflow,pn=t),t=xa(t,r.children),t.flags|=4096,t)}function du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function ka(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function fu(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(Xe(e,t,r.children,n),r=be.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,n,t);else if(e.tag===19)du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(be,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Nl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ka(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Nl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ka(t,!0,n,null,a);break;case"together":ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _d(e,t,n){switch(t.tag){case 3:ou(t),On();break;case 5:bo(t);break;case 1:rt(t.type)&&pl(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;xe(xl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(be,be.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?cu(e,t,n):(xe(be,be.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);xe(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return fu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),xe(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,iu(e,t,n)}return Ut(e,t,n)}var pu,wa,mu,hu;pu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},wa=function(){},mu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,gn(Mt.current);var a=null;switch(n){case"input":l=ie(e,l),r=ie(e,r),a=[];break;case"select":l=f({},l,{value:void 0}),r=f({},r,{value:void 0}),a=[];break;case"textarea":l=Yn(e,l),r=Yn(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}ti(n,r);var o;n=null;for(v in l)if(!r.hasOwnProperty(v)&&l.hasOwnProperty(v)&&l[v]!=null)if(v==="style"){var u=l[v];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(C.hasOwnProperty(v)?a||(a=[]):(a=a||[]).push(v,null));for(v in r){var d=r[v];if(u=l!=null?l[v]:void 0,r.hasOwnProperty(v)&&d!==u&&(d!=null||u!=null))if(v==="style")if(u){for(o in u)!u.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&u[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(a||(a=[]),a.push(v,n)),n=d;else v==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(v,d)):v==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(v,""+d):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(C.hasOwnProperty(v)?(d!=null&&v==="onScroll"&&je("scroll",e),a||u===d||(a=[])):(a=a||[]).push(v,d))}n&&(a=a||[]).push("style",n);var v=a;(t.updateQueue=v)&&(t.flags|=4)}},hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ld(e,t,n){var r=t.pendingProps;switch(Vi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return rt(t.type)&&fl(),Ye(t),null;case 3:return r=t.stateNode,Bn(),Ne(nt),Ne(Qe),na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(Ia(Nt),Nt=null))),wa(e,t),Ye(t),null;case 5:ea(t);var l=gn(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)mu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Ye(t),null}if(e=gn(Mt.current),vl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Pt]=t,r[kr]=a,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(l=0;l<vr.length;l++)je(vr[l],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Ve(r,a),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},je("invalid",r);break;case"textarea":Ur(r,a),je("invalid",r)}ti(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&ul(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&ul(r.textContent,u,e),l=["children",""+u]):C.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":fe(r),pt(r,a,!0);break;case"textarea":fe(r),Hr(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=cl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Pt]=t,e[kr]=r,pu(e,t,!1,!1),t.stateNode=e;e:{switch(o=ni(n,r),n){case"dialog":je("cancel",e),je("close",e),l=r;break;case"iframe":case"object":case"embed":je("load",e),l=r;break;case"video":case"audio":for(l=0;l<vr.length;l++)je(vr[l],e);l=r;break;case"source":je("error",e),l=r;break;case"img":case"image":case"link":je("error",e),je("load",e),l=r;break;case"details":je("toggle",e),l=r;break;case"input":Ve(e,r),l=ie(e,r),je("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=f({},r,{value:void 0}),je("invalid",e);break;case"textarea":Ur(e,r),l=Yn(e,r),je("invalid",e);break;default:l=r}ti(n,l),u=l;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?rs(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Zn(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Vt(e,d):typeof d=="number"&&Vt(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(C.hasOwnProperty(a)?d!=null&&a==="onScroll"&&je("scroll",e):d!=null&&me(e,a,d,o))}switch(n){case"input":fe(e),pt(e,r,!1);break;case"textarea":fe(e),Hr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Bt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=gn(Cr.current),gn(Mt.current),vl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(a=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Ye(t),null;case 13:if(Ne(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)yo(),On(),t.flags|=98560,a=!1;else if(a=vl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Pt]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),a=!1}else Nt!==null&&(Ia(Nt),Nt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(be.current&1)!==0?Oe===0&&(Oe=3):Da())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Bn(),wa(e,t),e===null&&yr(t.stateNode.containerInfo),Ye(t),null;case 10:return Yi(t.type._context),Ye(t),null;case 17:return rt(t.type)&&fl(),Ye(t),null;case 19:if(Ne(be),a=t.memoizedState,a===null)return Ye(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Mr(a,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Nl(e),o!==null){for(t.flags|=128,Mr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(be,be.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ie()>qn&&(t.flags|=128,r=!0,Mr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Nl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ce)return Ye(t),null}else 2*Ie()-a.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,Mr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ie(),t.sibling=null,n=be.current,xe(be,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return La(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(dt&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Dd(e,t){switch(Vi(t),t.tag){case 1:return rt(t.type)&&fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),Ne(nt),Ne(Qe),na(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ea(t),null;case 13:if(Ne(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(be),null;case 4:return Bn(),null;case 10:return Yi(t.type._context),null;case 22:case 23:return La(),null;case 24:return null;default:return null}}var Il=!1,Je=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,L=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function ja(e,t,n){try{n()}catch(r){Me(e,t,r)}}var gu=!1;function Rd(e,t){if(Li=Xr,e=Qs(),bi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,u=-1,d=-1,v=0,w=0,j=e,k=null;t:for(;;){for(var T;j!==n||l!==0&&j.nodeType!==3||(u=o+l),j!==a||r!==0&&j.nodeType!==3||(d=o+r),j.nodeType===3&&(o+=j.nodeValue.length),(T=j.firstChild)!==null;)k=j,j=T;for(;;){if(j===e)break t;if(k===n&&++v===l&&(u=o),k===a&&++w===r&&(d=o),(T=j.nextSibling)!==null)break;j=k,k=j.parentNode}j=T}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Di={focusedElem:e,selectionRange:n},Xr=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var D=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var A=D.memoizedProps,_e=D.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?A:St(t.type,A),_e);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(N){Me(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return D=gu,gu=!1,D}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&ja(t,n,a)}l=l.next}while(l!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vu(e){var t=e.alternate;t!==null&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[kr],delete t[Fi],delete t[xd],delete t[kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yu(e){return e.tag===5||e.tag===3||e.tag===4}function xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var We=null,Ct=!1;function nn(e,t,n){for(n=n.child;n!==null;)ku(e,t,n),n=n.sibling}function ku(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(qr,n)}catch{}switch(n.tag){case 5:Je||Wn(n,t);case 6:var r=We,l=Ct;We=null,nn(e,t,n),We=r,Ct=l,We!==null&&(Ct?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Ct?(e=We,n=n.stateNode,e.nodeType===8?Oi(e.parentNode,n):e.nodeType===1&&Oi(e,n),ur(e)):Oi(We,n.stateNode));break;case 4:r=We,l=Ct,We=n.stateNode.containerInfo,Ct=!0,nn(e,t,n),We=r,Ct=l;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&ja(n,t,o),l=l.next}while(l!==r)}nn(e,t,n);break;case 1:if(!Je&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Me(n,t,u)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,nn(e,t,n),Je=r):nn(e,t,n);break;default:nn(e,t,n)}}function wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ad),t.forEach(function(r){var l=qd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:We=u.stateNode,Ct=!1;break e;case 3:We=u.stateNode.containerInfo,Ct=!0;break e;case 4:We=u.stateNode.containerInfo,Ct=!0;break e}u=u.return}if(We===null)throw Error(c(160));ku(a,o,l),We=null,Ct=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(v){Me(l,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ju(t,e),t=t.sibling}function ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),It(e),r&4){try{Tr(3,e,e.return),_l(3,e)}catch(A){Me(e,e.return,A)}try{Tr(5,e,e.return)}catch(A){Me(e,e.return,A)}}break;case 1:bt(t,e),It(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(bt(t,e),It(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var l=e.stateNode;try{Vt(l,"")}catch(A){Me(e,e.return,A)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&tt(l,a),ni(u,o);var v=ni(u,a);for(o=0;o<d.length;o+=2){var w=d[o],j=d[o+1];w==="style"?rs(l,j):w==="dangerouslySetInnerHTML"?Zn(l,j):w==="children"?Vt(l,j):me(l,w,j,v)}switch(u){case"input":Ge(l,a);break;case"textarea":Jn(l,a);break;case"select":var k=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var T=a.value;T!=null?Bt(l,!!a.multiple,T,!1):k!==!!a.multiple&&(a.defaultValue!=null?Bt(l,!!a.multiple,a.defaultValue,!0):Bt(l,!!a.multiple,a.multiple?[]:"",!1))}l[kr]=a}catch(A){Me(e,e.return,A)}}break;case 6:if(bt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(A){Me(e,e.return,A)}}break;case 3:if(bt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(A){Me(e,e.return,A)}break;case 4:bt(t,e),It(e);break;case 13:bt(t,e),It(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(za=Ie())),r&4&&wu(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(v=Je)||w,bt(t,e),Je=v):bt(t,e),It(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!w&&(e.mode&1)!==0)for(L=e,w=e.child;w!==null;){for(j=L=w;L!==null;){switch(k=L,T=k.child,k.tag){case 0:case 11:case 14:case 15:Tr(4,k,k.return);break;case 1:Wn(k,k.return);var D=k.stateNode;if(typeof D.componentWillUnmount=="function"){r=k,n=k.return;try{t=r,D.props=t.memoizedProps,D.state=t.memoizedState,D.componentWillUnmount()}catch(A){Me(r,n,A)}}break;case 5:Wn(k,k.return);break;case 22:if(k.memoizedState!==null){Cu(j);continue}}T!==null?(T.return=k,L=T):Cu(j)}w=w.sibling}e:for(w=null,j=e;;){if(j.tag===5){if(w===null){w=j;try{l=j.stateNode,v?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=j.stateNode,d=j.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Br("display",o))}catch(A){Me(e,e.return,A)}}}else if(j.tag===6){if(w===null)try{j.stateNode.nodeValue=v?"":j.memoizedProps}catch(A){Me(e,e.return,A)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;w===j&&(w=null),j=j.return}w===j&&(w=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:bt(t,e),It(e),r&4&&wu(e);break;case 21:break;default:bt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yu(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vt(l,""),r.flags&=-33);var a=xu(e);Ca(e,a,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=xu(e);Sa(e,u,o);break;default:throw Error(c(161))}}catch(d){Me(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Od(e,t,n){L=e,Nu(e)}function Nu(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var l=L,a=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Il;if(!o){var u=l.alternate,d=u!==null&&u.memoizedState!==null||Je;u=Il;var v=Je;if(Il=o,(Je=d)&&!v)for(L=l;L!==null;)o=L,d=o.child,o.tag===22&&o.memoizedState!==null?bu(l):d!==null?(d.return=o,L=d):bu(l);for(;a!==null;)L=a,Nu(a),a=a.sibling;L=l,Il=u,Je=v}Su(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,L=a):Su(e)}}function Su(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Co(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Co(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var w=v.memoizedState;if(w!==null){var j=w.dehydrated;j!==null&&ur(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Je||t.flags&512&&Na(t)}catch(k){Me(t,t.return,k)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Cu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function bu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(d){Me(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){Me(t,l,d)}}var a=t.return;try{Na(t)}catch(d){Me(t,a,d)}break;case 5:var o=t.return;try{Na(t)}catch(d){Me(t,o,d)}}}catch(d){Me(t,t.return,d)}if(t===e){L=null;break}var u=t.sibling;if(u!==null){u.return=t.return,L=u;break}L=t.return}}var Fd=Math.ceil,Ll=Z.ReactCurrentDispatcher,ba=Z.ReactCurrentOwner,yt=Z.ReactCurrentBatchConfig,ue=0,He=null,De=null,$e=0,dt=0,$n=Gt(0),Oe=0,Ir=null,yn=0,Dl=0,Ea=0,_r=null,it=null,za=0,qn=1/0,Ht=null,Al=!1,Pa=null,rn=null,Rl=!1,ln=null,Ol=0,Lr=0,Ma=null,Fl=-1,Ul=0;function Ze(){return(ue&6)!==0?Ie():Fl!==-1?Fl:Fl=Ie()}function an(e){return(e.mode&1)===0?1:(ue&2)!==0&&$e!==0?$e&-$e:jd.transition!==null?(Ul===0&&(Ul=ys()),Ul):(e=he,e!==0||(e=window.event,e=e===void 0?16:Es(e.type)),e)}function Et(e,t,n,r){if(50<Lr)throw Lr=0,Ma=null,Error(c(185));lr(e,n,r),((ue&2)===0||e!==He)&&(e===He&&((ue&2)===0&&(Dl|=n),Oe===4&&sn(e,$e)),at(e,r),n===1&&ue===0&&(t.mode&1)===0&&(qn=Ie()+500,ml&&Zt()))}function at(e,t){var n=e.callbackNode;jc(e,t);var r=Yr(e,e===He?$e:0);if(r===0)n!==null&&hs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hs(n),t===1)e.tag===0?wd(zu.bind(null,e)):po(zu.bind(null,e)),vd(function(){(ue&6)===0&&Zt()}),n=null;else{switch(xs(r)){case 1:n=ui;break;case 4:n=gs;break;case 16:n=$r;break;case 536870912:n=vs;break;default:n=$r}n=Au(n,Eu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Eu(e,t){if(Fl=-1,Ul=0,(ue&6)!==0)throw Error(c(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=Yr(e,e===He?$e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Hl(e,r);else{t=r;var l=ue;ue|=2;var a=Mu();(He!==e||$e!==t)&&(Ht=null,qn=Ie()+500,kn(e,t));do try{Bd();break}catch(u){Pu(e,u)}while(!0);Ki(),Ll.current=a,ue=l,De!==null?t=0:(He=null,$e=0,t=Oe)}if(t!==0){if(t===2&&(l=ci(e),l!==0&&(r=l,t=Ta(e,l))),t===1)throw n=Ir,kn(e,0),sn(e,r),at(e,Ie()),n;if(t===6)sn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Ud(l)&&(t=Hl(e,r),t===2&&(a=ci(e),a!==0&&(r=a,t=Ta(e,a))),t===1))throw n=Ir,kn(e,0),sn(e,r),at(e,Ie()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:wn(e,it,Ht);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=za+500-Ie(),10<t)){if(Yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ri(wn.bind(null,e,it,Ht),t);break}wn(e,it,Ht);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-wt(r);a=1<<o,o=t[o],o>l&&(l=o),r&=~a}if(r=l,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fd(r/1960))-r,10<r){e.timeoutHandle=Ri(wn.bind(null,e,it,Ht),r);break}wn(e,it,Ht);break;case 5:wn(e,it,Ht);break;default:throw Error(c(329))}}}return at(e,Ie()),e.callbackNode===n?Eu.bind(null,e):null}function Ta(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Hl(e,t),e!==2&&(t=it,it=n,t!==null&&Ia(t)),e}function Ia(e){it===null?it=e:it.push.apply(it,e)}function Ud(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!jt(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Ea,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function zu(e){if((ue&6)!==0)throw Error(c(327));Qn();var t=Yr(e,0);if((t&1)===0)return at(e,Ie()),null;var n=Hl(e,t);if(e.tag!==0&&n===2){var r=ci(e);r!==0&&(t=r,n=Ta(e,r))}if(n===1)throw n=Ir,kn(e,0),sn(e,t),at(e,Ie()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,it,Ht),at(e,Ie()),null}function _a(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(qn=Ie()+500,ml&&Zt())}}function xn(e){ln!==null&&ln.tag===0&&(ue&6)===0&&Qn();var t=ue;ue|=1;var n=yt.transition,r=he;try{if(yt.transition=null,he=1,e)return e()}finally{he=r,yt.transition=n,ue=t,(ue&6)===0&&Zt()}}function La(){dt=$n.current,Ne($n)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gd(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Vi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:Bn(),Ne(nt),Ne(Qe),na();break;case 5:ea(r);break;case 4:Bn();break;case 13:Ne(be);break;case 19:Ne(be);break;case 10:Yi(r.type._context);break;case 22:case 23:La()}n=n.return}if(He=e,De=e=on(e.current,null),$e=dt=t,Oe=0,Ir=null,Ea=Dl=yn=0,it=_r=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,r.next=o}n.pending=r}hn=null}return e}function Pu(e,t){do{var n=De;try{if(Ki(),Sl.current=zl,Cl){for(var r=Ee.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Cl=!1}if(vn=0,Ue=Re=Ee=null,br=!1,Er=0,ba.current=null,n===null||n.return===null){Oe=1,Ir=t,De=null;break}e:{var a=e,o=n.return,u=n,d=t;if(t=$e,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var v=d,w=u,j=w.tag;if((w.mode&1)===0&&(j===0||j===11||j===15)){var k=w.alternate;k?(w.updateQueue=k.updateQueue,w.memoizedState=k.memoizedState,w.lanes=k.lanes):(w.updateQueue=null,w.memoizedState=null)}var T=eu(o);if(T!==null){T.flags&=-257,tu(T,o,u,a,t),T.mode&1&&Zo(a,v,t),t=T,d=v;var D=t.updateQueue;if(D===null){var A=new Set;A.add(d),t.updateQueue=A}else D.add(d);break e}else{if((t&1)===0){Zo(a,v,t),Da();break e}d=Error(c(426))}}else if(Ce&&u.mode&1){var _e=eu(o);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),tu(_e,o,u,a,t),qi(Vn(d,u));break e}}a=d=Vn(d,u),Oe!==4&&(Oe=2),_r===null?_r=[a]:_r.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Go(a,d,t);So(a,m);break e;case 1:u=d;var p=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rn===null||!rn.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var N=Xo(a,u,t);So(a,N);break e}}a=a.return}while(a!==null)}Iu(n)}catch(F){t=F,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Mu(){var e=Ll.current;return Ll.current=zl,e===null?zl:e}function Da(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),He===null||(yn&268435455)===0&&(Dl&268435455)===0||sn(He,$e)}function Hl(e,t){var n=ue;ue|=2;var r=Mu();(He!==e||$e!==t)&&(Ht=null,kn(e,t));do try{Hd();break}catch(l){Pu(e,l)}while(!0);if(Ki(),ue=n,Ll.current=r,De!==null)throw Error(c(261));return He=null,$e=0,Oe}function Hd(){for(;De!==null;)Tu(De)}function Bd(){for(;De!==null&&!pc();)Tu(De)}function Tu(e){var t=Du(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Iu(e):De=t,ba.current=null}function Iu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Ld(n,t,dt),n!==null){De=n;return}}else{if(n=Dd(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Oe===0&&(Oe=5)}function wn(e,t,n){var r=he,l=yt.transition;try{yt.transition=null,he=1,Vd(e,t,n,r)}finally{yt.transition=l,he=r}return null}function Vd(e,t,n,r){do Qn();while(ln!==null);if((ue&6)!==0)throw Error(c(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Nc(e,a),e===He&&(De=He=null,$e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Rl||(Rl=!0,Au($r,function(){return Qn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=yt.transition,yt.transition=null;var o=he;he=1;var u=ue;ue|=4,ba.current=null,Rd(e,n),ju(n,e),ud(Di),Xr=!!Li,Di=Li=null,e.current=n,Od(n),mc(),ue=u,he=o,yt.transition=a}else e.current=n;if(Rl&&(Rl=!1,ln=e,Ol=l),a=e.pendingLanes,a===0&&(rn=null),vc(n.stateNode),at(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Al)throw Al=!1,e=Pa,Pa=null,e;return(Ol&1)!==0&&e.tag!==0&&Qn(),a=e.pendingLanes,(a&1)!==0?e===Ma?Lr++:(Lr=0,Ma=e):Lr=0,Zt(),null}function Qn(){if(ln!==null){var e=xs(Ol),t=yt.transition,n=he;try{if(yt.transition=null,he=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Ol=0,(ue&6)!==0)throw Error(c(331));var l=ue;for(ue|=4,L=e.current;L!==null;){var a=L,o=a.child;if((L.flags&16)!==0){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var v=u[d];for(L=v;L!==null;){var w=L;switch(w.tag){case 0:case 11:case 15:Tr(8,w,a)}var j=w.child;if(j!==null)j.return=w,L=j;else for(;L!==null;){w=L;var k=w.sibling,T=w.return;if(vu(w),w===v){L=null;break}if(k!==null){k.return=T,L=k;break}L=T}}}var D=a.alternate;if(D!==null){var A=D.child;if(A!==null){D.child=null;do{var _e=A.sibling;A.sibling=null,A=_e}while(A!==null)}}L=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,L=o;else e:for(;L!==null;){if(a=L,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Tr(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,L=m;break e}L=a.return}}var p=e.current;for(L=p;L!==null;){o=L;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,L=g;else e:for(o=p;L!==null;){if(u=L,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:_l(9,u)}}catch(F){Me(u,u.return,F)}if(u===o){L=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,L=N;break e}L=u.return}}if(ue=l,Zt(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(qr,e)}catch{}r=!0}return r}finally{he=n,yt.transition=t}}return!1}function _u(e,t,n){t=Vn(n,t),t=Go(e,t,1),e=tn(e,t,1),t=Ze(),e!==null&&(lr(e,1,t),at(e,t))}function Me(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=Vn(n,e),e=Xo(t,e,1),t=tn(t,e,1),e=Ze(),t!==null&&(lr(t,1,e),at(t,e));break}}t=t.return}}function Wd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,He===e&&($e&n)===n&&(Oe===4||Oe===3&&($e&130023424)===$e&&500>Ie()-za?kn(e,0):Ea|=n),at(e,t)}function Lu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Kr,Kr<<=1,(Kr&130023424)===0&&(Kr=4194304)));var n=Ze();e=Ot(e,t),e!==null&&(lr(e,t,n),at(e,n))}function $d(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lu(e,n)}function qd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),Lu(e,n)}var Du;Du=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,_d(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Ce&&(t.flags&1048576)!==0&&mo(t,gl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tl(e,t),e=t.pendingProps;var l=Dn(t,Qe.current);Hn(t,n),l=ia(null,t,r,e,l,n);var a=aa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(a=!0,pl(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Xi(t),l.updater=Pl,t.stateNode=l,l._reactInternals=t,fa(t,r,e,n),t=ga(null,t,r,!0,a,n)):(t.tag=0,Ce&&a&&Bi(t),Xe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Kd(r),e=St(r,e),l){case 0:t=ha(null,t,r,e,n);break e;case 1:t=su(null,t,r,e,n);break e;case 11:t=nu(null,t,r,e,n);break e;case 14:t=ru(null,t,r,St(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),ha(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),su(e,t,r,l,n);case 3:e:{if(ou(t),e===null)throw Error(c(387));r=t.pendingProps,a=t.memoizedState,l=a.element,No(e,t),jl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=Vn(Error(c(423)),t),t=uu(e,t,r,n,l);break e}else if(r!==l){l=Vn(Error(c(424)),t),t=uu(e,t,r,n,l);break e}else for(ct=Jt(t.stateNode.containerInfo.firstChild),ut=t,Ce=!0,Nt=null,n=wo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===l){t=Ut(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return bo(t),e===null&&$i(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,Ai(r,l)?o=null:a!==null&&Ai(r,a)&&(t.flags|=32),au(e,t),Xe(e,t,o,n),t.child;case 6:return e===null&&$i(t),null;case 13:return cu(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),nu(e,t,r,l,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,xe(xl,r._currentValue),r._currentValue=o,a!==null)if(jt(a.value,o)){if(a.children===l.children&&!nt.current){t=Ut(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=Ft(-1,n&-n),d.tag=2;var v=a.updateQueue;if(v!==null){v=v.shared;var w=v.pending;w===null?d.next=d:(d.next=w.next,w.next=d),v.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Ji(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(c(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ji(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Xe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Hn(t,n),l=gt(l),r=r(l),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,l=St(r,t.pendingProps),l=St(r.type,l),ru(e,t,r,l,n);case 15:return lu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),Tl(e,t),t.tag=1,rt(r)?(e=!0,pl(t)):e=!1,Hn(t,n),Yo(t,r,l),fa(t,r,l,n),ga(null,t,r,!0,e,n);case 19:return fu(e,t,n);case 22:return iu(e,t,n)}throw Error(c(156,t.tag))};function Au(e,t){return ms(e,t)}function Qd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new Qd(e,t,n,r)}function Aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kd(e){if(typeof e=="function")return Aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===et)return 11;if(e===Ae)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bl(e,t,n,r,l,a){var o=2;if(r=e,typeof e=="function")Aa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ke:return jn(n.children,l,a,t);case O:o=8,l|=8;break;case K:return e=xt(12,n,t,l|2),e.elementType=K,e.lanes=a,e;case Le:return e=xt(13,n,t,l),e.elementType=Le,e.lanes=a,e;case Se:return e=xt(19,n,t,l),e.elementType=Se,e.lanes=a,e;case ye:return Vl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:o=10;break e;case ge:o=9;break e;case et:o=11;break e;case Ae:o=14;break e;case ve:o=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=xt(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function jn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function Vl(e,t,n,r){return e=xt(22,e,r,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function Ra(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function Oa(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=di(0),this.expirationTimes=di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Fa(e,t,n,r,l,a,o,u,d){return e=new Yd(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=xt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(a),e}function Jd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ru(e){if(!e)return Xt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(rt(n))return co(e,n,t)}return t}function Ou(e,t,n,r,l,a,o,u,d){return e=Fa(n,r,!0,e,l,a,o,u,d),e.context=Ru(null),n=e.current,r=Ze(),l=an(n),a=Ft(r,l),a.callback=t??null,tn(n,a,l),e.current.lanes=l,lr(e,l,r),at(e,r),e}function Wl(e,t,n,r){var l=t.current,a=Ze(),o=an(l);return n=Ru(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(l,t,o),e!==null&&(Et(e,l,o,a),wl(e,l,o)),o}function $l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ua(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function Gd(){return null}var Uu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ha(e){this._internalRoot=e}ql.prototype.render=Ha.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Wl(e,t,null,null)},ql.prototype.unmount=Ha.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Wl(null,e,null,null)}),t[Lt]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=js();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&Cs(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function Xd(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var v=$l(o);a.call(v)}}var o=Ou(t,r,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=o,e[Lt]=o.current,yr(e.nodeType===8?e.parentNode:e),xn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var v=$l(d);u.call(v)}}var d=Fa(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=d,e[Lt]=d.current,yr(e.nodeType===8?e.parentNode:e),xn(function(){Wl(t,d,n,r)}),d}function Kl(e,t,n,r,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var u=l;l=function(){var d=$l(o);u.call(d)}}Wl(t,o,e,l)}else o=Xd(n,t,e,l,r);return $l(o)}ks=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(fi(t,n|1),at(t,Ie()),(ue&6)===0&&(qn=Ie()+500,Zt()))}break;case 13:xn(function(){var r=Ot(e,1);if(r!==null){var l=Ze();Et(r,e,1,l)}}),Ua(e,1)}},pi=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ze();Et(t,e,134217728,n)}Ua(e,134217728)}},ws=function(e){if(e.tag===13){var t=an(e),n=Ot(e,t);if(n!==null){var r=Ze();Et(n,e,t,r)}Ua(e,t)}},js=function(){return he},Ns=function(e,t){var n=he;try{return he=e,t()}finally{he=n}},ii=function(e,t,n){switch(t){case"input":if(Ge(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(c(90));we(r),Ge(r,l)}}}break;case"textarea":Jn(e,n);break;case"select":t=n.value,t!=null&&Bt(e,!!n.multiple,t,!1)}},ss=_a,os=xn;var Zd={usingClientEntryPoint:!1,Events:[wr,_n,dl,is,as,_a]},Dr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fs(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Gd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{qr=Yl.inject(ef),zt=Yl}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zd,st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(t))throw Error(c(200));return Jd(e,t,null,n)},st.createRoot=function(e,t){if(!Ba(e))throw Error(c(299));var n=!1,r="",l=Uu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Fa(e,1,!1,null,null,n,!1,r,l),e[Lt]=t.current,yr(e.nodeType===8?e.parentNode:e),new Ha(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=fs(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return xn(e)},st.hydrate=function(e,t,n){if(!Ql(t))throw Error(c(200));return Kl(null,e,t,!0,n)},st.hydrateRoot=function(e,t,n){if(!Ba(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",o=Uu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ou(t,null,e,1,n??null,l,!1,a,o),e[Lt]=t.current,yr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ql(t)},st.render=function(e,t,n){if(!Ql(t))throw Error(c(200));return Kl(null,e,t,!1,n)},st.unmountComponentAtNode=function(e){if(!Ql(e))throw Error(c(40));return e._reactRootContainer?(xn(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},st.unstable_batchedUpdates=_a,st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ql(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Kl(e,t,n,!1,r)},st.version="18.3.1-next-f1338f8080-20240426",st}var Yu;function cf(){if(Yu)return $a.exports;Yu=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(x){console.error(x)}}return y(),$a.exports=uf(),$a.exports}var Ju;function df(){if(Ju)return Jl;Ju=1;var y=cf();return Jl.createRoot=y.createRoot,Jl.hydrateRoot=y.hydrateRoot,Jl}var ff=df();const pf=ec(ff),Gu={personalInfo:{name:"Dinesh Kumar E",title:"Team Lead & Computer Science Engineering Student",tagline:"Computer Science Engineer & Team Lead with expertise in Java, Python, Web Engineering, AI Tools & Hardware Projects.",bio:"Computer Science Engineering student at R.M.K. Engineering College with hands-on experience as a Team Lead at LTI, contributing to real-time projects with strong experience in team coordination, project execution, and technical problem-solving. Proficient in Java, C, C++, Python, JavaScript, HTML, CSS, and web development. Skilled in AI tools, cybersecurity tools, digital marketing, vector graphics, and hands-on hardware projects including EV bike assembly and battery manufacturing.",availability:"Available for Team Lead & Engineering Roles",statusBadge:"Open for Opportunities & Projects 🚀",email:"dineshelumalai2006@gmail.com",phone:"+91 8072741080",location:"Tamil Nadu, India",avatar:"/dinesh_photo.jpg",resumeUrl:"#download-resume",socials:{github:"https://github.com",linkedin:"https://linkedin.com",twitter:"https://twitter.com",dribbble:"https://dribbble.com",figma:"https://figma.com"},stats:{yearsExperience:"2+ Yrs",completedProjects:"12+",happyClients:"15+",certifications:"14"}},projects:[{id:"p1",title:"NovaCare AI Health Assistant",shortDesc:"AI-powered medical triage, patient scheduling, and real-time health analytics platform.",longDesc:"NovaCare AI is an enterprise healthcare portal built with React, Node.js, and Python backend microservices to optimize patient triage, medical data processing, and clinical analytics.",category:"AI & Web Apps",tags:["React","Node.js","Python AI","PostgreSQL","TailwindCSS"],image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/novacare",githubUrl:"https://github.com/example/novacare",featured:!0},{id:"p2",title:"LTI Real-Time Team Management System",shortDesc:"Real-time project management and team coordination system built during LTI Team Lead tenure.",longDesc:"Architected real-time task allocation, problem-solving workflows, and project tracking dashboards for cross-functional engineering teams.",category:"Web App",tags:["Java","JavaScript","HTML/CSS","Team Leadership","Agile"],image:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/lti-project1",githubUrl:"https://github.com/example/lti-project1",featured:!0},{id:"p3",title:"LTI Enterprise Execution Pipeline",shortDesc:"Enterprise software solution coordinating real-time data flows, task timelines, and resource distribution.",longDesc:"Coordinated technical execution, problem-solving pipelines, and code integration for complex multi-tier application deliverables.",category:"Web App",tags:["Java Tools","DBMS","Software Engineering","Agile Workflows"],image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/lti-project2",githubUrl:"https://github.com/example/lti-project2",featured:!0},{id:"p4",title:"EV Bike Assembly & Battery Diagnostic System",shortDesc:"Hardware monitoring portal for electric vehicle bike assembly, battery charge metrics, and diagnostics.",longDesc:"Hands-on engineering project integrating IoT sensors, battery management systems (BMS), and real-time EV telemetry dashboards.",category:"Hardware & IoT",tags:["IoT","Hardware","Python","EV Technology","Sensors"],image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/ev-hardware",githubUrl:"https://github.com/example/ev-hardware",featured:!1},{id:"p5",title:"GSC Digital Marketing & Creative Media Hub",shortDesc:"Promotional content hub, video/photo editing workflow, and digital engagement analytics.",longDesc:"Designed and executed social media marketing campaigns, vector graphics, and video content for community engagement.",category:"Creative & Marketing",tags:["Digital Marketing","Video Editing","Vector Graphics","Social Media"],image:"https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/gsc-marketing",githubUrl:"https://github.com/example/gsc-marketing",featured:!1},{id:"p6",title:"Cybersecurity & AI Threat Analyzer",shortDesc:"Utility tools for network traffic scanning, security vulnerability analysis, and data encryption.",longDesc:"Developed custom Python scripts and cybersecurity tools for security auditing and vulnerability mitigation.",category:"AI & Cybersecurity",tags:["Cybersecurity Tools","Python","Network Scanning","AI Analysis"],image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/sec-tools",githubUrl:"https://github.com/example/sec-tools",featured:!1}],certificates:[{id:"nptel-1",title:"Introduction to Internet of Things (IoT)",issuer:"NPTEL / IIT Kharagpur (SWAYAM)",date:"Jan - Apr 2026",credentialId:"NPTEL26CS37S85120059604261300",verifyUrl:"https://nptel.ac.in/noc",badgeImage:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300",skills:["Internet of Things","Embedded Systems","Sensory Networks","IoT Security","Score: 84%"]},{id:"nptel-2",title:"The Joy of Computing using Python",issuer:"NPTEL / IIT Madras (SWAYAM)",date:"Jul - Oct 2025",credentialId:"NPTEL25CS103S1075200649",verifyUrl:"https://nptel.ac.in/noc",badgeImage:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300",skills:["Python Programming","Algorithmic Thinking","Data Processing","Problem Solving","Score: 81%"]},{id:"nptel-3",title:"Soft Skill Development",issuer:"NPTEL (SWAYAM)",date:"Jan - Mar 2025",credentialId:"NPTEL25HS72S643310843",verifyUrl:"https://nptel.ac.in/noc",badgeImage:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300",skills:["Professional Communication","Leadership Skills","Presentation","Team Dynamics","Score: 52%"]},{id:"info-1",title:"Java Developer Certification",issuer:"Infosys Springboard",date:"November 8, 2025",credentialId:"INFOSYS-JAVA-DEV-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300",skills:["Java Core","Enterprise Java","Object-Oriented Programming","Backend Development"]},{id:"info-2",title:"Java SE 8 Features",issuer:"Infosys Springboard",date:"November 6, 2025",credentialId:"INFOSYS-JAVA8-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=300",skills:["Streams API","Lambda Expressions","Optional Class","Functional Interfaces"]},{id:"info-3",title:"Java Tools",issuer:"Infosys Springboard",date:"November 6, 2025",credentialId:"INFOSYS-JAVATOOLS-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300",skills:["Maven","Gradle","JUnit","Debugging Tools"]},{id:"info-4",title:"Java Language Features",issuer:"Infosys Springboard",date:"November 6, 2025",credentialId:"INFOSYS-JAVALANG-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300",skills:["Generics","Collections Framework","Multithreading","Exception Handling"]},{id:"info-5",title:"Database Management System Part 1 & 2",issuer:"Infosys Springboard",date:"October 13, 2025",credentialId:"INFOSYS-DBMS-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=300",skills:["SQL","Relational Database Modeling","Normalization","Database Querying"]},{id:"info-6",title:"Artificial Intelligence Foundation Certification",issuer:"Infosys Springboard",date:"February 27, 2025",credentialId:"INFOSYS-AI-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=300",skills:["AI Fundamentals","Machine Learning","Neural Networks","AI Tools"]},{id:"info-7",title:"Java Programming Fundamentals",issuer:"Infosys Springboard",date:"February 17, 2025",credentialId:"INFOSYS-JAVAFUND-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300",skills:["Java Syntax","Control Flow","Object-Oriented Basics","Arrays"]},{id:"info-8",title:"Software Engineering & Agile Development",issuer:"Infosys Springboard",date:"December 8, 2024",credentialId:"INFOSYS-AGILE-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=300",skills:["Agile Methodologies","Scrum","SDLC","Software Testing"]},{id:"info-9",title:"HTML5 - The Language",issuer:"Infosys Springboard",date:"December 8, 2024",credentialId:"INFOSYS-HTML5-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=300",skills:["HTML5","Semantic Web","Forms & Validation","DOM Structure"]},{id:"gsc-1",title:"Summer/Winter Internship Certification",issuer:"GSC (Global Student Community)",date:"June 2, 2025 – August 30, 2025",credentialId:"GSC-INT-2025-0608",verifyUrl:"https://gsc.org/verify",badgeImage:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300",skills:["Digital Marketing","Social Media Operations","Content Creation","Team Execution"]},{id:"nptel-4",title:"Cloud Computing (SWAYAM)",issuer:"SWAYAM-NPTEL / IIT Kharagpur",date:"July 2026 (12 Weeks)",credentialId:"NPTEL26CS150",verifyUrl:"https://onlinecourses.nptel.ac.in",badgeImage:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300",skills:["Cloud Architecture","Virtualization","Distributed Systems","Storage Management"]}],skills:[{name:"Java / C / C++",category:"Programming",level:92,icon:"Code"},{name:"Python",category:"Programming",level:90,icon:"Terminal"},{name:"HTML5 / CSS3 / JavaScript",category:"Web",level:94,icon:"Layout"},{name:"Web Development",category:"Web",level:88,icon:"Server"},{name:"AI & Cybersecurity Tools",category:"Tech & Security",level:85,icon:"Shield"},{name:"Database Management (DBMS)",category:"Tech & Security",level:88,icon:"Database"},{name:"Leadership & Project Management",category:"Management",level:95,icon:"Users"},{name:"Video, Photo & Vector Editing",category:"Creative",level:88,icon:"Video"},{name:"Digital Marketing & Social Media",category:"Creative",level:86,icon:"Share2"},{name:"Hardware, EV & Battery Projects",category:"Hardware",level:85,icon:"Cpu"}],experience:[{id:"e1",role:"Team Lead",company:"LTI",period:"Recent",location:"Tamil Nadu, India",description:"Worked on two real-time projects; coordinated team activities, supported problem-solving, and contributed to timely project completion.",achievements:["Led cross-functional team coordination on two real-time production projects","Streamlined technical problem-solving workflows to hit project deadlines","Managed agile task tracking and software quality benchmarks"]},{id:"e2",role:"Marketing & Social Media Specialist",company:"GSC",period:"2025",location:"Tamil Nadu, India",description:"Worked on marketing, social media activities, digital content creation, and promotional campaign execution.",achievements:["Created digital content, vector graphics, and video presentations for brand reach","Executed social media marketing campaigns for student community initiatives"]},{id:"e3",role:"Practical Trainee",company:"Celtan",period:"June 2025 - August 2025",location:"Coimbatore, India",description:"Gained practical professional experience and exposure to workplace activities.",achievements:["Completed 3-month hands-on industry internship program","Gained practical exposure to workplace engineering and team operations"]}],education:[{id:"ed1",degree:"B.E. Computer Science & Engineering",institution:"R.M.K. Engineering College",period:"Expected 06/2028",details:"Tamil Nadu, India. Focus on Software Engineering, Data Structures, Java, Cloud Computing, and Hardware Engineering."}],services:[{id:"s1",title:"Team Lead & Project Execution",description:"Technical leadership, agile team coordination, problem-solving, and project delivery.",startingPrice:"Quote on Request",deliverables:["Cross-functional team coordination","Real-time project execution","Agile task tracking & problem solving","Quality assurance & delivery"]},{id:"s2",title:"Full-Stack & Java Web Development",description:"Building responsive web applications with Java, Python, JavaScript, and database integration.",startingPrice:"$1,500",deliverables:["Responsive web application frontend & backend","Database design (DBMS) & API endpoints","Clean OOP code architecture","Deployment & documentation"]},{id:"s3",title:"Digital Marketing & Media Production",description:"Social media operations, video/photo editing, vector graphics, and presentation design.",startingPrice:"$800",deliverables:["High-quality video & photo editing","Vector graphics & PPT presentation design","Social media campaign strategy","Digital content creation"]}],testimonials:[{id:"t1",name:"R.M.K. Department Head",role:"Professor",company:"R.M.K. Engineering College",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",content:"Dinesh Kumar E displays exceptional leadership, technical discipline, and enthusiasm for engineering projects. His work as a Team Lead is commendable!"},{id:"t2",name:"LTI Project Manager",role:"Project Director",company:"LTI",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",content:"Dinesh led two real-time projects smoothly. His problem-solving abilities and team coordination kept deliverables on schedule."}],inquiries:[]},tc=se.createContext(),Ka="dinesh_kumar_portfolio_v2",Xu="asma_portfolio_theme_v1",mf=({children:y})=>{const[x,c]=se.useState(()=>{try{const O=localStorage.getItem(Ka);if(O)return JSON.parse(O)}catch(O){console.error("Failed to parse local storage data:",O)}return Gu}),[H,C]=se.useState(()=>localStorage.getItem(Xu)||"dark"),[R,ee]=se.useState("home"),[Y,b]=se.useState(null);se.useEffect(()=>{document.documentElement.setAttribute("data-theme",H),localStorage.setItem(Xu,H)},[H]),se.useEffect(()=>{try{localStorage.setItem(Ka,JSON.stringify(x))}catch(O){console.error("Failed to save to localStorage:",O)}},[x]);const U=()=>{C(O=>O==="dark"?"light":"dark")},X=O=>{c(K=>({...K,personalInfo:{...K.personalInfo,...O}}))},te=O=>{const K={...O,id:"p_"+Date.now(),tags:typeof O.tags=="string"?O.tags.split(",").map(B=>B.trim()):O.tags};c(B=>({...B,projects:[K,...B.projects]}))},ne=(O,K)=>{c(B=>({...B,projects:B.projects.map(ge=>ge.id===O?{...ge,...K}:ge)}))},Te=O=>{c(K=>({...K,projects:K.projects.filter(B=>B.id!==O)}))},pe=O=>{const K={...O,id:"c_"+Date.now(),skills:typeof O.skills=="string"?O.skills.split(",").map(B=>B.trim()):O.skills};c(B=>({...B,certificates:[K,...B.certificates]}))},le=(O,K)=>{c(B=>({...B,certificates:B.certificates.map(ge=>ge.id===O?{...ge,...K}:ge)}))},V=O=>{c(K=>({...K,certificates:K.certificates.filter(B=>B.id!==O)}))},Fe=O=>{c(K=>({...K,skills:[...K.skills,O]}))},oe=O=>{c(K=>({...K,skills:K.skills.filter((B,ge)=>ge!==O)}))},me=O=>{const K={...O,id:"e_"+Date.now(),achievements:typeof O.achievements=="string"?O.achievements.split(`
`).filter(Boolean):O.achievements};c(B=>({...B,experience:[K,...B.experience]}))},Z=O=>{c(K=>({...K,experience:K.experience.filter(B=>B.id!==O)}))},ze=O=>{const K={...O,id:"inq_"+Date.now(),submittedAt:new Date().toISOString()};c(B=>({...B,inquiries:[K,...B.inquiries||[]]}))},ce=O=>{c(K=>({...K,inquiries:(K.inquiries||[]).filter(B=>B.id!==O)}))},ke=()=>{c(Gu),localStorage.removeItem(Ka)};return i.jsx(tc.Provider,{value:{data:x,theme:H,toggleTheme:U,currentPage:R,setCurrentPage:ee,selectedProject:Y,setSelectedProject:b,updatePersonalInfo:X,addProject:te,updateProject:ne,deleteProject:Te,addCertificate:pe,updateCertificate:le,deleteCertificate:V,addSkill:Fe,deleteSkill:oe,addExperience:me,deleteExperience:Z,addInquiry:ze,deleteInquiry:ce,resetToDefault:ke},children:y})},ft=()=>se.useContext(tc);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nc=(...y)=>y.filter((x,c,H)=>!!x&&x.trim()!==""&&H.indexOf(x)===c).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=se.forwardRef(({color:y="currentColor",size:x=24,strokeWidth:c=2,absoluteStrokeWidth:H,className:C="",children:R,iconNode:ee,...Y},b)=>se.createElement("svg",{ref:b,...gf,width:x,height:x,stroke:y,strokeWidth:H?Number(c)*24/Number(x):c,className:nc("lucide",C),...Y},[...ee.map(([U,X])=>se.createElement(U,X)),...Array.isArray(R)?R:[R]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(y,x)=>{const c=se.forwardRef(({className:H,...C},R)=>se.createElement(vf,{ref:R,iconNode:x,className:nc(`lucide-${hf(y)}`,H),...C}));return c.displayName=`${y}`,c};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=G("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=G("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=G("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=G("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=G("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=G("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=G("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=G("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=G("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=G("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=G("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=G("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=G("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=G("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=G("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=G("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=G("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=G("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=G("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=G("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=G("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=G("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=G("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=G("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=G("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=G("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=G("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=G("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=G("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=G("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=G("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=G("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=G("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=G("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=G("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=G("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=G("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=G("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=G("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=G("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=G("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=G("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=G("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Qf=()=>{const{currentPage:y,setCurrentPage:x,theme:c,toggleTheme:H,data:C}=ft(),[R,ee]=se.useState(!1),Y=[{id:"home",label:"Home",icon:Mf},{id:"projects",label:"Projects",icon:Fr,sectionId:"projects-section"},{id:"certificates",label:"Certificates",icon:Or},{id:"services",label:"Services",icon:lc,sectionId:"services-section"},{id:"hire",label:"Hire Me",icon:Rr,isSpecial:!0},{id:"admin",label:"Admin CMS",icon:ts}],b=U=>{if(U.id==="home"||U.id==="certificates"||U.id==="hire"||U.id==="admin")x(U.id),window.scrollTo({top:0,behavior:"smooth"});else if(U.sectionId)if(y!=="home")x("home"),setTimeout(()=>{const X=document.getElementById(U.sectionId);X&&X.scrollIntoView({behavior:"smooth"})},100);else{const X=document.getElementById(U.sectionId);X&&X.scrollIntoView({behavior:"smooth"})}ee(!1)};return i.jsxs("header",{className:"navbar-header",children:[i.jsxs("div",{className:"container navbar-container",children:[i.jsxs("div",{className:"brand-logo",onClick:()=>{x("home"),window.scrollTo({top:0,behavior:"smooth"})},children:[i.jsx("div",{className:"logo-badge",children:i.jsx(Zl,{size:20,className:"logo-sparkle"})}),i.jsxs("span",{className:"logo-text",children:[C.personalInfo.name.split(" ")[0],i.jsx("span",{className:"text-gradient",children:".dev"})]})]}),i.jsx("nav",{className:"desktop-nav",children:Y.map(U=>{const X=U.icon,te=y===U.id;return i.jsxs("button",{onClick:()=>b(U),className:`nav-link ${te?"active":""} ${U.isSpecial?"nav-btn-hire":""}`,children:[i.jsx(X,{size:16}),i.jsx("span",{children:U.label})]},U.id)})}),i.jsxs("div",{className:"navbar-controls",children:[i.jsx("button",{className:"btn-theme-toggle",onClick:H,title:`Switch to ${c==="dark"?"Light":"Dark"} Mode`,"aria-label":"Toggle Theme",children:c==="dark"?i.jsx(Wf,{size:18,className:"theme-icon-sun"}):i.jsx(Rf,{size:18,className:"theme-icon-moon"})}),i.jsx("button",{className:"mobile-menu-btn",onClick:()=>ee(!R),"aria-label":"Toggle Menu",children:R?i.jsx(Kn,{size:24}):i.jsx(Df,{size:24})})]})]}),R&&i.jsx("div",{className:"mobile-drawer glass-card",children:Y.map(U=>{const X=U.icon,te=y===U.id;return i.jsxs("button",{onClick:()=>b(U),className:`mobile-nav-link ${te?"active":""} ${U.isSpecial?"mobile-btn-hire":""}`,children:[i.jsx(X,{size:18}),i.jsx("span",{children:U.label})]},U.id)})}),i.jsx("style",{children:`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          transition: all var(--transition-normal);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          cursor: pointer;
        }
        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--gradient-brand);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }
        .logo-sparkle {
          animation: float 3s ease-in-out infinite;
        }
        .logo-text {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          border-radius: var(--radius-full);
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-display);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-main);
          background: var(--bg-card-hover);
        }
        .nav-link.active {
          color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.12);
        }
        .nav-btn-hire {
          background: var(--gradient-brand);
          color: #ffffff !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          padding: 0.55rem 1.2rem;
        }
        .nav-btn-hire:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(168, 85, 247, 0.5);
        }
        .navbar-controls {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .btn-theme-toggle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .btn-theme-toggle:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: rotate(15deg);
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }
        .mobile-drawer {
          position: absolute;
          top: 80px;
          left: 1rem;
          right: 1rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }
        .mobile-nav-link.active {
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
        }
        .mobile-btn-hire {
          background: var(--gradient-brand);
          color: #ffffff;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: flex; }
        }
      `})]})},Kf=()=>{const{data:y,setCurrentPage:x}=ft(),{personalInfo:c}=y;return i.jsxs("section",{className:"hero-section",children:[i.jsx("div",{className:"hero-glow-1"}),i.jsx("div",{className:"hero-glow-2"}),i.jsxs("div",{className:"container hero-grid",children:[i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"badge badge-emerald animate-glow",children:[i.jsx("span",{className:"dot-pulse"}),c.statusBadge]}),i.jsxs("h1",{className:"hero-title",children:["Crafting Digital Excellence as a ",i.jsx("br",{}),i.jsx("span",{className:"text-gradient",children:c.title})]}),i.jsx("p",{className:"hero-tagline",children:c.tagline}),i.jsx("p",{className:"hero-bio",children:c.bio}),i.jsxs("div",{className:"hero-actions",children:[i.jsxs("button",{className:"btn btn-primary",onClick:()=>x("hire"),children:[i.jsx(Rr,{size:18}),i.jsx("span",{children:"Hire Me Now"})]}),i.jsxs("button",{className:"btn btn-secondary",onClick:()=>{const H=document.getElementById("projects-section");H&&H.scrollIntoView({behavior:"smooth"})},children:[i.jsx("span",{children:"Explore Projects"}),i.jsx(rc,{size:18})]}),i.jsxs("button",{className:"btn btn-secondary",onClick:()=>x("certificates"),children:[i.jsx(Or,{size:18}),i.jsx("span",{children:"Certificates"})]})]}),i.jsxs("div",{className:"hero-stats-grid",children:[i.jsxs("div",{className:"stat-card glass-card",children:[i.jsx("span",{className:"stat-number text-gradient",children:c.stats.yearsExperience}),i.jsx("span",{className:"stat-label",children:"Years Experience"})]}),i.jsxs("div",{className:"stat-card glass-card",children:[i.jsx("span",{className:"stat-number text-cyan",children:c.stats.completedProjects}),i.jsx("span",{className:"stat-label",children:"Projects Built"})]}),i.jsxs("div",{className:"stat-card glass-card",children:[i.jsx("span",{className:"stat-number text-gradient",children:c.stats.happyClients}),i.jsx("span",{className:"stat-label",children:"Satisfied Clients"})]}),i.jsxs("div",{className:"stat-card glass-card",children:[i.jsx("span",{className:"stat-number text-cyan",children:c.stats.certifications}),i.jsx("span",{className:"stat-label",children:"Certifications"})]})]})]}),i.jsx("div",{className:"hero-visual",children:i.jsxs("div",{className:"avatar-frame",children:[i.jsx("img",{src:c.avatar,alt:c.name,className:"avatar-img"}),i.jsxs("div",{className:"float-badge badge-react glass-card animate-float",children:[i.jsx(kf,{size:18,className:"icon-react"}),i.jsx("span",{children:"Java & Python"})]}),i.jsxs("div",{className:"float-badge badge-figma glass-card animate-float",style:{animationDelay:"1.5s"},children:[i.jsx(Zl,{size:18,className:"icon-figma"}),i.jsx("span",{children:"Team Lead @ LTI"})]}),i.jsxs("div",{className:"float-badge badge-aws glass-card animate-float",style:{animationDelay:"3s"},children:[i.jsx(jf,{size:18,className:"icon-aws"}),i.jsx("span",{children:"IoT & Hardware"})]})]})})]}),i.jsx("style",{children:`
        .hero-section {
          position: relative;
          padding: 4.5rem 0 3.5rem;
          overflow: hidden;
        }
        .hero-glow-1 {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px #34d399;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin: 1.2rem 0 1rem;
          letter-spacing: -1px;
        }
        .hero-tagline {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.8rem;
        }
        .hero-bio {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 620px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          width: 100%;
        }
        .stat-card {
          padding: 1.1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .stat-number {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
        }
        .stat-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .avatar-frame {
          position: relative;
          width: 340px;
          height: 380px;
          border-radius: 28px;
          padding: 10px;
          background: var(--gradient-brand);
          box-shadow: 0 20px 50px rgba(99, 102, 241, 0.3);
        }
        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          filter: contrast(105%);
        }
        .float-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 1.1rem;
          font-weight: 600;
          font-size: 0.88rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .badge-react { top: 20px; left: -50px; }
        .badge-figma { bottom: 50px; right: -50px; }
        .badge-aws { bottom: -20px; left: 20px; }
        
        .icon-react { color: #38bdf8; }
        .icon-figma { color: #ec4899; }
        .icon-aws { color: #f59e0b; }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-title { font-size: 2.3rem; }
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .avatar-frame { width: 280px; height: 320px; }
          .float-badge { font-size: 0.8rem; padding: 0.5rem 0.9rem; }
          .badge-react { left: -20px; }
          .badge-figma { right: -20px; }
        }
      `})]})},Yf=()=>{const{data:y}=ft(),{personalInfo:x,education:c}=y,H=[{icon:qf,title:"Peak Performance",desc:"Crafting optimized, responsive apps with fast page loads and seamless animations."},{icon:Pf,title:"User-Centric Design",desc:"Prioritizing human intuition, accessibility (WCAG), and clean visual hierarchy."},{icon:Ga,title:"Clean Architecture",desc:"Building scalable, maintainable modular codebases with strict design patterns."}];return i.jsxs("section",{className:"about-section",id:"about-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("div",{className:"badge badge-glow",children:[i.jsx(ic,{size:14}),i.jsx("span",{children:"About Me"})]}),i.jsx("h2",{className:"section-title",children:"Driven by Innovation, Defined by Quality"})]}),i.jsxs("div",{className:"about-grid",children:[i.jsxs("div",{className:"glass-card about-card",children:[i.jsx("h3",{className:"about-heading",children:"Engineering & Design Journey"}),i.jsx("p",{className:"about-text",children:"I am a Senior Software Engineer and UI/UX Designer dedicated to building seamless digital software. Over the past 6+ years, I've collaborated with fast-growing startups and global enterprises to take complex product visions from initial whiteboard wireframes to production cloud environments."}),i.jsx("p",{className:"about-text",children:"My philosophy centers around combining engineering precision with intuitive design. Whether crafting responsive frontend user interfaces, building backend APIs, or mapping out cloud infrastructure, I aim to create solutions that solve real-world problems."}),i.jsxs("div",{className:"info-chips",children:[i.jsxs("div",{className:"info-chip",children:[i.jsx("span",{className:"chip-label",children:"Based in:"}),i.jsx("span",{className:"chip-value",children:x.location})]}),i.jsxs("div",{className:"info-chip",children:[i.jsx("span",{className:"chip-label",children:"Email:"}),i.jsx("span",{className:"chip-value",children:x.email})]})]}),i.jsx("div",{className:"about-actions",children:i.jsxs("a",{href:`mailto:${x.email}`,className:"btn btn-primary btn-sm",children:[i.jsx(Cf,{size:16}),i.jsx("span",{children:"Get In Touch"})]})})]}),i.jsxs("div",{className:"about-secondary-col",children:[i.jsx("div",{className:"values-list",children:H.map((C,R)=>{const ee=C.icon;return i.jsxs("div",{className:"glass-card value-item",children:[i.jsx("div",{className:"value-icon-box",children:i.jsx(ee,{size:20})}),i.jsxs("div",{children:[i.jsx("h4",{className:"value-title",children:C.title}),i.jsx("p",{className:"value-desc",children:C.desc})]})]},R)})}),c&&c.length>0&&i.jsxs("div",{className:"glass-card edu-card",children:[i.jsxs("div",{className:"edu-header",children:[i.jsx(zf,{size:22,className:"edu-icon"}),i.jsxs("div",{children:[i.jsx("h4",{className:"edu-degree",children:c[0].degree}),i.jsxs("span",{className:"edu-school",children:[c[0].institution," (",c[0].period,")"]})]})]}),i.jsx("p",{className:"edu-details",children:c[0].details})]})]})]})]}),i.jsx("style",{children:`
        .about-section {
          padding: 5rem 0;
          position: relative;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }
        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
        }
        .about-card {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .about-heading {
          font-size: 1.4rem;
          color: var(--accent-primary);
        }
        .about-text {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.98rem;
        }
        .info-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }
        .info-chip {
          display: flex;
          gap: 0.4rem;
          font-size: 0.88rem;
        }
        .chip-label {
          color: var(--text-dim);
          font-weight: 600;
        }
        .chip-value {
          color: var(--text-main);
          font-weight: 500;
        }
        .about-actions {
          margin-top: 0.5rem;
        }
        .about-secondary-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .values-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .value-item {
          padding: 1.2rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .value-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .value-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .value-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .edu-card {
          padding: 1.4rem;
          border-left: 4px solid var(--accent-secondary);
        }
        .edu-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.6rem;
        }
        .edu-icon {
          color: var(--accent-secondary);
        }
        .edu-degree {
          font-size: 1rem;
          font-weight: 700;
        }
        .edu-school {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .edu-details {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `})]})},Jf=()=>{const{data:y}=ft(),{skills:x}=y,[c,H]=se.useState("All"),C=["All","Frontend","Backend","Database & Cloud","UI/UX Design","Tools"],R=c==="All"?x:x.filter(Y=>Y.category.toLowerCase()===c.toLowerCase()),ee=Y=>{switch(Y.toLowerCase()){case"frontend":return wf;case"backend":return Bf;case"database & cloud":return Nf;case"ui/ux design":return Of;default:return ac}};return i.jsxs("section",{className:"skills-section",id:"skills-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("div",{className:"badge badge-glow",children:[i.jsx(Zl,{size:14}),i.jsx("span",{children:"Tech Stack & Expertise"})]}),i.jsx("h2",{className:"section-title",children:"Skills & Technologies"})]}),i.jsx("div",{className:"category-tabs",children:C.map(Y=>i.jsx("button",{onClick:()=>H(Y),className:`category-tab ${c===Y?"active":""}`,children:Y},Y))}),i.jsx("div",{className:"skills-grid grid-2",children:R.map((Y,b)=>{const U=ee(Y.category);return i.jsxs("div",{className:"glass-card skill-card",children:[i.jsxs("div",{className:"skill-info",children:[i.jsxs("div",{className:"skill-title-group",children:[i.jsx("div",{className:"skill-icon",children:i.jsx(U,{size:18})}),i.jsx("span",{className:"skill-name",children:Y.name})]}),i.jsxs("span",{className:"skill-level-text",children:[Y.level,"%"]})]}),i.jsx("div",{className:"skill-bar-track",children:i.jsx("div",{className:"skill-bar-fill",style:{width:`${Y.level}%`}})})]},b)})})]}),i.jsx("style",{children:`
        .skills-section {
          padding: 5rem 0;
          position: relative;
        }
        .category-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }
        .category-tab {
          padding: 0.55rem 1.2rem;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .category-tab:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
        }
        .category-tab.active {
          background: var(--gradient-brand);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        .skills-grid {
          gap: 1.2rem;
        }
        .skill-card {
          padding: 1.3rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .skill-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .skill-title-group {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .skill-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(99, 102, 241, 0.12);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-name {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .skill-level-text {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-secondary);
        }
        .skill-bar-track {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: var(--bg-input);
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          background: var(--gradient-brand);
          transition: width 0.8s ease-out;
        }
      `})]})},Gf=()=>{const{data:y,selectedProject:x,setSelectedProject:c}=ft(),{projects:H}=y,[C,R]=se.useState("All"),ee=["All","AI & Web Apps","Web App","UI/UX Design","Mobile App"],Y=C==="All"?H:H.filter(b=>b.category.toLowerCase().includes(C.toLowerCase()));return i.jsxs("section",{className:"projects-section",id:"projects-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("div",{className:"badge badge-glow",children:[i.jsx(Fr,{size:14}),i.jsx("span",{children:"Featured Portfolio"})]}),i.jsx("h2",{className:"section-title",children:"Selected Works & Case Studies"})]}),i.jsx("div",{className:"project-filters",children:ee.map(b=>i.jsx("button",{onClick:()=>R(b),className:`filter-btn ${C===b?"active":""}`,children:b},b))}),i.jsx("div",{className:"projects-grid grid-3",children:Y.map(b=>i.jsxs("div",{className:"glass-card project-card",onClick:()=>c(b),children:[i.jsxs("div",{className:"project-image-box",children:[i.jsx("img",{src:b.image,alt:b.title,className:"project-img"}),i.jsx("div",{className:"project-overlay",children:i.jsxs("span",{className:"btn-view-details",children:[i.jsx("span",{children:"View Case Details"}),i.jsx(yf,{size:16})]})}),b.featured&&i.jsx("span",{className:"badge-featured",children:"Featured"})]}),i.jsxs("div",{className:"project-body",children:[i.jsx("span",{className:"project-category",children:b.category}),i.jsx("h3",{className:"project-title",children:b.title}),i.jsx("p",{className:"project-desc",children:b.shortDesc}),i.jsxs("div",{className:"project-tags",children:[b.tags.slice(0,4).map((U,X)=>i.jsx("span",{className:"tag-item",children:U},X)),b.tags.length>4&&i.jsxs("span",{className:"tag-item",children:["+",b.tags.length-4]})]}),i.jsxs("div",{className:"project-actions",onClick:U=>U.stopPropagation(),children:[b.liveUrl&&i.jsx("a",{href:b.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"link-icon-btn",title:"Live Demo",children:i.jsx(Xl,{size:16})}),b.githubUrl&&i.jsx("a",{href:b.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"link-icon-btn",title:"Source Code",children:i.jsx(Ja,{size:16})})]})]})]},b.id))})]}),x&&i.jsx("div",{className:"modal-backdrop",onClick:()=>c(null),children:i.jsxs("div",{className:"glass-card modal-content",onClick:b=>b.stopPropagation(),children:[i.jsx("button",{className:"modal-close-btn",onClick:()=>c(null),children:i.jsx(Kn,{size:20})}),i.jsx("img",{src:x.image,alt:x.title,className:"modal-img"}),i.jsxs("div",{className:"modal-body",children:[i.jsx("span",{className:"badge badge-glow",children:x.category}),i.jsx("h3",{className:"modal-title",children:x.title}),i.jsx("p",{className:"modal-desc",children:x.longDesc||x.shortDesc}),i.jsxs("div",{className:"modal-tags",children:[i.jsx("h4",{className:"tags-heading",children:"Technologies Used:"}),i.jsx("div",{className:"tags-flex",children:x.tags.map((b,U)=>i.jsx("span",{className:"modal-tag",children:b},U))})]}),i.jsxs("div",{className:"modal-actions",children:[x.liveUrl&&i.jsxs("a",{href:x.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-sm",children:[i.jsx(Xl,{size:16}),i.jsx("span",{children:"Visit Live Site"})]}),x.githubUrl&&i.jsxs("a",{href:x.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[i.jsx(Ja,{size:16}),i.jsx("span",{children:"View Repository"})]})]})]})]})}),i.jsx("style",{children:`
        .projects-section {
          padding: 5rem 0;
          position: relative;
        }
        .project-filters {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .filter-btn {
          padding: 0.55rem 1.2rem;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-btn:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
        }
        .filter-btn.active {
          background: var(--gradient-brand);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        .project-card {
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .project-image-box {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .project-card:hover .project-img {
          transform: scale(1.08);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 13, 22, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .btn-view-details {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1.1rem;
          background: var(--gradient-brand);
          color: #fff;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .badge-featured {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 0.25rem 0.75rem;
          background: var(--gradient-brand);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          border-radius: var(--radius-full);
        }
        .project-body {
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          flex-grow: 1;
        }
        .project-category {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .project-title {
          font-size: 1.15rem;
          font-weight: 700;
        }
        .project-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.4rem;
        }
        .tag-item {
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          background: var(--bg-input);
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .project-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 0.6rem;
          padding-top: 0.8rem;
          border-top: 1px solid var(--border-light);
        }
        .link-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-input);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .link-icon-btn:hover {
          background: var(--accent-primary);
          color: #fff;
        }

        /* Modal styling */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modal-content {
          width: 100%;
          max-width: 650px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 0;
          border-radius: var(--radius-lg);
        }
        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.6);
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .modal-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }
        .modal-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .modal-title {
          font-size: 1.6rem;
          font-weight: 800;
        }
        .modal-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.96rem;
        }
        .tags-heading {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }
        .tags-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .modal-tag {
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
          font-size: 0.82rem;
          font-weight: 600;
        }
        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
      `})]})},Xf=()=>{const{data:y}=ft(),{experience:x}=y;return i.jsxs("section",{className:"experience-section",id:"experience-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("div",{className:"badge badge-glow",children:[i.jsx(Fr,{size:14}),i.jsx("span",{children:"Career Path"})]}),i.jsx("h2",{className:"section-title",children:"Work Experience & Timeline"})]}),i.jsx("div",{className:"timeline-container",children:x.map((c,H)=>i.jsxs("div",{className:"timeline-item",children:[i.jsx("div",{className:"timeline-dot"}),i.jsxs("div",{className:"glass-card timeline-card",children:[i.jsxs("div",{className:"timeline-meta",children:[i.jsx("span",{className:"timeline-role",children:c.role}),i.jsxs("span",{className:"timeline-company",children:["@ ",c.company]})]}),i.jsxs("div",{className:"timeline-submeta",children:[i.jsxs("div",{className:"submeta-badge",children:[i.jsx(Za,{size:13}),i.jsx("span",{children:c.period})]}),i.jsxs("div",{className:"submeta-badge",children:[i.jsx(Lf,{size:13}),i.jsx("span",{children:c.location})]})]}),i.jsx("p",{className:"timeline-desc",children:c.description}),c.achievements&&c.achievements.length>0&&i.jsxs("div",{className:"achievements-box",children:[i.jsx("h4",{className:"achieve-title",children:"Key Highlights:"}),i.jsx("ul",{className:"achieve-list",children:c.achievements.map((C,R)=>i.jsxs("li",{className:"achieve-item",children:[i.jsx(es,{size:15,className:"achieve-icon"}),i.jsx("span",{children:C})]},R))})]})]})]},c.id||H))})]}),i.jsx("style",{children:`
        .experience-section {
          padding: 5rem 0;
          position: relative;
        }
        .timeline-container {
          position: relative;
          max-width: 850px;
          margin: 3rem auto 0;
          padding-left: 2rem;
          border-left: 2px solid var(--border-glow);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -2.4rem;
          top: 24px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent-primary);
          box-shadow: 0 0 12px var(--accent-primary);
        }
        .timeline-card {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .timeline-meta {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .timeline-role {
          font-size: 1.25rem;
          font-weight: 800;
        }
        .timeline-company {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--accent-secondary);
        }
        .timeline-submeta {
          display: flex;
          gap: 1rem;
        }
        .submeta-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .timeline-desc {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .achievements-box {
          margin-top: 0.5rem;
          padding-top: 0.8rem;
          border-top: 1px solid var(--border-light);
        }
        .achieve-title {
          font-size: 0.85rem;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        .achieve-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .achieve-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .achieve-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }
      `})]})},Zf=()=>{const{data:y,setCurrentPage:x}=ft(),{services:c}=y;return i.jsxs("section",{className:"services-section",id:"services-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("div",{className:"badge badge-glow",children:[i.jsx(lc,{size:14}),i.jsx("span",{children:"Services & Packages"})]}),i.jsx("h2",{className:"section-title",children:"Solutions Tailored for Growth"})]}),i.jsx("div",{className:"services-grid grid-3",children:c.map(H=>i.jsxs("div",{className:"glass-card service-card",children:[i.jsxs("div",{className:"service-header",children:[i.jsxs("span",{className:"price-tag",children:["From ",H.startingPrice]}),i.jsx("h3",{className:"service-title",children:H.title}),i.jsx("p",{className:"service-desc",children:H.description})]}),i.jsxs("div",{className:"deliverables-box",children:[i.jsx("span",{className:"deliv-title",children:"Included Deliverables:"}),i.jsx("ul",{className:"deliv-list",children:H.deliverables.map((C,R)=>i.jsxs("li",{className:"deliv-item",children:[i.jsx(es,{size:16,className:"deliv-icon"}),i.jsx("span",{children:C})]},R))})]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x("hire"),style:{marginTop:"auto"},children:[i.jsx("span",{children:"Book Service"}),i.jsx(rc,{size:16})]})]},H.id))})]}),i.jsx("style",{children:`
        .services-section {
          padding: 5rem 0;
          position: relative;
        }
        .services-grid {
          gap: 1.8rem;
        }
        .service-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .price-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .service-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0.3rem 0 0.5rem;
        }
        .service-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .deliverables-box {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }
        .deliv-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .deliv-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .deliv-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .deliv-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }
      `})]})},ep=()=>{const{data:y}=ft(),{testimonials:x}=y;return i.jsxs("section",{className:"testimonials-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("div",{className:"badge badge-glow",children:[i.jsx(Ff,{size:14}),i.jsx("span",{children:"Client Recommendations"})]}),i.jsx("h2",{className:"section-title",children:"What Leaders Say About Dinesh"})]}),i.jsx("div",{className:"testimonials-grid grid-3",children:x.map(c=>i.jsxs("div",{className:"glass-card testimonial-card",children:[i.jsx("div",{className:"stars-row",children:[...Array(5)].map((H,C)=>i.jsx(Vf,{size:16,className:"star-icon"},C))}),i.jsxs("p",{className:"testimonial-text",children:['"',c.content,'"']}),i.jsxs("div",{className:"client-info",children:[i.jsx("img",{src:c.avatar,alt:c.name,className:"client-avatar"}),i.jsxs("div",{children:[i.jsx("h4",{className:"client-name",children:c.name}),i.jsxs("span",{className:"client-role",children:[c.role,", ",c.company]})]})]})]},c.id))})]}),i.jsx("style",{children:`
        .testimonials-section {
          padding: 5rem 0;
          position: relative;
        }
        .testimonials-grid {
          gap: 1.8rem;
        }
        .testimonial-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .stars-row {
          display: flex;
          gap: 0.3rem;
          color: #fbbf24;
        }
        .testimonial-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          font-style: italic;
        }
        .client-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }
        .client-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
        }
        .client-name {
          font-size: 0.98rem;
          font-weight: 700;
        }
        .client-role {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
      `})]})},tp=()=>{const{data:y,setCurrentPage:x}=ft(),{personalInfo:c}=y;return i.jsxs("footer",{className:"footer-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-brand",children:[i.jsxs("div",{className:"brand-logo",onClick:()=>{x("home"),window.scrollTo({top:0,behavior:"smooth"})},children:[i.jsx("div",{className:"logo-badge",children:i.jsx(Zl,{size:20})}),i.jsxs("span",{className:"logo-text",children:[c.name.split(" ")[0],i.jsx("span",{className:"text-gradient",children:".dev"})]})]}),i.jsx("p",{className:"footer-bio",children:c.tagline})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{className:"footer-heading",children:"Navigation"}),i.jsxs("div",{className:"footer-links",children:[i.jsx("button",{onClick:()=>{x("home"),window.scrollTo({top:0,behavior:"smooth"})},children:"Home"}),i.jsx("button",{onClick:()=>x("certificates"),children:"Certificates"}),i.jsx("button",{onClick:()=>x("hire"),children:"Hire Me"}),i.jsx("button",{onClick:()=>x("admin"),children:"Admin CMS"})]})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{className:"footer-heading",children:"Connect Socially"}),i.jsxs("div",{className:"social-links-row",children:[c.socials.github&&i.jsx("a",{href:c.socials.github,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"GitHub",children:i.jsx(Ja,{size:18})}),c.socials.linkedin&&i.jsx("a",{href:c.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"LinkedIn",children:i.jsx(_f,{size:18})}),c.socials.twitter&&i.jsx("a",{href:c.socials.twitter,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"Twitter",children:i.jsx($f,{size:18})}),c.socials.dribbble&&i.jsx("a",{href:c.socials.dribbble,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"Dribbble",children:i.jsx(bf,{size:18})}),c.socials.figma&&i.jsx("a",{href:c.socials.figma,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"Figma",children:i.jsx(Ef,{size:18})})]})]})]}),i.jsxs("div",{className:"footer-bottom",children:[i.jsxs("p",{children:["© ",new Date().getFullYear()," ",c.name,". All rights reserved."]}),i.jsxs("button",{className:"admin-footer-link",onClick:()=>x("admin"),children:[i.jsx(ts,{size:14}),i.jsx("span",{children:"Admin Portal"})]})]})]}),i.jsx("style",{children:`
        .footer-section {
          padding: 4rem 0 2rem;
          background: var(--bg-secondary);
          border-top: 1px solid var(--glass-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-bio {
          color: var(--text-muted);
          font-size: 0.92rem;
          max-width: 400px;
          line-height: 1.6;
        }
        .footer-heading {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
        }
        .footer-links button {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.9rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }
        .footer-links button:hover {
          color: var(--accent-primary);
        }
        .social-links-row {
          display: flex;
          gap: 0.6rem;
        }
        .social-link-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-input);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .social-link-btn:hover {
          background: var(--gradient-brand);
          color: #fff;
          transform: translateY(-2px);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .admin-footer-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: none;
          color: var(--text-dim);
          font-size: 0.85rem;
          cursor: pointer;
        }
        .admin-footer-link:hover {
          color: var(--accent-primary);
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `})]})},np=()=>{const{data:y}=ft(),{certificates:x}=y,[c,H]=se.useState(null);return i.jsxs("div",{className:"certificates-page",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("div",{className:"badge badge-emerald",children:[i.jsx(Ga,{size:14}),i.jsx("span",{children:"Verified Credentials"})]}),i.jsx("h2",{className:"section-title",children:"Professional Certifications"}),i.jsx("p",{className:"page-intro",children:"Validated industry certifications from leading cloud, web engineering, and design organizations."})]}),i.jsx("div",{className:"certificates-grid grid-2",children:x.map(C=>i.jsxs("div",{className:"glass-card cert-card",onClick:()=>H(C),children:[i.jsxs("div",{className:"cert-header",children:[i.jsx("div",{className:"cert-icon-box",children:i.jsx(Or,{size:24,className:"cert-award-icon"})}),i.jsxs("div",{className:"cert-meta",children:[i.jsx("span",{className:"cert-issuer",children:C.issuer}),i.jsx("h3",{className:"cert-title",children:C.title})]})]}),i.jsxs("div",{className:"cert-details",children:[i.jsxs("div",{className:"cert-detail-item",children:[i.jsx(Za,{size:14}),i.jsxs("span",{children:["Issued: ",C.date]})]}),i.jsxs("div",{className:"cert-detail-item",children:[i.jsx(If,{size:14}),i.jsxs("span",{children:["ID: ",C.credentialId]})]})]}),i.jsx("div",{className:"cert-skills",children:C.skills.map((R,ee)=>i.jsx("span",{className:"cert-skill-tag",children:R},ee))}),i.jsxs("div",{className:"cert-actions",onClick:R=>R.stopPropagation(),children:[C.verifyUrl&&i.jsxs("a",{href:C.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[i.jsx(Xl,{size:14}),i.jsx("span",{children:"Verify Credential"})]}),i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>H(C),children:i.jsx("span",{children:"View Details"})})]})]},C.id))})]}),c&&i.jsx("div",{className:"modal-backdrop",onClick:()=>H(null),children:i.jsxs("div",{className:"glass-card modal-content",onClick:C=>C.stopPropagation(),children:[i.jsx("button",{className:"modal-close-btn",onClick:()=>H(null),children:i.jsx(Kn,{size:20})}),c.badgeImage&&i.jsx("img",{src:c.badgeImage,alt:c.title,className:"modal-cert-img"}),i.jsxs("div",{className:"modal-body",children:[i.jsxs("div",{className:"badge badge-emerald",children:[i.jsx(Ga,{size:14}),i.jsx("span",{children:"Officially Verified"})]}),i.jsx("h3",{className:"modal-title",children:c.title}),i.jsxs("p",{className:"cert-issuer-large",children:["Issued by ",i.jsx("strong",{children:c.issuer})]}),i.jsxs("div",{className:"modal-info-grid",children:[i.jsxs("div",{className:"info-box",children:[i.jsx("span",{className:"info-label",children:"Issue Date"}),i.jsx("span",{className:"info-val",children:c.date})]}),i.jsxs("div",{className:"info-box",children:[i.jsx("span",{className:"info-label",children:"Credential ID"}),i.jsx("span",{className:"info-val",children:c.credentialId})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"tags-heading",children:"Mastered Competencies:"}),i.jsx("div",{className:"tags-flex",children:c.skills.map((C,R)=>i.jsx("span",{className:"modal-tag",children:C},R))})]}),c.verifyUrl&&i.jsxs("a",{href:c.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-sm",style:{marginTop:"1rem"},children:[i.jsx(Xl,{size:16}),i.jsx("span",{children:"Open Official Verification Page"})]})]})]})}),i.jsx("style",{children:`
        .certificates-page {
          padding: 4rem 0 6rem;
        }
        .page-intro {
          color: var(--text-muted);
          max-width: 600px;
          margin-top: 0.5rem;
          font-size: 1.05rem;
        }
        .certificates-grid {
          gap: 1.8rem;
          margin-top: 2.5rem;
        }
        .cert-card {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          cursor: pointer;
        }
        .cert-header {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
        }
        .cert-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cert-issuer {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-emerald);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .cert-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 0.2rem;
        }
        .cert-details {
          display: flex;
          gap: 1.5rem;
          padding: 0.8rem 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .cert-detail-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .cert-skill-tag {
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: var(--bg-input);
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .cert-actions {
          display: flex;
          gap: 0.8rem;
          margin-top: 0.4rem;
        }

        .modal-cert-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }
        .cert-issuer-large {
          font-size: 1rem;
          color: var(--text-muted);
        }
        .modal-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          background: var(--bg-input);
          padding: 1rem;
          border-radius: var(--radius-md);
        }
        .info-box {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }
        .info-val {
          font-weight: 600;
          font-size: 0.95rem;
        }
      `})]})};var ns={};(function y(x,c,H,C){var R=!!(x.Worker&&x.Blob&&x.Promise&&x.OffscreenCanvas&&x.OffscreenCanvasRenderingContext2D&&x.HTMLCanvasElement&&x.HTMLCanvasElement.prototype.transferControlToOffscreen&&x.URL&&x.URL.createObjectURL),ee=typeof Path2D=="function"&&typeof DOMMatrix=="function",Y=(function(){if(!x.OffscreenCanvas)return!1;try{var f=new OffscreenCanvas(1,1),s=f.getContext("2d");s.fillRect(0,0,1,1);var h=f.transferToImageBitmap();s.createPattern(h,"no-repeat")}catch{return!1}return!0})();function b(){}function U(f){var s=c.exports.Promise,h=s!==void 0?s:x.Promise;return typeof h=="function"?new h(f):(f(b,b),null)}var X=(function(f,s){return{transform:function(h){if(f)return h;if(s.has(h))return s.get(h);var S=new OffscreenCanvas(h.width,h.height),E=S.getContext("2d");return E.drawImage(h,0,0),s.set(h,S),S},clear:function(){s.clear()}}})(Y,new Map),te=(function(){var f=Math.floor(16.666666666666668),s,h,S={},E=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(s=function(M){var I=Math.random();return S[I]=requestAnimationFrame(function P(_){E===_||E+f-1<_?(E=_,delete S[I],M()):S[I]=requestAnimationFrame(P)}),I},h=function(M){S[M]&&cancelAnimationFrame(S[M])}):(s=function(M){return setTimeout(M,f)},h=function(M){return clearTimeout(M)}),{frame:s,cancel:h}})(),ne=(function(){var f,s,h={};function S(E){function M(I,P){E.postMessage({options:I||{},callback:P})}E.init=function(P){var _=P.transferControlToOffscreen();E.postMessage({canvas:_},[_])},E.fire=function(P,_,Q){if(s)return M(P,null),s;var ae=Math.random().toString(36).slice(2);return s=U(function(fe){function we(Pe){Pe.data.callback===ae&&(delete h[ae],E.removeEventListener("message",we),s=null,X.clear(),Q(),fe())}E.addEventListener("message",we),M(P,ae),h[ae]=we.bind(null,{data:{callback:ae}})}),s},E.reset=function(){E.postMessage({reset:!0});for(var P in h)h[P](),delete h[P]}}return function(){if(f)return f;if(!H&&R){var E=["var CONFETTI, SIZE = {}, module = {};","("+y.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{f=new Worker(URL.createObjectURL(new Blob([E])))}catch(M){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",M),null}S(f)}return f}})(),Te={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function pe(f,s){return s?s(f):f}function le(f){return f!=null}function V(f,s,h){return pe(f&&le(f[s])?f[s]:Te[s],h)}function Fe(f){return f<0?0:Math.floor(f)}function oe(f,s){return Math.floor(Math.random()*(s-f))+f}function me(f){return parseInt(f,16)}function Z(f){return f.map(ze)}function ze(f){var s=String(f).replace(/[^0-9a-f]/gi,"");return s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:me(s.substring(0,2)),g:me(s.substring(2,4)),b:me(s.substring(4,6))}}function ce(f){var s=V(f,"origin",Object);return s.x=V(s,"x",Number),s.y=V(s,"y",Number),s}function ke(f){f.width=document.documentElement.clientWidth,f.height=document.documentElement.clientHeight}function O(f){var s=f.getBoundingClientRect();f.width=s.width,f.height=s.height}function K(f){var s=document.createElement("canvas");return s.style.position="fixed",s.style.top="0px",s.style.left="0px",s.style.pointerEvents="none",s.style.zIndex=f,s}function B(f,s,h,S,E,M,I,P,_){f.save(),f.translate(s,h),f.rotate(M),f.scale(S,E),f.arc(0,0,1,I,P,_),f.restore()}function ge(f){var s=f.angle*(Math.PI/180),h=f.spread*(Math.PI/180);return{x:f.x,y:f.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:f.startVelocity*.5+Math.random()*f.startVelocity,angle2D:-s+(.5*h-Math.random()*h),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:f.color,shape:f.shape,tick:0,totalTicks:f.ticks,decay:f.decay,drift:f.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:f.gravity*3,ovalScalar:.6,scalar:f.scalar,flat:f.flat}}function et(f,s){s.x+=Math.cos(s.angle2D)*s.velocity+s.drift,s.y+=Math.sin(s.angle2D)*s.velocity+s.gravity,s.velocity*=s.decay,s.flat?(s.wobble=0,s.wobbleX=s.x+10*s.scalar,s.wobbleY=s.y+10*s.scalar,s.tiltSin=0,s.tiltCos=0,s.random=1):(s.wobble+=s.wobbleSpeed,s.wobbleX=s.x+10*s.scalar*Math.cos(s.wobble),s.wobbleY=s.y+10*s.scalar*Math.sin(s.wobble),s.tiltAngle+=.1,s.tiltSin=Math.sin(s.tiltAngle),s.tiltCos=Math.cos(s.tiltAngle),s.random=Math.random()+2);var h=s.tick++/s.totalTicks,S=s.x+s.random*s.tiltCos,E=s.y+s.random*s.tiltSin,M=s.wobbleX+s.random*s.tiltCos,I=s.wobbleY+s.random*s.tiltSin;if(f.fillStyle="rgba("+s.color.r+", "+s.color.g+", "+s.color.b+", "+(1-h)+")",f.beginPath(),ee&&s.shape.type==="path"&&typeof s.shape.path=="string"&&Array.isArray(s.shape.matrix))f.fill(ye(s.shape.path,s.shape.matrix,s.x,s.y,Math.abs(M-S)*.1,Math.abs(I-E)*.1,Math.PI/10*s.wobble));else if(s.shape.type==="bitmap"){var P=Math.PI/10*s.wobble,_=Math.abs(M-S)*.1,Q=Math.abs(I-E)*.1,ae=s.shape.bitmap.width*s.scalar,fe=s.shape.bitmap.height*s.scalar,we=new DOMMatrix([Math.cos(P)*_,Math.sin(P)*_,-Math.sin(P)*Q,Math.cos(P)*Q,s.x,s.y]);we.multiplySelf(new DOMMatrix(s.shape.matrix));var Pe=f.createPattern(X.transform(s.shape.bitmap),"no-repeat");Pe.setTransform(we),f.globalAlpha=1-h,f.fillStyle=Pe,f.fillRect(s.x-ae/2,s.y-fe/2,ae,fe),f.globalAlpha=1}else if(s.shape==="circle")f.ellipse?f.ellipse(s.x,s.y,Math.abs(M-S)*s.ovalScalar,Math.abs(I-E)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI):B(f,s.x,s.y,Math.abs(M-S)*s.ovalScalar,Math.abs(I-E)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI);else if(s.shape==="star")for(var ie=Math.PI/2*3,Ve=4*s.scalar,tt=8*s.scalar,Ge=s.x,pt=s.y,kt=5,qe=Math.PI/kt;kt--;)Ge=s.x+Math.cos(ie)*tt,pt=s.y+Math.sin(ie)*tt,f.lineTo(Ge,pt),ie+=qe,Ge=s.x+Math.cos(ie)*Ve,pt=s.y+Math.sin(ie)*Ve,f.lineTo(Ge,pt),ie+=qe;else f.moveTo(Math.floor(s.x),Math.floor(s.y)),f.lineTo(Math.floor(s.wobbleX),Math.floor(E)),f.lineTo(Math.floor(M),Math.floor(I)),f.lineTo(Math.floor(S),Math.floor(s.wobbleY));return f.closePath(),f.fill(),s.tick<s.totalTicks}function Le(f,s,h,S,E){var M=s.slice(),I=f.getContext("2d"),P,_,Q=U(function(ae){function fe(){P=_=null,I.clearRect(0,0,S.width,S.height),X.clear(),E(),ae()}function we(){H&&!(S.width===C.width&&S.height===C.height)&&(S.width=f.width=C.width,S.height=f.height=C.height),!S.width&&!S.height&&(h(f),S.width=f.width,S.height=f.height),I.clearRect(0,0,S.width,S.height),M=M.filter(function(Pe){return et(I,Pe)}),M.length?P=te.frame(we):fe()}P=te.frame(we),_=fe});return{addFettis:function(ae){return M=M.concat(ae),Q},canvas:f,promise:Q,reset:function(){P&&te.cancel(P),_&&_()}}}function Se(f,s){var h=!f,S=!!V(s||{},"resize"),E=!1,M=V(s,"disableForReducedMotion",Boolean),I=R&&!!V(s||{},"useWorker"),P=I?ne():null,_=h?ke:O,Q=f&&P?!!f.__confetti_initialized:!1,ae=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,fe;function we(ie,Ve,tt){for(var Ge=V(ie,"particleCount",Fe),pt=V(ie,"angle",Number),kt=V(ie,"spread",Number),qe=V(ie,"startVelocity",Number),Bt=V(ie,"decay",Number),Yn=V(ie,"gravity",Number),Ur=V(ie,"drift",Number),Jn=V(ie,"colors",Z),Hr=V(ie,"ticks",Number),Gn=V(ie,"shapes"),Xn=V(ie,"scalar"),Nn=!!V(ie,"flat"),Zn=ce(ie),Vt=Ge,_t=[],ei=f.width*Zn.x,Br=f.height*Zn.y;Vt--;)_t.push(ge({x:ei,y:Br,angle:pt,spread:kt,startVelocity:qe,color:Jn[Vt%Jn.length],shape:Gn[oe(0,Gn.length)],ticks:Hr,decay:Bt,gravity:Yn,drift:Ur,scalar:Xn,flat:Nn}));return fe?fe.addFettis(_t):(fe=Le(f,_t,_,Ve,tt),fe.promise)}function Pe(ie){var Ve=M||V(ie,"disableForReducedMotion",Boolean),tt=V(ie,"zIndex",Number);if(Ve&&ae)return U(function(qe){qe()});h&&fe?f=fe.canvas:h&&!f&&(f=K(tt),document.body.appendChild(f)),S&&!Q&&_(f);var Ge={width:f.width,height:f.height};P&&!Q&&P.init(f),Q=!0,P&&(f.__confetti_initialized=!0);function pt(){if(P){var qe={getBoundingClientRect:function(){if(!h)return f.getBoundingClientRect()}};_(qe),P.postMessage({resize:{width:qe.width,height:qe.height}});return}Ge.width=Ge.height=null}function kt(){fe=null,S&&(E=!1,x.removeEventListener("resize",pt)),h&&f&&(document.body.contains(f)&&document.body.removeChild(f),f=null,Q=!1)}return S&&!E&&(E=!0,x.addEventListener("resize",pt,!1)),P?P.fire(ie,Ge,kt):we(ie,Ge,kt)}return Pe.reset=function(){P&&P.reset(),fe&&fe.reset()},Pe}var Ae;function ve(){return Ae||(Ae=Se(null,{useWorker:!0,resize:!0})),Ae}function ye(f,s,h,S,E,M,I){var P=new Path2D(f),_=new Path2D;_.addPath(P,new DOMMatrix(s));var Q=new Path2D;return Q.addPath(_,new DOMMatrix([Math.cos(I)*E,Math.sin(I)*E,-Math.sin(I)*M,Math.cos(I)*M,h,S])),Q}function z(f){if(!ee)throw new Error("path confetti are not supported in this browser");var s,h;typeof f=="string"?s=f:(s=f.path,h=f.matrix);var S=new Path2D(s),E=document.createElement("canvas"),M=E.getContext("2d");if(!h){for(var I=1e3,P=I,_=I,Q=0,ae=0,fe,we,Pe=0;Pe<I;Pe+=2)for(var ie=0;ie<I;ie+=2)M.isPointInPath(S,Pe,ie,"nonzero")&&(P=Math.min(P,Pe),_=Math.min(_,ie),Q=Math.max(Q,Pe),ae=Math.max(ae,ie));fe=Q-P,we=ae-_;var Ve=10,tt=Math.min(Ve/fe,Ve/we);h=[tt,0,0,tt,-Math.round(fe/2+P)*tt,-Math.round(we/2+_)*tt]}return{type:"path",path:s,matrix:h}}function W(f){var s,h=1,S="#000000",E='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof f=="string"?s=f:(s=f.text,h="scalar"in f?f.scalar:h,E="fontFamily"in f?f.fontFamily:E,S="color"in f?f.color:S);var M=10*h,I=""+M+"px "+E,P=new OffscreenCanvas(M,M),_=P.getContext("2d");_.font=I;var Q=_.measureText(s),ae=Math.ceil(Q.actualBoundingBoxRight+Q.actualBoundingBoxLeft),fe=Math.ceil(Q.actualBoundingBoxAscent+Q.actualBoundingBoxDescent),we=2,Pe=Q.actualBoundingBoxLeft+we,ie=Q.actualBoundingBoxAscent+we;ae+=we+we,fe+=we+we,P=new OffscreenCanvas(ae,fe),_=P.getContext("2d"),_.font=I,_.fillStyle=S,_.fillText(s,Pe,ie);var Ve=1/h;return{type:"bitmap",bitmap:P.transferToImageBitmap(),matrix:[Ve,0,0,Ve,-ae*Ve/2,-fe*Ve/2]}}c.exports=function(){return ve().apply(this,arguments)},c.exports.reset=function(){ve().reset()},c.exports.create=Se,c.exports.shapeFromPath=z,c.exports.shapeFromText=W})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ns,!1);const rp=ns.exports;ns.exports.create;const lp=()=>{const{addInquiry:y,data:x}=ft(),[c,H]=se.useState("Full-Stack Web App"),[C,R]=se.useState("$3,000 - $5,000"),[ee,Y]=se.useState("1 Month"),[b,U]=se.useState(""),[X,te]=se.useState(""),[ne,Te]=se.useState(""),[pe,le]=se.useState(!1),V=["Full-Stack Web App","UI/UX Product Design","Mobile Application","Code Audit & Optimization","Hourly Consulting"],Fe=["$1,000 - $3,000","$3,000 - $5,000","$5,000 - $10,000","$10,000+"],oe=["Urgent (< 2 weeks)","1 Month","2 - 3 Months","Flexible / Ongoing"],me=async Z=>{if(Z.preventDefault(),!(!b||!X||!ne)){y({clientName:b,clientEmail:X,projectType:c,budget:C,timeline:ee,message:ne});try{await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:"0289a05b-8012-4217-91a5-8664b4ec3c2d",name:b,email:X,subject:`[Portfolio Hiring Request] ${c} from ${b}`,message:`Client Name: ${b}
Client Email: ${X}
Project Type: ${c}
Budget: ${C}
Timeline: ${ee}

Client Message:
${ne}`})})}catch{console.log("Email dispatch completed.")}le(!0);try{rp({particleCount:100,spread:70,origin:{y:.6}})}catch{}}};return i.jsxs("div",{className:"hiring-page",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("div",{className:"badge badge-glow",children:[i.jsx(Rr,{size:14}),i.jsx("span",{children:"Hire Dinesh"})]}),i.jsx("h2",{className:"section-title",children:"Let's Build Something Extraordinary Together"}),i.jsx("p",{className:"page-intro",children:"Have a project in mind, need a Team Lead or software engineer? Send a project inquiry below."})]}),pe?i.jsxs("div",{className:"glass-card success-banner",children:[i.jsx("div",{className:"success-icon",children:i.jsx(es,{size:48})}),i.jsx("h3",{className:"success-title",children:"Inquiry Received Successfully!"}),i.jsxs("p",{className:"success-desc",children:["Thank you, ",i.jsx("strong",{children:b}),"! Your project proposal has been logged in the Admin Portal and sent to ",i.jsx("strong",{children:"dineshelumalai2006@gmail.com"}),". Dinesh will review your request and reply to ",i.jsx("strong",{children:X})," within 24 hours."]}),i.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:[i.jsxs("a",{href:`mailto:dineshelumalai2006@gmail.com?subject=[Hiring Proposal] ${c} from ${b}&body=Hi Dinesh,%0D%0A%0D%0AI submitted a proposal on your website:%0D%0A- Project Type: ${c}%0D%0A- Budget: ${C}%0D%0A- Timeline: ${ee}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(ne)}`,className:"btn btn-secondary btn-sm",children:[i.jsx(Rr,{size:16}),i.jsx("span",{children:"Open Direct Email Client"})]}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>{le(!1),U(""),te(""),Te("")},children:"Submit Another Request"})]})]}):i.jsxs("div",{className:"hiring-grid",children:[i.jsxs("form",{className:"glass-card hiring-form",onSubmit:me,children:[i.jsxs("div",{className:"form-step",children:[i.jsxs("label",{className:"step-label",children:[i.jsx(Fr,{size:16}),i.jsx("span",{children:"1. What type of project are you planning?"})]}),i.jsx("div",{className:"chips-grid",children:V.map(Z=>i.jsx("button",{type:"button",onClick:()=>H(Z),className:`chip-btn ${c===Z?"selected":""}`,children:Z},Z))})]}),i.jsxs("div",{className:"form-step",children:[i.jsxs("label",{className:"step-label",children:[i.jsx(Sf,{size:16}),i.jsx("span",{children:"2. Estimated Project Budget (USD)"})]}),i.jsx("div",{className:"chips-grid",children:Fe.map(Z=>i.jsx("button",{type:"button",onClick:()=>R(Z),className:`chip-btn ${C===Z?"selected":""}`,children:Z},Z))})]}),i.jsxs("div",{className:"form-step",children:[i.jsxs("label",{className:"step-label",children:[i.jsx(Za,{size:16}),i.jsx("span",{children:"3. Expected Timeline"})]}),i.jsx("div",{className:"chips-grid",children:oe.map(Z=>i.jsx("button",{type:"button",onClick:()=>Y(Z),className:`chip-btn ${ee===Z?"selected":""}`,children:Z},Z))})]}),i.jsxs("div",{className:"form-step",children:[i.jsxs("label",{className:"step-label",children:[i.jsx(Af,{size:16}),i.jsx("span",{children:"4. Your Information & Project Overview"})]}),i.jsxs("div",{className:"grid-2",style:{marginBottom:"1rem"},children:[i.jsxs("div",{className:"form-group",style:{margin:0},children:[i.jsx("label",{className:"form-label",children:"Your Name *"}),i.jsx("input",{type:"text",required:!0,placeholder:"e.g. Alex Morgan",value:b,onChange:Z=>U(Z.target.value),className:"form-input"})]}),i.jsxs("div",{className:"form-group",style:{margin:0},children:[i.jsx("label",{className:"form-label",children:"Email Address *"}),i.jsx("input",{type:"email",required:!0,placeholder:"alex@company.com",value:X,onChange:Z=>te(Z.target.value),className:"form-input"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Project Details & Requirements *"}),i.jsx("textarea",{rows:4,required:!0,placeholder:"Tell me about your goals, features needed, timeline, or existing codebase...",value:ne,onChange:Z=>Te(Z.target.value),className:"form-textarea"})]})]}),i.jsxs("button",{type:"submit",className:"btn btn-primary btn-submit",children:[i.jsx(Rr,{size:18}),i.jsx("span",{children:"Send Hiring Proposal"})]})]}),i.jsxs("div",{className:"hiring-sidebar",children:[i.jsxs("div",{className:"glass-card side-info-card",children:[i.jsx("h4",{className:"side-title",children:"Direct Contact"}),i.jsxs("div",{className:"side-detail-item",children:[i.jsx("span",{className:"side-label",children:"Email"}),i.jsx("span",{className:"side-val",children:x.personalInfo.email})]}),i.jsxs("div",{className:"side-detail-item",children:[i.jsx("span",{className:"side-label",children:"Phone"}),i.jsx("span",{className:"side-val",children:x.personalInfo.phone})]}),i.jsxs("div",{className:"side-detail-item",children:[i.jsx("span",{className:"side-label",children:"Response Time"}),i.jsx("span",{className:"side-val",children:"Within 24 Hours"})]}),i.jsxs("div",{className:"side-detail-item",children:[i.jsx("span",{className:"side-label",children:"Availability"}),i.jsx("span",{className:"badge badge-emerald",children:x.personalInfo.availability})]})]}),i.jsxs("div",{className:"glass-card side-info-card",children:[i.jsx("h4",{className:"side-title",children:"Why Work With Dinesh?"}),i.jsxs("ul",{className:"perks-list",children:[i.jsx("li",{children:"⚡ End-to-end Ownership from Figma to Deployment"}),i.jsx("li",{children:"🛡️ Strict Code Quality & Performance Benchmarks"}),i.jsx("li",{children:"💬 Daily Async Updates & Transparent Communication"})]})]})]})]})]}),i.jsx("style",{children:`
        .hiring-page {
          padding: 4rem 0 6rem;
        }
        .hiring-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.2rem;
          margin-top: 2.5rem;
        }
        .hiring-form {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        .form-step {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-main);
        }
        .chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .chip-btn {
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius-md);
          background: var(--bg-input);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .chip-btn:hover {
          border-color: var(--accent-primary);
          color: var(--text-main);
        }
        .chip-btn.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
        .btn-submit {
          width: 100%;
          padding: 1rem;
          font-size: 1.05rem;
        }
        .hiring-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .side-info-card {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .side-title {
          font-size: 1.1rem;
          color: var(--accent-primary);
        }
        .side-detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .side-label {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }
        .side-val {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .perks-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .success-banner {
          max-width: 650px;
          margin: 3rem auto;
          padding: 3rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
        }
        .success-icon {
          color: #34d399;
        }
        .success-title {
          font-size: 1.8rem;
        }
        .success-desc {
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .hiring-grid { grid-template-columns: 1fr; }
        }
      `})]})},ip=()=>{const{data:y,updatePersonalInfo:x,addProject:c,deleteProject:H,addCertificate:C,deleteCertificate:R,addSkill:ee,deleteSkill:Y,deleteInquiry:b,resetToDefault:U}=ft(),[X,te]=se.useState(!0),[ne,Te]=se.useState(""),[pe,le]=se.useState("bio"),[V,Fe]=se.useState(!1),[oe,me]=se.useState(y.personalInfo),[Z,ze]=se.useState(!1),[ce,ke]=se.useState({title:"",shortDesc:"",longDesc:"",category:"Web App",tags:"React, Node.js",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",liveUrl:"",githubUrl:"",featured:!1}),[O,K]=se.useState(!1),[B,ge]=se.useState({title:"",issuer:"",date:"",credentialId:"",verifyUrl:"",badgeImage:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=300",skills:"Cloud Architecture, React"}),[et,Le]=se.useState(!1),[Se,Ae]=se.useState({name:"",category:"Frontend",level:85}),ve=()=>{Fe(!0),setTimeout(()=>Fe(!1),3e3)},ye=s=>{s.preventDefault(),x(oe),ve()},z=s=>{s.preventDefault(),ce.title&&(c(ce),ze(!1),ke({title:"",shortDesc:"",longDesc:"",category:"Web App",tags:"React, Node.js",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",liveUrl:"",githubUrl:"",featured:!1}),ve())},W=s=>{s.preventDefault(),B.title&&(C(B),K(!1),ge({title:"",issuer:"",date:"",credentialId:"",verifyUrl:"",badgeImage:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=300",skills:"Cloud Architecture, React"}),ve())},f=s=>{s.preventDefault(),Se.name&&(ee(Se),Le(!1),Ae({name:"",category:"Frontend",level:85}),ve())};return X?i.jsxs("div",{className:"admin-page",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"admin-header",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"badge badge-glow",children:[i.jsx(ts,{size:14}),i.jsx("span",{children:"Admin Management Dashboard"})]}),i.jsx("h2",{className:"section-title",children:"Portfolio CMS & Data Control"})]}),i.jsxs("div",{className:"admin-header-actions",children:[i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.confirm("Reset portfolio data to original default state?")&&(U(),me(y.personalInfo),ve())},children:[i.jsx(Uf,{size:14}),i.jsx("span",{children:"Reset Default Data"})]}),i.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>te(!1),children:[i.jsx(Zu,{size:14}),i.jsx("span",{children:"Lock CMS"})]})]})]}),V&&i.jsxs("div",{className:"save-toast",children:[i.jsx(xf,{size:18}),i.jsx("span",{children:"Portfolio changes saved & updated live!"})]}),i.jsxs("div",{className:"admin-tabs",children:[i.jsxs("button",{className:`admin-tab ${pe==="bio"?"active":""}`,onClick:()=>le("bio"),children:[i.jsx(ic,{size:16}),i.jsx("span",{children:"Bio & Profile"})]}),i.jsxs("button",{className:`admin-tab ${pe==="projects"?"active":""}`,onClick:()=>le("projects"),children:[i.jsx(Fr,{size:16}),i.jsxs("span",{children:["Projects (",y.projects.length,")"]})]}),i.jsxs("button",{className:`admin-tab ${pe==="certs"?"active":""}`,onClick:()=>le("certs"),children:[i.jsx(Or,{size:16}),i.jsxs("span",{children:["Certificates (",y.certificates.length,")"]})]}),i.jsxs("button",{className:`admin-tab ${pe==="skills"?"active":""}`,onClick:()=>le("skills"),children:[i.jsx(ac,{size:16}),i.jsxs("span",{children:["Skills (",y.skills.length,")"]})]}),i.jsxs("button",{className:`admin-tab ${pe==="inquiries"?"active":""}`,onClick:()=>le("inquiries"),children:[i.jsx(Tf,{size:16}),i.jsxs("span",{children:["Hiring Inquiries (",(y.inquiries||[]).length,")"]})]})]}),pe==="bio"&&i.jsxs("form",{className:"glass-card admin-card",onSubmit:ye,children:[i.jsx("h3",{className:"admin-sub-title",children:"Personal Profile Details"}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Full Name"}),i.jsx("input",{type:"text",value:oe.name,onChange:s=>me({...oe,name:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Professional Title"}),i.jsx("input",{type:"text",value:oe.title,onChange:s=>me({...oe,title:s.target.value}),className:"form-input"})]})]}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Status Badge (Hero Pill)"}),i.jsx("input",{type:"text",value:oe.statusBadge,onChange:s=>me({...oe,statusBadge:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Location"}),i.jsx("input",{type:"text",value:oe.location,onChange:s=>me({...oe,location:s.target.value}),className:"form-input"})]})]}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Email Address"}),i.jsx("input",{type:"email",value:oe.email,onChange:s=>me({...oe,email:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Avatar Image URL"}),i.jsx("input",{type:"text",value:oe.avatar,onChange:s=>me({...oe,avatar:s.target.value}),className:"form-input"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Hero Tagline"}),i.jsx("input",{type:"text",value:oe.tagline,onChange:s=>me({...oe,tagline:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Biography Overview"}),i.jsx("textarea",{rows:4,value:oe.bio,onChange:s=>me({...oe,bio:s.target.value}),className:"form-textarea"})]}),i.jsxs("button",{type:"submit",className:"btn btn-primary",style:{alignSelf:"flex-start"},children:[i.jsx(Hf,{size:18}),i.jsx("span",{children:"Save Bio Updates"})]})]}),pe==="projects"&&i.jsxs("div",{className:"admin-section",children:[i.jsxs("div",{className:"admin-action-bar",children:[i.jsx("h3",{children:"Manage Portfolio Projects"}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>ze(!0),children:[i.jsx(Ya,{size:16}),i.jsx("span",{children:"Add New Project"})]})]}),i.jsx("div",{className:"admin-list",children:y.projects.map(s=>i.jsxs("div",{className:"glass-card list-item",children:[i.jsx("img",{src:s.image,alt:s.title,className:"item-thumb"}),i.jsxs("div",{className:"item-info",children:[i.jsx("h4",{className:"item-name",children:s.title}),i.jsxs("span",{className:"item-meta",children:[s.category," • ",s.tags.join(", ")]})]}),i.jsx("button",{className:"btn-delete",onClick:()=>{H(s.id),ve()},title:"Delete Project",children:i.jsx(Gl,{size:18})})]},s.id))})]}),pe==="certs"&&i.jsxs("div",{className:"admin-section",children:[i.jsxs("div",{className:"admin-action-bar",children:[i.jsx("h3",{children:"Manage Certifications"}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>K(!0),children:[i.jsx(Ya,{size:16}),i.jsx("span",{children:"Add Certificate"})]})]}),i.jsx("div",{className:"admin-list",children:y.certificates.map(s=>i.jsxs("div",{className:"glass-card list-item",children:[i.jsx("div",{className:"cert-badge-placeholder",children:i.jsx(Or,{size:20})}),i.jsxs("div",{className:"item-info",children:[i.jsx("h4",{className:"item-name",children:s.title}),i.jsxs("span",{className:"item-meta",children:[s.issuer," (",s.date,") • ID: ",s.credentialId]})]}),i.jsx("button",{className:"btn-delete",onClick:()=>{R(s.id),ve()},title:"Delete Certificate",children:i.jsx(Gl,{size:18})})]},s.id))})]}),pe==="skills"&&i.jsxs("div",{className:"admin-section",children:[i.jsxs("div",{className:"admin-action-bar",children:[i.jsx("h3",{children:"Manage Skills & Competencies"}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>Le(!0),children:[i.jsx(Ya,{size:16}),i.jsx("span",{children:"Add Skill"})]})]}),i.jsx("div",{className:"admin-list",children:y.skills.map((s,h)=>i.jsxs("div",{className:"glass-card list-item",children:[i.jsxs("div",{className:"item-info",children:[i.jsx("h4",{className:"item-name",children:s.name}),i.jsxs("span",{className:"item-meta",children:[s.category," • ",s.level,"% Proficiency"]})]}),i.jsx("button",{className:"btn-delete",onClick:()=>{Y(h),ve()},title:"Delete Skill",children:i.jsx(Gl,{size:18})})]},h))})]}),pe==="inquiries"&&i.jsxs("div",{className:"admin-section",children:[i.jsx("h3",{children:"Submitted Client Hiring Proposals"}),!y.inquiries||y.inquiries.length===0?i.jsx("p",{className:"empty-text",children:"No hiring proposals received yet."}):i.jsx("div",{className:"inquiry-list",children:y.inquiries.map(s=>i.jsxs("div",{className:"glass-card inquiry-card",children:[i.jsxs("div",{className:"inquiry-header",children:[i.jsxs("div",{children:[i.jsx("h4",{className:"inq-client",children:s.clientName}),i.jsx("a",{href:`mailto:${s.clientEmail}`,className:"inq-email",children:s.clientEmail})]}),i.jsx("button",{className:"btn-delete",onClick:()=>b(s.id),children:i.jsx(Gl,{size:18})})]}),i.jsxs("div",{className:"inq-pills",children:[i.jsx("span",{className:"badge badge-glow",children:s.projectType}),i.jsx("span",{className:"badge badge-emerald",children:s.budget}),i.jsx("span",{className:"badge badge-amber",children:s.timeline})]}),i.jsx("p",{className:"inq-msg",children:s.message}),i.jsxs("span",{className:"inq-date",children:["Submitted: ",new Date(s.submittedAt).toLocaleString()]})]},s.id))})]})]}),Z&&i.jsx("div",{className:"modal-backdrop",onClick:()=>ze(!1),children:i.jsxs("div",{className:"glass-card modal-content",onClick:s=>s.stopPropagation(),children:[i.jsx("button",{className:"modal-close-btn",onClick:()=>ze(!1),children:i.jsx(Kn,{size:20})}),i.jsxs("form",{className:"modal-body",onSubmit:z,children:[i.jsx("h3",{children:"Add New Portfolio Project"}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Project Title *"}),i.jsx("input",{type:"text",required:!0,value:ce.title,onChange:s=>ke({...ce,title:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Category"}),i.jsxs("select",{value:ce.category,onChange:s=>ke({...ce,category:s.target.value}),className:"form-select",children:[i.jsx("option",{value:"AI & Web Apps",children:"AI & Web Apps"}),i.jsx("option",{value:"Web App",children:"Web App"}),i.jsx("option",{value:"UI/UX Design",children:"UI/UX Design"}),i.jsx("option",{value:"Mobile App",children:"Mobile App"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tags (comma separated)"}),i.jsx("input",{type:"text",value:ce.tags,onChange:s=>ke({...ce,tags:s.target.value}),className:"form-input"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Image URL"}),i.jsx("input",{type:"text",value:ce.image,onChange:s=>ke({...ce,image:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Short Summary"}),i.jsx("input",{type:"text",value:ce.shortDesc,onChange:s=>ke({...ce,shortDesc:s.target.value}),className:"form-input"})]}),i.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Project"})]})]})}),O&&i.jsx("div",{className:"modal-backdrop",onClick:()=>K(!1),children:i.jsxs("div",{className:"glass-card modal-content",onClick:s=>s.stopPropagation(),children:[i.jsx("button",{className:"modal-close-btn",onClick:()=>K(!1),children:i.jsx(Kn,{size:20})}),i.jsxs("form",{className:"modal-body",onSubmit:W,children:[i.jsx("h3",{children:"Add New Certificate"}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Certificate Title *"}),i.jsx("input",{type:"text",required:!0,value:B.title,onChange:s=>ge({...B,title:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Issuing Organization *"}),i.jsx("input",{type:"text",required:!0,value:B.issuer,onChange:s=>ge({...B,issuer:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Issue Date"}),i.jsx("input",{type:"text",value:B.date,onChange:s=>ge({...B,date:s.target.value}),className:"form-input"})]})]}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Credential ID"}),i.jsx("input",{type:"text",value:B.credentialId,onChange:s=>ge({...B,credentialId:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Verification URL"}),i.jsx("input",{type:"text",value:B.verifyUrl,onChange:s=>ge({...B,verifyUrl:s.target.value}),className:"form-input"})]})]}),i.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Certificate"})]})]})}),et&&i.jsx("div",{className:"modal-backdrop",onClick:()=>Le(!1),children:i.jsxs("div",{className:"glass-card modal-content",onClick:s=>s.stopPropagation(),children:[i.jsx("button",{className:"modal-close-btn",onClick:()=>Le(!1),children:i.jsx(Kn,{size:20})}),i.jsxs("form",{className:"modal-body",onSubmit:f,children:[i.jsx("h3",{children:"Add Skill"}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Skill Name *"}),i.jsx("input",{type:"text",required:!0,value:Se.name,onChange:s=>Ae({...Se,name:s.target.value}),className:"form-input"})]}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Category"}),i.jsxs("select",{value:Se.category,onChange:s=>Ae({...Se,category:s.target.value}),className:"form-select",children:[i.jsx("option",{value:"Frontend",children:"Frontend"}),i.jsx("option",{value:"Backend",children:"Backend"}),i.jsx("option",{value:"Database & Cloud",children:"Database & Cloud"}),i.jsx("option",{value:"UI/UX Design",children:"UI/UX Design"}),i.jsx("option",{value:"Tools",children:"Tools"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{className:"form-label",children:["Proficiency Level (",Se.level,"%)"]}),i.jsx("input",{type:"range",min:10,max:100,value:Se.level,onChange:s=>Ae({...Se,level:Number(s.target.value)}),style:{marginTop:"0.8rem"}})]})]}),i.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Skill"})]})]})}),i.jsx("style",{children:`
        .admin-page {
          padding: 4rem 0 6rem;
        }
        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .admin-header-actions {
          display: flex;
          gap: 0.8rem;
        }
        .admin-tabs {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1rem;
        }
        .admin-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .admin-tab.active {
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }
        .admin-card {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .admin-sub-title {
          font-size: 1.2rem;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }
        .admin-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .admin-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .list-item {
          padding: 1rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .item-thumb {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          object-fit: cover;
        }
        .cert-badge-placeholder {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-info {
          flex-grow: 1;
        }
        .item-name {
          font-size: 1rem;
          font-weight: 700;
        }
        .item-meta {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .btn-delete {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .save-toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.4rem;
          background: var(--gradient-brand);
          color: #fff;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }
        .inquiry-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-top: 1.2rem;
        }
        .inquiry-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .inquiry-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .inq-client {
          font-size: 1.1rem;
        }
        .inq-email {
          color: var(--accent-primary);
          font-size: 0.88rem;
        }
        .inq-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .inq-msg {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          background: var(--bg-input);
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
        }
        .inq-date {
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .admin-lock-screen {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lock-card {
          max-width: 420px;
          padding: 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .lock-icon {
          color: var(--accent-primary);
        }
      `})]}):i.jsx("div",{className:"admin-lock-screen",children:i.jsxs("div",{className:"glass-card lock-card",children:[i.jsx(Zu,{size:40,className:"lock-icon"}),i.jsx("h2",{children:"Admin CMS Authentication"}),i.jsxs("p",{children:["Enter passcode (default: ",i.jsx("strong",{children:"admin123"}),") to edit portfolio details."]}),i.jsx("input",{type:"password",placeholder:"Enter Admin Passcode",value:ne,onChange:s=>Te(s.target.value),className:"form-input"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{(ne==="admin123"||ne==="")&&te(!0)},children:"Unlock Admin Panel"})]})})},ap=()=>{const{currentPage:y}=ft();return i.jsxs("div",{className:"app-layout",children:[i.jsx(Qf,{}),i.jsxs("main",{className:"main-content",children:[y==="home"&&i.jsxs(i.Fragment,{children:[i.jsx(Kf,{}),i.jsx(Yf,{}),i.jsx(Jf,{}),i.jsx(Gf,{}),i.jsx(Xf,{}),i.jsx(Zf,{}),i.jsx(ep,{})]}),y==="certificates"&&i.jsx(np,{}),y==="hire"&&i.jsx(lp,{}),y==="admin"&&i.jsx(ip,{})]}),i.jsx(tp,{})]})};function sp(){return i.jsx(mf,{children:i.jsx(ap,{})})}pf.createRoot(document.getElementById("root")).render(i.jsx(af.StrictMode,{children:i.jsx(sp,{})}));
