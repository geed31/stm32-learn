var zg=Object.defineProperty;var Wg=(e,t,n)=>t in e?zg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>Wg(e,typeof t!="symbol"?t+"":t,n);function Gg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jp={exports:{}},Fo={},zp={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),Ug=Symbol.for("react.portal"),Hg=Symbol.for("react.fragment"),Vg=Symbol.for("react.strict_mode"),$g=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),qg=Symbol.for("react.forward_ref"),Qg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),Yg=Symbol.for("react.lazy"),ud=Symbol.iterator;function Zg(e){return e===null||typeof e!="object"?null:(e=ud&&e[ud]||e["@@iterator"],typeof e=="function"?e:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Up={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=Up,this.updater=n||Wp}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hp(){}Hp.prototype=Ur.prototype;function Uu(e,t,n){this.props=e,this.context=t,this.refs=Up,this.updater=n||Wp}var Hu=Uu.prototype=new Hp;Hu.constructor=Uu;Gp(Hu,Ur.prototype);Hu.isPureReactComponent=!0;var cd=Array.isArray,Vp=Object.prototype.hasOwnProperty,Vu={current:null},$p={key:!0,ref:!0,__self:!0,__source:!0};function Kp(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Vp.call(t,r)&&!$p.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:el,type:e,key:l,ref:o,props:i,_owner:Vu.current}}function eC(e,t){return{$$typeof:el,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $u(e){return typeof e=="object"&&e!==null&&e.$$typeof===el}function tC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dd=/\/+/g;function ps(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tC(""+e.key):t.toString(36)}function Wl(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case el:case Ug:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ps(o,0):r,cd(i)?(n="",e!=null&&(n=e.replace(dd,"$&/")+"/"),Wl(i,t,n,"",function(c){return c})):i!=null&&($u(i)&&(i=eC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",cd(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+ps(l,s);o+=Wl(l,t,n,a,i)}else if(a=Zg(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+ps(l,s++),o+=Wl(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(e,t,n){if(e==null)return e;var r=[],i=0;return Wl(e,r,"","",function(l){return t.call(n,l,i++)}),r}function nC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Gl={transition:null},rC={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:Vu};function Xp(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:pl,forEach:function(e,t,n){pl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pl(e,function(){t++}),t},toArray:function(e){return pl(e,function(t){return t})||[]},only:function(e){if(!$u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Ur;te.Fragment=Hg;te.Profiler=$g;te.PureComponent=Uu;te.StrictMode=Vg;te.Suspense=Qg;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rC;te.act=Xp;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gp({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Vu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Vp.call(t,a)&&!$p.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:el,type:e.type,key:i,ref:l,props:r,_owner:o}};te.createContext=function(e){return e={$$typeof:Xg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kg,_context:e},e.Consumer=e};te.createElement=Kp;te.createFactory=function(e){var t=Kp.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:qg,render:e}};te.isValidElement=$u;te.lazy=function(e){return{$$typeof:Yg,_payload:{_status:-1,_result:e},_init:nC}};te.memo=function(e,t){return{$$typeof:Jg,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Gl.transition;Gl.transition={};try{e()}finally{Gl.transition=t}};te.unstable_act=Xp;te.useCallback=function(e,t){return Qe.current.useCallback(e,t)};te.useContext=function(e){return Qe.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};te.useEffect=function(e,t){return Qe.current.useEffect(e,t)};te.useId=function(){return Qe.current.useId()};te.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Qe.current.useMemo(e,t)};te.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};te.useRef=function(e){return Qe.current.useRef(e)};te.useState=function(e){return Qe.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return Qe.current.useTransition()};te.version="18.3.1";zp.exports=te;var T=zp.exports;const Kt=Bo(T),iC=Gg({__proto__:null,default:Kt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lC=T,oC=Symbol.for("react.element"),sC=Symbol.for("react.fragment"),aC=Object.prototype.hasOwnProperty,uC=lC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cC={key:!0,ref:!0,__self:!0,__source:!0};function qp(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)aC.call(t,r)&&!cC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:oC,type:e,key:l,ref:o,props:i,_owner:uC.current}}Fo.Fragment=sC;Fo.jsx=qp;Fo.jsxs=qp;jp.exports=Fo;var u=jp.exports,ba={},Qp={exports:{}},ht={},Jp={exports:{}},Yp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,$){var y=O.length;O.push($);e:for(;0<y;){var V=y-1>>>1,K=O[V];if(0<i(K,$))O[V]=$,O[y]=K,y=V;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var $=O[0],y=O.pop();if(y!==$){O[0]=y;e:for(var V=0,K=O.length,v=K>>>1;V<v;){var fe=2*(V+1)-1,De=O[fe],pe=fe+1,Dt=O[pe];if(0>i(De,y))pe<K&&0>i(Dt,De)?(O[V]=Dt,O[pe]=y,V=pe):(O[V]=De,O[fe]=y,V=fe);else if(pe<K&&0>i(Dt,y))O[V]=Dt,O[pe]=y,V=pe;else break e}}return $}function i(O,$){var y=O.sortIndex-$.sortIndex;return y!==0?y:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],f=1,d=null,p=3,h=!1,g=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=O)r(c),$.sortIndex=$.expirationTime,t(a,$);else break;$=n(c)}}function R(O){if(S=!1,_(O),!g)if(n(a)!==null)g=!0,q(A);else{var $=n(c);$!==null&&E(R,$.startTime-O)}}function A(O,$){g=!1,S&&(S=!1,m(N),N=-1),h=!0;var y=p;try{for(_($),d=n(a);d!==null&&(!(d.expirationTime>$)||O&&!F());){var V=d.callback;if(typeof V=="function"){d.callback=null,p=d.priorityLevel;var K=V(d.expirationTime<=$);$=e.unstable_now(),typeof K=="function"?d.callback=K:d===n(a)&&r(a),_($)}else r(a);d=n(a)}if(d!==null)var v=!0;else{var fe=n(c);fe!==null&&E(R,fe.startTime-$),v=!1}return v}finally{d=null,p=y,h=!1}}var P=!1,w=null,N=-1,G=5,I=-1;function F(){return!(e.unstable_now()-I<G)}function U(){if(w!==null){var O=e.unstable_now();I=O;var $=!0;try{$=w(!0,O)}finally{$?Z():(P=!1,w=null)}}else P=!1}var Z;if(typeof C=="function")Z=function(){C(U)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,z=ne.port2;ne.port1.onmessage=U,Z=function(){z.postMessage(null)}}else Z=function(){x(U,0)};function q(O){w=O,P||(P=!0,Z())}function E(O,$){N=x(function(){O(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,q(A))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var y=p;p=$;try{return O()}finally{p=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var y=p;p=O;try{return $()}finally{p=y}},e.unstable_scheduleCallback=function(O,$,y){var V=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?V+y:V):y=V,O){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=y+K,O={id:f++,callback:$,priorityLevel:O,startTime:y,expirationTime:K,sortIndex:-1},y>V?(O.sortIndex=y,t(c,O),n(a)===null&&O===n(c)&&(S?(m(N),N=-1):S=!0,E(R,y-V))):(O.sortIndex=K,t(a,O),g||h||(g=!0,q(A))),O},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(O){var $=p;return function(){var y=p;p=$;try{return O.apply(this,arguments)}finally{p=y}}}})(Yp);Jp.exports=Yp;var dC=Jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fC=T,pt=dC;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zp=new Set,Di={};function qn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(Di[e]=t,e=0;e<t.length;e++)Zp.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,pC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fd={},pd={};function hC(e){return Ea.call(pd,e)?!0:Ea.call(fd,e)?!1:pC.test(e)?pd[e]=!0:(fd[e]=!0,!1)}function mC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gC(e,t,n,r){if(t===null||typeof t>"u"||mC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function Xu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ku,Xu);Fe[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ku,Xu);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ku,Xu);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function qu(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gC(t,n,i,r)&&(n=null),r||i===null?hC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=fC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),th=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),La=Symbol.for("react.suspense_list"),Yu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),nh=Symbol.for("react.offscreen"),hd=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=hd&&e[hd]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,hs;function hi(e){if(hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hs=t&&t[1]||""}return`
`+hs+e}var ms=!1;function gs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hi(e):""}function CC(e){switch(e.tag){case 5:return hi(e.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return e=gs(e.type,!1),e;case 11:return e=gs(e.type.render,!1),e;case 1:return e=gs(e.type,!0),e;default:return""}}function Na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case ur:return"Portal";case Da:return"Profiler";case Qu:return"StrictMode";case Ma:return"Suspense";case La:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case th:return(e.displayName||"Context")+".Consumer";case eh:return(e._context.displayName||"Context")+".Provider";case Ju:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yu:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}function _C(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Na(t);case 8:return t===Qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function SC(e){var t=rh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ml(e){e._valueTracker||(e._valueTracker=SC(e))}function ih(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oa(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function md(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=In(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lh(e,t){t=t.checked,t!=null&&qu(e,"checked",t,!1)}function Ba(e,t){lh(e,t);var n=In(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fa(e,t.type,In(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fa(e,t,n){(t!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ja(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(mi(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:In(n)}}function oh(e,t){var n=In(t.value),r=In(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _d(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gl,ah=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yC=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(e){yC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Si[t]=Si[e]})});function uh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Si.hasOwnProperty(e)&&Si[e]?(""+t).trim():t+"px"}function ch(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xC=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(e,t){if(t){if(xC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Ir=null,Pr=null;function Sd(e){if(e=rl(e)){if(typeof Ha!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Uo(t),Ha(e.stateNode,e.type,t))}}function dh(e){Ir?Pr?Pr.push(e):Pr=[e]:Ir=e}function fh(){if(Ir){var e=Ir,t=Pr;if(Pr=Ir=null,Sd(e),t)for(e=0;e<t.length;e++)Sd(t[e])}}function ph(e,t){return e(t)}function hh(){}var Cs=!1;function mh(e,t,n){if(Cs)return e(t,n);Cs=!0;try{return ph(e,t,n)}finally{Cs=!1,(Ir!==null||Pr!==null)&&(hh(),fh())}}function Li(e,t){var n=e.stateNode;if(n===null)return null;var r=Uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Va=!1;if(Qt)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Va=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Va=!1}function vC(e,t,n,r,i,l,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var yi=!1,io=null,lo=!1,$a=null,RC={onError:function(e){yi=!0,io=e}};function IC(e,t,n,r,i,l,o,s,a){yi=!1,io=null,vC.apply(RC,arguments)}function PC(e,t,n,r,i,l,o,s,a){if(IC.apply(this,arguments),yi){if(yi){var c=io;yi=!1,io=null}else throw Error(L(198));lo||(lo=!0,$a=c)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yd(e){if(Qn(e)!==e)throw Error(L(188))}function AC(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return yd(i),e;if(l===r)return yd(i),t;l=l.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Ch(e){return e=AC(e),e!==null?_h(e):null}function _h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_h(e);if(t!==null)return t;e=e.sibling}return null}var Sh=pt.unstable_scheduleCallback,xd=pt.unstable_cancelCallback,TC=pt.unstable_shouldYield,wC=pt.unstable_requestPaint,Ae=pt.unstable_now,kC=pt.unstable_getCurrentPriorityLevel,ec=pt.unstable_ImmediatePriority,yh=pt.unstable_UserBlockingPriority,oo=pt.unstable_NormalPriority,bC=pt.unstable_LowPriority,xh=pt.unstable_IdlePriority,jo=null,Bt=null;function EC(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:LC,DC=Math.log,MC=Math.LN2;function LC(e){return e>>>=0,e===0?32:31-(DC(e)/MC|0)|0}var Cl=64,_l=4194304;function gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=gi(s):(l&=o,l!==0&&(r=gi(l)))}else o=n&~i,o!==0?r=gi(o):l!==0&&(r=gi(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function NC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-wt(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=NC(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vh(){var e=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),e}function _s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function BC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Rh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ih,nc,Ph,Ah,Th,Xa=!1,Sl=[],pn=null,hn=null,mn=null,Ni=new Map,Oi=new Map,an=[],FC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(t.pointerId)}}function ei(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=rl(t),t!==null&&nc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function jC(e,t,n,r,i){switch(t){case"focusin":return pn=ei(pn,e,t,n,r,i),!0;case"dragenter":return hn=ei(hn,e,t,n,r,i),!0;case"mouseover":return mn=ei(mn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Ni.set(l,ei(Ni.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Oi.set(l,ei(Oi.get(l)||null,e,t,n,r,i)),!0}return!1}function wh(e){var t=Fn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=gh(n),t!==null){e.blockedOn=t,Th(e.priority,function(){Ph(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ul(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ua=r,n.target.dispatchEvent(r),Ua=null}else return t=rl(n),t!==null&&nc(t),e.blockedOn=n,!1;t.shift()}return!0}function Rd(e,t,n){Ul(e)&&n.delete(t)}function zC(){Xa=!1,pn!==null&&Ul(pn)&&(pn=null),hn!==null&&Ul(hn)&&(hn=null),mn!==null&&Ul(mn)&&(mn=null),Ni.forEach(Rd),Oi.forEach(Rd)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Xa||(Xa=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,zC)))}function Bi(e){function t(i){return ti(i,e)}if(0<Sl.length){ti(Sl[0],e);for(var n=1;n<Sl.length;n++){var r=Sl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&ti(pn,e),hn!==null&&ti(hn,e),mn!==null&&ti(mn,e),Ni.forEach(t),Oi.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)wh(n),n.blockedOn===null&&an.shift()}var Ar=en.ReactCurrentBatchConfig,ao=!0;function WC(e,t,n,r){var i=oe,l=Ar.transition;Ar.transition=null;try{oe=1,rc(e,t,n,r)}finally{oe=i,Ar.transition=l}}function GC(e,t,n,r){var i=oe,l=Ar.transition;Ar.transition=null;try{oe=4,rc(e,t,n,r)}finally{oe=i,Ar.transition=l}}function rc(e,t,n,r){if(ao){var i=qa(e,t,n,r);if(i===null)ws(e,t,r,uo,n),vd(e,r);else if(jC(i,e,t,n,r))r.stopPropagation();else if(vd(e,r),t&4&&-1<FC.indexOf(e)){for(;i!==null;){var l=rl(i);if(l!==null&&Ih(l),l=qa(e,t,n,r),l===null&&ws(e,t,r,uo,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ws(e,t,r,null,n)}}var uo=null;function qa(e,t,n,r){if(uo=null,e=Zu(r),e=Fn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function kh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kC()){case ec:return 1;case yh:return 4;case oo:case bC:return 16;case xh:return 536870912;default:return 16}default:return 16}}var cn=null,ic=null,Hl=null;function bh(){if(Hl)return Hl;var e,t=ic,n=t.length,r,i="value"in cn?cn.value:cn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Hl=i.slice(e,1<r?1-r:void 0)}function Vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Id(){return!1}function mt(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?yl:Id,this.isPropagationStopped=Id,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=mt(Hr),nl=ve({},Hr,{view:0,detail:0}),UC=mt(nl),Ss,ys,ni,zo=ve({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(Ss=e.screenX-ni.screenX,ys=e.screenY-ni.screenY):ys=Ss=0,ni=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:ys}}),Pd=mt(zo),HC=ve({},zo,{dataTransfer:0}),VC=mt(HC),$C=ve({},nl,{relatedTarget:0}),xs=mt($C),KC=ve({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),XC=mt(KC),qC=ve({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),QC=mt(qC),JC=ve({},Hr,{data:0}),Ad=mt(JC),YC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e0[e])?!!t[e]:!1}function oc(){return t0}var n0=ve({},nl,{key:function(e){if(e.key){var t=YC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ZC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r0=mt(n0),i0=ve({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=mt(i0),l0=ve({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),o0=mt(l0),s0=ve({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),a0=mt(s0),u0=ve({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=mt(u0),d0=[9,13,27,32],sc=Qt&&"CompositionEvent"in window,xi=null;Qt&&"documentMode"in document&&(xi=document.documentMode);var f0=Qt&&"TextEvent"in window&&!xi,Eh=Qt&&(!sc||xi&&8<xi&&11>=xi),wd=" ",kd=!1;function Dh(e,t){switch(e){case"keyup":return d0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function p0(e,t){switch(e){case"compositionend":return Mh(t);case"keypress":return t.which!==32?null:(kd=!0,wd);case"textInput":return e=t.data,e===wd&&kd?null:e;default:return null}}function h0(e,t){if(dr)return e==="compositionend"||!sc&&Dh(e,t)?(e=bh(),Hl=ic=cn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eh&&t.locale!=="ko"?null:t.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m0[e.type]:t==="textarea"}function Lh(e,t,n,r){dh(r),t=co(t,"onChange"),0<t.length&&(n=new lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vi=null,Fi=null;function g0(e){Vh(e,0)}function Wo(e){var t=hr(e);if(ih(t))return e}function C0(e,t){if(e==="change")return t}var Nh=!1;if(Qt){var vs;if(Qt){var Rs="oninput"in document;if(!Rs){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),Rs=typeof Ed.oninput=="function"}vs=Rs}else vs=!1;Nh=vs&&(!document.documentMode||9<document.documentMode)}function Dd(){vi&&(vi.detachEvent("onpropertychange",Oh),Fi=vi=null)}function Oh(e){if(e.propertyName==="value"&&Wo(Fi)){var t=[];Lh(t,Fi,e,Zu(e)),mh(g0,t)}}function _0(e,t,n){e==="focusin"?(Dd(),vi=t,Fi=n,vi.attachEvent("onpropertychange",Oh)):e==="focusout"&&Dd()}function S0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wo(Fi)}function y0(e,t){if(e==="click")return Wo(t)}function x0(e,t){if(e==="input"||e==="change")return Wo(t)}function v0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:v0;function ji(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ea.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function Md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ld(e,t){var n=Md(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Md(n)}}function Bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fh(){for(var e=window,t=ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ro(e.document)}return t}function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R0(e){var t=Fh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bh(n.ownerDocument.documentElement,n)){if(r!==null&&ac(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ld(n,l);var o=Ld(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I0=Qt&&"documentMode"in document&&11>=document.documentMode,fr=null,Qa=null,Ri=null,Ja=!1;function Nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||fr==null||fr!==ro(r)||(r=fr,"selectionStart"in r&&ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&ji(Ri,r)||(Ri=r,r=co(Qa,"onSelect"),0<r.length&&(t=new lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function xl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Is={},jh={};Qt&&(jh=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Go(e){if(Is[e])return Is[e];if(!pr[e])return e;var t=pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jh)return Is[e]=t[n];return e}var zh=Go("animationend"),Wh=Go("animationiteration"),Gh=Go("animationstart"),Uh=Go("transitionend"),Hh=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){Hh.set(e,t),qn(t,[e])}for(var Ps=0;Ps<Od.length;Ps++){var As=Od[Ps],P0=As.toLowerCase(),A0=As[0].toUpperCase()+As.slice(1);An(P0,"on"+A0)}An(zh,"onAnimationEnd");An(Wh,"onAnimationIteration");An(Gh,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Uh,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Bd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,PC(r,t,void 0,e),e.currentTarget=null}function Vh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Bd(i,s,c),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Bd(i,s,c),l=a}}}if(lo)throw e=$a,lo=!1,$a=null,e}function me(e,t){var n=t[nu];n===void 0&&(n=t[nu]=new Set);var r=e+"__bubble";n.has(r)||($h(t,e,2,!1),n.add(r))}function Ts(e,t,n){var r=0;t&&(r|=4),$h(n,e,r,t)}var vl="_reactListening"+Math.random().toString(36).slice(2);function zi(e){if(!e[vl]){e[vl]=!0,Zp.forEach(function(n){n!=="selectionchange"&&(T0.has(n)||Ts(n,!1,e),Ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vl]||(t[vl]=!0,Ts("selectionchange",!1,t))}}function $h(e,t,n,r){switch(kh(t)){case 1:var i=WC;break;case 4:i=GC;break;default:i=rc}n=i.bind(null,t,n,e),i=void 0,!Va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ws(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Fn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}mh(function(){var c=l,f=Zu(n),d=[];e:{var p=Hh.get(e);if(p!==void 0){var h=lc,g=e;switch(e){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":h=r0;break;case"focusin":g="focus",h=xs;break;case"focusout":g="blur",h=xs;break;case"beforeblur":case"afterblur":h=xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=VC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=o0;break;case zh:case Wh:case Gh:h=XC;break;case Uh:h=a0;break;case"scroll":h=UC;break;case"wheel":h=c0;break;case"copy":case"cut":case"paste":h=QC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Td}var S=(t&4)!==0,x=!S&&e==="scroll",m=S?p!==null?p+"Capture":null:p;S=[];for(var C=c,_;C!==null;){_=C;var R=_.stateNode;if(_.tag===5&&R!==null&&(_=R,m!==null&&(R=Li(C,m),R!=null&&S.push(Wi(C,R,_)))),x)break;C=C.return}0<S.length&&(p=new h(p,g,null,n,f),d.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Ua&&(g=n.relatedTarget||n.fromElement)&&(Fn(g)||g[Jt]))break e;if((h||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=c,g=g?Fn(g):null,g!==null&&(x=Qn(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=c),h!==g)){if(S=Pd,R="onMouseLeave",m="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(S=Td,R="onPointerLeave",m="onPointerEnter",C="pointer"),x=h==null?p:hr(h),_=g==null?p:hr(g),p=new S(R,C+"leave",h,n,f),p.target=x,p.relatedTarget=_,R=null,Fn(f)===c&&(S=new S(m,C+"enter",g,n,f),S.target=_,S.relatedTarget=x,R=S),x=R,h&&g)t:{for(S=h,m=g,C=0,_=S;_;_=tr(_))C++;for(_=0,R=m;R;R=tr(R))_++;for(;0<C-_;)S=tr(S),C--;for(;0<_-C;)m=tr(m),_--;for(;C--;){if(S===m||m!==null&&S===m.alternate)break t;S=tr(S),m=tr(m)}S=null}else S=null;h!==null&&Fd(d,p,h,S,!1),g!==null&&x!==null&&Fd(d,x,g,S,!0)}}e:{if(p=c?hr(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var A=C0;else if(bd(p))if(Nh)A=x0;else{A=S0;var P=_0}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=y0);if(A&&(A=A(e,c))){Lh(d,A,n,f);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Fa(p,"number",p.value)}switch(P=c?hr(c):window,e){case"focusin":(bd(P)||P.contentEditable==="true")&&(fr=P,Qa=c,Ri=null);break;case"focusout":Ri=Qa=fr=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,Nd(d,n,f);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":Nd(d,n,f)}var w;if(sc)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else dr?Dh(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Eh&&n.locale!=="ko"&&(dr||N!=="onCompositionStart"?N==="onCompositionEnd"&&dr&&(w=bh()):(cn=f,ic="value"in cn?cn.value:cn.textContent,dr=!0)),P=co(c,N),0<P.length&&(N=new Ad(N,e,null,n,f),d.push({event:N,listeners:P}),w?N.data=w:(w=Mh(n),w!==null&&(N.data=w)))),(w=f0?p0(e,n):h0(e,n))&&(c=co(c,"onBeforeInput"),0<c.length&&(f=new Ad("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=w))}Vh(d,t)})}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Li(e,n),l!=null&&r.unshift(Wi(e,l,i)),l=Li(e,t),l!=null&&r.push(Wi(e,l,i))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fd(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Li(n,l),a!=null&&o.unshift(Wi(n,a,s))):i||(a=Li(n,l),a!=null&&o.push(Wi(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var w0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function jd(e){return(typeof e=="string"?e:""+e).replace(w0,`
`).replace(k0,"")}function Rl(e,t,n){if(t=jd(t),jd(e)!==t&&n)throw Error(L(425))}function fo(){}var Ya=null,Za=null;function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(D0)}:tu;function D0(e){setTimeout(function(){throw e})}function ks(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bi(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Vr,Gi="__reactProps$"+Vr,Jt="__reactContainer$"+Vr,nu="__reactEvents$"+Vr,M0="__reactListeners$"+Vr,L0="__reactHandles$"+Vr;function Fn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[Ot])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function rl(e){return e=e[Ot]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Uo(e){return e[Gi]||null}var ru=[],mr=-1;function Tn(e){return{current:e}}function ge(e){0>mr||(e.current=ru[mr],ru[mr]=null,mr--)}function de(e,t){mr++,ru[mr]=e.current,e.current=t}var Pn={},Ve=Tn(Pn),nt=Tn(!1),Un=Pn;function Dr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function po(){ge(nt),ge(Ve)}function Gd(e,t,n){if(Ve.current!==Pn)throw Error(L(168));de(Ve,t),de(nt,n)}function Kh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,_C(e)||"Unknown",i));return ve({},n,r)}function ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Un=Ve.current,de(Ve,e),de(nt,nt.current),!0}function Ud(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Kh(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,ge(nt),ge(Ve),de(Ve,e)):ge(nt),de(nt,n)}var Ht=null,Ho=!1,bs=!1;function Xh(e){Ht===null?Ht=[e]:Ht.push(e)}function N0(e){Ho=!0,Xh(e)}function wn(){if(!bs&&Ht!==null){bs=!0;var e=0,t=oe;try{var n=Ht;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,Ho=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),Sh(ec,wn),i}finally{oe=t,bs=!1}}return null}var gr=[],Cr=0,mo=null,go=0,gt=[],Ct=0,Hn=null,Vt=1,$t="";function Nn(e,t){gr[Cr++]=go,gr[Cr++]=mo,mo=e,go=t}function qh(e,t,n){gt[Ct++]=Vt,gt[Ct++]=$t,gt[Ct++]=Hn,Hn=e;var r=Vt;e=$t;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var l=32-wt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vt=1<<32-wt(t)+i|n<<i|r,$t=l+e}else Vt=1<<l|n<<i|r,$t=e}function uc(e){e.return!==null&&(Nn(e,1),qh(e,1,0))}function cc(e){for(;e===mo;)mo=gr[--Cr],gr[Cr]=null,go=gr[--Cr],gr[Cr]=null;for(;e===Hn;)Hn=gt[--Ct],gt[Ct]=null,$t=gt[--Ct],gt[Ct]=null,Vt=gt[--Ct],gt[Ct]=null}var dt=null,ct=null,Ce=!1,Tt=null;function Qh(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Vt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lu(e){if(Ce){var t=ct;if(t){var n=t;if(!Hd(e,t)){if(iu(e))throw Error(L(418));t=gn(n.nextSibling);var r=dt;t&&Hd(e,t)?Qh(r,n):(e.flags=e.flags&-4097|2,Ce=!1,dt=e)}}else{if(iu(e))throw Error(L(418));e.flags=e.flags&-4097|2,Ce=!1,dt=e}}}function Vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Il(e){if(e!==dt)return!1;if(!Ce)return Vd(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eu(e.type,e.memoizedProps)),t&&(t=ct)){if(iu(e))throw Jh(),Error(L(418));for(;t;)Qh(e,t),t=gn(t.nextSibling)}if(Vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?gn(e.stateNode.nextSibling):null;return!0}function Jh(){for(var e=ct;e;)e=gn(e.nextSibling)}function Mr(){ct=dt=null,Ce=!1}function dc(e){Tt===null?Tt=[e]:Tt.push(e)}var O0=en.ReactCurrentBatchConfig;function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Pl(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $d(e){var t=e._init;return t(e._payload)}function Yh(e){function t(m,C){if(e){var _=m.deletions;_===null?(m.deletions=[C],m.flags|=16):_.push(C)}}function n(m,C){if(!e)return null;for(;C!==null;)t(m,C),C=C.sibling;return null}function r(m,C){for(m=new Map;C!==null;)C.key!==null?m.set(C.key,C):m.set(C.index,C),C=C.sibling;return m}function i(m,C){return m=yn(m,C),m.index=0,m.sibling=null,m}function l(m,C,_){return m.index=_,e?(_=m.alternate,_!==null?(_=_.index,_<C?(m.flags|=2,C):_):(m.flags|=2,C)):(m.flags|=1048576,C)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,C,_,R){return C===null||C.tag!==6?(C=Bs(_,m.mode,R),C.return=m,C):(C=i(C,_),C.return=m,C)}function a(m,C,_,R){var A=_.type;return A===cr?f(m,C,_.props.children,R,_.key):C!==null&&(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===on&&$d(A)===C.type)?(R=i(C,_.props),R.ref=ri(m,C,_),R.return=m,R):(R=Yl(_.type,_.key,_.props,null,m.mode,R),R.ref=ri(m,C,_),R.return=m,R)}function c(m,C,_,R){return C===null||C.tag!==4||C.stateNode.containerInfo!==_.containerInfo||C.stateNode.implementation!==_.implementation?(C=Fs(_,m.mode,R),C.return=m,C):(C=i(C,_.children||[]),C.return=m,C)}function f(m,C,_,R,A){return C===null||C.tag!==7?(C=Gn(_,m.mode,R,A),C.return=m,C):(C=i(C,_),C.return=m,C)}function d(m,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Bs(""+C,m.mode,_),C.return=m,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case hl:return _=Yl(C.type,C.key,C.props,null,m.mode,_),_.ref=ri(m,null,C),_.return=m,_;case ur:return C=Fs(C,m.mode,_),C.return=m,C;case on:var R=C._init;return d(m,R(C._payload),_)}if(mi(C)||Yr(C))return C=Gn(C,m.mode,_,null),C.return=m,C;Pl(m,C)}return null}function p(m,C,_,R){var A=C!==null?C.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:s(m,C,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case hl:return _.key===A?a(m,C,_,R):null;case ur:return _.key===A?c(m,C,_,R):null;case on:return A=_._init,p(m,C,A(_._payload),R)}if(mi(_)||Yr(_))return A!==null?null:f(m,C,_,R,null);Pl(m,_)}return null}function h(m,C,_,R,A){if(typeof R=="string"&&R!==""||typeof R=="number")return m=m.get(_)||null,s(C,m,""+R,A);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case hl:return m=m.get(R.key===null?_:R.key)||null,a(C,m,R,A);case ur:return m=m.get(R.key===null?_:R.key)||null,c(C,m,R,A);case on:var P=R._init;return h(m,C,_,P(R._payload),A)}if(mi(R)||Yr(R))return m=m.get(_)||null,f(C,m,R,A,null);Pl(C,R)}return null}function g(m,C,_,R){for(var A=null,P=null,w=C,N=C=0,G=null;w!==null&&N<_.length;N++){w.index>N?(G=w,w=null):G=w.sibling;var I=p(m,w,_[N],R);if(I===null){w===null&&(w=G);break}e&&w&&I.alternate===null&&t(m,w),C=l(I,C,N),P===null?A=I:P.sibling=I,P=I,w=G}if(N===_.length)return n(m,w),Ce&&Nn(m,N),A;if(w===null){for(;N<_.length;N++)w=d(m,_[N],R),w!==null&&(C=l(w,C,N),P===null?A=w:P.sibling=w,P=w);return Ce&&Nn(m,N),A}for(w=r(m,w);N<_.length;N++)G=h(w,m,N,_[N],R),G!==null&&(e&&G.alternate!==null&&w.delete(G.key===null?N:G.key),C=l(G,C,N),P===null?A=G:P.sibling=G,P=G);return e&&w.forEach(function(F){return t(m,F)}),Ce&&Nn(m,N),A}function S(m,C,_,R){var A=Yr(_);if(typeof A!="function")throw Error(L(150));if(_=A.call(_),_==null)throw Error(L(151));for(var P=A=null,w=C,N=C=0,G=null,I=_.next();w!==null&&!I.done;N++,I=_.next()){w.index>N?(G=w,w=null):G=w.sibling;var F=p(m,w,I.value,R);if(F===null){w===null&&(w=G);break}e&&w&&F.alternate===null&&t(m,w),C=l(F,C,N),P===null?A=F:P.sibling=F,P=F,w=G}if(I.done)return n(m,w),Ce&&Nn(m,N),A;if(w===null){for(;!I.done;N++,I=_.next())I=d(m,I.value,R),I!==null&&(C=l(I,C,N),P===null?A=I:P.sibling=I,P=I);return Ce&&Nn(m,N),A}for(w=r(m,w);!I.done;N++,I=_.next())I=h(w,m,N,I.value,R),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?N:I.key),C=l(I,C,N),P===null?A=I:P.sibling=I,P=I);return e&&w.forEach(function(U){return t(m,U)}),Ce&&Nn(m,N),A}function x(m,C,_,R){if(typeof _=="object"&&_!==null&&_.type===cr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case hl:e:{for(var A=_.key,P=C;P!==null;){if(P.key===A){if(A=_.type,A===cr){if(P.tag===7){n(m,P.sibling),C=i(P,_.props.children),C.return=m,m=C;break e}}else if(P.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===on&&$d(A)===P.type){n(m,P.sibling),C=i(P,_.props),C.ref=ri(m,P,_),C.return=m,m=C;break e}n(m,P);break}else t(m,P);P=P.sibling}_.type===cr?(C=Gn(_.props.children,m.mode,R,_.key),C.return=m,m=C):(R=Yl(_.type,_.key,_.props,null,m.mode,R),R.ref=ri(m,C,_),R.return=m,m=R)}return o(m);case ur:e:{for(P=_.key;C!==null;){if(C.key===P)if(C.tag===4&&C.stateNode.containerInfo===_.containerInfo&&C.stateNode.implementation===_.implementation){n(m,C.sibling),C=i(C,_.children||[]),C.return=m,m=C;break e}else{n(m,C);break}else t(m,C);C=C.sibling}C=Fs(_,m.mode,R),C.return=m,m=C}return o(m);case on:return P=_._init,x(m,C,P(_._payload),R)}if(mi(_))return g(m,C,_,R);if(Yr(_))return S(m,C,_,R);Pl(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,C!==null&&C.tag===6?(n(m,C.sibling),C=i(C,_),C.return=m,m=C):(n(m,C),C=Bs(_,m.mode,R),C.return=m,m=C),o(m)):n(m,C)}return x}var Lr=Yh(!0),Zh=Yh(!1),Co=Tn(null),_o=null,_r=null,fc=null;function pc(){fc=_r=_o=null}function hc(e){var t=Co.current;ge(Co),e._currentValue=t}function ou(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){_o=e,fc=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(fc!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(_o===null)throw Error(L(308));_r=e,_o.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var jn=null;function mc(e){jn===null?jn=[e]:jn.push(e)}function e1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,mc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function $l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tc(e,n)}}function Kd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var i=e.updateQueue;sn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?l=c:o.next=c,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=a))}if(l!==null){var d=i.baseState;o=0,f=c=a=null,s=l;do{var p=s.lane,h=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,S=s;switch(p=t,h=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){d=g.call(h,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,p=typeof g=="function"?g.call(h,d,p):g,p==null)break e;d=ve({},d,p);break e;case 2:sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=h,a=d):f=f.next=h,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);$n|=o,e.lanes=o,e.memoizedState=d}}function Xd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var il={},Ft=Tn(il),Ui=Tn(il),Hi=Tn(il);function zn(e){if(e===il)throw Error(L(174));return e}function Cc(e,t){switch(de(Hi,t),de(Ui,e),de(Ft,il),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=za(t,e)}ge(Ft),de(Ft,t)}function Nr(){ge(Ft),ge(Ui),ge(Hi)}function n1(e){zn(Hi.current);var t=zn(Ft.current),n=za(t,e.type);t!==n&&(de(Ui,e),de(Ft,n))}function _c(e){Ui.current===e&&(ge(Ft),ge(Ui))}var ye=Tn(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=[];function Sc(){for(var e=0;e<Es.length;e++)Es[e]._workInProgressVersionPrimary=null;Es.length=0}var Kl=en.ReactCurrentDispatcher,Ds=en.ReactCurrentBatchConfig,Vn=0,xe=null,be=null,Me=null,xo=!1,Ii=!1,Vi=0,B0=0;function je(){throw Error(L(321))}function yc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function xc(e,t,n,r,i,l){if(Vn=l,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kl.current=e===null||e.memoizedState===null?W0:G0,e=n(r,i),Ii){l=0;do{if(Ii=!1,Vi=0,25<=l)throw Error(L(301));l+=1,Me=be=null,t.updateQueue=null,Kl.current=U0,e=n(r,i)}while(Ii)}if(Kl.current=vo,t=be!==null&&be.next!==null,Vn=0,Me=be=xe=null,xo=!1,t)throw Error(L(300));return e}function vc(){var e=Vi!==0;return Vi=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?xe.memoizedState=Me=e:Me=Me.next=e,Me}function vt(){if(be===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Me===null?xe.memoizedState:Me.next;if(t!==null)Me=t,be=e;else{if(e===null)throw Error(L(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Me===null?xe.memoizedState=Me=e:Me=Me.next=e}return Me}function $i(e,t){return typeof t=="function"?t(e):t}function Ms(e){var t=vt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,c=l;do{var f=c.lane;if((Vn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=d,o=r):a=a.next=d,xe.lanes|=f,$n|=f}c=c.next}while(c!==null&&c!==l);a===null?o=r:a.next=s,Et(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,xe.lanes|=l,$n|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ls(e){var t=vt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Et(l,t.memoizedState)||(tt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function r1(){}function i1(e,t){var n=xe,r=vt(),i=t(),l=!Et(r.memoizedState,i);if(l&&(r.memoizedState=i,tt=!0),r=r.queue,Rc(s1.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Ki(9,o1.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(L(349));Vn&30||l1(n,t,i)}return i}function l1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function o1(e,t,n,r){t.value=n,t.getSnapshot=r,a1(t)&&u1(e)}function s1(e,t,n){return n(function(){a1(t)&&u1(e)})}function a1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function u1(e){var t=Yt(e,1);t!==null&&kt(t,e,1,-1)}function qd(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=z0.bind(null,xe,e),[t.memoizedState,e]}function Ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function c1(){return vt().memoizedState}function Xl(e,t,n,r){var i=Lt();xe.flags|=e,i.memoizedState=Ki(1|t,n,void 0,r===void 0?null:r)}function Vo(e,t,n,r){var i=vt();r=r===void 0?null:r;var l=void 0;if(be!==null){var o=be.memoizedState;if(l=o.destroy,r!==null&&yc(r,o.deps)){i.memoizedState=Ki(t,n,l,r);return}}xe.flags|=e,i.memoizedState=Ki(1|t,n,l,r)}function Qd(e,t){return Xl(8390656,8,e,t)}function Rc(e,t){return Vo(2048,8,e,t)}function d1(e,t){return Vo(4,2,e,t)}function f1(e,t){return Vo(4,4,e,t)}function p1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function h1(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4,4,p1.bind(null,t,e),n)}function Ic(){}function m1(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function g1(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function C1(e,t,n){return Vn&21?(Et(n,t)||(n=vh(),xe.lanes|=n,$n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function F0(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Ds.transition;Ds.transition={};try{e(!1),t()}finally{oe=n,Ds.transition=r}}function _1(){return vt().memoizedState}function j0(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S1(e))y1(t,n);else if(n=e1(e,t,n,r),n!==null){var i=qe();kt(n,e,r,i),x1(n,t,r)}}function z0(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S1(e))y1(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Et(s,o)){var a=t.interleaved;a===null?(i.next=i,mc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=e1(e,t,i,r),n!==null&&(i=qe(),kt(n,e,r,i),x1(n,t,r))}}function S1(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function y1(e,t){Ii=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function x1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tc(e,n)}}var vo={readContext:xt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},W0={readContext:xt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Qd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xl(4194308,4,p1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xl(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=j0.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:qd,useDebugValue:Ic,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=qd(!1),t=e[0];return e=F0.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,i=Lt();if(Ce){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Le===null)throw Error(L(349));Vn&30||l1(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Qd(s1.bind(null,r,l,e),[e]),r.flags|=2048,Ki(9,o1.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Le.identifierPrefix;if(Ce){var n=$t,r=Vt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=B0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G0={readContext:xt,useCallback:m1,useContext:xt,useEffect:Rc,useImperativeHandle:h1,useInsertionEffect:d1,useLayoutEffect:f1,useMemo:g1,useReducer:Ms,useRef:c1,useState:function(){return Ms($i)},useDebugValue:Ic,useDeferredValue:function(e){var t=vt();return C1(t,be.memoizedState,e)},useTransition:function(){var e=Ms($i)[0],t=vt().memoizedState;return[e,t]},useMutableSource:r1,useSyncExternalStore:i1,useId:_1,unstable_isNewReconciler:!1},U0={readContext:xt,useCallback:m1,useContext:xt,useEffect:Rc,useImperativeHandle:h1,useInsertionEffect:d1,useLayoutEffect:f1,useMemo:g1,useReducer:Ls,useRef:c1,useState:function(){return Ls($i)},useDebugValue:Ic,useDeferredValue:function(e){var t=vt();return be===null?t.memoizedState=e:C1(t,be.memoizedState,e)},useTransition:function(){var e=Ls($i)[0],t=vt().memoizedState;return[e,t]},useMutableSource:r1,useSyncExternalStore:i1,useId:_1,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Sn(e),l=Xt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Cn(e,l,i),t!==null&&(kt(t,e,i,r),$l(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Sn(e),l=Xt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Cn(e,l,i),t!==null&&(kt(t,e,i,r),$l(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=Sn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(kt(t,e,r,n),$l(t,e,r))}};function Jd(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!ji(n,r)||!ji(i,l):!0}function v1(e,t,n){var r=!1,i=Pn,l=t.contextType;return typeof l=="object"&&l!==null?l=xt(l):(i=rt(t)?Un:Ve.current,r=t.contextTypes,l=(r=r!=null)?Dr(e,i):Pn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function au(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},gc(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=xt(l):(l=rt(t)?Un:Ve.current,i.context=Dr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(su(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$o.enqueueReplaceState(i,i.state,null),So(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,t){try{var n="",r=t;do n+=CC(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Ns(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function R1(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Io||(Io=!0,Su=r),uu(e,t)},n}function I1(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){uu(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){uu(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Zd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new H0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=i_.bind(null,e,t,n),t.then(e,e))}function ef(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var V0=en.ReactCurrentOwner,tt=!1;function Ke(e,t,n,r){t.child=e===null?Zh(t,null,n,r):Lr(t,e.child,n,r)}function nf(e,t,n,r,i){n=n.render;var l=t.ref;return Tr(t,i),r=xc(e,t,n,r,l,i),n=vc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(Ce&&n&&uc(t),t.flags|=1,Ke(e,t,r,i),t.child)}function rf(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Dc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,P1(e,t,l,r,i)):(e=Yl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:ji,n(o,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=yn(l,r),e.ref=t.ref,e.return=t,t.child=e}function P1(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(ji(l,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return cu(e,t,n,r,i)}function A1(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(yr,at),at|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(yr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,de(yr,at),at|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,de(yr,at),at|=r;return Ke(e,t,i,n),t.child}function T1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,n,r,i){var l=rt(n)?Un:Ve.current;return l=Dr(t,l),Tr(t,i),n=xc(e,t,n,r,l,i),r=vc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(Ce&&r&&uc(t),t.flags|=1,Ke(e,t,n,i),t.child)}function lf(e,t,n,r,i){if(rt(n)){var l=!0;ho(t)}else l=!1;if(Tr(t,i),t.stateNode===null)ql(e,t),v1(t,n,r),au(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=xt(c):(c=rt(n)?Un:Ve.current,c=Dr(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Yd(t,o,r,c),sn=!1;var p=t.memoizedState;o.state=p,So(t,r,o,i),a=t.memoizedState,s!==r||p!==a||nt.current||sn?(typeof f=="function"&&(su(t,n,f,r),a=t.memoizedState),(s=sn||Jd(t,n,s,r,p,a,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,t1(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Pt(t.type,s),o.props=c,d=t.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=xt(a):(a=rt(n)?Un:Ve.current,a=Dr(t,a));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==a)&&Yd(t,o,r,a),sn=!1,p=t.memoizedState,o.state=p,So(t,r,o,i);var g=t.memoizedState;s!==d||p!==g||nt.current||sn?(typeof h=="function"&&(su(t,n,h,r),g=t.memoizedState),(c=sn||Jd(t,n,c,r,p,g,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return du(e,t,n,r,l,i)}function du(e,t,n,r,i,l){T1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ud(t,n,!1),Zt(e,t,l);r=t.stateNode,V0.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Lr(t,e.child,null,l),t.child=Lr(t,null,s,l)):Ke(e,t,s,l),t.memoizedState=r.state,i&&Ud(t,n,!0),t.child}function w1(e){var t=e.stateNode;t.pendingContext?Gd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gd(e,t.context,!1),Cc(e,t.containerInfo)}function of(e,t,n,r,i){return Mr(),dc(i),t.flags|=256,Ke(e,t,n,r),t.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function k1(e,t,n){var r=t.pendingProps,i=ye.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ye,i&1),e===null)return lu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=qo(o,r,0,null),e=Gn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=pu(n),t.memoizedState=fu,e):Pc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return $0(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=yn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=yn(s,l):(l=Gn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?pu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=fu,r}return l=e.child,e=l.sibling,r=yn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pc(e,t){return t=qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Al(e,t,n,r){return r!==null&&dc(r),Lr(t,e.child,null,n),e=Pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $0(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Ns(Error(L(422))),Al(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=qo({mode:"visible",children:r.children},i,0,null),l=Gn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Lr(t,e.child,null,o),t.child.memoizedState=pu(o),t.memoizedState=fu,l);if(!(t.mode&1))return Al(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(L(419)),r=Ns(l,r,void 0),Al(e,t,o,r)}if(s=(o&e.childLanes)!==0,tt||s){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Yt(e,i),kt(r,e,i,-1))}return Ec(),r=Ns(Error(L(421))),Al(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=l_.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ct=gn(i.nextSibling),dt=t,Ce=!0,Tt=null,e!==null&&(gt[Ct++]=Vt,gt[Ct++]=$t,gt[Ct++]=Hn,Vt=e.id,$t=e.overflow,Hn=t),t=Pc(t,r.children),t.flags|=4096,t)}function sf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,n)}function Os(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function b1(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ke(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,n,t);else if(e.tag===19)sf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Os(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Os(t,!0,n,null,l);break;case"together":Os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ql(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K0(e,t,n){switch(t.tag){case 3:w1(t),Mr();break;case 5:n1(t);break;case 1:rt(t.type)&&ho(t);break;case 4:Cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(Co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?k1(e,t,n):(de(ye,ye.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);de(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return b1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,A1(e,t,n)}return Zt(e,t,n)}var E1,hu,D1,M1;E1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hu=function(){};D1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(Ft.current);var l=null;switch(n){case"input":i=Oa(e,i),r=Oa(e,r),l=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),l=[];break;case"textarea":i=ja(e,i),r=ja(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}Wa(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Di.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Di.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&me("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};M1=function(e,t,n,r){n!==r&&(t.flags|=4)};function ii(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function X0(e,t,n){var r=t.pendingProps;switch(cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return rt(t.type)&&po(),ze(t),null;case 3:return r=t.stateNode,Nr(),ge(nt),ge(Ve),Sc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Il(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&(vu(Tt),Tt=null))),hu(e,t),ze(t),null;case 5:_c(t);var i=zn(Hi.current);if(n=t.type,e!==null&&t.stateNode!=null)D1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return ze(t),null}if(e=zn(Ft.current),Il(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ot]=t,r[Gi]=l,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)me(Ci[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":md(r,l),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},me("invalid",r);break;case"textarea":Cd(r,l),me("invalid",r)}Wa(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Rl(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Rl(r.textContent,s,e),i=["children",""+s]):Di.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":ml(r),gd(r,l,!0);break;case"textarea":ml(r),_d(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ot]=t,e[Gi]=r,E1(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ga(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)me(Ci[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":md(e,r),i=Oa(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),me("invalid",e);break;case"textarea":Cd(e,r),i=ja(e,r),me("invalid",e);break;default:i=r}Wa(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?ch(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ah(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Mi(e,a):typeof a=="number"&&Mi(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Di.hasOwnProperty(l)?a!=null&&l==="onScroll"&&me("scroll",e):a!=null&&qu(e,l,a,o))}switch(n){case"input":ml(e),gd(e,r,!1);break;case"textarea":ml(e),_d(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Rr(e,!!r.multiple,l,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)M1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=zn(Hi.current),zn(Ft.current),Il(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(l=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return ze(t),null;case 13:if(ge(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&ct!==null&&t.mode&1&&!(t.flags&128))Jh(),Mr(),t.flags|=98560,l=!1;else if(l=Il(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(L(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(L(317));l[Ot]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else Tt!==null&&(vu(Tt),Tt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Ee===0&&(Ee=3):Ec())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Nr(),hu(e,t),e===null&&zi(t.stateNode.containerInfo),ze(t),null;case 10:return hc(t.type._context),ze(t),null;case 17:return rt(t.type)&&po(),ze(t),null;case 19:if(ge(ye),l=t.memoizedState,l===null)return ze(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)ii(l,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=yo(e),o!==null){for(t.flags|=128,ii(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ye,ye.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ae()>Br&&(t.flags|=128,r=!0,ii(l,!1),t.lanes=4194304)}else{if(!r)if(e=yo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ii(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Ce)return ze(t),null}else 2*Ae()-l.renderingStartTime>Br&&n!==1073741824&&(t.flags|=128,r=!0,ii(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ae(),t.sibling=null,n=ye.current,de(ye,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return bc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function q0(e,t){switch(cc(t),t.tag){case 1:return rt(t.type)&&po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),ge(nt),ge(Ve),Sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _c(t),null;case 13:if(ge(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ye),null;case 4:return Nr(),null;case 10:return hc(t.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var Tl=!1,Ue=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,H=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function mu(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var af=!1;function J0(e,t){if(Ya=ao,e=Fh(),ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==l||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++c===i&&(s=o),p===l&&++f===r&&(a=o),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:e,selectionRange:n},ao=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,x=g.memoizedState,m=t.stateNode,C=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Pt(t.type,S),x);m.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(R){Ie(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return g=af,af=!1,g}function Pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&mu(t,n,l)}i=i.next}while(i!==r)}}function Ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function L1(e){var t=e.alternate;t!==null&&(e.alternate=null,L1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Gi],delete t[nu],delete t[M0],delete t[L0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function N1(e){return e.tag===5||e.tag===3||e.tag===4}function uf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||N1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function _u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_u(e,t,n),e=e.sibling;e!==null;)_u(e,t,n),e=e.sibling}var Oe=null,At=!1;function rn(e,t,n){for(n=n.child;n!==null;)O1(e,t,n),n=n.sibling}function O1(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:Ue||Sr(n,t);case 6:var r=Oe,i=At;Oe=null,rn(e,t,n),Oe=r,At=i,Oe!==null&&(At?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(At?(e=Oe,n=n.stateNode,e.nodeType===8?ks(e.parentNode,n):e.nodeType===1&&ks(e,n),Bi(e)):ks(Oe,n.stateNode));break;case 4:r=Oe,i=At,Oe=n.stateNode.containerInfo,At=!0,rn(e,t,n),Oe=r,At=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&mu(n,t,o),i=i.next}while(i!==r)}rn(e,t,n);break;case 1:if(!Ue&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ie(n,t,s)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,rn(e,t,n),Ue=r):rn(e,t,n);break;default:rn(e,t,n)}}function cf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Q0),t.forEach(function(r){var i=o_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Oe=s.stateNode,At=!1;break e;case 3:Oe=s.stateNode.containerInfo,At=!0;break e;case 4:Oe=s.stateNode.containerInfo,At=!0;break e}s=s.return}if(Oe===null)throw Error(L(160));O1(l,o,i),Oe=null,At=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){Ie(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B1(t,e),t=t.sibling}function B1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Mt(e),r&4){try{Pi(3,e,e.return),Ko(3,e)}catch(S){Ie(e,e.return,S)}try{Pi(5,e,e.return)}catch(S){Ie(e,e.return,S)}}break;case 1:It(t,e),Mt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(It(t,e),Mt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{Mi(i,"")}catch(S){Ie(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&lh(i,l),Ga(s,o);var c=Ga(s,l);for(o=0;o<a.length;o+=2){var f=a[o],d=a[o+1];f==="style"?ch(i,d):f==="dangerouslySetInnerHTML"?ah(i,d):f==="children"?Mi(i,d):qu(i,f,d,c)}switch(s){case"input":Ba(i,l);break;case"textarea":oh(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?Rr(i,!!l.multiple,h,!1):p!==!!l.multiple&&(l.defaultValue!=null?Rr(i,!!l.multiple,l.defaultValue,!0):Rr(i,!!l.multiple,l.multiple?[]:"",!1))}i[Gi]=l}catch(S){Ie(e,e.return,S)}}break;case 6:if(It(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){Ie(e,e.return,S)}}break;case 3:if(It(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(S){Ie(e,e.return,S)}break;case 4:It(t,e),Mt(e);break;case 13:It(t,e),Mt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(wc=Ae())),r&4&&cf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(c=Ue)||f,It(t,e),Ue=c):It(t,e),Mt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(H=e,f=e.child;f!==null;){for(d=H=f;H!==null;){switch(p=H,h=p.child,p.tag){case 0:case 11:case 14:case 15:Pi(4,p,p.return);break;case 1:Sr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){Ie(r,n,S)}}break;case 5:Sr(p,p.return);break;case 22:if(p.memoizedState!==null){ff(d);continue}}h!==null?(h.return=p,H=h):ff(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=uh("display",o))}catch(S){Ie(e,e.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){Ie(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:It(t,e),Mt(e),r&4&&cf(e);break;case 21:break;default:It(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(N1(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mi(i,""),r.flags&=-33);var l=uf(e);_u(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=uf(e);Cu(e,s,o);break;default:throw Error(L(161))}}catch(a){Ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Y0(e,t,n){H=e,F1(e)}function F1(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Ue;s=Tl;var c=Ue;if(Tl=o,(Ue=a)&&!c)for(H=i;H!==null;)o=H,a=o.child,o.tag===22&&o.memoizedState!==null?pf(i):a!==null?(a.return=o,H=a):pf(i);for(;l!==null;)H=l,F1(l),l=l.sibling;H=i,Tl=s,Ue=c}df(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,H=l):df(e)}}function df(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Xd(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xd(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Bi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ue||t.flags&512&&gu(t)}catch(p){Ie(t,t.return,p)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function ff(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function pf(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ko(4,t)}catch(a){Ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Ie(t,i,a)}}var l=t.return;try{gu(t)}catch(a){Ie(t,l,a)}break;case 5:var o=t.return;try{gu(t)}catch(a){Ie(t,o,a)}}}catch(a){Ie(t,t.return,a)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var Z0=Math.ceil,Ro=en.ReactCurrentDispatcher,Ac=en.ReactCurrentOwner,yt=en.ReactCurrentBatchConfig,le=0,Le=null,ke=null,Be=0,at=0,yr=Tn(0),Ee=0,Xi=null,$n=0,Xo=0,Tc=0,Ai=null,et=null,wc=0,Br=1/0,Ut=null,Io=!1,Su=null,_n=null,wl=!1,dn=null,Po=0,Ti=0,yu=null,Ql=-1,Jl=0;function qe(){return le&6?Ae():Ql!==-1?Ql:Ql=Ae()}function Sn(e){return e.mode&1?le&2&&Be!==0?Be&-Be:O0.transition!==null?(Jl===0&&(Jl=vh()),Jl):(e=oe,e!==0||(e=window.event,e=e===void 0?16:kh(e.type)),e):1}function kt(e,t,n,r){if(50<Ti)throw Ti=0,yu=null,Error(L(185));tl(e,n,r),(!(le&2)||e!==Le)&&(e===Le&&(!(le&2)&&(Xo|=n),Ee===4&&un(e,Be)),it(e,r),n===1&&le===0&&!(t.mode&1)&&(Br=Ae()+500,Ho&&wn()))}function it(e,t){var n=e.callbackNode;OC(e,t);var r=so(e,e===Le?Be:0);if(r===0)n!==null&&xd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xd(n),t===1)e.tag===0?N0(hf.bind(null,e)):Xh(hf.bind(null,e)),E0(function(){!(le&6)&&wn()}),n=null;else{switch(Rh(r)){case 1:n=ec;break;case 4:n=yh;break;case 16:n=oo;break;case 536870912:n=xh;break;default:n=oo}n=$1(n,j1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function j1(e,t){if(Ql=-1,Jl=0,le&6)throw Error(L(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=so(e,e===Le?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ao(e,r);else{t=r;var i=le;le|=2;var l=W1();(Le!==e||Be!==t)&&(Ut=null,Br=Ae()+500,Wn(e,t));do try{n_();break}catch(s){z1(e,s)}while(!0);pc(),Ro.current=l,le=i,ke!==null?t=0:(Le=null,Be=0,t=Ee)}if(t!==0){if(t===2&&(i=Ka(e),i!==0&&(r=i,t=xu(e,i))),t===1)throw n=Xi,Wn(e,0),un(e,r),it(e,Ae()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!e_(i)&&(t=Ao(e,r),t===2&&(l=Ka(e),l!==0&&(r=l,t=xu(e,l))),t===1))throw n=Xi,Wn(e,0),un(e,r),it(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:On(e,et,Ut);break;case 3:if(un(e,r),(r&130023424)===r&&(t=wc+500-Ae(),10<t)){if(so(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=tu(On.bind(null,e,et,Ut),t);break}On(e,et,Ut);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-wt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z0(r/1960))-r,10<r){e.timeoutHandle=tu(On.bind(null,e,et,Ut),r);break}On(e,et,Ut);break;case 5:On(e,et,Ut);break;default:throw Error(L(329))}}}return it(e,Ae()),e.callbackNode===n?j1.bind(null,e):null}function xu(e,t){var n=Ai;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=et,et=n,t!==null&&vu(t)),e}function vu(e){et===null?et=e:et.push.apply(et,e)}function e_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Et(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~Tc,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function hf(e){if(le&6)throw Error(L(327));wr();var t=so(e,0);if(!(t&1))return it(e,Ae()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var r=Ka(e);r!==0&&(t=r,n=xu(e,r))}if(n===1)throw n=Xi,Wn(e,0),un(e,t),it(e,Ae()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,et,Ut),it(e,Ae()),null}function kc(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Br=Ae()+500,Ho&&wn())}}function Kn(e){dn!==null&&dn.tag===0&&!(le&6)&&wr();var t=le;le|=1;var n=yt.transition,r=oe;try{if(yt.transition=null,oe=1,e)return e()}finally{oe=r,yt.transition=n,le=t,!(le&6)&&wn()}}function bc(){at=yr.current,ge(yr)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,b0(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&po();break;case 3:Nr(),ge(nt),ge(Ve),Sc();break;case 5:_c(r);break;case 4:Nr();break;case 13:ge(ye);break;case 19:ge(ye);break;case 10:hc(r.type._context);break;case 22:case 23:bc()}n=n.return}if(Le=e,ke=e=yn(e.current,null),Be=at=t,Ee=0,Xi=null,Tc=Xo=$n=0,et=Ai=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}jn=null}return e}function z1(e,t){do{var n=ke;try{if(pc(),Kl.current=vo,xo){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xo=!1}if(Vn=0,Me=be=xe=null,Ii=!1,Vi=0,Ac.current=null,n===null||n.return===null){Ee=1,Xi=t,ke=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=Be,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=ef(o);if(h!==null){h.flags&=-257,tf(h,o,s,l,t),h.mode&1&&Zd(l,c,t),t=h,a=c;var g=t.updateQueue;if(g===null){var S=new Set;S.add(a),t.updateQueue=S}else g.add(a);break e}else{if(!(t&1)){Zd(l,c,t),Ec();break e}a=Error(L(426))}}else if(Ce&&s.mode&1){var x=ef(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),tf(x,o,s,l,t),dc(Or(a,s));break e}}l=a=Or(a,s),Ee!==4&&(Ee=2),Ai===null?Ai=[l]:Ai.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=R1(l,a,t);Kd(l,m);break e;case 1:s=a;var C=l.type,_=l.stateNode;if(!(l.flags&128)&&(typeof C.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(_n===null||!_n.has(_)))){l.flags|=65536,t&=-t,l.lanes|=t;var R=I1(l,s,t);Kd(l,R);break e}}l=l.return}while(l!==null)}U1(n)}catch(A){t=A,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function W1(){var e=Ro.current;return Ro.current=vo,e===null?vo:e}function Ec(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Le===null||!($n&268435455)&&!(Xo&268435455)||un(Le,Be)}function Ao(e,t){var n=le;le|=2;var r=W1();(Le!==e||Be!==t)&&(Ut=null,Wn(e,t));do try{t_();break}catch(i){z1(e,i)}while(!0);if(pc(),le=n,Ro.current=r,ke!==null)throw Error(L(261));return Le=null,Be=0,Ee}function t_(){for(;ke!==null;)G1(ke)}function n_(){for(;ke!==null&&!TC();)G1(ke)}function G1(e){var t=V1(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?U1(e):ke=t,Ac.current=null}function U1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=q0(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,ke=null;return}}else if(n=X0(n,t,at),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ee===0&&(Ee=5)}function On(e,t,n){var r=oe,i=yt.transition;try{yt.transition=null,oe=1,r_(e,t,n,r)}finally{yt.transition=i,oe=r}return null}function r_(e,t,n,r){do wr();while(dn!==null);if(le&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(BC(e,l),e===Le&&(ke=Le=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,$1(oo,function(){return wr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=yt.transition,yt.transition=null;var o=oe;oe=1;var s=le;le|=4,Ac.current=null,J0(e,n),B1(n,e),R0(Za),ao=!!Ya,Za=Ya=null,e.current=n,Y0(n),wC(),le=s,oe=o,yt.transition=l}else e.current=n;if(wl&&(wl=!1,dn=e,Po=i),l=e.pendingLanes,l===0&&(_n=null),EC(n.stateNode),it(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Io)throw Io=!1,e=Su,Su=null,e;return Po&1&&e.tag!==0&&wr(),l=e.pendingLanes,l&1?e===yu?Ti++:(Ti=0,yu=e):Ti=0,wn(),null}function wr(){if(dn!==null){var e=Rh(Po),t=yt.transition,n=oe;try{if(yt.transition=null,oe=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,Po=0,le&6)throw Error(L(331));var i=le;for(le|=4,H=e.current;H!==null;){var l=H,o=l.child;if(H.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Pi(8,f,l)}var d=f.child;if(d!==null)d.return=f,H=d;else for(;H!==null;){f=H;var p=f.sibling,h=f.return;if(L1(f),f===c){H=null;break}if(p!==null){p.return=h,H=p;break}H=h}}}var g=l.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}H=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,H=o;else e:for(;H!==null;){if(l=H,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pi(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,H=m;break e}H=l.return}}var C=e.current;for(H=C;H!==null;){o=H;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,H=_;else e:for(o=C;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ko(9,s)}}catch(A){Ie(s,s.return,A)}if(s===o){H=null;break e}var R=s.sibling;if(R!==null){R.return=s.return,H=R;break e}H=s.return}}if(le=i,wn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(jo,e)}catch{}r=!0}return r}finally{oe=n,yt.transition=t}}return!1}function mf(e,t,n){t=Or(n,t),t=R1(e,t,1),e=Cn(e,t,1),t=qe(),e!==null&&(tl(e,1,t),it(e,t))}function Ie(e,t,n){if(e.tag===3)mf(e,e,n);else for(;t!==null;){if(t.tag===3){mf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=Or(n,e),e=I1(t,e,1),t=Cn(t,e,1),e=qe(),t!==null&&(tl(t,1,e),it(t,e));break}}t=t.return}}function i_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Be&n)===n&&(Ee===4||Ee===3&&(Be&130023424)===Be&&500>Ae()-wc?Wn(e,0):Tc|=n),it(e,t)}function H1(e,t){t===0&&(e.mode&1?(t=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):t=1);var n=qe();e=Yt(e,t),e!==null&&(tl(e,t,n),it(e,n))}function l_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),H1(e,n)}function o_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),H1(e,n)}var V1;V1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,K0(e,t,n);tt=!!(e.flags&131072)}else tt=!1,Ce&&t.flags&1048576&&qh(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ql(e,t),e=t.pendingProps;var i=Dr(t,Ve.current);Tr(t,n),i=xc(null,t,r,e,i,n);var l=vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(l=!0,ho(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gc(t),i.updater=$o,t.stateNode=i,i._reactInternals=t,au(t,r,e,n),t=du(null,t,r,!0,l,n)):(t.tag=0,Ce&&l&&uc(t),Ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ql(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=a_(r),e=Pt(r,e),i){case 0:t=cu(null,t,r,e,n);break e;case 1:t=lf(null,t,r,e,n);break e;case 11:t=nf(null,t,r,e,n);break e;case 14:t=rf(null,t,r,Pt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),lf(e,t,r,i,n);case 3:e:{if(w1(t),e===null)throw Error(L(387));r=t.pendingProps,l=t.memoizedState,i=l.element,t1(e,t),So(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Or(Error(L(423)),t),t=of(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(L(424)),t),t=of(e,t,r,n,i);break e}else for(ct=gn(t.stateNode.containerInfo.firstChild),dt=t,Ce=!0,Tt=null,n=Zh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=Zt(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return n1(t),e===null&&lu(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,eu(r,i)?o=null:l!==null&&eu(r,l)&&(t.flags|=32),T1(e,t),Ke(e,t,o,n),t.child;case 6:return e===null&&lu(t),null;case 13:return k1(e,t,n);case 4:return Cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lr(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),nf(e,t,r,i,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,de(Co,r._currentValue),r._currentValue=o,l!==null)if(Et(l.value,o)){if(l.children===i.children&&!nt.current){t=Zt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Xt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ou(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(L(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ou(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tr(t,n),i=xt(i),r=r(i),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),rf(e,t,r,i,n);case 15:return P1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ql(e,t),t.tag=1,rt(r)?(e=!0,ho(t)):e=!1,Tr(t,n),v1(t,r,i),au(t,r,i,n),du(null,t,r,!0,e,n);case 19:return b1(e,t,n);case 22:return A1(e,t,n)}throw Error(L(156,t.tag))};function $1(e,t){return Sh(e,t)}function s_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new s_(e,t,n,r)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function a_(e){if(typeof e=="function")return Dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ju)return 11;if(e===Yu)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Dc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case cr:return Gn(n.children,i,l,t);case Qu:o=8,i|=8;break;case Da:return e=St(12,n,t,i|2),e.elementType=Da,e.lanes=l,e;case Ma:return e=St(13,n,t,i),e.elementType=Ma,e.lanes=l,e;case La:return e=St(19,n,t,i),e.elementType=La,e.lanes=l,e;case nh:return qo(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eh:o=10;break e;case th:o=9;break e;case Ju:o=11;break e;case Yu:o=14;break e;case on:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=St(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Gn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function qo(e,t,n,r){return e=St(22,e,r,t),e.elementType=nh,e.lanes=n,e.stateNode={isHidden:!1},e}function Bs(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Fs(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_s(0),this.expirationTimes=_s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,i,l,o,s,a){return e=new u_(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=St(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(l),e}function c_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function K1(e){if(!e)return Pn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(rt(n))return Kh(e,n,t)}return t}function X1(e,t,n,r,i,l,o,s,a){return e=Mc(n,r,!0,e,i,l,o,s,a),e.context=K1(null),n=e.current,r=qe(),i=Sn(n),l=Xt(r,i),l.callback=t??null,Cn(n,l,i),e.current.lanes=i,tl(e,i,r),it(e,r),e}function Qo(e,t,n,r){var i=t.current,l=qe(),o=Sn(i);return n=K1(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,o),e!==null&&(kt(e,i,o,l),$l(e,i,o)),o}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lc(e,t){gf(e,t),(e=e.alternate)&&gf(e,t)}function d_(){return null}var q1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nc(e){this._internalRoot=e}Jo.prototype.render=Nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Qo(e,t,null,null)};Jo.prototype.unmount=Nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){Qo(null,e,null,null)}),t[Jt]=null}};function Jo(e){this._internalRoot=e}Jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ah();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&wh(e)}};function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cf(){}function f_(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=To(o);l.call(c)}}var o=X1(t,r,e,0,null,!1,!1,"",Cf);return e._reactRootContainer=o,e[Jt]=o.current,zi(e.nodeType===8?e.parentNode:e),Kn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=To(a);s.call(c)}}var a=Mc(e,0,!1,null,null,!1,!1,"",Cf);return e._reactRootContainer=a,e[Jt]=a.current,zi(e.nodeType===8?e.parentNode:e),Kn(function(){Qo(t,a,n,r)}),a}function Zo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=To(o);s.call(a)}}Qo(t,o,e,i)}else o=f_(n,t,e,i,r);return To(o)}Ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gi(t.pendingLanes);n!==0&&(tc(t,n|1),it(t,Ae()),!(le&6)&&(Br=Ae()+500,wn()))}break;case 13:Kn(function(){var r=Yt(e,1);if(r!==null){var i=qe();kt(r,e,1,i)}}),Lc(e,1)}};nc=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=qe();kt(t,e,134217728,n)}Lc(e,134217728)}};Ph=function(e){if(e.tag===13){var t=Sn(e),n=Yt(e,t);if(n!==null){var r=qe();kt(n,e,t,r)}Lc(e,t)}};Ah=function(){return oe};Th=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Ha=function(e,t,n){switch(t){case"input":if(Ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Uo(r);if(!i)throw Error(L(90));ih(r),Ba(r,i)}}}break;case"textarea":oh(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};ph=kc;hh=Kn;var p_={usingClientEntryPoint:!1,Events:[rl,hr,Uo,dh,fh,kc]},li={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h_={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ch(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||d_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{jo=kl.inject(h_),Bt=kl}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(t))throw Error(L(200));return c_(e,t,null,n)};ht.createRoot=function(e,t){if(!Oc(e))throw Error(L(299));var n=!1,r="",i=q1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mc(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,zi(e.nodeType===8?e.parentNode:e),new Nc(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Ch(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return Kn(e)};ht.hydrate=function(e,t,n){if(!Yo(t))throw Error(L(200));return Zo(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!Oc(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=q1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=X1(t,null,e,1,n??null,i,!1,l,o),e[Jt]=t.current,zi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Jo(t)};ht.render=function(e,t,n){if(!Yo(t))throw Error(L(200));return Zo(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(L(40));return e._reactRootContainer?(Kn(function(){Zo(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ht.unstable_batchedUpdates=kc;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yo(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Zo(e,t,n,!1,r)};ht.version="18.3.1-next-f1338f8080-20240426";function Q1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q1)}catch(e){console.error(e)}}Q1(),Qp.exports=ht;var m_=Qp.exports,_f=m_;ba.createRoot=_f.createRoot,ba.hydrateRoot=_f.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fn||(fn={}));const Sf="popstate";function g_(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return Ru("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wo(i)}return __(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function C_(){return Math.random().toString(36).substr(2,8)}function yf(e,t){return{usr:e.state,key:e.key,idx:t}}function Ru(e,t,n,r){return n===void 0&&(n=null),qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$r(t):t,{state:n,key:t&&t.key||r||C_()})}function wo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function __(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=fn.Pop,a=null,c=f();c==null&&(c=0,o.replaceState(qi({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){s=fn.Pop;let x=f(),m=x==null?null:x-c;c=x,a&&a({action:s,location:S.location,delta:m})}function p(x,m){s=fn.Push;let C=Ru(S.location,x,m);c=f()+1;let _=yf(C,c),R=S.createHref(C);try{o.pushState(_,"",R)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(R)}l&&a&&a({action:s,location:S.location,delta:1})}function h(x,m){s=fn.Replace;let C=Ru(S.location,x,m);c=f();let _=yf(C,c),R=S.createHref(C);o.replaceState(_,"",R),l&&a&&a({action:s,location:S.location,delta:0})}function g(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,C=typeof x=="string"?x:wo(x);return C=C.replace(/ $/,"%20"),Pe(m,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,m)}let S={get action(){return s},get location(){return e(i,o)},listen(x){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Sf,d),a=x,()=>{i.removeEventListener(Sf,d),a=null}},createHref(x){return t(i,x)},createURL:g,encodeLocation(x){let m=g(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:h,go(x){return o.go(x)}};return S}var xf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xf||(xf={}));function S_(e,t,n){return n===void 0&&(n="/"),y_(e,t,n)}function y_(e,t,n,r){let i=typeof t=="string"?$r(t):t,l=Fr(i.pathname||"/",n);if(l==null)return null;let o=J1(e);x_(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let c=D_(l);s=b_(o[a],c)}return s}function J1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(Pe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=xn([r,a.relativePath]),f=n.concat(a);l.children&&l.children.length>0&&(Pe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),J1(l.children,t,f,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:w_(c,l.index),routesMeta:f})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of Y1(l.path))i(l,o,a)}),t}function Y1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Y1(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function x_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:k_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const v_=/^:[\w-]+$/,R_=3,I_=2,P_=1,A_=10,T_=-2,vf=e=>e==="*";function w_(e,t){let n=e.split("/"),r=n.length;return n.some(vf)&&(r+=T_),t&&(r+=I_),n.filter(i=>!vf(i)).reduce((i,l)=>i+(v_.test(l)?R_:l===""?P_:A_),r)}function k_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function b_(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,f=l==="/"?t:t.slice(l.length)||"/",d=Iu({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},f),p=a.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:xn([l,d.pathname]),pathnameBase:B_(xn([l,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(l=xn([l,d.pathnameBase]))}return o}function Iu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=E_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:p,isOptional:h}=f;if(p==="*"){let S=s[d]||"";o=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const g=s[d];return h&&!g?c[p]=void 0:c[p]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function E_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function D_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const M_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L_=e=>M_.test(e);function N_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?$r(e):e,l;if(n)if(L_(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Bc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=Rf(n.substring(1),"/"):l=Rf(n,t)}else l=t;return{pathname:l,search:F_(r),hash:j_(i)}}function Rf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function js(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function O_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Z1(e,t){let n=O_(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function em(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=$r(e):(i=qi({},e),Pe(!i.pathname||!i.pathname.includes("?"),js("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),js("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),js("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let a=N_(i,s),c=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||f)&&(a.pathname+="/"),a}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),B_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,j_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function z_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tm=["post","put","patch","delete"];new Set(tm);const W_=["get",...tm];new Set(W_);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qi(){return Qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qi.apply(this,arguments)}const es=T.createContext(null),nm=T.createContext(null),kn=T.createContext(null),ts=T.createContext(null),bn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),rm=T.createContext(null);function G_(e,t){let{relative:n}=t===void 0?{}:t;ll()||Pe(!1);let{basename:r,navigator:i}=T.useContext(kn),{hash:l,pathname:o,search:s}=ns(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:xn([r,o])),i.createHref({pathname:a,search:s,hash:l})}function ll(){return T.useContext(ts)!=null}function Kr(){return ll()||Pe(!1),T.useContext(ts).location}function im(e){T.useContext(kn).static||T.useLayoutEffect(e)}function Fc(){let{isDataRoute:e}=T.useContext(bn);return e?tS():U_()}function U_(){ll()||Pe(!1);let e=T.useContext(es),{basename:t,future:n,navigator:r}=T.useContext(kn),{matches:i}=T.useContext(bn),{pathname:l}=Kr(),o=JSON.stringify(Z1(i,n.v7_relativeSplatPath)),s=T.useRef(!1);return im(()=>{s.current=!0}),T.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=em(c,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:xn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,l,e])}function ol(){let{matches:e}=T.useContext(bn),t=e[e.length-1];return t?t.params:{}}function ns(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(kn),{matches:i}=T.useContext(bn),{pathname:l}=Kr(),o=JSON.stringify(Z1(i,r.v7_relativeSplatPath));return T.useMemo(()=>em(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function H_(e,t){return V_(e,t)}function V_(e,t,n,r){ll()||Pe(!1);let{navigator:i}=T.useContext(kn),{matches:l}=T.useContext(bn),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=Kr(),f;if(t){var d;let x=typeof t=="string"?$r(t):t;a==="/"||(d=x.pathname)!=null&&d.startsWith(a)||Pe(!1),f=x}else f=c;let p=f.pathname||"/",h=p;if(a!=="/"){let x=a.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let g=S_(e,{pathname:h}),S=Q_(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:xn([a,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:xn([a,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,n,r);return t&&S?T.createElement(ts.Provider,{value:{location:Qi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:fn.Pop}},S):S}function $_(){let e=eS(),t=z_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const K_=T.createElement($_,null);class X_ extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(bn.Provider,{value:this.props.routeContext},T.createElement(rm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q_(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(es);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(bn.Provider,{value:t},r)}function Q_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||Pe(!1),o=o.slice(0,Math.min(o.length,f+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:p,errors:h}=n,g=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||g){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,p)=>{let h,g=!1,S=null,x=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,S=d.route.errorElement||K_,a&&(c<0&&p===0?(nS("route-fallback"),g=!0,x=null):c===p&&(g=!0,x=d.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,p+1)),C=()=>{let _;return h?_=S:g?_=x:d.route.Component?_=T.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=f,T.createElement(q_,{match:d,routeContext:{outlet:f,matches:m,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?T.createElement(X_,{location:n.location,revalidation:n.revalidation,component:S,error:h,children:C(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):C()},null)}var lm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lm||{}),om=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(om||{});function J_(e){let t=T.useContext(es);return t||Pe(!1),t}function Y_(e){let t=T.useContext(nm);return t||Pe(!1),t}function Z_(e){let t=T.useContext(bn);return t||Pe(!1),t}function sm(e){let t=Z_(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function eS(){var e;let t=T.useContext(rm),n=Y_(),r=sm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function tS(){let{router:e}=J_(lm.UseNavigateStable),t=sm(om.UseNavigateStable),n=T.useRef(!1);return im(()=>{n.current=!0}),T.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Qi({fromRouteId:t},l)))},[e,t])}const If={};function nS(e,t,n){If[e]||(If[e]=!0)}function rS(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function xr(e){Pe(!1)}function iS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fn.Pop,navigator:l,static:o=!1,future:s}=e;ll()&&Pe(!1);let a=t.replace(/^\/*/,"/"),c=T.useMemo(()=>({basename:a,navigator:l,static:o,future:Qi({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=$r(r));let{pathname:f="/",search:d="",hash:p="",state:h=null,key:g="default"}=r,S=T.useMemo(()=>{let x=Fr(f,a);return x==null?null:{location:{pathname:x,search:d,hash:p,state:h,key:g},navigationType:i}},[a,f,d,p,h,g,i]);return S==null?null:T.createElement(kn.Provider,{value:c},T.createElement(ts.Provider,{children:n,value:S}))}function am(e){let{children:t,location:n}=e;return H_(Pu(t),n)}new Promise(()=>{});function Pu(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let l=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Pu(r.props.children,l));return}r.type!==xr&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pu(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ko.apply(this,arguments)}function um(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oS(e,t){return e.button===0&&(!t||t==="_self")&&!lS(e)}const sS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],aS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],uS="6";try{window.__reactRouterVersion=uS}catch{}const cS=T.createContext({isTransitioning:!1}),dS="startTransition",Pf=iC[dS];function fS(e){let{basename:t,children:n,future:r,window:i}=e,l=T.useRef();l.current==null&&(l.current=g_({window:i,v5Compat:!0}));let o=l.current,[s,a]=T.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=T.useCallback(d=>{c&&Pf?Pf(()=>a(d)):a(d)},[a,c]);return T.useLayoutEffect(()=>o.listen(f),[o,f]),T.useEffect(()=>rS(r),[r]),T.createElement(iS,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const pS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mS=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:a,to:c,preventScrollReset:f,viewTransition:d}=t,p=um(t,sS),{basename:h}=T.useContext(kn),g,S=!1;if(typeof c=="string"&&hS.test(c)&&(g=c,pS))try{let _=new URL(window.location.href),R=c.startsWith("//")?new URL(_.protocol+c):new URL(c),A=Fr(R.pathname,h);R.origin===_.origin&&A!=null?c=A+R.search+R.hash:S=!0}catch{}let x=G_(c,{relative:i}),m=_S(c,{replace:o,state:s,target:a,preventScrollReset:f,relative:i,viewTransition:d});function C(_){r&&r(_),_.defaultPrevented||m(_)}return T.createElement("a",ko({},p,{href:g||x,onClick:S||l?r:C,ref:n,target:a}))}),gS=T.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:o=!1,style:s,to:a,viewTransition:c,children:f}=t,d=um(t,aS),p=ns(a,{relative:d.relative}),h=Kr(),g=T.useContext(nm),{navigator:S,basename:x}=T.useContext(kn),m=g!=null&&SS(p)&&c===!0,C=S.encodeLocation?S.encodeLocation(p).pathname:p.pathname,_=h.pathname,R=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(_=_.toLowerCase(),R=R?R.toLowerCase():null,C=C.toLowerCase()),R&&x&&(R=Fr(R,x)||R);const A=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let P=_===C||!o&&_.startsWith(C)&&_.charAt(A)==="/",w=R!=null&&(R===C||!o&&R.startsWith(C)&&R.charAt(C.length)==="/"),N={isActive:P,isPending:w,isTransitioning:m},G=P?r:void 0,I;typeof l=="function"?I=l(N):I=[l,P?"active":null,w?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(N):s;return T.createElement(mS,ko({},d,{"aria-current":G,className:I,ref:n,style:F,to:a,viewTransition:c}),typeof f=="function"?f(N):f)});var Au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Au||(Au={}));var Af;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Af||(Af={}));function CS(e){let t=T.useContext(es);return t||Pe(!1),t}function _S(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:s}=t===void 0?{}:t,a=Fc(),c=Kr(),f=ns(e,{relative:o});return T.useCallback(d=>{if(oS(d,n)){d.preventDefault();let p=r!==void 0?r:wo(c)===wo(f);a(e,{replace:p,state:i,preventScrollReset:l,relative:o,viewTransition:s})}},[c,a,f,r,i,n,e,l,o,s])}function SS(e,t){t===void 0&&(t={});let n=T.useContext(cS);n==null&&Pe(!1);let{basename:r}=CS(Au.useViewTransitionState),i=ns(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=Fr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Fr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Iu(i.pathname,o)!=null||Iu(i.pathname,l)!=null}const yS={},Tf=e=>{let t;const n=new Set,r=(f,d)=>{const p=typeof f=="function"?f(t):f;if(!Object.is(p,t)){const h=t;t=d??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(g=>g(t,h))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(yS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,i,a);return a},xS=e=>e?Tf(e):Tf;var cm={exports:{}},dm={},fm={exports:{}},pm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=T;function vS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var RS=typeof Object.is=="function"?Object.is:vS,IS=jr.useState,PS=jr.useEffect,AS=jr.useLayoutEffect,TS=jr.useDebugValue;function wS(e,t){var n=t(),r=IS({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return AS(function(){i.value=n,i.getSnapshot=t,zs(i)&&l({inst:i})},[e,n,t]),PS(function(){return zs(i)&&l({inst:i}),e(function(){zs(i)&&l({inst:i})})},[e]),TS(n),n}function zs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!RS(e,n)}catch{return!0}}function kS(e,t){return t()}var bS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?kS:wS;pm.useSyncExternalStore=jr.useSyncExternalStore!==void 0?jr.useSyncExternalStore:bS;fm.exports=pm;var ES=fm.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=T,DS=ES;function MS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var LS=typeof Object.is=="function"?Object.is:MS,NS=DS.useSyncExternalStore,OS=rs.useRef,BS=rs.useEffect,FS=rs.useMemo,jS=rs.useDebugValue;dm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var l=OS(null);if(l.current===null){var o={hasValue:!1,value:null};l.current=o}else o=l.current;l=FS(function(){function a(h){if(!c){if(c=!0,f=h,h=r(h),i!==void 0&&o.hasValue){var g=o.value;if(i(g,h))return d=g}return d=h}if(g=d,LS(f,h))return g;var S=r(h);return i!==void 0&&i(g,S)?(f=h,g):(f=h,d=S)}var c=!1,f,d,p=n===void 0?null:n;return[function(){return a(t())},p===null?void 0:function(){return a(p())}]},[t,n,r,i]);var s=NS(e,l[0],l[1]);return BS(function(){o.hasValue=!0,o.value=s},[s]),jS(s),s};cm.exports=dm;var zS=cm.exports;const WS=Bo(zS),hm={},{useDebugValue:GS}=Kt,{useSyncExternalStoreWithSelector:US}=WS;let wf=!1;const HS=e=>e;function VS(e,t=HS,n){(hm?"production":void 0)!=="production"&&n&&!wf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),wf=!0);const r=US(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return GS(r),r}const kf=e=>{(hm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?xS(e):e,n=(r,i)=>VS(t,r,i);return Object.assign(n,t),n},is=e=>e?kf(e):kf;function $S(){const e=localStorage.getItem("stm32-theme");return e==="light"||e==="dark"?e:"dark"}function KS(e){document.documentElement.dataset.theme=e,localStorage.setItem("stm32-theme",e)}const qt=is(e=>({sidebarOpen:!0,activeView:"pin",mode:"learn",theme:$S(),toggleSidebar:()=>e(t=>({sidebarOpen:!t.sidebarOpen})),setActiveView:t=>e({activeView:t}),setMode:t=>e({mode:t}),toggleTheme:()=>e(t=>{const n=t.theme==="dark"?"light":"dark";return KS(n),{theme:n}})})),mm="stm32-learn-progress";function XS(){try{const e=localStorage.getItem(mm);return e?JSON.parse(e):{}}catch{return{}}}function Ws(e){localStorage.setItem(mm,JSON.stringify(e))}const sl=is((e,t)=>({modules:XS(),completeModule:n=>e(r=>{const i={...r.modules,[n]:{...r.modules[n]||{quizScore:null,codeSaved:!1},completed:!0}};return Ws(i),{modules:i}}),setQuizScore:(n,r)=>e(i=>{const l={...i.modules,[n]:{...i.modules[n]||{completed:!1,codeSaved:!1},quizScore:r}};return Ws(l),{modules:l}}),setCodeSaved:n=>e(r=>{const i={...r.modules,[n]:{...r.modules[n]||{completed:!1,quizScore:null},codeSaved:!0}};return Ws(i),{modules:i}}),getOverallProgress:()=>{const n=t().modules,r=22,i=Object.values(n).filter(l=>l.completed).length;return Math.round(i/r*100)}})),vn=[{id:"01-intro",title:"平台概述",level:1},{id:"02-gpio",title:"GPIO 引脚控制",level:1},{id:"03-rcc",title:"时钟系统 RCC",level:1},{id:"04-nvic",title:"中断 NVIC",level:1},{id:"05-systick",title:"SysTick 定时器",level:1},{id:"06-tim",title:"通用定时器 TIM",level:2},{id:"07-pwm",title:"PWM 输出",level:2},{id:"08-adc",title:"ADC 模数转换",level:2},{id:"09-uart",title:"USART 串口",level:2},{id:"10-dac",title:"DAC 数模转换",level:2},{id:"11-spi",title:"SPI 总线",level:3},{id:"12-i2c",title:"I2C 总线",level:3},{id:"13-dma",title:"DMA 直接存储器访问",level:3},{id:"14-can",title:"CAN 总线",level:3},{id:"15-adv-tim",title:"高级定时器",level:4},{id:"16-rtc",title:"RTC 实时时钟",level:4},{id:"17-wdg",title:"看门狗",level:4},{id:"18-pwr",title:"低功耗模式",level:4},{id:"19-freertos",title:"FreeRTOS",level:5},{id:"20-fs",title:"文件系统 FatFS",level:5},{id:"21-debug",title:"调试技术",level:5},{id:"22-project",title:"综合项目",level:5}],ls={1:{level:1,label:"入门基础",color:"var(--accent-green)"},2:{level:2,label:"核心外设",color:"var(--accent-blue)"},3:{level:3,label:"通信接口",color:"var(--accent-amber)"},4:{level:4,label:"进阶专题",color:"var(--accent-pink)"},5:{level:5,label:"系统整合",color:"var(--accent-purple)"}};function qS(e){var n;if(!e)return"var(--accent-green)";const t=vn.find(r=>r.id===e);if(!t){const r=parseInt(e.split("-")[0]);return r<=5?"var(--accent-green)":r<=9?"var(--accent-blue)":r<=14?"var(--accent-amber)":r<=18?"var(--accent-pink)":"var(--accent-purple)"}return((n=ls[t.level])==null?void 0:n.color)??"var(--accent-green)"}const zr=vn.length,QS="_sidebar_o2o15_1",JS="_collapsed_o2o15_14",YS="_toggleWrap_o2o15_22",ZS="_toggleGroup_o2o15_26",ey="_toggleBtn_o2o15_36",ty="_toggleBtnActive_o2o15_56",ny="_nav_o2o15_63",ry="_levelGroup_o2o15_68",iy="_levelHeader_o2o15_72",ly="_levelDot_o2o15_79",oy="_levelLabel_o2o15_86",sy="_levelCount_o2o15_95",ay="_moduleItem_o2o15_102",uy="_moduleItemInactive_o2o15_122 _moduleItem_o2o15_102",cy="_moduleItemActive_o2o15_127 _moduleItem_o2o15_102",dy="_moduleDot_o2o15_135",fy="_moduleDotComplete_o2o15_143 _moduleDot_o2o15_135",py="_moduleDotIncomplete_o2o15_148 _moduleDot_o2o15_135",hy="_moduleLabel_o2o15_153",my="_quizBadge_o2o15_160",Re={sidebar:QS,collapsed:JS,toggleWrap:YS,toggleGroup:ZS,toggleBtn:ey,toggleBtnActive:ty,nav:ny,levelGroup:ry,levelHeader:iy,levelDot:ly,levelLabel:oy,levelCount:sy,moduleItem:ay,moduleItemInactive:uy,moduleItemActive:cy,moduleDot:dy,moduleDotComplete:fy,moduleDotIncomplete:py,moduleLabel:hy,quizBadge:my};function gy(){const e=qt(l=>l.sidebarOpen),t=qt(l=>l.mode),n=qt(l=>l.setMode),r=sl(l=>l.modules);let i=0;return u.jsxs("aside",{className:`${Re.sidebar} ${e?"":Re.collapsed}`,children:[u.jsx("div",{className:Re.toggleWrap,children:u.jsxs("div",{className:Re.toggleGroup,children:[u.jsx("button",{onClick:()=>n("learn"),className:t==="learn"?Re.toggleBtnActive:Re.toggleBtn,children:"学习"}),u.jsx("button",{onClick:()=>n("practice"),className:t==="practice"?Re.toggleBtnActive:Re.toggleBtn,children:"练习"})]})}),u.jsx("nav",{className:Re.nav,children:vn.map(l=>{var f,d,p,h;const o=l.level!==i;i=l.level;const s=(f=r[l.id])==null?void 0:f.completed,a=((d=r[l.id])==null?void 0:d.quizScore)!==null&&((p=r[l.id])==null?void 0:p.quizScore)!==void 0,c=ls[l.level];return u.jsxs("div",{className:Re.levelGroup,children:[o&&c&&u.jsxs("div",{className:Re.levelHeader,children:[u.jsx("span",{className:Re.levelDot,style:{background:c.color}}),u.jsx("span",{className:Re.levelLabel,style:{color:c.color},children:c.label}),u.jsxs("span",{className:Re.levelCount,children:[vn.filter(g=>g.level===l.level).filter(g=>{var S;return(S=r[g.id])==null?void 0:S.completed}).length,"/",vn.filter(g=>g.level===l.level).length]})]}),u.jsxs(gS,{to:`/${t}/${l.id}`,className:({isActive:g})=>`${Re.moduleItem} ${g?Re.moduleItemActive:Re.moduleItemInactive}`,children:[u.jsx("span",{className:`${Re.moduleDot} ${s?Re.moduleDotComplete:Re.moduleDotIncomplete}`,style:{background:s?c==null?void 0:c.color:void 0,boxShadow:s?`0 0 6px ${c==null?void 0:c.color}44`:void 0}}),u.jsx("span",{className:Re.moduleLabel,children:l.title}),a&&u.jsxs("span",{className:Re.quizBadge,style:{color:c==null?void 0:c.color},children:[(h=r[l.id])==null?void 0:h.quizScore,"%"]})]})]},l.id)})})]})}const Cy=`# STM32 平台概述

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
`,_y=`# GPIO 通用输入输出

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
`,Sy=`# 时钟系统 RCC

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
`,yy=`# 中断系统 NVIC

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
`,xy=`# SysTick 系统定时器

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
`,vy=`# 定时器 TIM

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
`,Ry=`# PWM 输出

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
`,Iy=`# ADC 模数转换

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
`,Py=`# USART 串口通信

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
`,Ay=`# DAC 数模转换

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
`,Ty=`# SPI 串行外设接口

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
`,wy=`# I2C 集成电路间总线

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
`,ky=`# DMA 直接存储器访问

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
`,by=`# CAN 控制器局域网总线

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
`,Ey=`# 高级定时器 TIM1/TIM8

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
`,Dy=`# RTC 实时时钟

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
`,My=`# 看门狗 (Watchdog)

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
`,Ly=`# 低功耗 (PWR)

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
`,Ny=`# FreeRTOS 任务管理

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
`,Oy=`# FatFS 文件系统

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
`,By=`# STM32 调试技术

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
`,Fy=`# 综合项目

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
`;function jy(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const zy=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Wy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Gy={};function bf(e,t){return(Gy.jsx?Wy:zy).test(e)}const Uy=/[ \t\n\f\r]/g;function Hy(e){return typeof e=="object"?e.type==="text"?Ef(e.value):!1:Ef(e)}function Ef(e){return e.replace(Uy,"")===""}class al{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}al.prototype.normal={};al.prototype.property={};al.prototype.space=void 0;function gm(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new al(n,r,t)}function Tu(e){return e.toLowerCase()}class lt{constructor(t,n){this.attribute=n,this.property=t}}lt.prototype.attribute="";lt.prototype.booleanish=!1;lt.prototype.boolean=!1;lt.prototype.commaOrSpaceSeparated=!1;lt.prototype.commaSeparated=!1;lt.prototype.defined=!1;lt.prototype.mustUseProperty=!1;lt.prototype.number=!1;lt.prototype.overloadedBoolean=!1;lt.prototype.property="";lt.prototype.spaceSeparated=!1;lt.prototype.space=void 0;let Vy=0;const Y=Jn(),we=Jn(),wu=Jn(),B=Jn(),ce=Jn(),kr=Jn(),st=Jn();function Jn(){return 2**++Vy}const ku=Object.freeze(Object.defineProperty({__proto__:null,boolean:Y,booleanish:we,commaOrSpaceSeparated:st,commaSeparated:kr,number:B,overloadedBoolean:wu,spaceSeparated:ce},Symbol.toStringTag,{value:"Module"})),Gs=Object.keys(ku);class jc extends lt{constructor(t,n,r,i){let l=-1;if(super(t,n),Df(this,"space",i),typeof r=="number")for(;++l<Gs.length;){const o=Gs[l];Df(this,Gs[l],(r&ku[o])===ku[o])}}}jc.prototype.defined=!0;function Df(e,t,n){n&&(e[t]=n)}function Xr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const l=new jc(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[Tu(r)]=r,n[Tu(l.attribute)]=r}return new al(t,n,e.space)}const Cm=Xr({properties:{ariaActiveDescendant:null,ariaAtomic:we,ariaAutoComplete:null,ariaBusy:we,ariaChecked:we,ariaColCount:B,ariaColIndex:B,ariaColSpan:B,ariaControls:ce,ariaCurrent:null,ariaDescribedBy:ce,ariaDetails:null,ariaDisabled:we,ariaDropEffect:ce,ariaErrorMessage:null,ariaExpanded:we,ariaFlowTo:ce,ariaGrabbed:we,ariaHasPopup:null,ariaHidden:we,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ce,ariaLevel:B,ariaLive:null,ariaModal:we,ariaMultiLine:we,ariaMultiSelectable:we,ariaOrientation:null,ariaOwns:ce,ariaPlaceholder:null,ariaPosInSet:B,ariaPressed:we,ariaReadOnly:we,ariaRelevant:null,ariaRequired:we,ariaRoleDescription:ce,ariaRowCount:B,ariaRowIndex:B,ariaRowSpan:B,ariaSelected:we,ariaSetSize:B,ariaSort:null,ariaValueMax:B,ariaValueMin:B,ariaValueNow:B,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function _m(e,t){return t in e?e[t]:t}function Sm(e,t){return _m(e,t.toLowerCase())}const $y=Xr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:kr,acceptCharset:ce,accessKey:ce,action:null,allow:null,allowFullScreen:Y,allowPaymentRequest:Y,allowUserMedia:Y,alt:null,as:null,async:Y,autoCapitalize:null,autoComplete:ce,autoFocus:Y,autoPlay:Y,blocking:ce,capture:null,charSet:null,checked:Y,cite:null,className:ce,cols:B,colSpan:null,content:null,contentEditable:we,controls:Y,controlsList:ce,coords:B|kr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Y,defer:Y,dir:null,dirName:null,disabled:Y,download:wu,draggable:we,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Y,formTarget:null,headers:ce,height:B,hidden:wu,high:B,href:null,hrefLang:null,htmlFor:ce,httpEquiv:ce,id:null,imageSizes:null,imageSrcSet:null,inert:Y,inputMode:null,integrity:null,is:null,isMap:Y,itemId:null,itemProp:ce,itemRef:ce,itemScope:Y,itemType:ce,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Y,low:B,manifest:null,max:null,maxLength:B,media:null,method:null,min:null,minLength:B,multiple:Y,muted:Y,name:null,nonce:null,noModule:Y,noValidate:Y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Y,optimum:B,pattern:null,ping:ce,placeholder:null,playsInline:Y,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Y,referrerPolicy:null,rel:ce,required:Y,reversed:Y,rows:B,rowSpan:B,sandbox:ce,scope:null,scoped:Y,seamless:Y,selected:Y,shadowRootClonable:Y,shadowRootDelegatesFocus:Y,shadowRootMode:null,shape:null,size:B,sizes:null,slot:null,span:B,spellCheck:we,src:null,srcDoc:null,srcLang:null,srcSet:null,start:B,step:null,style:null,tabIndex:B,target:null,title:null,translate:null,type:null,typeMustMatch:Y,useMap:null,value:we,width:B,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ce,axis:null,background:null,bgColor:null,border:B,borderColor:null,bottomMargin:B,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Y,declare:Y,event:null,face:null,frame:null,frameBorder:null,hSpace:B,leftMargin:B,link:null,longDesc:null,lowSrc:null,marginHeight:B,marginWidth:B,noResize:Y,noHref:Y,noShade:Y,noWrap:Y,object:null,profile:null,prompt:null,rev:null,rightMargin:B,rules:null,scheme:null,scrolling:we,standby:null,summary:null,text:null,topMargin:B,valueType:null,version:null,vAlign:null,vLink:null,vSpace:B,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Y,disableRemotePlayback:Y,prefix:null,property:null,results:B,security:null,unselectable:null},space:"html",transform:Sm}),Ky=Xr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:st,accentHeight:B,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:B,amplitude:B,arabicForm:null,ascent:B,attributeName:null,attributeType:null,azimuth:B,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:B,by:null,calcMode:null,capHeight:B,className:ce,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:B,diffuseConstant:B,direction:null,display:null,dur:null,divisor:B,dominantBaseline:null,download:Y,dx:null,dy:null,edgeMode:null,editable:null,elevation:B,enableBackground:null,end:null,event:null,exponent:B,externalResourcesRequired:null,fill:null,fillOpacity:B,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:kr,g2:kr,glyphName:kr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:B,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:B,horizOriginX:B,horizOriginY:B,id:null,ideographic:B,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:B,k:B,k1:B,k2:B,k3:B,k4:B,kernelMatrix:st,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:B,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:B,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:B,overlineThickness:B,paintOrder:null,panose1:null,path:null,pathLength:B,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ce,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:B,pointsAtY:B,pointsAtZ:B,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:st,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:st,rev:st,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:st,requiredFeatures:st,requiredFonts:st,requiredFormats:st,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:B,specularExponent:B,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:B,strikethroughThickness:B,string:null,stroke:null,strokeDashArray:st,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:B,strokeOpacity:B,strokeWidth:null,style:null,surfaceScale:B,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:st,tabIndex:B,tableValues:null,target:null,targetX:B,targetY:B,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:st,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:B,underlineThickness:B,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:B,values:null,vAlphabetic:B,vMathematical:B,vectorEffect:null,vHanging:B,vIdeographic:B,version:null,vertAdvY:B,vertOriginX:B,vertOriginY:B,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:B,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:_m}),ym=Xr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),xm=Xr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Sm}),vm=Xr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Xy={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},qy=/[A-Z]/g,Mf=/-[a-z]/g,Qy=/^data[-\w.:]+$/i;function Jy(e,t){const n=Tu(t);let r=t,i=lt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Qy.test(t)){if(t.charAt(4)==="-"){const l=t.slice(5).replace(Mf,Zy);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=t.slice(4);if(!Mf.test(l)){let o=l.replace(qy,Yy);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=jc}return new i(r,t)}function Yy(e){return"-"+e.toLowerCase()}function Zy(e){return e.charAt(1).toUpperCase()}const ex=gm([Cm,$y,ym,xm,vm],"html"),zc=gm([Cm,Ky,ym,xm,vm],"svg");function tx(e){return e.join(" ").trim()}var Wc={},Lf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,nx=/\n/g,rx=/^\s*/,ix=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,lx=/^:\s*/,ox=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,sx=/^[;\s]*/,ax=/^\s+|\s+$/g,ux=`
`,Nf="/",Of="*",Bn="",cx="comment",dx="declaration";function fx(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var S=g.match(nx);S&&(n+=S.length);var x=g.lastIndexOf(ux);r=~x?g.length-x:r+g.length}function l(){var g={line:n,column:r};return function(S){return S.position=new o(g),c(),S}}function o(g){this.start=g,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(g){var S=new Error(t.source+":"+n+":"+r+": "+g);if(S.reason=g,S.filename=t.source,S.line=n,S.column=r,S.source=e,!t.silent)throw S}function a(g){var S=g.exec(e);if(S){var x=S[0];return i(x),e=e.slice(x.length),S}}function c(){a(rx)}function f(g){var S;for(g=g||[];S=d();)S!==!1&&g.push(S);return g}function d(){var g=l();if(!(Nf!=e.charAt(0)||Of!=e.charAt(1))){for(var S=2;Bn!=e.charAt(S)&&(Of!=e.charAt(S)||Nf!=e.charAt(S+1));)++S;if(S+=2,Bn===e.charAt(S-1))return s("End of comment missing");var x=e.slice(2,S-2);return r+=2,i(x),e=e.slice(S),r+=2,g({type:cx,comment:x})}}function p(){var g=l(),S=a(ix);if(S){if(d(),!a(lx))return s("property missing ':'");var x=a(ox),m=g({type:dx,property:Bf(S[0].replace(Lf,Bn)),value:x?Bf(x[0].replace(Lf,Bn)):Bn});return a(sx),m}}function h(){var g=[];f(g);for(var S;S=p();)S!==!1&&(g.push(S),f(g));return g}return c(),h()}function Bf(e){return e?e.replace(ax,Bn):Bn}var px=fx,hx=no&&no.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wc,"__esModule",{value:!0});Wc.default=gx;const mx=hx(px);function gx(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,mx.default)(e),i=typeof t=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:o,value:s}=l;i?t(o,s,l):s&&(n=n||{},n[o]=s)}),n}var os={};Object.defineProperty(os,"__esModule",{value:!0});os.camelCase=void 0;var Cx=/^--[a-zA-Z0-9_-]+$/,_x=/-([a-z])/g,Sx=/^[^-]+$/,yx=/^-(webkit|moz|ms|o|khtml)-/,xx=/^-(ms)-/,vx=function(e){return!e||Sx.test(e)||Cx.test(e)},Rx=function(e,t){return t.toUpperCase()},Ff=function(e,t){return"".concat(t,"-")},Ix=function(e,t){return t===void 0&&(t={}),vx(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(xx,Ff):e=e.replace(yx,Ff),e.replace(_x,Rx))};os.camelCase=Ix;var Px=no&&no.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Ax=Px(Wc),Tx=os;function bu(e,t){var n={};return!e||typeof e!="string"||(0,Ax.default)(e,function(r,i){r&&i&&(n[(0,Tx.camelCase)(r,t)]=i)}),n}bu.default=bu;var wx=bu;const kx=Bo(wx),Rm=Im("end"),Gc=Im("start");function Im(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function bx(e){const t=Gc(e),n=Rm(e);if(t&&n)return{start:t,end:n}}function wi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?jf(e.position):"start"in e||"end"in e?jf(e):"line"in e||"column"in e?Eu(e):""}function Eu(e){return zf(e&&e.line)+":"+zf(e&&e.column)}function jf(e){return Eu(e&&e.start)+"-"+Eu(e&&e.end)}function zf(e){return e&&typeof e=="number"?e:1}class $e extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",l={},o=!1;if(n&&("line"in n&&"column"in n?l={place:n}:"start"in n&&"end"in n?l={place:n}:"type"in n?l={ancestors:[n],place:n.position}:l={...n}),typeof t=="string"?i=t:!l.cause&&t&&(o=!0,i=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?l.ruleId=r:(l.source=r.slice(0,a),l.ruleId=r.slice(a+1))}if(!l.place&&l.ancestors&&l.ancestors){const a=l.ancestors[l.ancestors.length-1];a&&(l.place=a.position)}const s=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=wi(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}$e.prototype.file="";$e.prototype.name="";$e.prototype.reason="";$e.prototype.message="";$e.prototype.stack="";$e.prototype.column=void 0;$e.prototype.line=void 0;$e.prototype.ancestors=void 0;$e.prototype.cause=void 0;$e.prototype.fatal=void 0;$e.prototype.place=void 0;$e.prototype.ruleId=void 0;$e.prototype.source=void 0;const Uc={}.hasOwnProperty,Ex=new Map,Dx=/[A-Z]/g,Mx=new Set(["table","tbody","thead","tfoot","tr"]),Lx=new Set(["td","th"]),Pm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Nx(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Ux(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Gx(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?zc:ex,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},l=Am(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function Am(e,t,n){if(t.type==="element")return Ox(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Bx(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return jx(e,t,n);if(t.type==="mdxjsEsm")return Fx(e,t);if(t.type==="root")return zx(e,t,n);if(t.type==="text")return Wx(e,t)}function Ox(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=zc,e.schema=i),e.ancestors.push(t);const l=wm(e,t.tagName,!1),o=Hx(e,t);let s=Vc(e,t);return Mx.has(t.tagName)&&(s=s.filter(function(a){return typeof a=="string"?!Hy(a):!0})),Tm(e,o,l,t),Hc(o,s),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function Bx(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ji(e,t.position)}function Fx(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ji(e,t.position)}function jx(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=zc,e.schema=i),e.ancestors.push(t);const l=t.name===null?e.Fragment:wm(e,t.name,!0),o=Vx(e,t),s=Vc(e,t);return Tm(e,o,l,t),Hc(o,s),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function zx(e,t,n){const r={};return Hc(r,Vc(e,t)),e.create(t,e.Fragment,r,n)}function Wx(e,t){return t.value}function Tm(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Hc(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Gx(e,t,n){return r;function r(i,l,o,s){const c=Array.isArray(o.children)?n:t;return s?c(l,o,s):c(l,o)}}function Ux(e,t){return n;function n(r,i,l,o){const s=Array.isArray(l.children),a=Gc(r);return t(i,l,o,s,{columnNumber:a?a.column-1:void 0,fileName:e,lineNumber:a?a.line:void 0},void 0)}}function Hx(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Uc.call(t.properties,i)){const l=$x(e,i,t.properties[i]);if(l){const[o,s]=l;e.tableCellAlignToStyle&&o==="align"&&typeof s=="string"&&Lx.has(t.tagName)?r=s:n[o]=s}}if(r){const l=n.style||(n.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Vx(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const o=l.expression;o.type;const s=o.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Ji(e,t.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,l=e.evaluater.evaluateExpression(s.expression)}else Ji(e,t.position);else l=r.value===null?!0:r.value;n[i]=l}return n}function Vc(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Ex;for(;++r<t.children.length;){const l=t.children[r];let o;if(e.passKeys){const a=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(a){const c=i.get(a)||0;o=a+"-"+c,i.set(a,c+1)}}const s=Am(e,l,o);s!==void 0&&n.push(s)}return n}function $x(e,t,n){const r=Jy(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?jy(n):tx(n)),r.property==="style"){let i=typeof n=="object"?n:Kx(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Xx(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Xy[r.property]||r.property:r.attribute,n]}}function Kx(e,t){try{return kx(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new $e("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Pm+"#cannot-parse-style-attribute",i}}function wm(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let l=-1,o;for(;++l<i.length;){const s=bf(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};o=o?{type:"MemberExpression",object:o,property:s,computed:!!(l&&s.type==="Literal"),optional:!1}:s}r=o}else r=bf(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Uc.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ji(e)}function Ji(e,t){const n=new $e("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Pm+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Xx(e){const t={};let n;for(n in e)Uc.call(e,n)&&(t[qx(n)]=e[n]);return t}function qx(e){let t=e.replace(Dx,Qx);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Qx(e){return"-"+e.toLowerCase()}const Us={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Jx={};function $c(e,t){const n=Jx,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return km(e,r,i)}function km(e,t,n){if(Yx(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Wf(e.children,t,n)}return Array.isArray(e)?Wf(e,t,n):""}function Wf(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=km(e[i],t,n);return r.join("")}function Yx(e){return!!(e&&typeof e=="object")}const Gf=document.createElement("i");function Kc(e){const t="&"+e+";";Gf.innerHTML=t;const n=Gf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function ft(e,t,n,r){const i=e.length;let l=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);l<r.length;)o=r.slice(l,l+1e4),o.unshift(t,0),e.splice(...o),l+=1e4,t+=1e4}function _t(e,t){return e.length>0?(ft(e,e.length,0,t),e):t}const Uf={}.hasOwnProperty;function bm(e){const t={};let n=-1;for(;++n<e.length;)Zx(t,e[n]);return t}function Zx(e,t){let n;for(n in t){const i=(Uf.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n];let o;if(l)for(o in l){Uf.call(i,o)||(i[o]=[]);const s=l[o];ev(i[o],Array.isArray(s)?s:s?[s]:[])}}}function ev(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ft(e,0,0,r)}function Em(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function bt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Xe=En(/[A-Za-z]/),He=En(/[\dA-Za-z]/),tv=En(/[#-'*+\--9=?A-Z^-~]/);function bo(e){return e!==null&&(e<32||e===127)}const Du=En(/\d/),nv=En(/[\dA-Fa-f]/),rv=En(/[!-/:-@[-`{-~]/);function X(e){return e!==null&&e<-2}function ue(e){return e!==null&&(e<0||e===32)}function ee(e){return e===-2||e===-1||e===32}const ss=En(new RegExp("\\p{P}|\\p{S}","u")),Xn=En(/\s/);function En(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function qr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const l=e.charCodeAt(n);let o="";if(l===37&&He(e.charCodeAt(n+1))&&He(e.charCodeAt(n+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const s=e.charCodeAt(n+1);l<56320&&s>56319&&s<57344?(o=String.fromCharCode(l,s),i=1):o="�"}else o=String.fromCharCode(l);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ie(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(a){return ee(a)?(e.enter(n),s(a)):t(a)}function s(a){return ee(a)&&l++<i?(e.consume(a),s):(e.exit(n),t(a))}}const iv={tokenize:lv};function lv(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ie(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),l(s)}function l(s){const a=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=a),n=a,o(s)}function o(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return X(s)?(e.consume(s),e.exit("chunkText"),l):(e.consume(s),o)}}const ov={tokenize:sv},Hf={tokenize:av};function sv(e){const t=this,n=[];let r=0,i,l,o;return s;function s(_){if(r<n.length){const R=n[r];return t.containerState=R[1],e.attempt(R[0].continuation,a,c)(_)}return c(_)}function a(_){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&C();const R=t.events.length;let A=R,P;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){P=t.events[A][1].end;break}m(r);let w=R;for(;w<t.events.length;)t.events[w][1].end={...P},w++;return ft(t.events,A+1,0,t.events.slice(R)),t.events.length=w,c(_)}return s(_)}function c(_){if(r===n.length){if(!i)return p(_);if(i.currentConstruct&&i.currentConstruct.concrete)return g(_);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Hf,f,d)(_)}function f(_){return i&&C(),m(r),p(_)}function d(_){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,g(_)}function p(_){return t.containerState={},e.attempt(Hf,h,g)(_)}function h(_){return r++,n.push([t.currentConstruct,t.containerState]),p(_)}function g(_){if(_===null){i&&C(),m(0),e.consume(_);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),S(_)}function S(_){if(_===null){x(e.exit("chunkFlow"),!0),m(0),e.consume(_);return}return X(_)?(e.consume(_),x(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(_),S)}function x(_,R){const A=t.sliceStream(_);if(R&&A.push(null),_.previous=l,l&&(l.next=_),l=_,i.defineSkip(_.start),i.write(A),t.parser.lazy[_.start.line]){let P=i.events.length;for(;P--;)if(i.events[P][1].start.offset<o&&(!i.events[P][1].end||i.events[P][1].end.offset>o))return;const w=t.events.length;let N=w,G,I;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(G){I=t.events[N][1].end;break}G=!0}for(m(r),P=w;P<t.events.length;)t.events[P][1].end={...I},P++;ft(t.events,N+1,0,t.events.slice(w)),t.events.length=P}}function m(_){let R=n.length;for(;R-- >_;){const A=n[R];t.containerState=A[1],A[0].exit.call(t,e)}n.length=_}function C(){i.write([null]),l=void 0,i=void 0,t.containerState._closeFlow=void 0}}function av(e,t,n){return ie(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Wr(e){if(e===null||ue(e)||Xn(e))return 1;if(ss(e))return 2}function as(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const Mu={name:"attention",resolveAll:uv,tokenize:cv};function uv(e,t){let n=-1,r,i,l,o,s,a,c,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d={...e[r][1].end},p={...e[n][1].start};Vf(d,-a),Vf(p,a),o={type:a>1?"strongSequence":"emphasisSequence",start:d,end:{...e[r][1].end}},s={type:a>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},l={type:a>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:a>1?"strong":"emphasis",start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=_t(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=_t(c,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",l,t]]),c=_t(c,as(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=_t(c,[["exit",l,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,c=_t(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,ft(e,r-1,n-r+3,c),n=r+c.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function cv(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Wr(r);let l;return o;function o(a){return l=a,e.enter("attentionSequence"),s(a)}function s(a){if(a===l)return e.consume(a),s;const c=e.exit("attentionSequence"),f=Wr(a),d=!f||f===2&&i||n.includes(a),p=!i||i===2&&f||n.includes(r);return c._open=!!(l===42?d:d&&(i||!p)),c._close=!!(l===42?p:p&&(f||!d)),t(a)}}function Vf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const dv={name:"autolink",tokenize:fv};function fv(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(h){return Xe(h)?(e.consume(h),o):h===64?n(h):c(h)}function o(h){return h===43||h===45||h===46||He(h)?(r=1,s(h)):c(h)}function s(h){return h===58?(e.consume(h),r=0,a):(h===43||h===45||h===46||He(h))&&r++<32?(e.consume(h),s):(r=0,c(h))}function a(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||bo(h)?n(h):(e.consume(h),a)}function c(h){return h===64?(e.consume(h),f):tv(h)?(e.consume(h),c):n(h)}function f(h){return He(h)?d(h):n(h)}function d(h){return h===46?(e.consume(h),r=0,f):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):p(h)}function p(h){if((h===45||He(h))&&r++<63){const g=h===45?p:d;return e.consume(h),g}return n(h)}}const ul={partial:!0,tokenize:pv};function pv(e,t,n){return r;function r(l){return ee(l)?ie(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||X(l)?t(l):n(l)}}const Dm={continuation:{tokenize:mv},exit:gv,name:"blockQuote",tokenize:hv};function hv(e,t,n){const r=this;return i;function i(o){if(o===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return n(o)}function l(o){return ee(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function mv(e,t,n){const r=this;return i;function i(o){return ee(o)?ie(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(Dm,t,n)(o)}}function gv(e){e.exit("blockQuote")}const Mm={name:"characterEscape",tokenize:Cv};function Cv(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return rv(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const Lm={name:"characterReference",tokenize:_v};function _v(e,t,n){const r=this;let i=0,l,o;return s;function s(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),a}function a(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),l=31,o=He,f(d))}function c(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=nv,f):(e.enter("characterReferenceValue"),l=7,o=Du,f(d))}function f(d){if(d===59&&i){const p=e.exit("characterReferenceValue");return o===He&&!Kc(r.sliceSerialize(p))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(d)&&i++<l?(e.consume(d),f):n(d)}}const $f={partial:!0,tokenize:yv},Kf={concrete:!0,name:"codeFenced",tokenize:Sv};function Sv(e,t,n){const r=this,i={partial:!0,tokenize:A};let l=0,o=0,s;return a;function a(P){return c(P)}function c(P){const w=r.events[r.events.length-1];return l=w&&w[1].type==="linePrefix"?w[2].sliceSerialize(w[1],!0).length:0,s=P,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(P)}function f(P){return P===s?(o++,e.consume(P),f):o<3?n(P):(e.exit("codeFencedFenceSequence"),ee(P)?ie(e,d,"whitespace")(P):d(P))}function d(P){return P===null||X(P)?(e.exit("codeFencedFence"),r.interrupt?t(P):e.check($f,S,R)(P)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(P))}function p(P){return P===null||X(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(P)):ee(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ie(e,h,"whitespace")(P)):P===96&&P===s?n(P):(e.consume(P),p)}function h(P){return P===null||X(P)?d(P):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(P))}function g(P){return P===null||X(P)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(P)):P===96&&P===s?n(P):(e.consume(P),g)}function S(P){return e.attempt(i,R,x)(P)}function x(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),m}function m(P){return l>0&&ee(P)?ie(e,C,"linePrefix",l+1)(P):C(P)}function C(P){return P===null||X(P)?e.check($f,S,R)(P):(e.enter("codeFlowValue"),_(P))}function _(P){return P===null||X(P)?(e.exit("codeFlowValue"),C(P)):(e.consume(P),_)}function R(P){return e.exit("codeFenced"),t(P)}function A(P,w,N){let G=0;return I;function I(z){return P.enter("lineEnding"),P.consume(z),P.exit("lineEnding"),F}function F(z){return P.enter("codeFencedFence"),ee(z)?ie(P,U,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(z):U(z)}function U(z){return z===s?(P.enter("codeFencedFenceSequence"),Z(z)):N(z)}function Z(z){return z===s?(G++,P.consume(z),Z):G>=o?(P.exit("codeFencedFenceSequence"),ee(z)?ie(P,ne,"whitespace")(z):ne(z)):N(z)}function ne(z){return z===null||X(z)?(P.exit("codeFencedFence"),w(z)):N(z)}}}function yv(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const Hs={name:"codeIndented",tokenize:vv},xv={partial:!0,tokenize:Rv};function vv(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),ie(e,l,"linePrefix",5)(c)}function l(c){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(c):n(c)}function o(c){return c===null?a(c):X(c)?e.attempt(xv,o,a)(c):(e.enter("codeFlowValue"),s(c))}function s(c){return c===null||X(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),s)}function a(c){return e.exit("codeIndented"),t(c)}}function Rv(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):X(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):ie(e,l,"linePrefix",5)(o)}function l(o){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(o):X(o)?i(o):n(o)}}const Iv={name:"codeText",previous:Av,resolve:Pv,tokenize:Tv};function Pv(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Av(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Tv(e,t,n){let r=0,i,l;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),s(d)}function s(d){return d===96?(e.consume(d),r++,s):(e.exit("codeTextSequence"),a(d))}function a(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),a):d===96?(l=e.enter("codeTextSequence"),i=0,f(d)):X(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),a):(e.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||X(d)?(e.exit("codeTextData"),a(d)):(e.consume(d),c)}function f(d){return d===96?(e.consume(d),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(l.type="codeTextData",c(d))}}class wv{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&oi(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),oi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),oi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);oi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);oi(this.left,n.reverse())}}}function oi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Nm(e){const t={};let n=-1,r,i,l,o,s,a,c;const f=new wv(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,kv(f,n)),n=t[n],c=!0);else if(r[1]._container){for(l=n,i=void 0;l--;)if(o=f.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},s=f.slice(i,n),s.unshift(r),f.splice(i,n-i+1,s))}}return ft(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!c}function kv(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const l=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const s=o.events,a=[],c={};let f,d,p=-1,h=n,g=0,S=0;const x=[S];for(;h;){for(;e.get(++i)[1]!==h;);l.push(i),h._tokenizer||(f=r.sliceStream(h),h.next||f.push(null),d&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=n;++p<s.length;)s[p][0]==="exit"&&s[p-1][0]==="enter"&&s[p][1].type===s[p-1][1].type&&s[p][1].start.line!==s[p][1].end.line&&(S=p+1,x.push(S),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):x.pop(),p=x.length;p--;){const m=s.slice(x[p],x[p+1]),C=l.pop();a.push([C,C+m.length-1]),e.splice(C,2,m)}for(a.reverse(),p=-1;++p<a.length;)c[g+a[p][0]]=g+a[p][1],g+=a[p][1]-a[p][0]-1;return c}const bv={resolve:Dv,tokenize:Mv},Ev={partial:!0,tokenize:Lv};function Dv(e){return Nm(e),e}function Mv(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?l(s):X(s)?e.check(Ev,o,l)(s):(e.consume(s),i)}function l(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function o(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Lv(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ie(e,l,"linePrefix")}function l(o){if(o===null||X(o))return n(o);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Om(e,t,n,r,i,l,o,s,a){const c=a||Number.POSITIVE_INFINITY;let f=0;return d;function d(m){return m===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(m),e.exit(l),p):m===null||m===32||m===41||bo(m)?n(m):(e.enter(r),e.enter(o),e.enter(s),e.enter("chunkString",{contentType:"string"}),S(m))}function p(m){return m===62?(e.enter(l),e.consume(m),e.exit(l),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===62?(e.exit("chunkString"),e.exit(s),p(m)):m===null||m===60||X(m)?n(m):(e.consume(m),m===92?g:h)}function g(m){return m===60||m===62||m===92?(e.consume(m),h):h(m)}function S(m){return!f&&(m===null||m===41||ue(m))?(e.exit("chunkString"),e.exit(s),e.exit(o),e.exit(r),t(m)):f<c&&m===40?(e.consume(m),f++,S):m===41?(e.consume(m),f--,S):m===null||m===32||m===40||bo(m)?n(m):(e.consume(m),m===92?x:S)}function x(m){return m===40||m===41||m===92?(e.consume(m),S):S(m)}}function Bm(e,t,n,r,i,l){const o=this;let s=0,a;return c;function c(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(l),f}function f(h){return s>999||h===null||h===91||h===93&&!a||h===94&&!s&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):h===93?(e.exit(l),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):X(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||X(h)||s++>999?(e.exit("chunkString"),f(h)):(e.consume(h),a||(a=!ee(h)),h===92?p:d)}function p(h){return h===91||h===92||h===93?(e.consume(h),s++,d):d(h)}}function Fm(e,t,n,r,i,l){let o;return s;function s(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),o=p===40?41:p,a):n(p)}function a(p){return p===o?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(l),c(p))}function c(p){return p===o?(e.exit(l),a(o)):p===null?n(p):X(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),ie(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===o||p===null||X(p)?(e.exit("chunkString"),c(p)):(e.consume(p),p===92?d:f)}function d(p){return p===o||p===92?(e.consume(p),f):f(p)}}function ki(e,t){let n;return r;function r(i){return X(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ee(i)?ie(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Nv={name:"definition",tokenize:Bv},Ov={partial:!0,tokenize:Fv};function Bv(e,t,n){const r=this;let i;return l;function l(h){return e.enter("definition"),o(h)}function o(h){return Bm.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function s(h){return i=bt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),a):n(h)}function a(h){return ue(h)?ki(e,c)(h):c(h)}function c(h){return Om(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return e.attempt(Ov,d,d)(h)}function d(h){return ee(h)?ie(e,p,"whitespace")(h):p(h)}function p(h){return h===null||X(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function Fv(e,t,n){return r;function r(s){return ue(s)?ki(e,i)(s):n(s)}function i(s){return Fm(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function l(s){return ee(s)?ie(e,o,"whitespace")(s):o(s)}function o(s){return s===null||X(s)?t(s):n(s)}}const jv={name:"hardBreakEscape",tokenize:zv};function zv(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return X(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const Wv={name:"headingAtx",resolve:Gv,tokenize:Uv};function Gv(e,t){let n=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ft(e,r,n-r+1,[["enter",i,t],["enter",l,t],["exit",l,t],["exit",i,t]])),e}function Uv(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),l(f)}function l(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||ue(f)?(e.exit("atxHeadingSequence"),s(f)):n(f)}function s(f){return f===35?(e.enter("atxHeadingSequence"),a(f)):f===null||X(f)?(e.exit("atxHeading"),t(f)):ee(f)?ie(e,s,"whitespace")(f):(e.enter("atxHeadingText"),c(f))}function a(f){return f===35?(e.consume(f),a):(e.exit("atxHeadingSequence"),s(f))}function c(f){return f===null||f===35||ue(f)?(e.exit("atxHeadingText"),s(f)):(e.consume(f),c)}}const Hv=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Xf=["pre","script","style","textarea"],Vv={concrete:!0,name:"htmlFlow",resolveTo:Xv,tokenize:qv},$v={partial:!0,tokenize:Jv},Kv={partial:!0,tokenize:Qv};function Xv(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function qv(e,t,n){const r=this;let i,l,o,s,a;return c;function c(v){return f(v)}function f(v){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(v),d}function d(v){return v===33?(e.consume(v),p):v===47?(e.consume(v),l=!0,S):v===63?(e.consume(v),i=3,r.interrupt?t:y):Xe(v)?(e.consume(v),o=String.fromCharCode(v),x):n(v)}function p(v){return v===45?(e.consume(v),i=2,h):v===91?(e.consume(v),i=5,s=0,g):Xe(v)?(e.consume(v),i=4,r.interrupt?t:y):n(v)}function h(v){return v===45?(e.consume(v),r.interrupt?t:y):n(v)}function g(v){const fe="CDATA[";return v===fe.charCodeAt(s++)?(e.consume(v),s===fe.length?r.interrupt?t:U:g):n(v)}function S(v){return Xe(v)?(e.consume(v),o=String.fromCharCode(v),x):n(v)}function x(v){if(v===null||v===47||v===62||ue(v)){const fe=v===47,De=o.toLowerCase();return!fe&&!l&&Xf.includes(De)?(i=1,r.interrupt?t(v):U(v)):Hv.includes(o.toLowerCase())?(i=6,fe?(e.consume(v),m):r.interrupt?t(v):U(v)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(v):l?C(v):_(v))}return v===45||He(v)?(e.consume(v),o+=String.fromCharCode(v),x):n(v)}function m(v){return v===62?(e.consume(v),r.interrupt?t:U):n(v)}function C(v){return ee(v)?(e.consume(v),C):I(v)}function _(v){return v===47?(e.consume(v),I):v===58||v===95||Xe(v)?(e.consume(v),R):ee(v)?(e.consume(v),_):I(v)}function R(v){return v===45||v===46||v===58||v===95||He(v)?(e.consume(v),R):A(v)}function A(v){return v===61?(e.consume(v),P):ee(v)?(e.consume(v),A):_(v)}function P(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),a=v,w):ee(v)?(e.consume(v),P):N(v)}function w(v){return v===a?(e.consume(v),a=null,G):v===null||X(v)?n(v):(e.consume(v),w)}function N(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||ue(v)?A(v):(e.consume(v),N)}function G(v){return v===47||v===62||ee(v)?_(v):n(v)}function I(v){return v===62?(e.consume(v),F):n(v)}function F(v){return v===null||X(v)?U(v):ee(v)?(e.consume(v),F):n(v)}function U(v){return v===45&&i===2?(e.consume(v),q):v===60&&i===1?(e.consume(v),E):v===62&&i===4?(e.consume(v),V):v===63&&i===3?(e.consume(v),y):v===93&&i===5?(e.consume(v),$):X(v)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check($v,K,Z)(v)):v===null||X(v)?(e.exit("htmlFlowData"),Z(v)):(e.consume(v),U)}function Z(v){return e.check(Kv,ne,K)(v)}function ne(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),z}function z(v){return v===null||X(v)?Z(v):(e.enter("htmlFlowData"),U(v))}function q(v){return v===45?(e.consume(v),y):U(v)}function E(v){return v===47?(e.consume(v),o="",O):U(v)}function O(v){if(v===62){const fe=o.toLowerCase();return Xf.includes(fe)?(e.consume(v),V):U(v)}return Xe(v)&&o.length<8?(e.consume(v),o+=String.fromCharCode(v),O):U(v)}function $(v){return v===93?(e.consume(v),y):U(v)}function y(v){return v===62?(e.consume(v),V):v===45&&i===2?(e.consume(v),y):U(v)}function V(v){return v===null||X(v)?(e.exit("htmlFlowData"),K(v)):(e.consume(v),V)}function K(v){return e.exit("htmlFlow"),t(v)}}function Qv(e,t,n){const r=this;return i;function i(o){return X(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):n(o)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function Jv(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ul,t,n)}}const Yv={name:"htmlText",tokenize:Zv};function Zv(e,t,n){const r=this;let i,l,o;return s;function s(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),a}function a(y){return y===33?(e.consume(y),c):y===47?(e.consume(y),A):y===63?(e.consume(y),_):Xe(y)?(e.consume(y),N):n(y)}function c(y){return y===45?(e.consume(y),f):y===91?(e.consume(y),l=0,g):Xe(y)?(e.consume(y),C):n(y)}function f(y){return y===45?(e.consume(y),h):n(y)}function d(y){return y===null?n(y):y===45?(e.consume(y),p):X(y)?(o=d,E(y)):(e.consume(y),d)}function p(y){return y===45?(e.consume(y),h):d(y)}function h(y){return y===62?q(y):y===45?p(y):d(y)}function g(y){const V="CDATA[";return y===V.charCodeAt(l++)?(e.consume(y),l===V.length?S:g):n(y)}function S(y){return y===null?n(y):y===93?(e.consume(y),x):X(y)?(o=S,E(y)):(e.consume(y),S)}function x(y){return y===93?(e.consume(y),m):S(y)}function m(y){return y===62?q(y):y===93?(e.consume(y),m):S(y)}function C(y){return y===null||y===62?q(y):X(y)?(o=C,E(y)):(e.consume(y),C)}function _(y){return y===null?n(y):y===63?(e.consume(y),R):X(y)?(o=_,E(y)):(e.consume(y),_)}function R(y){return y===62?q(y):_(y)}function A(y){return Xe(y)?(e.consume(y),P):n(y)}function P(y){return y===45||He(y)?(e.consume(y),P):w(y)}function w(y){return X(y)?(o=w,E(y)):ee(y)?(e.consume(y),w):q(y)}function N(y){return y===45||He(y)?(e.consume(y),N):y===47||y===62||ue(y)?G(y):n(y)}function G(y){return y===47?(e.consume(y),q):y===58||y===95||Xe(y)?(e.consume(y),I):X(y)?(o=G,E(y)):ee(y)?(e.consume(y),G):q(y)}function I(y){return y===45||y===46||y===58||y===95||He(y)?(e.consume(y),I):F(y)}function F(y){return y===61?(e.consume(y),U):X(y)?(o=F,E(y)):ee(y)?(e.consume(y),F):G(y)}function U(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),i=y,Z):X(y)?(o=U,E(y)):ee(y)?(e.consume(y),U):(e.consume(y),ne)}function Z(y){return y===i?(e.consume(y),i=void 0,z):y===null?n(y):X(y)?(o=Z,E(y)):(e.consume(y),Z)}function ne(y){return y===null||y===34||y===39||y===60||y===61||y===96?n(y):y===47||y===62||ue(y)?G(y):(e.consume(y),ne)}function z(y){return y===47||y===62||ue(y)?G(y):n(y)}function q(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),t):n(y)}function E(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),O}function O(y){return ee(y)?ie(e,$,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):$(y)}function $(y){return e.enter("htmlTextData"),o(y)}}const Xc={name:"labelEnd",resolveAll:rR,resolveTo:iR,tokenize:lR},eR={tokenize:oR},tR={tokenize:sR},nR={tokenize:aR};function rR(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&ft(e,0,e.length,n),e}function iR(e,t){let n=e.length,r=0,i,l,o,s;for(;n--;)if(i=e[n][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const a={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},f={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return s=[["enter",a,t],["enter",c,t]],s=_t(s,e.slice(l+1,l+r+3)),s=_t(s,[["enter",f,t]]),s=_t(s,as(t.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),t)),s=_t(s,[["exit",f,t],e[o-2],e[o-1],["exit",c,t]]),s=_t(s,e.slice(o+1)),s=_t(s,[["exit",a,t]]),ft(e,l,e.length,s),e}function lR(e,t,n){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return s;function s(p){return l?l._inactive?d(p):(o=r.parser.defined.includes(bt(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),a):n(p)}function a(p){return p===40?e.attempt(eR,f,o?f:d)(p):p===91?e.attempt(tR,f,o?c:d)(p):o?f(p):d(p)}function c(p){return e.attempt(nR,f,d)(p)}function f(p){return t(p)}function d(p){return l._balanced=!0,n(p)}}function oR(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return ue(d)?ki(e,l)(d):l(d)}function l(d){return d===41?f(d):Om(e,o,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return ue(d)?ki(e,a)(d):f(d)}function s(d){return n(d)}function a(d){return d===34||d===39||d===40?Fm(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):f(d)}function c(d){return ue(d)?ki(e,f)(d):f(d)}function f(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function sR(e,t,n){const r=this;return i;function i(s){return Bm.call(r,e,l,o,"reference","referenceMarker","referenceString")(s)}function l(s){return r.parser.defined.includes(bt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function o(s){return n(s)}}function aR(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const uR={name:"labelStartImage",resolveAll:Xc.resolveAll,tokenize:cR};function cR(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),l}function l(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),o):n(s)}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const dR={name:"labelStartLink",resolveAll:Xc.resolveAll,tokenize:fR};function fR(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const Vs={name:"lineEnding",tokenize:pR};function pR(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ie(e,t,"linePrefix")}}const Zl={name:"thematicBreak",tokenize:hR};function hR(e,t,n){let r=0,i;return l;function l(c){return e.enter("thematicBreak"),o(c)}function o(c){return i=c,s(c)}function s(c){return c===i?(e.enter("thematicBreakSequence"),a(c)):r>=3&&(c===null||X(c))?(e.exit("thematicBreak"),t(c)):n(c)}function a(c){return c===i?(e.consume(c),r++,a):(e.exit("thematicBreakSequence"),ee(c)?ie(e,s,"whitespace")(c):s(c))}}const Ze={continuation:{tokenize:_R},exit:yR,name:"list",tokenize:CR},mR={partial:!0,tokenize:xR},gR={partial:!0,tokenize:SR};function CR(e,t,n){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Du(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Zl,n,c)(h):c(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(h)}return n(h)}function a(h){return Du(h)&&++o<10?(e.consume(h),a):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),c(h)):n(h)}function c(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(ul,r.interrupt?n:f,e.attempt(mR,p,d))}function f(h){return r.containerState.initialBlankLine=!0,l++,p(h)}function d(h){return ee(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):n(h)}function p(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function _R(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ul,i,l);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ie(e,t,"listItemIndent",r.containerState.size+1)(s)}function l(s){return r.containerState.furtherBlankLines||!ee(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(gR,t,o)(s))}function o(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,ie(e,e.attempt(Ze,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function SR(e,t,n){const r=this;return ie(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(l):n(l)}}function yR(e){e.exit(this.containerState.type)}function xR(e,t,n){const r=this;return ie(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!ee(l)&&o&&o[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const qf={name:"setextUnderline",resolveTo:vR,tokenize:RR};function vR(e,t){let n=e.length,r,i,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function RR(e,t,n){const r=this;let i;return l;function l(c){let f=r.events.length,d;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){d=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=c,o(c)):n(c)}function o(c){return e.enter("setextHeadingLineSequence"),s(c)}function s(c){return c===i?(e.consume(c),s):(e.exit("setextHeadingLineSequence"),ee(c)?ie(e,a,"lineSuffix")(c):a(c))}function a(c){return c===null||X(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const IR={tokenize:PR};function PR(e){const t=this,n=e.attempt(ul,r,e.attempt(this.parser.constructs.flowInitial,i,ie(e,e.attempt(this.parser.constructs.flow,i,e.attempt(bv,i)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const AR={resolveAll:zm()},TR=jm("string"),wR=jm("text");function jm(e){return{resolveAll:zm(e==="text"?kR:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],l=n.attempt(i,o,s);return o;function o(f){return c(f)?l(f):s(f)}function s(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),a}function a(f){return c(f)?(n.exit("data"),l(f)):(n.consume(f),a)}function c(f){if(f===null)return!0;const d=i[f];let p=-1;if(d)for(;++p<d.length;){const h=d[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function zm(e){return t;function t(n,r){let i=-1,l;for(;++i<=n.length;)l===void 0?n[i]&&n[i][1].type==="data"&&(l=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==l+2&&(n[l][1].end=n[i-1][1].end,n.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(n,r):n}}function kR(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let l=i.length,o=-1,s=0,a;for(;l--;){const c=i[l];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(c===-2)a=!0,s++;else if(c!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const c={type:n===e.length||a||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const bR={42:Ze,43:Ze,45:Ze,48:Ze,49:Ze,50:Ze,51:Ze,52:Ze,53:Ze,54:Ze,55:Ze,56:Ze,57:Ze,62:Dm},ER={91:Nv},DR={[-2]:Hs,[-1]:Hs,32:Hs},MR={35:Wv,42:Zl,45:[qf,Zl],60:Vv,61:qf,95:Zl,96:Kf,126:Kf},LR={38:Lm,92:Mm},NR={[-5]:Vs,[-4]:Vs,[-3]:Vs,33:uR,38:Lm,42:Mu,60:[dv,Yv],91:dR,92:[jv,Mm],93:Xc,95:Mu,96:Iv},OR={null:[Mu,AR]},BR={null:[42,95]},FR={null:[]},jR=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:BR,contentInitial:ER,disable:FR,document:bR,flow:MR,flowInitial:DR,insideSpan:OR,string:LR,text:NR},Symbol.toStringTag,{value:"Module"}));function zR(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},l=[];let o=[],s=[];const a={attempt:w(A),check:w(P),consume:C,enter:_,exit:R,interrupt:w(P,{interrupt:!0})},c={code:null,containerState:{},defineSkip:S,events:[],now:g,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:d};let f=t.tokenize.call(c,a);return t.resolveAll&&l.push(t),c;function d(F){return o=_t(o,F),x(),o[o.length-1]!==null?[]:(N(t,0),c.events=as(l,c.events,c),c.events)}function p(F,U){return GR(h(F),U)}function h(F){return WR(o,F)}function g(){const{_bufferIndex:F,_index:U,line:Z,column:ne,offset:z}=r;return{_bufferIndex:F,_index:U,line:Z,column:ne,offset:z}}function S(F){i[F.line]=F.column,I()}function x(){let F;for(;r._index<o.length;){const U=o[r._index];if(typeof U=="string")for(F=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===F&&r._bufferIndex<U.length;)m(U.charCodeAt(r._bufferIndex));else m(U)}}function m(F){f=f(F)}function C(F){X(F)?(r.line++,r.column=1,r.offset+=F===-3?2:1,I()):F!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=F}function _(F,U){const Z=U||{};return Z.type=F,Z.start=g(),c.events.push(["enter",Z,c]),s.push(Z),Z}function R(F){const U=s.pop();return U.end=g(),c.events.push(["exit",U,c]),U}function A(F,U){N(F,U.from)}function P(F,U){U.restore()}function w(F,U){return Z;function Z(ne,z,q){let E,O,$,y;return Array.isArray(ne)?K(ne):"tokenize"in ne?K([ne]):V(ne);function V(pe){return Dt;function Dt(nn){const Yn=nn!==null&&pe[nn],Zn=nn!==null&&pe.null,fl=[...Array.isArray(Yn)?Yn:Yn?[Yn]:[],...Array.isArray(Zn)?Zn:Zn?[Zn]:[]];return K(fl)(nn)}}function K(pe){return E=pe,O=0,pe.length===0?q:v(pe[O])}function v(pe){return Dt;function Dt(nn){return y=G(),$=pe,pe.partial||(c.currentConstruct=pe),pe.name&&c.parser.constructs.disable.null.includes(pe.name)?De():pe.tokenize.call(U?Object.assign(Object.create(c),U):c,a,fe,De)(nn)}}function fe(pe){return F($,y),z}function De(pe){return y.restore(),++O<E.length?v(E[O]):q}}}function N(F,U){F.resolveAll&&!l.includes(F)&&l.push(F),F.resolve&&ft(c.events,U,c.events.length-U,F.resolve(c.events.slice(U),c)),F.resolveTo&&(c.events=F.resolveTo(c.events,c))}function G(){const F=g(),U=c.previous,Z=c.currentConstruct,ne=c.events.length,z=Array.from(s);return{from:ne,restore:q};function q(){r=F,c.previous=U,c.currentConstruct=Z,c.events.length=ne,s=z,I()}}function I(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function WR(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,l=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,l)];else{if(o=e.slice(n,i),r>-1){const s=o[0];typeof s=="string"?o[0]=s.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function GR(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const l=e[n];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function UR(e){const r={constructs:bm([jR,...(e||{}).extensions||[]]),content:i(iv),defined:[],document:i(ov),flow:i(IR),lazy:{},string:i(TR),text:i(wR)};return r;function i(l){return o;function o(s){return zR(r,l,s)}}}function HR(e){for(;!Nm(e););return e}const Qf=/[\0\t\n\r]/g;function VR(){let e=1,t="",n=!0,r;return i;function i(l,o,s){const a=[];let c,f,d,p,h;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),d=0,t="",n&&(l.charCodeAt(0)===65279&&d++,n=void 0);d<l.length;){if(Qf.lastIndex=d,c=Qf.exec(l),p=c&&c.index!==void 0?c.index:l.length,h=l.charCodeAt(p),!c){t=l.slice(d);break}if(h===10&&d===p&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),d<p&&(a.push(l.slice(d,p)),e+=p-d),h){case 0:{a.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,a.push(-2);e++<f;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}d=p+1}return s&&(r&&a.push(-5),t&&a.push(t),a.push(null)),a}}const $R=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function KR(e){return e.replace($R,XR)}function XR(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),l=i===120||i===88;return Em(n.slice(l?2:1),l?16:10)}return Kc(n)||e}const Wm={}.hasOwnProperty;function qR(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),QR(n)(HR(UR(n).document().write(VR()(e,t,!0))))}function QR(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(sd),autolinkProtocol:G,autolinkEmail:G,atxHeading:l(id),blockQuote:l(Zn),characterEscape:G,characterReference:G,codeFenced:l(fl),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(fl,o),codeText:l(Eg,o),codeTextData:G,data:G,codeFlowValue:G,definition:l(Dg),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(Mg),hardBreakEscape:l(ld),hardBreakTrailing:l(ld),htmlFlow:l(od,o),htmlFlowData:G,htmlText:l(od,o),htmlTextData:G,image:l(Lg),label:o,link:l(sd),listItem:l(Ng),listItemValue:p,listOrdered:l(ad,d),listUnordered:l(ad),paragraph:l(Og),reference:v,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(id),strong:l(Bg),thematicBreak:l(jg)},exit:{atxHeading:a(),atxHeadingSequence:A,autolink:a(),autolinkEmail:Yn,autolinkProtocol:nn,blockQuote:a(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:De,characterReferenceMarkerNumeric:De,characterReferenceValue:pe,characterReference:Dt,codeFenced:a(x),codeFencedFence:S,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:I,codeIndented:a(m),codeText:a(z),codeTextData:I,data:I,definition:a(),definitionDestinationString:R,definitionLabelString:C,definitionTitleString:_,emphasis:a(),hardBreakEscape:a(U),hardBreakTrailing:a(U),htmlFlow:a(Z),htmlFlowData:I,htmlText:a(ne),htmlTextData:I,image:a(E),label:$,labelText:O,lineEnding:F,link:a(q),listItem:a(),listOrdered:a(),listUnordered:a(),paragraph:a(),referenceString:fe,resourceDestinationString:y,resourceTitleString:V,resource:K,setextHeading:a(N),setextHeadingLineSequence:w,setextHeadingText:P,strong:a(),thematicBreak:a()}};Gm(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(b){let j={type:"root",children:[]};const J={stack:[j],tokenStack:[],config:t,enter:s,exit:c,buffer:o,resume:f,data:n},re=[];let ae=-1;for(;++ae<b.length;)if(b[ae][1].type==="listOrdered"||b[ae][1].type==="listUnordered")if(b[ae][0]==="enter")re.push(ae);else{const Rt=re.pop();ae=i(b,Rt,ae)}for(ae=-1;++ae<b.length;){const Rt=t[b[ae][0]];Wm.call(Rt,b[ae][1].type)&&Rt[b[ae][1].type].call(Object.assign({sliceSerialize:b[ae][2].sliceSerialize},J),b[ae][1])}if(J.tokenStack.length>0){const Rt=J.tokenStack[J.tokenStack.length-1];(Rt[1]||Jf).call(J,void 0,Rt[0])}for(j.position={start:ln(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:ln(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},ae=-1;++ae<t.transforms.length;)j=t.transforms[ae](j)||j;return j}function i(b,j,J){let re=j-1,ae=-1,Rt=!1,Dn,zt,Qr,Jr;for(;++re<=J;){const ot=b[re];switch(ot[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ot[0]==="enter"?ae++:ae--,Jr=void 0;break}case"lineEndingBlank":{ot[0]==="enter"&&(Dn&&!Jr&&!ae&&!Qr&&(Qr=re),Jr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Jr=void 0}if(!ae&&ot[0]==="enter"&&ot[1].type==="listItemPrefix"||ae===-1&&ot[0]==="exit"&&(ot[1].type==="listUnordered"||ot[1].type==="listOrdered")){if(Dn){let er=re;for(zt=void 0;er--;){const Wt=b[er];if(Wt[1].type==="lineEnding"||Wt[1].type==="lineEndingBlank"){if(Wt[0]==="exit")continue;zt&&(b[zt][1].type="lineEndingBlank",Rt=!0),Wt[1].type="lineEnding",zt=er}else if(!(Wt[1].type==="linePrefix"||Wt[1].type==="blockQuotePrefix"||Wt[1].type==="blockQuotePrefixWhitespace"||Wt[1].type==="blockQuoteMarker"||Wt[1].type==="listItemIndent"))break}Qr&&(!zt||Qr<zt)&&(Dn._spread=!0),Dn.end=Object.assign({},zt?b[zt][1].start:ot[1].end),b.splice(zt||re,0,["exit",Dn,ot[2]]),re++,J++}if(ot[1].type==="listItemPrefix"){const er={type:"listItem",_spread:!1,start:Object.assign({},ot[1].start),end:void 0};Dn=er,b.splice(re,0,["enter",er,ot[2]]),re++,J++,Qr=void 0,Jr=!0}}}return b[j][1]._spread=Rt,J}function l(b,j){return J;function J(re){s.call(this,b(re),re),j&&j.call(this,re)}}function o(){this.stack.push({type:"fragment",children:[]})}function s(b,j,J){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([j,J||void 0]),b.position={start:ln(j.start),end:void 0}}function a(b){return j;function j(J){b&&b.call(this,J),c.call(this,J)}}function c(b,j){const J=this.stack.pop(),re=this.tokenStack.pop();if(re)re[0].type!==b.type&&(j?j.call(this,b,re[0]):(re[1]||Jf).call(this,b,re[0]));else throw new Error("Cannot close `"+b.type+"` ("+wi({start:b.start,end:b.end})+"): it’s not open");J.position.end=ln(b.end)}function f(){return $c(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(b){if(this.data.expectingFirstListItemValue){const j=this.stack[this.stack.length-2];j.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function h(){const b=this.resume(),j=this.stack[this.stack.length-1];j.lang=b}function g(){const b=this.resume(),j=this.stack[this.stack.length-1];j.meta=b}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const b=this.resume(),j=this.stack[this.stack.length-1];j.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const b=this.resume(),j=this.stack[this.stack.length-1];j.value=b.replace(/(\r?\n|\r)$/g,"")}function C(b){const j=this.resume(),J=this.stack[this.stack.length-1];J.label=j,J.identifier=bt(this.sliceSerialize(b)).toLowerCase()}function _(){const b=this.resume(),j=this.stack[this.stack.length-1];j.title=b}function R(){const b=this.resume(),j=this.stack[this.stack.length-1];j.url=b}function A(b){const j=this.stack[this.stack.length-1];if(!j.depth){const J=this.sliceSerialize(b).length;j.depth=J}}function P(){this.data.setextHeadingSlurpLineEnding=!0}function w(b){const j=this.stack[this.stack.length-1];j.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function G(b){const J=this.stack[this.stack.length-1].children;let re=J[J.length-1];(!re||re.type!=="text")&&(re=Fg(),re.position={start:ln(b.start),end:void 0},J.push(re)),this.stack.push(re)}function I(b){const j=this.stack.pop();j.value+=this.sliceSerialize(b),j.position.end=ln(b.end)}function F(b){const j=this.stack[this.stack.length-1];if(this.data.atHardBreak){const J=j.children[j.children.length-1];J.position.end=ln(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(j.type)&&(G.call(this,b),I.call(this,b))}function U(){this.data.atHardBreak=!0}function Z(){const b=this.resume(),j=this.stack[this.stack.length-1];j.value=b}function ne(){const b=this.resume(),j=this.stack[this.stack.length-1];j.value=b}function z(){const b=this.resume(),j=this.stack[this.stack.length-1];j.value=b}function q(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=j,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function E(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=j,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function O(b){const j=this.sliceSerialize(b),J=this.stack[this.stack.length-2];J.label=KR(j),J.identifier=bt(j).toLowerCase()}function $(){const b=this.stack[this.stack.length-1],j=this.resume(),J=this.stack[this.stack.length-1];if(this.data.inReference=!0,J.type==="link"){const re=b.children;J.children=re}else J.alt=j}function y(){const b=this.resume(),j=this.stack[this.stack.length-1];j.url=b}function V(){const b=this.resume(),j=this.stack[this.stack.length-1];j.title=b}function K(){this.data.inReference=void 0}function v(){this.data.referenceType="collapsed"}function fe(b){const j=this.resume(),J=this.stack[this.stack.length-1];J.label=j,J.identifier=bt(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function De(b){this.data.characterReferenceType=b.type}function pe(b){const j=this.sliceSerialize(b),J=this.data.characterReferenceType;let re;J?(re=Em(j,J==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):re=Kc(j);const ae=this.stack[this.stack.length-1];ae.value+=re}function Dt(b){const j=this.stack.pop();j.position.end=ln(b.end)}function nn(b){I.call(this,b);const j=this.stack[this.stack.length-1];j.url=this.sliceSerialize(b)}function Yn(b){I.call(this,b);const j=this.stack[this.stack.length-1];j.url="mailto:"+this.sliceSerialize(b)}function Zn(){return{type:"blockquote",children:[]}}function fl(){return{type:"code",lang:null,meta:null,value:""}}function Eg(){return{type:"inlineCode",value:""}}function Dg(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Mg(){return{type:"emphasis",children:[]}}function id(){return{type:"heading",depth:0,children:[]}}function ld(){return{type:"break"}}function od(){return{type:"html",value:""}}function Lg(){return{type:"image",title:null,url:"",alt:null}}function sd(){return{type:"link",title:null,url:"",children:[]}}function ad(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function Ng(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function Og(){return{type:"paragraph",children:[]}}function Bg(){return{type:"strong",children:[]}}function Fg(){return{type:"text",value:""}}function jg(){return{type:"thematicBreak"}}}function ln(e){return{line:e.line,column:e.column,offset:e.offset}}function Gm(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Gm(e,r):JR(e,r)}}function JR(e,t){let n;for(n in t)if(Wm.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Jf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+wi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is still open")}function YR(e){const t=this;t.parser=n;function n(r){return qR(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function ZR(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function eI(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function tI(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function nI(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function rI(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function iI(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=qr(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=l+1,s+=1,e.footnoteCounts.set(r,s);const a={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,a);const c={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,c),e.applyData(t,c)}function lI(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function oI(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Um(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function sI(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Um(e,t);const i={src:qr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,l),e.applyData(t,l)}function aI(e,t){const n={src:qr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function uI(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function cI(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Um(e,t);const i={href:qr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function dI(e,t){const n={href:qr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function fI(e,t,n){const r=e.all(t),i=n?pI(n):Hm(t),l={},o=[];if(typeof t.checked=="boolean"){const f=r[0];let d;f&&f.type==="element"&&f.tagName==="p"?d=f:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const f=r[s];(i||s!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?o.push(...f.children):o.push(f)}const a=r[r.length-1];a&&(i||a.type!=="element"||a.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:l,children:o};return e.patch(t,c),e.applyData(t,c)}function pI(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Hm(n[r])}return t}function Hm(e){const t=e.spread;return t??e.children.length>1}function hI(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function mI(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function gI(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function CI(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function _I(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=Gc(t.children[1]),a=Rm(t.children[t.children.length-1]);s&&a&&(o.position={start:s,end:a}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,l),e.applyData(t,l)}function SI(e,t,n){const r=n?n.children:void 0,l=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,s=o?o.length:t.children.length;let a=-1;const c=[];for(;++a<s;){const d=t.children[a],p={},h=o?o[a]:void 0;h&&(p.align=h);let g={type:"element",tagName:l,properties:p,children:[]};d&&(g.children=e.all(d),e.patch(d,g),g=e.applyData(d,g)),c.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,f),e.applyData(t,f)}function yI(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Yf=9,Zf=32;function xI(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const l=[];for(;r;)l.push(ep(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return l.push(ep(t.slice(i),i>0,!1)),l.join("")}function ep(e,t,n){let r=0,i=e.length;if(t){let l=e.codePointAt(r);for(;l===Yf||l===Zf;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(i-1);for(;l===Yf||l===Zf;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function vI(e,t){const n={type:"text",value:xI(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function RI(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const II={blockquote:ZR,break:eI,code:tI,delete:nI,emphasis:rI,footnoteReference:iI,heading:lI,html:oI,imageReference:sI,image:aI,inlineCode:uI,linkReference:cI,link:dI,listItem:fI,list:hI,paragraph:mI,root:gI,strong:CI,table:_I,tableCell:yI,tableRow:SI,text:vI,thematicBreak:RI,toml:bl,yaml:bl,definition:bl,footnoteDefinition:bl};function bl(){}const Vm=-1,us=0,bi=1,Eo=2,qc=3,Qc=4,Jc=5,Yc=6,$m=7,Km=8,tp=typeof self=="object"?self:globalThis,PI=(e,t)=>{const n=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,o]=t[i];switch(l){case us:case Vm:return n(o,i);case bi:{const s=n([],i);for(const a of o)s.push(r(a));return s}case Eo:{const s=n({},i);for(const[a,c]of o)s[r(a)]=r(c);return s}case qc:return n(new Date(o),i);case Qc:{const{source:s,flags:a}=o;return n(new RegExp(s,a),i)}case Jc:{const s=n(new Map,i);for(const[a,c]of o)s.set(r(a),r(c));return s}case Yc:{const s=n(new Set,i);for(const a of o)s.add(r(a));return s}case $m:{const{name:s,message:a}=o;return n(new tp[s](a),i)}case Km:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:s}=new Uint8Array(o);return n(new DataView(s),o)}}return n(new tp[l](o),i)};return r},np=e=>PI(new Map,e)(0),nr="",{toString:AI}={},{keys:TI}=Object,si=e=>{const t=typeof e;if(t!=="object"||!e)return[us,t];const n=AI.call(e).slice(8,-1);switch(n){case"Array":return[bi,nr];case"Object":return[Eo,nr];case"Date":return[qc,nr];case"RegExp":return[Qc,nr];case"Map":return[Jc,nr];case"Set":return[Yc,nr];case"DataView":return[bi,n]}return n.includes("Array")?[bi,n]:n.includes("Error")?[$m,n]:[Eo,n]},El=([e,t])=>e===us&&(t==="function"||t==="symbol"),wI=(e,t,n,r)=>{const i=(o,s)=>{const a=r.push(o)-1;return n.set(s,a),a},l=o=>{if(n.has(o))return n.get(o);let[s,a]=si(o);switch(s){case us:{let f=o;switch(a){case"bigint":s=Km,f=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+a);f=null;break;case"undefined":return i([Vm],o)}return i([s,f],o)}case bi:{if(a){let p=o;return a==="DataView"?p=new Uint8Array(o.buffer):a==="ArrayBuffer"&&(p=new Uint8Array(o)),i([a,[...p]],o)}const f=[],d=i([s,f],o);for(const p of o)f.push(l(p));return d}case Eo:{if(a)switch(a){case"BigInt":return i([a,o.toString()],o);case"Boolean":case"Number":case"String":return i([a,o.valueOf()],o)}if(t&&"toJSON"in o)return l(o.toJSON());const f=[],d=i([s,f],o);for(const p of TI(o))(e||!El(si(o[p])))&&f.push([l(p),l(o[p])]);return d}case qc:return i([s,o.toISOString()],o);case Qc:{const{source:f,flags:d}=o;return i([s,{source:f,flags:d}],o)}case Jc:{const f=[],d=i([s,f],o);for(const[p,h]of o)(e||!(El(si(p))||El(si(h))))&&f.push([l(p),l(h)]);return d}case Yc:{const f=[],d=i([s,f],o);for(const p of o)(e||!El(si(p)))&&f.push(l(p));return d}}const{message:c}=o;return i([s,{name:a,message:c}],o)};return l},rp=(e,{json:t,lossy:n}={})=>{const r=[];return wI(!(t||n),!!t,new Map,r)(e),r},Do=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?np(rp(e,t)):structuredClone(e):(e,t)=>np(rp(e,t));function kI(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function bI(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function EI(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||kI,r=e.options.footnoteBackLabel||bI,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let a=-1;for(;++a<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[a]);if(!c)continue;const f=e.all(c),d=String(c.identifier).toUpperCase(),p=qr(d.toLowerCase());let h=0;const g=[],S=e.footnoteCounts.get(d);for(;S!==void 0&&++h<=S;){g.length>0&&g.push({type:"text",value:" "});let C=typeof n=="string"?n:n(a,h);typeof C=="string"&&(C={type:"text",value:C}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(a,h),className:["data-footnote-backref"]},children:Array.isArray(C)?C:[C]})}const x=f[f.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const C=x.children[x.children.length-1];C&&C.type==="text"?C.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...g)}else f.push(...g);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(f,!0)};e.patch(c,m),s.push(m)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Do(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const cs=function(e){if(e==null)return NI;if(typeof e=="function")return ds(e);if(typeof e=="object")return Array.isArray(e)?DI(e):MI(e);if(typeof e=="string")return LI(e);throw new Error("Expected function, string, or object as test")};function DI(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=cs(e[n]);return ds(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].apply(this,i))return!0;return!1}}function MI(e){const t=e;return ds(n);function n(r){const i=r;let l;for(l in e)if(i[l]!==t[l])return!1;return!0}}function LI(e){return ds(t);function t(n){return n&&n.type===e}}function ds(e){return t;function t(n,r,i){return!!(OI(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function NI(){return!0}function OI(e){return e!==null&&typeof e=="object"&&"type"in e}const Xm=[],BI=!0,Lu=!1,FI="skip";function qm(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const l=cs(i),o=r?-1:1;s(e,void 0,[])();function s(a,c,f){const d=a&&typeof a=="object"?a:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(a.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=Xm,g,S,x;if((!t||l(a,c,f[f.length-1]||void 0))&&(h=jI(n(a,f)),h[0]===Lu))return h;if("children"in a&&a.children){const m=a;if(m.children&&h[0]!==FI)for(S=(r?m.children.length:-1)+o,x=f.concat(m);S>-1&&S<m.children.length;){const C=m.children[S];if(g=s(C,S,x)(),g[0]===Lu)return g;S=typeof g[1]=="number"?g[1]:S+o}}return h}}}function jI(e){return Array.isArray(e)?e:typeof e=="number"?[BI,e]:e==null?Xm:[e]}function Zc(e,t,n,r){let i,l,o;typeof t=="function"&&typeof n!="function"?(l=void 0,o=t,i=n):(l=t,o=n,i=r),qm(e,l,s,i);function s(a,c){const f=c[c.length-1],d=f?f.children.indexOf(a):void 0;return o(a,d,f)}}const Nu={}.hasOwnProperty,zI={};function WI(e,t){const n=t||zI,r=new Map,i=new Map,l=new Map,o={...II,...n.handlers},s={all:c,applyData:UI,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:a,options:n,patch:GI,wrap:VI};return Zc(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const d=f.type==="definition"?r:i,p=String(f.identifier).toUpperCase();d.has(p)||d.set(p,f)}}),s;function a(f,d){const p=f.type,h=s.handlers[p];if(Nu.call(s.handlers,p)&&h)return h(s,f,d);if(s.options.passThrough&&s.options.passThrough.includes(p)){if("children"in f){const{children:S,...x}=f,m=Do(x);return m.children=s.all(f),m}return Do(f)}return(s.options.unknownHandler||HI)(s,f,d)}function c(f){const d=[];if("children"in f){const p=f.children;let h=-1;for(;++h<p.length;){const g=s.one(p[h],f);if(g){if(h&&p[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=ip(g.value)),!Array.isArray(g)&&g.type==="element")){const S=g.children[0];S&&S.type==="text"&&(S.value=ip(S.value))}Array.isArray(g)?d.push(...g):d.push(g)}}}return d}}function GI(e,t){e.position&&(t.position=bx(e))}function UI(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&l&&Object.assign(n.properties,Do(l)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function HI(e,t){const n=t.data||{},r="value"in t&&!(Nu.call(n,"hProperties")||Nu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function VI(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ip(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function lp(e,t){const n=WI(e,t),r=n.one(e,void 0),i=EI(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function $I(e,t){return e&&"run"in e?async function(n,r){const i=lp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return lp(n,{file:r,...e||t})}}function op(e){if(e)throw e}var eo=Object.prototype.hasOwnProperty,Qm=Object.prototype.toString,sp=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,up=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Qm.call(t)==="[object Array]"},cp=function(t){if(!t||Qm.call(t)!=="[object Object]")return!1;var n=eo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&eo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||eo.call(t,i)},dp=function(t,n){sp&&n.name==="__proto__"?sp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},fp=function(t,n){if(n==="__proto__")if(eo.call(t,n)){if(ap)return ap(t,n).value}else return;return t[n]},KI=function e(){var t,n,r,i,l,o,s=arguments[0],a=1,c=arguments.length,f=!1;for(typeof s=="boolean"&&(f=s,s=arguments[1]||{},a=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});a<c;++a)if(t=arguments[a],t!=null)for(n in t)r=fp(s,n),i=fp(t,n),s!==i&&(f&&i&&(cp(i)||(l=up(i)))?(l?(l=!1,o=r&&up(r)?r:[]):o=r&&cp(r)?r:{},dp(s,{name:n,newValue:e(f,o,i)})):typeof i<"u"&&dp(s,{name:n,newValue:i}));return s};const $s=Bo(KI);function Ou(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function XI(){const e=[],t={run:n,use:r};return t;function n(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);s(null,...i);function s(a,...c){const f=e[++l];let d=-1;if(a){o(a);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,f?qI(f,s)(...c):o(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function qI(e,t){let n;return r;function r(...o){const s=e.length>o.length;let a;s&&o.push(i);try{a=e.apply(this,o)}catch(c){const f=c;if(s&&n)throw f;return i(f)}s||(a&&a.then&&typeof a.then=="function"?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...s){n||(n=!0,t(o,...s))}function l(o){i(null,o)}}const Nt={basename:QI,dirname:JI,extname:YI,join:ZI,sep:"/"};function QI(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');cl(e);let n=0,r=-1,i=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else o<0&&(l=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function JI(e){if(cl(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function YI(e){cl(e);let t=e.length,n=-1,r=0,i=-1,l=0,o;for(;t--;){const s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||n<0||l===0||l===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function ZI(...e){let t=-1,n;for(;++t<e.length;)cl(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":e2(n)}function e2(e){cl(e);const t=e.codePointAt(0)===47;let n=t2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function t2(e,t){let n="",r=0,i=-1,l=0,o=-1,s,a;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else{if(s===47)break;s=47}if(s===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(a=n.lastIndexOf("/"),a!==n.length-1){a<0?(n="",r=0):(n=n.slice(0,a),r=n.length-1-n.lastIndexOf("/")),i=o,l=0;continue}}else if(n.length>0){n="",r=0,i=o,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,l=0}else s===46&&l>-1?l++:l=-1}return n}function cl(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const n2={cwd:r2};function r2(){return"/"}function Bu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function i2(e){if(typeof e=="string")e=new URL(e);else if(!Bu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return l2(e)}function l2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ks=["history","path","basename","stem","extname","dirname"];class Jm{constructor(t){let n;t?Bu(t)?n={path:t}:typeof t=="string"||o2(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":n2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ks.length;){const l=Ks[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let i;for(i in n)Ks.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Nt.basename(this.path):void 0}set basename(t){qs(t,"basename"),Xs(t,"basename"),this.path=Nt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Nt.dirname(this.path):void 0}set dirname(t){pp(this.basename,"dirname"),this.path=Nt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Nt.extname(this.path):void 0}set extname(t){if(Xs(t,"extname"),pp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Nt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Bu(t)&&(t=i2(t)),qs(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Nt.basename(this.path,this.extname):void 0}set stem(t){qs(t,"stem"),Xs(t,"stem"),this.path=Nt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new $e(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Xs(e,t){if(e&&e.includes(Nt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Nt.sep+"`")}function qs(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function pp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function o2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const s2=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},a2={}.hasOwnProperty;class ed extends s2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=XI()}copy(){const t=new ed;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data($s(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ys("data",this.frozen),this.namespace[t]=n,this):a2.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ys("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Dl(t),r=this.parser||this.Parser;return Qs("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Qs("process",this.parser||this.Parser),Js("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(l,o){const s=Dl(t),a=r.parse(s);r.run(a,s,function(f,d,p){if(f||!d||!p)return c(f);const h=d,g=r.stringify(h,p);d2(g)?p.value=g:p.result=g,c(f,p)});function c(f,d){f||!d?o(f):l?l(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),Qs("processSync",this.parser||this.Parser),Js("processSync",this.compiler||this.Compiler),this.process(t,i),mp("processSync","process",n),r;function i(l,o){n=!0,op(l),r=o}}run(t,n,r){hp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(o,s){const a=Dl(n);i.run(t,a,c);function c(f,d,p){const h=d||t;f?s(f):o?o(h):r(void 0,h,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,l),mp("runSync","run",r),i;function l(o,s){op(o),i=s,r=!0}}stringify(t,n){this.freeze();const r=Dl(n),i=this.compiler||this.Compiler;return Js("stringify",i),hp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ys("use",this.frozen),t!=null)if(typeof t=="function")a(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function l(c){if(typeof c=="function")a(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[f,...d]=c;a(f,d)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(c.plugins),c.settings&&(i.settings=$s(!0,i.settings,c.settings))}function s(c){let f=-1;if(c!=null)if(Array.isArray(c))for(;++f<c.length;){const d=c[f];l(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function a(c,f){let d=-1,p=-1;for(;++d<r.length;)if(r[d][0]===c){p=d;break}if(p===-1)r.push([c,...f]);else if(f.length>0){let[h,...g]=f;const S=r[p][1];Ou(S)&&Ou(h)&&(h=$s(!0,S,h)),r[p]=[c,h,...g]}}}}const u2=new ed().freeze();function Qs(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Js(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ys(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hp(e){if(!Ou(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function mp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Dl(e){return c2(e)?e:new Jm(e)}function c2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function d2(e){return typeof e=="string"||f2(e)}function f2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const p2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",gp=[],Cp={allowDangerousHtml:!0},h2=/^(https?|ircs?|mailto|xmpp)$/i,m2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function g2(e){const t=C2(e),n=_2(e);return S2(t.runSync(t.parse(n),n),e)}function C2(e){const t=e.rehypePlugins||gp,n=e.remarkPlugins||gp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Cp}:Cp;return u2().use(YR).use(n).use($I,r).use(t)}function _2(e){const t=e.children||"",n=new Jm;return typeof t=="string"&&(n.value=t),n}function S2(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,l=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,a=t.urlTransform||y2;for(const f of m2)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+p2+f.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Zc(e,c),Nx(e,{Fragment:u.Fragment,components:i,ignoreInvalidStyle:!0,jsx:u.jsx,jsxs:u.jsxs,passKeys:!0,passNode:!0});function c(f,d,p){if(f.type==="raw"&&p&&typeof d=="number")return o?p.children.splice(d,1):p.children[d]={type:"text",value:f.value},d;if(f.type==="element"){let h;for(h in Us)if(Object.hasOwn(Us,h)&&Object.hasOwn(f.properties,h)){const g=f.properties[h],S=Us[h];(S===null||S.includes(f.tagName))&&(f.properties[h]=a(String(g||""),h,f))}}if(f.type==="element"){let h=n?!n.includes(f.tagName):l?l.includes(f.tagName):!1;if(!h&&r&&typeof d=="number"&&(h=!r(f,d,p)),h&&p&&typeof d=="number")return s&&f.children?p.children.splice(d,1,...f.children):p.children.splice(d,1),d}}}function y2(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||h2.test(e.slice(0,t))?e:""}function _p(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function x2(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function v2(e,t,n){const i=cs((n||{}).ignore||[]),l=R2(t);let o=-1;for(;++o<l.length;)qm(e,"text",s);function s(c,f){let d=-1,p;for(;++d<f.length;){const h=f[d],g=p?p.children:void 0;if(i(h,g?g.indexOf(h):void 0,p))return;p=h}if(p)return a(c,f)}function a(c,f){const d=f[f.length-1],p=l[o][0],h=l[o][1];let g=0;const x=d.children.indexOf(c);let m=!1,C=[];p.lastIndex=0;let _=p.exec(c.value);for(;_;){const R=_.index,A={index:_.index,input:_.input,stack:[...f,c]};let P=h(..._,A);if(typeof P=="string"&&(P=P.length>0?{type:"text",value:P}:void 0),P===!1?p.lastIndex=R+1:(g!==R&&C.push({type:"text",value:c.value.slice(g,R)}),Array.isArray(P)?C.push(...P):P&&C.push(P),g=R+_[0].length,m=!0),!p.global)break;_=p.exec(c.value)}return m?(g<c.value.length&&C.push({type:"text",value:c.value.slice(g)}),d.children.splice(x,1,...C)):C=[c],x+C.length}}function R2(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([I2(i[0]),P2(i[1])])}return t}function I2(e){return typeof e=="string"?new RegExp(x2(e),"g"):e}function P2(e){return typeof e=="function"?e:function(){return e}}const Zs="phrasing",ea=["autolink","link","image","label"];function A2(){return{transforms:[M2],enter:{literalAutolink:w2,literalAutolinkEmail:ta,literalAutolinkHttp:ta,literalAutolinkWww:ta},exit:{literalAutolink:D2,literalAutolinkEmail:E2,literalAutolinkHttp:k2,literalAutolinkWww:b2}}}function T2(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Zs,notInConstruct:ea},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Zs,notInConstruct:ea},{character:":",before:"[ps]",after:"\\/",inConstruct:Zs,notInConstruct:ea}]}}function w2(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function ta(e){this.config.enter.autolinkProtocol.call(this,e)}function k2(e){this.config.exit.autolinkProtocol.call(this,e)}function b2(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function E2(e){this.config.exit.autolinkEmail.call(this,e)}function D2(e){this.exit(e)}function M2(e){v2(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,L2],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),N2]],{ignore:["link","linkReference"]})}function L2(e,t,n,r,i){let l="";if(!Ym(i)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!O2(n)))return!1;const o=B2(n+r);if(!o[0])return!1;const s={type:"link",title:null,url:l+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[s,{type:"text",value:o[1]}]:s}function N2(e,t,n,r){return!Ym(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function O2(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function B2(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=_p(e,"(");let l=_p(e,")");for(;r!==-1&&i>l;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),l++;return[e,n]}function Ym(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Xn(n)||ss(n))&&(!t||n!==47)}Zm.peek=$2;function F2(){this.buffer()}function j2(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function z2(){this.buffer()}function W2(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function G2(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=bt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function U2(e){this.exit(e)}function H2(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=bt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function V2(e){this.exit(e)}function $2(){return"["}function Zm(e,t,n,r){const i=n.createTracker(r);let l=i.move("[^");const o=n.enter("footnoteReference"),s=n.enter("reference");return l+=i.move(n.safe(n.associationId(e),{after:"]",before:l})),s(),o(),l+=i.move("]"),l}function K2(){return{enter:{gfmFootnoteCallString:F2,gfmFootnoteCall:j2,gfmFootnoteDefinitionLabelString:z2,gfmFootnoteDefinition:W2},exit:{gfmFootnoteCallString:G2,gfmFootnoteCall:U2,gfmFootnoteDefinitionLabelString:H2,gfmFootnoteDefinition:V2}}}function X2(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Zm},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,l,o){const s=l.createTracker(o);let a=s.move("[^");const c=l.enter("footnoteDefinition"),f=l.enter("label");return a+=s.move(l.safe(l.associationId(r),{before:a,after:"]"})),f(),a+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),a+=s.move((t?`
`:" ")+l.indentLines(l.containerFlow(r,s.current()),t?eg:q2))),c(),a}}function q2(e,t,n){return t===0?e:eg(e,t,n)}function eg(e,t,n){return(n?"":"    ")+e}const Q2=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];tg.peek=tP;function J2(){return{canContainEols:["delete"],enter:{strikethrough:Z2},exit:{strikethrough:eP}}}function Y2(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Q2}],handlers:{delete:tg}}}function Z2(e){this.enter({type:"delete",children:[]},e)}function eP(e){this.exit(e)}function tg(e,t,n,r){const i=n.createTracker(r),l=n.enter("strikethrough");let o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),l(),o}function tP(){return"~"}function nP(e){return e.length}function rP(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||nP,l=[],o=[],s=[],a=[];let c=0,f=-1;for(;++f<e.length;){const S=[],x=[];let m=-1;for(e[f].length>c&&(c=e[f].length);++m<e[f].length;){const C=iP(e[f][m]);if(n.alignDelimiters!==!1){const _=i(C);x[m]=_,(a[m]===void 0||_>a[m])&&(a[m]=_)}S.push(C)}o[f]=S,s[f]=x}let d=-1;if(typeof r=="object"&&"length"in r)for(;++d<c;)l[d]=Sp(r[d]);else{const S=Sp(r);for(;++d<c;)l[d]=S}d=-1;const p=[],h=[];for(;++d<c;){const S=l[d];let x="",m="";S===99?(x=":",m=":"):S===108?x=":":S===114&&(m=":");let C=n.alignDelimiters===!1?1:Math.max(1,a[d]-x.length-m.length);const _=x+"-".repeat(C)+m;n.alignDelimiters!==!1&&(C=x.length+C+m.length,C>a[d]&&(a[d]=C),h[d]=C),p[d]=_}o.splice(1,0,p),s.splice(1,0,h),f=-1;const g=[];for(;++f<o.length;){const S=o[f],x=s[f];d=-1;const m=[];for(;++d<c;){const C=S[d]||"";let _="",R="";if(n.alignDelimiters!==!1){const A=a[d]-(x[d]||0),P=l[d];P===114?_=" ".repeat(A):P===99?A%2?(_=" ".repeat(A/2+.5),R=" ".repeat(A/2-.5)):(_=" ".repeat(A/2),R=_):R=" ".repeat(A)}n.delimiterStart!==!1&&!d&&m.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&C==="")&&(n.delimiterStart!==!1||d)&&m.push(" "),n.alignDelimiters!==!1&&m.push(_),m.push(C),n.alignDelimiters!==!1&&m.push(R),n.padding!==!1&&m.push(" "),(n.delimiterEnd!==!1||d!==c-1)&&m.push("|")}g.push(n.delimiterEnd===!1?m.join("").replace(/ +$/,""):m.join(""))}return g.join(`
`)}function iP(e){return e==null?"":String(e)}function Sp(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function lP(e,t,n,r){const i=n.enter("blockquote"),l=n.createTracker(r);l.move("> "),l.shift(2);const o=n.indentLines(n.containerFlow(e,l.current()),oP);return i(),o}function oP(e,t,n){return">"+(n?"":" ")+e}function sP(e,t){return yp(e,t.inConstruct,!0)&&!yp(e,t.notInConstruct,!1)}function yp(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function xp(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&sP(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function aP(e,t){const n=String(e);let r=n.indexOf(t),i=r,l=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>o&&(o=l):l=1,i=r+t.length,r=n.indexOf(t,i);return o}function uP(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function cP(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function dP(e,t,n,r){const i=cP(n),l=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(uP(e,n)){const d=n.enter("codeIndented"),p=n.indentLines(l,fP);return d(),p}const s=n.createTracker(r),a=i.repeat(Math.max(aP(l,i)+1,3)),c=n.enter("codeFenced");let f=s.move(a);if(e.lang){const d=n.enter(`codeFencedLang${o}`);f+=s.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...s.current()})),d()}if(e.lang&&e.meta){const d=n.enter(`codeFencedMeta${o}`);f+=s.move(" "),f+=s.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...s.current()})),d()}return f+=s.move(`
`),l&&(f+=s.move(l+`
`)),f+=s.move(a),c(),f}function fP(e,t,n){return(n?"":"    ")+e}function td(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function pP(e,t,n,r){const i=td(n),l=i==='"'?"Quote":"Apostrophe",o=n.enter("definition");let s=n.enter("label");const a=n.createTracker(r);let c=a.move("[");return c+=a.move(n.safe(n.associationId(e),{before:c,after:"]",...a.current()})),c+=a.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=a.move("<"),c+=a.move(n.safe(e.url,{before:c,after:">",...a.current()})),c+=a.move(">")):(s=n.enter("destinationRaw"),c+=a.move(n.safe(e.url,{before:c,after:e.title?" ":`
`,...a.current()}))),s(),e.title&&(s=n.enter(`title${l}`),c+=a.move(" "+i),c+=a.move(n.safe(e.title,{before:c,after:i,...a.current()})),c+=a.move(i),s()),o(),c}function hP(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Yi(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Mo(e,t,n){const r=Wr(e),i=Wr(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}ng.peek=mP;function ng(e,t,n,r){const i=hP(n),l=n.enter("emphasis"),o=n.createTracker(r),s=o.move(i);let a=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()}));const c=a.charCodeAt(0),f=Mo(r.before.charCodeAt(r.before.length-1),c,i);f.inside&&(a=Yi(c)+a.slice(1));const d=a.charCodeAt(a.length-1),p=Mo(r.after.charCodeAt(0),d,i);p.inside&&(a=a.slice(0,-1)+Yi(d));const h=o.move(i);return l(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},s+a+h}function mP(e,t,n){return n.options.emphasis||"*"}function gP(e,t){let n=!1;return Zc(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Lu}),!!((!e.depth||e.depth<3)&&$c(e)&&(t.options.setext||n))}function CP(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),l=n.createTracker(r);if(gP(e,n)){const f=n.enter("headingSetext"),d=n.enter("phrasing"),p=n.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return d(),f(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const o="#".repeat(i),s=n.enter("headingAtx"),a=n.enter("phrasing");l.move(o+" ");let c=n.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(c)&&(c=Yi(c.charCodeAt(0))+c.slice(1)),c=c?o+" "+c:o,n.options.closeAtx&&(c+=" "+o),a(),s(),c}rg.peek=_P;function rg(e){return e.value||""}function _P(){return"<"}ig.peek=SP;function ig(e,t,n,r){const i=td(n),l=i==='"'?"Quote":"Apostrophe",o=n.enter("image");let s=n.enter("label");const a=n.createTracker(r);let c=a.move("![");return c+=a.move(n.safe(e.alt,{before:c,after:"]",...a.current()})),c+=a.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=a.move("<"),c+=a.move(n.safe(e.url,{before:c,after:">",...a.current()})),c+=a.move(">")):(s=n.enter("destinationRaw"),c+=a.move(n.safe(e.url,{before:c,after:e.title?" ":")",...a.current()}))),s(),e.title&&(s=n.enter(`title${l}`),c+=a.move(" "+i),c+=a.move(n.safe(e.title,{before:c,after:i,...a.current()})),c+=a.move(i),s()),c+=a.move(")"),o(),c}function SP(){return"!"}lg.peek=yP;function lg(e,t,n,r){const i=e.referenceType,l=n.enter("imageReference");let o=n.enter("label");const s=n.createTracker(r);let a=s.move("![");const c=n.safe(e.alt,{before:a,after:"]",...s.current()});a+=s.move(c+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const d=n.safe(n.associationId(e),{before:a,after:"]",...s.current()});return o(),n.stack=f,l(),i==="full"||!c||c!==d?a+=s.move(d+"]"):i==="shortcut"?a=a.slice(0,-1):a+=s.move("]"),a}function yP(){return"!"}og.peek=xP;function og(e,t,n){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<n.unsafe.length;){const o=n.unsafe[l],s=n.compilePattern(o);let a;if(o.atBreak)for(;a=s.exec(r);){let c=a.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(a.index+1)}}return i+r+i}function xP(){return"`"}function sg(e,t){const n=$c(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ag.peek=vP;function ag(e,t,n,r){const i=td(n),l=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let s,a;if(sg(e,n)){const f=n.stack;n.stack=[],s=n.enter("autolink");let d=o.move("<");return d+=o.move(n.containerPhrasing(e,{before:d,after:">",...o.current()})),d+=o.move(">"),s(),n.stack=f,d}s=n.enter("link"),a=n.enter("label");let c=o.move("[");return c+=o.move(n.containerPhrasing(e,{before:c,after:"](",...o.current()})),c+=o.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=o.move("<"),c+=o.move(n.safe(e.url,{before:c,after:">",...o.current()})),c+=o.move(">")):(a=n.enter("destinationRaw"),c+=o.move(n.safe(e.url,{before:c,after:e.title?" ":")",...o.current()}))),a(),e.title&&(a=n.enter(`title${l}`),c+=o.move(" "+i),c+=o.move(n.safe(e.title,{before:c,after:i,...o.current()})),c+=o.move(i),a()),c+=o.move(")"),s(),c}function vP(e,t,n){return sg(e,n)?"<":"["}ug.peek=RP;function ug(e,t,n,r){const i=e.referenceType,l=n.enter("linkReference");let o=n.enter("label");const s=n.createTracker(r);let a=s.move("[");const c=n.containerPhrasing(e,{before:a,after:"]",...s.current()});a+=s.move(c+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const d=n.safe(n.associationId(e),{before:a,after:"]",...s.current()});return o(),n.stack=f,l(),i==="full"||!c||c!==d?a+=s.move(d+"]"):i==="shortcut"?a=a.slice(0,-1):a+=s.move("]"),a}function RP(){return"["}function nd(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function IP(e){const t=nd(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function PP(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function cg(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function AP(e,t,n,r){const i=n.enter("list"),l=n.bulletCurrent;let o=e.ordered?PP(n):nd(n);const s=e.ordered?o==="."?")":".":IP(n);let a=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(a=!0),cg(n)===o&&f){let d=-1;for(;++d<e.children.length;){const p=e.children[d];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){a=!0;break}}}}a&&(o=s),n.bulletCurrent=o;const c=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=l,i(),c}function TP(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function wP(e,t,n,r){const i=TP(n);let l=n.bulletCurrent||nd(n);t&&t.type==="list"&&t.ordered&&(l=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const s=n.createTracker(r);s.move(l+" ".repeat(o-l.length)),s.shift(o);const a=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,s.current()),f);return a(),c;function f(d,p,h){return p?(h?"":" ".repeat(o))+d:(h?l:l+" ".repeat(o-l.length))+d}}function kP(e,t,n,r){const i=n.enter("paragraph"),l=n.enter("phrasing"),o=n.containerPhrasing(e,r);return l(),i(),o}const bP=cs(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function EP(e,t,n,r){return(e.children.some(function(o){return bP(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function DP(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}dg.peek=MP;function dg(e,t,n,r){const i=DP(n),l=n.enter("strong"),o=n.createTracker(r),s=o.move(i+i);let a=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()}));const c=a.charCodeAt(0),f=Mo(r.before.charCodeAt(r.before.length-1),c,i);f.inside&&(a=Yi(c)+a.slice(1));const d=a.charCodeAt(a.length-1),p=Mo(r.after.charCodeAt(0),d,i);p.inside&&(a=a.slice(0,-1)+Yi(d));const h=o.move(i+i);return l(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},s+a+h}function MP(e,t,n){return n.options.strong||"*"}function LP(e,t,n,r){return n.safe(e.value,r)}function NP(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function OP(e,t,n){const r=(cg(n)+(n.options.ruleSpaces?" ":"")).repeat(NP(n));return n.options.ruleSpaces?r.slice(0,-1):r}const fg={blockquote:lP,break:xp,code:dP,definition:pP,emphasis:ng,hardBreak:xp,heading:CP,html:rg,image:ig,imageReference:lg,inlineCode:og,link:ag,linkReference:ug,list:AP,listItem:wP,paragraph:kP,root:EP,strong:dg,text:LP,thematicBreak:OP};function BP(){return{enter:{table:FP,tableData:vp,tableHeader:vp,tableRow:zP},exit:{codeText:WP,table:jP,tableData:na,tableHeader:na,tableRow:na}}}function FP(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function jP(e){this.exit(e),this.data.inTable=void 0}function zP(e){this.enter({type:"tableRow",children:[]},e)}function na(e){this.exit(e)}function vp(e){this.enter({type:"tableCell",children:[]},e)}function WP(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,GP));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function GP(e,t){return t==="|"?t:e}function UP(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:o,tableCell:a,tableRow:s}};function o(h,g,S,x){return c(f(h,S,x),h.align)}function s(h,g,S,x){const m=d(h,S,x),C=c([m]);return C.slice(0,C.indexOf(`
`))}function a(h,g,S,x){const m=S.enter("tableCell"),C=S.enter("phrasing"),_=S.containerPhrasing(h,{...x,before:l,after:l});return C(),m(),_}function c(h,g){return rP(h,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function f(h,g,S){const x=h.children;let m=-1;const C=[],_=g.enter("table");for(;++m<x.length;)C[m]=d(x[m],g,S);return _(),C}function d(h,g,S){const x=h.children;let m=-1;const C=[],_=g.enter("tableRow");for(;++m<x.length;)C[m]=a(x[m],h,g,S);return _(),C}function p(h,g,S){let x=fg.inlineCode(h,g,S);return S.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function HP(){return{exit:{taskListCheckValueChecked:Rp,taskListCheckValueUnchecked:Rp,paragraph:$P}}}function VP(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:KP}}}function Rp(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function $P(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let l=-1,o;for(;++l<i.length;){const s=i[l];if(s.type==="paragraph"){o=s;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function KP(e,t,n,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",s=n.createTracker(r);l&&s.move(o);let a=fg.listItem(e,t,n,{...r,...s.current()});return l&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),a;function c(f){return f+o}}function XP(){return[A2(),K2(),J2(),BP(),HP()]}function qP(e){return{extensions:[T2(),X2(e),Y2(),UP(e),VP()]}}const QP={tokenize:nA,partial:!0},pg={tokenize:rA,partial:!0},hg={tokenize:iA,partial:!0},mg={tokenize:lA,partial:!0},JP={tokenize:oA,partial:!0},gg={name:"wwwAutolink",tokenize:eA,previous:_g},Cg={name:"protocolAutolink",tokenize:tA,previous:Sg},tn={name:"emailAutolink",tokenize:ZP,previous:yg},jt={};function YP(){return{text:jt}}let Mn=48;for(;Mn<123;)jt[Mn]=tn,Mn++,Mn===58?Mn=65:Mn===91&&(Mn=97);jt[43]=tn;jt[45]=tn;jt[46]=tn;jt[95]=tn;jt[72]=[tn,Cg];jt[104]=[tn,Cg];jt[87]=[tn,gg];jt[119]=[tn,gg];function ZP(e,t,n){const r=this;let i,l;return o;function o(d){return!Fu(d)||!yg.call(r,r.previous)||rd(r.events)?n(d):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(d))}function s(d){return Fu(d)?(e.consume(d),s):d===64?(e.consume(d),a):n(d)}function a(d){return d===46?e.check(JP,f,c)(d):d===45||d===95||He(d)?(l=!0,e.consume(d),a):f(d)}function c(d){return e.consume(d),i=!0,a}function f(d){return l&&i&&Xe(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(d)):n(d)}}function eA(e,t,n){const r=this;return i;function i(o){return o!==87&&o!==119||!_g.call(r,r.previous)||rd(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(QP,e.attempt(pg,e.attempt(hg,l),n),n)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function tA(e,t,n){const r=this;let i="",l=!1;return o;function o(d){return(d===72||d===104)&&Sg.call(r,r.previous)&&!rd(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(d),e.consume(d),s):n(d)}function s(d){if(Xe(d)&&i.length<5)return i+=String.fromCodePoint(d),e.consume(d),s;if(d===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(d),a}return n(d)}function a(d){return d===47?(e.consume(d),l?c:(l=!0,a)):n(d)}function c(d){return d===null||bo(d)||ue(d)||Xn(d)||ss(d)?n(d):e.attempt(pg,e.attempt(hg,f),n)(d)}function f(d){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(d)}}function nA(e,t,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),l):n(o)}function l(o){return o===null?n(o):t(o)}}function rA(e,t,n){let r,i,l;return o;function o(c){return c===46||c===95?e.check(mg,a,s)(c):c===null||ue(c)||Xn(c)||c!==45&&ss(c)?a(c):(l=!0,e.consume(c),o)}function s(c){return c===95?r=!0:(i=r,r=void 0),e.consume(c),o}function a(c){return i||r||!l?n(c):t(c)}}function iA(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(mg,t,l)(o):o===null||ue(o)||Xn(o)?t(o):(e.consume(o),i)}function l(o){return o===41&&r++,e.consume(o),i}}function lA(e,t,n){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),l):s===93?(e.consume(s),i):s===60||s===null||ue(s)||Xn(s)?t(s):n(s)}function i(s){return s===null||s===40||s===91||ue(s)||Xn(s)?t(s):r(s)}function l(s){return Xe(s)?o(s):n(s)}function o(s){return s===59?(e.consume(s),r):Xe(s)?(e.consume(s),o):n(s)}}function oA(e,t,n){return r;function r(l){return e.consume(l),i}function i(l){return He(l)?n(l):t(l)}}function _g(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ue(e)}function Sg(e){return!Xe(e)}function yg(e){return!(e===47||Fu(e))}function Fu(e){return e===43||e===45||e===46||e===95||He(e)}function rd(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const sA={tokenize:mA,partial:!0};function aA(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:fA,continuation:{tokenize:pA},exit:hA}},text:{91:{name:"gfmFootnoteCall",tokenize:dA},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:uA,resolveTo:cA}}}}function uA(e,t,n){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){o=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return s;function s(a){if(!o||!o._balanced)return n(a);const c=bt(r.sliceSerialize({start:o.end,end:r.now()}));return c.codePointAt(0)!==94||!l.includes(c.slice(1))?n(a):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),t(a))}}function cA(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},s=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",l,t],["enter",o,t],["exit",o,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...s),e}function dA(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return s;function s(d){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),a}function a(d){return d!==94?n(d):(e.enter("gfmFootnoteCallMarker"),e.consume(d),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(d){if(l>999||d===93&&!o||d===null||d===91||ue(d))return n(d);if(d===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(bt(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(d)}return ue(d)||(o=!0),l++,e.consume(d),d===92?f:c}function f(d){return d===91||d===92||d===93?(e.consume(d),l++,c):c(d)}}function fA(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,s;return a;function a(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(g)}function f(g){if(o>999||g===93&&!s||g===null||g===91||ue(g))return n(g);if(g===93){e.exit("chunkString");const S=e.exit("gfmFootnoteDefinitionLabelString");return l=bt(r.sliceSerialize(S)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return ue(g)||(s=!0),o++,e.consume(g),g===92?d:f}function d(g){return g===91||g===92||g===93?(e.consume(g),o++,f):f(g)}function p(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(l)||i.push(l),ie(e,h,"gfmFootnoteDefinitionWhitespace")):n(g)}function h(g){return t(g)}}function pA(e,t,n){return e.check(ul,t,e.attempt(sA,t,n))}function hA(e){e.exit("gfmFootnoteDefinition")}function mA(e,t,n){const r=this;return ie(e,i,"gfmFootnoteDefinitionIndent",5);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(l):n(l)}}function gA(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,s){let a=-1;for(;++a<o.length;)if(o[a][0]==="enter"&&o[a][1].type==="strikethroughSequenceTemporary"&&o[a][1]._close){let c=a;for(;c--;)if(o[c][0]==="exit"&&o[c][1].type==="strikethroughSequenceTemporary"&&o[c][1]._open&&o[a][1].end.offset-o[a][1].start.offset===o[c][1].end.offset-o[c][1].start.offset){o[a][1].type="strikethroughSequence",o[c][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[c][1].start),end:Object.assign({},o[a][1].end)},d={type:"strikethroughText",start:Object.assign({},o[c][1].end),end:Object.assign({},o[a][1].start)},p=[["enter",f,s],["enter",o[c][1],s],["exit",o[c][1],s],["enter",d,s]],h=s.parser.constructs.insideSpan.null;h&&ft(p,p.length,0,as(h,o.slice(c+1,a),s)),ft(p,p.length,0,[["exit",d,s],["enter",o[a][1],s],["exit",o[a][1],s],["exit",f,s]]),ft(o,c-1,a-c+3,p),a=c+p.length-2;break}}for(a=-1;++a<o.length;)o[a][1].type==="strikethroughSequenceTemporary"&&(o[a][1].type="data");return o}function l(o,s,a){const c=this.previous,f=this.events;let d=0;return p;function p(g){return c===126&&f[f.length-1][1].type!=="characterEscape"?a(g):(o.enter("strikethroughSequenceTemporary"),h(g))}function h(g){const S=Wr(c);if(g===126)return d>1?a(g):(o.consume(g),d++,h);if(d<2&&!n)return a(g);const x=o.exit("strikethroughSequenceTemporary"),m=Wr(g);return x._open=!m||m===2&&!!S,x._close=!S||S===2&&!!m,s(g)}}}class CA{constructor(){this.map=[]}add(t,n,r){_A(this,t,n,r)}consume(t){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const l of i)t.push(l);i=r.pop()}this.map.length=0}}function _A(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function SA(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function yA(){return{flow:{null:{name:"table",tokenize:xA,resolveAll:vA}}}}function xA(e,t,n){const r=this;let i=0,l=0,o;return s;function s(I){let F=r.events.length-1;for(;F>-1;){const ne=r.events[F][1].type;if(ne==="lineEnding"||ne==="linePrefix")F--;else break}const U=F>-1?r.events[F][1].type:null,Z=U==="tableHead"||U==="tableRow"?P:a;return Z===P&&r.parser.lazy[r.now().line]?n(I):Z(I)}function a(I){return e.enter("tableHead"),e.enter("tableRow"),c(I)}function c(I){return I===124||(o=!0,l+=1),f(I)}function f(I){return I===null?n(I):X(I)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(I),e.exit("lineEnding"),h):n(I):ee(I)?ie(e,f,"whitespace")(I):(l+=1,o&&(o=!1,i+=1),I===124?(e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),d(I)))}function d(I){return I===null||I===124||ue(I)?(e.exit("data"),f(I)):(e.consume(I),I===92?p:d)}function p(I){return I===92||I===124?(e.consume(I),d):d(I)}function h(I){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(I):(e.enter("tableDelimiterRow"),o=!1,ee(I)?ie(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):g(I))}function g(I){return I===45||I===58?x(I):I===124?(o=!0,e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),S):A(I)}function S(I){return ee(I)?ie(e,x,"whitespace")(I):x(I)}function x(I){return I===58?(l+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(I),e.exit("tableDelimiterMarker"),m):I===45?(l+=1,m(I)):I===null||X(I)?R(I):A(I)}function m(I){return I===45?(e.enter("tableDelimiterFiller"),C(I)):A(I)}function C(I){return I===45?(e.consume(I),C):I===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(I),e.exit("tableDelimiterMarker"),_):(e.exit("tableDelimiterFiller"),_(I))}function _(I){return ee(I)?ie(e,R,"whitespace")(I):R(I)}function R(I){return I===124?g(I):I===null||X(I)?!o||i!==l?A(I):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(I)):A(I)}function A(I){return n(I)}function P(I){return e.enter("tableRow"),w(I)}function w(I){return I===124?(e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),w):I===null||X(I)?(e.exit("tableRow"),t(I)):ee(I)?ie(e,w,"whitespace")(I):(e.enter("data"),N(I))}function N(I){return I===null||I===124||ue(I)?(e.exit("data"),w(I)):(e.consume(I),I===92?G:N)}function G(I){return I===92||I===124?(e.consume(I),N):N(I)}}function vA(e,t){let n=-1,r=!0,i=0,l=[0,0,0,0],o=[0,0,0,0],s=!1,a=0,c,f,d;const p=new CA;for(;++n<e.length;){const h=e[n],g=h[1];h[0]==="enter"?g.type==="tableHead"?(s=!1,a!==0&&(Ip(p,t,a,c,f),f=void 0,a=0),c={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(n,0,[["enter",c,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,d=void 0,l=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(n,0,[["enter",f,t]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],d=Ml(p,t,l,i,void 0,d),l=[0,0,0,0]),o[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(o[0]=o[1],d=Ml(p,t,l,i,void 0,d)),l=o,o=[l[1],n,0,0])):g.type==="tableHead"?(s=!0,a=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(a=n,l[1]!==0?(o[0]=o[1],d=Ml(p,t,l,i,n,d)):o[1]!==0&&(d=Ml(p,t,o,i,n,d)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=n)}for(a!==0&&Ip(p,t,a,c,f),p.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=SA(t.events,n))}return e}function Ml(e,t,n,r,i,l){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";n[0]!==0&&(l.end=Object.assign({},sr(t.events,n[0])),e.add(n[0],0,[["exit",l,t]]));const a=sr(t.events,n[1]);if(l={type:o,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",l,t]]),n[2]!==0){const c=sr(t.events,n[2]),f=sr(t.events,n[3]),d={type:s,start:Object.assign({},c),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",d,t]]),r!==2){const p=t.events[n[2]],h=t.events[n[3]];if(p[1].end=Object.assign({},h[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,S=n[3]-n[2]-1;e.add(g,S,[])}}e.add(n[3]+1,0,[["exit",d,t]])}return i!==void 0&&(l.end=Object.assign({},sr(t.events,i)),e.add(i,0,[["exit",l,t]]),l=void 0),l}function Ip(e,t,n,r,i){const l=[],o=sr(t.events,n);i&&(i.end=Object.assign({},o),l.push(["exit",i,t])),r.end=Object.assign({},o),l.push(["exit",r,t]),e.add(n+1,0,l)}function sr(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const RA={name:"tasklistCheck",tokenize:PA};function IA(){return{text:{91:RA}}}function PA(e,t,n){const r=this;return i;function i(a){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(a):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),l)}function l(a){return ue(a)?(e.enter("taskListCheckValueUnchecked"),e.consume(a),e.exit("taskListCheckValueUnchecked"),o):a===88||a===120?(e.enter("taskListCheckValueChecked"),e.consume(a),e.exit("taskListCheckValueChecked"),o):n(a)}function o(a){return a===93?(e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):n(a)}function s(a){return X(a)?t(a):ee(a)?e.check({tokenize:AA},t,n)(a):n(a)}}function AA(e,t,n){return ie(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function TA(e){return bm([YP(),aA(),gA(e),yA(),IA()])}const wA={};function kA(e){const t=this,n=e||wA,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(TA(n)),l.push(XP()),o.push(qP(n))}const bA="_root_jkcsp_1",EA="_h1_jkcsp_5",DA="_h2_jkcsp_14",MA="_h3_jkcsp_24",LA="_p_jkcsp_31",NA="_strong_jkcsp_38",OA="_inlineCode_jkcsp_43",BA="_ul_jkcsp_53",FA="_ol_jkcsp_60",jA="_li_jkcsp_67",zA="_blockquote_jkcsp_72",WA="_hr_jkcsp_83",GA="_codeWrap_jkcsp_90",UA="_codeHeader_jkcsp_98",HA="_dots_jkcsp_107",VA="_dot_jkcsp_107",$A="_langLabel_jkcsp_120",KA="_copyBtn_jkcsp_130",XA="_codeBody_jkcsp_142",qA="_lineNumbers_jkcsp_149",QA="_lineNum_jkcsp_149",JA="_codeContent_jkcsp_167",YA="_tableWrap_jkcsp_180",ZA="_table_jkcsp_180",eT="_th_jkcsp_228",tT="_td_jkcsp_241",se={root:bA,h1:EA,h2:DA,h3:MA,p:LA,strong:NA,inlineCode:OA,ul:BA,ol:FA,li:jA,blockquote:zA,hr:WA,codeWrap:GA,codeHeader:UA,dots:HA,dot:VA,langLabel:$A,copyBtn:KA,codeBody:XA,lineNumbers:qA,lineNum:QA,codeContent:JA,tableWrap:YA,table:ZA,th:eT,td:tT},nT=Object.assign({"../../content/01-intro/theory.md":Cy,"../../content/02-gpio/theory.md":_y,"../../content/03-rcc/theory.md":Sy,"../../content/04-nvic/theory.md":yy,"../../content/05-systick/theory.md":xy,"../../content/06-tim/theory.md":vy,"../../content/07-pwm/theory.md":Ry,"../../content/08-adc/theory.md":Iy,"../../content/09-uart/theory.md":Py,"../../content/10-dac/theory.md":Ay,"../../content/11-spi/theory.md":Ty,"../../content/12-i2c/theory.md":wy,"../../content/13-dma/theory.md":ky,"../../content/14-can/theory.md":by,"../../content/15-adv-tim/theory.md":Ey,"../../content/16-rtc/theory.md":Dy,"../../content/17-wdg/theory.md":My,"../../content/18-pwr/theory.md":Ly,"../../content/19-freertos/theory.md":Ny,"../../content/20-fs/theory.md":Oy,"../../content/21-debug/theory.md":By,"../../content/22-project/theory.md":Fy});function rT(e){const t=`../../content/${e}/theory.md`;return nT[t]||""}function ju(e){if(typeof e=="string")return e;if(typeof e=="number")return String(e);if(e&&typeof e=="object"&&"props"in e){const t=e.props;return Array.isArray(t.children)?t.children.map(ju).join(`
`):ju(t.children)}return""}function iT({language:e,children:t}){const[n,r]=T.useState(!1),l=ju(t).replace(/\n$/,""),o=l.split(`
`),s=T.useCallback(()=>{navigator.clipboard.writeText(l),r(!0),setTimeout(()=>r(!1),1500)},[l]);return u.jsxs("div",{className:se.codeWrap,children:[u.jsxs("div",{className:se.codeHeader,children:[u.jsxs("div",{className:se.dots,children:[u.jsx("span",{className:se.dot,style:{background:"var(--accent-red)"}}),u.jsx("span",{className:se.dot,style:{background:"var(--accent-amber)"}}),u.jsx("span",{className:se.dot,style:{background:"var(--accent-green)"}}),u.jsx("span",{className:se.langLabel,children:e||"text"})]}),u.jsx("button",{onClick:s,className:se.copyBtn,children:n?"COPIED":"COPY"})]}),u.jsxs("div",{className:se.codeBody,children:[u.jsx("div",{className:se.lineNumbers,children:o.map((a,c)=>u.jsx("div",{className:se.lineNum,children:c+1},c))}),u.jsx("code",{className:se.codeContent,children:l})]})]})}function lT(){const{moduleId:e}=ol(),[t,n]=T.useState("");return T.useEffect(()=>{const r=rT(e||"");n(r||`# 内容正在编写中

此模块的理论内容即将上线。`)},[e]),u.jsx("div",{className:se.root,children:u.jsx(g2,{remarkPlugins:[kA],components:{h1:({children:r})=>u.jsx("h1",{className:se.h1,children:r}),h2:({children:r})=>u.jsx("h2",{className:se.h2,children:r}),h3:({children:r})=>u.jsx("h3",{className:se.h3,children:r}),p:({children:r})=>u.jsx("p",{className:se.p,children:r}),strong:({children:r})=>u.jsx("strong",{className:se.strong,children:r}),code:({children:r,className:i})=>i?u.jsx("code",{children:r}):u.jsx("code",{className:se.inlineCode,children:r}),pre:({children:r,className:i})=>{const l=/language-(\w+)/.exec(i||""),o=l?l[1]:void 0;return u.jsx(iT,{language:o,children:r})},ul:({children:r})=>u.jsx("ul",{className:se.ul,children:r}),ol:({children:r})=>u.jsx("ol",{className:se.ol,children:r}),li:({children:r})=>u.jsx("li",{className:se.li,children:r}),blockquote:({children:r})=>u.jsx("blockquote",{className:se.blockquote,children:r}),table:({children:r})=>u.jsx("div",{className:se.tableWrap,children:u.jsx("table",{className:se.table,children:r})}),thead:({children:r})=>u.jsx("thead",{children:r}),th:({children:r})=>u.jsx("th",{className:se.th,children:r}),td:({children:r})=>u.jsx("td",{className:se.td,children:r}),tr:({children:r})=>u.jsx("tr",{children:r}),hr:()=>u.jsx("hr",{className:se.hr})},children:t})})}const oT="_badge_1vizk_1",sT="_sm_1vizk_12",aT="_md_1vizk_17",uT="_success_1vizk_22",cT="_warning_1vizk_28",dT="_error_1vizk_34",fT="_info_1vizk_40",pT="_neutral_1vizk_46",ra={badge:oT,sm:sT,md:aT,success:uT,warning:cT,error:dT,info:fT,neutral:pT};function hT({variant:e,size:t="sm",children:n}){const r=[ra.badge,ra[e],ra[t]].join(" ");return u.jsx("span",{className:r,children:n})}const mT="_header_hefl4_1",gT="_heading_hefl4_8",CT="_title_hefl4_16",_T="_desc_hefl4_23",ST="_hintSim_hefl4_37 _hint_hefl4_30",yT="_hintRead_hefl4_44 _hint_hefl4_30",Gt={header:mT,heading:gT,title:CT,desc:_T,hintSim:ST,hintRead:yT},xT={"01-intro":{title:"STM32 平台全貌",description:"STM32F103C8T6 采用 ARM Cortex-M3 内核，主频 72MHz，内置 64KB Flash、20KB SRAM。本平台模拟了 16+ 个外设的寄存器级行为。",hasSim:!1},"02-gpio":{title:"GPIO 引脚控制",description:"配置 CRL/CRH 寄存器选择模式，操作 ODR/IDR 读写电平，BSRR 原子置位/复位。切换到练习模式可在右侧引脚面板实时查看电平变化。",hasSim:!0},"03-rcc":{title:"时钟树配置",description:"HSI 8MHz → PLL ×9 = 72MHz SYSCLK，经 AHB/APB1/APB2 预分频器供给各外设。练习模式可查看寄存器面板验证时钟使能。",hasSim:!0},"04-nvic":{title:"中断向量控制器",description:"NVIC 管理 60+ 个可屏蔽中断，ISER/ICER 使能/关闭中断，IPR 设置 4bit 优先级。练习模式可触发模拟中断。",hasSim:!0},"05-systick":{title:"系统定时器",description:"24 位递减计数器，COUNTFLAG 在计数到 0 时置位。72MHz 下 LOAD=71999 实现 1ms 精确定时。",hasSim:!0},"06-tim":{title:"通用定时器",description:"PSC+ARR+CNT 组成时基单元，72MHz/(71+1)/(999+1)=1kHz 溢出频率。练习模式查看波形面板观察 PWM 输出。",hasSim:!0},"07-pwm":{title:"PWM 输出",description:"CCMR 设置 PWM 模式 1/2，CCER 使能输出，ARR 决定周期、CCR 决定占空比。CCR=250, ARR=999 → 25% 占空比。",hasSim:!0},"08-adc":{title:"模数转换",description:"12 位逐次逼近型 ADC，CR2 的 SWSTART 启动单次转换，EOC 标志通知转换完成。练习模式可调节输入电压观察转换结果。",hasSim:!0},"09-uart":{title:"串口通信",description:"1 起始位 + 8 数据位 + 1 停止位，BRR 设置波特率，TXE/RXNE 标志管理收发。练习模式可发送数据到串口面板。",hasSim:!0},"10-dac":{title:"数模转换",description:"12 位 DAC，DHR12R1 写入数字码，DOR1 输出对应模拟电压。Vout = DOR × Vref / 4096。",hasSim:!0},"11-spi":{title:"SPI 总线",description:"4 线全双工（MOSI/MISO/SCK/NSS），CPOL/CPHA 决定时钟极性和相位。主模式下写 DR 启动传输。",hasSim:!0},"12-i2c":{title:"I2C 总线",description:"2 线（SCL/SDA），主模式状态机：START → 地址 → 数据 → STOP。SR1 寄存器 SB/ADDR/TXE/RXNE 标志驱动状态迁移。",hasSim:!0},"13-dma":{title:"DMA 直接存储器访问",description:"7 通道传输引擎，CPAR/CMAR/CNDTR 配置源、目标、传输量。CIRC 模式自动循环填充缓冲区。",hasSim:!0},"14-can":{title:"CAN 总线",description:"bxCAN 支持 3 个发送邮箱 + 2 个接收 FIFO，标识符过滤、位时序 (TS1/TS2/SJW) 决定波特率。",hasSim:!0},"15-adv-tim":{title:"高级定时器",description:"TIM1 增加 BDTR 寄存器：MOE 主输出使能、死区时间插入、刹车功能。适用于电机控制、逆变器等应用。",hasSim:!0},"16-rtc":{title:"实时时钟",description:"32.768kHz LSE 驱动，PRL=0x7FFF → 1Hz。CNF=1 进入配置模式，RTOFF=1 表示写操作完成。",hasSim:!0},"17-wdg":{title:"看门狗",description:"IWDG 独立看门狗（启动后不可停止）+ WWDG 窗口看门狗（0x40 ≤ 计数器 < 窗口值才可刷新）。",hasSim:!0},"18-pwr":{title:"低功耗模式",description:"3 种模式：Sleep (CPU 停)、Stop (HSE/PLL 停，SRAM 保持)、Standby (全关，SRAM 丢失)。PWR_CR 的 LPDS/PDDS 选择模式。",hasSim:!0},"19-freertos":{title:"FreeRTOS 调度模拟",description:"4 种任务状态（Ready/Running/Blocked/Suspended），优先级抢占调度，队列 FIFO + 阻塞，计数信号量。",hasSim:!0},"20-fs":{title:"FatFS 文件系统",description:"f_mount → f_open → f_read/f_write → f_close 标准文件操作流程。SDIO 接口或 SPI 模式连接 SD 卡。",hasSim:!0},"21-debug":{title:"调试技术总览",description:"SWD 2 线调试（PA13/PA14）、串口 printf、HardFault 栈帧分析、逻辑分析仪。掌握这些是嵌入式开发的必修课。",hasSim:!1},"22-project":{title:"综合项目",description:"ADC + DMA + TIM + USART + GPIO 协同工作，实现完整的数据采集→传输→显示系统。建议先完成前面 21 个模块再学习本项目。",hasSim:!1}};function vT(){const{moduleId:e}=ol(),t=xT[e||""];return t?u.jsxs("div",{children:[u.jsxs("div",{className:Gt.header,children:[u.jsx("h2",{className:Gt.heading,children:"交互演示"}),t.hasSim&&u.jsx(hT,{variant:"warning",children:"SIM"})]}),u.jsx("h3",{className:Gt.title,children:t.title}),u.jsx("p",{className:Gt.desc,children:t.description}),t.hasSim?u.jsx("div",{className:Gt.hintSim,children:"点击左侧「练习」切换到仿真模式，编写 C 代码驱动外设，在右侧面板实时观察寄存器、波形、引脚状态。"}):u.jsx("div",{className:Gt.hintRead,children:"阅读上方理论内容，完成测验检验理解。"})]}):u.jsxs("div",{children:[u.jsx("div",{className:Gt.header,children:u.jsx("h2",{className:Gt.heading,children:"交互演示"})}),u.jsx("p",{className:Gt.desc,children:"此模块资料正在编写中"})]})}const RT="_track_kw6m2_1",IT="_fill_kw6m2_9",PT="_success_kw6m2_16",AT="_wrapper_kw6m2_18",TT="_label_kw6m2_24",ai={track:RT,fill:IT,default:"_default_kw6m2_15",success:PT,wrapper:AT,label:TT};function Gr({value:e,variant:t="default",showLabel:n=!1}){const r=Math.min(100,Math.max(0,e));return u.jsxs("div",{className:ai.wrapper,children:[u.jsx("div",{className:ai.track,children:u.jsx("div",{className:[ai.fill,ai[t]].join(" "),style:{width:`${r}%`}})}),n&&u.jsxs("span",{className:ai.label,children:[Math.round(r),"%"]})]})}const wT="_header_1cu65_1",kT="_headerLeft_1cu65_8",bT="_heading_1cu65_14",ET="_counter_1cu65_22",DT="_score_1cu65_31",MT="_question_1cu65_37",LT="_options_1cu65_45",NT="_option_1cu65_45",OT="_optionCorrect_1cu65_73 _option_1cu65_45",BT="_optionWrong_1cu65_82 _option_1cu65_45",FT="_optionDimmed_1cu65_91 _option_1cu65_45",jT="_optLetterCorrect_1cu65_111 _optLetter_1cu65_97",zT="_optLetterWrong_1cu65_117 _optLetter_1cu65_97",WT="_optLetterNormal_1cu65_123 _optLetter_1cu65_97",GT="_nextBtn_1cu65_129",UT="_resultWrap_1cu65_149",HT="_resultRadial_1cu65_153",VT="_resultScore_1cu65_159",$T="_retryBtn_1cu65_165",_e={header:wT,headerLeft:kT,heading:bT,counter:ET,score:DT,question:MT,options:LT,option:NT,optionCorrect:OT,optionWrong:BT,optionDimmed:FT,optLetterCorrect:jT,optLetterWrong:zT,optLetterNormal:WT,nextBtn:GT,resultWrap:UT,resultRadial:HT,resultScore:VT,retryBtn:$T},KT={"01-intro":[{question:"STM32 是基于哪个处理器内核的？",options:["ARM7","ARM Cortex-M","x86","RISC-V"],correct:1},{question:"HAL 库的全称是什么？",options:["High Application Layer","Hardware Abstraction Layer","High Access Library","Hardware Access Layer"],correct:1}],"02-gpio":[{question:"GPIO 推挽输出模式下，输出高电平时内部 MOSFET 的状态是？",options:["上管导通、下管截止","上管截止、下管导通","两管都导通","两管都截止"],correct:0},{question:"STM32F1 的 GPIO 端口配置低寄存器 (CRL) 控制哪几个引脚？",options:["PA0-PA7","PA8-PA15","PA0-PA15","PB0-PB7"],correct:0}],"03-rcc":[{question:"STM32F103 上电后默认使用哪个时钟源？",options:["外部晶振 HSE","内部 RC 振荡器 HSI (8MHz)","PLL 倍频输出","LSE 32.768kHz"],correct:1},{question:"PLL 将 HSI 倍频到 72MHz 时，PLLMUL 应配置为多少？",options:["×7","×8","×9","×16"],correct:2},{question:"APB2ENR 寄存器的 IOPAEN 位是哪一位？",options:["bit 0","bit 1","bit 2","bit 3"],correct:2},{question:"RCC_CR 寄存器中，PLLON 位写 1 后，硬件会自动做什么？",options:["立即切换到 PLL","自动置位 PLLRDY（PLL 稳定后）","复位芯片","关闭 HSI"],correct:1}],"04-nvic":[{question:"NVIC 的全称是什么？",options:["Non-Volatile Interface Controller","Nested Vectored Interrupt Controller","New Virtual Interrupt Circuit","Network Vector Interrupt Controller"],correct:1},{question:"NVIC ISER 寄存器的作用是什么？",options:["清除中断使能","设置中断使能","设置中断优先级","读取中断状态"],correct:1},{question:"向 ICER 寄存器某位写 1 的效果是什么？",options:["使能对应中断","关闭对应中断","设置优先级","触发软件中断"],correct:1},{question:"STM32F103 的 NVIC 支持多少级优先级？",options:["4 级","8 级","16 级","32 级"],correct:2}],"05-systick":[{question:"SysTick 定时器是几位的？",options:["16 位","24 位","32 位","8 位"],correct:1},{question:"SysTick VAL 计数到 0 的下一个周期会发生什么？",options:["定时器停止","COUNTFLAG 置位并从 LOAD 重装载","触发系统复位","VAL 保持为 0"],correct:1},{question:"COUNTFLAG 如何清零？",options:["向 CTRL 写 0","读 CTRL 寄存器","向 VAL 写任意值","等待下一个周期"],correct:1},{question:"72MHz 时钟下，SysTick 的 LOAD 值设为多少才能实现 1ms 定时？",options:["72000","71999","72000000","1000"],correct:1}],"06-tim":[{question:"TIM2 的时基单元由哪三个寄存器组成？",options:["CR1, SR, EGR","PSC, ARR, CNT","CCR1, CCR2, CCR3","DIER, SR, EGR"],correct:1},{question:"PSC=71, ARR=999, 时钟=72MHz 时，TIM2 的溢出频率是多少？",options:["72kHz","1kHz","10kHz","100Hz"],correct:1},{question:"TIM_SR 寄存器的 UIF 位如何清零？",options:["写 1 清零","写 0 清零","读 SR 自动清零","只能硬件清零"],correct:1},{question:"向 EGR 寄存器的 UG 位写 1 会触发什么？",options:["启动计数器","软件更新：CNT 归零并置 UIF","停止计数器","复位所有寄存器"],correct:1}],"07-pwm":[{question:"PWM 模式 1 (OCxM=110) 的输出规则是什么？",options:["CNT < CCR → 高电平","CNT > CCR → 高电平","CNT == CCR → 翻转","CNT == 0 → 翻转"],correct:0},{question:"CCMR1 寄存器控制哪两个通道？",options:["通道 1 和 2","通道 2 和 3","通道 3 和 4","通道 1 和 4"],correct:0},{question:"CCER 寄存器中 CC1E 位的作用是什么？",options:["设置通道 1 的极性","使能通道 1 的输出","使能通道 1 的捕获","清除通道 1 的标志"],correct:1},{question:"ARR=999, CCR1=250 时，PWM 模式 1 的占空比是多少？",options:["20%","25%","50%","75%"],correct:1}],"08-adc":[{question:"STM32F103 ADC 是多少位精度的？",options:["8 位","10 位","12 位","16 位"],correct:2},{question:"启动 ADC 转换需要写哪个寄存器的哪个位？",options:["CR1 的 SCAN 位","CR2 的 SWSTART 位","SR 的 EOC 位","CR2 的 ADON 位"],correct:1},{question:"ADC 转换完成时，哪个标志会被硬件置 1？",options:["AWD","EOC","STRT","ADON"],correct:1},{question:"连续转换模式由哪个位控制？",options:["CR2 的 ADON 位","CR2 的 SWSTART 位","CR2 的 CONT 位","CR1 的 SCAN 位"],correct:2}],"09-uart":[{question:"USART 异步通信中，一个完整的字节帧包含几位？",options:["8 位","9 位","10 位","11 位"],correct:2},{question:"TXE 标志位表示什么？",options:["接收完成","发送完成","发送数据寄存器空","接收数据寄存器非空"],correct:2},{question:"读 DR 寄存器会自动清零哪个标志？",options:["TXE","TC","RXNE","UE"],correct:2},{question:"USART 的波特率由哪个寄存器设置？",options:["SR","DR","CR1","BRR"],correct:3}],"10-dac":[{question:"STM32F103 DAC 是多少位精度的？",options:["8 位","10 位","12 位","16 位"],correct:2},{question:"DAC 输出电压范围是多少？",options:["0 ~ 1.8V","0 ~ 3.3V","0 ~ 5V","0 ~ 2.5V"],correct:1},{question:"向 DHR12R1 写入数据后，硬件会做什么？",options:["等待触发信号","自动传输到 DOR1 并更新输出","产生中断","清除 EN1 位"],correct:1},{question:"DHR12R1=2048, EN1=1 时，DAC 输出电压约为多少？",options:["0V","1.65V","2.5V","3.3V"],correct:1}],"11-spi":[{question:"SPI 全双工通信需要几根线？",options:["2 根","3 根","4 根","5 根"],correct:2},{question:"CPOL=0, CPHA=0 时，数据在哪个边沿采样？",options:["第 1 个下降沿","第 1 个上升沿","第 2 个上升沿","第 2 个下降沿"],correct:1},{question:"SPI 的 TXE 标志位在什么情况下置 1？",options:["发送完成","发送缓冲空","接收缓冲非空","总线忙"],correct:1},{question:"BR=0 时，SPI 时钟分频为多少？",options:["/1（不分频）","/2","/4","/8"],correct:1}],"12-i2c":[{question:"I2C 总线需要几根线？",options:["1 根","2 根","3 根","4 根"],correct:1},{question:"I2C 的 START 条件是什么？",options:["SCL 高时 SDA 下降","SCL 高时 SDA 上升","SCL 低时 SDA 下降","SCL 低时 SDA 上升"],correct:0},{question:"SB (Start Bit) 标志表示什么？",options:["停止条件已发送","起始条件已生成","地址已发送","字节传输完成"],correct:1},{question:"I2C 主机读取 DR 寄存器会自动清零哪个标志？",options:["TXE","BTF","RXNE","ADDR"],correct:2}],"13-dma":[{question:"DMA 传输完成后，CNDTR 的值是多少？",options:["保持不变","等于初始值","0","自动加 1"],correct:2},{question:"DMA 循环模式 (CIRC=1) 下，传输完成后会发生什么？",options:["通道自动禁用","CNDTR 自动重装载","产生复位信号","CPU 接管传输"],correct:1},{question:"STM32F103 DMA1 有多少个通道？",options:["5 个","6 个","7 个","8 个"],correct:2},{question:"DMA CCR 寄存器的 DIR 位为 0 时传输方向是什么？",options:["内存→外设","外设→内存","内存→内存","外设→外设"],correct:1}],"14-can":[{question:"STM32F103 的 bxCAN 有几个发送邮箱？",options:["1 个","2 个","3 个","4 个"],correct:2},{question:"CAN 总线进入初始化模式需要设置哪个寄存器的哪一位？",options:["MSR 的 INAK 位","MCR 的 INRQ 位","BTR 的 SILM 位","TSR 的 RQCP0 位"],correct:1},{question:"CAN 位时序中，TS1=3, TS2=2 时一个位包含多少个 tq？",options:["5","6","7","8"],correct:1},{question:"接收 FIFO 中 FMP 字段的含义是什么？",options:["FIFO 为空","FIFO 满标志","FIFO 中待处理的消息数","FIFO 溢出标志"],correct:2}],"15-adv-tim":[{question:"高级定时器的 BDTR 寄存器中，MOE 位的作用是什么？",options:["计数器使能","主输出使能","刹车使能","更新使能"],correct:1},{question:"死区时间（Dead-Time）的作用是什么？",options:["提高 PWM 频率","防止互补输出同时导通导致短路","增加输出电流","减少定时器功耗"],correct:1},{question:"刹车（Break）功能触发后，MOE 位会怎样？",options:["变为 1","变为 0","保持不变","自动翻转"],correct:1},{question:"高级定时器比通用定时器多了哪个寄存器？",options:["BDTR","ARR","PSC","CCR"],correct:0}],"16-rtc":[{question:"RTC 的 CNF 位在配置模式时必须为？",options:["1","0","由硬件决定","任意值"],correct:0},{question:"RTC 写 PRL/CNT 寄存器前必须做什么？",options:["清除 OWF","设置 CNF=1","设置 SECIE=1","等待 RSF=0"],correct:1},{question:"使用 32.768kHz LSE 时，PRL 应设为多少才能获得 1Hz？",options:["0x7FFF","0x8000","32768","65535"],correct:0},{question:"RTOFF 位为 1 表示什么？",options:["RTC 正在初始化","最后写操作已完成","配置模式中","计数器溢出"],correct:1}],"17-wdg":[{question:"IWDG 启动后能否软件停止？",options:["可以，向 KR 写 0x5555","可以，向 KR 写 0xEEEE","不能，只有复位才能停止","可以，清除 WDGA 位"],correct:2},{question:"向 IWDG KR 寄存器写入 0xAAAA 的作用是什么？",options:["解锁写保护","启动看门狗","重装载计数器（喂狗）","配置预分频"],correct:2},{question:"WWDG 的窗口机制中，当计数器值在什么范围时允许刷新？",options:["≥ 窗口值","< 0x40","0x40 ≤ 计数器 < 窗口值","任意值"],correct:2},{question:"WWDG 的 EWI 中断在计数器达到什么值时触发？",options:["0x7F","0x40","0x00","窗口值"],correct:1}],"18-pwr":[{question:"STM32F1 有几种低功耗模式？",options:["2 种","3 种","4 种","5 种"],correct:1},{question:"Standby 模式下 SRAM 数据会怎样？",options:["保持","部分保持","丢失","自动备份到 Flash"],correct:2},{question:"PWR CR 寄存器的 DBP 位为 1 表示什么？",options:["进入低功耗模式","解除备份域写保护","使能 PVD","清除 Standby 标志"],correct:1},{question:"Stop 模式和 Standby 模式的主要区别是？",options:["是否有唤醒功能","SRAM 是否保持","是否使用 PLL","是否有中断"],correct:1}],"19-freertos":[{question:"FreeRTOS 任务有几种状态？",options:["2 种","3 种","4 种","5 种"],correct:2},{question:"xQueueReceive 在队列为空且 timeout>0 时，任务会怎样？",options:["返回错误","进入 Blocked 状态","进入 Suspended 状态","立即切换"],correct:1},{question:"vTaskDelay(100) 的作用是什么？",options:["挂起任务 100ms","延时 100 个 Tick，任务进入 Blocked","删除任务","降低优先级"],correct:1},{question:"vTaskStartScheduler 调用后会发生什么？",options:["创建空闲任务","启动任务调度，选择最高优先级 Ready 任务运行","初始化所有外设","进入低功耗模式"],correct:1}],"20-fs":[{question:"FatFS 挂载文件系统的 API 是？",options:["f_open()","f_mount()","f_init()","f_attach()"],correct:1},{question:"f_open 写模式下，文件不存在时会？",options:["返回 FR_NO_FILE","自动创建新文件","返回 FR_DISK_ERR","触发 HardFault"],correct:1},{question:"f_close 的主要作用是什么？",options:["删除文件","确保数据完整写入并释放资源","重置文件指针","卸载文件系统"],correct:1},{question:"f_mount 未调用时执行 f_open 会返回什么？",options:["FR_OK (0)","FR_DISK_ERR (1)","FR_NOT_READY (3)","FR_NO_FILE (4)"],correct:2}],"21-debug":[{question:"SWD 调试需要几根线？",options:["1 根","2 根","3 根","4 根"],correct:1},{question:"HardFault 最常见的触发原因是什么？",options:["printf 打印太多","空指针访问","GPIO 翻转过快","SPI 速率过高"],correct:1},{question:"SWD 接口的时钟线是哪根引脚？",options:["PA13","PA14","PA15","PA0"],correct:1},{question:"串口调试中 printf 重定向需要重写哪个函数？",options:["main()","fputc()","printf()","USART1_IRQHandler()"],correct:1}],"22-project":[{question:"TIM2 触发 ADC 采样是通过什么信号？",options:["更新中断","TRGO (触发输出)","PWM 输出","输入捕获"],correct:1},{question:"DMA 传输 ADC 数据时，外设地址是什么？",options:["&ADC1->SR","&ADC1->DR","&ADC1->CR1","&ADC1->CR2"],correct:1},{question:"综合项目中 LED 的作用是什么？",options:["照明","指示程序运行状态","发射红外信号","提供时钟"],correct:1},{question:"DMA 循环模式 (CIRC=1) 的优势是什么？",options:["更低功耗","自动循环填充缓冲区，无需 CPU 干预","更快传输速度","更大的传输量"],correct:1}]};function XT({pct:e,size:t=80}){const n=(t-8)/2,r=2*Math.PI*n,i=r-e/100*r;return u.jsxs("svg",{width:t,height:t,children:[u.jsx("circle",{cx:t/2,cy:t/2,r:n,fill:"none",stroke:"var(--bg-raised)",strokeWidth:"6"}),u.jsx("circle",{cx:t/2,cy:t/2,r:n,fill:"none",stroke:e>=80?"var(--accent-green)":e>=50?"var(--accent-amber)":"var(--accent-red)",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:r,strokeDashoffset:i,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 600ms var(--ease-out)"}}),u.jsxs("text",{x:t/2,y:t/2,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-primary)",fontSize:"14",fontWeight:"700",fontFamily:"var(--font-sans)",children:[Math.round(e),"%"]})]})}function qT(){const{moduleId:e}=ol(),t=KT[e||""]||[],[n,r]=T.useState(0),[i,l]=T.useState(null),[o,s]=T.useState(!1),[a,c]=T.useState(0),[f,d]=T.useState(!1),p=sl(R=>R.setQuizScore);if(t.length===0)return u.jsxs("div",{children:[u.jsx("div",{className:_e.header,children:u.jsx("div",{className:_e.headerLeft,children:u.jsx("h2",{className:_e.heading,children:"知识测验"})})}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"var(--text-md)",margin:0},children:"此模块的测验正在编写中"})]});const h=t[n],g=Math.round(a/t.length*100),S=R=>{o||(l(R),s(!0),R===h.correct&&c(A=>A+1))},x=()=>{n<t.length-1?(r(R=>R+1),l(null),s(!1)):(d(!0),p(e||"",g))};if(f)return u.jsxs("div",{className:_e.resultWrap,children:[u.jsx("div",{className:_e.resultRadial,children:u.jsx(XT,{pct:g,size:80})}),u.jsx("h2",{style:{fontSize:18,fontWeight:600,color:g>=80?"var(--accent-green)":g>=50?"var(--accent-amber)":"var(--accent-red)",margin:"0 0 8px"},children:g>=80?"测验通过":g>=50?"继续努力":"需要复习"}),u.jsxs("p",{className:_e.resultScore,children:["得分 ",a,"/",t.length," (",g,"%)"]}),u.jsx(Gr,{value:g,variant:"success"}),u.jsx("div",{style:{marginTop:20},children:u.jsx("button",{onClick:()=>{r(0),l(null),s(!1),c(0),d(!1)},className:_e.retryBtn,children:"重新测验"})})]});const m=R=>o?R===h.correct?_e.optionCorrect:R===i&&R!==h.correct?_e.optionWrong:_e.optionDimmed:_e.option,C=R=>o?R===h.correct?_e.optLetterCorrect:R===i&&R!==h.correct?_e.optLetterWrong:_e.optLetterNormal:_e.optLetterNormal,_=R=>o&&R===h.correct?"✓":o&&R===i&&R!==h.correct?"✗":String.fromCharCode(65+R);return u.jsxs("div",{children:[u.jsxs("div",{className:_e.header,children:[u.jsxs("div",{className:_e.headerLeft,children:[u.jsx("h2",{className:_e.heading,children:"知识测验"}),u.jsxs("span",{className:_e.counter,children:[n+1,"/",t.length]})]}),u.jsxs("span",{className:_e.score,children:["得分 ",a]})]}),u.jsx(Gr,{value:(n+(o?1:0))/t.length*100,variant:"success"}),u.jsxs("div",{style:{marginTop:20},children:[u.jsx("p",{className:_e.question,children:h.question}),u.jsx("div",{className:_e.options,children:h.options.map((R,A)=>u.jsxs("button",{onClick:()=>S(A),disabled:o,className:m(A),children:[u.jsx("span",{className:C(A),children:_(A)}),R]},A))}),o&&u.jsx("button",{onClick:x,className:_e.nextBtn,children:n<t.length-1?"下一题":"查看结果"})]})]})}function Pp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function QT(e){if(Array.isArray(e))return e}function JT(e,t,n){return(t=iw(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YT(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,l,o,s=[],a=!0,c=!1;try{if(l=(n=n.call(e)).next,t!==0)for(;!(a=(r=l.call(n)).done)&&(s.push(r.value),s.length!==t);a=!0);}catch(f){c=!0,i=f}finally{try{if(!a&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}function ZT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ap(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ap(Object(n),!0).forEach(function(r){JT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ap(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ew(e,t){if(e==null)return{};var n,r,i=tw(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function tw(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function nw(e,t){return QT(e)||YT(e,t)||lw(e,t)||ZT()}function rw(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function iw(e){var t=rw(e,"string");return typeof t=="symbol"?t:t+""}function lw(e,t){if(e){if(typeof e=="string")return Pp(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pp(e,t):void 0}}function ow(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wp(Object(n),!0).forEach(function(r){ow(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,l){return l(i)},r)}}function _i(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return t.apply(n,[].concat(i,s))}}}function Lo(e){return{}.toString.call(e).includes("Object")}function aw(e){return!Object.keys(e).length}function Zi(e){return typeof e=="function"}function uw(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function cw(e,t){return Lo(t)||Rn("changeType"),Object.keys(t).some(function(n){return!uw(e,n)})&&Rn("changeField"),t}function dw(e){Zi(e)||Rn("selectorType")}function fw(e){Zi(e)||Lo(e)||Rn("handlerType"),Lo(e)&&Object.values(e).some(function(t){return!Zi(t)})&&Rn("handlersType")}function pw(e){e||Rn("initialIsRequired"),Lo(e)||Rn("initialType"),aw(e)&&Rn("initialContent")}function hw(e,t){throw new Error(e[t]||e.default)}var mw={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Rn=_i(hw)(mw),Ll={changes:cw,selector:dw,handler:fw,initial:pw};function gw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ll.initial(e),Ll.handler(t);var n={current:e},r=_i(Sw)(n,t),i=_i(_w)(n),l=_i(Ll.changes)(e),o=_i(Cw)(n);function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(f){return f};return Ll.selector(c),c(n.current)}function a(c){sw(r,i,l,o)(c)}return[s,a]}function Cw(e,t){return Zi(t)?t(e.current):t}function _w(e,t){return e.current=kp(kp({},e.current),t),t}function Sw(e,t,n){return Zi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var yw={create:gw},xw={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function vw(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return t.apply(n,[].concat(i,s))}}}function Rw(e){return{}.toString.call(e).includes("Object")}function Iw(e){return e||bp("configIsRequired"),Rw(e)||bp("configType"),e.urls?(Pw(),{paths:{vs:e.urls.monacoBase}}):e}function Pw(){console.warn(xg.deprecation)}function Aw(e,t){throw new Error(e[t]||e.default)}var xg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},bp=vw(Aw)(xg),Tw={config:Iw},ww=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(l,o){return o(l)},i)}};function vg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],vg(e[n],t[n]))}),Tp(Tp({},e),t)}var kw={type:"cancelation",msg:"operation is manually canceled"};function ia(e){var t=!1,n=new Promise(function(r,i){e.then(function(l){return t?i(kw):r(l)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var bw=["monaco"],Ew=yw.create({config:xw,isInitialized:!1,resolve:null,reject:null,monaco:null}),Rg=nw(Ew,2),dl=Rg[0],fs=Rg[1];function Dw(e){var t=Tw.config(e),n=t.monaco,r=ew(t,bw);fs(function(i){return{config:vg(i.config,r),monaco:n}})}function Mw(){var e=dl(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(fs({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ia(la);if(window.monaco&&window.monaco.editor)return Ig(window.monaco),e.resolve(window.monaco),ia(la);ww(Lw,Ow)(Bw)}return ia(la)}function Lw(e){return document.body.appendChild(e)}function Nw(e){var t=document.createElement("script");return e&&(t.src=e),t}function Ow(e){var t=dl(function(r){var i=r.config,l=r.reject;return{config:i,reject:l}}),n=Nw("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Bw(){var e=dl(function(n){var r=n.config,i=n.resolve,l=n.reject;return{config:r,resolve:i,reject:l}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Ig(r),e.resolve(r)},function(n){e.reject(n)})}function Ig(e){dl().monaco||fs({monaco:e})}function Fw(){return dl(function(e){var t=e.monaco;return t})}var la=new Promise(function(e,t){return fs({resolve:e,reject:t})}),Pg={config:Dw,init:Mw,__getMonacoInstance:Fw},jw={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},oa=jw,zw={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ww=zw;function Gw({children:e}){return Kt.createElement("div",{style:Ww.container},e)}var Uw=Gw,Hw=Uw;function Vw({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:l,wrapperProps:o}){return Kt.createElement("section",{style:{...oa.wrapper,width:e,height:t},...o},!n&&Kt.createElement(Hw,null,r),Kt.createElement("div",{ref:i,style:{...oa.fullWidth,...!n&&oa.hide},className:l}))}var $w=Vw,Ag=T.memo($w);function Kw(e){T.useEffect(e,[])}var Tg=Kw;function Xw(e,t,n=!0){let r=T.useRef(!0);T.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var ut=Xw;function Ei(){}function vr(e,t,n,r){return qw(e,r)||Qw(e,t,n,r)}function qw(e,t){return e.editor.getModel(wg(e,t))}function Qw(e,t,n,r){return e.editor.createModel(t,n,r?wg(e,r):void 0)}function wg(e,t){return e.Uri.parse(t)}function Jw({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:l,modifiedModelPath:o,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:a=!1,theme:c="light",loading:f="Loading...",options:d={},height:p="100%",width:h="100%",className:g,wrapperProps:S={},beforeMount:x=Ei,onMount:m=Ei}){let[C,_]=T.useState(!1),[R,A]=T.useState(!0),P=T.useRef(null),w=T.useRef(null),N=T.useRef(null),G=T.useRef(m),I=T.useRef(x),F=T.useRef(!1);Tg(()=>{let z=Pg.init();return z.then(q=>(w.current=q)&&A(!1)).catch(q=>(q==null?void 0:q.type)!=="cancelation"&&console.error("Monaco initialization: error:",q)),()=>P.current?ne():z.cancel()}),ut(()=>{if(P.current&&w.current){let z=P.current.getOriginalEditor(),q=vr(w.current,e||"",r||n||"text",l||"");q!==z.getModel()&&z.setModel(q)}},[l],C),ut(()=>{if(P.current&&w.current){let z=P.current.getModifiedEditor(),q=vr(w.current,t||"",i||n||"text",o||"");q!==z.getModel()&&z.setModel(q)}},[o],C),ut(()=>{let z=P.current.getModifiedEditor();z.getOption(w.current.editor.EditorOption.readOnly)?z.setValue(t||""):t!==z.getValue()&&(z.executeEdits("",[{range:z.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),z.pushUndoStop())},[t],C),ut(()=>{var z,q;(q=(z=P.current)==null?void 0:z.getModel())==null||q.original.setValue(e||"")},[e],C),ut(()=>{let{original:z,modified:q}=P.current.getModel();w.current.editor.setModelLanguage(z,r||n||"text"),w.current.editor.setModelLanguage(q,i||n||"text")},[n,r,i],C),ut(()=>{var z;(z=w.current)==null||z.editor.setTheme(c)},[c],C),ut(()=>{var z;(z=P.current)==null||z.updateOptions(d)},[d],C);let U=T.useCallback(()=>{var E;if(!w.current)return;I.current(w.current);let z=vr(w.current,e||"",r||n||"text",l||""),q=vr(w.current,t||"",i||n||"text",o||"");(E=P.current)==null||E.setModel({original:z,modified:q})},[n,t,i,e,r,l,o]),Z=T.useCallback(()=>{var z;!F.current&&N.current&&(P.current=w.current.editor.createDiffEditor(N.current,{automaticLayout:!0,...d}),U(),(z=w.current)==null||z.editor.setTheme(c),_(!0),F.current=!0)},[d,c,U]);T.useEffect(()=>{C&&G.current(P.current,w.current)},[C]),T.useEffect(()=>{!R&&!C&&Z()},[R,C,Z]);function ne(){var q,E,O,$;let z=(q=P.current)==null?void 0:q.getModel();s||((E=z==null?void 0:z.original)==null||E.dispose()),a||((O=z==null?void 0:z.modified)==null||O.dispose()),($=P.current)==null||$.dispose()}return Kt.createElement(Ag,{width:h,height:p,isEditorReady:C,loading:f,_ref:N,className:g,wrapperProps:S})}var Yw=Jw;T.memo(Yw);function Zw(e){let t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}var ek=Zw,Nl=new Map;function tk({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:l,theme:o="light",line:s,loading:a="Loading...",options:c={},overrideServices:f={},saveViewState:d=!0,keepCurrentModel:p=!1,width:h="100%",height:g="100%",className:S,wrapperProps:x={},beforeMount:m=Ei,onMount:C=Ei,onChange:_,onValidate:R=Ei}){let[A,P]=T.useState(!1),[w,N]=T.useState(!0),G=T.useRef(null),I=T.useRef(null),F=T.useRef(null),U=T.useRef(C),Z=T.useRef(m),ne=T.useRef(),z=T.useRef(r),q=ek(l),E=T.useRef(!1),O=T.useRef(!1);Tg(()=>{let V=Pg.init();return V.then(K=>(G.current=K)&&N(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>I.current?y():V.cancel()}),ut(()=>{var K,v,fe,De;let V=vr(G.current,e||r||"",t||i||"",l||n||"");V!==((K=I.current)==null?void 0:K.getModel())&&(d&&Nl.set(q,(v=I.current)==null?void 0:v.saveViewState()),(fe=I.current)==null||fe.setModel(V),d&&((De=I.current)==null||De.restoreViewState(Nl.get(l))))},[l],A),ut(()=>{var V;(V=I.current)==null||V.updateOptions(c)},[c],A),ut(()=>{!I.current||r===void 0||(I.current.getOption(G.current.editor.EditorOption.readOnly)?I.current.setValue(r):r!==I.current.getValue()&&(O.current=!0,I.current.executeEdits("",[{range:I.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),I.current.pushUndoStop(),O.current=!1))},[r],A),ut(()=>{var K,v;let V=(K=I.current)==null?void 0:K.getModel();V&&i&&((v=G.current)==null||v.editor.setModelLanguage(V,i))},[i],A),ut(()=>{var V;s!==void 0&&((V=I.current)==null||V.revealLine(s))},[s],A),ut(()=>{var V;(V=G.current)==null||V.editor.setTheme(o)},[o],A);let $=T.useCallback(()=>{var V;if(!(!F.current||!G.current)&&!E.current){Z.current(G.current);let K=l||n,v=vr(G.current,r||e||"",t||i||"",K||"");I.current=(V=G.current)==null?void 0:V.editor.create(F.current,{model:v,automaticLayout:!0,...c},f),d&&I.current.restoreViewState(Nl.get(K)),G.current.editor.setTheme(o),s!==void 0&&I.current.revealLine(s),P(!0),E.current=!0}},[e,t,n,r,i,l,c,f,d,o,s]);T.useEffect(()=>{A&&U.current(I.current,G.current)},[A]),T.useEffect(()=>{!w&&!A&&$()},[w,A,$]),z.current=r,T.useEffect(()=>{var V,K;A&&_&&((V=ne.current)==null||V.dispose(),ne.current=(K=I.current)==null?void 0:K.onDidChangeModelContent(v=>{O.current||_(I.current.getValue(),v)}))},[A,_]),T.useEffect(()=>{if(A){let V=G.current.editor.onDidChangeMarkers(K=>{var fe;let v=(fe=I.current.getModel())==null?void 0:fe.uri;if(v&&K.find(De=>De.path===v.path)){let De=G.current.editor.getModelMarkers({resource:v});R==null||R(De)}});return()=>{V==null||V.dispose()}}return()=>{}},[A,R]);function y(){var V,K;(V=ne.current)==null||V.dispose(),p?d&&Nl.set(l,I.current.saveViewState()):(K=I.current.getModel())==null||K.dispose(),I.current.dispose()}return Kt.createElement(Ag,{width:h,height:g,isEditorReady:A,loading:a,_ref:F,className:S,wrapperProps:x})}var nk=tk,rk=T.memo(nk),ik=rk;class M{constructor(t,n,r,i){D(this,"offset");D(this,"value");D(this,"resetValue");D(this,"fields");D(this,"onChange");this.offset=t,this.value=n,this.resetValue=n,this.fields=r,this.onChange=i}read(t){if(!t)return this.value;const n=this.fields[t];if(!n)throw new Error(`Unknown field: ${t}`);const[r,i]=n.bits,l=(1<<i-r+1)-1<<r;return(this.value&l)>>>r}write(t,n){const r=this.value;if(typeof t=="number")this.value=t>>>0;else if(typeof t=="string"){const i=this.fields[t];if(!i)throw new Error(`Unknown field: ${t}`);const[l,o]=i.bits,s=(1<<o-l+1)-1<<l;this.value=this.value&~s|(n<<l&s)>>>0}else for(const[i,l]of Object.entries(t)){const o=this.fields[i];if(!o)throw new Error(`Unknown field: ${i}`);const[s,a]=o.bits,c=(1<<a-s+1)-1<<s;this.value=this.value&~c|(l<<s&c)>>>0}if(this.onChange&&r!==this.value)for(const[i,l]of Object.entries(this.fields)){const o=this.extractField(r,l),s=this.extractField(this.value,l);o!==s&&this.onChange(i,o,s)}}reset(){this.value=this.resetValue}extractField(t,n){const[r,i]=n.bits,l=(1<<i-r+1)-1<<r;return(t&l)>>>r}}class lk{constructor(){D(this,"listeners",new Map)}on(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var r;return(r=this.listeners.get(t))==null?void 0:r.delete(n)}}emit(t,n){var r;(r=this.listeners.get(t))==null||r.forEach(i=>i(n));for(const[i,l]of this.listeners)i.includes("*")&&this.matchPattern(i,t)&&l.forEach(o=>o(n))}clear(){this.listeners.clear()}matchPattern(t,n){return new RegExp("^"+t.replace(/\*/g,"[^:]+")+"$").test(n)}}const to=new lk;class Ne{constructor(){D(this,"registers",new Map)}read(t){const n=this.registers.get(t);if(!n)throw new Error(`${this.name}: no register at offset 0x${t.toString(16)}`);return n.read()}write(t,n){const r=this.registers.get(t);if(!r)throw new Error(`${this.name}: no register at offset 0x${t.toString(16)}`);r.write(n)}reset(){this.registers.forEach(t=>t.reset())}emit(t,n){to.emit(t,n)}}const ok=e=>({bits:[e*4,e*4+1],desc:`Pin ${e} mode`}),sk=e=>({bits:[e*4+2,e*4+3],desc:`Pin ${e} configuration`});function Ep(e){const t=e?8:0,n={};for(let r=0;r<8;r++)n[`MODE${t+r}`]=ok(r),n[`CNF${t+r}`]=sk(r);return n}function Dp(e,t){const n={};for(let r=0;r<t;r++)n[`${e}${r}`]={bits:[r,r],desc:`${e} pin ${r}`};return n}function ak(e){return["input","output_10mhz","output_2mhz","output_50mhz"][e]??"input"}function uk(e,t){return e==="input"?t===0?"analog":t===1?"floating_input":"pull_up_down":t===0?"push_pull":t===1?"open_drain":t===2?"alt_push_pull":"alt_open_drain"}class sa extends Ne{constructor(n,r){super();D(this,"name");D(this,"baseAddress");D(this,"pinLevels",new Array(16).fill(!1));D(this,"port");this.name=`GPIO${n}`,this.port=n,this.baseAddress=r;const i=new M(0,1145324612,Ep(!1),()=>this.emitConfig()),l=new M(4,1145324612,Ep(!0),()=>this.emitConfig()),o=new M(8,0,Dp("IDR",16)),s=new M(12,0,Dp("ODR",16)),a=new M(16,0,{}),c=new M(20,0,{});this.registers.set(0,i),this.registers.set(4,l),this.registers.set(8,o),this.registers.set(12,s),this.registers.set(16,a),this.registers.set(20,c)}write(n,r){if(n===12)for(let i=0;i<16;i++)this.updatePin(i,!!(r&1<<i));else if(n===16)for(let i=0;i<16;i++)r&1<<i&&this.updatePin(i,!0),r&1<<i+16&&this.updatePin(i,!1);else if(n===20)for(let i=0;i<16;i++)r&1<<i&&this.updatePin(i,!1);super.write(n,r)}getPinState(n){const r=this.registers.get(n<8?0:4),i=ak(r.read(`MODE${n}`)),l=uk(i,r.read(`CNF${n}`));return{mode:i,config:l,level:this.pinLevels[n],number:n,port:this.port}}getAllPinStates(){return Array.from({length:16},(n,r)=>this.getPinState(r))}tick(){}updatePin(n,r){if(this.pinLevels[n]===r)return;if(this.pinLevels[n]=r,this.getPinState(n).mode==="input"){const l=this.registers.get(8),o=l.read();l.write(r?o|1<<n:o&~(1<<n))}this.emit(`gpio:${this.port}:${n}:change`,{pin:n,level:r})}emitConfig(){this.emit(`gpio:${this.port}:config`,this.getAllPinStates())}}class ck extends Ne{constructor(){super();D(this,"name","RCC");D(this,"baseAddress",1073876992);const n=new M(0,3,{HSION:{bits:[0,0],desc:"HSI enable"},HSIRDY:{bits:[1,1],desc:"HSI ready"},HSEON:{bits:[16,16],desc:"HSE enable"},HSERDY:{bits:[17,17],desc:"HSE ready"},PLLON:{bits:[24,24],desc:"PLL enable"},PLLRDY:{bits:[25,25],desc:"PLL ready"}}),r=new M(4,0,{SW:{bits:[0,1],desc:"System clock switch"},SWS:{bits:[2,3],desc:"System clock status"},HPRE:{bits:[4,7],desc:"AHB prescaler"},PPRE1:{bits:[8,10],desc:"APB1 prescaler"},PPRE2:{bits:[11,13],desc:"APB2 prescaler"},PLLMUL:{bits:[18,21],desc:"PLL multiplier"}}),i=new M(24,0,{IOPAEN:{bits:[2,2],desc:"GPIOA clock enable"},IOPBEN:{bits:[3,3],desc:"GPIOB clock enable"},IOPCEN:{bits:[4,4],desc:"GPIOC clock enable"},ADC1EN:{bits:[9,9],desc:"ADC1 clock enable"},TIM1EN:{bits:[11,11],desc:"TIM1 clock enable"},SPI1EN:{bits:[12,12],desc:"SPI1 clock enable"},USART1EN:{bits:[14,14],desc:"USART1 clock enable"}}),l=new M(28,0,{TIM2EN:{bits:[0,0],desc:"TIM2 clock enable"},I2C1EN:{bits:[21,21],desc:"I2C1 clock enable"},CAN1EN:{bits:[25,25],desc:"CAN1 clock enable"},DACEN:{bits:[29,29],desc:"DAC clock enable"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(24,i),this.registers.set(28,l)}write(n,r){if(n===0&&r&1<<24&&(r|=1<<25),n===4){const i=r>>0&3;r=r&-13|i<<2}super.write(n,r)}getSystemClock(){const n=this.read(4),r=n>>2&3,i=n>>18&15;let l;return r===0||r===1?l=8e6:l=8e6*(i+2),l}isClocked(n){const r=this.read(24),i=this.read(28),l={GPIOA:4,GPIOB:8,GPIOC:16,ADC1:512,TIM1:2048,SPI1:4096,USART1:16384},o={TIM2:1,I2C1:1<<21,CAN1:1<<25,DAC:1<<29};return l[n]?!!(r&l[n]):o[n]?!!(i&o[n]):!1}tick(){}}class dk extends Ne{constructor(){super();D(this,"name","NVIC");D(this,"baseAddress",3758153984);D(this,"enabled",new Array(64).fill(!1));const n=new M(0,0,{},()=>this.syncFromISER(0)),r=new M(4,0,{},()=>this.syncFromISER(1)),i=new M(128,0,{}),l=new M(132,0,{});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(128,i),this.registers.set(132,l);for(let o=0;o<21;o++)this.registers.set(768+o*4,new M(768+o*4,0,{}))}syncFromISER(n){const i=this.registers.get(n===0?0:4).read(),l=n*32;for(let o=0;o<32;o++)this.enabled[l+o]=!!(i&1<<o)}write(n,r){if(n===128||n===132){const i=n===128?0:4,l=this.registers.get(i);l.write(l.read()&~r),this.syncFromISER(n===128?0:1);return}super.write(n,r),(n===0||n===4)&&this.syncFromISER(n===0?0:1)}isEnabled(n){return n<0||n>=64?!1:this.enabled[n]}tick(){}}const Ol=16777215;class fk extends Ne{constructor(){super();D(this,"name","SysTick");D(this,"baseAddress",3758153744);const n=new M(0,0,{ENABLE:{bits:[0,0],desc:"Enable counter"},TICKINT:{bits:[1,1],desc:"Enable interrupt on underflow"},CLKSOURCE:{bits:[2,2],desc:"0=external, 1=CPU clock"},COUNTFLAG:{bits:[16,16],desc:"Set on underflow, cleared on read"}}),r=new M(4,0,{RELOAD:{bits:[0,23],desc:"Reload value (24-bit)"}}),i=new M(8,0,{CURRENT:{bits:[0,23],desc:"Current counter value (24-bit)"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i)}read(n){const r=super.read(n);if(n===0){const i=this.registers.get(0);return i.read("COUNTFLAG")&&i.write({COUNTFLAG:0}),r}return r}write(n,r){if(n===8){super.write(n,r&Ol),this.registers.get(0).write({COUNTFLAG:0});return}if(n===4){super.write(n,r&Ol);return}super.write(n,r)}tick(){const n=this.registers.get(0);if(!(n.read()&1))return;const r=this.registers.get(8),i=this.registers.get(4).read()&Ol,l=r.read()&Ol;l===0?(r.write(i),n.write({COUNTFLAG:1}),n.read("TICKINT")&&this.emit("systick:overflow",null)):r.write(l-1)}}class kg extends Ne{constructor(n,r){super();D(this,"name");D(this,"baseAddress");D(this,"timerNumber");D(this,"prescalerCounter",0);D(this,"channels",[{output:!1,enabled:!1},{output:!1,enabled:!1},{output:!1,enabled:!1},{output:!1,enabled:!1}]);this.timerNumber=n,this.baseAddress=r,this.name=`TIM${n}`;const i=new M(0,0,{CEN:{bits:[0,0],desc:"Counter enable"},UDIS:{bits:[1,1],desc:"Update disable"},ARPE:{bits:[7,7],desc:"Auto-reload preload enable"}}),l=new M(12,0,{UIE:{bits:[0,0],desc:"Update interrupt enable"},CC1IE:{bits:[1,1],desc:"CC1 interrupt enable"},CC2IE:{bits:[2,2],desc:"CC2 interrupt enable"},CC3IE:{bits:[3,3],desc:"CC3 interrupt enable"},CC4IE:{bits:[4,4],desc:"CC4 interrupt enable"}}),o=new M(16,0,{UIF:{bits:[0,0],desc:"Update interrupt flag"},CC1IF:{bits:[1,1],desc:"CC1 flag"},CC2IF:{bits:[2,2],desc:"CC2 flag"},CC3IF:{bits:[3,3],desc:"CC3 flag"},CC4IF:{bits:[4,4],desc:"CC4 flag"}}),s=new M(20,0,{UG:{bits:[0,0],desc:"Update generation"}}),a=new M(24,0,{CC1S:{bits:[0,1],desc:"CC1 capture/compare selection"},OC1PE:{bits:[3,3],desc:"OC1 preload enable"},OC1M:{bits:[4,6],desc:"OC1 mode (110=PWM1, 111=PWM2)"},CC2S:{bits:[8,9],desc:"CC2 capture/compare selection"},OC2PE:{bits:[11,11],desc:"OC2 preload enable"},OC2M:{bits:[12,14],desc:"OC2 mode"}}),c=new M(28,0,{CC3S:{bits:[0,1],desc:"CC3 capture/compare selection"},OC3PE:{bits:[3,3],desc:"OC3 preload enable"},OC3M:{bits:[4,6],desc:"OC3 mode"},CC4S:{bits:[8,9],desc:"CC4 capture/compare selection"},OC4PE:{bits:[11,11],desc:"OC4 preload enable"},OC4M:{bits:[12,14],desc:"OC4 mode"}}),f=new M(32,0,{CC1E:{bits:[0,0],desc:"CC1 output enable"},CC1P:{bits:[1,1],desc:"CC1 polarity (0=active high)"},CC2E:{bits:[4,4],desc:"CC2 output enable"},CC2P:{bits:[5,5],desc:"CC2 polarity"},CC3E:{bits:[8,8],desc:"CC3 output enable"},CC3P:{bits:[9,9],desc:"CC3 polarity"},CC4E:{bits:[12,12],desc:"CC4 output enable"},CC4P:{bits:[13,13],desc:"CC4 polarity"}}),d=new M(36,0,{CNT:{bits:[0,15],desc:"Counter value"}}),p=new M(40,0,{PSC:{bits:[0,15],desc:"Prescaler value"}}),h=new M(44,0,{ARR:{bits:[0,15],desc:"Auto-reload value"}}),g={CCR:{bits:[0,15],desc:"Capture/Compare value"}},S=new M(52,0,g),x=new M(56,0,g),m=new M(60,0,g),C=new M(64,0,g);this.registers.set(0,i),this.registers.set(12,l),this.registers.set(16,o),this.registers.set(20,s),this.registers.set(24,a),this.registers.set(28,c),this.registers.set(32,f),this.registers.set(36,d),this.registers.set(40,p),this.registers.set(44,h),this.registers.set(52,S),this.registers.set(56,x),this.registers.set(60,m),this.registers.set(64,C)}write(n,r){if(n===16){const i=this.registers.get(16);i.write(i.read()&r);return}if(n===20){r&1&&(this.registers.get(36).write(0),this.registers.get(16).write({UIF:1}));return}super.write(n,r)}tick(){if(!this.registers.get(0).read("CEN"))return;const r=this.registers.get(40).read()&65535;if(this.prescalerCounter++,this.prescalerCounter<=r)return;this.prescalerCounter=0;const i=this.registers.get(36),l=this.registers.get(44).read()&65535,o=i.read()&65535;o>=l?(i.write(0),this.registers.get(16).write({UIF:1}),this.registers.get(12).read("UIE")&&this.emit(`tim:${this.timerNumber}:update`,{counter:0})):i.write(o+1),this.updateChannels()}updateChannels(){const n=this.registers.get(36).read()&65535,r=this.registers.get(32);for(let i=0;i<4;i++){const l=i<2?24:28,o=this.registers.get(l),s=i%2===0?0:8,a=o.read()>>s+4&7,c=52+i*4,f=this.registers.get(c).read()&65535,d=!!r.read(`CC${i+1}E`);this.channels[i].enabled=d,d&&a===6?this.channels[i].output=n<f:d?this.channels[i].output=n<f:this.channels[i].output=!1}}getCounter(){return this.registers.get(36).read()&65535}getFrequency(){const n=(this.registers.get(40).read()&65535)+1,r=(this.registers.get(44).read()&65535)+1;return Math.floor(72e6/(n*r))}getChannelState(n){const r=n-1;return{channel:n,output:this.channels[r].output,ccr:this.registers.get(52+r*4).read()&65535,enabled:this.channels[r].enabled}}getAllChannelStates(){return[1,2,3,4].map(n=>this.getChannelState(n))}}class pk extends Ne{constructor(){super();D(this,"name","DAC");D(this,"baseAddress",1073771520);const n=new M(0,0,{EN1:{bits:[0,0],desc:"DAC channel 1 enable"},TSEL1:{bits:[1,2],desc:"DAC channel 1 trigger selection"},TEN1:{bits:[3,3],desc:"DAC channel 1 trigger enable"}}),r=new M(8,0,{DACC1DHR:{bits:[0,11],desc:"DAC channel 1 12-bit right-aligned data"}}),i=new M(44,0,{DACC1DOR:{bits:[0,11],desc:"DAC channel 1 data output register"}});this.registers.set(0,n),this.registers.set(8,r),this.registers.set(44,i)}write(n,r){if(n===8){const i=r&4095;super.write(8,i),this.registers.get(44).write(i),this.emit("dac:output",{code:i,voltage:this.getVoltage()});return}super.write(n,r)}read(n){return n===44&&!this.registers.get(0).read("EN1")?0:super.read(n)}getVoltage(){if(!this.registers.get(0).read("EN1"))return 0;const r=this.registers.get(44).read()&4095;return parseFloat((r/4095*3.3).toFixed(3))}getOutputCode(){return this.registers.get(44).read()&4095}tick(){}}class hk extends Ne{constructor(){super();D(this,"name","ADC1");D(this,"baseAddress",1073816576);D(this,"analogValue",0);D(this,"conversionCyclesRemaining",0);const n=new M(0,0,{AWD:{bits:[0,0],desc:"Analog watchdog flag"},EOC:{bits:[1,1],desc:"End of conversion"},STRT:{bits:[4,4],desc:"Start flag"}}),r=new M(4,0,{AWDEN:{bits:[23,23],desc:"Analog watchdog enable"}}),i=new M(8,0,{ADON:{bits:[0,0],desc:"ADC enable"},CONT:{bits:[1,1],desc:"Continuous conversion"},SWSTART:{bits:[22,22],desc:"Start conversion (software)"}}),l=new M(12,0,{}),o=new M(16,0,{}),s=new M(40,0,{L:{bits:[20,23],desc:"Regular channel sequence length"}}),a=new M(52,0,{SQ1:{bits:[0,4],desc:"1st conversion in regular sequence"}}),c=new M(76,0,{DATA:{bits:[0,11],desc:"12-bit conversion result"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l),this.registers.set(16,o),this.registers.set(40,s),this.registers.set(52,a),this.registers.set(76,c)}setAnalogVoltage(n){this.analogValue=Math.max(0,Math.min(3.3,n))}getAnalogVoltage(){return this.analogValue}write(n,r){if(n===8){const i=!!(r&4194304);super.write(n,r),i&&this.registers.get(8).read("ADON")&&(this.conversionCyclesRemaining=7,this.registers.get(0).write("EOC",0));return}super.write(n,r)}tick(){if(this.conversionCyclesRemaining>0&&(this.conversionCyclesRemaining--,this.conversionCyclesRemaining===0)){const n=Math.round(this.analogValue/3.3*4095);this.registers.get(76).write(n&4095),this.registers.get(0).write("EOC",1),this.emit("adc:eoc",{code:n,voltage:this.analogValue}),this.registers.get(8).read("CONT")&&(this.conversionCyclesRemaining=7)}}getResult(){return this.registers.get(76).read()&4095}getVoltage(){const n=this.getResult();return parseFloat((n/4095*3.3).toFixed(3))}reset(){super.reset(),this.analogValue=0,this.conversionCyclesRemaining=0}}class mk extends Ne{constructor(){super();D(this,"name","USART1");D(this,"baseAddress",1073821696);D(this,"txBuffer",[]);D(this,"rxBuffer",[]);D(this,"txOutput","");D(this,"txBitCounter",0);D(this,"baudDivider",1);const n=new M(0,192,{TXE:{bits:[7,7],desc:"Transmit data register empty"},TC:{bits:[6,6],desc:"Transmission complete"},RXNE:{bits:[5,5],desc:"Read data register not empty"}}),r=new M(4,0,{DR:{bits:[0,8],desc:"Data value (8-bit)"}}),i=new M(8,0,{DIV_Mantissa:{bits:[4,15],desc:"USARTDIV mantissa"},DIV_Fraction:{bits:[0,3],desc:"USARTDIV fraction"}}),l=new M(12,0,{UE:{bits:[13,13],desc:"USART enable"},TE:{bits:[3,3],desc:"Transmitter enable"},RE:{bits:[2,2],desc:"Receiver enable"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l)}write(n,r){if(n===4){const i=this.registers.get(12).read("UE"),l=this.registers.get(12).read("TE");if(!i||!l)return;const o=r&255;if(this.txBuffer.push(o),this.registers.get(0).write("TXE",0),this.registers.get(0).write("TC",0),this.txBitCounter===0){const a=this.registers.get(8).read()>>4&4095;this.baudDivider=Math.max(1,a),this.txBitCounter=10*this.baudDivider}return}super.write(n,r)}tick(){if(!this.registers.get(12).read("UE"))return;if(this.registers.get(12).read("TE")&&this.txBitCounter>0&&(this.txBitCounter--,this.txBitCounter===0)){if(this.txBuffer.length>0){const l=this.txBuffer.shift();this.txOutput+=String.fromCharCode(l),this.txBuffer.length>0&&(this.txBitCounter=10*this.baudDivider)}this.registers.get(0).write("TXE",1),this.registers.get(0).write("TC",1),this.emit("usart:tx",{byte:this.txOutput.charCodeAt(this.txOutput.length-1)})}if(this.registers.get(12).read("RE")&&this.rxBuffer.length>0&&!this.registers.get(0).read("RXNE")){const o=this.rxBuffer.shift();this.registers.get(4).write(o),this.registers.get(0).write("RXNE",1),this.emit("usart:rx",{byte:o})}}setRXString(n){for(const r of n)this.rxBuffer.push(r.charCodeAt(0))}getTXString(){return this.txOutput}read(n){if(n===4){if(!this.registers.get(12).read("RE"))return 0;this.registers.get(0).write("RXNE",0)}return super.read(n)}reset(){super.reset(),this.registers.get(0).write(192),this.txBuffer=[],this.rxBuffer=[],this.txOutput="",this.txBitCounter=0,this.baudDivider=1}}class gk extends Ne{constructor(){super();D(this,"name","SPI1");D(this,"baseAddress",1073819648);D(this,"txByte",null);D(this,"rxByte",0);D(this,"tickCounter",0);D(this,"clockDivider",2);D(this,"originalByte",0);const n=new M(0,0,{CPHA:{bits:[0,0],desc:"Clock phase"},CPOL:{bits:[1,1],desc:"Clock polarity"},MSTR:{bits:[2,2],desc:"Master selection"},BR:{bits:[3,5],desc:"Baud rate control"},SPE:{bits:[6,6],desc:"SPI enable"}}),r=new M(4,0,{SSOE:{bits:[2,2],desc:"SS output enable"},RXNEIE:{bits:[6,6],desc:"RX buffer not empty interrupt enable"},TXEIE:{bits:[7,7],desc:"TX buffer empty interrupt enable"}}),i=new M(8,2,{RXNE:{bits:[0,0],desc:"Receive buffer not empty"},TXE:{bits:[1,1],desc:"Transmit buffer empty"},BSY:{bits:[7,7],desc:"Busy flag"}}),l=new M(12,0,{DR:{bits:[0,15],desc:"Data register"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l)}write(n,r){if(n===12){const i=this.registers.get(0).read("SPE"),l=this.registers.get(0).read("MSTR");if(!i||!l)return;this.originalByte=r&255,this.txByte=r&255,this.rxByte=0,this.tickCounter=0;const o=this.registers.get(0).read("BR");this.clockDivider=1<<o+1,this.registers.get(8).write("TXE",0),this.registers.get(8).write("BSY",1);return}super.write(n,r)}tick(){this.registers.get(0).read("SPE")&&this.txByte!==null&&(this.tickCounter++,this.tickCounter>=8*this.clockDivider&&(this.registers.get(12).write(this.rxByte),this.registers.get(8).write({TXE:1,BSY:0,RXNE:1}),this.emit("spi:transfer",{sent:this.originalByte,received:this.rxByte}),this.txByte=null))}getReceivedByte(){return this.registers.get(12).read("DR")&255}getMode(){const n=this.registers.get(0).read("CPOL"),r=this.registers.get(0).read("CPHA");return`CPOL=${n} CPHA=${r}`}reset(){this.txByte=null,this.rxByte=0,this.tickCounter=0,this.clockDivider=2,this.originalByte=0,super.reset(),this.registers.get(8).write(2)}}class Ck extends Ne{constructor(){super();D(this,"name","I2C1");D(this,"baseAddress",1073763328);D(this,"state","idle");D(this,"targetAddr",0);D(this,"isRead",!1);D(this,"tickCounter",0);D(this,"rxByte",0);const n=new M(0,0,{PE:{bits:[0,0],desc:"Peripheral enable"},START:{bits:[8,8],desc:"Generate start condition"},STOP:{bits:[9,9],desc:"Generate stop condition"},ACK:{bits:[10,10],desc:"Acknowledge enable"}}),r=new M(4,0,{FREQ:{bits:[0,5],desc:"Peripheral clock frequency (MHz)"}}),i=new M(20,0,{SB:{bits:[0,0],desc:"Start bit (master mode)"},ADDR:{bits:[1,1],desc:"Address sent"},BTF:{bits:[2,2],desc:"Byte transfer finished"},RXNE:{bits:[6,6],desc:"Receive buffer not empty"},TXE:{bits:[7,7],desc:"Transmit buffer empty"}}),l=new M(24,0,{MSL:{bits:[0,0],desc:"Master mode"},BUSY:{bits:[1,1],desc:"Bus busy"},TRA:{bits:[2,2],desc:"Transmitter/receiver (1=TX)"}}),o=new M(16,0,{DR:{bits:[0,7],desc:"8-bit data register"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(20,i),this.registers.set(24,l),this.registers.set(16,o)}write(n,r){if(n===0){const i=this.registers.get(0).read();super.write(0,r);const l=this.registers.get(0).read("PE"),o=r&256,s=r&512;l&&o&&!(i&256)&&(this.state="start",this.tickCounter=0,this.registers.get(24).write({MSL:1,BUSY:1}),this.registers.get(20).write("SB",1),this.emit("i2c:start",{})),l&&s&&(this.state="idle",this.tickCounter=0,this.registers.get(24).write({MSL:0,BUSY:0}),this.registers.get(0).write("STOP",0),this.emit("i2c:stop",{}));return}if(n===16){const i=this.registers.get(0).read("PE"),l=this.registers.get(24).read("MSL");if(!i||!l)return;const o=r&255;if(this.state==="start"){this.targetAddr=o>>1,this.isRead=!!(o&1),this.state="addressing",this.tickCounter=0;return}if(this.state==="tx"){super.write(16,o),this.registers.get(20).write("TXE",0),this.registers.get(20).write("BTF",0),this.tickCounter=0;return}return}super.write(n,r)}read(n){if(n===20){const r=super.read(20),i=this.registers.get(20);return r&1&&i.write("SB",0),r&2&&i.write("ADDR",0),r}if(n===24){const r=super.read(24),i=this.registers.get(20);return i.read("ADDR")&&i.write("ADDR",0),r}return n===16?(this.registers.get(20).write("RXNE",0),super.read(16)):super.read(n)}tick(){if(this.registers.get(0).read("PE")){if(this.tickCounter++,this.state==="addressing"&&this.tickCounter>=4&&(this.registers.get(20).write("ADDR",1),this.isRead?(this.registers.get(24).write("TRA",0),this.state="rx"):(this.registers.get(24).write("TRA",1),this.registers.get(20).write({TXE:1,BTF:1}),this.state="tx"),this.tickCounter=0),this.state==="tx"&&this.tickCounter>=4){const r=this.registers.get(16).read("DR");this.registers.get(20).write({TXE:1,BTF:1}),this.emit("i2c:tx",{addr:this.targetAddr,data:r}),this.tickCounter=0}if(this.state==="rx"){const r=this.registers.get(0).read("ACK"),i=this.registers.get(20).read("RXNE");r&&!i&&this.tickCounter>=2&&(this.rxByte=this.rxByte+1&255,this.registers.get(16).write(this.rxByte),this.registers.get(20).write("RXNE",1),this.emit("i2c:rx",{addr:this.targetAddr,data:this.rxByte}),this.tickCounter=0)}}}getState(){return this.state}getLastData(){return this.registers.get(16).read("DR")&255}reset(){this.state="idle",this.targetAddr=0,this.isRead=!1,this.tickCounter=0,this.rxByte=0,super.reset()}}class _k extends Ne{constructor(){super();D(this,"name","DMA1");D(this,"baseAddress",1073872896);D(this,"channels",[]);D(this,"tickCounters",new Array(7).fill(0));D(this,"initialCNDTR",new Array(7).fill(0));const n=new M(0,0,{}),r=new M(4,0,{});for(let i=0;i<7;i++)n.fields[`TCIF${i+1}`]={bits:[i*4,i*4],desc:`Channel ${i+1} Transfer Complete`},n.fields[`HTIF${i+1}`]={bits:[i*4+1,i*4+1],desc:`Channel ${i+1} Half Transfer`},n.fields[`TEIF${i+1}`]={bits:[i*4+2,i*4+2],desc:`Channel ${i+1} Transfer Error`},r.fields[`CTEIF${i+1}`]={bits:[i*4,i*4],desc:`Clear TC for CH${i+1}`};this.registers.set(0,n),this.registers.set(4,r);for(let i=0;i<7;i++){const l=8+i*20,o=12+i*20,s=16+i*20,a=20+i*20,c=new M(l,0,{EN:{bits:[0,0],desc:"Channel enable"},TCIE:{bits:[1,1],desc:"Transfer complete interrupt"},HTIE:{bits:[2,2],desc:"Half transfer interrupt"},TEIE:{bits:[3,3],desc:"Transfer error interrupt"},DIR:{bits:[4,4],desc:"Data transfer direction"},CIRC:{bits:[5,5],desc:"Circular mode"},PINC:{bits:[6,6],desc:"Peripheral increment"},MINC:{bits:[7,7],desc:"Memory increment"},PSIZE:{bits:[8,9],desc:"Peripheral size"},MSIZE:{bits:[10,11],desc:"Memory size"},PL:{bits:[12,13],desc:"Priority level"},MEM2MEM:{bits:[14,14],desc:"Memory to memory mode"}}),f=new M(o,0,{NDT:{bits:[0,15],desc:"Number of data to transfer"}}),d=new M(s,0,{}),p=new M(a,0,{});this.registers.set(l,c),this.registers.set(o,f),this.registers.set(s,d),this.registers.set(a,p),this.channels.push({ccr:c,cndtr:f,cpar:d,cmar:p})}}write(n,r){const i=this.channelForOffset(n);if(i!==null&&this.isChannelCCR(n)){const o=this.channels[i].ccr.read()&1;super.write(n,r);const s=r&1;!o&&s&&(this.initialCNDTR[i]=this.channels[i].cndtr.read("NDT"),this.tickCounters[i]=0);return}super.write(n,r)}read(n){return super.read(n)}tick(){for(let n=0;n<7;n++){if(!this.channels[n].ccr.read("EN")||(this.tickCounters[n]++,this.tickCounters[n]<4))continue;this.tickCounters[n]=0;const i=this.channels[n].cndtr.read("NDT");i<=1?(this.channels[n].cndtr.write("NDT",0),this.registers.get(0).write(`TCIF${n+1}`,1),this.emit("dma:tc",{channel:n+1}),this.channels[n].ccr.read("CIRC")?this.channels[n].cndtr.write("NDT",this.initialCNDTR[n]):this.channels[n].ccr.write("EN",0)):this.channels[n].cndtr.write("NDT",i-1)}}getChannelState(n){const r=this.channels[n].ccr,i=r.read("MEM2MEM")?"m2m":r.read("DIR")?"m2p":"p2m";return{channel:n+1,enabled:!!r.read("EN"),direction:i,circular:!!r.read("CIRC"),pinc:!!r.read("PINC"),minc:!!r.read("MINC"),psize:r.read("PSIZE"),msize:r.read("MSIZE"),remaining:this.channels[n].cndtr.read("NDT"),total:this.initialCNDTR[n],periphAddr:this.channels[n].cpar.read(),memAddr:this.channels[n].cmar.read()}}getAllChannelStates(){return Array.from({length:7},(n,r)=>this.getChannelState(r))}reset(){for(let n=0;n<7;n++)this.tickCounters[n]=0,this.initialCNDTR[n]=0;super.reset()}channelForOffset(n){const r=n-8;if(r<0||r%20!==0)return null;const i=r/20;return i<7?i:null}isChannelCCR(n){return this.channelForOffset(n)!==null&&(n-8)%20===0}}class Sk extends Ne{constructor(){super();D(this,"name","CAN1");D(this,"baseAddress",1073767424);D(this,"mode","sleep");D(this,"txMailboxes",[]);D(this,"rxFifo0",[]);D(this,"rxFifo1",[]);const n=new M(0,2,{INRQ:{bits:[0,0],desc:"Initialization request"},SLEEP:{bits:[1,1],desc:"Sleep mode request"},TXFP:{bits:[2,2],desc:"Transmit FIFO priority"},RFLM:{bits:[3,3],desc:"Receive FIFO locked mode"},NART:{bits:[4,4],desc:"No automatic retransmission"},AWUM:{bits:[5,5],desc:"Automatic wakeup mode"},ABOM:{bits:[6,6],desc:"Automatic bus-off management"},TTCM:{bits:[7,7],desc:"Time triggered communication mode"},RESET:{bits:[15,15],desc:"Software reset"},DBF:{bits:[16,16],desc:"Debug freeze"}}),r=new M(4,2,{INAK:{bits:[0,0],desc:"Initialization acknowledge"},SLAK:{bits:[1,1],desc:"Sleep acknowledge"},ERRI:{bits:[2,2],desc:"Error interrupt"},WKUI:{bits:[3,3],desc:"Wakeup interrupt"},TXM:{bits:[8,8],desc:"Transmit mode"},RXM:{bits:[9,9],desc:"Receive mode"},SAMP:{bits:[10,10],desc:"Last sample point (1=high)"}}),i=new M(8,469762048,{RQCP0:{bits:[0,0],desc:"Mailbox 0 request completed"},TXOK0:{bits:[1,1],desc:"Mailbox 0 transmission OK"},RQCP1:{bits:[8,8],desc:"Mailbox 1 request completed"},TXOK1:{bits:[9,9],desc:"Mailbox 1 transmission OK"},RQCP2:{bits:[16,16],desc:"Mailbox 2 request completed"},TXOK2:{bits:[17,17],desc:"Mailbox 2 transmission OK"},TME0:{bits:[26,26],desc:"Mailbox 0 empty"},TME1:{bits:[27,27],desc:"Mailbox 1 empty"},TME2:{bits:[28,28],desc:"Mailbox 2 empty"},CODE:{bits:[24,25],desc:"Mailbox code (0=pending,3=empty)"},LOW0:{bits:[2,3],desc:"Mailbox 0 lowest priority"}}),l=new M(12,0,{FMP0:{bits:[0,1],desc:"FIFO 0 messages pending"},FULL0:{bits:[3,3],desc:"FIFO 0 full"},FOVR0:{bits:[4,4],desc:"FIFO 0 overrun"},RFOM0:{bits:[5,5],desc:"Release FIFO 0 output mailbox"}}),o=new M(16,0,{FMP1:{bits:[0,1],desc:"FIFO 1 messages pending"},FULL1:{bits:[3,3],desc:"FIFO 1 full"},FOVR1:{bits:[4,4],desc:"FIFO 1 overrun"},RFOM1:{bits:[5,5],desc:"Release FIFO 1 output mailbox"}}),s=new M(20,0,{TMEIE:{bits:[0,0],desc:"Transmit mailbox empty interrupt enable"},FMPIE0:{bits:[1,1],desc:"FIFO 0 message pending interrupt enable"},FMPIE1:{bits:[2,2],desc:"FIFO 1 message pending interrupt enable"}}),a=new M(24,0,{EWGF:{bits:[0,0],desc:"Error warning flag"},EPVF:{bits:[1,1],desc:"Error passive flag"},BOFF:{bits:[2,2],desc:"Bus-off flag"},LEC:{bits:[4,6],desc:"Last error code"},TEC:{bits:[16,23],desc:"Transmit error counter"},REC:{bits:[24,31],desc:"Receive error counter"}}),c=new M(28,19070976,{BRP:{bits:[0,9],desc:"Baud rate prescaler"},TS1:{bits:[16,19],desc:"Time segment 1"},TS2:{bits:[20,22],desc:"Time segment 2"},SJW:{bits:[24,25],desc:"Resynchronization jump width"},LBKM:{bits:[30,30],desc:"Loop back mode"},SILM:{bits:[31,31],desc:"Silent mode"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l),this.registers.set(16,o),this.registers.set(20,s),this.registers.set(24,a),this.registers.set(28,c);for(let f=0;f<3;f++){const d=384+f*16,p=new M(d,0,{TXRQ:{bits:[0,0],desc:"Transmit mailbox request"},RTR:{bits:[1,1],desc:"Remote transmission request"},IDE:{bits:[2,2],desc:"Identifier extension"},EXID:{bits:[3,20],desc:"Extended identifier"},STID:{bits:[21,31],desc:"Standard identifier"}}),h=new M(d+4,0,{DLC:{bits:[0,3],desc:"Data length code"},TGT:{bits:[16,31],desc:"Transmit global time"}}),g=new M(d+8,0,{DATA0:{bits:[0,7],desc:"Data byte 0"},DATA1:{bits:[8,15],desc:"Data byte 1"},DATA2:{bits:[16,23],desc:"Data byte 2"},DATA3:{bits:[24,31],desc:"Data byte 3"}}),S=new M(d+12,0,{DATA4:{bits:[0,7],desc:"Data byte 4"},DATA5:{bits:[8,15],desc:"Data byte 5"},DATA6:{bits:[16,23],desc:"Data byte 6"},DATA7:{bits:[24,31],desc:"Data byte 7"}});this.registers.set(d,p),this.registers.set(d+4,h),this.registers.set(d+8,g),this.registers.set(d+12,S),this.txMailboxes.push({tir:p,tdtr:h,tdlr:g,tdhr:S,busy:!1})}}write(n,r){if(n===0){const l=this.registers.get(0).read("INRQ");super.write(0,r);const o=this.registers.get(0).read("INRQ");if(!l&&o?(this.mode="init",this.registers.get(4).write("INAK",1),this.registers.get(4).write("SLAK",0),this.emit("can:init",{})):l&&!o&&(this.mode="normal",this.registers.get(4).write("INAK",0),this.emit("can:normal",{})),r&32768){this.reset();return}return}if(n===12&&r&32){this.rxFifo0.shift(),this.updateRXFifoFlags(),this.emit("can:rxRelease",{fifo:0});return}if(n===16&&r&32){this.rxFifo1.shift(),this.updateRXFifoFlags(),this.emit("can:rxRelease",{fifo:1});return}const i=this.mailboxForOffset(n);if(i!==null&&n===i*16+384&&r&1){super.write(n,r),this.transmitMailbox(i);return}super.write(n,r)}read(n){return super.read(n)}tick(){}receiveMessage(n){if(this.mode==="normal"){if(this.rxFifo0.length>=3){this.registers.get(12).write("FOVR0",1);return}this.rxFifo0.push(n),this.updateRXFifoFlags(),this.emit("can:rx",{fifo:0,msg:n})}}transmitMailbox(n){const{tir:r,tdtr:i,tdlr:l,tdhr:o}=this.txMailboxes[n],s=!!r.read("IDE"),a=!!r.read("RTR"),c=i.read("DLC")&15,f=s?r.read("EXID"):r.read("STID"),d=[],p=l.read(),h=o.read();for(let x=0;x<Math.min(c,8);x++)x<4?d.push(p>>>x*8&255):d.push(h>>>(x-4)*8&255);const g={id:f,ide:s,rtr:a,dlc:c,data:d},S=this.registers.get(8);S.write(`RQCP${n}`,1),S.write(`TXOK${n}`,1),this.emit("can:tx",{mailbox:n,msg:g}),this.registers.get(28).read("LBKM")&&this.receiveMessage(g)}mailboxForOffset(n){if(n<384||n>=432)return null;const r=n-384,i=Math.floor(r/16);return i<3?i:null}updateRXFifoFlags(){const n=this.registers.get(12),r=this.registers.get(16);n.write("FMP0",this.rxFifo0.length&3),n.write("FULL0",this.rxFifo0.length>=3?1:0),r.write("FMP1",this.rxFifo1.length&3),r.write("FULL1",this.rxFifo1.length>=3?1:0)}getMode(){return this.mode}getBaudRate(){const n=this.registers.get(28),r=(n.read("BRP")||0)+1,i=(n.read("TS1")||0)+1,l=(n.read("TS2")||0)+1,o=i+l+1;return 36e6/(r*o)}getRXMessages(){return[...this.rxFifo0,...this.rxFifo1]}getTXMailboxStatus(){return this.txMailboxes.map((n,r)=>{const i=n.tir.read(),l=!!(this.registers.get(8).read()&1<<26+r*8),o=n.tdtr.read("DLC")&15,a=!!(i&4)?i>>>3&262143:i>>>21&2047,c=n.tdlr.read(),f=n.tdhr.read(),d=[];for(let p=0;p<Math.min(o,8);p++)p<4?d.push(c>>>p*8&255):d.push(f>>>(p-4)*8&255);return{mb:r,busy:!l,id:a,dlc:o,data:d}})}getBTRInfo(){const n=this.registers.get(28);return{brp:n.read("BRP")||0,ts1:n.read("TS1")||0,ts2:n.read("TS2")||0,sjw:n.read("SJW")||0,loopback:!!n.read("LBKM"),silent:!!n.read("SILM")}}reset(){this.mode="sleep",this.txMailboxes.forEach(n=>{n.busy=!1}),this.rxFifo0=[],this.rxFifo1=[],super.reset(),this.registers.get(0).write(2),this.registers.get(4).write(2),this.registers.get(8).write(469762048)}}class yk extends kg{constructor(){super(1,1073818624);D(this,"breakActive",!1);D(this,"complementaryChannels",[{output:!1,enabled:!1},{output:!1,enabled:!1},{output:!1,enabled:!1},{output:!1,enabled:!1}]);this.name="TIM1";const n=new M(4,0,{CCPC:{bits:[0,0],desc:"Capture/compare preloaded control"},CCUS:{bits:[2,2],desc:"Capture/compare control update selection"},CCDS:{bits:[3,3],desc:"Capture/compare DMA selection"},MMS:{bits:[4,6],desc:"Master mode selection"},TI1S:{bits:[7,7],desc:"TI1 selection"},OIS1:{bits:[8,8],desc:"Output idle state 1"},OIS1N:{bits:[9,9],desc:"Output idle state 1 complementary"},OIS2:{bits:[10,10],desc:"Output idle state 2"},OIS2N:{bits:[11,11],desc:"Output idle state 2 complementary"},OIS3:{bits:[12,12],desc:"Output idle state 3"},OIS3N:{bits:[13,13],desc:"Output idle state 3 complementary"}});this.registers.set(4,n);const r=new M(48,0,{REP:{bits:[0,7],desc:"Repetition counter value"}});this.registers.set(48,r);const i=new M(68,0,{DTG:{bits:[0,7],desc:"Dead-time generator (DTG[7:0] * t_DTS)"},LOCK:{bits:[8,9],desc:"Lock configuration (0-3)"},OSSI:{bits:[10,10],desc:"Off-state selection for Idle mode"},OSSR:{bits:[11,11],desc:"Off-state selection for Run mode"},BKE:{bits:[12,12],desc:"Break enable"},BKP:{bits:[13,13],desc:"Break polarity (0=active low)"},AOE:{bits:[14,14],desc:"Automatic output enable"},MOE:{bits:[15,15],desc:"Main output enable"}});this.registers.set(68,i);const l=this.registers.get(32).fields;Object.assign(l,{CC1NE:{bits:[2,2],desc:"CC1 complementary output enable"},CC1NP:{bits:[3,3],desc:"CC1 complementary output polarity"},CC2NE:{bits:[6,6],desc:"CC2 complementary output enable"},CC2NP:{bits:[7,7],desc:"CC2 complementary output polarity"},CC3NE:{bits:[10,10],desc:"CC3 complementary output enable"},CC3NP:{bits:[11,11],desc:"CC3 complementary output polarity"}})}write(n,r){if(n===68){const i=this.registers.get(68),l=i.read("MOE"),o=i.read("BKE");super.write(68,r);const s=i.read("MOE");o&&!l&&s&&(this.breakActive=!1,this.emit("tim1:breakRecover",{}));return}if(n===16){const i=this.registers.get(16);i.write(i.read()&r);return}if(n===20){r&1&&(this.registers.get(36).write(0),this.registers.get(16).write({UIF:1}));return}super.write(n,r)}triggerBreak(){const n=this.registers.get(68);if(!n.read("BKE"))return;this.breakActive=!0,n.write("MOE",0);const r=this.registers.get(4);for(let i=0;i<3;i++)this.complementaryChannels[i].output=!!r.read(`OIS${i+1}N`);this.emit("tim1:break",{})}getBreakActive(){return this.breakActive}getDeadTimeNs(){const r=this.registers.get(68).read("DTG")&255,i=1e9/72e6;return r<128?Math.round(r*i):Math.round((64+(r-128))*i*2)}getAllChannelStates(){const n=this.registers.get(32),r=this.registers.get(68).read("MOE");return[1,2,3,4].map(i=>{const l=super.getChannelState(i),s=i-1<3&&!!n.read(`CC${i}NE`),a=!!n.read(`CC${i}E`);return{...l,enabled:a,complementaryOutput:r?!l.output:!1,complementaryEnabled:r?s:!1,deadTimeNs:this.getDeadTimeNs()}})}getBDTRInfo(){const n=this.registers.get(68);return{moe:!!n.read("MOE"),breakEnable:!!n.read("BKE"),breakActive:this.breakActive,deadTimeNs:this.getDeadTimeNs(),dtg:n.read("DTG")&255,aoe:!!n.read("AOE"),ossi:!!n.read("OSSI"),ossr:!!n.read("OSSR"),lock:n.read("LOCK")&3}}reset(){this.breakActive=!1,this.complementaryChannels.forEach(n=>{n.output=!1,n.enabled=!1}),super.reset()}}class xk extends Ne{constructor(){super();D(this,"name","RTC");D(this,"baseAddress",1073752064);D(this,"prescalerCounter",0);D(this,"prescalerValue",32768);D(this,"configMode",!0);const n=new M(0,0,{SECIE:{bits:[0,0],desc:"Second interrupt enable"},ALRIE:{bits:[1,1],desc:"Alarm interrupt enable"},OWIE:{bits:[2,2],desc:"Overflow interrupt enable"}}),r=new M(4,0,{SECF:{bits:[0,0],desc:"Second flag"},ALRF:{bits:[1,1],desc:"Alarm flag"},OWF:{bits:[2,2],desc:"Overflow flag"},RSF:{bits:[3,3],desc:"Registers synchronized flag"},CNF:{bits:[4,4],desc:"Configuration flag"},RTOFF:{bits:[5,5],desc:"RTC operation OFF"}});r.write("CNF",1),r.write("RTOFF",0),r.write("RSF",0);const i=new M(8,0,{PRL:{bits:[0,3],desc:"Prescaler reload high bits [19:16]"}}),l=new M(12,32768,{PRL:{bits:[0,15],desc:"Prescaler reload low bits [15:0]"}}),o=new M(16,0,{DIV:{bits:[0,3],desc:"Divider high bits [19:16]"}}),s=new M(20,32768,{DIV:{bits:[0,15],desc:"Divider low bits [15:0]"}}),a=new M(24,0,{CNT:{bits:[0,3],desc:"Counter high bits [19:16]"}}),c=new M(28,0,{CNT:{bits:[0,15],desc:"Counter low bits [15:0]"}}),f=new M(32,65535,{ALR:{bits:[0,3],desc:"Alarm high bits [19:16]"}}),d=new M(36,65535,{ALR:{bits:[0,15],desc:"Alarm low bits [15:0]"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l),this.registers.set(16,o),this.registers.set(20,s),this.registers.set(24,a),this.registers.set(28,c),this.registers.set(32,f),this.registers.set(36,d),this.updateRTOFF()}write(n,r){if(n===4){const i=this.registers.get(4).read("CNF");super.write(4,r);const l=this.registers.get(4).read("CNF");if(!i&&l)this.configMode=!0,this.registers.get(4).write("RTOFF",0),this.registers.get(4).write("RSF",0);else if(i&&!l){this.configMode=!1,this.updateRTOFF(),this.registers.get(4).write("RSF",1);const o=this.read(8)&15,s=this.read(12)&65535;this.prescalerValue=o<<16|s,this.prescalerCounter=this.prescalerValue,this.setDIV(this.prescalerValue)}return}if(n>=8&&n<=36){if(!this.configMode)return;super.write(n,r);return}super.write(n,r)}tick(){if(this.configMode)return;if(this.prescalerCounter--,this.prescalerCounter>0){this.setDIV(this.prescalerCounter);return}this.prescalerCounter=this.prescalerValue,this.setDIV(this.prescalerCounter);const n=this.read(24)&15,r=this.read(28)&65535;let i=n<<16|r;i++;const l=this.read(8)&15,o=this.read(12)&65535,s=l<<16|o;i>s&&(i=0,this.registers.get(4).write("OWF",1),this.registers.get(0).read("OWIE")&&(this.emit("rtc:overflow",{counter:0}),this.emit("rtc:second",{})));const a=i&1048575;super.write(28,a&65535),super.write(24,a>>16&15)}getCounter(){const n=this.read(24)&15,r=this.read(28)&65535;return n<<16|r}getReload(){const n=this.read(8)&15,r=this.read(12)&65535;return n<<16|r}isConfigMode(){return this.configMode}getSeconds(){const n=this.getCounter(),r=this.getReload();return r===0?0:Math.floor(n/(r+1))}setDIV(n){super.write(20,n&65535),super.write(16,n>>16&15)}updateRTOFF(){this.registers.get(4).write("RTOFF",this.configMode?0:1)}reset(){this.configMode=!0,this.prescalerCounter=0,this.prescalerValue=32768,super.reset();const n=this.registers.get(4);n.write("CNF",1),n.write("RTOFF",0),n.write("RSF",0),this.registers.get(12).write(32768),this.registers.get(20).write(32768)}}const No=class No extends Ne{constructor(){super();D(this,"name","IWDG");D(this,"baseAddress",1073754112);D(this,"prescalerValue",4);D(this,"reloadValue",4095);D(this,"counter",4095);D(this,"started",!1);D(this,"unlockActive",!1);const n=new M(0,0,{}),r=new M(4,0,{PR:{bits:[0,2],desc:"Prescaler divider"}}),i=new M(8,4095,{RL:{bits:[0,11],desc:"Watchdog counter reload value"}}),l=new M(12,0,{PVU:{bits:[0,0],desc:"Prescaler value update"},RVU:{bits:[1,1],desc:"Reload value update"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i),this.registers.set(12,l)}write(n,r){if(n===0){r===52428?(this.started=!0,this.counter=this.reloadValue):r===43690?this.started&&(this.counter=this.reloadValue):r===21845&&(this.unlockActive=!0);return}if(n===4){if(!this.unlockActive)return;super.write(4,r&7),this.prescalerValue=No.PRESCALER_DIV[r&7],this.unlockActive=!1,this.registers.get(12).write("PVU",1);return}if(n===8){if(!this.unlockActive)return;super.write(8,r&4095),this.reloadValue=r&4095,this.started&&(this.counter=this.reloadValue),this.unlockActive=!1,this.registers.get(12).write("RVU",1);return}super.write(n,r)}tick(){this.started&&(this.registers.get(12).write("PVU",0),this.registers.get(12).write("RVU",0),this.counter--,this.counter<=0&&(this.counter=0,this.emit("iwdg:reset",{})))}getCounter(){return this.counter}getPrescalerDiv(){return this.prescalerValue}isStarted(){return this.started}reset(){this.prescalerValue=4,this.reloadValue=4095,this.counter=4095,this.started=!1,this.unlockActive=!1,super.reset()}};D(No,"PRESCALER_DIV",[4,8,16,32,64,128,256,256]);let zu=No;const Oo=class Oo extends Ne{constructor(){super();D(this,"name","WWDG");D(this,"baseAddress",1073753088);D(this,"counter",127);D(this,"windowValue",127);D(this,"prescalerExp",0);D(this,"started",!1);D(this,"tickCount",0);const n=new M(0,127,{T:{bits:[0,6],desc:"7-bit downcounter"},WDGA:{bits:[7,7],desc:"Activation bit"}}),r=new M(4,127,{W:{bits:[0,6],desc:"7-bit window value"},WDGTB:{bits:[7,8],desc:"Timer base (prescaler)"},EWI:{bits:[9,9],desc:"Early wakeup interrupt"}}),i=new M(8,0,{EWIF:{bits:[0,0],desc:"Early wakeup interrupt flag"}});this.registers.set(0,n),this.registers.set(4,r),this.registers.set(8,i)}write(n,r){if(n===0){super.write(0,r),r&128&&(this.started=!0,this.tickCount=0),this.counter=127,this.registers.get(0).write("T",this.counter);return}if(n===4){if(!this.started){super.write(4,r);const i=r>>7&3;this.prescalerExp=i,this.windowValue=r&127}return}if(n===8){r&1||super.write(8,0);return}super.write(n,r)}tick(){if(!this.started)return;const n=Oo.PRESCALER_MUL[this.prescalerExp];this.tickCount++,this.tickCount%n===0&&(this.counter--,this.registers.get(0).write("T",this.counter),this.counter===64&&(this.registers.get(8).write("EWIF",1),this.registers.get(4).read("EWI")&&this.emit("wwdg:early-wakeup",{counter:this.counter})),this.counter<=63&&(this.emit("wwdg:reset",{counter:this.counter}),this.counter=0))}getCounter(){return this.counter}getWindowValue(){return this.windowValue}getPrescaler(){return this.prescalerExp}isStarted(){return this.started}isRefreshAllowed(){return this.counter<this.windowValue&&this.counter>=64}reset(){this.counter=127,this.windowValue=127,this.prescalerExp=0,this.started=!1,this.tickCount=0,super.reset()}};D(Oo,"PRESCALER_MUL",[1,2,4,8]);let Wu=Oo;class vk extends Ne{constructor(){super();D(this,"name","PWR");D(this,"baseAddress",1073770496);D(this,"wufFlag",!1);D(this,"sbfFlag",!1);const n=new M(0,0,{LPDS:{bits:[0,0],desc:"Low-power deep sleep (0=Sleep,1=Stop)"},PDDS:{bits:[1,1],desc:"Power down deep sleep (0=Stop,1=Standby)"},CWUF:{bits:[2,2],desc:"Clear wakeup flag"},CSBF:{bits:[3,3],desc:"Clear standby flag"},PVDE:{bits:[4,4],desc:"PVD enable"},PLS:{bits:[5,7],desc:"PVD level selection"},DBP:{bits:[8,8],desc:"Disable backup domain write protection"}}),r=new M(4,0,{WUF:{bits:[0,0],desc:"Wakeup flag"},SBF:{bits:[1,1],desc:"Standby flag"},PVDO:{bits:[2,2],desc:"PVD output"},EWUP:{bits:[8,8],desc:"Enable WKUP pin"}});this.registers.set(0,n),this.registers.set(4,r)}write(n,r){n===0&&(r&4&&(this.wufFlag=!1),r&8&&(this.sbfFlag=!1)),super.write(n,r)}read(n){if(n===4){let r=super.read(n);this.wufFlag?r|=1:r&=-2,this.sbfFlag?r|=2:r&=-3;const i=this.read(0);if(i&16){const l=i>>5&7;3300>[2200,2300,2400,2500,2600,2700,2800,2900][l]?r&=-5:r|=4}return r}return super.read(n)}triggerWakeup(){this.wufFlag=!0,this.sbfFlag=!1}enterStandby(){this.sbfFlag=!0,this.wufFlag=!1}getMode(){const n=this.read(0),r=!!(n&1),i=!!(n&2);return r?i?"standby":"stop":"sleep"}isDBPEnabled(){return!!(this.read(0)&256)}tick(){}reset(){super.reset(),this.wufFlag=!1,this.sbfFlag=!1}}class Rk extends Ne{constructor(){super();D(this,"name","RTOS");D(this,"baseAddress",3758153728);D(this,"tickCount",0);D(this,"tasks",[]);D(this,"nextTaskId",1);D(this,"currentTaskId",0);D(this,"schedulerStarted",!1);D(this,"queues",[]);D(this,"semaphores",[]);D(this,"nextQueueId",1);D(this,"nextSemId",1);const n=new M(0,0,{VECTACTIVE:{bits:[0,8],desc:"Active vector"},PENDSVSET:{bits:[28,28],desc:"PendSV set"}});this.registers.set(0,n)}write(n,r){n===0&&r&1<<28&&this.switchContext(),super.write(n,r)}tick(){this.tickCount++;for(const n of this.tasks)n.state==="blocked"&&this.tickCount>=n.blockedUntil&&(n.state="ready");this.schedulerStarted&&this.selectRunningTask()}createTask(n,r){const i=this.nextTaskId++;return this.tasks.push({id:i,name:n,priority:r,state:"ready",blockedUntil:0,entry:n}),this.schedulerStarted&&this.selectRunningTask(),i}startScheduler(){this.schedulerStarted=!0,this.selectRunningTask()}taskDelay(n){const r=this.tasks.find(i=>i.id===this.currentTaskId);r&&(r.state="blocked",r.blockedUntil=this.tickCount+n),this.selectRunningTask()}taskSuspend(n){const r=this.tasks.find(i=>i.id===n);r&&r.state!=="suspended"&&(r.state="suspended"),this.currentTaskId===n&&this.selectRunningTask()}taskResume(n){const r=this.tasks.find(i=>i.id===n);r&&r.state==="suspended"&&(r.state="ready",this.selectRunningTask())}createQueue(n,r,i){const l=this.nextQueueId++;return this.queues.push({id:l,name:n,length:r,itemSize:i,items:[],waitingTasks:[]}),l}queueSend(n,r,i){const l=this.queues.find(o=>o.id===n);if(!l)return!1;if(l.items.length>=l.length){if(i===0)return!1;const o=this.tasks.find(s=>s.id===this.currentTaskId);return o&&i>0&&(o.state="blocked",o.blockedUntil=this.tickCount+i,l.waitingTasks.push(o.id),this.selectRunningTask()),!1}return l.items.push(r&255),this.unblockWaitingReceiveTasks(l),!0}queueReceive(n,r){const i=this.queues.find(o=>o.id===n);if(!i)return null;if(i.items.length===0){if(r===0)return null;const o=this.tasks.find(s=>s.id===this.currentTaskId);return o&&r>0&&(o.state="blocked",o.blockedUntil=this.tickCount+r,i.waitingTasks.push(o.id),this.selectRunningTask()),null}const l=i.items.shift();return this.unblockWaitingSendTasks(i),l}createSemaphore(n,r,i){const l=this.nextSemId++;return this.semaphores.push({id:l,name:n,count:i,maxCount:r,waitingTasks:[]}),l}semaphoreTake(n,r){const i=this.semaphores.find(l=>l.id===n);if(!i)return!1;if(i.count===0){if(r===0)return!1;const l=this.tasks.find(o=>o.id===this.currentTaskId);return l&&r>0&&(l.state="blocked",l.blockedUntil=this.tickCount+r,i.waitingTasks.push(l.id),this.selectRunningTask()),!1}return i.count--,!0}semaphoreGive(n){const r=this.semaphores.find(i=>i.id===n);if(r&&(r.count<r.maxCount&&r.count++,r.waitingTasks.length>0)){const i=r.waitingTasks.shift(),l=this.tasks.find(o=>o.id===i);l&&l.state==="blocked"&&(l.state="ready"),this.selectRunningTask()}}selectRunningTask(){const n=this.tasks.filter(r=>r.state==="ready"||r.state==="running").sort((r,i)=>r.priority-i.priority);if(n.length>0){this.currentTaskId=n[0].id,n[0].state="running";for(const r of this.tasks)r.id!==n[0].id&&r.state==="running"&&(r.state="ready")}else this.currentTaskId=0}switchContext(){this.selectRunningTask()}unblockWaitingReceiveTasks(n){if(n.waitingTasks.length>0){const r=n.waitingTasks.shift(),i=this.tasks.find(l=>l.id===r);i&&i.state==="blocked"&&(i.state="ready")}}unblockWaitingSendTasks(n){if(n.waitingTasks.length>0){const r=n.waitingTasks.shift(),i=this.tasks.find(l=>l.id===r);i&&i.state==="blocked"&&(i.state="ready")}}getTickCount(){return this.tickCount}getCurrentTaskId(){return this.currentTaskId}getTasks(){return this.tasks}getQueues(){return this.queues}getSemaphores(){return this.semaphores}isSchedulerStarted(){return this.schedulerStarted}reset(){super.reset(),this.tickCount=0,this.tasks=[],this.nextTaskId=1,this.currentTaskId=0,this.schedulerStarted=!1,this.queues=[],this.semaphores=[],this.nextQueueId=1,this.nextSemId=1}}class Ik extends Ne{constructor(){super();D(this,"name","FATFS");D(this,"baseAddress",1342177280);D(this,"mounted",!1);D(this,"files",[]);D(this,"openFile",null);D(this,"resultCode",0);D(this,"operationLog",[]);this.files.push({name:"test.txt",size:0,content:[]}),this.files.push({name:"data.bin",size:0,content:[]})}f_mount(){return this.mounted=!0,this.operationLog.push("f_mount: OK"),0}f_open(n,r){if(!this.mounted)return this.operationLog.push(`f_open(${n}): FR_NOT_READY`),3;const i=r&1?"w":"r";let l=this.files.find(o=>o.name===n);if(!l)if(i==="w")l={name:n,size:0,content:[]},this.files.push(l);else return this.operationLog.push(`f_open(${n}): FR_NO_FILE`),4;return i==="w"&&(l.content=[],l.size=0),this.openFile={name:n,cursor:0,mode:i},this.operationLog.push(`f_open(${n}, ${i}): OK`),0}f_read(n){if(!this.openFile||this.openFile.mode!=="r")return this.operationLog.push("f_read: FR_INVALID_OBJECT"),{result:9,data:[]};const r=this.files.find(o=>o.name===this.openFile.name);if(!r)return this.operationLog.push("f_read: FR_NO_FILE"),{result:4,data:[]};const i=Math.min(n,r.content.length-this.openFile.cursor),l=r.content.slice(this.openFile.cursor,this.openFile.cursor+i);return this.openFile.cursor+=i,this.operationLog.push(`f_read(${n}): ${i} bytes`),{result:0,data:l}}f_write(n){if(!this.openFile||this.openFile.mode!=="w")return this.operationLog.push("f_write: FR_INVALID_OBJECT"),{result:9,bytesWritten:0};const r=this.files.find(i=>i.name===this.openFile.name);return r?(r.content.push(...n),r.size=r.content.length,this.openFile.cursor=r.size,this.operationLog.push(`f_write(${n.length}): OK`),{result:0,bytesWritten:n.length}):(this.operationLog.push("f_write: FR_NO_FILE"),{result:4,bytesWritten:0})}f_close(){return this.openFile?(this.operationLog.push(`f_close(${this.openFile.name}): OK`),this.openFile=null,0):(this.operationLog.push("f_close: FR_INVALID_OBJECT"),9)}f_readdir(){return this.files.map(n=>`${n.name} (${n.size} bytes)`)}isMounted(){return this.mounted}getResultCode(){return this.resultCode}getOperationLog(){return this.operationLog}getOpenFilePath(){var n;return((n=this.openFile)==null?void 0:n.name)??null}getOpenFileCursor(){var n;return((n=this.openFile)==null?void 0:n.cursor)??0}getFiles(){return this.files.map(n=>({name:n.name,size:n.size}))}tick(){}reset(){super.reset(),this.mounted=!1,this.files=[{name:"test.txt",size:0,content:[]},{name:"data.bin",size:0,content:[]}],this.openFile=null,this.resultCode=0,this.operationLog=[]}}class Pk{constructor(){D(this,"peripherals",new Map);D(this,"steps",0);this.registerPeripheral(new ck),this.registerPeripheral(new dk),this.registerPeripheral(new fk),this.registerPeripheral(new kg(2,1073741824)),this.registerPeripheral(new pk),this.registerPeripheral(new hk),this.registerPeripheral(new mk),this.registerPeripheral(new gk),this.registerPeripheral(new Ck),this.registerPeripheral(new _k),this.registerPeripheral(new Sk),this.registerPeripheral(new yk),this.registerPeripheral(new xk),this.registerPeripheral(new zu),this.registerPeripheral(new Wu),this.registerPeripheral(new vk),this.registerPeripheral(new Rk),this.registerPeripheral(new Ik),this.registerPeripheral(new sa("A",1073809408)),this.registerPeripheral(new sa("B",1073810432)),this.registerPeripheral(new sa("C",1073811456))}registerPeripheral(t){this.peripherals.set(t.name,t)}getPeripheral(t){return this.peripherals.get(t)}read(t,n){const r=this.peripherals.get(t);if(!r)throw new Error(`Unknown peripheral: ${t}`);return r.read(n)}write(t,n,r){const i=this.peripherals.get(t);if(!i)throw new Error(`Unknown peripheral: ${t}`);i.write(n,r),to.emit("engine:write",{peripheral:t,offset:n,value:r})}tick(){this.steps++,this.peripherals.forEach(t=>t.tick()),to.emit("engine:tick",{steps:this.steps})}reset(){this.steps=0,this.peripherals.forEach(t=>t.reset()),to.emit("engine:reset",{})}getState(){const t={};return this.peripherals.forEach((n,r)=>{const i={};n.registers.forEach((l,o)=>{i[o]=l.read()}),t[r]={registers:i}}),{steps:this.steps,peripherals:t}}}const Q=new Pk,Ak={HAL_GPIO_WritePin:{peripheral:"GPIO",fn:e=>{e[0];const t=e[1];return{offset:12,value:e[2]?1<<t:0}}},HAL_GPIO_TogglePin:{peripheral:"GPIO",fn:e=>({offset:16,value:1<<e[1]})},HAL_RCC_OscConfig:{peripheral:"RCC",fn:e=>({offset:0,value:16777216})},HAL_RCC_ClockConfig:{peripheral:"RCC",fn:e=>({offset:4,value:1901570})},HAL_SYSTICK_Config:{peripheral:"SysTick",fn:e=>({offset:4,value:e[0]-1&16777215})},HAL_RTC_Init:{peripheral:"RTC",fn:e=>(e[0],{offset:4,value:16})},HAL_DAC_SetValue:{peripheral:"DAC",fn:e=>(e[0],e[1],e[2],{offset:8,value:e[3]&4095})},HAL_ADC_Start:{peripheral:"ADC1",fn:e=>({offset:8,value:1|1<<22})},HAL_UART_Transmit:{peripheral:"USART1",fn:e=>(e[0],e[1],e[2],{offset:4,value:e[3]&255})},HAL_SPI_Transmit:{peripheral:"SPI1",fn:e=>(e[0],e[1],e[2],{offset:12,value:e[3]&255})},HAL_I2C_Master_Transmit:{peripheral:"I2C1",fn:e=>{e[0];const t=e[1];e[2];const n=e[3];return e[4],[{offset:0,value:257},{offset:16,value:t<<1&254},{offset:16,value:n&255},{offset:0,value:513}]}},HAL_DMA_Start:{peripheral:"DMA1",fn:e=>{e[0];const t=e[1],n=e[2],r=e[3];return[{offset:8,value:161},{offset:12,value:r&65535},{offset:16,value:t&4294967295},{offset:20,value:n&4294967295}]}},HAL_CAN_Start:{peripheral:"CAN1",fn:e=>[{offset:0,value:1},{offset:0,value:0}]},HAL_TIM_PWM_Start:{peripheral:"TIM1",fn:e=>[{offset:68,value:32768},{offset:0,value:1}]},HAL_TIMEx_PWMN_Start:{peripheral:"TIM1",fn:e=>[{offset:68,value:32768},{offset:32,value:5},{offset:0,value:1}]},HAL_IWDG_Init:{peripheral:"IWDG",fn:e=>(e[0],{offset:0,value:21845})},HAL_WWDG_Init:{peripheral:"WWDG",fn:e=>(e[0],{offset:0,value:255})}};function ui(e){const t={1:"GPIOA",2:"GPIOB",3:"GPIOC",4:"GPIOD",5:"GPIOE",6:"GPIOF",7:"GPIOG"},n=e[0];return(n>=1073809408&&n<1073815552?String.fromCharCode(65+Math.floor((n-1073809408)/1024)):t[n])??"GPIOA"}const Gu={RCC_APB2PeriphClockCmd:{peripheral:"RCC",fn:e=>{const t=e[0];return[{offset:24,value:e[1]?t:0}]}},RCC_APB1PeriphClockCmd:{peripheral:"RCC",fn:e=>{const t=e[0];return[{offset:28,value:e[1]?t:0}]}},RCC_HSEConfig:{peripheral:"RCC",fn:e=>[{offset:0,value:e[0]}]},RCC_PLLConfig:{peripheral:"RCC",fn:e=>{const t=e[0],n=e[1];return[{offset:4,value:t|n<<18}]}},RCC_PLLCmd:{peripheral:"RCC",fn:e=>[{offset:0,value:e[0]?1<<24:0}]},RCC_SYSCLKConfig:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]}]},RCC_HCLKConfig:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]}]},RCC_PCLK1Config:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]}]},RCC_PCLK2Config:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]}]},RCC_ADCCLKConfig:{peripheral:"RCC",fn:e=>[{offset:4,value:e[0]<<14}]},GPIO_Init:{peripheral:"GPIO",fn:e=>{const t=ui(e),n=e[1],r=e[2],i=e[3],l=[],o=n&65280?4:0,s=n&65280?(n>>8&15)*4:(n&15)*4,a=(r|i)<<s;return l.push({offset:o,value:a}),l.push({peripheral:t,offset:o,value:a}),l}},GPIO_SetBits:{peripheral:"GPIO",fn:e=>{const t=ui(e),n=e[1];return[{peripheral:t,offset:16,value:n}]}},GPIO_ResetBits:{peripheral:"GPIO",fn:e=>{const t=ui(e),n=e[1];return[{peripheral:t,offset:20,value:n}]}},GPIO_WriteBit:{peripheral:"GPIO",fn:e=>{const t=ui(e),n=e[1];return e[2]?[{peripheral:t,offset:16,value:n}]:[{peripheral:t,offset:20,value:n}]}},GPIO_Write:{peripheral:"GPIO",fn:e=>{const t=ui(e),n=e[1];return[{peripheral:t,offset:12,value:n}]}},GPIO_ReadInputDataBit:{peripheral:"GPIO",fn:e=>[{offset:8,value:0}]},NVIC_PriorityGroupConfig:{peripheral:"NVIC",fn:e=>[{offset:0,value:100270080|e[0]}]},NVIC_Init:{peripheral:"NVIC",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:t*4+256,value:(n&15)<<4|r&15}]}},SysTick_CLKSourceConfig:{peripheral:"SysTick",fn:e=>[{offset:0,value:e[0]}]},SysTick_SetReload:{peripheral:"SysTick",fn:e=>[{offset:4,value:e[0]&16777215}]},SysTick_CounterCmd:{peripheral:"SysTick",fn:e=>[{offset:0,value:e[0]}]},SysTick_ITConfig:{peripheral:"SysTick",fn:e=>[{offset:0,value:e[0]?2:0}]},TIM_TimeBaseInit:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3];return[{offset:44,value:t&65535},{offset:40,value:n&65535},{offset:0,value:128|r<<4|i}]}},TIM_Cmd:{peripheral:"TIM2",fn:e=>[{offset:0,value:e[0]?1:0}]},TIM_OC1Init:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2],i=t<<4|8,l=n|r;return[{offset:24,value:i},{offset:32,value:l}]}},TIM_OC2Init:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:24,value:t<<12|2048},{offset:32,value:n<<4|r<<4}]}},TIM_OC3Init:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:28,value:t<<4|8},{offset:32,value:n<<8|r<<8}]}},TIM_OC4Init:{peripheral:"TIM2",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:28,value:t<<12|2048},{offset:32,value:n<<12|r<<12}]}},TIM_ITConfig:{peripheral:"TIM2",fn:e=>{const t=e[0];return[{offset:12,value:e[1]?t:0}]}},USART_Init:{peripheral:"USART1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],o=e[5],s=72e6/t&65535,a=n|i|8192;return[{offset:8,value:s},{offset:12,value:a},{offset:16,value:r},{offset:20,value:o},{offset:12,value:a|l&12}]}},USART_Cmd:{peripheral:"USART1",fn:e=>[{offset:12,value:e[0]?8192:0}]},USART_SendData:{peripheral:"USART1",fn:e=>[{offset:4,value:e[0]&255}]},USART_ReceiveData:{peripheral:"USART1",fn:e=>[{offset:4,value:0}]},USART_ITConfig:{peripheral:"USART1",fn:e=>{const t=e[0];return[{offset:12,value:e[1]?t:0}]}},ADC_Init:{peripheral:"ADC1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],o=t|(n?256:0),s=(r?2:0)|i|l&15;return[{offset:4,value:o},{offset:8,value:s}]}},ADC_Cmd:{peripheral:"ADC1",fn:e=>[{offset:8,value:e[0]?1:0}]},ADC_SoftwareStartConvCmd:{peripheral:"ADC1",fn:e=>[{offset:8,value:e[0]?1<<22:0}]},ADC_GetConversionValue:{peripheral:"ADC1",fn:e=>[{offset:76,value:0}]},DAC_Init:{peripheral:"DAC",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=t===1?44:20,o=n|r|(i?0:2);return[{offset:l,value:o}]}},DAC_Cmd:{peripheral:"DAC",fn:e=>{const t=e[0];return[{offset:0,value:e[1]?t===1?1:65536:0}]}},DAC_SetChannel1Data:{peripheral:"DAC",fn:e=>{const t=e[0],n=e[1];return[{offset:t===8||t===4?8:44,value:n&4095}]}},DAC_SetChannel2Data:{peripheral:"DAC",fn:e=>{const t=e[0],n=e[1];return[{offset:t===8||t===4?20:56,value:n&4095}]}},SPI_Init:{peripheral:"SPI1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],o=e[5],s=e[6],a=e[7];return[{offset:0,value:t|n|r|i|l|o|s|a}]}},SPI_Cmd:{peripheral:"SPI1",fn:e=>[{offset:0,value:e[0]?64:0}]},SPI_I2S_SendData:{peripheral:"SPI1",fn:e=>[{offset:12,value:e[0]&65535}]},SPI_I2S_ReceiveData:{peripheral:"SPI1",fn:e=>[{offset:12,value:0}]},I2C_Init:{peripheral:"I2C1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3];e[4];const l=e[5],o=36,s=o*5e6/l&4095;return[{offset:0,value:32768},{offset:8,value:r&1023},{offset:4,value:i?1024:0},{offset:12,value:s|n},{offset:28,value:o},{offset:32,value:80},{offset:0,value:t|32768},{offset:4,value:i?1024:0}]}},I2C_Cmd:{peripheral:"I2C1",fn:e=>[{offset:0,value:e[0]?1:0}]},I2C_SendData:{peripheral:"I2C1",fn:e=>[{offset:16,value:e[0]&255}]},I2C_AcknowledgeConfig:{peripheral:"I2C1",fn:e=>[{offset:4,value:e[0]?1024:0}]},DMA_Init:{peripheral:"DMA1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],o=e[5],s=e[6],a=e[7],c=e[8],f=8+(t-1)*20;return[{offset:0,value:0},{offset:f,value:n|r|i|l|o|s|a|c}]}},DMA_Cmd:{peripheral:"DMA1",fn:e=>{const t=e[0],n=e[1];return[{offset:8+(t-1)*20,value:n?1:0}]}},DMA_ITConfig:{peripheral:"DMA1",fn:e=>{const t=e[0],n=e[1],r=e[2];return[{offset:8+(t-1)*20,value:r?n:0}]}},CAN_Init:{peripheral:"CAN1",fn:e=>{const t=e[0],n=e[1];return[{offset:0,value:1},{offset:0,value:0},{offset:28,value:n|t}]}},CAN_Cmd:{peripheral:"CAN1",fn:e=>[{offset:0,value:e[0]?0:1}]},CAN_Transmit:{peripheral:"CAN1",fn:e=>{const t=e[0],n=e[1],r=e[2],i=e[3];return[{offset:388,value:n&15},{offset:392,value:r&4294967295},{offset:396,value:i&4294967295},{offset:384,value:t<<21|1}]}},CAN_Receive:{peripheral:"CAN1",fn:e=>[{offset:464,value:0}]},RTC_Init:{peripheral:"RTC",fn:e=>[{offset:4,value:16}]},RTC_SetCounter:{peripheral:"RTC",fn:e=>{const t=e[0];return[{offset:24,value:t>>16&65535},{offset:28,value:t&65535}]}},RTC_GetCounter:{peripheral:"RTC",fn:e=>[{offset:24,value:0}]},IWDG_WriteAccessCmd:{peripheral:"IWDG",fn:e=>[{offset:0,value:e[0]}]},IWDG_SetPrescaler:{peripheral:"IWDG",fn:e=>[{offset:4,value:e[0]&7}]},IWDG_SetReload:{peripheral:"IWDG",fn:e=>[{offset:8,value:e[0]&4095}]},IWDG_ReloadCounter:{peripheral:"IWDG",fn:e=>[{offset:0,value:43690}]},IWDG_Enable:{peripheral:"IWDG",fn:e=>[{offset:0,value:52428}]},WWDG_SetPrescaler:{peripheral:"WWDG",fn:e=>[{offset:4,value:e[0]&3}]},WWDG_SetWindowValue:{peripheral:"WWDG",fn:e=>[{offset:4,value:(e[0]&127)<<8}]},WWDG_Enable:{peripheral:"WWDG",fn:e=>[{offset:0,value:128|e[0]&127}]},WWDG_SetCounter:{peripheral:"WWDG",fn:e=>[{offset:0,value:e[0]&127}]},PWR_EnterSTOPMode:{peripheral:"PWR",fn:e=>{const t=e[0];return e[1],[{offset:0,value:1|t<<1},{offset:0,value:0}]}},PWR_EnterSTANDBYMode:{peripheral:"PWR",fn:e=>[{offset:0,value:6},{offset:0,value:0}]},PWR_WakeUpPinCmd:{peripheral:"PWR",fn:e=>[{offset:4,value:e[0]?256:0}]}};function bg(e){return e=e.trim(),e.startsWith("0x")||e.startsWith("0X")?parseInt(e,16):parseInt(e,10)}function Tk(e){const t=e.match(/^(\w+)\s*->\s*(\w+)\s*([|&^]?)=\s*(.+);\s*$/);if(t){const n=t[1],r=t[2];t[3];const i=t[4].trim(),l=n,o=kk(r),s=bk(i);return{type:"write",peripheral:l,offset:o,value:s,line:0,source:e}}return null}function wk(e){const t=e.match(/^(\w+)\s*\((.+)\);\s*$/);if(!t)return null;const n=t[1],r=t[2];if(n==="HAL_Delay"||n==="delay_ms"){const s=parseInt(r.trim(),10);return isNaN(s)?null:{type:"delay",ms:s,line:0,source:e}}const i=ar(r),l=Gu[n];if(l){const s=l.fn(i);if(s.length===0)return null;const a=s[0];return{type:"write",peripheral:a.peripheral??l.peripheral,offset:a.offset,value:a.value,line:0,source:e,_splResults:s.length>1?s:void 0}}const o=Ak[n];if(o){const s=o.fn(i);return Array.isArray(s)?{type:"write",peripheral:o.peripheral,offset:s[0].offset,value:s[0].value,line:0,source:e,_halResults:s.length>1?s:void 0}:{type:"write",peripheral:o.peripheral,offset:s.offset,value:s.value,line:0,source:e}}return null}function ar(e){const t=[];let n=0,r="";for(const i of e)i==="("?(n++,r+=i):i===")"?(n--,r+=i):i===","&&n===0?(t.push(r.trim()),r=""):r+=i;return r.trim()&&t.push(r.trim()),t.map(i=>{const l=i.trim();return l==="GPIOA"?1:l==="GPIOB"?2:l==="GPIOC"?3:l==="GPIOD"?4:l==="GPIOE"?5:l==="GPIOF"?6:l==="GPIOG"?7:l==="ADC1"?1:l==="ADC2"?2:l==="ADC3"?3:l==="TIM1"?1:l==="TIM2"?2:l==="TIM3"?3:l==="TIM4"?4:l==="USART1"?1:l==="USART2"?2:l==="USART3"?3:l==="UART4"?4:l==="SPI1"?1:l==="SPI2"?2:l==="SPI3"?3:l==="I2C1"?1:l==="I2C2"?2:l==="DMA1"?1:l==="DMA2"?2:l==="DMA1_Channel1"?1:l==="DMA1_Channel2"?2:l==="DMA1_Channel3"?3:l==="DMA1_Channel4"?4:l==="DMA1_Channel5"?5:l==="DMA1_Channel6"?6:l==="DMA1_Channel7"?7:l==="GPIO_PIN_SET"?1:l==="GPIO_PIN_RESET"||l==="GPIO_PIN_0"?0:l==="GPIO_PIN_1"?1:bg(l)})}function kk(e){return{CRL:0,CRH:4,IDR:8,ODR:12,BSRR:16,BRR:20,"RCC->CR":0,"RCC->CFGR":4,"RCC->APB2ENR":24,"RCC->APB1ENR":28,CR:0,CFGR:4,APB2ENR:24,APB1ENR:28,"SysTick->CTRL":0,"SysTick->LOAD":4,"SysTick->VAL":8,CTRL:0,LOAD:4,CR1:0,CR2:4,SMCR:8,DIER:12,SR:16,EGR:20,CNT:36,PSC:40,ARR:44,CCMR1:24,CCMR2:28,CCER:32,CCR1:52,CCR2:56,CCR3:60,CCR4:64,SR_ADC:0,CR1_ADC:4,CR2_ADC:8,DR:76,"ADC1->SR":0,"ADC1->CR1":4,"ADC1->CR2":8,"ADC1->DR":76,"DAC->CR":0,"DAC->DHR12R1":8,"DAC->DOR1":44,DHR12R1:8,DOR1:44,"USART1->SR":0,"USART1->DR":4,"USART1->BRR":8,"USART1->CR1":12,"SPI1->CR1":0,"SPI1->CR2":4,"SPI1->SR":8,"SPI1->DR":12,SR_SPI:8,DR_SPI:12,"I2C1->CR1":0,"I2C1->CR2":4,"I2C1->DR":16,"I2C1->SR1":20,"I2C1->SR2":24,"DMA1->ISR":0,"DMA1->IFCR":4,"DMA1_Channel1->CCR":8,"DMA1_Channel2->CCR":28,"DMA1_Channel3->CCR":48,"DMA1_Channel4->CCR":68,"DMA1_Channel5->CCR":88,"DMA1_Channel6->CCR":108,"DMA1_Channel7->CCR":128,"CAN1->MCR":0,"CAN1->MSR":4,"CAN1->TSR":8,"CAN1->RF0R":12,"CAN1->RF1R":16,"CAN1->IER":20,"CAN1->ESR":24,"CAN1->BTR":28,"CAN1->sTxMailBox[0].TIR":384,"CAN1->sTxMailBox[0].TDTR":388,"CAN1->sTxMailBox[0].TDLR":392,"CAN1->sTxMailBox[0].TDHR":396,"TIM1->CR1":0,"TIM1->CR2":4,"TIM1->DIER":12,"TIM1->SR":16,"TIM1->EGR":20,"TIM1->CCMR1":24,"TIM1->CCMR2":28,"TIM1->CCER":32,"TIM1->CNT":36,"TIM1->PSC":40,"TIM1->ARR":44,"TIM1->RCR":48,"TIM1->CCR1":52,"TIM1->CCR2":56,"TIM1->CCR3":60,"TIM1->CCR4":64,"TIM1->BDTR":68,"RTC->CRH":0,"RTC->CRL":4,"RTC->PRLH":8,"RTC->PRLL":12,"RTC->DIVH":16,"RTC->DIVL":20,"RTC->CNTH":24,"RTC->CNTL":28,"RTC->ALRH":32,"RTC->ALRL":36,"IWDG->KR":0,"IWDG->PR":4,"IWDG->RLR":8,"IWDG->SR":12,"WWDG->CR":0,"WWDG->CFR":4,"WWDG->SR":8,"PWR->CR":0,"PWR->CSR":4}[e]??0}function bk(e){e=e.trim();const t=e.match(/^(\w+)\s*&=\s*~\((.+)\)$/);if(t)return t[2],0;const n=e.match(/^(\w+)\s*\|=\s*\(?(.+)\)?$/);if(n)return Ge(n[2]),0;const r=e.match(/^(\w+)\s*\^=\s*\(?(.+)\)?$/);return r?(Ge(r[2]),0):Ge(e)}function Ge(e){if(e=e.trim(),e.startsWith("(")&&e.endsWith(")")){const o=e.slice(1,-1);let s=0,a=!0;for(const c of o)if(c==="("&&s++,c===")"&&s--,s<0){a=!1;break}if(a&&s===0)return Ge(o)}const t=e.match(/^(.+)\s*<<\s*(.+)$/);if(t){const o=Ge(t[1]),s=Ge(t[2]);return o<<s>>>0}const n=e.match(/^(.+)\s*>>\s*(.+)$/);if(n){const o=Ge(n[1]),s=Ge(n[2]);return o>>>s}const r=e.match(/^(.+)\s*\|\s*(.+)$/);if(r){const o=Ge(r[1]),s=Ge(r[2]);return(o|s)>>>0}const i=e.match(/^(.+)\s*&\s*(.+)$/);if(i){const o=Ge(i[1]),s=Ge(i[2]);return(o&s)>>>0}if(e.startsWith("~"))return~Ge(e.slice(1))>>>0;if(e.startsWith("(")&&e.endsWith(")"))return Ge(e.slice(1,-1));if(e.startsWith("0x")||e.startsWith("0X"))return bg(e);if(/^\d+$/.test(e))return parseInt(e,10);const l={RCC_APB2ENR_IOPAEN:4,RCC_APB2ENR_IOPBEN:8,RCC_APB2ENR_IOPCEN:16,RCC_APB2ENR_IOPDEN:32,RCC_APB2ENR_IOPEEN:64,RCC_APB2ENR_IOPFEN:128,RCC_APB2ENR_IOPGEN:256,RCC_APB2ENR_ADC1EN:512,RCC_APB2ENR_ADC2EN:1024,RCC_APB2ENR_TIM1EN:2048,RCC_APB2ENR_SPI1EN:4096,RCC_APB2ENR_USART1EN:16384,RCC_APB2ENR_ADC3EN:32768,RCC_APB1ENR_TIM2EN:1,RCC_APB1ENR_TIM3EN:2,RCC_APB1ENR_TIM4EN:4,RCC_APB1ENR_TIM5EN:8,RCC_APB1ENR_TIM6EN:16,RCC_APB1ENR_TIM7EN:32,RCC_APB1ENR_WWDGEN:2048,RCC_APB1ENR_SPI2EN:16384,RCC_APB1ENR_SPI3EN:32768,RCC_APB1ENR_USART2EN:1<<17,RCC_APB1ENR_USART3EN:1<<18,RCC_APB1ENR_UART4EN:1<<19,RCC_APB1ENR_UART5EN:1<<20,RCC_APB1ENR_I2C1EN:1<<21,RCC_APB1ENR_I2C2EN:1<<22,RCC_APB1ENR_CAN1EN:1<<25,RCC_APB1ENR_CAN2EN:1<<26,RCC_APB1ENR_BKPEN:1<<27,RCC_APB1ENR_PWREN:1<<28,RCC_APB1ENR_DACEN:1<<29,RCC_APB2Periph_GPIOA:4,RCC_APB2Periph_GPIOB:8,RCC_APB2Periph_GPIOC:16,RCC_APB2Periph_GPIOD:32,RCC_APB2Periph_GPIOE:64,RCC_APB2Periph_GPIOF:128,RCC_APB2Periph_GPIOG:256,RCC_APB2Periph_ADC1:512,RCC_APB2Periph_ADC2:1024,RCC_APB2Periph_TIM1:2048,RCC_APB2Periph_SPI1:4096,RCC_APB2Periph_USART1:16384,RCC_APB1Periph_TIM2:1,RCC_APB1Periph_TIM3:2,RCC_APB1Periph_TIM4:4,RCC_APB1Periph_TIM5:8,RCC_APB1Periph_SPI2:16384,RCC_APB1Periph_USART2:1<<17,RCC_APB1Periph_USART3:1<<18,RCC_APB1Periph_I2C1:1<<21,RCC_APB1Periph_I2C2:1<<22,RCC_APB1Periph_CAN1:1<<25,RCC_APB1Periph_DAC:1<<29,GPIO_Pin_0:1,GPIO_Pin_1:2,GPIO_Pin_2:4,GPIO_Pin_3:8,GPIO_Pin_4:16,GPIO_Pin_5:32,GPIO_Pin_6:64,GPIO_Pin_7:128,GPIO_Pin_8:256,GPIO_Pin_9:512,GPIO_Pin_10:1024,GPIO_Pin_11:2048,GPIO_Pin_12:4096,GPIO_Pin_13:8192,GPIO_Pin_14:16384,GPIO_Pin_15:32768,GPIO_Pin_All:65535,GPIO_Speed_10MHz:1,GPIO_Speed_2MHz:2,GPIO_Speed_50MHz:3,GPIO_Mode_AIN:0,GPIO_Mode_IN_FLOATING:4,GPIO_Mode_IPD:40,GPIO_Mode_IPU:72,GPIO_Mode_Out_OD:20,GPIO_Mode_Out_PP:16,GPIO_Mode_AF_OD:28,GPIO_Mode_AF_PP:24,Bit_SET:1,Bit_RESET:0,ENABLE:1,DISABLE:0,GPIO_PIN_0:1,GPIO_PIN_1:2,GPIO_PIN_SET:1,GPIO_PIN_RESET:0,APB2ENR:24,RCC_APB2ENR:24,RCC_CR_HSION:1,RCC_CR_PLLON:1<<24,RCC_CFGR_SW_PLL:2,RCC_CFGR_SW_HSI:0,RCC_CFGR_SW_HSE:1,RCC_HSE_OFF:0,RCC_HSE_ON:65536,RCC_HSE_Bypass:262144,RCC_PLLSource_HSI_Div2:0,RCC_PLLSource_HSE_Div1:65536,RCC_PLLSource_HSE_Div2:196608,RCC_PLLMul_2:0,RCC_PLLMul_3:262144,RCC_PLLMul_4:524288,RCC_PLLMul_5:786432,RCC_PLLMul_6:1048576,RCC_PLLMul_7:1310720,RCC_PLLMul_8:1572864,RCC_PLLMul_9:1835008,RCC_PLLMul_10:2097152,RCC_PLLMul_11:2359296,RCC_PLLMul_12:2621440,RCC_PLLMul_13:2883584,RCC_PLLMul_14:3145728,RCC_PLLMul_15:3407872,RCC_PLLMul_16:3670016,RCC_SYSCLKSource_HSI:0,RCC_SYSCLKSource_HSE:1,RCC_SYSCLKSource_PLLCLK:2,RCC_HCLK_Div1:0,RCC_HCLK_Div2:1024,RCC_HCLK_Div4:1280,RCC_HCLK_Div8:1536,RCC_HCLK_Div16:1792,RCC_PCLK1_Div1:0,RCC_PCLK1_Div2:1024,RCC_PCLK1_Div4:1280,RCC_PCLK1_Div8:1536,RCC_PCLK1_Div16:1792,RCC_PCLK2_Div1:0,RCC_PCLK2_Div2:2048,RCC_PCLK2_Div4:2560,RCC_PCLK2_Div8:3072,TIM_CR1_CEN:1,TIM_CR1_ARPE:128,TIM_OCMode_Timing:0,TIM_OCMode_Active:1,TIM_OCMode_Inactive:2,TIM_OCMode_Toggle:3,TIM_OCMode_PWM1:6,TIM_OCMode_PWM2:7,TIM_OCPolarity_High:0,TIM_OCPolarity_Low:2,TIM_OCNPolarity_High:0,TIM_OCNPolarity_Low:8,TIM_OutputState_Enable:1,TIM_OutputState_Disable:0,TIM_OutputNState_Enable:4,TIM_OutputNState_Disable:0,TIM_CounterMode_Up:0,TIM_CounterMode_Down:1,TIM_CKD_DIV1:0,TIM_CKD_DIV2:256,TIM_CKD_DIV4:512,ADC_CHANNEL_0:0,ADC_CHANNEL_1:1,ADC_CHANNEL_2:2,ADC_CHANNEL_3:3,ADC_Mode_Independent:0,ADC_Prescaler_Div2:0,ADC_Prescaler_Div4:16384,ADC_Prescaler_Div6:32768,ADC_Prescaler_Div8:49152,ADC_DataAlign_Right:0,ADC_DataAlign_Left:2048,ADC_SampleTime_1Cycles5:0,ADC_SampleTime_7Cycles5:1,ADC_SampleTime_13Cycles5:2,ADC_SampleTime_28Cycles5:3,ADC_SampleTime_41Cycles5:4,ADC_SampleTime_55Cycles5:5,ADC_SampleTime_71Cycles5:6,ADC_SampleTime_239Cycles5:7,DAC_ALIGN_12B_R:0,DAC_ALIGN_12B_L:4,DAC_ALIGN_8B_R:8,DAC_CHANNEL_1:0,DAC_CHANNEL_2:1,DAC_WaveGeneration_None:0,DAC_WaveGeneration_Noise:64,DAC_WaveGeneration_Triangle:128,DAC_Trigger_None:0,USART_Mode_Rx_Tx:12,USART_WordLength_8b:0,USART_WordLength_9b:4096,USART_StopBits_1:0,USART_StopBits_0_5:4096,USART_StopBits_2:8192,USART_Parity_No:0,USART_Parity_Even:1024,USART_Parity_Odd:1536,USART_HardwareFlowControl_None:0,USART_HardwareFlowControl_RTS:256,USART_HardwareFlowControl_CTS:512,USART_Mode_Rx:4,USART_Mode_Tx:8,USART_IT_RXNE:32,USART_IT_TXE:128,SPI_CR1_SPE:64,SPI_CR1_MSTR:4,SPI_SR_TXE:2,SPI_SR_RXNE:1,SPI_SR_BSY:128,SPI_Direction_2Lines_FullDuplex:0,SPI_Direction_2Lines_RxOnly:1024,SPI_Direction_1Line_Rx:32768,SPI_Direction_1Line_Tx:49152,SPI_Mode_Master:260,SPI_Mode_Slave:0,SPI_DataSize_16b:2048,SPI_DataSize_8b:0,SPI_CPOL_Low:0,SPI_CPOL_High:2,SPI_CPHA_1Edge:0,SPI_CPHA_2Edge:1,SPI_NSS_Soft:512,SPI_NSS_Hard:0,SPI_BaudRatePrescaler_2:0,SPI_BaudRatePrescaler_4:8,SPI_BaudRatePrescaler_8:16,SPI_BaudRatePrescaler_16:24,SPI_BaudRatePrescaler_32:32,SPI_BaudRatePrescaler_64:40,SPI_BaudRatePrescaler_128:48,SPI_BaudRatePrescaler_256:56,SPI_FirstBit_MSB:0,SPI_FirstBit_LSB:128,I2C_CR1_PE:1,I2C_CR1_START:256,I2C_CR1_STOP:512,I2C_CR1_ACK:1024,I2C_SR1_SB:1,I2C_SR1_ADDR:2,I2C_SR1_BTF:4,I2C_SR1_RXNE:64,I2C_SR1_TXE:128,I2C_SR2_MSL:1,I2C_SR2_BUSY:2,I2C_SR2_TRA:4,I2C_Mode_I2C:0,I2C_Mode_SMBusDevice:268435456,I2C_Mode_SMBusHost:268451840,I2C_DutyCycle_2:0,I2C_DutyCycle_16_9:16384,I2C_Ack_Enable:1,I2C_Ack_Disable:0,I2C_AcknowledgedAddress_7bit:16384,I2C_AcknowledgedAddress_10bit:49152,I2C_Direction_Transmitter:0,I2C_Direction_Receiver:1,DMA_CCR_EN:1,DMA_CCR_TCIE:2,DMA_CCR_DIR:16,DMA_CCR_CIRC:32,DMA_CCR_MINC:128,DMA_CCR_PSIZE_8:0,DMA_CCR_PSIZE_16:1,DMA_CCR_PSIZE_32:2,DMA_CCR_MSIZE_8:0,DMA_CCR_MSIZE_16:4,DMA_CCR_MSIZE_32:8,DMA_CCR_PL_LOW:0,DMA_CCR_PL_MEDIUM:16,DMA_CCR_PL_HIGH:32,DMA_CCR_PL_VERY_HIGH:48,DMA_CCR_PINC:64,DMA_DIR_PeripheralSRC:0,DMA_DIR_PeripheralDST:16,DMA_Mode_Normal:0,DMA_Mode_Circular:32,DMA_Priority_Low:0,DMA_Priority_Medium:4096,DMA_Priority_High:8192,DMA_Priority_VeryHigh:12288,DMA_M2M_Enable:16384,DMA_M2M_Disable:0,CAN_MCR_INRQ:1,CAN_MSR_INAK:1,CAN_TI0R_TXRQ:1,CAN_Mode_Normal:0,CAN_Mode_LoopBack:1<<30,CAN_Mode_Silent:1<<31,CAN_Mode_Silent_LoopBack:1<<31|1<<30,RCC_APB1Periph_BKP:1<<27,RCC_APB1Periph_PWR:1<<28,IWDG_WriteAccess_Enable:21845,IWDG_Prescaler_4:0,IWDG_Prescaler_8:1,IWDG_Prescaler_16:2,IWDG_Prescaler_32:3,IWDG_Prescaler_64:4,IWDG_Prescaler_128:5,IWDG_Prescaler_256:6,WWDG_Prescaler_1:0,WWDG_Prescaler_2:1,WWDG_Prescaler_4:2,WWDG_Prescaler_8:3,PWR_CR_LPDS:1,PWR_CR_PDDS:2,PWR_CR_CWUF:4,PWR_CR_CSBF:8,PWR_CR_PVDE:16,PWR_CR_DBP:256,PWR_CSR_WUF:1,PWR_CSR_SBF:2,PWR_CSR_PVDO:4,PWR_CSR_EWUP:256,PWR_Regulator_ON:0,PWR_Regulator_LowPower:1,PWR_STOPEntry_WFI:1,PWR_STOPEntry_WFE:2,NVIC_PriorityGroup_0:1792,NVIC_PriorityGroup_1:1536,NVIC_PriorityGroup_2:1280,NVIC_PriorityGroup_3:1024,NVIC_PriorityGroup_4:768,NVIC_LP_SEVONPEND:16,NVIC_LP_SLEEPDEEP:4,NVIC_LP_SLEEPONEXIT:2,SysTick_CLKSource_HCLK_Div8:0,SysTick_CLKSource_HCLK:4,SystemCoreClock:72e6,HSE_VALUE:8e6,HSI_VALUE:8e6};return l[e]!==void 0?l[e]:0}function Ek(e){const t=e.match(/^delay_ms\s*\((\d+)\);\s*$/);return t?{type:"delay",ms:parseInt(t[1]),line:0,source:e}:null}function Dk(e){const t=e.split(`
`),n=[];let r={},i={};for(let l=0;l<t.length;l++){const o=t[l].trim();if(!o||o.startsWith("//")||o.startsWith("#"))continue;const s=o.match(/^(\w+)\.(\w+)\s*=\s*(.+);\s*$/);if(s){const g=s[1],S=s[2],x=Ge(s[3].trim());r[g]||(r[g]={}),r[g][S]=x;continue}const a=o.match(/^\w+\s+(\w+)\s*=\s*\{([^}]+)\};\s*$/);if(a){const g=a[1],S=a[2].split(",").map(x=>Ge(x.trim()));r[g]||(r[g]={}),r[g]._inline=1,i[g]=S;continue}const c=o.match(/^(\w+_Init)\s*\((\w+),\s*&(\w+)\);\s*$/);if(c){const g=c[1],S=c[2],x=c[3],m=r[x],C=Gu[g];if(C&&m){let _=[];m._inline&&i[x]?_=[ar(S)[0],...i[x]]:(_=[ar(S)[0],m.GPIO_Pin??m.SPI_Direction??0],g==="GPIO_Init"?_=[ar(S)[0],m.GPIO_Pin??0,m.GPIO_Speed??0,m.GPIO_Mode??0]:g==="USART_Init"?_=[m.USART_BaudRate??9600,m.USART_WordLength??0,m.USART_StopBits??0,m.USART_Parity??0,m.USART_Mode??12,m.USART_HardwareFlowControl??0]:g==="SPI_Init"?_=[m.SPI_Direction??0,m.SPI_Mode??260,m.SPI_DataSize??0,m.SPI_CPOL??0,m.SPI_CPHA??0,m.SPI_NSS??512,m.SPI_BaudRatePrescaler??24,m.SPI_FirstBit??0]:g==="I2C_Init"?_=[m.I2C_Mode??0,m.I2C_DutyCycle??0,m.I2C_OwnAddress1??0,m.I2C_Ack??1,m.I2C_AcknowledgedAddress??16384,m.I2C_ClockSpeed??1e5]:g==="ADC_Init"?_=[m.ADC_Mode??0,m.ADC_ScanConvMode??0,m.ADC_ContinuousConvMode??0,m.ADC_DataAlign??0,m.ADC_NbrOfChannel??1]:g==="DMA_Init"?_=[m.DMA_Channel??1,m.DMA_DIR??0,m.DMA_Mode??0,m.DMA_PeripheralInc??0,m.DMA_MemoryInc??Mk,m.DMA_PeripheralDataSize??0,m.DMA_MemoryDataSize??0,m.DMA_Priority??0,m.DMA_M2M??0]:g==="TIM_TimeBaseInit"?_=[m.TIM_Period??999,m.TIM_Prescaler??71,m.TIM_CounterMode??0,m.TIM_ClockDivision??0]:g==="DAC_Init"?_=[m.DAC_Channel??1,m.DAC_Trigger??0,m.DAC_WaveGeneration??0,m.DAC_OutputBuffer??0]:_=[ar(S)[0]]);const R=C.fn(_);for(const A of R)n.push({type:"write",peripheral:A.peripheral??C.peripheral,offset:A.offset,value:A.value,line:l+1,source:o});if(R.length>0)continue}}const f=o.match(/^(\w+_Cmd)\s*\((.+)\);\s*$/);if(f){const g=f[1],S=f[2],x=Gu[g];if(x){const m=ar(S),C=x.fn(m);for(const _ of C)n.push({type:"write",peripheral:_.peripheral??x.peripheral,offset:_.offset,value:_.value,line:l+1,source:o});if(C.length>0)continue}}const d=Ek(o);if(d){d.line=l+1,n.push(d);continue}const p=wk(o);if(p){p.line=l+1;const g=p;if(g._splResults)for(let S=1;S<g._splResults.length;S++){const x=g._splResults[S];n.push({type:"write",peripheral:x.peripheral??p.peripheral,offset:x.offset,value:x.value,line:l+1,source:o})}if(g._halResults)for(let S=1;S<g._halResults.length;S++){const x=g._halResults[S];n.push({type:"write",peripheral:p.peripheral,offset:x.offset,value:x.value,line:l+1,source:o})}n.push(p);continue}const h=Tk(o);if(h){h.line=l+1,n.push(h);continue}}return{operations:n}}const Mk=128,aa={counter:0,arr:0,frequency:0,channels:[],running:!1},ua={outputCode:0,voltage:0},ca={result:0,voltage:0,eoc:!1},da={txString:"",txe:!0,tc:!0,rxne:!1},fa={txe:!0,rxne:!1,bsy:!1,receivedByte:0,mode:"CPOL=0 CPHA=0"},pa={pe:!1,state:"idle",sb:!1,addr:!1,txe:!1,rxne:!1,btf:!1,busy:!1,lastData:0},ha={channels:[]},ma={mode:"sleep",baudRate:0,btr:{brp:0,ts1:0,ts2:0,sjw:0,loopback:!1,silent:!1},txMailboxes:[],rxMessages:[]},ga={counter:0,arr:0,frequency:0,running:!1,bdtr:{moe:!1,breakEnable:!1,breakActive:!1,deadTimeNs:0,dtg:0,aoe:!1,ossi:!1,ossr:!1,lock:0},channels:[]},Ca={configMode:!0,rtoff:!1,rsf:!1,counter:0,reload:0,prescaler:32768,seconds:0,owf:!1,secf:!1,secie:!1},_a={started:!1,unlockActive:!1,counter:4095,reload:4095,prescalerDiv:4},Sa={started:!1,counter:127,windowValue:127,prescalerDiv:1,ewi:!1,ewif:!1,refreshAllowed:!1},W=is((e,t)=>({running:!1,output:[],activePeripheral:"GPIOA",pins:[],timerState:{...aa},dacState:{...ua},adcState:{...ca},usartState:{...da},spiState:{...fa},i2cState:{...pa},dmaState:{...ha},canState:{...ma},advTimState:{...ga},rtcState:{...Ca},iwdgState:{..._a},wwdgState:{...Sa},pwrMode:"run",pwrDbpEnabled:!1,pwrWuf:!1,pwrSbf:!1,pwrPvde:!1,pwrPls:0,pwrPvdo:!1,pwrEwup:!1,rtosTickCount:0,rtosSchedulerStarted:!1,rtosCurrentTaskId:0,rtosTasks:[],rtosQueues:[],rtosSemaphores:[],fsMounted:!1,fsFiles:[],fsOpenFilePath:null,fsOpenFileCursor:0,fsOperationLog:[],code:`// 1. 使能 GPIOA 时钟
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);

// 2. 配置 PA0 为推挽输出
GPIO_InitTypeDef cfg;
cfg.GPIO_Pin = GPIO_Pin_0;
cfg.GPIO_Speed = GPIO_Speed_50MHz;
cfg.GPIO_Mode = GPIO_Mode_Out_PP;
GPIO_Init(GPIOA, &cfg);

// 3. 点亮 PA0
GPIO_SetBits(GPIOA, GPIO_Pin_0);
`,setCode:n=>e({code:n}),runCode:()=>{const{code:n}=t(),r=Dk(n);if(r.error){e({output:[`Error: ${r.error}`]});return}const i=[];for(const A of r.operations)if(A.type==="write"&&A.peripheral)try{Q.write(A.peripheral,A.offset,A.value),i.push(`[${A.line}] ${A.peripheral} + 0x${A.offset.toString(16)} ← 0x${A.value.toString(16)}`)}catch(P){i.push(`[${A.line}] Error: ${String(P)}`)}else A.type==="delay"&&i.push(`[${A.line}] delay ${A.ms}ms`);Q.tick();const l=Q.getPeripheral(t().activePeripheral),o=Q.getPeripheral("TIM2"),s=Q.getPeripheral("DAC"),a=Q.getPeripheral("ADC1"),c=Q.getPeripheral("USART1"),f=Q.getPeripheral("SPI1"),d=Q.getPeripheral("I2C1"),p=Q.getPeripheral("DMA1"),h=Q.getPeripheral("CAN1"),g=Q.getPeripheral("TIM1"),S=Q.getPeripheral("RTC"),x=Q.getPeripheral("IWDG"),m=Q.getPeripheral("WWDG"),C=Q.getPeripheral("PWR"),_=Q.getPeripheral("RTOS"),R=Q.getPeripheral("FATFS");e({running:!0,output:i,pins:l?l.getAllPinStates():[],timerState:o?{counter:o.getCounter(),arr:o.read(44)&65535,frequency:o.getFrequency(),channels:o.getAllChannelStates(),running:!!(o.read(0)&1)}:{...aa},dacState:s?{outputCode:s.getOutputCode(),voltage:s.getVoltage()}:{...ua},adcState:a?{result:a.getResult(),voltage:a.getVoltage(),eoc:!!(a.read(0)&2)}:{...ca},usartState:c?{txString:c.getTXString(),txe:!!(c.read(0)&128),tc:!!(c.read(0)&64),rxne:!!(c.read(0)&32)}:{...da},spiState:f?{txe:!!(f.read(8)&2),rxne:!!(f.read(8)&1),bsy:!!(f.read(8)&128),receivedByte:f.getReceivedByte(),mode:f.getMode()}:{...fa},i2cState:d?{pe:!!(d.read(0)&1),state:d.getState(),sb:!!(d.read(20)&1),addr:!!(d.read(20)&2),txe:!!(d.read(20)&128),rxne:!!(d.read(20)&64),btf:!!(d.read(20)&4),busy:!!(d.read(24)&2),lastData:d.getLastData()}:{...pa},dmaState:p?{channels:p.getAllChannelStates()}:{...ha},canState:h?{mode:h.getMode(),baudRate:h.getBaudRate(),btr:h.getBTRInfo(),txMailboxes:h.getTXMailboxStatus(),rxMessages:h.getRXMessages()}:{...ma},advTimState:g?{counter:g.getCounter(),arr:g.read(44)&65535,frequency:g.getFrequency(),running:!!(g.read(0)&1),bdtr:g.getBDTRInfo(),channels:g.getAllChannelStates()}:{...ga},rtcState:S?{configMode:S.isConfigMode(),rtoff:!!(S.read(4)&32),rsf:!!(S.read(4)&8),counter:S.getCounter(),reload:S.getReload(),prescaler:(S.read(8)&15)<<16|S.read(12)&65535,seconds:S.getSeconds(),owf:!!(S.read(4)&4),secf:!!(S.read(4)&1),secie:!!(S.read(0)&1)}:{...Ca},iwdgState:x?{started:x.isStarted(),unlockActive:!1,counter:x.getCounter(),reload:x.read(8)&4095,prescalerDiv:x.getPrescalerDiv()}:{..._a},wwdgState:m?{started:m.isStarted(),counter:m.getCounter(),windowValue:m.getWindowValue(),prescalerDiv:[1,2,4,8][m.getPrescaler()],ewi:!!(m.read(4)&512),ewif:!!(m.read(8)&1),refreshAllowed:m.isRefreshAllowed()}:{...Sa},pwrMode:C?C.getMode():"run",pwrDbpEnabled:C?C.isDBPEnabled():!1,pwrWuf:C?!!(C.read(4)&1):!1,pwrSbf:C?!!(C.read(4)&2):!1,pwrPvde:C?!!(C.read(0)&16):!1,pwrPls:C?C.read(0)>>5&7:0,pwrPvdo:C?!!(C.read(4)&4):!1,pwrEwup:C?!!(C.read(4)&256):!1,rtosTickCount:_?_.getTickCount():0,rtosSchedulerStarted:_?_.isSchedulerStarted():!1,rtosCurrentTaskId:_?_.getCurrentTaskId():0,rtosTasks:_?_.getTasks():[],rtosQueues:_?_.getQueues().map(A=>({id:A.id,name:A.name,length:A.length,items:A.items})):[],rtosSemaphores:_?_.getSemaphores().map(A=>({id:A.id,name:A.name,count:A.count,maxCount:A.maxCount})):[],fsMounted:R?R.isMounted():!1,fsFiles:R?R.getFiles():[],fsOpenFilePath:R?R.getOpenFilePath():null,fsOpenFileCursor:R?R.getOpenFileCursor():0,fsOperationLog:R?R.getOperationLog():[]})},reset:()=>{Q.reset(),e({running:!1,output:[],pins:[],timerState:{...aa},dacState:{...ua},adcState:{...ca},usartState:{...da},spiState:{...fa},i2cState:{...pa},dmaState:{...ha},canState:{...ma},advTimState:{...ga},rtcState:{...Ca},iwdgState:{..._a},wwdgState:{...Sa},pwrMode:"run",pwrDbpEnabled:!1,pwrWuf:!1,pwrSbf:!1,pwrPvde:!1,pwrPls:0,pwrPvdo:!1,pwrEwup:!1,rtosTickCount:0,rtosSchedulerStarted:!1,rtosCurrentTaskId:0,rtosTasks:[],rtosQueues:[],rtosSemaphores:[],fsMounted:!1,fsFiles:[],fsOpenFilePath:null,fsOpenFileCursor:0,fsOperationLog:[]})},setActivePeripheral:n=>e({activePeripheral:n}),refreshPins:()=>{const n=Q.getPeripheral(t().activePeripheral);n&&e({pins:n.getAllPinStates()})},refreshTimer:()=>{const n=Q.getPeripheral("TIM2");n&&e({timerState:{counter:n.getCounter(),arr:n.read(44)&65535,frequency:n.getFrequency(),channels:n.getAllChannelStates(),running:!!(n.read(0)&1)}})},refreshDac:()=>{const n=Q.getPeripheral("DAC");n&&e({dacState:{outputCode:n.getOutputCode(),voltage:n.getVoltage()}})},refreshAdc:()=>{const n=Q.getPeripheral("ADC1");n&&e({adcState:{result:n.getResult(),voltage:n.getVoltage(),eoc:!!(n.read(0)&2)}})},refreshUsart:()=>{const n=Q.getPeripheral("USART1");n&&e({usartState:{txString:n.getTXString(),txe:!!(n.read(0)&128),tc:!!(n.read(0)&64),rxne:!!(n.read(0)&32)}})},refreshSpi:()=>{const n=Q.getPeripheral("SPI1");n&&e({spiState:{txe:!!(n.read(8)&2),rxne:!!(n.read(8)&1),bsy:!!(n.read(8)&128),receivedByte:n.getReceivedByte(),mode:n.getMode()}})},sendUsartRx:n=>{const r=Q.getPeripheral("USART1");if(r){r.setRXString(n);for(let i=0;i<n.length+2;i++)Q.tick();t().refreshUsart()}},setAdcAnalogVoltage:n=>{const r=Q.getPeripheral("ADC1");r&&(r.setAnalogVoltage(n),t().refreshAdc())},sendSpiByte:n=>{const r=Q.getPeripheral("SPI1");if(r){r.write(0,68),r.write(12,n&255);for(let i=0;i<16;i++)Q.tick();t().refreshSpi()}},refreshI2c:()=>{const n=Q.getPeripheral("I2C1");n&&e({i2cState:{pe:!!(n.read(0)&1),state:n.getState(),sb:!!(n.read(20)&1),addr:!!(n.read(20)&2),txe:!!(n.read(20)&128),rxne:!!(n.read(20)&64),btf:!!(n.read(20)&4),busy:!!(n.read(24)&2),lastData:n.getLastData()}})},sendI2cStart:n=>{const r=Q.getPeripheral("I2C1");if(r){r.write(0,257),r.write(16,n<<1);for(let i=0;i<6;i++)Q.tick();t().refreshI2c()}},sendI2cByte:n=>{const r=Q.getPeripheral("I2C1");if(r){r.write(16,n&255);for(let i=0;i<4;i++)Q.tick();t().refreshI2c()}},sendI2cStop:()=>{const n=Q.getPeripheral("I2C1");n&&(n.write(0,513),t().refreshI2c())},refreshDma:()=>{const n=Q.getPeripheral("DMA1");n&&e({dmaState:{channels:n.getAllChannelStates()}})},refreshCan:()=>{const n=Q.getPeripheral("CAN1");n&&e({canState:{mode:n.getMode(),baudRate:n.getBaudRate(),btr:n.getBTRInfo(),txMailboxes:n.getTXMailboxStatus(),rxMessages:n.getRXMessages()}})},sendCanMsg:(n,r,i)=>{const l=Q.getPeripheral("CAN1");if(!l)return;l.write(0,1),l.write(28,1<<30),l.write(0,0);const o=Math.min(r,8);l.write(388,o);let s=0,a=0;i.forEach((c,f)=>{f<4?s|=(c&255)<<f*8:a|=(c&255)<<(f-4)*8}),l.write(392,s),l.write(396,a),l.write(384,n<<21|1),t().refreshCan()},refreshAdvTim:()=>{const n=Q.getPeripheral("TIM1");n&&e({advTimState:{counter:n.getCounter(),arr:n.read(44)&65535,frequency:n.getFrequency(),running:!!(n.read(0)&1),bdtr:n.getBDTRInfo(),channels:n.getAllChannelStates()}})},refreshRtc:()=>{const n=Q.getPeripheral("RTC");n&&e({rtcState:{configMode:n.isConfigMode(),rtoff:!!(n.read(4)&32),rsf:!!(n.read(4)&8),counter:n.getCounter(),reload:n.getReload(),prescaler:(n.read(8)&15)<<16|n.read(12)&65535,seconds:n.getSeconds(),owf:!!(n.read(4)&4),secf:!!(n.read(4)&1),secie:!!(n.read(0)&1)}})},refreshIwdg:()=>{const n=Q.getPeripheral("IWDG");n&&e({iwdgState:{started:n.isStarted(),unlockActive:!1,counter:n.getCounter(),reload:n.read(8)&4095,prescalerDiv:n.getPrescalerDiv()}})},refreshWwdg:()=>{const n=Q.getPeripheral("WWDG");n&&e({wwdgState:{started:n.isStarted(),counter:n.getCounter(),windowValue:n.getWindowValue(),prescalerDiv:[1,2,4,8][n.getPrescaler()],ewi:!!(n.read(4)&512),ewif:!!(n.read(8)&1),refreshAllowed:n.isRefreshAllowed()}})},refreshPwr:()=>{const n=Q.getPeripheral("PWR");n&&e({pwrMode:n.getMode(),pwrDbpEnabled:n.isDBPEnabled(),pwrWuf:!!(n.read(4)&1),pwrSbf:!!(n.read(4)&2),pwrPvde:!!(n.read(0)&16),pwrPls:n.read(0)>>5&7,pwrPvdo:!!(n.read(4)&4),pwrEwup:!!(n.read(4)&256)})},refreshRTOS:()=>{const n=Q.getPeripheral("RTOS");n&&e({rtosTickCount:n.getTickCount(),rtosSchedulerStarted:n.isSchedulerStarted(),rtosCurrentTaskId:n.getCurrentTaskId(),rtosTasks:n.getTasks(),rtosQueues:n.getQueues().map(r=>({id:r.id,name:r.name,length:r.length,items:r.items})),rtosSemaphores:n.getSemaphores().map(r=>({id:r.id,name:r.name,count:r.count,maxCount:r.maxCount}))})},refreshFS:()=>{const n=Q.getPeripheral("FATFS");n&&e({fsMounted:n.isMounted(),fsFiles:n.getFiles(),fsOpenFilePath:n.getOpenFilePath(),fsOpenFileCursor:n.getOpenFileCursor(),fsOperationLog:n.getOperationLog()})}}));function Lk(){const e=W(n=>n.code),t=W(n=>n.setCode);return u.jsx(ik,{height:"100%",defaultLanguage:"c",theme:"vs-dark",value:e,onChange:n=>t(n??""),options:{fontSize:14,fontFamily:"'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",minimap:{enabled:!1},lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"off",padding:{top:12}}})}const Nk="_heading_oc3m0_1",Ok="_emptyState_oc3m0_9",Bk="_emptyStateIcon_oc3m0_16",Fk="_section_oc3m0_23",jk="_sectionLabel_oc3m0_30",zk="_statusBar_oc3m0_39",Wk="_dataRow_oc3m0_51",Gk="_led_oc3m0_68",Uk="_ledDotOn_oc3m0_84 _ledDot_oc3m0_76",Hk="_ledDotOff_oc3m0_91 _ledDot_oc3m0_76",Vk="_ledLabel_oc3m0_97",$k="_ledLabelOff_oc3m0_101",Kk="_pill_oc3m0_106",Xk="_chipLabel_oc3m0_115",qk="_itemRow_oc3m0_122",Qk="_itemRowActive_oc3m0_132 _itemRow_oc3m0_122",Jk="_miniBar_oc3m0_139",Yk="_miniBarFill_oc3m0_147",Zk="_pinChipOutput_oc3m0_164 _pinChip_oc3m0_154",eb="_pinChipInput_oc3m0_169 _pinChip_oc3m0_154",tb="_pinNumber_oc3m0_174",nb="_pinAF_oc3m0_179",rb="_pinLevel_oc3m0_186",ib="_pinConfig_oc3m0_192",lb="_pinLeg_oc3m0_198",ob="_chipBody_oc3m0_205",sb="_chipNotch_oc3m0_214",ab="_chipPinsTop_oc3m0_232 _chipPins_oc3m0_225",ub="_chipPinsBottom_oc3m0_237 _chipPins_oc3m0_225",cb="_chipLabelArea_oc3m0_242",db="_chipModel_oc3m0_250",fb="_chipInfo_oc3m0_258",pb="_pinLegend_oc3m0_266",hb="_pinLegendItem_oc3m0_276",mb="_pinLegendDivider_oc3m0_282",gb="_pinsWrap_oc3m0_288",Cb="_regCard_oc3m0_295",_b="_regHeader_oc3m0_302",Sb="_regName_oc3m0_309",yb="_regAddr_oc3m0_316",xb="_regBitArea_oc3m0_322",vb="_regFields_oc3m0_327",Rb="_bitBar_oc3m0_335",Ib="_bitCell_oc3m0_341",Pb="_bitScale_oc3m0_348",Ab="_fieldTag_oc3m0_358",Tb="_fieldTagMeta_oc3m0_366",wb="_fieldTagValue_oc3m0_371",kb="_valueLabel_oc3m0_377",bb="_runBadge_oc3m0_390",Eb="_infoBar_oc3m0_402",Db="_waveScope_oc3m0_416",Mb="_regList_oc3m0_425",k={heading:Nk,emptyState:Ok,emptyStateIcon:Bk,section:Fk,sectionLabel:jk,statusBar:zk,dataRow:Wk,led:Gk,ledDotOn:Uk,ledDotOff:Hk,ledLabel:Vk,ledLabelOff:$k,pill:Kk,chipLabel:Xk,itemRow:qk,itemRowActive:Qk,miniBar:Jk,miniBarFill:Yk,pinChipOutput:Zk,pinChipInput:eb,pinNumber:tb,pinAF:nb,pinLevel:rb,pinConfig:ib,pinLeg:lb,chipBody:ob,chipNotch:sb,chipPinsTop:ab,chipPinsBottom:ub,chipLabelArea:cb,chipModel:db,chipInfo:fb,pinLegend:pb,pinLegendItem:hb,pinLegendDivider:mb,pinsWrap:gb,regCard:Cb,regHeader:_b,regName:Sb,regAddr:yb,regBitArea:xb,regFields:vb,bitBar:Rb,bitCell:Ib,bitScale:Pb,fieldTag:Ab,fieldTagMeta:Tb,fieldTagValue:wb,valueLabel:kb,runBadge:bb,infoBar:Eb,waveScope:Db,regList:Mb},Lb={0:"T2.C1",1:"T2.C2",2:"T2.C3",3:"T2.C4",6:"T3.C1",7:"T3.C2",8:"CLK",9:"TX",10:"RX"};function Nb(){const e=W(o=>o.pins),t=W(o=>o.refreshPins),n=W(o=>o.activePeripheral),[r,i]=T.useState(!1);T.useEffect(()=>{r||(t(),i(!0))},[r,t]);const l=e.length>0;return u.jsxs("div",{children:[u.jsxs("h3",{className:k.heading,children:[n," Pinout"]}),l?u.jsxs("div",{className:k.pinsWrap,children:[u.jsxs("div",{className:k.chipBody,children:[u.jsx("div",{className:k.chipNotch}),u.jsx("div",{className:k.chipPinsTop,children:e.slice(8,16).reverse().map(o=>u.jsx(Mp,{pin:o,position:"top"},o.number))}),u.jsxs("div",{className:k.chipLabelArea,children:[u.jsx("div",{className:k.chipModel,children:"STM32F103"}),u.jsxs("div",{className:k.chipInfo,children:["Cortex‑M3 · 72MHz · ",n]})]}),u.jsx("div",{className:k.chipPinsBottom,children:e.slice(0,8).reverse().map(o=>u.jsx(Mp,{pin:o,position:"bottom"},o.number))})]}),u.jsxs("div",{className:k.pinLegend,children:[u.jsxs("span",{className:k.pinLegendItem,children:[u.jsx("span",{style:{color:"var(--accent-green)"},children:"●"})," High"]}),u.jsxs("span",{className:k.pinLegendItem,children:[u.jsx("span",{style:{color:"var(--accent-red)"},children:"●"})," Low"]}),u.jsxs("span",{className:k.pinLegendItem,children:[u.jsx("span",{style:{color:"var(--text-disabled)"},children:"○"})," Input/Float"]}),u.jsx("span",{className:k.pinLegendDivider,children:"PP=推挽 OD=开漏 AN=模拟"})]})]}):u.jsxs("div",{className:k.emptyState,children:[u.jsx("div",{className:k.emptyStateIcon,children:"▣"}),"运行 GPIO 代码后查看引脚状态"]})]})}function Mp({pin:e,position:t}){const n=e.mode!=="input",r=n?e.level?"var(--accent-green)":"var(--accent-red)":"var(--text-disabled)",i=e.config==="push_pull"?"PP":e.config==="open_drain"?"OD":e.config==="floating_input"?"FLT":e.config==="pull_up_down"?"PU":e.config==="analog"?"AN":"--",l=e.config==="push_pull"?"var(--accent-green)":e.config==="open_drain"?"var(--accent-amber)":e.config==="analog"?"var(--accent-blue)":"var(--text-disabled)",o=Lb[e.number];return u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[t==="top"&&u.jsx("div",{className:k.pinLeg}),u.jsxs("div",{className:n?k.pinChipOutput:k.pinChipInput,style:{border:`1px solid ${n?"#242430":"#1a1a24"}`},children:[u.jsxs("div",{className:k.pinNumber,children:["P",e.number]}),o&&u.jsx("div",{className:k.pinAF,children:o}),u.jsx("div",{className:k.pinLevel,style:{color:r},children:n?"●":"○"}),u.jsx("div",{className:k.pinConfig,style:{color:l},children:i})]}),t==="bottom"&&u.jsx("div",{className:k.pinLeg})]})}const Bl=["#3bdb7e","#5ba0f5","#f5b83b","#f57bc5","#a88bf5","#f54b4b","#4dd4c0","#f5953b"];function Ob(){const e=W(i=>i.activePeripheral),t=W(i=>i.output),[n,r]=T.useState([]);return T.useEffect(()=>{const i=Q.getPeripheral(e);if(!i)return;const l=[],o=Bb(e);i.registers.forEach((s,a)=>{l.push({name:o[a]||`0x${a.toString(16)}`,offset:a,reg:s})}),l.sort((s,a)=>s.offset-a.offset),r(l)},[e,t]),n.length===0?u.jsxs("div",{className:k.emptyState,children:[u.jsx("div",{className:k.emptyStateIcon,children:"▢"}),"运行代码后此处显示寄存器状态"]}):u.jsxs("div",{children:[u.jsxs("h3",{className:k.heading,children:[e," Registers"]}),u.jsx("div",{className:k.regList,children:n.map(({name:i,offset:l,reg:o})=>{const s=o.read(),a=Object.entries(o.fields);return u.jsxs("div",{className:k.regCard,children:[u.jsxs("div",{className:k.regHeader,children:[u.jsx("span",{className:k.regName,children:i}),u.jsxs("span",{className:k.regAddr,children:["0x",l.toString(16).padStart(2,"0")," = 0x",s.toString(16).padStart(8,"0").toUpperCase()]})]}),u.jsxs("div",{className:k.regBitArea,children:[u.jsx("div",{className:k.bitBar,children:Array.from({length:32},(c,f)=>{const d=31-f,p=s>>>d&1;let h=p?"#3bdb7e":"#1a1a24",g="1px";for(let S=0;S<a.length;S++){const[,x]=a[S],[m,C]=x.bits;d>=m&&d<=C&&(p?h=Bl[S%Bl.length]:h="#14141e",d===C&&(g="2px 2px 0 0"),d===m&&(g="0 0 2px 2px"),C-m===0&&(g="2px"))}return u.jsx("div",{title:`bit ${d}: ${p}`,className:k.bitCell,style:{background:h,borderRadius:g}},f)})}),u.jsxs("div",{className:k.bitScale,children:[u.jsx("span",{children:"31"}),u.jsx("span",{children:"27"}),u.jsx("span",{children:"23"}),u.jsx("span",{children:"19"}),u.jsx("span",{children:"15"}),u.jsx("span",{children:"11"}),u.jsx("span",{children:"7"}),u.jsx("span",{children:"3"}),u.jsx("span",{children:"0"})]})]}),a.length>0&&u.jsx("div",{className:k.regFields,children:a.map(([c,f],d)=>{const p=o.read(c),[h,g]=f.bits,S=g-h+1,x=Bl[d%Bl.length];return u.jsxs("span",{className:k.fieldTag,style:{color:x,border:`1px solid ${x}22`},children:[c,u.jsx("span",{className:k.fieldTagMeta,children:S>1?`[${g}:${h}]`:`[${h}]`}),u.jsxs("span",{className:k.fieldTagValue,children:["= ",p]})]},c)})})]},l)})})]})}function Bb(e){if(e.startsWith("GPIO"))return{0:"CRL",4:"CRH",8:"IDR",12:"ODR",16:"BSRR",20:"BRR"};if(e==="RCC")return{0:"CR",4:"CFGR",24:"APB2ENR"};if(e==="NVIC")return{0:"ISER0",4:"ISER1",128:"ICER0",132:"ICER1"};if(e==="SysTick")return{0:"CTRL",4:"LOAD",8:"VAL"};if(e.startsWith("TIM"))return{0:"CR1",4:"CR2",8:"SMCR",12:"DIER",16:"SR",20:"EGR",24:"CCMR1",28:"CCMR2",32:"CCER",36:"CNT",40:"PSC",44:"ARR",52:"CCR1",56:"CCR2",60:"CCR3",64:"CCR4"};if(e==="DAC")return{0:"CR",8:"DHR12R1",44:"DOR1"};if(e==="ADC1")return{0:"SR",4:"CR1",8:"CR2",12:"SMPR1",16:"SMPR2",40:"SQR1",52:"SQR3",76:"DR"};if(e==="USART1")return{0:"SR",4:"DR",8:"BRR",12:"CR1"};if(e==="SPI1")return{0:"CR1",4:"CR2",8:"SR",12:"DR"};if(e==="I2C1")return{0:"CR1",4:"CR2",16:"DR",20:"SR1",24:"SR2"};if(e==="DMA1"){const t={0:"ISR",4:"IFCR"};for(let n=0;n<7;n++)t[8+n*20]=`CCR${n+1}`,t[12+n*20]=`CNDTR${n+1}`,t[16+n*20]=`CPAR${n+1}`,t[20+n*20]=`CMAR${n+1}`;return t}if(e==="TIM1")return{0:"CR1",4:"CR2",12:"DIER",16:"SR",20:"EGR",24:"CCMR1",28:"CCMR2",32:"CCER",36:"CNT",40:"PSC",44:"ARR",48:"RCR",52:"CCR1",56:"CCR2",60:"CCR3",64:"CCR4",68:"BDTR"};if(e==="RTC")return{0:"CRH",4:"CRL",8:"PRLH",12:"PRLL",16:"DIVH",20:"DIVL",24:"CNTH",28:"CNTL",32:"ALRH",36:"ALRL"};if(e==="CAN1"){const t={0:"MCR",4:"MSR",8:"TSR",12:"RF0R",16:"RF1R",20:"IER",24:"ESR",28:"BTR"};for(let n=0;n<3;n++){const r=384+n*16;t[r]=`MB${n}_TIR`,t[r+4]=`MB${n}_TDTR`,t[r+8]=`MB${n}_TDLR`,t[r+12]=`MB${n}_TDHR`}return t}return e==="IWDG"?{0:"KR",4:"PR",8:"RLR",12:"SR"}:e==="WWDG"?{0:"CR",4:"CFR",8:"SR"}:e==="PWR"?{0:"CR",4:"CSR"}:{}}const ci=["#3bdb7e","#5ba0f5","#f5b83b","#f57bc5"],Fl=["CH1","CH2","CH3","CH4"],jl=48,ya=10;function Fb(){const e=W(S=>S.timerState),[t,n]=T.useState(1),[r,i]=T.useState([]),l=500,o=T.useRef(null);T.useEffect(()=>{if(!e.running&&r.length>0||!e.running)return;const S=e.channels.map(x=>x.output);i(x=>{const m=[...x,{cnt:e.counter,ch:S}];return m.length>l?m.slice(-l):m})},[e.counter,e.running,e.channels]);const s=T.useCallback(S=>{S.preventDefault(),S.ctrlKey&&n(x=>Math.max(.5,Math.min(5,x+S.deltaY*-.005)))},[]),a=32,c=jl*ya*t,f=34,d=24,p=a+c,h=d+f*4+10,g=S=>{if(r.length<2)return"";const x=c/Math.max(r.length-1,1),m=d+S*f+f/2,C=m-8,_=m+8;let R=`M 0 ${r[0].ch[S]?C:_}`;for(let A=1;A<r.length;A++){const P=A*x,w=r[A].ch[S];R+=` L ${P} ${w?C:_}`}return R};return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"PWM Waveform"}),e.running&&u.jsx("span",{className:k.runBadge,children:"RUN"})]}),u.jsxs("span",{className:k.valueLabel,children:[t.toFixed(1),"×"]})]}),u.jsxs("div",{className:k.infoBar,children:[u.jsxs("span",{children:["CNT ",u.jsx("span",{style:{color:"var(--accent-green)"},children:e.counter})]}),u.jsxs("span",{children:["ARR ",u.jsx("span",{style:{color:"var(--accent-blue)"},children:e.arr})]}),u.jsxs("span",{children:["f ",u.jsxs("span",{style:{color:"var(--accent-amber)"},children:[e.frequency.toLocaleString()," Hz"]})]})]}),u.jsx("div",{ref:o,onWheel:s,className:k.waveScope,children:u.jsxs("svg",{width:"100%",height:h,viewBox:`0 0 ${p} ${h}`,preserveAspectRatio:"xMidYMid meet",children:[u.jsx("rect",{x:0,y:0,width:p,height:h,fill:"none",stroke:"#1a1a24",strokeWidth:1}),Array.from({length:ya*5+1},(S,x)=>u.jsx("line",{x1:a+x*(jl/5)*t,y1:d,x2:a+x*(jl/5)*t,y2:h-10,stroke:x%5===0?"#181820":"#101018",strokeWidth:.5},`mg${x}`)),Fl.map((S,x)=>u.jsx("line",{x1:a,y1:d+x*f+f/2,x2:p,y2:d+x*f+f/2,stroke:"#181820",strokeWidth:.5,strokeDasharray:"2 3"},`hg${x}`)),Fl.map((S,x)=>{const m=d+x*f+f/2;return u.jsx("text",{x:a-8,y:m,textAnchor:"end",dominantBaseline:"central",fill:ci[x],fontSize:9,fontFamily:"JetBrains Mono, monospace",fontWeight:600,children:S},S)}),Fl.map((S,x)=>u.jsx("path",{d:g(x),fill:"none",stroke:ci[x],strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",transform:`translate(${a}, 0)`,style:{filter:`drop-shadow(0 0 3px ${ci[x]}44)`}},x)),u.jsx("line",{x1:a,y1:h-10,x2:p,y2:h-10,stroke:"#242430",strokeWidth:1}),Array.from({length:ya+1},(S,x)=>u.jsxs("text",{x:a+x*jl*t,y:h-2,textAnchor:"middle",fill:"#404050",fontSize:8,fontFamily:"JetBrains Mono, monospace",children:[x*10,"μs"]},x))]})}),!e.running&&r.length===0&&u.jsx("div",{className:k.emptyState,style:{padding:20,fontSize:12},children:"运行 TIM 代码后此处显示波形"}),u.jsx("div",{style:{display:"flex",gap:16,marginTop:10,fontSize:10},children:Fl.map((S,x)=>{var m;return u.jsxs("span",{style:{color:ci[x],fontFamily:"JetBrains Mono, monospace",display:"flex",alignItems:"center",gap:4},children:[u.jsx("span",{style:{width:8,height:2,background:ci[x],borderRadius:1,display:"inline-block"}}),S,u.jsx("span",{style:{color:"#606070"},children:(m=e.channels[x])!=null&&m.enabled?"ON":"OFF"})]},S)})}),u.jsx("div",{className:k.valueLabel,style:{marginTop:6,color:"#404050"},children:"Ctrl+Scroll zoom · Scroll horizontal"})]})}function xa({label:e,active:t}){return u.jsxs("div",{className:k.led,children:[u.jsx("span",{className:t?k.ledDotOn:k.ledDotOff}),u.jsx("span",{className:t?k.ledLabel:k.ledLabelOff,children:e})]})}function jb(){const e=W(a=>a.usartState),t=W(a=>a.sendUsartRx),[n,r]=T.useState(""),i=T.useRef(null);T.useEffect(()=>{var a;(a=i.current)==null||a.scrollIntoView({behavior:"smooth"})},[e.txString]);const l=()=>{n.length>0&&(t(n),r(""))},o=a=>{a.key==="Enter"&&l()},s=e.txString.length>0;return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"USART1 串口终端"}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx(xa,{label:"TXE",active:e.txe}),u.jsx(xa,{label:"TC",active:e.tc}),u.jsx(xa,{label:"RXNE",active:e.rxne})]})]}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:6},children:"TX 输出"}),u.jsx("div",{style:{background:"var(--bg-root)",border:"1px solid var(--border-subtle)",borderRadius:6,padding:"12px 14px",minHeight:80,maxHeight:160,overflow:"auto",fontFamily:"JetBrains Mono, monospace",fontSize:13,color:"var(--accent-green)",whiteSpace:"pre-wrap",wordBreak:"break-all",boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:s?u.jsxs(u.Fragment,{children:[u.jsx("span",{children:e.txString}),u.jsx("div",{ref:i})]}):u.jsx("span",{style:{color:"var(--text-disabled)"},children:"运行 UART 发送代码以查看输出"})})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:6},children:"RX 输入 — 模拟外部设备发送"}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("input",{type:"text",value:n,onChange:a=>r(a.target.value),onKeyDown:o,placeholder:"输入要发送的文本...",style:{flex:1,padding:"8px 12px",background:"var(--bg-input)",border:"1px solid var(--border-default)",borderRadius:6,color:"var(--text-secondary)",fontSize:13,fontFamily:"JetBrains Mono, monospace",outline:"none"}}),u.jsx("button",{onClick:l,disabled:n.length===0,style:{padding:"8px 20px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:6,color:n.length>0?"var(--accent-blue)":"var(--text-disabled)",cursor:n.length>0?"pointer":"default",fontSize:12,fontWeight:600,fontFamily:"Inter"},children:"发送"})]})]}),u.jsx("div",{style:{marginTop:10,fontSize:10,color:"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:"串口输入逐字节填充 RX 缓冲区，运行 USART1→DR 读取代码接收数据"})]})}function zb(){const e=W(l=>l.adcState),t=W(l=>l.setAdcAnalogVoltage),n=W(l=>l.runCode),r=Math.round(e.voltage*100),i=e.voltage/3.3*100;return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"ADC1 电压监控"}),e.eoc&&u.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--accent-green)",background:"#0a2a0f",padding:"2px 8px",borderRadius:4,border:"1px solid var(--accent-green)33"},children:"EOC"})]}),u.jsxs("div",{style:{marginBottom:18},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[u.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:"模拟输入"}),u.jsxs("span",{style:{fontSize:16,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[e.voltage.toFixed(2),"V"]})]}),u.jsxs("svg",{width:"100%",height:28,viewBox:"0 0 280 28",preserveAspectRatio:"xMidYMid meet",children:[u.jsx("rect",{x:0,y:6,width:280,height:16,rx:4,fill:"var(--bg-root)",stroke:"var(--border-subtle)",strokeWidth:1}),u.jsx("rect",{x:1,y:7,width:Math.max(0,278*i/100),height:14,rx:3,fill:"var(--accent-green)"})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:10,color:"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace",marginTop:3},children:[u.jsx("span",{children:"0V"}),u.jsx("span",{children:"1.65V"}),u.jsx("span",{children:"3.3V"})]})]}),u.jsxs("div",{style:{marginBottom:18},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:8},children:"模拟电压滑块"}),u.jsx("input",{type:"range",min:0,max:330,value:r,onChange:l=>t(parseInt(l.target.value,10)/100),style:{width:"100%",accentColor:"var(--accent-green)"}}),u.jsx("div",{style:{marginTop:8,display:"flex",gap:6},children:[0,.82,1.65,2.47,3.3].map(l=>u.jsxs("button",{onClick:()=>t(l),style:{padding:"3px 10px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:4,color:"var(--text-muted)",cursor:"pointer",fontSize:10,fontFamily:"JetBrains Mono, monospace"},children:[l.toFixed(2),"V"]},l))})]}),u.jsxs("div",{style:{background:"var(--bg-surface)",border:"1px solid var(--border-subtle)",borderRadius:6,padding:"12px 14px",marginBottom:14},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[u.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:"12-bit 结果"}),u.jsxs("span",{style:{fontSize:14,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[e.result,u.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:10,fontSize:12},children:["0x",e.result.toString(16).toUpperCase().padStart(3,"0")]})]})]}),u.jsx(Wb,{value:e.result,max:4095,bits:12})]}),u.jsx("button",{onClick:n,style:{width:"100%",padding:"10px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:6,color:"var(--text-secondary)",cursor:"pointer",fontSize:13,fontFamily:"Inter",fontWeight:500},children:"运行 ADC 转换"})]})}function Wb({value:e,max:t,bits:n}){const r=Math.round(e/t*n);return u.jsx("div",{style:{display:"flex",gap:2,alignItems:"center"},children:Array.from({length:n},(i,l)=>u.jsx("div",{style:{flex:1,height:6,borderRadius:1,background:l<r?"var(--accent-green)":"var(--bg-raised)"}},l))})}function Gb(){const e=W(i=>i.dacState),t=W(i=>i.runCode),n=e.outputCode>0||e.voltage>0,r=e.voltage/3.3*100;return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"DAC 电压输出"}),u.jsxs("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:n?"var(--accent-green)":"var(--text-disabled)",background:n?"#0a2a0f":"var(--bg-raised)",padding:"2px 8px",borderRadius:4,border:`1px solid ${n?"var(--accent-green)33":"var(--border-default)"}`},children:["EN1 ",n?"ON":"OFF"]})]}),u.jsxs("div",{style:{marginBottom:18},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[u.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:"输出电压"}),u.jsxs("span",{style:{fontSize:16,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[e.voltage.toFixed(3),"V"]})]}),u.jsxs("svg",{width:"100%",height:28,viewBox:"0 0 280 28",preserveAspectRatio:"xMidYMid meet",children:[u.jsx("rect",{x:0,y:6,width:280,height:16,rx:4,fill:"var(--bg-root)",stroke:"var(--border-subtle)",strokeWidth:1}),u.jsx("rect",{x:1,y:7,width:Math.max(0,278*r/100),height:14,rx:3,fill:"var(--accent-blue)"})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:10,color:"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace",marginTop:3},children:[u.jsx("span",{children:"0V"}),u.jsx("span",{children:"1.65V"}),u.jsx("span",{children:"3.3V"})]})]}),u.jsxs("div",{style:{background:"var(--bg-surface)",border:"1px solid var(--border-subtle)",borderRadius:6,padding:"12px 14px",marginBottom:14},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[u.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:"12-bit 输出代码"}),u.jsxs("span",{style:{fontSize:14,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[e.outputCode,u.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:10,fontSize:12},children:["0x",e.outputCode.toString(16).toUpperCase().padStart(3,"0")]})]})]}),u.jsx(Ub,{value:e.outputCode,max:4095,bits:12})]}),!n&&u.jsx("div",{style:{padding:"10px 14px",background:"#2a1a0a",border:"1px solid var(--accent-amber)33",borderRadius:6,marginBottom:14,fontSize:11,color:"var(--accent-amber)",fontFamily:"Inter"},children:"提示：需要在 DAC→CR 寄存器中写 EN1=1 使能输出"}),u.jsx("button",{onClick:t,style:{width:"100%",padding:"10px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:6,color:"var(--text-secondary)",cursor:"pointer",fontSize:13,fontFamily:"Inter",fontWeight:500},children:"运行代码"})]})}function Ub({value:e,max:t,bits:n}){const r=Math.round(e/t*n);return u.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:n},(i,l)=>u.jsx("div",{style:{flex:1,height:6,borderRadius:1,background:l<r?"var(--accent-blue)":"var(--bg-raised)"}},l))})}function va({active:e,label:t}){return u.jsxs("div",{className:k.led,children:[u.jsx("span",{className:e?k.ledDotOn:k.ledDotOff}),u.jsx("span",{className:e?k.ledLabel:k.ledLabelOff,children:t})]})}function Hb(){const e=W(l=>l.spiState),t=W(l=>l.sendSpiByte),[n,r]=T.useState(""),i=()=>{const l=parseInt(n,16);!isNaN(l)&&l>=0&&l<=255&&(t(l),r(""))};return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"SPI1 主模式"}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx(va,{label:"TXE",active:e.txe}),u.jsx(va,{label:"RXNE",active:e.rxne}),u.jsx(va,{label:"BSY",active:e.bsy})]})]}),u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:16},children:e.mode}),u.jsxs("div",{style:{marginBottom:16},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:6},children:"TX 发送 (HEX)"}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("input",{type:"text",value:n,onChange:l=>r(l.target.value),onKeyDown:l=>l.key==="Enter"&&i(),placeholder:"例如: 42",style:{flex:1,padding:"8px 12px",background:"var(--bg-input)",border:"1px solid var(--border-default)",borderRadius:6,color:"var(--text-secondary)",fontSize:13,fontFamily:"JetBrains Mono, monospace",outline:"none"}}),u.jsx("button",{onClick:i,disabled:n.length===0,style:{padding:"8px 20px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:6,color:n.length>0?"var(--accent-blue)":"var(--text-disabled)",cursor:n.length>0?"pointer":"default",fontSize:12,fontWeight:600,fontFamily:"Inter"},children:"发送"})]})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:6},children:"RX 接收"}),u.jsx("div",{style:{background:"var(--bg-root)",border:"1px solid var(--border-subtle)",borderRadius:6,padding:"16px",minHeight:70,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:e.rxne?u.jsxs("div",{style:{textAlign:"center"},children:[u.jsxs("div",{style:{fontSize:28,fontFamily:"JetBrains Mono, monospace",color:"var(--accent-green)",fontWeight:600},children:["0x",e.receivedByte.toString(16).toUpperCase().padStart(2,"0")]}),u.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",marginTop:4},children:e.receivedByte})]}):u.jsx("span",{style:{color:"var(--text-disabled)",fontSize:13,fontFamily:"Inter"},children:"未接收到数据"})})]}),u.jsx("div",{style:{marginTop:10,fontSize:10,color:"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:"主模式写 DR 即开始全双工传输 · BR=0 时 16 tick 完成"})]})}function Ln({active:e,label:t}){return u.jsxs("div",{className:k.led,children:[u.jsx("span",{className:e?k.ledDotOn:k.ledDotOff}),u.jsx("span",{className:e?k.ledLabel:k.ledLabelOff,children:t})]})}const Ra={idle:"var(--text-disabled)",start:"var(--accent-amber)",addressing:"var(--accent-blue)",tx:"var(--accent-green)",rx:"var(--accent-purple)"},Vb={idle:"IDLE",start:"START",addressing:"ADDR","tx/rx":"TX/RX"};function $b(){const e=W(p=>p.i2cState),t=W(p=>p.sendI2cStart),n=W(p=>p.sendI2cByte),r=W(p=>p.sendI2cStop),[i,l]=T.useState("0x28"),[o,s]=T.useState(""),a=()=>{const p=parseInt(i,16);isNaN(p)||t(p&127)},c=()=>{const p=parseInt(o,16);isNaN(p)||n(p),s("")},f=["idle","start","addressing","tx/rx"],d=e.state==="tx"||e.state==="rx"?"tx/rx":e.state;return u.jsxs("div",{children:[u.jsx("h3",{className:k.heading,style:{margin:"0 0 16px"},children:"I2C1 状态机"}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:0,marginBottom:20,background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:f.map((p,h)=>{const g=p===d;return u.jsxs("div",{style:{display:"flex",alignItems:"center",flex:1},children:[u.jsx("div",{style:{flex:1,textAlign:"center",padding:"8px 0",borderRadius:6,fontSize:10,fontFamily:"JetBrains Mono, monospace",fontWeight:600,background:g?(Ra[p]||"#333")+"22":"transparent",color:g?Ra[p]:"var(--text-disabled)",border:g?`1px solid ${Ra[p]}44`:"1px solid transparent"},children:Vb[p]||p}),h<f.length-1&&u.jsx("span",{style:{color:"var(--border-default)",margin:"0 4px",fontSize:12},children:"→"})]},p)})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:20},children:[u.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[u.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",minWidth:36,fontFamily:"JetBrains Mono, monospace"},children:"地址"}),u.jsx("input",{value:i,onChange:p=>l(p.target.value),style:{width:80,padding:"6px 10px",background:"var(--bg-input)",border:"1px solid var(--border-default)",borderRadius:4,color:"var(--text-secondary)",fontSize:12,fontFamily:"JetBrains Mono, monospace",outline:"none"}}),u.jsx("button",{onClick:a,style:{padding:"6px 14px",background:"var(--bg-raised)",border:"1px solid var(--accent-amber)44",borderRadius:4,color:"var(--accent-amber)",cursor:"pointer",fontSize:11,fontFamily:"JetBrains Mono, monospace",fontWeight:600},children:"START"}),u.jsx("button",{onClick:r,style:{padding:"6px 14px",background:"var(--bg-raised)",border:"1px solid var(--accent-red)44",borderRadius:4,color:"var(--accent-red)",cursor:"pointer",fontSize:11,fontFamily:"JetBrains Mono, monospace",fontWeight:600},children:"STOP"})]}),u.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[u.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",minWidth:36,fontFamily:"JetBrains Mono, monospace"},children:"数据"}),u.jsx("input",{value:o,onChange:p=>s(p.target.value),onKeyDown:p=>p.key==="Enter"&&c(),placeholder:"0xAB",style:{width:80,padding:"6px 10px",background:"var(--bg-input)",border:"1px solid var(--border-default)",borderRadius:4,color:"var(--text-secondary)",fontSize:12,fontFamily:"JetBrains Mono, monospace",outline:"none"}}),u.jsx("button",{onClick:c,disabled:e.state!=="tx",style:{padding:"6px 14px",background:"var(--bg-raised)",border:"1px solid var(--border-default)",borderRadius:4,color:e.state==="tx"?"var(--accent-green)":"var(--text-disabled)",cursor:e.state==="tx"?"pointer":"default",fontSize:11,fontFamily:"JetBrains Mono, monospace",fontWeight:600},children:"发送"})]})]}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:14,marginBottom:16},children:[u.jsx(Ln,{active:e.pe,label:"PE"}),u.jsx(Ln,{active:e.sb,label:"SB"}),u.jsx(Ln,{active:e.addr,label:"ADDR"}),u.jsx(Ln,{active:e.txe,label:"TXE"}),u.jsx(Ln,{active:e.rxne,label:"RXNE"}),u.jsx(Ln,{active:e.btf,label:"BTF"}),u.jsx(Ln,{active:e.busy,label:"BUSY"})]}),u.jsxs("div",{style:{padding:"10px 14px",background:"var(--bg-surface)",borderRadius:6,border:"1px solid var(--border-subtle)",fontSize:12,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)"},children:["DR: 0x",e.lastData.toString(16).padStart(2,"0").toUpperCase(),"  ",u.jsx("span",{style:{color:"var(--text-disabled)"},children:e.state==="rx"?"RX 模式":e.state==="tx"?"TX 模式":e.state.toUpperCase()})]})]})}function Kb({ch:e}){const t=e.total>0?Math.round((e.total-e.remaining)/e.total*100):0,n=e.direction==="p2m"?"P→M":e.direction==="m2p"?"M→P":"M→M";return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:6,background:e.enabled?"var(--bg-surface)":"var(--bg-root)",border:`1px solid ${e.enabled?"var(--accent-green)33":"var(--border-subtle)"}`,fontSize:11,fontFamily:"JetBrains Mono, monospace"},children:[u.jsxs("span",{style:{color:"var(--text-muted)",minWidth:28,fontWeight:600},children:["CH",e.channel]}),u.jsx("span",{style:{width:8,height:8,borderRadius:"50%",flexShrink:0,background:e.enabled?"var(--accent-green)":"var(--bg-raised)",border:`1px solid ${e.enabled?"var(--accent-green)":"var(--border-default)"}`,boxShadow:e.enabled?"0 0 6px var(--accent-green)44":"none"}}),u.jsx("span",{style:{color:"var(--text-secondary)",minWidth:36},children:n}),e.circular&&u.jsx("span",{style:{color:"var(--accent-amber)",fontSize:9,fontWeight:600,background:"#2a1a0a",padding:"1px 6px",borderRadius:3,border:"1px solid var(--accent-amber)33"},children:"CIRC"}),u.jsxs("span",{style:{color:"var(--text-muted)",minWidth:64},children:[e.remaining,"/",e.total]}),u.jsx("div",{style:{flex:1,height:5,background:"var(--bg-raised)",borderRadius:3,overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:`${t}%`,background:e.enabled?"var(--accent-green)":"var(--border-default)",borderRadius:3,transition:"width 0.3s ease"}})}),u.jsxs("span",{style:{color:"var(--text-muted)",minWidth:32,textAlign:"right"},children:[t,"%"]})]})}function Xb(){const e=W(t=>t.dmaState);return u.jsxs("div",{children:[u.jsx("h3",{className:k.heading,style:{margin:"0 0 16px"},children:"DMA1 通道"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:e.channels.map(t=>u.jsx(Kb,{ch:t},t.channel))}),e.channels.length===0&&u.jsx("div",{style:{color:"var(--text-disabled)",textAlign:"center",padding:40,fontSize:13,fontFamily:"Inter"},children:"运行代码以查看 DMA 状态"})]})}function qb(){const e=W(r=>r.canState);if(!e)return null;const t={sleep:"睡眠",init:"初始化",normal:"正常"},n={sleep:"var(--text-disabled)",init:"var(--accent-amber)",normal:"var(--accent-green)"};return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"CAN1 总线"}),u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[u.jsxs("div",{style:{padding:"8px 14px",background:"var(--bg-surface)",borderRadius:6,border:`1px solid ${n[e.mode]||"var(--border-default)"}44`,display:"flex",alignItems:"center",gap:10},children:[u.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:n[e.mode]||"var(--text-disabled)"}}),u.jsxs("span",{style:{fontSize:12,color:"var(--text-secondary)",fontFamily:"Inter"},children:["模式: ",t[e.mode]||e.mode]})]}),e.mode==="normal"&&u.jsx("div",{style:{padding:"8px 14px",background:"var(--bg-surface)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:u.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:[(e.baudRate/1e3).toFixed(0)," kbps"]})}),e.btr.loopback&&u.jsx("span",{style:{fontSize:10,color:"var(--accent-amber)",background:"#2a1a0a",padding:"3px 8px",borderRadius:4,fontFamily:"JetBrains Mono, monospace",border:"1px solid var(--accent-amber)33"},children:"环回"}),e.btr.silent&&u.jsx("span",{style:{fontSize:10,color:"var(--accent-blue)",background:"#0a1a2a",padding:"3px 8px",borderRadius:4,fontFamily:"JetBrains Mono, monospace",border:"1px solid var(--accent-blue)33"},children:"静默"})]}),u.jsx(Ia,{title:"位时序 (BTR)",children:u.jsx("div",{style:{display:"flex",gap:8},children:[{label:"BRP",val:e.btr.brp},{label:"TS1",val:e.btr.ts1},{label:"TS2",val:e.btr.ts2},{label:"SJW",val:e.btr.sjw}].map(r=>u.jsxs("div",{style:{flex:1,background:"var(--bg-surface)",borderRadius:6,padding:"8px",textAlign:"center",border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:r.label}),u.jsx("div",{style:{fontSize:14,color:"var(--text-primary)",fontFamily:"JetBrains Mono, monospace",fontWeight:600,marginTop:2},children:r.val})]},r.label))})}),u.jsx(Ia,{title:"TX 邮箱",children:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:e.txMailboxes.map(r=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"var(--bg-surface)",borderRadius:6,border:`1px solid ${r.busy?"var(--accent-amber)33":"var(--border-subtle)"}`,fontSize:11,fontFamily:"JetBrains Mono, monospace"},children:[u.jsxs("span",{style:{color:"var(--text-muted)",minWidth:28},children:["MB",r.mb]}),u.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:r.busy?"var(--accent-amber)":"var(--bg-raised)"}}),r.busy?u.jsxs(u.Fragment,{children:[u.jsxs("span",{style:{color:"var(--accent-blue)"},children:["ID: 0x",r.id.toString(16).toUpperCase()]}),u.jsxs("span",{style:{color:"var(--text-muted)"},children:["DLC: ",r.dlc]}),u.jsxs("span",{style:{color:"var(--accent-green)"},children:["[",r.data.slice(0,r.dlc).map(i=>i.toString(16).padStart(2,"0").toUpperCase()).join(" "),"]"]})]}):u.jsx("span",{style:{color:"var(--text-disabled)"},children:"空闲"})]},r.mb))})}),u.jsx(Ia,{title:`RX 消息 (${e.rxMessages.length})`,children:e.rxMessages.length===0?u.jsx("div",{style:{fontSize:12,color:"var(--text-disabled)",textAlign:"center",padding:16,fontFamily:"Inter"},children:"无接收消息"}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:e.rxMessages.map((r,i)=>u.jsxs("div",{style:{padding:"8px 12px",background:"#0a2a0f",borderRadius:6,border:"1px solid var(--accent-green)33",fontSize:11,fontFamily:"JetBrains Mono, monospace"},children:[u.jsxs("div",{style:{display:"flex",gap:10,marginBottom:3},children:[u.jsxs("span",{style:{color:"var(--accent-blue)"},children:["ID: 0x",r.id.toString(16).toUpperCase(),r.ide?" (EXT)":" (STD)"]}),u.jsxs("span",{style:{color:"var(--text-muted)"},children:["DLC: ",r.dlc]}),r.rtr&&u.jsx("span",{style:{color:"var(--accent-amber)"},children:"RTR"})]}),u.jsxs("span",{style:{color:"var(--accent-green)"},children:["[",r.data.slice(0,r.dlc).map(l=>l.toString(16).padStart(2,"0").toUpperCase()).join(" "),"]"]})]},i))})})]})}function Ia({title:e,children:t}){return u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:8,fontWeight:600},children:e}),t]})}function di({label:e,active:t,color:n}){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:4,background:t?`${n}18`:"var(--bg-surface)",border:`1px solid ${t?n+"44":"var(--border-subtle)"}`},children:[u.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?n:"var(--bg-raised)"}}),u.jsxs("span",{style:{fontSize:10,color:t?"var(--text-secondary)":"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:[e,": ",t?"ON":"OFF"]})]})}function rr({label:e,value:t,unit:n}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:6,padding:"8px 12px",border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:e}),u.jsxs("div",{style:{fontSize:15,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[t,n&&u.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",marginLeft:4},children:n})]})]})}function Qb(){const e=W(r=>r.advTimState);if(!e)return null;const{bdtr:t,channels:n}=e;return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"TIM1 高级定时器"}),u.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[u.jsx(di,{label:"运行",active:e.running,color:"var(--accent-green)"}),u.jsx(di,{label:"MOE",active:t.moe,color:"var(--accent-blue)"}),u.jsx(di,{label:"刹车使能",active:t.breakEnable,color:"var(--accent-amber)"}),u.jsx(di,{label:"刹车状态",active:t.breakActive,color:"var(--accent-red)"}),u.jsx(di,{label:"AOE",active:t.aoe,color:"var(--accent-purple)"})]}),u.jsx(Pa,{title:"BDTR 配置",children:u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:[u.jsx(rr,{label:"死区 DTG",value:t.dtg.toString(),unit:"raw"}),u.jsx(rr,{label:"死区时间",value:`${t.deadTimeNs}`,unit:"ns"}),u.jsx(rr,{label:"LOCK",value:t.lock.toString(),unit:"级"}),u.jsx(rr,{label:"计数器",value:e.counter.toString()})]})}),u.jsx(Pa,{title:"通道状态",children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:11},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace",fontSize:10},children:[u.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"通道"}),u.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"CCR"}),u.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"主输出"}),u.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"互补"}),u.jsx("th",{style:{padding:"6px 8px",textAlign:"left"},children:"死区"})]})}),u.jsx("tbody",{children:n.map(r=>u.jsxs("tr",{style:{borderTop:"1px solid var(--border-subtle)"},children:[u.jsxs("td",{style:{padding:"6px 8px",color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:["CH",r.channel]}),u.jsx("td",{style:{padding:"6px 8px",fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)"},children:r.ccr.toString().padStart(4,"0")}),u.jsx("td",{style:{padding:"6px 8px"},children:u.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:r.enabled?r.output?"var(--accent-green)":"var(--bg-raised)":"var(--bg-surface)",border:r.enabled?"none":"1px solid var(--border-default)"}})}),u.jsx("td",{style:{padding:"6px 8px"},children:u.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:r.complementaryEnabled?r.complementaryOutput?"var(--accent-green)":"var(--bg-raised)":"var(--bg-surface)",border:r.complementaryEnabled?"none":"1px solid var(--border-default)"}})}),u.jsx("td",{style:{padding:"6px 8px",fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",fontSize:10},children:r.complementaryEnabled?`${r.deadTimeNs}ns`:"-"})]},r.channel))})]})}),u.jsx(Pa,{title:"频率",children:u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx(rr,{label:"频率",value:`${(e.frequency/1e3).toFixed(1)}`,unit:"kHz"}),u.jsx(rr,{label:"ARR",value:e.arr.toString()})]})})]})}function Pa({title:e,children:t}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function fi({label:e,active:t,color:n}){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:4,background:t?`${n}18`:"var(--bg-surface)",border:`1px solid ${t?n+"44":"var(--border-subtle)"}`},children:[u.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?n:"var(--bg-raised)"}}),u.jsx("span",{style:{fontSize:10,color:t?"var(--text-secondary)":"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:e})]})}function Aa({label:e,value:t,unit:n}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:6,padding:"8px 12px",border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:e}),u.jsxs("div",{style:{fontSize:15,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[t,n&&u.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",marginLeft:4},children:n})]})]})}function Jb(){const e=W(n=>n.rtcState);if(!e)return null;const t=e.reload>0?Math.min(e.counter/e.reload*100,100):0;return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"RTC 实时时钟"}),u.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[u.jsx(fi,{label:"配置模式",active:e.configMode,color:"var(--accent-amber)"}),u.jsx(fi,{label:"RTOFF",active:e.rtoff,color:"var(--accent-green)"}),u.jsx(fi,{label:"RSF",active:e.rsf,color:"var(--accent-blue)"}),u.jsx(fi,{label:"OWF",active:e.owf,color:"var(--accent-red)"}),u.jsx(fi,{label:"SECIE",active:e.secie,color:"var(--accent-purple)"})]}),u.jsx(Ta,{title:"运行时间",children:u.jsxs("div",{style:{textAlign:"center"},children:[u.jsx("div",{style:{fontSize:36,fontFamily:"JetBrains Mono, monospace",color:"var(--accent-green)",fontWeight:700,letterSpacing:4},children:e.seconds.toString().padStart(5,"0")}),u.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:6,fontFamily:"JetBrains Mono, monospace"},children:"秒"})]})}),u.jsxs(Ta,{title:"计数器",children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},children:[u.jsx(Aa,{label:"CNT",value:e.counter.toString()}),u.jsx(Aa,{label:"RL",value:e.reload.toString()}),u.jsx(Aa,{label:"预分频",value:e.prescaler.toString()})]}),u.jsxs("div",{style:{marginTop:12},children:[u.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",marginBottom:6,display:"flex",justifyContent:"space-between",fontFamily:"JetBrains Mono, monospace"},children:[u.jsx("span",{children:"计数器进度"}),u.jsxs("span",{children:[Math.round(t),"%"]})]}),u.jsx("div",{style:{height:6,background:"var(--bg-raised)",borderRadius:3,overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:`${t}%`,background:"var(--accent-green)",borderRadius:3,transition:"width 0.3s ease"}})})]})]}),u.jsx(Ta,{title:"控制寄存器",children:u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,fontSize:11},children:[u.jsxs("div",{style:{color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:["写入保护: ",u.jsx("span",{style:{color:e.configMode?"var(--accent-amber)":"var(--accent-green)"},children:e.configMode?"只可写PRL/CNT":"只读"})]}),u.jsxs("div",{style:{color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:["操作状态: ",u.jsx("span",{style:{color:e.rtoff?"var(--accent-green)":"var(--text-muted)"},children:e.rtoff?"运行中":"初始化"})]})]})})]})}function Ta({title:e,children:t}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function ir({label:e,active:t,color:n}){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:4,background:t?`${n}18`:"var(--bg-surface)",border:`1px solid ${t?n+"44":"var(--border-subtle)"}`},children:[u.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?n:"var(--bg-raised)"}}),u.jsx("span",{style:{fontSize:10,color:t?"var(--text-secondary)":"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:e})]})}function lr({label:e,value:t,unit:n}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:6,padding:"8px 12px",border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:e}),u.jsxs("div",{style:{fontSize:15,fontFamily:"JetBrains Mono, monospace",color:"var(--text-primary)",fontWeight:600},children:[t,n&&u.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",marginLeft:4},children:n})]})]})}function Yb(){const e=W(i=>i.iwdgState),t=W(i=>i.wwdgState);if(!e||!t)return null;const n=e.reload>0?(e.reload-e.counter)/e.reload*100:0,r=e.counter<e.reload*.3;return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"看门狗定时器"}),u.jsxs(Lp,{title:"IWDG 独立看门狗",children:[u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[u.jsx(ir,{label:"已启动",active:e.started,color:"var(--accent-green)"}),u.jsx(ir,{label:"解锁",active:e.unlockActive,color:"var(--accent-amber)"})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},children:[u.jsx(lr,{label:"计数器",value:e.counter.toString()}),u.jsx(lr,{label:"重装载值",value:e.reload.toString()}),u.jsx(lr,{label:"预分频",value:`/ ${e.prescalerDiv}`})]}),u.jsxs("div",{style:{marginTop:12},children:[u.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",marginBottom:6,display:"flex",justifyContent:"space-between",fontFamily:"JetBrains Mono, monospace"},children:[u.jsx("span",{children:"倒计时"}),u.jsxs("span",{children:[Math.round(n),"%"]})]}),u.jsx("div",{style:{height:6,background:"var(--bg-raised)",borderRadius:3,overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:`${n}%`,background:r?"var(--accent-red)":"var(--accent-amber)",borderRadius:3,transition:"width 0.3s ease"}})})]}),u.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:8,fontFamily:"JetBrains Mono, monospace"},children:["LSI: 40kHz → ",(4e4/e.prescalerDiv).toFixed(0)," Hz 计数频率",e.started&&` → 超时: ${(e.counter*e.prescalerDiv/4e4).toFixed(3)}s`]})]}),u.jsxs(Lp,{title:"WWDG 窗口看门狗",children:[u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[u.jsx(ir,{label:"已启动",active:t.started,color:"var(--accent-green)"}),u.jsx(ir,{label:"EWI使能",active:t.ewi,color:"var(--accent-blue)"}),u.jsx(ir,{label:"EWIF",active:t.ewif,color:"var(--accent-purple)"}),u.jsx(ir,{label:"窗口内",active:t.refreshAllowed,color:"#22d3ee"})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},children:[u.jsx(lr,{label:"计数器",value:`0x${t.counter.toString(16)}`}),u.jsx(lr,{label:"窗口值",value:`0x${t.windowValue.toString(16)}`}),u.jsx(lr,{label:"预分频",value:`/ ${t.prescalerDiv}`})]}),u.jsxs("div",{style:{marginTop:12},children:[u.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginBottom:6,fontFamily:"JetBrains Mono, monospace"},children:"窗口区间"}),u.jsxs("div",{style:{height:24,background:"var(--bg-raised)",borderRadius:4,position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{position:"absolute",left:0,width:`${64/127*100}%`,height:"100%",background:"#ef444420",borderRight:"1px dashed #ef444466"}}),u.jsx("div",{style:{position:"absolute",left:`${64/127*100}%`,width:`${(t.windowValue-64)/127*100}%`,height:"100%",background:"#4ade8020"}}),u.jsx("div",{style:{position:"absolute",left:`${t.counter/127*100}%`,top:0,width:2,height:"100%",background:"var(--text-primary)",transition:"left 0.3s ease"}})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"var(--text-disabled)",marginTop:4,fontFamily:"JetBrains Mono, monospace"},children:[u.jsx("span",{children:"0x00 复位"}),u.jsx("span",{children:"0x3F"}),u.jsxs("span",{children:["0x",t.windowValue.toString(16)," 窗口"]}),u.jsx("span",{children:"0x7F"})]})]}),u.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:8,fontFamily:"JetBrains Mono, monospace"},children:["PCLK1: 36MHz → ",(36e6/(4096*t.prescalerDiv)).toFixed(0)," Hz 计数频率"]})]})]})}function Lp({title:e,children:t}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function or({label:e,active:t,color:n}){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:4,background:t?`${n}18`:"var(--bg-surface)",border:`1px solid ${t?n+"44":"var(--border-subtle)"}`},children:[u.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?n:"var(--bg-raised)"}}),u.jsx("span",{style:{fontSize:10,color:t?"var(--text-secondary)":"var(--text-disabled)",fontFamily:"JetBrains Mono, monospace"},children:e})]})}const wa={run:{label:"RUN",color:"var(--accent-green)",description:"正常运行"},sleep:{label:"SLEEP",color:"#facc15",description:"LPDS=0"},stop:{label:"STOP",color:"var(--accent-amber)",description:"LPDS=1 PDDS=0"},standby:{label:"STANDBY",color:"var(--accent-red)",description:"LPDS=1 PDDS=1"}},Zb=["2.2V","2.3V","2.4V","2.5V","2.6V","2.7V","2.8V","2.9V"];function eE(){const e=W(c=>c.pwrMode),t=W(c=>c.pwrDbpEnabled),n=W(c=>c.pwrWuf),r=W(c=>c.pwrSbf),i=W(c=>c.pwrPvde),l=W(c=>c.pwrPls),o=W(c=>c.pwrPvdo),s=W(c=>c.pwrEwup),a=wa[e]||wa.run;return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"PWR 电源控制"}),u.jsx(pi,{title:"当前模式",children:u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[u.jsx("div",{style:{padding:"8px 20px",borderRadius:6,background:`${a.color}18`,border:`1px solid ${a.color}44`},children:u.jsx("span",{style:{fontSize:20,fontWeight:700,fontFamily:"JetBrains Mono, monospace",color:a.color},children:a.label})}),u.jsx(or,{label:"DBP",active:t,color:"var(--accent-blue)"})]})}),u.jsx(pi,{title:"低功耗模式",children:u.jsx("div",{style:{display:"flex",gap:6},children:["sleep","stop","standby"].map(c=>{const f=wa[c],d=e===c;return u.jsxs("div",{style:{flex:1,padding:"10px 8px",textAlign:"center",borderRadius:6,background:d?`${f.color}14`:"var(--bg-root)",border:`1px solid ${d?f.color+"44":"var(--border-subtle)"}`},children:[u.jsx("div",{style:{fontSize:13,fontFamily:"JetBrains Mono, monospace",fontWeight:600,color:d?f.color:"var(--text-disabled)"},children:f.label}),u.jsx("div",{style:{fontSize:9,color:"var(--text-muted)",marginTop:4,fontFamily:"JetBrains Mono, monospace"},children:f.description})]},c)})})}),u.jsx(pi,{title:"状态标志",children:u.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[u.jsx(or,{label:"WUF",active:n,color:"var(--accent-amber)"}),u.jsx(or,{label:"SBF",active:r,color:"var(--accent-blue)"}),u.jsx(or,{label:"EWUP",active:s,color:"var(--accent-purple)"})]})}),u.jsx(pi,{title:"PVD 电压检测",children:u.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[u.jsx(or,{label:"PVDE",active:i,color:"var(--accent-blue)"}),u.jsx(or,{label:"PVDO",active:o,color:"var(--accent-red)"}),i&&u.jsxs("span",{style:{fontSize:11,color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:["PLS=",l," (",Zb[l]||"?",")"]})]})}),u.jsx(pi,{title:"功耗对比",children:u.jsx("div",{style:{display:"flex",gap:8},children:[{label:"Sleep",current:"~5mA",color:"#facc15"},{label:"Stop",current:"~20μA",color:"var(--accent-amber)"},{label:"Standby",current:"~2μA",color:"var(--accent-red)"}].map(c=>u.jsxs("div",{style:{flex:1,textAlign:"center",padding:"10px 8px",background:"var(--bg-root)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:c.label}),u.jsx("div",{style:{fontSize:14,color:c.color,fontFamily:"JetBrains Mono, monospace",fontWeight:600,marginTop:4},children:c.current})]},c.label))})})]})}function pi({title:e,children:t}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}const tE={running:"var(--accent-green)",ready:"#facc15",blocked:"var(--accent-amber)",suspended:"var(--text-muted)"};function nE(){const e=W(o=>o.rtosTasks),t=W(o=>o.rtosQueues),n=W(o=>o.rtosSemaphores),r=W(o=>o.rtosTickCount),i=W(o=>o.rtosSchedulerStarted),l=W(o=>o.rtosCurrentTaskId);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"FreeRTOS 任务调度"}),u.jsxs("div",{className:k.statusBar,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[u.jsx("span",{className:i?k.ledDotOn:k.ledDotOff}),u.jsx("span",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",fontWeight:600,color:i?"var(--accent-green)":"var(--text-disabled)"},children:i?"SCHEDULER ON":"SCHEDULER OFF"})]}),u.jsxs("span",{className:k.valueLabel,children:["Tick: ",r]}),u.jsxs("span",{className:k.valueLabel,children:["Current: ",u.jsx("span",{style:{color:"var(--accent-blue)"},children:l||"idle"})]})]}),u.jsxs("div",{className:k.section,children:[u.jsxs("div",{className:k.sectionLabel,children:["任务列表 (",e.length,")"]}),e.length===0?u.jsx("div",{style:{fontSize:11,color:"var(--text-disabled)",textAlign:"center",padding:16},children:"暂无任务"}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:e.map(o=>{const s=o.id===l;return u.jsxs("div",{className:s?k.itemRowActive:k.itemRow,children:[u.jsx("span",{className:k.chipLabel,style:{minWidth:60,color:"var(--text-primary)"},children:o.name}),u.jsxs("span",{className:k.pill,style:{background:"var(--bg-surface)",color:"var(--text-muted)"},children:["P=",o.priority]}),u.jsx("span",{style:{marginLeft:"auto",fontSize:10,fontFamily:"JetBrains Mono, monospace",fontWeight:600,color:tE[o.state]||"var(--text-muted)"},children:o.state.toUpperCase()}),o.state==="blocked"&&u.jsxs("span",{style:{fontSize:9,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:["→",o.blockedUntil]})]},o.id)})})]}),u.jsxs("div",{className:k.section,children:[u.jsxs("div",{className:k.sectionLabel,children:["队列 (",t.length,")"]}),t.length===0?u.jsx("div",{style:{fontSize:11,color:"var(--text-disabled)",textAlign:"center",padding:16},children:"暂无队列"}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:t.map(o=>{const s=o.length?o.items.length/o.length*100:0;return u.jsxs("div",{className:k.itemRow,children:[u.jsx("span",{className:k.chipLabel,style:{color:"var(--text-primary)"},children:o.name}),u.jsxs("span",{className:k.valueLabel,style:{minWidth:44},children:[o.items.length,"/",o.length]}),u.jsx("div",{className:k.miniBar,children:u.jsx("div",{className:k.miniBarFill,style:{width:`${s}%`,background:"var(--accent-amber)"}})})]},o.id)})})]}),u.jsxs("div",{className:k.section,children:[u.jsxs("div",{className:k.sectionLabel,children:["信号量 (",n.length,")"]}),n.length===0?u.jsx("div",{style:{fontSize:11,color:"var(--text-disabled)",textAlign:"center",padding:16},children:"暂无信号量"}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:n.map(o=>{const s=o.maxCount?o.count/o.maxCount*100:0;return u.jsxs("div",{className:k.itemRow,children:[u.jsx("span",{className:k.chipLabel,style:{color:"var(--text-primary)"},children:o.name}),u.jsxs("span",{className:k.valueLabel,style:{minWidth:44},children:[o.count,"/",o.maxCount]}),u.jsx("div",{className:k.miniBar,children:u.jsx("div",{className:k.miniBarFill,style:{width:`${s}%`,background:"var(--accent-green)"}})})]},o.id)})})]})]})}function rE(){const e=W(l=>l.fsMounted),t=W(l=>l.fsFiles),n=W(l=>l.fsOpenFilePath),r=W(l=>l.fsOpenFileCursor),i=W(l=>l.fsOperationLog);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"FatFS 文件系统"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap",padding:"10px 14px",background:"var(--bg-surface)",borderRadius:8,border:"1px solid var(--border-subtle)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[u.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:e?"var(--accent-green)":"var(--accent-red)",boxShadow:e?"0 0 6px var(--accent-green)44":"0 0 6px var(--accent-red)33"}}),u.jsx("span",{style:{fontSize:11,fontWeight:600,fontFamily:"JetBrains Mono, monospace",color:e?"var(--accent-green)":"var(--accent-red)"},children:e?"MOUNTED":"NOT MOUNTED"})]}),n&&u.jsxs("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:["Open: ",u.jsx("span",{style:{color:"var(--accent-blue)"},children:n})," (cursor: ",r,")"]})]}),u.jsx(Np,{title:`文件列表 (${t.length})`,children:t.length===0?u.jsx("div",{style:{fontSize:12,color:"var(--text-disabled)",textAlign:"center",padding:20,fontFamily:"Inter"},children:"无文件"}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:t.map((l,o)=>{const s=n===l.name;return u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",borderRadius:6,background:s?"var(--bg-raised)":"var(--bg-root)",border:`1px solid ${s?"var(--accent-green)44":"var(--border-subtle)"}`},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{fontSize:9,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:l.name.endsWith(".txt")?"📄":l.name.endsWith(".bin")?"📦":"📁"}),u.jsx("span",{style:{fontSize:12,color:"var(--text-primary)",fontFamily:"JetBrains Mono, monospace"},children:l.name})]}),u.jsxs("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:[l.size," bytes"]})]},o)})})}),u.jsx(Np,{title:`操作日志 (${i.length})`,children:i.length===0?u.jsx("div",{style:{fontSize:12,color:"var(--text-disabled)",textAlign:"center",padding:20,fontFamily:"Inter"},children:"暂无操作"}):u.jsx("div",{style:{maxHeight:180,overflow:"auto",fontFamily:"JetBrains Mono, monospace",fontSize:10,color:"var(--text-muted)",lineHeight:2.2},children:i.map((l,o)=>u.jsx("div",{children:l},o))})})]})}function Np({title:e,children:t}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function iE(){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"调试技术"}),u.jsx(zl,{title:"SWD 调试接口",children:u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{pin:"PA14",signal:"SWCLK",color:"var(--accent-amber)"},{pin:"PA13",signal:"SWDIO",color:"var(--accent-blue)"},{pin:"VCC",signal:"3.3V",color:"var(--accent-red)"},{pin:"GND",signal:"GND",color:"var(--text-muted)"}].map(e=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"var(--bg-root)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:[u.jsx("span",{style:{fontSize:11,color:e.color,fontFamily:"JetBrains Mono, monospace",fontWeight:600},children:e.pin}),u.jsxs("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:["→ ",e.signal]})]},e.pin))})}),u.jsx(zl,{title:"HardFault 常见原因",children:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[{cause:"空指针访问",example:"*(uint32_t*)0x00000000 = 0"},{cause:"未对齐访问",example:"*(uint32_t*)0x20000001 = 0"},{cause:"除以零",example:"int x = 1 / 0"},{cause:"栈溢出",example:"递归过深 / 局部变量过大"},{cause:"非法指令",example:"跳转到数据段执行"}].map((e,t)=>u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"var(--bg-root)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:[u.jsx("span",{style:{fontSize:12,color:"var(--accent-red)",fontFamily:"Inter"},children:e.cause}),u.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace"},children:e.example})]},t))})}),u.jsx(zl,{title:"调试流程",children:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:["1. 观察现象（LED？串口？）","2. 缩小范围（哪个模块？）","3. 设断点/加打印","4. 查寄存器配置","5. 修复并验证"].map((e,t)=>u.jsx("div",{style:{padding:"6px 12px",borderRadius:4,fontSize:11,color:"var(--text-secondary)",fontFamily:"JetBrains Mono, monospace"},children:e},t))})}),u.jsx(zl,{title:"调试工具对比",children:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[{tool:"SWD 断点",scene:"逻辑错误",advantage:"单步、查看变量"},{tool:"printf 串口",scene:"运行时状态",advantage:"简单、实时"},{tool:"逻辑分析仪",scene:"时序问题",advantage:"精确时序"},{tool:"HardFault 分析",scene:"崩溃定位",advantage:"找到根因"}].map((e,t)=>u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"var(--bg-root)",borderRadius:6,border:"1px solid var(--border-subtle)"},children:[u.jsx("span",{style:{fontSize:12,color:"var(--text-primary)",fontFamily:"Inter",fontWeight:500},children:e.tool}),u.jsxs("span",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"Inter"},children:[e.scene," — ",e.advantage]})]},t))})})]})}function zl({title:e,children:t}){return u.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:8,padding:14,border:"1px solid var(--border-subtle)"},children:[u.jsx("div",{style:{fontSize:10,fontFamily:"JetBrains Mono, monospace",color:"var(--text-muted)",marginBottom:10,fontWeight:600},children:e}),t]})}function lE(){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx("h3",{className:k.heading,style:{margin:0},children:"综合项目：数据采集系统"}),u.jsxs("div",{className:k.section,children:[u.jsx("div",{className:k.sectionLabel,children:"系统框图"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[{label:"传感器",color:"var(--accent-green)"},{label:"ADC1 (CH0)",color:"var(--accent-blue)",arrow:!0},{label:"SRAM Buffer[100]",color:"var(--accent-amber)",arrow:!0,sub:"DMA"},{label:"USART1 → 上位机",color:"var(--accent-red)",arrow:!0}].map((e,t)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[t>0&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[u.jsx("span",{style:{color:"var(--border-default)",fontSize:18,fontFamily:"JetBrains Mono, monospace",lineHeight:1},children:"↓"}),e.sub&&u.jsxs("span",{style:{fontSize:9,color:"var(--text-muted)",fontFamily:"JetBrains Mono, monospace",marginTop:-2},children:["(",e.sub,")"]})]}),u.jsx("div",{style:{padding:"10px 24px",borderRadius:6,background:`${e.color}14`,border:`1px solid ${e.color}44`},children:u.jsx("span",{className:k.chipLabel,style:{color:e.color},children:e.label})})]},e.label))}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:24,marginTop:12},children:[u.jsx("span",{className:k.valueLabel,children:"TIM2 (触发)"}),u.jsx("span",{className:k.valueLabel,children:"PA5 (LED)"})]})]}),u.jsxs("div",{className:k.section,children:[u.jsx("div",{className:k.sectionLabel,children:"引脚分配"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[{pin:"PA0",func:"ADC1 IN0",color:"var(--accent-blue)"},{pin:"PA9",func:"USART1 TX",color:"var(--accent-amber)"},{pin:"PA5",func:"LED 指示",color:"var(--accent-green)"},{pin:"PA14",func:"SWCLK (调试)",color:"#facc15"},{pin:"PA13",func:"SWDIO (调试)",color:"#facc15"}].map(e=>u.jsxs("div",{className:k.dataRow,children:[u.jsx("span",{className:k.chipLabel,style:{color:e.color,minWidth:48},children:e.pin}),u.jsx("span",{style:{fontSize:11,color:"var(--text-secondary)"},children:e.func})]},e.pin))})]}),u.jsxs("div",{className:k.section,children:[u.jsx("div",{className:k.sectionLabel,children:"使用的外设"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["GPIOA","RCC","ADC1","TIM2","DMA1","USART1","NVIC"].map(e=>u.jsx("span",{className:k.pill,style:{padding:"4px 12px",background:"var(--bg-root)",border:"1px solid var(--border-subtle)",color:"var(--text-muted)"},children:e},e))})]}),u.jsxs("div",{className:k.section,children:[u.jsx("div",{className:k.sectionLabel,children:"项目扩展方向"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[{ext:"SD 卡存储",periph:"SDIO + FatFS + DMA"},{ext:"显示屏输出",periph:"SPI (OLED/TFT)"},{ext:"CAN 总线传输",periph:"CAN"},{ext:"RTC 时间戳",periph:"RTC + BKP"},{ext:"I2C 传感器",periph:"I2C"},{ext:"DAC 波形输出",periph:"DAC + TIM + DMA"}].map(e=>u.jsxs("div",{className:k.dataRow,style:{justifyContent:"space-between"},children:[u.jsx("span",{style:{fontSize:12,color:"var(--text-primary)"},children:e.ext}),u.jsx("span",{className:k.valueLabel,children:e.periph})]},e.ext))})]})]})}const oE={"01-intro":"GPIOA","02-gpio":"GPIOA","03-rcc":"RCC","04-nvic":"NVIC","05-systick":"SysTick","06-tim":"TIM2","07-pwm":"TIM2","08-adc":"ADC1","09-uart":"USART1","10-dac":"DAC","11-spi":"SPI1","12-i2c":"I2C1","13-dma":"DMA1","14-can":"CAN1","15-adv-tim":"TIM1","16-rtc":"RTC","17-wdg":"IWDG","18-pwr":"PWR","19-freertos":"RTOS","20-fs":"FATFS","21-debug":"GPIOA","22-project":"GPIOA"};function sE(e){return oE[e]??"GPIOA"}const Op={"01-intro":`// 1. 使能 GPIOA 时钟
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
`};function aE(e){return Op[e]??Op["01-intro"]}const br=is((e,t)=>({isOpen:!1,draftPrompt:null,open:()=>e({isOpen:!0}),close:()=>e({isOpen:!1}),openWithPrompt:n=>e({isOpen:!0,draftPrompt:n}),consumeDraftPrompt:()=>{const n=t().draftPrompt;return e({draftPrompt:null}),n}})),uE="_root_aweor_1",cE="_editorPanel_aweor_8",dE="_toolbar_aweor_15",fE="_fileLabel_aweor_23",pE="_toolbarSpacer_aweor_29",hE="_runBtn_aweor_33",mE="_resetBtn_aweor_51",gE="_editorWrap_aweor_67",CE="_output_aweor_77",_E="_outputHeader_aweor_89",SE="_askAiBtn_aweor_100",yE="_outputLine_aweor_116",xE="_outputError_aweor_121",vE="_visualPanel_aweor_126",RE="_tabBar_aweor_139",IE="_tabBtn_aweor_150",PE="_tabBtnActive_aweor_172 _tabBtn_aweor_150",AE="_moreBtn_aweor_191 _tabBtn_aweor_150",TE="_dropdownWrap_aweor_196",wE="_dropdownMenu_aweor_200",kE="_dropdownItem_aweor_215",bE="_activityDot_aweor_238",EE="_viewContent_aweor_255",he={root:uE,editorPanel:cE,toolbar:dE,fileLabel:fE,toolbarSpacer:pE,runBtn:hE,resetBtn:mE,editorWrap:gE,output:CE,outputHeader:_E,askAiBtn:SE,outputLine:yE,outputError:xE,visualPanel:vE,tabBar:RE,tabBtn:IE,tabBtnActive:PE,moreBtn:AE,dropdownWrap:TE,dropdownMenu:wE,dropdownItem:kE,activityDot:bE,viewContent:EE},Bp=["pin","register","wave","usart","adc"],Fp=[{key:"pin",label:"引脚"},{key:"register",label:"寄存器"},{key:"wave",label:"波形"},{key:"usart",label:"串口"},{key:"adc",label:"ADC"},{key:"dac",label:"DAC"},{key:"spi",label:"SPI"},{key:"i2c",label:"I2C"},{key:"dma",label:"DMA"},{key:"can",label:"CAN"},{key:"adv_tim",label:"高级定时器"},{key:"rtc",label:"RTC"},{key:"wdg",label:"看门狗"},{key:"pwr",label:"低功耗"},{key:"rtos",label:"RTOS"},{key:"fs",label:"文件系统"},{key:"debug",label:"调试"},{key:"project",label:"综合项目"}],DE={pin:Nb,register:Ob,wave:Fb,usart:jb,adc:zb,dac:Gb,spi:Hb,i2c:$b,dma:Xb,can:qb,adv_tim:Qb,rtc:Jb,wdg:Yb,pwr:eE,rtos:nE,fs:rE,debug:iE,project:lE};function ME(){const{moduleId:e}=ol(),t=qt(E=>E.activeView),n=qt(E=>E.setActiveView),r=W(E=>E.runCode),i=W(E=>E.reset),l=W(E=>E.setActivePeripheral),o=W(E=>E.setCode),s=W(E=>E.output),a=W(E=>E.code),c=br(E=>E.openWithPrompt),f=W(E=>E.usartState),d=W(E=>E.adcState),p=W(E=>E.dacState),h=W(E=>E.spiState),g=W(E=>E.i2cState),S=W(E=>E.dmaState),x=W(E=>E.canState),m=W(E=>E.advTimState),C=W(E=>E.rtcState),_=W(E=>E.iwdgState),R=W(E=>E.wwdgState),A=W(E=>E.pwrMode),P=W(E=>E.rtosTasks),w=W(E=>E.fsMounted),N=W(E=>E.fsFiles),[G,I]=T.useState(!1),F=T.useRef(null);T.useEffect(()=>{function E(O){F.current&&!F.current.contains(O.target)&&I(!1)}return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[]),T.useEffect(()=>{e&&(l(sE(e)),o(aE(e)))},[e,l,o]);const U=E=>E==="usart"?f.txString.length>0||f.rxne:E==="adc"?d.eoc||d.result>0:E==="dac"?p.outputCode>0:E==="spi"?h.receivedByte>0||!h.txe:E==="i2c"?g.busy||g.rxne||g.lastData>0:E==="dma"?S.channels.some(O=>O.enabled):E==="can"?x.mode==="normal"||x.rxMessages.length>0:E==="adv_tim"?m.running||m.bdtr.moe:E==="rtc"?!C.configMode||C.counter>0:E==="wdg"?_.started||R.started:E==="pwr"?A!=="run":E==="rtos"?P.length>0:E==="fs"?w||N.length>0:!1,Z=Fp.filter(E=>Bp.includes(E.key)),ne=Fp.filter(E=>!Bp.includes(E.key)),z=DE[t],q=()=>{c(`请帮我检查当前 STM32 练习代码和仿真输出。

当前模块：${e??"unknown"}

代码：
${a}

仿真输出：
${s.join(`
`)||"暂无输出"}`)};return u.jsxs("div",{className:he.root,children:[u.jsxs("div",{className:he.editorPanel,children:[u.jsxs("div",{className:he.toolbar,children:[u.jsx("span",{className:he.fileLabel,children:"📄 main.c"}),u.jsx("span",{className:he.toolbarSpacer}),u.jsx("button",{onClick:r,className:he.runBtn,children:"▶ 运行"}),u.jsx("button",{onClick:i,className:he.resetBtn,children:"↺ 重置"})]}),u.jsx("div",{className:he.editorWrap,children:u.jsx(Lk,{})}),s.length>0&&u.jsxs("div",{className:he.output,children:[u.jsxs("div",{className:he.outputHeader,children:[u.jsx("span",{children:"仿真输出"}),u.jsx("button",{onClick:q,className:he.askAiBtn,children:"问 AI"})]}),s.map((E,O)=>u.jsx("div",{className:E.includes("Error")?he.outputError:he.outputLine,children:E},O))]})]}),u.jsxs("div",{className:he.visualPanel,children:[u.jsxs("div",{className:he.tabBar,children:[Z.map(E=>u.jsxs("button",{onClick:()=>{n(E.key),I(!1)},className:t===E.key?he.tabBtnActive:he.tabBtn,children:[E.label,U(E.key)&&u.jsx("span",{className:he.activityDot})]},E.key)),ne.length>0&&u.jsxs("div",{className:he.dropdownWrap,ref:F,children:[u.jsx("button",{onClick:E=>{E.stopPropagation(),I(O=>!O)},className:he.moreBtn,children:"更多 ▾"}),G&&u.jsx("div",{className:he.dropdownMenu,children:ne.map(E=>u.jsxs("button",{onClick:()=>{n(E.key),I(!1)},className:`${he.dropdownItem} ${t===E.key?he.tabBtnActive:""}`,children:[E.label,U(E.key)&&u.jsx("span",{className:he.activityDot})]},E.key))})]})]}),u.jsx("div",{className:he.viewContent,children:u.jsx(z,{})})]})]})}const LE="_root_1tsmi_1",NE="_hero_1tsmi_6",OE="_radialWrap_1tsmi_12",BE="_heroTitle_1tsmi_18",FE="_heroSub_1tsmi_26",jE="_heroBar_1tsmi_32",zE="_levelGrid_1tsmi_38",WE="_levelCard_1tsmi_44",GE="_levelHeader_1tsmi_58",UE="_levelCircle_1tsmi_65",HE="_levelTitle_1tsmi_79",VE="_levelCount_1tsmi_87",$E="_levelBar_1tsmi_93",KE="_modulePills_1tsmi_98",XE="_modulePillDone_1tsmi_112 _modulePill_1tsmi_98",qE="_modulePillPending_1tsmi_117 _modulePill_1tsmi_98",We={root:LE,hero:NE,radialWrap:OE,heroTitle:BE,heroSub:FE,heroBar:jE,levelGrid:zE,levelCard:WE,levelHeader:GE,levelCircle:UE,levelTitle:HE,levelCount:VE,levelBar:$E,modulePills:KE,modulePillDone:XE,modulePillPending:qE};function QE({pct:e,size:t=100}){const r=(t-6)/2,i=2*Math.PI*r,l=i-e/100*i,o=e>=80?"var(--accent-green)":e>=50?"var(--accent-amber)":"var(--accent-red)";return u.jsxs("svg",{width:t,height:t,children:[u.jsx("circle",{cx:t/2,cy:t/2,r,fill:"none",stroke:"var(--bg-raised)",strokeWidth:6}),u.jsx("circle",{cx:t/2,cy:t/2,r,fill:"none",stroke:o,strokeWidth:6,strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:l,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 800ms var(--ease-out)",filter:`drop-shadow(0 0 6px ${o}44)`}}),u.jsxs("text",{x:t/2,y:t/2-4,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-primary)",fontSize:18,fontWeight:"700",fontFamily:"var(--font-sans)",children:[Math.round(e),"%"]}),u.jsx("text",{x:t/2,y:t/2+14,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-muted)",fontSize:9,fontFamily:"var(--font-mono)",children:e>=80?"PASS":e>=50?"PROG":"START"})]})}function JE(){const e=sl(i=>i.modules),t=Object.values(e).filter(i=>i.completed).length,n=Math.round(t/zr*100),r=(i,l)=>{var s;const o=(s=e[i])==null?void 0:s.completed;return{className:o?We.modulePillDone:We.modulePillPending,style:o?{background:l}:{borderColor:`${l}44`,color:l}}};return u.jsxs("div",{className:We.root,children:[u.jsxs("div",{className:We.hero,children:[u.jsx("div",{className:We.radialWrap,children:u.jsx(QE,{pct:n,size:100})}),u.jsx("h1",{className:We.heroTitle,children:"学习进度"}),u.jsxs("p",{className:We.heroSub,children:["已完成 ",t,"/",zr," 个模块"]}),u.jsx("div",{className:We.heroBar,children:u.jsx(Gr,{value:n,variant:"success"})})]}),u.jsx("div",{className:We.levelGrid,children:[1,2,3,4,5].map(i=>{const l=vn.filter(f=>f.level===i),o=l.filter(f=>{var d;return(d=e[f.id])==null?void 0:d.completed}).length,s=Math.round(o/l.length*100),a=ls[i],c=(a==null?void 0:a.color)??"";return u.jsxs("div",{className:We.levelCard,children:[u.jsxs("div",{className:We.levelHeader,children:[u.jsx("div",{className:We.levelCircle,style:{background:`linear-gradient(135deg, ${c}, ${c}88)`},children:i}),u.jsxs("div",{children:[u.jsx("div",{className:We.levelTitle,children:a==null?void 0:a.label}),u.jsxs("div",{className:We.levelCount,children:[o,"/",l.length," 完成"]})]})]}),u.jsx("div",{className:We.levelBar,children:u.jsx(Gr,{value:s,variant:"success"})}),u.jsx("div",{className:We.modulePills,children:l.map(f=>{const{className:d,style:p}=r(f.id,c);return u.jsx("span",{className:d,style:p,children:f.title},f.id)})})]},i)})})]})}const YE="_root_1d2ne_1",ZE="_hero_1d2ne_6",eD="_radialWrap_1d2ne_12",tD="_heroTitle_1d2ne_18",nD="_heroSub_1d2ne_27",rD="_heroBar_1d2ne_34",iD="_heroActions_1d2ne_39",lD="_primaryBtn_1d2ne_46",oD="_secondaryBtn_1d2ne_65",sD="_grid_1d2ne_84",aD="_levelCard_1d2ne_96",uD="_levelHeader_1d2ne_110",cD="_levelCircle_1d2ne_117",dD="_levelTitle_1d2ne_131",fD="_levelCount_1d2ne_138",pD="_levelPct_1d2ne_144",hD="_levelBar_1d2ne_151",mD="_modulePills_1d2ne_155",gD="_pillDone_1d2ne_177 _pill_1d2ne_161",CD="_pillPending_1d2ne_182 _pill_1d2ne_161",Te={root:YE,hero:ZE,radialWrap:eD,heroTitle:tD,heroSub:nD,heroBar:rD,heroActions:iD,primaryBtn:lD,secondaryBtn:oD,grid:sD,levelCard:aD,levelHeader:uD,levelCircle:cD,levelTitle:dD,levelCount:fD,levelPct:pD,levelBar:hD,modulePills:mD,pillDone:gD,pillPending:CD};function _D({pct:e,size:t=120}){const r=(t-8)/2,i=2*Math.PI*r,l=i-e/100*i,o=e>=80?"var(--accent-green)":e>=50?"var(--accent-amber)":"var(--accent-blue)";return u.jsxs("svg",{width:t,height:t,children:[u.jsx("defs",{children:u.jsxs("filter",{id:"glow",children:[u.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"blur"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),u.jsx("circle",{cx:t/2,cy:t/2,r,fill:"none",stroke:"var(--bg-raised)",strokeWidth:8}),u.jsx("circle",{cx:t/2,cy:t/2,r,fill:"none",stroke:o,strokeWidth:8,strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:l,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 1s var(--ease-out)",filter:`drop-shadow(0 0 8px ${o}44)`}}),u.jsxs("text",{x:t/2,y:t/2-6,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-primary)",fontSize:22,fontWeight:"700",fontFamily:"var(--font-sans)",children:[Math.round(e),"%"]}),u.jsx("text",{x:t/2,y:t/2+18,textAnchor:"middle",dominantBaseline:"central",fill:"var(--text-muted)",fontSize:9,fontFamily:"var(--font-mono)",letterSpacing:"0.05em",children:e>=80?"MASTER":e>=50?"ACTIVE":"BEGINNER"})]})}function SD(){const e=Fc(),t=qt(s=>s.setMode),n=sl(s=>s.modules),r=Object.values(n).filter(s=>s.completed).length,i=Math.round(r/zr*100),l=Object.keys(n).filter(s=>{var a;return(a=n[s])==null?void 0:a.completed}).pop(),o=vn.find(s=>{var a;return!((a=n[s.id])!=null&&a.completed)});return u.jsxs("div",{className:Te.root,children:[u.jsxs("section",{className:Te.hero,children:[u.jsx("div",{className:Te.radialWrap,children:u.jsx(_D,{pct:i,size:120})}),u.jsx("h1",{className:Te.heroTitle,children:"STM32 Learning"}),u.jsxs("p",{className:Te.heroSub,children:[r,"/",zr," modules completed · Level ",r<5?1:r<9?2:r<13?3:r<17?4:5]}),u.jsx("div",{className:Te.heroBar,children:u.jsx(Gr,{value:i,variant:"success"})}),u.jsxs("div",{className:Te.heroActions,children:[o&&u.jsxs("button",{onClick:()=>{t("learn"),e(`/learn/${o.id}`)},className:Te.primaryBtn,children:["继续学习 → ",o.title]}),l&&u.jsx("button",{onClick:()=>{t("practice"),e(`/practice/${l}`)},className:Te.secondaryBtn,children:"复习练习"})]})]}),u.jsx("section",{className:Te.grid,children:[1,2,3,4,5].map(s=>{const a=ls[s],c=vn.filter(p=>p.level===s),f=c.filter(p=>{var h;return(h=n[p.id])==null?void 0:h.completed}).length,d=Math.round(f/c.length*100);return u.jsxs("div",{className:Te.levelCard,style:{borderTopColor:a==null?void 0:a.color},children:[u.jsxs("div",{className:Te.levelHeader,children:[u.jsx("div",{className:Te.levelCircle,style:{background:`linear-gradient(135deg, ${a==null?void 0:a.color}, ${a==null?void 0:a.color}66)`},children:s}),u.jsxs("div",{children:[u.jsx("div",{className:Te.levelTitle,children:a==null?void 0:a.label}),u.jsxs("div",{className:Te.levelCount,children:[f,"/",c.length," completed"]})]}),u.jsxs("div",{className:Te.levelPct,style:{color:a==null?void 0:a.color},children:[d,"%"]})]}),u.jsx("div",{className:Te.levelBar,children:u.jsx(Gr,{value:d,variant:"success"})}),u.jsx("div",{className:Te.modulePills,children:c.map(p=>{var g;const h=(g=n[p.id])==null?void 0:g.completed;return u.jsx("button",{className:h?Te.pillDone:Te.pillPending,style:{background:h?a==null?void 0:a.color:void 0,borderColor:h?void 0:`${a==null?void 0:a.color}44`,color:h?"#111":a==null?void 0:a.color},onClick:()=>{t("learn"),e(`/learn/${p.id}`)},title:p.title,children:p.title},p.id)})})]},s)})})]})}const yD=4e3,xD=12;function vD(e){const t=e.pins.filter(i=>i.mode!=="input"||i.level).slice(0,xD).map(i=>`P${i.port}${i.number}=${i.level?"高":"低"}(${i.mode})`),n=e.output.slice(-12),r=[`当前外设：${e.activePeripheral}`,t.length>0?`引脚：${t.join("，")}`:"引脚：暂无有效输出",e.timerState.running?`定时器运行中，频率 ${e.timerState.frequency}Hz`:"定时器未运行",e.adcState.eoc?`ADC 结果 ${e.adcState.result}，电压 ${e.adcState.voltage.toFixed(2)}V`:"ADC 未完成转换",e.usartState.txString?`USART 发送：${e.usartState.txString}`:"USART 暂无发送内容"];return{moduleId:e.moduleId??"unknown",currentCode:e.code.slice(0,yD),simulationOutput:n.length>0?n.join(`
`):"暂无仿真输出",peripheralSummary:r.join(`
`)}}const RD="https://zett-omega.vercel.app/api/ai";async function ID(e){const t=await fetch(RD,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();if(!t.ok)throw new Error(n.error??"AI 请求失败");if(!n.content)throw new Error("AI 返回为空");return n.content}const PD={role:"assistant",content:"我是 STM32 AI 助教。可以帮你解释寄存器、检查练习代码、分析仿真输出。"};function AD(e){const[t,n]=T.useState([PD]),[r,i]=T.useState(""),[l,o]=T.useState(!1),[s,a]=T.useState(null),c=br(h=>h.draftPrompt),f=br(h=>h.consumeDraftPrompt);async function d(h){const g=h.trim();if(!g||l)return;const S=[...t,{role:"user",content:g}];n(S),i(""),a(null),o(!0);try{const x=await ID({messages:S,context:e});n([...S,{role:"assistant",content:x}])}catch(x){const m=x instanceof Error?x.message:"AI 请求失败";a(m),n([...S,{role:"assistant",content:m}])}finally{o(!1)}}async function p(h){h==null||h.preventDefault(),await d(r)}return T.useEffect(()=>{if(!c||l)return;const h=f();h&&d(h)},[c,l]),{messages:t,input:r,isLoading:l,error:s,setInput:i,submit:p,ask:d}}const TD="_fab_1relq_1",wD="_panel_1relq_18",kD="_header_1relq_35",bD="_kicker_1relq_44",ED="_title_1relq_51",DD="_closeBtn_1relq_57",MD="_contextCard_1relq_69",LD="_quickActions_1relq_87",ND="_form_1relq_95",OD="_messages_1relq_124",BD="_assistantMessage_1relq_134",FD="_userMessage_1relq_135",jD="_loading_1relq_176",zD="_error_1relq_177",Ye={fab:TD,panel:wD,header:kD,kicker:bD,title:ED,closeBtn:DD,contextCard:MD,quickActions:LD,form:ND,messages:OD,assistantMessage:BD,userMessage:FD,loading:jD,error:zD};function WD(e){const t=e.match(/\/(?:learn|practice)\/([^/]+)/);return t==null?void 0:t[1]}function GD(){const e=Kr(),t=br(_=>_.isOpen),n=br(_=>_.open),r=br(_=>_.close),i=W(_=>_.code),l=W(_=>_.output),o=W(_=>_.activePeripheral),s=W(_=>_.pins),a=W(_=>_.timerState),c=W(_=>_.adcState),f=W(_=>_.usartState),d=T.useMemo(()=>vD({moduleId:WD(e.pathname),code:i,output:l,activePeripheral:o,pins:s,timerState:a,adcState:c,usartState:f}),[e.pathname,i,l,o,s,a,c,f]),{messages:p,input:h,isLoading:g,error:S,setInput:x,submit:m,ask:C}=AD(d);return u.jsxs(u.Fragment,{children:[u.jsx("button",{className:Ye.fab,onClick:n,"aria-label":"打开 AI 助教",children:"AI"}),t&&u.jsxs("aside",{className:Ye.panel,"aria-label":"STM32 AI 助教",children:[u.jsxs("div",{className:Ye.header,children:[u.jsxs("div",{children:[u.jsx("div",{className:Ye.kicker,children:"DeepSeek 助教"}),u.jsx("h2",{className:Ye.title,children:"STM32 AI Tutor"})]}),u.jsx("button",{className:Ye.closeBtn,onClick:r,"aria-label":"关闭 AI 助教",children:"×"})]}),u.jsxs("div",{className:Ye.contextCard,children:[u.jsx("span",{children:"当前模块"}),u.jsx("strong",{children:d.moduleId})]}),u.jsxs("div",{className:Ye.quickActions,children:[u.jsx("button",{onClick:()=>void C("请解释当前模块的核心知识点，并结合我的代码说明。"),disabled:g,children:"解释当前模块"}),u.jsx("button",{onClick:()=>void C("请检查我的 C 代码是否有 STM32 寄存器或外设配置问题。"),disabled:g,children:"检查代码"}),u.jsx("button",{onClick:()=>void C("请根据当前仿真输出解释发生了什么，以及下一步该怎么调试。"),disabled:g,children:"解读仿真"})]}),u.jsxs("div",{className:Ye.messages,children:[p.map((_,R)=>u.jsxs("div",{className:_.role==="user"?Ye.userMessage:Ye.assistantMessage,children:[u.jsx("span",{children:_.role==="user"?"你":"AI"}),u.jsx("p",{children:_.content})]},`${_.role}-${R}`)),g&&u.jsx("div",{className:Ye.loading,children:"AI 正在分析当前代码和仿真状态…"})]}),S&&u.jsx("div",{className:Ye.error,children:S}),u.jsxs("form",{className:Ye.form,onSubmit:_=>void m(_),children:[u.jsx("textarea",{value:h,onChange:_=>x(_.target.value),placeholder:"问一个 STM32 问题，例如：为什么 GPIOA 没有输出高电平？",rows:3}),u.jsx("button",{type:"submit",disabled:g||!h.trim(),children:"发送"})]})]})]})}const UD="_header_d6b0b_1",HD="_menuBtn_d6b0b_28",VD="_menuIcon_d6b0b_48",$D="_logoBtn_d6b0b_68",KD="_spacer_d6b0b_83",XD="_progressPill_d6b0b_85",qD="_progressPillTrack_d6b0b_99",QD="_progressPillFill_d6b0b_107",JD="_levelBadge_d6b0b_114",YD="_themeBtn_d6b0b_125",ZD="_navLink_d6b0b_142",eM="_body_d6b0b_159",tM="_main_d6b0b_165",nM="_root_d6b0b_172",rM="_learnContainer_d6b0b_179",iM="_stepCard_d6b0b_184",lM="_stepSidebar_d6b0b_190",oM="_stepCircle_d6b0b_198",sM="_stepLine_d6b0b_212",aM="_stepBody_d6b0b_220",uM="_stepCardInner_d6b0b_226",cM="_stepAccent_d6b0b_234",dM="_stepContent_d6b0b_238",Se={header:UD,menuBtn:HD,menuIcon:VD,logoBtn:$D,spacer:KD,progressPill:XD,progressPillTrack:qD,progressPillFill:QD,levelBadge:JD,themeBtn:YD,navLink:ZD,body:eM,main:tM,root:nM,learnContainer:rM,stepCard:iM,stepSidebar:lM,stepCircle:oM,stepLine:sM,stepBody:aM,stepCardInner:uM,stepAccent:cM,stepContent:dM};function fM(){const e=qt(a=>a.toggleSidebar),t=qt(a=>a.theme),n=qt(a=>a.toggleTheme),r=Fc(),i=sl(a=>a.modules),l=Object.values(i).filter(a=>a.completed).length,o=l<5?1:l<10?2:l<14?3:l<18?4:5,s=l/zr*100;return u.jsxs("div",{className:Se.root,children:[u.jsxs("header",{className:Se.header,children:[u.jsx("button",{onClick:e,className:Se.menuBtn,"aria-label":"Toggle sidebar",children:u.jsx("span",{className:Se.menuIcon})}),u.jsx("button",{onClick:()=>r("/"),className:Se.logoBtn,children:"STM32 Learn"}),u.jsx("span",{className:Se.spacer}),u.jsxs("div",{className:Se.progressPill,children:[u.jsxs("span",{children:[l,"/",zr]}),u.jsx("div",{className:Se.progressPillTrack,children:u.jsx("div",{className:Se.progressPillFill,style:{width:`${s}%`}})})]}),u.jsxs("span",{className:Se.levelBadge,children:["Lv.",o]}),u.jsx("button",{onClick:n,className:Se.themeBtn,"aria-label":"Toggle theme",children:t==="dark"?"☀":"☾"}),u.jsx("button",{onClick:()=>r("/progress"),className:Se.navLink,children:"进度"})]}),u.jsxs("div",{className:Se.body,children:[u.jsx(gy,{}),u.jsx("main",{className:Se.main,children:u.jsxs(am,{children:[u.jsx(xr,{path:"/",element:u.jsx(SD,{})}),u.jsx(xr,{path:"/learn/:moduleId",element:u.jsx(pM,{})}),u.jsx(xr,{path:"/practice/:moduleId",element:u.jsx(ME,{})}),u.jsx(xr,{path:"/progress",element:u.jsx(JE,{})})]})})]}),u.jsx(GD,{})]})}function pM(){const{moduleId:e}=ol(),t=qS(e);return u.jsxs("div",{className:Se.learnContainer,children:[u.jsx(ka,{step:1,levelColor:t,children:u.jsx(lT,{})}),u.jsx(ka,{step:2,levelColor:t,children:u.jsx(vT,{})}),u.jsx(ka,{step:3,levelColor:t,children:u.jsx(qT,{})})]})}function ka({step:e,levelColor:t,children:n}){return u.jsxs("div",{className:Se.stepCard,children:[u.jsxs("div",{className:Se.stepSidebar,children:[u.jsx("div",{className:Se.stepCircle,style:{background:t},children:e}),e<3&&u.jsx("div",{className:Se.stepLine})]}),u.jsx("div",{className:Se.stepBody,children:u.jsxs("div",{className:Se.stepCardInner,children:[u.jsx("div",{className:Se.stepAccent,style:{background:`linear-gradient(90deg, ${t}, transparent)`}}),u.jsx("div",{className:Se.stepContent,children:n})]})})]})}function hM(){return u.jsx(fS,{basename:"/stm32-learn",children:u.jsx(am,{children:u.jsx(xr,{path:"/*",element:u.jsx(fM,{})})})})}const mM=localStorage.getItem("stm32-theme")||"dark";document.documentElement.dataset.theme=mM;ba.createRoot(document.getElementById("root")).render(u.jsx(Kt.StrictMode,{children:u.jsx(hM,{})}));
