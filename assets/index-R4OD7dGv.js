var Fg=Object.defineProperty;var jg=(e,t,n)=>t in e?Fg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>jg(e,typeof t!="symbol"?t+"":t,n);function zg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function No(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bp={exports:{}},Oo={},Fp={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),Wg=Symbol.for("react.portal"),Gg=Symbol.for("react.fragment"),Ug=Symbol.for("react.strict_mode"),Hg=Symbol.for("react.profiler"),Vg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),Xg=Symbol.for("react.suspense"),qg=Symbol.for("react.memo"),Qg=Symbol.for("react.lazy"),sd=Symbol.iterator;function Jg(e){return e===null||typeof e!="object"?null:(e=sd&&e[sd]||e["@@iterator"],typeof e=="function"?e:null)}var jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zp=Object.assign,Wp={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=Wp,this.updater=n||jp}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gp(){}Gp.prototype=Wr.prototype;function zu(e,t,n){this.props=e,this.context=t,this.refs=Wp,this.updater=n||jp}var Wu=zu.prototype=new Gp;Wu.constructor=zu;zp(Wu,Wr.prototype);Wu.isPureReactComponent=!0;var ad=Array.isArray,Up=Object.prototype.hasOwnProperty,Gu={current:null},Hp={key:!0,ref:!0,__self:!0,__source:!0};function Vp(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Up.call(t,r)&&!Hp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ji,type:e,key:l,ref:o,props:i,_owner:Gu.current}}function Yg(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Uu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function Zg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ud=/\/+/g;function cs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zg(""+e.key):t.toString(36)}function jl(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ji:case Wg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+cs(o,0):r,ad(i)?(n="",e!=null&&(n=e.replace(ud,"$&/")+"/"),jl(i,t,n,"",function(u){return u})):i!=null&&(Uu(i)&&(i=Yg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ud,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ad(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+cs(l,s);o+=jl(l,t,n,a,i)}else if(a=Jg(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+cs(l,s++),o+=jl(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(e,t,n){if(e==null)return e;var r=[],i=0;return jl(e,r,"","",function(l){return t.call(n,l,i++)}),r}function eC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},zl={transition:null},tC={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:zl,ReactCurrentOwner:Gu};function $p(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:dl,forEach:function(e,t,n){dl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dl(e,function(){t++}),t},toArray:function(e){return dl(e,function(t){return t})||[]},only:function(e){if(!Uu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Wr;te.Fragment=Gg;te.Profiler=Hg;te.PureComponent=zu;te.StrictMode=Ug;te.Suspense=Xg;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC;te.act=$p;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zp({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Gu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Up.call(t,a)&&!Hp.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ji,type:e.type,key:i,ref:l,props:r,_owner:o}};te.createContext=function(e){return e={$$typeof:$g,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vg,_context:e},e.Consumer=e};te.createElement=Vp;te.createFactory=function(e){var t=Vp.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:Kg,render:e}};te.isValidElement=Uu;te.lazy=function(e){return{$$typeof:Qg,_payload:{_status:-1,_result:e},_init:eC}};te.memo=function(e,t){return{$$typeof:qg,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=zl.transition;zl.transition={};try{e()}finally{zl.transition=t}};te.unstable_act=$p;te.useCallback=function(e,t){return Qe.current.useCallback(e,t)};te.useContext=function(e){return Qe.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};te.useEffect=function(e,t){return Qe.current.useEffect(e,t)};te.useId=function(){return Qe.current.useId()};te.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Qe.current.useMemo(e,t)};te.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};te.useRef=function(e){return Qe.current.useRef(e)};te.useState=function(e){return Qe.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return Qe.current.useTransition()};te.version="18.3.1";Fp.exports=te;var T=Fp.exports;const $t=No(T),nC=zg({__proto__:null,default:$t},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rC=T,iC=Symbol.for("react.element"),lC=Symbol.for("react.fragment"),oC=Object.prototype.hasOwnProperty,sC=rC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aC={key:!0,ref:!0,__self:!0,__source:!0};function Kp(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)oC.call(t,r)&&!aC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iC,type:e,key:l,ref:o,props:i,_owner:sC.current}}Oo.Fragment=lC;Oo.jsx=Kp;Oo.jsxs=Kp;Bp.exports=Oo;var c=Bp.exports,Ta={},Xp={exports:{}},pt={},qp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,$){var y=F.length;F.push($);e:for(;0<y;){var V=y-1>>>1,K=F[V];if(0<i(K,$))F[V]=$,F[y]=K,y=V;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var $=F[0],y=F.pop();if(y!==$){F[0]=y;e:for(var V=0,K=F.length,x=K>>>1;V<x;){var fe=2*(V+1)-1,De=F[fe],pe=fe+1,bt=F[pe];if(0>i(De,y))pe<K&&0>i(bt,De)?(F[V]=bt,F[pe]=y,V=pe):(F[V]=De,F[fe]=y,V=fe);else if(pe<K&&0>i(bt,y))F[V]=bt,F[pe]=y,V=pe;else break e}}return $}function i(F,$){var y=F.sortIndex-$.sortIndex;return y!==0?y:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],f=1,d=null,p=3,h=!1,g=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=F)r(u),$.sortIndex=$.expirationTime,t(a,$);else break;$=n(u)}}function R(F){if(S=!1,_(F),!g)if(n(a)!==null)g=!0,Q(A);else{var $=n(u);$!==null&&le(R,$.startTime-F)}}function A(F,$){g=!1,S&&(S=!1,m(L),L=-1),h=!0;var y=p;try{for(_($),d=n(a);d!==null&&(!(d.expirationTime>$)||F&&!z());){var V=d.callback;if(typeof V=="function"){d.callback=null,p=d.priorityLevel;var K=V(d.expirationTime<=$);$=e.unstable_now(),typeof K=="function"?d.callback=K:d===n(a)&&r(a),_($)}else r(a);d=n(a)}if(d!==null)var x=!0;else{var fe=n(u);fe!==null&&le(R,fe.startTime-$),x=!1}return x}finally{d=null,p=y,h=!1}}var P=!1,k=null,L=-1,W=5,I=-1;function z(){return!(e.unstable_now()-I<W)}function G(){if(k!==null){var F=e.unstable_now();I=F;var $=!0;try{$=k(!0,F)}finally{$?Z():(P=!1,k=null)}}else P=!1}var Z;if(typeof C=="function")Z=function(){C(G)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,B=b.port2;b.port1.onmessage=G,Z=function(){B.postMessage(null)}}else Z=function(){v(G,0)};function Q(F){k=F,P||(P=!0,Z())}function le(F,$){L=v(function(){F(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,Q(A))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(F){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var y=p;p=$;try{return F()}finally{p=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var y=p;p=F;try{return $()}finally{p=y}},e.unstable_scheduleCallback=function(F,$,y){var V=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?V+y:V):y=V,F){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=y+K,F={id:f++,callback:$,priorityLevel:F,startTime:y,expirationTime:K,sortIndex:-1},y>V?(F.sortIndex=y,t(u,F),n(a)===null&&F===n(u)&&(S?(m(L),L=-1):S=!0,le(R,y-V))):(F.sortIndex=K,t(a,F),g||h||(g=!0,Q(A))),F},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(F){var $=p;return function(){var y=p;p=$;try{return F.apply(this,arguments)}finally{p=y}}}})(Qp);qp.exports=Qp;var uC=qp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cC=T,ft=uC;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,wi={};function Xn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(wi[e]=t,e=0;e<t.length;e++)Jp.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ka=Object.prototype.hasOwnProperty,dC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cd={},dd={};function fC(e){return ka.call(dd,e)?!0:ka.call(cd,e)?!1:dC.test(e)?dd[e]=!0:(cd[e]=!0,!1)}function pC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hC(e,t,n,r){if(t===null||typeof t>"u"||pC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hu=/[\-:]([a-z])/g;function Vu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hu,Vu);Fe[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hu,Vu);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hu,Vu);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function $u(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hC(t,n,i,r)&&(n=null),r||i===null?fC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=cC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),ar=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),wa=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),Zp=Symbol.for("react.context"),Xu=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),ba=Symbol.for("react.suspense_list"),qu=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),eh=Symbol.for("react.offscreen"),fd=Symbol.iterator;function qr(e){return e===null||typeof e!="object"?null:(e=fd&&e[fd]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,ds;function di(e){if(ds===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ds=t&&t[1]||""}return`
`+ds+e}var fs=!1;function ps(e,t){if(!e||fs)return"";fs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{fs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function mC(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=ps(e.type,!1),e;case 11:return e=ps(e.type.render,!1),e;case 1:return e=ps(e.type,!0),e;default:return""}}function Da(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case ar:return"Portal";case wa:return"Profiler";case Ku:return"StrictMode";case Ea:return"Suspense";case ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zp:return(e.displayName||"Context")+".Consumer";case Yp:return(e._context.displayName||"Context")+".Provider";case Xu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qu:return t=e.displayName||null,t!==null?t:Da(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return Da(e(t))}catch{}}return null}function gC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Da(t);case 8:return t===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function th(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function CC(e){var t=th(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pl(e){e._valueTracker||(e._valueTracker=CC(e))}function nh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=th(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function to(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ma(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rh(e,t){t=t.checked,t!=null&&$u(e,"checked",t,!1)}function La(e,t){rh(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Na(e,t.type,n):t.hasOwnProperty("defaultValue")&&Na(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Na(e,t,n){(t!=="number"||to(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fi=Array.isArray;function xr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function md(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(fi(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function ih(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ba(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hl,oh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_C=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){_C.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function sh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function ah(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var SC=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(SC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function Qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Rr=null,Ir=null;function Cd(e){if(e=el(e)){if(typeof Wa!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Wo(t),Wa(e.stateNode,e.type,t))}}function uh(e){Rr?Ir?Ir.push(e):Ir=[e]:Rr=e}function ch(){if(Rr){var e=Rr,t=Ir;if(Ir=Rr=null,Cd(e),t)for(e=0;e<t.length;e++)Cd(t[e])}}function dh(e,t){return e(t)}function fh(){}var hs=!1;function ph(e,t,n){if(hs)return e(t,n);hs=!0;try{return dh(e,t,n)}finally{hs=!1,(Rr!==null||Ir!==null)&&(fh(),ch())}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var r=Wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Ga=!1;if(qt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Ga=!1}function yC(e,t,n,r,i,l,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ci=!1,no=null,ro=!1,Ua=null,vC={onError:function(e){Ci=!0,no=e}};function xC(e,t,n,r,i,l,o,s,a){Ci=!1,no=null,yC.apply(vC,arguments)}function RC(e,t,n,r,i,l,o,s,a){if(xC.apply(this,arguments),Ci){if(Ci){var u=no;Ci=!1,no=null}else throw Error(N(198));ro||(ro=!0,Ua=u)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _d(e){if(qn(e)!==e)throw Error(N(188))}function IC(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return _d(i),e;if(l===r)return _d(i),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function mh(e){return e=IC(e),e!==null?gh(e):null}function gh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gh(e);if(t!==null)return t;e=e.sibling}return null}var Ch=ft.unstable_scheduleCallback,Sd=ft.unstable_cancelCallback,PC=ft.unstable_shouldYield,AC=ft.unstable_requestPaint,Ae=ft.unstable_now,TC=ft.unstable_getCurrentPriorityLevel,Ju=ft.unstable_ImmediatePriority,_h=ft.unstable_UserBlockingPriority,io=ft.unstable_NormalPriority,kC=ft.unstable_LowPriority,Sh=ft.unstable_IdlePriority,Bo=null,Ot=null;function wC(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Bo,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:DC,EC=Math.log,bC=Math.LN2;function DC(e){return e>>>=0,e===0?32:31-(EC(e)/bC|0)|0}var ml=64,gl=4194304;function pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=pi(s):(l&=o,l!==0&&(r=pi(l)))}else o=n&~i,o!==0?r=pi(o):l!==0&&(r=pi(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function MC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Tt(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=MC(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yh(){var e=ml;return ml<<=1,!(ml&4194240)&&(ml=64),e}function ms(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function NC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Yu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function vh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xh,Zu,Rh,Ih,Ph,Va=!1,Cl=[],fn=null,pn=null,hn=null,Di=new Map,Mi=new Map,sn=[],OC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(t.pointerId)}}function Jr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=el(t),t!==null&&Zu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function BC(e,t,n,r,i){switch(t){case"focusin":return fn=Jr(fn,e,t,n,r,i),!0;case"dragenter":return pn=Jr(pn,e,t,n,r,i),!0;case"mouseover":return hn=Jr(hn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Di.set(l,Jr(Di.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Mi.set(l,Jr(Mi.get(l)||null,e,t,n,r,i)),!0}return!1}function Ah(e){var t=Bn(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=hh(n),t!==null){e.blockedOn=t,Ph(e.priority,function(){Rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);za=r,n.target.dispatchEvent(r),za=null}else return t=el(n),t!==null&&Zu(t),e.blockedOn=n,!1;t.shift()}return!0}function vd(e,t,n){Wl(e)&&n.delete(t)}function FC(){Va=!1,fn!==null&&Wl(fn)&&(fn=null),pn!==null&&Wl(pn)&&(pn=null),hn!==null&&Wl(hn)&&(hn=null),Di.forEach(vd),Mi.forEach(vd)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Va||(Va=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,FC)))}function Li(e){function t(i){return Yr(i,e)}if(0<Cl.length){Yr(Cl[0],e);for(var n=1;n<Cl.length;n++){var r=Cl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Yr(fn,e),pn!==null&&Yr(pn,e),hn!==null&&Yr(hn,e),Di.forEach(t),Mi.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)Ah(n),n.blockedOn===null&&sn.shift()}var Pr=Zt.ReactCurrentBatchConfig,oo=!0;function jC(e,t,n,r){var i=oe,l=Pr.transition;Pr.transition=null;try{oe=1,ec(e,t,n,r)}finally{oe=i,Pr.transition=l}}function zC(e,t,n,r){var i=oe,l=Pr.transition;Pr.transition=null;try{oe=4,ec(e,t,n,r)}finally{oe=i,Pr.transition=l}}function ec(e,t,n,r){if(oo){var i=$a(e,t,n,r);if(i===null)Ps(e,t,r,so,n),yd(e,r);else if(BC(i,e,t,n,r))r.stopPropagation();else if(yd(e,r),t&4&&-1<OC.indexOf(e)){for(;i!==null;){var l=el(i);if(l!==null&&xh(l),l=$a(e,t,n,r),l===null&&Ps(e,t,r,so,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var so=null;function $a(e,t,n,r){if(so=null,e=Qu(r),e=Bn(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return so=e,null}function Th(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TC()){case Ju:return 1;case _h:return 4;case io:case kC:return 16;case Sh:return 536870912;default:return 16}default:return 16}}var un=null,tc=null,Gl=null;function kh(){if(Gl)return Gl;var e,t=tc,n=t.length,r,i="value"in un?un.value:un.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Gl=i.slice(e,1<r?1-r:void 0)}function Ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function xd(){return!1}function ht(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_l:xd,this.isPropagationStopped=xd,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=ht(Gr),Zi=xe({},Gr,{view:0,detail:0}),WC=ht(Zi),gs,Cs,Zr,Fo=xe({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(gs=e.screenX-Zr.screenX,Cs=e.screenY-Zr.screenY):Cs=gs=0,Zr=e),gs)},movementY:function(e){return"movementY"in e?e.movementY:Cs}}),Rd=ht(Fo),GC=xe({},Fo,{dataTransfer:0}),UC=ht(GC),HC=xe({},Zi,{relatedTarget:0}),_s=ht(HC),VC=xe({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),$C=ht(VC),KC=xe({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),XC=ht(KC),qC=xe({},Gr,{data:0}),Id=ht(qC),QC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YC[e])?!!t[e]:!1}function rc(){return ZC}var e0=xe({},Zi,{key:function(e){if(e.key){var t=QC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?JC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t0=ht(e0),n0=xe({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=ht(n0),r0=xe({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),i0=ht(r0),l0=xe({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=ht(l0),s0=xe({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=ht(s0),u0=[9,13,27,32],ic=qt&&"CompositionEvent"in window,_i=null;qt&&"documentMode"in document&&(_i=document.documentMode);var c0=qt&&"TextEvent"in window&&!_i,wh=qt&&(!ic||_i&&8<_i&&11>=_i),Ad=" ",Td=!1;function Eh(e,t){switch(e){case"keyup":return u0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function d0(e,t){switch(e){case"compositionend":return bh(t);case"keypress":return t.which!==32?null:(Td=!0,Ad);case"textInput":return e=t.data,e===Ad&&Td?null:e;default:return null}}function f0(e,t){if(cr)return e==="compositionend"||!ic&&Eh(e,t)?(e=kh(),Gl=tc=un=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wh&&t.locale!=="ko"?null:t.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p0[e.type]:t==="textarea"}function Dh(e,t,n,r){uh(r),t=ao(t,"onChange"),0<t.length&&(n=new nc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Si=null,Ni=null;function h0(e){Uh(e,0)}function jo(e){var t=pr(e);if(nh(t))return e}function m0(e,t){if(e==="change")return t}var Mh=!1;if(qt){var Ss;if(qt){var ys="oninput"in document;if(!ys){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),ys=typeof wd.oninput=="function"}Ss=ys}else Ss=!1;Mh=Ss&&(!document.documentMode||9<document.documentMode)}function Ed(){Si&&(Si.detachEvent("onpropertychange",Lh),Ni=Si=null)}function Lh(e){if(e.propertyName==="value"&&jo(Ni)){var t=[];Dh(t,Ni,e,Qu(e)),ph(h0,t)}}function g0(e,t,n){e==="focusin"?(Ed(),Si=t,Ni=n,Si.attachEvent("onpropertychange",Lh)):e==="focusout"&&Ed()}function C0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Ni)}function _0(e,t){if(e==="click")return jo(t)}function S0(e,t){if(e==="input"||e==="change")return jo(t)}function y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:y0;function Oi(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ka.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dd(e,t){var n=bd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bd(n)}}function Nh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oh(){for(var e=window,t=to();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=to(e.document)}return t}function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function v0(e){var t=Oh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nh(n.ownerDocument.documentElement,n)){if(r!==null&&lc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Dd(n,l);var o=Dd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x0=qt&&"documentMode"in document&&11>=document.documentMode,dr=null,Ka=null,yi=null,Xa=!1;function Md(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||dr==null||dr!==to(r)||(r=dr,"selectionStart"in r&&lc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yi&&Oi(yi,r)||(yi=r,r=ao(Ka,"onSelect"),0<r.length&&(t=new nc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function Sl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},vs={},Bh={};qt&&(Bh=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function zo(e){if(vs[e])return vs[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bh)return vs[e]=t[n];return e}var Fh=zo("animationend"),jh=zo("animationiteration"),zh=zo("animationstart"),Wh=zo("transitionend"),Gh=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Gh.set(e,t),Xn(t,[e])}for(var xs=0;xs<Ld.length;xs++){var Rs=Ld[xs],R0=Rs.toLowerCase(),I0=Rs[0].toUpperCase()+Rs.slice(1);Pn(R0,"on"+I0)}Pn(Fh,"onAnimationEnd");Pn(jh,"onAnimationIteration");Pn(zh,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Wh,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function Nd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,RC(r,t,void 0,e),e.currentTarget=null}function Uh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Nd(i,s,u),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Nd(i,s,u),l=a}}}if(ro)throw e=Ua,ro=!1,Ua=null,e}function he(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var r=e+"__bubble";n.has(r)||(Hh(t,e,2,!1),n.add(r))}function Is(e,t,n){var r=0;t&&(r|=4),Hh(n,e,r,t)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[yl]){e[yl]=!0,Jp.forEach(function(n){n!=="selectionchange"&&(P0.has(n)||Is(n,!1,e),Is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yl]||(t[yl]=!0,Is("selectionchange",!1,t))}}function Hh(e,t,n,r){switch(Th(t)){case 1:var i=jC;break;case 4:i=zC;break;default:i=ec}n=i.bind(null,t,n,e),i=void 0,!Ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Bn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}ph(function(){var u=l,f=Qu(n),d=[];e:{var p=Gh.get(e);if(p!==void 0){var h=nc,g=e;switch(e){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":h=t0;break;case"focusin":g="focus",h=_s;break;case"focusout":g="blur",h=_s;break;case"beforeblur":case"afterblur":h=_s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=UC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=i0;break;case Fh:case jh:case zh:h=$C;break;case Wh:h=o0;break;case"scroll":h=WC;break;case"wheel":h=a0;break;case"copy":case"cut":case"paste":h=XC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Pd}var S=(t&4)!==0,v=!S&&e==="scroll",m=S?p!==null?p+"Capture":null:p;S=[];for(var C=u,_;C!==null;){_=C;var R=_.stateNode;if(_.tag===5&&R!==null&&(_=R,m!==null&&(R=bi(C,m),R!=null&&S.push(Fi(C,R,_)))),v)break;C=C.return}0<S.length&&(p=new h(p,g,null,n,f),d.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==za&&(g=n.relatedTarget||n.fromElement)&&(Bn(g)||g[Qt]))break e;if((h||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Bn(g):null,g!==null&&(v=qn(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(S=Rd,R="onMouseLeave",m="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(S=Pd,R="onPointerLeave",m="onPointerEnter",C="pointer"),v=h==null?p:pr(h),_=g==null?p:pr(g),p=new S(R,C+"leave",h,n,f),p.target=v,p.relatedTarget=_,R=null,Bn(f)===u&&(S=new S(m,C+"enter",g,n,f),S.target=_,S.relatedTarget=v,R=S),v=R,h&&g)t:{for(S=h,m=g,C=0,_=S;_;_=er(_))C++;for(_=0,R=m;R;R=er(R))_++;for(;0<C-_;)S=er(S),C--;for(;0<_-C;)m=er(m),_--;for(;C--;){if(S===m||m!==null&&S===m.alternate)break t;S=er(S),m=er(m)}S=null}else S=null;h!==null&&Od(d,p,h,S,!1),g!==null&&v!==null&&Od(d,v,g,S,!0)}}e:{if(p=u?pr(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var A=m0;else if(kd(p))if(Mh)A=S0;else{A=C0;var P=g0}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=_0);if(A&&(A=A(e,u))){Dh(d,A,n,f);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Na(p,"number",p.value)}switch(P=u?pr(u):window,e){case"focusin":(kd(P)||P.contentEditable==="true")&&(dr=P,Ka=u,yi=null);break;case"focusout":yi=Ka=dr=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Md(d,n,f);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":Md(d,n,f)}var k;if(ic)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else cr?Eh(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(wh&&n.locale!=="ko"&&(cr||L!=="onCompositionStart"?L==="onCompositionEnd"&&cr&&(k=kh()):(un=f,tc="value"in un?un.value:un.textContent,cr=!0)),P=ao(u,L),0<P.length&&(L=new Id(L,e,null,n,f),d.push({event:L,listeners:P}),k?L.data=k:(k=bh(n),k!==null&&(L.data=k)))),(k=c0?d0(e,n):f0(e,n))&&(u=ao(u,"onBeforeInput"),0<u.length&&(f=new Id("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=k))}Uh(d,t)})}function Fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=bi(e,n),l!=null&&r.unshift(Fi(e,l,i)),l=bi(e,t),l!=null&&r.push(Fi(e,l,i))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Od(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=bi(n,l),a!=null&&o.unshift(Fi(n,a,s))):i||(a=bi(n,l),a!=null&&o.push(Fi(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var A0=/\r\n?/g,T0=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(A0,`
`).replace(T0,"")}function vl(e,t,n){if(t=Bd(t),Bd(e)!==t&&n)throw Error(N(425))}function uo(){}var qa=null,Qa=null;function Ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(e){return Fd.resolve(null).then(e).catch(E0)}:Ya;function E0(e){setTimeout(function(){throw e})}function As(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Ur,ji="__reactProps$"+Ur,Qt="__reactContainer$"+Ur,Za="__reactEvents$"+Ur,b0="__reactListeners$"+Ur,D0="__reactHandles$"+Ur;function Bn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jd(e);e!==null;){if(n=e[Nt])return n;e=jd(e)}return t}e=n,n=e.parentNode}return null}function el(e){return e=e[Nt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Wo(e){return e[ji]||null}var eu=[],hr=-1;function An(e){return{current:e}}function me(e){0>hr||(e.current=eu[hr],eu[hr]=null,hr--)}function de(e,t){hr++,eu[hr]=e.current,e.current=t}var In={},Ve=An(In),tt=An(!1),Gn=In;function Er(e,t){var n=e.type.contextTypes;if(!n)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function co(){me(tt),me(Ve)}function zd(e,t,n){if(Ve.current!==In)throw Error(N(168));de(Ve,t),de(tt,n)}function Vh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,gC(e)||"Unknown",i));return xe({},n,r)}function fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Gn=Ve.current,de(Ve,e),de(tt,tt.current),!0}function Wd(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Vh(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,me(tt),me(Ve),de(Ve,e)):me(tt),de(tt,n)}var Ut=null,Go=!1,Ts=!1;function $h(e){Ut===null?Ut=[e]:Ut.push(e)}function M0(e){Go=!0,$h(e)}function Tn(){if(!Ts&&Ut!==null){Ts=!0;var e=0,t=oe;try{var n=Ut;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Go=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Ch(Ju,Tn),i}finally{oe=t,Ts=!1}}return null}var mr=[],gr=0,po=null,ho=0,mt=[],gt=0,Un=null,Ht=1,Vt="";function Ln(e,t){mr[gr++]=ho,mr[gr++]=po,po=e,ho=t}function Kh(e,t,n){mt[gt++]=Ht,mt[gt++]=Vt,mt[gt++]=Un,Un=e;var r=Ht;e=Vt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var l=32-Tt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-Tt(t)+i|n<<i|r,Vt=l+e}else Ht=1<<l|n<<i|r,Vt=e}function oc(e){e.return!==null&&(Ln(e,1),Kh(e,1,0))}function sc(e){for(;e===po;)po=mr[--gr],mr[gr]=null,ho=mr[--gr],mr[gr]=null;for(;e===Un;)Un=mt[--gt],mt[gt]=null,Vt=mt[--gt],mt[gt]=null,Ht=mt[--gt],mt[gt]=null}var ct=null,ut=null,ge=!1,At=null;function Xh(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ut=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:Ht,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ut=null,!0):!1;default:return!1}}function tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nu(e){if(ge){var t=ut;if(t){var n=t;if(!Gd(e,t)){if(tu(e))throw Error(N(418));t=mn(n.nextSibling);var r=ct;t&&Gd(e,t)?Xh(r,n):(e.flags=e.flags&-4097|2,ge=!1,ct=e)}}else{if(tu(e))throw Error(N(418));e.flags=e.flags&-4097|2,ge=!1,ct=e}}}function Ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function xl(e){if(e!==ct)return!1;if(!ge)return Ud(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ja(e.type,e.memoizedProps)),t&&(t=ut)){if(tu(e))throw qh(),Error(N(418));for(;t;)Xh(e,t),t=mn(t.nextSibling)}if(Ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ct?mn(e.stateNode.nextSibling):null;return!0}function qh(){for(var e=ut;e;)e=mn(e.nextSibling)}function br(){ut=ct=null,ge=!1}function ac(e){At===null?At=[e]:At.push(e)}var L0=Zt.ReactCurrentBatchConfig;function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Rl(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hd(e){var t=e._init;return t(e._payload)}function Qh(e){function t(m,C){if(e){var _=m.deletions;_===null?(m.deletions=[C],m.flags|=16):_.push(C)}}function n(m,C){if(!e)return null;for(;C!==null;)t(m,C),C=C.sibling;return null}function r(m,C){for(m=new Map;C!==null;)C.key!==null?m.set(C.key,C):m.set(C.index,C),C=C.sibling;return m}function i(m,C){return m=Sn(m,C),m.index=0,m.sibling=null,m}function l(m,C,_){return m.index=_,e?(_=m.alternate,_!==null?(_=_.index,_<C?(m.flags|=2,C):_):(m.flags|=2,C)):(m.flags|=1048576,C)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,C,_,R){return C===null||C.tag!==6?(C=Ls(_,m.mode,R),C.return=m,C):(C=i(C,_),C.return=m,C)}function a(m,C,_,R){var A=_.type;return A===ur?f(m,C,_.props.children,R,_.key):C!==null&&(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ln&&Hd(A)===C.type)?(R=i(C,_.props),R.ref=ei(m,C,_),R.return=m,R):(R=Ql(_.type,_.key,_.props,null,m.mode,R),R.ref=ei(m,C,_),R.return=m,R)}function u(m,C,_,R){return C===null||C.tag!==4||C.stateNode.containerInfo!==_.containerInfo||C.stateNode.implementation!==_.implementation?(C=Ns(_,m.mode,R),C.return=m,C):(C=i(C,_.children||[]),C.return=m,C)}function f(m,C,_,R,A){return C===null||C.tag!==7?(C=Wn(_,m.mode,R,A),C.return=m,C):(C=i(C,_),C.return=m,C)}function d(m,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Ls(""+C,m.mode,_),C.return=m,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case fl:return _=Ql(C.type,C.key,C.props,null,m.mode,_),_.ref=ei(m,null,C),_.return=m,_;case ar:return C=Ns(C,m.mode,_),C.return=m,C;case ln:var R=C._init;return d(m,R(C._payload),_)}if(fi(C)||qr(C))return C=Wn(C,m.mode,_,null),C.return=m,C;Rl(m,C)}return null}function p(m,C,_,R){var A=C!==null?C.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:s(m,C,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:return _.key===A?a(m,C,_,R):null;case ar:return _.key===A?u(m,C,_,R):null;case ln:return A=_._init,p(m,C,A(_._payload),R)}if(fi(_)||qr(_))return A!==null?null:f(m,C,_,R,null);Rl(m,_)}return null}function h(m,C,_,R,A){if(typeof R=="string"&&R!==""||typeof R=="number")return m=m.get(_)||null,s(C,m,""+R,A);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case fl:return m=m.get(R.key===null?_:R.key)||null,a(C,m,R,A);case ar:return m=m.get(R.key===null?_:R.key)||null,u(C,m,R,A);case ln:var P=R._init;return h(m,C,_,P(R._payload),A)}if(fi(R)||qr(R))return m=m.get(_)||null,f(C,m,R,A,null);Rl(C,R)}return null}function g(m,C,_,R){for(var A=null,P=null,k=C,L=C=0,W=null;k!==null&&L<_.length;L++){k.index>L?(W=k,k=null):W=k.sibling;var I=p(m,k,_[L],R);if(I===null){k===null&&(k=W);break}e&&k&&I.alternate===null&&t(m,k),C=l(I,C,L),P===null?A=I:P.sibling=I,P=I,k=W}if(L===_.length)return n(m,k),ge&&Ln(m,L),A;if(k===null){for(;L<_.length;L++)k=d(m,_[L],R),k!==null&&(C=l(k,C,L),P===null?A=k:P.sibling=k,P=k);return ge&&Ln(m,L),A}for(k=r(m,k);L<_.length;L++)W=h(k,m,L,_[L],R),W!==null&&(e&&W.alternate!==null&&k.delete(W.key===null?L:W.key),C=l(W,C,L),P===null?A=W:P.sibling=W,P=W);return e&&k.forEach(function(z){return t(m,z)}),ge&&Ln(m,L),A}function S(m,C,_,R){var A=qr(_);if(typeof A!="function")throw Error(N(150));if(_=A.call(_),_==null)throw Error(N(151));for(var P=A=null,k=C,L=C=0,W=null,I=_.next();k!==null&&!I.done;L++,I=_.next()){k.index>L?(W=k,k=null):W=k.sibling;var z=p(m,k,I.value,R);if(z===null){k===null&&(k=W);break}e&&k&&z.alternate===null&&t(m,k),C=l(z,C,L),P===null?A=z:P.sibling=z,P=z,k=W}if(I.done)return n(m,k),ge&&Ln(m,L),A;if(k===null){for(;!I.done;L++,I=_.next())I=d(m,I.value,R),I!==null&&(C=l(I,C,L),P===null?A=I:P.sibling=I,P=I);return ge&&Ln(m,L),A}for(k=r(m,k);!I.done;L++,I=_.next())I=h(k,m,L,I.value,R),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?L:I.key),C=l(I,C,L),P===null?A=I:P.sibling=I,P=I);return e&&k.forEach(function(G){return t(m,G)}),ge&&Ln(m,L),A}function v(m,C,_,R){if(typeof _=="object"&&_!==null&&_.type===ur&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:e:{for(var A=_.key,P=C;P!==null;){if(P.key===A){if(A=_.type,A===ur){if(P.tag===7){n(m,P.sibling),C=i(P,_.props.children),C.return=m,m=C;break e}}else if(P.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ln&&Hd(A)===P.type){n(m,P.sibling),C=i(P,_.props),C.ref=ei(m,P,_),C.return=m,m=C;break e}n(m,P);break}else t(m,P);P=P.sibling}_.type===ur?(C=Wn(_.props.children,m.mode,R,_.key),C.return=m,m=C):(R=Ql(_.type,_.key,_.props,null,m.mode,R),R.ref=ei(m,C,_),R.return=m,m=R)}return o(m);case ar:e:{for(P=_.key;C!==null;){if(C.key===P)if(C.tag===4&&C.stateNode.containerInfo===_.containerInfo&&C.stateNode.implementation===_.implementation){n(m,C.sibling),C=i(C,_.children||[]),C.return=m,m=C;break e}else{n(m,C);break}else t(m,C);C=C.sibling}C=Ns(_,m.mode,R),C.return=m,m=C}return o(m);case ln:return P=_._init,v(m,C,P(_._payload),R)}if(fi(_))return g(m,C,_,R);if(qr(_))return S(m,C,_,R);Rl(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,C!==null&&C.tag===6?(n(m,C.sibling),C=i(C,_),C.return=m,m=C):(n(m,C),C=Ls(_,m.mode,R),C.return=m,m=C),o(m)):n(m,C)}return v}var Dr=Qh(!0),Jh=Qh(!1),mo=An(null),go=null,Cr=null,uc=null;function cc(){uc=Cr=go=null}function dc(e){var t=mo.current;me(mo),e._currentValue=t}function ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){go=e,uc=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(uc!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(go===null)throw Error(N(308));Cr=e,go.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Fn=null;function fc(e){Fn===null?Fn=[e]:Fn.push(e)}function Yh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jt(e,n)}return i=r.interleaved,i===null?(t.next=t,fc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jt(e,n)}function Hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yu(e,n)}}function Vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,r){var i=e.updateQueue;on=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?l=u:o.next=u,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=a))}if(l!==null){var d=i.baseState;o=0,f=u=a=null,s=l;do{var p=s.lane,h=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,S=s;switch(p=t,h=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){d=g.call(h,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,p=typeof g=="function"?g.call(h,d,p):g,p==null)break e;d=xe({},d,p);break e;case 2:on=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=h,a=d):f=f.next=h,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Vn|=o,e.lanes=o,e.memoizedState=d}}function $d(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var tl={},Bt=An(tl),zi=An(tl),Wi=An(tl);function jn(e){if(e===tl)throw Error(N(174));return e}function hc(e,t){switch(de(Wi,t),de(zi,e),de(Bt,tl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ba(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ba(t,e)}me(Bt),de(Bt,t)}function Mr(){me(Bt),me(zi),me(Wi)}function e1(e){jn(Wi.current);var t=jn(Bt.current),n=Ba(t,e.type);t!==n&&(de(zi,e),de(Bt,n))}function mc(e){zi.current===e&&(me(Bt),me(zi))}var ye=An(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ks=[];function gc(){for(var e=0;e<ks.length;e++)ks[e]._workInProgressVersionPrimary=null;ks.length=0}var Vl=Zt.ReactCurrentDispatcher,ws=Zt.ReactCurrentBatchConfig,Hn=0,ve=null,Ee=null,Me=null,So=!1,vi=!1,Gi=0,N0=0;function je(){throw Error(N(321))}function Cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function _c(e,t,n,r,i,l){if(Hn=l,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vl.current=e===null||e.memoizedState===null?j0:z0,e=n(r,i),vi){l=0;do{if(vi=!1,Gi=0,25<=l)throw Error(N(301));l+=1,Me=Ee=null,t.updateQueue=null,Vl.current=W0,e=n(r,i)}while(vi)}if(Vl.current=yo,t=Ee!==null&&Ee.next!==null,Hn=0,Me=Ee=ve=null,So=!1,t)throw Error(N(300));return e}function Sc(){var e=Gi!==0;return Gi=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=e:Me=Me.next=e,Me}function vt(){if(Ee===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Me===null?ve.memoizedState:Me.next;if(t!==null)Me=t,Ee=e;else{if(e===null)throw Error(N(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Me===null?ve.memoizedState=Me=e:Me=Me.next=e}return Me}function Ui(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=vt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,u=l;do{var f=u.lane;if((Hn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,o=r):a=a.next=d,ve.lanes|=f,Vn|=f}u=u.next}while(u!==null&&u!==l);a===null?o=r:a.next=s,Et(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ve.lanes|=l,Vn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bs(e){var t=vt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Et(l,t.memoizedState)||(et=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function t1(){}function n1(e,t){var n=ve,r=vt(),i=t(),l=!Et(r.memoizedState,i);if(l&&(r.memoizedState=i,et=!0),r=r.queue,yc(l1.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Hi(9,i1.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(N(349));Hn&30||r1(n,t,i)}return i}function r1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function i1(e,t,n,r){t.value=n,t.getSnapshot=r,o1(t)&&s1(e)}function l1(e,t,n){return n(function(){o1(t)&&s1(e)})}function o1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function s1(e){var t=Jt(e,1);t!==null&&kt(t,e,1,-1)}function Kd(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},t.queue=e,e=e.dispatch=F0.bind(null,ve,e),[t.memoizedState,e]}function Hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function a1(){return vt().memoizedState}function $l(e,t,n,r){var i=Mt();ve.flags|=e,i.memoizedState=Hi(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var i=vt();r=r===void 0?null:r;var l=void 0;if(Ee!==null){var o=Ee.memoizedState;if(l=o.destroy,r!==null&&Cc(r,o.deps)){i.memoizedState=Hi(t,n,l,r);return}}ve.flags|=e,i.memoizedState=Hi(1|t,n,l,r)}function Xd(e,t){return $l(8390656,8,e,t)}function yc(e,t){return Uo(2048,8,e,t)}function u1(e,t){return Uo(4,2,e,t)}function c1(e,t){return Uo(4,4,e,t)}function d1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function f1(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,d1.bind(null,t,e),n)}function vc(){}function p1(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function h1(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function m1(e,t,n){return Hn&21?(Et(n,t)||(n=yh(),ve.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function O0(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=ws.transition;ws.transition={};try{e(!1),t()}finally{oe=n,ws.transition=r}}function g1(){return vt().memoizedState}function B0(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},C1(e))_1(t,n);else if(n=Yh(e,t,n,r),n!==null){var i=qe();kt(n,e,r,i),S1(n,t,r)}}function F0(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(C1(e))_1(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Et(s,o)){var a=t.interleaved;a===null?(i.next=i,fc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Yh(e,t,i,r),n!==null&&(i=qe(),kt(n,e,r,i),S1(n,t,r))}}function C1(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function _1(e,t){vi=So=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function S1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yu(e,n)}}var yo={readContext:yt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},j0={readContext:yt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Xd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$l(4194308,4,d1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $l(4194308,4,e,t)},useInsertionEffect:function(e,t){return $l(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=B0.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Kd,useDebugValue:vc,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Kd(!1),t=e[0];return e=O0.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=Mt();if(ge){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Le===null)throw Error(N(349));Hn&30||r1(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Xd(l1.bind(null,r,l,e),[e]),r.flags|=2048,Hi(9,i1.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Le.identifierPrefix;if(ge){var n=Vt,r=Ht;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=N0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},z0={readContext:yt,useCallback:p1,useContext:yt,useEffect:yc,useImperativeHandle:f1,useInsertionEffect:u1,useLayoutEffect:c1,useMemo:h1,useReducer:Es,useRef:a1,useState:function(){return Es(Ui)},useDebugValue:vc,useDeferredValue:function(e){var t=vt();return m1(t,Ee.memoizedState,e)},useTransition:function(){var e=Es(Ui)[0],t=vt().memoizedState;return[e,t]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1},W0={readContext:yt,useCallback:p1,useContext:yt,useEffect:yc,useImperativeHandle:f1,useInsertionEffect:u1,useLayoutEffect:c1,useMemo:h1,useReducer:bs,useRef:a1,useState:function(){return bs(Ui)},useDebugValue:vc,useDeferredValue:function(e){var t=vt();return Ee===null?t.memoizedState=e:m1(t,Ee.memoizedState,e)},useTransition:function(){var e=bs(Ui)[0],t=vt().memoizedState;return[e,t]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1};function It(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ho={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=_n(e),l=Kt(r,i);l.payload=t,n!=null&&(l.callback=n),t=gn(e,l,i),t!==null&&(kt(t,e,i,r),Hl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=_n(e),l=Kt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=gn(e,l,i),t!==null&&(kt(t,e,i,r),Hl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=_n(e),i=Kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,r),t!==null&&(kt(t,e,r,n),Hl(t,e,r))}};function qd(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,l):!0}function y1(e,t,n){var r=!1,i=In,l=t.contextType;return typeof l=="object"&&l!==null?l=yt(l):(i=nt(t)?Gn:Ve.current,r=t.contextTypes,l=(r=r!=null)?Er(e,i):In),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Qd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function lu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},pc(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=yt(l):(l=nt(t)?Gn:Ve.current,i.context=Er(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(iu(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ho.enqueueReplaceState(i,i.state,null),Co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var n="",r=t;do n+=mC(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ou(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var G0=typeof WeakMap=="function"?WeakMap:Map;function v1(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,gu=r),ou(e,t)},n}function x1(e,t,n){n=Kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ou(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ou(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Jd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new G0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=n_.bind(null,e,t,n),t.then(e,e))}function Yd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var U0=Zt.ReactCurrentOwner,et=!1;function Ke(e,t,n,r){t.child=e===null?Jh(t,null,n,r):Dr(t,e.child,n,r)}function ef(e,t,n,r,i){n=n.render;var l=t.ref;return Ar(t,i),r=_c(e,t,n,r,l,i),n=Sc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ge&&n&&oc(t),t.flags|=1,Ke(e,t,r,i),t.child)}function tf(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!wc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,R1(e,t,l,r,i)):(e=Ql(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(o,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=Sn(l,r),e.ref=t.ref,e.return=t,t.child=e}function R1(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Oi(l,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return su(e,t,n,r,i)}function I1(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Sr,st),st|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Sr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,de(Sr,st),st|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,de(Sr,st),st|=r;return Ke(e,t,i,n),t.child}function P1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function su(e,t,n,r,i){var l=nt(n)?Gn:Ve.current;return l=Er(t,l),Ar(t,i),n=_c(e,t,n,r,l,i),r=Sc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ge&&r&&oc(t),t.flags|=1,Ke(e,t,n,i),t.child)}function nf(e,t,n,r,i){if(nt(n)){var l=!0;fo(t)}else l=!1;if(Ar(t,i),t.stateNode===null)Kl(e,t),y1(t,n,r),lu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=nt(n)?Gn:Ve.current,u=Er(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Qd(t,o,r,u),on=!1;var p=t.memoizedState;o.state=p,Co(t,r,o,i),a=t.memoizedState,s!==r||p!==a||tt.current||on?(typeof f=="function"&&(iu(t,n,f,r),a=t.memoizedState),(s=on||qd(t,n,s,r,p,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:It(t.type,s),o.props=u,d=t.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=yt(a):(a=nt(n)?Gn:Ve.current,a=Er(t,a));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==a)&&Qd(t,o,r,a),on=!1,p=t.memoizedState,o.state=p,Co(t,r,o,i);var g=t.memoizedState;s!==d||p!==g||tt.current||on?(typeof h=="function"&&(iu(t,n,h,r),g=t.memoizedState),(u=on||qd(t,n,u,r,p,g,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return au(e,t,n,r,l,i)}function au(e,t,n,r,i,l){P1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Wd(t,n,!1),Yt(e,t,l);r=t.stateNode,U0.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Dr(t,e.child,null,l),t.child=Dr(t,null,s,l)):Ke(e,t,s,l),t.memoizedState=r.state,i&&Wd(t,n,!0),t.child}function A1(e){var t=e.stateNode;t.pendingContext?zd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zd(e,t.context,!1),hc(e,t.containerInfo)}function rf(e,t,n,r,i){return br(),ac(i),t.flags|=256,Ke(e,t,n,r),t.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function T1(e,t,n){var r=t.pendingProps,i=ye.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ye,i&1),e===null)return nu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ko(o,r,0,null),e=Wn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=cu(n),t.memoizedState=uu,e):xc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return H0(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Sn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Sn(s,l):(l=Wn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?cu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=uu,r}return l=e.child,e=l.sibling,r=Sn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xc(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Il(e,t,n,r){return r!==null&&ac(r),Dr(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H0(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Ds(Error(N(422))),Il(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ko({mode:"visible",children:r.children},i,0,null),l=Wn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Dr(t,e.child,null,o),t.child.memoizedState=cu(o),t.memoizedState=uu,l);if(!(t.mode&1))return Il(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(N(419)),r=Ds(l,r,void 0),Il(e,t,o,r)}if(s=(o&e.childLanes)!==0,et||s){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Jt(e,i),kt(r,e,i,-1))}return kc(),r=Ds(Error(N(421))),Il(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=r_.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ut=mn(i.nextSibling),ct=t,ge=!0,At=null,e!==null&&(mt[gt++]=Ht,mt[gt++]=Vt,mt[gt++]=Un,Ht=e.id,Vt=e.overflow,Un=t),t=xc(t,r.children),t.flags|=4096,t)}function lf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ru(e.return,t,n)}function Ms(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function k1(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ke(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lf(e,n,t);else if(e.tag===19)lf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ms(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ms(t,!0,n,null,l);break;case"together":Ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function V0(e,t,n){switch(t.tag){case 3:A1(t),br();break;case 5:e1(t);break;case 1:nt(t.type)&&fo(t);break;case 4:hc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(mo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?T1(e,t,n):(de(ye,ye.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);de(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return k1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,I1(e,t,n)}return Yt(e,t,n)}var w1,du,E1,b1;w1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};du=function(){};E1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jn(Bt.current);var l=null;switch(n){case"input":i=Ma(e,i),r=Ma(e,r),l=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),l=[];break;case"textarea":i=Oa(e,i),r=Oa(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=uo)}Fa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wi.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&he("scroll",e),l||s===a||(l=[])):(l=l||[]).push(u,a))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};b1=function(e,t,n,r){n!==r&&(t.flags|=4)};function ti(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $0(e,t,n){var r=t.pendingProps;switch(sc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return nt(t.type)&&co(),ze(t),null;case 3:return r=t.stateNode,Mr(),me(tt),me(Ve),gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,At!==null&&(Su(At),At=null))),du(e,t),ze(t),null;case 5:mc(t);var i=jn(Wi.current);if(n=t.type,e!==null&&t.stateNode!=null)E1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ze(t),null}if(e=jn(Bt.current),xl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Nt]=t,r[ji]=l,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)he(hi[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":pd(r,l),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},he("invalid",r);break;case"textarea":md(r,l),he("invalid",r)}Fa(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&vl(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&vl(r.textContent,s,e),i=["children",""+s]):wi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":pl(r),hd(r,l,!0);break;case"textarea":pl(r),gd(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=uo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Nt]=t,e[ji]=r,w1(e,t,!1,!1),t.stateNode=e;e:{switch(o=ja(n,r),n){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)he(hi[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":pd(e,r),i=Ma(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),he("invalid",e);break;case"textarea":md(e,r),i=Oa(e,r),he("invalid",e);break;default:i=r}Fa(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?ah(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&oh(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ei(e,a):typeof a=="number"&&Ei(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wi.hasOwnProperty(l)?a!=null&&l==="onScroll"&&he("scroll",e):a!=null&&$u(e,l,a,o))}switch(n){case"input":pl(e),hd(e,r,!1);break;case"textarea":pl(e),gd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?xr(e,!!r.multiple,l,!1):r.defaultValue!=null&&xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)b1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=jn(Wi.current),jn(Bt.current),xl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(l=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:vl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return ze(t),null;case 13:if(me(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&ut!==null&&t.mode&1&&!(t.flags&128))qh(),br(),t.flags|=98560,l=!1;else if(l=xl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[Nt]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else At!==null&&(Su(At),At=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?be===0&&(be=3):kc())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Mr(),du(e,t),e===null&&Bi(t.stateNode.containerInfo),ze(t),null;case 10:return dc(t.type._context),ze(t),null;case 17:return nt(t.type)&&co(),ze(t),null;case 19:if(me(ye),l=t.memoizedState,l===null)return ze(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)ti(l,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,ti(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ye,ye.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ae()>Nr&&(t.flags|=128,r=!0,ti(l,!1),t.lanes=4194304)}else{if(!r)if(e=_o(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ge)return ze(t),null}else 2*Ae()-l.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,ti(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ae(),t.sibling=null,n=ye.current,de(ye,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Tc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function K0(e,t){switch(sc(t),t.tag){case 1:return nt(t.type)&&co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),me(tt),me(Ve),gc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mc(t),null;case 13:if(me(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ye),null;case 4:return Mr(),null;case 10:return dc(t.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var Pl=!1,Ue=!1,X0=typeof WeakSet=="function"?WeakSet:Set,U=null;function _r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function fu(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var of=!1;function q0(e,t){if(qa=oo,e=Oh(),lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,u=0,f=0,d=e,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==l||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++u===i&&(s=o),p===l&&++f===r&&(a=o),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qa={focusedElem:e,selectionRange:n},oo=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,v=g.memoizedState,m=t.stateNode,C=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:It(t.type,S),v);m.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(R){Ie(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=of,of=!1,g}function xi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&fu(t,n,l)}i=i.next}while(i!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function D1(e){var t=e.alternate;t!==null&&(e.alternate=null,D1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[ji],delete t[Za],delete t[b0],delete t[D0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function M1(e){return e.tag===5||e.tag===3||e.tag===4}function sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||M1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=uo));else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,n),e=e.sibling;e!==null;)hu(e,t,n),e=e.sibling}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}var Oe=null,Pt=!1;function nn(e,t,n){for(n=n.child;n!==null;)L1(e,t,n),n=n.sibling}function L1(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Bo,n)}catch{}switch(n.tag){case 5:Ue||_r(n,t);case 6:var r=Oe,i=Pt;Oe=null,nn(e,t,n),Oe=r,Pt=i,Oe!==null&&(Pt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Pt?(e=Oe,n=n.stateNode,e.nodeType===8?As(e.parentNode,n):e.nodeType===1&&As(e,n),Li(e)):As(Oe,n.stateNode));break;case 4:r=Oe,i=Pt,Oe=n.stateNode.containerInfo,Pt=!0,nn(e,t,n),Oe=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&fu(n,t,o),i=i.next}while(i!==r)}nn(e,t,n);break;case 1:if(!Ue&&(_r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ie(n,t,s)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,nn(e,t,n),Ue=r):nn(e,t,n);break;default:nn(e,t,n)}}function af(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new X0),t.forEach(function(r){var i=i_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Oe=s.stateNode,Pt=!1;break e;case 3:Oe=s.stateNode.containerInfo,Pt=!0;break e;case 4:Oe=s.stateNode.containerInfo,Pt=!0;break e}s=s.return}if(Oe===null)throw Error(N(160));L1(l,o,i),Oe=null,Pt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)N1(t,e),t=t.sibling}function N1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Dt(e),r&4){try{xi(3,e,e.return),Vo(3,e)}catch(S){Ie(e,e.return,S)}try{xi(5,e,e.return)}catch(S){Ie(e,e.return,S)}}break;case 1:Rt(t,e),Dt(e),r&512&&n!==null&&_r(n,n.return);break;case 5:if(Rt(t,e),Dt(e),r&512&&n!==null&&_r(n,n.return),e.flags&32){var i=e.stateNode;try{Ei(i,"")}catch(S){Ie(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&rh(i,l),ja(s,o);var u=ja(s,l);for(o=0;o<a.length;o+=2){var f=a[o],d=a[o+1];f==="style"?ah(i,d):f==="dangerouslySetInnerHTML"?oh(i,d):f==="children"?Ei(i,d):$u(i,f,d,u)}switch(s){case"input":La(i,l);break;case"textarea":ih(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?xr(i,!!l.multiple,h,!1):p!==!!l.multiple&&(l.defaultValue!=null?xr(i,!!l.multiple,l.defaultValue,!0):xr(i,!!l.multiple,l.multiple?[]:"",!1))}i[ji]=l}catch(S){Ie(e,e.return,S)}}break;case 6:if(Rt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){Ie(e,e.return,S)}}break;case 3:if(Rt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(S){Ie(e,e.return,S)}break;case 4:Rt(t,e),Dt(e);break;case 13:Rt(t,e),Dt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Pc=Ae())),r&4&&af(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||f,Rt(t,e),Ue=u):Rt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(U=e,f=e.child;f!==null;){for(d=U=f;U!==null;){switch(p=U,h=p.child,p.tag){case 0:case 11:case 14:case 15:xi(4,p,p.return);break;case 1:_r(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){Ie(r,n,S)}}break;case 5:_r(p,p.return);break;case 22:if(p.memoizedState!==null){cf(d);continue}}h!==null?(h.return=p,U=h):cf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=sh("display",o))}catch(S){Ie(e,e.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){Ie(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Rt(t,e),Dt(e),r&4&&af(e);break;case 21:break;default:Rt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(M1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ei(i,""),r.flags&=-33);var l=sf(e);mu(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=sf(e);hu(e,s,o);break;default:throw Error(N(161))}}catch(a){Ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Q0(e,t,n){U=e,O1(e)}function O1(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pl;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Ue;s=Pl;var u=Ue;if(Pl=o,(Ue=a)&&!u)for(U=i;U!==null;)o=U,a=o.child,o.tag===22&&o.memoizedState!==null?df(i):a!==null?(a.return=o,U=a):df(i);for(;l!==null;)U=l,O1(l),l=l.sibling;U=i,Pl=s,Ue=u}uf(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,U=l):uf(e)}}function uf(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:It(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&$d(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$d(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Li(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ue||t.flags&512&&pu(t)}catch(p){Ie(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function cf(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function df(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(a){Ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Ie(t,i,a)}}var l=t.return;try{pu(t)}catch(a){Ie(t,l,a)}break;case 5:var o=t.return;try{pu(t)}catch(a){Ie(t,o,a)}}}catch(a){Ie(t,t.return,a)}if(t===e){U=null;break}var s=t.sibling;if(s!==null){s.return=t.return,U=s;break}U=t.return}}var J0=Math.ceil,vo=Zt.ReactCurrentDispatcher,Rc=Zt.ReactCurrentOwner,St=Zt.ReactCurrentBatchConfig,ie=0,Le=null,we=null,Be=0,st=0,Sr=An(0),be=0,Vi=null,Vn=0,$o=0,Ic=0,Ri=null,Ze=null,Pc=0,Nr=1/0,Gt=null,xo=!1,gu=null,Cn=null,Al=!1,cn=null,Ro=0,Ii=0,Cu=null,Xl=-1,ql=0;function qe(){return ie&6?Ae():Xl!==-1?Xl:Xl=Ae()}function _n(e){return e.mode&1?ie&2&&Be!==0?Be&-Be:L0.transition!==null?(ql===0&&(ql=yh()),ql):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Th(e.type)),e):1}function kt(e,t,n,r){if(50<Ii)throw Ii=0,Cu=null,Error(N(185));Yi(e,n,r),(!(ie&2)||e!==Le)&&(e===Le&&(!(ie&2)&&($o|=n),be===4&&an(e,Be)),rt(e,r),n===1&&ie===0&&!(t.mode&1)&&(Nr=Ae()+500,Go&&Tn()))}function rt(e,t){var n=e.callbackNode;LC(e,t);var r=lo(e,e===Le?Be:0);if(r===0)n!==null&&Sd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sd(n),t===1)e.tag===0?M0(ff.bind(null,e)):$h(ff.bind(null,e)),w0(function(){!(ie&6)&&Tn()}),n=null;else{switch(vh(r)){case 1:n=Ju;break;case 4:n=_h;break;case 16:n=io;break;case 536870912:n=Sh;break;default:n=io}n=H1(n,B1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function B1(e,t){if(Xl=-1,ql=0,ie&6)throw Error(N(327));var n=e.callbackNode;if(Tr()&&e.callbackNode!==n)return null;var r=lo(e,e===Le?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var i=ie;ie|=2;var l=j1();(Le!==e||Be!==t)&&(Gt=null,Nr=Ae()+500,zn(e,t));do try{e_();break}catch(s){F1(e,s)}while(!0);cc(),vo.current=l,ie=i,we!==null?t=0:(Le=null,Be=0,t=be)}if(t!==0){if(t===2&&(i=Ha(e),i!==0&&(r=i,t=_u(e,i))),t===1)throw n=Vi,zn(e,0),an(e,r),rt(e,Ae()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Y0(i)&&(t=Io(e,r),t===2&&(l=Ha(e),l!==0&&(r=l,t=_u(e,l))),t===1))throw n=Vi,zn(e,0),an(e,r),rt(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Nn(e,Ze,Gt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Pc+500-Ae(),10<t)){if(lo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ya(Nn.bind(null,e,Ze,Gt),t);break}Nn(e,Ze,Gt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Tt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J0(r/1960))-r,10<r){e.timeoutHandle=Ya(Nn.bind(null,e,Ze,Gt),r);break}Nn(e,Ze,Gt);break;case 5:Nn(e,Ze,Gt);break;default:throw Error(N(329))}}}return rt(e,Ae()),e.callbackNode===n?B1.bind(null,e):null}function _u(e,t){var n=Ri;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Su(t)),e}function Su(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Y0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Et(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Ic,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function ff(e){if(ie&6)throw Error(N(327));Tr();var t=lo(e,0);if(!(t&1))return rt(e,Ae()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=Ha(e);r!==0&&(t=r,n=_u(e,r))}if(n===1)throw n=Vi,zn(e,0),an(e,t),rt(e,Ae()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,Ze,Gt),rt(e,Ae()),null}function Ac(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Nr=Ae()+500,Go&&Tn())}}function $n(e){cn!==null&&cn.tag===0&&!(ie&6)&&Tr();var t=ie;ie|=1;var n=St.transition,r=oe;try{if(St.transition=null,oe=1,e)return e()}finally{oe=r,St.transition=n,ie=t,!(ie&6)&&Tn()}}function Tc(){st=Sr.current,me(Sr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k0(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&co();break;case 3:Mr(),me(tt),me(Ve),gc();break;case 5:mc(r);break;case 4:Mr();break;case 13:me(ye);break;case 19:me(ye);break;case 10:dc(r.type._context);break;case 22:case 23:Tc()}n=n.return}if(Le=e,we=e=Sn(e.current,null),Be=st=t,be=0,Vi=null,Ic=$o=Vn=0,Ze=Ri=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Fn=null}return e}function F1(e,t){do{var n=we;try{if(cc(),Vl.current=yo,So){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}So=!1}if(Hn=0,Me=Ee=ve=null,vi=!1,Gi=0,Rc.current=null,n===null||n.return===null){be=1,Vi=t,we=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=Be,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Yd(o);if(h!==null){h.flags&=-257,Zd(h,o,s,l,t),h.mode&1&&Jd(l,u,t),t=h,a=u;var g=t.updateQueue;if(g===null){var S=new Set;S.add(a),t.updateQueue=S}else g.add(a);break e}else{if(!(t&1)){Jd(l,u,t),kc();break e}a=Error(N(426))}}else if(ge&&s.mode&1){var v=Yd(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Zd(v,o,s,l,t),ac(Lr(a,s));break e}}l=a=Lr(a,s),be!==4&&(be=2),Ri===null?Ri=[l]:Ri.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=v1(l,a,t);Vd(l,m);break e;case 1:s=a;var C=l.type,_=l.stateNode;if(!(l.flags&128)&&(typeof C.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Cn===null||!Cn.has(_)))){l.flags|=65536,t&=-t,l.lanes|=t;var R=x1(l,s,t);Vd(l,R);break e}}l=l.return}while(l!==null)}W1(n)}catch(A){t=A,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function j1(){var e=vo.current;return vo.current=yo,e===null?yo:e}function kc(){(be===0||be===3||be===2)&&(be=4),Le===null||!(Vn&268435455)&&!($o&268435455)||an(Le,Be)}function Io(e,t){var n=ie;ie|=2;var r=j1();(Le!==e||Be!==t)&&(Gt=null,zn(e,t));do try{Z0();break}catch(i){F1(e,i)}while(!0);if(cc(),ie=n,vo.current=r,we!==null)throw Error(N(261));return Le=null,Be=0,be}function Z0(){for(;we!==null;)z1(we)}function e_(){for(;we!==null&&!PC();)z1(we)}function z1(e){var t=U1(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?W1(e):we=t,Rc.current=null}function W1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=K0(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,we=null;return}}else if(n=$0(n,t,st),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);be===0&&(be=5)}function Nn(e,t,n){var r=oe,i=St.transition;try{St.transition=null,oe=1,t_(e,t,n,r)}finally{St.transition=i,oe=r}return null}function t_(e,t,n,r){do Tr();while(cn!==null);if(ie&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(NC(e,l),e===Le&&(we=Le=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,H1(io,function(){return Tr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=St.transition,St.transition=null;var o=oe;oe=1;var s=ie;ie|=4,Rc.current=null,q0(e,n),N1(n,e),v0(Qa),oo=!!qa,Qa=qa=null,e.current=n,Q0(n),AC(),ie=s,oe=o,St.transition=l}else e.current=n;if(Al&&(Al=!1,cn=e,Ro=i),l=e.pendingLanes,l===0&&(Cn=null),wC(n.stateNode),rt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xo)throw xo=!1,e=gu,gu=null,e;return Ro&1&&e.tag!==0&&Tr(),l=e.pendingLanes,l&1?e===Cu?Ii++:(Ii=0,Cu=e):Ii=0,Tn(),null}function Tr(){if(cn!==null){var e=vh(Ro),t=St.transition,n=oe;try{if(St.transition=null,oe=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Ro=0,ie&6)throw Error(N(331));var i=ie;for(ie|=4,U=e.current;U!==null;){var l=U,o=l.child;if(U.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(U=u;U!==null;){var f=U;switch(f.tag){case 0:case 11:case 15:xi(8,f,l)}var d=f.child;if(d!==null)d.return=f,U=d;else for(;U!==null;){f=U;var p=f.sibling,h=f.return;if(D1(f),f===u){U=null;break}if(p!==null){p.return=h,U=p;break}U=h}}}var g=l.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}U=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,U=o;else e:for(;U!==null;){if(l=U,l.flags&2048)switch(l.tag){case 0:case 11:case 15:xi(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,U=m;break e}U=l.return}}var C=e.current;for(U=C;U!==null;){o=U;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,U=_;else e:for(o=C;U!==null;){if(s=U,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Vo(9,s)}}catch(A){Ie(s,s.return,A)}if(s===o){U=null;break e}var R=s.sibling;if(R!==null){R.return=s.return,U=R;break e}U=s.return}}if(ie=i,Tn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Bo,e)}catch{}r=!0}return r}finally{oe=n,St.transition=t}}return!1}function pf(e,t,n){t=Lr(n,t),t=v1(e,t,1),e=gn(e,t,1),t=qe(),e!==null&&(Yi(e,1,t),rt(e,t))}function Ie(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Lr(n,e),e=x1(t,e,1),t=gn(t,e,1),e=qe(),t!==null&&(Yi(t,1,e),rt(t,e));break}}t=t.return}}function n_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Be&n)===n&&(be===4||be===3&&(Be&130023424)===Be&&500>Ae()-Pc?zn(e,0):Ic|=n),rt(e,t)}function G1(e,t){t===0&&(e.mode&1?(t=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):t=1);var n=qe();e=Jt(e,t),e!==null&&(Yi(e,t,n),rt(e,n))}function r_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),G1(e,n)}function i_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),G1(e,n)}var U1;U1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,V0(e,t,n);et=!!(e.flags&131072)}else et=!1,ge&&t.flags&1048576&&Kh(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kl(e,t),e=t.pendingProps;var i=Er(t,Ve.current);Ar(t,n),i=_c(null,t,r,e,i,n);var l=Sc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(l=!0,fo(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pc(t),i.updater=Ho,t.stateNode=i,i._reactInternals=t,lu(t,r,e,n),t=au(null,t,r,!0,l,n)):(t.tag=0,ge&&l&&oc(t),Ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=o_(r),e=It(r,e),i){case 0:t=su(null,t,r,e,n);break e;case 1:t=nf(null,t,r,e,n);break e;case 11:t=ef(null,t,r,e,n);break e;case 14:t=tf(null,t,r,It(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),su(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),nf(e,t,r,i,n);case 3:e:{if(A1(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Zh(e,t),Co(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Lr(Error(N(423)),t),t=rf(e,t,r,n,i);break e}else if(r!==i){i=Lr(Error(N(424)),t),t=rf(e,t,r,n,i);break e}else for(ut=mn(t.stateNode.containerInfo.firstChild),ct=t,ge=!0,At=null,n=Jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=Yt(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return e1(t),e===null&&nu(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ja(r,i)?o=null:l!==null&&Ja(r,l)&&(t.flags|=32),P1(e,t),Ke(e,t,o,n),t.child;case 6:return e===null&&nu(t),null;case 13:return T1(e,t,n);case 4:return hc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),ef(e,t,r,i,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,de(mo,r._currentValue),r._currentValue=o,l!==null)if(Et(l.value,o)){if(l.children===i.children&&!tt.current){t=Yt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Kt(-1,n&-n),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ru(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(N(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ru(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ar(t,n),i=yt(i),r=r(i),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,i=It(r,t.pendingProps),i=It(r.type,i),tf(e,t,r,i,n);case 15:return R1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),Kl(e,t),t.tag=1,nt(r)?(e=!0,fo(t)):e=!1,Ar(t,n),y1(t,r,i),lu(t,r,i,n),au(null,t,r,!0,e,n);case 19:return k1(e,t,n);case 22:return I1(e,t,n)}throw Error(N(156,t.tag))};function H1(e,t){return Ch(e,t)}function l_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new l_(e,t,n,r)}function wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function o_(e){if(typeof e=="function")return wc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xu)return 11;if(e===qu)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ql(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")wc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ur:return Wn(n.children,i,l,t);case Ku:o=8,i|=8;break;case wa:return e=_t(12,n,t,i|2),e.elementType=wa,e.lanes=l,e;case Ea:return e=_t(13,n,t,i),e.elementType=Ea,e.lanes=l,e;case ba:return e=_t(19,n,t,i),e.elementType=ba,e.lanes=l,e;case eh:return Ko(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yp:o=10;break e;case Zp:o=9;break e;case Xu:o=11;break e;case qu:o=14;break e;case ln:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=_t(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Wn(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function Ko(e,t,n,r){return e=_t(22,e,r,t),e.elementType=eh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ls(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function Ns(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function s_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ms(0),this.expirationTimes=ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ec(e,t,n,r,i,l,o,s,a){return e=new s_(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_t(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(l),e}function a_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function V1(e){if(!e)return In;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(nt(n))return Vh(e,n,t)}return t}function $1(e,t,n,r,i,l,o,s,a){return e=Ec(n,r,!0,e,i,l,o,s,a),e.context=V1(null),n=e.current,r=qe(),i=_n(n),l=Kt(r,i),l.callback=t??null,gn(n,l,i),e.current.lanes=i,Yi(e,i,r),rt(e,r),e}function Xo(e,t,n,r){var i=t.current,l=qe(),o=_n(i);return n=V1(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(i,t,o),e!==null&&(kt(e,i,o,l),Hl(e,i,o)),o}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bc(e,t){hf(e,t),(e=e.alternate)&&hf(e,t)}function u_(){return null}var K1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dc(e){this._internalRoot=e}qo.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Xo(e,t,null,null)};qo.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){Xo(null,e,null,null)}),t[Qt]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ih();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&Ah(e)}};function Mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mf(){}function c_(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Po(o);l.call(u)}}var o=$1(t,r,e,0,null,!1,!1,"",mf);return e._reactRootContainer=o,e[Qt]=o.current,Bi(e.nodeType===8?e.parentNode:e),$n(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Po(a);s.call(u)}}var a=Ec(e,0,!1,null,null,!1,!1,"",mf);return e._reactRootContainer=a,e[Qt]=a.current,Bi(e.nodeType===8?e.parentNode:e),$n(function(){Xo(t,a,n,r)}),a}function Jo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=Po(o);s.call(a)}}Xo(t,o,e,i)}else o=c_(n,t,e,i,r);return Po(o)}xh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pi(t.pendingLanes);n!==0&&(Yu(t,n|1),rt(t,Ae()),!(ie&6)&&(Nr=Ae()+500,Tn()))}break;case 13:$n(function(){var r=Jt(e,1);if(r!==null){var i=qe();kt(r,e,1,i)}}),bc(e,1)}};Zu=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=qe();kt(t,e,134217728,n)}bc(e,134217728)}};Rh=function(e){if(e.tag===13){var t=_n(e),n=Jt(e,t);if(n!==null){var r=qe();kt(n,e,t,r)}bc(e,t)}};Ih=function(){return oe};Ph=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Wa=function(e,t,n){switch(t){case"input":if(La(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wo(r);if(!i)throw Error(N(90));nh(r),La(r,i)}}}break;case"textarea":ih(e,n);break;case"select":t=n.value,t!=null&&xr(e,!!n.multiple,t,!1)}};dh=Ac;fh=$n;var d_={usingClientEntryPoint:!1,Events:[el,pr,Wo,uh,ch,Ac]},ni={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f_={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mh(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||u_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Bo=Tl.inject(f_),Ot=Tl}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d_;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mc(t))throw Error(N(200));return a_(e,t,null,n)};pt.createRoot=function(e,t){if(!Mc(e))throw Error(N(299));var n=!1,r="",i=K1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ec(e,1,!1,null,null,n,!1,r,i),e[Qt]=t.current,Bi(e.nodeType===8?e.parentNode:e),new Dc(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=mh(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return $n(e)};pt.hydrate=function(e,t,n){if(!Qo(t))throw Error(N(200));return Jo(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!Mc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=K1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=$1(t,null,e,1,n??null,i,!1,l,o),e[Qt]=t.current,Bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qo(t)};pt.render=function(e,t,n){if(!Qo(t))throw Error(N(200));return Jo(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Qo(e))throw Error(N(40));return e._reactRootContainer?($n(function(){Jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};pt.unstable_batchedUpdates=Ac;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qo(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Jo(e,t,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function X1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X1)}catch(e){console.error(e)}}X1(),Xp.exports=pt;var p_=Xp.exports,gf=p_;Ta.createRoot=gf.createRoot,Ta.hydrateRoot=gf.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$i.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const Cf="popstate";function h_(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return yu("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ao(i)}return g_(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function m_(){return Math.random().toString(36).substr(2,8)}function _f(e,t){return{usr:e.state,key:e.key,idx:t}}function yu(e,t,n,r){return n===void 0&&(n=null),$i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hr(t):t,{state:n,key:t&&t.key||r||m_()})}function Ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=dn.Pop,a=null,u=f();u==null&&(u=0,o.replaceState($i({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){s=dn.Pop;let v=f(),m=v==null?null:v-u;u=v,a&&a({action:s,location:S.location,delta:m})}function p(v,m){s=dn.Push;let C=yu(S.location,v,m);u=f()+1;let _=_f(C,u),R=S.createHref(C);try{o.pushState(_,"",R)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(R)}l&&a&&a({action:s,location:S.location,delta:1})}function h(v,m){s=dn.Replace;let C=yu(S.location,v,m);u=f();let _=_f(C,u),R=S.createHref(C);o.replaceState(_,"",R),l&&a&&a({action:s,location:S.location,delta:0})}function g(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,C=typeof v=="string"?v:Ao(v);return C=C.replace(/ $/,"%20"),Pe(m,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,m)}let S={get action(){return s},get location(){return e(i,o)},listen(v){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Cf,d),a=v,()=>{i.removeEventListener(Cf,d),a=null}},createHref(v){return t(i,v)},createURL:g,encodeLocation(v){let m=g(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:h,go(v){return o.go(v)}};return S}var Sf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sf||(Sf={}));function C_(e,t,n){return n===void 0&&(n="/"),__(e,t,n)}function __(e,t,n,r){let i=typeof t=="string"?Hr(t):t,l=Or(i.pathname||"/",n);if(l==null)return null;let o=q1(e);S_(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let u=E_(l);s=k_(o[a],u)}return s}function q1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(Pe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=yn([r,a.relativePath]),f=n.concat(a);l.children&&l.children.length>0&&(Pe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),q1(l.children,t,f,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:A_(u,l.index),routesMeta:f})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of Q1(l.path))i(l,o,a)}),t}function Q1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Q1(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function S_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:T_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const y_=/^:[\w-]+$/,v_=3,x_=2,R_=1,I_=10,P_=-2,yf=e=>e==="*";function A_(e,t){let n=e.split("/"),r=n.length;return n.some(yf)&&(r+=P_),t&&(r+=x_),n.filter(i=>!yf(i)).reduce((i,l)=>i+(y_.test(l)?v_:l===""?R_:I_),r)}function T_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function k_(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,f=l==="/"?t:t.slice(l.length)||"/",d=vu({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},f),p=a.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:yn([l,d.pathname]),pathnameBase:N_(yn([l,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(l=yn([l,d.pathnameBase]))}return o}function vu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=w_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:p,isOptional:h}=f;if(p==="*"){let S=s[d]||"";o=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const g=s[d];return h&&!g?u[p]=void 0:u[p]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function w_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function E_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const b_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D_=e=>b_.test(e);function M_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hr(e):e,l;if(n)if(D_(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Lc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=vf(n.substring(1),"/"):l=vf(n,t)}else l=t;return{pathname:l,search:O_(r),hash:B_(i)}}function vf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Os(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function J1(e,t){let n=L_(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Y1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hr(e):(i=$i({},e),Pe(!i.pathname||!i.pathname.includes("?"),Os("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Os("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Os("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let a=M_(i,s),u=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||f)&&(a.pathname+="/"),a}const yn=e=>e.join("/").replace(/\/\/+/g,"/"),N_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,B_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function F_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Z1=["post","put","patch","delete"];new Set(Z1);const j_=["get",...Z1];new Set(j_);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}const Yo=T.createContext(null),em=T.createContext(null),kn=T.createContext(null),Zo=T.createContext(null),wn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),tm=T.createContext(null);function z_(e,t){let{relative:n}=t===void 0?{}:t;nl()||Pe(!1);let{basename:r,navigator:i}=T.useContext(kn),{hash:l,pathname:o,search:s}=es(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:yn([r,o])),i.createHref({pathname:a,search:s,hash:l})}function nl(){return T.useContext(Zo)!=null}function rl(){return nl()||Pe(!1),T.useContext(Zo).location}function nm(e){T.useContext(kn).static||T.useLayoutEffect(e)}function Nc(){let{isDataRoute:e}=T.useContext(wn);return e?Z_():W_()}function W_(){nl()||Pe(!1);let e=T.useContext(Yo),{basename:t,future:n,navigator:r}=T.useContext(kn),{matches:i}=T.useContext(wn),{pathname:l}=rl(),o=JSON.stringify(J1(i,n.v7_relativeSplatPath)),s=T.useRef(!1);return nm(()=>{s.current=!0}),T.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=Y1(u,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:yn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,l,e])}function il(){let{matches:e}=T.useContext(wn),t=e[e.length-1];return t?t.params:{}}function es(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(kn),{matches:i}=T.useContext(wn),{pathname:l}=rl(),o=JSON.stringify(J1(i,r.v7_relativeSplatPath));return T.useMemo(()=>Y1(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function G_(e,t){return U_(e,t)}function U_(e,t,n,r){nl()||Pe(!1);let{navigator:i}=T.useContext(kn),{matches:l}=T.useContext(wn),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=rl(),f;if(t){var d;let v=typeof t=="string"?Hr(t):t;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||Pe(!1),f=v}else f=u;let p=f.pathname||"/",h=p;if(a!=="/"){let v=a.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=C_(e,{pathname:h}),S=X_(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:yn([a,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:yn([a,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),l,n,r);return t&&S?T.createElement(Zo.Provider,{value:{location:Ki({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:dn.Pop}},S):S}function H_(){let e=Y_(),t=F_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const V_=T.createElement(H_,null);class $_ extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(wn.Provider,{value:this.props.routeContext},T.createElement(tm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K_(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Yo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(wn.Provider,{value:t},r)}function X_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||Pe(!1),o=o.slice(0,Math.min(o.length,f+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:p,errors:h}=n,g=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||g){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,p)=>{let h,g=!1,S=null,v=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,S=d.route.errorElement||V_,a&&(u<0&&p===0?(eS("route-fallback"),g=!0,v=null):u===p&&(g=!0,v=d.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),C=()=>{let _;return h?_=S:g?_=v:d.route.Component?_=T.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=f,T.createElement(K_,{match:d,routeContext:{outlet:f,matches:m,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?T.createElement($_,{location:n.location,revalidation:n.revalidation,component:S,error:h,children:C(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):C()},null)}var rm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rm||{}),im=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(im||{});function q_(e){let t=T.useContext(Yo);return t||Pe(!1),t}function Q_(e){let t=T.useContext(em);return t||Pe(!1),t}function J_(e){let t=T.useContext(wn);return t||Pe(!1),t}function lm(e){let t=J_(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function Y_(){var e;let t=T.useContext(tm),n=Q_(),r=lm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Z_(){let{router:e}=q_(rm.UseNavigateStable),t=lm(im.UseNavigateStable),n=T.useRef(!1);return nm(()=>{n.current=!0}),T.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ki({fromRouteId:t},l)))},[e,t])}const xf={};function eS(e,t,n){xf[e]||(xf[e]=!0)}function tS(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function yr(e){Pe(!1)}function nS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:l,static:o=!1,future:s}=e;nl()&&Pe(!1);let a=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:a,navigator:l,static:o,future:Ki({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=Hr(r));let{pathname:f="/",search:d="",hash:p="",state:h=null,key:g="default"}=r,S=T.useMemo(()=>{let v=Or(f,a);return v==null?null:{location:{pathname:v,search:d,hash:p,state:h,key:g},navigationType:i}},[a,f,d,p,h,g,i]);return S==null?null:T.createElement(kn.Provider,{value:u},T.createElement(Zo.Provider,{children:n,value:S}))}function om(e){let{children:t,location:n}=e;return G_(xu(t),n)}new Promise(()=>{});function xu(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let l=[...t,i];if(r.type===T.Fragment){n.push.apply(n,xu(r.props.children,l));return}r.type!==yr&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xu(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},To.apply(this,arguments)}function sm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function iS(e,t){return e.button===0&&(!t||t==="_self")&&!rS(e)}const lS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],sS="6";try{window.__reactRouterVersion=sS}catch{}const aS=T.createContext({isTransitioning:!1}),uS="startTransition",Rf=nC[uS];function cS(e){let{basename:t,children:n,future:r,window:i}=e,l=T.useRef();l.current==null&&(l.current=h_({window:i,v5Compat:!0}));let o=l.current,[s,a]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=T.useCallback(d=>{u&&Rf?Rf(()=>a(d)):a(d)},[a,u]);return T.useLayoutEffect(()=>o.listen(f),[o,f]),T.useEffect(()=>tS(r),[r]),T.createElement(nS,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const dS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pS=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:a,to:u,preventScrollReset:f,viewTransition:d}=t,p=sm(t,lS),{basename:h}=T.useContext(kn),g,S=!1;if(typeof u=="string"&&fS.test(u)&&(g=u,dS))try{let _=new URL(window.location.href),R=u.startsWith("//")?new URL(_.protocol+u):new URL(u),A=Or(R.pathname,h);R.origin===_.origin&&A!=null?u=A+R.search+R.hash:S=!0}catch{}let v=z_(u,{relative:i}),m=gS(u,{replace:o,state:s,target:a,preventScrollReset:f,relative:i,viewTransition:d});function C(_){r&&r(_),_.defaultPrevented||m(_)}return T.createElement("a",To({},p,{href:g||v,onClick:S||l?r:C,ref:n,target:a}))}),hS=T.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:o=!1,style:s,to:a,viewTransition:u,children:f}=t,d=sm(t,oS),p=es(a,{relative:d.relative}),h=rl(),g=T.useContext(em),{navigator:S,basename:v}=T.useContext(kn),m=g!=null&&CS(p)&&u===!0,C=S.encodeLocation?S.encodeLocation(p).pathname:p.pathname,_=h.pathname,R=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(_=_.toLowerCase(),R=R?R.toLowerCase():null,C=C.toLowerCase()),R&&v&&(R=Or(R,v)||R);const A=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let P=_===C||!o&&_.startsWith(C)&&_.charAt(A)==="/",k=R!=null&&(R===C||!o&&R.startsWith(C)&&R.charAt(C.length)==="/"),L={isActive:P,isPending:k,isTransitioning:m},W=P?r:void 0,I;typeof l=="function"?I=l(L):I=[l,P?"active":null,k?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let z=typeof s=="function"?s(L):s;return T.createElement(pS,To({},d,{"aria-current":W,className:I,ref:n,style:z,to:a,viewTransition:u}),typeof f=="function"?f(L):f)});var Ru;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ru||(Ru={}));var If;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(If||(If={}));function mS(e){let t=T.useContext(Yo);return t||Pe(!1),t}function gS(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:s}=t===void 0?{}:t,a=Nc(),u=rl(),f=es(e,{relative:o});return T.useCallback(d=>{if(iS(d,n)){d.preventDefault();let p=r!==void 0?r:Ao(u)===Ao(f);a(e,{replace:p,state:i,preventScrollReset:l,relative:o,viewTransition:s})}},[u,a,f,r,i,n,e,l,o,s])}function CS(e,t){t===void 0&&(t={});let n=T.useContext(aS);n==null&&Pe(!1);let{basename:r}=mS(Ru.useViewTransitionState),i=es(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=Or(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Or(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vu(i.pathname,o)!=null||vu(i.pathname,l)!=null}const _S={},Pf=e=>{let t;const n=new Set,r=(f,d)=>{const p=typeof f=="function"?f(t):f;if(!Object.is(p,t)){const h=t;t=d??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(g=>g(t,h))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>u,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(_S?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,a);return a},SS=e=>e?Pf(e):Pf;var am={exports:{}},um={},cm={exports:{}},dm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=T;function yS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vS=typeof Object.is=="function"?Object.is:yS,xS=Br.useState,RS=Br.useEffect,IS=Br.useLayoutEffect,PS=Br.useDebugValue;function AS(e,t){var n=t(),r=xS({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return IS(function(){i.value=n,i.getSnapshot=t,Bs(i)&&l({inst:i})},[e,n,t]),RS(function(){return Bs(i)&&l({inst:i}),e(function(){Bs(i)&&l({inst:i})})},[e]),PS(n),n}function Bs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vS(e,n)}catch{return!0}}function TS(e,t){return t()}var kS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?TS:AS;dm.useSyncExternalStore=Br.useSyncExternalStore!==void 0?Br.useSyncExternalStore:kS;cm.exports=dm;var wS=cm.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=T,ES=wS;function bS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var DS=typeof Object.is=="function"?Object.is:bS,MS=ES.useSyncExternalStore,LS=ts.useRef,NS=ts.useEffect,OS=ts.useMemo,BS=ts.useDebugValue;um.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var l=LS(null);if(l.current===null){var o={hasValue:!1,value:null};l.current=o}else o=l.current;l=OS(function(){function a(h){if(!u){if(u=!0,f=h,h=r(h),i!==void 0&&o.hasValue){var g=o.value;if(i(g,h))return d=g}return d=h}if(g=d,DS(f,h))return g;var S=r(h);return i!==void 0&&i(g,S)?(f=h,g):(f=h,d=S)}var u=!1,f,d,p=n===void 0?null:n;return[function(){return a(t())},p===null?void 0:function(){return a(p())}]},[t,n,r,i]);var s=MS(e,l[0],l[1]);return NS(function(){o.hasValue=!0,o.value=s},[s]),BS(s),s};am.exports=um;var FS=am.exports;const jS=No(FS),fm={},{useDebugValue:zS}=$t,{useSyncExternalStoreWithSelector:WS}=jS;let Af=!1;const GS=e=>e;function US(e,t=GS,n){(fm?"production":void 0)!=="production"&&n&&!Af&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Af=!0);const r=WS(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return zS(r),r}const Tf=e=>{(fm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?SS(e):e,n=(r,i)=>US(t,r,i);return Object.assign(n,t),n},Oc=e=>e?Tf(e):Tf;function HS(){const e=localStorage.getItem("stm32-theme");return e==="light"||e==="dark"?e:"dark"}function VS(e){document.documentElement.dataset.theme=e,localStorage.setItem("stm32-theme",e)}const Xt=Oc(e=>({sidebarOpen:!0,activeView:"pin",mode:"learn",theme:HS(),toggleSidebar:()=>e(t=>({sidebarOpen:!t.sidebarOpen})),setActiveView:t=>e({activeView:t}),setMode:t=>e({mode:t}),toggleTheme:()=>e(t=>{const n=t.theme==="dark"?"light":"dark";return VS(n),{theme:n}})})),pm="stm32-learn-progress";function $S(){try{const e=localStorage.getItem(pm);return e?JSON.parse(e):{}}catch{return{}}}function Fs(e){localStorage.setItem(pm,JSON.stringify(e))}const ll=Oc((e,t)=>({modules:$S(),completeModule:n=>e(r=>{const i={...r.modules,[n]:{...r.modules[n]||{quizScore:null,codeSaved:!1},completed:!0}};return Fs(i),{modules:i}}),setQuizScore:(n,r)=>e(i=>{const l={...i.modules,[n]:{...i.modules[n]||{completed:!1,codeSaved:!1},quizScore:r}};return Fs(l),{modules:l}}),setCodeSaved:n=>e(r=>{const i={...r.modules,[n]:{...r.modules[n]||{completed:!1,quizScore:null},codeSaved:!0}};return Fs(i),{modules:i}}),getOverallProgress:()=>{const n=t().modules,r=22,i=Object.values(n).filter(l=>l.completed).length;return Math.round(i/r*100)}})),vn=[{id:"01-intro",title:"平台概述",level:1},{id:"02-gpio",title:"GPIO 引脚控制",level:1},{id:"03-rcc",title:"时钟系统 RCC",level:1},{id:"04-nvic",title:"中断 NVIC",level:1},{id:"05-systick",title:"SysTick 定时器",level:1},{id:"06-tim",title:"通用定时器 TIM",level:2},{id:"07-pwm",title:"PWM 输出",level:2},{id:"08-adc",title:"ADC 模数转换",level:2},{id:"09-uart",title:"USART 串口",level:2},{id:"10-dac",title:"DAC 数模转换",level:2},{id:"11-spi",title:"SPI 总线",level:3},{id:"12-i2c",title:"I2C 总线",level:3},{id:"13-dma",title:"DMA 直接存储器访问",level:3},{id:"14-can",title:"CAN 总线",level:3},{id:"15-adv-tim",title:"高级定时器",level:4},{id:"16-rtc",title:"RTC 实时时钟",level:4},{id:"17-wdg",title:"看门狗",level:4},{id:"18-pwr",title:"低功耗模式",level:4},{id:"19-freertos",title:"FreeRTOS",level:5},{id:"20-fs",title:"文件系统 FatFS",level:5},{id:"21-debug",title:"调试技术",level:5},{id:"22-project",title:"综合项目",level:5}],ns={1:{level:1,label:"入门基础",color:"var(--accent-green)"},2:{level:2,label:"核心外设",color:"var(--accent-blue)"},3:{level:3,label:"通信接口",color:"var(--accent-amber)"},4:{level:4,label:"进阶专题",color:"var(--accent-pink)"},5:{level:5,label:"系统整合",color:"var(--accent-purple)"}};function KS(e){var n;if(!e)return"var(--accent-green)";const t=vn.find(r=>r.id===e);if(!t){const r=parseInt(e.split("-")[0]);return r<=5?"var(--accent-green)":r<=9?"var(--accent-blue)":r<=14?"var(--accent-amber)":r<=18?"var(--accent-pink)":"var(--accent-purple)"}return((n=ns[t.level])==null?void 0:n.color)??"var(--accent-green)"}const Fr=vn.length,XS="_sidebar_o2o15_1",qS="_collapsed_o2o15_14",QS="_toggleWrap_o2o15_22",JS="_toggleGroup_o2o15_26",YS="_toggleBtn_o2o15_36",ZS="_toggleBtnActive_o2o15_56",ey="_nav_o2o15_63",ty="_levelGroup_o2o15_68",ny="_levelHeader_o2o15_72",ry="_levelDot_o2o15_79",iy="_levelLabel_o2o15_86",ly="_levelCount_o2o15_95",oy="_moduleItem_o2o15_102",sy="_moduleItemInactive_o2o15_122 _moduleItem_o2o15_102",ay="_moduleItemActive_o2o15_127 _moduleItem_o2o15_102",uy="_moduleDot_o2o15_135",cy="_moduleDotComplete_o2o15_143 _moduleDot_o2o15_135",dy="_moduleDotIncomplete_o2o15_148 _moduleDot_o2o15_135",fy="_moduleLabel_o2o15_153",py="_quizBadge_o2o15_160",Re={sidebar:XS,collapsed:qS,toggleWrap:QS,toggleGroup:JS,toggleBtn:YS,toggleBtnActive:ZS,nav:ey,levelGroup:ty,levelHeader:ny,levelDot:ry,levelLabel:iy,levelCount:ly,moduleItem:oy,moduleItemInactive:sy,moduleItemActive:ay,moduleDot:uy,moduleDotComplete:cy,moduleDotIncomplete:dy,moduleLabel:fy,quizBadge:py};function hy(){const e=Xt(l=>l.sidebarOpen),t=Xt(l=>l.mode),n=Xt(l=>l.setMode),r=ll(l=>l.modules);let i=0;return c.jsxs("aside",{className:`${Re.sidebar} ${e?"":Re.collapsed}`,children:[c.jsx("div",{className:Re.toggleWrap,children:c.jsxs("div",{className:Re.toggleGroup,children:[c.jsx("button",{onClick:()=>n("learn"),className:t==="learn"?Re.toggleBtnActive:Re.toggleBtn,children:"学习"}),c.jsx("button",{onClick:()=>n("practice"),className:t==="practice"?Re.toggleBtnActive:Re.toggleBtn,children:"练习"})]})}),c.jsx("nav",{className:Re.nav,children:vn.map(l=>{var f,d,p,h;const o=l.level!==i;i=l.level;const s=(f=r[l.id])==null?void 0:f.completed,a=((d=r[l.id])==null?void 0:d.quizScore)!==null&&((p=r[l.id])==null?void 0:p.quizScore)!==void 0,u=ns[l.level];return c.jsxs("div",{className:Re.levelGroup,children:[o&&u&&c.jsxs("div",{className:Re.levelHeader,children:[c.jsx("span",{className:Re.levelDot,style:{background:u.color}}),c.jsx("span",{className:Re.levelLabel,style:{color:u.color},children:u.label}),c.jsxs("span",{className:Re.levelCount,children:[vn.filter(g=>g.level===l.level).filter(g=>{var S;return(S=r[g.id])==null?void 0:S.completed}).length,"/",vn.filter(g=>g.level===l.level).length]})]}),c.jsxs(hS,{to:`/${t}/${l.id}`,className:({isActive:g})=>`${Re.moduleItem} ${g?Re.moduleItemActive:Re.moduleItemInactive}`,children:[c.jsx("span",{className:`${Re.moduleDot} ${s?Re.moduleDotComplete:Re.moduleDotIncomplete}`,style:{background:s?u==null?void 0:u.color:void 0,boxShadow:s?`0 0 6px ${u==null?void 0:u.color}44`:void 0}}),c.jsx("span",{className:Re.moduleLabel,children:l.title}),a&&c.jsxs("span",{className:Re.quizBadge,style:{color:u==null?void 0:u.color},children:[(h=r[l.id])==null?void 0:h.quizScore,"%"]})]})]},l.id)})})]})}const my=`# STM32 平台概述

## 什么是 STM32？

STM32 是意法半导体 (STMicroelectronics) 推出的一系列基于 **ARM Cortex-M** 内核的 32 位微控制器。从 2007 年发布至今，已形成覆盖 Cortex-M0/M3/M4/M7/M33 的完整产品线。

### 产品线一览

| 系列 | 内核 | 主频 | 定位 |
|------|------|------|------|
| STM32F0 | Cortex-M0 | 48MHz | 低成本入门 |
| STM32F1 | Cortex-M3 | 72MHz | 经典主流 |
| STM32F4 | Cortex-M4 | 180MHz | 高性能 + DSP |
| STM32F7 | Cortex-M7 | 216MHz | 旗舰性能 |
| STM32H7 | Cortex-M7 | 480MHz | 最新旗舰 |
| STM32L0/L4 | Cortex-M0+/M4 | 32-80MHz | 超低功耗 |
| STM32G0/G4 | Cortex-M0+/M4 | 64-170MHz | 新一代主流 |

### 本平台基于哪个型号？

本平台以 **STM32F103** (F1 系列) 为参考模型。F103 是 STM32 中最经典、使用最广的型号，学习资料丰富，适合入门和进阶。

## 开发方式对比

STM32 有两种主流开发方式：

### 寄存器编程

\`\`\`c
// 直接操作寄存器 — 精确控制，理解底层
RCC->APB2ENR |= RCC_APB2ENR_IOPAEN;
GPIOA->CRL &= ~(0xF << 0);
GPIOA->CRL |= (0x3 << 0);   // PA0: 50MHz 推挽输出
GPIOA->ODR |= (1 << 0);     // PA0 输出高电平
\`\`\`

**优点**：代码精简、执行效率高、深入理解硬件
**缺点**：可读性差、移植困难

### HAL 库编程

\`\`\`c
// ST 官方硬件抽象层 — 可读性好，快速开发
HAL_GPIO_WritePin(GPIOA, GPIO_PIN_0, GPIO_PIN_SET);
\`\`\`

**优点**：可读性好、跨型号移植方便
**缺点**：代码体积大、效率略低

> 本平台同时支持三种编程风格，建议先理解寄存器再使用库函数。

### SPL 标准外设库

SPL (Standard Peripheral Library) 介于寄存器和 HAL 之间：

\`\`\`c
// SPL 风格 — 用函数封装寄存器操作
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
GPIO_InitTypeDef cfg;
cfg.GPIO_Pin = GPIO_Pin_0;
cfg.GPIO_Speed = GPIO_Speed_50MHz;
cfg.GPIO_Mode = GPIO_Mode_Out_PP;
GPIO_Init(GPIOA, &cfg);
GPIO_SetBits(GPIOA, GPIO_Pin_0);
\`\`\`

**优点**：比寄存器可读性好，比 HAL 轻量，函数名直接反映操作意图
**缺点**：跨系列移植不如 HAL 方便

> SPL 是学习 STM32 的最佳中间路线 — 既能看到底层寄存器操作的本质，又不会陷入繁琐的位运算。

## 学习路线

本平台提供 5 级共 22 个模块：

1. **Level 1** — 入门基础：GPIO、时钟、中断、SysTick
2. **Level 2** — 核心外设：TIM、PWM、ADC、UART、DAC
3. **Level 3** — 通信接口：SPI、I2C、DMA、CAN
4. **Level 4** — 进阶专题：高级定时器、RTC、看门狗、低功耗
5. **Level 5** — 系统整合：FreeRTOS、文件系统、调试技术、综合项目

每个模块包含原理讲解、寄存器图解、交互演示、代码练习和知识测验五个环节。
`,gy=`# GPIO 通用输入输出

## 什么是 GPIO？

GPIO (General Purpose Input/Output) 是单片机最基础的外设。每个 GPIO 引脚可以配置为输入或输出模式，用于读取外部信号或控制外部设备。

STM32F103 的 GPIO 端口有 **PA、PB、PC、PD、PE、PF、PG** 共 7 组，每组 16 个引脚。

## GPIO 的 8 种工作模式

每个引脚通过 **CNF**（配置位）和 **MODE**（模式位）两个字段组合出 8 种模式：

| MODE | CNF | 模式 | 说明 |
|------|-----|------|------|
| 00 | 00 | 模拟输入 | ADC 采集模拟信号 |
| 00 | 01 | 浮空输入 | 默认输入状态，电平不确定 |
| 00 | 10 | 上拉/下拉输入 | 通过内部电阻确定默认电平 |
| 00 | 11 | 保留 | — |
| 01/10/11 | 00 | 通用推挽输出 | 能输出高低电平，最常见 |
| 01/10/11 | 01 | 通用开漏输出 | 只能拉低，不能拉高，需要外接上拉 |
| 01/10/11 | 10 | 复用推挽输出 | 外设功能（如 USART_TX）的推挽输出 |
| 01/10/11 | 11 | 复用开漏输出 | 外设功能（如 I2C_SDA）的开漏输出 |

## 推挽 vs 开漏

### 推挽输出 (Push-Pull)

内部有两个 MOSFET：
- 上管导通 → 输出高电平 (3.3V)，电流从 VDD 流出
- 下管导通 → 输出低电平 (0V)，电流流入 GND

\`\`\`text
       VDD
        │
   ┌────┴────┐
   │ PMOS (上管)
   ├─────────┤
   │ NMOS (下管)    → 输出到引脚
   └────┬────┘
        │
       GND
\`\`\`

### 开漏输出 (Open-Drain)

只有下管 NMOS，没有上管：
- 下管导通 → 输出低电平
- 下管截止 → 引脚浮空，必须外接上拉电阻才能输出高电平

**开漏的典型应用**：I2C 总线、电平转换、线与逻辑

## 关键寄存器

STM32F103 每个 GPIO 端口有 7 个 32 位寄存器：

| 寄存器 | 偏移 | 功能 |
|--------|------|------|
| CRL | 0x00 | 端口配置低寄存器 (Pin 0-7) |
| CRH | 0x04 | 端口配置高寄存器 (Pin 8-15) |
| IDR | 0x08 | 输入数据寄存器 (只读) |
| ODR | 0x0C | 输出数据寄存器 |
| BSRR | 0x10 | 位设置/清除寄存器 (原子操作) |
| BRR | 0x14 | 位复位寄存器 |
| LCKR | 0x18 | 配置锁定寄存器 |

## LED 点灯实战

点亮 PA0 连接的 LED：

\`\`\`c
// 1. 使能 GPIOA 时钟（默认关闭以省电）
RCC->APB2ENR |= RCC_APB2ENR_IOPAEN;

// 2. 配置 PA0 为推挽输出，50MHz
GPIOA->CRL &= ~(0xF << 0);   // 清除低 4 位
GPIOA->CRL |= (0x3 << 0);    // MODE0=11 (50MHz), CNF0=00 (推挽)

// 3. 输出高电平，点亮 LED
GPIOA->ODR |= (1 << 0);

// 4. 输出低电平，熄灭 LED
GPIOA->BRR = (1 << 0);       // 原子操作，更安全
\`\`\`

> 切换到练习模式，亲自写代码控制 GPIO 引脚！

## 标准库函数

使用 SPL 操作 GPIO 的常用函数：

| 函数 | 功能 | 参数 |
|------|------|------|
| \`GPIO_Init(GPIOx, &cfg)\` | 初始化引脚模式/速度 | 端口号 + GPIO_InitTypeDef 结构体 |
| \`GPIO_SetBits(GPIOx, Pin)\` | 引脚输出高电平 | 端口号 + 引脚编号 |
| \`GPIO_ResetBits(GPIOx, Pin)\` | 引脚输出低电平 | 端口号 + 引脚编号 |
| \`GPIO_WriteBit(GPIOx, Pin, val)\` | 写单个引脚电平 | 端口号 + 引脚 + Bit_SET/Bit_RESET |
| \`GPIO_Write(GPIOx, val)\` | 写整个端口 | 端口号 + 16位数据 |
| \`GPIO_ReadInputDataBit(GPIOx, Pin)\` | 读引脚输入电平 | 端口号 + 引脚编号 |

GPIO_InitTypeDef 结构体字段：
- \`GPIO_Pin\` — 引脚号（GPIO_Pin_0 ~ GPIO_Pin_15，可 \`|\` 组合）
- \`GPIO_Speed\` — 输出速率（GPIO_Speed_10MHz / _2MHz / _50MHz）
- \`GPIO_Mode\` — 工作模式（GPIO_Mode_AIN / _IN_FLOATING / _IPD / _IPU / _Out_PP / _Out_OD / _AF_PP / _AF_OD）

常用 GPIO 端口名：\`GPIOA\`, \`GPIOB\`, \`GPIOC\`, \`GPIOD\`, \`GPIOE\`, \`GPIOF\`, \`GPIOG\`

## 标准驱动流程

\`\`\`c
// 1. 使能 GPIO 时钟（APB2 总线）
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 GPIO 初始化结构体
GPIO_InitTypeDef cfg;
cfg.GPIO_Pin = GPIO_Pin_0;           // PA0
cfg.GPIO_Speed = GPIO_Speed_50MHz;   // 50MHz 输出速率
cfg.GPIO_Mode = GPIO_Mode_Out_PP;    // 推挽输出

// 3. 初始化 GPIO
GPIO_Init(GPIOA, &cfg);

// 4. 使用 GPIO
GPIO_SetBits(GPIOA, GPIO_Pin_0);     // PA0 输出高电平，点亮 LED
// GPIO_ResetBits(GPIOA, GPIO_Pin_0); // PA0 输出低电平，熄灭 LED
// uint8_t level = GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_1); // 读 PA1 电平
\`\`\`
`,Cy=`# 时钟系统 RCC

## 为什么需要时钟？

STM32 的所有外设都需要时钟信号才能工作。时钟就像单片机的心跳 —— CPU 在时钟的驱动下执行指令，外设在时钟的驱动下工作。没有时钟，芯片就是一块硅砖。

## STM32F103 的时钟树

\`\`\`
                    ┌─────────────────┐
                    │    HSI 8MHz     │  ← 内部RC振荡器
                    │   (外部 8MHz)   │  ← 外部晶振 HSE
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │    PLL ×2~×16   │  ← 倍频到 72MHz
                    │   系统时钟 SYSCLK │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
     ┌────────▼──────┐ ┌────▼──────┐ ┌────▼──────┐
     │  AHB 预分频器  │ │APB1 预分频器│ │APB2 预分频器│
     │  /1, /2, ...  │ │ /1, /2,... │ │ /1, /2,... │
     └───────┬───────┘ └─────┬──────┘ └─────┬──────┘
             │               │               │
     ┌───────▼───────┐ ┌────▼─────┐ ┌──────▼──────┐
     │ CPU, DMA,     │ │ TIM2~7,  │ │ GPIOA~C,    │
     │ SRAM, FSMC    │ │ USART2~5 │ │ TIM1, ADC,  │
     │   (HCLK)      │ │ (PCLK1)  │ │ USART1(PCLK2)│
     └───────────────┘ └──────────┘ └─────────────┘
\`\`\`

## 时钟源

| 时钟源 | 频率 | 特点 |
|-------|------|-----|
| HSI | 8 MHz | 内部RC，精度一般（1%），上电默认 |
| HSE | 4-16 MHz | 外部晶振，精度高 |
| PLL | ≤72 MHz | 倍频输出，通常配置为 72MHz |

**默认状态**：上电后 HSI 8MHz 直接作为系统时钟，PLL 关闭。

## PLL 倍频

PLL 输入 8MHz（HSI 或 HSE），输出 = 输入 × 倍频因子。

倍频因子 = PLLMUL + 2，范围 2~16。

\`\`\`c
// 配置 PLL 为 ×9 → 72MHz
RCC->CFGR |= (7 << 18);  // PLLMUL = 0111 (×9)
RCC->CR   |= (1 << 24);  // 开启 PLL
while (!(RCC->CR & (1 << 25)));  // 等待 PLL 稳定 (PLLRDY)

// 切换到 PLL 作为系统时钟
RCC->CFGR |= (2 << 0);   // SW = 10 (PLL)
while (((RCC->CFGR >> 2) & 0x3) != 2);  // 等待切换完成
\`\`\`

## 关键寄存器

### RCC_CR (Clock Control, 0x00)

| 位 | 字段 | 说明 |
|----|------|-----|
| 0 | HSION | HSI 使能（复位=1） |
| 1 | HSIRDY | HSI 就绪标记 |
| 16 | HSEON | HSE 使能 |
| 17 | HSERDY | HSE 就绪标记 |
| 24 | PLLON | PLL 使能 |
| 25 | PLLRDY | PLL 就绪标记 |

### RCC_CFGR (Clock Config, 0x04)

| 位 | 字段 | 说明 |
|----|------|-----|
| 0-1 | SW | 系统时钟选择：00=HSI, 01=HSE, 10=PLL |
| 2-3 | SWS | 系统时钟状态（只读，反映实际状态） |
| 4-7 | HPRE | AHB 预分频 |
| 8-10 | PPRE1 | APB1 预分频（最大 36MHz） |
| 11-13 | PPRE2 | APB2 预分频（最大 72MHz） |
| 18-21 | PLLMUL | PLL 倍频因子 |

### RCC_APB2ENR (APB2 外设时钟使能, 0x18)

| 位 | 字段 | 说明 |
|----|------|-----|
| 2 | IOPAEN | GPIOA 时钟 |
| 3 | IOPBEN | GPIOB 时钟 |
| 4 | IOPCEN | GPIOC 时钟 |

**重要**：使用任何外设前，必须先通过 RCC 使能其时钟！

\`\`\`c
// 使能 GPIOA 和 GPIOC 的时钟
RCC->APB2ENR |= RCC_APB2ENR_IOPAEN | RCC_APB2ENR_IOPCEN;
\`\`\`

## 典型配置流程

1. 开启 HSE 并等待稳定（可选，高速应用需要）
2. 配置 PLL 倍频因子
3. 开启 PLL 并等待稳定
4. 切换系统时钟到 PLL
5. 配置 AHB/APB 预分频器
6. 使能所需外设的时钟

## 实践要点

- **GPIO 在 APB2 总线上**，需要设置 \`APB2ENR\`
- **TIM2-7 在 APB1 总线**上，时钟上限 36MHz
- APB2 默认不分频（≤72MHz），APB1 最大 36MHz（通常分频 /2）
- 不开启外设时钟就去操作寄存器 → 硬错误（Hard Fault）

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`RCC_APB2PeriphClockCmd(periph, ENABLE/DISABLE)\` | 使能/关闭 APB2 外设时钟（GPIO、ADC1、USART1、SPI1、TIM1 等） |
| \`RCC_APB1PeriphClockCmd(periph, ENABLE/DISABLE)\` | 使能/关闭 APB1 外设时钟（TIM2-7、USART2-5、SPI2、I2C 等） |
| \`RCC_HSEConfig(RCC_HSE_ON/OFF/BYPASS)\` | 配置外部高速晶振 |
| \`RCC_PLLConfig(src, mul)\` | 配置 PLL 时钟源和倍频因子 |
| \`RCC_PLLCmd(ENABLE/DISABLE)\` | 开启/关闭 PLL |
| \`RCC_SYSCLKConfig(RCC_SYSCLKSource_HSI/HSE/PLL)\` | 选择系统时钟源 |
| \`RCC_HCLKConfig(div)\` | 配置 AHB 总线分频 |
| \`RCC_PCLK1Config(div)\` | 配置 APB1 总线分频 |
| \`RCC_PCLK2Config(div)\` | 配置 APB2 总线分频 |
| \`RCC_ADCCLKConfig(div)\` | 配置 ADC 时钟分频 |
| \`RCC_GetClocksFreq(&clocks)\` | 获取各总线当前频率 |

常用外设时钟宏：
- APB2: \`RCC_APB2Periph_GPIOA/B/C\`, \`RCC_APB2Periph_ADC1\`, \`RCC_APB2Periph_USART1\`, \`RCC_APB2Periph_SPI1\`, \`RCC_APB2Periph_TIM1\`
- APB1: \`RCC_APB1Periph_TIM2\`, \`RCC_APB1Periph_USART2\`, \`RCC_APB1Periph_SPI2\`, \`RCC_APB1Periph_I2C1\`

## 标准驱动流程

\`\`\`c
// 1. 配置 HSE（8MHz 外部晶振）
RCC_HSEConfig(RCC_HSE_ON);
while (RCC_GetFlagStatus(RCC_FLAG_HSERDY) == RESET); // 等待稳定

// 2. 配置 PLL：HSE × 9 = 72MHz
RCC_PLLConfig(RCC_PLLSource_HSE_Div1, RCC_PLLMul_9);
RCC_PLLCmd(ENABLE);
while (RCC_GetFlagStatus(RCC_FLAG_PLLRDY) == RESET);

// 3. 切换到 PLL
RCC_SYSCLKConfig(RCC_SYSCLKSource_PLLCLK);
while (RCC_GetSYSCLKSource() != 0x08);

// 4. 配置总线分频：AHB=72M, APB1=36M, APB2=72M
RCC_HCLKConfig(RCC_SYSCLK_Div1);
RCC_PCLK1Config(RCC_HCLK_Div2);
RCC_PCLK2Config(RCC_HCLK_Div1);

// 5. 使能外设时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA | RCC_APB2Periph_USART1, ENABLE);
RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);
\`\`\`
`,_y=`# 中断系统 NVIC

## 什么是中断？

中断是让 CPU 暂停当前任务、去处理紧急事件的机制。处理完后自动返回原任务继续执行。

类比：
- **轮询**：每隔一段时间检查一次邮筒（浪费 CPU 时间）
- **中断**：邮递员按门铃，你立刻去开门（CPU 只在有事时才响应）

## Cortex-M3 的异常模型

\`\`\`
优先级（数字越小优先级越高）
├── -3  Reset          ← 复位，最高优先级
├── -2  NMI            ← 不可屏蔽中断
├── -1  HardFault      ← 硬件故障
├──  ─── 分割线 ───
├──  0   SysTick       ← 系统定时器中断
├──  1   PendSV        ← 可挂起的系统服务（RTOS用）
├──  2~  外部中断      ← 外设中断（GPIO、TIM、USART...）
└──  ...
\`\`\`

## NVIC 寄存器

NVIC 基址：\`0xE000E100\`

| 寄存器 | 偏移 | 功能 |
|--------|------|-----|
| ISER0 | 0x00 | 中断使能（IRQ 0-31） |
| ISER1 | 0x04 | 中断使能（IRQ 32-63） |
| ICER0 | 0x80 | 中断除能（IRQ 0-31） |
| ICER1 | 0x84 | 中断除能（IRQ 32-63） |
| IPR0-20 | 0x300 | 中断优先级（每字节一个IRQ） |

### ISER 和 ICER

- **ISER**：写 1 使能中断，写 0 无效
- **ICER**：写 1 清除使能，写 0 无效
- ISER 可读，ICER 读回的值反映当前使能状态

\`\`\`c
// 使能 TIM2 中断 (IRQ 28)
*((volatile uint32_t*)0xE000E100) = (1 << 28);  // ISER

// 禁止 TIM2 中断
*((volatile uint32_t*)0xE000E180) = (1 << 28);  // ICER
\`\`\`

### 优先级分组

Cortex-M3 使用 4 位优先级，分为抢占优先级和子优先级：

| 分组 | 抢占位 | 子优先级位 | 抢占级数 |
|------|--------|-----------|---------|
| 0 | 0 | 4 | 0 |
| 4 | 2 | 2 | 4 |
| 5 | 3 | 1 | 8 |
| 7 | 4 | 0 | 16 |

- **抢占优先级**：高优先级的可以打断低优先级的
- **子优先级**：相同抢占优先级之间按子优先级排序

## STM32F1 常用中断向量

| IRQ号 | 中断源 | 说明 |
|-------|--------|-----|
| 0 | WWDG | 窗口看门狗 |
| 5 | EXTI0 | 外部中断线0 |
| 14 | USART1 | 串口1 |
| 15 | TIM2 | 定时器2全局 |
| 18 | ADC1/2 | ADC全局 |
| 28 | USART2 | 串口2 |

## 使用中断的步骤

1. **配置外设**：设置外设的中断触发条件（如 TIM 溢出）
2. **使能外设中断**：在外设寄存器中使能中断源（如 TIM_DIER）
3. **配置 NVIC 优先级**：设置合适的抢占/子优先级
4. **使能 NVIC 通道**：通过 ISER 开启对应 IRQ
5. **写 ISR 函数**：实现中断服务函数

\`\`\`c
// 示例：配置 TIM2 中断
RCC->APB1ENR |= (1 << 0);       // 1. 使能 TIM2 时钟
TIM2->DIER   |= (1 << 0);       // 2. 使能更新中断
*((uint32_t*)0xE000E400 + 7) = 0xA0; // 3. IPR7: TIM2 优先级 = 10
*((uint32_t*)0xE000E100) = (1 << 28); // 4. 使能 NVIC IRQ28
\`\`\`

\`\`\`c
// ISR 函数（简化示意，实际需要 CMSIS 命名约定）
void TIM2_IRQHandler(void) {
    if (TIM2->SR & (1 << 0)) {  // 检查更新标志
        TIM2->SR &= ~(1 << 0);  // 清除标志
        // 处理定时器溢出事件
    }
}
\`\`\`

## 实践要点

- 外设中断需要**两级使能**：外设内 + NVIC
- ISR 中必须清除中断标志，否则会反复触发
- ISR 要尽量短：只做必要的事，把复杂处理放到主循环
- 优先级配置要在使能之前，避免竞争条件

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`NVIC_PriorityGroupConfig(group)\` | 设置优先级分组（0-7） |
| \`NVIC_Init(&cfg)\` | 初始化 NVIC 中断通道 |
| \`NVIC_SetVectorTable(base, offset)\` | 设置向量表基地址和偏移 |

NVIC_InitTypeDef 结构体：
- \`NVIC_IRQChannel\` — 中断通道号（如 TIM2_IRQn, USART1_IRQn）
- \`NVIC_IRQChannelPreemptionPriority\` — 抢占优先级
- \`NVIC_IRQChannelSubPriority\` — 子优先级
- \`NVIC_IRQChannelCmd\` — ENABLE 或 DISABLE

常用 IRQ 通道：
- \`TIM2_IRQn\` (28), \`USART1_IRQn\` (37), \`EXTI0_IRQn\` (6), \`ADC1_2_IRQn\` (18)

## 标准驱动流程

\`\`\`c
// 1. 设置优先级分组（2位抢占，2位子优先级）
NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);

// 2. 配置 NVIC 中断
NVIC_InitTypeDef nvicCfg;
nvicCfg.NVIC_IRQChannel = TIM2_IRQn;
nvicCfg.NVIC_IRQChannelPreemptionPriority = 1;
nvicCfg.NVIC_IRQChannelSubPriority = 0;
nvicCfg.NVIC_IRQChannelCmd = ENABLE;

// 3. 初始化
NVIC_Init(&nvicCfg);

// 4. 外设侧还要使能中断（如 TIM2->DIER |= 1）
\`\`\`
`,Sy=`# SysTick 系统定时器

## 什么是 SysTick？

SysTick（System Tick Timer）是 ARM Cortex-M3 内核内置的一个 24 位递减定时器。它不属于 STM32 外设，而是 Cortex 内核的一部分，因此所有 Cortex-M3 芯片都有 SysTick。

主要用途：
- **HAL_Delay** 的基础 — 毫秒级延时全靠它
- **RTOS 心跳** — FreeRTOS 等实时操作系统用它做任务调度
- **简单定时** — 不需要占用 TIM 外设资源

## 寄存器结构

SysTick 只有 4 个寄存器（但只有 3 个常用）：

| 偏移 | 名称 | 描述 |
|------|------|------|
| 0x00 | CTRL | 控制和状态寄存器 |
| 0x04 | LOAD | 重装载值 (24-bit) |
| 0x08 | VAL | 当前计数值 (24-bit) |
| 0x0C | CALIB | 校准寄存器（通常不用） |

## CTRL 寄存器位域

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | ENABLE | 1 = 启动定时器 |
| 1 | TICKINT | 1 = 计数到 0 时产生中断 |
| 2 | CLKSOURCE | 0 = 外部时钟, 1 = CPU 时钟 (72MHz) |
| 16 | COUNTFLAG | 计数到 0 时硬件置 1，读 CTRL 自动清零 |

## 工作流程

\`\`\`
                     LOAD = 99
                        │
                        ▼
        ┌──────────────────────────────┐
        │  VAL: 99 → 98 → 97 → ... → 0 │  ← 每个 CPU 时钟周期减 1
        └──────────────────────────────┘
                        │
                        ▼ (VAL == 0)
            ┌───────────────────────┐
            │  COUNTFLAG = 1       │
            │  VAL = LOAD (重装载)  │
            │  可选: 触发中断        │
            └───────────────────────┘
\`\`\`

**关键行为：**
1. VAL 从 LOAD 值递减到 0
2. 再下一个时钟，VAL 回到 1→0 时触发 COUNTFLAG 并重装载
3. 读 CTRL 寄存器会返回 COUNTFLAG 当前值，然后硬件自动清零

## HAL_Delay 实现原理

\`\`\`c
// 简化版 HAL_Delay
void HAL_Delay(uint32_t ms) {
    // SysTick 配置为 1ms 一次溢出
    // SystemCoreClock = 72MHz
    SysTick->LOAD = (SystemCoreClock / 1000) - 1;  // 71999
    SysTick->VAL  = 0;
    SysTick->CTRL = 0x1;  // ENABLE=1, 使用 CPU 时钟

    while (ms--) {
        while (!(SysTick->CTRL & (1 << 16))) {
            // 等待 COUNTFLAG 置位
        }
        // COUNTFLAG 在读 CTRL 时自动清零
    }
}
\`\`\`

## 关键计算

- **SysTick 周期** = \`(LOAD + 1) / CPU时钟频率\`
- **1ms 延时的 LOAD 值** = \`72MHz / 1000 - 1 = 71999\`
- **计数范围** = 0x000000 ~ 0xFFFFFF (0 ~ 16,777,215)

## 与普通 TIM 的区别

| 特性 | SysTick | TIM2 |
|------|---------|------|
| 位置 | Cortex 内核内部 | STM32 APB1 总线 |
| 位数 | 24 位递减 | 16 位递增 |
| 通道 | 无 | 4 路 PWM/Capture |
| 中断 | 单一 SysTick 异常 | 可屏蔽中断 IRQ28 |
| 用途 | RTOS 心跳、HAL_Delay | 通用定时、PWM |

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`SysTick_CLKSourceConfig(src)\` | 选择时钟源（AHB 或 AHB/8） |
| \`SysTick_SetReload(val)\` | 设置重装载值（24-bit） |
| \`SysTick_CounterCmd(ENABLE/DISABLE)\` | 启停 SysTick 计数器 |
| \`SysTick_ITConfig(ENABLE/DISABLE)\` | 使能/关闭 SysTick 中断 |

## 标准驱动流程

\`\`\`c
// 1. 设置时钟源（AHB = 72MHz）
SysTick_CLKSourceConfig(SysTick_CLKSource_HCLK);

// 2. 设置 1ms 重装载值
SysTick_SetReload(72000 - 1);  // 72MHz / 1000 - 1

// 3. 使能中断（可选）
SysTick_ITConfig(ENABLE);

// 4. 启动 SysTick
SysTick_CounterCmd(ENABLE);

// 实现延时函数
void delay_ms(uint32_t ms) {
    SysTick_SetReload(72000 - 1);
    while (ms--) {
        while (!(SysTick->CTRL & (1 << 16))); // 等待 COUNTFLAG
    }
}
\`\`\`
`,yy=`# 定时器 TIM

## 定时器能做什么？

TIM 是 STM32 最强大的外设之一。核心功能：

1. **定时中断** — 精确的时间基准
2. **PWM 输出** — 控制 LED 亮度、舵机角度、电机转速
3. **输入捕获** — 测量外部信号的频率和占空比
4. **编码器接口** — 读取旋转编码器

## STM32F103 定时器分类

| 类型 | 实例 | 位数 | 通道 | 特点 |
|------|------|------|------|------|
| 基本定时器 | TIM6/7 | 16-bit | 0 | 只有定时功能 |
| 通用定时器 | TIM2/3/4 | 16-bit | 4 | PWM + 捕获 + 编码器 |
| 高级定时器 | TIM1/8 | 16-bit | 6 | 增加死区控制、刹车 |

## TIM2 寄存器 — 时基单元

时基单元包含 3 个核心寄存器：

| 偏移 | 名称 | 位宽 | 描述 |
|------|------|------|------|
| 0x28 | PSC | 16-bit | 预分频器 |
| 0x2C | ARR | 16-bit | 自动重装载值（决定周期） |
| 0x24 | CNT | 16-bit | 当前计数值 |

**溢出频率计算公式：**

\`\`\`
TIM_CLK = APB1_CLK / (PSC + 1)
        = 36MHz / (PSC + 1)     (APB1 = 36MHz)
        或 72MHz / (PSC + 1)   (APB1定时器时钟 = APB1×2 = 72MHz)

溢出频率 = TIM_CLK / (ARR + 1)
\`\`\`

**实例：** PSC=71, ARR=999
- TIM_CLK = 72MHz / (71+1) = 1MHz
- 溢出频率 = 1MHz / (999+1) = 1kHz
- 每 1ms 触发一次更新中断

## 时基工作流程

\`\`\`
    APB1 时钟 (72MHz)
          │
          ▼
    ┌──────────┐
    │ 预分频器  │  每个 APB1 周期: prescaler++
    │   PSC    │  prescaler == PSC → 归零，CNT++ 
    └────┬─────┘
         │
         ▼
    ┌──────────┐
    │ 计数器    │  递增计数: 0 → 1 → 2 → ... → ARR → 0
    │   CNT    │
    └────┬─────┘
         │
         ▼ (CNT == ARR 溢出的下一周期)
    ┌──────────────┐
    │  UIF = 1     │  ← 更新中断标志
    │  CNT = 0     │  ← 自动重装载
    │  可选: 中断   │
    └──────────────┘
\`\`\`

## 关键控制寄存器

### CR1 (0x00, 控制寄存器 1)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | CEN | 1 = 使能计数器 |
| 1 | UDIS | 0 = 使能更新事件 |
| 7 | ARPE | 1 = ARR 带预装载 |

### SR (0x10, 状态寄存器)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | UIF | 更新中断标志，写 0 清零 |

**SR 是 rc_w0 类型寄存器** — 写 0 才能清零对应位，写 1 无效。

### EGR (0x14, 事件生成寄存器)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | UG | 写 1 产生软件更新：CNT 归零, UIF 置位 |

## 典型配置代码

\`\`\`c
// 配置 TIM2: 1ms 定时中断
RCC->APB1ENR |= RCC_APB1ENR_TIM2EN;  // 使能 TIM2 时钟

TIM2->PSC = 71;     // 72MHz / 72 = 1MHz
TIM2->ARR = 999;    // 1MHz / 1000 = 1kHz → 1ms
TIM2->DIER = 0x1;   // 使能更新中断 (UIE=1)
TIM2->CR1 = 0x81;   // ARPE=1, CEN=1 (启动)
\`\`\`

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`TIM_TimeBaseInit(TIMx, &cfg)\` | 初始化时基（PSC、ARR、计数模式） |
| \`TIM_Cmd(TIMx, ENABLE/DISABLE)\` | 启停定时器 |
| \`TIM_OC1Init(TIMx, &cfg)\` | 配置通道 1 输出比较 |
| \`TIM_OC2Init(TIMx, &cfg)\` | 配置通道 2 输出比较 |
| \`TIM_OC3Init(TIMx, &cfg)\` | 配置通道 3 输出比较 |
| \`TIM_OC4Init(TIMx, &cfg)\` | 配置通道 4 输出比较 |
| \`TIM_ITConfig(TIMx, src, ENABLE/DISABLE)\` | 使能/关闭定时器中断 |

TIM_TimeBaseInitTypeDef 结构体：
- \`TIM_Prescaler\` — 预分频值（0-65535）
- \`TIM_Period\` — 自动重装载值（0-65535）
- \`TIM_CounterMode\` — 计数模式（TIM_CounterMode_Up/Down）
- \`TIM_ClockDivision\` — 时钟分割（TIM_CKD_DIV1）

TIM_OCInitTypeDef 结构体：
- \`TIM_OCMode\` — 输出比较模式（TIM_OCMode_Timing/PWM1/PWM2/Toggle）
- \`TIM_Pulse\` — 比较值（CCR）
- \`TIM_OCPolarity\` — 输出极性（TIM_OCPolarity_High/Low）

## 标准驱动流程

\`\`\`c
// 1. 使能 TIM2 时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

// 2. 配置时基：1ms 定时
TIM_TimeBaseInitTypeDef timCfg;
timCfg.TIM_Prescaler = 71;          // 72MHz / 72 = 1MHz
timCfg.TIM_Period = 999;            // 1MHz / 1000 = 1kHz → 1ms
timCfg.TIM_CounterMode = TIM_CounterMode_Up;
timCfg.TIM_ClockDivision = TIM_CKD_DIV1;
TIM_TimeBaseInit(TIM2, &timCfg);

// 3. 使能更新中断
TIM_ITConfig(TIM2, TIM_IT_Update, ENABLE);

// 4. 启动定时器
TIM_Cmd(TIM2, ENABLE);
\`\`\`
`,vy=`# PWM 输出

## 什么是 PWM？

**PWM (Pulse Width Modulation)** 是用数字信号模拟模拟电压的一种技术。在一个固定周期内，改变高电平的时间比例（占空比），就可以控制平均电压。

\`\`\`
周期 = 1ms (1kHz)
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│████   │████   │███   │  25% 占空比
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘

┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│████████   │████████   │  75% 占空比
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘
\`\`\`

**占空比 (Duty Cycle)** = 高电平时间 / 周期 × 100%

## PWM 的应用

| 应用 | 频率 | 占空比范围 |
|------|------|------------|
| LED 调光 | 100Hz~1kHz | 0-100% |
| 舵机控制 | 50Hz | 5%-10% (1-2ms 脉宽) |
| 直流电机调速 | 1-20kHz | 0-100% |
| 音频 DAC | 44.1kHz+ | 0-100% |

## 输出比较原理

TIM 的每个通道 (CH1~CH4) 都有一个 **CCRx (Capture/Compare Register)**。在 PWM 模式下，CNT 不断与 CCRx 比较，产生输出信号。

### PWM 模式 1 (OCxM = 110)

\`\`\`
     CNT < CCR → 输出高电平
     CNT >= CCR → 输出低电平
\`\`\`

\`\`\`
ARR = 99, CCR = 25

CNT: 0──25──50──75──99──0
     ████████░░░░░░░░░░░░
OUT:  ▔▔▔▔▔▔▔▔___________

高电平: CNT 0→24 (25 个周期) = 25% 占空比
低电平: CNT 25→99 (75 个周期)
\`\`\`

### PWM 模式 2 (OCxM = 111)

与模式 1 相反：
\`\`\`
     CNT > CCR → 输出高电平
     CNT <= CCR → 输出低电平
\`\`\`

## PWM 相关寄存器

### CCMR1 (0x18) — 通道 1 和 2

| 位 | 名称 | 描述 |
|----|------|------|
| 0:1 | CC1S | 00=输出, 01=输入, 10=输入, 11=输入 |
| 3 | OC1PE | 1=使能 CCR1 预装载 |
| 4:6 | OC1M | 110=PWM1, 111=PWM2 |
| 8:9 | CC2S | 同上，通道 2 |
| 11 | OC2PE | 同上 |
| 12:14 | OC2M | 同上 |

### CCMR2 (0x1C) — 通道 3 和 4

结构同 CCMR1，偏移对应通道 3 和通道 4。

### CCER (0x20, 捕获/比较使能寄存器)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | CC1E | 1=使能通道 1 输出 |
| 1 | CC1P | 0=高电平有效, 1=低电平有效 |
| 4 | CC2E | 通道 2 使能 |
| 8 | CC3E | 通道 3 使能 |
| 12 | CC4E | 通道 4 使能 |

### CCR1~CCR4 (0x34~0x40)

16-bit 比较值寄存器。在 PWM 模式中决定占空比：
\`\`\`
占空比 = (CCR / (ARR + 1)) × 100%
\`\`\`

## 完整配置示例

\`\`\`c
// 配置 PA0 (TIM2_CH1) 输出 1kHz, 50% 占空比的 PWM

// 1. 使能时钟
RCC->APB2ENR |= RCC_APB2ENR_IOPAEN;   // GPIOA 时钟
RCC->APB1ENR |= RCC_APB1ENR_TIM2EN;   // TIM2 时钟

// 2. 配置 PA0 为复用推挽输出
GPIOA->CRL &= ~(0xF << 0);
GPIOA->CRL |=  (0xB << 0);  // 50MHz AF push-pull

// 3. 配置 TIM2 时基
TIM2->PSC = 71;     // 1MHz
TIM2->ARR = 999;    // 1kHz PWM 频率

// 4. 配置通道 1 为 PWM 模式 1
TIM2->CCMR1 &= ~(0x3 << 0);   // CC1S = 00 (输出)
TIM2->CCMR1 |=  (0x1 << 3);   // OC1PE = 1
TIM2->CCMR1 |=  (0x6 << 4);   // OC1M = 110 (PWM1)

// 5. 设置占空比为 50%
TIM2->CCR1 = 500;   // 500/1000 = 50%

// 6. 使能通道输出并启动定时器
TIM2->CCER |= (1 << 0);   // CC1E = 1
TIM2->CR1  |= (1 << 0);   // CEN = 1
\`\`\`

## 动态更新占空比

PWM 运行时可以直接写 CCRx 来改变占空比：

\`\`\`c
// 呼吸灯效果
for (int duty = 0; duty <= 999; duty++) {
    TIM2->CCR1 = duty;
    HAL_Delay(2);  // 渐变速度
}
\`\`\`

## 多通道同步 PWM

TIM2 有 4 个独立的通道，硬件上映射到：

| 通道 | 引脚 | 复用功能 |
|------|------|----------|
| TIM2_CH1 | PA0 | 复用推挽输出 |
| TIM2_CH2 | PA1 | 复用推挽输出 |
| TIM2_CH3 | PA2 | 复用推挽输出 |
| TIM2_CH4 | PA3 | 复用推挽输出 |

4 个通道共享同一个时基 (PSC/ARR)，但可以有各自独立的占空比 (CCRx)。

## 标准库函数

PWM 使用 TIM 的输出比较功能，核心函数同 TIM 模块：

| 函数 | 功能 |
|------|------|
| \`TIM_TimeBaseInit(TIMx, &cfg)\` | 设置 PWM 频率（PSC + ARR） |
| \`TIM_OC1Init\` ~ \`TIM_OC4Init\` | 配置各通道 PWM 模式和占空比 |
| \`TIM_Cmd(TIMx, ENABLE)\` | 启动 PWM 输出 |

PWM 相关的 OC 模式：
- \`TIM_OCMode_PWM1\` — CNT < CCR 时输出有效电平
- \`TIM_OCMode_PWM2\` — CNT > CCR 时输出有效电平

## 标准驱动流程

\`\`\`c
// 1. 使能 GPIOA 和 TIM2 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

// 2. 配置 PA0 为复用推挽输出
GPIO_InitTypeDef gpioCfg;
gpioCfg.GPIO_Pin = GPIO_Pin_0;
gpioCfg.GPIO_Speed = GPIO_Speed_50MHz;
gpioCfg.GPIO_Mode = GPIO_Mode_AF_PP;
GPIO_Init(GPIOA, &gpioCfg);

// 3. 配置 TIM2 时基：1kHz PWM
TIM_TimeBaseInitTypeDef timCfg;
timCfg.TIM_Prescaler = 71;
timCfg.TIM_Period = 999;
timCfg.TIM_CounterMode = TIM_CounterMode_Up;
TIM_TimeBaseInit(TIM2, &timCfg);

// 4. 配置通道 1 为 PWM1，50% 占空比
TIM_OCInitTypeDef ocCfg;
ocCfg.TIM_OCMode = TIM_OCMode_PWM1;
ocCfg.TIM_Pulse = 500;            // 50% 占空比
ocCfg.TIM_OCPolarity = TIM_OCPolarity_High;
TIM_OC1Init(TIM2, &ocCfg);

// 5. 启动
TIM_Cmd(TIM2, ENABLE);

// 动态改变占空比
// TIM_SetCompare1(TIM2, 250);  // 改为 25%
\`\`\`
`,xy=`# ADC 模数转换

## 什么是 ADC？

**ADC (Analog-to-Digital Converter)** 将模拟电压转换为数字值。STM32F103 的 ADC1 是 12 位逐次逼近型，输入范围 0 ~ 3.3V。

\`\`\`
模拟电压 (0-3.3V) → ADC 转换 → 数字值 (0-4095)

0.00V → 0x000 (0)
1.65V → 0x800 (2048)
3.30V → 0xFFF (4095)
\`\`\`

## 转换公式

\`\`\`
结果 = round((V_in / 3.3) × 4095)
V_in = (结果 / 4095) × 3.3
\`\`\`

## ADC 的应用

| 应用 | 说明 |
|------|------|
| 传感器读取 | 温度、光照、电位器等模拟传感器 |
| 电压监测 | 电池电压、电源监控 |
| 音频采样 | 麦克风信号数字化 |
| 触摸检测 | 电阻式触摸屏坐标读取 |

## ADC 寄存器

### SR (状态寄存器, 0x00)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | AWD | 模拟看门狗标志 |
| 1 | EOC | 转换结束标志。转换完成时硬件置 1 |
| 4 | STRT | 开始标志。通道开始转换时置 1 |

### CR2 (控制寄存器 2, 0x08)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | ADON | ADC 使能。置 1 开启 ADC |
| 1 | CONT | 连续转换模式。置 1 自动重启转换 |
| 22 | SWSTART | 软件触发。置 1 启动一次转换 |

### SQR3 (规则序列寄存器 3, 0x34)

| 位 | 名称 | 描述 |
|----|------|------|
| 0:4 | SQ1 | 第一个转换的通道号 (0-17) |

### DR (数据寄存器, 0x4C)

16 位，低 12 位为转换结果。

## 转换流程

\`\`\`
ADON=1 → 写 SWSTART=1 → 等待 7 个采样周期 → EOC=1 → 读 DR
\`\`\`

连续模式 (CONT=1) 下，一次转换完成后自动开始下一次。

## 典型配置

\`\`\`c
// 使能 ADC1 时钟
RCC->APB2ENR |= RCC_APB2ENR_ADC1EN;

// 配置通道 0 (PA0)
ADC1->SQR3 = (ADC_CHANNEL_0 & 0x1F);

// 开启 ADC 并启动转换
ADC1->CR2 |= (1 << 0);   // ADON = 1
ADC1->CR2 |= (1 << 22);  // SWSTART = 1

// 等待转换完成
while (!(ADC1->SR & (1 << 1)));  // 等待 EOC

// 读取结果
uint16_t result = ADC1->DR & 0xFFF;
\`\`\`

## 注意事项

- 必须先置 ADON=1，才能启动转换
- ADON=0 时写 SWSTART 无效
- EOC 在下一次启动转换前需要手动清零
- 连续模式下 DR 会被持续覆盖，需及时读取

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`ADC_Init(ADCx, &cfg)\` | 初始化 ADC 工作模式 |
| \`ADC_Cmd(ADCx, ENABLE/DISABLE)\` | 启停 ADC |
| \`ADC_SoftwareStartConvCmd(ADCx, ENABLE)\` | 软件触发启动转换 |
| \`ADC_GetConversionValue(ADCx)\` | 读取转换结果（12-bit） |

ADC_InitTypeDef 结构体：
- \`ADC_Mode\` — 工作模式（ADC_Mode_Independent）
- \`ADC_ContinuousConvMode\` — 连续转换（ENABLE/DISABLE）
- \`ADC_DataAlign\` — 数据对齐（ADC_DataAlign_Right/Left）
- \`ADC_NbrOfChannel\` — 转换通道数

## 标准驱动流程

\`\`\`c
// 1. 使能 ADC1 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_ADC1, ENABLE);

// 2. 配置 ADC
ADC_InitTypeDef adcCfg;
adcCfg.ADC_Mode = ADC_Mode_Independent;
adcCfg.ADC_ContinuousConvMode = ENABLE;
adcCfg.ADC_DataAlign = ADC_DataAlign_Right;
adcCfg.ADC_NbrOfChannel = 1;
ADC_Init(ADC1, &adcCfg);

// 3. 使能 ADC
ADC_Cmd(ADC1, ENABLE);

// 4. 软件启动转换
ADC_SoftwareStartConvCmd(ADC1, ENABLE);

// 5. 等待并读取结果
while (!(ADC1->SR & (1 << 1)));
uint16_t result = ADC_GetConversionValue(ADC1);
\`\`\`
`,Ry=`# USART 串口通信

## 什么是 USART？

**USART (Universal Synchronous/Asynchronous Receiver/Transmitter)** 是 STM32 中最常用的通信接口之一。它通过 TX/RX 两根线实现全双工异步串行通信。

\`\`\`
设备 A                 设备 B
  TX ────────────────→ RX
  RX ←──────────────── TX
  GND ──────────────── GND
\`\`\`

## 异步通信帧格式

每个字节被封装为一个帧：

\`\`\`
空闲  起始位  D0  D1  D2  D3  D4  D5  D6  D7  停止位  空闲
────┐  ┌───┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐        ┌──────
    └──┘   └───┘   └───┘   └───┘   └───┘   └────────┘
  1 bit   8 data bits (LSB first)       1 stop bit
\`\`\`

共 10 位：1 起始位 + 8 数据位 + 1 停止位。

## 波特率

**波特率 (Baud Rate)** 是每秒传输的符号数。常用值：9600, 19200, 38400, 115200。

STM32 的 BRR 寄存器通过以下公式计算：

\`\`\`
BRR = f_CK / (16 × baud)
\`\`\`

例如，72MHz 时钟、115200 波特率：
\`\`\`
BRR = 72,000,000 / (16 × 115,200) = 39.0625
DIV_Mantissa = 39, DIV_Fraction = 1 (0.0625 × 16)
\`\`\`

## USART 寄存器

### SR (状态寄存器, 0x00)

| 位 | 名称 | 描述 |
|----|------|------|
| 5 | RXNE | 接收数据寄存器非空。收到数据时硬件置 1，读 DR 自动清零 |
| 6 | TC | 发送完成。TX 空闲且无待发数据时置 1 |
| 7 | TXE | 发送数据寄存器空。DR 可写入新数据时置 1 |

### DR (数据寄存器, 0x04)

8 位有效。写入 = 发送，读取 = 接收。

### BRR (波特率寄存器, 0x08)

| 位 | 名称 | 描述 |
|----|------|------|
| 0:3 | DIV_Fraction | 小数部分 (×16) |
| 4:15 | DIV_Mantissa | 整数部分 |

### CR1 (控制寄存器 1, 0x0C)

| 位 | 名称 | 描述 |
|----|------|------|
| 2 | RE | 接收使能 |
| 3 | TE | 发送使能 |
| 13 | UE | USART 使能 |

## 典型配置

\`\`\`c
// 使能 USART1 时钟
RCC->APB2ENR |= RCC_APB2ENR_USART1EN;

// 配置波特率 115200
USART1->BRR = 0x1A0;  // 72MHz / (16 × 115200) ≈ 39.0625

// 使能 USART、发送、接收
USART1->CR1 = (1 << 13) | (1 << 3) | (1 << 2);  // UE + TE + RE

// 发送字节
while (!(USART1->SR & (1 << 7)));  // 等待 TXE
USART1->DR = 'A';

// 接收字节
while (!(USART1->SR & (1 << 5)));  // 等待 RXNE
char ch = USART1->DR;
\`\`\`

## 注意事项

- UE=0 时写 DR 无效
- TE=0 时只能接收不能发送
- RE=0 时读 DR 返回 0
- 读 DR 自动清零 RXNE

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`USART_Init(USARTx, &cfg)\` | 初始化波特率、数据位、停止位等 |
| \`USART_Cmd(USARTx, ENABLE/DISABLE)\` | 启停 USART |
| \`USART_SendData(USARTx, data)\` | 发送一字节 |
| \`USART_ReceiveData(USARTx)\` | 接收一字节 |
| \`USART_ITConfig(USARTx, src, ENABLE/DISABLE)\` | 使能/关闭 USART 中断 |

USART_InitTypeDef 结构体：
- \`USART_BaudRate\` — 波特率（9600, 115200 等）
- \`USART_WordLength\` — 数据位（USART_WordLength_8b/9b）
- \`USART_StopBits\` — 停止位（USART_StopBits_1/0.5/2/1.5）
- \`USART_Parity\` — 校验位（USART_Parity_No/Even/Odd）
- \`USART_Mode\` — 模式（USART_Mode_Rx | USART_Mode_Tx）
- \`USART_HardwareFlowControl\` — 硬件流控（USART_HardwareFlowControl_None）

## 标准驱动流程

\`\`\`c
// 1. 使能 USART1 和 GPIOA 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_USART1 | RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 TX (PA9) 和 RX (PA10) 为复用推挽输出
GPIO_InitTypeDef gpioCfg;
gpioCfg.GPIO_Pin = GPIO_Pin_9;        // TX
gpioCfg.GPIO_Speed = GPIO_Speed_50MHz;
gpioCfg.GPIO_Mode = GPIO_Mode_AF_PP;
GPIO_Init(GPIOA, &gpioCfg);

gpioCfg.GPIO_Pin = GPIO_Pin_10;       // RX
gpioCfg.GPIO_Mode = GPIO_Mode_IN_FLOATING;
GPIO_Init(GPIOA, &gpioCfg);

// 3. 配置 USART1
USART_InitTypeDef usartCfg;
usartCfg.USART_BaudRate = 115200;
usartCfg.USART_WordLength = USART_WordLength_8b;
usartCfg.USART_StopBits = USART_StopBits_1;
usartCfg.USART_Parity = USART_Parity_No;
usartCfg.USART_Mode = USART_Mode_Rx | USART_Mode_Tx;
usartCfg.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
USART_Init(USART1, &usartCfg);

// 4. 使能 USART
USART_Cmd(USART1, ENABLE);

// 5. 收发数据
USART_SendData(USART1, 'A');                     // 发送
while (!(USART1->SR & (1 << 7)));                // 等待发送完成
uint16_t ch = USART_ReceiveData(USART1);         // 接收
\`\`\`
`,Iy=`# DAC 数模转换

## 什么是 DAC？

**DAC (Digital-to-Analog Converter)** 将数字值转换为模拟电压。STM32F103 有一个 12 位 DAC，输出范围 0 ~ 3.3V。

\`\`\`
数字输入 (0-4095) → DAC 转换 → 模拟电压 (0-3.3V)

0x000 (0)    → 0.00V
0x800 (2048) → 1.65V
0xFFF (4095) → 3.30V
\`\`\`

## 转换公式

\`\`\`
V_out = (DOR / 4095) × 3.3V
\`\`\`

DOR 是 12 位数据输出寄存器，值域 0~4095。

## DAC 的应用

| 应用 | 说明 |
|------|------|
| 音频输出 | 生成波形 (正弦、方波等) |
| 模拟控制 | 控制 LED 亮度、电机速度 |
| 参考电压 | 为比较器提供可调阈值 |
| 信号发生器 | 配合 DMA 生成任意波形 |

## DAC 寄存器

### CR (控制寄存器, 0x00)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | EN1 | 通道 1 使能。置 1 后 DAC 开始输出 |
| 1:2 | TSEL1 | 触发源选择 (000: TIM6, 001: TIM3, …) |
| 3 | TEN1 | 触发使能。置 1 后通过触发事件更新 DAC |

### DHR12R1 (12-bit 右对齐数据保持寄存器, 0x08)

写入要转换的 12 位数据。自动传输到 DOR1：

\`\`\`
写 DHR12R1 → 硬件自动复制到 DOR1 → 模拟输出更新
\`\`\`

### DOR1 (数据输出寄存器, 0x2C)

只读。存储当前输出的数字值。当 EN1=1 时有效读回。

## 波形生成

通过定时更新 DHR12R1 可以产生任意波形：

\`\`\`c
// 使能 DAC 时钟
RCC->APB1ENR |= RCC_APB1ENR_DACEN;

// 使能 DAC 通道 1
DAC->CR |= (1 << 0);  // EN1 = 1

// 输出 1.65V (中点)
HAL_DAC_SetValue(&hdac, DAC_CHANNEL_1, DAC_ALIGN_12B_R, 2048);

// 输出 3.3V (满量程)
HAL_DAC_SetValue(&hdac, DAC_CHANNEL_1, DAC_ALIGN_12B_R, 4095);
\`\`\`

## 注意事项

- 写 DHR12R1 时只取低 12 位 (0xFFF 掩码)
- EN1=0 时读 DOR1 返回 0，输出为高阻态
- getVoltage() 返回 3 位小数精度的模拟电压值

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`DAC_Init(ch, &cfg)\` | 初始化 DAC 通道 |
| \`DAC_Cmd(ch, ENABLE/DISABLE)\` | 启停 DAC 通道 |
| \`DAC_SetChannel1Data(align, val)\` | 设置通道 1 输出值 |
| \`DAC_SetChannel2Data(align, val)\` | 设置通道 2 输出值 |

DAC_InitTypeDef 结构体：
- \`DAC_Trigger\` — 触发源（DAC_Trigger_None 为软件触发）
- \`DAC_OutputBuffer\` — 输出缓冲（DAC_OutputBuffer_Enable/Disable）

## 标准驱动流程

\`\`\`c
// 1. 使能 DAC 时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_DAC, ENABLE);

// 2. 配置并使能 DAC 通道 1
DAC_InitTypeDef dacCfg;
dacCfg.DAC_Trigger = DAC_Trigger_None;         // 软件触发
dacCfg.DAC_OutputBuffer = DAC_OutputBuffer_Enable;
DAC_Init(DAC_Channel_1, &dacCfg);
DAC_Cmd(DAC_Channel_1, ENABLE);

// 3. 输出 1.65V（12-bit 右对齐）
DAC_SetChannel1Data(DAC_Align_12b_R, 2048);

// 输出 3.3V
DAC_SetChannel1Data(DAC_Align_12b_R, 4095);
\`\`\`
`,Py=`# SPI 串行外设接口

## 什么是 SPI？

**SPI (Serial Peripheral Interface)** 是一种高速同步串行通信协议，采用主从架构。STM32 的 SPI1 外设支持全双工通信。

\`\`\`
主设备 (Master)          从设备 (Slave)
     SCLK ─────────────→ SCLK
     MOSI ─────────────→ MOSI
     MISO ←───────────── MISO
     NSS  ─────────────→ NSS
\`\`\`

## 四线信号

| 信号 | 方向 | 功能 |
|------|------|------|
| SCLK | Master→Slave | 时钟信号 |
| MOSI | Master→Slave | 主机输出从机输入 |
| MISO | Slave→Master | 从机输出主机输入 |
| NSS | Master→Slave | 片选信号（低有效） |

## 时钟极性与相位 (CPOL/CPHA)

CPOL 和 CPHA 决定数据采样的时机：

| 模式 | CPOL | CPHA | 空闲时钟 | 采样边沿 |
|------|------|------|----------|----------|
| 0 | 0 | 0 | 低 | 第1个上升沿 |
| 1 | 0 | 1 | 低 | 第1个下降沿 |
| 2 | 1 | 0 | 高 | 第1个下降沿 |
| 3 | 1 | 1 | 高 | 第1个上升沿 |

## 波特率控制

SPI 时钟由 BR 位控制：

\`\`\`
f_SCLK = f_PCLK / (2^(BR+1))
\`\`\`

| BR | 分频 |
|----|------|
| 000 | /2 |
| 001 | /4 |
| 010 | /8 |
| 011 | /16 |
| 100 | /32 |
| 101 | /64 |
| 110 | /128 |
| 111 | /256 |

## 数据传输流程

1. 配置 CR1（SPE=1, MSTR=1, BR, CPOL, CPHA）
2. 写 DR 寄存器装载发送字节
3. 硬件自动产生 SCLK 并移位数据
4. 每 8 个 SCLK 完成一个字节传输
5. TXE 置 1（发送缓冲空）
6. RXNE 置 1（接收缓冲非空）
7. 读 DR 获取接收数据

## 寄存器

| 偏移 | 寄存器 | 功能 |
|------|--------|------|
| 0x00 | CR1 | 控制寄存器 1（SPE/BR/MSTR/CPOL/CPHA） |
| 0x04 | CR2 | 控制寄存器 2（SSOE/TXEIE/RXNEIE） |
| 0x08 | SR | 状态寄存器（BSY/TXE/RXNE） |
| 0x0C | DR | 数据寄存器（16 位，仅低 8 位有效） |

## 代码示例（寄存器访问）

\`\`\`c
// 配置 SPI1: 主模式, CPOL=0 CPHA=0, BR=0 (f/2)
RCC->APB2ENR |= RCC_APB2ENR_SPI1EN;
SPI1->CR1 = SPI_CR1_SPE | SPI_CR1_MSTR;

// 发送 0x55
SPI1->DR = 0x55;
while (!(SPI1->SR & SPI_SR_TXE));
while (SPI1->SR & SPI_SR_BSY);

// 读取接收数据
uint8_t rx = SPI1->DR;
\`\`\`

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`SPI_Init(SPIx, &cfg)\` | 初始化 SPI 模式、方向、时钟极性和相位 |
| \`SPI_Cmd(SPIx, ENABLE/DISABLE)\` | 启停 SPI 外设 |
| \`SPI_I2S_SendData(SPIx, data)\` | 发送一字节 |
| \`SPI_I2S_ReceiveData(SPIx)\` | 接收一字节 |

SPI_InitTypeDef 结构体：
- \`SPI_Direction\` — 数据方向（SPI_Direction_2Lines_FullDuplex / _1Line_Rx / _1Line_Tx）
- \`SPI_Mode\` — 主从模式（SPI_Mode_Master/Slave）
- \`SPI_DataSize\` — 数据帧格式（SPI_DataSize_8b/16b）
- \`SPI_CPOL\` — 时钟极性（SPI_CPOL_Low/High）
- \`SPI_CPHA\` — 时钟相位（SPI_CPHA_1Edge/2Edge）
- \`SPI_BaudRatePrescaler\` — 波特率预分频（SPI_BaudRatePrescaler_2 ~ _256）
- \`SPI_NSS\` — NSS 管理模式（SPI_NSS_Soft）

## 标准驱动流程

\`\`\`c
// 1. 使能 SPI1 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_SPI1, ENABLE);

// 2. 配置 SPI1：全双工主模式，CPOL=0 CPHA=0
SPI_InitTypeDef spiCfg;
spiCfg.SPI_Direction = SPI_Direction_2Lines_FullDuplex;
spiCfg.SPI_Mode = SPI_Mode_Master;
spiCfg.SPI_DataSize = SPI_DataSize_8b;
spiCfg.SPI_CPOL = SPI_CPOL_Low;
spiCfg.SPI_CPHA = SPI_CPHA_1Edge;
spiCfg.SPI_BaudRatePrescaler = SPI_BaudRatePrescaler_2;
spiCfg.SPI_NSS = SPI_NSS_Soft;
SPI_Init(SPI1, &spiCfg);

// 3. 使能 SPI
SPI_Cmd(SPI1, ENABLE);

// 4. 收发数据
SPI_I2S_SendData(SPI1, 0x55);
while (!(SPI1->SR & (1 << 1)));
uint16_t rx = SPI_I2S_ReceiveData(SPI1);
\`\`\`
`,Ay=`# I2C 集成电路间总线

## 什么是 I2C？

**I2C (Inter-Integrated Circuit)** 是一种同步半双工串行通信协议，仅需两根线（SCL/SDA），支持多设备挂载在同一条总线上。

\`\`\`
Master              Slave A     Slave B
  |                    |           |
  ├── SCL ─────────────┼───────────┤
  ├── SDA ─────────────┼───────────┤
\`\`\`

## 两线信号

| 信号 | 功能 |
|------|------|
| SCL | 时钟线（主设备驱动） |
| SDA | 数据线（双向，开漏输出） |

## 通信协议

### 起始条件 (START)

SCL 为高时，SDA 下降沿：

\`\`\`
SCL: ────────────┐
                  └────────────
SDA: ───────┐
             └────────────
         START 条件
\`\`\`

### 停止条件 (STOP)

SCL 为高时，SDA 上升沿：

\`\`\`
SCL: ────────────┐
                  └────────────
SDA: ───────────────┐
                     └────────
                 STOP 条件
\`\`\`

### 数据位传输

SDA 在 SCL 低电平时变化，在 SCL 上升沿时被采样。

### 应答位 (ACK/NACK)

每 8 位数据后，接收方在第 9 个 SCL 周期拉低 SDA 表示 ACK。

## 状态机流程

\`\`\`
idle ──START──→ start ──写地址──→ addressing ──4tick──→ tx/rx ──STOP──→ idle
\`\`\`

## 寄存器

| 偏移 | 寄存器 | 功能 |
|------|--------|------|
| 0x00 | CR1 | 控制寄存器（PE/START/STOP/ACK） |
| 0x04 | CR2 | 控制寄存器 2（FREQ/ITERREN） |
| 0x10 | DR | 数据寄存器 |
| 0x14 | SR1 | 状态寄存器 1（SB/ADDR/BTF/RXNE/TXE） |
| 0x18 | SR2 | 状态寄存器 2（MSL/BUSY/TRA） |

## 代码示例（寄存器访问）

\`\`\`c
// 使能 I2C1 时钟
RCC->APB1ENR |= RCC_APB1ENR_I2C1EN;

// 配置 I2C1
I2C1->CR2 = 36;               // FREQ = 36MHz
I2C1->CR1 = I2C_CR1_PE;      // 使能外设

// 发送 START
I2C1->CR1 |= I2C_CR1_START;
while (!(I2C1->SR1 & I2C_SR1_SB));

// 发送地址 (0x28 << 1, W=0)
I2C1->DR = 0x50;
while (!(I2C1->SR1 & I2C_SR1_ADDR));
(void)I2C1->SR2;              // 读 SR2 清除 ADDR

// 发送数据
I2C1->DR = 0xAB;
while (!(I2C1->SR1 & I2C_SR1_TXE));
while (!(I2C1->SR1 & I2C_SR1_BTF));

// 发送 STOP
I2C1->CR1 |= I2C_CR1_STOP;
\`\`\`

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`I2C_Init(I2Cx, &cfg)\` | 初始化 I2C 时钟频率和模式 |
| \`I2C_Cmd(I2Cx, ENABLE/DISABLE)\` | 启停 I2C 外设 |
| \`I2C_SendData(I2Cx, data)\` | 发送一字节 |
| \`I2C_AcknowledgeConfig(I2Cx, ENABLE/DISABLE)\` | 配置应答使能 |

I2C_InitTypeDef 结构体：
- \`I2C_Mode\` — 模式（I2C_Mode_I2C）
- \`I2C_ClockSpeed\` — 时钟速度（100000 标准，400000 快速）
- \`I2C_DutyCycle\` — 占空比（I2C_DutyCycle_2）
- \`I2C_Ack\` — 应答使能（ENABLE/DISABLE）
- \`I2C_AcknowledgedAddress\` — 应答地址（I2C_AcknowledgedAddress_7bit）

## 标准驱动流程

\`\`\`c
// 1. 使能 I2C1 时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_I2C1, ENABLE);

// 2. 配置 I2C1
I2C_InitTypeDef i2cCfg;
i2cCfg.I2C_Mode = I2C_Mode_I2C;
i2cCfg.I2C_ClockSpeed = 100000;
i2cCfg.I2C_DutyCycle = I2C_DutyCycle_2;
i2cCfg.I2C_Ack = ENABLE;
i2cCfg.I2C_AcknowledgedAddress = I2C_AcknowledgedAddress_7bit;
I2C_Init(I2C1, &i2cCfg);

// 3. 使能 I2C
I2C_Cmd(I2C1, ENABLE);

// 4. 产生起始条件
I2C_GenerateSTART(I2C1, ENABLE);
while (!I2C_CheckEvent(I2C1, I2C_EVENT_MASTER_MODE_SELECT));

// 5. 发送从设备地址
I2C_Send7bitAddress(I2C1, 0x28, I2C_Direction_Transmitter);
while (!I2C_CheckEvent(I2C1, I2C_EVENT_MASTER_TRANSMITTER_MODE_SELECTED));

// 6. 发送数据
I2C_SendData(I2C1, 0xAB);
while (!I2C_CheckEvent(I2C1, I2C_EVENT_MASTER_BYTE_TRANSMITTED));

// 7. 产生停止条件
I2C_GenerateSTOP(I2C1, ENABLE);
\`\`\`
`,Ty=`# DMA 直接存储器访问

## 什么是 DMA？

**DMA (Direct Memory Access)** 允许外设与存储器之间直接传输数据，无需 CPU 参与。CPU 只需配置传输参数，数据传输由 DMA 控制器自动完成。

\`\`\`
           ┌──────────┐
CPU  ────→ │ DMA 控制器 │ ────→ 外设
           │           │
           │  ┌─────┐  │
           │  │FIFO │  │ ←──→ 存储器
           │  └─────┘  │
           └──────────┘
\`\`\`

## 传输方向

| 方向 | DIR | 说明 |
|------|-----|------|
| 外设→内存 (P2M) | 0 | 从外设读取数据到内存 |
| 内存→外设 (M2P) | 1 | 从内存写入数据到外设 |
| 内存→内存 (M2M) | — | 存储器到存储器（MEM2MEM=1） |

## 循环模式 (CIRC)

CIRC=1 时，CNDTR 计数到 0 后自动重装载：
- 适用于 ADC 连续采样、DAC 波形生成等场景
- 传输不会停止，持续循环

CIRC=0 时，传输完成后自动禁用通道。

## DMA 传输流程

1. 配置通道参数（CCR: EN/DIR/CIRC/MINC/PINC/MSIZE/PSIZE）
2. 设置传输数量（CNDTR）
3. 设置外设地址（CPAR）
4. 设置存储器地址（CMAR）
5. EN=1 启动传输
6. 每 4 个 tick 传输一个数据单元
7. CNDTR 递减，地址根据 PINC/MINC 递增
8. CNDTR=0 时传输完成，触发 TC 标志

## DMA1 通道分布

STM32F103 的 DMA1 有 7 个通道：

| 通道 | 主要外设 |
|------|----------|
| 1 | ADC1, TIM2_CH3 |
| 2 | SPI1_RX, USART1_TX |
| 3 | SPI1_TX, USART1_RX |
| 4 | USART1_TX |
| 5 | USART1_RX |
| 6 | TIM2_CH1, TIM2_CH3 |
| 7 | TIM2_CH2, TIM2_CH4 |

## 寄存器

| 每通道偏移 | 寄存器 | 功能 |
|------------|--------|------|
| +0x00 | CCR | 配置寄存器（EN/DIR/CIRC/MINC/PINC） |
| +0x04 | CNDTR | 数据传输数量 |
| +0x08 | CPAR | 外设地址 |
| +0x0C | CMAR | 存储器地址 |

通道 1 基址 = 0x40020008，通道间距 = 0x14。

## 代码示例（寄存器访问）

\`\`\`c
// 使用 DMA1 通道 1 从 ADC1 传输 100 个数据到内存
uint16_t buffer[100];

// 配置 DMA 通道 1
DMA1_Channel1->CPAR = (uint32_t)&ADC1->DR;
DMA1_Channel1->CMAR = (uint32_t)buffer;
DMA1_Channel1->CNDTR = 100;
DMA1_Channel1->CCR = DMA_CCR_MINC | DMA_CCR_CIRC | DMA_CCR_EN;

// ADC 每次转换完成后自动触发 DMA 传输
// 100 次转换后，buffer 填满，CNDTR 自动重载
\`\`\`

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`DMA_Init(ch, &cfg)\` | 初始化 DMA 通道（方向、地址、数据量等） |
| \`DMA_Cmd(ch, ENABLE/DISABLE)\` | 启停 DMA 通道 |
| \`DMA_ITConfig(ch, src, ENABLE/DISABLE)\` | 使能/关闭 DMA 中断 |

DMA_InitTypeDef 结构体：
- \`DMA_PeripheralBaseAddr\` — 外设基地址
- \`DMA_MemoryBaseAddr\` — 存储器基地址
- \`DMA_DIR\` — 传输方向（DMA_DIR_PeripheralSRC/DST）
- \`DMA_BufferSize\` — 传输数据量（CNDTR）
- \`DMA_PeripheralInc\` — 外设地址递增（DMA_PeripheralInc_Enable/Disable）
- \`DMA_MemoryInc\` — 存储器地址递增（DMA_MemoryInc_Enable/Disable）
- \`DMA_Mode\` — 循环模式（DMA_Mode_Circular/Normal）
- \`DMA_Priority\` — 优先级（DMA_Priority_Low/Medium/High/VeryHigh）

## 标准驱动流程

\`\`\`c
// 1. 使能 DMA1 时钟
RCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1, ENABLE);

// 2. 配置 DMA 通道 1（ADC1 → 内存）
uint16_t buffer[100];
DMA_InitTypeDef dmaCfg;
dmaCfg.DMA_PeripheralBaseAddr = (uint32_t)&ADC1->DR;
dmaCfg.DMA_MemoryBaseAddr = (uint32_t)buffer;
dmaCfg.DMA_DIR = DMA_DIR_PeripheralSRC;
dmaCfg.DMA_BufferSize = 100;
dmaCfg.DMA_PeripheralInc = DMA_PeripheralInc_Disable;
dmaCfg.DMA_MemoryInc = DMA_MemoryInc_Enable;
dmaCfg.DMA_Mode = DMA_Mode_Circular;
dmaCfg.DMA_Priority = DMA_Priority_High;
DMA_Init(DMA1_Channel1, &dmaCfg);

// 3. 使能 DMA 通道
DMA_Cmd(DMA1_Channel1, ENABLE);
\`\`\`
`,ky=`# CAN 控制器局域网总线

## 什么是 CAN？

**CAN (Controller Area Network)** 是一种多主串行通信协议，广泛应用于汽车电子和工业控制。STM32F103 内置 bxCAN 控制器，支持 CAN 2.0A（标准帧）和 CAN 2.0B（扩展帧）。

\`\`\`
Node A              Node B              Node C
  |                    |                    |
  ├── CAN_H ───────────┼────────────────────┤
  ├── CAN_L ───────────┼────────────────────┤
\`\`\`

## CAN 总线特点

| 特性 | 说明 |
|------|------|
| 多主模式 | 任意节点可主动发送，无需主机调度 |
| 仲裁机制 | ID 越小优先级越高（显性位优先） |
| 差分信号 | CAN_H / CAN_L 双线抗干扰 |
| 帧类型 | 数据帧、远程帧、错误帧、过载帧 |
| 速率 | 最高 1 Mbps（40m），长距离可降速 |

## 帧格式

### 标准数据帧 (11-bit ID)

\`\`\`
┌──────┬────┬────┬──────┬─────┬────┬──────┬──────┬─────┬────┐
│ SOF  │ ID │RTR │ IDE  │ r0  │DLC │Data0-7│ CRC │ ACK │EOF │
│  1b  │11b │ 1b │  1b  │ 1b  │ 4b │0-64b  │ 15b │  2b │ 7b │
└──────┴────┴────┴──────┴─────┴────┴───────┴──────┴─────┴────┘
\`\`\`

## 初始化流程

\`\`\`
复位 → 请求初始化(INRQ=1) → 等待确认(INAK=1) → 配置BTR → 清除INRQ → 等待INAK=0 → 正常模式
\`\`\`

## 位时序 (BTR)

CAN 位时间由多个时间量子 (tq) 组成：

\`\`\`
f_CAN = f_APB1 / (BRP + 1)
Bit time = (1 + TS1 + 1 + TS2 + 1) × tq
          = (TS1 + TS2 + 3) × tq

BaudRate = f_CAN / (TS1 + TS2 + 3)
\`\`\`

| 参数 | 说明 |
|------|------|
| BRP | 波特率预分频器 (0-1023) |
| TS1 | 时间段 1 (1-16 tq) |
| TS2 | 时间段 2 (1-8 tq) |
| SJW | 同步跳转宽度 |

## TX 邮箱

bxCAN 有 3 个发送邮箱，每个邮箱包含：

| 寄存器 | 功能 |
|--------|------|
| TIR | TX 标识符寄存器（TXRQ/RTR/IDE/STID/EXID） |
| TDTR | TX 数据长度和时间戳（DLC/TGT） |
| TDLR | TX 数据低 4 字节 |
| TDHR | TX 数据高 4 字节 |

发送流程：写 TIR 的 TXRQ 位 → 仲裁发送 → TXOK 置位

## RX FIFO

2 个接收 FIFO（各 3 级深度），收到消息后 FMP 递增，释放需写 RFOM 位。

## 寄存器

| 偏移 | 寄存器 | 功能 |
|------|--------|------|
| 0x00 | MCR | 主控制（INRQ/SLEEP/TXFP/ABOM/RESET） |
| 0x04 | MSR | 主状态（INAK/SLAK/TXM/RXM） |
| 0x08 | TSR | 发送状态（RQCP/TXOK/TME） |
| 0x0C | RF0R | 接收 FIFO 0（FMP/FULL/FOVR/RFOM） |
| 0x10 | RF1R | 接收 FIFO 1 |
| 0x14 | IER | 中断使能 |
| 0x18 | ESR | 错误状态（TEC/REC/LEC） |
| 0x1C | BTR | 位时序（BRP/TS1/TS2/SJW/LBKM） |
| 0x180 | TX0 TIR | 邮箱 0 标识符 |
| 0x184 | TX0 TDTR | 邮箱 0 数据长度 |
| 0x188 | TX0 TDLR | 邮箱 0 数据低字 |
| 0x18C | TX0 TDHR | 邮箱 0 数据高字 |

## 代码示例（寄存器访问）

\`\`\`c
// 使能 CAN1 时钟
RCC->APB1ENR |= RCC_APB1ENR_CAN1EN;

// 进入初始化模式
CAN1->MCR |= CAN_MCR_INRQ;
while (!(CAN1->MSR & CAN_MSR_INAK));

// 配置波特率 500kbps (36MHz APB1)
// BRP=11, TS1=3, TS2=2 → 36M/(12×6) = 500k
CAN1->BTR = (11 << 0) | (3 << 16) | (2 << 20);

// 退出初始化，进入正常模式
CAN1->MCR &= ~CAN_MCR_INRQ;
while (CAN1->MSR & CAN_MSR_INAK);

// 发送标准帧 (ID=0x123, DLC=2)
CAN1->sTxMailBox[0].TDTR = 2;           // DLC=2
CAN1->sTxMailBox[0].TDLR = 0xAABB;      // Data
CAN1->sTxMailBox[0].TIR = (0x123 << 21) | CAN_TI0R_TXRQ;
\`\`\`

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`CAN_Init(CANx, &cfg)\` | 初始化 CAN 工作模式和波特率 |
| \`CAN_Cmd(CANx, ENABLE/DISABLE)\` | 启停 CAN 控制器 |
| \`CAN_Transmit(CANx, &txMsg)\` | 发送 CAN 消息 |
| \`CAN_Receive(CANx, fifo, &rxMsg)\` | 接收 CAN 消息 |

CAN_InitTypeDef 结构体：
- \`CAN_Mode\` — 工作模式（CAN_Mode_Normal/LoopBack/Silent/Silent_LoopBack）
- \`CAN_SJW\` — 同步跳转宽度（CAN_SJW_1tq ~ _4tq）
- \`CAN_BS1\` — 时间段 1（CAN_BS1_1tq ~ _16tq）
- \`CAN_BS2\` — 时间段 2（CAN_BS2_1tq ~ _8tq）
- \`CAN_Prescaler\` — 预分频器（1-1024）

## 标准驱动流程

\`\`\`c
// 1. 使能 CAN1 时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_CAN1, ENABLE);

// 2. 配置 CAN1：正常模式，500kbps
CAN_InitTypeDef canCfg;
canCfg.CAN_Mode = CAN_Mode_Normal;
canCfg.CAN_SJW = CAN_SJW_1tq;
canCfg.CAN_BS1 = CAN_BS1_3tq;
canCfg.CAN_BS2 = CAN_BS2_2tq;
canCfg.CAN_Prescaler = 12;
CAN_Init(CAN1, &canCfg);

// 3. 发送标准数据帧
CanTxMsg txMsg;
txMsg.StdId = 0x123;
txMsg.ExtId = 0;
txMsg.IDE = CAN_Id_Standard;
txMsg.RTR = CAN_RTR_Data;
txMsg.DLC = 2;
txMsg.Data[0] = 0xAA;
txMsg.Data[1] = 0xBB;
CAN_Transmit(CAN1, &txMsg);

// 4. 接收消息（FIFO 0）
CanRxMsg rxMsg;
CAN_Receive(CAN1, CAN_FIFO0, &rxMsg);
uint16_t id = rxMsg.StdId;
\`\`\`
`,wy=`# 高级定时器 TIM1/TIM8

STM32F103 的高级定时器（TIM1、TIM8）在通用定时器基础上增加了**死区插入**、**互补输出**和**刹车功能**，专门用于电机控制和电源转换。

## 与通用定时器的区别

| 特性 | 通用定时器 (TIM2-4) | 高级定时器 (TIM1/8) |
|------|---------------------|---------------------|
| 通道数 | 4 | 4 + 3 互补 |
| 死区插入 | 无 | 有 (DTG) |
| 刹车输入 | 无 | 有 (BKIN) |
| 主输出使能 | 无 | MOE 位 |
| 重复计数器 | 无 | RCR |

## BDTR 寄存器

**Break and Dead-Time Register** (偏移 0x44) 是高级定时器最关键的新增寄存器：

\`\`\`
位15: MOE  - 主输出使能 (Main Output Enable)
位14: AOE  - 自动输出使能
位13: BKP  - 刹车极性
位12: BKE  - 刹车使能
位11: OSSR - 运行模式关闭状态选择
位10: OSSI - 空闲模式关闭状态选择
位[9:8]: LOCK - 锁定配置
位[7:0]: DTG  - 死区发生器
\`\`\`

## 死区时间 (Dead-Time)

在互补 PWM 输出中，**死区**是两个开关管切换之间的安全间隔：

\`\`\`
        ┌─────┐     ┌─────┐
CHx     │     │     │     │
───────┘     └─────┘     └───
     ┌──┐  ┌──┐  ┌──┐  ┌──┐
CHxN ─┘  └──┘  └──┘  └──┘  └──
     <DT>  <DT>  <DT>  <DT>
\`\`\`

死区时间 = DTG × t_DTS（t_DTS 为定时器时钟周期）

- DTG < 128：死区 = DTG × t_DTS
- DTG ≥ 128：死区 = (64 + (DTG - 128)) × 2 × t_DTS

## 刹车功能

当 **BKIN 引脚**检测到故障信号时：
1. MOE 位被硬件清零
2. 所有输出通道进入空闲状态（由 CR2 的 OISx/OISxN 位定义）
3. 可产生刹车中断

**刹车恢复**：在 BKE=1 时重新设置 MOE 即可恢复输出。

## 互补输出

每个通道有一个互补输出 CHxN，与主输出 CHx 逻辑相反：

| CCxE | CCxNE | CHx 输出 | CHxN 输出 |
|------|-------|---------|----------|
| 0 | 0 | 禁止 | 禁止 |
| 1 | 0 | PWM | 禁止 |
| 1 | 1 | PWM | ~PWM (带死区) |

## CR2 寄存器

偏移 0x04，用于配置**空闲状态**：

- OISx：CHx 空闲电平（MOE=0 时）
- OISxN：CHxN 空闲电平（MOE=0 时）

## C 代码示例

\`\`\`c
// 使能 TIM1 时钟
RCC->APB2ENR |= RCC_APB2ENR_TIM1EN;

// 配置 ARR 和 PSC
TIM1->ARR = 999;   // 72MHz / 1000 = 72kHz PWM 频率
TIM1->PSC = 0;

// 配置通道 1 为 PWM1 模式
TIM1->CCMR1 |= (6 << 4);  // OC1M = 110 (PWM mode 1)
TIM1->CCER |= (1 << 0);   // CC1E = 1
TIM1->CCER |= (1 << 2);   // CC1NE = 1 (互补输出)

// 配置死区时间
TIM1->BDTR |= (100 << 0);  // DTG = 100
TIM1->BDTR |= (1 << 12);   // BKE = 1 (刹车使能)
TIM1->BDTR |= (1 << 15);   // MOE = 1 (主输出使能)

// 启动定时器
TIM1->CR1 |= (1 << 0);     // CEN = 1
\`\`\`

## 寄存器表

| 偏移 | 名称 | 说明 |
|------|------|------|
| 0x00 | CR1 | 控制寄存器 1 |
| 0x04 | CR2 | 控制寄存器 2（新增 OISx） |
| 0x20 | CCER | 捕获/比较使能（新增 CCxNE） |
| 0x30 | RCR | 重复计数器 |
| 0x44 | BDTR | 死区与刹车寄存器 |

## 标准库函数

高级定时器使用与通用定时器相同的基础函数，增加刹车和死区相关配置：

| 函数 | 功能 |
|------|------|
| \`TIM_TimeBaseInit(TIMx, &cfg)\` | 初始化时基（同通用定时器） |
| \`TIM_OC1Init\` ~ \`TIM_OC4Init\` | 配置通道输出比较（含互补输出） |
| \`TIM_Cmd(TIMx, ENABLE/DISABLE)\` | 启停定时器 |
| \`TIM_ITConfig(TIMx, src, ENABLE/DISABLE)\` | 使能/关闭中断 |
| \`TIM_BDTRConfig(TIMx, &cfg)\` | 配置死区和刹车（高级定时器特有） |

TIM_BDTRInitTypeDef 结构体：
- \`TIM_OSSRState\` — 运行模式关闭状态选择
- \`TIM_OSSIState\` — 空闲模式关闭状态选择
- \`TIM_LOCKLevel\` — 锁定级别
- \`TIM_DeadTime\` — 死区时间（DTG）
- \`TIM_Break\` — 刹车使能
- \`TIM_BreakPolarity\` — 刹车极性
- \`TIM_AutomaticOutput\` — 自动输出使能（MOE）

## 标准驱动流程

\`\`\`c
// 1. 使能 TIM1 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_TIM1, ENABLE);

// 2. 时基配置
TIM_TimeBaseInitTypeDef timCfg;
timCfg.TIM_Prescaler = 0;
timCfg.TIM_Period = 999;            // 72kHz PWM
timCfg.TIM_CounterMode = TIM_CounterMode_Up;
TIM_TimeBaseInit(TIM1, &timCfg);

// 3. 配置通道 1 PWM + 互补输出
TIM_OCInitTypeDef ocCfg;
ocCfg.TIM_OCMode = TIM_OCMode_PWM1;
ocCfg.TIM_Pulse = 500;
ocCfg.TIM_OCPolarity = TIM_OCPolarity_High;
ocCfg.TIM_OCNPolarity = TIM_OCNPolarity_High;
ocCfg.TIM_OCIdleState = TIM_OCIdleState_Reset;
ocCfg.TIM_OCNIdleState = TIM_OCNIdleState_Reset;
TIM_OC1Init(TIM1, &ocCfg);

// 4. 配置死区和刹车
TIM_BDTRInitTypeDef bdtrCfg;
bdtrCfg.TIM_OSSRState = TIM_OSSRState_Enable;
bdtrCfg.TIM_OSSIState = TIM_OSSIState_Enable;
bdtrCfg.TIM_LOCKLevel = TIM_LOCKLevel_OFF;
bdtrCfg.TIM_DeadTime = 100;
bdtrCfg.TIM_Break = TIM_Break_Enable;
bdtrCfg.TIM_BreakPolarity = TIM_BreakPolarity_High;
bdtrCfg.TIM_AutomaticOutput = TIM_AutomaticOutput_Enable;
TIM_BDTRConfig(TIM1, &bdtrCfg);

// 5. 启动
TIM_Cmd(TIM1, ENABLE);
\`\`\`
`,Ey=`# RTC 实时时钟

## 概述

RTC（Real-Time Clock）是 STM32 的独立定时器，由一个 **32 位可编程计数器** 组成。即使主电源关闭，RTC 也可通过备份电池供电继续工作。

**核心特性：**
- 32 位可编程计数器，用于记录时间
- 可编程预分频器（20 位），最高分频比 2^20
- 3 个中断源：秒中断、闹钟中断、溢出中断
- 写保护机制防止意外修改

## 时钟源

STM32F1 的 RTC 由 **HSE、LSE 或 LSI** 提供时钟：

| 时钟源 | 频率 | 典型用途 |
|--------|------|----------|
| LSE（外部低速晶振） | 32.768kHz | 精确时间基准（推荐） |
| HSE/128 | 8MHz/128 = 62.5kHz | 使用外部高速时钟 |
| LSI（内部低速 RC） | ~40kHz | 低功耗场景 |

32.768kHz = 2^15 Hz，用作时间基准非常方便：经过 32768 次分频恰好得到 1 秒。

### 预分频公式

\`\`\`
RTC 频率 = RTC_CLK / (PRL[19:0] + 1)
\`\`\`

> **典型配置：** PRL = 32767 → 分频比 = 32768 → 32.768kHz / 32768 = 1Hz

---

## 寄存器

### CRH — 控制寄存器高位 (0x00)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | SECIE | 秒中断使能 |
| 1 | ALRIE | 闹钟中断使能 |
| 2 | OWIE | 溢出中断使能 |

### CRL — 控制寄存器低位 (0x04)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | SECF | 秒标志（硬件置 1，软件清 0） |
| 1 | ALRF | 闹钟标志 |
| 2 | OWF | 溢出标志 |
| 3 | RSF | 寄存器同步标志 |
| 4 | CNF | 配置标志 |
| 5 | RTOFF | RTC 操作关闭（只读） |

### CNF 写保护机制

**CNF = 1 时：**
- 可以向 PRL、CNT、ALR 寄存器写入新值
- RTOFF = 0，表示寄存器正在被修改

**CNF = 0 时：**
- PRL、CNT、ALR 寄存器为**只读**
- 计数器正常运行
- RTOFF = 1，表示写操作已完成

**写操作流程：**
\`\`\`c
// 1. 等待 RTOFF=1（上次写操作完成）
while (!(RTC->CRL & (1 << 5)));

// 2. 进入配置模式
RTC->CRL |= (1 << 4);   // CNF=1

// 3. 写入预分频值
RTC->PRLL = 32767;      // 低 16 位
RTC->PRLH = 0;          // 高 4 位

// 4. 写入初始计数值
RTC->CNTL = 0;
RTC->CNTH = 0;

// 5. 退出配置模式
RTC->CRL &= ~(1 << 4);  // CNF=0
\`\`\`

### PRLH / PRLL — 预分频装载寄存器 (0x08 / 0x0C)

\`\`\`
PRL[19:0] = PRLH[3:0] << 16 | PRLL[15:0]
\`\`\`

上电默认值：0x8000（32768），适配 32.768kHz LSE。

### CNTH / CNTL — 计数器寄存器 (0x18 / 0x1C)

32 位计数器，当预分频计数器归零时递增。超过 PRL 值时归零并置 OWF。

### DIVH / DIVL — 预分频余数寄存器 (0x10 / 0x14)

当前预分频计数值，从 PRL 递减到 0。递减到 0 时重新装载 PRL 值，同时 CNT 递增。

---

## 计数器时序

\`\`\`
RTC_CLK = 32.768kHz, PRL = 32767

CLK ─┬─┬─┬─┬─┬─┬─ ... ──┬─┬─
     │ │ │ │ │ │         │ │
DIV  32767→32766→...→1→0  →32767→...
CNT  0──────→────────→1   →2→...
\`\`\`

- 每 1/32768 秒 DIV 减 1
- DIV = 0 时 CNT 增 1（恰好 1 秒）

---

## 中断

### 秒中断 (SECIE = 1)

每次 OWF 置 1 时产生，即每 \`PRL + 1\` 次预分频时钟（典型 1Hz）。

### 溢出中断 (OWIE = 1)

计数器到达 (PRL + 1) 时产生，频率同秒中断。

### 闹钟中断 (ALRIE = 1)

当 CNT 等于 ALR 值时产生。

---

## HAL 库示例

\`\`\`c
RTC_HandleTypeDef hrtc;

void RTC_Init(void) {
    hrtc.Instance = RTC;
    hrtc.Init.AsynchPrediv = 32767;  // 1Hz
    HAL_RTC_Init(&hrtc);
}

// 读当前时间
uint32_t RTC_GetCounter(void) {
    return (RTC->CNTH << 16) | RTC->CNTL;
}
\`\`\`

---

## 注意事项

1. **写操作要等 RTOFF=1**：每次写 CRL 后必须等待 RTOFF 回到 1
2. **备份电池**：掉电后 RTC 数据丢失，需要电池或超级电容
3. **LSE 启动时间**：32.768kHz 晶振起振需要 1~2 秒
4. **CNF 保护**：忘记清除 CNF 会导致计数器停止运行

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`RTC_Init(&cfg)\` | 初始化 RTC 预分频值 |
| \`RTC_SetCounter(val)\` | 设置计数器值 |
| \`RTC_GetCounter()\` | 读取当前计数器值 |

其他常用函数：
| 函数 | 功能 |
|------|------|
| \`RTC_SetAlarm(val)\` | 设置闹钟值 |
| \`RTC_GetFlagStatus(flag)\` | 获取标志状态（RTC_FLAG_SEC/OW/ALR/RSF/RTOFF） |
| \`RTC_ClearFlag(flag)\` | 清除标志 |
| \`RTC_ITConfig(src, ENABLE/DISABLE)\` | 使能/关闭中断（RTC_IT_SEC/ALR/OW） |
| \`RTC_WaitForSynchro()\` | 等待 APB1 与 RTC 同步 |
| \`RTC_EnterConfigMode()\` | 进入配置模式 |
| \`RTC_ExitConfigMode()\` | 退出配置模式 |

## 标准驱动流程

\`\`\`c
// 0. 使能 PWR 和 BKP 时钟，解除备份域写保护
RCC_APB1PeriphClockCmd(RCC_APB1Periph_PWR | RCC_APB1Periph_BKP, ENABLE);
PWR_BackupAccessCmd(ENABLE);

// 1. 使能 LSE 并等待稳定
RCC_LSEConfig(RCC_LSE_ON);
while (RCC_GetFlagStatus(RCC_FLAG_LSERDY) == RESET);

// 2. 选择 RTC 时钟源并使能
RCC_RTCCLKConfig(RCC_RTCCLKSource_LSE);
RCC_RTCCLKCmd(ENABLE);

// 3. 配置 RTC 预分频：32.768kHz → 1Hz
RTC_EnterConfigMode();
RTC_InitTypeDef rtcCfg;
rtcCfg.RTC_AsynchPrediv = 32767;
RTC_Init(&rtcCfg);
RTC_SetCounter(0);  // 初始值为 0
RTC_ExitConfigMode();

// 4. 使能秒中断
RTC_ITConfig(RTC_IT_SEC, ENABLE);

// 5. 读取时间
uint32_t seconds = RTC_GetCounter();
\`\`\`
`,by=`# 看门狗 (Watchdog)

## 概述

STM32F1 有 2 个看门狗定时器：**IWDG（独立看门狗）** 和 **WWDG（窗口看门狗）**。它们的核心作用是检测软件故障并自动复位系统。

| 特性 | IWDG | WWDG |
|------|------|------|
| 时钟源 | LSI (40kHz) | PCLK1 (36MHz) |
| 计数器宽度 | 12 位 | 7 位 |
| 预分频器 | 3 位 (÷4~÷256) | 2 位 (÷1~÷8) + 固定 ÷4096 |
| 窗口机制 | 无 | 有（上限窗口） |
| 早唤醒中断 | 无 | 支持（EWI） |
| 启动方式 | 软件钥匙 | 软件置位 WDGA |

---

## IWDG 独立看门狗

### 工作原理

1. **解锁寄存器**：向 KR 写入 0x5555 解锁 PR/RLR
2. **配置预分频**：写 PR 寄存器 [2:0]，选择分频比
3. **设置重装载值**：写 RLR 寄存器 [11:0]
4. **启动看门狗**：向 KR 写入 0xCCCC
5. **喂狗**：向 KR 写入 0xAAAA 重装载计数器

一旦启动，IWDG 无法暂停，只有复位才能停止。

### 寄存器

#### KR — 关键字寄存器 (0x00)

| 写入值 | 操作 |
|--------|------|
| 0x5555 | 解锁 PR/RLR 写访问 |
| 0xAAAA | 重装载计数器（喂狗） |
| 0xCCCC | 启动看门狗 |

#### PR — 预分频寄存器 (0x04)

| PR[2:0] | 分频比 | 溢出时间 (RLR=0xFFF) |
|---------|--------|----------------------|
| 000 | ÷4 | 409.6 ms |
| 001 | ÷8 | 819.2 ms |
| 010 | ÷16 | 1.64 s |
| 011 | ÷32 | 3.28 s |
| 100 | ÷64 | 6.55 s |
| 101 | ÷128 | 13.1 s |
| 110 | ÷256 | 26.2 s |
| 111 | ÷256 | 26.2 s |

#### RLR — 重装载寄存器 (0x08)

12 位 [11:0]，存储看门狗计数器重装载值。

溢出时间公式：
\`\`\`
T = (RLR + 1) × 预分频比 / 40kHz
\`\`\`

#### SR — 状态寄存器 (0x0C)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | PVU | 预分频值更新中 |
| 1 | RVU | 重装载值更新中 |

### 典型代码

\`\`\`c
// 配置 IWDG: 1 秒超时
IWDG->KR = 0x5555;          // 解锁
IWDG->PR = 4;               // ÷64 → 40kHz/64 = 625Hz
IWDG->RLR = 625;            // 625Hz × 625 = 1s
IWDG->KR = 0xCCCC;          // 启动

// 主循环
while (1) {
    // ... 正常程序 ...
    IWDG->KR = 0xAAAA;      // 喂狗
}
\`\`\`

---

## WWDG 窗口看门狗

### 工作原理

WWDG 有一个 **7 位递减计数器**（最大值 0x7F = 127），由 PCLK1 经过 4096 预分频器和可编程分频器驱动。

**窗口机制**：计数器只能在 "窗口" 内刷新：
- 当计数器 **≥ 窗口值** 时刷新 → 触发复位（喂狗太早）
- 当计数器 **< 0x40** 时 → 触发复位（喂狗太晚）
- 当 **0x40 ≤ 计数器 < 窗口值** → 允许刷新

### 寄存器

#### CR — 控制寄存器 (0x00)

| 位 | 名称 | 描述 |
|----|------|------|
| [6:0] | T | 7 位计数器值 |
| 7 | WDGA | 激活位（仅可由软件置 1，复位后由硬件清零） |

写入 CR 可以同时设置 T 位和刷新计数器。

#### CFR — 配置寄存器 (0x04)

| 位 | 名称 | 描述 |
|----|------|------|
| [6:0] | W | 窗口值 |
| [8:7] | WDGTB | 预分频器 (0:÷1, 1:÷2, 2:÷4, 3:÷8) |
| 9 | EWI | 早唤醒中断使能 |

EWI 使能后，计数器达到 0x40 时产生中断——这是最后的 "喂狗" 机会。

#### SR — 状态寄存器 (0x08)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | EWIF | 早唤醒中断标志（写 0 清零） |

### 溢出时间公式

\`\`\`
T = (4096 × 2^WDGTB × (T[6:0] + 1)) / PCLK1
\`\`\`

> PCLK1 = 36MHz (APB1)，WDGTB=0，T=0x7F → T ≈ 58.25ms

### 典型代码

\`\`\`c
// 配置 WWDG: 窗口 = 0x50, 计数器 = 0x7F, 预分频 = ÷8
RCC->APB1ENR |= RCC_APB1ENR_WWDGEN;  // 使能时钟

WWDG->CFR = (3 << 7) | (0x50);       // WDGTB=÷8, 窗口=0x50
WWDG->CR = (1 << 7) | 0x7F;          // WDGA=1, T=0x7F 启动

// 主循环中在窗口内刷新
while (1) {
    if ((WWDG->CR & 0x7F) < 0x50 && (WWDG->CR & 0x7F) >= 0x40) {
        WWDG->CR = (1 << 7) | 0x7F;  // 刷新
    }
}
\`\`\`

---

## IWDG vs WWDG 选择

| 场景 | 推荐 |
|------|------|
| 独立于系统时钟的可靠性 | IWDG |
| 精确的喂狗窗口控制 | WWDG |
| 需要喂狗前中断警告 | WWDG |
| 低功耗应用 | IWDG |
| 最长超时时间 | IWDG (~26s) |

---

## 注意事项

1. **IWDG 一旦启动无法软件停止**——只有复位能关闭
2. **WWDG 在调试状态下可配置停止**
3. **IWDG 的 LSI 频率有 ±30% 误差**——计算超时需考虑余量
4. **WWDG 的窗口上限是 0x7F**——到达即超时，需要及时喂狗
5. **不要在中断中喂狗**——主循环卡死但中断正常会导致无法复位

## 标准库函数

### IWDG

| 函数 | 功能 |
|------|------|
| \`IWDG_WriteAccessCmd(ENABLE)\` | 解锁 PR/RLR 写访问 |
| \`IWDG_SetPrescaler(div)\` | 设置预分频（IWDG_Prescaler_4 ~ _256） |
| \`IWDG_SetReload(val)\` | 设置重装载值（12-bit） |
| \`IWDG_ReloadCounter()\` | 重装载计数器（喂狗） |
| \`IWDG_Enable()\` | 启动看门狗 |

### WWDG

| 函数 | 功能 |
|------|------|
| \`WWDG_SetPrescaler(div)\` | 设置预分频（WWDG_Prescaler_1/2/4/8） |
| \`WWDG_SetWindowValue(val)\` | 设置窗口值（7-bit） |
| \`WWDG_Enable(val)\` | 设置计数器值并启动 |
| \`WWDG_EnableIT()\` | 使能早唤醒中断 |

## 标准驱动流程

### IWDG

\`\`\`c
// 1. 解锁写访问
IWDG_WriteAccessCmd(IWDG_WriteAccess_Enable);

// 2. 配置 1 秒超时
IWDG_SetPrescaler(IWDG_Prescaler_64);  // 40kHz / 64 = 625Hz
IWDG_SetReload(625);                    // 625 × 625Hz = 1s

// 3. 启动
IWDG_Enable();

// 4. 主循环喂狗
while (1) {
    // ... 正常程序 ...
    IWDG_ReloadCounter();               // 喂狗
}
\`\`\`

### WWDG

\`\`\`c
// 1. 使能时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_WWDG, ENABLE);

// 2. 配置预分频 ÷8 和窗口值
WWDG_SetPrescaler(WWDG_Prescaler_8);
WWDG_SetWindowValue(0x50);

// 3. 使能早唤醒中断（可选）
WWDG_EnableIT();

// 4. 启动（设置计数器值并置 WDGA）
WWDG_Enable(0x7F);

// 5. 在窗口内喂狗
while (1) {
    if ((WWDG->CR & 0x7F) < 0x50 && (WWDG->CR & 0x7F) >= 0x40) {
        WWDG_Enable(0x7F);
    }
}
\`\`\`
`,Dy=`# 低功耗 (PWR)

## 概述

STM32F1 有 3 种低功耗模式：**Sleep、Stop、Standby**，通过 PWR 模块控制。

| 特性 | Sleep | Stop | Standby |
|------|-------|------|---------|
| CPU 状态 | 停止 | 停止 | 停止 |
| 唤醒方式 | 任意中断/事件 | EXTI线 | WKUP引脚/IWDG复位/RTC闹钟/NRST |
| HSI/HSE | 运行 | 关闭 | 关闭 |
| PLL | 运行 | 关闭 | 关闭 |
| SRAM | 保持 | 保持 | 丢失 |
| 唤醒延迟 | 0μs | ~5μs (HSI启动) | ~50μs |
| 功耗 | ~5mA | ~20μA | ~2μA |
| 退出后 | 继续运行 | HSI自动启动 | 等同复位 |

---

## 模式选择

CR 寄存器的 LPDS 和 PDDS 位决定低功耗模式：

| LPDS | PDDS | WFI/WFE 进入 |
|------|------|-------------|
| 0 | x | Sleep |
| 1 | 0 | Stop |
| 1 | 1 | Standby |

---

## Sleep 模式

- CPU 时钟停止，外设继续运行
- 任意中断唤醒，无需配置
- 唤醒后继续执行下一条指令

\`\`\`c
// 进入 Sleep 模式
SCB->SCR &= ~SCB_SCR_SLEEPDEEP;  // Sleep
__WFI();                          // 等待中断
\`\`\`

---

## Stop 模式

- HSI/HSE/PLL 全部关闭
- SRAM 和寄存器保持
- 仅 EXTI 线可唤醒
- 唤醒后 HSI 自动启动

\`\`\`c
// 进入 Stop 模式
PWR->CR |= PWR_CR_LPDS;          // Stop mode
SCB->SCR |= SCB_SCR_SLEEPDEEP;   // Deep sleep
__WFI();                          // 等待中断

// 唤醒后需恢复系统时钟
\`\`\`

---

## Standby 模式

- 整个 1.8V 域断电
- SRAM 和寄存器全部丢失（备份域除外）
- 仅 WKUP 引脚上升沿/RTC闹钟/IWDG复位/NRST可唤醒
- 唤醒后等同复位，程序从头开始

\`\`\`c
// 进入 Standby 模式
PWR->CR |= PWR_CR_PDDS;          // Standby mode
PWR->CR |= PWR_CR_CWUF;          // 清除唤醒标志
SCB->SCR |= SCB_SCR_SLEEPDEEP;   // Deep sleep
__WFI();

// 唤醒后检查 CSR 的 SBF 标志
if (PWR->CSR & PWR_CSR_SBF) {
    // 来自 Standby 唤醒
    PWR->CR |= PWR_CR_CSBF;      // 清除 Standby 标志
}
\`\`\`

---

## 寄存器

### CR — 控制寄存器 (0x00)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | LPDS | 低功耗深度睡眠 (0=Sleep, 1=Stop/Standby) |
| 1 | PDDS | 断电深度睡眠 (0=Stop, 1=Standby) |
| 2 | CWUF | 写 1 清除 WUF 唤醒标志 |
| 3 | CSBF | 写 1 清除 SBF Standby 标志 |
| 4 | PVDE | PVD 使能 |
| [7:5] | PLS | PVD 电平选择 |
| 8 | DBP | 解除备份域写保护 |

**DBP 位非常重要**——必须先置 DBP=1，才能写 RTC 和备份寄存器。

### CSR — 控制/状态寄存器 (0x04)

| 位 | 名称 | 描述 |
|----|------|------|
| 0 | WUF | 唤醒标志（硬件置1，写 CWUF 清零） |
| 1 | SBF | Standby 标志（硬件置1，写 CSBF 清零） |
| 2 | PVDO | PVD 输出（只读） |
| 8 | EWUP | 使能 WKUP 引脚 |

---

## PVD（可编程电压检测器）

PVD 监控 VDD 电压，当 VDD 低于阈值时产生中断：

| PLS[2:0] | 阈值 |
|-----------|------|
| 000 | 2.2V |
| 001 | 2.3V |
| 010 | 2.4V |
| 011 | 2.5V |
| 100 | 2.6V |
| 101 | 2.7V |
| 110 | 2.8V |
| 111 | 2.9V |

\`\`\`c
PWR->CR |= (1 << 4) | (5 << 5);  // PVDE=1, PLS=101 (2.7V)
EXTI->RTSR |= (1 << 16);         // PVD 上升沿触发
EXTI->IMR |= (1 << 16);          // PVD 中断使能
NVIC_EnableIRQ(PVD_IRQn);
\`\`\`

---

## 模式选择指南

| 场景 | 推荐 |
|------|------|
| 短暂等待（<1ms） | Sleep |
| 长时间等待、需保持数据 | Stop |
| 极限低功耗、允许重新初始化 | Standby |
| 需备份域访问 | DBG→DBSLEEP/DBSTOP/DBSTANDBY 配置调试模式 |

---

## 注意事项

1. **进入 Stop 前必须配置 EXTI 唤醒源**，否则只能复位退出
2. **Standby 唤醒后程序从头执行**，需检查 SBF 判断来源
3. **写备份域寄存器前必须置 DBP=1**
4. **Stop 模式退出后 HSI 自动开启**，需恢复时钟配置
5. **调试模式下 Stop/Standby 行为不同**，需配置 DBGMCU

## 标准库函数

| 函数 | 功能 |
|------|------|
| \`PWR_EnterSTOPMode(regulator, entry)\` | 进入 Stop 模式 |
| \`PWR_EnterSTANDBYMode()\` | 进入 Standby 模式 |
| \`PWR_WakeUpPinCmd(ENABLE/DISABLE)\` | 使能/关闭 WKUP 引脚唤醒 |
| \`PWR_BackupAccessCmd(ENABLE/DISABLE)\` | 解除/恢复备份域写保护 |
| \`PWR_PVDCmd(ENABLE/DISABLE)\` | 使能/关闭 PVD |
| \`PWR_PVDLevelConfig(level)\` | 配置 PVD 阈值 |

Stop 模式参数：
- \`PWR_Regulator_ON\` — 调压器保持开启（唤醒快）
- \`PWR_Regulator_LowPower\` — 调压器低功耗模式
- \`PWR_STOPEntry_WFI\` / \`PWR_STOPEntry_WFE\` — 唤醒方式

PVD 阈值：\`PWR_PVDLevel_2V2\` ~ \`PWR_PVDLevel_2V9\`

## 标准驱动流程

### Stop 模式

\`\`\`c
// 1. 使能 PWR 时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_PWR, ENABLE);

// 2. 配置唤醒源（如 PA0 外部中断）
EXTI_InitTypeDef extiCfg;
extiCfg.EXTI_Line = EXTI_Line0;
extiCfg.EXTI_Mode = EXTI_Mode_Interrupt;
extiCfg.EXTI_Trigger = EXTI_Trigger_Rising;
extiCfg.EXTI_LineCmd = ENABLE;
EXTI_Init(&extiCfg);

// 3. 进入 Stop 模式
PWR_EnterSTOPMode(PWR_Regulator_LowPower, PWR_STOPEntry_WFI);

// 4. 唤醒后恢复时钟（HSI 已自动启动）
RCC_HSEConfig(RCC_HSE_ON);
while (RCC_GetFlagStatus(RCC_FLAG_HSERDY) == RESET);
RCC_PLLCmd(ENABLE);
while (RCC_GetFlagStatus(RCC_FLAG_PLLRDY) == RESET);
RCC_SYSCLKConfig(RCC_SYSCLKSource_PLLCLK);
\`\`\`

### Standby 模式

\`\`\`c
// 1. 使能 WKUP 引脚唤醒
PWR_WakeUpPinCmd(ENABLE);

// 2. 进入 Standby
PWR_EnterSTANDBYMode();

// 唤醒后程序从头执行 → 检查唤醒原因
if (PWR_GetFlagStatus(PWR_FLAG_SB) != RESET) {
    PWR_ClearFlag(PWR_FLAG_SB);
    // 来自 Standby 唤醒
}
\`\`\`
`,My=`# FreeRTOS 任务管理

## 概述

FreeRTOS 是一个轻量级实时操作系统内核，STM32 项目中广泛使用。核心概念包括**任务调度、队列、信号量**。

---

## 任务 (Task)

每个任务是一个独立的执行流，有自己的堆栈和优先级。

### 任务状态

\`\`\`
Ready ──→ Running ──→ Blocked (delay/semaphore/queue)
  ↑         │              │
  │         ↓              ↓ (timeout/event)
  └──←───←──┘              │
                           ↓
                        Ready
Running ──→ Suspended (vTaskSuspend)
Suspended ──→ Ready (vTaskResume)
\`\`\`

| 状态 | 含义 |
|------|------|
| Ready | 等待调度 |
| Running | 正在执行 |
| Blocked | 等待事件/延时 |
| Suspended | 主动挂起 |

### 任务创建

\`\`\`c
BaseType_t xTaskCreate(
    TaskFunction_t pxTaskCode,  // 任务函数
    const char *pcName,         // 任务名称
    uint16_t usStackDepth,      // 堆栈深度
    void *pvParameters,         // 参数
    UBaseType_t uxPriority,     // 优先级 (0~configMAX_PRIORITIES-1)
    TaskHandle_t *pxCreatedTask // 句柄
);
\`\`\`

### 任务延时

\`\`\`c
vTaskDelay(pdMS_TO_TICKS(1000));  // 延时 1000ms
vTaskDelayUntil(&xLastWakeTime, pdMS_TO_TICKS(100)); // 周期延时
\`\`\`

### 启动调度器

\`\`\`c
vTaskStartScheduler();  // 开始任务调度，永不返回
\`\`\`

---

## 优先级

FreeRTOS 使用**抢占式调度**：高优先级任务就绪时立即抢占低优先级任务。

- 数字越小优先级越高（本模拟器约定）
- 同优先级任务使用时间片轮转

---

## 队列 (Queue)

队列用于任务间通信，遵循 FIFO 原则。

\`\`\`c
// 创建队列
QueueHandle_t xQueue = xQueueCreate(10, sizeof(uint32_t));

// 发送（阻塞）
uint32_t data = 0x42;
xQueueSend(xQueue, &data, portMAX_DELAY);

// 接收（阻塞）
uint32_t received;
xQueueReceive(xQueue, &received, portMAX_DELAY);
\`\`\`

队列满时发送者阻塞，队列空时接收者阻塞。

---

## 信号量 (Semaphore)

### 二值信号量

用于任务同步，初始计数为 0：

\`\`\`c
SemaphoreHandle_t xSem = xSemaphoreCreateBinary();

// ISR 中释放
xSemaphoreGiveFromISR(xSem, &xHigherPriorityTaskWoken);

// 任务中获取
xSemaphoreTake(xSem, portMAX_DELAY);
\`\`\`

### 计数信号量

管理多个可用资源：

\`\`\`c
SemaphoreHandle_t xSem = xSemaphoreCreateCounting(5, 0);
xSemaphoreGive(xSem);  // 释放一个计数
xSemaphoreTake(xSem, portMAX_DELAY);  // 获取一个计数
\`\`\`

---

## 典型代码

\`\`\`c
// 创建两个任务
void Task1(void *pv) {
    while (1) {
        // 发送数据到队列
        uint32_t data = 0x42;
        xQueueSend(xQueue, &data, 0);
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

void Task2(void *pv) {
    while (1) {
        uint32_t received;
        if (xQueueReceive(xQueue, &received, portMAX_DELAY) == pdPASS) {
            // 处理数据
        }
    }
}

int main() {
    xQueue = xQueueCreate(5, sizeof(uint32_t));
    xTaskCreate(Task1, "Task1", 128, NULL, 1, NULL);
    xTaskCreate(Task2, "Task2", 128, NULL, 2, NULL);
    vTaskStartScheduler();
}
\`\`\`

---

## 常见配置

| 配置项 | 典型值 | 含义 |
|--------|--------|------|
| configTICK_RATE_HZ | 1000 | 系统时钟节拍 (1kHz) |
| configMAX_PRIORITIES | 5 | 最大优先级数 |
| configMINIMAL_STACK_SIZE | 128 | 最小堆栈 (words) |

---

## 注意事项

1. **空闲任务自动创建**——无需手动创建 Idle Task
2. **任务堆栈溢出检测**——开发阶段启用 \`configCHECK_FOR_STACK_OVERFLOW\`
3. **不要在优先级高于空闲的任务中死循环**——会饿死低优先级任务
4. **ISR 中只能用 FromISR 版本的 API**
5. **信号量和队列创建后自动加入内核管理**

## 与 SPL 标准库配合

FreeRTOS 负责任务调度，SPL 负责外设初始化，两者分工明确：

\`\`\`c
// SPL 风格外设初始化 + FreeRTOS 任务

// 外设初始化（使用 SPL）
void HW_Init(void) {
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA | RCC_APB2Periph_USART1, ENABLE);

    GPIO_InitTypeDef cfg;
    cfg.GPIO_Pin = GPIO_Pin_0;
    cfg.GPIO_Speed = GPIO_Speed_50MHz;
    cfg.GPIO_Mode = GPIO_Mode_Out_PP;
    GPIO_Init(GPIOA, &cfg);

    USART_InitTypeDef usartCfg;
    usartCfg.USART_BaudRate = 115200;
    usartCfg.USART_WordLength = USART_WordLength_8b;
    usartCfg.USART_StopBits = USART_StopBits_1;
    usartCfg.USART_Parity = USART_Parity_No;
    usartCfg.USART_Mode = USART_Mode_Rx | USART_Mode_Tx;
    usartCfg.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
    USART_Init(USART1, &usartCfg);
    USART_Cmd(USART1, ENABLE);
}

int main() {
    HW_Init();  // SPL 初始化硬件
    xTaskCreate(Task1, "Task1", 128, NULL, 1, NULL);
    vTaskStartScheduler();  // FreeRTOS 接管调度
}
\`\`\`

| FreeRTOS 领域 | SPL 领域 |
|--------------|---------|
| 任务创建、调度、优先级 | 外设时钟使能、GPIO 配置 |
| 队列、信号量、互斥量 | TIM 定时器、ADC 采集 |
| 软件定时器、内存管理 | USART/SPI/I2C 通信初始化 |
| 中断管理 (FromISR) | NVIC 中断优先级配置 |
`,Ly=`# FatFS 文件系统

## 概述

FatFS 是面向嵌入式系统的通用 FAT 文件系统库。STM32 通过 SPI/SDIO 连接 SD 卡后，使用 FatFS 进行文件读写操作。

---

## 基本流程

\`\`\`
f_mount() → f_open() → f_read()/f_write() → f_close()
\`\`\`

---

## API 详解

### 挂载文件系统

\`\`\`c
FATFS fs;
f_mount(&fs, "", 1);  // 挂载默认驱动器
\`\`\`

挂载后才能进行文件操作，返回 \`FR_OK\` (0) 表示成功。

### 打开文件

\`\`\`c
FIL file;
f_open(&file, "data.txt", FA_READ);   // 读模式
f_open(&file, "data.txt", FA_WRITE);  // 写模式（会截断）
\`\`\`

| 模式 | 值 | 含义 |
|------|-----|------|
| FA_READ | 0x01 | 只读 |
| FA_WRITE | 0x02 | 只写 |
| FA_OPEN_EXISTING | 0x00 | 打开已有文件 |

写模式下文件不存在会自动创建。

### 读取文件

\`\`\`c
UINT bytesRead;
uint8_t buffer[128];
f_read(&file, buffer, 128, &bytesRead);
\`\`\`

从当前文件指针位置读取，读取后指针自动后移。

### 写入文件

\`\`\`c
UINT bytesWritten;
uint8_t data[] = "Hello STM32";
f_write(&file, data, sizeof(data), &bytesWritten);
\`\`\`

从当前文件指针位置写入，写入后指针后移。

### 关闭文件

\`\`\`c
f_close(&file);
\`\`\`

必须关闭文件以确保数据完整写入。

### 读取目录

\`\`\`c
DIR dir;
FILINFO info;
f_opendir(&dir, "/");
f_readdir(&dir, &info);  // 逐条读取目录项
\`\`\`

---

## 返回值

| 值 | 常量 | 含义 |
|----|------|------|
| 0 | FR_OK | 成功 |
| 3 | FR_NOT_READY | 未挂载 |
| 4 | FR_NO_FILE | 文件不存在 |
| 9 | FR_INVALID_OBJECT | 文件对象无效 |

---

## SDIO 接口

STM32F103 通过 SDIO 外设连接 SD 卡：

\`\`\`
SDIO 基地址: 0x40018000
\`\`\`

### 寄存器

| 偏移 | 寄存器 | 功能 |
|------|--------|------|
| 0x00 | POWER | 电源控制 |
| 0x04 | CLKCR | 时钟控制 |
| 0x08 | ARG | 命令参数 |
| 0x0C | CMD | 命令 |
| 0x10 | RESP1 | 响应 1 |
| 0x14 | RESP2 | 响应 2 |

---

## 示例：读写文件

\`\`\`c
#include "ff.h"

FATFS fs;
FIL file;
UINT bytesRead;
uint8_t buffer[256];

int main(void) {
    f_mount(&fs, "", 1);

    // 写入文件
    f_open(&file, "log.txt", FA_WRITE);
    f_write(&file, "STM32 File I/O Test\\r\\n", 21, NULL);
    f_close(&file);

    // 读取文件
    f_open(&file, "log.txt", FA_READ);
    f_read(&file, buffer, sizeof(buffer), &bytesRead);
    f_close(&file);

    while (1) {}
}
\`\`\`

---

## 本模拟器

本模拟器提供所有核心 API 的软件实现，用内存数组模拟文件内容，无需真实 SD 卡即可学习和调试 FatFS 操作。

## SPL 硬件初始化

FatFS 本身不依赖 SPL，但底层 SD 卡通信（SPI/SDIO）需要 SPL 初始化：

\`\`\`c
// SPI 模式连接 SD 卡
void SD_SPI_Init(void) {
    // 使能 SPI1 和 GPIO 时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_SPI1 | RCC_APB2Periph_GPIOA, ENABLE);

    // 配置 SPI1：主模式，低速初始化
    SPI_InitTypeDef spiCfg;
    spiCfg.SPI_Direction = SPI_Direction_2Lines_FullDuplex;
    spiCfg.SPI_Mode = SPI_Mode_Master;
    spiCfg.SPI_DataSize = SPI_DataSize_8b;
    spiCfg.SPI_CPOL = SPI_CPOL_Low;
    spiCfg.SPI_CPHA = SPI_CPHA_1Edge;
    spiCfg.SPI_BaudRatePrescaler = SPI_BaudRatePrescaler_256;  // 低速
    spiCfg.SPI_NSS = SPI_NSS_Soft;
    SPI_Init(SPI1, &spiCfg);
    SPI_Cmd(SPI1, ENABLE);
}

// 使用 FatFS + 底层 SPI 驱动
int main(void) {
    SD_SPI_Init();             // SPL 初始化硬件
    f_mount(&fs, "", 1);       // FatFS 挂载
    // ... 文件操作 ...
}
\`\`\`

| 层次 | 职责 |
|------|------|
| FatFS API (\`f_open\`, \`f_read\`) | 文件系统逻辑 |
| \`diskio.c\` (\`disk_read\`, \`disk_write\`) | 块设备驱动接口 |
| SPL (\`SPI_Init\`, \`SPI_I2S_SendData\`) | SPI/SDIO 硬件初始化 |
`,Ny=`# STM32 调试技术

## 概述

嵌入式开发中，调试是必不可少的技能。STM32 提供多种调试手段：**SWD 在线调试、串口打印、逻辑分析仪、HardFault 分析**。

---

## SWD 调试

### 接口

SWD (Serial Wire Debug) 仅需 2 根线：

| 引脚 | 功能 |
|------|------|
| SWCLK | 时钟线 |
| SWDIO | 数据线 |

连接方式：
\`\`\`
STM32      调试器（ST-Link/J-Link）
PA14(SWCLK)  → SWCLK
PA13(SWDIO)  → SWDIO
VCC          → 3.3V
GND          → GND
\`\`\`

### 调试功能

- **断点 (Breakpoint)**: Cortex-M3 支持 6 个硬件断点
- **单步执行**: 逐行执行代码
- **变量监视**: 实时查看变量值
- **寄存器查看**: 查看 CPU 和外设寄存器
- **内存查看**: 直接查看内存内容

---

## 串口调试

最常用的调试手段，通过 USART 打印运行信息：

\`\`\`c
printf("ADC Value: %d\\r\\n", adcValue);
printf("System Clock: %lu Hz\\r\\n", SystemCoreClock);
\`\`\`

### 重定向 printf

\`\`\`c
int fputc(int ch, FILE *f) {
    while (!(USART1->SR & (1 << 7)));  // 等待 TXE
    USART1->DR = ch;
    return ch;
}
\`\`\`

---

## HardFault 分析

HardFault 是最常见的中断异常，通常由以下原因引起：

| 原因 | 示例 |
|------|------|
| 空指针访问 | \`*(uint32_t *)0x00000000 = 0;\` |
| 未对齐访问 | \`*(uint32_t *)0x20000001 = 0;\` |
| 除以零 | \`int x = 1 / 0;\` |
| 栈溢出 | 递归过深 / 局部变量过大 |
| 非法指令 | 跳转到数据段执行 |

### 定位 HardFault

进入 HardFault_Handler 后，通过栈帧找到出问题前的 PC 和 LR：

\`\`\`c
void HardFault_Handler(void) {
    uint32_t stacked_pc, stacked_lr;
    __asm volatile(
        "TST LR, #4\\n"
        "ITE EQ\\n"
        "MRSEQ R0, MSP\\n"
        "MRSNE R0, PSP\\n"
        "LDR R1, [R0, #24]\\n"  // PC
        "LDR R2, [R0, #20]\\n"  // LR
    );
    while (1) {}
}
\`\`\`

---

## 调试工具总结

| 工具 | 适用场景 | 优点 |
|------|---------|------|
| SWD 断点调试 | 逻辑错误 | 可单步、查看变量 |
| 串口 printf | 运行时状态 | 简单、实时 |
| 逻辑分析仪 | 时序问题 | 精确时序 |
| HardFault 分析 | 崩溃定位 | 找到根本原因 |

---

## 调试流程

\`\`\`
1. 观察现象（LED 不亮？串口没输出？）
2. 缩小范围（哪个模块出了问题？）
3. 设断点/加打印（定位具体代码行）
4. 查寄存器（配置是否正确？）
5. 修复并验证
\`\`\`

---

## 常见问题速查

| 现象 | 可能原因 |
|------|---------|
| 程序不运行 | 时钟未配置、BOOT 引脚错误 |
| 外设不工作 | 时钟未使能、GPIO 复用未配置 |
| 数据错误 | 对齐问题、缓冲区溢出 |
| 随机死机 | 栈溢出、中断优先级配置错误 |

## SPL 调试辅助

使用 SPL 的调试优势：

### 寄存器检查辅助函数

\`\`\`c
// 使用 SPL 读回配置（比直接读寄存器更可读）
uint32_t pclk2 = RCC_GetClocksFreq(&clocks);
if (RCC_GetFlagStatus(RCC_FLAG_HSERDY) == RESET) {
    printf("HSE not ready!\\r\\n");
}

// 检查 GPIO 输出状态
uint8_t pa0 = GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0);

// 检查 USART 标志
if (USART_GetFlagStatus(USART1, USART_FLAG_TXE) != RESET) {
    USART_SendData(USART1, 'A');
}
\`\`\`

### 常见 SPL 调试检查点

| 检查项 | SPL 函数 | 说明 |
|------|---------|------|
| 外设时钟是否使能 | \`RCC_GetFlagStatus\` | 确认时钟就绪 |
| GPIO 输出是否正确 | \`GPIO_ReadInputDataBit\` | 读回输出状态 |
| ADC 转换是否完成 | \`ADC_GetFlagStatus(ADC1, ADC_FLAG_EOC)\` | 检查 EOC 标志 |
| USART 是否可发送 | \`USART_GetFlagStatus(USART1, USART_FLAG_TXE)\` | 检查 TXE |
| TIM 是否在运行 | \`TIM_GetCounter(TIM2)\` | 读计数器验证
`,Oy=`# 综合项目

## 概述

本模块将前面学习的各外设组合成一个完整的应用项目，加深对 STM32 系统的整体理解。

---

## 项目：数据采集与显示系统

### 需求

- ADC 采集模拟信号（如温度传感器）
- TIM 定时触发 ADC 采样
- DMA 传输 ADC 数据到内存缓冲区
- USART 发送数据到上位机
- GPIO 控制 LED 指示状态

### 系统框图

\`\`\`
传感器 → ADC1 → DMA1 → SRAM Buffer
                        ↓
TIM2 (触发)         USART1 → 上位机
                        ↓
GPIO (LED 状态指示)
\`\`\`

---

## 硬件配置

### 引脚分配

| 外设 | 引脚 | 功能 |
|------|------|------|
| GPIOA.0 | PA0 | ADC 输入 (IN0) |
| GPIOA.9 | PA9 | USART1 TX |
| GPIOA.5 | PA5 | LED 指示 |
| TIM2 | - | 触发 ADC |

### 时钟配置

\`\`\`c
// SPL 风格
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA | RCC_APB2Periph_ADC1 | RCC_APB2Periph_USART1, ENABLE);
RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);
RCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1, ENABLE);
\`\`\`

---

## 软件架构

\`\`\`
main()
├── SystemClock_Config()
├── GPIO_Init()
├── USART1_Init()
├── TIM2_Init()
├── ADC1_Init()
├── DMA1_Init()
└── while(1) {
    ├── 等待 DMA 传输完成
    ├── 处理数据
    ├── USART 发送
    └── LED 状态更新
}
\`\`\`

---

## 关键代码片段

### TIM2 触发 ADC

\`\`\`c
// SPL 风格
TIM_TimeBaseInitTypeDef timCfg;
timCfg.TIM_Prescaler = 71;
timCfg.TIM_Period = 999;   // 1kHz 采样率
timCfg.TIM_CounterMode = TIM_CounterMode_Up;
TIM_TimeBaseInit(TIM2, &timCfg);

TIM_SelectOutputTrigger(TIM2, TIM_TRGOSource_Update);  // TRGO 触发
TIM_Cmd(TIM2, ENABLE);
\`\`\`

### ADC + DMA 配置

\`\`\`c
// SPL 风格
ADC_InitTypeDef adcCfg;
adcCfg.ADC_Mode = ADC_Mode_Independent;
adcCfg.ADC_ContinuousConvMode = DISABLE;
adcCfg.ADC_ExternalTrigConv = ADC_ExternalTrigConv_T2_TRGO;
adcCfg.ADC_DataAlign = ADC_DataAlign_Right;
adcCfg.ADC_NbrOfChannel = 1;
ADC_Init(ADC1, &adcCfg);
ADC_DMACmd(ADC1, ENABLE);
ADC_Cmd(ADC1, ENABLE);

DMA_InitTypeDef dmaCfg;
dmaCfg.DMA_PeripheralBaseAddr = (uint32_t)&ADC1->DR;
dmaCfg.DMA_MemoryBaseAddr = (uint32_t)buffer;
dmaCfg.DMA_DIR = DMA_DIR_PeripheralSRC;
dmaCfg.DMA_BufferSize = 100;
dmaCfg.DMA_PeripheralInc = DMA_PeripheralInc_Disable;
dmaCfg.DMA_MemoryInc = DMA_MemoryInc_Enable;
dmaCfg.DMA_Mode = DMA_Mode_Circular;
dmaCfg.DMA_Priority = DMA_Priority_High;
DMA_Init(DMA1_Channel1, &dmaCfg);
DMA_Cmd(DMA1_Channel1, ENABLE);
\`\`\`

### 数据发送

\`\`\`c
void USART1_SendData(uint16_t *buf, int len) {
    for (int i = 0; i < len; i++) {
        while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET);
        USART_SendData(USART1, (buf[i] >> 8) & 0xFF);
        while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET);
        USART_SendData(USART1, buf[i] & 0xFF);
    }
}
\`\`\`

## 项目所用 SPL 函数汇总

| 外设 | SPL 函数 |
|------|---------|
| RCC | \`RCC_APB2PeriphClockCmd\`, \`RCC_APB1PeriphClockCmd\`, \`RCC_AHBPeriphClockCmd\` |
| GPIO | \`GPIO_Init\`, \`GPIO_SetBits\`, \`GPIO_ResetBits\` |
| USART | \`USART_Init\`, \`USART_Cmd\`, \`USART_SendData\`, \`USART_GetFlagStatus\` |
| TIM | \`TIM_TimeBaseInit\`, \`TIM_SelectOutputTrigger\`, \`TIM_Cmd\` |
| ADC | \`ADC_Init\`, \`ADC_DMACmd\`, \`ADC_Cmd\` |
| DMA | \`DMA_Init\`, \`DMA_Cmd\` |

标准驱动流程：**时钟使能 → 结构体配置 → 外设初始化 → 外设使能**，多个外设按依赖顺序串联。

---

## 项目扩展方向

| 扩展 | 涉及外设 |
|------|---------|
| SD 卡存储 | SDIO + FatFS + DMA |
| 显示屏输出 | SPI (OLED/TFT) |
| CAN 总线传输 | CAN |
| RTC 时间戳 | RTC + BKP |
| I2C 温湿度传感器 | I2C |
| DAC 波形输出 | DAC + TIM + DMA |

---

## 调试技巧回顾

1. **分模块调试**: 逐个外设验证，不要一次写完所有代码
2. **串口打印关键值**: 在关键位置加 printf
3. **LED 指示程序流**: 不同频率闪烁表示不同状态
4. **检查时钟配置**: 时钟是大多数问题的根源
5. **检查 GPIO 复用**: 很多外设需要 AFIO 配置
`;function By(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Fy=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,jy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,zy={};function kf(e,t){return(zy.jsx?jy:Fy).test(e)}const Wy=/[ \t\n\f\r]/g;function Gy(e){return typeof e=="object"?e.type==="text"?wf(e.value):!1:wf(e)}function wf(e){return e.replace(Wy,"")===""}class ol{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ol.prototype.normal={};ol.prototype.property={};ol.prototype.space=void 0;function hm(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ol(n,r,t)}function Iu(e){return e.toLowerCase()}class it{constructor(t,n){this.attribute=n,this.property=t}}it.prototype.attribute="";it.prototype.booleanish=!1;it.prototype.boolean=!1;it.prototype.commaOrSpaceSeparated=!1;it.prototype.commaSeparated=!1;it.prototype.defined=!1;it.prototype.mustUseProperty=!1;it.prototype.number=!1;it.prototype.overloadedBoolean=!1;it.prototype.property="";it.prototype.spaceSeparated=!1;it.prototype.space=void 0;let Uy=0;const Y=Qn(),ke=Qn(),Pu=Qn(),O=Qn(),ce=Qn(),kr=Qn(),ot=Qn();function Qn(){return 2**++Uy}const Au=Object.freeze(Object.defineProperty({__proto__:null,boolean:Y,booleanish:ke,commaOrSpaceSeparated:ot,commaSeparated:kr,number:O,overloadedBoolean:Pu,spaceSeparated:ce},Symbol.toStringTag,{value:"Module"})),js=Object.keys(Au);class Bc extends it{constructor(t,n,r,i){let l=-1;if(super(t,n),Ef(this,"space",i),typeof r=="number")for(;++l<js.length;){const o=js[l];Ef(this,js[l],(r&Au[o])===Au[o])}}}Bc.prototype.defined=!0;function Ef(e,t,n){n&&(e[t]=n)}function Vr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const l=new Bc(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[Iu(r)]=r,n[Iu(l.attribute)]=r}return new ol(t,n,e.space)}const mm=Vr({properties:{ariaActiveDescendant:null,ariaAtomic:ke,ariaAutoComplete:null,ariaBusy:ke,ariaChecked:ke,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:ce,ariaCurrent:null,ariaDescribedBy:ce,ariaDetails:null,ariaDisabled:ke,ariaDropEffect:ce,ariaErrorMessage:null,ariaExpanded:ke,ariaFlowTo:ce,ariaGrabbed:ke,ariaHasPopup:null,ariaHidden:ke,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ce,ariaLevel:O,ariaLive:null,ariaModal:ke,ariaMultiLine:ke,ariaMultiSelectable:ke,ariaOrientation:null,ariaOwns:ce,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:ke,ariaReadOnly:ke,ariaRelevant:null,ariaRequired:ke,ariaRoleDescription:ce,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:ke,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function gm(e,t){return t in e?e[t]:t}function Cm(e,t){return gm(e,t.toLowerCase())}const Hy=Vr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:kr,acceptCharset:ce,accessKey:ce,action:null,allow:null,allowFullScreen:Y,allowPaymentRequest:Y,allowUserMedia:Y,alt:null,as:null,async:Y,autoCapitalize:null,autoComplete:ce,autoFocus:Y,autoPlay:Y,blocking:ce,capture:null,charSet:null,checked:Y,cite:null,className:ce,cols:O,colSpan:null,content:null,contentEditable:ke,controls:Y,controlsList:ce,coords:O|kr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Y,defer:Y,dir:null,dirName:null,disabled:Y,download:Pu,draggable:ke,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Y,formTarget:null,headers:ce,height:O,hidden:Pu,high:O,href:null,hrefLang:null,htmlFor:ce,httpEquiv:ce,id:null,imageSizes:null,imageSrcSet:null,inert:Y,inputMode:null,integrity:null,is:null,isMap:Y,itemId:null,itemProp:ce,itemRef:ce,itemScope:Y,itemType:ce,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Y,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:Y,muted:Y,name:null,nonce:null,noModule:Y,noValidate:Y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Y,optimum:O,pattern:null,ping:ce,placeholder:null,playsInline:Y,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Y,referrerPolicy:null,rel:ce,required:Y,reversed:Y,rows:O,rowSpan:O,sandbox:ce,scope:null,scoped:Y,seamless:Y,selected:Y,shadowRootClonable:Y,shadowRootDelegatesFocus:Y,shadowRootMode:null,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:ke,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:Y,useMap:null,value:ke,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ce,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Y,declare:Y,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:Y,noHref:Y,noShade:Y,noWrap:Y,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:ke,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Y,disableRemotePlayback:Y,prefix:null,property:null,results:O,security:null,unselectable:null},space:"html",transform:Cm}),Vy=Vr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ot,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:ce,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:Y,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:kr,g2:kr,glyphName:kr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:ot,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ce,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ot,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ot,rev:ot,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ot,requiredFeatures:ot,requiredFonts:ot,requiredFormats:ot,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:ot,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ot,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ot,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:gm}),_m=Vr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Sm=Vr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Cm}),ym=Vr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),$y={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ky=/[A-Z]/g,bf=/-[a-z]/g,Xy=/^data[-\w.:]+$/i;function qy(e,t){const n=Iu(t);let r=t,i=it;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Xy.test(t)){if(t.charAt(4)==="-"){const l=t.slice(5).replace(bf,Jy);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=t.slice(4);if(!bf.test(l)){let o=l.replace(Ky,Qy);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=Bc}return new i(r,t)}function Qy(e){return"-"+e.toLowerCase()}function Jy(e){return e.charAt(1).toUpperCase()}const Yy=hm([mm,Hy,_m,Sm,ym],"html"),Fc=hm([mm,Vy,_m,Sm,ym],"svg");function Zy(e){return e.join(" ").trim()}var jc={},Df=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ev=/\n/g,tv=/^\s*/,nv=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,rv=/^:\s*/,iv=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,lv=/^[;\s]*/,ov=/^\s+|\s+$/g,sv=`
`,Mf="/",Lf="*",On="",av="comment",uv="declaration";function cv(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var S=g.match(ev);S&&(n+=S.length);var v=g.lastIndexOf(sv);r=~v?g.length-v:r+g.length}function l(){var g={line:n,column:r};return function(S){return S.position=new o(g),u(),S}}function o(g){this.start=g,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(g){var S=new Error(t.source+":"+n+":"+r+": "+g);if(S.reason=g,S.filename=t.source,S.line=n,S.column=r,S.source=e,!t.silent)throw S}function a(g){var S=g.exec(e);if(S){var v=S[0];return i(v),e=e.slice(v.length),S}}function u(){a(tv)}function f(g){var S;for(g=g||[];S=d();)S!==!1&&g.push(S);return g}function d(){var g=l();if(!(Mf!=e.charAt(0)||Lf!=e.charAt(1))){for(var S=2;On!=e.charAt(S)&&(Lf!=e.charAt(S)||Mf!=e.charAt(S+1));)++S;if(S+=2,On===e.charAt(S-1))return s("End of comment missing");var v=e.slice(2,S-2);return r+=2,i(v),e=e.slice(S),r+=2,g({type:av,comment:v})}}function p(){var g=l(),S=a(nv);if(S){if(d(),!a(rv))return s("property missing ':'");var v=a(iv),m=g({type:uv,property:Nf(S[0].replace(Df,On)),value:v?Nf(v[0].replace(Df,On)):On});return a(lv),m}}function h(){var g=[];f(g);for(var S;S=p();)S!==!1&&(g.push(S),f(g));return g}return u(),h()}function Nf(e){return e?e.replace(ov,On):On}var dv=cv,fv=eo&&eo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(jc,"__esModule",{value:!0});jc.default=hv;const pv=fv(dv);function hv(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,pv.default)(e),i=typeof t=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:o,value:s}=l;i?t(o,s,l):s&&(n=n||{},n[o]=s)}),n}var rs={};Object.defineProperty(rs,"__esModule",{value:!0});rs.camelCase=void 0;var mv=/^--[a-zA-Z0-9_-]+$/,gv=/-([a-z])/g,Cv=/^[^-]+$/,_v=/^-(webkit|moz|ms|o|khtml)-/,Sv=/^-(ms)-/,yv=function(e){return!e||Cv.test(e)||mv.test(e)},vv=function(e,t){return t.toUpperCase()},Of=function(e,t){return"".concat(t,"-")},xv=function(e,t){return t===void 0&&(t={}),yv(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Sv,Of):e=e.replace(_v,Of),e.replace(gv,vv))};rs.camelCase=xv;var Rv=eo&&eo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Iv=Rv(jc),Pv=rs;function Tu(e,t){var n={};return!e||typeof e!="string"||(0,Iv.default)(e,function(r,i){r&&i&&(n[(0,Pv.camelCase)(r,t)]=i)}),n}Tu.default=Tu;var Av=Tu;const Tv=No(Av),vm=xm("end"),zc=xm("start");function xm(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function kv(e){const t=zc(e),n=vm(e);if(t&&n)return{start:t,end:n}}function Pi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Bf(e.position):"start"in e||"end"in e?Bf(e):"line"in e||"column"in e?ku(e):""}function ku(e){return Ff(e&&e.line)+":"+Ff(e&&e.column)}function Bf(e){return ku(e&&e.start)+"-"+ku(e&&e.end)}function Ff(e){return e&&typeof e=="number"?e:1}class $e extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",l={},o=!1;if(n&&("line"in n&&"column"in n?l={place:n}:"start"in n&&"end"in n?l={place:n}:"type"in n?l={ancestors:[n],place:n.position}:l={...n}),typeof t=="string"?i=t:!l.cause&&t&&(o=!0,i=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?l.ruleId=r:(l.source=r.slice(0,a),l.ruleId=r.slice(a+1))}if(!l.place&&l.ancestors&&l.ancestors){const a=l.ancestors[l.ancestors.length-1];a&&(l.place=a.position)}const s=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=Pi(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}$e.prototype.file="";$e.prototype.name="";$e.prototype.reason="";$e.prototype.message="";$e.prototype.stack="";$e.prototype.column=void 0;$e.prototype.line=void 0;$e.prototype.ancestors=void 0;$e.prototype.cause=void 0;$e.prototype.fatal=void 0;$e.prototype.place=void 0;$e.prototype.ruleId=void 0;$e.prototype.source=void 0;const Wc={}.hasOwnProperty,wv=new Map,Ev=/[A-Z]/g,bv=new Set(["table","tbody","thead","tfoot","tr"]),Dv=new Set(["td","th"]),Rm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Mv(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Wv(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=zv(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Fc:Yy,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},l=Im(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function Im(e,t,n){if(t.type==="element")return Lv(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Nv(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Bv(e,t,n);if(t.type==="mdxjsEsm")return Ov(e,t);if(t.type==="root")return Fv(e,t,n);if(t.type==="text")return jv(e,t)}function Lv(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Fc,e.schema=i),e.ancestors.push(t);const l=Am(e,t.tagName,!1),o=Gv(e,t);let s=Uc(e,t);return bv.has(t.tagName)&&(s=s.filter(function(a){return typeof a=="string"?!Gy(a):!0})),Pm(e,o,l,t),Gc(o,s),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function Nv(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Xi(e,t.position)}function Ov(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Xi(e,t.position)}function Bv(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Fc,e.schema=i),e.ancestors.push(t);const l=t.name===null?e.Fragment:Am(e,t.name,!0),o=Uv(e,t),s=Uc(e,t);return Pm(e,o,l,t),Gc(o,s),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function Fv(e,t,n){const r={};return Gc(r,Uc(e,t)),e.create(t,e.Fragment,r,n)}function jv(e,t){return t.value}function Pm(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Gc(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function zv(e,t,n){return r;function r(i,l,o,s){const u=Array.isArray(o.children)?n:t;return s?u(l,o,s):u(l,o)}}function Wv(e,t){return n;function n(r,i,l,o){const s=Array.isArray(l.children),a=zc(r);return t(i,l,o,s,{columnNumber:a?a.column-1:void 0,fileName:e,lineNumber:a?a.line:void 0},void 0)}}function Gv(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Wc.call(t.properties,i)){const l=Hv(e,i,t.properties[i]);if(l){const[o,s]=l;e.tableCellAlignToStyle&&o==="align"&&typeof s=="string"&&Dv.has(t.tagName)?r=s:n[o]=s}}if(r){const l=n.style||(n.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Uv(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const o=l.expression;o.type;const s=o.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Xi(e,t.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,l=e.evaluater.evaluateExpression(s.expression)}else Xi(e,t.position);else l=r.value===null?!0:r.value;n[i]=l}return n}function Uc(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:wv;for(;++r<t.children.length;){const l=t.children[r];let o;if(e.passKeys){const a=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(a){const u=i.get(a)||0;o=a+"-"+u,i.set(a,u+1)}}const s=Im(e,l,o);s!==void 0&&n.push(s)}return n}function Hv(e,t,n){const r=qy(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?By(n):Zy(n)),r.property==="style"){let i=typeof n=="object"?n:Vv(e,String(n));return e.stylePropertyNameCase==="css"&&(i=$v(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?$y[r.property]||r.property:r.attribute,n]}}function Vv(e,t){try{return Tv(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new $e("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Rm+"#cannot-parse-style-attribute",i}}function Am(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let l=-1,o;for(;++l<i.length;){const s=kf(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};o=o?{type:"MemberExpression",object:o,property:s,computed:!!(l&&s.type==="Literal"),optional:!1}:s}r=o}else r=kf(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Wc.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Xi(e)}function Xi(e,t){const n=new $e("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Rm+"#cannot-handle-mdx-estrees-without-createevaluater",n}function $v(e){const t={};let n;for(n in e)Wc.call(e,n)&&(t[Kv(n)]=e[n]);return t}function Kv(e){let t=e.replace(Ev,Xv);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Xv(e){return"-"+e.toLowerCase()}const zs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},qv={};function Hc(e,t){const n=qv,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Tm(e,r,i)}function Tm(e,t,n){if(Qv(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return jf(e.children,t,n)}return Array.isArray(e)?jf(e,t,n):""}function jf(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Tm(e[i],t,n);return r.join("")}function Qv(e){return!!(e&&typeof e=="object")}const zf=document.createElement("i");function Vc(e){const t="&"+e+";";zf.innerHTML=t;const n=zf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function dt(e,t,n,r){const i=e.length;let l=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);l<r.length;)o=r.slice(l,l+1e4),o.unshift(t,0),e.splice(...o),l+=1e4,t+=1e4}function Ct(e,t){return e.length>0?(dt(e,e.length,0,t),e):t}const Wf={}.hasOwnProperty;function km(e){const t={};let n=-1;for(;++n<e.length;)Jv(t,e[n]);return t}function Jv(e,t){let n;for(n in t){const i=(Wf.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n];let o;if(l)for(o in l){Wf.call(i,o)||(i[o]=[]);const s=l[o];Yv(i[o],Array.isArray(s)?s:s?[s]:[])}}}function Yv(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);dt(e,0,0,r)}function wm(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function wt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Xe=En(/[A-Za-z]/),He=En(/[\dA-Za-z]/),Zv=En(/[#-'*+\--9=?A-Z^-~]/);function ko(e){return e!==null&&(e<32||e===127)}const wu=En(/\d/),ex=En(/[\dA-Fa-f]/),tx=En(/[!-/:-@[-`{-~]/);function X(e){return e!==null&&e<-2}function ue(e){return e!==null&&(e<0||e===32)}function ee(e){return e===-2||e===-1||e===32}const is=En(new RegExp("\\p{P}|\\p{S}","u")),Kn=En(/\s/);function En(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function $r(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const l=e.charCodeAt(n);let o="";if(l===37&&He(e.charCodeAt(n+1))&&He(e.charCodeAt(n+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const s=e.charCodeAt(n+1);l<56320&&s>56319&&s<57344?(o=String.fromCharCode(l,s),i=1):o="�"}else o=String.fromCharCode(l);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function re(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(a){return ee(a)?(e.enter(n),s(a)):t(a)}function s(a){return ee(a)&&l++<i?(e.consume(a),s):(e.exit(n),t(a))}}const nx={tokenize:rx};function rx(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),re(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),l(s)}function l(s){const a=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=a),n=a,o(s)}function o(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return X(s)?(e.consume(s),e.exit("chunkText"),l):(e.consume(s),o)}}const ix={tokenize:lx},Gf={tokenize:ox};function lx(e){const t=this,n=[];let r=0,i,l,o;return s;function s(_){if(r<n.length){const R=n[r];return t.containerState=R[1],e.attempt(R[0].continuation,a,u)(_)}return u(_)}function a(_){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&C();const R=t.events.length;let A=R,P;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){P=t.events[A][1].end;break}m(r);let k=R;for(;k<t.events.length;)t.events[k][1].end={...P},k++;return dt(t.events,A+1,0,t.events.slice(R)),t.events.length=k,u(_)}return s(_)}function u(_){if(r===n.length){if(!i)return p(_);if(i.currentConstruct&&i.currentConstruct.concrete)return g(_);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Gf,f,d)(_)}function f(_){return i&&C(),m(r),p(_)}function d(_){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,g(_)}function p(_){return t.containerState={},e.attempt(Gf,h,g)(_)}function h(_){return r++,n.push([t.currentConstruct,t.containerState]),p(_)}function g(_){if(_===null){i&&C(),m(0),e.consume(_);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),S(_)}function S(_){if(_===null){v(e.exit("chunkFlow"),!0),m(0),e.consume(_);return}return X(_)?(e.consume(_),v(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(_),S)}function v(_,R){const A=t.sliceStream(_);if(R&&A.push(null),_.previous=l,l&&(l.next=_),l=_,i.defineSkip(_.start),i.write(A),t.parser.lazy[_.start.line]){let P=i.events.length;for(;P--;)if(i.events[P][1].start.offset<o&&(!i.events[P][1].end||i.events[P][1].end.offset>o))return;const k=t.events.length;let L=k,W,I;for(;L--;)if(t.events[L][0]==="exit"&&t.events[L][1].type==="chunkFlow"){if(W){I=t.events[L][1].end;break}W=!0}for(m(r),P=k;P<t.events.length;)t.events[P][1].end={...I},P++;dt(t.events,L+1,0,t.events.slice(k)),t.events.length=P}}function m(_){let R=n.length;for(;R-- >_;){const A=n[R];t.containerState=A[1],A[0].exit.call(t,e)}n.length=_}function C(){i.write([null]),l=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ox(e,t,n){return re(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function jr(e){if(e===null||ue(e)||Kn(e))return 1;if(is(e))return 2}function ls(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const Eu={name:"attention",resolveAll:sx,tokenize:ax};function sx(e,t){let n=-1,r,i,l,o,s,a,u,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d={...e[r][1].end},p={...e[n][1].start};Uf(d,-a),Uf(p,a),o={type:a>1?"strongSequence":"emphasisSequence",start:d,end:{...e[r][1].end}},s={type:a>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},l={type:a>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:a>1?"strong":"emphasis",start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ct(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Ct(u,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",l,t]]),u=Ct(u,ls(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Ct(u,[["exit",l,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,u=Ct(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,dt(e,r-1,n-r+3,u),n=r+u.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function ax(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=jr(r);let l;return o;function o(a){return l=a,e.enter("attentionSequence"),s(a)}function s(a){if(a===l)return e.consume(a),s;const u=e.exit("attentionSequence"),f=jr(a),d=!f||f===2&&i||n.includes(a),p=!i||i===2&&f||n.includes(r);return u._open=!!(l===42?d:d&&(i||!p)),u._close=!!(l===42?p:p&&(f||!d)),t(a)}}function Uf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const ux={name:"autolink",tokenize:cx};function cx(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(h){return Xe(h)?(e.consume(h),o):h===64?n(h):u(h)}function o(h){return h===43||h===45||h===46||He(h)?(r=1,s(h)):u(h)}function s(h){return h===58?(e.consume(h),r=0,a):(h===43||h===45||h===46||He(h))&&r++<32?(e.consume(h),s):(r=0,u(h))}function a(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||ko(h)?n(h):(e.consume(h),a)}function u(h){return h===64?(e.consume(h),f):Zv(h)?(e.consume(h),u):n(h)}function f(h){return He(h)?d(h):n(h)}function d(h){return h===46?(e.consume(h),r=0,f):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):p(h)}function p(h){if((h===45||He(h))&&r++<63){const g=h===45?p:d;return e.consume(h),g}return n(h)}}const sl={partial:!0,tokenize:dx};function dx(e,t,n){return r;function r(l){return ee(l)?re(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||X(l)?t(l):n(l)}}const Em={continuation:{tokenize:px},exit:hx,name:"blockQuote",tokenize:fx};function fx(e,t,n){const r=this;return i;function i(o){if(o===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return n(o)}function l(o){return ee(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function px(e,t,n){const r=this;return i;function i(o){return ee(o)?re(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(Em,t,n)(o)}}function hx(e){e.exit("blockQuote")}const bm={name:"characterEscape",tokenize:mx};function mx(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return tx(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const Dm={name:"characterReference",tokenize:gx};function gx(e,t,n){const r=this;let i=0,l,o;return s;function s(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),a}function a(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),l=31,o=He,f(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=ex,f):(e.enter("characterReferenceValue"),l=7,o=wu,f(d))}function f(d){if(d===59&&i){const p=e.exit("characterReferenceValue");return o===He&&!Vc(r.sliceSerialize(p))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(d)&&i++<l?(e.consume(d),f):n(d)}}const Hf={partial:!0,tokenize:_x},Vf={concrete:!0,name:"codeFenced",tokenize:Cx};function Cx(e,t,n){const r=this,i={partial:!0,tokenize:A};let l=0,o=0,s;return a;function a(P){return u(P)}function u(P){const k=r.events[r.events.length-1];return l=k&&k[1].type==="linePrefix"?k[2].sliceSerialize(k[1],!0).length:0,s=P,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(P)}function f(P){return P===s?(o++,e.consume(P),f):o<3?n(P):(e.exit("codeFencedFenceSequence"),ee(P)?re(e,d,"whitespace")(P):d(P))}function d(P){return P===null||X(P)?(e.exit("codeFencedFence"),r.interrupt?t(P):e.check(Hf,S,R)(P)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(P))}function p(P){return P===null||X(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(P)):ee(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),re(e,h,"whitespace")(P)):P===96&&P===s?n(P):(e.consume(P),p)}function h(P){return P===null||X(P)?d(P):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(P))}function g(P){return P===null||X(P)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(P)):P===96&&P===s?n(P):(e.consume(P),g)}function S(P){return e.attempt(i,R,v)(P)}function v(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),m}function m(P){return l>0&&ee(P)?re(e,C,"linePrefix",l+1)(P):C(P)}function C(P){return P===null||X(P)?e.check(Hf,S,R)(P):(e.enter("codeFlowValue"),_(P))}function _(P){return P===null||X(P)?(e.exit("codeFlowValue"),C(P)):(e.consume(P),_)}function R(P){return e.exit("codeFenced"),t(P)}function A(P,k,L){let W=0;return I;function I(B){return P.enter("lineEnding"),P.consume(B),P.exit("lineEnding"),z}function z(B){return P.enter("codeFencedFence"),ee(B)?re(P,G,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):G(B)}function G(B){return B===s?(P.enter("codeFencedFenceSequence"),Z(B)):L(B)}function Z(B){return B===s?(W++,P.consume(B),Z):W>=o?(P.exit("codeFencedFenceSequence"),ee(B)?re(P,b,"whitespace")(B):b(B)):L(B)}function b(B){return B===null||X(B)?(P.exit("codeFencedFence"),k(B)):L(B)}}}function _x(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const Ws={name:"codeIndented",tokenize:yx},Sx={partial:!0,tokenize:vx};function yx(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),re(e,l,"linePrefix",5)(u)}function l(u){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(u):n(u)}function o(u){return u===null?a(u):X(u)?e.attempt(Sx,o,a)(u):(e.enter("codeFlowValue"),s(u))}function s(u){return u===null||X(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),s)}function a(u){return e.exit("codeIndented"),t(u)}}function vx(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):X(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):re(e,l,"linePrefix",5)(o)}function l(o){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(o):X(o)?i(o):n(o)}}const xx={name:"codeText",previous:Ix,resolve:Rx,tokenize:Px};function Rx(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Ix(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Px(e,t,n){let r=0,i,l;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),s(d)}function s(d){return d===96?(e.consume(d),r++,s):(e.exit("codeTextSequence"),a(d))}function a(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),a):d===96?(l=e.enter("codeTextSequence"),i=0,f(d)):X(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),a):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||X(d)?(e.exit("codeTextData"),a(d)):(e.consume(d),u)}function f(d){return d===96?(e.consume(d),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(l.type="codeTextData",u(d))}}class Ax{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ri(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ri(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ri(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ri(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ri(this.left,n.reverse())}}}function ri(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Mm(e){const t={};let n=-1,r,i,l,o,s,a,u;const f=new Ax(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Tx(f,n)),n=t[n],u=!0);else if(r[1]._container){for(l=n,i=void 0;l--;)if(o=f.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},s=f.slice(i,n),s.unshift(r),f.splice(i,n-i+1,s))}}return dt(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function Tx(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const l=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const s=o.events,a=[],u={};let f,d,p=-1,h=n,g=0,S=0;const v=[S];for(;h;){for(;e.get(++i)[1]!==h;);l.push(i),h._tokenizer||(f=r.sliceStream(h),h.next||f.push(null),d&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=n;++p<s.length;)s[p][0]==="exit"&&s[p-1][0]==="enter"&&s[p][1].type===s[p-1][1].type&&s[p][1].start.line!==s[p][1].end.line&&(S=p+1,v.push(S),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):v.pop(),p=v.length;p--;){const m=s.slice(v[p],v[p+1]),C=l.pop();a.push([C,C+m.length-1]),e.splice(C,2,m)}for(a.reverse(),p=-1;++p<a.length;)u[g+a[p][0]]=g+a[p][1],g+=a[p][1]-a[p][0]-1;return u}const kx={resolve:Ex,tokenize:bx},wx={partial:!0,tokenize:Dx};function Ex(e){return Mm(e),e}function bx(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?l(s):X(s)?e.check(wx,o,l)(s):(e.consume(s),i)}function l(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function o(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Dx(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),re(e,l,"linePrefix")}function l(o){if(o===null||X(o))return n(o);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Lm(e,t,n,r,i,l,o,s,a){const u=a||Number.POSITIVE_INFINITY;let f=0;return d;function d(m){return m===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(m),e.exit(l),p):m===null||m===32||m===41||ko(m)?n(m):(e.enter(r),e.enter(o),e.enter(s),e.enter("chunkString",{contentType:"string"}),S(m))}function p(m){return m===62?(e.enter(l),e.consume(m),e.exit(l),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===62?(e.exit("chunkString"),e.exit(s),p(m)):m===null||m===60||X(m)?n(m):(e.consume(m),m===92?g:h)}function g(m){return m===60||m===62||m===92?(e.consume(m),h):h(m)}function S(m){return!f&&(m===null||m===41||ue(m))?(e.exit("chunkString"),e.exit(s),e.exit(o),e.exit(r),t(m)):f<u&&m===40?(e.consume(m),f++,S):m===41?(e.consume(m),f--,S):m===null||m===32||m===40||ko(m)?n(m):(e.consume(m),m===92?v:S)}function v(m){return m===40||m===41||m===92?(e.consume(m),S):S(m)}}function Nm(e,t,n,r,i,l){const o=this;let s=0,a;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(l),f}function f(h){return s>999||h===null||h===91||h===93&&!a||h===94&&!s&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):h===93?(e.exit(l),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):X(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||X(h)||s++>999?(e.exit("chunkString"),f(h)):(e.consume(h),a||(a=!ee(h)),h===92?p:d)}function p(h){return h===91||h===92||h===93?(e.consume(h),s++,d):d(h)}}function Om(e,t,n,r,i,l){let o;return s;function s(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),o=p===40?41:p,a):n(p)}function a(p){return p===o?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(l),u(p))}function u(p){return p===o?(e.exit(l),a(o)):p===null?n(p):X(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),re(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===o||p===null||X(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?d:f)}function d(p){return p===o||p===92?(e.consume(p),f):f(p)}}function Ai(e,t){let n;return r;function r(i){return X(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ee(i)?re(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Mx={name:"definition",tokenize:Nx},Lx={partial:!0,tokenize:Ox};function Nx(e,t,n){const r=this;let i;return l;function l(h){return e.enter("definition"),o(h)}function o(h){return Nm.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function s(h){return i=wt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),a):n(h)}function a(h){return ue(h)?Ai(e,u)(h):u(h)}function u(h){return Lm(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return e.attempt(Lx,d,d)(h)}function d(h){return ee(h)?re(e,p,"whitespace")(h):p(h)}function p(h){return h===null||X(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function Ox(e,t,n){return r;function r(s){return ue(s)?Ai(e,i)(s):n(s)}function i(s){return Om(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function l(s){return ee(s)?re(e,o,"whitespace")(s):o(s)}function o(s){return s===null||X(s)?t(s):n(s)}}const Bx={name:"hardBreakEscape",tokenize:Fx};function Fx(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return X(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const jx={name:"headingAtx",resolve:zx,tokenize:Wx};function zx(e,t){let n=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},dt(e,r,n-r+1,[["enter",i,t],["enter",l,t],["exit",l,t],["exit",i,t]])),e}function Wx(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),l(f)}function l(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||ue(f)?(e.exit("atxHeadingSequence"),s(f)):n(f)}function s(f){return f===35?(e.enter("atxHeadingSequence"),a(f)):f===null||X(f)?(e.exit("atxHeading"),t(f)):ee(f)?re(e,s,"whitespace")(f):(e.enter("atxHeadingText"),u(f))}function a(f){return f===35?(e.consume(f),a):(e.exit("atxHeadingSequence"),s(f))}function u(f){return f===null||f===35||ue(f)?(e.exit("atxHeadingText"),s(f)):(e.consume(f),u)}}const Gx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$f=["pre","script","style","textarea"],Ux={concrete:!0,name:"htmlFlow",resolveTo:$x,tokenize:Kx},Hx={partial:!0,tokenize:qx},Vx={partial:!0,tokenize:Xx};function $x(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Kx(e,t,n){const r=this;let i,l,o,s,a;return u;function u(x){return f(x)}function f(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),d}function d(x){return x===33?(e.consume(x),p):x===47?(e.consume(x),l=!0,S):x===63?(e.consume(x),i=3,r.interrupt?t:y):Xe(x)?(e.consume(x),o=String.fromCharCode(x),v):n(x)}function p(x){return x===45?(e.consume(x),i=2,h):x===91?(e.consume(x),i=5,s=0,g):Xe(x)?(e.consume(x),i=4,r.interrupt?t:y):n(x)}function h(x){return x===45?(e.consume(x),r.interrupt?t:y):n(x)}function g(x){const fe="CDATA[";return x===fe.charCodeAt(s++)?(e.consume(x),s===fe.length?r.interrupt?t:G:g):n(x)}function S(x){return Xe(x)?(e.consume(x),o=String.fromCharCode(x),v):n(x)}function v(x){if(x===null||x===47||x===62||ue(x)){const fe=x===47,De=o.toLowerCase();return!fe&&!l&&$f.includes(De)?(i=1,r.interrupt?t(x):G(x)):Gx.includes(o.toLowerCase())?(i=6,fe?(e.consume(x),m):r.interrupt?t(x):G(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(x):l?C(x):_(x))}return x===45||He(x)?(e.consume(x),o+=String.fromCharCode(x),v):n(x)}function m(x){return x===62?(e.consume(x),r.interrupt?t:G):n(x)}function C(x){return ee(x)?(e.consume(x),C):I(x)}function _(x){return x===47?(e.consume(x),I):x===58||x===95||Xe(x)?(e.consume(x),R):ee(x)?(e.consume(x),_):I(x)}function R(x){return x===45||x===46||x===58||x===95||He(x)?(e.consume(x),R):A(x)}function A(x){return x===61?(e.consume(x),P):ee(x)?(e.consume(x),A):_(x)}function P(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),a=x,k):ee(x)?(e.consume(x),P):L(x)}function k(x){return x===a?(e.consume(x),a=null,W):x===null||X(x)?n(x):(e.consume(x),k)}function L(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||ue(x)?A(x):(e.consume(x),L)}function W(x){return x===47||x===62||ee(x)?_(x):n(x)}function I(x){return x===62?(e.consume(x),z):n(x)}function z(x){return x===null||X(x)?G(x):ee(x)?(e.consume(x),z):n(x)}function G(x){return x===45&&i===2?(e.consume(x),Q):x===60&&i===1?(e.consume(x),le):x===62&&i===4?(e.consume(x),V):x===63&&i===3?(e.consume(x),y):x===93&&i===5?(e.consume(x),$):X(x)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Hx,K,Z)(x)):x===null||X(x)?(e.exit("htmlFlowData"),Z(x)):(e.consume(x),G)}function Z(x){return e.check(Vx,b,K)(x)}function b(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),B}function B(x){return x===null||X(x)?Z(x):(e.enter("htmlFlowData"),G(x))}function Q(x){return x===45?(e.consume(x),y):G(x)}function le(x){return x===47?(e.consume(x),o="",F):G(x)}function F(x){if(x===62){const fe=o.toLowerCase();return $f.includes(fe)?(e.consume(x),V):G(x)}return Xe(x)&&o.length<8?(e.consume(x),o+=String.fromCharCode(x),F):G(x)}function $(x){return x===93?(e.consume(x),y):G(x)}function y(x){return x===62?(e.consume(x),V):x===45&&i===2?(e.consume(x),y):G(x)}function V(x){return x===null||X(x)?(e.exit("htmlFlowData"),K(x)):(e.consume(x),V)}function K(x){return e.exit("htmlFlow"),t(x)}}function Xx(e,t,n){const r=this;return i;function i(o){return X(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):n(o)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function qx(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(sl,t,n)}}const Qx={name:"htmlText",tokenize:Jx};function Jx(e,t,n){const r=this;let i,l,o;return s;function s(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),a}function a(y){return y===33?(e.consume(y),u):y===47?(e.consume(y),A):y===63?(e.consume(y),_):Xe(y)?(e.consume(y),L):n(y)}function u(y){return y===45?(e.consume(y),f):y===91?(e.consume(y),l=0,g):Xe(y)?(e.consume(y),C):n(y)}function f(y){return y===45?(e.consume(y),h):n(y)}function d(y){return y===null?n(y):y===45?(e.consume(y),p):X(y)?(o=d,le(y)):(e.consume(y),d)}function p(y){return y===45?(e.consume(y),h):d(y)}function h(y){return y===62?Q(y):y===45?p(y):d(y)}function g(y){const V="CDATA[";return y===V.charCodeAt(l++)?(e.consume(y),l===V.length?S:g):n(y)}function S(y){return y===null?n(y):y===93?(e.consume(y),v):X(y)?(o=S,le(y)):(e.consume(y),S)}function v(y){return y===93?(e.consume(y),m):S(y)}function m(y){return y===62?Q(y):y===93?(e.consume(y),m):S(y)}function C(y){return y===null||y===62?Q(y):X(y)?(o=C,le(y)):(e.consume(y),C)}function _(y){return y===null?n(y):y===63?(e.consume(y),R):X(y)?(o=_,le(y)):(e.consume(y),_)}function R(y){return y===62?Q(y):_(y)}function A(y){return Xe(y)?(e.consume(y),P):n(y)}function P(y){return y===45||He(y)?(e.consume(y),P):k(y)}function k(y){return X(y)?(o=k,le(y)):ee(y)?(e.consume(y),k):Q(y)}function L(y){return y===45||He(y)?(e.consume(y),L):y===47||y===62||ue(y)?W(y):n(y)}function W(y){return y===47?(e.consume(y),Q):y===58||y===95||Xe(y)?(e.consume(y),I):X(y)?(o=W,le(y)):ee(y)?(e.consume(y),W):Q(y)}function I(y){return y===45||y===46||y===58||y===95||He(y)?(e.consume(y),I):z(y)}function z(y){return y===61?(e.consume(y),G):X(y)?(o=z,le(y)):ee(y)?(e.consume(y),z):W(y)}function G(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),i=y,Z):X(y)?(o=G,le(y)):ee(y)?(e.consume(y),G):(e.consume(y),b)}function Z(y){return y===i?(e.consume(y),i=void 0,B):y===null?n(y):X(y)?(o=Z,le(y)):(e.consume(y),Z)}function b(y){return y===null||y===34||y===39||y===60||y===61||y===96?n(y):y===47||y===62||ue(y)?W(y):(e.consume(y),b)}function B(y){return y===47||y===62||ue(y)?W(y):n(y)}function Q(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),t):n(y)}function le(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),F}function F(y){return ee(y)?re(e,$,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):$(y)}function $(y){return e.enter("htmlTextData"),o(y)}}const $c={name:"labelEnd",resolveAll:tR,resolveTo:nR,tokenize:rR},Yx={tokenize:iR},Zx={tokenize:lR},eR={tokenize:oR};function tR(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&dt(e,0,e.length,n),e}function nR(e,t){let n=e.length,r=0,i,l,o,s;for(;n--;)if(i=e[n][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const a={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},f={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return s=[["enter",a,t],["enter",u,t]],s=Ct(s,e.slice(l+1,l+r+3)),s=Ct(s,[["enter",f,t]]),s=Ct(s,ls(t.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),t)),s=Ct(s,[["exit",f,t],e[o-2],e[o-1],["exit",u,t]]),s=Ct(s,e.slice(o+1)),s=Ct(s,[["exit",a,t]]),dt(e,l,e.length,s),e}function rR(e,t,n){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return s;function s(p){return l?l._inactive?d(p):(o=r.parser.defined.includes(wt(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),a):n(p)}function a(p){return p===40?e.attempt(Yx,f,o?f:d)(p):p===91?e.attempt(Zx,f,o?u:d)(p):o?f(p):d(p)}function u(p){return e.attempt(eR,f,d)(p)}function f(p){return t(p)}function d(p){return l._balanced=!0,n(p)}}function iR(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return ue(d)?Ai(e,l)(d):l(d)}function l(d){return d===41?f(d):Lm(e,o,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return ue(d)?Ai(e,a)(d):f(d)}function s(d){return n(d)}function a(d){return d===34||d===39||d===40?Om(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):f(d)}function u(d){return ue(d)?Ai(e,f)(d):f(d)}function f(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function lR(e,t,n){const r=this;return i;function i(s){return Nm.call(r,e,l,o,"reference","referenceMarker","referenceString")(s)}function l(s){return r.parser.defined.includes(wt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function o(s){return n(s)}}function oR(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const sR={name:"labelStartImage",resolveAll:$c.resolveAll,tokenize:aR};function aR(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),l}function l(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),o):n(s)}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const uR={name:"labelStartLink",resolveAll:$c.resolveAll,tokenize:cR};function cR(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const Gs={name:"lineEnding",tokenize:dR};function dR(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),re(e,t,"linePrefix")}}const Jl={name:"thematicBreak",tokenize:fR};function fR(e,t,n){let r=0,i;return l;function l(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,s(u)}function s(u){return u===i?(e.enter("thematicBreakSequence"),a(u)):r>=3&&(u===null||X(u))?(e.exit("thematicBreak"),t(u)):n(u)}function a(u){return u===i?(e.consume(u),r++,a):(e.exit("thematicBreakSequence"),ee(u)?re(e,s,"whitespace")(u):s(u))}}const Ye={continuation:{tokenize:gR},exit:_R,name:"list",tokenize:mR},pR={partial:!0,tokenize:SR},hR={partial:!0,tokenize:CR};function mR(e,t,n){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:wu(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Jl,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(h)}return n(h)}function a(h){return wu(h)&&++o<10?(e.consume(h),a):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(sl,r.interrupt?n:f,e.attempt(pR,p,d))}function f(h){return r.containerState.initialBlankLine=!0,l++,p(h)}function d(h){return ee(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):n(h)}function p(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function gR(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(sl,i,l);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,re(e,t,"listItemIndent",r.containerState.size+1)(s)}function l(s){return r.containerState.furtherBlankLines||!ee(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(hR,t,o)(s))}function o(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,re(e,e.attempt(Ye,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function CR(e,t,n){const r=this;return re(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(l):n(l)}}function _R(e){e.exit(this.containerState.type)}function SR(e,t,n){const r=this;return re(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!ee(l)&&o&&o[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const Kf={name:"setextUnderline",resolveTo:yR,tokenize:vR};function yR(e,t){let n=e.length,r,i,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function vR(e,t,n){const r=this;let i;return l;function l(u){let f=r.events.length,d;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){d=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=u,o(u)):n(u)}function o(u){return e.enter("setextHeadingLineSequence"),s(u)}function s(u){return u===i?(e.consume(u),s):(e.exit("setextHeadingLineSequence"),ee(u)?re(e,a,"lineSuffix")(u):a(u))}function a(u){return u===null||X(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const xR={tokenize:RR};function RR(e){const t=this,n=e.attempt(sl,r,e.attempt(this.parser.constructs.flowInitial,i,re(e,e.attempt(this.parser.constructs.flow,i,e.attempt(kx,i)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const IR={resolveAll:Fm()},PR=Bm("string"),AR=Bm("text");function Bm(e){return{resolveAll:Fm(e==="text"?TR:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],l=n.attempt(i,o,s);return o;function o(f){return u(f)?l(f):s(f)}function s(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),a}function a(f){return u(f)?(n.exit("data"),l(f)):(n.consume(f),a)}function u(f){if(f===null)return!0;const d=i[f];let p=-1;if(d)for(;++p<d.length;){const h=d[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Fm(e){return t;function t(n,r){let i=-1,l;for(;++i<=n.length;)l===void 0?n[i]&&n[i][1].type==="data"&&(l=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==l+2&&(n[l][1].end=n[i-1][1].end,n.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(n,r):n}}function TR(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let l=i.length,o=-1,s=0,a;for(;l--;){const u=i[l];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(u===-2)a=!0,s++;else if(u!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const u={type:n===e.length||a||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const kR={42:Ye,43:Ye,45:Ye,48:Ye,49:Ye,50:Ye,51:Ye,52:Ye,53:Ye,54:Ye,55:Ye,56:Ye,57:Ye,62:Em},wR={91:Mx},ER={[-2]:Ws,[-1]:Ws,32:Ws},bR={35:jx,42:Jl,45:[Kf,Jl],60:Ux,61:Kf,95:Jl,96:Vf,126:Vf},DR={38:Dm,92:bm},MR={[-5]:Gs,[-4]:Gs,[-3]:Gs,33:sR,38:Dm,42:Eu,60:[ux,Qx],91:uR,92:[Bx,bm],93:$c,95:Eu,96:xx},LR={null:[Eu,IR]},NR={null:[42,95]},OR={null:[]},BR=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:NR,contentInitial:wR,disable:OR,document:kR,flow:bR,flowInitial:ER,insideSpan:LR,string:DR,text:MR},Symbol.toStringTag,{value:"Module"}));function FR(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},l=[];let o=[],s=[];const a={attempt:k(A),check:k(P),consume:C,enter:_,exit:R,interrupt:k(P,{interrupt:!0})},u={code:null,containerState:{},defineSkip:S,events:[],now:g,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:d};let f=t.tokenize.call(u,a);return t.resolveAll&&l.push(t),u;function d(z){return o=Ct(o,z),v(),o[o.length-1]!==null?[]:(L(t,0),u.events=ls(l,u.events,u),u.events)}function p(z,G){return zR(h(z),G)}function h(z){return jR(o,z)}function g(){const{_bufferIndex:z,_index:G,line:Z,column:b,offset:B}=r;return{_bufferIndex:z,_index:G,line:Z,column:b,offset:B}}function S(z){i[z.line]=z.column,I()}function v(){let z;for(;r._index<o.length;){const G=o[r._index];if(typeof G=="string")for(z=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===z&&r._bufferIndex<G.length;)m(G.charCodeAt(r._bufferIndex));else m(G)}}function m(z){f=f(z)}function C(z){X(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,I()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=z}function _(z,G){const Z=G||{};return Z.type=z,Z.start=g(),u.events.push(["enter",Z,u]),s.push(Z),Z}function R(z){const G=s.pop();return G.end=g(),u.events.push(["exit",G,u]),G}function A(z,G){L(z,G.from)}function P(z,G){G.restore()}function k(z,G){return Z;function Z(b,B,Q){let le,F,$,y;return Array.isArray(b)?K(b):"tokenize"in b?K([b]):V(b);function V(pe){return bt;function bt(tn){const Jn=tn!==null&&pe[tn],Yn=tn!==null&&pe.null,cl=[...Array.isArray(Jn)?Jn:Jn?[Jn]:[],...Array.isArray(Yn)?Yn:Yn?[Yn]:[]];return K(cl)(tn)}}function K(pe){return le=pe,F=0,pe.length===0?Q:x(pe[F])}function x(pe){return bt;function bt(tn){return y=W(),$=pe,pe.partial||(u.currentConstruct=pe),pe.name&&u.parser.constructs.disable.null.includes(pe.name)?De():pe.tokenize.call(G?Object.assign(Object.create(u),G):u,a,fe,De)(tn)}}function fe(pe){return z($,y),B}function De(pe){return y.restore(),++F<le.length?x(le[F]):Q}}}function L(z,G){z.resolveAll&&!l.includes(z)&&l.push(z),z.resolve&&dt(u.events,G,u.events.length-G,z.resolve(u.events.slice(G),u)),z.resolveTo&&(u.events=z.resolveTo(u.events,u))}function W(){const z=g(),G=u.previous,Z=u.currentConstruct,b=u.events.length,B=Array.from(s);return{from:b,restore:Q};function Q(){r=z,u.previous=G,u.currentConstruct=Z,u.events.length=b,s=B,I()}}function I(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function jR(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,l=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,l)];else{if(o=e.slice(n,i),r>-1){const s=o[0];typeof s=="string"?o[0]=s.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function zR(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const l=e[n];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function WR(e){const r={constructs:km([BR,...(e||{}).extensions||[]]),content:i(nx),defined:[],document:i(ix),flow:i(xR),lazy:{},string:i(PR),text:i(AR)};return r;function i(l){return o;function o(s){return FR(r,l,s)}}}function GR(e){for(;!Mm(e););return e}const Xf=/[\0\t\n\r]/g;function UR(){let e=1,t="",n=!0,r;return i;function i(l,o,s){const a=[];let u,f,d,p,h;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),d=0,t="",n&&(l.charCodeAt(0)===65279&&d++,n=void 0);d<l.length;){if(Xf.lastIndex=d,u=Xf.exec(l),p=u&&u.index!==void 0?u.index:l.length,h=l.charCodeAt(p),!u){t=l.slice(d);break}if(h===10&&d===p&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),d<p&&(a.push(l.slice(d,p)),e+=p-d),h){case 0:{a.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,a.push(-2);e++<f;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}d=p+1}return s&&(r&&a.push(-5),t&&a.push(t),a.push(null)),a}}const HR=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function VR(e){return e.replace(HR,$R)}function $R(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),l=i===120||i===88;return wm(n.slice(l?2:1),l?16:10)}return Vc(n)||e}const jm={}.hasOwnProperty;function KR(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),XR(n)(GR(WR(n).document().write(UR()(e,t,!0))))}function XR(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(ld),autolinkProtocol:W,autolinkEmail:W,atxHeading:l(nd),blockQuote:l(Yn),characterEscape:W,characterReference:W,codeFenced:l(cl),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(cl,o),codeText:l(wg,o),codeTextData:W,data:W,codeFlowValue:W,definition:l(Eg),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(bg),hardBreakEscape:l(rd),hardBreakTrailing:l(rd),htmlFlow:l(id,o),htmlFlowData:W,htmlText:l(id,o),htmlTextData:W,image:l(Dg),label:o,link:l(ld),listItem:l(Mg),listItemValue:p,listOrdered:l(od,d),listUnordered:l(od),paragraph:l(Lg),reference:x,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(nd),strong:l(Ng),thematicBreak:l(Bg)},exit:{atxHeading:a(),atxHeadingSequence:A,autolink:a(),autolinkEmail:Jn,autolinkProtocol:tn,blockQuote:a(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:De,characterReferenceMarkerNumeric:De,characterReferenceValue:pe,characterReference:bt,codeFenced:a(v),codeFencedFence:S,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:I,codeIndented:a(m),codeText:a(B),codeTextData:I,data:I,definition:a(),definitionDestinationString:R,definitionLabelString:C,definitionTitleString:_,emphasis:a(),hardBreakEscape:a(G),hardBreakTrailing:a(G),htmlFlow:a(Z),htmlFlowData:I,htmlText:a(b),htmlTextData:I,image:a(le),label:$,labelText:F,lineEnding:z,link:a(Q),listItem:a(),listOrdered:a(),listUnordered:a(),paragraph:a(),referenceString:fe,resourceDestinationString:y,resourceTitleString:V,resource:K,setextHeading:a(L),setextHeadingLineSequence:k,setextHeadingText:P,strong:a(),thematicBreak:a()}};zm(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(E){let j={type:"root",children:[]};const J={stack:[j],tokenStack:[],config:t,enter:s,exit:u,buffer:o,resume:f,data:n},ne=[];let ae=-1;for(;++ae<E.length;)if(E[ae][1].type==="listOrdered"||E[ae][1].type==="listUnordered")if(E[ae][0]==="enter")ne.push(ae);else{const xt=ne.pop();ae=i(E,xt,ae)}for(ae=-1;++ae<E.length;){const xt=t[E[ae][0]];jm.call(xt,E[ae][1].type)&&xt[E[ae][1].type].call(Object.assign({sliceSerialize:E[ae][2].sliceSerialize},J),E[ae][1])}if(J.tokenStack.length>0){const xt=J.tokenStack[J.tokenStack.length-1];(xt[1]||qf).call(J,void 0,xt[0])}for(j.position={start:rn(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:rn(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},ae=-1;++ae<t.transforms.length;)j=t.transforms[ae](j)||j;return j}function i(E,j,J){let ne=j-1,ae=-1,xt=!1,bn,jt,Kr,Xr;for(;++ne<=J;){const lt=E[ne];switch(lt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{lt[0]==="enter"?ae++:ae--,Xr=void 0;break}case"lineEndingBlank":{lt[0]==="enter"&&(bn&&!Xr&&!ae&&!Kr&&(Kr=ne),Xr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Xr=void 0}if(!ae&&lt[0]==="enter"&&lt[1].type==="listItemPrefix"||ae===-1&&lt[0]==="exit"&&(lt[1].type==="listUnordered"||lt[1].type==="listOrdered")){if(bn){let Zn=ne;for(jt=void 0;Zn--;){const zt=E[Zn];if(zt[1].type==="lineEnding"||zt[1].type==="lineEndingBlank"){if(zt[0]==="exit")continue;jt&&(E[jt][1].type="lineEndingBlank",xt=!0),zt[1].type="lineEnding",jt=Zn}else if(!(zt[1].type==="linePrefix"||zt[1].type==="blockQuotePrefix"||zt[1].type==="blockQuotePrefixWhitespace"||zt[1].type==="blockQuoteMarker"||zt[1].type==="listItemIndent"))break}Kr&&(!jt||Kr<jt)&&(bn._spread=!0),bn.end=Object.assign({},jt?E[jt][1].start:lt[1].end),E.splice(jt||ne,0,["exit",bn,lt[2]]),ne++,J++}if(lt[1].type==="listItemPrefix"){const Zn={type:"listItem",_spread:!1,start:Object.assign({},lt[1].start),end:void 0};bn=Zn,E.splice(ne,0,["enter",Zn,lt[2]]),ne++,J++,Kr=void 0,Xr=!0}}}return E[j][1]._spread=xt,J}function l(E,j){return J;function J(ne){s.call(this,E(ne),ne),j&&j.call(this,ne)}}function o(){this.stack.push({type:"fragment",children:[]})}function s(E,j,J){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([j,J||void 0]),E.position={start:rn(j.start),end:void 0}}function a(E){return j;function j(J){E&&E.call(this,J),u.call(this,J)}}function u(E,j){const J=this.stack.pop(),ne=this.tokenStack.pop();if(ne)ne[0].type!==E.type&&(j?j.call(this,E,ne[0]):(ne[1]||qf).call(this,E,ne[0]));else throw new Error("Cannot close `"+E.type+"` ("+Pi({start:E.start,end:E.end})+"): it’s not open");J.position.end=rn(E.end)}function f(){return Hc(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(E){if(this.data.expectingFirstListItemValue){const j=this.stack[this.stack.length-2];j.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function h(){const E=this.resume(),j=this.stack[this.stack.length-1];j.lang=E}function g(){const E=this.resume(),j=this.stack[this.stack.length-1];j.meta=E}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function v(){const E=this.resume(),j=this.stack[this.stack.length-1];j.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const E=this.resume(),j=this.stack[this.stack.length-1];j.value=E.replace(/(\r?\n|\r)$/g,"")}function C(E){const j=this.resume(),J=this.stack[this.stack.length-1];J.label=j,J.identifier=wt(this.sliceSerialize(E)).toLowerCase()}function _(){const E=this.resume(),j=this.stack[this.stack.length-1];j.title=E}function R(){const E=this.resume(),j=this.stack[this.stack.length-1];j.url=E}function A(E){const j=this.stack[this.stack.length-1];if(!j.depth){const J=this.sliceSerialize(E).length;j.depth=J}}function P(){this.data.setextHeadingSlurpLineEnding=!0}function k(E){const j=this.stack[this.stack.length-1];j.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function L(){this.data.setextHeadingSlurpLineEnding=void 0}function W(E){const J=this.stack[this.stack.length-1].children;let ne=J[J.length-1];(!ne||ne.type!=="text")&&(ne=Og(),ne.position={start:rn(E.start),end:void 0},J.push(ne)),this.stack.push(ne)}function I(E){const j=this.stack.pop();j.value+=this.sliceSerialize(E),j.position.end=rn(E.end)}function z(E){const j=this.stack[this.stack.length-1];if(this.data.atHardBreak){const J=j.children[j.children.length-1];J.position.end=rn(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(j.type)&&(W.call(this,E),I.call(this,E))}function G(){this.data.atHardBreak=!0}function Z(){const E=this.resume(),j=this.stack[this.stack.length-1];j.value=E}function b(){const E=this.resume(),j=this.stack[this.stack.length-1];j.value=E}function B(){const E=this.resume(),j=this.stack[this.stack.length-1];j.value=E}function Q(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=j,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function le(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=j,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function F(E){const j=this.sliceSerialize(E),J=this.stack[this.stack.length-2];J.label=VR(j),J.identifier=wt(j).toLowerCase()}function $(){const E=this.stack[this.stack.length-1],j=this.resume(),J=this.stack[this.stack.length-1];if(this.data.inReference=!0,J.type==="link"){const ne=E.children;J.children=ne}else J.alt=j}function y(){const E=this.resume(),j=this.stack[this.stack.length-1];j.url=E}function V(){const E=this.resume(),j=this.stack[this.stack.length-1];j.title=E}function K(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function fe(E){const j=this.resume(),J=this.stack[this.stack.length-1];J.label=j,J.identifier=wt(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function De(E){this.data.characterReferenceType=E.type}function pe(E){const j=this.sliceSerialize(E),J=this.data.characterReferenceType;let ne;J?(ne=wm(j,J==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ne=Vc(j);const ae=this.stack[this.stack.length-1];ae.value+=ne}function bt(E){const j=this.stack.pop();j.position.end=rn(E.end)}function tn(E){I.call(this,E);const j=this.stack[this.stack.length-1];j.url=this.sliceSerialize(E)}function Jn(E){I.call(this,E);const j=this.stack[this.stack.length-1];j.url="mailto:"+this.sliceSerialize(E)}function Yn(){return{type:"blockquote",children:[]}}function cl(){return{type:"code",lang:null,meta:null,value:""}}function wg(){return{type:"inlineCode",value:""}}function Eg(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function bg(){return{type:"emphasis",children:[]}}function nd(){return{type:"heading",depth:0,children:[]}}function rd(){return{type:"break"}}function id(){return{type:"html",value:""}}function Dg(){return{type:"image",title:null,url:"",alt:null}}function ld(){return{type:"link",title:null,url:"",children:[]}}function od(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[]}}function Mg(E){return{type:"listItem",spread:E._spread,checked:null,children:[]}}function Lg(){return{type:"paragraph",children:[]}}function Ng(){return{type:"strong",children:[]}}function Og(){return{type:"text",value:""}}function Bg(){return{type:"thematicBreak"}}}function rn(e){return{line:e.line,column:e.column,offset:e.offset}}function zm(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?zm(e,r):qR(e,r)}}function qR(e,t){let n;for(n in t)if(jm.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function qf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Pi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Pi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Pi({start:t.start,end:t.end})+") is still open")}function QR(e){const t=this;t.parser=n;function n(r){return KR(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function JR(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function YR(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function ZR(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function eI(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function tI(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function nI(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=$r(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=l+1,s+=1,e.footnoteCounts.set(r,s);const a={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,a);const u={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,u),e.applyData(t,u)}function rI(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function iI(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Wm(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function lI(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Wm(e,t);const i={src:$r(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,l),e.applyData(t,l)}function oI(e,t){const n={src:$r(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function sI(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function aI(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Wm(e,t);const i={href:$r(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function uI(e,t){const n={href:$r(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function cI(e,t,n){const r=e.all(t),i=n?dI(n):Gm(t),l={},o=[];if(typeof t.checked=="boolean"){const f=r[0];let d;f&&f.type==="element"&&f.tagName==="p"?d=f:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const f=r[s];(i||s!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?o.push(...f.children):o.push(f)}const a=r[r.length-1];a&&(i||a.type!=="element"||a.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:l,children:o};return e.patch(t,u),e.applyData(t,u)}function dI(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Gm(n[r])}return t}function Gm(e){const t=e.spread;return t??e.children.length>1}function fI(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function pI(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function hI(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function mI(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function gI(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=zc(t.children[1]),a=vm(t.children[t.children.length-1]);s&&a&&(o.position={start:s,end:a}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,l),e.applyData(t,l)}function CI(e,t,n){const r=n?n.children:void 0,l=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,s=o?o.length:t.children.length;let a=-1;const u=[];for(;++a<s;){const d=t.children[a],p={},h=o?o[a]:void 0;h&&(p.align=h);let g={type:"element",tagName:l,properties:p,children:[]};d&&(g.children=e.all(d),e.patch(d,g),g=e.applyData(d,g)),u.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,f),e.applyData(t,f)}function _I(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Qf=9,Jf=32;function SI(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const l=[];for(;r;)l.push(Yf(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return l.push(Yf(t.slice(i),i>0,!1)),l.join("")}function Yf(e,t,n){let r=0,i=e.length;if(t){let l=e.codePointAt(r);for(;l===Qf||l===Jf;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(i-1);for(;l===Qf||l===Jf;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function yI(e,t){const n={type:"text",value:SI(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function vI(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const xI={blockquote:JR,break:YR,code:ZR,delete:eI,emphasis:tI,footnoteReference:nI,heading:rI,html:iI,imageReference:lI,image:oI,inlineCode:sI,linkReference:aI,link:uI,listItem:cI,list:fI,paragraph:pI,root:hI,strong:mI,table:gI,tableCell:_I,tableRow:CI,text:yI,thematicBreak:vI,toml:kl,yaml:kl,definition:kl,footnoteDefinition:kl};function kl(){}const Um=-1,os=0,Ti=1,wo=2,Kc=3,Xc=4,qc=5,Qc=6,Hm=7,Vm=8,Zf=typeof self=="object"?self:globalThis,RI=(e,t)=>{const n=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,o]=t[i];switch(l){case os:case Um:return n(o,i);case Ti:{const s=n([],i);for(const a of o)s.push(r(a));return s}case wo:{const s=n({},i);for(const[a,u]of o)s[r(a)]=r(u);return s}case Kc:return n(new Date(o),i);case Xc:{const{source:s,flags:a}=o;return n(new RegExp(s,a),i)}case qc:{const s=n(new Map,i);for(const[a,u]of o)s.set(r(a),r(u));return s}case Qc:{const s=n(new Set,i);for(const a of o)s.add(r(a));return s}case Hm:{const{name:s,message:a}=o;return n(new Zf[s](a),i)}case Vm:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:s}=new Uint8Array(o);return n(new DataView(s),o)}}return n(new Zf[l](o),i)};return r},ep=e=>RI(new Map,e)(0),tr="",{toString:II}={},{keys:PI}=Object,ii=e=>{const t=typeof e;if(t!=="object"||!e)return[os,t];const n=II.call(e).slice(8,-1);switch(n){case"Array":return[Ti,tr];case"Object":return[wo,tr];case"Date":return[Kc,tr];case"RegExp":return[Xc,tr];case"Map":return[qc,tr];case"Set":return[Qc,tr];case"DataView":return[Ti,n]}return n.includes("Array")?[Ti,n]:n.includes("Error")?[Hm,n]:[wo,n]},wl=([e,t])=>e===os&&(t==="function"||t==="symbol"),AI=(e,t,n,r)=>{const i=(o,s)=>{const a=r.push(o)-1;return n.set(s,a),a},l=o=>{if(n.has(o))return n.get(o);let[s,a]=ii(o);switch(s){case os:{let f=o;switch(a){case"bigint":s=Vm,f=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+a);f=null;break;case"undefined":return i([Um],o)}return i([s,f],o)}case Ti:{if(a){let p=o;return a==="DataView"?p=new Uint8Array(o.buffer):a==="ArrayBuffer"&&(p=new Uint8Array(o)),i([a,[...p]],o)}const f=[],d=i([s,f],o);for(const p of o)f.push(l(p));return d}case wo:{if(a)switch(a){case"BigInt":return i([a,o.toString()],o);case"Boolean":case"Number":case"String":return i([a,o.valueOf()],o)}if(t&&"toJSON"in o)return l(o.toJSON());const f=[],d=i([s,f],o);for(const p of PI(o))(e||!wl(ii(o[p])))&&f.push([l(p),l(o[p])]);return d}case Kc:return i([s,o.toISOString()],o);case Xc:{const{source:f,flags:d}=o;return i([s,{source:f,flags:d}],o)}case qc:{const f=[],d=i([s,f],o);for(const[p,h]of o)(e||!(wl(ii(p))||wl(ii(h))))&&f.push([l(p),l(h)]);return d}case Qc:{const f=[],d=i([s,f],o);for(const p of o)(e||!wl(ii(p)))&&f.push(l(p));return d}}const{message:u}=o;return i([s,{name:a,message:u}],o)};return l},tp=(e,{json:t,lossy:n}={})=>{const r=[];return AI(!(t||n),!!t,new Map,r)(e),r},Eo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ep(tp(e,t)):structuredClone(e):(e,t)=>ep(tp(e,t));function TI(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function kI(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function wI(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||TI,r=e.options.footnoteBackLabel||kI,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let a=-1;for(;++a<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[a]);if(!u)continue;const f=e.all(u),d=String(u.identifier).toUpperCase(),p=$r(d.toLowerCase());let h=0;const g=[],S=e.footnoteCounts.get(d);for(;S!==void 0&&++h<=S;){g.length>0&&g.push({type:"text",value:" "});let C=typeof n=="string"?n:n(a,h);typeof C=="string"&&(C={type:"text",value:C}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(a,h),className:["data-footnote-backref"]},children:Array.isArray(C)?C:[C]})}const v=f[f.length-1];if(v&&v.type==="element"&&v.tagName==="p"){const C=v.children[v.children.length-1];C&&C.type==="text"?C.value+=" ":v.children.push({type:"text",value:" "}),v.children.push(...g)}else f.push(...g);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(f,!0)};e.patch(u,m),s.push(m)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Eo(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const ss=function(e){if(e==null)return MI;if(typeof e=="function")return as(e);if(typeof e=="object")return Array.isArray(e)?EI(e):bI(e);if(typeof e=="string")return DI(e);throw new Error("Expected function, string, or object as test")};function EI(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=ss(e[n]);return as(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].apply(this,i))return!0;return!1}}function bI(e){const t=e;return as(n);function n(r){const i=r;let l;for(l in e)if(i[l]!==t[l])return!1;return!0}}function DI(e){return as(t);function t(n){return n&&n.type===e}}function as(e){return t;function t(n,r,i){return!!(LI(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function MI(){return!0}function LI(e){return e!==null&&typeof e=="object"&&"type"in e}const $m=[],NI=!0,bu=!1,OI="skip";function Km(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const l=ss(i),o=r?-1:1;s(e,void 0,[])();function s(a,u,f){const d=a&&typeof a=="object"?a:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(a.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=$m,g,S,v;if((!t||l(a,u,f[f.length-1]||void 0))&&(h=BI(n(a,f)),h[0]===bu))return h;if("children"in a&&a.children){const m=a;if(m.children&&h[0]!==OI)for(S=(r?m.children.length:-1)+o,v=f.concat(m);S>-1&&S<m.children.length;){const C=m.children[S];if(g=s(C,S,v)(),g[0]===bu)return g;S=typeof g[1]=="number"?g[1]:S+o}}return h}}}function BI(e){return Array.isArray(e)?e:typeof e=="number"?[NI,e]:e==null?$m:[e]}function Jc(e,t,n,r){let i,l,o;typeof t=="function"&&typeof n!="function"?(l=void 0,o=t,i=n):(l=t,o=n,i=r),Km(e,l,s,i);function s(a,u){const f=u[u.length-1],d=f?f.children.indexOf(a):void 0;return o(a,d,f)}}const Du={}.hasOwnProperty,FI={};function jI(e,t){const n=t||FI,r=new Map,i=new Map,l=new Map,o={...xI,...n.handlers},s={all:u,applyData:WI,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:a,options:n,patch:zI,wrap:UI};return Jc(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const d=f.type==="definition"?r:i,p=String(f.identifier).toUpperCase();d.has(p)||d.set(p,f)}}),s;function a(f,d){const p=f.type,h=s.handlers[p];if(Du.call(s.handlers,p)&&h)return h(s,f,d);if(s.options.passThrough&&s.options.passThrough.includes(p)){if("children"in f){const{children:S,...v}=f,m=Eo(v);return m.children=s.all(f),m}return Eo(f)}return(s.options.unknownHandler||GI)(s,f,d)}function u(f){const d=[];if("children"in f){const p=f.children;let h=-1;for(;++h<p.length;){const g=s.one(p[h],f);if(g){if(h&&p[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=np(g.value)),!Array.isArray(g)&&g.type==="element")){const S=g.children[0];S&&S.type==="text"&&(S.value=np(S.value))}Array.isArray(g)?d.push(...g):d.push(g)}}}return d}}function zI(e,t){e.position&&(t.position=kv(e))}function WI(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&l&&Object.assign(n.properties,Eo(l)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function GI(e,t){const n=t.data||{},r="value"in t&&!(Du.call(n,"hProperties")||Du.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function UI(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function np(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function rp(e,t){const n=jI(e,t),r=n.one(e,void 0),i=wI(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function HI(e,t){return e&&"run"in e?async function(n,r){const i=rp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return rp(n,{file:r,...e||t})}}function ip(e){if(e)throw e}var Yl=Object.prototype.hasOwnProperty,Xm=Object.prototype.toString,lp=Object.defineProperty,op=Object.getOwnPropertyDescriptor,sp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Xm.call(t)==="[object Array]"},ap=function(t){if(!t||Xm.call(t)!=="[object Object]")return!1;var n=Yl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Yl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Yl.call(t,i)},up=function(t,n){lp&&n.name==="__proto__"?lp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},cp=function(t,n){if(n==="__proto__")if(Yl.call(t,n)){if(op)return op(t,n).value}else return;return t[n]},VI=function e(){var t,n,r,i,l,o,s=arguments[0],a=1,u=arguments.length,f=!1;for(typeof s=="boolean"&&(f=s,s=arguments[1]||{},a=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});a<u;++a)if(t=arguments[a],t!=null)for(n in t)r=cp(s,n),i=cp(t,n),s!==i&&(f&&i&&(ap(i)||(l=sp(i)))?(l?(l=!1,o=r&&sp(r)?r:[]):o=r&&ap(r)?r:{},up(s,{name:n,newValue:e(f,o,i)})):typeof i<"u"&&up(s,{name:n,newValue:i}));return s};const Us=No(VI);function Mu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function $I(){const e=[],t={run:n,use:r};return t;function n(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);s(null,...i);function s(a,...u){const f=e[++l];let d=-1;if(a){o(a);return}for(;++d<i.length;)(u[d]===null||u[d]===void 0)&&(u[d]=i[d]);i=u,f?KI(f,s)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function KI(e,t){let n;return r;function r(...o){const s=e.length>o.length;let a;s&&o.push(i);try{a=e.apply(this,o)}catch(u){const f=u;if(s&&n)throw f;return i(f)}s||(a&&a.then&&typeof a.then=="function"?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...s){n||(n=!0,t(o,...s))}function l(o){i(null,o)}}const Lt={basename:XI,dirname:qI,extname:QI,join:JI,sep:"/"};function XI(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');al(e);let n=0,r=-1,i=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else o<0&&(l=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function qI(e){if(al(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function QI(e){al(e);let t=e.length,n=-1,r=0,i=-1,l=0,o;for(;t--;){const s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||n<0||l===0||l===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function JI(...e){let t=-1,n;for(;++t<e.length;)al(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":YI(n)}function YI(e){al(e);const t=e.codePointAt(0)===47;let n=ZI(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function ZI(e,t){let n="",r=0,i=-1,l=0,o=-1,s,a;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else{if(s===47)break;s=47}if(s===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(a=n.lastIndexOf("/"),a!==n.length-1){a<0?(n="",r=0):(n=n.slice(0,a),r=n.length-1-n.lastIndexOf("/")),i=o,l=0;continue}}else if(n.length>0){n="",r=0,i=o,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,l=0}else s===46&&l>-1?l++:l=-1}return n}function al(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const e2={cwd:t2};function t2(){return"/"}function Lu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function n2(e){if(typeof e=="string")e=new URL(e);else if(!Lu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return r2(e)}function r2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Hs=["history","path","basename","stem","extname","dirname"];class qm{constructor(t){let n;t?Lu(t)?n={path:t}:typeof t=="string"||i2(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":e2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Hs.length;){const l=Hs[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let i;for(i in n)Hs.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Lt.basename(this.path):void 0}set basename(t){$s(t,"basename"),Vs(t,"basename"),this.path=Lt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Lt.dirname(this.path):void 0}set dirname(t){dp(this.basename,"dirname"),this.path=Lt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Lt.extname(this.path):void 0}set extname(t){if(Vs(t,"extname"),dp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Lt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Lu(t)&&(t=n2(t)),$s(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Lt.basename(this.path,this.extname):void 0}set stem(t){$s(t,"stem"),Vs(t,"stem"),this.path=Lt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new $e(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Vs(e,t){if(e&&e.includes(Lt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Lt.sep+"`")}function $s(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function dp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function i2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const l2=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},o2={}.hasOwnProperty;class Yc extends l2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=$I()}copy(){const t=new Yc;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Us(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(qs("data",this.frozen),this.namespace[t]=n,this):o2.call(this.namespace,t)&&this.namespace[t]||void 0:t?(qs("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=El(t),r=this.parser||this.Parser;return Ks("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ks("process",this.parser||this.Parser),Xs("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(l,o){const s=El(t),a=r.parse(s);r.run(a,s,function(f,d,p){if(f||!d||!p)return u(f);const h=d,g=r.stringify(h,p);u2(g)?p.value=g:p.result=g,u(f,p)});function u(f,d){f||!d?o(f):l?l(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),Ks("processSync",this.parser||this.Parser),Xs("processSync",this.compiler||this.Compiler),this.process(t,i),pp("processSync","process",n),r;function i(l,o){n=!0,ip(l),r=o}}run(t,n,r){fp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(o,s){const a=El(n);i.run(t,a,u);function u(f,d,p){const h=d||t;f?s(f):o?o(h):r(void 0,h,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,l),pp("runSync","run",r),i;function l(o,s){ip(o),i=s,r=!0}}stringify(t,n){this.freeze();const r=El(n),i=this.compiler||this.Compiler;return Xs("stringify",i),fp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(qs("use",this.frozen),t!=null)if(typeof t=="function")a(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function l(u){if(typeof u=="function")a(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...d]=u;a(f,d)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(u.plugins),u.settings&&(i.settings=Us(!0,i.settings,u.settings))}function s(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const d=u[f];l(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function a(u,f){let d=-1,p=-1;for(;++d<r.length;)if(r[d][0]===u){p=d;break}if(p===-1)r.push([u,...f]);else if(f.length>0){let[h,...g]=f;const S=r[p][1];Mu(S)&&Mu(h)&&(h=Us(!0,S,h)),r[p]=[u,h,...g]}}}}const s2=new Yc().freeze();function Ks(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Xs(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function qs(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function fp(e){if(!Mu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function pp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function El(e){return a2(e)?e:new qm(e)}function a2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function u2(e){return typeof e=="string"||c2(e)}function c2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const d2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",hp=[],mp={allowDangerousHtml:!0},f2=/^(https?|ircs?|mailto|xmpp)$/i,p2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function h2(e){const t=m2(e),n=g2(e);return C2(t.runSync(t.parse(n),n),e)}function m2(e){const t=e.rehypePlugins||hp,n=e.remarkPlugins||hp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...mp}:mp;return s2().use(QR).use(n).use(HI,r).use(t)}function g2(e){const t=e.children||"",n=new qm;return typeof t=="string"&&(n.value=t),n}function C2(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,l=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,a=t.urlTransform||_2;for(const f of p2)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+d2+f.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Jc(e,u),Mv(e,{Fragment:c.Fragment,components:i,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function u(f,d,p){if(f.type==="raw"&&p&&typeof d=="number")return o?p.children.splice(d,1):p.children[d]={type:"text",value:f.value},d;if(f.type==="element"){let h;for(h in zs)if(Object.hasOwn(zs,h)&&Object.hasOwn(f.properties,h)){const g=f.properties[h],S=zs[h];(S===null||S.includes(f.tagName))&&(f.properties[h]=a(String(g||""),h,f))}}if(f.type==="element"){let h=n?!n.includes(f.tagName):l?l.includes(f.tagName):!1;if(!h&&r&&typeof d=="number"&&(h=!r(f,d,p)),h&&p&&typeof d=="number")return s&&f.children?p.children.splice(d,1,...f.children):p.children.splice(d,1),d}}}function _2(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||f2.test(e.slice(0,t))?e:""}function gp(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function S2(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function y2(e,t,n){const i=ss((n||{}).ignore||[]),l=v2(t);let o=-1;for(;++o<l.length;)Km(e,"text",s);function s(u,f){let d=-1,p;for(;++d<f.length;){const h=f[d],g=p?p.children:void 0;if(i(h,g?g.indexOf(h):void 0,p))return;p=h}if(p)return a(u,f)}function a(u,f){const d=f[f.length-1],p=l[o][0],h=l[o][1];let g=0;const v=d.children.indexOf(u);let m=!1,C=[];p.lastIndex=0;let _=p.exec(u.value);for(;_;){const R=_.index,A={index:_.index,input:_.input,stack:[...f,u]};let P=h(..._,A);if(typeof P=="string"&&(P=P.length>0?{type:"text",value:P}:void 0),P===!1?p.lastIndex=R+1:(g!==R&&C.push({type:"text",value:u.value.slice(g,R)}),Array.isArray(P)?C.push(...P):P&&C.push(P),g=R+_[0].length,m=!0),!p.global)break;_=p.exec(u.value)}return m?(g<u.value.length&&C.push({type:"text",value:u.value.slice(g)}),d.children.splice(v,1,...C)):C=[u],v+C.length}}function v2(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([x2(i[0]),R2(i[1])])}return t}function x2(e){return typeof e=="string"?new RegExp(S2(e),"g"):e}function R2(e){return typeof e=="function"?e:function(){return e}}const Qs="phrasing",Js=["autolink","link","image","label"];function I2(){return{transforms:[b2],enter:{literalAutolink:A2,literalAutolinkEmail:Ys,literalAutolinkHttp:Ys,literalAutolinkWww:Ys},exit:{literalAutolink:E2,literalAutolinkEmail:w2,literalAutolinkHttp:T2,literalAutolinkWww:k2}}}function P2(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Qs,notInConstruct:Js},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Qs,notInConstruct:Js},{character:":",before:"[ps]",after:"\\/",inConstruct:Qs,notInConstruct:Js}]}}function A2(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ys(e){this.config.enter.autolinkProtocol.call(this,e)}function T2(e){this.config.exit.autolinkProtocol.call(this,e)}function k2(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function w2(e){this.config.exit.autolinkEmail.call(this,e)}function E2(e){this.exit(e)}function b2(e){y2(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,D2],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),M2]],{ignore:["link","linkReference"]})}function D2(e,t,n,r,i){let l="";if(!Qm(i)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!L2(n)))return!1;const o=N2(n+r);if(!o[0])return!1;const s={type:"link",title:null,url:l+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[s,{type:"text",value:o[1]}]:s}function M2(e,t,n,r){return!Qm(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function L2(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function N2(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=gp(e,"(");let l=gp(e,")");for(;r!==-1&&i>l;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),l++;return[e,n]}function Qm(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Kn(n)||is(n))&&(!t||n!==47)}Jm.peek=H2;function O2(){this.buffer()}function B2(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function F2(){this.buffer()}function j2(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function z2(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=wt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function W2(e){this.exit(e)}function G2(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=wt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function U2(e){this.exit(e)}function H2(){return"["}function Jm(e,t,n,r){const i=n.createTracker(r);let l=i.move("[^");const o=n.enter("footnoteReference"),s=n.enter("reference");return l+=i.move(n.safe(n.associationId(e),{after:"]",before:l})),s(),o(),l+=i.move("]"),l}function V2(){return{enter:{gfmFootnoteCallString:O2,gfmFootnoteCall:B2,gfmFootnoteDefinitionLabelString:F2,gfmFootnoteDefinition:j2},exit:{gfmFootnoteCallString:z2,gfmFootnoteCall:W2,gfmFootnoteDefinitionLabelString:G2,gfmFootnoteDefinition:U2}}}function $2(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Jm},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,l,o){const s=l.createTracker(o);let a=s.move("[^");const u=l.enter("footnoteDefinition"),f=l.enter("label");return a+=s.move(l.safe(l.associationId(r),{before:a,after:"]"})),f(),a+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),a+=s.move((t?`
`:" ")+l.indentLines(l.containerFlow(r,s.current()),t?Ym:K2))),u(),a}}function K2(e,t,n){return t===0?e:Ym(e,t,n)}function Ym(e,t,n){return(n?"":"    ")+e}const X2=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Zm.peek=Z2;function q2(){return{canContainEols:["delete"],enter:{strikethrough:J2},exit:{strikethrough:Y2}}}function Q2(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:X2}],handlers:{delete:Zm}}}function J2(e){this.enter({type:"delete",children:[]},e)}function Y2(e){this.exit(e)}function Zm(e,t,n,r){const i=n.createTracker(r),l=n.enter("strikethrough");let o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),l(),o}function Z2(){return"~"}function eP(e){return e.length}function tP(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||eP,l=[],o=[],s=[],a=[];let u=0,f=-1;for(;++f<e.length;){const S=[],v=[];let m=-1;for(e[f].length>u&&(u=e[f].length);++m<e[f].length;){const C=nP(e[f][m]);if(n.alignDelimiters!==!1){const _=i(C);v[m]=_,(a[m]===void 0||_>a[m])&&(a[m]=_)}S.push(C)}o[f]=S,s[f]=v}let d=-1;if(typeof r=="object"&&"length"in r)for(;++d<u;)l[d]=Cp(r[d]);else{const S=Cp(r);for(;++d<u;)l[d]=S}d=-1;const p=[],h=[];for(;++d<u;){const S=l[d];let v="",m="";S===99?(v=":",m=":"):S===108?v=":":S===114&&(m=":");let C=n.alignDelimiters===!1?1:Math.max(1,a[d]-v.length-m.length);const _=v+"-".repeat(C)+m;n.alignDelimiters!==!1&&(C=v.length+C+m.length,C>a[d]&&(a[d]=C),h[d]=C),p[d]=_}o.splice(1,0,p),s.splice(1,0,h),f=-1;const g=[];for(;++f<o.length;){const S=o[f],v=s[f];d=-1;const m=[];for(;++d<u;){const C=S[d]||"";let _="",R="";if(n.alignDelimiters!==!1){const A=a[d]-(v[d]||0),P=l[d];P===114?_=" ".repeat(A):P===99?A%2?(_=" ".repeat(A/2+.5),R=" ".repeat(A/2-.5)):(_=" ".repeat(A/2),R=_):R=" ".repeat(A)}n.delimiterStart!==!1&&!d&&m.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&C==="")&&(n.delimiterStart!==!1||d)&&m.push(" "),n.alignDelimiters!==!1&&m.push(_),m.push(C),n.alignDelimiters!==!1&&m.push(R),n.padding!==!1&&m.push(" "),(n.delimiterEnd!==!1||d!==u-1)&&m.push("|")}g.push(n.delimiterEnd===!1?m.join("").replace(/ +$/,""):m.join(""))}return g.join(`
`)}function nP(e){return e==null?"":String(e)}function Cp(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function rP(e,t,n,r){const i=n.enter("blockquote"),l=n.createTracker(r);l.move("> "),l.shift(2);const o=n.indentLines(n.containerFlow(e,l.current()),iP);return i(),o}function iP(e,t,n){return">"+(n?"":" ")+e}function lP(e,t){return _p(e,t.inConstruct,!0)&&!_p(e,t.notInConstruct,!1)}function _p(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Sp(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&lP(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function oP(e,t){const n=String(e);let r=n.indexOf(t),i=r,l=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>o&&(o=l):l=1,i=r+t.length,r=n.indexOf(t,i);return o}function sP(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function aP(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function uP(e,t,n,r){const i=aP(n),l=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(sP(e,n)){const d=n.enter("codeIndented"),p=n.indentLines(l,cP);return d(),p}const s=n.createTracker(r),a=i.repeat(Math.max(oP(l,i)+1,3)),u=n.enter("codeFenced");let f=s.move(a);if(e.lang){const d=n.enter(`codeFencedLang${o}`);f+=s.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...s.current()})),d()}if(e.lang&&e.meta){const d=n.enter(`codeFencedMeta${o}`);f+=s.move(" "),f+=s.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...s.current()})),d()}return f+=s.move(`
`),l&&(f+=s.move(l+`
`)),f+=s.move(a),u(),f}function cP(e,t,n){return(n?"":"    ")+e}function Zc(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function dP(e,t,n,r){const i=Zc(n),l=i==='"'?"Quote":"Apostrophe",o=n.enter("definition");let s=n.enter("label");const a=n.createTracker(r);let u=a.move("[");return u+=a.move(n.safe(n.associationId(e),{before:u,after:"]",...a.current()})),u+=a.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(s=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...a.current()}))),s(),e.title&&(s=n.enter(`title${l}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),s()),o(),u}function fP(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function qi(e){return"&#x"+e.toString(16).toUpperCase()+";"}function bo(e,t,n){const r=jr(e),i=jr(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}eg.peek=pP;function eg(e,t,n,r){const i=fP(n),l=n.enter("emphasis"),o=n.createTracker(r),s=o.move(i);let a=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()}));const u=a.charCodeAt(0),f=bo(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(a=qi(u)+a.slice(1));const d=a.charCodeAt(a.length-1),p=bo(r.after.charCodeAt(0),d,i);p.inside&&(a=a.slice(0,-1)+qi(d));const h=o.move(i);return l(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},s+a+h}function pP(e,t,n){return n.options.emphasis||"*"}function hP(e,t){let n=!1;return Jc(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,bu}),!!((!e.depth||e.depth<3)&&Hc(e)&&(t.options.setext||n))}function mP(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),l=n.createTracker(r);if(hP(e,n)){const f=n.enter("headingSetext"),d=n.enter("phrasing"),p=n.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return d(),f(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const o="#".repeat(i),s=n.enter("headingAtx"),a=n.enter("phrasing");l.move(o+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(u)&&(u=qi(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,n.options.closeAtx&&(u+=" "+o),a(),s(),u}tg.peek=gP;function tg(e){return e.value||""}function gP(){return"<"}ng.peek=CP;function ng(e,t,n,r){const i=Zc(n),l=i==='"'?"Quote":"Apostrophe",o=n.enter("image");let s=n.enter("label");const a=n.createTracker(r);let u=a.move("![");return u+=a.move(n.safe(e.alt,{before:u,after:"]",...a.current()})),u+=a.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(s=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),s(),e.title&&(s=n.enter(`title${l}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),s()),u+=a.move(")"),o(),u}function CP(){return"!"}rg.peek=_P;function rg(e,t,n,r){const i=e.referenceType,l=n.enter("imageReference");let o=n.enter("label");const s=n.createTracker(r);let a=s.move("![");const u=n.safe(e.alt,{before:a,after:"]",...s.current()});a+=s.move(u+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const d=n.safe(n.associationId(e),{before:a,after:"]",...s.current()});return o(),n.stack=f,l(),i==="full"||!u||u!==d?a+=s.move(d+"]"):i==="shortcut"?a=a.slice(0,-1):a+=s.move("]"),a}function _P(){return"!"}ig.peek=SP;function ig(e,t,n){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<n.unsafe.length;){const o=n.unsafe[l],s=n.compilePattern(o);let a;if(o.atBreak)for(;a=s.exec(r);){let u=a.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(a.index+1)}}return i+r+i}function SP(){return"`"}function lg(e,t){const n=Hc(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}og.peek=yP;function og(e,t,n,r){const i=Zc(n),l=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let s,a;if(lg(e,n)){const f=n.stack;n.stack=[],s=n.enter("autolink");let d=o.move("<");return d+=o.move(n.containerPhrasing(e,{before:d,after:">",...o.current()})),d+=o.move(">"),s(),n.stack=f,d}s=n.enter("link"),a=n.enter("label");let u=o.move("[");return u+=o.move(n.containerPhrasing(e,{before:u,after:"](",...o.current()})),u+=o.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(n.safe(e.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(a=n.enter("destinationRaw"),u+=o.move(n.safe(e.url,{before:u,after:e.title?" ":")",...o.current()}))),a(),e.title&&(a=n.enter(`title${l}`),u+=o.move(" "+i),u+=o.move(n.safe(e.title,{before:u,after:i,...o.current()})),u+=o.move(i),a()),u+=o.move(")"),s(),u}function yP(e,t,n){return lg(e,n)?"<":"["}sg.peek=vP;function sg(e,t,n,r){const i=e.referenceType,l=n.enter("linkReference");let o=n.enter("label");const s=n.createTracker(r);let a=s.move("[");const u=n.containerPhrasing(e,{before:a,after:"]",...s.current()});a+=s.move(u+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const d=n.safe(n.associationId(e),{before:a,after:"]",...s.current()});return o(),n.stack=f,l(),i==="full"||!u||u!==d?a+=s.move(d+"]"):i==="shortcut"?a=a.slice(0,-1):a+=s.move("]"),a}function vP(){return"["}function ed(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function xP(e){const t=ed(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function RP(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ag(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function IP(e,t,n,r){const i=n.enter("list"),l=n.bulletCurrent;let o=e.ordered?RP(n):ed(n);const s=e.ordered?o==="."?")":".":xP(n);let a=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(a=!0),ag(n)===o&&f){let d=-1;for(;++d<e.children.length;){const p=e.children[d];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){a=!0;break}}}}a&&(o=s),n.bulletCurrent=o;const u=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=l,i(),u}function PP(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function AP(e,t,n,r){const i=PP(n);let l=n.bulletCurrent||ed(n);t&&t.type==="list"&&t.ordered&&(l=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const s=n.createTracker(r);s.move(l+" ".repeat(o-l.length)),s.shift(o);const a=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,s.current()),f);return a(),u;function f(d,p,h){return p?(h?"":" ".repeat(o))+d:(h?l:l+" ".repeat(o-l.length))+d}}function TP(e,t,n,r){const i=n.enter("paragraph"),l=n.enter("phrasing"),o=n.containerPhrasing(e,r);return l(),i(),o}const kP=ss(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function wP(e,t,n,r){return(e.children.some(function(o){return kP(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function EP(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}ug.peek=bP;function ug(e,t,n,r){const i=EP(n),l=n.enter("strong"),o=n.createTracker(r),s=o.move(i+i);let a=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()}));const u=a.charCodeAt(0),f=bo(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(a=qi(u)+a.slice(1));const d=a.charCodeAt(a.length-1),p=bo(r.after.charCodeAt(0),d,i);p.inside&&(a=a.slice(0,-1)+qi(d));const h=o.move(i+i);return l(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},s+a+h}function bP(e,t,n){return n.options.strong||"*"}function DP(e,t,n,r){return n.safe(e.value,r)}function MP(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function LP(e,t,n){const r=(ag(n)+(n.options.ruleSpaces?" ":"")).repeat(MP(n));return n.options.ruleSpaces?r.slice(0,-1):r}const cg={blockquote:rP,break:Sp,code:uP,definition:dP,emphasis:eg,hardBreak:Sp,heading:mP,html:tg,image:ng,imageReference:rg,inlineCode:ig,link:og,linkReference:sg,list:IP,listItem:AP,paragraph:TP,root:wP,strong:ug,text:DP,thematicBreak:LP};function NP(){return{enter:{table:OP,tableData:yp,tableHeader:yp,tableRow:FP},exit:{codeText:jP,table:BP,tableData:Zs,tableHeader:Zs,tableRow:Zs}}}function OP(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function BP(e){this.exit(e),this.data.inTable=void 0}function FP(e){this.enter({type:"tableRow",children:[]},e)}function Zs(e){this.exit(e)}function yp(e){this.enter({type:"tableCell",children:[]},e)}function jP(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,zP));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function zP(e,t){return t==="|"?t:e}function WP(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:o,tableCell:a,tableRow:s}};function o(h,g,S,v){return u(f(h,S,v),h.align)}function s(h,g,S,v){const m=d(h,S,v),C=u([m]);return C.slice(0,C.indexOf(`
`))}function a(h,g,S,v){const m=S.enter("tableCell"),C=S.enter("phrasing"),_=S.containerPhrasing(h,{...v,before:l,after:l});return C(),m(),_}function u(h,g){return tP(h,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function f(h,g,S){const v=h.children;let m=-1;const C=[],_=g.enter("table");for(;++m<v.length;)C[m]=d(v[m],g,S);return _(),C}function d(h,g,S){const v=h.children;let m=-1;const C=[],_=g.enter("tableRow");for(;++m<v.length;)C[m]=a(v[m],h,g,S);return _(),C}function p(h,g,S){let v=cg.inlineCode(h,g,S);return S.stack.includes("tableCell")&&(v=v.replace(/\|/g,"\\$&")),v}}function GP(){return{exit:{taskListCheckValueChecked:vp,taskListCheckValueUnchecked:vp,paragraph:HP}}}function UP(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:VP}}}function vp(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function HP(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let l=-1,o;for(;++l<i.length;){const s=i[l];if(s.type==="paragraph"){o=s;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function VP(e,t,n,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",s=n.createTracker(r);l&&s.move(o);let a=cg.listItem(e,t,n,{...r,...s.current()});return l&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),a;function u(f){return f+o}}function $P(){return[I2(),V2(),q2(),NP(),GP()]}function KP(e){return{extensions:[P2(),$2(e),Q2(),WP(e),UP()]}}const XP={tokenize:eA,partial:!0},dg={tokenize:tA,partial:!0},fg={tokenize:nA,partial:!0},pg={tokenize:rA,partial:!0},qP={tokenize:iA,partial:!0},hg={name:"wwwAutolink",tokenize:YP,previous:gg},mg={name:"protocolAutolink",tokenize:ZP,previous:Cg},en={name:"emailAutolink",tokenize:JP,previous:_g},Ft={};function QP(){return{text:Ft}}let Dn=48;for(;Dn<123;)Ft[Dn]=en,Dn++,Dn===58?Dn=65:Dn===91&&(Dn=97);Ft[43]=en;Ft[45]=en;Ft[46]=en;Ft[95]=en;Ft[72]=[en,mg];Ft[104]=[en,mg];Ft[87]=[en,hg];Ft[119]=[en,hg];function JP(e,t,n){const r=this;let i,l;return o;function o(d){return!Nu(d)||!_g.call(r,r.previous)||td(r.events)?n(d):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(d))}function s(d){return Nu(d)?(e.consume(d),s):d===64?(e.consume(d),a):n(d)}function a(d){return d===46?e.check(qP,f,u)(d):d===45||d===95||He(d)?(l=!0,e.consume(d),a):f(d)}function u(d){return e.consume(d),i=!0,a}function f(d){return l&&i&&Xe(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(d)):n(d)}}function YP(e,t,n){const r=this;return i;function i(o){return o!==87&&o!==119||!gg.call(r,r.previous)||td(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(XP,e.attempt(dg,e.attempt(fg,l),n),n)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function ZP(e,t,n){const r=this;let i="",l=!1;return o;function o(d){return(d===72||d===104)&&Cg.call(r,r.previous)&&!td(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(d),e.consume(d),s):n(d)}function s(d){if(Xe(d)&&i.length<5)return i+=String.fromCodePoint(d),e.consume(d),s;if(d===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(d),a}return n(d)}function a(d){return d===47?(e.consume(d),l?u:(l=!0,a)):n(d)}function u(d){return d===null||ko(d)||ue(d)||Kn(d)||is(d)?n(d):e.attempt(dg,e.attempt(fg,f),n)(d)}function f(d){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(d)}}function eA(e,t,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),l):n(o)}function l(o){return o===null?n(o):t(o)}}function tA(e,t,n){let r,i,l;return o;function o(u){return u===46||u===95?e.check(pg,a,s)(u):u===null||ue(u)||Kn(u)||u!==45&&is(u)?a(u):(l=!0,e.consume(u),o)}function s(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),o}function a(u){return i||r||!l?n(u):t(u)}}function nA(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(pg,t,l)(o):o===null||ue(o)||Kn(o)?t(o):(e.consume(o),i)}function l(o){return o===41&&r++,e.consume(o),i}}function rA(e,t,n){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),l):s===93?(e.consume(s),i):s===60||s===null||ue(s)||Kn(s)?t(s):n(s)}function i(s){return s===null||s===40||s===91||ue(s)||Kn(s)?t(s):r(s)}function l(s){return Xe(s)?o(s):n(s)}function o(s){return s===59?(e.consume(s),r):Xe(s)?(e.consume(s),o):n(s)}}function iA(e,t,n){return r;function r(l){return e.consume(l),i}function i(l){return He(l)?n(l):t(l)}}function gg(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ue(e)}function Cg(e){return!Xe(e)}function _g(e){return!(e===47||Nu(e))}function Nu(e){return e===43||e===45||e===46||e===95||He(e)}function td(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const lA={tokenize:pA,partial:!0};function oA(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:cA,continuation:{tokenize:dA},exit:fA}},text:{91:{name:"gfmFootnoteCall",tokenize:uA},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:sA,resolveTo:aA}}}}function sA(e,t,n){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){o=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return s;function s(a){if(!o||!o._balanced)return n(a);const u=wt(r.sliceSerialize({start:o.end,end:r.now()}));return u.codePointAt(0)!==94||!l.includes(u.slice(1))?n(a):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),t(a))}}function aA(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},s=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",l,t],["enter",o,t],["exit",o,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...s),e}function uA(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return s;function s(d){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),a}function a(d){return d!==94?n(d):(e.enter("gfmFootnoteCallMarker"),e.consume(d),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(d){if(l>999||d===93&&!o||d===null||d===91||ue(d))return n(d);if(d===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(wt(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(d)}return ue(d)||(o=!0),l++,e.consume(d),d===92?f:u}function f(d){return d===91||d===92||d===93?(e.consume(d),l++,u):u(d)}}function cA(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,s;return a;function a(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(g)}function f(g){if(o>999||g===93&&!s||g===null||g===91||ue(g))return n(g);if(g===93){e.exit("chunkString");const S=e.exit("gfmFootnoteDefinitionLabelString");return l=wt(r.sliceSerialize(S)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return ue(g)||(s=!0),o++,e.consume(g),g===92?d:f}function d(g){return g===91||g===92||g===93?(e.consume(g),o++,f):f(g)}function p(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(l)||i.push(l),re(e,h,"gfmFootnoteDefinitionWhitespace")):n(g)}function h(g){return t(g)}}function dA(e,t,n){return e.check(sl,t,e.attempt(lA,t,n))}function fA(e){e.exit("gfmFootnoteDefinition")}function pA(e,t,n){const r=this;return re(e,i,"gfmFootnoteDefinitionIndent",5);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(l):n(l)}}function hA(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,s){let a=-1;for(;++a<o.length;)if(o[a][0]==="enter"&&o[a][1].type==="strikethroughSequenceTemporary"&&o[a][1]._close){let u=a;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[a][1].end.offset-o[a][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[a][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[a][1].end)},d={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[a][1].start)},p=[["enter",f,s],["enter",o[u][1],s],["exit",o[u][1],s],["enter",d,s]],h=s.parser.constructs.insideSpan.null;h&&dt(p,p.length,0,ls(h,o.slice(u+1,a),s)),dt(p,p.length,0,[["exit",d,s],["enter",o[a][1],s],["exit",o[a][1],s],["exit",f,s]]),dt(o,u-1,a-u+3,p),a=u+p.length-2;break}}for(a=-1;++a<o.length;)o[a][1].type==="strikethroughSequenceTemporary"&&(o[a][1].type="data");return o}function l(o,s,a){const u=this.previous,f=this.events;let d=0;return p;function p(g){return u===126&&f[f.length-1][1].type!=="characterEscape"?a(g):(o.enter("strikethroughSequenceTemporary"),h(g))}function h(g){const S=jr(u);if(g===126)return d>1?a(g):(o.consume(g),d++,h);if(d<2&&!n)return a(g);const v=o.exit("strikethroughSequenceTemporary"),m=jr(g);return v._open=!m||m===2&&!!S,v._close=!S||S===2&&!!m,s(g)}}}class mA{constructor(){this.map=[]}add(t,n,r){gA(this,t,n,r)}consume(t){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const l of i)t.push(l);i=r.pop()}this.map.length=0}}function gA(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function CA(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function _A(){return{flow:{null:{name:"table",tokenize:SA,resolveAll:yA}}}}function SA(e,t,n){const r=this;let i=0,l=0,o;return s;function s(I){let z=r.events.length-1;for(;z>-1;){const b=r.events[z][1].type;if(b==="lineEnding"||b==="linePrefix")z--;else break}const G=z>-1?r.events[z][1].type:null,Z=G==="tableHead"||G==="tableRow"?P:a;return Z===P&&r.parser.lazy[r.now().line]?n(I):Z(I)}function a(I){return e.enter("tableHead"),e.enter("tableRow"),u(I)}function u(I){return I===124||(o=!0,l+=1),f(I)}function f(I){return I===null?n(I):X(I)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(I),e.exit("lineEnding"),h):n(I):ee(I)?re(e,f,"whitespace")(I):(l+=1,o&&(o=!1,i+=1),I===124?(e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),d(I)))}function d(I){return I===null||I===124||ue(I)?(e.exit("data"),f(I)):(e.consume(I),I===92?p:d)}function p(I){return I===92||I===124?(e.consume(I),d):d(I)}function h(I){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(I):(e.enter("tableDelimiterRow"),o=!1,ee(I)?re(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):g(I))}function g(I){return I===45||I===58?v(I):I===124?(o=!0,e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),S):A(I)}function S(I){return ee(I)?re(e,v,"whitespace")(I):v(I)}function v(I){return I===58?(l+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(I),e.exit("tableDelimiterMarker"),m):I===45?(l+=1,m(I)):I===null||X(I)?R(I):A(I)}function m(I){return I===45?(e.enter("tableDelimiterFiller"),C(I)):A(I)}function C(I){return I===45?(e.consume(I),C):I===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(I),e.exit("tableDelimiterMarker"),_):(e.exit("tableDelimiterFiller"),_(I))}function _(I){return ee(I)?re(e,R,"whitespace")(I):R(I)}function R(I){return I===124?g(I):I===null||X(I)?!o||i!==l?A(I):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(I)):A(I)}function A(I){return n(I)}function P(I){return e.enter("tableRow"),k(I)}function k(I){return I===124?(e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),k):I===null||X(I)?(e.exit("tableRow"),t(I)):ee(I)?re(e,k,"whitespace")(I):(e.enter("data"),L(I))}function L(I){return I===null||I===124||ue(I)?(e.exit("data"),k(I)):(e.consume(I),I===92?W:L)}function W(I){return I===92||I===124?(e.consume(I),L):L(I)}}function yA(e,t){let n=-1,r=!0,i=0,l=[0,0,0,0],o=[0,0,0,0],s=!1,a=0,u,f,d;const p=new mA;for(;++n<e.length;){const h=e[n],g=h[1];h[0]==="enter"?g.type==="tableHead"?(s=!1,a!==0&&(xp(p,t,a,u,f),f=void 0,a=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(n,0,[["enter",u,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,d=void 0,l=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(n,0,[["enter",f,t]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],d=bl(p,t,l,i,void 0,d),l=[0,0,0,0]),o[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(o[0]=o[1],d=bl(p,t,l,i,void 0,d)),l=o,o=[l[1],n,0,0])):g.type==="tableHead"?(s=!0,a=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(a=n,l[1]!==0?(o[0]=o[1],d=bl(p,t,l,i,n,d)):o[1]!==0&&(d=bl(p,t,o,i,n,d)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=n)}for(a!==0&&xp(p,t,a,u,f),p.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=CA(t.events,n))}return e}function bl(e,t,n,r,i,l){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";n[0]!==0&&(l.end=Object.assign({},or(t.events,n[0])),e.add(n[0],0,[["exit",l,t]]));const a=or(t.events,n[1]);if(l={type:o,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",l,t]]),n[2]!==0){const u=or(t.events,n[2]),f=or(t.events,n[3]),d={type:s,start:Object.assign({},u),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",d,t]]),r!==2){const p=t.events[n[2]],h=t.events[n[3]];if(p[1].end=Object.assign({},h[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,S=n[3]-n[2]-1;e.add(g,S,[])}}e.add(n[3]+1,0,[["exit",d,t]])}return i!==void 0&&(l.end=Object.assign({},or(t.events,i)),e.add(i,0,[["exit",l,t]]),l=void 0),l}function xp(e,t,n,r,i){const l=[],o=or(t.events,n);i&&(i.end=Object.assign({},o),l.push(["exit",i,t])),r.end=Object.assign({},o),l.push(["exit",r,t]),e.add(n+1,0,l)}function or(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const vA={name:"tasklistCheck",tokenize:RA};function xA(){return{text:{91:vA}}}function RA(e,t,n){const r=this;return i;function i(a){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(a):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),l)}function l(a){return ue(a)?(e.enter("taskListCheckValueUnchecked"),e.consume(a),e.exit("taskListCheckValueUnchecked"),o):a===88||a===120?(e.enter("taskListCheckValueChecked"),e.consume(a),e.exit("taskListCheckValueChecked"),o):n(a)}function o(a){return a===93?(e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):n(a)}function s(a){return X(a)?t(a):ee(a)?e.check({tokenize:IA},t,n)(a):n(a)}}function IA(e,t,n){return re(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function PA(e){return km([QP(),oA(),hA(e),_A(),xA()])}const AA={};function TA(e){const t=this,n=e||AA,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(PA(n)),l.push($P()),o.push(KP(n))}const kA="_root_jkcsp_1",wA="_h1_jkcsp_5",EA="_h2_jkcsp_14",bA="_h3_jkcsp_24",DA="_p_jkcsp_31",MA="_strong_jkcsp_38",LA="_inlineCode_jkcsp_43",NA="_ul_jkcsp_53",OA="_ol_jkcsp_60",BA="_li_jkcsp_67",FA="_blockquote_jkcsp_72",jA="_hr_jkcsp_83",zA="_codeWrap_jkcsp_90",WA="_codeHeader_jkcsp_98",GA="_dots_jkcsp_107",UA="_dot_jkcsp_107",HA="_langLabel_jkcsp_120",VA="_copyBtn_jkcsp_130",$A="_codeBody_jkcsp_142",KA="_lineNumbers_jkcsp_149",XA="_lineNum_jkcsp_149",qA="_codeContent_jkcsp_167",QA="_tableWrap_jkcsp_180",JA="_table_jkcsp_180",YA="_th_jkcsp_228",ZA="_td_jkcsp_241",se={root:kA,h1:wA,h2:EA,h3:bA,p:DA,strong:MA,inlineCode:LA,ul:NA,ol:OA,li:BA,blockquote:FA,hr:jA,codeWrap:zA,codeHeader:WA,dots:GA,dot:UA,langLabel:HA,copyBtn:VA,codeBody:$A,lineNumbers:KA,lineNum:XA,codeContent:qA,tableWrap:QA,table:JA,th:YA,td:ZA},eT=Object.assign({"../../content/01-intro/theory.md":my,"../../content/02-gpio/theory.md":gy,"../../content/03-rcc/theory.md":Cy,"../../content/04-nvic/theory.md":_y,"../../content/05-systick/theory.md":Sy,"../../content/06-tim/theory.md":yy,"../../content/07-pwm/theory.md":vy,"../../content/08-adc/theory.md":xy,"../../content/09-uart/theory.md":Ry,"../../content/10-dac/theory.md":Iy,"../../content/11-spi/theory.md":Py,"../../content/12-i2c/theory.md":Ay,"../../content/13-dma/theory.md":Ty,"../../content/14-can/theory.md":ky,"../../content/15-adv-tim/theory.md":wy,"../../content/16-rtc/theory.md":Ey,"../../content/17-wdg/theory.md":by,"../../content/18-pwr/theory.md":Dy,"../../content/19-freertos/theory.md":My,"../../content/20-fs/theory.md":Ly,"../../content/21-debug/theory.md":Ny,"../../content/22-project/theory.md":Oy});function tT(e){const t=`../../content/${e}/theory.md`;return eT[t]||""}function Ou(e){if(typeof e=="string")return e;if(typeof e=="number")return String(e);if(e&&typeof e=="object"&&"props"in e){const t=e.props;return Array.isArray(t.children)?t.children.map(Ou).join(`
`):Ou(t.children)}return""}function nT({language:e,children:t}){const[n,r]=T.useState(!1),l=Ou(t).replace(/\n$/,""),o=l.split(`
`),s=T.useCallback(()=>{navigator.clipboard.writeText(l),r(!0),setTimeout(()=>r(!1),1500)},[l]);return c.jsxs("div",{className:se.codeWrap,children:[c.jsxs("div",{className:se.codeHeader,children:[c.jsxs("div",{className:se.dots,children:[c.jsx("span",{className:se.dot,style:{background:"var(--accent-red)"}}),c.jsx("span",{className:se.dot,style:{background:"var(--accent-amber)"}}),c.jsx("span",{className:se.dot,style:{background:"var(--accent-green)"}}),c.jsx("span",{className:se.langLabel,children:e||"text"})]}),c.jsx("button",{onClick:s,className:se.copyBtn,children:n?"COPIED":"COPY"})]}),c.jsxs("div",{className:se.codeBody,children:[c.jsx("div",{className:se.lineNumbers,children:o.map((a,u)=>c.jsx("div",{className:se.lineNum,children:u+1},u))}),c.jsx("code",{className:se.codeContent,children:l})]})]})}function rT(){const{moduleId:e}=il(),[t,n]=T.useState("");return T.useEffect(()=>{const r=tT(e||"");n(r||`# 内容正在编写中

此模块的理论内容即将上线。`)},[e]),c.jsx("div",{className:se.root,children:c.jsx(h2,{remarkPlugins:[TA],components:{h1:({children:r})=>c.jsx("h1",{className:se.h1,children:r}),h2:({children:r})=>c.jsx("h2",{className:se.h2,children:r}),h3:({children:r})=>c.jsx("h3",{className:se.h3,children:r}),p:({children:r})=>c.jsx("p",{className:se.p,children:r}),strong:({children:r})=>c.jsx("strong",{className:se.strong,children:r}),code:({children:r,className:i})=>i?c.jsx("code",{children:r}):c.jsx("code",{className:se.inlineCode,children:r}),pre:({children:r,className:i})=>{const l=/language-(\w+)/.exec(i||""),o=l?l[1]:void 0;return c.jsx(nT,{language:o,children:r})},ul:({children:r})=>c.jsx("ul",{className:se.ul,children:r}),ol:({children:r})=>c.jsx("ol",{className:se.ol,children:r}),li:({children:r})=>c.jsx("li",{className:se.li,children:r}),blockquote:({children:r})=>c.jsx("blockquote",{className:se.blockquote,children:r}),table:({children:r})=>c.jsx("div",{className:se.tableWrap,children:c.jsx("table",{className:se.table,children:r})}),thead:({children:r})=>c.jsx("thead",{children:r}),th:({children:r})=>c.jsx("th",{className:se.th,children:r}),td:({children:r})=>c.jsx("td",{className:se.td,children:r}),tr:({children:r})=>c.jsx("tr",{children:r}),hr:()=>c.jsx("hr",{className:se.hr})},children:t})})}const iT="_badge_1vizk_1",lT="_sm_1vizk_12",oT="_md_1vizk_17",sT="_success_1vizk_22",aT="_warning_1vizk_28",uT="_error_1vizk_34",cT="_info_1vizk_40",dT="_neutral_1vizk_46",ea={badge:iT,sm:lT,md:oT,success:sT,warning:aT,error:uT,info:cT,neutral:dT};function fT({variant:e,size:t="sm",children:n}){const r=[ea.badge,ea[e],ea[t]].join(" ");return c.jsx("span",{className:r,children:n})}const pT="_header_hefl4_1",hT="_heading_hefl4_8",mT="_title_hefl4_16",gT="_desc_hefl4_23",CT="_hintSim_hefl4_37 _hint_hefl4_30",_T="_hintRead_hefl4_44 _hint_hefl4_30",Wt={header:pT,heading:hT,title:mT,desc:gT,hintSim:CT,hintRead:_T},ST={"01-intro":{title:"STM32 平台全貌",description:"STM32F103C8T6 采用 ARM Cortex-M3 内核，主频 72MHz，内置 64KB Flash、20KB SRAM。本平台模拟了 16+ 个外设的寄存器级行为。",hasSim:!1},"02-gpio":{title:"GPIO 引脚控制",description:"配置 CRL/CRH 寄存器选择模式，操作 ODR/IDR 读写电平，BSRR 原子置位/复位。切换到练习模式可在右侧引脚面板实时查看电平变化。",hasSim:!0},"03-rcc":{title:"时钟树配置",description:"HSI 8MHz → PLL ×9 = 72MHz SYSCLK，经 AHB/APB1/APB2 预分频器供给各外设。练习模式可查看寄存器面板验证时钟使能。",hasSim:!0},"04-nvic":{title:"中断向量控制器",description:"NVIC 管理 60+ 个可屏蔽中断，ISER/ICER 使能/关闭中断，IPR 设置 4bit 优先级。练习模式可触发模拟中断。",hasSim:!0},"05-systick":{title:"系统定时器",description:"24 位递减计数器，COUNTFLAG 在计数到 0 时置位。72MHz 下 LOAD=71999 实现 1ms 精确定时。",hasSim:!0},"06-tim":{title:"通用定时器",description:"PSC+ARR+CNT 组成时基单元，72MHz/(71+1)/(999+1)=1kHz 溢出频率。练习模式查看波形面板观察 PWM 输出。",hasSim:!0},"07-pwm":{title:"PWM 输出",description:"CCMR 设置 PWM 模式 1/2，CCER 使能输出，ARR 决定周期、CCR 决定占空比。CCR=250, ARR=999 → 25% 占空比。",hasSim:!0},"08-adc":{title:"模数转换",description:"12 位逐次逼近型 ADC，CR2 的 SWSTART 启动单次转换，EOC 标志通知转换完成。练习模式可调节输入电压观察转换结果。",hasSim:!0},"09-uart":{title:"串口通信",description:"1 起始位 + 8 数据位 + 1 停止位，BRR 设置波特率，TXE/RXNE 标志管理收发。练习模式可发送数据到串口面板。",hasSim:!0},"10-dac":{title:"数模转换",description:"12 位 DAC，DHR12R1 写入数字码，DOR1 输出对应模拟电压。Vout = DOR × Vref / 4096。",hasSim:!0},"11-spi":{title:"SPI 总线",description:"4 线全双工（MOSI/MISO/SCK/NSS），CPOL/CPHA 决定时钟极性和相位。主模式下写 DR 启动传输。",hasSim:!0},"12-i2c":{title:"I2C 总线",description:"2 线（SCL/SDA），主模式状态机：START → 地址 → 数据 → STOP。SR1 寄存器 SB/ADDR/TXE/RXNE 标志驱动状态迁移。",hasSim:!0},"13-dma":{title:"DMA 直接存储器访问",description:"7 通道传输引擎，CPAR/CMAR/CNDTR 配置源、目标、传输量。CIRC 模式自动循环填充缓冲区。",hasSim:!0},"14-can":{title:"CAN 总线",description:"bxCAN 支持 3 个发送邮箱 + 2 个接收 FIFO，标识符过滤、位时序 (TS1/TS2/SJW) 决定波特率。",hasSim:!0},"15-adv-tim":{title:"高级定时器",description:"TIM1 增加 BDTR 寄存器：MOE 主输出使能、死区时间插入、刹车功能。适用于电机控制、逆变器等应用。",hasSim:!0},"16-rtc":{title:"实时时钟",description:"32.768kHz LSE 驱动，PRL=0x7FFF → 1Hz。CNF=1 进入配置模式，RTOFF=1 表示写操作完成。",hasSim:!0},"17-wdg":{title:"看门狗",description:"IWDG 独立看门狗（启动后不可停止）+ WWDG 窗口看门狗（0x40 ≤ 计数器 < 窗口值才可刷新）。",hasSim:!0},"18-pwr":{title:"低功耗模式",description:"3 种模式：Sleep (CPU 停)、Stop (HSE/PLL 停，SRAM 保持)、Standby (全关，SRAM 丢失)。PWR_CR 的 LPDS/PDDS 选择模式。",hasSim:!0},"19-freertos":{title:"FreeRTOS 调度模拟",description:"4 种任务状态（Ready/Running/Blocked/Suspended），优先级抢占调度，队列 FIFO + 阻塞，计数信号量。",hasSim:!0},"20-fs":{title:"FatFS 文件系统",description:"f_mount → f_open → f_read/f_write → f_close 标准文件操作流程。SDIO 接口或 SPI 模式连接 SD 卡。",hasSim:!0},"21-debug":{title:"调试技术总览",description:"SWD 2 线调试（PA13/PA14）、串口 printf、HardFault 栈帧分析、逻辑分析仪。掌握这些是嵌入式开发的必修课。",hasSim:!1},"22-project":{title:"综合项目",description:"ADC + DMA + TIM + USART + GPIO 协同工作，实现完整的数据采集→传输→显示系统。建议先完成前面 21 个模块再学习本项目。",hasSim:!1}};function yT(){const{moduleId:e}=il(),t=ST[e||""];return t?c.jsxs("div",{children:[c.jsxs("div",{className:Wt.header,children:[c.jsx("h2",{className:Wt.heading,children:"交互演示"}),t.hasSim&&c.jsx(fT,{variant:"warning",children:"SIM"})]}),c.jsx("h3",{className:Wt.title,children:t.title}),c.jsx("p",{className:Wt.desc,children:t.description}),t.hasSim?c.jsx("div",{className:Wt.hintSim,children:"点击左侧「练习」切换到仿真模式，编写 C 代码驱动外设，在右侧面板实时观察寄存器、波形、引脚状态。"}):c.jsx("div",{className:Wt.hintRead,children:"阅读上方理论内容，完成测验检验理解。"})]}):c.jsxs("div",{children:[c.jsx("div",{className:Wt.header,children:c.jsx("h2",{className:Wt.heading,children:"交互演示"})}),c.jsx("p",{className:Wt.desc,children:"此模块资料正在编写中"})]})}const vT="_track_kw6m2_1",xT="_fill_kw6m2_9",RT="_success_kw6m2_16",IT="_wrapper_kw6m2_18",PT="_label_kw6m2_24",li={track:vT,fill:xT,default:"_default_kw6m2_15",success:RT,wrapper:IT,label:PT};function zr({value:e,variant:t="default",showLabel:n=!1}){const r=Math.min(100,Math.max(0,e));return c.jsxs("div",{className:li.wrapper,children:[c.jsx("div",{className:li.track,children:c.jsx("div",{className:[li.fill,li[t]].join(" "),style:{width:`${r}%`}})}),n&&c.jsxs("span",{className:li.label,children:[Math.round(r),"%"]})]})}const AT="_header_1cu65_1",TT="_headerLeft_1cu65_8",kT="_heading_1cu65_14",wT="_counter_1cu65_22",ET="_score_1cu65_31",bT="_question_1cu65_37",DT="_options_1cu65_45",MT="_option_1cu65_45",LT="_optionCorrect_1cu65_73 _option_1cu65_45",NT="_optionWrong_1cu65_82 _option_1cu65_45",OT="_optionDimmed_1cu65_91 _option_1cu65_45",BT="_optLetterCorrect_1cu65_111 _optLetter_1cu65_97",FT="_optLetterWrong_1cu65_117 _optLetter_1cu65_97",jT="_optLetterNormal_1cu65_123 _optLetter_1cu65_97",zT="_nextBtn_1cu65_129",WT="_resultWrap_1cu65_149",GT="_resultRadial_1cu65_153",UT="_resultScore_1cu65_159",HT="_retryBtn_1cu65_165",Ce={header:AT,headerLeft:TT,heading:kT,counter:wT,score:ET,question:bT,options:DT,option:MT,optionCorrect:LT,optionWrong:NT,optionDimmed:OT,optLetterCorrect:BT,optLetterWrong:FT,optLetterNormal:jT,nextBtn:zT,resultWrap:WT,resultRadial:GT,resultScore:UT,retryBtn:HT},VT={"01-intro":[{question:"STM32 是基于哪个处理器内核的？",options:["ARM7","ARM Cortex-M","x86","RISC-V"],correct:1},{question:"HAL 库的全称是什么？",options:["High Application Layer","Hardware Abstraction Layer","High Access Library","Hardware Access Layer"],correct:1}],"02-gpio":[{question:"GPIO 推挽输出模式下，输出高电平时内部 MOSFET 的状态是？",options:["上管导通、下管截止","上管截止、下管导通","两管都导通","两管都截止"],correct:0},{question:"STM32F1 的 GPIO 端口配置低寄存器 (CRL) 控制哪几个引脚？",options:["PA0-PA7","PA8-PA15","PA0-PA15","PB0-PB7"],correct:0}],"03-rcc":[{question:"STM32F103 上电后默认使用哪个时钟源？",options:["外部晶振 HSE","内部 RC 振荡器 HSI (8MHz)","PLL 倍频输出","LSE 32.768kHz"],correct:1},{question:"PLL 将 HSI 倍频到 72MHz 时，PLLMUL 应配置为多少？",options:["×7","×8","×9","×16"],correct:2},{question:"APB2ENR 寄存器的 IOPAEN 位是哪一位？",options:["bit 0","bit 1","bit 2","bit 3"],correct:2},{question:"RCC_CR 寄存器中，PLLON 位写 1 后，硬件会自动做什么？",options:["立即切换到 PLL","自动置位 PLLRDY（PLL 稳定后）","复位芯片","关闭 HSI"],correct:1}],"04-nvic":[{question:"NVIC 的全称是什么？",options:["Non-Volatile Interface Controller","Nested Vectored Interrupt Controller","New Virtual Interrupt Circuit","Network Vector Interrupt Controller"],correct:1},{question:"NVIC ISER 寄存器的作用是什么？",options:["清除中断使能","设置中断使能","设置中断优先级","读取中断状态"],correct:1},{question:"向 ICER 寄存器某位写 1 的效果是什么？",options:["使能对应中断","关闭对应中断","设置优先级","触发软件中断"],correct:1},{question:"STM32F103 的 NVIC 支持多少级优先级？",options:["4 级","8 级","16 级","32 级"],correct:2}],"05-systick":[{question:"SysTick 定时器是几位的？",options:["16 位","24 位","32 位","8 位"],correct:1},{question:"SysTick VAL 计数到 0 的下一个周期会发生什么？",options:["定时器停止","COUNTFLAG 置位并从 LOAD 重装载","触发系统复位","VAL 保持为 0"],correct:1},{question:"COUNTFLAG 如何清零？",options:["向 CTRL 写 0","读 CTRL 寄存器","向 VAL 写任意值","等待下一个周期"],correct:1},{question:"72MHz 时钟下，SysTick 的 LOAD 值设为多少才能实现 1ms 定时？",options:["72000","71999","72000000","1000"],correct:1}],"06-tim":[{question:"TIM2 的时基单元由哪三个寄存器组成？",options:["CR1, SR, EGR","PSC, ARR, CNT","CCR1, CCR2, CCR3","DIER, SR, EGR"],correct:1},{question:"PSC=71, ARR=999, 时钟=72MHz 时，TIM2 的溢出频率是多少？",options:["72kHz","1kHz","10kHz","100Hz"],correct:1},{question:"TIM_SR 寄存器的 UIF 位如何清零？",options:["写 1 清零","写 0 清零","读 SR 自动清零","只能硬件清零"],correct:1},{question:"向 EGR 寄存器的 UG 位写 1 会触发什么？",options:["启动计数器","软件更新：CNT 归零并置 UIF","停止计数器","复位所有寄存器"],correct:1}],"07-pwm":[{question:"PWM 模式 1 (OCxM=110) 的输出规则是什么？",options:["CNT < CCR → 高电平","CNT > CCR → 高电平","CNT == CCR → 翻转","CNT == 0 → 翻转"],correct:0},{question:"CCMR1 寄存器控制哪两个通道？",options:["通道 1 和 2","通道 2 和 3","通道 3 和 4","通道 1 和 4"],correct:0},{question:"CCER 寄存器中 CC1E 位的作用是什么？",options:["设置通道 1 的极性","使能通道 1 的输出","使能通道 1 的捕获","清除通道 1 的标志"],correct:1},{question:"ARR=999, CCR1=250 时，PWM 模式 1 的占空比是多少？",options:["20%","25%","50%","75%"],correct:1}],"08-adc":[{question:"STM32F103 ADC 是多少位精度的？",options:["8 位","10 位","12 位","16 位"],correct:2},{question:"启动 ADC 转换需要写哪个寄存器的哪个位？",options:["CR1 的 SCAN 位","CR2 的 SWSTART 位","SR 的 EOC 位","CR2 的 ADON 位"],correct:1},{question:"ADC 转换完成时，哪个标志会被硬件置 1？",options:["AWD","EOC","STRT","ADON"],correct:1},{question:"连续转换模式由哪个位控制？",options:["CR2 的 ADON 位","CR2 的 SWSTART 位","CR2 的 CONT 位","CR1 的 SCAN 位"],correct:2}],"09-uart":[{question:"USART 异步通信中，一个完整的字节帧包含几位？",options:["8 位","9 位","10 位","11 位"],correct:2},{question:"TXE 标志位表示什么？",options:["接收完成","发送完成","发送数据寄存器空","接收数据寄存器非空"],correct:2},{question:"读 DR 寄存器会自动清零哪个标志？",options:["TXE","TC","RXNE","UE"],correct:2},{question:"USART 的波特率由哪个寄存器设置？",options:["SR","DR","CR1","BRR"],correct:3}],"10-dac":[{question:"STM32F103 DAC 是多少位精度的？",options:["8 位","10 位","12 位","16 位"],correct:2},{question:"DAC 输出电压范围是多少？",options:["0 ~ 1.8V","0 ~ 3.3V","0 ~ 5V","0 ~ 2.5V"],correct:1},{question:"向 DHR12R1 写入数据后，硬件会做什么？",options:["等待触发信号","自动传输到 DOR1 并更新输出","产生中断","清除 EN1 位"],correct:1},{question:"DHR12R1=2048, EN1=1 时，DAC 输出电压约为多少？",options:["0V","1.65V","2.5V","3.3V"],correct:1}],"11-spi":[{question:"SPI 全双工通信需要几根线？",options:["2 根","3 根","4 根","5 根"],correct:2},{question:"CPOL=0, CPHA=0 时，数据在哪个边沿采样？",options:["第 1 个下降沿","第 1 个上升沿","第 2 个上升沿","第 2 个下降沿"],correct:1},{question:"SPI 的 TXE 标志位在什么情况下置 1？",options:["发送完成","发送缓冲空","接收缓冲非空","总线忙"],correct:1},{question:"BR=0 时，SPI 时钟分频为多少？",options:["/1（不分频）","/2","/4","/8"],correct:1}],"12-i2c":[{question:"I2C 总线需要几根线？",options:["1 根","2 根","3 根","4 根"],correct:1},{question:"I2C 的 START 条件是什么？",options:["SCL 高时 SDA 下降","SCL 高时 SDA 上升","SCL 低时 SDA 下降","SCL 低时 SDA 上升"],correct:0},{question:"SB (Start Bit) 标志表示什么？",options:["停止条件已发送","起始条件已生成","地址已发送","字节传输完成"],correct:1},{question:"I2C 主机读取 DR 寄存器会自动清零哪个标志？",options:["TXE","BTF","RXNE","ADDR"],correct:2}],"13-dma":[{question:"DMA 传输完成后，CNDTR 的值是多少？",options:["保持不变","等于初始值","0","自动加 1"],correct:2},{question:"DMA 循环模式 (CIRC=1) 下，传输完成后会发生什么？",options:["通道自动禁用","CNDTR 自动重装载","产生复位信号","CPU 接管传输"],correct:1},{question:"STM32F103 DMA1 有多少个通道？",options:["5 个","6 个","7 个","8 个"],correct:2},{question:"DMA CCR 寄存器的 DIR 位为 0 时传输方向是什么？",options:["内存→外设","外设→内存","内存→内存","外设→外设"],correct:1}],"14-can":[{question:"STM32F103 的 bxCAN 有几个发送邮箱？",options:["1 个","2 个","3 个","4 个"],correct:2},{question:"CAN 总线进入初始化模式需要设置哪个寄存器的哪一位？",options:["MSR 的 INAK 位","MCR 的 INRQ 位","BTR 的 SILM 位","TSR 的 RQCP0 位"],correct:1},{question:"CAN 位时序中，TS1=3, TS2=2 时一个位包含多少个 tq？",options:["5","6","7","8"],correct:1},{question:"接收 FIFO 中 FMP 字段的含义是什么？",options:["FIFO 为空","FIFO 满标志","FIFO 中待处理的消息数","FIFO 溢出标志"],correct:2}],"15-adv-tim":[{question:"高级定时器的 BDTR 寄存器中，MOE 位的作用是什么？",options:["计数器使能","主输出使能","刹车使能","更新使能"],correct:1},{question:"死区时间（Dead-Time）的作用是什么？",options:["提高 PWM 频率","防止互补输出同时导通导致短路","增加输出电流","减少定时器功耗"],correct:1},{question:"刹车（Break）功能触发后，MOE 位会怎样？",options:["变为 1","变为 0","保持不变","自动翻转"],correct:1},{question:"高级定时器比通用定时器多了哪个寄存器？",options:["BDTR","ARR","PSC","CCR"],correct:0}],"16-rtc":[{question:"RTC 的 CNF 位在配置模式时必须为？",options:["1","0","由硬件决定","任意值"],correct:0},{question:"RTC 写 PRL/CNT 寄存器前必须做什么？",options:["清除 OWF","设置 CNF=1","设置 SECIE=1","等待 RSF=0"],correct:1},{question:"使用 32.768kHz LSE 时，PRL 应设为多少才能获得 1Hz？",options:["0x7FFF","0x8000","32768","65535"],correct:0},{question:"RTOFF 位为 1 表示什么？",options:["RTC 正在初始化","最后写操作已完成","配置模式中","计数器溢出"],correct:1}],"17-wdg":[{question:"IWDG 启动后能否软件停止？",options:["可以，向 KR 写 0x5555","可以，向 KR 写 0xEEEE","不能，只有复位才能停止","可以，清除 WDGA 位"],correct:2},{question:"向 IWDG KR 寄存器写入 0xAAAA 的作用是什么？",options:["解锁写保护","启动看门狗","重装载计数器（喂狗）","配置预分频"],correct:2},{question:"WWDG 的窗口机制中，当计数器值在什么范围时允许刷新？",options:["≥ 窗口值","< 0x40","0x40 ≤ 计数器 < 窗口值","任意值"],correct:2},{question:"WWDG 的 EWI 中断在计数器达到什么值时触发？",options:["0x7F","0x40","0x00","窗口值"],correct:1}],"18-pwr":[{question:"STM32F1 有几种低功耗模式？",options:["2 种","3 种","4 种","5 种"],correct:1},{question:"Standby 模式下 SRAM 数据会怎样？",options:["保持","部分保持","丢失","自动备份到 Flash"],correct:2},{question:"PWR CR 寄存器的 DBP 位为 1 表示什么？",options:["进入低功耗模式","解除备份域写保护","使能 PVD","清除 Standby 标志"],correct:1},{question:"Stop 模式和 Standby 模式的主要区别是？",options:["是否有唤醒功能","SRAM 是否保持","是否使用 PLL","是否有中断"],correct:1}],"19-freertos":[{question:"FreeRTOS 任务有几种状态？",options:["2 种","3 种","4 种","5 种"],correct:2},{question:"xQueueReceive 在队列为空且 timeout>0 时，任务会怎样？",options:["返回错误","进入 Blocked 状态","进入 Suspended 状态","立即切换"],correct:1},{question:"vTaskDelay(100) 的作用是什么？",options:["挂起任务 100ms","延时 100 个 Tick，任务进入 Blocked","删除任务","降低优先级"],correct:1},{question:"vTaskStartScheduler 调用后会发生什么？",options:["创建空闲任务","启动任务调度，选择最高优先级 Ready 任务运行","初始化所有外设","进入低功耗模式"],correct:1}],"20-fs":[{question:"FatFS 挂载文件系统的 API 是？",options:["f_open()","f_mount()","f_init()","f_attach()"],correct:1},{question:"f_open 写模式下，文件不存在时会？",options:["返回 FR_NO_FILE","自动创建新文件","返回 FR_DISK_ERR","触发 HardFault"],correct:1},{question:"f_close 的主要作用是什么？",options:["删除文件","确保数据完整写入并释放资源","重置文件指针","卸载文件系统"],correct:1},{question:"f_mount 未调用时执行 f_open 会返回什么？",options:["FR_OK (0)","FR_DISK_ERR (1)","FR_NOT_READY (3)","FR_NO_FILE (4)"],correct:2}],"21-debug":[{question:"SWD 调试需要几根线？",options:["1 根","2 根","3 根","4 根"],correct:1},{question:"HardFault 最常见的触发原因是什么？",options:["printf 打印太多","空指针访问","GPIO 翻转过快","SPI 速率过高"],correct:1},{question:"SWD 接口的时钟线是哪根引脚？",options:["PA13","PA14","PA15","PA0"],correct:1},{question:"串口调试中 printf 重定向需要重写哪个函数？",options:["main()","fputc()","printf()","USART1_IRQHandler()"],correct:1}],"22-project":[{question:"TIM2 触发 ADC 采样是通过什么信号？",options:["更新中断","TRGO (触发输出)","PWM 输出","输入捕获"],correct:1},{question:"DMA 传输 ADC 数据时，外设地址是什么？",options:["&ADC1->SR","&ADC1->DR","&ADC1->CR1","&ADC1->CR2"],correct:1},{question:"综合项目中 LED 的作用是什么？",options:["照明","指示程序运行状态","发射红外信号","提供时钟"],correct:1},{question:"DMA 循环模式 (CIRC=1) 的优势是什么？",options:["更低功耗","自动循环填充缓冲区，无需 CPU 干预","更快传输速度","更大的传输量"],correct:1}]};function $T({pct:e,size:t=80}){const n=(t-8)/2,r=2*Math.PI*n,i=r-e/100*r;return c.jsxs("svg",{width:t,height:t,children:[c.jsx("circle",{cx:t/2,cy:t/2,r:n,fill:"none",stroke:"var(--bg-raised)",strokeWidth:"6"}),c.jsx("circle",{cx:t/2,cy:t/2,r:n,fill:"none",stroke:e>=80?"var(--accent-green)":e>=50?"var(--accent-amber)":"var(--accent-red)",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:r,strokeDashoffset:i,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 600ms var(--ease-out)"}}),c.jsxs("text",{x:t/2,y:t/2,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-primary)",fontSize:"14",fontWeight:"700",fontFamily:"var(--font-sans)",children:[Math.round(e),"%"]})]})}function KT(){const{moduleId:e}=il(),t=VT[e||""]||[],[n,r]=T.useState(0),[i,l]=T.useState(null),[o,s]=T.useState(!1),[a,u]=T.useState(0),[f,d]=T.useState(!1),p=ll(R=>R.setQuizScore);if(t.length===0)return c.jsxs("div",{children:[c.jsx("div",{className:Ce.header,children:c.jsx("div",{className:Ce.headerLeft,children:c.jsx("h2",{className:Ce.heading,children:"知识测验"})})}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"var(--text-md)",margin:0},children:"此模块的测验正在编写中"})]});const h=t[n],g=Math.round(a/t.length*100),S=R=>{o||(l(R),s(!0),R===h.correct&&u(A=>A+1))},v=()=>{n<t.length-1?(r(R=>R+1),l(null),s(!1)):(d(!0),p(e||"",g))};if(f)return c.jsxs("div",{className:Ce.resultWrap,children:[c.jsx("div",{className:Ce.resultRadial,children:c.jsx($T,{pct:g,size:80})}),c.jsx("h2",{style:{fontSize:18,fontWeight:600,color:g>=80?"var(--accent-green)":g>=50?"var(--accent-amber)":"var(--accent-red)",margin:"0 0 8px"},children:g>=80?"测验通过":g>=50?"继续努力":"需要复习"}),c.jsxs("p",{className:Ce.resultScore,children:["得分 ",a,"/",t.length," (",g,"%)"]}),c.jsx(zr,{value:g,variant:"success"}),c.jsx("div",{style:{marginTop:20},children:c.jsx("button",{onClick:()=>{r(0),l(null),s(!1),u(0),d(!1)},className:Ce.retryBtn,children:"重新测验"})})]});const m=R=>o?R===h.correct?Ce.optionCorrect:R===i&&R!==h.correct?Ce.optionWrong:Ce.optionDimmed:Ce.option,C=R=>o?R===h.correct?Ce.optLetterCorrect:R===i&&R!==h.correct?Ce.optLetterWrong:Ce.optLetterNormal:Ce.optLetterNormal,_=R=>o&&R===h.correct?"✓":o&&R===i&&R!==h.correct?"✗":String.fromCharCode(65+R);return c.jsxs("div",{children:[c.jsxs("div",{className:Ce.header,children:[c.jsxs("div",{className:Ce.headerLeft,children:[c.jsx("h2",{className:Ce.heading,children:"知识测验"}),c.jsxs("span",{className:Ce.counter,children:[n+1,"/",t.length]})]}),c.jsxs("span",{className:Ce.score,children:["得分 ",a]})]}),c.jsx(zr,{value:(n+(o?1:0))/t.length*100,variant:"success"}),c.jsxs("div",{style:{marginTop:20},children:[c.jsx("p",{className:Ce.question,children:h.question}),c.jsx("div",{className:Ce.options,children:h.options.map((R,A)=>c.jsxs("button",{onClick:()=>S(A),disabled:o,className:m(A),children:[c.jsx("span",{className:C(A),children:_(A)}),R]},A))}),o&&c.jsx("button",{onClick:v,className:Ce.nextBtn,children:n<t.length-1?"下一题":"查看结果"})]})]})}function Rp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function XT(e){if(Array.isArray(e))return e}function qT(e,t,n){return(t=nk(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QT(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,l,o,s=[],a=!0,u=!1;try{if(l=(n=n.call(e)).next,t!==0)for(;!(a=(r=l.call(n)).done)&&(s.push(r.value),s.length!==t);a=!0);}catch(f){u=!0,i=f}finally{try{if(!a&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}function JT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ip(Object(n),!0).forEach(function(r){qT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ip(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YT(e,t){if(e==null)return{};var n,r,i=ZT(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ZT(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ek(e,t){return XT(e)||QT(e,t)||rk(e,t)||JT()}function tk(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nk(e){var t=tk(e,"string");return typeof t=="symbol"?t:t+""}function rk(e,t){if(e){if(typeof e=="string")return Rp(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Rp(e,t):void 0}}function ik(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ap(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ap(Object(n),!0).forEach(function(r){ik(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ap(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,l){return l(i)},r)}}function mi(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return t.apply(n,[].concat(i,s))}}}function Do(e){return{}.toString.call(e).includes("Object")}function ok(e){return!Object.keys(e).length}function Qi(e){return typeof e=="function"}function sk(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ak(e,t){return Do(t)||xn("changeType"),Object.keys(t).some(function(n){return!sk(e,n)})&&xn("changeField"),t}function uk(e){Qi(e)||xn("selectorType")}function ck(e){Qi(e)||Do(e)||xn("handlerType"),Do(e)&&Object.values(e).some(function(t){return!Qi(t)})&&xn("handlersType")}function dk(e){e||xn("initialIsRequired"),Do(e)||xn("initialType"),ok(e)&&xn("initialContent")}function fk(e,t){throw new Error(e[t]||e.default)}var pk={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},xn=mi(fk)(pk),Dl={changes:ak,selector:uk,handler:ck,initial:dk};function hk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Dl.initial(e),Dl.handler(t);var n={current:e},r=mi(Ck)(n,t),i=mi(gk)(n),l=mi(Dl.changes)(e),o=mi(mk)(n);function s(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(f){return f};return Dl.selector(u),u(n.current)}function a(u){lk(r,i,l,o)(u)}return[s,a]}function mk(e,t){return Qi(t)?t(e.current):t}function gk(e,t){return e.current=Tp(Tp({},e.current),t),t}function Ck(e,t,n){return Qi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var _k={create:hk},Sk={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function yk(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return t.apply(n,[].concat(i,s))}}}function vk(e){return{}.toString.call(e).includes("Object")}function xk(e){return e||kp("configIsRequired"),vk(e)||kp("configType"),e.urls?(Rk(),{paths:{vs:e.urls.monacoBase}}):e}function Rk(){console.warn(Sg.deprecation)}function Ik(e,t){throw new Error(e[t]||e.default)}var Sg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},kp=yk(Ik)(Sg),Pk={config:xk},Ak=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(l,o){return o(l)},i)}};function yg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],yg(e[n],t[n]))}),Pp(Pp({},e),t)}var Tk={type:"cancelation",msg:"operation is manually canceled"};function ta(e){var t=!1,n=new Promise(function(r,i){e.then(function(l){return t?i(Tk):r(l)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var kk=["monaco"],wk=_k.create({config:Sk,isInitialized:!1,resolve:null,reject:null,monaco:null}),vg=ek(wk,2),ul=vg[0],us=vg[1];function Ek(e){var t=Pk.config(e),n=t.monaco,r=YT(t,kk);us(function(i){return{config:yg(i.config,r),monaco:n}})}function bk(){var e=ul(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(us({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ta(na);if(window.monaco&&window.monaco.editor)return xg(window.monaco),e.resolve(window.monaco),ta(na);Ak(Dk,Lk)(Nk)}return ta(na)}function Dk(e){return document.body.appendChild(e)}function Mk(e){var t=document.createElement("script");return e&&(t.src=e),t}function Lk(e){var t=ul(function(r){var i=r.config,l=r.reject;return{config:i,reject:l}}),n=Mk("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Nk(){var e=ul(function(n){var r=n.config,i=n.resolve,l=n.reject;return{config:r,resolve:i,reject:l}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;xg(r),e.resolve(r)},function(n){e.reject(n)})}function xg(e){ul().monaco||us({monaco:e})}function Ok(){return ul(function(e){var t=e.monaco;return t})}var na=new Promise(function(e,t){return us({resolve:e,reject:t})}),Rg={config:Ek,init:bk,__getMonacoInstance:Ok},Bk={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ra=Bk,Fk={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},jk=Fk;function zk({children:e}){return $t.createElement("div",{style:jk.container},e)}var Wk=zk,Gk=Wk;function Uk({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:l,wrapperProps:o}){return $t.createElement("section",{style:{...ra.wrapper,width:e,height:t},...o},!n&&$t.createElement(Gk,null,r),$t.createElement("div",{ref:i,style:{...ra.fullWidth,...!n&&ra.hide},className:l}))}var Hk=Uk,Ig=T.memo(Hk);function Vk(e){T.useEffect(e,[])}var Pg=Vk;function $k(e,t,n=!0){let r=T.useRef(!0);T.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var at=$k;function ki(){}function vr(e,t,n,r){return Kk(e,r)||Xk(e,t,n,r)}function Kk(e,t){return e.editor.getModel(Ag(e,t))}function Xk(e,t,n,r){return e.editor.createModel(t,n,r?Ag(e,r):void 0)}function Ag(e,t){return e.Uri.parse(t)}function qk({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:l,modifiedModelPath:o,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:a=!1,theme:u="light",loading:f="Loading...",options:d={},height:p="100%",width:h="100%",className:g,wrapperProps:S={},beforeMount:v=ki,onMount:m=ki}){let[C,_]=T.useState(!1),[R,A]=T.useState(!0),P=T.useRef(null),k=T.useRef(null),L=T.useRef(null),W=T.useRef(m),I=T.useRef(v),z=T.useRef(!1);Pg(()=>{let B=Rg.init();return B.then(Q=>(k.current=Q)&&A(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>P.current?b():B.cancel()}),at(()=>{if(P.current&&k.current){let B=P.current.getOriginalEditor(),Q=vr(k.current,e||"",r||n||"text",l||"");Q!==B.getModel()&&B.setModel(Q)}},[l],C),at(()=>{if(P.current&&k.current){let B=P.current.getModifiedEditor(),Q=vr(k.current,t||"",i||n||"text",o||"");Q!==B.getModel()&&B.setModel(Q)}},[o],C),at(()=>{let B=P.current.getModifiedEditor();B.getOption(k.current.editor.EditorOption.readOnly)?B.setValue(t||""):t!==B.getValue()&&(B.executeEdits("",[{range:B.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),B.pushUndoStop())},[t],C),at(()=>{var B,Q;(Q=(B=P.current)==null?void 0:B.getModel())==null||Q.original.setValue(e||"")},[e],C),at(()=>{let{original:B,modified:Q}=P.current.getModel();k.current.editor.setModelLanguage(B,r||n||"text"),k.current.editor.setModelLanguage(Q,i||n||"text")},[n,r,i],C),at(()=>{var B;(B=k.current)==null||B.editor.setTheme(u)},[u],C),at(()=>{var B;(B=P.current)==null||B.updateOptions(d)},[d],C);let G=T.useCallback(()=>{var le;if(!k.current)return;I.current(k.current);let B=vr(k.current,e||"",r||n||"text",l||""),Q=vr(k.current,t||"",i||n||"text",o||"");(le=P.current)==null||le.setModel({original:B,modified:Q})},[n,t,i,e,r,l,o]),Z=T.useCallback(()=>{var B;!z.current&&L.current&&(P.current=k.current.editor.createDiffEditor(L.current,{automaticLayout:!0,...d}),G(),(B=k.current)==null||B.editor.setTheme(u),_(!0),z.current=!0)},[d,u,G]);T.useEffect(()=>{C&&W.current(P.current,k.current)},[C]),T.useEffect(()=>{!R&&!C&&Z()},[R,C,Z]);function b(){var Q,le,F,$;let B=(Q=P.current)==null?void 0:Q.getModel();s||((le=B==null?void 0:B.original)==null||le.dispose()),a||((F=B==null?void 0:B.modified)==null||F.dispose()),($=P.current)==null||$.dispose()}return $t.createElement(Ig,{width:h,height:p,isEditorReady:C,loading:f,_ref:L,className:g,wrapperProps:S})}var Qk=qk;T.memo(Qk);function Jk(e){let t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}var Yk=Jk,Ml=new Map;function Zk({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:l,theme:o="light",line:s,loading:a="Loading...",options:u={},overrideServices:f={},saveViewState:d=!0,keepCurrentModel:p=!1,width:h="100%",height:g="100%",className:S,wrapperProps:v={},beforeMount:m=ki,onMount:C=ki,onChange:_,onValidate:R=ki}){let[A,P]=T.useState(!1),[k,L]=T.useState(!0),W=T.useRef(null),I=T.useRef(null),z=T.useRef(null),G=T.useRef(C),Z=T.useRef(m),b=T.useRef(),B=T.useRef(r),Q=Yk(l),le=T.useRef(!1),F=T.useRef(!1);Pg(()=>{let V=Rg.init();return V.then(K=>(W.current=K)&&L(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>I.current?y():V.cancel()}),at(()=>{var K,x,fe,De;let V=vr(W.current,e||r||"",t||i||"",l||n||"");V!==((K=I.current)==null?void 0:K.getModel())&&(d&&Ml.set(Q,(x=I.current)==null?void 0:x.saveViewState()),(fe=I.current)==null||fe.setModel(V),d&&((De=I.current)==null||De.restoreViewState(Ml.get(l))))},[l],A),at(()=>{var V;(V=I.current)==null||V.updateOptions(u)},[u],A),at(()=>{!I.current||r===void 0||(I.current.getOption(W.current.editor.EditorOption.readOnly)?I.current.setValue(r):r!==I.current.getValue()&&(F.current=!0,I.current.executeEdits("",[{range:I.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),I.current.pushUndoStop(),F.current=!1))},[r],A),at(()=>{var K,x;let V=(K=I.current)==null?void 0:K.getModel();V&&i&&((x=W.current)==null||x.editor.setModelLanguage(V,i))},[i],A),at(()=>{var V;s!==void 0&&((V=I.current)==null||V.revealLine(s))},[s],A),at(()=>{var V;(V=W.current)==null||V.editor.setTheme(o)},[o],A);let $=T.useCallback(()=>{var V;if(!(!z.current||!W.current)&&!le.current){Z.current(W.current);let K=l||n,x=vr(W.current,r||e||"",t||i||"",K||"");I.current=(V=W.current)==null?void 0:V.editor.create(z.current,{model:x,automaticLayout:!0,...u},f),d&&I.current.restoreViewState(Ml.get(K)),W.current.editor.setTheme(o),s!==void 0&&I.current.revealLine(s),P(!0),le.current=!0}},[e,t,n,r,i,l,u,f,d,o,s]);T.useEffect(()=>{A&&G.current(I.current,W.current)},[A]),T.useEffect(()=>{!k&&!A&&$()},[k,A,$]),B.current=r,T.useEffect(()=>{var V,K;A&&_&&((V=b.current)==null||V.dispose(),b.current=(K=I.current)==null?void 0:K.onDidChangeModelContent(x=>{F.current||_(I.current.getValue(),x)}))},[A,_]),T.useEffect(()=>{if(A){let V=W.current.editor.onDidChangeMarkers(K=>{var fe;let x=(fe=I.current.getModel())==null?void 0:fe.uri;if(x&&K.find(De=>De.path===x.path)){let De=W.current.editor.getModelMarkers({resource:x});R==null||R(De)}});return()=>{V==null||V.dispose()}}return()=>{}},[A,R]);function y(){var V,K;(V=b.current)==null||V.dispose(),p?d&&Ml.set(l,I.current.saveViewState()):(K=I.current.getModel())==null||K.dispose(),I.current.dispose()}return $t.createElement(Ig,{width:h,height:g,isEditorReady:A,loading:a,_ref:z,className:S,wrapperProps:v})}var ew=Zk,tw=T.memo(ew),nw=tw;class M{constructor(t,n,r,i){D(this,"offset");D(this,"value");D(this,"resetValue");D(this,"fields");D(this,"onChange");this.offset=t,this.value=n,this.resetValue=n,this.fields=r,this.onChange=i}read(t){if(!t)return this.value;const n=this.fields[t];if(!n)throw new Error(`Unknown field: ${t}`);const[r,i]=n.bits,l=(1<<i-r+1)-1<<r;return(this.value&l)>>>r}write(t,n){const r=this.value;if(typeof t=="number")this.value=t>>>0;else if(typeof t=="string"){const i=this.fields[t];if(!i)throw new Error(`Unknown field: ${t}`);const[l,o]=i.bits,s=(1<<o-l+1)-1<<l;this.value=this.value&~s|(n<<l&s)>>>0}else for(const[i,l]of Object.entries(t)){const o=this.fields[i];if(!o)throw new Error(`Unknown field: ${i}`);const[s,a]=o.bits,u=(1<<a-s+1)-1<<s;this.value=this.value&~u|(l<<s&u)>>>0}if(this.onChange&&r!==this.value)for(const[i,l]of Object.entries(this.fields)){const o=this.extractField(r,l),s=this.extractField(this.value,l);o!==s&&this.onChange(i,o,s)}}reset(){this.value=this.resetValue}extractField(t,n){const[r,i]=n.bits,l=(1<<i-r+1)-1<<r;return(t&l)>>>r}}class rw{constructor(){D(this,"listeners",new Map)}on(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var r;return(r=this.listeners.get(t))==null?void 0:r.delete(n)}}emit(t,n){var r;(r=this.listeners.get(t))==null||r.forEach(i=>i(n));for(const[i,l]of this.listeners)i.includes("*")&&this.matchPattern(i,t)&&l.forEach(o=>o(n))}clear(){this.listeners.clear()}matchPattern(t,n){return new RegExp("^"+t.replace(/\*/g,"[^:]+")+"$").test(n)}}const Zl=new rw;class Ne{constructor(){D(this,"registers",new Map)}read(t){const n=this.registers.get(t);if(!n)throw new Error(`${this.name}: no register at offset 0x${t.toString(16)}`);return n.read()}write(t,n){const r=this.registers.get(t);if(!r)throw new Error(`${this.name}: no register at offset 0x${t.toString(16)}`);r.write(n)}reset(){this.registers.forEach(t=>t.reset())}emit(t,n){Zl.emit(t,n)}}const iw=e=>({bits:[e*4,e*4+1],desc:`Pin ${e} mode`}),lw=e=>({bits:[e*4+2,e*4+3],desc:`Pin ${e} configuration`});function wp(e){const t=e?8:0,n={};for(let r=0;r<8;r++)n[`MODE${t+r}`]=iw(r),n[`CNF${t+r}`]=lw(r);return n}function Ep(e,t){const n={};for(let r=0;r<t;r++)n[`${e}${r}`]={bits:[r,r],desc:`${e} pin ${r}`};return n}function ow(e){return["input","output_10mhz","output_2mhz","output_50mhz"][e]??"input"}function sw(e,t){return e==="input"?t===0?"analog":t===1?"floating_input":"pull_up_down":t===0?"push_pull":t===1?"open_drain":t===2?"alt_push_pull":"alt_open_drain"}class ia extends Ne{constructor(n,r){super();D(this,"name");D(this,"baseAddress");D(this,"pinLevels",new Array(16).fill(!1));D(this,"port");this.name=`GPIO${n}`,this.port=n,this.baseAddress=r;const i=new M(0,1145324612,wp(!1),()=>this.emitConfig()),l=new M(4,1145324612,wp(!0),()=>this.emitConfig()),o=new M(8,0,Ep("IDR",16)),s=new M(12,0,Ep("ODR",16)),a=new M(16,0,{}),u=new M(20,0,{});this.registers.set(0,i),this.registers.set(4,l),this.registers.set(8,o),this.registers.set(12,s),this.registers.set(16,a),this.registers.set(20,u)}write(n,r){if(n===12)for(let i=0;i<16;i++)this.updatePin(i,!!(r&1<<i));else if(n===16)for(let i=0;i<16;i++)r&1<<i&&this.updatePin(i,!0),r&1<<i+16&&this.updatePin(i,!1);else if(n===20)for(let i=0;i<16;i++)r&1<<i&&this.updatePin(i,!1);super.write(n,r)}getPinState(n){const r=this.registers.get(n<8?0:4),i=ow(r.read(`MODE${n}`)),l=sw(i,r.read(`CNF${n}`));return{mode:i,config:l,level:this.pinLevels[n],number:n,port:this.port}}getAllPinStates(){return Array.from({length:16},(n,r)=>this.getPinState(r))}tick(){}updatePin(n,r){if(this.pinLevels[n]===r)return;if(this.pinLevels[n]=r,this.getPinState(n).mode==="input"){const l=this.registers.get(8),o=l.read();l.write(r?o|1<<n:o&~(1<<n))}this.emit(`gpio:${this.port}:${n}:change`,{pin:n,level:r})}emitConfig(){this.emit(`gpio:${this.port}:config`,this.getAllPinStates())}}class aw extends Ne{constructor(){super();D(this,"name","RCC");D(this,"baseAddress",1073876992);const n=new M(0,3,{HSION:{bits:[0,0],desc:"HSI enable"},HSIRDY:{bits:[1,1],desc:"HSI ready"},HSEON:{bits:[16,16],desc:"HSE enable"},HSERDY:{bits:[17,17],desc:"HSE ready"},PLLON:{bits:[24,24],desc:"PLL enable"},PLLRDY:{bits:[25,25],desc:"PLL ready"}}),r=new M(4,0,{SW:{bits:[0,1],desc:"System clock switch"},SWS:{bits:[2,3],desc:"System clock status"},HPRE:{bits:[4,7],desc:"AHB prescaler"},PPRE1:{bits:[8,10],desc:"APB1 prescaler"},PPRE2:{bits:[11,13],desc:"APB2 prescaler"},PLLMUL:{bits:[18,21],desc:"PLL multiplier"}}),i=new M(24,0,{IOPAEN:{bits:[2,2],desc:"GPIOA clock enable"},IOPBEN:{bits:[3,3],desc:"GPIOB clock enable"},IOPCEN:{bits:[4,4],desc:"GPIOC clock enable"},ADC1EN:{bits:[9,9],desc:"ADC1 clock enable"},TIM1EN:{bits:[11,11],desc:"TIM1 clock enable"},SPI1EN:{bits:[12,12],desc:"SPI1 clock enable"},USART1EN:{bits:[14,14],desc:"USART1 clock enable"}}),l=new M(28,0,{TIM2EN:{bits:[0,0],desc:"TIM2 clock enable"},I2C1EN:{bits:[21,21],desc:"I2C1 clock enable"},CAN1EN:{bits:[25,25],desc:"CAN1 clock enable"},DACEN:{bits:[29,29],desc:"DAC clock enable"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(24,i),this.registers.set(28,l)}write(n,r){if(n===0&&r&1<<24&&(r|=1<<25),n===4){const i=r>>0&3;r=r&-13|i<<2}super.write(n,r)}getSystemClock(){const n=this.read(4),r=n>>2&3,i=n>>18&15;let l;return r===0||r===1?l=8e6:l=8e6*(i+2),l}isClocked(n){const r=this.read(24),i=this.read(28),l={GPIOA:4,GPIOB:8,GPIOC:16,ADC1:512,TIM1:2048,SPI1:4096,USART1:16384},o={TIM2:1,I2C1:1<<21,CAN1:1<<25,DAC:1<<29};return l[n]?!!(r&l[n]):o[n]?!!(i&o[n]):!1}tick(){}}class uw extends Ne{constructor(){super();D(this,"name","NVIC");D(this,"baseAddress",3758153984);D(this,"enabled",new Array(64).fill(!1));const n=new M(0,0,{},()=>this.syncFromISER(0)),r=new M(4,0,{},()=>this.syncFromISER(1)),i=new M(128,0,{}),l=new M(132,0,{});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(128,i),this.registers.set(132,l);for(let o=0;o<21;o++)this.registers.set(768+o*4,new M(768+o*4,0,{}))}syncFromISER(n){const i=this.registers.get(n===0?0:4).read(),l=n*32;for(let o=0;o<32;o++)this.enabled[l+o]=!!(i&1<<o)}write(n,r){if(n===128||n===132){const i=n===128?0:4,l=this.registers.get(i);l.write(l.read()&~r),this.syncFromISER(n===128?0:1);return}super.write(n,r),(n===0||n===4)&&this.syncFromISER(n===0?0:1)}isEnabled(n){return n<0||n>=64?!1:this.enabled[n]}tick(){}}const Ll=16777215;class cw extends Ne{constructor(){super();D(this,"name","SysTick");D(this,"baseAddress",3758153744);const n=new M(0,0,{ENABLE:{bits:[0,0],desc:"Enable counter"},TICKINT:{bits:[1,1],desc:"Enable interrupt on underflow"},CLKSOURCE:{bits:[2,2],desc:"0=external, 1=CPU clock"},COUNTFLAG:{bits:[16,16],desc:"Set on underflow, cleared on read"}}),r=new M(4,0,{RELOAD:{bits:[0,23],desc:"Reload value (24-bit)"}}),i=new M(8,0,{CURRENT:{bits:[0,23],desc:"Current counter value (24-bit)"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i)}read(n){const r=super.read(n);if(n===0){const i=this.registers.get(0);return i.read("COUNTFLAG")&&i.write({COUNTFLAG:0}),r}return r}write(n,r){if(n===8){super.write(n,r&Ll),this.registers.get(0).write({COUNTFLAG:0});return}if(n===4){super.write(n,r&Ll);return}super.write(n,r)}tick(){const n=this.registers.get(0);if(!(n.read()&1))return;const r=this.registers.get(8),i=this.registers.get(4).read()&Ll,l=r.read()&Ll;l===0?(r.write(i),n.write({COUNTFLAG:1}),n.read("TICKINT")&&this.emit("systick:overflow",null)):r.write(l-1)}}class Tg extends Ne{constructor(n,r){super();D(this,"name");D(this,"baseAddress");D(this,"timerNumber");D(this,"prescalerCounter",0);D(this,"channels",[{output:!1,enabled:!1},{output:!1,enabled:!1},{output:!1,enabled:!1},{output:!1,enabled:!1}]);this.timerNumber=n,this.baseAddress=r,this.name=`TIM${n}`;const i=new M(0,0,{CEN:{bits:[0,0],desc:"Counter enable"},UDIS:{bits:[1,1],desc:"Update disable"},ARPE:{bits:[7,7],desc:"Auto-reload preload enable"}}),l=new M(12,0,{UIE:{bits:[0,0],desc:"Update interrupt enable"},CC1IE:{bits:[1,1],desc:"CC1 interrupt enable"},CC2IE:{bits:[2,2],desc:"CC2 interrupt enable"},CC3IE:{bits:[3,3],desc:"CC3 interrupt enable"},CC4IE:{bits:[4,4],desc:"CC4 interrupt enable"}}),o=new M(16,0,{UIF:{bits:[0,0],desc:"Update interrupt flag"},CC1IF:{bits:[1,1],desc:"CC1 flag"},CC2IF:{bits:[2,2],desc:"CC2 flag"},CC3IF:{bits:[3,3],desc:"CC3 flag"},CC4IF:{bits:[4,4],desc:"CC4 flag"}}),s=new M(20,0,{UG:{bits:[0,0],desc:"Update generation"}}),a=new M(24,0,{CC1S:{bits:[0,1],desc:"CC1 capture/compare selection"},OC1PE:{bits:[3,3],desc:"OC1 preload enable"},OC1M:{bits:[4,6],desc:"OC1 mode (110=PWM1, 111=PWM2)"},CC2S:{bits:[8,9],desc:"CC2 capture/compare selection"},OC2PE:{bits:[11,11],desc:"OC2 preload enable"},OC2M:{bits:[12,14],desc:"OC2 mode"}}),u=new M(28,0,{CC3S:{bits:[0,1],desc:"CC3 capture/compare selection"},OC3PE:{bits:[3,3],desc:"OC3 preload enable"},OC3M:{bits:[4,6],desc:"OC3 mode"},CC4S:{bits:[8,9],desc:"CC4 capture/compare selection"},OC4PE:{bits:[11,11],desc:"OC4 preload enable"},OC4M:{bits:[12,14],desc:"OC4 mode"}}),f=new M(32,0,{CC1E:{bits:[0,0],desc:"CC1 output enable"},CC1P:{bits:[1,1],desc:"CC1 polarity (0=active high)"},CC2E:{bits:[4,4],desc:"CC2 output enable"},CC2P:{bits:[5,5],desc:"CC2 polarity"},CC3E:{bits:[8,8],desc:"CC3 output enable"},CC3P:{bits:[9,9],desc:"CC3 polarity"},CC4E:{bits:[12,12],desc:"CC4 output enable"},CC4P:{bits:[13,13],desc:"CC4 polarity"}}),d=new M(36,0,{CNT:{bits:[0,15],desc:"Counter value"}}),p=new M(40,0,{PSC:{bits:[0,15],desc:"Prescaler value"}}),h=new M(44,0,{ARR:{bits:[0,15],desc:"Auto-reload value"}}),g={CCR:{bits:[0,15],desc:"Capture/Compare value"}},S=new M(52,0,g),v=new M(56,0,g),m=new M(60,0,g),C=new M(64,0,g);this.registers.set(0,i),this.registers.set(12,l),this.registers.set(16,o),this.registers.set(20,s),this.registers.set(24,a),this.registers.set(28,u),this.registers.set(32,f),this.registers.set(36,d),this.registers.set(40,p),this.registers.set(44,h),this.registers.set(52,S),this.registers.set(56,v),this.registers.set(60,m),this.registers.set(64,C)}write(n,r){if(n===16){const i=this.registers.get(16);i.write(i.read()&r);return}if(n===20){r&1&&(this.registers.get(36).write(0),this.registers.get(16).write({UIF:1}));return}super.write(n,r)}tick(){if(!this.registers.get(0).read("CEN"))return;const r=this.registers.get(40).read()&65535;if(this.prescalerCounter++,this.prescalerCounter<=r)return;this.prescalerCounter=0;const i=this.registers.get(36),l=this.registers.get(44).read()&65535,o=i.read()&65535;o>=l?(i.write(0),this.registers.get(16).write({UIF:1}),this.registers.get(12).read("UIE")&&this.emit(`tim:${this.timerNumber}:update`,{counter:0})):i.write(o+1),this.updateChannels()}updateChannels(){const n=this.registers.get(36).read()&65535,r=this.registers.get(32);for(let i=0;i<4;i++){const l=i<2?24:28,o=this.registers.get(l),s=i%2===0?0:8,a=o.read()>>s+4&7,u=52+i*4,f=this.registers.get(u).read()&65535,d=!!r.read(`CC${i+1}E`);this.channels[i].enabled=d,d&&a===6?this.channels[i].output=n<f:d?this.channels[i].output=n<f:this.channels[i].output=!1}}getCounter(){return this.registers.get(36).read()&65535}getFrequency(){const n=(this.registers.get(40).read()&65535)+1,r=(this.registers.get(44).read()&65535)+1;return Math.floor(72e6/(n*r))}getChannelState(n){const r=n-1;return{channel:n,output:this.channels[r].output,ccr:this.registers.get(52+r*4).read()&65535,enabled:this.channels[r].enabled}}getAllChannelStates(){return[1,2,3,4].map(n=>this.getChannelState(n))}}class dw extends Ne{constructor(){super();D(this,"name","DAC");D(this,"baseAddress",1073771520);const n=new M(0,0,{EN1:{bits:[0,0],desc:"DAC channel 1 enable"},TSEL1:{bits:[1,2],desc:"DAC channel 1 trigger selection"},TEN1:{bits:[3,3],desc:"DAC channel 1 trigger enable"}}),r=new M(8,0,{DACC1DHR:{bits:[0,11],desc:"DAC channel 1 12-bit right-aligned data"}}),i=new M(44,0,{DACC1DOR:{bits:[0,11],desc:"DAC channel 1 data output register"}});this.registers.set(0,n),this.registers.set(8,r),this.registers.set(44,i)}write(n,r){if(n===8){const i=r&4095;super.write(8,i),this.registers.get(44).write(i),this.emit("dac:output",{code:i,voltage:this.getVoltage()});return}super.write(n,r)}read(n){return n===44&&!this.registers.get(0).read("EN1")?0:super.read(n)}getVoltage(){if(!this.registers.get(0).read("EN1"))return 0;const r=this.registers.get(44).read()&4095;return parseFloat((r/4095*3.3).toFixed(3))}getOutputCode(){return this.registers.get(44).read()&4095}tick(){}}class fw extends Ne{constructor(){super();D(this,"name","ADC1");D(this,"baseAddress",1073816576);D(this,"analogValue",0);D(this,"conversionCyclesRemaining",0);const n=new M(0,0,{AWD:{bits:[0,0],desc:"Analog watchdog flag"},EOC:{bits:[1,1],desc:"End of conversion"},STRT:{bits:[4,4],desc:"Start flag"}}),r=new M(4,0,{AWDEN:{bits:[23,23],desc:"Analog watchdog enable"}}),i=new M(8,0,{ADON:{bits:[0,0],desc:"ADC enable"},CONT:{bits:[1,1],desc:"Continuous conversion"},SWSTART:{bits:[22,22],desc:"Start conversion (software)"}}),l=new M(12,0,{}),o=new M(16,0,{}),s=new M(40,0,{L:{bits:[20,23],desc:"Regular channel sequence length"}}),a=new M(52,0,{SQ1:{bits:[0,4],desc:"1st conversion in regular sequence"}}),u=new M(76,0,{DATA:{bits:[0,11],desc:"12-bit conversion result"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l),this.registers.set(16,o),this.registers.set(40,s),this.registers.set(52,a),this.registers.set(76,u)}setAnalogVoltage(n){this.analogValue=Math.max(0,Math.min(3.3,n))}getAnalogVoltage(){return this.analogValue}write(n,r){if(n===8){const i=!!(r&4194304);super.write(n,r),i&&this.registers.get(8).read("ADON")&&(this.conversionCyclesRemaining=7,this.registers.get(0).write("EOC",0));return}super.write(n,r)}tick(){if(this.conversionCyclesRemaining>0&&(this.conversionCyclesRemaining--,this.conversionCyclesRemaining===0)){const n=Math.round(this.analogValue/3.3*4095);this.registers.get(76).write(n&4095),this.registers.get(0).write("EOC",1),this.emit("adc:eoc",{code:n,voltage:this.analogValue}),this.registers.get(8).read("CONT")&&(this.conversionCyclesRemaining=7)}}getResult(){return this.registers.get(76).read()&4095}getVoltage(){const n=this.getResult();return parseFloat((n/4095*3.3).toFixed(3))}reset(){super.reset(),this.analogValue=0,this.conversionCyclesRemaining=0}}class pw extends Ne{constructor(){super();D(this,"name","USART1");D(this,"baseAddress",1073821696);D(this,"txBuffer",[]);D(this,"rxBuffer",[]);D(this,"txOutput","");D(this,"txBitCounter",0);D(this,"baudDivider",1);const n=new M(0,192,{TXE:{bits:[7,7],desc:"Transmit data register empty"},TC:{bits:[6,6],desc:"Transmission complete"},RXNE:{bits:[5,5],desc:"Read data register not empty"}}),r=new M(4,0,{DR:{bits:[0,8],desc:"Data value (8-bit)"}}),i=new M(8,0,{DIV_Mantissa:{bits:[4,15],desc:"USARTDIV mantissa"},DIV_Fraction:{bits:[0,3],desc:"USARTDIV fraction"}}),l=new M(12,0,{UE:{bits:[13,13],desc:"USART enable"},TE:{bits:[3,3],desc:"Transmitter enable"},RE:{bits:[2,2],desc:"Receiver enable"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l)}write(n,r){if(n===4){const i=this.registers.get(12).read("UE"),l=this.registers.get(12).read("TE");if(!i||!l)return;const o=r&255;if(this.txBuffer.push(o),this.registers.get(0).write("TXE",0),this.registers.get(0).write("TC",0),this.txBitCounter===0){const a=this.registers.get(8).read()>>4&4095;this.baudDivider=Math.max(1,a),this.txBitCounter=10*this.baudDivider}return}super.write(n,r)}tick(){if(!this.registers.get(12).read("UE"))return;if(this.registers.get(12).read("TE")&&this.txBitCounter>0&&(this.txBitCounter--,this.txBitCounter===0)){if(this.txBuffer.length>0){const l=this.txBuffer.shift();this.txOutput+=String.fromCharCode(l),this.txBuffer.length>0&&(this.txBitCounter=10*this.baudDivider)}this.registers.get(0).write("TXE",1),this.registers.get(0).write("TC",1),this.emit("usart:tx",{byte:this.txOutput.charCodeAt(this.txOutput.length-1)})}if(this.registers.get(12).read("RE")&&this.rxBuffer.length>0&&!this.registers.get(0).read("RXNE")){const o=this.rxBuffer.shift();this.registers.get(4).write(o),this.registers.get(0).write("RXNE",1),this.emit("usart:rx",{byte:o})}}setRXString(n){for(const r of n)this.rxBuffer.push(r.charCodeAt(0))}getTXString(){return this.txOutput}read(n){if(n===4){if(!this.registers.get(12).read("RE"))return 0;this.registers.get(0).write("RXNE",0)}return super.read(n)}reset(){super.reset(),this.registers.get(0).write(192),this.txBuffer=[],this.rxBuffer=[],this.txOutput="",this.txBitCounter=0,this.baudDivider=1}}class hw extends Ne{constructor(){super();D(this,"name","SPI1");D(this,"baseAddress",1073819648);D(this,"txByte",null);D(this,"rxByte",0);D(this,"tickCounter",0);D(this,"clockDivider",2);D(this,"originalByte",0);const n=new M(0,0,{CPHA:{bits:[0,0],desc:"Clock phase"},CPOL:{bits:[1,1],desc:"Clock polarity"},MSTR:{bits:[2,2],desc:"Master selection"},BR:{bits:[3,5],desc:"Baud rate control"},SPE:{bits:[6,6],desc:"SPI enable"}}),r=new M(4,0,{SSOE:{bits:[2,2],desc:"SS output enable"},RXNEIE:{bits:[6,6],desc:"RX buffer not empty interrupt enable"},TXEIE:{bits:[7,7],desc:"TX buffer empty interrupt enable"}}),i=new M(8,2,{RXNE:{bits:[0,0],desc:"Receive buffer not empty"},TXE:{bits:[1,1],desc:"Transmit buffer empty"},BSY:{bits:[7,7],desc:"Busy flag"}}),l=new M(12,0,{DR:{bits:[0,15],desc:"Data register"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l)}write(n,r){if(n===12){const i=this.registers.get(0).read("SPE"),l=this.registers.get(0).read("MSTR");if(!i||!l)return;this.originalByte=r&255,this.txByte=r&255,this.rxByte=0,this.tickCounter=0;const o=this.registers.get(0).read("BR");this.clockDivider=1<<o+1,this.registers.get(8).write("TXE",0),this.registers.get(8).write("BSY",1);return}super.write(n,r)}tick(){this.registers.get(0).read("SPE")&&this.txByte!==null&&(this.tickCounter++,this.tickCounter>=8*this.clockDivider&&(this.registers.get(12).write(this.rxByte),this.registers.get(8).write({TXE:1,BSY:0,RXNE:1}),this.emit("spi:transfer",{sent:this.originalByte,received:this.rxByte}),this.txByte=null))}getReceivedByte(){return this.registers.get(12).read("DR")&255}getMode(){const n=this.registers.get(0).read("CPOL"),r=this.registers.get(0).read("CPHA");return`CPOL=${n} CPHA=${r}`}reset(){this.txByte=null,this.rxByte=0,this.tickCounter=0,this.clockDivider=2,this.originalByte=0,super.reset(),this.registers.get(8).write(2)}}class mw extends Ne{constructor(){super();D(this,"name","I2C1");D(this,"baseAddress",1073763328);D(this,"state","idle");D(this,"targetAddr",0);D(this,"isRead",!1);D(this,"tickCounter",0);D(this,"rxByte",0);const n=new M(0,0,{PE:{bits:[0,0],desc:"Peripheral enable"},START:{bits:[8,8],desc:"Generate start condition"},STOP:{bits:[9,9],desc:"Generate stop condition"},ACK:{bits:[10,10],desc:"Acknowledge enable"}}),r=new M(4,0,{FREQ:{bits:[0,5],desc:"Peripheral clock frequency (MHz)"}}),i=new M(20,0,{SB:{bits:[0,0],desc:"Start bit (master mode)"},ADDR:{bits:[1,1],desc:"Address sent"},BTF:{bits:[2,2],desc:"Byte transfer finished"},RXNE:{bits:[6,6],desc:"Receive buffer not empty"},TXE:{bits:[7,7],desc:"Transmit buffer empty"}}),l=new M(24,0,{MSL:{bits:[0,0],desc:"Master mode"},BUSY:{bits:[1,1],desc:"Bus busy"},TRA:{bits:[2,2],desc:"Transmitter/receiver (1=TX)"}}),o=new M(16,0,{DR:{bits:[0,7],desc:"8-bit data register"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(20,i),this.registers.set(24,l),this.registers.set(16,o)}write(n,r){if(n===0){const i=this.registers.get(0).read();super.write(0,r);const l=this.registers.get(0).read("PE"),o=r&256,s=r&512;l&&o&&!(i&256)&&(this.state="start",this.tickCounter=0,this.registers.get(24).write({MSL:1,BUSY:1}),this.registers.get(20).write("SB",1),this.emit("i2c:start",{})),l&&s&&(this.state="idle",this.tickCounter=0,this.registers.get(24).write({MSL:0,BUSY:0}),this.registers.get(0).write("STOP",0),this.emit("i2c:stop",{}));return}if(n===16){const i=this.registers.get(0).read("PE"),l=this.registers.get(24).read("MSL");if(!i||!l)return;const o=r&255;if(this.state==="start"){this.targetAddr=o>>1,this.isRead=!!(o&1),this.state="addressing",this.tickCounter=0;return}if(this.state==="tx"){super.write(16,o),this.registers.get(20).write("TXE",0),this.registers.get(20).write("BTF",0),this.tickCounter=0;return}return}super.write(n,r)}read(n){if(n===20){const r=super.read(20),i=this.registers.get(20);return r&1&&i.write("SB",0),r&2&&i.write("ADDR",0),r}if(n===24){const r=super.read(24),i=this.registers.get(20);return i.read("ADDR")&&i.write("ADDR",0),r}return n===16?(this.registers.get(20).write("RXNE",0),super.read(16)):super.read(n)}tick(){if(this.registers.get(0).read("PE")){if(this.tickCounter++,this.state==="addressing"&&this.tickCounter>=4&&(this.registers.get(20).write("ADDR",1),this.isRead?(this.registers.get(24).write("TRA",0),this.state="rx"):(this.registers.get(24).write("TRA",1),this.registers.get(20).write({TXE:1,BTF:1}),this.state="tx"),this.tickCounter=0),this.state==="tx"&&this.tickCounter>=4){const r=this.registers.get(16).read("DR");this.registers.get(20).write({TXE:1,BTF:1}),this.emit("i2c:tx",{addr:this.targetAddr,data:r}),this.tickCounter=0}if(this.state==="rx"){const r=this.registers.get(0).read("ACK"),i=this.registers.get(20).read("RXNE");r&&!i&&this.tickCounter>=2&&(this.rxByte=this.rxByte+1&255,this.registers.get(16).write(this.rxByte),this.registers.get(20).write("RXNE",1),this.emit("i2c:rx",{addr:this.targetAddr,data:this.rxByte}),this.tickCounter=0)}}}getState(){return this.state}getLastData(){return this.registers.get(16).read("DR")&255}reset(){this.state="idle",this.targetAddr=0,this.isRead=!1,this.tickCounter=0,this.rxByte=0,super.reset()}}class gw extends Ne{constructor(){super();D(this,"name","DMA1");D(this,"baseAddress",1073872896);D(this,"channels",[]);D(this,"tickCounters",new Array(7).fill(0));D(this,"initialCNDTR",new Array(7).fill(0));const n=new M(0,0,{}),r=new M(4,0,{});for(let i=0;i<7;i++)n.fields[`TCIF${i+1}`]={bits:[i*4,i*4],desc:`Channel ${i+1} Transfer Complete`},n.fields[`HTIF${i+1}`]={bits:[i*4+1,i*4+1],desc:`Channel ${i+1} Half Transfer`},n.fields[`TEIF${i+1}`]={bits:[i*4+2,i*4+2],desc:`Channel ${i+1} Transfer Error`},r.fields[`CTEIF${i+1}`]={bits:[i*4,i*4],desc:`Clear TC for CH${i+1}`};this.registers.set(0,n),this.registers.set(4,r);for(let i=0;i<7;i++){const l=8+i*20,o=12+i*20,s=16+i*20,a=20+i*20,u=new M(l,0,{EN:{bits:[0,0],desc:"Channel enable"},TCIE:{bits:[1,1],desc:"Transfer complete interrupt"},HTIE:{bits:[2,2],desc:"Half transfer interrupt"},TEIE:{bits:[3,3],desc:"Transfer error interrupt"},DIR:{bits:[4,4],desc:"Data transfer direction"},CIRC:{bits:[5,5],desc:"Circular mode"},PINC:{bits:[6,6],desc:"Peripheral increment"},MINC:{bits:[7,7],desc:"Memory increment"},PSIZE:{bits:[8,9],desc:"Peripheral size"},MSIZE:{bits:[10,11],desc:"Memory size"},PL:{bits:[12,13],desc:"Priority level"},MEM2MEM:{bits:[14,14],desc:"Memory to memory mode"}}),f=new M(o,0,{NDT:{bits:[0,15],desc:"Number of data to transfer"}}),d=new M(s,0,{}),p=new M(a,0,{});this.registers.set(l,u),this.registers.set(o,f),this.registers.set(s,d),this.registers.set(a,p),this.channels.push({ccr:u,cndtr:f,cpar:d,cmar:p})}}write(n,r){const i=this.channelForOffset(n);if(i!==null&&this.isChannelCCR(n)){const o=this.channels[i].ccr.read()&1;super.write(n,r);const s=r&1;!o&&s&&(this.initialCNDTR[i]=this.channels[i].cndtr.read("NDT"),this.tickCounters[i]=0);return}super.write(n,r)}read(n){return super.read(n)}tick(){for(let n=0;n<7;n++){if(!this.channels[n].ccr.read("EN")||(this.tickCounters[n]++,this.tickCounters[n]<4))continue;this.tickCounters[n]=0;const i=this.channels[n].cndtr.read("NDT");i<=1?(this.channels[n].cndtr.write("NDT",0),this.registers.get(0).write(`TCIF${n+1}`,1),this.emit("dma:tc",{channel:n+1}),this.channels[n].ccr.read("CIRC")?this.channels[n].cndtr.write("NDT",this.initialCNDTR[n]):this.channels[n].ccr.write("EN",0)):this.channels[n].cndtr.write("NDT",i-1)}}getChannelState(n){const r=this.channels[n].ccr,i=r.read("MEM2MEM")?"m2m":r.read("DIR")?"m2p":"p2m";return{channel:n+1,enabled:!!r.read("EN"),direction:i,circular:!!r.read("CIRC"),pinc:!!r.read("PINC"),minc:!!r.read("MINC"),psize:r.read("PSIZE"),msize:r.read("MSIZE"),remaining:this.channels[n].cndtr.read("NDT"),total:this.initialCNDTR[n],periphAddr:this.channels[n].cpar.read(),memAddr:this.channels[n].cmar.read()}}getAllChannelStates(){return Array.from({length:7},(n,r)=>this.getChannelState(r))}reset(){for(let n=0;n<7;n++)this.tickCounters[n]=0,this.initialCNDTR[n]=0;super.reset()}channelForOffset(n){const r=n-8;if(r<0||r%20!==0)return null;const i=r/20;return i<7?i:null}isChannelCCR(n){return this.channelForOffset(n)!==null&&(n-8)%20===0}}class Cw extends Ne{constructor(){super();D(this,"name","CAN1");D(this,"baseAddress",1073767424);D(this,"mode","sleep");D(this,"txMailboxes",[]);D(this,"rxFifo0",[]);D(this,"rxFifo1",[]);const n=new M(0,2,{INRQ:{bits:[0,0],desc:"Initialization request"},SLEEP:{bits:[1,1],desc:"Sleep mode request"},TXFP:{bits:[2,2],desc:"Transmit FIFO priority"},RFLM:{bits:[3,3],desc:"Receive FIFO locked mode"},NART:{bits:[4,4],desc:"No automatic retransmission"},AWUM:{bits:[5,5],desc:"Automatic wakeup mode"},ABOM:{bits:[6,6],desc:"Automatic bus-off management"},TTCM:{bits:[7,7],desc:"Time triggered communication mode"},RESET:{bits:[15,15],desc:"Software reset"},DBF:{bits:[16,16],desc:"Debug freeze"}}),r=new M(4,2,{INAK:{bits:[0,0],desc:"Initialization acknowledge"},SLAK:{bits:[1,1],desc:"Sleep acknowledge"},ERRI:{bits:[2,2],desc:"Error interrupt"},WKUI:{bits:[3,3],desc:"Wakeup interrupt"},TXM:{bits:[8,8],desc:"Transmit mode"},RXM:{bits:[9,9],desc:"Receive mode"},SAMP:{bits:[10,10],desc:"Last sample point (1=high)"}}),i=new M(8,469762048,{RQCP0:{bits:[0,0],desc:"Mailbox 0 request completed"},TXOK0:{bits:[1,1],desc:"Mailbox 0 transmission OK"},RQCP1:{bits:[8,8],desc:"Mailbox 1 request completed"},TXOK1:{bits:[9,9],desc:"Mailbox 1 transmission OK"},RQCP2:{bits:[16,16],desc:"Mailbox 2 request completed"},TXOK2:{bits:[17,17],desc:"Mailbox 2 transmission OK"},TME0:{bits:[26,26],desc:"Mailbox 0 empty"},TME1:{bits:[27,27],desc:"Mailbox 1 empty"},TME2:{bits:[28,28],desc:"Mailbox 2 empty"},CODE:{bits:[24,25],desc:"Mailbox code (0=pending,3=empty)"},LOW0:{bits:[2,3],desc:"Mailbox 0 lowest priority"}}),l=new M(12,0,{FMP0:{bits:[0,1],desc:"FIFO 0 messages pending"},FULL0:{bits:[3,3],desc:"FIFO 0 full"},FOVR0:{bits:[4,4],desc:"FIFO 0 overrun"},RFOM0:{bits:[5,5],desc:"Release FIFO 0 output mailbox"}}),o=new M(16,0,{FMP1:{bits:[0,1],desc:"FIFO 1 messages pending"},FULL1:{bits:[3,3],desc:"FIFO 1 full"},FOVR1:{bits:[4,4],desc:"FIFO 1 overrun"},RFOM1:{bits:[5,5],desc:"Release FIFO 1 output mailbox"}}),s=new M(20,0,{TMEIE:{bits:[0,0],desc:"Transmit mailbox empty interrupt enable"},FMPIE0:{bits:[1,1],desc:"FIFO 0 message pending interrupt enable"},FMPIE1:{bits:[2,2],desc:"FIFO 1 message pending interrupt enable"}}),a=new M(24,0,{EWGF:{bits:[0,0],desc:"Error warning flag"},EPVF:{bits:[1,1],desc:"Error passive flag"},BOFF:{bits:[2,2],desc:"Bus-off flag"},LEC:{bits:[4,6],desc:"Last error code"},TEC:{bits:[16,23],desc:"Transmit error counter"},REC:{bits:[24,31],desc:"Receive error counter"}}),u=new M(28,19070976,{BRP:{bits:[0,9],desc:"Baud rate prescaler"},TS1:{bits:[16,19],desc:"Time segment 1"},TS2:{bits:[20,22],desc:"Time segment 2"},SJW:{bits:[24,25],desc:"Resynchronization jump width"},LBKM:{bits:[30,30],desc:"Loop back mode"},SILM:{bits:[31,31],desc:"Silent mode"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l),this.registers.set(16,o),this.registers.set(20,s),this.registers.set(24,a),this.registers.set(28,u);for(let f=0;f<3;f++){const d=384+f*16,p=new M(d,0,{TXRQ:{bits:[0,0],desc:"Transmit mailbox request"},RTR:{bits:[1,1],desc:"Remote transmission request"},IDE:{bits:[2,2],desc:"Identifier extension"},EXID:{bits:[3,20],desc:"Extended identifier"},STID:{bits:[21,31],desc:"Standard identifier"}}),h=new M(d+4,0,{DLC:{bits:[0,3],desc:"Data length code"},TGT:{bits:[16,31],desc:"Transmit global time"}}),g=new M(d+8,0,{DATA0:{bits:[0,7],desc:"Data byte 0"},DATA1:{bits:[8,15],desc:"Data byte 1"},DATA2:{bits:[16,23],desc:"Data byte 2"},DATA3:{bits:[24,31],desc:"Data byte 3"}}),S=new M(d+12,0,{DATA4:{bits:[0,7],desc:"Data byte 4"},DATA5:{bits:[8,15],desc:"Data byte 5"},DATA6:{bits:[16,23],desc:"Data byte 6"},DATA7:{bits:[24,31],desc:"Data byte 7"}});this.registers.set(d,p),this.registers.set(d+4,h),this.registers.set(d+8,g),this.registers.set(d+12,S),this.txMailboxes.push({tir:p,tdtr:h,tdlr:g,tdhr:S,busy:!1})}}write(n,r){if(n===0){const l=this.registers.get(0).read("INRQ");super.write(0,r);const o=this.registers.get(0).read("INRQ");if(!l&&o?(this.mode="init",this.registers.get(4).write("INAK",1),this.registers.get(4).write("SLAK",0),this.emit("can:init",{})):l&&!o&&(this.mode="normal",this.registers.get(4).write("INAK",0),this.emit("can:normal",{})),r&32768){this.reset();return}return}if(n===12&&r&32){this.rxFifo0.shift(),this.updateRXFifoFlags(),this.emit("can:rxRelease",{fifo:0});return}if(n===16&&r&32){this.rxFifo1.shift(),this.updateRXFifoFlags(),this.emit("can:rxRelease",{fifo:1});return}const i=this.mailboxForOffset(n);if(i!==null&&n===i*16+384&&r&1){super.write(n,r),this.transmitMailbox(i);return}super.write(n,r)}read(n){return super.read(n)}tick(){}receiveMessage(n){if(this.mode==="normal"){if(this.rxFifo0.length>=3){this.registers.get(12).write("FOVR0",1);return}this.rxFifo0.push(n),this.updateRXFifoFlags(),this.emit("can:rx",{fifo:0,msg:n})}}transmitMailbox(n){const{tir:r,tdtr:i,tdlr:l,tdhr:o}=this.txMailboxes[n],s=!!r.read("IDE"),a=!!r.read("RTR"),u=i.read("DLC")&15,f=s?r.read("EXID"):r.read("STID"),d=[],p=l.read(),h=o.read();for(let v=0;v<Math.min(u,8);v++)v<4?d.push(p>>>v*8&255):d.push(h>>>(v-4)*8&255);const g={id:f,ide:s,rtr:a,dlc:u,data:d},S=this.registers.get(8);S.write(`RQCP${n}`,1),S.write(`TXOK${n}`,1),this.emit("can:tx",{mailbox:n,msg:g}),this.registers.get(28).read("LBKM")&&this.receiveMessage(g)}mailboxForOffset(n){if(n<384||n>=432)return null;const r=n-384,i=Math.floor(r/16);return i<3?i:null}updateRXFifoFlags(){const n=this.registers.get(12),r=this.registers.get(16);n.write("FMP0",this.rxFifo0.length&3),n.write("FULL0",this.rxFifo0.length>=3?1:0),r.write("FMP1",this.rxFifo1.length&3),r.write("FULL1",this.rxFifo1.length>=3?1:0)}getMode(){return this.mode}getBaudRate(){const n=this.registers.get(28),r=(n.read("BRP")||0)+1,i=(n.read("TS1")||0)+1,l=(n.read("TS2")||0)+1,o=i+l+1;return 36e6/(r*o)}getRXMessages(){return[...this.rxFifo0,...this.rxFifo1]}getTXMailboxStatus(){return this.txMailboxes.map((n,r)=>{const i=n.tir.read(),l=!!(this.registers.get(8).read()&1<<26+r*8),o=n.tdtr.read("DLC")&15,a=!!(i&4)?i>>>3&262143:i>>>21&2047,u=n.tdlr.read(),f=n.tdhr.read(),d=[];for(let p=0;p<Math.min(o,8);p++)p<4?d.push(u>>>p*8&255):d.push(f>>>(p-4)*8&255);return{mb:r,busy:!l,id:a,dlc:o,data:d}})}getBTRInfo(){const n=this.registers.get(28);return{brp:n.read("BRP")||0,ts1:n.read("TS1")||0,ts2:n.read("TS2")||0,sjw:n.read("SJW")||0,loopback:!!n.read("LBKM"),silent:!!n.read("SILM")}}reset(){this.mode="sleep",this.txMailboxes.forEach(n=>{n.busy=!1}),this.rxFifo0=[],this.rxFifo1=[],super.reset(),this.registers.get(0).write(2),this.registers.get(4).write(2),this.registers.get(8).write(469762048)}}class _w extends Tg{constructor(){super(1,1073818624);D(this,"breakActive",!1);D(this,"complementaryChannels",[{output:!1,enabled:!1},{output:!1,enabled:!1},{output:!1,enabled:!1},{output:!1,enabled:!1}]);this.name="TIM1";const n=new M(4,0,{CCPC:{bits:[0,0],desc:"Capture/compare preloaded control"},CCUS:{bits:[2,2],desc:"Capture/compare control update selection"},CCDS:{bits:[3,3],desc:"Capture/compare DMA selection"},MMS:{bits:[4,6],desc:"Master mode selection"},TI1S:{bits:[7,7],desc:"TI1 selection"},OIS1:{bits:[8,8],desc:"Output idle state 1"},OIS1N:{bits:[9,9],desc:"Output idle state 1 complementary"},OIS2:{bits:[10,10],desc:"Output idle state 2"},OIS2N:{bits:[11,11],desc:"Output idle state 2 complementary"},OIS3:{bits:[12,12],desc:"Output idle state 3"},OIS3N:{bits:[13,13],desc:"Output idle state 3 complementary"}});this.registers.set(4,n);const r=new M(48,0,{REP:{bits:[0,7],desc:"Repetition counter value"}});this.registers.set(48,r);const i=new M(68,0,{DTG:{bits:[0,7],desc:"Dead-time generator (DTG[7:0] * t_DTS)"},LOCK:{bits:[8,9],desc:"Lock configuration (0-3)"},OSSI:{bits:[10,10],desc:"Off-state selection for Idle mode"},OSSR:{bits:[11,11],desc:"Off-state selection for Run mode"},BKE:{bits:[12,12],desc:"Break enable"},BKP:{bits:[13,13],desc:"Break polarity (0=active low)"},AOE:{bits:[14,14],desc:"Automatic output enable"},MOE:{bits:[15,15],desc:"Main output enable"}});this.registers.set(68,i);const l=this.registers.get(32).fields;Object.assign(l,{CC1NE:{bits:[2,2],desc:"CC1 complementary output enable"},CC1NP:{bits:[3,3],desc:"CC1 complementary output polarity"},CC2NE:{bits:[6,6],desc:"CC2 complementary output enable"},CC2NP:{bits:[7,7],desc:"CC2 complementary output polarity"},CC3NE:{bits:[10,10],desc:"CC3 complementary output enable"},CC3NP:{bits:[11,11],desc:"CC3 complementary output polarity"}})}write(n,r){if(n===68){const i=this.registers.get(68),l=i.read("MOE"),o=i.read("BKE");super.write(68,r);const s=i.read("MOE");o&&!l&&s&&(this.breakActive=!1,this.emit("tim1:breakRecover",{}));return}if(n===16){const i=this.registers.get(16);i.write(i.read()&r);return}if(n===20){r&1&&(this.registers.get(36).write(0),this.registers.get(16).write({UIF:1}));return}super.write(n,r)}triggerBreak(){const n=this.registers.get(68);if(!n.read("BKE"))return;this.breakActive=!0,n.write("MOE",0);const r=this.registers.get(4);for(let i=0;i<3;i++)this.complementaryChannels[i].output=!!r.read(`OIS${i+1}N`);this.emit("tim1:break",{})}getBreakActive(){return this.breakActive}getDeadTimeNs(){const r=this.registers.get(68).read("DTG")&255,i=1e9/72e6;return r<128?Math.round(r*i):Math.round((64+(r-128))*i*2)}getAllChannelStates(){const n=this.registers.get(32),r=this.registers.get(68).read("MOE");return[1,2,3,4].map(i=>{const l=super.getChannelState(i),s=i-1<3&&!!n.read(`CC${i}NE`),a=!!n.read(`CC${i}E`);return{...l,enabled:a,complementaryOutput:r?!l.output:!1,complementaryEnabled:r?s:!1,deadTimeNs:this.getDeadTimeNs()}})}getBDTRInfo(){const n=this.registers.get(68);return{moe:!!n.read("MOE"),breakEnable:!!n.read("BKE"),breakActive:this.breakActive,deadTimeNs:this.getDeadTimeNs(),dtg:n.read("DTG")&255,aoe:!!n.read("AOE"),ossi:!!n.read("OSSI"),ossr:!!n.read("OSSR"),lock:n.read("LOCK")&3}}reset(){this.breakActive=!1,this.complementaryChannels.forEach(n=>{n.output=!1,n.enabled=!1}),super.reset()}}class Sw extends Ne{constructor(){super();D(this,"name","RTC");D(this,"baseAddress",1073752064);D(this,"prescalerCounter",0);D(this,"prescalerValue",32768);D(this,"configMode",!0);const n=new M(0,0,{SECIE:{bits:[0,0],desc:"Second interrupt enable"},ALRIE:{bits:[1,1],desc:"Alarm interrupt enable"},OWIE:{bits:[2,2],desc:"Overflow interrupt enable"}}),r=new M(4,0,{SECF:{bits:[0,0],desc:"Second flag"},ALRF:{bits:[1,1],desc:"Alarm flag"},OWF:{bits:[2,2],desc:"Overflow flag"},RSF:{bits:[3,3],desc:"Registers synchronized flag"},CNF:{bits:[4,4],desc:"Configuration flag"},RTOFF:{bits:[5,5],desc:"RTC operation OFF"}});r.write("CNF",1),r.write("RTOFF",0),r.write("RSF",0);const i=new M(8,0,{PRL:{bits:[0,3],desc:"Prescaler reload high bits [19:16]"}}),l=new M(12,32768,{PRL:{bits:[0,15],desc:"Prescaler reload low bits [15:0]"}}),o=new M(16,0,{DIV:{bits:[0,3],desc:"Divider high bits [19:16]"}}),s=new M(20,32768,{DIV:{bits:[0,15],desc:"Divider low bits [15:0]"}}),a=new M(24,0,{CNT:{bits:[0,3],desc:"Counter high bits [19:16]"}}),u=new M(28,0,{CNT:{bits:[0,15],desc:"Counter low bits [15:0]"}}),f=new M(32,65535,{ALR:{bits:[0,3],desc:"Alarm high bits [19:16]"}}),d=new M(36,65535,{ALR:{bits:[0,15],desc:"Alarm low bits [15:0]"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l),this.registers.set(16,o),this.registers.set(20,s),this.registers.set(24,a),this.registers.set(28,u),this.registers.set(32,f),this.registers.set(36,d),this.updateRTOFF()}write(n,r){if(n===4){const i=this.registers.get(4).read("CNF");super.write(4,r);const l=this.registers.get(4).read("CNF");if(!i&&l)this.configMode=!0,this.registers.get(4).write("RTOFF",0),this.registers.get(4).write("RSF",0);else if(i&&!l){this.configMode=!1,this.updateRTOFF(),this.registers.get(4).write("RSF",1);const o=this.read(8)&15,s=this.read(12)&65535;this.prescalerValue=o<<16|s,this.prescalerCounter=this.prescalerValue,this.setDIV(this.prescalerValue)}return}if(n>=8&&n<=36){if(!this.configMode)return;super.write(n,r);return}super.write(n,r)}tick(){if(this.configMode)return;if(this.prescalerCounter--,this.prescalerCounter>0){this.setDIV(this.prescalerCounter);return}this.prescalerCounter=this.prescalerValue,this.setDIV(this.prescalerCounter);const n=this.read(24)&15,r=this.read(28)&65535;let i=n<<16|r;i++;const l=this.read(8)&15,o=this.read(12)&65535,s=l<<16|o;i>s&&(i=0,this.registers.get(4).write("OWF",1),this.registers.get(0).read("OWIE")&&(this.emit("rtc:overflow",{counter:0}),this.emit("rtc:second",{})));const a=i&1048575;super.write(28,a&65535),super.write(24,a>>16&15)}getCounter(){const n=this.read(24)&15,r=this.read(28)&65535;return n<<16|r}getReload(){const n=this.read(8)&15,r=this.read(12)&65535;return n<<16|r}isConfigMode(){return this.configMode}getSeconds(){const n=this.getCounter(),r=this.getReload();return r===0?0:Math.floor(n/(r+1))}setDIV(n){super.write(20,n&65535),super.write(16,n>>16&15)}updateRTOFF(){this.registers.get(4).write("RTOFF",this.configMode?0:1)}reset(){this.configMode=!0,this.prescalerCounter=0,this.prescalerValue=32768,super.reset();const n=this.registers.get(4);n.write("CNF",1),n.write("RTOFF",0),n.write("RSF",0),this.registers.get(12).write(32768),this.registers.get(20).write(32768)}}const Mo=class Mo extends Ne{constructor(){super();D(this,"name","IWDG");D(this,"baseAddress",1073754112);D(this,"prescalerValue",4);D(this,"reloadValue",4095);D(this,"counter",4095);D(this,"started",!1);D(this,"unlockActive",!1);const n=new M(0,0,{}),r=new M(4,0,{PR:{bits:[0,2],desc:"Prescaler divider"}}),i=new M(8,4095,{RL:{bits:[0,11],desc:"Watchdog counter reload value"}}),l=new M(12,0,{PVU:{bits:[0,0],desc:"Prescaler value update"},RVU:{bits:[1,1],desc:"Reload value update"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l)}write(n,r){if(n===0){r===52428?(this.started=!0,this.counter=this.reloadValue):r===43690?this.started&&(this.counter=this.reloadValue):r===21845&&(this.unlockActive=!0);return}if(n===4){if(!this.unlockActive)return;super.write(4,r&7),this.prescalerValue=Mo.PRESCALER_DIV[r&7],this.unlockActive=!1,this.registers.get(12).write("PVU",1);return}if(n===8){if(!this.unlockActive)return;super.write(8,r&4095),this.reloadValue=r&4095,this.started&&(this.counter=this.reloadValue),this.unlockActive=!1,this.registers.get(12).write("RVU",1);return}super.write(n,r)}tick(){this.started&&(this.registers.get(12).write("PVU",0),this.registers.get(12).write("RVU",0),this.counter--,this.counter<=0&&(this.counter=0,this.emit("iwdg:reset",{})))}getCounter(){return this.counter}getPrescalerDiv(){return this.prescalerValue}isStarted(){return this.started}reset(){this.prescalerValue=4,this.reloadValue=4095,this.counter=4095,this.started=!1,this.unlockActive=!1,super.reset()}};D(Mo,"PRESCALER_DIV",[4,8,16,32,64,128,256,256]);let Bu=Mo;const Lo=class Lo extends Ne{constructor(){super();D(this,"name","WWDG");D(this,"baseAddress",1073753088);D(this,"counter",127);D(this,"windowValue",127);D(this,"prescalerExp",0);D(this,"started",!1);D(this,"tickCount",0);const n=new M(0,127,{T:{bits:[0,6],desc:"7-bit downcounter"},WDGA:{bits:[7,7],desc:"Activation bit"}}),r=new M(4,127,{W:{bits:[0,6],desc:"7-bit window value"},WDGTB:{bits:[7,8],desc:"Timer base (prescaler)"},EWI:{bits:[9,9],desc:"Early wakeup interrupt"}}),i=new M(8,0,{EWIF:{bits:[0,0],desc:"Early wakeup interrupt flag"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i)}write(n,r){if(n===0){super.write(0,r),r&128&&(this.started=!0,this.tickCount=0),this.counter=127,this.registers.get(0).write("T",this.counter);return}if(n===4){if(!this.started){super.write(4,r);const i=r>>7&3;this.prescalerExp=i,this.windowValue=r&127}return}if(n===8){r&1||super.write(8,0);return}super.write(n,r)}tick(){if(!this.started)return;const n=Lo.PRESCALER_MUL[this.prescalerExp];this.tickCount++,this.tickCount%n===0&&(this.counter--,this.registers.get(0).write("T",this.counter),this.counter===64&&(this.registers.get(8).write("EWIF",1),this.registers.get(4).read("EWI")&&this.emit("wwdg:early-wakeup",{counter:this.counter})),this.counter<=63&&(this.emit("wwdg:reset",{counter:this.counter}),this.counter=0))}getCounter(){return this.counter}getWindowValue(){return this.windowValue}getPrescaler(){return this.prescalerExp}isStarted(){return this.started}isRefreshAllowed(){return this.counter<this.windowValue&&this.counter>=64}reset(){this.counter=127,this.windowValue=127,this.prescalerExp=0,this.started=!1,this.tickCount=0,super.reset()}};D(Lo,"PRESCALER_MUL",[1,2,4,8]);let Fu=Lo;class yw extends Ne{constructor(){super();D(this,"name","PWR");D(this,"baseAddress",1073770496);D(this,"wufFlag",!1);D(this,"sbfFlag",!1);const n=new M(0,0,{LPDS:{bits:[0,0],desc:"Low-power deep sleep (0=Sleep,1=Stop)"},PDDS:{bits:[1,1],desc:"Power down deep sleep (0=Stop,1=Standby)"},CWUF:{bits:[2,2],desc:"Clear wakeup flag"},CSBF:{bits:[3,3],desc:"Clear standby flag"},PVDE:{bits:[4,4],desc:"PVD enable"},PLS:{bits:[5,7],desc:"PVD level selection"},DBP:{bits:[8,8],desc:"Disable backup domain write protection"}}),r=new M(4,0,{WUF:{bits:[0,0],desc:"Wakeup flag"},SBF:{bits:[1,1],desc:"Standby flag"},PVDO:{bits:[2,2],desc:"PVD output"},EWUP:{bits:[8,8],desc:"Enable WKUP pin"}});this.registers.set(0,n),this.registers.set(4,r)}write(n,r){n===0&&(r&4&&(this.wufFlag=!1),r&8&&(this.sbfFlag=!1)),super.write(n,r)}read(n){if(n===4){let r=super.read(n);this.wufFlag?r|=1:r&=-2,this.sbfFlag?r|=2:r&=-3;const i=this.read(0);if(i&16){const l=i>>5&7;3300>[2200,2300,2400,2500,2600,2700,2800,2900][l]?r&=-5:r|=4}return r}return super.read(n)}triggerWakeup(){this.wufFlag=!0,this.sbfFlag=!1}enterStandby(){this.sbfFlag=!0,this.wufFlag=!1}getMode(){const n=this.read(0),r=!!(n&1),i=!!(n&2);return r?i?"standby":"stop":"sleep"}isDBPEnabled(){return!!(this.read(0)&256)}tick(){}reset(){super.reset(),this.wufFlag=!1,this.sbfFlag=!1}}class vw extends Ne{constructor(){super();D(this,"name","RTOS");D(this,"baseAddress",3758153728);D(this,"tickCount",0);D(this,"tasks",[]);D(this,"nextTaskId",1);D(this,"currentTaskId",0);D(this,"schedulerStarted",!1);D(this,"queues",[]);D(this,"semaphores",[]);D(this,"nextQueueId",1);D(this,"nextSemId",1);const n=new M(0,0,{VECTACTIVE:{bits:[0,8],desc:"Active vector"},PENDSVSET:{bits:[28,28],desc:"PendSV set"}});this.registers.set(0,n)}write(n,r){n===0&&r&1<<28&&this.switchContext(),super.write(n,r)}tick(){this.tickCount++;for(const n of this.tasks)n.state==="blocked"&&this.tickCount>=n.blockedUntil&&(n.state="ready");this.schedulerStarted&&this.selectRunningTask()}createTask(n,r){const i=this.nextTaskId++;return this.tasks.push({id:i,name:n,priority:r,state:"ready",blockedUntil:0,entry:n}),this.schedulerStarted&&this.selectRunningTask(),i}startScheduler(){this.schedulerStarted=!0,this.selectRunningTask()}taskDelay(n){const r=this.tasks.find(i=>i.id===this.currentTaskId);r&&(r.state="blocked",r.blockedUntil=this.tickCount+n),this.selectRunningTask()}taskSuspend(n){const r=this.tasks.find(i=>i.id===n);r&&r.state!=="suspended"&&(r.state="suspended"),this.currentTaskId===n&&this.selectRunningTask()}taskResume(n){const r=this.tasks.find(i=>i.id===n);r&&r.state==="suspended"&&(r.state="ready",this.selectRunningTask())}createQueue(n,r,i){const l=this.nextQueueId++;return this.queues.push({id:l,name:n,length:r,itemSize:i,items:[],waitingTasks:[]}),l}queueSend(n,r,i){const l=this.queues.find(o=>o.id===n);if(!l)return!1;if(l.items.length>=l.length){if(i===0)return!1;const o=this.tasks.find(s=>s.id===this.currentTaskId);return o&&i>0&&(o.state="blocked",o.blockedUntil=this.tickCount+i,l.waitingTasks.push(o.id),this.selectRunningTask()),!1}return l.items.push(r&255),this.unblockWaitingReceiveTasks(l),!0}queueReceive(n,r){const i=this.queues.find(o=>o.id===n);if(!i)return null;if(i.items.length===0){if(r===0)return null;const o=this.tasks.find(s=>s.id===this.currentTaskId);return o&&r>0&&(o.state="blocked",o.blockedUntil=this.tickCount+r,i.waitingTasks.push(o.id),this.selectRunningTask()),null}const l=i.items.shift();return this.unblockWaitingSendTasks(i),l}createSemaphore(n,r,i){const l=this.nextSemId++;return this.semaphores.push({id:l,name:n,count:i,maxCount:r,waitingTasks:[]}),l}semaphoreTake(n,r){const i=this.semaphores.find(l=>l.id===n);if(!i)return!1;if(i.count===0){if(r===0)return!1;const l=this.tasks.find(o=>o.id===this.currentTaskId);return l&&r>0&&(l.state="blocked",l.blockedUntil=this.tickCount+r,i.waitingTasks.push(l.id),this.selectRunningTask()),!1}return i.count--,!0}semaphoreGive(n){const r=this.semaphores.find(i=>i.id===n);if(r&&(r.count<r.maxCount&&r.count++,r.waitingTasks.length>0)){const i=r.waitingTasks.shift(),l=this.tasks.find(o=>o.id===i);l&&l.state==="blocked"&&(l.state="ready"),this.selectRunningTask()}}selectRunningTask(){const n=this.tasks.filter(r=>r.state==="ready"||r.state==="running").sort((r,i)=>r.priority-i.priority);if(n.length>0){this.currentTaskId=n[0].id,n[0].state="running";for(const r of this.tasks)r.id!==n[0].id&&r.state==="running"&&(r.state="ready")}else this.currentTaskId=0}switchContext(){this.selectRunningTask()}unblockWaitingReceiveTasks(n){if(n.waitingTasks.length>0){const r=n.waitingTasks.shift(),i=this.tasks.find(l=>l.id===r);i&&i.state==="blocked"&&(i.state="ready")}}unblockWaitingSendTasks(n){if(n.waitingTasks.length>0){const r=n.waitingTasks.shift(),i=this.tasks.find(l=>l.id===r);i&&i.state==="blocked"&&(i.state="ready")}}getTickCount(){return this.tickCount}getCurrentTaskId(){return this.currentTaskId}getTasks(){return this.tasks}getQueues(){return this.queues}getSemaphores(){return this.semaphores}isSchedulerStarted(){return this.schedulerStarted}reset(){super.reset(),this.tickCount=0,this.tasks=[],this.nextTaskId=1,this.currentTaskId=0,this.schedulerStarted=!1,this.queues=[],this.semaphores=[],this.nextQueueId=1,this.nextSemId=1}}class xw extends Ne{constructor(){super();D(this,"name","FATFS");D(this,"baseAddress",1342177280);D(this,"mounted",!1);D(this,"files",[]);D(this,"openFile",null);D(this,"resultCode",0);D(this,"operationLog",[]);this.files.push({name:"test.txt",size:0,content:[]}),this.files.push({name:"data.bin",size:0,content:[]})}f_mount(){return this.mounted=!0,this.operationLog.push("f_mount: OK"),0}f_open(n,r){if(!this.mounted)return this.operationLog.push(`f_open(${n}): FR_NOT_READY`),3;const i=r&1?"w":"r";let l=this.files.find(o=>o.name===n);if(!l)if(i==="w")l={name:n,size:0,content:[]},this.files.push(l);else return this.operationLog.push(`f_open(${n}): FR_NO_FILE`),4;return i==="w"&&(l.content=[],l.size=0),this.openFile={name:n,cursor:0,mode:i},this.operationLog.push(`f_open(${n}, ${i}): OK`),0}f_read(n){if(!this.openFile||this.openFile.mode!=="r")return this.operationLog.push("f_read: FR_INVALID_OBJECT"),{result:9,data:[]};const r=this.files.find(o=>o.name===this.openFile.name);if(!r)return this.operationLog.push("f_read: FR_NO_FILE"),{result:4,data:[]};const i=Math.min(n,r.content.length-this.openFile.cursor),l=r.content.slice(this.openFile.cursor,this.openFile.cursor+i);return this.openFile.cursor+=i,this.operationLog.push(`f_read(${n}): ${i} bytes`),{result:0,data:l}}f_write(n){if(!this.openFile||this.openFile.mode!=="w")return this.operationLog.push("f_write: FR_INVALID_OBJECT"),{result:9,bytesWritten:0};const r=this.files.find(i=>i.name===this.openFile.name);return r?(r.content.push(...n),r.size=r.content.length,this.openFile.cursor=r.size,this.operationLog.push(`f_write(${n.length}): OK`),{result:0,bytesWritten:n.length}):(this.operationLog.push("f_write: FR_NO_FILE"),{result:4,bytesWritten:0})}f_close(){return this.openFile?(this.operationLog.push(`f_close(${this.openFile.name}): OK`),this.openFile=null,0):(this.operationLog.push("f_close: FR_INVALID_OBJECT"),9)}f_readdir(){return this.files.map(n=>`${n.name} (${n.size} bytes)`)}isMounted(){return this.mounted}getResultCode(){return this.resultCode}getOperationLog(){return this.operationLog}getOpenFilePath(){var n;return((n=this.openFile)==null?void 0:n.name)??null}getOpenFileCursor(){var n;return((n=this.openFile)==null?void 0:n.cursor)??0}getFiles(){return this.files.map(n=>({name:n.name,size:n.size}))}tick(){}reset(){super.reset(),this.mounted=!1,this.files=[{name:"test.txt",size:0,content:[]},{name:"data.bin",size:0,content:[]}],this.openFile=null,this.resultCode=0,this.operationLog=[]}}class Rw{constructor(){D(this,"peripherals",new Map);D(this,"steps",0);this.registerPeripheral(new aw),this.registerPeripheral(new uw),this.registerPeripheral(new cw),this.registerPeripheral(new Tg(2,1073741824)),this.registerPeripheral(new dw),this.registerPeripheral(new fw),this.registerPeripheral(new pw),this.registerPeripheral(new hw),this.registerPeripheral(new mw),this.registerPeripheral(new gw),this.registerPeripheral(new Cw),this.registerPeripheral(new _w),this.registerPeripheral(new Sw),this.registerPeripheral(new Bu),this.registerPeripheral(new Fu),this.registerPeripheral(new yw),this.registerPeripheral(new vw),this.registerPeripheral(new xw),this.registerPeripheral(new ia("A",1073809408)),this.registerPeripheral(new ia("B",1073810432)),this.registerPeripheral(new ia("C",1073811456))}registerPeripheral(t){this.peripherals.set(t.name,t)}getPeripheral(t){return this.peripherals.get(t)}read(t,n){const r=this.peripherals.get(t);if(!r)throw new Error(`Unknown peripheral: ${t}`);return r.read(n)}write(t,n,r){const i=this.peripherals.get(t);if(!i)throw new Error(`Unknown peripheral: ${t}`);i.write(n,r),Zl.emit("engine:write",{peripheral:t,offset:n,value:r})}tick(){this.steps++,this.peripherals.forEach(t=>t.tick()),Zl.emit("engine:tick",{steps:this.steps})}reset(){this.steps=0,this.peripherals.forEach(t=>t.reset()),Zl.emit("engine:reset",{})}getState(){const t={};return this.peripherals.forEach((n,r)=>{const i={};n.registers.forEach((l,o)=>{i[o]=l.read()}),t[r]={registers:i}}),{steps:this.steps,peripherals:t}}}const q=new Rw,Iw={HAL_GPIO_WritePin:{peripheral:"GPIO",fn:e=>{e[0];const t=e[1];return{offset:12,value:e[2]?1<<t:0}}},HAL_GPIO_TogglePin:{peripheral:"GPIO",fn:e=>({offset:16,value:1<<e[1]})},HAL_RCC_OscConfig:{peripheral:"RCC",fn:e=>({offset:0,value:16777216})},HAL_RCC_ClockConfig:{peripheral:"RCC",fn:e=>({offset:4,value:1901570})},HAL_SYSTICK_Config:{peripheral:"SysTick",fn:e=>({offset:4,value:e[0]-1&16777215})},HAL_RTC_Init:{peripheral:"RTC",fn:e=>(e[0],{offset:4,value:16})},HAL_DAC_SetValue:{peripheral:"DAC",fn:e=>(e[0],e[1],e[2],{offset:8,value:e[3]&4095})},HAL_ADC_Start:{peripheral:"ADC1",fn:e=>({offset:8,value:1|1<<22})},HAL_UART_Transmit:{peripheral:"USART1",fn:e=>(e[0],e[1],e[2],{offset:4,value:e[3]&255})},HAL_SPI_Transmit:{peripheral:"SPI1",fn:e=>(e[0],e[1],e[2],{offset:12,value:e[3]&255})},HAL_I2C_Master_Transmit:{peripheral:"I2C1",fn:e=>{e[0];const t=e[1];e[2];const n=e[3];return e[4],[{offset:0,value:257},{offset:16,value:t<<1&254},{offset:16,value:n&255},{offset:0,value:513}]}},HAL_DMA_Start:{peripheral:"DMA1",fn:e=>{e[0];const t=e[1],n=e[2],r=e[3];return[{offset:8,value:161},{offset:12,value:r&65535},{offset:16,value:t&4294967295},{offset:20,value:n&4294967295}]}},HAL_CAN_Start:{peripheral:"CAN1",fn:e=>[{offset:0,value:1},{offset:0,value:0}]},HAL_TIM_PWM_Start:{peripheral:"TIM1",fn:e=>[{offset:68,value:32768},{offset:0,value:1}]},HAL_TIMEx_PWMN_Start:{peripheral:"TIM1",fn:e=>[{offset:68,value:32768},{offset:32,value:5},{offset:0,value:1}]},HAL_IWDG_Init:{peripheral:"IWDG",fn:e=>(e[0],{offset:0,value:21845})},HAL_WWDG_Init:{peripheral:"WWDG",fn:e=>(e[0],{offset:0,value:255})}};function oi(e){const t={1:"GPIOA",2:"GPIOB",3:"GPIOC",4:"GPIOD",5:"GPIOE",6:"GPIOF",7:"GPIOG"},n=e[0];return(n>=1073809408&&n<1073815552?String.fromCharCode(65+Math.floor((n-1073809408)/1024)):t[n])??"GPIOA"}const ju={RCC_APB2PeriphClockCmd:{peripheral:"RCC",fn:e=>{const t=e[0];return[{offset:24,value:e[1]?t:0}]}},RCC_APB1PeriphClockCmd:{peripheral:"RCC",fn:e=>{const t=e[0];return[{offset:28,value:e[1]?t:0}]}},RCC_HSEConfig:{peripheral:"RCC",fn:e=>[{offset:0,value:e[0]}]},RCC_PLLConfig:{peripheral:"RCC",fn:e=>{const t=e[0],n=e[1];return[{offset:4,value:t|n<<18}]}},RCC_PLLCmd:{peripheral:"RCC",fn:e=>[{offset:0,value:e[0]?1<<24:0}]},RCC_SYSCLKConfig:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]}]},RCC_HCLKConfig:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]}]},RCC_PCLK1Config:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]}]},RCC_PCLK2Config:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]}]},RCC_ADCCLKConfig:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]<<14}]},GPIO_Init:{peripheral:"GPIO",fn:e=>{const t=oi(e),n=e[1],r=e[2],i=e[3],l=[],o=n&65280?4:0,s=n&65280?(n>>8&15)*4:(n&15)*4,a=(r|i)<<s;return l.push({offset:o,value:a}),l.push({peripheral:t,offset:o,value:a}),l}},GPIO_SetBits:{peripheral:"GPIO",fn:e=>{const t=oi(e),n=e[1];return[{peripheral:t,offset:16,value:n}]}},GPIO_ResetBits:{peripheral:"GPIO",fn:e=>{const t=oi(e),n=e[1];return[{peripheral:t,offset:20,value:n}]}},GPIO_WriteBit:{peripheral:"GPIO",fn:e=>{const t=oi(e),n=e[1];return e[2]?[{peripheral:t,offset:16,value:n}]:[{peripheral:t,offset:20,value:n}]}},GPIO_Write:{peripheral:"GPIO",fn:e=>{const t=oi(e),n=e[1];return[{peripheral:t,offset:12,value:n}]}},GPIO_ReadInputDataBit:{peripheral:"GPIO",fn:e=>[{offset:8,value:0}]},NVIC_PriorityGroupConfig:{peripheral:"NVIC",fn:e=>[{offset:0,value:100270080|e[0]}]},NVIC_Init:{peripheral:"NVIC",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:t*4+256,value:(n&15)<<4|r&15}]}},SysTick_CLKSourceConfig:{peripheral:"SysTick",fn:e=>[{offset:0,value:e[0]}]},SysTick_SetReload:{peripheral:"SysTick",fn:e=>[{offset:4,value:e[0]&16777215}]},SysTick_CounterCmd:{peripheral:"SysTick",fn:e=>[{offset:0,value:e[0]}]},SysTick_ITConfig:{peripheral:"SysTick",fn:e=>[{offset:0,value:e[0]?2:0}]},TIM_TimeBaseInit:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3];return[{offset:44,value:t&65535},{offset:40,value:n&65535},{offset:0,value:128|r<<4|i}]}},TIM_Cmd:{peripheral:"TIM2",fn:e=>[{offset:0,value:e[0]?1:0}]},TIM_OC1Init:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2],i=t<<4|8,l=n|r;return[{offset:24,value:i},{offset:32,value:l}]}},TIM_OC2Init:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:24,value:t<<12|2048},{offset:32,value:n<<4|r<<4}]}},TIM_OC3Init:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:28,value:t<<4|8},{offset:32,value:n<<8|r<<8}]}},TIM_OC4Init:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:28,value:t<<12|2048},{offset:32,value:n<<12|r<<12}]}},TIM_ITConfig:{peripheral:"TIM2",fn:e=>{const t=e[0];return[{offset:12,value:e[1]?t:0}]}},USART_Init:{peripheral:"USART1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],o=e[5],s=72e6/t&65535,a=n|i|8192;return[{offset:8,value:s},{offset:12,value:a},{offset:16,value:r},{offset:20,value:o},{offset:12,value:a|l&12}]}},USART_Cmd:{peripheral:"USART1",fn:e=>[{offset:12,value:e[0]?8192:0}]},USART_SendData:{peripheral:"USART1",fn:e=>[{offset:4,value:e[0]&255}]},USART_ReceiveData:{peripheral:"USART1",fn:e=>[{offset:4,value:0}]},USART_ITConfig:{peripheral:"USART1",fn:e=>{const t=e[0];return[{offset:12,value:e[1]?t:0}]}},ADC_Init:{peripheral:"ADC1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],o=t|(n?256:0),s=(r?2:0)|i|l&15;return[{offset:4,value:o},{offset:8,value:s}]}},ADC_Cmd:{peripheral:"ADC1",fn:e=>[{offset:8,value:e[0]?1:0}]},ADC_SoftwareStartConvCmd:{peripheral:"ADC1",fn:e=>[{offset:8,value:e[0]?1<<22:0}]},ADC_GetConversionValue:{peripheral:"ADC1",fn:e=>[{offset:76,value:0}]},DAC_Init:{peripheral:"DAC",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=t===1?44:20,o=n|r|(i?0:2);return[{offset:l,value:o}]}},DAC_Cmd:{peripheral:"DAC",fn:e=>{const t=e[0];return[{offset:0,value:e[1]?t===1?1:65536:0}]}},DAC_SetChannel1Data:{peripheral:"DAC",fn:e=>{const t=e[0],n=e[1];return[{offset:t===8||t===4?8:44,value:n&4095}]}},DAC_SetChannel2Data:{peripheral:"DAC",fn:e=>{const t=e[0],n=e[1];return[{offset:t===8||t===4?20:56,value:n&4095}]}},SPI_Init:{peripheral:"SPI1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],o=e[5],s=e[6],a=e[7];return[{offset:0,value:t|n|r|i|l|o|s|a}]}},SPI_Cmd:{peripheral:"SPI1",fn:e=>[{offset:0,value:e[0]?64:0}]},SPI_I2S_SendData:{peripheral:"SPI1",fn:e=>[{offset:12,value:e[0]&65535}]},SPI_I2S_ReceiveData:{peripheral:"SPI1",fn:e=>[{offset:12,value:0}]},I2C_Init:{peripheral:"I2C1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3];e[4];const l=e[5],o=36,s=o*5e6/l&4095;return[{offset:0,value:32768},{offset:8,value:r&1023},{offset:4,value:i?1024:0},{offset:12,value:s|n},{offset:28,value:o},{offset:32,value:80},{offset:0,value:t|32768},{offset:4,value:i?1024:0}]}},I2C_Cmd:{peripheral:"I2C1",fn:e=>[{offset:0,value:e[0]?1:0}]},I2C_SendData:{peripheral:"I2C1",fn:e=>[{offset:16,value:e[0]&255}]},I2C_AcknowledgeConfig:{peripheral:"I2C1",fn:e=>[{offset:4,value:e[0]?1024:0}]},DMA_Init:{peripheral:"DMA1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],o=e[5],s=e[6],a=e[7],u=e[8],f=8+(t-1)*20;return[{offset:0,value:0},{offset:f,value:n|r|i|l|o|s|a|u}]}},DMA_Cmd:{peripheral:"DMA1",fn:e=>{const t=e[0],n=e[1];return[{offset:8+(t-1)*20,value:n?1:0}]}},DMA_ITConfig:{peripheral:"DMA1",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:8+(t-1)*20,value:r?n:0}]}},CAN_Init:{peripheral:"CAN1",fn:e=>{const t=e[0],n=e[1];return[{offset:0,value:1},{offset:0,value:0},{offset:28,value:n|t}]}},CAN_Cmd:{peripheral:"CAN1",fn:e=>[{offset:0,value:e[0]?0:1}]},CAN_Transmit:{peripheral:"CAN1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3];return[{offset:388,value:n&15},{offset:392,value:r&4294967295},{offset:396,value:i&4294967295},{offset:384,value:t<<21|1}]}},CAN_Receive:{peripheral:"CAN1",fn:e=>[{offset:464,value:0}]},RTC_Init:{peripheral:"RTC",fn:e=>[{offset:4,value:16}]},RTC_SetCounter:{peripheral:"RTC",fn:e=>{const t=e[0];return[{offset:24,value:t>>16&65535},{offset:28,value:t&65535}]}},RTC_GetCounter:{peripheral:"RTC",fn:e=>[{offset:24,value:0}]},IWDG_WriteAccessCmd:{peripheral:"IWDG",fn:e=>[{offset:0,value:e[0]}]},IWDG_SetPrescaler:{peripheral:"IWDG",fn:e=>[{offset:4,value:e[0]&7}]},IWDG_SetReload:{peripheral:"IWDG",fn:e=>[{offset:8,value:e[0]&4095}]},IWDG_ReloadCounter:{peripheral:"IWDG",fn:e=>[{offset:0,value:43690}]},IWDG_Enable:{peripheral:"IWDG",fn:e=>[{offset:0,value:52428}]},WWDG_SetPrescaler:{peripheral:"WWDG",fn:e=>[{offset:4,value:e[0]&3}]},WWDG_SetWindowValue:{peripheral:"WWDG",fn:e=>[{offset:4,value:(e[0]&127)<<8}]},WWDG_Enable:{peripheral:"WWDG",fn:e=>[{offset:0,value:128|e[0]&127}]},WWDG_SetCounter:{peripheral:"WWDG",fn:e=>[{offset:0,value:e[0]&127}]},PWR_EnterSTOPMode:{peripheral:"PWR",fn:e=>{const t=e[0];return e[1],[{offset:0,value:1|t<<1},{offset:0,value:0}]}},PWR_EnterSTANDBYMode:{peripheral:"PWR",fn:e=>[{offset:0,value:6},{offset:0,value:0}]},PWR_WakeUpPinCmd:{peripheral:"PWR",fn:e=>[{offset:4,value:e[0]?256:0}]}};function kg(e){return e=e.trim(),e.startsWith("0x")||e.startsWith("0X")?parseInt(e,16):parseInt(e,10)}function Pw(e){const t=e.match(/^(\w+)\s*->\s*(\w+)\s*([|&^]?)=\s*(.+);\s*$/);if(t){const n=t[1],r=t[2];t[3];const i=t[4].trim(),l=n,o=Tw(r),s=kw(i);return{type:"write",peripheral:l,offset:o,value:s,line:0,source:e}}return null}function Aw(e){const t=e.match(/^(\w+)\s*\((.+)\);\s*$/);if(!t)return null;const n=t[1],r=t[2];if(n==="HAL_Delay"||n==="delay_ms"){const s=parseInt(r.trim(),10);return isNaN(s)?null:{type:"delay",ms:s,line:0,source:e}}const i=sr(r),l=ju[n];if(l){const s=l.fn(i);if(s.length===0)return null;const a=s[0];return{type:"write",peripheral:a.peripheral??l.peripheral,offset:a.offset,value:a.value,line:0,source:e,_splResults:s.length>1?s:void 0}}const o=Iw[n];if(o){const s=o.fn(i);return Array.isArray(s)?{type:"write",peripheral:o.peripheral,offset:s[0].offset,value:s[0].value,line:0,source:e,_halResults:s.length>1?s:void 0}:{type:"write",peripheral:o.peripheral,offset:s.offset,value:s.value,line:0,source:e}}return null}function sr(e){const t=[];let n=0,r="";for(const i of e)i==="("?(n++,r+=i):i===")"?(n--,r+=i):i===","&&n===0?(t.push(r.trim()),r=""):r+=i;return r.trim()&&t.push(r.trim()),t.map(i=>{const l=i.trim();return l==="GPIOA"?1:l==="GPIOB"?2:l==="GPIOC"?3:l==="GPIOD"?4:l==="GPIOE"?5:l==="GPIOF"?6:l==="GPIOG"?7:l==="ADC1"?1:l==="ADC2"?2:l==="ADC3"?3:l==="TIM1"?1:l==="TIM2"?2:l==="TIM3"?3:l==="TIM4"?4:l==="USART1"?1:l==="USART2"?2:l==="USART3"?3:l==="UART4"?4:l==="SPI1"?1:l==="SPI2"?2:l==="SPI3"?3:l==="I2C1"?1:l==="I2C2"?2:l==="DMA1"?1:l==="DMA2"?2:l==="DMA1_Channel1"?1:l==="DMA1_Channel2"?2:l==="DMA1_Channel3"?3:l==="DMA1_Channel4"?4:l==="DMA1_Channel5"?5:l==="DMA1_Channel6"?6:l==="DMA1_Channel7"?7:l==="GPIO_PIN_SET"?1:l==="GPIO_PIN_RESET"||l==="GPIO_PIN_0"?0:l==="GPIO_PIN_1"?1:kg(l)})}function Tw(e){return{CRL:0,CRH:4,IDR:8,ODR:12,BSRR:16,BRR:20,"RCC->CR":0,"RCC->CFGR":4,"RCC->APB2ENR":24,"RCC->APB1ENR":28,CR:0,CFGR:4,APB2ENR:24,APB1ENR:28,"SysTick->CTRL":0,"SysTick->LOAD":4,"SysTick->VAL":8,CTRL:0,LOAD:4,CR1:0,CR2:4,SMCR:8,DIER:12,SR:16,EGR:20,CNT:36,PSC:40,ARR:44,CCMR1:24,CCMR2:28,CCER:32,CCR1:52,CCR2:56,CCR3:60,CCR4:64,SR_ADC:0,CR1_ADC:4,CR2_ADC:8,DR:76,"ADC1->SR":0,"ADC1->CR1":4,"ADC1->CR2":8,"ADC1->DR":76,"DAC->CR":0,"DAC->DHR12R1":8,"DAC->DOR1":44,DHR12R1:8,DOR1:44,"USART1->SR":0,"USART1->DR":4,"USART1->BRR":8,"USART1->CR1":12,"SPI1->CR1":0,"SPI1->CR2":4,"SPI1->SR":8,"SPI1->DR":12,SR_SPI:8,DR_SPI:12,"I2C1->CR1":0,"I2C1->CR2":4,"I2C1->DR":16,"I2C1->SR1":20,"I2C1->SR2":24,"DMA1->ISR":0,"DMA1->IFCR":4,"DMA1_Channel1->CCR":8,"DMA1_Channel2->CCR":28,"DMA1_Channel3->CCR":48,"DMA1_Channel4->CCR":68,"DMA1_Channel5->CCR":88,"DMA1_Channel6->CCR":108,"DMA1_Channel7->CCR":128,"CAN1->MCR":0,"CAN1->MSR":4,"CAN1->TSR":8,"CAN1->RF0R":12,"CAN1->RF1R":16,"CAN1->IER":20,"CAN1->ESR":24,"CAN1->BTR":28,"CAN1->sTxMailBox[0].TIR":384,"CAN1->sTxMailBox[0].TDTR":388,"CAN1->sTxMailBox[0].TDLR":392,"CAN1->sTxMailBox[0].TDHR":396,"TIM1->CR1":0,"TIM1->CR2":4,"TIM1->DIER":12,"TIM1->SR":16,"TIM1->EGR":20,"TIM1->CCMR1":24,"TIM1->CCMR2":28,"TIM1->CCER":32,"TIM1->CNT":36,"TIM1->PSC":40,"TIM1->ARR":44,"TIM1->RCR":48,"TIM1->CCR1":52,"TIM1->CCR2":56,"TIM1->CCR3":60,"TIM1->CCR4":64,"TIM1->BDTR":68,"RTC->CRH":0,"RTC->CRL":4,"RTC->PRLH":8,"RTC->PRLL":12,"RTC->DIVH":16,"RTC->DIVL":20,"RTC->CNTH":24,"RTC->CNTL":28,"RTC->ALRH":32,"RTC->ALRL":36,"IWDG->KR":0,"IWDG->PR":4,"IWDG->RLR":8,"IWDG->SR":12,"WWDG->CR":0,"WWDG->CFR":4,"WWDG->SR":8,"PWR->CR":0,"PWR->CSR":4}[e]??0}function kw(e){e=e.trim();const t=e.match(/^(\w+)\s*&=\s*~\((.+)\)$/);if(t)return t[2],0;const n=e.match(/^(\w+)\s*\|=\s*\(?(.+)\)?$/);if(n)return Ge(n[2]),0;const r=e.match(/^(\w+)\s*\^=\s*\(?(.+)\)?$/);return r?(Ge(r[2]),0):Ge(e)}function Ge(e){if(e=e.trim(),e.startsWith("(")&&e.endsWith(")")){const o=e.slice(1,-1);let s=0,a=!0;for(const u of o)if(u==="("&&s++,u===")"&&s--,s<0){a=!1;break}if(a&&s===0)return Ge(o)}const t=e.match(/^(.+)\s*<<\s*(.+)$/);if(t){const o=Ge(t[1]),s=Ge(t[2]);return o<<s>>>0}const n=e.match(/^(.+)\s*>>\s*(.+)$/);if(n){const o=Ge(n[1]),s=Ge(n[2]);return o>>>s}const r=e.match(/^(.+)\s*\|\s*(.+)$/);if(r){const o=Ge(r[1]),s=Ge(r[2]);return(o|s)>>>0}const i=e.match(/^(.+)\s*&\s*(.+)$/);if(i){const o=Ge(i[1]),s=Ge(i[2]);return(o&s)>>>0}if(e.startsWith("~"))return~Ge(e.slice(1))>>>0;if(e.startsWith("(")&&e.endsWith(")"))return Ge(e.slice(1,-1));if(e.startsWith("0x")||e.startsWith("0X"))return kg(e);if(/^\d+$/.test(e))return parseInt(e,10);const l={RCC_APB2ENR_IOPAEN:4,RCC_APB2ENR_IOPBEN:8,RCC_APB2ENR_IOPCEN:16,RCC_APB2ENR_IOPDEN:32,RCC_APB2ENR_IOPEEN:64,RCC_APB2ENR_IOPFEN:128,RCC_APB2ENR_IOPGEN:256,RCC_APB2ENR_ADC1EN:512,RCC_APB2ENR_ADC2EN:1024,RCC_APB2ENR_TIM1EN:2048,RCC_APB2ENR_SPI1EN:4096,RCC_APB2ENR_USART1EN:16384,RCC_APB2ENR_ADC3EN:32768,RCC_APB1ENR_TIM2EN:1,RCC_APB1ENR_TIM3EN:2,RCC_APB1ENR_TIM4EN:4,RCC_APB1ENR_TIM5EN:8,RCC_APB1ENR_TIM6EN:16,RCC_APB1ENR_TIM7EN:32,RCC_APB1ENR_WWDGEN:2048,RCC_APB1ENR_SPI2EN:16384,RCC_APB1ENR_SPI3EN:32768,RCC_APB1ENR_USART2EN:1<<17,RCC_APB1ENR_USART3EN:1<<18,RCC_APB1ENR_UART4EN:1<<19,RCC_APB1ENR_UART5EN:1<<20,RCC_APB1ENR_I2C1EN:1<<21,RCC_APB1ENR_I2C2EN:1<<22,RCC_APB1ENR_CAN1EN:1<<25,RCC_APB1ENR_CAN2EN:1<<26,RCC_APB1ENR_BKPEN:1<<27,RCC_APB1ENR_PWREN:1<<28,RCC_APB1ENR_DACEN:1<<29,RCC_APB2Periph_GPIOA:4,RCC_APB2Periph_GPIOB:8,RCC_APB2Periph_GPIOC:16,RCC_APB2Periph_GPIOD:32,RCC_APB2Periph_GPIOE:64,RCC_APB2Periph_GPIOF:128,RCC_APB2Periph_GPIOG:256,RCC_APB2Periph_ADC1:512,RCC_APB2Periph_ADC2:1024,RCC_APB2Periph_TIM1:2048,RCC_APB2Periph_SPI1:4096,RCC_APB2Periph_USART1:16384,RCC_APB1Periph_TIM2:1,RCC_APB1Periph_TIM3:2,RCC_APB1Periph_TIM4:4,RCC_APB1Periph_TIM5:8,RCC_APB1Periph_SPI2:16384,RCC_APB1Periph_USART2:1<<17,RCC_APB1Periph_USART3:1<<18,RCC_APB1Periph_I2C1:1<<21,RCC_APB1Periph_I2C2:1<<22,RCC_APB1Periph_CAN1:1<<25,RCC_APB1Periph_DAC:1<<29,GPIO_Pin_0:1,GPIO_Pin_1:2,GPIO_Pin_2:4,GPIO_Pin_3:8,GPIO_Pin_4:16,GPIO_Pin_5:32,GPIO_Pin_6:64,GPIO_Pin_7:128,GPIO_Pin_8:256,GPIO_Pin_9:512,GPIO_Pin_10:1024,GPIO_Pin_11:2048,GPIO_Pin_12:4096,GPIO_Pin_13:8192,GPIO_Pin_14:16384,GPIO_Pin_15:32768,GPIO_Pin_All:65535,GPIO_Speed_10MHz:1,GPIO_Speed_2MHz:2,GPIO_Speed_50MHz:3,GPIO_Mode_AIN:0,GPIO_Mode_IN_FLOATING:4,GPIO_Mode_IPD:40,GPIO_Mode_IPU:72,GPIO_Mode_Out_OD:20,GPIO_Mode_Out_PP:16,GPIO_Mode_AF_OD:28,GPIO_Mode_AF_PP:24,Bit_SET:1,Bit_RESET:0,ENABLE:1,DISABLE:0,GPIO_PIN_0:1,GPIO_PIN_1:2,GPIO_PIN_SET:1,GPIO_PIN_RESET:0,APB2ENR:24,RCC_APB2ENR:24,RCC_CR_HSION:1,RCC_CR_PLLON:1<<24,RCC_CFGR_SW_PLL:2,RCC_CFGR_SW_HSI:0,RCC_CFGR_SW_HSE:1,RCC_HSE_OFF:0,RCC_HSE_ON:65536,RCC_HSE_Bypass:262144,RCC_PLLSource_HSI_Div2:0,RCC_PLLSource_HSE_Div1:65536,RCC_PLLSource_HSE_Div2:196608,RCC_PLLMul_2:0,RCC_PLLMul_3:262144,RCC_PLLMul_4:524288,RCC_PLLMul_5:786432,RCC_PLLMul_6:1048576,RCC_PLLMul_7:1310720,RCC_PLLMul_8:1572864,RCC_PLLMul_9:1835008,RCC_PLLMul_10:2097152,RCC_PLLMul_11:2359296,RCC_PLLMul_12:2621440,RCC_PLLMul_13:2883584,RCC_PLLMul_14:3145728,RCC_PLLMul_15:3407872,RCC_PLLMul_16:3670016,RCC_SYSCLKSource_HSI:0,RCC_SYSCLKSource_HSE:1,RCC_SYSCLKSource_PLLCLK:2,RCC_HCLK_Div1:0,RCC_HCLK_Div2:1024,RCC_HCLK_Div4:1280,RCC_HCLK_Div8:1536,RCC_HCLK_Div16:1792,RCC_PCLK1_Div1:0,RCC_PCLK1_Div2:1024,RCC_PCLK1_Div4:1280,RCC_PCLK1_Div8:1536,RCC_PCLK1_Div16:1792,RCC_PCLK2_Div1:0,RCC_PCLK2_Div2:2048,RCC_PCLK2_Div4:2560,RCC_PCLK2_Div8:3072,TIM_CR1_CEN:1,TIM_CR1_ARPE:128,TIM_OCMode_Timing:0,TIM_OCMode_Active:1,TIM_OCMode_Inactive:2,TIM_OCMode_Toggle:3,TIM_OCMode_PWM1:6,TIM_OCMode_PWM2:7,TIM_OCPolarity_High:0,TIM_OCPolarity_Low:2,TIM_OCNPolarity_High:0,TIM_OCNPolarity_Low:8,TIM_OutputState_Enable:1,TIM_OutputState_Disable:0,TIM_OutputNState_Enable:4,TIM_OutputNState_Disable:0,TIM_CounterMode_Up:0,TIM_CounterMode_Down:1,TIM_CKD_DIV1:0,TIM_CKD_DIV2:256,TIM_CKD_DIV4:512,ADC_CHANNEL_0:0,ADC_CHANNEL_1:1,ADC_CHANNEL_2:2,ADC_CHANNEL_3:3,ADC_Mode_Independent:0,ADC_Prescaler_Div2:0,ADC_Prescaler_Div4:16384,ADC_Prescaler_Div6:32768,ADC_Prescaler_Div8:49152,ADC_DataAlign_Right:0,ADC_DataAlign_Left:2048,ADC_SampleTime_1Cycles5:0,ADC_SampleTime_7Cycles5:1,ADC_SampleTime_13Cycles5:2,ADC_SampleTime_28Cycles5:3,ADC_SampleTime_41Cycles5:4,ADC_SampleTime_55Cycles5:5,ADC_SampleTime_71Cycles5:6,ADC_SampleTime_239Cycles5:7,DAC_ALIGN_12B_R:0,DAC_ALIGN_12B_L:4,DAC_ALIGN_8B_R:8,DAC_CHANNEL_1:0,DAC_CHANNEL_2:1,DAC_WaveGeneration_None:0,DAC_WaveGeneration_Noise:64,DAC_WaveGeneration_Triangle:128,DAC_Trigger_None:0,USART_Mode_Rx_Tx:12,USART_WordLength_8b:0,USART_WordLength_9b:4096,USART_StopBits_1:0,USART_StopBits_0_5:4096,USART_StopBits_2:8192,USART_Parity_No:0,USART_Parity_Even:1024,USART_Parity_Odd:1536,USART_HardwareFlowControl_None:0,USART_HardwareFlowControl_RTS:256,USART_HardwareFlowControl_CTS:512,USART_Mode_Rx:4,USART_Mode_Tx:8,USART_IT_RXNE:32,USART_IT_TXE:128,SPI_CR1_SPE:64,SPI_CR1_MSTR:4,SPI_SR_TXE:2,SPI_SR_RXNE:1,SPI_SR_BSY:128,SPI_Direction_2Lines_FullDuplex:0,SPI_Direction_2Lines_RxOnly:1024,SPI_Direction_1Line_Rx:32768,SPI_Direction_1Line_Tx:49152,SPI_Mode_Master:260,SPI_Mode_Slave:0,SPI_DataSize_16b:2048,SPI_DataSize_8b:0,SPI_CPOL_Low:0,SPI_CPOL_High:2,SPI_CPHA_1Edge:0,SPI_CPHA_2Edge:1,SPI_NSS_Soft:512,SPI_NSS_Hard:0,SPI_BaudRatePrescaler_2:0,SPI_BaudRatePrescaler_4:8,SPI_BaudRatePrescaler_8:16,SPI_BaudRatePrescaler_16:24,SPI_BaudRatePrescaler_32:32,SPI_BaudRatePrescaler_64:40,SPI_BaudRatePrescaler_128:48,SPI_BaudRatePrescaler_256:56,SPI_FirstBit_MSB:0,SPI_FirstBit_LSB:128,I2C_CR1_PE:1,I2C_CR1_START:256,I2C_CR1_STOP:512,I2C_CR1_ACK:1024,I2C_SR1_SB:1,I2C_SR1_ADDR:2,I2C_SR1_BTF:4,I2C_SR1_RXNE:64,I2C_SR1_TXE:128,I2C_SR2_MSL:1,I2C_SR2_BUSY:2,I2C_SR2_TRA:4,I2C_Mode_I2C:0,I2C_Mode_SMBusDevice:268435456,I2C_Mode_SMBusHost:268451840,I2C_DutyCycle_2:0,I2C_DutyCycle_16_9:16384,I2C_Ack_Enable:1,I2C_Ack_Disable:0,I2C_AcknowledgedAddress_7bit:16384,I2C_AcknowledgedAddress_10bit:49152,I2C_Direction_Transmitter:0,I2C_Direction_Receiver:1,DMA_CCR_EN:1,DMA_CCR_TCIE:2,DMA_CCR_DIR:16,DMA_CCR_CIRC:32,DMA_CCR_MINC:128,DMA_CCR_PSIZE_8:0,DMA_CCR_PSIZE_16:1,DMA_CCR_PSIZE_32:2,DMA_CCR_MSIZE_8:0,DMA_CCR_MSIZE_16:4,DMA_CCR_MSIZE_32:8,DMA_CCR_PL_LOW:0,DMA_CCR_PL_MEDIUM:16,DMA_CCR_PL_HIGH:32,DMA_CCR_PL_VERY_HIGH:48,DMA_CCR_PINC:64,DMA_DIR_PeripheralSRC:0,DMA_DIR_PeripheralDST:16,DMA_Mode_Normal:0,DMA_Mode_Circular:32,DMA_Priority_Low:0,DMA_Priority_Medium:4096,DMA_Priority_High:8192,DMA_Priority_VeryHigh:12288,DMA_M2M_Enable:16384,DMA_M2M_Disable:0,CAN_MCR_INRQ:1,CAN_MSR_INAK:1,CAN_TI0R_TXRQ:1,CAN_Mode_Normal:0,CAN_Mode_LoopBack:1<<30,CAN_Mode_Silent:1<<31,CAN_Mode_Silent_LoopBack:1<<31|1<<30,RCC_APB1Periph_BKP:1<<27,RCC_APB1Periph_PWR:1<<28,IWDG_WriteAccess_Enable:21845,IWDG_Prescaler_4:0,IWDG_Prescaler_8:1,IWDG_Prescaler_16:2,IWDG_Prescaler_32:3,IWDG_Prescaler_64:4,IWDG_Prescaler_128:5,IWDG_Prescaler_256:6,WWDG_Prescaler_1:0,WWDG_Prescaler_2:1,WWDG_Prescaler_4:2,WWDG_Prescaler_8:3,PWR_CR_LPDS:1,PWR_CR_PDDS:2,PWR_CR_CWUF:4,PWR_CR_CSBF:8,PWR_CR_PVDE:16,PWR_CR_DBP:256,PWR_CSR_WUF:1,PWR_CSR_SBF:2,PWR_CSR_PVDO:4,PWR_CSR_EWUP:256,PWR_Regulator_ON:0,PWR_Regulator_LowPower:1,PWR_STOPEntry_WFI:1,PWR_STOPEntry_WFE:2,NVIC_PriorityGroup_0:1792,NVIC_PriorityGroup_1:1536,NVIC_PriorityGroup_2:1280,NVIC_PriorityGroup_3:1024,NVIC_PriorityGroup_4:768,NVIC_LP_SEVONPEND:16,NVIC_LP_SLEEPDEEP:4,NVIC_LP_SLEEPONEXIT:2,SysTick_CLKSource_HCLK_Div8:0,SysTick_CLKSource_HCLK:4,SystemCoreClock:72e6,HSE_VALUE:8e6,HSI_VALUE:8e6};return l[e]!==void 0?l[e]:0}function ww(e){const t=e.match(/^delay_ms\s*\((\d+)\);\s*$/);return t?{type:"delay",ms:parseInt(t[1]),line:0,source:e}:null}function Ew(e){const t=e.split(`
`),n=[];let r={},i={};for(let l=0;l<t.length;l++){const o=t[l].trim();if(!o||o.startsWith("//")||o.startsWith("#"))continue;const s=o.match(/^(\w+)\.(\w+)\s*=\s*(.+);\s*$/);if(s){const g=s[1],S=s[2],v=Ge(s[3].trim());r[g]||(r[g]={}),r[g][S]=v;continue}const a=o.match(/^\w+\s+(\w+)\s*=\s*\{([^}]+)\};\s*$/);if(a){const g=a[1],S=a[2].split(",").map(v=>Ge(v.trim()));r[g]||(r[g]={}),r[g]._inline=1,i[g]=S;continue}const u=o.match(/^(\w+_Init)\s*\((\w+),\s*&(\w+)\);\s*$/);if(u){const g=u[1],S=u[2],v=u[3],m=r[v],C=ju[g];if(C&&m){let _=[];m._inline&&i[v]?_=[sr(S)[0],...i[v]]:(_=[sr(S)[0],m.GPIO_Pin??m.SPI_Direction??0],g==="GPIO_Init"?_=[sr(S)[0],m.GPIO_Pin??0,m.GPIO_Speed??0,m.GPIO_Mode??0]:g==="USART_Init"?_=[m.USART_BaudRate??9600,m.USART_WordLength??0,m.USART_StopBits??0,m.USART_Parity??0,m.USART_Mode??12,m.USART_HardwareFlowControl??0]:g==="SPI_Init"?_=[m.SPI_Direction??0,m.SPI_Mode??260,m.SPI_DataSize??0,m.SPI_CPOL??0,m.SPI_CPHA??0,m.SPI_NSS??512,m.SPI_BaudRatePrescaler??24,m.SPI_FirstBit??0]:g==="I2C_Init"?_=[m.I2C_Mode??0,m.I2C_DutyCycle??0,m.I2C_OwnAddress1??0,m.I2C_Ack??1,m.I2C_AcknowledgedAddress??16384,m.I2C_ClockSpeed??1e5]:g==="ADC_Init"?_=[m.ADC_Mode??0,m.ADC_ScanConvMode??0,m.ADC_ContinuousConvMode??0,m.ADC_DataAlign??0,m.ADC_NbrOfChannel??1]:g==="DMA_Init"?_=[m.DMA_Channel??1,m.DMA_DIR??0,m.DMA_Mode??0,m.DMA_PeripheralInc??0,m.DMA_MemoryInc??bw,m.DMA_PeripheralDataSize??0,m.DMA_MemoryDataSize??0,m.DMA_Priority??0,m.DMA_M2M??0]:g==="TIM_TimeBaseInit"?_=[m.TIM_Period??999,m.TIM_Prescaler??71,m.TIM_CounterMode??0,m.TIM_ClockDivision??0]:g==="DAC_Init"?_=[m.DAC_Channel??1,m.DAC_Trigger??0,m.DAC_WaveGeneration??0,m.DAC_OutputBuffer??0]:_=[sr(S)[0]]);const R=C.fn(_);for(const A of R)n.push({type:"write",peripheral:A.peripheral??C.peripheral,offset:A.offset,value:A.value,line:l+1,source:o});if(R.length>0)continue}}const f=o.match(/^(\w+_Cmd)\s*\((.+)\);\s*$/);if(f){const g=f[1],S=f[2],v=ju[g];if(v){const m=sr(S),C=v.fn(m);for(const _ of C)n.push({type:"write",peripheral:_.peripheral??v.peripheral,offset:_.offset,value:_.value,line:l+1,source:o});if(C.length>0)continue}}const d=ww(o);if(d){d.line=l+1,n.push(d);continue}const p=Aw(o);if(p){p.line=l+1;const g=p;if(g._splResults)for(let S=1;S<g._splResults.length;S++){const v=g._splResults[S];n.push({type:"write",peripheral:v.peripheral??p.peripheral,offset:v.offset,value:v.value,line:l+1,source:o})}if(g._halResults)for(let S=1;S<g._halResults.length;S++){const v=g._halResults[S];n.push({type:"write",peripheral:p.peripheral,offset:v.offset,value:v.value,line:l+1,source:o})}n.push(p);continue}const h=Pw(o);if(h){h.line=l+1,n.push(h);continue}}return{operations:n}}const bw=128,la={counter:0,arr:0,frequency:0,channels:[],running:!1},oa={outputCode:0,voltage:0},sa={result:0,voltage:0,eoc:!1},aa={txString:"",txe:!0,tc:!0,rxne:!1},ua={txe:!0,rxne:!1,bsy:!1,receivedByte:0,mode:"CPOL=0 CPHA=0"},ca={pe:!1,state:"idle",sb:!1,addr:!1,txe:!1,rxne:!1,btf:!1,busy:!1,lastData:0},da={channels:[]},fa={mode:"sleep",baudRate:0,btr:{brp:0,ts1:0,ts2:0,sjw:0,loopback:!1,silent:!1},txMailboxes:[],rxMessages:[]},pa={counter:0,arr:0,frequency:0,running:!1,bdtr:{moe:!1,breakEnable:!1,breakActive:!1,deadTimeNs:0,dtg:0,aoe:!1,ossi:!1,ossr:!1,lock:0},channels:[]},ha={configMode:!0,rtoff:!1,rsf:!1,counter:0,reload:0,prescaler:32768,seconds:0,owf:!1,secf:!1,secie:!1},ma={started:!1,unlockActive:!1,counter:4095,reload:4095,prescalerDiv:4},ga={started:!1,counter:127,windowValue:127,prescalerDiv:1,ewi:!1,ewif:!1,refreshAllowed:!1},H=Oc((e,t)=>({running:!1,output:[],activePeripheral:"GPIOA",pins:[],timerState:{...la},dacState:{...oa},adcState:{...sa},usartState:{...aa},spiState:{...ua},i2cState:{...ca},dmaState:{...da},canState:{...fa},advTimState:{...pa},rtcState:{...ha},iwdgState:{...ma},wwdgState:{...ga},pwrMode:"run",pwrDbpEnabled:!1,pwrWuf:!1,pwrSbf:!1,pwrPvde:!1,pwrPls:0,pwrPvdo:!1,pwrEwup:!1,rtosTickCount:0,rtosSchedulerStarted:!1,rtosCurrentTaskId:0,rtosTasks:[],rtosQueues:[],rtosSemaphores:[],fsMounted:!1,fsFiles:[],fsOpenFilePath:null,fsOpenFileCursor:0,fsOperationLog:[],code:`// 1. 使能 GPIOA 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA0 为推挽输出
GPIO_InitTypeDef cfg;
cfg.GPIO_Pin = GPIO_Pin_0;
cfg.GPIO_Speed = GPIO_Speed_50MHz;
cfg.GPIO_Mode = GPIO_Mode_Out_PP;
GPIO_Init(GPIOA, &cfg);

// 3. 点亮 PA0
GPIO_SetBits(GPIOA, GPIO_Pin_0);
`,setCode:n=>e({code:n}),runCode:()=>{const{code:n}=t(),r=Ew(n);if(r.error){e({output:[`Error: ${r.error}`]});return}const i=[];for(const A of r.operations)if(A.type==="write"&&A.peripheral)try{q.write(A.peripheral,A.offset,A.value),i.push(`[${A.line}] ${A.peripheral} + 0x${A.offset.toString(16)} ← 0x${A.value.toString(16)}`)}catch(P){i.push(`[${A.line}] Error: ${String(P)}`)}else A.type==="delay"&&i.push(`[${A.line}] delay ${A.ms}ms`);q.tick();const l=q.getPeripheral(t().activePeripheral),o=q.getPeripheral("TIM2"),s=q.getPeripheral("DAC"),a=q.getPeripheral("ADC1"),u=q.getPeripheral("USART1"),f=q.getPeripheral("SPI1"),d=q.getPeripheral("I2C1"),p=q.getPeripheral("DMA1"),h=q.getPeripheral("CAN1"),g=q.getPeripheral("TIM1"),S=q.getPeripheral("RTC"),v=q.getPeripheral("IWDG"),m=q.getPeripheral("WWDG"),C=q.getPeripheral("PWR"),_=q.getPeripheral("RTOS"),R=q.getPeripheral("FATFS");e({running:!0,output:i,pins:l?l.getAllPinStates():[],timerState:o?{counter:o.getCounter(),arr:o.read(44)&65535,frequency:o.getFrequency(),channels:o.getAllChannelStates(),running:!!(o.read(0)&1)}:{...la},dacState:s?{outputCode:s.getOutputCode(),voltage:s.getVoltage()}:{...oa},adcState:a?{result:a.getResult(),voltage:a.getVoltage(),eoc:!!(a.read(0)&2)}:{...sa},usartState:u?{txString:u.getTXString(),txe:!!(u.read(0)&128),tc:!!(u.read(0)&64),rxne:!!(u.read(0)&32)}:{...aa},spiState:f?{txe:!!(f.read(8)&2),rxne:!!(f.read(8)&1),bsy:!!(f.read(8)&128),receivedByte:f.getReceivedByte(),mode:f.getMode()}:{...ua},i2cState:d?{pe:!!(d.read(0)&1),state:d.getState(),sb:!!(d.read(20)&1),addr:!!(d.read(20)&2),txe:!!(d.read(20)&128),rxne:!!(d.read(20)&64),btf:!!(d.read(20)&4),busy:!!(d.read(24)&2),lastData:d.getLastData()}:{...ca},dmaState:p?{channels:p.getAllChannelStates()}:{...da},canState:h?{mode:h.getMode(),baudRate:h.getBaudRate(),btr:h.getBTRInfo(),txMailboxes:h.getTXMailboxStatus(),rxMessages:h.getRXMessages()}:{...fa},advTimState:g?{counter:g.getCounter(),arr:g.read(44)&65535,frequency:g.getFrequency(),running:!!(g.read(0)&1),bdtr:g.getBDTRInfo(),channels:g.getAllChannelStates()}:{...pa},rtcState:S?{configMode:S.isConfigMode(),rtoff:!!(S.read(4)&32),rsf:!!(S.read(4)&8),counter:S.getCounter(),reload:S.getReload(),prescaler:(S.read(8)&15)<<16|S.read(12)&65535,seconds:S.getSeconds(),owf:!!(S.read(4)&4),secf:!!(S.read(4)&1),secie:!!(S.read(0)&1)}:{...ha},iwdgState:v?{started:v.isStarted(),unlockActive:!1,counter:v.getCounter(),reload:v.read(8)&4095,prescalerDiv:v.getPrescalerDiv()}:{...ma},wwdgState:m?{started:m.isStarted(),counter:m.getCounter(),windowValue:m.getWindowValue(),prescalerDiv:[1,2,4,8][m.getPrescaler()],ewi:!!(m.read(4)&512),ewif:!!(m.read(8)&1),refreshAllowed:m.isRefreshAllowed()}:{...ga},pwrMode:C?C.getMode():"run",pwrDbpEnabled:C?C.isDBPEnabled():!1,pwrWuf:C?!!(C.read(4)&1):!1,pwrSbf:C?!!(C.read(4)&2):!1,pwrPvde:C?!!(C.read(0)&16):!1,pwrPls:C?C.read(0)>>5&7:0,pwrPvdo:C?!!(C.read(4)&4):!1,pwrEwup:C?!!(C.read(4)&256):!1,rtosTickCount:_?_.getTickCount():0,rtosSchedulerStarted:_?_.isSchedulerStarted():!1,rtosCurrentTaskId:_?_.getCurrentTaskId():0,rtosTasks:_?_.getTasks():[],rtosQueues:_?_.getQueues().map(A=>({id:A.id,name:A.name,length:A.length,items:A.items})):[],rtosSemaphores:_?_.getSemaphores().map(A=>({id:A.id,name:A.name,count:A.count,maxCount:A.maxCount})):[],fsMounted:R?R.isMounted():!1,fsFiles:R?R.getFiles():[],fsOpenFilePath:R?R.getOpenFilePath():null,fsOpenFileCursor:R?R.getOpenFileCursor():0,fsOperationLog:R?R.getOperationLog():[]})},reset:()=>{q.reset(),e({running:!1,output:[],pins:[],timerState:{...la},dacState:{...oa},adcState:{...sa},usartState:{...aa},spiState:{...ua},i2cState:{...ca},dmaState:{...da},canState:{...fa},advTimState:{...pa},rtcState:{...ha},iwdgState:{...ma},wwdgState:{...ga},pwrMode:"run",pwrDbpEnabled:!1,pwrWuf:!1,pwrSbf:!1,pwrPvde:!1,pwrPls:0,pwrPvdo:!1,pwrEwup:!1,rtosTickCount:0,rtosSchedulerStarted:!1,rtosCurrentTaskId:0,rtosTasks:[],rtosQueues:[],rtosSemaphores:[],fsMounted:!1,fsFiles:[],fsOpenFilePath:null,fsOpenFileCursor:0,fsOperationLog:[]})},setActivePeripheral:n=>e({activePeripheral:n}),refreshPins:()=>{const n=q.getPeripheral(t().activePeripheral);n&&e({pins:n.getAllPinStates()})},refreshTimer:()=>{const n=q.getPeripheral("TIM2");n&&e({timerState:{counter:n.getCounter(),arr:n.read(44)&65535,frequency:n.getFrequency(),channels:n.getAllChannelStates(),running:!!(n.read(0)&1)}})},refreshDac:()=>{const n=q.getPeripheral("DAC");n&&e({dacState:{outputCode:n.getOutputCode(),voltage:n.getVoltage()}})},refreshAdc:()=>{const n=q.getPeripheral("ADC1");n&&e({adcState:{result:n.getResult(),voltage:n.getVoltage(),eoc:!!(n.read(0)&2)}})},refreshUsart:()=>{const n=q.getPeripheral("USART1");n&&e({usartState:{txString:n.getTXString(),txe:!!(n.read(0)&128),tc:!!(n.read(0)&64),rxne:!!(n.read(0)&32)}})},refreshSpi:()=>{const n=q.getPeripheral("SPI1");n&&e({spiState:{txe:!!(n.read(8)&2),rxne:!!(n.read(8)&1),bsy:!!(n.read(8)&128),receivedByte:n.getReceivedByte(),mode:n.getMode()}})},sendUsartRx:n=>{const r=q.getPeripheral("USART1");if(r){r.setRXString(n);for(let i=0;i<n.length+2;i++)q.tick();t().refreshUsart()}},setAdcAnalogVoltage:n=>{const r=q.getPeripheral("ADC1");r&&(r.setAnalogVoltage(n),t().refreshAdc())},sendSpiByte:n=>{const r=q.getPeripheral("SPI1");if(r){r.write(0,68),r.write(12,n&255);for(let i=0;i<16;i++)q.tick();t().refreshSpi()}},refreshI2c:()=>{const n=q.getPeripheral("I2C1");n&&e({i2cState:{pe:!!(n.read(0)&1),state:n.getState(),sb:!!(n.read(20)&1),addr:!!(n.read(20)&2),txe:!!(n.read(20)&128),rxne:!!(n.read(20)&64),btf:!!(n.read(20)&4),busy:!!(n.read(24)&2),lastData:n.getLastData()}})},sendI2cStart:n=>{const r=q.getPeripheral("I2C1");if(r){r.write(0,257),r.write(16,n<<1);for(let i=0;i<6;i++)q.tick();t().refreshI2c()}},sendI2cByte:n=>{const r=q.getPeripheral("I2C1");if(r){r.write(16,n&255);for(let i=0;i<4;i++)q.tick();t().refreshI2c()}},sendI2cStop:()=>{const n=q.getPeripheral("I2C1");n&&(n.write(0,513),t().refreshI2c())},refreshDma:()=>{const n=q.getPeripheral("DMA1");n&&e({dmaState:{channels:n.getAllChannelStates()}})},refreshCan:()=>{const n=q.getPeripheral("CAN1");n&&e({canState:{mode:n.getMode(),baudRate:n.getBaudRate(),btr:n.getBTRInfo(),txMailboxes:n.getTXMailboxStatus(),rxMessages:n.getRXMessages()}})},sendCanMsg:(n,r,i)=>{const l=q.getPeripheral("CAN1");if(!l)return;l.write(0,1),l.write(28,1<<30),l.write(0,0);const o=Math.min(r,8);l.write(388,o);let s=0,a=0;i.forEach((u,f)=>{f<4?s|=(u&255)<<f*8:a|=(u&255)<<(f-4)*8}),l.write(392,s),l.write(396,a),l.write(384,n<<21|1),t().refreshCan()},refreshAdvTim:()=>{const n=q.getPeripheral("TIM1");n&&e({advTimState:{counter:n.getCounter(),arr:n.read(44)&65535,frequency:n.getFrequency(),running:!!(n.read(0)&1),bdtr:n.getBDTRInfo(),channels:n.getAllChannelStates()}})},refreshRtc:()=>{const n=q.getPeripheral("RTC");n&&e({rtcState:{configMode:n.isConfigMode(),rtoff:!!(n.read(4)&32),rsf:!!(n.read(4)&8),counter:n.getCounter(),reload:n.getReload(),prescaler:(n.read(8)&15)<<16|n.read(12)&65535,seconds:n.getSeconds(),owf:!!(n.read(4)&4),secf:!!(n.read(4)&1),secie:!!(n.read(0)&1)}})},refreshIwdg:()=>{const n=q.getPeripheral("IWDG");n&&e({iwdgState:{started:n.isStarted(),unlockActive:!1,counter:n.getCounter(),reload:n.read(8)&4095,prescalerDiv:n.getPrescalerDiv()}})},refreshWwdg:()=>{const n=q.getPeripheral("WWDG");n&&e({wwdgState:{started:n.isStarted(),counter:n.getCounter(),windowValue:n.getWindowValue(),prescalerDiv:[1,2,4,8][n.getPrescaler()],ewi:!!(n.read(4)&512),ewif:!!(n.read(8)&1),refreshAllowed:n.isRefreshAllowed()}})},refreshPwr:()=>{const n=q.getPeripheral("PWR");n&&e({pwrMode:n.getMode(),pwrDbpEnabled:n.isDBPEnabled(),pwrWuf:!!(n.read(4)&1),pwrSbf:!!(n.read(4)&2),pwrPvde:!!(n.read(0)&16),pwrPls:n.read(0)>>5&7,pwrPvdo:!!(n.read(4)&4),pwrEwup:!!(n.read(4)&256)})},refreshRTOS:()=>{const n=q.getPeripheral("RTOS");n&&e({rtosTickCount:n.getTickCount(),rtosSchedulerStarted:n.isSchedulerStarted(),rtosCurrentTaskId:n.getCurrentTaskId(),rtosTasks:n.getTasks(),rtosQueues:n.getQueues().map(r=>({id:r.id,name:r.name,length:r.length,items:r.items})),rtosSemaphores:n.getSemaphores().map(r=>({id:r.id,name:r.name,count:r.count,maxCount:r.maxCount}))})},refreshFS:()=>{const n=q.getPeripheral("FATFS");n&&e({fsMounted:n.isMounted(),fsFiles:n.getFiles(),fsOpenFilePath:n.getOpenFilePath(),fsOpenFileCursor:n.getOpenFileCursor(),fsOperationLog:n.getOperationLog()})}}));function Dw(){const e=H(n=>n.code),t=H(n=>n.setCode);return c.jsx(nw,{height:"100%",defaultLanguage:"c",theme:"vs-dark",value:e,onChange:n=>t(n??""),options:{fontSize:14,fontFamily:"'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",minimap:{enabled:!1},lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"off",padding:{top:12}}})}const Mw="_heading_oc3m0_1",Lw="_emptyState_oc3m0_9",Nw="_emptyStateIcon_oc3m0_16",Ow="_section_oc3m0_23",Bw="_sectionLabel_oc3m0_30",Fw="_statusBar_oc3m0_39",jw="_dataRow_oc3m0_51",zw="_led_oc3m0_68",Ww="_ledDotOn_oc3m0_84 _ledDot_oc3m0_76",Gw="_ledDotOff_oc3m0_91 _ledDot_oc3m0_76",Uw="_ledLabel_oc3m0_97",Hw="_ledLabelOff_oc3m0_101",Vw="_pill_oc3m0_106",$w="_chipLabel_oc3m0_115",Kw="_itemRow_oc3m0_122",Xw="_itemRowActive_oc3m0_132 _itemRow_oc3m0_122",qw="_miniBar_oc3m0_139",Qw="_miniBarFill_oc3m0_147",Jw="_pinChipOutput_oc3m0_164 _pinChip_oc3m0_154",Yw="_pinChipInput_oc3m0_169 _pinChip_oc3m0_154",Zw="_pinNumber_oc3m0_174",eE="_pinAF_oc3m0_179",tE="_pinLevel_oc3m0_186",nE="_pinConfig_oc3m0_192",rE="_pinLeg_oc3m0_198",iE="_chipBody_oc3m0_205",lE="_chipNotch_oc3m0_214",oE="_chipPinsTop_oc3m0_232 _chipPins_oc3m0_225",sE="_chipPinsBottom_oc3m0_237 _chipPins_oc3m0_225",aE="_chipLabelArea_oc3m0_242",uE="_chipModel_oc3m0_250",cE="_chipInfo_oc3m0_258",dE="_pinLegend_oc3m0_266",fE="_pinLegendItem_oc3m0_276",pE="_pinLegendDivider_oc3m0_282",hE="_pinsWrap_oc3m0_288",mE="_regCard_oc3m0_295",gE="_regHeader_oc3m0_302",CE="_regName_oc3m0_309",_E="_regAddr_oc3m0_316",SE="_regBitArea_oc3m0_322",yE="_regFields_oc3m0_327",vE="_bitBar_oc3m0_335",xE="_bitCell_oc3m0_341",RE="_bitScale_oc3m0_348",IE="_fieldTag_oc3m0_358",PE="_fieldTagMeta_oc3m0_366",AE="_fieldTagValue_oc3m0_371",TE="_valueLabel_oc3m0_377",kE="_runBadge_oc3m0_390",wE="_infoBar_oc3m0_402",EE="_waveScope_oc3m0_416",bE="_regList_oc3m0_425",w={heading:Mw,emptyState:Lw,emptyStateIcon:Nw,section:Ow,sectionLabel:Bw,statusBar:Fw,dataRow:jw,led:zw,ledDotOn:Ww,ledDotOff:Gw,ledLabel:Uw,ledLabelOff:Hw,pill:Vw,chipLabel:$w,itemRow:Kw,itemRowActive:Xw,miniBar:qw,miniBarFill:Qw,pinChipOutput:Jw,pinChipInput:Yw,pinNumber:Zw,pinAF:eE,pinLevel:tE,pinConfig:nE,pinLeg:rE,chipBody:iE,chipNotch:lE,chipPinsTop:oE,chipPinsBottom:sE,chipLabelArea:aE,chipModel:uE,chipInfo:cE,pinLegend:dE,pinLegendItem:fE,pinLegendDivider:pE,pinsWrap:hE,regCard:mE,regHeader:gE,regName:CE,regAddr:_E,regBitArea:SE,regFields:yE,bitBar:vE,bitCell:xE,bitScale:RE,fieldTag:IE,fieldTagMeta:PE,fieldTagValue:AE,valueLabel:TE,runBadge:kE,infoBar:wE,waveScope:EE,regList:bE},DE={0:"T2.C1",1:"T2.C2",2:"T2.C3",3:"T2.C4",6:"T3.C1",7:"T3.C2",8:"CLK",9:"TX",10:"RX"};function ME(){const e=H(o=>o.pins),t=H(o=>o.refreshPins),n=H(o=>o.activePeripheral),[r,i]=T.useState(!1);T.useEffect(()=>{r||(t(),i(!0))},[r,t]);const l=e.length>0;return c.jsxs("div",{children:[c.jsxs("h3",{className:w.heading,children:[n," Pinout"]}),l?c.jsxs("div",{className:w.pinsWrap,children:[c.jsxs("div",{className:w.chipBody,children:[c.jsx("div",{className:w.chipNotch}),c.jsx("div",{className:w.chipPinsTop,children:e.slice(8,16).reverse().map(o=>c.jsx(bp,{pin:o,position:"top"},o.number))}),c.jsxs("div",{className:w.chipLabelArea,children:[c.jsx("div",{className:w.chipModel,children:"STM32F103"}),c.jsxs("div",{className:w.chipInfo,children:["Cortex‑M3 · 72MHz · ",n]})]}),c.jsx("div",{className:w.chipPinsBottom,children:e.slice(0,8).reverse().map(o=>c.jsx(bp,{pin:o,position:"bottom"},o.number))})]}),c.jsxs("div",{className:w.pinLegend,children:[c.jsxs("span",{className:w.pinLegendItem,children:[c.jsx("span",{style:{color:"var(--accent-green)"},children:"●"})," High"]}),c.jsxs("span",{className:w.pinLegendItem,children:[c.jsx("span",{style:{color:"var(--accent-red)"},children:"●"})," Low"]}),c.jsxs("span",{className:w.pinLegendItem,children:[c.jsx("span",{style:{color:"var(--text-disabled)"},children:"○"})," Input/Float"]}),c.jsx("span",{className:w.pinLegendDivider,children:"PP=推挽 OD=开漏 AN=模拟"})]})]}):c.jsxs("div",{className:w.emptyState,children:[c.jsx("div",{className:w.emptyStateIcon,children:"▣"}),"运行 GPIO 代码后查看引脚状态"]})]})}function bp({pin:e,position:t}){const n=e.mode!=="input",r=n?e.level?"var(--accent-green)":"var(--accent-red)":"var(--text-disabled)",i=e.config==="push_pull"?"PP":e.config==="open_drain"?"OD":e.config==="floating_input"?"FLT":e.config==="pull_up_down"?"PU":e.config==="analog"?"AN":"--",l=e.config==="push_pull"?"var(--accent-green)":e.config==="open_drain"?"var(--accent-amber)":e.config==="analog"?"var(--accent-blue)":"var(--text-disabled)",o=DE[e.number];return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[t==="top"&&c.jsx("div",{className:w.pinLeg}),c.jsxs("div",{className:n?w.pinChipOutput:w.pinChipInput,style:{border:`1px solid ${n?"#242430":"#1a1a24"}`},children:[c.jsxs("div",{className:w.pinNumber,children:["P",e.number]}),o&&c.jsx("div",{className:w.pinAF,children:o}),c.jsx("div",{className:w.pinLevel,style:{color:r},children:n?"●":"○"}),c.jsx("div",{className:w.pinConfig,style:{color:l},children:i})]}),t==="bottom"&&c.jsx("div",{className:w.pinLeg})]})}const Nl=["#3bdb7e","#5ba0f5","#f5b83b","#f57bc5","#a88bf5","#f54b4b","#4dd4c0","#f5953b"];function LE(){const e=H(i=>i.activePeripheral),t=H(i=>i.output),[n,r]=T.useState([]);return T.useEffect(()=>{const i=q.getPeripheral(e);if(!i)return;const l=[],o=NE(e);i.registers.forEach((s,a)=>{l.push({name:o[a]||`0x${a.toString(16)}`,offset:a,reg:s})}),l.sort((s,a)=>s.offset-a.offset),r(l)},[e,t]),n.length===0?c.jsxs("div",{className:w.emptyState,children:[c.jsx("div",{className:w.emptyStateIcon,children:"▢"}),"运行代码后此处显示寄存器状态"]}):c.jsxs("div",{children:[c.jsxs("h3",{className:w.heading,children:[e," Registers"]}),c.jsx("div",{className:w.regList,children:n.map(({name:i,offset:l,reg:o})=>{const s=o.read(),a=Object.entries(o.fields);return c.jsxs("div",{className:w.regCard,children:[c.jsxs("div",{className:w.regHeader,children:[c.jsx("span",{className:w.regName,children:i}),c.jsxs("span",{className:w.regAddr,children:["0x",l.toString(16).padStart(2,"0")," = 0x",s.toString(16).padStart(8,"0").toUpperCase()]})]}),c.jsxs("div",{className:w.regBitArea,children:[c.jsx("div",{className:w.bitBar,children:Array.from({length:32},(u,f)=>{const d=31-f,p=s>>>d&1;let h=p?"#3bdb7e":"#1a1a24",g="1px";for(let S=0;S<a.length;S++){const[,v]=a[S],[m,C]=v.bits;d>=m&&d<=C&&(p?h=Nl[S%Nl.length]:h="#14141e",d===C&&(g="2px 2px 0 0"),d===m&&(g="0 0 2px 2px"),C-m===0&&(g="2px"))}return c.jsx("div",{title:`bit ${d}: ${p}`,className:w.bitCell,style:{background:h,borderRadius:g}},f)})}),c.jsxs("div",{className:w.bitScale,children:[c.jsx("span",{children:"31"}),c.jsx("span",{children:"27"}),c.jsx("span",{children:"23"}),c.jsx("span",{children:"19"}),c.jsx("span",{children:"15"}),c.jsx("span",{children:"11"}),c.jsx("span",{children:"7"}),c.jsx("span",{children:"3"}),c.jsx("span",{children:"0"})]})]}),a.length>0&&c.jsx("div",{className:w.regFields,children:a.map(([u,f],d)=>{const p=o.read(u),[h,g]=f.bits,S=g-h+1,v=Nl[d%Nl.length];return c.jsxs("span",{className:w.fieldTag,style:{color:v,border:`1px solid ${v}22`},children:[u,c.jsx("span",{className:w.fieldTagMeta,children:S>1?`[${g}:${h}]`:`[${h}]`}),c.jsxs("span",{className:w.fieldTagValue,children:["= ",p]})]},u)})})]},l)})})]})}function NE(e){if(e.startsWith("GPIO"))return{0:"CRL",4:"CRH",8:"IDR",12:"ODR",16:"BSRR",20:"BRR"};if(e==="RCC")return{0:"CR",4:"CFGR",24:"APB2ENR"};if(e==="NVIC")return{0:"ISER0",4:"ISER1",128:"ICER0",132:"ICER1"};if(e==="SysTick")return{0:"CTRL",4:"LOAD",8:"VAL"};if(e.startsWith("TIM"))return{0:"CR1",4:"CR2",8:"SMCR",12:"DIER",16:"SR",20:"EGR",24:"CCMR1",28:"CCMR2",32:"CCER",36:"CNT",40:"PSC",44:"ARR",52:"CCR1",56:"CCR2",60:"CCR3",64:"CCR4"};if(e==="DAC")return{0:"CR",8:"DHR12R1",44:"DOR1"};if(e==="ADC1")return{0:"SR",4:"CR1",8:"CR2",12:"SMPR1",16:"SMPR2",40:"SQR1",52:"SQR3",76:"DR"};if(e==="USART1")return{0:"SR",4:"DR",8:"BRR",12:"CR1"};if(e==="SPI1")return{0:"CR1",4:"CR2",8:"SR",12:"DR"};if(e==="I2C1")return{0:"CR1",4:"CR2",16:"DR",20:"SR1",24:"SR2"};if(e==="DMA1"){const t={0:"ISR",4:"IFCR"};for(let n=0;n<7;n++)t[8+n*20]=`CCR${n+1}`,t[12+n*20]=`CNDTR${n+1}`,t[16+n*20]=`CPAR${n+1}`,t[20+n*20]=`CMAR${n+1}`;return t}if(e==="TIM1")return{0:"CR1",4:"CR2",12:"DIER",16:"SR",20:"EGR",24:"CCMR1",28:"CCMR2",32:"CCER",36:"CNT",40:"PSC",44:"ARR",48:"RCR",52:"CCR1",56:"CCR2",60:"CCR3",64:"CCR4",68:"BDTR"};if(e==="RTC")return{0:"CRH",4:"CRL",8:"PRLH",12:"PRLL",16:"DIVH",20:"DIVL",24:"CNTH",28:"CNTL",32:"ALRH",36:"ALRL"};if(e==="CAN1"){const t={0:"MCR",4:"MSR",8:"TSR",12:"RF0R",16:"RF1R",20:"IER",24:"ESR",28:"BTR"};for(let n=0;n<3;n++){const r=384+n*16;t[r]=`MB${n}_TIR`,t[r+4]=`MB${n}_TDTR`,t[r+8]=`MB${n}_TDLR`,t[r+12]=`MB${n}_TDHR`}return t}return e==="IWDG"?{0:"KR",4:"PR",8:"RLR",12:"SR"}:e==="WWDG"?{0:"CR",4:"CFR",8:"SR"}:e==="PWR"?{0:"CR",4:"CSR"}:{}}const si=["#3bdb7e","#5ba0f5","#f5b83b","#f57bc5"],Ol=["CH1","CH2","CH3","CH4"],Bl=48,Ca=10;function OE(){const e=H(S=>S.timerState),[t,n]=T.useState(1),[r,i]=T.useState([]),l=500,o=T.useRef(null);T.useEffect(()=>{if(!e.running&&r.length>0||!e.running)return;const S=e.channels.map(v=>v.output);i(v=>{const m=[...v,{cnt:e.counter,ch:S}];return m.length>l?m.slice(-l):m})},[e.counter,e.running,e.channels]);const s=T.useCallback(S=>{S.preventDefault(),S.ctrlKey&&n(v=>Math.max(.5,Math.min(5,v+S.deltaY*-.005)))},[]),a=32,u=Bl*Ca*t,f=34,d=24,p=a+u,h=d+f*4+10,g=S=>{if(r.length<2)return"";const v=u/Math.max(r.length-1,1),m=d+S*f+f/2,C=m-8,_=m+8;let R=`M 0 ${r[0].ch[S]?C:_}`;for(let A=1;A<r.length;A++){const P=A*v,k=r[A].ch[S];R+=` L ${P} ${k?C:_}`}return R};return c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"PWM Waveform"}),e.running&&c.jsx("span",{className:w.runBadge,children:"RUN"})]}),c.jsxs("span",{className:w.valueLabel,children:[t.toFixed(1),"×"]})]}),c.jsxs("div",{className:w.infoBar,children:[c.jsxs("span",{children:["CNT ",c.jsx("span",{style:{color:"var(--accent-green)"},children:e.counter})]}),c.jsxs("span",{children:["ARR ",c.jsx("span",{style:{color:"var(--accent-blue)"},children:e.arr})]}),c.jsxs("span",{children:["f ",c.jsxs("span",{style:{color:"var(--accent-amber)"},children:[e.frequency.toLocaleString()," Hz"]})]})]}),c.jsx("div",{ref:o,onWheel:s,className:w.waveScope,children:c.jsxs("svg",{width:"100%",height:h,viewBox:`0 0 ${p} ${h}`,preserveAspectRatio:"xMidYMid meet",children:[c.jsx("rect",{x:0,y:0,width:p,height:h,fill:"none",stroke:"#1a1a24",strokeWidth:1}),Array.from({length:Ca*5+1},(S,v)=>c.jsx("line",{x1:a+v*(Bl/5)*t,y1:d,x2:a+v*(Bl/5)*t,y2:h-10,stroke:v%5===0?"#181820":"#101018",strokeWidth:.5},`mg${v}`)),Ol.map((S,v)=>c.jsx("line",{x1:a,y1:d+v*f+f/2,x2:p,y2:d+v*f+f/2,stroke:"#181820",strokeWidth:.5,strokeDasharray:"2 3"},`hg${v}`)),Ol.map((S,v)=>{const m=d+v*f+f/2;return c.jsx("text",{x:a-8,y:m,textAnchor:"end",dominantBaseline:"central",fill:si[v],fontSize:9,fontFamily:"JetBrains Mono, monospace",fontWeight:600,children:S},S)}),Ol.map((S,v)=>c.jsx("path",{d:g(v),fill:"none",stroke:si[v],strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",transform:`translate(${a}, 0)`,style:{filter:`drop-shadow(0 0 3px ${si[v]}44)`}},v)),c.jsx("line",{x1:a,y1:h-10,x2:p,y2:h-10,stroke:"#242430",strokeWidth:1}),Array.from({length:Ca+1},(S,v)=>c.jsxs("text",{x:a+v*Bl*t,y:h-2,textAnchor:"middle",fill:"#404050",fontSize:8,fontFamily:"JetBrains Mono, monospace",children:[v*10,"μs"]},v))]})}),!e.running&&r.length===0&&c.jsx("div",{className:w.emptyState,style:{padding:20,fontSize:12},children:"运行 TIM 代码后此处显示波形"}),c.jsx("div",{style:{display:"flex",gap:16,marginTop:10,fontSize:10},children:Ol.map((S,v)=>{var m;return c.jsxs("span",{style:{color:si[v],fontFamily:"JetBrains Mono, monospace",display:"flex",alignItems:"center",gap:4},children:[c.jsx("span",{style:{width:8,height:2,background:si[v],borderRadius:1,display:"inline-block"}}),S,c.jsx("span",{style:{color:"#606070"},children:(m=e.channels[v])!=null&&m.enabled?"ON":"OFF"})]},S)})}),c.jsx("div",{className:w.valueLabel,style:{marginTop:6,color:"#404050"},children:"Ctrl+Scroll zoom · Scroll horizontal"})]})}function _a({label:e,active:t}){return c.jsxs("div",{className:w.led,children:[c.jsx("span",{className:t?w.ledDotOn:w.ledDotOff}),c.jsx("span",{className:t?w.ledLabel:w.ledLabelOff,children:e})]})}function BE(){const e=H(a=>a.usartState),t=H(a=>a.sendUsartRx),[n,r]=T.useState(""),i=T.useRef(null);T.useEffect(()=>{var a;(a=i.current)==null||a.scrollIntoView({behavior:"smooth"})},[e.txString]);const l=()=>{n.length>0&&(t(n),r(""))},o=a=>{a.key==="Enter"&&l()},s=e.txString.length>0;return c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"USART1 串口终端"}),c.jsxs("div",{style:{display:"flex",gap:12},children:[c.jsx(_a,{label:"TXE",active:e.txe}),c.jsx(_a,{label:"TC",active:e.tc}),c.jsx(_a,{label:"RXNE",active:e.rxne})]})]}),c.jsxs("div",{style:{marginBottom:14},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:6},children:"TX 输出"}),c.jsx("div",{style:{background:"var(--bg-root)",border:"1px solid var(--border-subtle)",borderRadius:6,padding:"12px 14px",minHeight:80,maxHeight:160,overflow:"auto",fontFamily:"JetBrains Mono, monospace",fontSize:13,color:"var(--accent-green)",whiteSpace:"pre-wrap",wordBreak:"break-all",boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:s?c.jsxs(c.Fragment,{children:[c.jsx("span",{children:e.txString}),c.jsx("div",{ref:i})]}):c.jsx("span",{style:{color:"var(--text-disabled)"},children:"运行 UART 发送代码以查看输出"})})]}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:6},children:"RX 输入 — 模拟外部设备发送"}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("input",{type:"text",value:n,onChange:a=>r(a.target.value),onKeyDown:o,placeholder:"输入要发送的文本...",style:{flex:1,padding:"8px 12px",background:"var(--bg-input)",border:"1px solid var(--border-default)",borderRadius:6,color:"var(--text-secondary)",fontSize:13,fontFamily:"JetBrains Mono, monospace",outline:"none"}}),c.jsx("button",{onClick:l,disabled:n.length===0,style:{padding:"8px 20px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:6,color:n.length>0?"var(--accent-blue)":"var(--text-disabled)",cursor:n.length>0?"pointer":"default",fontSize:12,fontWeight:600,fontFamily:"Inter"},children:"发送"})]})]}),c.jsx("div",{style:{marginTop:10,fontSize:10,color:"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:"串口输入逐字节填充 RX 缓冲区，运行 USART1→DR 读取代码接收数据"})]})}function FE(){const e=H(l=>l.adcState),t=H(l=>l.setAdcAnalogVoltage),n=H(l=>l.runCode),r=Math.round(e.voltage*100),i=e.voltage/3.3*100;return c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"ADC1 电压监控"}),e.eoc&&c.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--accent-green)",background:"#0a2a0f",padding:"2px 8px",borderRadius:4,border:"1px solid var(--accent-green)33"},children:"EOC"})]}),c.jsxs("div",{style:{marginBottom:18},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[c.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:"模拟输入"}),c.jsxs("span",{style:{fontSize:16,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[e.voltage.toFixed(2),"V"]})]}),c.jsxs("svg",{width:"100%",height:28,viewBox:"0 0 280 28",preserveAspectRatio:"xMidYMid meet",children:[c.jsx("rect",{x:0,y:6,width:280,height:16,rx:4,fill:"var(--bg-root)",stroke:"var(--border-subtle)",strokeWidth:1}),c.jsx("rect",{x:1,y:7,width:Math.max(0,278*i/100),height:14,rx:3,fill:"var(--accent-green)"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:10,color:"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace",marginTop:3},children:[c.jsx("span",{children:"0V"}),c.jsx("span",{children:"1.65V"}),c.jsx("span",{children:"3.3V"})]})]}),c.jsxs("div",{style:{marginBottom:18},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:8},children:"模拟电压滑块"}),c.jsx("input",{type:"range",min:0,max:330,value:r,onChange:l=>t(parseInt(l.target.value,10)/100),style:{width:"100%",accentColor:"var(--accent-green)"}}),c.jsx("div",{style:{marginTop:8,display:"flex",gap:6},children:[0,.82,1.65,2.47,3.3].map(l=>c.jsxs("button",{onClick:()=>t(l),style:{padding:"3px 10px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:4,color:"var(--text-muted)",cursor:"pointer",fontSize:10,fontFamily:"JetBrains Mono, monospace"},children:[l.toFixed(2),"V"]},l))})]}),c.jsxs("div",{style:{background:"var(--bg-surface)",border:"1px solid var(--border-subtle)",borderRadius:6,padding:"12px 14px",marginBottom:14},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[c.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:"12-bit 结果"}),c.jsxs("span",{style:{fontSize:14,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[e.result,c.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:10,fontSize:12},children:["0x",e.result.toString(16).toUpperCase().padStart(3,"0")]})]})]}),c.jsx(jE,{value:e.result,max:4095,bits:12})]}),c.jsx("button",{onClick:n,style:{width:"100%",padding:"10px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:6,color:"var(--text-secondary)",cursor:"pointer",fontSize:13,fontFamily:"Inter",fontWeight:500},children:"运行 ADC 转换"})]})}function jE({value:e,max:t,bits:n}){const r=Math.round(e/t*n);return c.jsx("div",{style:{display:"flex",gap:2,alignItems:"center"},children:Array.from({length:n},(i,l)=>c.jsx("div",{style:{flex:1,height:6,borderRadius:1,background:l<r?"var(--accent-green)":"var(--bg-raised)"}},l))})}function zE(){const e=H(i=>i.dacState),t=H(i=>i.runCode),n=e.outputCode>0||e.voltage>0,r=e.voltage/3.3*100;return c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"DAC 电压输出"}),c.jsxs("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:n?"var(--accent-green)":"var(--text-disabled)",background:n?"#0a2a0f":"var(--bg-raised)",padding:"2px 8px",borderRadius:4,border:`1px solid ${n?"var(--accent-green)33":"var(--border-default)"}`},children:["EN1 ",n?"ON":"OFF"]})]}),c.jsxs("div",{style:{marginBottom:18},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[c.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:"输出电压"}),c.jsxs("span",{style:{fontSize:16,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[e.voltage.toFixed(3),"V"]})]}),c.jsxs("svg",{width:"100%",height:28,viewBox:"0 0 280 28",preserveAspectRatio:"xMidYMid meet",children:[c.jsx("rect",{x:0,y:6,width:280,height:16,rx:4,fill:"var(--bg-root)",stroke:"var(--border-subtle)",strokeWidth:1}),c.jsx("rect",{x:1,y:7,width:Math.max(0,278*r/100),height:14,rx:3,fill:"var(--accent-blue)"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:10,color:"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace",marginTop:3},children:[c.jsx("span",{children:"0V"}),c.jsx("span",{children:"1.65V"}),c.jsx("span",{children:"3.3V"})]})]}),c.jsxs("div",{style:{background:"var(--bg-surface)",border:"1px solid var(--border-subtle)",borderRadius:6,padding:"12px 14px",marginBottom:14},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[c.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:"12-bit 输出代码"}),c.jsxs("span",{style:{fontSize:14,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[e.outputCode,c.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:10,fontSize:12},children:["0x",e.outputCode.toString(16).toUpperCase().padStart(3,"0")]})]})]}),c.jsx(WE,{value:e.outputCode,max:4095,bits:12})]}),!n&&c.jsx("div",{style:{padding:"10px 14px",background:"#2a1a0a",border:"1px solid var(--accent-amber)33",borderRadius:6,marginBottom:14,fontSize:11,color:"var(--accent-amber)",fontFamily:"Inter"},children:"提示：需要在 DAC→CR 寄存器中写 EN1=1 使能输出"}),c.jsx("button",{onClick:t,style:{width:"100%",padding:"10px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:6,color:"var(--text-secondary)",cursor:"pointer",fontSize:13,fontFamily:"Inter",fontWeight:500},children:"运行代码"})]})}function WE({value:e,max:t,bits:n}){const r=Math.round(e/t*n);return c.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:n},(i,l)=>c.jsx("div",{style:{flex:1,height:6,borderRadius:1,background:l<r?"var(--accent-blue)":"var(--bg-raised)"}},l))})}function Sa({active:e,label:t}){return c.jsxs("div",{className:w.led,children:[c.jsx("span",{className:e?w.ledDotOn:w.ledDotOff}),c.jsx("span",{className:e?w.ledLabel:w.ledLabelOff,children:t})]})}function GE(){const e=H(l=>l.spiState),t=H(l=>l.sendSpiByte),[n,r]=T.useState(""),i=()=>{const l=parseInt(n,16);!isNaN(l)&&l>=0&&l<=255&&(t(l),r(""))};return c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"SPI1 主模式"}),c.jsxs("div",{style:{display:"flex",gap:12},children:[c.jsx(Sa,{label:"TXE",active:e.txe}),c.jsx(Sa,{label:"RXNE",active:e.rxne}),c.jsx(Sa,{label:"BSY",active:e.bsy})]})]}),c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:16},children:e.mode}),c.jsxs("div",{style:{marginBottom:16},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:6},children:"TX 发送 (HEX)"}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("input",{type:"text",value:n,onChange:l=>r(l.target.value),onKeyDown:l=>l.key==="Enter"&&i(),placeholder:"例如: 42",style:{flex:1,padding:"8px 12px",background:"var(--bg-input)",border:"1px solid var(--border-default)",borderRadius:6,color:"var(--text-secondary)",fontSize:13,fontFamily:"JetBrains Mono, monospace",outline:"none"}}),c.jsx("button",{onClick:i,disabled:n.length===0,style:{padding:"8px 20px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:6,color:n.length>0?"var(--accent-blue)":"var(--text-disabled)",cursor:n.length>0?"pointer":"default",fontSize:12,fontWeight:600,fontFamily:"Inter"},children:"发送"})]})]}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:6},children:"RX 接收"}),c.jsx("div",{style:{background:"var(--bg-root)",border:"1px solid var(--border-subtle)",borderRadius:6,padding:"16px",minHeight:70,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:e.rxne?c.jsxs("div",{style:{textAlign:"center"},children:[c.jsxs("div",{style:{fontSize:28,fontFamily:"JetBrains Mono, monospace",color:"var(--accent-green)",fontWeight:600},children:["0x",e.receivedByte.toString(16).toUpperCase().padStart(2,"0")]}),c.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",marginTop:4},children:e.receivedByte})]}):c.jsx("span",{style:{color:"var(--text-disabled)",fontSize:13,fontFamily:"Inter"},children:"未接收到数据"})})]}),c.jsx("div",{style:{marginTop:10,fontSize:10,color:"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:"主模式写 DR 即开始全双工传输 · BR=0 时 16 tick 完成"})]})}function Mn({active:e,label:t}){return c.jsxs("div",{className:w.led,children:[c.jsx("span",{className:e?w.ledDotOn:w.ledDotOff}),c.jsx("span",{className:e?w.ledLabel:w.ledLabelOff,children:t})]})}const ya={idle:"var(--text-disabled)",start:"var(--accent-amber)",addressing:"var(--accent-blue)",tx:"var(--accent-green)",rx:"var(--accent-purple)"},UE={idle:"IDLE",start:"START",addressing:"ADDR","tx/rx":"TX/RX"};function HE(){const e=H(p=>p.i2cState),t=H(p=>p.sendI2cStart),n=H(p=>p.sendI2cByte),r=H(p=>p.sendI2cStop),[i,l]=T.useState("0x28"),[o,s]=T.useState(""),a=()=>{const p=parseInt(i,16);isNaN(p)||t(p&127)},u=()=>{const p=parseInt(o,16);isNaN(p)||n(p),s("")},f=["idle","start","addressing","tx/rx"],d=e.state==="tx"||e.state==="rx"?"tx/rx":e.state;return c.jsxs("div",{children:[c.jsx("h3",{className:w.heading,style:{margin:"0 0 16px"},children:"I2C1 状态机"}),c.jsx("div",{style:{display:"flex",alignItems:"center",gap:0,marginBottom:20,background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:f.map((p,h)=>{const g=p===d;return c.jsxs("div",{style:{display:"flex",alignItems:"center",flex:1},children:[c.jsx("div",{style:{flex:1,textAlign:"center",padding:"8px 0",borderRadius:6,fontSize:10,fontFamily:"JetBrains Mono, monospace",fontWeight:600,background:g?(ya[p]||"#333")+"22":"transparent",color:g?ya[p]:"var(--text-disabled)",border:g?`1px solid ${ya[p]}44`:"1px solid transparent"},children:UE[p]||p}),h<f.length-1&&c.jsx("span",{style:{color:"var(--border-default)",margin:"0 4px",fontSize:12},children:"→"})]},p)})}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:20},children:[c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[c.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",minWidth:36,fontFamily:"JetBrains Mono, monospace"},children:"地址"}),c.jsx("input",{value:i,onChange:p=>l(p.target.value),style:{width:80,padding:"6px 10px",background:"var(--bg-input)",border:"1px solid var(--border-default)",borderRadius:4,color:"var(--text-secondary)",fontSize:12,fontFamily:"JetBrains Mono, monospace",outline:"none"}}),c.jsx("button",{onClick:a,style:{padding:"6px 14px",background:"var(--bg-raised)",border:"1px solid var(--accent-amber)44",borderRadius:4,color:"var(--accent-amber)",cursor:"pointer",fontSize:11,fontFamily:"JetBrains Mono, monospace",fontWeight:600},children:"START"}),c.jsx("button",{onClick:r,style:{padding:"6px 14px",background:"var(--bg-raised)",border:"1px solid var(--accent-red)44",borderRadius:4,color:"var(--accent-red)",cursor:"pointer",fontSize:11,fontFamily:"JetBrains Mono, monospace",fontWeight:600},children:"STOP"})]}),c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[c.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",minWidth:36,fontFamily:"JetBrains Mono, monospace"},children:"数据"}),c.jsx("input",{value:o,onChange:p=>s(p.target.value),onKeyDown:p=>p.key==="Enter"&&u(),placeholder:"0xAB",style:{width:80,padding:"6px 10px",background:"var(--bg-input)",border:"1px solid var(--border-default)",borderRadius:4,color:"var(--text-secondary)",fontSize:12,fontFamily:"JetBrains Mono, monospace",outline:"none"}}),c.jsx("button",{onClick:u,disabled:e.state!=="tx",style:{padding:"6px 14px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:4,color:e.state==="tx"?"var(--accent-green)":"var(--text-disabled)",cursor:e.state==="tx"?"pointer":"default",fontSize:11,fontFamily:"JetBrains Mono, monospace",fontWeight:600},children:"发送"})]})]}),c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:14,marginBottom:16},children:[c.jsx(Mn,{active:e.pe,label:"PE"}),c.jsx(Mn,{active:e.sb,label:"SB"}),c.jsx(Mn,{active:e.addr,label:"ADDR"}),c.jsx(Mn,{active:e.txe,label:"TXE"}),c.jsx(Mn,{active:e.rxne,label:"RXNE"}),c.jsx(Mn,{active:e.btf,label:"BTF"}),c.jsx(Mn,{active:e.busy,label:"BUSY"})]}),c.jsxs("div",{style:{padding:"10px 14px",background:"var(--bg-surface)",borderRadius:6,border:"1px solid var(--border-subtle)",fontSize:12,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:["DR: 0x",e.lastData.toString(16).padStart(2,"0").toUpperCase(),"  ",c.jsx("span",{style:{color:"var(--text-disabled)"},children:e.state==="rx"?"RX 模式":e.state==="tx"?"TX 模式":e.state.toUpperCase()})]})]})}function VE({ch:e}){const t=e.total>0?Math.round((e.total-e.remaining)/e.total*100):0,n=e.direction==="p2m"?"P→M":e.direction==="m2p"?"M→P":"M→M";return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:6,background:e.enabled?"var(--bg-surface)":"var(--bg-root)",border:`1px solid ${e.enabled?"var(--accent-green)33":"var(--border-subtle)"}`,fontSize:11,fontFamily:"JetBrains Mono, monospace"},children:[c.jsxs("span",{style:{color:"var(--text-muted)",minWidth:28,fontWeight:600},children:["CH",e.channel]}),c.jsx("span",{style:{width:8,height:8,borderRadius:"50%",flexShrink:0,background:e.enabled?"var(--accent-green)":"var(--bg-raised)",border:`1px solid ${e.enabled?"var(--accent-green)":"var(--border-default)"}`,boxShadow:e.enabled?"0 0 6px var(--accent-green)44":"none"}}),c.jsx("span",{style:{color:"var(--text-secondary)",minWidth:36},children:n}),e.circular&&c.jsx("span",{style:{color:"var(--accent-amber)",fontSize:9,fontWeight:600,background:"#2a1a0a",padding:"1px 6px",borderRadius:3,border:"1px solid var(--accent-amber)33"},children:"CIRC"}),c.jsxs("span",{style:{color:"var(--text-muted)",minWidth:64},children:[e.remaining,"/",e.total]}),c.jsx("div",{style:{flex:1,height:5,background:"var(--bg-raised)",borderRadius:3,overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${t}%`,background:e.enabled?"var(--accent-green)":"var(--border-default)",borderRadius:3,transition:"width 0.3s ease"}})}),c.jsxs("span",{style:{color:"var(--text-muted)",minWidth:32,textAlign:"right"},children:[t,"%"]})]})}function $E(){const e=H(t=>t.dmaState);return c.jsxs("div",{children:[c.jsx("h3",{className:w.heading,style:{margin:"0 0 16px"},children:"DMA1 通道"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:e.channels.map(t=>c.jsx(VE,{ch:t},t.channel))}),e.channels.length===0&&c.jsx("div",{style:{color:"var(--text-disabled)",textAlign:"center",padding:40,fontSize:13,fontFamily:"Inter"},children:"运行代码以查看 DMA 状态"})]})}function KE(){const e=H(r=>r.canState);if(!e)return null;const t={sleep:"睡眠",init:"初始化",normal:"正常"},n={sleep:"var(--text-disabled)",init:"var(--accent-amber)",normal:"var(--accent-green)"};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"CAN1 总线"}),c.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[c.jsxs("div",{style:{padding:"8px 14px",background:"var(--bg-surface)",borderRadius:6,border:`1px solid ${n[e.mode]||"var(--border-default)"}44`,display:"flex",alignItems:"center",gap:10},children:[c.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:n[e.mode]||"var(--text-disabled)"}}),c.jsxs("span",{style:{fontSize:12,color:"var(--text-secondary)",fontFamily:"Inter"},children:["模式: ",t[e.mode]||e.mode]})]}),e.mode==="normal"&&c.jsx("div",{style:{padding:"8px 14px",background:"var(--bg-surface)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:c.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:[(e.baudRate/1e3).toFixed(0)," kbps"]})}),e.btr.loopback&&c.jsx("span",{style:{fontSize:10,color:"var(--accent-amber)",background:"#2a1a0a",padding:"3px 8px",borderRadius:4,fontFamily:"JetBrains Mono, monospace",border:"1px solid var(--accent-amber)33"},children:"环回"}),e.btr.silent&&c.jsx("span",{style:{fontSize:10,color:"var(--accent-blue)",background:"#0a1a2a",padding:"3px 8px",borderRadius:4,fontFamily:"JetBrains Mono, monospace",border:"1px solid var(--accent-blue)33"},children:"静默"})]}),c.jsx(va,{title:"位时序 (BTR)",children:c.jsx("div",{style:{display:"flex",gap:8},children:[{label:"BRP",val:e.btr.brp},{label:"TS1",val:e.btr.ts1},{label:"TS2",val:e.btr.ts2},{label:"SJW",val:e.btr.sjw}].map(r=>c.jsxs("div",{style:{flex:1,background:"var(--bg-surface)",borderRadius:6,padding:"8px",textAlign:"center",border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:r.label}),c.jsx("div",{style:{fontSize:14,color:"var(--text-primary)",fontFamily:"JetBrains Mono, monospace",fontWeight:600,marginTop:2},children:r.val})]},r.label))})}),c.jsx(va,{title:"TX 邮箱",children:c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:e.txMailboxes.map(r=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"var(--bg-surface)",borderRadius:6,border:`1px solid ${r.busy?"var(--accent-amber)33":"var(--border-subtle)"}`,fontSize:11,fontFamily:"JetBrains Mono, monospace"},children:[c.jsxs("span",{style:{color:"var(--text-muted)",minWidth:28},children:["MB",r.mb]}),c.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:r.busy?"var(--accent-amber)":"var(--bg-raised)"}}),r.busy?c.jsxs(c.Fragment,{children:[c.jsxs("span",{style:{color:"var(--accent-blue)"},children:["ID: 0x",r.id.toString(16).toUpperCase()]}),c.jsxs("span",{style:{color:"var(--text-muted)"},children:["DLC: ",r.dlc]}),c.jsxs("span",{style:{color:"var(--accent-green)"},children:["[",r.data.slice(0,r.dlc).map(i=>i.toString(16).padStart(2,"0").toUpperCase()).join(" "),"]"]})]}):c.jsx("span",{style:{color:"var(--text-disabled)"},children:"空闲"})]},r.mb))})}),c.jsx(va,{title:`RX 消息 (${e.rxMessages.length})`,children:e.rxMessages.length===0?c.jsx("div",{style:{fontSize:12,color:"var(--text-disabled)",textAlign:"center",padding:16,fontFamily:"Inter"},children:"无接收消息"}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:e.rxMessages.map((r,i)=>c.jsxs("div",{style:{padding:"8px 12px",background:"#0a2a0f",borderRadius:6,border:"1px solid var(--accent-green)33",fontSize:11,fontFamily:"JetBrains Mono, monospace"},children:[c.jsxs("div",{style:{display:"flex",gap:10,marginBottom:3},children:[c.jsxs("span",{style:{color:"var(--accent-blue)"},children:["ID: 0x",r.id.toString(16).toUpperCase(),r.ide?" (EXT)":" (STD)"]}),c.jsxs("span",{style:{color:"var(--text-muted)"},children:["DLC: ",r.dlc]}),r.rtr&&c.jsx("span",{style:{color:"var(--accent-amber)"},children:"RTR"})]}),c.jsxs("span",{style:{color:"var(--accent-green)"},children:["[",r.data.slice(0,r.dlc).map(l=>l.toString(16).padStart(2,"0").toUpperCase()).join(" "),"]"]})]},i))})})]})}function va({title:e,children:t}){return c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:8,fontWeight:600},children:e}),t]})}function ai({label:e,active:t,color:n}){return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:4,background:t?`${n}18`:"var(--bg-surface)",border:`1px solid ${t?n+"44":"var(--border-subtle)"}`},children:[c.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?n:"var(--bg-raised)"}}),c.jsxs("span",{style:{fontSize:10,color:t?"var(--text-secondary)":"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:[e,": ",t?"ON":"OFF"]})]})}function nr({label:e,value:t,unit:n}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:6,padding:"8px 12px",border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:e}),c.jsxs("div",{style:{fontSize:15,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[t,n&&c.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",marginLeft:4},children:n})]})]})}function XE(){const e=H(r=>r.advTimState);if(!e)return null;const{bdtr:t,channels:n}=e;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"TIM1 高级定时器"}),c.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[c.jsx(ai,{label:"运行",active:e.running,color:"var(--accent-green)"}),c.jsx(ai,{label:"MOE",active:t.moe,color:"var(--accent-blue)"}),c.jsx(ai,{label:"刹车使能",active:t.breakEnable,color:"var(--accent-amber)"}),c.jsx(ai,{label:"刹车状态",active:t.breakActive,color:"var(--accent-red)"}),c.jsx(ai,{label:"AOE",active:t.aoe,color:"var(--accent-purple)"})]}),c.jsx(xa,{title:"BDTR 配置",children:c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:[c.jsx(nr,{label:"死区 DTG",value:t.dtg.toString(),unit:"raw"}),c.jsx(nr,{label:"死区时间",value:`${t.deadTimeNs}`,unit:"ns"}),c.jsx(nr,{label:"LOCK",value:t.lock.toString(),unit:"级"}),c.jsx(nr,{label:"计数器",value:e.counter.toString()})]})}),c.jsx(xa,{title:"通道状态",children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:11},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace",fontSize:10},children:[c.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"通道"}),c.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"CCR"}),c.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"主输出"}),c.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"互补"}),c.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"死区"})]})}),c.jsx("tbody",{children:n.map(r=>c.jsxs("tr",{style:{borderTop:"1px solid var(--border-subtle)"},children:[c.jsxs("td",{style:{padding:"6px 8px",color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:["CH",r.channel]}),c.jsx("td",{style:{padding:"6px 8px",fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)"},children:r.ccr.toString().padStart(4,"0")}),c.jsx("td",{style:{padding:"6px 8px"},children:c.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:r.enabled?r.output?"var(--accent-green)":"var(--bg-raised)":"var(--bg-surface)",border:r.enabled?"none":"1px solid var(--border-default)"}})}),c.jsx("td",{style:{padding:"6px 8px"},children:c.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:r.complementaryEnabled?r.complementaryOutput?"var(--accent-green)":"var(--bg-raised)":"var(--bg-surface)",border:r.complementaryEnabled?"none":"1px solid var(--border-default)"}})}),c.jsx("td",{style:{padding:"6px 8px",fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",fontSize:10},children:r.complementaryEnabled?`${r.deadTimeNs}ns`:"-"})]},r.channel))})]})}),c.jsx(xa,{title:"频率",children:c.jsxs("div",{style:{display:"flex",gap:12},children:[c.jsx(nr,{label:"频率",value:`${(e.frequency/1e3).toFixed(1)}`,unit:"kHz"}),c.jsx(nr,{label:"ARR",value:e.arr.toString()})]})})]})}function xa({title:e,children:t}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function ui({label:e,active:t,color:n}){return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:4,background:t?`${n}18`:"var(--bg-surface)",border:`1px solid ${t?n+"44":"var(--border-subtle)"}`},children:[c.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?n:"var(--bg-raised)"}}),c.jsx("span",{style:{fontSize:10,color:t?"var(--text-secondary)":"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:e})]})}function Ra({label:e,value:t,unit:n}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:6,padding:"8px 12px",border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:e}),c.jsxs("div",{style:{fontSize:15,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[t,n&&c.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",marginLeft:4},children:n})]})]})}function qE(){const e=H(n=>n.rtcState);if(!e)return null;const t=e.reload>0?Math.min(e.counter/e.reload*100,100):0;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"RTC 实时时钟"}),c.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[c.jsx(ui,{label:"配置模式",active:e.configMode,color:"var(--accent-amber)"}),c.jsx(ui,{label:"RTOFF",active:e.rtoff,color:"var(--accent-green)"}),c.jsx(ui,{label:"RSF",active:e.rsf,color:"var(--accent-blue)"}),c.jsx(ui,{label:"OWF",active:e.owf,color:"var(--accent-red)"}),c.jsx(ui,{label:"SECIE",active:e.secie,color:"var(--accent-purple)"})]}),c.jsx(Ia,{title:"运行时间",children:c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:36,fontFamily:"JetBrains Mono, monospace",color:"var(--accent-green)",fontWeight:700,letterSpacing:4},children:e.seconds.toString().padStart(5,"0")}),c.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:6,fontFamily:"JetBrains Mono, monospace"},children:"秒"})]})}),c.jsxs(Ia,{title:"计数器",children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},children:[c.jsx(Ra,{label:"CNT",value:e.counter.toString()}),c.jsx(Ra,{label:"RL",value:e.reload.toString()}),c.jsx(Ra,{label:"预分频",value:e.prescaler.toString()})]}),c.jsxs("div",{style:{marginTop:12},children:[c.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",marginBottom:6,display:"flex",justifyContent:"space-between",fontFamily:"JetBrains Mono, monospace"},children:[c.jsx("span",{children:"计数器进度"}),c.jsxs("span",{children:[Math.round(t),"%"]})]}),c.jsx("div",{style:{height:6,background:"var(--bg-raised)",borderRadius:3,overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${t}%`,background:"var(--accent-green)",borderRadius:3,transition:"width 0.3s ease"}})})]})]}),c.jsx(Ia,{title:"控制寄存器",children:c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,fontSize:11},children:[c.jsxs("div",{style:{color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:["写入保护: ",c.jsx("span",{style:{color:e.configMode?"var(--accent-amber)":"var(--accent-green)"},children:e.configMode?"只可写PRL/CNT":"只读"})]}),c.jsxs("div",{style:{color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:["操作状态: ",c.jsx("span",{style:{color:e.rtoff?"var(--accent-green)":"var(--text-muted)"},children:e.rtoff?"运行中":"初始化"})]})]})})]})}function Ia({title:e,children:t}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function rr({label:e,active:t,color:n}){return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:4,background:t?`${n}18`:"var(--bg-surface)",border:`1px solid ${t?n+"44":"var(--border-subtle)"}`},children:[c.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?n:"var(--bg-raised)"}}),c.jsx("span",{style:{fontSize:10,color:t?"var(--text-secondary)":"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:e})]})}function ir({label:e,value:t,unit:n}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:6,padding:"8px 12px",border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:e}),c.jsxs("div",{style:{fontSize:15,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[t,n&&c.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",marginLeft:4},children:n})]})]})}function QE(){const e=H(i=>i.iwdgState),t=H(i=>i.wwdgState);if(!e||!t)return null;const n=e.reload>0?(e.reload-e.counter)/e.reload*100:0,r=e.counter<e.reload*.3;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"看门狗定时器"}),c.jsxs(Dp,{title:"IWDG 独立看门狗",children:[c.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[c.jsx(rr,{label:"已启动",active:e.started,color:"var(--accent-green)"}),c.jsx(rr,{label:"解锁",active:e.unlockActive,color:"var(--accent-amber)"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},children:[c.jsx(ir,{label:"计数器",value:e.counter.toString()}),c.jsx(ir,{label:"重装载值",value:e.reload.toString()}),c.jsx(ir,{label:"预分频",value:`/ ${e.prescalerDiv}`})]}),c.jsxs("div",{style:{marginTop:12},children:[c.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",marginBottom:6,display:"flex",justifyContent:"space-between",fontFamily:"JetBrains Mono, monospace"},children:[c.jsx("span",{children:"倒计时"}),c.jsxs("span",{children:[Math.round(n),"%"]})]}),c.jsx("div",{style:{height:6,background:"var(--bg-raised)",borderRadius:3,overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${n}%`,background:r?"var(--accent-red)":"var(--accent-amber)",borderRadius:3,transition:"width 0.3s ease"}})})]}),c.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:8,fontFamily:"JetBrains Mono, monospace"},children:["LSI: 40kHz → ",(4e4/e.prescalerDiv).toFixed(0)," Hz 计数频率",e.started&&` → 超时: ${(e.counter*e.prescalerDiv/4e4).toFixed(3)}s`]})]}),c.jsxs(Dp,{title:"WWDG 窗口看门狗",children:[c.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[c.jsx(rr,{label:"已启动",active:t.started,color:"var(--accent-green)"}),c.jsx(rr,{label:"EWI使能",active:t.ewi,color:"var(--accent-blue)"}),c.jsx(rr,{label:"EWIF",active:t.ewif,color:"var(--accent-purple)"}),c.jsx(rr,{label:"窗口内",active:t.refreshAllowed,color:"#22d3ee"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},children:[c.jsx(ir,{label:"计数器",value:`0x${t.counter.toString(16)}`}),c.jsx(ir,{label:"窗口值",value:`0x${t.windowValue.toString(16)}`}),c.jsx(ir,{label:"预分频",value:`/ ${t.prescalerDiv}`})]}),c.jsxs("div",{style:{marginTop:12},children:[c.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginBottom:6,fontFamily:"JetBrains Mono, monospace"},children:"窗口区间"}),c.jsxs("div",{style:{height:24,background:"var(--bg-raised)",borderRadius:4,position:"relative",overflow:"hidden"},children:[c.jsx("div",{style:{position:"absolute",left:0,width:`${64/127*100}%`,height:"100%",background:"#ef444420",borderRight:"1px dashed #ef444466"}}),c.jsx("div",{style:{position:"absolute",left:`${64/127*100}%`,width:`${(t.windowValue-64)/127*100}%`,height:"100%",background:"#4ade8020"}}),c.jsx("div",{style:{position:"absolute",left:`${t.counter/127*100}%`,top:0,width:2,height:"100%",background:"var(--text-primary)",transition:"left 0.3s ease"}})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"var(--text-disabled)",marginTop:4,fontFamily:"JetBrains Mono, monospace"},children:[c.jsx("span",{children:"0x00 复位"}),c.jsx("span",{children:"0x3F"}),c.jsxs("span",{children:["0x",t.windowValue.toString(16)," 窗口"]}),c.jsx("span",{children:"0x7F"})]})]}),c.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:8,fontFamily:"JetBrains Mono, monospace"},children:["PCLK1: 36MHz → ",(36e6/(4096*t.prescalerDiv)).toFixed(0)," Hz 计数频率"]})]})]})}function Dp({title:e,children:t}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function lr({label:e,active:t,color:n}){return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:4,background:t?`${n}18`:"var(--bg-surface)",border:`1px solid ${t?n+"44":"var(--border-subtle)"}`},children:[c.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?n:"var(--bg-raised)"}}),c.jsx("span",{style:{fontSize:10,color:t?"var(--text-secondary)":"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:e})]})}const Pa={run:{label:"RUN",color:"var(--accent-green)",description:"正常运行"},sleep:{label:"SLEEP",color:"#facc15",description:"LPDS=0"},stop:{label:"STOP",color:"var(--accent-amber)",description:"LPDS=1 PDDS=0"},standby:{label:"STANDBY",color:"var(--accent-red)",description:"LPDS=1 PDDS=1"}},JE=["2.2V","2.3V","2.4V","2.5V","2.6V","2.7V","2.8V","2.9V"];function YE(){const e=H(u=>u.pwrMode),t=H(u=>u.pwrDbpEnabled),n=H(u=>u.pwrWuf),r=H(u=>u.pwrSbf),i=H(u=>u.pwrPvde),l=H(u=>u.pwrPls),o=H(u=>u.pwrPvdo),s=H(u=>u.pwrEwup),a=Pa[e]||Pa.run;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"PWR 电源控制"}),c.jsx(ci,{title:"当前模式",children:c.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[c.jsx("div",{style:{padding:"8px 20px",borderRadius:6,background:`${a.color}18`,border:`1px solid ${a.color}44`},children:c.jsx("span",{style:{fontSize:20,fontWeight:700,fontFamily:"JetBrains Mono, monospace",color:a.color},children:a.label})}),c.jsx(lr,{label:"DBP",active:t,color:"var(--accent-blue)"})]})}),c.jsx(ci,{title:"低功耗模式",children:c.jsx("div",{style:{display:"flex",gap:6},children:["sleep","stop","standby"].map(u=>{const f=Pa[u],d=e===u;return c.jsxs("div",{style:{flex:1,padding:"10px 8px",textAlign:"center",borderRadius:6,background:d?`${f.color}14`:"var(--bg-root)",border:`1px solid ${d?f.color+"44":"var(--border-subtle)"}`},children:[c.jsx("div",{style:{fontSize:13,fontFamily:"JetBrains Mono, monospace",fontWeight:600,color:d?f.color:"var(--text-disabled)"},children:f.label}),c.jsx("div",{style:{fontSize:9,color:"var(--text-muted)",marginTop:4,fontFamily:"JetBrains Mono, monospace"},children:f.description})]},u)})})}),c.jsx(ci,{title:"状态标志",children:c.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[c.jsx(lr,{label:"WUF",active:n,color:"var(--accent-amber)"}),c.jsx(lr,{label:"SBF",active:r,color:"var(--accent-blue)"}),c.jsx(lr,{label:"EWUP",active:s,color:"var(--accent-purple)"})]})}),c.jsx(ci,{title:"PVD 电压检测",children:c.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[c.jsx(lr,{label:"PVDE",active:i,color:"var(--accent-blue)"}),c.jsx(lr,{label:"PVDO",active:o,color:"var(--accent-red)"}),i&&c.jsxs("span",{style:{fontSize:11,color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:["PLS=",l," (",JE[l]||"?",")"]})]})}),c.jsx(ci,{title:"功耗对比",children:c.jsx("div",{style:{display:"flex",gap:8},children:[{label:"Sleep",current:"~5mA",color:"#facc15"},{label:"Stop",current:"~20μA",color:"var(--accent-amber)"},{label:"Standby",current:"~2μA",color:"var(--accent-red)"}].map(u=>c.jsxs("div",{style:{flex:1,textAlign:"center",padding:"10px 8px",background:"var(--bg-root)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:u.label}),c.jsx("div",{style:{fontSize:14,color:u.color,fontFamily:"JetBrains Mono, monospace",fontWeight:600,marginTop:4},children:u.current})]},u.label))})})]})}function ci({title:e,children:t}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}const ZE={running:"var(--accent-green)",ready:"#facc15",blocked:"var(--accent-amber)",suspended:"var(--text-muted)"};function eb(){const e=H(o=>o.rtosTasks),t=H(o=>o.rtosQueues),n=H(o=>o.rtosSemaphores),r=H(o=>o.rtosTickCount),i=H(o=>o.rtosSchedulerStarted),l=H(o=>o.rtosCurrentTaskId);return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"FreeRTOS 任务调度"}),c.jsxs("div",{className:w.statusBar,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[c.jsx("span",{className:i?w.ledDotOn:w.ledDotOff}),c.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",fontWeight:600,color:i?"var(--accent-green)":"var(--text-disabled)"},children:i?"SCHEDULER ON":"SCHEDULER OFF"})]}),c.jsxs("span",{className:w.valueLabel,children:["Tick: ",r]}),c.jsxs("span",{className:w.valueLabel,children:["Current: ",c.jsx("span",{style:{color:"var(--accent-blue)"},children:l||"idle"})]})]}),c.jsxs("div",{className:w.section,children:[c.jsxs("div",{className:w.sectionLabel,children:["任务列表 (",e.length,")"]}),e.length===0?c.jsx("div",{style:{fontSize:11,color:"var(--text-disabled)",textAlign:"center",padding:16},children:"暂无任务"}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:e.map(o=>{const s=o.id===l;return c.jsxs("div",{className:s?w.itemRowActive:w.itemRow,children:[c.jsx("span",{className:w.chipLabel,style:{minWidth:60,color:"var(--text-primary)"},children:o.name}),c.jsxs("span",{className:w.pill,style:{background:"var(--bg-surface)",color:"var(--text-muted)"},children:["P=",o.priority]}),c.jsx("span",{style:{marginLeft:"auto",fontSize:10,fontFamily:"JetBrains Mono, monospace",fontWeight:600,color:ZE[o.state]||"var(--text-muted)"},children:o.state.toUpperCase()}),o.state==="blocked"&&c.jsxs("span",{style:{fontSize:9,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:["→",o.blockedUntil]})]},o.id)})})]}),c.jsxs("div",{className:w.section,children:[c.jsxs("div",{className:w.sectionLabel,children:["队列 (",t.length,")"]}),t.length===0?c.jsx("div",{style:{fontSize:11,color:"var(--text-disabled)",textAlign:"center",padding:16},children:"暂无队列"}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:t.map(o=>{const s=o.length?o.items.length/o.length*100:0;return c.jsxs("div",{className:w.itemRow,children:[c.jsx("span",{className:w.chipLabel,style:{color:"var(--text-primary)"},children:o.name}),c.jsxs("span",{className:w.valueLabel,style:{minWidth:44},children:[o.items.length,"/",o.length]}),c.jsx("div",{className:w.miniBar,children:c.jsx("div",{className:w.miniBarFill,style:{width:`${s}%`,background:"var(--accent-amber)"}})})]},o.id)})})]}),c.jsxs("div",{className:w.section,children:[c.jsxs("div",{className:w.sectionLabel,children:["信号量 (",n.length,")"]}),n.length===0?c.jsx("div",{style:{fontSize:11,color:"var(--text-disabled)",textAlign:"center",padding:16},children:"暂无信号量"}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:n.map(o=>{const s=o.maxCount?o.count/o.maxCount*100:0;return c.jsxs("div",{className:w.itemRow,children:[c.jsx("span",{className:w.chipLabel,style:{color:"var(--text-primary)"},children:o.name}),c.jsxs("span",{className:w.valueLabel,style:{minWidth:44},children:[o.count,"/",o.maxCount]}),c.jsx("div",{className:w.miniBar,children:c.jsx("div",{className:w.miniBarFill,style:{width:`${s}%`,background:"var(--accent-green)"}})})]},o.id)})})]})]})}function tb(){const e=H(l=>l.fsMounted),t=H(l=>l.fsFiles),n=H(l=>l.fsOpenFilePath),r=H(l=>l.fsOpenFileCursor),i=H(l=>l.fsOperationLog);return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"FatFS 文件系统"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap",padding:"10px 14px",background:"var(--bg-surface)",borderRadius:8,border:"1px solid var(--border-subtle)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[c.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:e?"var(--accent-green)":"var(--accent-red)",boxShadow:e?"0 0 6px var(--accent-green)44":"0 0 6px var(--accent-red)33"}}),c.jsx("span",{style:{fontSize:11,fontWeight:600,fontFamily:"JetBrains Mono, monospace",color:e?"var(--accent-green)":"var(--accent-red)"},children:e?"MOUNTED":"NOT MOUNTED"})]}),n&&c.jsxs("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:["Open: ",c.jsx("span",{style:{color:"var(--accent-blue)"},children:n})," (cursor: ",r,")"]})]}),c.jsx(Mp,{title:`文件列表 (${t.length})`,children:t.length===0?c.jsx("div",{style:{fontSize:12,color:"var(--text-disabled)",textAlign:"center",padding:20,fontFamily:"Inter"},children:"无文件"}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:t.map((l,o)=>{const s=n===l.name;return c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",borderRadius:6,background:s?"var(--bg-raised)":"var(--bg-root)",border:`1px solid ${s?"var(--accent-green)44":"var(--border-subtle)"}`},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("span",{style:{fontSize:9,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:l.name.endsWith(".txt")?"📄":l.name.endsWith(".bin")?"📦":"📁"}),c.jsx("span",{style:{fontSize:12,color:"var(--text-primary)",fontFamily:"JetBrains Mono, monospace"},children:l.name})]}),c.jsxs("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:[l.size," bytes"]})]},o)})})}),c.jsx(Mp,{title:`操作日志 (${i.length})`,children:i.length===0?c.jsx("div",{style:{fontSize:12,color:"var(--text-disabled)",textAlign:"center",padding:20,fontFamily:"Inter"},children:"暂无操作"}):c.jsx("div",{style:{maxHeight:180,overflow:"auto",fontFamily:"JetBrains Mono, monospace",fontSize:10,color:"var(--text-muted)",lineHeight:2.2},children:i.map((l,o)=>c.jsx("div",{children:l},o))})})]})}function Mp({title:e,children:t}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function nb(){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"调试技术"}),c.jsx(Fl,{title:"SWD 调试接口",children:c.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{pin:"PA14",signal:"SWCLK",color:"var(--accent-amber)"},{pin:"PA13",signal:"SWDIO",color:"var(--accent-blue)"},{pin:"VCC",signal:"3.3V",color:"var(--accent-red)"},{pin:"GND",signal:"GND",color:"var(--text-muted)"}].map(e=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"var(--bg-root)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:[c.jsx("span",{style:{fontSize:11,color:e.color,fontFamily:"JetBrains Mono, monospace",fontWeight:600},children:e.pin}),c.jsxs("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:["→ ",e.signal]})]},e.pin))})}),c.jsx(Fl,{title:"HardFault 常见原因",children:c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[{cause:"空指针访问",example:"*(uint32_t*)0x00000000 = 0"},{cause:"未对齐访问",example:"*(uint32_t*)0x20000001 = 0"},{cause:"除以零",example:"int x = 1 / 0"},{cause:"栈溢出",example:"递归过深 / 局部变量过大"},{cause:"非法指令",example:"跳转到数据段执行"}].map((e,t)=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"var(--bg-root)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:[c.jsx("span",{style:{fontSize:12,color:"var(--accent-red)",fontFamily:"Inter"},children:e.cause}),c.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:e.example})]},t))})}),c.jsx(Fl,{title:"调试流程",children:c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:["1. 观察现象（LED？串口？）","2. 缩小范围（哪个模块？）","3. 设断点/加打印","4. 查寄存器配置","5. 修复并验证"].map((e,t)=>c.jsx("div",{style:{padding:"6px 12px",borderRadius:4,fontSize:11,color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:e},t))})}),c.jsx(Fl,{title:"调试工具对比",children:c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[{tool:"SWD 断点",scene:"逻辑错误",advantage:"单步、查看变量"},{tool:"printf 串口",scene:"运行时状态",advantage:"简单、实时"},{tool:"逻辑分析仪",scene:"时序问题",advantage:"精确时序"},{tool:"HardFault 分析",scene:"崩溃定位",advantage:"找到根因"}].map((e,t)=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"var(--bg-root)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:[c.jsx("span",{style:{fontSize:12,color:"var(--text-primary)",fontFamily:"Inter",fontWeight:500},children:e.tool}),c.jsxs("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"Inter"},children:[e.scene," — ",e.advantage]})]},t))})})]})}function Fl({title:e,children:t}){return c.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[c.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function rb(){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{className:w.heading,style:{margin:0},children:"综合项目：数据采集系统"}),c.jsxs("div",{className:w.section,children:[c.jsx("div",{className:w.sectionLabel,children:"系统框图"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[{label:"传感器",color:"var(--accent-green)"},{label:"ADC1 (CH0)",color:"var(--accent-blue)",arrow:!0},{label:"SRAM Buffer[100]",color:"var(--accent-amber)",arrow:!0,sub:"DMA"},{label:"USART1 → 上位机",color:"var(--accent-red)",arrow:!0}].map((e,t)=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[t>0&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[c.jsx("span",{style:{color:"var(--border-default)",fontSize:18,fontFamily:"JetBrains Mono, monospace",lineHeight:1},children:"↓"}),e.sub&&c.jsxs("span",{style:{fontSize:9,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace",marginTop:-2},children:["(",e.sub,")"]})]}),c.jsx("div",{style:{padding:"10px 24px",borderRadius:6,background:`${e.color}14`,border:`1px solid ${e.color}44`},children:c.jsx("span",{className:w.chipLabel,style:{color:e.color},children:e.label})})]},e.label))}),c.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:24,marginTop:12},children:[c.jsx("span",{className:w.valueLabel,children:"TIM2 (触发)"}),c.jsx("span",{className:w.valueLabel,children:"PA5 (LED)"})]})]}),c.jsxs("div",{className:w.section,children:[c.jsx("div",{className:w.sectionLabel,children:"引脚分配"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[{pin:"PA0",func:"ADC1 IN0",color:"var(--accent-blue)"},{pin:"PA9",func:"USART1 TX",color:"var(--accent-amber)"},{pin:"PA5",func:"LED 指示",color:"var(--accent-green)"},{pin:"PA14",func:"SWCLK (调试)",color:"#facc15"},{pin:"PA13",func:"SWDIO (调试)",color:"#facc15"}].map(e=>c.jsxs("div",{className:w.dataRow,children:[c.jsx("span",{className:w.chipLabel,style:{color:e.color,minWidth:48},children:e.pin}),c.jsx("span",{style:{fontSize:11,color:"var(--text-secondary)"},children:e.func})]},e.pin))})]}),c.jsxs("div",{className:w.section,children:[c.jsx("div",{className:w.sectionLabel,children:"使用的外设"}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["GPIOA","RCC","ADC1","TIM2","DMA1","USART1","NVIC"].map(e=>c.jsx("span",{className:w.pill,style:{padding:"4px 12px",background:"var(--bg-root)",border:"1px solid var(--border-subtle)",color:"var(--text-muted)"},children:e},e))})]}),c.jsxs("div",{className:w.section,children:[c.jsx("div",{className:w.sectionLabel,children:"项目扩展方向"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[{ext:"SD 卡存储",periph:"SDIO + FatFS + DMA"},{ext:"显示屏输出",periph:"SPI (OLED/TFT)"},{ext:"CAN 总线传输",periph:"CAN"},{ext:"RTC 时间戳",periph:"RTC + BKP"},{ext:"I2C 传感器",periph:"I2C"},{ext:"DAC 波形输出",periph:"DAC + TIM + DMA"}].map(e=>c.jsxs("div",{className:w.dataRow,style:{justifyContent:"space-between"},children:[c.jsx("span",{style:{fontSize:12,color:"var(--text-primary)"},children:e.ext}),c.jsx("span",{className:w.valueLabel,children:e.periph})]},e.ext))})]})]})}const ib={"01-intro":"GPIOA","02-gpio":"GPIOA","03-rcc":"RCC","04-nvic":"NVIC","05-systick":"SysTick","06-tim":"TIM2","07-pwm":"TIM2","08-adc":"ADC1","09-uart":"USART1","10-dac":"DAC","11-spi":"SPI1","12-i2c":"I2C1","13-dma":"DMA1","14-can":"CAN1","15-adv-tim":"TIM1","16-rtc":"RTC","17-wdg":"IWDG","18-pwr":"PWR","19-freertos":"RTOS","20-fs":"FATFS","21-debug":"GPIOA","22-project":"GPIOA"};function lb(e){return ib[e]??"GPIOA"}const Lp={"01-intro":`// 1. 使能 GPIOA 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA0 为推挽输出
GPIO_InitTypeDef cfg;
cfg.GPIO_Pin = GPIO_Pin_0;
cfg.GPIO_Speed = GPIO_Speed_50MHz;
cfg.GPIO_Mode = GPIO_Mode_Out_PP;
GPIO_Init(GPIOA, &cfg);

// 3. 点亮 PA0
GPIO_SetBits(GPIOA, GPIO_Pin_0);
`,"02-gpio":`// 1. 使能 GPIOA 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA0 为推挽输出，50MHz
GPIO_InitTypeDef cfg;
cfg.GPIO_Pin = GPIO_Pin_0;
cfg.GPIO_Speed = GPIO_Speed_50MHz;
cfg.GPIO_Mode = GPIO_Mode_Out_PP;
GPIO_Init(GPIOA, &cfg);

// 3. 设置 PA0 输出高电平
GPIO_SetBits(GPIOA, GPIO_Pin_0);
`,"03-rcc":`// 配置系统时钟为 72MHz
// 使能 HSE (8MHz), PLL x9 = 72MHz
RCC_HSEConfig(RCC_HSE_ON);

// 等待 HSE 就绪
while (RCC_GetFlagStatus(RCC_FLAG_HSERDY) == RESET);

// 配置 PLL: HSE 作为输入, 9 倍频
RCC_PLLConfig(RCC_PLLSource_HSE_Div1, RCC_PLLMul_9);
RCC_PLLCmd(ENABLE);

// 等待 PLL 就绪
while (RCC_GetFlagStatus(RCC_FLAG_PLLRDY) == RESET);

// 切换到 PLL 作为系统时钟
RCC_SYSCLKConfig(RCC_SYSCLKSource_PLLCLK);
`,"04-nvic":`// 配置 EXTI0 中断 (PA0)
// 1. 使能 AFIO 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO, ENABLE);

// 2. 配置 PA0 为中断源
GPIO_EXTILineConfig(GPIO_PortSourceGPIOA, GPIO_PinSource0);

// 3. 配置 EXTI0
EXTI_InitTypeDef exti;
exti.EXTI_Line = EXTI_Line0;
exti.EXTI_Mode = EXTI_Mode_Interrupt;
exti.EXTI_Trigger = EXTI_Trigger_Falling;
exti.EXTI_LineCmd = ENABLE;
EXTI_Init(&exti);

// 4. 配置 NVIC 优先级
NVIC_InitTypeDef nvic;
nvic.NVIC_IRQChannel = EXTI0_IRQn;
nvic.NVIC_IRQChannelPreemptionPriority = 0;
nvic.NVIC_IRQChannelSubPriority = 1;
nvic.NVIC_IRQChannelCmd = ENABLE;
NVIC_Init(&nvic);
`,"05-systick":`// 配置 SysTick 1ms 中断
// SysTick 时钟 = 72MHz / 8 = 9MHz
// 重装载值 = 9000 - 1 = 8999 (1ms)
SysTick_Config(9000);
`,"06-tim":`// 配置 TIM2 定时器
// 1. 使能 TIM2 时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

// 2. 配置时基: 72MHz / 72 = 1MHz, 计数到 10000 -> 10ms
TIM_TimeBaseInitTypeDef tim;
tim.TIM_Prescaler = 71;
tim.TIM_Period = 9999;
tim.TIM_CounterMode = TIM_CounterMode_Up;
tim.TIM_ClockDivision = TIM_CKD_DIV1;
TIM_TimeBaseInit(TIM2, &tim);

// 3. 使能 TIM2
TIM_Cmd(TIM2, ENABLE);
`,"07-pwm":`// 配置 TIM2 CH1 (PA0) PWM 输出
// 1. 使能时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA0 为复用推挽输出
GPIO_InitTypeDef gpio;
gpio.GPIO_Pin = GPIO_Pin_0;
gpio.GPIO_Speed = GPIO_Speed_50MHz;
gpio.GPIO_Mode = GPIO_Mode_AF_PP;
GPIO_Init(GPIOA, &gpio);

// 3. 配置 TIM2 时基: 72MHz / 72 = 1MHz, ARR=999 -> 1kHz PWM
TIM_TimeBaseInitTypeDef tim;
tim.TIM_Prescaler = 71;
tim.TIM_Period = 999;
tim.TIM_CounterMode = TIM_CounterMode_Up;
tim.TIM_ClockDivision = TIM_CKD_DIV1;
TIM_TimeBaseInit(TIM2, &tim);

// 4. 配置 CH1 为 PWM 模式1, 占空比 50%
TIM_OCInitTypeDef oc;
oc.TIM_OCMode = TIM_OCMode_PWM1;
oc.TIM_OutputState = TIM_OutputState_Enable;
oc.TIM_Pulse = 499;
TIM_OC1Init(TIM2, &oc);

// 5. 使能 TIM2
TIM_Cmd(TIM2, ENABLE);
`,"08-adc":`// 配置 ADC1 通道0 (PA0)
// 1. 使能时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_ADC1 | RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA0 为模拟输入
GPIO_InitTypeDef gpio;
gpio.GPIO_Pin = GPIO_Pin_0;
gpio.GPIO_Mode = GPIO_Mode_AIN;
GPIO_Init(GPIOA, &gpio);

// 3. 配置 ADC1
ADC_InitTypeDef adc;
adc.ADC_Mode = ADC_Mode_Independent;
adc.ADC_ScanConvMode = DISABLE;
adc.ADC_ContinuousConvMode = ENABLE;
adc.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None;
adc.ADC_DataAlign = ADC_DataAlign_Right;
adc.ADC_NbrOfChannel = 1;
ADC_Init(ADC1, &adc);

// 4. 配置采样时间
ADC_RegularChannelConfig(ADC1, ADC_Channel_0, 1, ADC_SampleTime_55Cycles5);

// 5. 使能 ADC1 并启动转换
ADC_Cmd(ADC1, ENABLE);
ADC_SoftwareStartConvCmd(ADC1, ENABLE);
`,"09-uart":`// 配置 USART1 (PA9 TX, PA10 RX) 115200-8-N-1
// 1. 使能时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_USART1 | RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA9 为复用推挽输出 (TX)
GPIO_InitTypeDef gpio;
gpio.GPIO_Pin = GPIO_Pin_9;
gpio.GPIO_Speed = GPIO_Speed_50MHz;
gpio.GPIO_Mode = GPIO_Mode_AF_PP;
GPIO_Init(GPIOA, &gpio);

// 3. 配置 PA10 为浮空输入 (RX)
gpio.GPIO_Pin = GPIO_Pin_10;
gpio.GPIO_Mode = GPIO_Mode_IN_FLOATING;
GPIO_Init(GPIOA, &gpio);

// 4. 配置 USART1: 波特率 = 72MHz / (16 * 39.0625) ≈ 115200
USART_InitTypeDef usart;
usart.USART_BaudRate = 115200;
usart.USART_WordLength = USART_WordLength_8b;
usart.USART_StopBits = USART_StopBits_1;
usart.USART_Parity = USART_Parity_No;
usart.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
usart.USART_Mode = USART_Mode_Rx | USART_Mode_Tx;
USART_Init(USART1, &usart);

// 5. 使能 USART1
USART_Cmd(USART1, ENABLE);

// 6. 发送数据
USART_SendData(USART1, 'H');
`,"10-dac":`// 配置 DAC 通道1 (PA4) 输出 1.65V
// 1. 使能时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_DAC, ENABLE);
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA4 为模拟输入
GPIO_InitTypeDef gpio;
gpio.GPIO_Pin = GPIO_Pin_4;
gpio.GPIO_Mode = GPIO_Mode_AIN;
GPIO_Init(GPIOA, &gpio);

// 3. 配置 DAC 通道1: 12位右对齐, 输出值 = 2048 (1.65V)
DAC_InitTypeDef dac;
dac.DAC_Trigger = DAC_Trigger_None;
dac.DAC_WaveGeneration = DAC_WaveGeneration_None;
dac.DAC_OutputBuffer = DAC_OutputBuffer_Enable;
DAC_Init(DAC_Channel_1, &dac);

// 4. 使能 DAC 并设置输出
DAC_Cmd(DAC_Channel_1, ENABLE);
DAC_SetChannel1Data(DAC_Align_12b_R, 2048);
`,"11-spi":`// 配置 SPI1 主模式 (PA5 SCK, PA7 MOSI)
// 1. 使能时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_SPI1 | RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA5 (SCK), PA7 (MOSI) 为复用推挽输出
GPIO_InitTypeDef gpio;
gpio.GPIO_Speed = GPIO_Speed_50MHz;
gpio.GPIO_Mode = GPIO_Mode_AF_PP;

gpio.GPIO_Pin = GPIO_Pin_5;
GPIO_Init(GPIOA, &gpio);
gpio.GPIO_Pin = GPIO_Pin_7;
GPIO_Init(GPIOA, &gpio);

// 3. 配置 SPI1: 主模式, CPOL=0 CPHA=0, 8位, 预分频16
SPI_InitTypeDef spi;
spi.SPI_Direction = SPI_Direction_1Line_Tx;
spi.SPI_Mode = SPI_Mode_Master;
spi.SPI_DataSize = SPI_DataSize_8b;
spi.SPI_CPOL = SPI_CPOL_Low;
spi.SPI_CPHA = SPI_CPHA_1Edge;
spi.SPI_NSS = SPI_NSS_Soft;
spi.SPI_BaudRatePrescaler = SPI_BaudRatePrescaler_16;
spi.SPI_FirstBit = SPI_FirstBit_MSB;
SPI_Init(SPI1, &spi);

// 4. 使能 SPI1
SPI_Cmd(SPI1, ENABLE);

// 5. 发送一个字节
SPI_I2S_SendData(SPI1, 0xA5);
`,"12-i2c":`// 配置 I2C1 (PB6 SCL, PB7 SDA) 100kHz
// 1. 使能时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_I2C1, ENABLE);
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);

// 2. 配置 PB6, PB7 为开漏输出
GPIO_InitTypeDef gpio;
gpio.GPIO_Pin = GPIO_Pin_6 | GPIO_Pin_7;
gpio.GPIO_Speed = GPIO_Speed_50MHz;
gpio.GPIO_Mode = GPIO_Mode_Out_OD;
GPIO_Init(GPIOB, &gpio);

// 3. 配置 I2C1
I2C_InitTypeDef i2c;
i2c.I2C_Mode = I2C_Mode_I2C;
i2c.I2C_DutyCycle = I2C_DutyCycle_2;
i2c.I2C_OwnAddress1 = 0x30;
i2c.I2C_Ack = I2C_Ack_Enable;
i2c.I2C_AcknowledgedAddress = I2C_AcknowledgedAddress_7bit;
i2c.I2C_ClockSpeed = 100000;
I2C_Init(I2C1, &i2c);

// 4. 使能 I2C1
I2C_Cmd(I2C1, ENABLE);
`,"13-dma":`// 配置 DMA1 通道1: 内存→USART1 TX
// 1. 使能 DMA1 时钟
RCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1, ENABLE);

// 2. 配置 DMA1 通道1
DMA_InitTypeDef dma;
dma.DMA_PeripheralBaseAddr = (uint32_t)&USART1->DR;
dma.DMA_MemoryBaseAddr = (uint32_t)"Hello DMA!";
dma.DMA_DIR = DMA_DIR_PeripheralDST;
dma.DMA_BufferSize = 10;
dma.DMA_PeripheralInc = DMA_PeripheralInc_Disable;
dma.DMA_MemoryInc = DMA_MemoryInc_Enable;
dma.DMA_PeripheralDataSize = DMA_PeripheralDataSize_Byte;
dma.DMA_MemoryDataSize = DMA_MemoryDataSize_Byte;
dma.DMA_Mode = DMA_Mode_Normal;
dma.DMA_Priority = DMA_Priority_High;
dma.DMA_M2M = DMA_M2M_Disable;
DMA_Init(DMA1_Channel1, &dma);

// 3. 使能 DMA1 通道1
DMA_Cmd(DMA1_Channel1, ENABLE);
`,"14-can":`// 配置 CAN1 500kbps
// 1. 使能时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_CAN1, ENABLE);

// 2. 配置 CAN1: 500kbps @ 36MHz APB1
CAN_InitTypeDef can;
can.CAN_TTCM = DISABLE;
can.CAN_ABOM = DISABLE;
can.CAN_AWUM = DISABLE;
can.CAN_NART = DISABLE;
can.CAN_RFLM = DISABLE;
can.CAN_TXFP = DISABLE;
can.CAN_Mode = CAN_Mode_Normal;
can.CAN_SJW = CAN_SJW_1tq;
can.CAN_BS1 = CAN_BS1_6tq;
can.CAN_BS2 = CAN_BS2_3tq;
can.CAN_Prescaler = 12;
CAN_Init(CAN1, &can);

// 3. 发送一帧 CAN 消息
CanTxMsg tx;
tx.StdId = 0x123;
tx.ExtId = 0;
tx.IDE = CAN_Id_Standard;
tx.RTR = CAN_RTR_Data;
tx.DLC = 2;
tx.Data[0] = 0xAB;
tx.Data[1] = 0xCD;
CAN_Transmit(CAN1, &tx);
`,"15-adv-tim":`// 配置 TIM1 CH1 互补 PWM (PA8, PA13)
// 1. 使能时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_TIM1 | RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA8 (CH1), PA13 (CH1N) 为复用推挽输出
GPIO_InitTypeDef gpio;
gpio.GPIO_Speed = GPIO_Speed_50MHz;
gpio.GPIO_Mode = GPIO_Mode_AF_PP;
gpio.GPIO_Pin = GPIO_Pin_8;
GPIO_Init(GPIOA, &gpio);
gpio.GPIO_Pin = GPIO_Pin_13;
GPIO_Init(GPIOA, &gpio);

// 3. 配置时基: 72MHz / 72 = 1MHz, ARR=999 -> 1kHz
TIM_TimeBaseInitTypeDef tim;
tim.TIM_Prescaler = 71;
tim.TIM_Period = 999;
tim.TIM_CounterMode = TIM_CounterMode_Up;
tim.TIM_ClockDivision = TIM_CKD_DIV1;
TIM_TimeBaseInit(TIM1, &tim);

// 4. 配置 CH1 PWM + 互补输出, 死区时间 1us
TIM_OCInitTypeDef oc;
oc.TIM_OCMode = TIM_OCMode_PWM1;
oc.TIM_OutputState = TIM_OutputState_Enable;
oc.TIM_OutputNState = TIM_OutputNState_Enable;
oc.TIM_Pulse = 499;
oc.TIM_OCPolarity = TIM_OCPolarity_High;
oc.TIM_OCNPolarity = TIM_OCNPolarity_High;
oc.TIM_OCIdleState = TIM_OCIdleState_Reset;
oc.TIM_OCNIdleState = TIM_OCNIdleState_Reset;
TIM_OC1Init(TIM1, &oc);

// 5. 配置死区时间
TIM_BDTRInitTypeDef bdtr;
bdtr.TIM_OSSRState = TIM_OSSRState_Enable;
bdtr.TIM_OSSIState = TIM_OSSIState_Enable;
bdtr.TIM_LOCKLevel = TIM_LOCKLevel_OFF;
bdtr.TIM_DeadTime = 72;
bdtr.TIM_Break = TIM_Break_Enable;
bdtr.TIM_BreakPolarity = TIM_BreakPolarity_High;
bdtr.TIM_AutomaticOutput = TIM_AutomaticOutput_Enable;
TIM_BDTRConfig(TIM1, &bdtr);

// 6. 使能 MOE 和 TIM1
TIM_CtrlPWMOutputs(TIM1, ENABLE);
TIM_Cmd(TIM1, ENABLE);
`,"16-rtc":`// 配置 RTC 1秒中断
// 1. 使能 PWR 和 BKP 时钟
RCC_APB1PeriphClockCmd(RCC_APB1Periph_PWR | RCC_APB1Periph_BKP, ENABLE);

// 2. 允许访问备份域
PWR_BackupAccessCmd(ENABLE);

// 3. 配置 LSE 作为 RTC 时钟源
RCC_LSEConfig(RCC_LSE_ON);
while (RCC_GetFlagStatus(RCC_FLAG_LSERDY) == RESET);

RCC_RTCCLKConfig(RCC_RTCCLKSource_LSE);
RCC_RTCCLKCmd(ENABLE);

// 4. 配置 RTC: 预分频器 = 32768, 1秒中断
RTC_EnterConfigMode();
RTC_SetPrescaler(32767);
RTC_SetCounter(0);
RTC_ExitConfigMode();

// 5. 使能秒中断
RTC_ITConfig(RTC_IT_SEC, ENABLE);
`,"17-wdg":`// 配置独立看门狗 IWDG
// IWDG 由内部 40kHz LSI 驱动
// 预分频器 = 4, 重装载 = 0xFFF
// 超时时间 = (4 * 4096) / 40000 ≈ 409ms

// 1. 解锁 IWDG 寄存器
IWDG_WriteAccessCmd(IWDG_WriteAccess_Enable);

// 2. 设置预分频器
IWDG_SetPrescaler(IWDG_Prescaler_4);

// 3. 设置重装载值
IWDG_SetReload(0xFFF);

// 4. 重装载计数器
IWDG_ReloadCounter();

// 5. 使能 IWDG
IWDG_Enable();
`,"18-pwr":`// 配置 PWR 进入睡眠模式
// 1. 配置 PWR
PWR_EnterSleepMode(PWR_SLEEPModeEntry_WFI);

// 实际代码中:
// SCB->SCR &= ~SCB_SCR_SLEEPDEEP;
// __WFI();
`,"19-freertos":`// FreeRTOS 示例: 创建两个任务
#include "FreeRTOS.h"
#include "task.h"

void vTask1(void *pvParameters) {
    for (;;) {
        GPIO_SetBits(GPIOA, GPIO_Pin_0);
        vTaskDelay(500);
        GPIO_ResetBits(GPIOA, GPIO_Pin_0);
        vTaskDelay(500);
    }
}

void vTask2(void *pvParameters) {
    for (;;) {
        GPIO_SetBits(GPIOA, GPIO_Pin_1);
        vTaskDelay(300);
        GPIO_ResetBits(GPIOA, GPIO_Pin_1);
        vTaskDelay(300);
    }
}

int main(void) {
    // 硬件初始化
    // ...

    // 创建任务
    xTaskCreate(vTask1, "Task1", 128, NULL, 1, NULL);
    xTaskCreate(vTask2, "Task2", 128, NULL, 1, NULL);

    // 启动调度器
    vTaskStartScheduler();

    for (;;);
}
`,"20-fs":`// FatFS 示例: 挂载并写入文件
FATFS fs;
FIL file;
UINT bw;
FRESULT res;

// 1. 挂载文件系统
res = f_mount(&fs, "", 1);
if (res != FR_OK) return;

// 2. 打开文件 (创建)
res = f_open(&file, "data.txt", FA_CREATE_ALWAYS | FA_WRITE);
if (res != FR_OK) return;

// 3. 写入数据
res = f_write(&file, "STM32 FatFS Demo", 16, &bw);
if (res != FR_OK) return;

// 4. 关闭文件
f_close(&file);

// 5. 卸载
f_mount(NULL, "", 1);
`,"21-debug":`// 调试示例: 使用串口输出调试信息
// 1. 初始化 USART1
RCC_APB2PeriphClockCmd(RCC_APB2Periph_USART1 | RCC_APB2Periph_GPIOA, ENABLE);

GPIO_InitTypeDef gpio;
gpio.GPIO_Pin = GPIO_Pin_9;
gpio.GPIO_Speed = GPIO_Speed_50MHz;
gpio.GPIO_Mode = GPIO_Mode_AF_PP;
GPIO_Init(GPIOA, &gpio);

USART_InitTypeDef usart;
usart.USART_BaudRate = 115200;
usart.USART_WordLength = USART_WordLength_8b;
usart.USART_StopBits = USART_StopBits_1;
usart.USART_Parity = USART_Parity_No;
usart.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
usart.USART_Mode = USART_Mode_Tx;
USART_Init(USART1, &usart);
USART_Cmd(USART1, ENABLE);

// 2. 发送调试信息
USART_SendData(USART1, 'D');
USART_SendData(USART1, 'E');
USART_SendData(USART1, 'B');
USART_SendData(USART1, 'U');
USART_SendData(USART1, 'G');
`,"22-project":`// 综合项目: GPIO + USART + TIM + ADC
// 1. 使能时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA | RCC_APB2Periph_USART1 | RCC_APB2Periph_ADC1, ENABLE);
RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);

// 2. 配置 PA0 为推挽输出 (LED)
GPIO_InitTypeDef gpio;
gpio.GPIO_Pin = GPIO_Pin_0;
gpio.GPIO_Speed = GPIO_Speed_50MHz;
gpio.GPIO_Mode = GPIO_Mode_Out_PP;
GPIO_Init(GPIOA, &gpio);

// 3. 点亮 LED
GPIO_SetBits(GPIOA, GPIO_Pin_0);
`};function ob(e){return Lp[e]??Lp["01-intro"]}const sb="_root_7nco0_1",ab="_editorPanel_7nco0_8",ub="_toolbar_7nco0_15",cb="_fileLabel_7nco0_23",db="_toolbarSpacer_7nco0_29",fb="_runBtn_7nco0_33",pb="_resetBtn_7nco0_51",hb="_editorWrap_7nco0_67",mb="_output_7nco0_77",gb="_outputLine_7nco0_89",Cb="_outputError_7nco0_94",_b="_visualPanel_7nco0_99",Sb="_tabBar_7nco0_112",yb="_tabBtn_7nco0_123",vb="_tabBtnActive_7nco0_145 _tabBtn_7nco0_123",xb="_moreBtn_7nco0_164 _tabBtn_7nco0_123",Rb="_dropdownWrap_7nco0_169",Ib="_dropdownMenu_7nco0_173",Pb="_dropdownItem_7nco0_188",Ab="_activityDot_7nco0_211",Tb="_viewContent_7nco0_228",_e={root:sb,editorPanel:ab,toolbar:ub,fileLabel:cb,toolbarSpacer:db,runBtn:fb,resetBtn:pb,editorWrap:hb,output:mb,outputLine:gb,outputError:Cb,visualPanel:_b,tabBar:Sb,tabBtn:yb,tabBtnActive:vb,moreBtn:xb,dropdownWrap:Rb,dropdownMenu:Ib,dropdownItem:Pb,activityDot:Ab,viewContent:Tb},Np=["pin","register","wave","usart","adc"],Op=[{key:"pin",label:"引脚"},{key:"register",label:"寄存器"},{key:"wave",label:"波形"},{key:"usart",label:"串口"},{key:"adc",label:"ADC"},{key:"dac",label:"DAC"},{key:"spi",label:"SPI"},{key:"i2c",label:"I2C"},{key:"dma",label:"DMA"},{key:"can",label:"CAN"},{key:"adv_tim",label:"高级定时器"},{key:"rtc",label:"RTC"},{key:"wdg",label:"看门狗"},{key:"pwr",label:"低功耗"},{key:"rtos",label:"RTOS"},{key:"fs",label:"文件系统"},{key:"debug",label:"调试"},{key:"project",label:"综合项目"}],kb={pin:ME,register:LE,wave:OE,usart:BE,adc:FE,dac:zE,spi:GE,i2c:HE,dma:$E,can:KE,adv_tim:XE,rtc:qE,wdg:QE,pwr:YE,rtos:eb,fs:tb,debug:nb,project:rb};function wb(){const{moduleId:e}=il(),t=Xt(b=>b.activeView),n=Xt(b=>b.setActiveView),r=H(b=>b.runCode),i=H(b=>b.reset),l=H(b=>b.setActivePeripheral),o=H(b=>b.setCode),s=H(b=>b.output),a=H(b=>b.usartState),u=H(b=>b.adcState),f=H(b=>b.dacState),d=H(b=>b.spiState),p=H(b=>b.i2cState),h=H(b=>b.dmaState),g=H(b=>b.canState),S=H(b=>b.advTimState),v=H(b=>b.rtcState),m=H(b=>b.iwdgState),C=H(b=>b.wwdgState),_=H(b=>b.pwrMode),R=H(b=>b.rtosTasks),A=H(b=>b.fsMounted),P=H(b=>b.fsFiles),[k,L]=T.useState(!1),W=T.useRef(null);T.useEffect(()=>{function b(B){W.current&&!W.current.contains(B.target)&&L(!1)}return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[]),T.useEffect(()=>{e&&(l(lb(e)),o(ob(e)))},[e,l,o]);const I=b=>b==="usart"?a.txString.length>0||a.rxne:b==="adc"?u.eoc||u.result>0:b==="dac"?f.outputCode>0:b==="spi"?d.receivedByte>0||!d.txe:b==="i2c"?p.busy||p.rxne||p.lastData>0:b==="dma"?h.channels.some(B=>B.enabled):b==="can"?g.mode==="normal"||g.rxMessages.length>0:b==="adv_tim"?S.running||S.bdtr.moe:b==="rtc"?!v.configMode||v.counter>0:b==="wdg"?m.started||C.started:b==="pwr"?_!=="run":b==="rtos"?R.length>0:b==="fs"?A||P.length>0:!1,z=Op.filter(b=>Np.includes(b.key)),G=Op.filter(b=>!Np.includes(b.key)),Z=kb[t];return c.jsxs("div",{className:_e.root,children:[c.jsxs("div",{className:_e.editorPanel,children:[c.jsxs("div",{className:_e.toolbar,children:[c.jsx("span",{className:_e.fileLabel,children:"📄 main.c"}),c.jsx("span",{className:_e.toolbarSpacer}),c.jsx("button",{onClick:r,className:_e.runBtn,children:"▶ 运行"}),c.jsx("button",{onClick:i,className:_e.resetBtn,children:"↺ 重置"})]}),c.jsx("div",{className:_e.editorWrap,children:c.jsx(Dw,{})}),s.length>0&&c.jsx("div",{className:_e.output,children:s.map((b,B)=>c.jsx("div",{className:b.includes("Error")?_e.outputError:_e.outputLine,children:b},B))})]}),c.jsxs("div",{className:_e.visualPanel,children:[c.jsxs("div",{className:_e.tabBar,children:[z.map(b=>c.jsxs("button",{onClick:()=>{n(b.key),L(!1)},className:t===b.key?_e.tabBtnActive:_e.tabBtn,children:[b.label,I(b.key)&&c.jsx("span",{className:_e.activityDot})]},b.key)),G.length>0&&c.jsxs("div",{className:_e.dropdownWrap,ref:W,children:[c.jsx("button",{onClick:b=>{b.stopPropagation(),L(B=>!B)},className:_e.moreBtn,children:"更多 ▾"}),k&&c.jsx("div",{className:_e.dropdownMenu,children:G.map(b=>c.jsxs("button",{onClick:()=>{n(b.key),L(!1)},className:`${_e.dropdownItem} ${t===b.key?_e.tabBtnActive:""}`,children:[b.label,I(b.key)&&c.jsx("span",{className:_e.activityDot})]},b.key))})]})]}),c.jsx("div",{className:_e.viewContent,children:c.jsx(Z,{})})]})]})}const Eb="_root_1tsmi_1",bb="_hero_1tsmi_6",Db="_radialWrap_1tsmi_12",Mb="_heroTitle_1tsmi_18",Lb="_heroSub_1tsmi_26",Nb="_heroBar_1tsmi_32",Ob="_levelGrid_1tsmi_38",Bb="_levelCard_1tsmi_44",Fb="_levelHeader_1tsmi_58",jb="_levelCircle_1tsmi_65",zb="_levelTitle_1tsmi_79",Wb="_levelCount_1tsmi_87",Gb="_levelBar_1tsmi_93",Ub="_modulePills_1tsmi_98",Hb="_modulePillDone_1tsmi_112 _modulePill_1tsmi_98",Vb="_modulePillPending_1tsmi_117 _modulePill_1tsmi_98",We={root:Eb,hero:bb,radialWrap:Db,heroTitle:Mb,heroSub:Lb,heroBar:Nb,levelGrid:Ob,levelCard:Bb,levelHeader:Fb,levelCircle:jb,levelTitle:zb,levelCount:Wb,levelBar:Gb,modulePills:Ub,modulePillDone:Hb,modulePillPending:Vb};function $b({pct:e,size:t=100}){const r=(t-6)/2,i=2*Math.PI*r,l=i-e/100*i,o=e>=80?"var(--accent-green)":e>=50?"var(--accent-amber)":"var(--accent-red)";return c.jsxs("svg",{width:t,height:t,children:[c.jsx("circle",{cx:t/2,cy:t/2,r,fill:"none",stroke:"var(--bg-raised)",strokeWidth:6}),c.jsx("circle",{cx:t/2,cy:t/2,r,fill:"none",stroke:o,strokeWidth:6,strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:l,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 800ms var(--ease-out)",filter:`drop-shadow(0 0 6px ${o}44)`}}),c.jsxs("text",{x:t/2,y:t/2-4,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-primary)",fontSize:18,fontWeight:"700",fontFamily:"var(--font-sans)",children:[Math.round(e),"%"]}),c.jsx("text",{x:t/2,y:t/2+14,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-muted)",fontSize:9,fontFamily:"var(--font-mono)",children:e>=80?"PASS":e>=50?"PROG":"START"})]})}function Kb(){const e=ll(i=>i.modules),t=Object.values(e).filter(i=>i.completed).length,n=Math.round(t/Fr*100),r=(i,l)=>{var s;const o=(s=e[i])==null?void 0:s.completed;return{className:o?We.modulePillDone:We.modulePillPending,style:o?{background:l}:{borderColor:`${l}44`,color:l}}};return c.jsxs("div",{className:We.root,children:[c.jsxs("div",{className:We.hero,children:[c.jsx("div",{className:We.radialWrap,children:c.jsx($b,{pct:n,size:100})}),c.jsx("h1",{className:We.heroTitle,children:"学习进度"}),c.jsxs("p",{className:We.heroSub,children:["已完成 ",t,"/",Fr," 个模块"]}),c.jsx("div",{className:We.heroBar,children:c.jsx(zr,{value:n,variant:"success"})})]}),c.jsx("div",{className:We.levelGrid,children:[1,2,3,4,5].map(i=>{const l=vn.filter(f=>f.level===i),o=l.filter(f=>{var d;return(d=e[f.id])==null?void 0:d.completed}).length,s=Math.round(o/l.length*100),a=ns[i],u=(a==null?void 0:a.color)??"";return c.jsxs("div",{className:We.levelCard,children:[c.jsxs("div",{className:We.levelHeader,children:[c.jsx("div",{className:We.levelCircle,style:{background:`linear-gradient(135deg, ${u}, ${u}88)`},children:i}),c.jsxs("div",{children:[c.jsx("div",{className:We.levelTitle,children:a==null?void 0:a.label}),c.jsxs("div",{className:We.levelCount,children:[o,"/",l.length," 完成"]})]})]}),c.jsx("div",{className:We.levelBar,children:c.jsx(zr,{value:s,variant:"success"})}),c.jsx("div",{className:We.modulePills,children:l.map(f=>{const{className:d,style:p}=r(f.id,u);return c.jsx("span",{className:d,style:p,children:f.title},f.id)})})]},i)})})]})}const Xb="_root_1d2ne_1",qb="_hero_1d2ne_6",Qb="_radialWrap_1d2ne_12",Jb="_heroTitle_1d2ne_18",Yb="_heroSub_1d2ne_27",Zb="_heroBar_1d2ne_34",eD="_heroActions_1d2ne_39",tD="_primaryBtn_1d2ne_46",nD="_secondaryBtn_1d2ne_65",rD="_grid_1d2ne_84",iD="_levelCard_1d2ne_96",lD="_levelHeader_1d2ne_110",oD="_levelCircle_1d2ne_117",sD="_levelTitle_1d2ne_131",aD="_levelCount_1d2ne_138",uD="_levelPct_1d2ne_144",cD="_levelBar_1d2ne_151",dD="_modulePills_1d2ne_155",fD="_pillDone_1d2ne_177 _pill_1d2ne_161",pD="_pillPending_1d2ne_182 _pill_1d2ne_161",Te={root:Xb,hero:qb,radialWrap:Qb,heroTitle:Jb,heroSub:Yb,heroBar:Zb,heroActions:eD,primaryBtn:tD,secondaryBtn:nD,grid:rD,levelCard:iD,levelHeader:lD,levelCircle:oD,levelTitle:sD,levelCount:aD,levelPct:uD,levelBar:cD,modulePills:dD,pillDone:fD,pillPending:pD};function hD({pct:e,size:t=120}){const r=(t-8)/2,i=2*Math.PI*r,l=i-e/100*i,o=e>=80?"var(--accent-green)":e>=50?"var(--accent-amber)":"var(--accent-blue)";return c.jsxs("svg",{width:t,height:t,children:[c.jsx("defs",{children:c.jsxs("filter",{id:"glow",children:[c.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),c.jsx("circle",{cx:t/2,cy:t/2,r,fill:"none",stroke:"var(--bg-raised)",strokeWidth:8}),c.jsx("circle",{cx:t/2,cy:t/2,r,fill:"none",stroke:o,strokeWidth:8,strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:l,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 1s var(--ease-out)",filter:`drop-shadow(0 0 8px ${o}44)`}}),c.jsxs("text",{x:t/2,y:t/2-6,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-primary)",fontSize:22,fontWeight:"700",fontFamily:"var(--font-sans)",children:[Math.round(e),"%"]}),c.jsx("text",{x:t/2,y:t/2+18,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-muted)",fontSize:9,fontFamily:"var(--font-mono)",letterSpacing:"0.05em",children:e>=80?"MASTER":e>=50?"ACTIVE":"BEGINNER"})]})}function mD(){const e=Nc(),t=Xt(s=>s.setMode),n=ll(s=>s.modules),r=Object.values(n).filter(s=>s.completed).length,i=Math.round(r/Fr*100),l=Object.keys(n).filter(s=>{var a;return(a=n[s])==null?void 0:a.completed}).pop(),o=vn.find(s=>{var a;return!((a=n[s.id])!=null&&a.completed)});return c.jsxs("div",{className:Te.root,children:[c.jsxs("section",{className:Te.hero,children:[c.jsx("div",{className:Te.radialWrap,children:c.jsx(hD,{pct:i,size:120})}),c.jsx("h1",{className:Te.heroTitle,children:"STM32 Learning"}),c.jsxs("p",{className:Te.heroSub,children:[r,"/",Fr," modules completed · Level ",r<5?1:r<9?2:r<13?3:r<17?4:5]}),c.jsx("div",{className:Te.heroBar,children:c.jsx(zr,{value:i,variant:"success"})}),c.jsxs("div",{className:Te.heroActions,children:[o&&c.jsxs("button",{onClick:()=>{t("learn"),e(`/learn/${o.id}`)},className:Te.primaryBtn,children:["继续学习 → ",o.title]}),l&&c.jsx("button",{onClick:()=>{t("practice"),e(`/practice/${l}`)},className:Te.secondaryBtn,children:"复习练习"})]})]}),c.jsx("section",{className:Te.grid,children:[1,2,3,4,5].map(s=>{const a=ns[s],u=vn.filter(p=>p.level===s),f=u.filter(p=>{var h;return(h=n[p.id])==null?void 0:h.completed}).length,d=Math.round(f/u.length*100);return c.jsxs("div",{className:Te.levelCard,style:{borderTopColor:a==null?void 0:a.color},children:[c.jsxs("div",{className:Te.levelHeader,children:[c.jsx("div",{className:Te.levelCircle,style:{background:`linear-gradient(135deg, ${a==null?void 0:a.color}, ${a==null?void 0:a.color}66)`},children:s}),c.jsxs("div",{children:[c.jsx("div",{className:Te.levelTitle,children:a==null?void 0:a.label}),c.jsxs("div",{className:Te.levelCount,children:[f,"/",u.length," completed"]})]}),c.jsxs("div",{className:Te.levelPct,style:{color:a==null?void 0:a.color},children:[d,"%"]})]}),c.jsx("div",{className:Te.levelBar,children:c.jsx(zr,{value:d,variant:"success"})}),c.jsx("div",{className:Te.modulePills,children:u.map(p=>{var g;const h=(g=n[p.id])==null?void 0:g.completed;return c.jsx("button",{className:h?Te.pillDone:Te.pillPending,style:{background:h?a==null?void 0:a.color:void 0,borderColor:h?void 0:`${a==null?void 0:a.color}44`,color:h?"#111":a==null?void 0:a.color},onClick:()=>{t("learn"),e(`/learn/${p.id}`)},title:p.title,children:p.title},p.id)})})]},s)})})]})}const gD="_header_d6b0b_1",CD="_menuBtn_d6b0b_28",_D="_menuIcon_d6b0b_48",SD="_logoBtn_d6b0b_68",yD="_spacer_d6b0b_83",vD="_progressPill_d6b0b_85",xD="_progressPillTrack_d6b0b_99",RD="_progressPillFill_d6b0b_107",ID="_levelBadge_d6b0b_114",PD="_themeBtn_d6b0b_125",AD="_navLink_d6b0b_142",TD="_body_d6b0b_159",kD="_main_d6b0b_165",wD="_root_d6b0b_172",ED="_learnContainer_d6b0b_179",bD="_stepCard_d6b0b_184",DD="_stepSidebar_d6b0b_190",MD="_stepCircle_d6b0b_198",LD="_stepLine_d6b0b_212",ND="_stepBody_d6b0b_220",OD="_stepCardInner_d6b0b_226",BD="_stepAccent_d6b0b_234",FD="_stepContent_d6b0b_238",Se={header:gD,menuBtn:CD,menuIcon:_D,logoBtn:SD,spacer:yD,progressPill:vD,progressPillTrack:xD,progressPillFill:RD,levelBadge:ID,themeBtn:PD,navLink:AD,body:TD,main:kD,root:wD,learnContainer:ED,stepCard:bD,stepSidebar:DD,stepCircle:MD,stepLine:LD,stepBody:ND,stepCardInner:OD,stepAccent:BD,stepContent:FD};function jD(){const e=Xt(a=>a.toggleSidebar),t=Xt(a=>a.theme),n=Xt(a=>a.toggleTheme),r=Nc(),i=ll(a=>a.modules),l=Object.values(i).filter(a=>a.completed).length,o=l<5?1:l<10?2:l<14?3:l<18?4:5,s=l/Fr*100;return c.jsxs("div",{className:Se.root,children:[c.jsxs("header",{className:Se.header,children:[c.jsx("button",{onClick:e,className:Se.menuBtn,"aria-label":"Toggle sidebar",children:c.jsx("span",{className:Se.menuIcon})}),c.jsx("button",{onClick:()=>r("/"),className:Se.logoBtn,children:"STM32 Learn"}),c.jsx("span",{className:Se.spacer}),c.jsxs("div",{className:Se.progressPill,children:[c.jsxs("span",{children:[l,"/",Fr]}),c.jsx("div",{className:Se.progressPillTrack,children:c.jsx("div",{className:Se.progressPillFill,style:{width:`${s}%`}})})]}),c.jsxs("span",{className:Se.levelBadge,children:["Lv.",o]}),c.jsx("button",{onClick:n,className:Se.themeBtn,"aria-label":"Toggle theme",children:t==="dark"?"☀":"☾"}),c.jsx("button",{onClick:()=>r("/progress"),className:Se.navLink,children:"进度"})]}),c.jsxs("div",{className:Se.body,children:[c.jsx(hy,{}),c.jsx("main",{className:Se.main,children:c.jsxs(om,{children:[c.jsx(yr,{path:"/",element:c.jsx(mD,{})}),c.jsx(yr,{path:"/learn/:moduleId",element:c.jsx(zD,{})}),c.jsx(yr,{path:"/practice/:moduleId",element:c.jsx(wb,{})}),c.jsx(yr,{path:"/progress",element:c.jsx(Kb,{})})]})})]})]})}function zD(){const{moduleId:e}=il(),t=KS(e);return c.jsxs("div",{className:Se.learnContainer,children:[c.jsx(Aa,{step:1,levelColor:t,children:c.jsx(rT,{})}),c.jsx(Aa,{step:2,levelColor:t,children:c.jsx(yT,{})}),c.jsx(Aa,{step:3,levelColor:t,children:c.jsx(KT,{})})]})}function Aa({step:e,levelColor:t,children:n}){return c.jsxs("div",{className:Se.stepCard,children:[c.jsxs("div",{className:Se.stepSidebar,children:[c.jsx("div",{className:Se.stepCircle,style:{background:t},children:e}),e<3&&c.jsx("div",{className:Se.stepLine})]}),c.jsx("div",{className:Se.stepBody,children:c.jsxs("div",{className:Se.stepCardInner,children:[c.jsx("div",{className:Se.stepAccent,style:{background:`linear-gradient(90deg, ${t}, transparent)`}}),c.jsx("div",{className:Se.stepContent,children:n})]})})]})}function WD(){return c.jsx(cS,{basename:"/stm32-learn",children:c.jsx(om,{children:c.jsx(yr,{path:"/*",element:c.jsx(jD,{})})})})}const GD=localStorage.getItem("stm32-theme")||"dark";document.documentElement.dataset.theme=GD;Ta.createRoot(document.getElementById("root")).render(c.jsx($t.StrictMode,{children:c.jsx(WD,{})}));
