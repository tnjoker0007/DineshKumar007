(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))P(j);new MutationObserver(j=>{for(const D of j)if(D.type==="childList")for(const ee of D.addedNodes)ee.tagName==="LINK"&&ee.rel==="modulepreload"&&P(ee)}).observe(document,{childList:!0,subtree:!0});function u(j){const D={};return j.integrity&&(D.integrity=j.integrity),j.referrerPolicy&&(D.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?D.credentials="include":j.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function P(j){if(j.ep)return;j.ep=!0;const D=u(j);fetch(j.href,D)}})();(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const P of document.querySelectorAll('link[rel="modulepreload"]'))u(P);new MutationObserver(P=>{for(const j of P)if(j.type==="childList")for(const D of j.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&u(D)}).observe(document,{childList:!0,subtree:!0});function y(P){const j={};return P.integrity&&(j.integrity=P.integrity),P.referrerPolicy&&(j.referrerPolicy=P.referrerPolicy),P.crossOrigin==="use-credentials"?j.credentials="include":P.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(P){if(P.ep)return;P.ep=!0;const j=y(P);fetch(P.href,j)}})();function eu(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var Oc={exports:{}},Rr={},Fc={exports:{}},re={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Uc;function nf(){if(Uc)return re;Uc=1;var b=Symbol.for("react.element"),y=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),ee=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),U=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),te=Symbol.iterator;function ne(s){return s===null||typeof s!="object"?null:(s=te&&s[te]||s["@@iterator"],typeof s=="function"?s:null)}var Pe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pe=Object.assign,ae={};function W(s,h,S){this.props=s,this.context=h,this.refs=ae,this.updater=S||Pe}W.prototype.isReactComponent={},W.prototype.setState=function(s,h){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,h,"setState")},W.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Fe(){}Fe.prototype=W.prototype;function se(s,h,S){this.props=s,this.context=h,this.refs=ae,this.updater=S||Pe}var me=se.prototype=new Fe;me.constructor=se,pe(me,W.prototype),me.isPureReactComponent=!0;var J=Array.isArray,_e=Object.prototype.hasOwnProperty,ce={current:null},xe={key:!0,ref:!0,__self:!0,__source:!0};function F(s,h,S){var E,I={},M=null,_=null;if(h!=null)for(E in h.ref!==void 0&&(_=h.ref),h.key!==void 0&&(M=""+h.key),h)_e.call(h,E)&&!xe.hasOwnProperty(E)&&(I[E]=h[E]);var R=arguments.length-2;if(R===1)I.children=S;else if(1<R){for(var B=Array(R),ue=0;ue<R;ue++)B[ue]=arguments[ue+2];I.children=B}if(s&&s.defaultProps)for(E in R=s.defaultProps,R)I[E]===void 0&&(I[E]=R[E]);return{$$typeof:b,type:s,key:M,ref:_,props:I,_owner:ce.current}}function X(s,h){return{$$typeof:b,type:s.type,key:h,ref:s.ref,props:s.props,_owner:s._owner}}function V(s){return typeof s=="object"&&s!==null&&s.$$typeof===b}function ge(s){var h={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(S){return h[S]})}var et=/\/+/g;function Te(s,h){return typeof s=="object"&&s!==null&&s.key!=null?ge(""+s.key):h.toString(36)}function je(s,h,S,E,I){var M=typeof s;(M==="undefined"||M==="boolean")&&(s=null);var _=!1;if(s===null)_=!0;else switch(M){case"string":case"number":_=!0;break;case"object":switch(s.$$typeof){case b:case y:_=!0}}if(_)return _=s,I=I(_),s=E===""?"."+Te(_,0):E,J(I)?(S="",s!=null&&(S=s.replace(et,"$&/")+"/"),je(I,h,S,"",function(ue){return ue})):I!=null&&(V(I)&&(I=X(I,S+(!I.key||_&&_.key===I.key?"":(""+I.key).replace(et,"$&/")+"/")+s)),h.push(I)),1;if(_=0,E=E===""?".":E+":",J(s))for(var R=0;R<s.length;R++){M=s[R];var B=E+Te(M,R);_+=je(M,h,S,B,I)}else if(B=ne(s),typeof B=="function")for(s=B.call(s),R=0;!(M=s.next()).done;)M=M.value,B=E+Te(M,R++),_+=je(M,h,S,B,I);else if(M==="object")throw h=String(s),Error("Objects are not valid as a React child (found: "+(h==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":h)+"). If you meant to render a collection of children, use an array instead.");return _}function Re(s,h,S){if(s==null)return s;var E=[],I=0;return je(s,E,"","",function(M){return h.call(S,M,I++)}),E}function ve(s){if(s._status===-1){var h=s._result;h=h(),h.then(function(S){(s._status===0||s._status===-1)&&(s._status=1,s._result=S)},function(S){(s._status===0||s._status===-1)&&(s._status=2,s._result=S)}),s._status===-1&&(s._status=0,s._result=h)}if(s._status===1)return s._result.default;throw s._result}var be={current:null},z={transition:null},q={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:z,ReactCurrentOwner:ce};function f(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Re,forEach:function(s,h,S){Re(s,function(){h.apply(this,arguments)},S)},count:function(s){var h=0;return Re(s,function(){h++}),h},toArray:function(s){return Re(s,function(h){return h})||[]},only:function(s){if(!V(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},re.Component=W,re.Fragment=u,re.Profiler=j,re.PureComponent=se,re.StrictMode=P,re.Suspense=C,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,re.act=f,re.cloneElement=function(s,h,S){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var E=pe({},s.props),I=s.key,M=s.ref,_=s._owner;if(h!=null){if(h.ref!==void 0&&(M=h.ref,_=ce.current),h.key!==void 0&&(I=""+h.key),s.type&&s.type.defaultProps)var R=s.type.defaultProps;for(B in h)_e.call(h,B)&&!xe.hasOwnProperty(B)&&(E[B]=h[B]===void 0&&R!==void 0?R[B]:h[B])}var B=arguments.length-2;if(B===1)E.children=S;else if(1<B){R=Array(B);for(var ue=0;ue<B;ue++)R[ue]=arguments[ue+2];E.children=R}return{$$typeof:b,type:s.type,key:I,ref:M,props:E,_owner:_}},re.createContext=function(s){return s={$$typeof:ee,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:D,_context:s},s.Consumer=s},re.createElement=F,re.createFactory=function(s){var h=F.bind(null,s);return h.type=s,h},re.createRef=function(){return{current:null}},re.forwardRef=function(s){return{$$typeof:Y,render:s}},re.isValidElement=V,re.lazy=function(s){return{$$typeof:Z,_payload:{_status:-1,_result:s},_init:ve}},re.memo=function(s,h){return{$$typeof:U,type:s,compare:h===void 0?null:h}},re.startTransition=function(s){var h=z.transition;z.transition={};try{s()}finally{z.transition=h}},re.unstable_act=f,re.useCallback=function(s,h){return be.current.useCallback(s,h)},re.useContext=function(s){return be.current.useContext(s)},re.useDebugValue=function(){},re.useDeferredValue=function(s){return be.current.useDeferredValue(s)},re.useEffect=function(s,h){return be.current.useEffect(s,h)},re.useId=function(){return be.current.useId()},re.useImperativeHandle=function(s,h,S){return be.current.useImperativeHandle(s,h,S)},re.useInsertionEffect=function(s,h){return be.current.useInsertionEffect(s,h)},re.useLayoutEffect=function(s,h){return be.current.useLayoutEffect(s,h)},re.useMemo=function(s,h){return be.current.useMemo(s,h)},re.useReducer=function(s,h,S){return be.current.useReducer(s,h,S)},re.useRef=function(s){return be.current.useRef(s)},re.useState=function(s){return be.current.useState(s)},re.useSyncExternalStore=function(s,h,S){return be.current.useSyncExternalStore(s,h,S)},re.useTransition=function(){return be.current.useTransition()},re.version="18.3.1",re}var Hc;function Qi(){return Hc||(Hc=1,Fc.exports=nf()),Fc.exports}/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Vc;function rf(){if(Vc)return Rr;Vc=1;var b=Qi(),y=Symbol.for("react.element"),u=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,j=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function ee(Y,C,U){var Z,te={},ne=null,Pe=null;U!==void 0&&(ne=""+U),C.key!==void 0&&(ne=""+C.key),C.ref!==void 0&&(Pe=C.ref);for(Z in C)P.call(C,Z)&&!D.hasOwnProperty(Z)&&(te[Z]=C[Z]);if(Y&&Y.defaultProps)for(Z in C=Y.defaultProps,C)te[Z]===void 0&&(te[Z]=C[Z]);return{$$typeof:y,type:Y,key:ne,ref:Pe,props:te,_owner:j.current}}return Rr.Fragment=u,Rr.jsx=ee,Rr.jsxs=ee,Rr}var Bc;function af(){return Bc||(Bc=1,Oc.exports=rf()),Oc.exports}var l=af(),ie=Qi();const lf=eu(ie);var Ka={},Vi={exports:{}},st={},Wc={exports:{}},qc={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var $c;function sf(){return $c||($c=1,(function(b){function y(z,q){var f=z.length;z.push(q);e:for(;0<f;){var s=f-1>>>1,h=z[s];if(0<j(h,q))z[s]=q,z[f]=h,f=s;else break e}}function u(z){return z.length===0?null:z[0]}function P(z){if(z.length===0)return null;var q=z[0],f=z.pop();if(f!==q){z[0]=f;e:for(var s=0,h=z.length,S=h>>>1;s<S;){var E=2*(s+1)-1,I=z[E],M=E+1,_=z[M];if(0>j(I,f))M<h&&0>j(_,I)?(z[s]=_,z[M]=f,s=M):(z[s]=I,z[E]=f,s=E);else if(M<h&&0>j(_,f))z[s]=_,z[M]=f,s=M;else break e}}return q}function j(z,q){var f=z.sortIndex-q.sortIndex;return f!==0?f:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var D=performance;b.unstable_now=function(){return D.now()}}else{var ee=Date,Y=ee.now();b.unstable_now=function(){return ee.now()-Y}}var C=[],U=[],Z=1,te=null,ne=3,Pe=!1,pe=!1,ae=!1,W=typeof setTimeout=="function"?setTimeout:null,Fe=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(z){for(var q=u(U);q!==null;){if(q.callback===null)P(U);else if(q.startTime<=z)P(U),q.sortIndex=q.expirationTime,y(C,q);else break;q=u(U)}}function J(z){if(ae=!1,me(z),!pe)if(u(C)!==null)pe=!0,ve(_e);else{var q=u(U);q!==null&&be(J,q.startTime-z)}}function _e(z,q){pe=!1,ae&&(ae=!1,Fe(F),F=-1),Pe=!0;var f=ne;try{for(me(q),te=u(C);te!==null&&(!(te.expirationTime>q)||z&&!ge());){var s=te.callback;if(typeof s=="function"){te.callback=null,ne=te.priorityLevel;var h=s(te.expirationTime<=q);q=b.unstable_now(),typeof h=="function"?te.callback=h:te===u(C)&&P(C),me(q)}else P(C);te=u(C)}if(te!==null)var S=!0;else{var E=u(U);E!==null&&be(J,E.startTime-q),S=!1}return S}finally{te=null,ne=f,Pe=!1}}var ce=!1,xe=null,F=-1,X=5,V=-1;function ge(){return!(b.unstable_now()-V<X)}function et(){if(xe!==null){var z=b.unstable_now();V=z;var q=!0;try{q=xe(!0,z)}finally{q?Te():(ce=!1,xe=null)}}else ce=!1}var Te;if(typeof se=="function")Te=function(){se(et)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Re=je.port2;je.port1.onmessage=et,Te=function(){Re.postMessage(null)}}else Te=function(){W(et,0)};function ve(z){xe=z,ce||(ce=!0,Te())}function be(z,q){F=W(function(){z(b.unstable_now())},q)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(z){z.callback=null},b.unstable_continueExecution=function(){pe||Pe||(pe=!0,ve(_e))},b.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},b.unstable_getCurrentPriorityLevel=function(){return ne},b.unstable_getFirstCallbackNode=function(){return u(C)},b.unstable_next=function(z){switch(ne){case 1:case 2:case 3:var q=3;break;default:q=ne}var f=ne;ne=q;try{return z()}finally{ne=f}},b.unstable_pauseExecution=function(){},b.unstable_requestPaint=function(){},b.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var f=ne;ne=z;try{return q()}finally{ne=f}},b.unstable_scheduleCallback=function(z,q,f){var s=b.unstable_now();switch(typeof f=="object"&&f!==null?(f=f.delay,f=typeof f=="number"&&0<f?s+f:s):f=s,z){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=f+h,z={id:Z++,callback:q,priorityLevel:z,startTime:f,expirationTime:h,sortIndex:-1},f>s?(z.sortIndex=f,y(U,z),u(C)===null&&z===u(U)&&(ae?(Fe(F),F=-1):ae=!0,be(J,f-s))):(z.sortIndex=h,y(C,z),pe||Pe||(pe=!0,ve(_e))),z},b.unstable_shouldYield=ge,b.unstable_wrapCallback=function(z){var q=ne;return function(){var f=ne;ne=q;try{return z.apply(this,arguments)}finally{ne=f}}}})(qc)),qc}var Qc;function of(){return Qc||(Qc=1,Wc.exports=sf()),Wc.exports}/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Xc;function cf(){if(Xc)return st;Xc=1;var b=Qi(),y=of();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P=new Set,j={};function D(e,t){ee(e,t),ee(e+"Capture",t)}function ee(e,t){for(j[e]=t,e=0;e<t.length;e++)P.add(t[e])}var Y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C=Object.prototype.hasOwnProperty,U=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z={},te={};function ne(e){return C.call(te,e)?!0:C.call(Z,e)?!1:U.test(e)?te[e]=!0:(Z[e]=!0,!1)}function Pe(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pe(e,t,n,r){if(t===null||typeof t>"u"||Pe(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){W[e]=new ae(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];W[t]=new ae(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){W[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){W[e]=new ae(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){W[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){W[e]=new ae(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){W[e]=new ae(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){W[e]=new ae(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){W[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fe=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fe,se);W[t]=new ae(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fe,se);W[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fe,se);W[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){W[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)}),W.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){W[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function me(e,t,n,r){var a=W.hasOwnProperty(t)?W[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pe(t,n,a,r)&&(n=null),r||a===null?ne(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var J=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),ce=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),ge=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),z=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var f=Object.assign,s;function h(e){if(s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);s=t&&t[1]||""}return`
`+s+e}var S=!1;function E(e,t){if(!e||S)return"";S=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var r=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){r=v}e.call(t.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,c=i.length-1;1<=o&&0<=c&&a[o]!==i[c];)c--;for(;1<=o&&0<=c;o--,c--)if(a[o]!==i[c]){if(o!==1||c!==1)do if(o--,c--,0>c||a[o]!==i[c]){var d=`
`+a[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=c);break}}}finally{S=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?h(e):""}function I(e){switch(e.tag){case 5:return h(e.type);case 16:return h("Lazy");case 13:return h("Suspense");case 19:return h("SuspenseList");case 0:case 2:case 15:return e=E(e.type,!1),e;case 11:return e=E(e.type.render,!1),e;case 1:return e=E(e.type,!0),e;default:return""}}function M(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case ce:return"Portal";case X:return"Profiler";case F:return"StrictMode";case Te:return"Suspense";case je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ge:return(e.displayName||"Context")+".Consumer";case V:return(e._context.displayName||"Context")+".Provider";case et:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:M(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}function _(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return M(t);case 8:return t===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function R(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function B(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ue(e){var t=B(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function de(e){e._valueTracker||(e._valueTracker=ue(e))}function Se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=B(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Le(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function le(e,t){var n=t.checked;return f({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Be(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=R(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tt(e,t){t=t.checked,t!=null&&me(e,"checked",t,!1)}function Ge(e,t){tt(e,t);var n=R(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xt(e,t.type,n):t.hasOwnProperty("defaultValue")&&xt(e,t.type,R(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xt(e,t,n){(t!=="number"||Le(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $e=Array.isArray;function Vt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+R(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Yn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return f({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ur(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if($e(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:R(n)}}function Kn(e,t){var n=R(t.value),r=R(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jn,Jn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jn=jn||document.createElement("div"),jn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},el=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(e){el.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tt[t]=Tt[e]})});function Vr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tt.hasOwnProperty(e)&&Tt[e]?(""+t).trim():t+"px"}function Zi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Vr(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var su=f({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,t){if(t){if(su[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Nn=null,Sn=null;function Ji(e){if(e=kr(e)){if(typeof ll!="function")throw Error(u(280));var t=e.stateNode;t&&(t=da(t),ll(e.stateNode,e.type,t))}}function es(e){Nn?Sn?Sn.push(e):Sn=[e]:Nn=e}function ts(){if(Nn){var e=Nn,t=Sn;if(Sn=Nn=null,Ji(e),t)for(e=0;e<t.length;e++)Ji(t[e])}}function ns(e,t){return e(t)}function rs(){}var il=!1;function as(e,t,n){if(il)return e(t,n);il=!0;try{return ns(e,t,n)}finally{il=!1,(Nn!==null||Sn!==null)&&(rs(),ts())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var sl=!1;if(Y)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){sl=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{sl=!1}function ou(e,t,n,r,a,i,o,c,d){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(k){this.onError(k)}}var nr=!1,Br=null,Wr=!1,ol=null,cu={onError:function(e){nr=!0,Br=e}};function uu(e,t,n,r,a,i,o,c,d){nr=!1,Br=null,ou.apply(cu,arguments)}function du(e,t,n,r,a,i,o,c,d){if(uu.apply(this,arguments),nr){if(nr){var v=Br;nr=!1,Br=null}else throw Error(u(198));Wr||(Wr=!0,ol=v)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ls(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function is(e){if(un(e)!==e)throw Error(u(188))}function fu(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return is(a),e;if(i===r)return is(a),t;i=i.sibling}throw Error(u(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ss(e){return e=fu(e),e!==null?os(e):null}function os(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=os(e);if(t!==null)return t;e=e.sibling}return null}var cs=y.unstable_scheduleCallback,us=y.unstable_cancelCallback,pu=y.unstable_shouldYield,mu=y.unstable_requestPaint,Me=y.unstable_now,hu=y.unstable_getCurrentPriorityLevel,cl=y.unstable_ImmediatePriority,ds=y.unstable_UserBlockingPriority,qr=y.unstable_NormalPriority,gu=y.unstable_LowPriority,fs=y.unstable_IdlePriority,$r=null,zt=null;function vu(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot($r,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:xu,bu=Math.log,yu=Math.LN2;function xu(e){return e>>>=0,e===0?32:31-(bu(e)/yu|0)|0}var Qr=64,Xr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~a;c!==0?r=rr(c):(i&=o,i!==0&&(r=rr(i)))}else o=n&~a,o!==0?r=rr(o):i!==0&&(r=rr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),a=1<<n,r|=e[n],t&=~a;return r}function ku(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-kt(i),c=1<<o,d=a[o];d===-1?((c&n)===0||(c&r)!==0)&&(a[o]=ku(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ps(){var e=Qr;return Qr<<=1,(Qr&4194240)===0&&(Qr=64),e}function dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function ju(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-kt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var he=0;function ms(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hs,pl,gs,vs,bs,ml=!1,Kr=[],Wt=null,qt=null,$t=null,lr=new Map,ir=new Map,Qt=[],Nu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ys(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function sr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=kr(t),t!==null&&pl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Su(e,t,n,r,a){switch(t){case"focusin":return Wt=sr(Wt,e,t,n,r,a),!0;case"dragenter":return qt=sr(qt,e,t,n,r,a),!0;case"mouseover":return $t=sr($t,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return lr.set(i,sr(lr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,ir.set(i,sr(ir.get(i)||null,e,t,n,r,a)),!0}return!1}function xs(e){var t=dn(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=ls(n),t!==null){e.blockedOn=t,bs(e.priority,function(){gs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rl=r,n.target.dispatchEvent(r),rl=null}else return t=kr(n),t!==null&&pl(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){Gr(e)&&n.delete(t)}function Cu(){ml=!1,Wt!==null&&Gr(Wt)&&(Wt=null),qt!==null&&Gr(qt)&&(qt=null),$t!==null&&Gr($t)&&($t=null),lr.forEach(ks),ir.forEach(ks)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,ml||(ml=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Cu)))}function cr(e){function t(a){return or(a,e)}if(0<Kr.length){or(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&or(Wt,e),qt!==null&&or(qt,e),$t!==null&&or($t,e),lr.forEach(t),ir.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)xs(n),n.blockedOn===null&&Qt.shift()}var Cn=J.ReactCurrentBatchConfig,Zr=!0;function Eu(e,t,n,r){var a=he,i=Cn.transition;Cn.transition=null;try{he=1,hl(e,t,n,r)}finally{he=a,Cn.transition=i}}function zu(e,t,n,r){var a=he,i=Cn.transition;Cn.transition=null;try{he=4,hl(e,t,n,r)}finally{he=a,Cn.transition=i}}function hl(e,t,n,r){if(Zr){var a=gl(e,t,n,r);if(a===null)Tl(e,t,r,Jr,n),ys(e,r);else if(Su(a,e,t,n,r))r.stopPropagation();else if(ys(e,r),t&4&&-1<Nu.indexOf(e)){for(;a!==null;){var i=kr(a);if(i!==null&&hs(i),i=gl(e,t,n,r),i===null&&Tl(e,t,r,Jr,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Tl(e,t,r,null,n)}}var Jr=null;function gl(e,t,n,r){if(Jr=null,e=al(r),e=dn(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ls(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function ws(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hu()){case cl:return 1;case ds:return 4;case qr:case gu:return 16;case fs:return 536870912;default:return 16}default:return 16}}var Xt=null,vl=null,ea=null;function js(){if(ea)return ea;var e,t=vl,n=t.length,r,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return ea=a.slice(e,1<r?1-r:void 0)}function ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function Ns(){return!1}function ot(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?na:Ns,this.isPropagationStopped=Ns,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=ot(En),ur=f({},En,{view:0,detail:0}),Pu=ot(ur),yl,xl,dr,ra=f({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(yl=e.screenX-dr.screenX,xl=e.screenY-dr.screenY):xl=yl=0,dr=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),Ss=ot(ra),Mu=f({},ra,{dataTransfer:0}),Iu=ot(Mu),_u=f({},ur,{relatedTarget:0}),kl=ot(_u),Tu=f({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),Lu=ot(Tu),Du=f({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ru=ot(Du),Au=f({},En,{data:0}),Cs=ot(Au),Ou={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uu[e])?!!t[e]:!1}function wl(){return Hu}var Vu=f({},ur,{key:function(e){if(e.key){var t=Ou[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bu=ot(Vu),Wu=f({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Es=ot(Wu),qu=f({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),$u=ot(qu),Qu=f({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xu=ot(Qu),Yu=f({},ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ku=ot(Yu),Gu=[9,13,27,32],jl=Y&&"CompositionEvent"in window,fr=null;Y&&"documentMode"in document&&(fr=document.documentMode);var Zu=Y&&"TextEvent"in window&&!fr,zs=Y&&(!jl||fr&&8<fr&&11>=fr),Ps=" ",Ms=!1;function Is(e,t){switch(e){case"keyup":return Gu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Ju(e,t){switch(e){case"compositionend":return _s(t);case"keypress":return t.which!==32?null:(Ms=!0,Ps);case"textInput":return e=t.data,e===Ps&&Ms?null:e;default:return null}}function ed(e,t){if(zn)return e==="compositionend"||!jl&&Is(e,t)?(e=js(),ea=vl=Xt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zs&&t.locale!=="ko"?null:t.data;default:return null}}var td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!td[e.type]:t==="textarea"}function Ls(e,t,n,r){es(r),t=oa(t,"onChange"),0<t.length&&(n=new bl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function nd(e){Zs(e,0)}function aa(e){var t=Tn(e);if(Se(t))return e}function rd(e,t){if(e==="change")return t}var Ds=!1;if(Y){var Nl;if(Y){var Sl="oninput"in document;if(!Sl){var Rs=document.createElement("div");Rs.setAttribute("oninput","return;"),Sl=typeof Rs.oninput=="function"}Nl=Sl}else Nl=!1;Ds=Nl&&(!document.documentMode||9<document.documentMode)}function As(){pr&&(pr.detachEvent("onpropertychange",Os),mr=pr=null)}function Os(e){if(e.propertyName==="value"&&aa(mr)){var t=[];Ls(t,mr,e,al(e)),as(nd,t)}}function ad(e,t,n){e==="focusin"?(As(),pr=t,mr=n,pr.attachEvent("onpropertychange",Os)):e==="focusout"&&As()}function ld(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(mr)}function id(e,t){if(e==="click")return aa(t)}function sd(e,t){if(e==="input"||e==="change")return aa(t)}function od(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:od;function hr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!C.call(t,a)||!wt(e[a],t[a]))return!1}return!0}function Fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,t){var n=Fs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fs(n)}}function Hs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vs(){for(var e=window,t=Le();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Le(e.document)}return t}function Cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cd(e){var t=Vs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hs(n.ownerDocument.documentElement,n)){if(r!==null&&Cl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Us(n,i);var o=Us(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ud=Y&&"documentMode"in document&&11>=document.documentMode,Pn=null,El=null,gr=null,zl=!1;function Bs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||Pn==null||Pn!==Le(r)||(r=Pn,"selectionStart"in r&&Cl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&hr(gr,r)||(gr=r,r=oa(El,"onSelect"),0<r.length&&(t=new bl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function la(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Pl={},Ws={};Y&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function ia(e){if(Pl[e])return Pl[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ws)return Pl[e]=t[n];return e}var qs=ia("animationend"),$s=ia("animationiteration"),Qs=ia("animationstart"),Xs=ia("transitionend"),Ys=new Map,Ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Ys.set(e,t),D(t,[e])}for(var Ml=0;Ml<Ks.length;Ml++){var Il=Ks[Ml],dd=Il.toLowerCase(),fd=Il[0].toUpperCase()+Il.slice(1);Yt(dd,"on"+fd)}Yt(qs,"onAnimationEnd"),Yt($s,"onAnimationIteration"),Yt(Qs,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(Xs,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),D("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),D("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),D("onBeforeInput",["compositionend","keypress","textInput","paste"]),D("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pd=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function Gs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,du(r,t,void 0,e),e.currentTarget=null}function Zs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],d=c.instance,v=c.currentTarget;if(c=c.listener,d!==i&&a.isPropagationStopped())break e;Gs(a,c,v),i=d}else for(o=0;o<r.length;o++){if(c=r[o],d=c.instance,v=c.currentTarget,c=c.listener,d!==i&&a.isPropagationStopped())break e;Gs(a,c,v),i=d}}}if(Wr)throw e=ol,Wr=!1,ol=null,e}function ke(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(Js(t,e,2,!1),n.add(r))}function _l(e,t,n){var r=0;t&&(r|=4),Js(n,e,r,t)}var sa="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[sa]){e[sa]=!0,P.forEach(function(n){n!=="selectionchange"&&(pd.has(n)||_l(n,!1,e),_l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sa]||(t[sa]=!0,_l("selectionchange",!1,t))}}function Js(e,t,n,r){switch(ws(t)){case 1:var a=Eu;break;case 4:a=zu;break;default:a=hl}n=a.bind(null,t,n,e),a=void 0,!sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Tl(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;o=o.return}for(;c!==null;){if(o=dn(c),o===null)return;if(d=o.tag,d===5||d===6){r=i=o;continue e}c=c.parentNode}}r=r.return}as(function(){var v=i,k=al(n),w=[];e:{var x=Ys.get(e);if(x!==void 0){var T=bl,A=e;switch(e){case"keypress":if(ta(n)===0)break e;case"keydown":case"keyup":T=Bu;break;case"focusin":A="focus",T=kl;break;case"focusout":A="blur",T=kl;break;case"beforeblur":case"afterblur":T=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Iu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=$u;break;case qs:case $s:case Qs:T=Lu;break;case Xs:T=Xu;break;case"scroll":T=Pu;break;case"wheel":T=Ku;break;case"copy":case"cut":case"paste":T=Ru;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Es}var O=(t&4)!==0,Ie=!O&&e==="scroll",m=O?x!==null?x+"Capture":null:x;O=[];for(var p=v,g;p!==null;){g=p;var N=g.stateNode;if(g.tag===5&&N!==null&&(g=N,m!==null&&(N=er(p,m),N!=null&&O.push(yr(p,N,g)))),Ie)break;p=p.return}0<O.length&&(x=new T(x,A,null,n,k),w.push({event:x,listeners:O}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",x&&n!==rl&&(A=n.relatedTarget||n.fromElement)&&(dn(A)||A[Lt]))break e;if((T||x)&&(x=k.window===k?k:(x=k.ownerDocument)?x.defaultView||x.parentWindow:window,T?(A=n.relatedTarget||n.toElement,T=v,A=A?dn(A):null,A!==null&&(Ie=un(A),A!==Ie||A.tag!==5&&A.tag!==6)&&(A=null)):(T=null,A=v),T!==A)){if(O=Ss,N="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(O=Es,N="onPointerLeave",m="onPointerEnter",p="pointer"),Ie=T==null?x:Tn(T),g=A==null?x:Tn(A),x=new O(N,p+"leave",T,n,k),x.target=Ie,x.relatedTarget=g,N=null,dn(k)===v&&(O=new O(m,p+"enter",A,n,k),O.target=g,O.relatedTarget=Ie,N=O),Ie=N,T&&A)t:{for(O=T,m=A,p=0,g=O;g;g=In(g))p++;for(g=0,N=m;N;N=In(N))g++;for(;0<p-g;)O=In(O),p--;for(;0<g-p;)m=In(m),g--;for(;p--;){if(O===m||m!==null&&O===m.alternate)break t;O=In(O),m=In(m)}O=null}else O=null;T!==null&&eo(w,x,T,O,!1),A!==null&&Ie!==null&&eo(w,Ie,A,O,!0)}}e:{if(x=v?Tn(v):window,T=x.nodeName&&x.nodeName.toLowerCase(),T==="select"||T==="input"&&x.type==="file")var H=rd;else if(Ts(x))if(Ds)H=sd;else{H=ld;var $=ad}else(T=x.nodeName)&&T.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(H=id);if(H&&(H=H(e,v))){Ls(w,H,n,k);break e}$&&$(e,x,v),e==="focusout"&&($=x._wrapperState)&&$.controlled&&x.type==="number"&&xt(x,"number",x.value)}switch($=v?Tn(v):window,e){case"focusin":(Ts($)||$.contentEditable==="true")&&(Pn=$,El=v,gr=null);break;case"focusout":gr=El=Pn=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Bs(w,n,k);break;case"selectionchange":if(ud)break;case"keydown":case"keyup":Bs(w,n,k)}var Q;if(jl)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else zn?Is(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(zs&&n.locale!=="ko"&&(zn||K!=="onCompositionStart"?K==="onCompositionEnd"&&zn&&(Q=js()):(Xt=k,vl="value"in Xt?Xt.value:Xt.textContent,zn=!0)),$=oa(v,K),0<$.length&&(K=new Cs(K,e,null,n,k),w.push({event:K,listeners:$}),Q?K.data=Q:(Q=_s(n),Q!==null&&(K.data=Q)))),(Q=Zu?Ju(e,n):ed(e,n))&&(v=oa(v,"onBeforeInput"),0<v.length&&(k=new Cs("onBeforeInput","beforeinput",null,n,k),w.push({event:k,listeners:v}),k.data=Q))}Zs(w,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oa(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=er(e,n),i!=null&&r.unshift(yr(e,i,a)),i=er(e,t),i!=null&&r.push(yr(e,i,a))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eo(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var c=n,d=c.alternate,v=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&v!==null&&(c=v,a?(d=er(n,i),d!=null&&o.unshift(yr(n,d,c))):a||(d=er(n,i),d!=null&&o.push(yr(n,d,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var md=/\r\n?/g,hd=/\u0000|\uFFFD/g;function to(e){return(typeof e=="string"?e:""+e).replace(md,`
`).replace(hd,"")}function ca(e,t,n){if(t=to(t),to(e)!==t&&n)throw Error(u(425))}function ua(){}var Ll=null,Dl=null;function Rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,gd=typeof clearTimeout=="function"?clearTimeout:void 0,no=typeof Promise=="function"?Promise:void 0,vd=typeof queueMicrotask=="function"?queueMicrotask:typeof no<"u"?function(e){return no.resolve(null).then(e).catch(bd)}:Al;function bd(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);cr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ro(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),Pt="__reactFiber$"+_n,xr="__reactProps$"+_n,Lt="__reactContainer$"+_n,Fl="__reactEvents$"+_n,yd="__reactListeners$"+_n,xd="__reactHandles$"+_n;function dn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ro(e);e!==null;){if(n=e[Pt])return n;e=ro(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[Pt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function da(e){return e[xr]||null}var Ul=[],Ln=-1;function Gt(e){return{current:e}}function we(e){0>Ln||(e.current=Ul[Ln],Ul[Ln]=null,Ln--)}function ye(e,t){Ln++,Ul[Ln]=e.current,e.current=t}var Zt={},Qe=Gt(Zt),nt=Gt(!1),fn=Zt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function rt(e){return e=e.childContextTypes,e!=null}function fa(){we(nt),we(Qe)}function ao(e,t,n){if(Qe.current!==Zt)throw Error(u(168));ye(Qe,t),ye(nt,n)}function lo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(u(108,_(e)||"Unknown",a));return f({},n,r)}function pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,fn=Qe.current,ye(Qe,e),ye(nt,nt.current),!0}function io(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=lo(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,we(nt),we(Qe),ye(Qe,e)):we(nt),ye(nt,n)}var Dt=null,ma=!1,Hl=!1;function so(e){Dt===null?Dt=[e]:Dt.push(e)}function kd(e){ma=!0,so(e)}function Jt(){if(!Hl&&Dt!==null){Hl=!0;var e=0,t=he;try{var n=Dt;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,ma=!1}catch(a){throw Dt!==null&&(Dt=Dt.slice(e+1)),cs(cl,Jt),a}finally{he=t,Hl=!1}}return null}var Rn=[],An=0,ha=null,ga=0,mt=[],ht=0,pn=null,Rt=1,At="";function mn(e,t){Rn[An++]=ga,Rn[An++]=ha,ha=e,ga=t}function oo(e,t,n){mt[ht++]=Rt,mt[ht++]=At,mt[ht++]=pn,pn=e;var r=Rt;e=At;var a=32-kt(r)-1;r&=~(1<<a),n+=1;var i=32-kt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Rt=1<<32-kt(t)+a|n<<a|r,At=i+e}else Rt=1<<i|n<<a|r,At=e}function Vl(e){e.return!==null&&(mn(e,1),oo(e,1,0))}function Bl(e){for(;e===ha;)ha=Rn[--An],Rn[An]=null,ga=Rn[--An],Rn[An]=null;for(;e===pn;)pn=mt[--ht],mt[ht]=null,At=mt[--ht],mt[ht]=null,Rt=mt[--ht],mt[ht]=null}var ct=null,ut=null,Ne=!1,jt=null;function co(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ut=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:Rt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ut=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ql(e){if(Ne){var t=ut;if(t){var n=t;if(!uo(e,t)){if(Wl(e))throw Error(u(418));t=Kt(n.nextSibling);var r=ct;t&&uo(e,t)?co(r,n):(e.flags=e.flags&-4097|2,Ne=!1,ct=e)}}else{if(Wl(e))throw Error(u(418));e.flags=e.flags&-4097|2,Ne=!1,ct=e}}}function fo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function va(e){if(e!==ct)return!1;if(!Ne)return fo(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rl(e.type,e.memoizedProps)),t&&(t=ut)){if(Wl(e))throw po(),Error(u(418));for(;t;)co(e,t),t=Kt(t.nextSibling)}if(fo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ct?Kt(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ut;e;)e=Kt(e.nextSibling)}function On(){ut=ct=null,Ne=!1}function $l(e){jt===null?jt=[e]:jt.push(e)}var wd=J.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var c=a.refs;o===null?delete c[i]:c[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function ba(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mo(e){var t=e._init;return t(e._payload)}function ho(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function a(m,p){return m=on(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,p,g,N){return p===null||p.tag!==6?(p=Ri(g,m.mode,N),p.return=m,p):(p=a(p,g),p.return=m,p)}function d(m,p,g,N){var H=g.type;return H===xe?k(m,p,g.props.children,N,g.key):p!==null&&(p.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ve&&mo(H)===p.type)?(N=a(p,g.props),N.ref=wr(m,p,g),N.return=m,N):(N=Va(g.type,g.key,g.props,null,m.mode,N),N.ref=wr(m,p,g),N.return=m,N)}function v(m,p,g,N){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ai(g,m.mode,N),p.return=m,p):(p=a(p,g.children||[]),p.return=m,p)}function k(m,p,g,N,H){return p===null||p.tag!==7?(p=wn(g,m.mode,N,H),p.return=m,p):(p=a(p,g),p.return=m,p)}function w(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ri(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _e:return g=Va(p.type,p.key,p.props,null,m.mode,g),g.ref=wr(m,null,p),g.return=m,g;case ce:return p=Ai(p,m.mode,g),p.return=m,p;case ve:var N=p._init;return w(m,N(p._payload),g)}if($e(p)||q(p))return p=wn(p,m.mode,g,null),p.return=m,p;ba(m,p)}return null}function x(m,p,g,N){var H=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return H!==null?null:c(m,p,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _e:return g.key===H?d(m,p,g,N):null;case ce:return g.key===H?v(m,p,g,N):null;case ve:return H=g._init,x(m,p,H(g._payload),N)}if($e(g)||q(g))return H!==null?null:k(m,p,g,N,null);ba(m,g)}return null}function T(m,p,g,N,H){if(typeof N=="string"&&N!==""||typeof N=="number")return m=m.get(g)||null,c(p,m,""+N,H);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _e:return m=m.get(N.key===null?g:N.key)||null,d(p,m,N,H);case ce:return m=m.get(N.key===null?g:N.key)||null,v(p,m,N,H);case ve:var $=N._init;return T(m,p,g,$(N._payload),H)}if($e(N)||q(N))return m=m.get(g)||null,k(p,m,N,H,null);ba(p,N)}return null}function A(m,p,g,N){for(var H=null,$=null,Q=p,K=p=0,Ve=null;Q!==null&&K<g.length;K++){Q.index>K?(Ve=Q,Q=null):Ve=Q.sibling;var fe=x(m,Q,g[K],N);if(fe===null){Q===null&&(Q=Ve);break}e&&Q&&fe.alternate===null&&t(m,Q),p=i(fe,p,K),$===null?H=fe:$.sibling=fe,$=fe,Q=Ve}if(K===g.length)return n(m,Q),Ne&&mn(m,K),H;if(Q===null){for(;K<g.length;K++)Q=w(m,g[K],N),Q!==null&&(p=i(Q,p,K),$===null?H=Q:$.sibling=Q,$=Q);return Ne&&mn(m,K),H}for(Q=r(m,Q);K<g.length;K++)Ve=T(Q,m,K,g[K],N),Ve!==null&&(e&&Ve.alternate!==null&&Q.delete(Ve.key===null?K:Ve.key),p=i(Ve,p,K),$===null?H=Ve:$.sibling=Ve,$=Ve);return e&&Q.forEach(function(cn){return t(m,cn)}),Ne&&mn(m,K),H}function O(m,p,g,N){var H=q(g);if(typeof H!="function")throw Error(u(150));if(g=H.call(g),g==null)throw Error(u(151));for(var $=H=null,Q=p,K=p=0,Ve=null,fe=g.next();Q!==null&&!fe.done;K++,fe=g.next()){Q.index>K?(Ve=Q,Q=null):Ve=Q.sibling;var cn=x(m,Q,fe.value,N);if(cn===null){Q===null&&(Q=Ve);break}e&&Q&&cn.alternate===null&&t(m,Q),p=i(cn,p,K),$===null?H=cn:$.sibling=cn,$=cn,Q=Ve}if(fe.done)return n(m,Q),Ne&&mn(m,K),H;if(Q===null){for(;!fe.done;K++,fe=g.next())fe=w(m,fe.value,N),fe!==null&&(p=i(fe,p,K),$===null?H=fe:$.sibling=fe,$=fe);return Ne&&mn(m,K),H}for(Q=r(m,Q);!fe.done;K++,fe=g.next())fe=T(Q,m,K,fe.value,N),fe!==null&&(e&&fe.alternate!==null&&Q.delete(fe.key===null?K:fe.key),p=i(fe,p,K),$===null?H=fe:$.sibling=fe,$=fe);return e&&Q.forEach(function(tf){return t(m,tf)}),Ne&&mn(m,K),H}function Ie(m,p,g,N){if(typeof g=="object"&&g!==null&&g.type===xe&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _e:e:{for(var H=g.key,$=p;$!==null;){if($.key===H){if(H=g.type,H===xe){if($.tag===7){n(m,$.sibling),p=a($,g.props.children),p.return=m,m=p;break e}}else if($.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ve&&mo(H)===$.type){n(m,$.sibling),p=a($,g.props),p.ref=wr(m,$,g),p.return=m,m=p;break e}n(m,$);break}else t(m,$);$=$.sibling}g.type===xe?(p=wn(g.props.children,m.mode,N,g.key),p.return=m,m=p):(N=Va(g.type,g.key,g.props,null,m.mode,N),N.ref=wr(m,p,g),N.return=m,m=N)}return o(m);case ce:e:{for($=g.key;p!==null;){if(p.key===$)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=a(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ai(g,m.mode,N),p.return=m,m=p}return o(m);case ve:return $=g._init,Ie(m,p,$(g._payload),N)}if($e(g))return A(m,p,g,N);if(q(g))return O(m,p,g,N);ba(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=a(p,g),p.return=m,m=p):(n(m,p),p=Ri(g,m.mode,N),p.return=m,m=p),o(m)):n(m,p)}return Ie}var Fn=ho(!0),go=ho(!1),ya=Gt(null),xa=null,Un=null,Ql=null;function Xl(){Ql=Un=xa=null}function Yl(e){var t=ya.current;we(ya),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){xa=e,Ql=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Ql!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(xa===null)throw Error(u(308));Un=e,xa.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var hn=null;function Gl(e){hn===null?hn=[e]:hn.push(e)}function vo(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Gl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ot(e,n)}return a=r.interleaved,a===null?(t.next=t,Gl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ot(e,n)}function ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fl(e,n)}}function yo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wa(e,t,n,r){var a=e.updateQueue;en=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var d=c,v=d.next;d.next=null,o===null?i=v:o.next=v,o=d;var k=e.alternate;k!==null&&(k=k.updateQueue,c=k.lastBaseUpdate,c!==o&&(c===null?k.firstBaseUpdate=v:c.next=v,k.lastBaseUpdate=d))}if(i!==null){var w=a.baseState;o=0,k=v=d=null,c=i;do{var x=c.lane,T=c.eventTime;if((r&x)===x){k!==null&&(k=k.next={eventTime:T,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var A=e,O=c;switch(x=t,T=n,O.tag){case 1:if(A=O.payload,typeof A=="function"){w=A.call(T,w,x);break e}w=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=O.payload,x=typeof A=="function"?A.call(T,w,x):A,x==null)break e;w=f({},w,x);break e;case 2:en=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,x=a.effects,x===null?a.effects=[c]:x.push(c))}else T={eventTime:T,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},k===null?(v=k=T,d=w):k=k.next=T,o|=x;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;x=c,c=x.next,x.next=null,a.lastBaseUpdate=x,a.shared.pending=null}}while(!0);if(k===null&&(d=w),a.baseState=d,a.firstBaseUpdate=v,a.lastBaseUpdate=k,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);bn|=o,e.lanes=o,e.memoizedState=w}}function xo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(u(191,a));a.call(r)}}}var jr={},Mt=Gt(jr),Nr=Gt(jr),Sr=Gt(jr);function gn(e){if(e===jr)throw Error(u(174));return e}function Jl(e,t){switch(ye(Sr,t),ye(Nr,e),ye(Mt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zn(t,e)}we(Mt),ye(Mt,t)}function Vn(){we(Mt),we(Nr),we(Sr)}function ko(e){gn(Sr.current);var t=gn(Mt.current),n=Zn(t,e.type);t!==n&&(ye(Nr,e),ye(Mt,n))}function ei(e){Nr.current===e&&(we(Mt),we(Nr))}var Ce=Gt(0);function ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function ni(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var Na=J.ReactCurrentDispatcher,ri=J.ReactCurrentBatchConfig,vn=0,Ee=null,Ae=null,Ue=null,Sa=!1,Cr=!1,Er=0,jd=0;function Xe(){throw Error(u(321))}function ai(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function li(e,t,n,r,a,i){if(vn=i,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Na.current=e===null||e.memoizedState===null?Ed:zd,e=n(r,a),Cr){i=0;do{if(Cr=!1,Er=0,25<=i)throw Error(u(301));i+=1,Ue=Ae=null,t.updateQueue=null,Na.current=Pd,e=n(r,a)}while(Cr)}if(Na.current=za,t=Ae!==null&&Ae.next!==null,vn=0,Ue=Ae=Ee=null,Sa=!1,t)throw Error(u(300));return e}function ii(){var e=Er!==0;return Er=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ee.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function vt(){if(Ae===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ue===null?Ee.memoizedState:Ue.next;if(t!==null)Ue=t,Ae=e;else{if(e===null)throw Error(u(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ue===null?Ee.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function zr(e,t){return typeof t=="function"?t(e):t}function si(e){var t=vt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Ae,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var c=o=null,d=null,v=i;do{var k=v.lane;if((vn&k)===k)d!==null&&(d=d.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var w={lane:k,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};d===null?(c=d=w,o=r):d=d.next=w,Ee.lanes|=k,bn|=k}v=v.next}while(v!==null&&v!==i);d===null?o=r:d.next=c,wt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,Ee.lanes|=i,bn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oi(e){var t=vt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);wt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wo(){}function jo(e,t){var n=Ee,r=vt(),a=t(),i=!wt(r.memoizedState,a);if(i&&(r.memoizedState=a,at=!0),r=r.queue,ci(Co.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Pr(9,So.bind(null,n,r,a,t),void 0,null),He===null)throw Error(u(349));(vn&30)!==0||No(n,t,a)}return a}function No(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function So(e,t,n,r){t.value=n,t.getSnapshot=r,Eo(t)&&zo(e)}function Co(e,t,n){return n(function(){Eo(t)&&zo(e)})}function Eo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function zo(e){var t=Ot(e,1);t!==null&&Et(t,e,1,-1)}function Po(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=Cd.bind(null,Ee,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mo(){return vt().memoizedState}function Ca(e,t,n,r){var a=It();Ee.flags|=e,a.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function Ea(e,t,n,r){var a=vt();r=r===void 0?null:r;var i=void 0;if(Ae!==null){var o=Ae.memoizedState;if(i=o.destroy,r!==null&&ai(r,o.deps)){a.memoizedState=Pr(t,n,i,r);return}}Ee.flags|=e,a.memoizedState=Pr(1|t,n,i,r)}function Io(e,t){return Ca(8390656,8,e,t)}function ci(e,t){return Ea(2048,8,e,t)}function _o(e,t){return Ea(4,2,e,t)}function To(e,t){return Ea(4,4,e,t)}function Lo(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Do(e,t,n){return n=n!=null?n.concat([e]):null,Ea(4,4,Lo.bind(null,t,e),n)}function ui(){}function Ro(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ai(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ao(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ai(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oo(e,t,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n):(wt(n,t)||(n=ps(),Ee.lanes|=n,bn|=n,e.baseState=!0),t)}function Nd(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=ri.transition;ri.transition={};try{e(!1),t()}finally{he=n,ri.transition=r}}function Fo(){return vt().memoizedState}function Sd(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uo(e))Ho(t,n);else if(n=vo(e,t,n,r),n!==null){var a=Je();Et(n,e,r,a),Vo(n,t,r)}}function Cd(e,t,n){var r=ln(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uo(e))Ho(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,c=i(o,n);if(a.hasEagerState=!0,a.eagerState=c,wt(c,o)){var d=t.interleaved;d===null?(a.next=a,Gl(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}n=vo(e,t,a,r),n!==null&&(a=Je(),Et(n,e,r,a),Vo(n,t,r))}}function Uo(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Ho(e,t){Cr=Sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vo(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fl(e,n)}}var za={readContext:gt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Ed={readContext:gt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Io,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4194308,4,Lo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ca(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sd.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:Po,useDebugValue:ui,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=Po(!1),t=e[0];return e=Nd.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,a=It();if(Ne){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),He===null)throw Error(u(349));(vn&30)!==0||No(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Io(Co.bind(null,r,i,e),[e]),r.flags|=2048,Pr(9,So.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=It(),t=He.identifierPrefix;if(Ne){var n=At,r=Rt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zd={readContext:gt,useCallback:Ro,useContext:gt,useEffect:ci,useImperativeHandle:Do,useInsertionEffect:_o,useLayoutEffect:To,useMemo:Ao,useReducer:si,useRef:Mo,useState:function(){return si(zr)},useDebugValue:ui,useDeferredValue:function(e){var t=vt();return Oo(t,Ae.memoizedState,e)},useTransition:function(){var e=si(zr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:wo,useSyncExternalStore:jo,useId:Fo,unstable_isNewReconciler:!1},Pd={readContext:gt,useCallback:Ro,useContext:gt,useEffect:ci,useImperativeHandle:Do,useInsertionEffect:_o,useLayoutEffect:To,useMemo:Ao,useReducer:oi,useRef:Mo,useState:function(){return oi(zr)},useDebugValue:ui,useDeferredValue:function(e){var t=vt();return Ae===null?t.memoizedState=e:Oo(t,Ae.memoizedState,e)},useTransition:function(){var e=oi(zr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:wo,useSyncExternalStore:jo,useId:Fo,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=f({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pa={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),a=ln(e),i=Ft(r,a);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,a),t!==null&&(Et(t,e,a,r),ka(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),a=ln(e),i=Ft(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,a),t!==null&&(Et(t,e,a,r),ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=ln(e),a=Ft(n,r);a.tag=2,t!=null&&(a.callback=t),t=tn(e,a,r),t!==null&&(Et(t,e,r,n),ka(t,e,r))}};function Bo(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(a,i):!0}function Wo(e,t,n){var r=!1,a=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=gt(i):(a=rt(t)?fn:Qe.current,r=t.contextTypes,i=(r=r!=null)?Dn(e,a):Zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function qo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pa.enqueueReplaceState(t,t.state,null)}function fi(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Zl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=gt(i):(i=rt(t)?fn:Qe.current,a.context=Dn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(di(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Pa.enqueueReplaceState(a,a.state,null),wa(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=I(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function pi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Md=typeof WeakMap=="function"?WeakMap:Map;function $o(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ra||(Ra=!0,zi=r),mi(e,t)},n}function Qo(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){mi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mi(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Xo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Md;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Wd.bind(null,e,t,n),t.then(e,e))}function Yo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ko(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Id=J.ReactCurrentOwner,at=!1;function Ze(e,t,n,r){t.child=e===null?go(t,null,n,r):Fn(t,e.child,n,r)}function Go(e,t,n,r,a){n=n.render;var i=t.ref;return Hn(t,a),r=li(e,t,n,r,i,a),n=ii(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(Ne&&n&&Vl(t),t.flags|=1,Ze(e,t,r,a),t.child)}function Zo(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Di(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jo(e,t,i,r,a)):(e=Va(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:hr,n(o,r)&&e.ref===t.ref)return Ut(e,t,a)}return t.flags|=1,e=on(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jo(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(hr(i,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,Ut(e,t,a)}return hi(e,t,n,r,a)}function ec(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(qn,dt),dt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(qn,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(qn,dt),dt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ye(qn,dt),dt|=r;return Ze(e,t,a,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hi(e,t,n,r,a){var i=rt(n)?fn:Qe.current;return i=Dn(t,i),Hn(t,a),n=li(e,t,n,r,i,a),r=ii(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(Ne&&r&&Vl(t),t.flags|=1,Ze(e,t,n,a),t.child)}function nc(e,t,n,r,a){if(rt(n)){var i=!0;pa(t)}else i=!1;if(Hn(t,a),t.stateNode===null)Ia(e,t),Wo(t,n,r),fi(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var d=o.context,v=n.contextType;typeof v=="object"&&v!==null?v=gt(v):(v=rt(n)?fn:Qe.current,v=Dn(t,v));var k=n.getDerivedStateFromProps,w=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function";w||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||d!==v)&&qo(t,o,r,v),en=!1;var x=t.memoizedState;o.state=x,wa(t,r,o,a),d=t.memoizedState,c!==r||x!==d||nt.current||en?(typeof k=="function"&&(di(t,n,k,r),d=t.memoizedState),(c=en||Bo(t,n,c,r,x,d,v))?(w||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=v,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bo(e,t),c=t.memoizedProps,v=t.type===t.elementType?c:Nt(t.type,c),o.props=v,w=t.pendingProps,x=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=gt(d):(d=rt(n)?fn:Qe.current,d=Dn(t,d));var T=n.getDerivedStateFromProps;(k=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==w||x!==d)&&qo(t,o,r,d),en=!1,x=t.memoizedState,o.state=x,wa(t,r,o,a);var A=t.memoizedState;c!==w||x!==A||nt.current||en?(typeof T=="function"&&(di(t,n,T,r),A=t.memoizedState),(v=en||Bo(t,n,v,r,x,A,d)||!1)?(k||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),o.props=r,o.state=A,o.context=d,r=v):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return gi(e,t,n,r,i,a)}function gi(e,t,n,r,a,i){tc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&io(t,n,!1),Ut(e,t,i);r=t.stateNode,Id.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fn(t,e.child,null,i),t.child=Fn(t,null,c,i)):Ze(e,t,c,i),t.memoizedState=r.state,a&&io(t,n,!0),t.child}function rc(e){var t=e.stateNode;t.pendingContext?ao(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ao(e,t.context,!1),Jl(e,t.containerInfo)}function ac(e,t,n,r,a){return On(),$l(a),t.flags|=256,Ze(e,t,n,r),t.child}var vi={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function lc(e,t,n){var r=t.pendingProps,a=Ce.current,i=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ye(Ce,a&1),e===null)return ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ba(o,r,0,null),e=wn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bi(n),t.memoizedState=vi,e):yi(t,o));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return _d(e,t,o,r,c,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,c=a.sibling;var d={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=on(a,d),r.subtreeFlags=a.subtreeFlags&14680064),c!==null?i=on(c,i):(i=wn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?bi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=vi,r}return i=e.child,e=i.sibling,r=on(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yi(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ma(e,t,n,r){return r!==null&&$l(r),Fn(t,e.child,null,n),e=yi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _d(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=pi(Error(u(422))),Ma(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ba({mode:"visible",children:r.children},a,0,null),i=wn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Fn(t,e.child,null,o),t.child.memoizedState=bi(o),t.memoizedState=vi,i);if((t.mode&1)===0)return Ma(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(u(419)),r=pi(i,r,void 0),Ma(e,t,o,r)}if(c=(o&e.childLanes)!==0,at||c){if(r=He,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|o))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ot(e,a),Et(r,e,a,-1))}return Li(),r=pi(Error(u(421))),Ma(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=qd.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ut=Kt(a.nextSibling),ct=t,Ne=!0,jt=null,e!==null&&(mt[ht++]=Rt,mt[ht++]=At,mt[ht++]=pn,Rt=e.id,At=e.overflow,pn=t),t=yi(t,r.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function xi(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function sc(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Ze(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye(Ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ja(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),xi(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ja(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}xi(t,!0,n,null,i);break;case"together":xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ia(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Td(e,t,n){switch(t.tag){case 3:rc(t),On();break;case 5:ko(t);break;case 1:rt(t.type)&&pa(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ye(ya,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ce,Ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?lc(e,t,n):(ye(Ce,Ce.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);ye(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return sc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return Ut(e,t,n)}var oc,ki,cc,uc;oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ki=function(){},cc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,gn(Mt.current);var i=null;switch(n){case"input":a=le(e,a),r=le(e,r),i=[];break;case"select":a=f({},a,{value:void 0}),r=f({},r,{value:void 0}),i=[];break;case"textarea":a=Yn(e,a),r=Yn(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ua)}tl(n,r);var o;n=null;for(v in a)if(!r.hasOwnProperty(v)&&a.hasOwnProperty(v)&&a[v]!=null)if(v==="style"){var c=a[v];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(j.hasOwnProperty(v)?i||(i=[]):(i=i||[]).push(v,null));for(v in r){var d=r[v];if(c=a!=null?a[v]:void 0,r.hasOwnProperty(v)&&d!==c&&(d!=null||c!=null))if(v==="style")if(c){for(o in c)!c.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&c[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(i||(i=[]),i.push(v,n)),n=d;else v==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(i=i||[]).push(v,d)):v==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(v,""+d):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(j.hasOwnProperty(v)?(d!=null&&v==="onScroll"&&ke("scroll",e),i||c===d||(i=[])):(i=i||[]).push(v,d))}n&&(i=i||[]).push("style",n);var v=i;(t.updateQueue=v)&&(t.flags|=4)}},uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ld(e,t,n){var r=t.pendingProps;switch(Bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return rt(t.type)&&fa(),Ye(t),null;case 3:return r=t.stateNode,Vn(),we(nt),we(Qe),ni(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jt!==null&&(Ii(jt),jt=null))),ki(e,t),Ye(t),null;case 5:ei(t);var a=gn(Sr.current);if(n=t.type,e!==null&&t.stateNode!=null)cc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Ye(t),null}if(e=gn(Mt.current),va(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Pt]=t,r[xr]=i,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(a=0;a<vr.length;a++)ke(vr[a],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Be(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":Ur(r,i),ke("invalid",r)}tl(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&ca(r.textContent,c,e),a=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&ca(r.textContent,c,e),a=["children",""+c]):j.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":de(r),pt(r,i,!0);break;case"textarea":de(r),Hr(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ua)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Pt]=t,e[xr]=r,oc(e,t,!1,!1),t.stateNode=e;e:{switch(o=nl(n,r),n){case"dialog":ke("cancel",e),ke("close",e),a=r;break;case"iframe":case"object":case"embed":ke("load",e),a=r;break;case"video":case"audio":for(a=0;a<vr.length;a++)ke(vr[a],e);a=r;break;case"source":ke("error",e),a=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),a=r;break;case"details":ke("toggle",e),a=r;break;case"input":Be(e,r),a=le(e,r),ke("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=f({},r,{value:void 0}),ke("invalid",e);break;case"textarea":Ur(e,r),a=Yn(e,r),ke("invalid",e);break;default:a=r}tl(n,a),c=a;for(i in c)if(c.hasOwnProperty(i)){var d=c[i];i==="style"?Zi(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Jn(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Bt(e,d):typeof d=="number"&&Bt(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(j.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ke("scroll",e):d!=null&&me(e,i,d,o))}switch(n){case"input":de(e),pt(e,r,!1);break;case"textarea":de(e),Hr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+R(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Vt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=gn(Sr.current),gn(Mt.current),va(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(i=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:ca(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ca(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Ye(t),null;case 13:if(we(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)po(),On(),t.flags|=98560,i=!1;else if(i=va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Pt]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),i=!1}else jt!==null&&(Ii(jt),jt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Oe===0&&(Oe=3):Li())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Vn(),ki(e,t),e===null&&br(t.stateNode.containerInfo),Ye(t),null;case 10:return Yl(t.type._context),Ye(t),null;case 17:return rt(t.type)&&fa(),Ye(t),null;case 19:if(we(Ce),i=t.memoizedState,i===null)return Ye(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Mr(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ja(e),o!==null){for(t.flags|=128,Mr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(Ce,Ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&Me()>$n&&(t.flags|=128,r=!0,Mr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ja(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ne)return Ye(t),null}else 2*Me()-i.renderingStartTime>$n&&n!==1073741824&&(t.flags|=128,r=!0,Mr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Me(),t.sibling=null,n=Ce.current,ye(Ce,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return Ti(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(dt&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Dd(e,t){switch(Bl(t),t.tag){case 1:return rt(t.type)&&fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),we(nt),we(Qe),ni(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ei(t),null;case 13:if(we(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ce),null;case 4:return Vn(),null;case 10:return Yl(t.type._context),null;case 22:case 23:return Ti(),null;case 24:return null;default:return null}}var _a=!1,Ke=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,L=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function dc(e,t,n){try{n()}catch(r){ze(e,t,r)}}var fc=!1;function Ad(e,t){if(Ll=Zr,e=Vs(),Cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,d=-1,v=0,k=0,w=e,x=null;t:for(;;){for(var T;w!==n||a!==0&&w.nodeType!==3||(c=o+a),w!==i||r!==0&&w.nodeType!==3||(d=o+r),w.nodeType===3&&(o+=w.nodeValue.length),(T=w.firstChild)!==null;)x=w,w=T;for(;;){if(w===e)break t;if(x===n&&++v===a&&(c=o),x===i&&++k===r&&(d=o),(T=w.nextSibling)!==null)break;w=x,x=w.parentNode}w=T}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},Zr=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var A=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var O=A.memoizedProps,Ie=A.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?O:Nt(t.type,O),Ie);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(N){ze(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return A=fc,fc=!1,A}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&dc(t,n,i)}a=a.next}while(a!==r)}}function Ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pc(e){var t=e.alternate;t!==null&&(e.alternate=null,pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[xr],delete t[Fl],delete t[yd],delete t[xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ji(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ua));else if(r!==4&&(e=e.child,e!==null))for(ji(e,t,n),e=e.sibling;e!==null;)ji(e,t,n),e=e.sibling}function Ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}var We=null,St=!1;function nn(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount($r,n)}catch{}switch(n.tag){case 5:Ke||Wn(n,t);case 6:var r=We,a=St;We=null,nn(e,t,n),We=r,St=a,We!==null&&(St?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(St?(e=We,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),cr(e)):Ol(We,n.stateNode));break;case 4:r=We,a=St,We=n.stateNode.containerInfo,St=!0,nn(e,t,n),We=r,St=a;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&dc(n,t,o),a=a.next}while(a!==r)}nn(e,t,n);break;case 1:if(!Ke&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ze(n,t,c)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,nn(e,t,n),Ke=r):nn(e,t,n);break;default:nn(e,t,n)}}function vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rd),t.forEach(function(r){var a=$d.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:We=c.stateNode,St=!1;break e;case 3:We=c.stateNode.containerInfo,St=!0;break e;case 4:We=c.stateNode.containerInfo,St=!0;break e}c=c.return}if(We===null)throw Error(u(160));gc(i,o,a),We=null,St=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(v){ze(a,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),_t(e),r&4){try{Ir(3,e,e.return),Ta(3,e)}catch(O){ze(e,e.return,O)}try{Ir(5,e,e.return)}catch(O){ze(e,e.return,O)}}break;case 1:Ct(t,e),_t(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(Ct(t,e),_t(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var a=e.stateNode;try{Bt(a,"")}catch(O){ze(e,e.return,O)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&tt(a,i),nl(c,o);var v=nl(c,i);for(o=0;o<d.length;o+=2){var k=d[o],w=d[o+1];k==="style"?Zi(a,w):k==="dangerouslySetInnerHTML"?Jn(a,w):k==="children"?Bt(a,w):me(a,k,w,v)}switch(c){case"input":Ge(a,i);break;case"textarea":Kn(a,i);break;case"select":var x=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?Vt(a,!!i.multiple,T,!1):x!==!!i.multiple&&(i.defaultValue!=null?Vt(a,!!i.multiple,i.defaultValue,!0):Vt(a,!!i.multiple,i.multiple?[]:"",!1))}a[xr]=i}catch(O){ze(e,e.return,O)}}break;case 6:if(Ct(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(O){ze(e,e.return,O)}}break;case 3:if(Ct(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(O){ze(e,e.return,O)}break;case 4:Ct(t,e),_t(e);break;case 13:Ct(t,e),_t(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ei=Me())),r&4&&vc(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(v=Ke)||k,Ct(t,e),Ke=v):Ct(t,e),_t(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!k&&(e.mode&1)!==0)for(L=e,k=e.child;k!==null;){for(w=L=k;L!==null;){switch(x=L,T=x.child,x.tag){case 0:case 11:case 14:case 15:Ir(4,x,x.return);break;case 1:Wn(x,x.return);var A=x.stateNode;if(typeof A.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(O){ze(r,n,O)}}break;case 5:Wn(x,x.return);break;case 22:if(x.memoizedState!==null){kc(w);continue}}T!==null?(T.return=x,L=T):kc(w)}k=k.sibling}e:for(k=null,w=e;;){if(w.tag===5){if(k===null){k=w;try{a=w.stateNode,v?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=w.stateNode,d=w.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Vr("display",o))}catch(O){ze(e,e.return,O)}}}else if(w.tag===6){if(k===null)try{w.stateNode.nodeValue=v?"":w.memoizedProps}catch(O){ze(e,e.return,O)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;k===w&&(k=null),w=w.return}k===w&&(k=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:Ct(t,e),_t(e),r&4&&vc(e);break;case 21:break;default:Ct(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Bt(a,""),r.flags&=-33);var i=hc(e);Ni(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,c=hc(e);ji(e,c,o);break;default:throw Error(u(161))}}catch(d){ze(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Od(e,t,n){L=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var a=L,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||_a;if(!o){var c=a.alternate,d=c!==null&&c.memoizedState!==null||Ke;c=_a;var v=Ke;if(_a=o,(Ke=d)&&!v)for(L=a;L!==null;)o=L,d=o.child,o.tag===22&&o.memoizedState!==null?wc(a):d!==null?(d.return=o,L=d):wc(a);for(;i!==null;)L=i,yc(i),i=i.sibling;L=a,_a=c,Ke=v}xc(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,L=i):xc(e)}}function xc(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||Ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xo(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xo(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var k=v.memoizedState;if(k!==null){var w=k.dehydrated;w!==null&&cr(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ke||t.flags&512&&wi(t)}catch(x){ze(t,t.return,x)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function kc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function wc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ta(4,t)}catch(d){ze(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(d){ze(t,a,d)}}var i=t.return;try{wi(t)}catch(d){ze(t,i,d)}break;case 5:var o=t.return;try{wi(t)}catch(d){ze(t,o,d)}}}catch(d){ze(t,t.return,d)}if(t===e){L=null;break}var c=t.sibling;if(c!==null){c.return=t.return,L=c;break}L=t.return}}var Fd=Math.ceil,La=J.ReactCurrentDispatcher,Si=J.ReactCurrentOwner,bt=J.ReactCurrentBatchConfig,oe=0,He=null,De=null,qe=0,dt=0,qn=Gt(0),Oe=0,_r=null,bn=0,Da=0,Ci=0,Tr=null,lt=null,Ei=0,$n=1/0,Ht=null,Ra=!1,zi=null,rn=null,Aa=!1,an=null,Oa=0,Lr=0,Pi=null,Fa=-1,Ua=0;function Je(){return(oe&6)!==0?Me():Fa!==-1?Fa:Fa=Me()}function ln(e){return(e.mode&1)===0?1:(oe&2)!==0&&qe!==0?qe&-qe:wd.transition!==null?(Ua===0&&(Ua=ps()),Ua):(e=he,e!==0||(e=window.event,e=e===void 0?16:ws(e.type)),e)}function Et(e,t,n,r){if(50<Lr)throw Lr=0,Pi=null,Error(u(185));ar(e,n,r),((oe&2)===0||e!==He)&&(e===He&&((oe&2)===0&&(Da|=n),Oe===4&&sn(e,qe)),it(e,r),n===1&&oe===0&&(t.mode&1)===0&&($n=Me()+500,ma&&Jt()))}function it(e,t){var n=e.callbackNode;wu(e,t);var r=Yr(e,e===He?qe:0);if(r===0)n!==null&&us(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&us(n),t===1)e.tag===0?kd(Nc.bind(null,e)):so(Nc.bind(null,e)),vd(function(){(oe&6)===0&&Jt()}),n=null;else{switch(ms(r)){case 1:n=cl;break;case 4:n=ds;break;case 16:n=qr;break;case 536870912:n=fs;break;default:n=qr}n=_c(n,jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jc(e,t){if(Fa=-1,Ua=0,(oe&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=Yr(e,e===He?qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ha(e,r);else{t=r;var a=oe;oe|=2;var i=Cc();(He!==e||qe!==t)&&(Ht=null,$n=Me()+500,xn(e,t));do try{Vd();break}catch(c){Sc(e,c)}while(!0);Xl(),La.current=i,oe=a,De!==null?t=0:(He=null,qe=0,t=Oe)}if(t!==0){if(t===2&&(a=ul(e),a!==0&&(r=a,t=Mi(e,a))),t===1)throw n=_r,xn(e,0),sn(e,r),it(e,Me()),n;if(t===6)sn(e,r);else{if(a=e.current.alternate,(r&30)===0&&!Ud(a)&&(t=Ha(e,r),t===2&&(i=ul(e),i!==0&&(r=i,t=Mi(e,i))),t===1))throw n=_r,xn(e,0),sn(e,r),it(e,Me()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:kn(e,lt,Ht);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Ei+500-Me(),10<t)){if(Yr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Al(kn.bind(null,e,lt,Ht),t);break}kn(e,lt,Ht);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-kt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fd(r/1960))-r,10<r){e.timeoutHandle=Al(kn.bind(null,e,lt,Ht),r);break}kn(e,lt,Ht);break;case 5:kn(e,lt,Ht);break;default:throw Error(u(329))}}}return it(e,Me()),e.callbackNode===n?jc.bind(null,e):null}function Mi(e,t){var n=Tr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Ha(e,t),e!==2&&(t=lt,lt=n,t!==null&&Ii(t)),e}function Ii(e){lt===null?lt=e:lt.push.apply(lt,e)}function Ud(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!wt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Ci,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function Nc(e){if((oe&6)!==0)throw Error(u(327));Qn();var t=Yr(e,0);if((t&1)===0)return it(e,Me()),null;var n=Ha(e,t);if(e.tag!==0&&n===2){var r=ul(e);r!==0&&(t=r,n=Mi(e,r))}if(n===1)throw n=_r,xn(e,0),sn(e,t),it(e,Me()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,lt,Ht),it(e,Me()),null}function _i(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&($n=Me()+500,ma&&Jt())}}function yn(e){an!==null&&an.tag===0&&(oe&6)===0&&Qn();var t=oe;oe|=1;var n=bt.transition,r=he;try{if(bt.transition=null,he=1,e)return e()}finally{he=r,bt.transition=n,oe=t,(oe&6)===0&&Jt()}}function Ti(){dt=qn.current,we(qn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gd(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fa();break;case 3:Vn(),we(nt),we(Qe),ni();break;case 5:ei(r);break;case 4:Vn();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:Yl(r.type._context);break;case 22:case 23:Ti()}n=n.return}if(He=e,De=e=on(e.current,null),qe=dt=t,Oe=0,_r=null,Ci=Da=bn=0,lt=Tr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}hn=null}return e}function Sc(e,t){do{var n=De;try{if(Xl(),Na.current=za,Sa){for(var r=Ee.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Sa=!1}if(vn=0,Ue=Ae=Ee=null,Cr=!1,Er=0,Si.current=null,n===null||n.return===null){Oe=1,_r=t,De=null;break}e:{var i=e,o=n.return,c=n,d=t;if(t=qe,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var v=d,k=c,w=k.tag;if((k.mode&1)===0&&(w===0||w===11||w===15)){var x=k.alternate;x?(k.updateQueue=x.updateQueue,k.memoizedState=x.memoizedState,k.lanes=x.lanes):(k.updateQueue=null,k.memoizedState=null)}var T=Yo(o);if(T!==null){T.flags&=-257,Ko(T,o,c,i,t),T.mode&1&&Xo(i,v,t),t=T,d=v;var A=t.updateQueue;if(A===null){var O=new Set;O.add(d),t.updateQueue=O}else A.add(d);break e}else{if((t&1)===0){Xo(i,v,t),Li();break e}d=Error(u(426))}}else if(Ne&&c.mode&1){var Ie=Yo(o);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),Ko(Ie,o,c,i,t),$l(Bn(d,c));break e}}i=d=Bn(d,c),Oe!==4&&(Oe=2),Tr===null?Tr=[i]:Tr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=$o(i,d,t);yo(i,m);break e;case 1:c=d;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rn===null||!rn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=Qo(i,c,t);yo(i,N);break e}}i=i.return}while(i!==null)}zc(n)}catch(H){t=H,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Cc(){var e=La.current;return La.current=za,e===null?za:e}function Li(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),He===null||(bn&268435455)===0&&(Da&268435455)===0||sn(He,qe)}function Ha(e,t){var n=oe;oe|=2;var r=Cc();(He!==e||qe!==t)&&(Ht=null,xn(e,t));do try{Hd();break}catch(a){Sc(e,a)}while(!0);if(Xl(),oe=n,La.current=r,De!==null)throw Error(u(261));return He=null,qe=0,Oe}function Hd(){for(;De!==null;)Ec(De)}function Vd(){for(;De!==null&&!pu();)Ec(De)}function Ec(e){var t=Ic(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?zc(e):De=t,Si.current=null}function zc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Ld(n,t,dt),n!==null){De=n;return}}else{if(n=Dd(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Oe===0&&(Oe=5)}function kn(e,t,n){var r=he,a=bt.transition;try{bt.transition=null,he=1,Bd(e,t,n,r)}finally{bt.transition=a,he=r}return null}function Bd(e,t,n,r){do Qn();while(an!==null);if((oe&6)!==0)throw Error(u(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ju(e,i),e===He&&(De=He=null,qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Aa||(Aa=!0,_c(qr,function(){return Qn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=bt.transition,bt.transition=null;var o=he;he=1;var c=oe;oe|=4,Si.current=null,Ad(e,n),bc(n,e),cd(Dl),Zr=!!Ll,Dl=Ll=null,e.current=n,Od(n),mu(),oe=c,he=o,bt.transition=i}else e.current=n;if(Aa&&(Aa=!1,an=e,Oa=a),i=e.pendingLanes,i===0&&(rn=null),vu(n.stateNode),it(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ra)throw Ra=!1,e=zi,zi=null,e;return(Oa&1)!==0&&e.tag!==0&&Qn(),i=e.pendingLanes,(i&1)!==0?e===Pi?Lr++:(Lr=0,Pi=e):Lr=0,Jt(),null}function Qn(){if(an!==null){var e=ms(Oa),t=bt.transition,n=he;try{if(bt.transition=null,he=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,Oa=0,(oe&6)!==0)throw Error(u(331));var a=oe;for(oe|=4,L=e.current;L!==null;){var i=L,o=i.child;if((L.flags&16)!==0){var c=i.deletions;if(c!==null){for(var d=0;d<c.length;d++){var v=c[d];for(L=v;L!==null;){var k=L;switch(k.tag){case 0:case 11:case 15:Ir(8,k,i)}var w=k.child;if(w!==null)w.return=k,L=w;else for(;L!==null;){k=L;var x=k.sibling,T=k.return;if(pc(k),k===v){L=null;break}if(x!==null){x.return=T,L=x;break}L=T}}}var A=i.alternate;if(A!==null){var O=A.child;if(O!==null){A.child=null;do{var Ie=O.sibling;O.sibling=null,O=Ie}while(O!==null)}}L=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,L=o;else e:for(;L!==null;){if(i=L,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Ir(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var p=e.current;for(L=p;L!==null;){o=L;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,L=g;else e:for(o=p;L!==null;){if(c=L,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Ta(9,c)}}catch(H){ze(c,c.return,H)}if(c===o){L=null;break e}var N=c.sibling;if(N!==null){N.return=c.return,L=N;break e}L=c.return}}if(oe=a,Jt(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot($r,e)}catch{}r=!0}return r}finally{he=n,bt.transition=t}}return!1}function Pc(e,t,n){t=Bn(n,t),t=$o(e,t,1),e=tn(e,t,1),t=Je(),e!==null&&(ar(e,1,t),it(e,t))}function ze(e,t,n){if(e.tag===3)Pc(e,e,n);else for(;t!==null;){if(t.tag===3){Pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=Bn(n,e),e=Qo(t,e,1),t=tn(t,e,1),e=Je(),t!==null&&(ar(t,1,e),it(t,e));break}}t=t.return}}function Wd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(qe&n)===n&&(Oe===4||Oe===3&&(qe&130023424)===qe&&500>Me()-Ei?xn(e,0):Ci|=n),it(e,t)}function Mc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var n=Je();e=Ot(e,t),e!==null&&(ar(e,t,n),it(e,n))}function qd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mc(e,n)}function $d(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Mc(e,n)}var Ic;Ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)at=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return at=!1,Td(e,t,n);at=(e.flags&131072)!==0}else at=!1,Ne&&(t.flags&1048576)!==0&&oo(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ia(e,t),e=t.pendingProps;var a=Dn(t,Qe.current);Hn(t,n),a=li(null,t,r,e,a,n);var i=ii();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,pa(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Zl(t),a.updater=Pa,t.stateNode=a,a._reactInternals=t,fi(t,r,e,n),t=gi(null,t,r,!0,i,n)):(t.tag=0,Ne&&i&&Vl(t),Ze(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ia(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Xd(r),e=Nt(r,e),a){case 0:t=hi(null,t,r,e,n);break e;case 1:t=nc(null,t,r,e,n);break e;case 11:t=Go(null,t,r,e,n);break e;case 14:t=Zo(null,t,r,Nt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Nt(r,a),hi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Nt(r,a),nc(e,t,r,a,n);case 3:e:{if(rc(t),e===null)throw Error(u(387));r=t.pendingProps,i=t.memoizedState,a=i.element,bo(e,t),wa(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Bn(Error(u(423)),t),t=ac(e,t,r,n,a);break e}else if(r!==a){a=Bn(Error(u(424)),t),t=ac(e,t,r,n,a);break e}else for(ut=Kt(t.stateNode.containerInfo.firstChild),ct=t,Ne=!0,jt=null,n=go(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===a){t=Ut(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return ko(t),e===null&&ql(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Rl(r,a)?o=null:i!==null&&Rl(r,i)&&(t.flags|=32),tc(e,t),Ze(e,t,o,n),t.child;case 6:return e===null&&ql(t),null;case 13:return lc(e,t,n);case 4:return Jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Nt(r,a),Go(e,t,r,a,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,ye(ya,r._currentValue),r._currentValue=o,i!==null)if(wt(i.value,o)){if(i.children===a.children&&!nt.current){t=Ut(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){o=i.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=Ft(-1,n&-n),d.tag=2;var v=i.updateQueue;if(v!==null){v=v.shared;var k=v.pending;k===null?d.next=d:(d.next=k.next,k.next=d),v.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Kl(i.return,n,t),c.lanes|=n;break}d=d.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(u(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Kl(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ze(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Hn(t,n),a=gt(a),r=r(a),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,a=Nt(r,t.pendingProps),a=Nt(r.type,a),Zo(e,t,r,a,n);case 15:return Jo(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Nt(r,a),Ia(e,t),t.tag=1,rt(r)?(e=!0,pa(t)):e=!1,Hn(t,n),Wo(t,r,a),fi(t,r,a,n),gi(null,t,r,!0,e,n);case 19:return sc(e,t,n);case 22:return ec(e,t,n)}throw Error(u(156,t.tag))};function _c(e,t){return cs(e,t)}function Qd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Qd(e,t,n,r)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xd(e){if(typeof e=="function")return Di(e)?1:0;if(e!=null){if(e=e.$$typeof,e===et)return 11;if(e===Re)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Va(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Di(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case xe:return wn(n.children,a,i,t);case F:o=8,a|=8;break;case X:return e=yt(12,n,t,a|2),e.elementType=X,e.lanes=i,e;case Te:return e=yt(13,n,t,a),e.elementType=Te,e.lanes=i,e;case je:return e=yt(19,n,t,a),e.elementType=je,e.lanes=i,e;case be:return Ba(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:o=10;break e;case ge:o=9;break e;case et:o=11;break e;case Re:o=14;break e;case ve:o=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=yt(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function wn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=yt(22,e,r,t),e.elementType=be,e.lanes=n,e.stateNode={isHidden:!1},e}function Ri(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Ai(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yd(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Oi(e,t,n,r,a,i,o,c,d){return e=new Yd(e,t,n,c,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(i),e}function Kd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return Zt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(rt(n))return lo(e,n,t)}return t}function Lc(e,t,n,r,a,i,o,c,d){return e=Oi(n,r,!0,e,a,i,o,c,d),e.context=Tc(null),n=e.current,r=Je(),a=ln(n),i=Ft(r,a),i.callback=t??null,tn(n,i,a),e.current.lanes=a,ar(e,a,r),it(e,r),e}function Wa(e,t,n,r){var a=t.current,i=Je(),o=ln(a);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(a,t,o),e!==null&&(Et(e,a,o,i),ka(e,a,o)),o}function qa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fi(e,t){Dc(e,t),(e=e.alternate)&&Dc(e,t)}function Gd(){return null}var Rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ui(e){this._internalRoot=e}$a.prototype.render=Ui.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Wa(e,t,null,null)},$a.prototype.unmount=Ui.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Wa(null,e,null,null)}),t[Lt]=null}};function $a(e){this._internalRoot=e}$a.prototype.unstable_scheduleHydration=function(e){if(e){var t=vs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&xs(e)}};function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ac(){}function Zd(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var v=qa(o);i.call(v)}}var o=Lc(t,r,e,0,null,!1,!1,"",Ac);return e._reactRootContainer=o,e[Lt]=o.current,br(e.nodeType===8?e.parentNode:e),yn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var c=r;r=function(){var v=qa(d);c.call(v)}}var d=Oi(e,0,!1,null,null,!1,!1,"",Ac);return e._reactRootContainer=d,e[Lt]=d.current,br(e.nodeType===8?e.parentNode:e),yn(function(){Wa(t,d,n,r)}),d}function Xa(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var c=a;a=function(){var d=qa(o);c.call(d)}}Wa(t,o,e,a)}else o=Zd(n,t,e,a,r);return qa(o)}hs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(fl(t,n|1),it(t,Me()),(oe&6)===0&&($n=Me()+500,Jt()))}break;case 13:yn(function(){var r=Ot(e,1);if(r!==null){var a=Je();Et(r,e,1,a)}}),Fi(e,1)}},pl=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Je();Et(t,e,134217728,n)}Fi(e,134217728)}},gs=function(e){if(e.tag===13){var t=ln(e),n=Ot(e,t);if(n!==null){var r=Je();Et(n,e,t,r)}Fi(e,t)}},vs=function(){return he},bs=function(e,t){var n=he;try{return he=e,t()}finally{he=n}},ll=function(e,t,n){switch(t){case"input":if(Ge(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=da(r);if(!a)throw Error(u(90));Se(r),Ge(r,a)}}}break;case"textarea":Kn(e,n);break;case"select":t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}},ns=_i,rs=yn;var Jd={usingClientEntryPoint:!1,Events:[kr,Tn,da,es,ts,_i]},Dr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ss(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Gd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{$r=Ya.inject(ef),zt=Ya}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jd,st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hi(t))throw Error(u(200));return Kd(e,t,null,n)},st.createRoot=function(e,t){if(!Hi(e))throw Error(u(299));var n=!1,r="",a=Rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Oi(e,1,!1,null,null,n,!1,r,a),e[Lt]=t.current,br(e.nodeType===8?e.parentNode:e),new Ui(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ss(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return yn(e)},st.hydrate=function(e,t,n){if(!Qa(t))throw Error(u(200));return Xa(null,e,t,!0,n)},st.hydrateRoot=function(e,t,n){if(!Hi(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=Rc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lc(t,null,e,1,n??null,a,!1,i,o),e[Lt]=t.current,br(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new $a(t)},st.render=function(e,t,n){if(!Qa(t))throw Error(u(200));return Xa(null,e,t,!1,n)},st.unmountComponentAtNode=function(e){if(!Qa(e))throw Error(u(40));return e._reactRootContainer?(yn(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},st.unstable_batchedUpdates=_i,st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qa(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Xa(e,t,n,!1,r)},st.version="18.3.1-next-f1338f8080-20240426",st}var Yc;function uf(){if(Yc)return Vi.exports;Yc=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(y){console.error(y)}}return b(),Vi.exports=cf(),Vi.exports}var Kc;function df(){if(Kc)return Ka;Kc=1;var b=uf();return Ka.createRoot=b.createRoot,Ka.hydrateRoot=b.hydrateRoot,Ka}var ff=df();const pf=eu(ff),Gc={personalInfo:{name:"Dinesh Kumar E",title:"Team Lead & Computer Science Engineering Student",tagline:"Computer Science Engineer & Team Lead with expertise in Java, Python, Web Engineering, AI Tools & Hardware Projects.",bio:"Computer Science Engineering student at R.M.K. Engineering College with hands-on experience as a Team Lead at LTI, contributing to real-time projects with strong experience in team coordination, project execution, and technical problem-solving. Proficient in Java, C, C++, Python, JavaScript, HTML, CSS, and web development. Skilled in AI tools, cybersecurity tools, digital marketing, vector graphics, and hands-on hardware projects including EV bike assembly and battery manufacturing.",availability:"Available for Team Lead & Engineering Roles",statusBadge:"Open for Opportunities & Projects 🚀",email:"dineshelumalai2006@gmail.com",phone:"+91 8072741080",location:"Tamil Nadu, India",avatar:"/dinesh_photo.jpg",resumeUrl:"#download-resume",socials:{github:"https://github.com",linkedin:"https://linkedin.com",twitter:"https://twitter.com",dribbble:"https://dribbble.com",figma:"https://figma.com"},stats:{yearsExperience:"2+ Yrs",completedProjects:"12+",happyClients:"15+",certifications:"14"}},projects:[{id:"p1",title:"NovaCare AI Health Assistant",shortDesc:"AI-powered medical triage, patient scheduling, and real-time health analytics platform.",longDesc:"NovaCare AI is an enterprise healthcare portal built with React, Node.js, and Python backend microservices to optimize patient triage, medical data processing, and clinical analytics.",category:"AI & Web Apps",tags:["React","Node.js","Python AI","PostgreSQL","TailwindCSS"],image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/novacare",githubUrl:"https://github.com/example/novacare",featured:!0},{id:"p2",title:"LTI Real-Time Team Management System",shortDesc:"Real-time project management and team coordination system built during LTI Team Lead tenure.",longDesc:"Architected real-time task allocation, problem-solving workflows, and project tracking dashboards for cross-functional engineering teams.",category:"Web App",tags:["Java","JavaScript","HTML/CSS","Team Leadership","Agile"],image:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/lti-project1",githubUrl:"https://github.com/example/lti-project1",featured:!0},{id:"p3",title:"LTI Enterprise Execution Pipeline",shortDesc:"Enterprise software solution coordinating real-time data flows, task timelines, and resource distribution.",longDesc:"Coordinated technical execution, problem-solving pipelines, and code integration for complex multi-tier application deliverables.",category:"Web App",tags:["Java Tools","DBMS","Software Engineering","Agile Workflows"],image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/lti-project2",githubUrl:"https://github.com/example/lti-project2",featured:!0},{id:"p4",title:"EV Bike Assembly & Battery Diagnostic System",shortDesc:"Hardware monitoring portal for electric vehicle bike assembly, battery charge metrics, and diagnostics.",longDesc:"Hands-on engineering project integrating IoT sensors, battery management systems (BMS), and real-time EV telemetry dashboards.",category:"Hardware & IoT",tags:["IoT","Hardware","Python","EV Technology","Sensors"],image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/ev-hardware",githubUrl:"https://github.com/example/ev-hardware",featured:!1},{id:"p5",title:"GSC Digital Marketing & Creative Media Hub",shortDesc:"Promotional content hub, video/photo editing workflow, and digital engagement analytics.",longDesc:"Designed and executed social media marketing campaigns, vector graphics, and video content for community engagement.",category:"Creative & Marketing",tags:["Digital Marketing","Video Editing","Vector Graphics","Social Media"],image:"https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/gsc-marketing",githubUrl:"https://github.com/example/gsc-marketing",featured:!1},{id:"p6",title:"Cybersecurity & AI Threat Analyzer",shortDesc:"Utility tools for network traffic scanning, security vulnerability analysis, and data encryption.",longDesc:"Developed custom Python scripts and cybersecurity tools for security auditing and vulnerability mitigation.",category:"AI & Cybersecurity",tags:["Cybersecurity Tools","Python","Network Scanning","AI Analysis"],image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",liveUrl:"https://example.com/sec-tools",githubUrl:"https://github.com/example/sec-tools",featured:!1}],certificates:[{id:"nptel-1",title:"Introduction to Internet of Things (IoT)",issuer:"NPTEL / IIT Kharagpur (SWAYAM)",date:"Jan - Apr 2026",credentialId:"NPTEL26CS37S85120059604261300",verifyUrl:"https://nptel.ac.in/noc",badgeImage:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300",skills:["Internet of Things","Embedded Systems","Sensory Networks","IoT Security","Score: 84%"]},{id:"nptel-2",title:"The Joy of Computing using Python",issuer:"NPTEL / IIT Madras (SWAYAM)",date:"Jul - Oct 2025",credentialId:"NPTEL25CS103S1075200649",verifyUrl:"https://nptel.ac.in/noc",badgeImage:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300",skills:["Python Programming","Algorithmic Thinking","Data Processing","Problem Solving","Score: 81%"]},{id:"nptel-3",title:"Soft Skill Development",issuer:"NPTEL (SWAYAM)",date:"Jan - Mar 2025",credentialId:"NPTEL25HS72S643310843",verifyUrl:"https://nptel.ac.in/noc",badgeImage:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300",skills:["Professional Communication","Leadership Skills","Presentation","Team Dynamics","Score: 52%"]},{id:"info-1",title:"Java Developer Certification",issuer:"Infosys Springboard",date:"November 8, 2025",credentialId:"INFOSYS-JAVA-DEV-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300",skills:["Java Core","Enterprise Java","Object-Oriented Programming","Backend Development"]},{id:"info-2",title:"Java SE 8 Features",issuer:"Infosys Springboard",date:"November 6, 2025",credentialId:"INFOSYS-JAVA8-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=300",skills:["Streams API","Lambda Expressions","Optional Class","Functional Interfaces"]},{id:"info-3",title:"Java Tools",issuer:"Infosys Springboard",date:"November 6, 2025",credentialId:"INFOSYS-JAVATOOLS-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300",skills:["Maven","Gradle","JUnit","Debugging Tools"]},{id:"info-4",title:"Java Language Features",issuer:"Infosys Springboard",date:"November 6, 2025",credentialId:"INFOSYS-JAVALANG-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300",skills:["Generics","Collections Framework","Multithreading","Exception Handling"]},{id:"info-5",title:"Database Management System Part 1 & 2",issuer:"Infosys Springboard",date:"October 13, 2025",credentialId:"INFOSYS-DBMS-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=300",skills:["SQL","Relational Database Modeling","Normalization","Database Querying"]},{id:"info-6",title:"Artificial Intelligence Foundation Certification",issuer:"Infosys Springboard",date:"February 27, 2025",credentialId:"INFOSYS-AI-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=300",skills:["AI Fundamentals","Machine Learning","Neural Networks","AI Tools"]},{id:"info-7",title:"Java Programming Fundamentals",issuer:"Infosys Springboard",date:"February 17, 2025",credentialId:"INFOSYS-JAVAFUND-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300",skills:["Java Syntax","Control Flow","Object-Oriented Basics","Arrays"]},{id:"info-8",title:"Software Engineering & Agile Development",issuer:"Infosys Springboard",date:"December 8, 2024",credentialId:"INFOSYS-AGILE-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=300",skills:["Agile Methodologies","Scrum","SDLC","Software Testing"]},{id:"info-9",title:"HTML5 - The Language",issuer:"Infosys Springboard",date:"December 8, 2024",credentialId:"INFOSYS-HTML5-111724102045",verifyUrl:"https://verify.onwingspan.com",badgeImage:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=300",skills:["HTML5","Semantic Web","Forms & Validation","DOM Structure"]},{id:"gsc-1",title:"Summer/Winter Internship Certification",issuer:"GSC (Global Student Community)",date:"June 2, 2025 – August 30, 2025",credentialId:"GSC-INT-2025-0608",verifyUrl:"https://gsc.org/verify",badgeImage:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300",skills:["Digital Marketing","Social Media Operations","Content Creation","Team Execution"]},{id:"nptel-4",title:"Cloud Computing (SWAYAM)",issuer:"SWAYAM-NPTEL / IIT Kharagpur",date:"July 2026 (12 Weeks)",credentialId:"NPTEL26CS150",verifyUrl:"https://onlinecourses.nptel.ac.in",badgeImage:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300",skills:["Cloud Architecture","Virtualization","Distributed Systems","Storage Management"]}],skills:[{name:"Java / C / C++",category:"Programming",level:92,icon:"Code"},{name:"Python",category:"Programming",level:90,icon:"Terminal"},{name:"HTML5 / CSS3 / JavaScript",category:"Web",level:94,icon:"Layout"},{name:"Web Development",category:"Web",level:88,icon:"Server"},{name:"AI & Cybersecurity Tools",category:"Tech & Security",level:85,icon:"Shield"},{name:"Database Management (DBMS)",category:"Tech & Security",level:88,icon:"Database"},{name:"Leadership & Project Management",category:"Management",level:95,icon:"Users"},{name:"Video, Photo & Vector Editing",category:"Creative",level:88,icon:"Video"},{name:"Digital Marketing & Social Media",category:"Creative",level:86,icon:"Share2"},{name:"Hardware, EV & Battery Projects",category:"Hardware",level:85,icon:"Cpu"}],experience:[{id:"e1",role:"Team Lead",company:"LTI",period:"Recent",location:"Tamil Nadu, India",description:"Worked on two real-time projects; coordinated team activities, supported problem-solving, and contributed to timely project completion.",achievements:["Led cross-functional team coordination on two real-time production projects","Streamlined technical problem-solving workflows to hit project deadlines","Managed agile task tracking and software quality benchmarks"]},{id:"e2",role:"Marketing & Social Media Specialist",company:"GSC",period:"2025",location:"Tamil Nadu, India",description:"Worked on marketing, social media activities, digital content creation, and promotional campaign execution.",achievements:["Created digital content, vector graphics, and video presentations for brand reach","Executed social media marketing campaigns for student community initiatives"]},{id:"e3",role:"Practical Trainee",company:"Celtan",period:"June 2025 - August 2025",location:"Coimbatore, India",description:"Gained practical professional experience and exposure to workplace activities.",achievements:["Completed 3-month hands-on industry internship program","Gained practical exposure to workplace engineering and team operations"]}],education:[{id:"ed1",degree:"B.E. Computer Science & Engineering",institution:"R.M.K. Engineering College",period:"Expected 06/2028",details:"Tamil Nadu, India. Focus on Software Engineering, Data Structures, Java, Cloud Computing, and Hardware Engineering."}],services:[{id:"s1",title:"Team Lead & Project Execution",description:"Technical leadership, agile team coordination, problem-solving, and project delivery.",startingPrice:"Quote on Request",deliverables:["Cross-functional team coordination","Real-time project execution","Agile task tracking & problem solving","Quality assurance & delivery"]},{id:"s2",title:"Full-Stack & Java Web Development",description:"Building responsive web applications with Java, Python, JavaScript, and database integration.",startingPrice:"$1,500",deliverables:["Responsive web application frontend & backend","Database design (DBMS) & API endpoints","Clean OOP code architecture","Deployment & documentation"]},{id:"s3",title:"Digital Marketing & Media Production",description:"Social media operations, video/photo editing, vector graphics, and presentation design.",startingPrice:"$800",deliverables:["High-quality video & photo editing","Vector graphics & PPT presentation design","Social media campaign strategy","Digital content creation"]}],testimonials:[{id:"t1",name:"R.M.K. Department Head",role:"Professor",company:"R.M.K. Engineering College",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",content:"Dinesh Kumar E displays exceptional leadership, technical discipline, and enthusiasm for engineering projects. His work as a Team Lead is commendable!"},{id:"t2",name:"LTI Project Manager",role:"Project Director",company:"LTI",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",content:"Dinesh led two real-time projects smoothly. His problem-solving abilities and team coordination kept deliverables on schedule."}],inquiries:[]},tu=ie.createContext(),Bi="dinesh_kumar_portfolio_v2",Zc="asma_portfolio_theme_v1",mf=({children:b})=>{const[y,u]=ie.useState(()=>{try{const F=localStorage.getItem(Bi);if(F)return JSON.parse(F)}catch(F){console.error("Failed to parse local storage data:",F)}return Gc}),[P,j]=ie.useState(()=>localStorage.getItem(Zc)||"dark"),[D,ee]=ie.useState("home"),[Y,C]=ie.useState(null);ie.useEffect(()=>{document.documentElement.setAttribute("data-theme",P),localStorage.setItem(Zc,P)},[P]),ie.useEffect(()=>{try{localStorage.setItem(Bi,JSON.stringify(y))}catch(F){console.error("Failed to save to localStorage:",F)}},[y]);const U=()=>{j(F=>F==="dark"?"light":"dark")},Z=F=>{u(X=>({...X,personalInfo:{...X.personalInfo,...F}}))},te=F=>{const X={...F,id:"p_"+Date.now(),tags:typeof F.tags=="string"?F.tags.split(",").map(V=>V.trim()):F.tags};u(V=>({...V,projects:[X,...V.projects]}))},ne=(F,X)=>{u(V=>({...V,projects:V.projects.map(ge=>ge.id===F?{...ge,...X}:ge)}))},Pe=F=>{u(X=>({...X,projects:X.projects.filter(V=>V.id!==F)}))},pe=F=>{const X={...F,id:"c_"+Date.now(),skills:typeof F.skills=="string"?F.skills.split(",").map(V=>V.trim()):F.skills};u(V=>({...V,certificates:[X,...V.certificates]}))},ae=(F,X)=>{u(V=>({...V,certificates:V.certificates.map(ge=>ge.id===F?{...ge,...X}:ge)}))},W=F=>{u(X=>({...X,certificates:X.certificates.filter(V=>V.id!==F)}))},Fe=F=>{u(X=>({...X,skills:[...X.skills,F]}))},se=F=>{u(X=>({...X,skills:X.skills.filter((V,ge)=>ge!==F)}))},me=F=>{const X={...F,id:"e_"+Date.now(),achievements:typeof F.achievements=="string"?F.achievements.split(`
`).filter(Boolean):F.achievements};u(V=>({...V,experience:[X,...V.experience]}))},J=F=>{u(X=>({...X,experience:X.experience.filter(V=>V.id!==F)}))},_e=F=>{const X={...F,id:"inq_"+Date.now(),submittedAt:new Date().toISOString()};u(V=>({...V,inquiries:[X,...V.inquiries||[]]}))},ce=F=>{u(X=>({...X,inquiries:(X.inquiries||[]).filter(V=>V.id!==F)}))},xe=()=>{u(Gc),localStorage.removeItem(Bi)};return l.jsx(tu.Provider,{value:{data:y,theme:P,toggleTheme:U,currentPage:D,setCurrentPage:ee,selectedProject:Y,setSelectedProject:C,updatePersonalInfo:Z,addProject:te,updateProject:ne,deleteProject:Pe,addCertificate:pe,updateCertificate:ae,deleteCertificate:W,addSkill:Fe,deleteSkill:se,addExperience:me,deleteExperience:J,addInquiry:_e,deleteInquiry:ce,resetToDefault:xe},children:b})},ft=()=>ie.useContext(tu);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hf=b=>b.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nu=(...b)=>b.filter((y,u,P)=>!!y&&y.trim()!==""&&P.indexOf(y)===u).join(" ").trim();/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vf=ie.forwardRef(({color:b="currentColor",size:y=24,strokeWidth:u=2,absoluteStrokeWidth:P,className:j="",children:D,iconNode:ee,...Y},C)=>ie.createElement("svg",{ref:C,...gf,width:y,height:y,stroke:b,strokeWidth:P?Number(u)*24/Number(y):u,className:nu("lucide",j),...Y},[...ee.map(([U,Z])=>ie.createElement(U,Z)),...Array.isArray(D)?D:[D]]));/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G=(b,y)=>{const u=ie.forwardRef(({className:P,...j},D)=>ie.createElement(vf,{ref:D,iconNode:y,className:nu(`lucide-${hf(b)}`,P),...j}));return u.displayName=`${b}`,u};/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ru=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bf=G("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
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
*/const Xi=G("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yf=G("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yi=G("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xf=G("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kf=G("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wf=G("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jf=G("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nf=G("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sf=G("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cf=G("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Za=G("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ef=G("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qi=G("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
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
*/const If=G("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _f=G("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const au=G("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tf=G("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jc=G("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
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
*/const Rf=G("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Af=G("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Of=G("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wi=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
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
*/const Ar=G("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vf=G("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ki=G("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $i=G("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ja=G("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bf=G("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wf=G("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ga=G("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qf=G("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lu=G("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iu=G("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xn=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $f=G("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Qf=()=>{const{currentPage:b,setCurrentPage:y,theme:u,toggleTheme:P,data:j}=ft(),[D,ee]=ie.useState(!1),Y=[{id:"home",label:"Home",icon:Mf},{id:"projects",label:"Projects",icon:Fr,sectionId:"projects-section"},{id:"certificates",label:"Certificates",icon:Or},{id:"services",label:"Services",icon:au,sectionId:"services-section"},{id:"hire",label:"Hire Me",icon:Ar,isSpecial:!0},{id:"admin",label:"Admin CMS",icon:Ki}],C=U=>{if(U.id==="home"||U.id==="certificates"||U.id==="hire"||U.id==="admin")y(U.id),window.scrollTo({top:0,behavior:"smooth"});else if(U.sectionId)if(b!=="home")y("home"),setTimeout(()=>{const Z=document.getElementById(U.sectionId);Z&&Z.scrollIntoView({behavior:"smooth"})},100);else{const Z=document.getElementById(U.sectionId);Z&&Z.scrollIntoView({behavior:"smooth"})}ee(!1)};return l.jsxs("header",{className:"navbar-header",children:[l.jsxs("div",{className:"container navbar-container",children:[l.jsxs("div",{className:"brand-logo",onClick:()=>{y("home"),window.scrollTo({top:0,behavior:"smooth"})},children:[l.jsx("div",{className:"logo-badge",children:l.jsx(Ja,{size:20,className:"logo-sparkle"})}),l.jsxs("span",{className:"logo-text",children:[j.personalInfo.name.split(" ")[0],l.jsx("span",{className:"text-gradient",children:".dev"})]})]}),l.jsx("nav",{className:"desktop-nav",children:Y.map(U=>{const Z=U.icon,te=b===U.id;return l.jsxs("button",{onClick:()=>C(U),className:`nav-link ${te?"active":""} ${U.isSpecial?"nav-btn-hire":""}`,children:[l.jsx(Z,{size:16}),l.jsx("span",{children:U.label})]},U.id)})}),l.jsxs("div",{className:"navbar-controls",children:[l.jsx("button",{className:"btn-theme-toggle",onClick:P,title:`Switch to ${u==="dark"?"Light":"Dark"} Mode`,"aria-label":"Toggle Theme",children:u==="dark"?l.jsx(Wf,{size:18,className:"theme-icon-sun"}):l.jsx(Af,{size:18,className:"theme-icon-moon"})}),l.jsx("button",{className:"mobile-menu-btn",onClick:()=>ee(!D),"aria-label":"Toggle Menu",children:D?l.jsx(Xn,{size:24}):l.jsx(Df,{size:24})})]})]}),D&&l.jsx("div",{className:"mobile-drawer glass-card",children:Y.map(U=>{const Z=U.icon,te=b===U.id;return l.jsxs("button",{onClick:()=>C(U),className:`mobile-nav-link ${te?"active":""} ${U.isSpecial?"mobile-btn-hire":""}`,children:[l.jsx(Z,{size:18}),l.jsx("span",{children:U.label})]},U.id)})}),l.jsx("style",{children:`
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
      `})]})},Xf=()=>{const{data:b,setCurrentPage:y}=ft(),{personalInfo:u}=b;return l.jsxs("section",{className:"hero-section",children:[l.jsx("div",{className:"hero-glow-1"}),l.jsx("div",{className:"hero-glow-2"}),l.jsxs("div",{className:"container hero-grid",children:[l.jsxs("div",{className:"hero-content",children:[l.jsxs("div",{className:"badge badge-emerald animate-glow",children:[l.jsx("span",{className:"dot-pulse"}),u.statusBadge]}),l.jsxs("h1",{className:"hero-title",children:["Crafting Digital Excellence as a ",l.jsx("br",{}),l.jsx("span",{className:"text-gradient",children:u.title})]}),l.jsx("p",{className:"hero-tagline",children:u.tagline}),l.jsx("p",{className:"hero-bio",children:u.bio}),l.jsxs("div",{className:"hero-actions",children:[l.jsxs("button",{className:"btn btn-primary",onClick:()=>y("hire"),children:[l.jsx(Ar,{size:18}),l.jsx("span",{children:"Hire Me Now"})]}),l.jsxs("button",{className:"btn btn-secondary",onClick:()=>{const P=document.getElementById("projects-section");P&&P.scrollIntoView({behavior:"smooth"})},children:[l.jsx("span",{children:"Explore Projects"}),l.jsx(ru,{size:18})]}),l.jsxs("button",{className:"btn btn-secondary",onClick:()=>y("certificates"),children:[l.jsx(Or,{size:18}),l.jsx("span",{children:"Certificates"})]})]}),l.jsxs("div",{className:"hero-stats-grid",children:[l.jsxs("div",{className:"stat-card glass-card",children:[l.jsx("span",{className:"stat-number text-gradient",children:u.stats.yearsExperience}),l.jsx("span",{className:"stat-label",children:"Years Experience"})]}),l.jsxs("div",{className:"stat-card glass-card",children:[l.jsx("span",{className:"stat-number text-cyan",children:u.stats.completedProjects}),l.jsx("span",{className:"stat-label",children:"Projects Built"})]}),l.jsxs("div",{className:"stat-card glass-card",children:[l.jsx("span",{className:"stat-number text-gradient",children:u.stats.happyClients}),l.jsx("span",{className:"stat-label",children:"Satisfied Clients"})]}),l.jsxs("div",{className:"stat-card glass-card",children:[l.jsx("span",{className:"stat-number text-cyan",children:u.stats.certifications}),l.jsx("span",{className:"stat-label",children:"Certifications"})]})]})]}),l.jsx("div",{className:"hero-visual",children:l.jsxs("div",{className:"avatar-frame",children:[l.jsx("img",{src:u.avatar,alt:u.name,className:"avatar-img"}),l.jsxs("div",{className:"float-badge badge-react glass-card animate-float",children:[l.jsx(xf,{size:18,className:"icon-react"}),l.jsx("span",{children:"Java & Python"})]}),l.jsxs("div",{className:"float-badge badge-figma glass-card animate-float",style:{animationDelay:"1.5s"},children:[l.jsx(Ja,{size:18,className:"icon-figma"}),l.jsx("span",{children:"Team Lead @ LTI"})]}),l.jsxs("div",{className:"float-badge badge-aws glass-card animate-float",style:{animationDelay:"3s"},children:[l.jsx(wf,{size:18,className:"icon-aws"}),l.jsx("span",{children:"IoT & Hardware"})]})]})})]}),l.jsx("style",{children:`
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
      `})]})},Yf=()=>{const{data:b}=ft(),{personalInfo:y,education:u}=b,P=[{icon:$f,title:"Peak Performance",desc:"Crafting optimized, responsive apps with fast page loads and seamless animations."},{icon:Pf,title:"User-Centric Design",desc:"Prioritizing human intuition, accessibility (WCAG), and clean visual hierarchy."},{icon:$i,title:"Clean Architecture",desc:"Building scalable, maintainable modular codebases with strict design patterns."}];return l.jsxs("section",{className:"about-section",id:"about-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"badge badge-glow",children:[l.jsx(lu,{size:14}),l.jsx("span",{children:"About Me"})]}),l.jsx("h2",{className:"section-title",children:"Driven by Innovation, Defined by Quality"})]}),l.jsxs("div",{className:"about-grid",children:[l.jsxs("div",{className:"glass-card about-card",children:[l.jsx("h3",{className:"about-heading",children:"Engineering & Design Journey"}),l.jsx("p",{className:"about-text",children:"I am a Senior Software Engineer and UI/UX Designer dedicated to building seamless digital software. Over the past 6+ years, I've collaborated with fast-growing startups and global enterprises to take complex product visions from initial whiteboard wireframes to production cloud environments."}),l.jsx("p",{className:"about-text",children:"My philosophy centers around combining engineering precision with intuitive design. Whether crafting responsive frontend user interfaces, building backend APIs, or mapping out cloud infrastructure, I aim to create solutions that solve real-world problems."}),l.jsxs("div",{className:"info-chips",children:[l.jsxs("div",{className:"info-chip",children:[l.jsx("span",{className:"chip-label",children:"Based in:"}),l.jsx("span",{className:"chip-value",children:y.location})]}),l.jsxs("div",{className:"info-chip",children:[l.jsx("span",{className:"chip-label",children:"Email:"}),l.jsx("span",{className:"chip-value",children:y.email})]})]}),l.jsx("div",{className:"about-actions",children:l.jsxs("a",{href:`mailto:${y.email}`,className:"btn btn-primary btn-sm",children:[l.jsx(Sf,{size:16}),l.jsx("span",{children:"Get In Touch"})]})})]}),l.jsxs("div",{className:"about-secondary-col",children:[l.jsx("div",{className:"values-list",children:P.map((j,D)=>{const ee=j.icon;return l.jsxs("div",{className:"glass-card value-item",children:[l.jsx("div",{className:"value-icon-box",children:l.jsx(ee,{size:20})}),l.jsxs("div",{children:[l.jsx("h4",{className:"value-title",children:j.title}),l.jsx("p",{className:"value-desc",children:j.desc})]})]},D)})}),u&&u.length>0&&l.jsxs("div",{className:"glass-card edu-card",children:[l.jsxs("div",{className:"edu-header",children:[l.jsx(zf,{size:22,className:"edu-icon"}),l.jsxs("div",{children:[l.jsx("h4",{className:"edu-degree",children:u[0].degree}),l.jsxs("span",{className:"edu-school",children:[u[0].institution," (",u[0].period,")"]})]})]}),l.jsx("p",{className:"edu-details",children:u[0].details})]})]})]})]}),l.jsx("style",{children:`
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
      `})]})},Kf=()=>{const{data:b}=ft(),{skills:y}=b,[u,P]=ie.useState("All"),j=["All","Frontend","Backend","Database & Cloud","UI/UX Design","Tools"],D=u==="All"?y:y.filter(Y=>Y.category.toLowerCase()===u.toLowerCase()),ee=Y=>{switch(Y.toLowerCase()){case"frontend":return kf;case"backend":return Vf;case"database & cloud":return jf;case"ui/ux design":return Of;default:return iu}};return l.jsxs("section",{className:"skills-section",id:"skills-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"badge badge-glow",children:[l.jsx(Ja,{size:14}),l.jsx("span",{children:"Tech Stack & Expertise"})]}),l.jsx("h2",{className:"section-title",children:"Skills & Technologies"})]}),l.jsx("div",{className:"category-tabs",children:j.map(Y=>l.jsx("button",{onClick:()=>P(Y),className:`category-tab ${u===Y?"active":""}`,children:Y},Y))}),l.jsx("div",{className:"skills-grid grid-2",children:D.map((Y,C)=>{const U=ee(Y.category);return l.jsxs("div",{className:"glass-card skill-card",children:[l.jsxs("div",{className:"skill-info",children:[l.jsxs("div",{className:"skill-title-group",children:[l.jsx("div",{className:"skill-icon",children:l.jsx(U,{size:18})}),l.jsx("span",{className:"skill-name",children:Y.name})]}),l.jsxs("span",{className:"skill-level-text",children:[Y.level,"%"]})]}),l.jsx("div",{className:"skill-bar-track",children:l.jsx("div",{className:"skill-bar-fill",style:{width:`${Y.level}%`}})})]},C)})})]}),l.jsx("style",{children:`
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
      `})]})},Gf=()=>{const{data:b,selectedProject:y,setSelectedProject:u}=ft(),{projects:P}=b,[j,D]=ie.useState("All"),ee=["All","AI & Web Apps","Web App","UI/UX Design","Mobile App"],Y=j==="All"?P:P.filter(C=>C.category.toLowerCase().includes(j.toLowerCase()));return l.jsxs("section",{className:"projects-section",id:"projects-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"badge badge-glow",children:[l.jsx(Fr,{size:14}),l.jsx("span",{children:"Featured Portfolio"})]}),l.jsx("h2",{className:"section-title",children:"Selected Works & Case Studies"})]}),l.jsx("div",{className:"project-filters",children:ee.map(C=>l.jsx("button",{onClick:()=>D(C),className:`filter-btn ${j===C?"active":""}`,children:C},C))}),l.jsx("div",{className:"projects-grid grid-3",children:Y.map(C=>l.jsxs("div",{className:"glass-card project-card",onClick:()=>u(C),children:[l.jsxs("div",{className:"project-image-box",children:[l.jsx("img",{src:C.image,alt:C.title,className:"project-img"}),l.jsx("div",{className:"project-overlay",children:l.jsxs("span",{className:"btn-view-details",children:[l.jsx("span",{children:"View Case Details"}),l.jsx(bf,{size:16})]})}),C.featured&&l.jsx("span",{className:"badge-featured",children:"Featured"})]}),l.jsxs("div",{className:"project-body",children:[l.jsx("span",{className:"project-category",children:C.category}),l.jsx("h3",{className:"project-title",children:C.title}),l.jsx("p",{className:"project-desc",children:C.shortDesc}),l.jsxs("div",{className:"project-tags",children:[C.tags.slice(0,4).map((U,Z)=>l.jsx("span",{className:"tag-item",children:U},Z)),C.tags.length>4&&l.jsxs("span",{className:"tag-item",children:["+",C.tags.length-4]})]}),l.jsxs("div",{className:"project-actions",onClick:U=>U.stopPropagation(),children:[C.liveUrl&&l.jsx("a",{href:C.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"link-icon-btn",title:"Live Demo",children:l.jsx(Za,{size:16})}),C.githubUrl&&l.jsx("a",{href:C.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"link-icon-btn",title:"Source Code",children:l.jsx(qi,{size:16})})]})]})]},C.id))})]}),y&&l.jsx("div",{className:"modal-backdrop",onClick:()=>u(null),children:l.jsxs("div",{className:"glass-card modal-content",onClick:C=>C.stopPropagation(),children:[l.jsx("button",{className:"modal-close-btn",onClick:()=>u(null),children:l.jsx(Xn,{size:20})}),l.jsx("img",{src:y.image,alt:y.title,className:"modal-img"}),l.jsxs("div",{className:"modal-body",children:[l.jsx("span",{className:"badge badge-glow",children:y.category}),l.jsx("h3",{className:"modal-title",children:y.title}),l.jsx("p",{className:"modal-desc",children:y.longDesc||y.shortDesc}),l.jsxs("div",{className:"modal-tags",children:[l.jsx("h4",{className:"tags-heading",children:"Technologies Used:"}),l.jsx("div",{className:"tags-flex",children:y.tags.map((C,U)=>l.jsx("span",{className:"modal-tag",children:C},U))})]}),l.jsxs("div",{className:"modal-actions",children:[y.liveUrl&&l.jsxs("a",{href:y.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-sm",children:[l.jsx(Za,{size:16}),l.jsx("span",{children:"Visit Live Site"})]}),y.githubUrl&&l.jsxs("a",{href:y.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[l.jsx(qi,{size:16}),l.jsx("span",{children:"View Repository"})]})]})]})]})}),l.jsx("style",{children:`
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
      `})]})},Zf=()=>{const{data:b}=ft(),{experience:y}=b;return l.jsxs("section",{className:"experience-section",id:"experience-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"badge badge-glow",children:[l.jsx(Fr,{size:14}),l.jsx("span",{children:"Career Path"})]}),l.jsx("h2",{className:"section-title",children:"Work Experience & Timeline"})]}),l.jsx("div",{className:"timeline-container",children:y.map((u,P)=>l.jsxs("div",{className:"timeline-item",children:[l.jsx("div",{className:"timeline-dot"}),l.jsxs("div",{className:"glass-card timeline-card",children:[l.jsxs("div",{className:"timeline-meta",children:[l.jsx("span",{className:"timeline-role",children:u.role}),l.jsxs("span",{className:"timeline-company",children:["@ ",u.company]})]}),l.jsxs("div",{className:"timeline-submeta",children:[l.jsxs("div",{className:"submeta-badge",children:[l.jsx(Xi,{size:13}),l.jsx("span",{children:u.period})]}),l.jsxs("div",{className:"submeta-badge",children:[l.jsx(Lf,{size:13}),l.jsx("span",{children:u.location})]})]}),l.jsx("p",{className:"timeline-desc",children:u.description}),u.achievements&&u.achievements.length>0&&l.jsxs("div",{className:"achievements-box",children:[l.jsx("h4",{className:"achieve-title",children:"Key Highlights:"}),l.jsx("ul",{className:"achieve-list",children:u.achievements.map((j,D)=>l.jsxs("li",{className:"achieve-item",children:[l.jsx(Yi,{size:15,className:"achieve-icon"}),l.jsx("span",{children:j})]},D))})]})]})]},u.id||P))})]}),l.jsx("style",{children:`
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
      `})]})},Jf=()=>{const{data:b,setCurrentPage:y}=ft(),{services:u}=b;return l.jsxs("section",{className:"services-section",id:"services-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"badge badge-glow",children:[l.jsx(au,{size:14}),l.jsx("span",{children:"Services & Packages"})]}),l.jsx("h2",{className:"section-title",children:"Solutions Tailored for Growth"})]}),l.jsx("div",{className:"services-grid grid-3",children:u.map(P=>l.jsxs("div",{className:"glass-card service-card",children:[l.jsxs("div",{className:"service-header",children:[l.jsxs("span",{className:"price-tag",children:["From ",P.startingPrice]}),l.jsx("h3",{className:"service-title",children:P.title}),l.jsx("p",{className:"service-desc",children:P.description})]}),l.jsxs("div",{className:"deliverables-box",children:[l.jsx("span",{className:"deliv-title",children:"Included Deliverables:"}),l.jsx("ul",{className:"deliv-list",children:P.deliverables.map((j,D)=>l.jsxs("li",{className:"deliv-item",children:[l.jsx(Yi,{size:16,className:"deliv-icon"}),l.jsx("span",{children:j})]},D))})]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y("hire"),style:{marginTop:"auto"},children:[l.jsx("span",{children:"Book Service"}),l.jsx(ru,{size:16})]})]},P.id))})]}),l.jsx("style",{children:`
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
      `})]})},ep=()=>{const{data:b}=ft(),{testimonials:y}=b;return l.jsxs("section",{className:"testimonials-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"badge badge-glow",children:[l.jsx(Ff,{size:14}),l.jsx("span",{children:"Client Recommendations"})]}),l.jsx("h2",{className:"section-title",children:"What Leaders Say About Dinesh"})]}),l.jsx("div",{className:"testimonials-grid grid-3",children:y.map(u=>l.jsxs("div",{className:"glass-card testimonial-card",children:[l.jsx("div",{className:"stars-row",children:[...Array(5)].map((P,j)=>l.jsx(Bf,{size:16,className:"star-icon"},j))}),l.jsxs("p",{className:"testimonial-text",children:['"',u.content,'"']}),l.jsxs("div",{className:"client-info",children:[l.jsx("img",{src:u.avatar,alt:u.name,className:"client-avatar"}),l.jsxs("div",{children:[l.jsx("h4",{className:"client-name",children:u.name}),l.jsxs("span",{className:"client-role",children:[u.role,", ",u.company]})]})]})]},u.id))})]}),l.jsx("style",{children:`
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
      `})]})},tp=()=>{const{data:b,setCurrentPage:y}=ft(),{personalInfo:u}=b;return l.jsxs("footer",{className:"footer-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsxs("div",{className:"brand-logo",onClick:()=>{y("home"),window.scrollTo({top:0,behavior:"smooth"})},children:[l.jsx("div",{className:"logo-badge",children:l.jsx(Ja,{size:20})}),l.jsxs("span",{className:"logo-text",children:[u.name.split(" ")[0],l.jsx("span",{className:"text-gradient",children:".dev"})]})]}),l.jsx("p",{className:"footer-bio",children:u.tagline})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-heading",children:"Navigation"}),l.jsxs("div",{className:"footer-links",children:[l.jsx("button",{onClick:()=>{y("home"),window.scrollTo({top:0,behavior:"smooth"})},children:"Home"}),l.jsx("button",{onClick:()=>y("certificates"),children:"Certificates"}),l.jsx("button",{onClick:()=>y("hire"),children:"Hire Me"}),l.jsx("button",{onClick:()=>y("admin"),children:"Admin CMS"})]})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-heading",children:"Connect Socially"}),l.jsxs("div",{className:"social-links-row",children:[u.socials.github&&l.jsx("a",{href:u.socials.github,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"GitHub",children:l.jsx(qi,{size:18})}),u.socials.linkedin&&l.jsx("a",{href:u.socials.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"LinkedIn",children:l.jsx(Tf,{size:18})}),u.socials.twitter&&l.jsx("a",{href:u.socials.twitter,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"Twitter",children:l.jsx(qf,{size:18})}),u.socials.dribbble&&l.jsx("a",{href:u.socials.dribbble,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"Dribbble",children:l.jsx(Cf,{size:18})}),u.socials.figma&&l.jsx("a",{href:u.socials.figma,target:"_blank",rel:"noopener noreferrer",className:"social-link-btn",title:"Figma",children:l.jsx(Ef,{size:18})})]})]})]}),l.jsxs("div",{className:"footer-bottom",children:[l.jsxs("p",{children:["© ",new Date().getFullYear()," ",u.name,". All rights reserved."]}),l.jsxs("button",{className:"admin-footer-link",onClick:()=>y("admin"),children:[l.jsx(Ki,{size:14}),l.jsx("span",{children:"Admin Portal"})]})]})]}),l.jsx("style",{children:`
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
      `})]})},np=()=>{const{data:b}=ft(),{certificates:y}=b,[u,P]=ie.useState(null);return l.jsxs("div",{className:"certificates-page",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"badge badge-emerald",children:[l.jsx($i,{size:14}),l.jsx("span",{children:"Verified Credentials"})]}),l.jsx("h2",{className:"section-title",children:"Professional Certifications"}),l.jsx("p",{className:"page-intro",children:"Validated industry certifications from leading cloud, web engineering, and design organizations."})]}),l.jsx("div",{className:"certificates-grid grid-2",children:y.map(j=>l.jsxs("div",{className:"glass-card cert-card",onClick:()=>P(j),children:[l.jsxs("div",{className:"cert-header",children:[l.jsx("div",{className:"cert-icon-box",children:l.jsx(Or,{size:24,className:"cert-award-icon"})}),l.jsxs("div",{className:"cert-meta",children:[l.jsx("span",{className:"cert-issuer",children:j.issuer}),l.jsx("h3",{className:"cert-title",children:j.title})]})]}),l.jsxs("div",{className:"cert-details",children:[l.jsxs("div",{className:"cert-detail-item",children:[l.jsx(Xi,{size:14}),l.jsxs("span",{children:["Issued: ",j.date]})]}),l.jsxs("div",{className:"cert-detail-item",children:[l.jsx(_f,{size:14}),l.jsxs("span",{children:["ID: ",j.credentialId]})]})]}),l.jsx("div",{className:"cert-skills",children:j.skills.map((D,ee)=>l.jsx("span",{className:"cert-skill-tag",children:D},ee))}),l.jsxs("div",{className:"cert-actions",onClick:D=>D.stopPropagation(),children:[j.verifyUrl&&l.jsxs("a",{href:j.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[l.jsx(Za,{size:14}),l.jsx("span",{children:"Verify Credential"})]}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(j),children:l.jsx("span",{children:"View Details"})})]})]},j.id))})]}),u&&l.jsx("div",{className:"modal-backdrop",onClick:()=>P(null),children:l.jsxs("div",{className:"glass-card modal-content",onClick:j=>j.stopPropagation(),children:[l.jsx("button",{className:"modal-close-btn",onClick:()=>P(null),children:l.jsx(Xn,{size:20})}),u.badgeImage&&l.jsx("img",{src:u.badgeImage,alt:u.title,className:"modal-cert-img"}),l.jsxs("div",{className:"modal-body",children:[l.jsxs("div",{className:"badge badge-emerald",children:[l.jsx($i,{size:14}),l.jsx("span",{children:"Officially Verified"})]}),l.jsx("h3",{className:"modal-title",children:u.title}),l.jsxs("p",{className:"cert-issuer-large",children:["Issued by ",l.jsx("strong",{children:u.issuer})]}),l.jsxs("div",{className:"modal-info-grid",children:[l.jsxs("div",{className:"info-box",children:[l.jsx("span",{className:"info-label",children:"Issue Date"}),l.jsx("span",{className:"info-val",children:u.date})]}),l.jsxs("div",{className:"info-box",children:[l.jsx("span",{className:"info-label",children:"Credential ID"}),l.jsx("span",{className:"info-val",children:u.credentialId})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"tags-heading",children:"Mastered Competencies:"}),l.jsx("div",{className:"tags-flex",children:u.skills.map((j,D)=>l.jsx("span",{className:"modal-tag",children:j},D))})]}),u.verifyUrl&&l.jsxs("a",{href:u.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-sm",style:{marginTop:"1rem"},children:[l.jsx(Za,{size:16}),l.jsx("span",{children:"Open Official Verification Page"})]})]})]})}),l.jsx("style",{children:`
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
      `})]})};var Gi={};(function b(y,u,P,j){var D=!!(y.Worker&&y.Blob&&y.Promise&&y.OffscreenCanvas&&y.OffscreenCanvasRenderingContext2D&&y.HTMLCanvasElement&&y.HTMLCanvasElement.prototype.transferControlToOffscreen&&y.URL&&y.URL.createObjectURL),ee=typeof Path2D=="function"&&typeof DOMMatrix=="function",Y=(function(){if(!y.OffscreenCanvas)return!1;try{var f=new OffscreenCanvas(1,1),s=f.getContext("2d");s.fillRect(0,0,1,1);var h=f.transferToImageBitmap();s.createPattern(h,"no-repeat")}catch{return!1}return!0})();function C(){}function U(f){var s=u.exports.Promise,h=s!==void 0?s:y.Promise;return typeof h=="function"?new h(f):(f(C,C),null)}var Z=(function(f,s){return{transform:function(h){if(f)return h;if(s.has(h))return s.get(h);var S=new OffscreenCanvas(h.width,h.height),E=S.getContext("2d");return E.drawImage(h,0,0),s.set(h,S),S},clear:function(){s.clear()}}})(Y,new Map),te=(function(){var f=Math.floor(16.666666666666668),s,h,S={},E=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(s=function(I){var M=Math.random();return S[M]=requestAnimationFrame(function _(R){E===R||E+f-1<R?(E=R,delete S[M],I()):S[M]=requestAnimationFrame(_)}),M},h=function(I){S[I]&&cancelAnimationFrame(S[I])}):(s=function(I){return setTimeout(I,f)},h=function(I){return clearTimeout(I)}),{frame:s,cancel:h}})(),ne=(function(){var f,s,h={};function S(E){function I(M,_){E.postMessage({options:M||{},callback:_})}E.init=function(M){var _=M.transferControlToOffscreen();E.postMessage({canvas:_},[_])},E.fire=function(M,_,R){if(s)return I(M,null),s;var B=Math.random().toString(36).slice(2);return s=U(function(ue){function de(Se){Se.data.callback===B&&(delete h[B],E.removeEventListener("message",de),s=null,Z.clear(),R(),ue())}E.addEventListener("message",de),I(M,B),h[B]=de.bind(null,{data:{callback:B}})}),s},E.reset=function(){E.postMessage({reset:!0});for(var M in h)h[M](),delete h[M]}}return function(){if(f)return f;if(!P&&D){var E=["var CONFETTI, SIZE = {}, module = {};","("+b.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{f=new Worker(URL.createObjectURL(new Blob([E])))}catch(I){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",I),null}S(f)}return f}})(),Pe={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function pe(f,s){return s?s(f):f}function ae(f){return f!=null}function W(f,s,h){return pe(f&&ae(f[s])?f[s]:Pe[s],h)}function Fe(f){return f<0?0:Math.floor(f)}function se(f,s){return Math.floor(Math.random()*(s-f))+f}function me(f){return parseInt(f,16)}function J(f){return f.map(_e)}function _e(f){var s=String(f).replace(/[^0-9a-f]/gi,"");return s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:me(s.substring(0,2)),g:me(s.substring(2,4)),b:me(s.substring(4,6))}}function ce(f){var s=W(f,"origin",Object);return s.x=W(s,"x",Number),s.y=W(s,"y",Number),s}function xe(f){f.width=document.documentElement.clientWidth,f.height=document.documentElement.clientHeight}function F(f){var s=f.getBoundingClientRect();f.width=s.width,f.height=s.height}function X(f){var s=document.createElement("canvas");return s.style.position="fixed",s.style.top="0px",s.style.left="0px",s.style.pointerEvents="none",s.style.zIndex=f,s}function V(f,s,h,S,E,I,M,_,R){f.save(),f.translate(s,h),f.rotate(I),f.scale(S,E),f.arc(0,0,1,M,_,R),f.restore()}function ge(f){var s=f.angle*(Math.PI/180),h=f.spread*(Math.PI/180);return{x:f.x,y:f.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:f.startVelocity*.5+Math.random()*f.startVelocity,angle2D:-s+(.5*h-Math.random()*h),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:f.color,shape:f.shape,tick:0,totalTicks:f.ticks,decay:f.decay,drift:f.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:f.gravity*3,ovalScalar:.6,scalar:f.scalar,flat:f.flat}}function et(f,s){s.x+=Math.cos(s.angle2D)*s.velocity+s.drift,s.y+=Math.sin(s.angle2D)*s.velocity+s.gravity,s.velocity*=s.decay,s.flat?(s.wobble=0,s.wobbleX=s.x+10*s.scalar,s.wobbleY=s.y+10*s.scalar,s.tiltSin=0,s.tiltCos=0,s.random=1):(s.wobble+=s.wobbleSpeed,s.wobbleX=s.x+10*s.scalar*Math.cos(s.wobble),s.wobbleY=s.y+10*s.scalar*Math.sin(s.wobble),s.tiltAngle+=.1,s.tiltSin=Math.sin(s.tiltAngle),s.tiltCos=Math.cos(s.tiltAngle),s.random=Math.random()+2);var h=s.tick++/s.totalTicks,S=s.x+s.random*s.tiltCos,E=s.y+s.random*s.tiltSin,I=s.wobbleX+s.random*s.tiltCos,M=s.wobbleY+s.random*s.tiltSin;if(f.fillStyle="rgba("+s.color.r+", "+s.color.g+", "+s.color.b+", "+(1-h)+")",f.beginPath(),ee&&s.shape.type==="path"&&typeof s.shape.path=="string"&&Array.isArray(s.shape.matrix))f.fill(be(s.shape.path,s.shape.matrix,s.x,s.y,Math.abs(I-S)*.1,Math.abs(M-E)*.1,Math.PI/10*s.wobble));else if(s.shape.type==="bitmap"){var _=Math.PI/10*s.wobble,R=Math.abs(I-S)*.1,B=Math.abs(M-E)*.1,ue=s.shape.bitmap.width*s.scalar,de=s.shape.bitmap.height*s.scalar,Se=new DOMMatrix([Math.cos(_)*R,Math.sin(_)*R,-Math.sin(_)*B,Math.cos(_)*B,s.x,s.y]);Se.multiplySelf(new DOMMatrix(s.shape.matrix));var Le=f.createPattern(Z.transform(s.shape.bitmap),"no-repeat");Le.setTransform(Se),f.globalAlpha=1-h,f.fillStyle=Le,f.fillRect(s.x-ue/2,s.y-de/2,ue,de),f.globalAlpha=1}else if(s.shape==="circle")f.ellipse?f.ellipse(s.x,s.y,Math.abs(I-S)*s.ovalScalar,Math.abs(M-E)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI):V(f,s.x,s.y,Math.abs(I-S)*s.ovalScalar,Math.abs(M-E)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI);else if(s.shape==="star")for(var le=Math.PI/2*3,Be=4*s.scalar,tt=8*s.scalar,Ge=s.x,pt=s.y,xt=5,$e=Math.PI/xt;xt--;)Ge=s.x+Math.cos(le)*tt,pt=s.y+Math.sin(le)*tt,f.lineTo(Ge,pt),le+=$e,Ge=s.x+Math.cos(le)*Be,pt=s.y+Math.sin(le)*Be,f.lineTo(Ge,pt),le+=$e;else f.moveTo(Math.floor(s.x),Math.floor(s.y)),f.lineTo(Math.floor(s.wobbleX),Math.floor(E)),f.lineTo(Math.floor(I),Math.floor(M)),f.lineTo(Math.floor(S),Math.floor(s.wobbleY));return f.closePath(),f.fill(),s.tick<s.totalTicks}function Te(f,s,h,S,E){var I=s.slice(),M=f.getContext("2d"),_,R,B=U(function(ue){function de(){_=R=null,M.clearRect(0,0,S.width,S.height),Z.clear(),E(),ue()}function Se(){P&&!(S.width===j.width&&S.height===j.height)&&(S.width=f.width=j.width,S.height=f.height=j.height),!S.width&&!S.height&&(h(f),S.width=f.width,S.height=f.height),M.clearRect(0,0,S.width,S.height),I=I.filter(function(Le){return et(M,Le)}),I.length?_=te.frame(Se):de()}_=te.frame(Se),R=de});return{addFettis:function(ue){return I=I.concat(ue),B},canvas:f,promise:B,reset:function(){_&&te.cancel(_),R&&R()}}}function je(f,s){var h=!f,S=!!W(s||{},"resize"),E=!1,I=W(s,"disableForReducedMotion",Boolean),M=D&&!!W(s||{},"useWorker"),_=M?ne():null,R=h?xe:F,B=f&&_?!!f.__confetti_initialized:!1,ue=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,de;function Se(le,Be,tt){for(var Ge=W(le,"particleCount",Fe),pt=W(le,"angle",Number),xt=W(le,"spread",Number),$e=W(le,"startVelocity",Number),Vt=W(le,"decay",Number),Yn=W(le,"gravity",Number),Ur=W(le,"drift",Number),Kn=W(le,"colors",J),Hr=W(le,"ticks",Number),Gn=W(le,"shapes"),Zn=W(le,"scalar"),jn=!!W(le,"flat"),Jn=ce(le),Bt=Ge,Tt=[],el=f.width*Jn.x,Vr=f.height*Jn.y;Bt--;)Tt.push(ge({x:el,y:Vr,angle:pt,spread:xt,startVelocity:$e,color:Kn[Bt%Kn.length],shape:Gn[se(0,Gn.length)],ticks:Hr,decay:Vt,gravity:Yn,drift:Ur,scalar:Zn,flat:jn}));return de?de.addFettis(Tt):(de=Te(f,Tt,R,Be,tt),de.promise)}function Le(le){var Be=I||W(le,"disableForReducedMotion",Boolean),tt=W(le,"zIndex",Number);if(Be&&ue)return U(function($e){$e()});h&&de?f=de.canvas:h&&!f&&(f=X(tt),document.body.appendChild(f)),S&&!B&&R(f);var Ge={width:f.width,height:f.height};_&&!B&&_.init(f),B=!0,_&&(f.__confetti_initialized=!0);function pt(){if(_){var $e={getBoundingClientRect:function(){if(!h)return f.getBoundingClientRect()}};R($e),_.postMessage({resize:{width:$e.width,height:$e.height}});return}Ge.width=Ge.height=null}function xt(){de=null,S&&(E=!1,y.removeEventListener("resize",pt)),h&&f&&(document.body.contains(f)&&document.body.removeChild(f),f=null,B=!1)}return S&&!E&&(E=!0,y.addEventListener("resize",pt,!1)),_?_.fire(le,Ge,xt):Se(le,Ge,xt)}return Le.reset=function(){_&&_.reset(),de&&de.reset()},Le}var Re;function ve(){return Re||(Re=je(null,{useWorker:!0,resize:!0})),Re}function be(f,s,h,S,E,I,M){var _=new Path2D(f),R=new Path2D;R.addPath(_,new DOMMatrix(s));var B=new Path2D;return B.addPath(R,new DOMMatrix([Math.cos(M)*E,Math.sin(M)*E,-Math.sin(M)*I,Math.cos(M)*I,h,S])),B}function z(f){if(!ee)throw new Error("path confetti are not supported in this browser");var s,h;typeof f=="string"?s=f:(s=f.path,h=f.matrix);var S=new Path2D(s),E=document.createElement("canvas"),I=E.getContext("2d");if(!h){for(var M=1e3,_=M,R=M,B=0,ue=0,de,Se,Le=0;Le<M;Le+=2)for(var le=0;le<M;le+=2)I.isPointInPath(S,Le,le,"nonzero")&&(_=Math.min(_,Le),R=Math.min(R,le),B=Math.max(B,Le),ue=Math.max(ue,le));de=B-_,Se=ue-R;var Be=10,tt=Math.min(Be/de,Be/Se);h=[tt,0,0,tt,-Math.round(de/2+_)*tt,-Math.round(Se/2+R)*tt]}return{type:"path",path:s,matrix:h}}function q(f){var s,h=1,S="#000000",E='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof f=="string"?s=f:(s=f.text,h="scalar"in f?f.scalar:h,E="fontFamily"in f?f.fontFamily:E,S="color"in f?f.color:S);var I=10*h,M=""+I+"px "+E,_=new OffscreenCanvas(I,I),R=_.getContext("2d");R.font=M;var B=R.measureText(s),ue=Math.ceil(B.actualBoundingBoxRight+B.actualBoundingBoxLeft),de=Math.ceil(B.actualBoundingBoxAscent+B.actualBoundingBoxDescent),Se=2,Le=B.actualBoundingBoxLeft+Se,le=B.actualBoundingBoxAscent+Se;ue+=Se+Se,de+=Se+Se,_=new OffscreenCanvas(ue,de),R=_.getContext("2d"),R.font=M,R.fillStyle=S,R.fillText(s,Le,le);var Be=1/h;return{type:"bitmap",bitmap:_.transferToImageBitmap(),matrix:[Be,0,0,Be,-ue*Be/2,-de*Be/2]}}u.exports=function(){return ve().apply(this,arguments)},u.exports.reset=function(){ve().reset()},u.exports.create=je,u.exports.shapeFromPath=z,u.exports.shapeFromText=q})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Gi,!1);const rp=Gi.exports;Gi.exports.create;const ap=()=>{const{addInquiry:b,data:y}=ft(),[u,P]=ie.useState("Full-Stack Web App"),[j,D]=ie.useState("$3,000 - $5,000"),[ee,Y]=ie.useState("1 Month"),[C,U]=ie.useState(""),[Z,te]=ie.useState(""),[ne,Pe]=ie.useState(""),[pe,ae]=ie.useState(!1),W=["Full-Stack Web App","UI/UX Product Design","Mobile Application","Code Audit & Optimization","Hourly Consulting"],Fe=["$1,000 - $3,000","$3,000 - $5,000","$5,000 - $10,000","$10,000+"],se=["Urgent (< 2 weeks)","1 Month","2 - 3 Months","Flexible / Ongoing"],me=async J=>{if(J.preventDefault(),!(!C||!Z||!ne)){b({clientName:C,clientEmail:Z,projectType:u,budget:j,timeline:ee,message:ne});try{await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:"0289a05b-8012-4217-91a5-8664b4ec3c2d",name:C,email:Z,subject:`[Portfolio Hiring Request] ${u} from ${C}`,message:`Client Name: ${C}
Client Email: ${Z}
Project Type: ${u}
Budget: ${j}
Timeline: ${ee}

Client Message:
${ne}`})})}catch{console.log("Email dispatch completed.")}ae(!0);try{rp({particleCount:100,spread:70,origin:{y:.6}})}catch{}}};return l.jsxs("div",{className:"hiring-page",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"badge badge-glow",children:[l.jsx(Ar,{size:14}),l.jsx("span",{children:"Hire Dinesh"})]}),l.jsx("h2",{className:"section-title",children:"Let's Build Something Extraordinary Together"}),l.jsx("p",{className:"page-intro",children:"Have a project in mind, need a Team Lead or software engineer? Send a project inquiry below."})]}),pe?l.jsxs("div",{className:"glass-card success-banner",children:[l.jsx("div",{className:"success-icon",children:l.jsx(Yi,{size:48})}),l.jsx("h3",{className:"success-title",children:"Inquiry Received Successfully!"}),l.jsxs("p",{className:"success-desc",children:["Thank you, ",l.jsx("strong",{children:C}),"! Your project proposal has been logged in the Admin Portal and sent to ",l.jsx("strong",{children:"dineshelumalai2006@gmail.com"}),". Dinesh will review your request and reply to ",l.jsx("strong",{children:Z})," within 24 hours."]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:[l.jsxs("a",{href:`mailto:dineshelumalai2006@gmail.com?subject=[Hiring Proposal] ${u} from ${C}&body=Hi Dinesh,%0D%0A%0D%0AI submitted a proposal on your website:%0D%0A- Project Type: ${u}%0D%0A- Budget: ${j}%0D%0A- Timeline: ${ee}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(ne)}`,className:"btn btn-secondary btn-sm",children:[l.jsx(Ar,{size:16}),l.jsx("span",{children:"Open Direct Email Client"})]}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>{ae(!1),U(""),te(""),Pe("")},children:"Submit Another Request"})]})]}):l.jsxs("div",{className:"hiring-grid",children:[l.jsxs("form",{className:"glass-card hiring-form",onSubmit:me,children:[l.jsxs("div",{className:"form-step",children:[l.jsxs("label",{className:"step-label",children:[l.jsx(Fr,{size:16}),l.jsx("span",{children:"1. What type of project are you planning?"})]}),l.jsx("div",{className:"chips-grid",children:W.map(J=>l.jsx("button",{type:"button",onClick:()=>P(J),className:`chip-btn ${u===J?"selected":""}`,children:J},J))})]}),l.jsxs("div",{className:"form-step",children:[l.jsxs("label",{className:"step-label",children:[l.jsx(Nf,{size:16}),l.jsx("span",{children:"2. Estimated Project Budget (USD)"})]}),l.jsx("div",{className:"chips-grid",children:Fe.map(J=>l.jsx("button",{type:"button",onClick:()=>D(J),className:`chip-btn ${j===J?"selected":""}`,children:J},J))})]}),l.jsxs("div",{className:"form-step",children:[l.jsxs("label",{className:"step-label",children:[l.jsx(Xi,{size:16}),l.jsx("span",{children:"3. Expected Timeline"})]}),l.jsx("div",{className:"chips-grid",children:se.map(J=>l.jsx("button",{type:"button",onClick:()=>Y(J),className:`chip-btn ${ee===J?"selected":""}`,children:J},J))})]}),l.jsxs("div",{className:"form-step",children:[l.jsxs("label",{className:"step-label",children:[l.jsx(Rf,{size:16}),l.jsx("span",{children:"4. Your Information & Project Overview"})]}),l.jsxs("div",{className:"grid-2",style:{marginBottom:"1rem"},children:[l.jsxs("div",{className:"form-group",style:{margin:0},children:[l.jsx("label",{className:"form-label",children:"Your Name *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Alex Morgan",value:C,onChange:J=>U(J.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",style:{margin:0},children:[l.jsx("label",{className:"form-label",children:"Email Address *"}),l.jsx("input",{type:"email",required:!0,placeholder:"alex@company.com",value:Z,onChange:J=>te(J.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Project Details & Requirements *"}),l.jsx("textarea",{rows:4,required:!0,placeholder:"Tell me about your goals, features needed, timeline, or existing codebase...",value:ne,onChange:J=>Pe(J.target.value),className:"form-textarea"})]})]}),l.jsxs("button",{type:"submit",className:"btn btn-primary btn-submit",children:[l.jsx(Ar,{size:18}),l.jsx("span",{children:"Send Hiring Proposal"})]})]}),l.jsxs("div",{className:"hiring-sidebar",children:[l.jsxs("div",{className:"glass-card side-info-card",children:[l.jsx("h4",{className:"side-title",children:"Direct Contact"}),l.jsxs("div",{className:"side-detail-item",children:[l.jsx("span",{className:"side-label",children:"Email"}),l.jsx("span",{className:"side-val",children:y.personalInfo.email})]}),l.jsxs("div",{className:"side-detail-item",children:[l.jsx("span",{className:"side-label",children:"Phone"}),l.jsx("span",{className:"side-val",children:y.personalInfo.phone})]}),l.jsxs("div",{className:"side-detail-item",children:[l.jsx("span",{className:"side-label",children:"Response Time"}),l.jsx("span",{className:"side-val",children:"Within 24 Hours"})]}),l.jsxs("div",{className:"side-detail-item",children:[l.jsx("span",{className:"side-label",children:"Availability"}),l.jsx("span",{className:"badge badge-emerald",children:y.personalInfo.availability})]})]}),l.jsxs("div",{className:"glass-card side-info-card",children:[l.jsx("h4",{className:"side-title",children:"Why Work With Dinesh?"}),l.jsxs("ul",{className:"perks-list",children:[l.jsx("li",{children:"⚡ End-to-end Ownership from Figma to Deployment"}),l.jsx("li",{children:"🛡️ Strict Code Quality & Performance Benchmarks"}),l.jsx("li",{children:"💬 Daily Async Updates & Transparent Communication"})]})]})]})]})]}),l.jsx("style",{children:`
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
      `})]})},lp=()=>{const{data:b,updatePersonalInfo:y,addProject:u,deleteProject:P,addCertificate:j,deleteCertificate:D,addSkill:ee,deleteSkill:Y,deleteInquiry:C,resetToDefault:U}=ft(),[Z,te]=ie.useState(!0),[ne,Pe]=ie.useState(""),[pe,ae]=ie.useState("bio"),[W,Fe]=ie.useState(!1),[se,me]=ie.useState(b.personalInfo),[J,_e]=ie.useState(!1),[ce,xe]=ie.useState({title:"",shortDesc:"",longDesc:"",category:"Web App",tags:"React, Node.js",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",liveUrl:"",githubUrl:"",featured:!1}),[F,X]=ie.useState(!1),[V,ge]=ie.useState({title:"",issuer:"",date:"",credentialId:"",verifyUrl:"",badgeImage:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=300",skills:"Cloud Architecture, React"}),[et,Te]=ie.useState(!1),[je,Re]=ie.useState({name:"",category:"Frontend",level:85}),ve=()=>{Fe(!0),setTimeout(()=>Fe(!1),3e3)},be=s=>{s.preventDefault(),y(se),ve()},z=s=>{s.preventDefault(),ce.title&&(u(ce),_e(!1),xe({title:"",shortDesc:"",longDesc:"",category:"Web App",tags:"React, Node.js",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",liveUrl:"",githubUrl:"",featured:!1}),ve())},q=s=>{s.preventDefault(),V.title&&(j(V),X(!1),ge({title:"",issuer:"",date:"",credentialId:"",verifyUrl:"",badgeImage:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=300",skills:"Cloud Architecture, React"}),ve())},f=s=>{s.preventDefault(),je.name&&(ee(je),Te(!1),Re({name:"",category:"Frontend",level:85}),ve())};return Z?l.jsxs("div",{className:"admin-page",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"admin-header",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"badge badge-glow",children:[l.jsx(Ki,{size:14}),l.jsx("span",{children:"Admin Management Dashboard"})]}),l.jsx("h2",{className:"section-title",children:"Portfolio CMS & Data Control"})]}),l.jsxs("div",{className:"admin-header-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.confirm("Reset portfolio data to original default state?")&&(U(),me(b.personalInfo),ve())},children:[l.jsx(Uf,{size:14}),l.jsx("span",{children:"Reset Default Data"})]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>te(!1),children:[l.jsx(Jc,{size:14}),l.jsx("span",{children:"Lock CMS"})]})]})]}),W&&l.jsxs("div",{className:"save-toast",children:[l.jsx(yf,{size:18}),l.jsx("span",{children:"Portfolio changes saved & updated live!"})]}),l.jsxs("div",{className:"admin-tabs",children:[l.jsxs("button",{className:`admin-tab ${pe==="bio"?"active":""}`,onClick:()=>ae("bio"),children:[l.jsx(lu,{size:16}),l.jsx("span",{children:"Bio & Profile"})]}),l.jsxs("button",{className:`admin-tab ${pe==="projects"?"active":""}`,onClick:()=>ae("projects"),children:[l.jsx(Fr,{size:16}),l.jsxs("span",{children:["Projects (",b.projects.length,")"]})]}),l.jsxs("button",{className:`admin-tab ${pe==="certs"?"active":""}`,onClick:()=>ae("certs"),children:[l.jsx(Or,{size:16}),l.jsxs("span",{children:["Certificates (",b.certificates.length,")"]})]}),l.jsxs("button",{className:`admin-tab ${pe==="skills"?"active":""}`,onClick:()=>ae("skills"),children:[l.jsx(iu,{size:16}),l.jsxs("span",{children:["Skills (",b.skills.length,")"]})]}),l.jsxs("button",{className:`admin-tab ${pe==="inquiries"?"active":""}`,onClick:()=>ae("inquiries"),children:[l.jsx(If,{size:16}),l.jsxs("span",{children:["Hiring Inquiries (",(b.inquiries||[]).length,")"]})]})]}),pe==="bio"&&l.jsxs("form",{className:"glass-card admin-card",onSubmit:be,children:[l.jsx("h3",{className:"admin-sub-title",children:"Personal Profile Details"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Full Name"}),l.jsx("input",{type:"text",value:se.name,onChange:s=>me({...se,name:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Professional Title"}),l.jsx("input",{type:"text",value:se.title,onChange:s=>me({...se,title:s.target.value}),className:"form-input"})]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Status Badge (Hero Pill)"}),l.jsx("input",{type:"text",value:se.statusBadge,onChange:s=>me({...se,statusBadge:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Location"}),l.jsx("input",{type:"text",value:se.location,onChange:s=>me({...se,location:s.target.value}),className:"form-input"})]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Email Address"}),l.jsx("input",{type:"email",value:se.email,onChange:s=>me({...se,email:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Avatar Image URL"}),l.jsx("input",{type:"text",value:se.avatar,onChange:s=>me({...se,avatar:s.target.value}),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Hero Tagline"}),l.jsx("input",{type:"text",value:se.tagline,onChange:s=>me({...se,tagline:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Biography Overview"}),l.jsx("textarea",{rows:4,value:se.bio,onChange:s=>me({...se,bio:s.target.value}),className:"form-textarea"})]}),l.jsxs("button",{type:"submit",className:"btn btn-primary",style:{alignSelf:"flex-start"},children:[l.jsx(Hf,{size:18}),l.jsx("span",{children:"Save Bio Updates"})]})]}),pe==="projects"&&l.jsxs("div",{className:"admin-section",children:[l.jsxs("div",{className:"admin-action-bar",children:[l.jsx("h3",{children:"Manage Portfolio Projects"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>_e(!0),children:[l.jsx(Wi,{size:16}),l.jsx("span",{children:"Add New Project"})]})]}),l.jsx("div",{className:"admin-list",children:b.projects.map(s=>l.jsxs("div",{className:"glass-card list-item",children:[l.jsx("img",{src:s.image,alt:s.title,className:"item-thumb"}),l.jsxs("div",{className:"item-info",children:[l.jsx("h4",{className:"item-name",children:s.title}),l.jsxs("span",{className:"item-meta",children:[s.category," • ",s.tags.join(", ")]})]}),l.jsx("button",{className:"btn-delete",onClick:()=>{P(s.id),ve()},title:"Delete Project",children:l.jsx(Ga,{size:18})})]},s.id))})]}),pe==="certs"&&l.jsxs("div",{className:"admin-section",children:[l.jsxs("div",{className:"admin-action-bar",children:[l.jsx("h3",{children:"Manage Certifications"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>X(!0),children:[l.jsx(Wi,{size:16}),l.jsx("span",{children:"Add Certificate"})]})]}),l.jsx("div",{className:"admin-list",children:b.certificates.map(s=>l.jsxs("div",{className:"glass-card list-item",children:[l.jsx("div",{className:"cert-badge-placeholder",children:l.jsx(Or,{size:20})}),l.jsxs("div",{className:"item-info",children:[l.jsx("h4",{className:"item-name",children:s.title}),l.jsxs("span",{className:"item-meta",children:[s.issuer," (",s.date,") • ID: ",s.credentialId]})]}),l.jsx("button",{className:"btn-delete",onClick:()=>{D(s.id),ve()},title:"Delete Certificate",children:l.jsx(Ga,{size:18})})]},s.id))})]}),pe==="skills"&&l.jsxs("div",{className:"admin-section",children:[l.jsxs("div",{className:"admin-action-bar",children:[l.jsx("h3",{children:"Manage Skills & Competencies"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>Te(!0),children:[l.jsx(Wi,{size:16}),l.jsx("span",{children:"Add Skill"})]})]}),l.jsx("div",{className:"admin-list",children:b.skills.map((s,h)=>l.jsxs("div",{className:"glass-card list-item",children:[l.jsxs("div",{className:"item-info",children:[l.jsx("h4",{className:"item-name",children:s.name}),l.jsxs("span",{className:"item-meta",children:[s.category," • ",s.level,"% Proficiency"]})]}),l.jsx("button",{className:"btn-delete",onClick:()=>{Y(h),ve()},title:"Delete Skill",children:l.jsx(Ga,{size:18})})]},h))})]}),pe==="inquiries"&&l.jsxs("div",{className:"admin-section",children:[l.jsx("h3",{children:"Submitted Client Hiring Proposals"}),!b.inquiries||b.inquiries.length===0?l.jsx("p",{className:"empty-text",children:"No hiring proposals received yet."}):l.jsx("div",{className:"inquiry-list",children:b.inquiries.map(s=>l.jsxs("div",{className:"glass-card inquiry-card",children:[l.jsxs("div",{className:"inquiry-header",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"inq-client",children:s.clientName}),l.jsx("a",{href:`mailto:${s.clientEmail}`,className:"inq-email",children:s.clientEmail})]}),l.jsx("button",{className:"btn-delete",onClick:()=>C(s.id),children:l.jsx(Ga,{size:18})})]}),l.jsxs("div",{className:"inq-pills",children:[l.jsx("span",{className:"badge badge-glow",children:s.projectType}),l.jsx("span",{className:"badge badge-emerald",children:s.budget}),l.jsx("span",{className:"badge badge-amber",children:s.timeline})]}),l.jsx("p",{className:"inq-msg",children:s.message}),l.jsxs("span",{className:"inq-date",children:["Submitted: ",new Date(s.submittedAt).toLocaleString()]})]},s.id))})]})]}),J&&l.jsx("div",{className:"modal-backdrop",onClick:()=>_e(!1),children:l.jsxs("div",{className:"glass-card modal-content",onClick:s=>s.stopPropagation(),children:[l.jsx("button",{className:"modal-close-btn",onClick:()=>_e(!1),children:l.jsx(Xn,{size:20})}),l.jsxs("form",{className:"modal-body",onSubmit:z,children:[l.jsx("h3",{children:"Add New Portfolio Project"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Project Title *"}),l.jsx("input",{type:"text",required:!0,value:ce.title,onChange:s=>xe({...ce,title:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Category"}),l.jsxs("select",{value:ce.category,onChange:s=>xe({...ce,category:s.target.value}),className:"form-select",children:[l.jsx("option",{value:"AI & Web Apps",children:"AI & Web Apps"}),l.jsx("option",{value:"Web App",children:"Web App"}),l.jsx("option",{value:"UI/UX Design",children:"UI/UX Design"}),l.jsx("option",{value:"Mobile App",children:"Mobile App"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tags (comma separated)"}),l.jsx("input",{type:"text",value:ce.tags,onChange:s=>xe({...ce,tags:s.target.value}),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Image URL"}),l.jsx("input",{type:"text",value:ce.image,onChange:s=>xe({...ce,image:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Short Summary"}),l.jsx("input",{type:"text",value:ce.shortDesc,onChange:s=>xe({...ce,shortDesc:s.target.value}),className:"form-input"})]}),l.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Project"})]})]})}),F&&l.jsx("div",{className:"modal-backdrop",onClick:()=>X(!1),children:l.jsxs("div",{className:"glass-card modal-content",onClick:s=>s.stopPropagation(),children:[l.jsx("button",{className:"modal-close-btn",onClick:()=>X(!1),children:l.jsx(Xn,{size:20})}),l.jsxs("form",{className:"modal-body",onSubmit:q,children:[l.jsx("h3",{children:"Add New Certificate"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Certificate Title *"}),l.jsx("input",{type:"text",required:!0,value:V.title,onChange:s=>ge({...V,title:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Issuing Organization *"}),l.jsx("input",{type:"text",required:!0,value:V.issuer,onChange:s=>ge({...V,issuer:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Issue Date"}),l.jsx("input",{type:"text",value:V.date,onChange:s=>ge({...V,date:s.target.value}),className:"form-input"})]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Credential ID"}),l.jsx("input",{type:"text",value:V.credentialId,onChange:s=>ge({...V,credentialId:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Verification URL"}),l.jsx("input",{type:"text",value:V.verifyUrl,onChange:s=>ge({...V,verifyUrl:s.target.value}),className:"form-input"})]})]}),l.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Certificate"})]})]})}),et&&l.jsx("div",{className:"modal-backdrop",onClick:()=>Te(!1),children:l.jsxs("div",{className:"glass-card modal-content",onClick:s=>s.stopPropagation(),children:[l.jsx("button",{className:"modal-close-btn",onClick:()=>Te(!1),children:l.jsx(Xn,{size:20})}),l.jsxs("form",{className:"modal-body",onSubmit:f,children:[l.jsx("h3",{children:"Add Skill"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Skill Name *"}),l.jsx("input",{type:"text",required:!0,value:je.name,onChange:s=>Re({...je,name:s.target.value}),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Category"}),l.jsxs("select",{value:je.category,onChange:s=>Re({...je,category:s.target.value}),className:"form-select",children:[l.jsx("option",{value:"Frontend",children:"Frontend"}),l.jsx("option",{value:"Backend",children:"Backend"}),l.jsx("option",{value:"Database & Cloud",children:"Database & Cloud"}),l.jsx("option",{value:"UI/UX Design",children:"UI/UX Design"}),l.jsx("option",{value:"Tools",children:"Tools"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{className:"form-label",children:["Proficiency Level (",je.level,"%)"]}),l.jsx("input",{type:"range",min:10,max:100,value:je.level,onChange:s=>Re({...je,level:Number(s.target.value)}),style:{marginTop:"0.8rem"}})]})]}),l.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Skill"})]})]})}),l.jsx("style",{children:`
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
      `})]}):l.jsx("div",{className:"admin-lock-screen",children:l.jsxs("div",{className:"glass-card lock-card",children:[l.jsx(Jc,{size:40,className:"lock-icon"}),l.jsx("h2",{children:"Admin CMS Authentication"}),l.jsxs("p",{children:["Enter passcode (default: ",l.jsx("strong",{children:"admin123"}),") to edit portfolio details."]}),l.jsx("input",{type:"password",placeholder:"Enter Admin Passcode",value:ne,onChange:s=>Pe(s.target.value),className:"form-input"}),l.jsx("button",{className:"btn btn-primary",onClick:()=>{(ne==="admin123"||ne==="")&&te(!0)},children:"Unlock Admin Panel"})]})})},ip=()=>{const{currentPage:b}=ft();return l.jsxs("div",{className:"app-layout",children:[l.jsx(Qf,{}),l.jsxs("main",{className:"main-content",children:[b==="home"&&l.jsxs(l.Fragment,{children:[l.jsx(Xf,{}),l.jsx(Yf,{}),l.jsx(Kf,{}),l.jsx(Gf,{}),l.jsx(Zf,{}),l.jsx(Jf,{}),l.jsx(ep,{})]}),b==="certificates"&&l.jsx(np,{}),b==="hire"&&l.jsx(ap,{}),b==="admin"&&l.jsx(lp,{})]}),l.jsx(tp,{})]})};function sp(){return l.jsx(mf,{children:l.jsx(ip,{})})}pf.createRoot(document.getElementById("root")).render(l.jsx(lf.StrictMode,{children:l.jsx(sp,{})}));
