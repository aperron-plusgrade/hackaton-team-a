var Lv=Object.defineProperty;var Iv=(e,t,n)=>t in e?Lv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var zo=(e,t,n)=>Iv(e,typeof t!="symbol"?t+"":t,n);function Ov(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function sg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ag={exports:{}},la={},lg={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),Fv=Symbol.for("react.portal"),Bv=Symbol.for("react.fragment"),Nv=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),Hv=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),qv=Symbol.for("react.memo"),Kv=Symbol.for("react.lazy"),tp=Symbol.iterator;function Yv(e){return e===null||typeof e!="object"?null:(e=tp&&e[tp]||e["@@iterator"],typeof e=="function"?e:null)}var cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ug=Object.assign,dg={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=dg,this.updater=n||cg}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pg(){}pg.prototype=Zr.prototype;function Pu(e,t,n){this.props=e,this.context=t,this.refs=dg,this.updater=n||cg}var Eu=Pu.prototype=new pg;Eu.constructor=Pu;ug(Eu,Zr.prototype);Eu.isPureReactComponent=!0;var np=Array.isArray,fg=Object.prototype.hasOwnProperty,zu={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function mg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)fg.call(t,r)&&!hg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xo,type:e,key:o,ref:s,props:i,_owner:zu.current}}function Qv(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tu(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function Xv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rp=/\/+/g;function Ua(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xv(""+e.key):t.toString(36)}function ss(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xo:case Fv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ua(s,0):r,np(i)?(n="",e!=null&&(n=e.replace(rp,"$&/")+"/"),ss(i,t,n,"",function(u){return u})):i!=null&&(Tu(i)&&(i=Qv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(rp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",np(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Ua(o,l);s+=ss(o,t,n,c,i)}else if(c=Yv(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Ua(o,l++),s+=ss(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function To(e,t,n){if(e==null)return e;var r=[],i=0;return ss(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Jv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},as={transition:null},Zv={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:as,ReactCurrentOwner:zu};function gg(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:To,forEach:function(e,t,n){To(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return To(e,function(){t++}),t},toArray:function(e){return To(e,function(t){return t})||[]},only:function(e){if(!Tu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Zr;G.Fragment=Bv;G.Profiler=Vv;G.PureComponent=Pu;G.StrictMode=Nv;G.Suspense=Gv;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;G.act=gg;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ug({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=zu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)fg.call(t,c)&&!hg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xo,type:e.type,key:i,ref:o,props:r,_owner:s}};G.createContext=function(e){return e={$$typeof:Uv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wv,_context:e},e.Consumer=e};G.createElement=mg;G.createFactory=function(e){var t=mg.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Hv,render:e}};G.isValidElement=Tu;G.lazy=function(e){return{$$typeof:Kv,_payload:{_status:-1,_result:e},_init:Jv}};G.memo=function(e,t){return{$$typeof:qv,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=as.transition;as.transition={};try{e()}finally{as.transition=t}};G.unstable_act=gg;G.useCallback=function(e,t){return Ge.current.useCallback(e,t)};G.useContext=function(e){return Ge.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ge.current.useEffect(e,t)};G.useId=function(){return Ge.current.useId()};G.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ge.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};G.useRef=function(e){return Ge.current.useRef(e)};G.useState=function(e){return Ge.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ge.current.useTransition()};G.version="18.3.1";lg.exports=G;var j=lg.exports;const Ne=sg(j),e1=Ov({__proto__:null,default:Ne},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=j,n1=Symbol.for("react.element"),r1=Symbol.for("react.fragment"),i1=Object.prototype.hasOwnProperty,o1=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s1={key:!0,ref:!0,__self:!0,__source:!0};function yg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)i1.call(t,r)&&!s1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:n1,type:e,key:o,ref:s,props:i,_owner:o1.current}}la.Fragment=r1;la.jsx=yg;la.jsxs=yg;ag.exports=la;var a=ag.exports,lc={},xg={exports:{}},lt={},vg={exports:{}},$g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,_){var L=T.length;T.push(_);e:for(;0<L;){var M=L-1>>>1,H=T[M];if(0<i(H,_))T[M]=_,T[L]=H,L=M;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var _=T[0],L=T.pop();if(L!==_){T[0]=L;e:for(var M=0,H=T.length,At=H>>>1;M<At;){var Ke=2*(M+1)-1,St=T[Ke],ke=Ke+1,ut=T[ke];if(0>i(St,L))ke<H&&0>i(ut,St)?(T[M]=ut,T[ke]=L,M=ke):(T[M]=St,T[Ke]=L,M=Ke);else if(ke<H&&0>i(ut,L))T[M]=ut,T[ke]=L,M=ke;else break e}}return _}function i(T,_){var L=T.sortIndex-_.sortIndex;return L!==0?L:T.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,f=null,h=3,y=!1,w=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=T)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function $(T){if(S=!1,x(T),!w)if(n(c)!==null)w=!0,ee(k);else{var _=n(u);_!==null&&ce($,_.startTime-T)}}function k(T,_){w=!1,S&&(S=!1,v(E),E=-1),y=!0;var L=h;try{for(x(_),f=n(c);f!==null&&(!(f.expirationTime>_)||T&&!X());){var M=f.callback;if(typeof M=="function"){f.callback=null,h=f.priorityLevel;var H=M(f.expirationTime<=_);_=e.unstable_now(),typeof H=="function"?f.callback=H:f===n(c)&&r(c),x(_)}else r(c);f=n(c)}if(f!==null)var At=!0;else{var Ke=n(u);Ke!==null&&ce($,Ke.startTime-_),At=!1}return At}finally{f=null,h=L,y=!1}}var C=!1,P=null,E=-1,A=5,R=-1;function X(){return!(e.unstable_now()-R<A)}function pe(){if(P!==null){var T=e.unstable_now();R=T;var _=!0;try{_=P(!0,T)}finally{_?B():(C=!1,P=null)}}else C=!1}var B;if(typeof g=="function")B=function(){g(pe)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Ae=q.port2;q.port1.onmessage=pe,B=function(){Ae.postMessage(null)}}else B=function(){b(pe,0)};function ee(T){P=T,C||(C=!0,B())}function ce(T,_){E=b(function(){T(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,ee(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var L=h;h=_;try{return T()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,_){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=h;h=T;try{return _()}finally{h=L}},e.unstable_scheduleCallback=function(T,_,L){var M=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=L+H,T={id:d++,callback:_,priorityLevel:T,startTime:L,expirationTime:H,sortIndex:-1},L>M?(T.sortIndex=L,t(u,T),n(c)===null&&T===n(u)&&(S?(v(E),E=-1):S=!0,ce($,L-M))):(T.sortIndex=H,t(c,T),w||y||(w=!0,ee(k))),T},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(T){var _=h;return function(){var L=h;h=_;try{return T.apply(this,arguments)}finally{h=L}}}})($g);vg.exports=$g;var a1=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=j,st=a1;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wg=new Set,Hi={};function or(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Hi[e]=t,e=0;e<t.length;e++)wg.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,c1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ip={},op={};function u1(e){return cc.call(op,e)?!0:cc.call(ip,e)?!1:c1.test(e)?op[e]=!0:(ip[e]=!0,!1)}function d1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function p1(e,t,n,r){if(t===null||typeof t>"u"||d1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Au(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Du,Au);Me[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Du,Au);Me[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Du,Au);Me[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ru(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(p1(t,n,i,r)&&(n=null),r||i===null?u1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),dr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),Sg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),pc=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),kg=Symbol.for("react.offscreen"),sp=Symbol.iterator;function li(e){return e===null||typeof e!="object"?null:(e=sp&&e[sp]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Ha;function ji(e){if(Ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ha=t&&t[1]||""}return`
`+Ha+e}var Ga=!1;function qa(e,t){if(!e||Ga)return"";Ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ji(e):""}function f1(e){switch(e.tag){case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return e=qa(e.type,!1),e;case 11:return e=qa(e.type.render,!1),e;case 1:return e=qa(e.type,!0),e;default:return""}}function fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case dr:return"Portal";case uc:return"Profiler";case _u:return"StrictMode";case dc:return"Suspense";case pc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bg:return(e.displayName||"Context")+".Consumer";case Sg:return(e._context.displayName||"Context")+".Provider";case Mu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lu:return t=e.displayName||null,t!==null?t:fc(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return fc(e(t))}catch{}}return null}function h1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(t);case 8:return t===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m1(e){var t=jg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ao(e){e._valueTracker||(e._valueTracker=m1(e))}function Cg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hc(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ap(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pg(e,t){t=t.checked,t!=null&&Ru(e,"checked",t,!1)}function mc(e,t){Pg(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gc(e,t.type,n):t.hasOwnProperty("defaultValue")&&gc(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gc(e,t,n){(t!=="number"||js(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ci=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Ci(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function Eg(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function up(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ro,Tg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g1=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(e){g1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Di[t]=Di[e]})});function Dg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Di.hasOwnProperty(e)&&Di[e]?(""+t).trim():t+"px"}function Ag(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var y1=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(e,t){if(t){if(y1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function $c(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sc=null,zr=null,Tr=null;function dp(e){if(e=wo(e)){if(typeof Sc!="function")throw Error(z(280));var t=e.stateNode;t&&(t=fa(t),Sc(e.stateNode,e.type,t))}}function Rg(e){zr?Tr?Tr.push(e):Tr=[e]:zr=e}function _g(){if(zr){var e=zr,t=Tr;if(Tr=zr=null,dp(e),t)for(e=0;e<t.length;e++)dp(t[e])}}function Mg(e,t){return e(t)}function Lg(){}var Ka=!1;function Ig(e,t,n){if(Ka)return e(t,n);Ka=!0;try{return Mg(e,t,n)}finally{Ka=!1,(zr!==null||Tr!==null)&&(Lg(),_g())}}function qi(e,t){var n=e.stateNode;if(n===null)return null;var r=fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var bc=!1;if(Qt)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){bc=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{bc=!1}function x1(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ai=!1,Cs=null,Ps=!1,kc=null,v1={onError:function(e){Ai=!0,Cs=e}};function $1(e,t,n,r,i,o,s,l,c){Ai=!1,Cs=null,x1.apply(v1,arguments)}function w1(e,t,n,r,i,o,s,l,c){if($1.apply(this,arguments),Ai){if(Ai){var u=Cs;Ai=!1,Cs=null}else throw Error(z(198));Ps||(Ps=!0,kc=u)}}function sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Og(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pp(e){if(sr(e)!==e)throw Error(z(188))}function S1(e){var t=e.alternate;if(!t){if(t=sr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pp(i),e;if(o===r)return pp(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Fg(e){return e=S1(e),e!==null?Bg(e):null}function Bg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bg(e);if(t!==null)return t;e=e.sibling}return null}var Ng=st.unstable_scheduleCallback,fp=st.unstable_cancelCallback,b1=st.unstable_shouldYield,k1=st.unstable_requestPaint,ve=st.unstable_now,j1=st.unstable_getCurrentPriorityLevel,Ou=st.unstable_ImmediatePriority,Vg=st.unstable_UserBlockingPriority,Es=st.unstable_NormalPriority,C1=st.unstable_LowPriority,Wg=st.unstable_IdlePriority,ca=null,It=null;function P1(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ca,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:T1,E1=Math.log,z1=Math.LN2;function T1(e){return e>>>=0,e===0?32:31-(E1(e)/z1|0)|0}var _o=64,Mo=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Pi(l):(o&=s,o!==0&&(r=Pi(o)))}else s=n&~i,s!==0?r=Pi(s):o!==0&&(r=Pi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),i=1<<n,r|=e[n],t&=~i;return r}function D1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Et(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=D1(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function jc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ug(){var e=_o;return _o<<=1,!(_o&4194240)&&(_o=64),e}function Ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function R1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Hg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gg,Bu,qg,Kg,Yg,Cc=!1,Lo=[],gn=null,yn=null,xn=null,Ki=new Map,Yi=new Map,dn=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hp(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(t.pointerId)}}function ui(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=wo(t),t!==null&&Bu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function M1(e,t,n,r,i){switch(t){case"focusin":return gn=ui(gn,e,t,n,r,i),!0;case"dragenter":return yn=ui(yn,e,t,n,r,i),!0;case"mouseover":return xn=ui(xn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ki.set(o,ui(Ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Yi.set(o,ui(Yi.get(o)||null,e,t,n,r,i)),!0}return!1}function Qg(e){var t=Nn(e.target);if(t!==null){var n=sr(t);if(n!==null){if(t=n.tag,t===13){if(t=Og(n),t!==null){e.blockedOn=t,Yg(e.priority,function(){qg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wc=r,n.target.dispatchEvent(r),wc=null}else return t=wo(n),t!==null&&Bu(t),e.blockedOn=n,!1;t.shift()}return!0}function mp(e,t,n){ls(e)&&n.delete(t)}function L1(){Cc=!1,gn!==null&&ls(gn)&&(gn=null),yn!==null&&ls(yn)&&(yn=null),xn!==null&&ls(xn)&&(xn=null),Ki.forEach(mp),Yi.forEach(mp)}function di(e,t){e.blockedOn===t&&(e.blockedOn=null,Cc||(Cc=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,L1)))}function Qi(e){function t(i){return di(i,e)}if(0<Lo.length){di(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&di(gn,e),yn!==null&&di(yn,e),xn!==null&&di(xn,e),Ki.forEach(t),Yi.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Qg(n),n.blockedOn===null&&dn.shift()}var Dr=nn.ReactCurrentBatchConfig,Ts=!0;function I1(e,t,n,r){var i=J,o=Dr.transition;Dr.transition=null;try{J=1,Nu(e,t,n,r)}finally{J=i,Dr.transition=o}}function O1(e,t,n,r){var i=J,o=Dr.transition;Dr.transition=null;try{J=4,Nu(e,t,n,r)}finally{J=i,Dr.transition=o}}function Nu(e,t,n,r){if(Ts){var i=Pc(e,t,n,r);if(i===null)ol(e,t,r,Ds,n),hp(e,r);else if(M1(i,e,t,n,r))r.stopPropagation();else if(hp(e,r),t&4&&-1<_1.indexOf(e)){for(;i!==null;){var o=wo(i);if(o!==null&&Gg(o),o=Pc(e,t,n,r),o===null&&ol(e,t,r,Ds,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Ds=null;function Pc(e,t,n,r){if(Ds=null,e=Iu(r),e=Nn(e),e!==null)if(t=sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Og(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ds=e,null}function Xg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j1()){case Ou:return 1;case Vg:return 4;case Es:case C1:return 16;case Wg:return 536870912;default:return 16}default:return 16}}var fn=null,Vu=null,cs=null;function Jg(){if(cs)return cs;var e,t=Vu,n=t.length,r,i="value"in fn?fn.value:fn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return cs=i.slice(e,1<r?1-r:void 0)}function us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function gp(){return!1}function ct(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Io:gp,this.isPropagationStopped=gp,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=ct(ei),$o=ge({},ei,{view:0,detail:0}),F1=ct($o),Qa,Xa,pi,ua=ge({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(Qa=e.screenX-pi.screenX,Xa=e.screenY-pi.screenY):Xa=Qa=0,pi=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),yp=ct(ua),B1=ge({},ua,{dataTransfer:0}),N1=ct(B1),V1=ge({},$o,{relatedTarget:0}),Ja=ct(V1),W1=ge({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=ct(W1),H1=ge({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G1=ct(H1),q1=ge({},ei,{data:0}),xp=ct(q1),K1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q1[e])?!!t[e]:!1}function Uu(){return X1}var J1=ge({},$o,{key:function(e){if(e.key){var t=K1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z1=ct(J1),e$=ge({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=ct(e$),t$=ge({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),n$=ct(t$),r$=ge({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),i$=ct(r$),o$=ge({},ua,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s$=ct(o$),a$=[9,13,27,32],Hu=Qt&&"CompositionEvent"in window,Ri=null;Qt&&"documentMode"in document&&(Ri=document.documentMode);var l$=Qt&&"TextEvent"in window&&!Ri,Zg=Qt&&(!Hu||Ri&&8<Ri&&11>=Ri),$p=" ",wp=!1;function ey(e,t){switch(e){case"keyup":return a$.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ty(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function c$(e,t){switch(e){case"compositionend":return ty(t);case"keypress":return t.which!==32?null:(wp=!0,$p);case"textInput":return e=t.data,e===$p&&wp?null:e;default:return null}}function u$(e,t){if(fr)return e==="compositionend"||!Hu&&ey(e,t)?(e=Jg(),cs=Vu=fn=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zg&&t.locale!=="ko"?null:t.data;default:return null}}var d$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d$[e.type]:t==="textarea"}function ny(e,t,n,r){Rg(r),t=As(t,"onChange"),0<t.length&&(n=new Wu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _i=null,Xi=null;function p$(e){fy(e,0)}function da(e){var t=gr(e);if(Cg(t))return e}function f$(e,t){if(e==="change")return t}var ry=!1;if(Qt){var Za;if(Qt){var el="oninput"in document;if(!el){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),el=typeof bp.oninput=="function"}Za=el}else Za=!1;ry=Za&&(!document.documentMode||9<document.documentMode)}function kp(){_i&&(_i.detachEvent("onpropertychange",iy),Xi=_i=null)}function iy(e){if(e.propertyName==="value"&&da(Xi)){var t=[];ny(t,Xi,e,Iu(e)),Ig(p$,t)}}function h$(e,t,n){e==="focusin"?(kp(),_i=t,Xi=n,_i.attachEvent("onpropertychange",iy)):e==="focusout"&&kp()}function m$(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return da(Xi)}function g$(e,t){if(e==="click")return da(t)}function y$(e,t){if(e==="input"||e==="change")return da(t)}function x$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:x$;function Ji(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cc.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cp(e,t){var n=jp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function oy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sy(){for(var e=window,t=js();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=js(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function v$(e){var t=sy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&oy(n.ownerDocument.documentElement,n)){if(r!==null&&Gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Cp(n,o);var s=Cp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $$=Qt&&"documentMode"in document&&11>=document.documentMode,hr=null,Ec=null,Mi=null,zc=!1;function Pp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||hr==null||hr!==js(r)||(r=hr,"selectionStart"in r&&Gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mi&&Ji(Mi,r)||(Mi=r,r=As(Ec,"onSelect"),0<r.length&&(t=new Wu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function Oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},tl={},ay={};Qt&&(ay=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function pa(e){if(tl[e])return tl[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ay)return tl[e]=t[n];return e}var ly=pa("animationend"),cy=pa("animationiteration"),uy=pa("animationstart"),dy=pa("transitionend"),py=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){py.set(e,t),or(t,[e])}for(var nl=0;nl<Ep.length;nl++){var rl=Ep[nl],w$=rl.toLowerCase(),S$=rl[0].toUpperCase()+rl.slice(1);Tn(w$,"on"+S$)}Tn(ly,"onAnimationEnd");Tn(cy,"onAnimationIteration");Tn(uy,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(dy,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b$=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function zp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,w1(r,t,void 0,e),e.currentTarget=null}function fy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;zp(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;zp(i,l,u),o=c}}}if(Ps)throw e=kc,Ps=!1,kc=null,e}function re(e,t){var n=t[_c];n===void 0&&(n=t[_c]=new Set);var r=e+"__bubble";n.has(r)||(hy(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),hy(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[Fo]){e[Fo]=!0,wg.forEach(function(n){n!=="selectionchange"&&(b$.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,il("selectionchange",!1,t))}}function hy(e,t,n,r){switch(Xg(t)){case 1:var i=I1;break;case 4:i=O1;break;default:i=Nu}n=i.bind(null,t,n,e),i=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Nn(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Ig(function(){var u=o,d=Iu(n),f=[];e:{var h=py.get(e);if(h!==void 0){var y=Wu,w=e;switch(e){case"keypress":if(us(n)===0)break e;case"keydown":case"keyup":y=Z1;break;case"focusin":w="focus",y=Ja;break;case"focusout":w="blur",y=Ja;break;case"beforeblur":case"afterblur":y=Ja;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=N1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=n$;break;case ly:case cy:case uy:y=U1;break;case dy:y=i$;break;case"scroll":y=F1;break;case"wheel":y=s$;break;case"copy":case"cut":case"paste":y=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=vp}var S=(t&4)!==0,b=!S&&e==="scroll",v=S?h!==null?h+"Capture":null:h;S=[];for(var g=u,x;g!==null;){x=g;var $=x.stateNode;if(x.tag===5&&$!==null&&(x=$,v!==null&&($=qi(g,v),$!=null&&S.push(eo(g,$,x)))),b)break;g=g.return}0<S.length&&(h=new y(h,w,null,n,d),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==wc&&(w=n.relatedTarget||n.fromElement)&&(Nn(w)||w[Xt]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Nn(w):null,w!==null&&(b=sr(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(S=yp,$="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=vp,$="onPointerLeave",v="onPointerEnter",g="pointer"),b=y==null?h:gr(y),x=w==null?h:gr(w),h=new S($,g+"leave",y,n,d),h.target=b,h.relatedTarget=x,$=null,Nn(d)===u&&(S=new S(v,g+"enter",w,n,d),S.target=x,S.relatedTarget=b,$=S),b=$,y&&w)t:{for(S=y,v=w,g=0,x=S;x;x=cr(x))g++;for(x=0,$=v;$;$=cr($))x++;for(;0<g-x;)S=cr(S),g--;for(;0<x-g;)v=cr(v),x--;for(;g--;){if(S===v||v!==null&&S===v.alternate)break t;S=cr(S),v=cr(v)}S=null}else S=null;y!==null&&Tp(f,h,y,S,!1),w!==null&&b!==null&&Tp(f,b,w,S,!0)}}e:{if(h=u?gr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=f$;else if(Sp(h))if(ry)k=y$;else{k=m$;var C=h$}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=g$);if(k&&(k=k(e,u))){ny(f,k,n,d);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&gc(h,"number",h.value)}switch(C=u?gr(u):window,e){case"focusin":(Sp(C)||C.contentEditable==="true")&&(hr=C,Ec=u,Mi=null);break;case"focusout":Mi=Ec=hr=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Pp(f,n,d);break;case"selectionchange":if($$)break;case"keydown":case"keyup":Pp(f,n,d)}var P;if(Hu)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fr?ey(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Zg&&n.locale!=="ko"&&(fr||E!=="onCompositionStart"?E==="onCompositionEnd"&&fr&&(P=Jg()):(fn=d,Vu="value"in fn?fn.value:fn.textContent,fr=!0)),C=As(u,E),0<C.length&&(E=new xp(E,e,null,n,d),f.push({event:E,listeners:C}),P?E.data=P:(P=ty(n),P!==null&&(E.data=P)))),(P=l$?c$(e,n):u$(e,n))&&(u=As(u,"onBeforeInput"),0<u.length&&(d=new xp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}fy(f,t)})}function eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function As(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qi(e,n),o!=null&&r.unshift(eo(e,o,i)),o=qi(e,t),o!=null&&r.push(eo(e,o,i))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=qi(n,o),c!=null&&s.unshift(eo(n,c,l))):i||(c=qi(n,o),c!=null&&s.push(eo(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var k$=/\r\n?/g,j$=/\u0000|\uFFFD/g;function Dp(e){return(typeof e=="string"?e:""+e).replace(k$,`
`).replace(j$,"")}function Bo(e,t,n){if(t=Dp(t),Dp(e)!==t&&n)throw Error(z(425))}function Rs(){}var Tc=null,Dc=null;function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,C$=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,P$=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(e){return Ap.resolve(null).then(e).catch(E$)}:Rc;function E$(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),Lt="__reactFiber$"+ti,to="__reactProps$"+ti,Xt="__reactContainer$"+ti,_c="__reactEvents$"+ti,z$="__reactListeners$"+ti,T$="__reactHandles$"+ti;function Nn(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rp(e);e!==null;){if(n=e[Lt])return n;e=Rp(e)}return t}e=n,n=e.parentNode}return null}function wo(e){return e=e[Lt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function fa(e){return e[to]||null}var Mc=[],yr=-1;function Dn(e){return{current:e}}function se(e){0>yr||(e.current=Mc[yr],Mc[yr]=null,yr--)}function te(e,t){yr++,Mc[yr]=e.current,e.current=t}var Pn={},Ve=Dn(Pn),Xe=Dn(!1),Xn=Pn;function Lr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function _s(){se(Xe),se(Ve)}function _p(e,t,n){if(Ve.current!==Pn)throw Error(z(168));te(Ve,t),te(Xe,n)}function my(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,h1(e)||"Unknown",i));return ge({},n,r)}function Ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Xn=Ve.current,te(Ve,e),te(Xe,Xe.current),!0}function Mp(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=my(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,se(Xe),se(Ve),te(Ve,e)):se(Xe),te(Xe,n)}var Wt=null,ha=!1,al=!1;function gy(e){Wt===null?Wt=[e]:Wt.push(e)}function D$(e){ha=!0,gy(e)}function An(){if(!al&&Wt!==null){al=!0;var e=0,t=J;try{var n=Wt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,ha=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),Ng(Ou,An),i}finally{J=t,al=!1}}return null}var xr=[],vr=0,Ls=null,Is=0,ht=[],mt=0,Jn=null,Ut=1,Ht="";function In(e,t){xr[vr++]=Is,xr[vr++]=Ls,Ls=e,Is=t}function yy(e,t,n){ht[mt++]=Ut,ht[mt++]=Ht,ht[mt++]=Jn,Jn=e;var r=Ut;e=Ht;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var o=32-Et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ut=1<<32-Et(t)+i|n<<i|r,Ht=o+e}else Ut=1<<o|n<<i|r,Ht=e}function qu(e){e.return!==null&&(In(e,1),yy(e,1,0))}function Ku(e){for(;e===Ls;)Ls=xr[--vr],xr[vr]=null,Is=xr[--vr],xr[vr]=null;for(;e===Jn;)Jn=ht[--mt],ht[mt]=null,Ht=ht[--mt],ht[mt]=null,Ut=ht[--mt],ht[mt]=null}var it=null,rt=null,de=!1,Pt=null;function xy(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,rt=vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Ut,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,rt=null,!0):!1;default:return!1}}function Lc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ic(e){if(de){var t=rt;if(t){var n=t;if(!Lp(e,t)){if(Lc(e))throw Error(z(418));t=vn(n.nextSibling);var r=it;t&&Lp(e,t)?xy(r,n):(e.flags=e.flags&-4097|2,de=!1,it=e)}}else{if(Lc(e))throw Error(z(418));e.flags=e.flags&-4097|2,de=!1,it=e}}}function Ip(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function No(e){if(e!==it)return!1;if(!de)return Ip(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ac(e.type,e.memoizedProps)),t&&(t=rt)){if(Lc(e))throw vy(),Error(z(418));for(;t;)xy(e,t),t=vn(t.nextSibling)}if(Ip(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=it?vn(e.stateNode.nextSibling):null;return!0}function vy(){for(var e=rt;e;)e=vn(e.nextSibling)}function Ir(){rt=it=null,de=!1}function Yu(e){Pt===null?Pt=[e]:Pt.push(e)}var A$=nn.ReactCurrentBatchConfig;function fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Vo(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Op(e){var t=e._init;return t(e._payload)}function $y(e){function t(v,g){if(e){var x=v.deletions;x===null?(v.deletions=[g],v.flags|=16):x.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=bn(v,g),v.index=0,v.sibling=null,v}function o(v,g,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<g?(v.flags|=2,g):x):(v.flags|=2,g)):(v.flags|=1048576,g)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,g,x,$){return g===null||g.tag!==6?(g=hl(x,v.mode,$),g.return=v,g):(g=i(g,x),g.return=v,g)}function c(v,g,x,$){var k=x.type;return k===pr?d(v,g,x.props.children,$,x.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ln&&Op(k)===g.type)?($=i(g,x.props),$.ref=fi(v,g,x),$.return=v,$):($=ys(x.type,x.key,x.props,null,v.mode,$),$.ref=fi(v,g,x),$.return=v,$)}function u(v,g,x,$){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=ml(x,v.mode,$),g.return=v,g):(g=i(g,x.children||[]),g.return=v,g)}function d(v,g,x,$,k){return g===null||g.tag!==7?(g=qn(x,v.mode,$,k),g.return=v,g):(g=i(g,x),g.return=v,g)}function f(v,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hl(""+g,v.mode,x),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Do:return x=ys(g.type,g.key,g.props,null,v.mode,x),x.ref=fi(v,null,g),x.return=v,x;case dr:return g=ml(g,v.mode,x),g.return=v,g;case ln:var $=g._init;return f(v,$(g._payload),x)}if(Ci(g)||li(g))return g=qn(g,v.mode,x,null),g.return=v,g;Vo(v,g)}return null}function h(v,g,x,$){var k=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:l(v,g,""+x,$);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Do:return x.key===k?c(v,g,x,$):null;case dr:return x.key===k?u(v,g,x,$):null;case ln:return k=x._init,h(v,g,k(x._payload),$)}if(Ci(x)||li(x))return k!==null?null:d(v,g,x,$,null);Vo(v,x)}return null}function y(v,g,x,$,k){if(typeof $=="string"&&$!==""||typeof $=="number")return v=v.get(x)||null,l(g,v,""+$,k);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Do:return v=v.get($.key===null?x:$.key)||null,c(g,v,$,k);case dr:return v=v.get($.key===null?x:$.key)||null,u(g,v,$,k);case ln:var C=$._init;return y(v,g,x,C($._payload),k)}if(Ci($)||li($))return v=v.get(x)||null,d(g,v,$,k,null);Vo(g,$)}return null}function w(v,g,x,$){for(var k=null,C=null,P=g,E=g=0,A=null;P!==null&&E<x.length;E++){P.index>E?(A=P,P=null):A=P.sibling;var R=h(v,P,x[E],$);if(R===null){P===null&&(P=A);break}e&&P&&R.alternate===null&&t(v,P),g=o(R,g,E),C===null?k=R:C.sibling=R,C=R,P=A}if(E===x.length)return n(v,P),de&&In(v,E),k;if(P===null){for(;E<x.length;E++)P=f(v,x[E],$),P!==null&&(g=o(P,g,E),C===null?k=P:C.sibling=P,C=P);return de&&In(v,E),k}for(P=r(v,P);E<x.length;E++)A=y(P,v,E,x[E],$),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?E:A.key),g=o(A,g,E),C===null?k=A:C.sibling=A,C=A);return e&&P.forEach(function(X){return t(v,X)}),de&&In(v,E),k}function S(v,g,x,$){var k=li(x);if(typeof k!="function")throw Error(z(150));if(x=k.call(x),x==null)throw Error(z(151));for(var C=k=null,P=g,E=g=0,A=null,R=x.next();P!==null&&!R.done;E++,R=x.next()){P.index>E?(A=P,P=null):A=P.sibling;var X=h(v,P,R.value,$);if(X===null){P===null&&(P=A);break}e&&P&&X.alternate===null&&t(v,P),g=o(X,g,E),C===null?k=X:C.sibling=X,C=X,P=A}if(R.done)return n(v,P),de&&In(v,E),k;if(P===null){for(;!R.done;E++,R=x.next())R=f(v,R.value,$),R!==null&&(g=o(R,g,E),C===null?k=R:C.sibling=R,C=R);return de&&In(v,E),k}for(P=r(v,P);!R.done;E++,R=x.next())R=y(P,v,E,R.value,$),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?E:R.key),g=o(R,g,E),C===null?k=R:C.sibling=R,C=R);return e&&P.forEach(function(pe){return t(v,pe)}),de&&In(v,E),k}function b(v,g,x,$){if(typeof x=="object"&&x!==null&&x.type===pr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Do:e:{for(var k=x.key,C=g;C!==null;){if(C.key===k){if(k=x.type,k===pr){if(C.tag===7){n(v,C.sibling),g=i(C,x.props.children),g.return=v,v=g;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ln&&Op(k)===C.type){n(v,C.sibling),g=i(C,x.props),g.ref=fi(v,C,x),g.return=v,v=g;break e}n(v,C);break}else t(v,C);C=C.sibling}x.type===pr?(g=qn(x.props.children,v.mode,$,x.key),g.return=v,v=g):($=ys(x.type,x.key,x.props,null,v.mode,$),$.ref=fi(v,g,x),$.return=v,v=$)}return s(v);case dr:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(v,g.sibling),g=i(g,x.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else t(v,g);g=g.sibling}g=ml(x,v.mode,$),g.return=v,v=g}return s(v);case ln:return C=x._init,b(v,g,C(x._payload),$)}if(Ci(x))return w(v,g,x,$);if(li(x))return S(v,g,x,$);Vo(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,x),g.return=v,v=g):(n(v,g),g=hl(x,v.mode,$),g.return=v,v=g),s(v)):n(v,g)}return b}var Or=$y(!0),wy=$y(!1),Os=Dn(null),Fs=null,$r=null,Qu=null;function Xu(){Qu=$r=Fs=null}function Ju(e){var t=Os.current;se(Os),e._currentValue=t}function Oc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){Fs=e,Qu=$r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Qu!==e)if(e={context:e,memoizedValue:t,next:null},$r===null){if(Fs===null)throw Error(z(308));$r=e,Fs.dependencies={lanes:0,firstContext:e}}else $r=$r.next=e;return t}var Vn=null;function Zu(e){Vn===null?Vn=[e]:Vn.push(e)}function Sy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function ed(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function by(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Zu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jt(e,n)}function ds(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fu(e,n)}}function Fp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bs(e,t,n,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,d=u=c=null,l=o;do{var h=l.lane,y=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,S=l;switch(h=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(y,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,h=typeof w=="function"?w.call(y,f,h):w,h==null)break e;f=ge({},f,h);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,c=f):d=d.next=y,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);er|=s,e.lanes=s,e.memoizedState=f}}function Bp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var So={},Ot=Dn(So),no=Dn(So),ro=Dn(So);function Wn(e){if(e===So)throw Error(z(174));return e}function td(e,t){switch(te(ro,t),te(no,e),te(Ot,So),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xc(t,e)}se(Ot),te(Ot,t)}function Fr(){se(Ot),se(no),se(ro)}function ky(e){Wn(ro.current);var t=Wn(Ot.current),n=xc(t,e.type);t!==n&&(te(no,e),te(Ot,n))}function nd(e){no.current===e&&(se(Ot),se(no))}var fe=Dn(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function rd(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var ps=nn.ReactCurrentDispatcher,cl=nn.ReactCurrentBatchConfig,Zn=0,me=null,je=null,Ee=null,Vs=!1,Li=!1,io=0,R$=0;function Ie(){throw Error(z(321))}function id(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function od(e,t,n,r,i,o){if(Zn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ps.current=e===null||e.memoizedState===null?I$:O$,e=n(r,i),Li){o=0;do{if(Li=!1,io=0,25<=o)throw Error(z(301));o+=1,Ee=je=null,t.updateQueue=null,ps.current=F$,e=n(r,i)}while(Li)}if(ps.current=Ws,t=je!==null&&je.next!==null,Zn=0,Ee=je=me=null,Vs=!1,t)throw Error(z(300));return e}function sd(){var e=io!==0;return io=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?me.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function vt(){if(je===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ee===null?me.memoizedState:Ee.next;if(t!==null)Ee=t,je=e;else{if(e===null)throw Error(z(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ee===null?me.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function oo(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=vt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((Zn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,s=r):c=c.next=f,me.lanes|=d,er|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,Dt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,er|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=vt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Dt(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jy(){}function Cy(e,t){var n=me,r=vt(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,Qe=!0),r=r.queue,ad(zy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,so(9,Ey.bind(null,n,r,i,t),void 0,null),De===null)throw Error(z(349));Zn&30||Py(n,t,i)}return i}function Py(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ey(e,t,n,r){t.value=n,t.getSnapshot=r,Ty(t)&&Dy(e)}function zy(e,t,n){return n(function(){Ty(t)&&Dy(e)})}function Ty(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Dy(e){var t=Jt(e,1);t!==null&&zt(t,e,1,-1)}function Np(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:e},t.queue=e,e=e.dispatch=L$.bind(null,me,e),[t.memoizedState,e]}function so(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ay(){return vt().memoizedState}function fs(e,t,n,r){var i=_t();me.flags|=e,i.memoizedState=so(1|t,n,void 0,r===void 0?null:r)}function ma(e,t,n,r){var i=vt();r=r===void 0?null:r;var o=void 0;if(je!==null){var s=je.memoizedState;if(o=s.destroy,r!==null&&id(r,s.deps)){i.memoizedState=so(t,n,o,r);return}}me.flags|=e,i.memoizedState=so(1|t,n,o,r)}function Vp(e,t){return fs(8390656,8,e,t)}function ad(e,t){return ma(2048,8,e,t)}function Ry(e,t){return ma(4,2,e,t)}function _y(e,t){return ma(4,4,e,t)}function My(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ly(e,t,n){return n=n!=null?n.concat([e]):null,ma(4,4,My.bind(null,t,e),n)}function ld(){}function Iy(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&id(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oy(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&id(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fy(e,t,n){return Zn&21?(Dt(n,t)||(n=Ug(),me.lanes|=n,er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function _$(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{J=n,cl.transition=r}}function By(){return vt().memoizedState}function M$(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ny(e))Vy(t,n);else if(n=Sy(e,t,n,r),n!==null){var i=He();zt(n,e,r,i),Wy(n,t,r)}}function L$(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ny(e))Vy(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,s)){var c=t.interleaved;c===null?(i.next=i,Zu(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Sy(e,t,i,r),n!==null&&(i=He(),zt(n,e,r,i),Wy(n,t,r))}}function Ny(e){var t=e.alternate;return e===me||t!==null&&t===me}function Vy(e,t){Li=Vs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fu(e,n)}}var Ws={readContext:xt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},I$={readContext:xt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Vp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fs(4194308,4,My.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return fs(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=M$.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:Np,useDebugValue:ld,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=Np(!1),t=e[0];return e=_$.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=_t();if(de){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),De===null)throw Error(z(349));Zn&30||Py(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vp(zy.bind(null,r,o,e),[e]),r.flags|=2048,so(9,Ey.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=_t(),t=De.identifierPrefix;if(de){var n=Ht,r=Ut;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=io++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=R$++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},O$={readContext:xt,useCallback:Iy,useContext:xt,useEffect:ad,useImperativeHandle:Ly,useInsertionEffect:Ry,useLayoutEffect:_y,useMemo:Oy,useReducer:ul,useRef:Ay,useState:function(){return ul(oo)},useDebugValue:ld,useDeferredValue:function(e){var t=vt();return Fy(t,je.memoizedState,e)},useTransition:function(){var e=ul(oo)[0],t=vt().memoizedState;return[e,t]},useMutableSource:jy,useSyncExternalStore:Cy,useId:By,unstable_isNewReconciler:!1},F$={readContext:xt,useCallback:Iy,useContext:xt,useEffect:ad,useImperativeHandle:Ly,useInsertionEffect:Ry,useLayoutEffect:_y,useMemo:Oy,useReducer:dl,useRef:Ay,useState:function(){return dl(oo)},useDebugValue:ld,useDeferredValue:function(e){var t=vt();return je===null?t.memoizedState=e:Fy(t,je.memoizedState,e)},useTransition:function(){var e=dl(oo)[0],t=vt().memoizedState;return[e,t]},useMutableSource:jy,useSyncExternalStore:Cy,useId:By,unstable_isNewReconciler:!1};function jt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=Sn(e),o=qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(zt(t,e,i,r),ds(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=Sn(e),o=qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(zt(t,e,i,r),ds(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=Sn(e),i=qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=$n(e,i,r),t!==null&&(zt(t,e,r,n),ds(t,e,r))}};function Wp(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ji(n,r)||!Ji(i,o):!0}function Uy(e,t,n){var r=!1,i=Pn,o=t.contextType;return typeof o=="object"&&o!==null?o=xt(o):(i=Je(t)?Xn:Ve.current,r=t.contextTypes,o=(r=r!=null)?Lr(e,i):Pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Up(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function Bc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ed(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=xt(o):(o=Je(t)?Xn:Ve.current,i.context=Lr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ga.enqueueReplaceState(i,i.state,null),Bs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var n="",r=t;do n+=f1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B$=typeof WeakMap=="function"?WeakMap:Map;function Hy(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Xc=r),Nc(e,t)},n}function Gy(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Nc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Nc(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Hp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B$;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ew.bind(null,e,t,n),t.then(e,e))}function Gp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var N$=nn.ReactCurrentOwner,Qe=!1;function Ue(e,t,n,r){t.child=e===null?wy(t,null,n,r):Or(t,e.child,n,r)}function Kp(e,t,n,r,i){n=n.render;var o=t.ref;return Ar(t,i),r=od(e,t,n,r,o,i),n=sd(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(de&&n&&qu(t),t.flags|=1,Ue(e,t,r,i),t.child)}function Yp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!gd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qy(e,t,o,r,i)):(e=ys(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(s,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=bn(o,r),e.ref=t.ref,e.return=t,t.child=e}function qy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ji(o,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return Vc(e,t,n,r,i)}function Ky(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Sr,nt),nt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Sr,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Sr,nt),nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Sr,nt),nt|=r;return Ue(e,t,i,n),t.child}function Yy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vc(e,t,n,r,i){var o=Je(n)?Xn:Ve.current;return o=Lr(t,o),Ar(t,i),n=od(e,t,n,r,o,i),r=sd(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(de&&r&&qu(t),t.flags|=1,Ue(e,t,n,i),t.child)}function Qp(e,t,n,r,i){if(Je(n)){var o=!0;Ms(t)}else o=!1;if(Ar(t,i),t.stateNode===null)hs(e,t),Uy(t,n,r),Bc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=Je(n)?Xn:Ve.current,u=Lr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Up(t,s,r,u),cn=!1;var h=t.memoizedState;s.state=h,Bs(t,r,s,i),c=t.memoizedState,l!==r||h!==c||Xe.current||cn?(typeof d=="function"&&(Fc(t,n,d,r),c=t.memoizedState),(l=cn||Wp(t,n,l,r,h,c,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,by(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:jt(t.type,l),s.props=u,f=t.pendingProps,h=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=xt(c):(c=Je(n)?Xn:Ve.current,c=Lr(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==c)&&Up(t,s,r,c),cn=!1,h=t.memoizedState,s.state=h,Bs(t,r,s,i);var w=t.memoizedState;l!==f||h!==w||Xe.current||cn?(typeof y=="function"&&(Fc(t,n,y,r),w=t.memoizedState),(u=cn||Wp(t,n,u,r,h,w,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wc(e,t,n,r,o,i)}function Wc(e,t,n,r,i,o){Yy(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Mp(t,n,!1),Zt(e,t,o);r=t.stateNode,N$.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,l,o)):Ue(e,t,l,o),t.memoizedState=r.state,i&&Mp(t,n,!0),t.child}function Qy(e){var t=e.stateNode;t.pendingContext?_p(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_p(e,t.context,!1),td(e,t.containerInfo)}function Xp(e,t,n,r,i){return Ir(),Yu(i),t.flags|=256,Ue(e,t,n,r),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Hc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xy(e,t,n){var r=t.pendingProps,i=fe.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(fe,i&1),e===null)return Ic(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=va(s,r,0,null),e=qn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hc(n),t.memoizedState=Uc,e):cd(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return V$(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=bn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=bn(l,o):(o=qn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Hc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Uc,r}return o=e.child,e=o.sibling,r=bn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cd(e,t){return t=va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&Yu(r),Or(t,e.child,null,n),e=cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V$(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(z(422))),Wo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=va({mode:"visible",children:r.children},i,0,null),o=qn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Or(t,e.child,null,s),t.child.memoizedState=Hc(s),t.memoizedState=Uc,o);if(!(t.mode&1))return Wo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(z(419)),r=pl(o,r,void 0),Wo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Qe||l){if(r=De,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jt(e,i),zt(r,e,i,-1))}return md(),r=pl(Error(z(421))),Wo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rt=vn(i.nextSibling),it=t,de=!0,Pt=null,e!==null&&(ht[mt++]=Ut,ht[mt++]=Ht,ht[mt++]=Jn,Ut=e.id,Ht=e.overflow,Jn=t),t=cd(t,r.children),t.flags|=4096,t)}function Jp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oc(e.return,t,n)}function fl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ue(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jp(e,n,t);else if(e.tag===19)Jp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ns(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ns(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fl(t,!0,n,null,o);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function W$(e,t,n){switch(t.tag){case 3:Qy(t),Ir();break;case 5:ky(t);break;case 1:Je(t.type)&&Ms(t);break;case 4:td(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Os,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Xy(e,t,n):(te(fe,fe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);te(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ky(e,t,n)}return Zt(e,t,n)}var Zy,Gc,e0,t0;Zy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gc=function(){};e0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wn(Ot.current);var o=null;switch(n){case"input":i=hc(e,i),r=hc(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=yc(e,i),r=yc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rs)}vc(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&re("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};t0=function(e,t,n,r){n!==r&&(t.flags|=4)};function hi(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function U$(e,t,n){var r=t.pendingProps;switch(Ku(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Je(t.type)&&_s(),Oe(t),null;case 3:return r=t.stateNode,Fr(),se(Xe),se(Ve),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(eu(Pt),Pt=null))),Gc(e,t),Oe(t),null;case 5:nd(t);var i=Wn(ro.current);if(n=t.type,e!==null&&t.stateNode!=null)e0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Oe(t),null}if(e=Wn(Ot.current),No(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Lt]=t,r[to]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Ei.length;i++)re(Ei[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":ap(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":cp(r,o),re("invalid",r)}vc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Bo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Bo(r.textContent,l,e),i=["children",""+l]):Hi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&re("scroll",r)}switch(n){case"input":Ao(r),lp(r,o,!0);break;case"textarea":Ao(r),up(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Rs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Lt]=t,e[to]=r,Zy(e,t,!1,!1),t.stateNode=e;e:{switch(s=$c(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ei.length;i++)re(Ei[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":ap(e,r),i=hc(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),re("invalid",e);break;case"textarea":cp(e,r),i=yc(e,r),re("invalid",e);break;default:i=r}vc(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Ag(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Tg(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Gi(e,c):typeof c=="number"&&Gi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&re("scroll",e):c!=null&&Ru(e,o,c,s))}switch(n){case"input":Ao(e),lp(e,r,!1);break;case"textarea":Ao(e),up(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Er(e,!!r.multiple,o,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Rs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)t0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Wn(ro.current),Wn(Ot.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(o=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return Oe(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&rt!==null&&t.mode&1&&!(t.flags&128))vy(),Ir(),t.flags|=98560,o=!1;else if(o=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[Lt]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),o=!1}else Pt!==null&&(eu(Pt),Pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Ce===0&&(Ce=3):md())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Fr(),Gc(e,t),e===null&&Zi(t.stateNode.containerInfo),Oe(t),null;case 10:return Ju(t.type._context),Oe(t),null;case 17:return Je(t.type)&&_s(),Oe(t),null;case 19:if(se(fe),o=t.memoizedState,o===null)return Oe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)hi(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ns(e),s!==null){for(t.flags|=128,hi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(fe,fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ve()>Nr&&(t.flags|=128,r=!0,hi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ns(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!de)return Oe(t),null}else 2*ve()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,hi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ve(),t.sibling=null,n=fe.current,te(fe,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return hd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nt&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function H$(e,t){switch(Ku(t),t.tag){case 1:return Je(t.type)&&_s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),se(Xe),se(Ve),rd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nd(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Fr(),null;case 10:return Ju(t.type._context),null;case 22:case 23:return hd(),null;case 24:return null;default:return null}}var Uo=!1,Be=!1,G$=typeof WeakSet=="function"?WeakSet:Set,D=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function qc(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Zp=!1;function q$(e,t){if(Tc=Ts,e=sy(),Gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=s),h===o&&++d===r&&(c=s),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:e,selectionRange:n},Ts=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,b=w.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?S:jt(t.type,S),b);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch($){xe(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return w=Zp,Zp=!1,w}function Ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&qc(t,n,o)}i=i.next}while(i!==r)}}function ya(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function n0(e){var t=e.alternate;t!==null&&(e.alternate=null,n0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[to],delete t[_c],delete t[z$],delete t[T$])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function r0(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||r0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rs));else if(r!==4&&(e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}var Re=null,Ct=!1;function on(e,t,n){for(n=n.child;n!==null;)i0(e,t,n),n=n.sibling}function i0(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ca,n)}catch{}switch(n.tag){case 5:Be||wr(n,t);case 6:var r=Re,i=Ct;Re=null,on(e,t,n),Re=r,Ct=i,Re!==null&&(Ct?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Ct?(e=Re,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Qi(e)):sl(Re,n.stateNode));break;case 4:r=Re,i=Ct,Re=n.stateNode.containerInfo,Ct=!0,on(e,t,n),Re=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&qc(n,t,s),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!Be&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,t,l)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,on(e,t,n),Be=r):on(e,t,n);break;default:on(e,t,n)}}function tf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new G$),t.forEach(function(r){var i=nw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Re=l.stateNode,Ct=!1;break e;case 3:Re=l.stateNode.containerInfo,Ct=!0;break e;case 4:Re=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Re===null)throw Error(z(160));i0(o,s,i),Re=null,Ct=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)o0(t,e),t=t.sibling}function o0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Rt(e),r&4){try{Ii(3,e,e.return),ya(3,e)}catch(S){xe(e,e.return,S)}try{Ii(5,e,e.return)}catch(S){xe(e,e.return,S)}}break;case 1:kt(t,e),Rt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(kt(t,e),Rt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{Gi(i,"")}catch(S){xe(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Pg(i,o),$c(l,s);var u=$c(l,o);for(s=0;s<c.length;s+=2){var d=c[s],f=c[s+1];d==="style"?Ag(i,f):d==="dangerouslySetInnerHTML"?Tg(i,f):d==="children"?Gi(i,f):Ru(i,d,f,u)}switch(l){case"input":mc(i,o);break;case"textarea":Eg(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Er(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Er(i,!!o.multiple,o.defaultValue,!0):Er(i,!!o.multiple,o.multiple?[]:"",!1))}i[to]=o}catch(S){xe(e,e.return,S)}}break;case 6:if(kt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){xe(e,e.return,S)}}break;case 3:if(kt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(S){xe(e,e.return,S)}break;case 4:kt(t,e),Rt(e);break;case 13:kt(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(pd=ve())),r&4&&tf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||d,kt(t,e),Be=u):kt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(f=D=d;D!==null;){switch(h=D,y=h.child,h.tag){case 0:case 11:case 14:case 15:Ii(4,h,h.return);break;case 1:wr(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){xe(r,n,S)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){rf(f);continue}}y!==null?(y.return=h,D=y):rf(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Dg("display",s))}catch(S){xe(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(S){xe(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kt(t,e),Rt(e),r&4&&tf(e);break;case 21:break;default:kt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(r0(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gi(i,""),r.flags&=-33);var o=ef(e);Qc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=ef(e);Yc(e,l,s);break;default:throw Error(z(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K$(e,t,n){D=e,s0(e)}function s0(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Uo;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Be;l=Uo;var u=Be;if(Uo=s,(Be=c)&&!u)for(D=i;D!==null;)s=D,c=s.child,s.tag===22&&s.memoizedState!==null?of(i):c!==null?(c.return=s,D=c):of(i);for(;o!==null;)D=o,s0(o),o=o.sibling;D=i,Uo=l,Be=u}nf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):nf(e)}}function nf(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||ya(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Bp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bp(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Be||t.flags&512&&Kc(t)}catch(h){xe(t,t.return,h)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function rf(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function of(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ya(4,t)}catch(c){xe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){xe(t,i,c)}}var o=t.return;try{Kc(t)}catch(c){xe(t,o,c)}break;case 5:var s=t.return;try{Kc(t)}catch(c){xe(t,s,c)}}}catch(c){xe(t,t.return,c)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var Y$=Math.ceil,Us=nn.ReactCurrentDispatcher,ud=nn.ReactCurrentOwner,yt=nn.ReactCurrentBatchConfig,K=0,De=null,be=null,_e=0,nt=0,Sr=Dn(0),Ce=0,ao=null,er=0,xa=0,dd=0,Oi=null,Ye=null,pd=0,Nr=1/0,Nt=null,Hs=!1,Xc=null,wn=null,Ho=!1,hn=null,Gs=0,Fi=0,Jc=null,ms=-1,gs=0;function He(){return K&6?ve():ms!==-1?ms:ms=ve()}function Sn(e){return e.mode&1?K&2&&_e!==0?_e&-_e:A$.transition!==null?(gs===0&&(gs=Ug()),gs):(e=J,e!==0||(e=window.event,e=e===void 0?16:Xg(e.type)),e):1}function zt(e,t,n,r){if(50<Fi)throw Fi=0,Jc=null,Error(z(185));vo(e,n,r),(!(K&2)||e!==De)&&(e===De&&(!(K&2)&&(xa|=n),Ce===4&&pn(e,_e)),Ze(e,r),n===1&&K===0&&!(t.mode&1)&&(Nr=ve()+500,ha&&An()))}function Ze(e,t){var n=e.callbackNode;A1(e,t);var r=zs(e,e===De?_e:0);if(r===0)n!==null&&fp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fp(n),t===1)e.tag===0?D$(sf.bind(null,e)):gy(sf.bind(null,e)),P$(function(){!(K&6)&&An()}),n=null;else{switch(Hg(r)){case 1:n=Ou;break;case 4:n=Vg;break;case 16:n=Es;break;case 536870912:n=Wg;break;default:n=Es}n=h0(n,a0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function a0(e,t){if(ms=-1,gs=0,K&6)throw Error(z(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=zs(e,e===De?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qs(e,r);else{t=r;var i=K;K|=2;var o=c0();(De!==e||_e!==t)&&(Nt=null,Nr=ve()+500,Gn(e,t));do try{J$();break}catch(l){l0(e,l)}while(!0);Xu(),Us.current=o,K=i,be!==null?t=0:(De=null,_e=0,t=Ce)}if(t!==0){if(t===2&&(i=jc(e),i!==0&&(r=i,t=Zc(e,i))),t===1)throw n=ao,Gn(e,0),pn(e,r),Ze(e,ve()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Q$(i)&&(t=qs(e,r),t===2&&(o=jc(e),o!==0&&(r=o,t=Zc(e,o))),t===1))throw n=ao,Gn(e,0),pn(e,r),Ze(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:On(e,Ye,Nt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=pd+500-ve(),10<t)){if(zs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rc(On.bind(null,e,Ye,Nt),t);break}On(e,Ye,Nt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y$(r/1960))-r,10<r){e.timeoutHandle=Rc(On.bind(null,e,Ye,Nt),r);break}On(e,Ye,Nt);break;case 5:On(e,Ye,Nt);break;default:throw Error(z(329))}}}return Ze(e,ve()),e.callbackNode===n?a0.bind(null,e):null}function Zc(e,t){var n=Oi;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=qs(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&eu(t)),e}function eu(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Q$(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~dd,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function sf(e){if(K&6)throw Error(z(327));Rr();var t=zs(e,0);if(!(t&1))return Ze(e,ve()),null;var n=qs(e,t);if(e.tag!==0&&n===2){var r=jc(e);r!==0&&(t=r,n=Zc(e,r))}if(n===1)throw n=ao,Gn(e,0),pn(e,t),Ze(e,ve()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,Ye,Nt),Ze(e,ve()),null}function fd(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Nr=ve()+500,ha&&An())}}function tr(e){hn!==null&&hn.tag===0&&!(K&6)&&Rr();var t=K;K|=1;var n=yt.transition,r=J;try{if(yt.transition=null,J=1,e)return e()}finally{J=r,yt.transition=n,K=t,!(K&6)&&An()}}function hd(){nt=Sr.current,se(Sr)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,C$(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_s();break;case 3:Fr(),se(Xe),se(Ve),rd();break;case 5:nd(r);break;case 4:Fr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:Ju(r.type._context);break;case 22:case 23:hd()}n=n.return}if(De=e,be=e=bn(e.current,null),_e=nt=t,Ce=0,ao=null,dd=xa=er=0,Ye=Oi=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Vn=null}return e}function l0(e,t){do{var n=be;try{if(Xu(),ps.current=Ws,Vs){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vs=!1}if(Zn=0,Ee=je=me=null,Li=!1,io=0,ud.current=null,n===null||n.return===null){Ce=1,ao=t,be=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=_e,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Gp(s);if(y!==null){y.flags&=-257,qp(y,s,l,o,t),y.mode&1&&Hp(o,u,t),t=y,c=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(c),t.updateQueue=S}else w.add(c);break e}else{if(!(t&1)){Hp(o,u,t),md();break e}c=Error(z(426))}}else if(de&&l.mode&1){var b=Gp(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),qp(b,s,l,o,t),Yu(Br(c,l));break e}}o=c=Br(c,l),Ce!==4&&(Ce=2),Oi===null?Oi=[o]:Oi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Hy(o,c,t);Fp(o,v);break e;case 1:l=c;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(wn===null||!wn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=Gy(o,l,t);Fp(o,$);break e}}o=o.return}while(o!==null)}d0(n)}catch(k){t=k,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function c0(){var e=Us.current;return Us.current=Ws,e===null?Ws:e}function md(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),De===null||!(er&268435455)&&!(xa&268435455)||pn(De,_e)}function qs(e,t){var n=K;K|=2;var r=c0();(De!==e||_e!==t)&&(Nt=null,Gn(e,t));do try{X$();break}catch(i){l0(e,i)}while(!0);if(Xu(),K=n,Us.current=r,be!==null)throw Error(z(261));return De=null,_e=0,Ce}function X$(){for(;be!==null;)u0(be)}function J$(){for(;be!==null&&!b1();)u0(be)}function u0(e){var t=f0(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?d0(e):be=t,ud.current=null}function d0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=H$(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,be=null;return}}else if(n=U$(n,t,nt),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ce===0&&(Ce=5)}function On(e,t,n){var r=J,i=yt.transition;try{yt.transition=null,J=1,Z$(e,t,n,r)}finally{yt.transition=i,J=r}return null}function Z$(e,t,n,r){do Rr();while(hn!==null);if(K&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(R1(e,o),e===De&&(be=De=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,h0(Es,function(){return Rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=yt.transition,yt.transition=null;var s=J;J=1;var l=K;K|=4,ud.current=null,q$(e,n),o0(n,e),v$(Dc),Ts=!!Tc,Dc=Tc=null,e.current=n,K$(n),k1(),K=l,J=s,yt.transition=o}else e.current=n;if(Ho&&(Ho=!1,hn=e,Gs=i),o=e.pendingLanes,o===0&&(wn=null),P1(n.stateNode),Ze(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hs)throw Hs=!1,e=Xc,Xc=null,e;return Gs&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===Jc?Fi++:(Fi=0,Jc=e):Fi=0,An(),null}function Rr(){if(hn!==null){var e=Hg(Gs),t=yt.transition,n=J;try{if(yt.transition=null,J=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,Gs=0,K&6)throw Error(z(331));var i=K;for(K|=4,D=e.current;D!==null;){var o=D,s=o.child;if(D.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Ii(8,d,o)}var f=d.child;if(f!==null)f.return=d,D=f;else for(;D!==null;){d=D;var h=d.sibling,y=d.return;if(n0(d),d===u){D=null;break}if(h!==null){h.return=y,D=h;break}D=y}}}var w=o.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}D=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,D=s;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ii(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,D=v;break e}D=o.return}}var g=e.current;for(D=g;D!==null;){s=D;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,D=x;else e:for(s=g;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ya(9,l)}}catch(k){xe(l,l.return,k)}if(l===s){D=null;break e}var $=l.sibling;if($!==null){$.return=l.return,D=$;break e}D=l.return}}if(K=i,An(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ca,e)}catch{}r=!0}return r}finally{J=n,yt.transition=t}}return!1}function af(e,t,n){t=Br(n,t),t=Hy(e,t,1),e=$n(e,t,1),t=He(),e!==null&&(vo(e,1,t),Ze(e,t))}function xe(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Br(n,e),e=Gy(t,e,1),t=$n(t,e,1),e=He(),t!==null&&(vo(t,1,e),Ze(t,e));break}}t=t.return}}function ew(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(_e&n)===n&&(Ce===4||Ce===3&&(_e&130023424)===_e&&500>ve()-pd?Gn(e,0):dd|=n),Ze(e,t)}function p0(e,t){t===0&&(e.mode&1?(t=Mo,Mo<<=1,!(Mo&130023424)&&(Mo=4194304)):t=1);var n=He();e=Jt(e,t),e!==null&&(vo(e,t,n),Ze(e,n))}function tw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),p0(e,n)}function nw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),p0(e,n)}var f0;f0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,W$(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,de&&t.flags&1048576&&yy(t,Is,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hs(e,t),e=t.pendingProps;var i=Lr(t,Ve.current);Ar(t,n),i=od(null,t,r,e,i,n);var o=sd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(o=!0,Ms(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ed(t),i.updater=ga,t.stateNode=i,i._reactInternals=t,Bc(t,r,e,n),t=Wc(null,t,r,!0,o,n)):(t.tag=0,de&&o&&qu(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=iw(r),e=jt(r,e),i){case 0:t=Vc(null,t,r,e,n);break e;case 1:t=Qp(null,t,r,e,n);break e;case 11:t=Kp(null,t,r,e,n);break e;case 14:t=Yp(null,t,r,jt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Vc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Qp(e,t,r,i,n);case 3:e:{if(Qy(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,by(e,t),Bs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Br(Error(z(423)),t),t=Xp(e,t,r,n,i);break e}else if(r!==i){i=Br(Error(z(424)),t),t=Xp(e,t,r,n,i);break e}else for(rt=vn(t.stateNode.containerInfo.firstChild),it=t,de=!0,Pt=null,n=wy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){t=Zt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return ky(t),e===null&&Ic(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ac(r,i)?s=null:o!==null&&Ac(r,o)&&(t.flags|=32),Yy(e,t),Ue(e,t,s,n),t.child;case 6:return e===null&&Ic(t),null;case 13:return Xy(e,t,n);case 4:return td(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Or(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Kp(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,te(Os,r._currentValue),r._currentValue=s,o!==null)if(Dt(o.value,s)){if(o.children===i.children&&!Xe.current){t=Zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=qt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Oc(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(z(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Oc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ar(t,n),i=xt(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=jt(r,t.pendingProps),i=jt(r.type,i),Yp(e,t,r,i,n);case 15:return qy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),hs(e,t),t.tag=1,Je(r)?(e=!0,Ms(t)):e=!1,Ar(t,n),Uy(t,r,i),Bc(t,r,i,n),Wc(null,t,r,!0,e,n);case 19:return Jy(e,t,n);case 22:return Ky(e,t,n)}throw Error(z(156,t.tag))};function h0(e,t){return Ng(e,t)}function rw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new rw(e,t,n,r)}function gd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iw(e){if(typeof e=="function")return gd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mu)return 11;if(e===Lu)return 14}return 2}function bn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ys(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")gd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case pr:return qn(n.children,i,o,t);case _u:s=8,i|=8;break;case uc:return e=gt(12,n,t,i|2),e.elementType=uc,e.lanes=o,e;case dc:return e=gt(13,n,t,i),e.elementType=dc,e.lanes=o,e;case pc:return e=gt(19,n,t,i),e.elementType=pc,e.lanes=o,e;case kg:return va(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sg:s=10;break e;case bg:s=9;break e;case Mu:s=11;break e;case Lu:s=14;break e;case ln:s=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=gt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qn(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function va(e,t,n,r){return e=gt(22,e,r,t),e.elementType=kg,e.lanes=n,e.stateNode={isHidden:!1},e}function hl(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ow(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ya(0),this.expirationTimes=Ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yd(e,t,n,r,i,o,s,l,c){return e=new ow(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(o),e}function sw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function m0(e){if(!e)return Pn;e=e._reactInternals;e:{if(sr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Je(n))return my(e,n,t)}return t}function g0(e,t,n,r,i,o,s,l,c){return e=yd(n,r,!0,e,i,o,s,l,c),e.context=m0(null),n=e.current,r=He(),i=Sn(n),o=qt(r,i),o.callback=t??null,$n(n,o,i),e.current.lanes=i,vo(e,i,r),Ze(e,r),e}function $a(e,t,n,r){var i=t.current,o=He(),s=Sn(i);return n=m0(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(i,t,s),e!==null&&(zt(e,i,s,o),ds(e,i,s)),s}function Ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xd(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function aw(){return null}var y0=typeof reportError=="function"?reportError:function(e){console.error(e)};function vd(e){this._internalRoot=e}wa.prototype.render=vd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));$a(e,t,null,null)};wa.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tr(function(){$a(null,e,null,null)}),t[Xt]=null}};function wa(e){this._internalRoot=e}wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&Qg(e)}};function $d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cf(){}function lw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ks(s);o.call(u)}}var s=g0(t,r,e,0,null,!1,!1,"",cf);return e._reactRootContainer=s,e[Xt]=s.current,Zi(e.nodeType===8?e.parentNode:e),tr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ks(c);l.call(u)}}var c=yd(e,0,!1,null,null,!1,!1,"",cf);return e._reactRootContainer=c,e[Xt]=c.current,Zi(e.nodeType===8?e.parentNode:e),tr(function(){$a(t,c,n,r)}),c}function ba(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Ks(s);l.call(c)}}$a(t,s,e,i)}else s=lw(n,t,e,i,r);return Ks(s)}Gg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pi(t.pendingLanes);n!==0&&(Fu(t,n|1),Ze(t,ve()),!(K&6)&&(Nr=ve()+500,An()))}break;case 13:tr(function(){var r=Jt(e,1);if(r!==null){var i=He();zt(r,e,1,i)}}),xd(e,1)}};Bu=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=He();zt(t,e,134217728,n)}xd(e,134217728)}};qg=function(e){if(e.tag===13){var t=Sn(e),n=Jt(e,t);if(n!==null){var r=He();zt(n,e,t,r)}xd(e,t)}};Kg=function(){return J};Yg=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Sc=function(e,t,n){switch(t){case"input":if(mc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fa(r);if(!i)throw Error(z(90));Cg(r),mc(r,i)}}}break;case"textarea":Eg(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};Mg=fd;Lg=tr;var cw={usingClientEntryPoint:!1,Events:[wo,gr,fa,Rg,_g,fd]},mi={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uw={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fg(e),e===null?null:e.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{ca=Go.inject(uw),It=Go}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(t))throw Error(z(200));return sw(e,t,null,n)};lt.createRoot=function(e,t){if(!$d(e))throw Error(z(299));var n=!1,r="",i=y0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yd(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,Zi(e.nodeType===8?e.parentNode:e),new vd(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Fg(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return tr(e)};lt.hydrate=function(e,t,n){if(!Sa(t))throw Error(z(200));return ba(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!$d(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=y0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=g0(t,null,e,1,n??null,i,!1,o,s),e[Xt]=t.current,Zi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wa(t)};lt.render=function(e,t,n){if(!Sa(t))throw Error(z(200));return ba(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!Sa(e))throw Error(z(40));return e._reactRootContainer?(tr(function(){ba(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};lt.unstable_batchedUpdates=fd;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sa(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return ba(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function x0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x0)}catch(e){console.error(e)}}x0(),xg.exports=lt;var dw=xg.exports,uf=dw;lc.createRoot=uf.createRoot,lc.hydrateRoot=uf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(this,arguments)}var mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mn||(mn={}));const df="popstate";function pw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return tu("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$0(i)}return hw(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function v0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fw(){return Math.random().toString(36).substr(2,8)}function pf(e,t){return{usr:e.state,key:e.key,idx:t}}function tu(e,t,n,r){return n===void 0&&(n=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ni(t):t,{state:n,key:t&&t.key||r||fw()})}function $0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ni(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=mn.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(lo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=mn.Pop;let b=d(),v=b==null?null:b-u;u=b,c&&c({action:l,location:S.location,delta:v})}function h(b,v){l=mn.Push;let g=tu(S.location,b,v);u=d()+1;let x=pf(g,u),$=S.createHref(g);try{s.pushState(x,"",$)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign($)}o&&c&&c({action:l,location:S.location,delta:1})}function y(b,v){l=mn.Replace;let g=tu(S.location,b,v);u=d();let x=pf(g,u),$=S.createHref(g);s.replaceState(x,"",$),o&&c&&c({action:l,location:S.location,delta:0})}function w(b){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof b=="string"?b:$0(b);return g=g.replace(/ $/,"%20"),Pe(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let S={get action(){return l},get location(){return e(i,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(df,f),c=b,()=>{i.removeEventListener(df,f),c=null}},createHref(b){return t(i,b)},createURL:w,encodeLocation(b){let v=w(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:y,go(b){return s.go(b)}};return S}var ff;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ff||(ff={}));function mw(e,t,n){return n===void 0&&(n="/"),gw(e,t,n)}function gw(e,t,n,r){let i=typeof t=="string"?ni(t):t,o=b0(i.pathname||"/",n);if(o==null)return null;let s=w0(e);yw(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=zw(o);l=Cw(s[c],u)}return l}function w0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Pe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Kn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),w0(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:kw(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of S0(o.path))i(o,s,c)}),t}function S0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=S0(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function yw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:jw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xw=/^:[\w-]+$/,vw=3,$w=2,ww=1,Sw=10,bw=-2,hf=e=>e==="*";function kw(e,t){let n=e.split("/"),r=n.length;return n.some(hf)&&(r+=bw),t&&(r+=$w),n.filter(i=>!hf(i)).reduce((i,o)=>i+(xw.test(o)?vw:o===""?ww:Sw),r)}function jw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Cw(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Pw({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Kn([o,f.pathname]),pathnameBase:Mw(Kn([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=Kn([o,f.pathnameBase]))}return s}function Pw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ew(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:y}=d;if(h==="*"){let S=l[f]||"";s=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const w=l[f];return y&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Ew(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),v0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return v0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function b0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Tw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ni(e):e;return{pathname:n?n.startsWith("/")?n:Dw(n,t):t,search:Lw(r),hash:Iw(i)}}function Dw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Aw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Rw(e,t){let n=Aw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _w(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ni(e):(i=lo({},e),Pe(!i.pathname||!i.pathname.includes("?"),gl("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),gl("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),gl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?t[f]:"/"}let c=Tw(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Kn=e=>e.join("/").replace(/\/\/+/g,"/"),Mw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Iw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ow(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const k0=["post","put","patch","delete"];new Set(k0);const Fw=["get",...k0];new Set(Fw);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}const wd=j.createContext(null),Bw=j.createContext(null),ka=j.createContext(null),ja=j.createContext(null),ri=j.createContext({outlet:null,matches:[],isDataRoute:!1}),j0=j.createContext(null);function Ca(){return j.useContext(ja)!=null}function ii(){return Ca()||Pe(!1),j.useContext(ja).location}function C0(e){j.useContext(ka).static||j.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=j.useContext(ri);return e?Zw():Nw()}function Nw(){Ca()||Pe(!1);let e=j.useContext(wd),{basename:t,future:n,navigator:r}=j.useContext(ka),{matches:i}=j.useContext(ri),{pathname:o}=ii(),s=JSON.stringify(Rw(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return C0(()=>{l.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=_w(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Kn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}function Vw(e,t){return Ww(e,t)}function Ww(e,t,n,r){Ca()||Pe(!1);let{navigator:i}=j.useContext(ka),{matches:o}=j.useContext(ri),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=ii(),d;if(t){var f;let b=typeof t=="string"?ni(t):t;c==="/"||(f=b.pathname)!=null&&f.startsWith(c)||Pe(!1),d=b}else d=u;let h=d.pathname||"/",y=h;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=mw(e,{pathname:y}),S=Kw(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Kn([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Kn([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&S?j.createElement(ja.Provider,{value:{location:co({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:mn.Pop}},S):S}function Uw(){let e=Jw(),t=Ow(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const Hw=j.createElement(Uw,null);class Gw extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(ri.Provider,{value:this.props.routeContext},j.createElement(j0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qw(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(wd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ri.Provider,{value:t},r)}function Kw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Pe(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:y}=n,w=f.route.loader&&h[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||w){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let y,w=!1,S=null,b=null;n&&(y=l&&f.route.id?l[f.route.id]:void 0,S=f.route.errorElement||Hw,c&&(u<0&&h===0?(eS("route-fallback"),w=!0,b=null):u===h&&(w=!0,b=f.route.hydrateFallbackElement||null)));let v=t.concat(s.slice(0,h+1)),g=()=>{let x;return y?x=S:w?x=b:f.route.Component?x=j.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,j.createElement(qw,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?j.createElement(Gw,{location:n.location,revalidation:n.revalidation,component:S,error:y,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var P0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(P0||{}),E0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(E0||{});function Yw(e){let t=j.useContext(wd);return t||Pe(!1),t}function Qw(e){let t=j.useContext(Bw);return t||Pe(!1),t}function Xw(e){let t=j.useContext(ri);return t||Pe(!1),t}function z0(e){let t=Xw(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function Jw(){var e;let t=j.useContext(j0),n=Qw(),r=z0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Zw(){let{router:e}=Yw(P0.UseNavigateStable),t=z0(E0.UseNavigateStable),n=j.useRef(!1);return C0(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,co({fromRouteId:t},o)))},[e,t])}const mf={};function eS(e,t,n){mf[e]||(mf[e]=!0)}function tS(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ie(e){Pe(!1)}function nS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=mn.Pop,navigator:o,static:s=!1,future:l}=e;Ca()&&Pe(!1);let c=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:c,navigator:o,static:s,future:co({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=ni(r));let{pathname:d="/",search:f="",hash:h="",state:y=null,key:w="default"}=r,S=j.useMemo(()=>{let b=b0(d,c);return b==null?null:{location:{pathname:b,search:f,hash:h,state:y,key:w},navigationType:i}},[c,d,f,h,y,w,i]);return S==null?null:j.createElement(ka.Provider,{value:u},j.createElement(ja.Provider,{children:n,value:S}))}function rS(e){let{children:t,location:n}=e;return Vw(nu(t),n)}new Promise(()=>{});function nu(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,nu(r.props.children,o));return}r.type!==ie&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=nu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const iS="6";try{window.__reactRouterVersion=iS}catch{}const oS="startTransition",gf=e1[oS];function sS(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=pw({window:i,v5Compat:!0}));let s=o.current,[l,c]=j.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=j.useCallback(f=>{u&&gf?gf(()=>c(f)):c(f)},[c,u]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>tS(r),[r]),j.createElement(nS,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var yf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yf||(yf={}));var xf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xf||(xf={}));var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Te.apply(this,arguments)};function Vr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var oe="-ms-",Bi="-moz-",Q="-webkit-",T0="comm",Pa="rule",Sd="decl",aS="@import",D0="@keyframes",lS="@layer",A0=Math.abs,bd=String.fromCharCode,ru=Object.assign;function cS(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function R0(e){return e.trim()}function Vt(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function xs(e,t,n){return e.indexOf(t,n)}function ze(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function Mt(e){return e.length}function _0(e){return e.length}function zi(e,t){return t.push(e),e}function uS(e,t){return e.map(t).join("")}function vf(e,t){return e.filter(function(n){return!Vt(n,t)})}var Ea=1,Ur=1,M0=0,$t=0,Se=0,oi="";function za(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ea,column:Ur,length:s,return:"",siblings:l}}function sn(e,t){return ru(za("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ur(e){for(;e.root;)e=sn(e.root,{children:[e]});zi(e,e.siblings)}function dS(){return Se}function pS(){return Se=$t>0?ze(oi,--$t):0,Ur--,Se===10&&(Ur=1,Ea--),Se}function Tt(){return Se=$t<M0?ze(oi,$t++):0,Ur++,Se===10&&(Ur=1,Ea++),Se}function Yn(){return ze(oi,$t)}function vs(){return $t}function Ta(e,t){return Wr(oi,e,t)}function iu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fS(e){return Ea=Ur=1,M0=Mt(oi=e),$t=0,[]}function hS(e){return oi="",e}function yl(e){return R0(Ta($t-1,ou(e===91?e+2:e===40?e+1:e)))}function mS(e){for(;(Se=Yn())&&Se<33;)Tt();return iu(e)>2||iu(Se)>3?"":" "}function gS(e,t){for(;--t&&Tt()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Ta(e,vs()+(t<6&&Yn()==32&&Tt()==32))}function ou(e){for(;Tt();)switch(Se){case e:return $t;case 34:case 39:e!==34&&e!==39&&ou(Se);break;case 40:e===41&&ou(e);break;case 92:Tt();break}return $t}function yS(e,t){for(;Tt()&&e+Se!==57;)if(e+Se===84&&Yn()===47)break;return"/*"+Ta(t,$t-1)+"*"+bd(e===47?e:Tt())}function xS(e){for(;!iu(Yn());)Tt();return Ta(e,$t)}function vS(e){return hS($s("",null,null,null,[""],e=fS(e),0,[0],e))}function $s(e,t,n,r,i,o,s,l,c){for(var u=0,d=0,f=s,h=0,y=0,w=0,S=1,b=1,v=1,g=0,x="",$=i,k=o,C=r,P=x;b;)switch(w=g,g=Tt()){case 40:if(w!=108&&ze(P,f-1)==58){xs(P+=V(yl(g),"&","&\f"),"&\f",A0(u?l[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:P+=yl(g);break;case 9:case 10:case 13:case 32:P+=mS(w);break;case 92:P+=gS(vs()-1,7);continue;case 47:switch(Yn()){case 42:case 47:zi($S(yS(Tt(),vs()),t,n,c),c);break;default:P+="/"}break;case 123*S:l[u++]=Mt(P)*v;case 125*S:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+d:v==-1&&(P=V(P,/\f/g,"")),y>0&&Mt(P)-f&&zi(y>32?wf(P+";",r,n,f-1,c):wf(V(P," ","")+";",r,n,f-2,c),c);break;case 59:P+=";";default:if(zi(C=$f(P,t,n,u,d,i,l,x,$=[],k=[],f,o),o),g===123)if(d===0)$s(P,t,C,C,$,o,f,l,k);else switch(h===99&&ze(P,3)===110?100:h){case 100:case 108:case 109:case 115:$s(e,C,C,r&&zi($f(e,C,C,0,0,i,l,x,i,$=[],f,k),k),i,k,f,l,r?$:k);break;default:$s(P,C,C,C,[""],k,0,l,k)}}u=d=y=0,S=v=1,x=P="",f=s;break;case 58:f=1+Mt(P),y=w;default:if(S<1){if(g==123)--S;else if(g==125&&S++==0&&pS()==125)continue}switch(P+=bd(g),g*S){case 38:v=d>0?1:(P+="\f",-1);break;case 44:l[u++]=(Mt(P)-1)*v,v=1;break;case 64:Yn()===45&&(P+=yl(Tt())),h=Yn(),d=f=Mt(x=P+=xS(vs())),g++;break;case 45:w===45&&Mt(P)==2&&(S=0)}}return o}function $f(e,t,n,r,i,o,s,l,c,u,d,f){for(var h=i-1,y=i===0?o:[""],w=_0(y),S=0,b=0,v=0;S<r;++S)for(var g=0,x=Wr(e,h+1,h=A0(b=s[S])),$=e;g<w;++g)($=R0(b>0?y[g]+" "+x:V(x,/&\f/g,y[g])))&&(c[v++]=$);return za(e,t,n,i===0?Pa:l,c,u,d,f)}function $S(e,t,n,r){return za(e,t,n,T0,bd(dS()),Wr(e,2,-2),0,r)}function wf(e,t,n,r,i){return za(e,t,n,Sd,Wr(e,0,r),Wr(e,r+1,-1),r,i)}function L0(e,t,n){switch(cS(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return Bi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+Bi+e+oe+e+e;case 5936:switch(ze(e,t+11)){case 114:return Q+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+oe+e+e;case 6165:return Q+e+oe+"flex-"+e+e;case 5187:return Q+e+V(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return Q+e+oe+"flex-item-"+V(e,/flex-|-self/g,"")+(Vt(e,/flex-|baseline/)?"":oe+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return Q+e+oe+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+oe+V(e,"shrink","negative")+e;case 5292:return Q+e+oe+V(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+V(e,"-grow","")+Q+e+oe+V(e,"grow","positive")+e;case 4554:return Q+V(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!Vt(e,/flex-|baseline/))return oe+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return oe+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Vt(r.props,/grid-\w+-end/)})?~xs(e+(n=n[t].value),"span",0)?e:oe+V(e,"-start","")+e+oe+"grid-row-span:"+(~xs(n,"span",0)?Vt(n,/\d+/):+Vt(n,/\d+/)-+Vt(e,/\d+/))+";":oe+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Vt(r.props,/grid-\w+-start/)})?e:oe+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+Bi+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xs(e,"stretch",0)?L0(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,c,u){return oe+i+":"+o+u+(s?oe+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(ze(e,t+6)===121)return V(e,":",":"+Q)+e;break;case 6444:switch(ze(e,ze(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(ze(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+oe+"$2box$3")+e;case 100:return V(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function Ys(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function wS(e,t,n,r){switch(e.type){case lS:if(e.children.length)break;case aS:case Sd:return e.return=e.return||e.value;case T0:return"";case D0:return e.return=e.value+"{"+Ys(e.children,r)+"}";case Pa:if(!Mt(e.value=e.props.join(",")))return""}return Mt(n=Ys(e.children,r))?e.return=e.value+"{"+n+"}":""}function SS(e){var t=_0(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function bS(e){return function(t){t.root||(t=t.return)&&e(t)}}function kS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Sd:e.return=L0(e.value,e.length,n);return;case D0:return Ys([sn(e,{value:V(e.value,"@","@"+Q)})],r);case Pa:if(e.length)return uS(n=e.props,function(i){switch(Vt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ur(sn(e,{props:[V(i,/:(read-\w+)/,":"+Bi+"$1")]})),ur(sn(e,{props:[i]})),ru(e,{props:vf(n,r)});break;case"::placeholder":ur(sn(e,{props:[V(i,/:(plac\w+)/,":"+Q+"input-$1")]})),ur(sn(e,{props:[V(i,/:(plac\w+)/,":"+Bi+"$1")]})),ur(sn(e,{props:[V(i,/:(plac\w+)/,oe+"input-$1")]})),ur(sn(e,{props:[i]})),ru(e,{props:vf(n,r)});break}return""})}}var jS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tt={},Hr=typeof process<"u"&&tt!==void 0&&(tt.REACT_APP_SC_ATTR||tt.SC_ATTR)||"data-styled",I0="active",O0="data-styled-version",Da="6.1.19",kd=`/*!sc*/
`,Qs=typeof window<"u"&&typeof document<"u",CS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&tt!==void 0&&tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&tt.REACT_APP_SC_DISABLE_SPEEDY!==""?tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&tt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&tt!==void 0&&tt.SC_DISABLE_SPEEDY!==void 0&&tt.SC_DISABLE_SPEEDY!==""&&tt.SC_DISABLE_SPEEDY!=="false"&&tt.SC_DISABLE_SPEEDY),PS={},Aa=Object.freeze([]),Gr=Object.freeze({});function F0(e,t,n){return n===void 0&&(n=Gr),e.theme!==n.theme&&e.theme||t||n.theme}var B0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ES=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zS=/(^-|-$)/g;function Sf(e){return e.replace(ES,"-").replace(zS,"")}var TS=/(a)(d)/gi,qo=52,bf=function(e){return String.fromCharCode(e+(e>25?39:97))};function su(e){var t,n="";for(t=Math.abs(e);t>qo;t=t/qo|0)n=bf(t%qo)+n;return(bf(t%qo)+n).replace(TS,"$1-$2")}var xl,N0=5381,br=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},V0=function(e){return br(N0,e)};function jd(e){return su(V0(e)>>>0)}function DS(e){return e.displayName||e.name||"Component"}function vl(e){return typeof e=="string"&&!0}var W0=typeof Symbol=="function"&&Symbol.for,U0=W0?Symbol.for("react.memo"):60115,AS=W0?Symbol.for("react.forward_ref"):60112,RS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_S={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},H0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},MS=((xl={})[AS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xl[U0]=H0,xl);function kf(e){return("type"in(t=e)&&t.type.$$typeof)===U0?H0:"$$typeof"in e?MS[e.$$typeof]:RS;var t}var LS=Object.defineProperty,IS=Object.getOwnPropertyNames,jf=Object.getOwnPropertySymbols,OS=Object.getOwnPropertyDescriptor,FS=Object.getPrototypeOf,Cf=Object.prototype;function G0(e,t,n){if(typeof t!="string"){if(Cf){var r=FS(t);r&&r!==Cf&&G0(e,r,n)}var i=IS(t);jf&&(i=i.concat(jf(t)));for(var o=kf(e),s=kf(t),l=0;l<i.length;++l){var c=i[l];if(!(c in _S||n&&n[c]||s&&c in s||o&&c in o)){var u=OS(t,c);try{LS(e,c,u)}catch{}}}}return e}function nr(e){return typeof e=="function"}function Cd(e){return typeof e=="object"&&"styledComponentId"in e}function Un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function uo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function au(e,t,n){if(n===void 0&&(n=!1),!n&&!uo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=au(e[r],t[r]);else if(uo(t))for(var r in t)e[r]=au(e[r],t[r]);return e}function Pd(e,t){Object.defineProperty(e,"toString",{value:t})}function rr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var BS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw rr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(kd);return n},e}(),ws=new Map,Js=new Map,Ss=1,Ko=function(e){if(ws.has(e))return ws.get(e);for(;Js.has(Ss);)Ss++;var t=Ss++;return ws.set(e,t),Js.set(t,e),t},NS=function(e,t){Ss=t+1,ws.set(e,t),Js.set(t,e)},VS="style[".concat(Hr,"][").concat(O0,'="').concat(Da,'"]'),WS=new RegExp("^".concat(Hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),US=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},HS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(kd),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var c=l.match(WS);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(NS(d,u),US(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Pf=function(e){for(var t=document.querySelectorAll(VS),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Hr)!==I0&&(HS(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function GS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var q0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Hr,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Hr,I0),r.setAttribute(O0,Da);var s=GS();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},qS=function(){function e(t){this.element=q0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw rr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),KS=function(){function e(t){this.element=q0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),YS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ef=Qs,QS={isServer:!Qs,useCSSOMInjection:!CS},Zs=function(){function e(t,n,r){t===void 0&&(t=Gr),n===void 0&&(n={});var i=this;this.options=Te(Te({},QS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qs&&Ef&&(Ef=!1,Pf(this)),Pd(this,function(){return function(o){for(var s=o.getTag(),l=s.length,c="",u=function(f){var h=function(v){return Js.get(v)}(f);if(h===void 0)return"continue";var y=o.names.get(h),w=s.getGroup(f);if(y===void 0||!y.size||w.length===0)return"continue";var S="".concat(Hr,".g").concat(f,'[id="').concat(h,'"]'),b="";y!==void 0&&y.forEach(function(v){v.length>0&&(b+="".concat(v,","))}),c+="".concat(w).concat(S,'{content:"').concat(b,'"}').concat(kd)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return Ko(t)},e.prototype.rehydrate=function(){!this.server&&Qs&&Pf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te(Te({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new YS(i):r?new qS(i):new KS(i)}(this.options),new BS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ko(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),XS=/&/g,JS=/^\s*\/\/.*$/gm;function K0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=K0(n.children,t)),n})}function ZS(e){var t,n,r,i=Gr,o=i.options,s=o===void 0?Gr:o,l=i.plugins,c=l===void 0?Aa:l,u=function(h,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},d=c.slice();d.push(function(h){h.type===Pa&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(XS,n).replace(r,u))}),s.prefix&&d.push(kS),d.push(wS);var f=function(h,y,w,S){y===void 0&&(y=""),w===void 0&&(w=""),S===void 0&&(S="&"),t=S,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var b=h.replace(JS,""),v=vS(w||y?"".concat(w," ").concat(y," { ").concat(b," }"):b);s.namespace&&(v=K0(v,s.namespace));var g=[];return Ys(v,SS(d.concat(bS(function(x){return g.push(x)})))),g};return f.hash=c.length?c.reduce(function(h,y){return y.name||rr(15),br(h,y.name)},N0).toString():"",f}var eb=new Zs,lu=ZS(),Y0=Ne.createContext({shouldForwardProp:void 0,styleSheet:eb,stylis:lu});Y0.Consumer;Ne.createContext(void 0);function cu(){return j.useContext(Y0)}var Q0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=lu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pd(this,function(){throw rr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=lu),this.name+t.hash},e}(),tb=function(e){return e>="A"&&e<="Z"};function zf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;tb(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var X0=function(e){return e==null||e===!1||e===""},J0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!X0(o)&&(Array.isArray(o)&&o.isCss||nr(o)?r.push("".concat(zf(i),":"),o,";"):uo(o)?r.push.apply(r,Vr(Vr(["".concat(i," {")],J0(o),!1),["}"],!1)):r.push("".concat(zf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function kn(e,t,n,r){if(X0(e))return[];if(Cd(e))return[".".concat(e.styledComponentId)];if(nr(e)){if(!nr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return kn(i,t,n,r)}var o;return e instanceof Q0?n?(e.inject(n,r),[e.getName(r)]):[e]:uo(e)?J0(e):Array.isArray(e)?Array.prototype.concat.apply(Aa,e.map(function(s){return kn(s,t,n,r)})):[e.toString()]}function Z0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(nr(n)&&!Cd(n))return!1}return!0}var nb=V0(Da),rb=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Z0(t),this.componentId=n,this.baseHash=br(nb,n),this.baseStyle=r,Zs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Un(i,this.staticRulesId);else{var o=Xs(kn(this.rules,t,n,r)),s=su(br(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=Un(i,s),this.staticRulesId=s}else{for(var c=br(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=Xs(kn(f,t,n,r));c=br(c,h+d),u+=h}}if(u){var y=su(c>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=Un(i,y)}}return i},e}(),po=Ne.createContext(void 0);po.Consumer;function ib(e){var t=Ne.useContext(po),n=j.useMemo(function(){return function(r,i){if(!r)throw rr(14);if(nr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw rr(8);return i?Te(Te({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ne.createElement(po.Provider,{value:n},e.children):null}var $l={};function ob(e,t,n){var r=Cd(e),i=e,o=!vl(e),s=t.attrs,l=s===void 0?Aa:s,c=t.componentId,u=c===void 0?function($,k){var C=typeof $!="string"?"sc":Sf($);$l[C]=($l[C]||0)+1;var P="".concat(C,"-").concat(jd(Da+C+$l[C]));return k?"".concat(k,"-").concat(P):P}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function($){return vl($)?"styled.".concat($):"Styled(".concat(DS($),")")}(e):d,h=t.displayName&&t.componentId?"".concat(Sf(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;w=function($,k){return S($,k)&&b($,k)}}else w=S}var v=new rb(n,h,r?i.componentStyle:void 0);function g($,k){return function(C,P,E){var A=C.attrs,R=C.componentStyle,X=C.defaultProps,pe=C.foldedComponentIds,B=C.styledComponentId,q=C.target,Ae=Ne.useContext(po),ee=cu(),ce=C.shouldForwardProp||ee.shouldForwardProp,T=F0(P,Ae,X)||Gr,_=function(St,ke,ut){for(var Mn,bt=Te(Te({},ke),{className:void 0,theme:ut}),rn=0;rn<St.length;rn+=1){var dt=nr(Mn=St[rn])?Mn(bt):Mn;for(var Bt in dt)bt[Bt]=Bt==="className"?Un(bt[Bt],dt[Bt]):Bt==="style"?Te(Te({},bt[Bt]),dt[Bt]):dt[Bt]}return ke.className&&(bt.className=Un(bt.className,ke.className)),bt}(A,P,T),L=_.as||q,M={};for(var H in _)_[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&_.theme===T||(H==="forwardedAs"?M.as=_.forwardedAs:ce&&!ce(H,L)||(M[H]=_[H]));var At=function(St,ke){var ut=cu(),Mn=St.generateAndInjectStyles(ke,ut.styleSheet,ut.stylis);return Mn}(R,_),Ke=Un(pe,B);return At&&(Ke+=" "+At),_.className&&(Ke+=" "+_.className),M[vl(L)&&!B0.has(L)?"class":"className"]=Ke,E&&(M.ref=E),j.createElement(L,M)}(x,$,k)}g.displayName=f;var x=Ne.forwardRef(g);return x.attrs=y,x.componentStyle=v,x.displayName=f,x.shouldForwardProp=w,x.foldedComponentIds=r?Un(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=r?function(k){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var E=0,A=C;E<A.length;E++)au(k,A[E],!0);return k}({},i.defaultProps,$):$}}),Pd(x,function(){return".".concat(x.styledComponentId)}),o&&G0(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Tf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Df=function(e){return Object.assign(e,{isCss:!0})};function Z(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(nr(e)||uo(e))return Df(kn(Tf(Aa,Vr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?kn(r):Df(kn(Tf(r,t)))}function uu(e,t,n){if(n===void 0&&(n=Gr),!t)throw rr(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Z.apply(void 0,Vr([i],o,!1)))};return r.attrs=function(i){return uu(e,t,Te(Te({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return uu(e,t,Te(Te({},n),i))},r}var ex=function(e){return uu(ob,e)},p=ex;B0.forEach(function(e){p[e]=ex(e)});var sb=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Z0(t),Zs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Xs(kn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Zs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function ab(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Z.apply(void 0,Vr([e],t,!1)),i="sc-global-".concat(jd(JSON.stringify(r))),o=new sb(r,i),s=function(c){var u=cu(),d=Ne.useContext(po),f=Ne.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(f,c,u.styleSheet,d,u.stylis),Ne.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,f,h){if(o.isStatic)o.renderStyles(c,PS,d,h);else{var y=Te(Te({},u),{theme:F0(u,f,s.defaultProps)});o.renderStyles(c,y,d,h)}}return Ne.memo(s)}function tx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Xs(Z.apply(void 0,Vr([e],t,!1))),i=jd(r);return new Q0(i,r)}const m={colors:{primary:"#0EA5E9",secondary:"#06B6D4",accent:"#F59E0B",sunshine:"#FCD34D",ocean:"#0369A1",sunset:"#F97316",teal:"#06B6D4",gold:"#F59E0B",navy:"#0F172A",white:"#FFFFFF",offWhite:"#F8FAFC",gradients:{primary:"linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",sunset:"linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",ocean:"linear-gradient(135deg, #0369A1 0%, #0EA5E9 100%)",premium:"linear-gradient(135deg, #1E293B 0%, #334155 100%)",gold:"linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",subtle:"linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)"},gray:{50:"#FAFAFA",100:"#F4F4F5",200:"#E4E4E7",300:"#D4D4D8",400:"#A1A1AA",500:"#71717A",600:"#52525B",700:"#3F3F46",800:"#27272A",900:"#18181B"},success:"#22C55E",warning:"#F59E0B",error:"#EF4444",info:"#3B82F6"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},borderRadius:{sm:"8px",md:"12px",lg:"16px",xl:"24px",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"},typography:{fontFamily:{sans:["Inter","system-ui","sans-serif"],mono:["JetBrains Mono","monospace"]},fontSize:{xs:"12px",sm:"14px",base:"16px",lg:"18px",xl:"20px","2xl":"24px","3xl":"30px","4xl":"36px"},fontWeight:{normal:400,medium:500,semibold:600,bold:700}},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"}},lb=ab`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
    line-height: 1.6;
    color: ${({theme:e})=>e.colors.gray[800]};
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.offWhite} 0%, #f0f9ff 100%);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  #root {
    min-height: 100vh;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea, select {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.ocean};
    outline-offset: 2px;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.gray[300]};
    border-radius: ${({theme:e})=>e.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.gray[400]};
  }
`;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),O=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:c,...u},d)=>j.createElement("svg",{ref:d,...cb,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${ub(e)}`,l].join(" "),...u},[...t.map(([f,h])=>j.createElement(f,h)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=O("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=O("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=O("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=O("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=O("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=O("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=O("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=O("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=O("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=O("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=O("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=O("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=O("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=O("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=O("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=O("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=O("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=O("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=O("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=O("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=O("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=O("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=O("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=O("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=O("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=O("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=O("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=O("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=O("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=O("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=O("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=O("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=O("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=O("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=O("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=O("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=O("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=O("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=O("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=O("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=O("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=O("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=O("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=O("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=O("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=O("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=O("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=O("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=O("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),lx=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ma=j.createContext({}),Ad=j.createContext(null),La=typeof document<"u",Tb=La?j.useLayoutEffect:j.useEffect,cx=j.createContext({strict:!1}),Rd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Db="framerAppearId",ux="data-"+Rd(Db);function Ab(e,t,n,r){const{visualElement:i}=j.useContext(Ma),o=j.useContext(cx),s=j.useContext(Ad),l=j.useContext(lx).reducedMotion,c=j.useRef();r=r||o.renderer,!c.current&&r&&(c.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:l}));const u=c.current;j.useInsertionEffect(()=>{u&&u.update(n,s)});const d=j.useRef(!!(n[ux]&&!window.HandoffComplete));return Tb(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),j.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function kr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Rb(e,t,n){return j.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):kr(n)&&(n.current=r))},[t])}function ho(e){return typeof e=="string"||Array.isArray(e)}function Ia(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const _d=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Md=["initial",..._d];function Oa(e){return Ia(e.animate)||Md.some(t=>ho(e[t]))}function dx(e){return!!(Oa(e)||e.variants)}function _b(e,t){if(Oa(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ho(n)?n:void 0,animate:ho(r)?r:void 0}}return e.inherit!==!1?t:{}}function Mb(e){const{initial:t,animate:n}=_b(e,j.useContext(Ma));return j.useMemo(()=>({initial:t,animate:n}),[Mf(t),Mf(n)])}function Mf(e){return Array.isArray(e)?e.join(" "):e}const Lf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},mo={};for(const e in Lf)mo[e]={isEnabled:t=>Lf[e].some(n=>!!t[n])};function Lb(e){for(const t in e)mo[t]={...mo[t],...e[t]}}const px=j.createContext({}),fx=j.createContext({}),Ib=Symbol.for("motionComponentSymbol");function Ob({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Lb(e);function o(l,c){let u;const d={...j.useContext(lx),...l,layoutId:Fb(l)},{isStatic:f}=d,h=Mb(l),y=r(l,f);if(!f&&La){h.visualElement=Ab(i,y,d,t);const w=j.useContext(fx),S=j.useContext(cx).strict;h.visualElement&&(u=h.visualElement.loadFeatures(d,S,e,w))}return j.createElement(Ma.Provider,{value:h},u&&h.visualElement?j.createElement(u,{visualElement:h.visualElement,...d}):null,n(i,l,Rb(y,h.visualElement,c),y,f,h.visualElement))}const s=j.forwardRef(o);return s[Ib]=i,s}function Fb({layoutId:e}){const t=j.useContext(px).id;return t&&e!==void 0?t+"-"+e:e}function Bb(e){function t(r,i={}){return Ob(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Nb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ld(e){return typeof e!="string"||e.includes("-")?!1:!!(Nb.indexOf(e)>-1||/[A-Z]/.test(e))}const ea={};function Vb(e){Object.assign(ea,e)}const jo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ar=new Set(jo);function hx(e,{layout:t,layoutId:n}){return ar.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ea[e]||e==="opacity")}const et=e=>!!(e&&e.getVelocity),Wb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ub=jo.length;function Hb(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<Ub;s++){const l=jo[s];if(e[l]!==void 0){const c=Wb[l]||l;o+=`${c}(${e[l]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const mx=e=>t=>typeof t=="string"&&t.startsWith(e),gx=mx("--"),fu=mx("var(--"),Gb=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,qb=(e,t)=>t&&typeof e=="number"?t.transform(e):e,En=(e,t,n)=>Math.min(Math.max(n,e),t),lr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ni={...lr,transform:e=>En(0,1,e)},Yo={...lr,default:1},Vi=e=>Math.round(e*1e5)/1e5,Fa=/(-)?([\d]*\.?[\d])+/g,yx=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Kb=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Co(e){return typeof e=="string"}const Po=e=>({test:t=>Co(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),an=Po("deg"),Ft=Po("%"),I=Po("px"),Yb=Po("vh"),Qb=Po("vw"),If={...Ft,parse:e=>Ft.parse(e)/100,transform:e=>Ft.transform(e*100)},Of={...lr,transform:Math.round},xx={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,radius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,size:I,top:I,right:I,bottom:I,left:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,rotate:an,rotateX:an,rotateY:an,rotateZ:an,scale:Yo,scaleX:Yo,scaleY:Yo,scaleZ:Yo,skew:an,skewX:an,skewY:an,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:Ni,originX:If,originY:If,originZ:I,zIndex:Of,fillOpacity:Ni,strokeOpacity:Ni,numOctaves:Of};function Id(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:l}=e;let c=!1,u=!1,d=!0;for(const f in t){const h=t[f];if(gx(f)){o[f]=h;continue}const y=xx[f],w=qb(h,y);if(ar.has(f)){if(c=!0,s[f]=w,!d)continue;h!==(y.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,l[f]=w):i[f]=w}if(t.transform||(c||r?i.transform=Hb(e.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:y=0}=l;i.transformOrigin=`${f} ${h} ${y}`}}const Od=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function vx(e,t,n){for(const r in t)!et(t[r])&&!hx(r,n)&&(e[r]=t[r])}function Xb({transformTemplate:e},t,n){return j.useMemo(()=>{const r=Od();return Id(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Jb(e,t,n){const r=e.style||{},i={};return vx(i,r,e),Object.assign(i,Xb(e,t,n)),e.transformValues?e.transformValues(i):i}function Zb(e,t,n){const r={},i=Jb(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const e2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ta(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||e2.has(e)}let $x=e=>!ta(e);function t2(e){e&&($x=t=>t.startsWith("on")?!ta(t):e(t))}try{t2(require("@emotion/is-prop-valid").default)}catch{}function n2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||($x(i)||n===!0&&ta(i)||!t&&!ta(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Ff(e,t,n){return typeof e=="string"?e:I.transform(t+n*e)}function r2(e,t,n){const r=Ff(t,e.x,e.width),i=Ff(n,e.y,e.height);return`${r} ${i}`}const i2={offset:"stroke-dashoffset",array:"stroke-dasharray"},o2={offset:"strokeDashoffset",array:"strokeDasharray"};function s2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?i2:o2;e[o.offset]=I.transform(-r);const s=I.transform(t),l=I.transform(n);e[o.array]=`${s} ${l}`}function Fd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...u},d,f,h){if(Id(e,u,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:w,dimensions:S}=e;y.transform&&(S&&(w.transform=y.transform),delete y.transform),S&&(i!==void 0||o!==void 0||w.transform)&&(w.transformOrigin=r2(S,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(y.x=t),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),s!==void 0&&s2(y,s,l,c,!1)}const wx=()=>({...Od(),attrs:{}}),Bd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function a2(e,t,n,r){const i=j.useMemo(()=>{const o=wx();return Fd(o,t,{enableHardwareAcceleration:!1},Bd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};vx(o,e.style,e),i.style={...o,...i.style}}return i}function l2(e=!1){return(n,r,i,{latestValues:o},s)=>{const c=(Ld(n)?a2:Zb)(r,o,s,n),d={...n2(r,typeof n=="string",e),...c,ref:i},{children:f}=r,h=j.useMemo(()=>et(f)?f.get():f,[f]);return j.createElement(n,{...d,children:h})}}function Sx(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const bx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function kx(e,t,n,r){Sx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(bx.has(i)?i:Rd(i),t.attrs[i])}function Nd(e,t){const{style:n}=e,r={};for(const i in n)(et(n[i])||t.style&&et(t.style[i])||hx(i,e))&&(r[i]=n[i]);return r}function jx(e,t){const n=Nd(e,t);for(const r in e)if(et(e[r])||et(t[r])){const i=jo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Vd(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function c2(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const na=e=>Array.isArray(e),u2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),d2=e=>na(e)?e[e.length-1]||0:e;function bs(e){const t=et(e)?e.get():e;return u2(t)?t.toValue():t}function p2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:f2(r,i,o,e),renderState:t()};return n&&(s.mount=l=>n(r,l,s)),s}const Cx=e=>(t,n)=>{const r=j.useContext(Ma),i=j.useContext(Ad),o=()=>p2(e,t,r,i);return n?o():c2(o)};function f2(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=bs(o[h]);let{initial:s,animate:l}=e;const c=Oa(e),u=dx(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?l:s;return f&&typeof f!="boolean"&&!Ia(f)&&(Array.isArray(f)?f:[f]).forEach(y=>{const w=Vd(e,y);if(!w)return;const{transitionEnd:S,transition:b,...v}=w;for(const g in v){let x=v[g];if(Array.isArray(x)){const $=d?x.length-1:0;x=x[$]}x!==null&&(i[g]=x)}for(const g in S)i[g]=S[g]}),i}const $e=e=>e;class Bf{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function h2(e){let t=new Bf,n=new Bf,r=0,i=!1,o=!1;const s=new WeakSet,l={schedule:(c,u=!1,d=!1)=>{const f=d&&i,h=f?t:n;return u&&s.add(c),h.add(c)&&f&&i&&(r=t.order.length),c},cancel:c=>{n.remove(c),s.delete(c)},process:c=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(c),s.has(d)&&(l.schedule(d),e())}i=!1,o&&(o=!1,l.process(c))}};return l}const Qo=["prepare","read","update","preRender","render","postRender"],m2=40;function g2(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Qo.reduce((f,h)=>(f[h]=h2(()=>n=!0),f),{}),s=f=>o[f].process(i),l=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,m2),1),i.timestamp=f,i.isProcessing=!0,Qo.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(l))},c=()=>{n=!0,r=!0,i.isProcessing||e(l)};return{schedule:Qo.reduce((f,h)=>{const y=o[h];return f[h]=(w,S=!1,b=!1)=>(n||c(),y.schedule(w,S,b)),f},{}),cancel:f=>Qo.forEach(h=>o[h].cancel(f)),state:i,steps:o}}const{schedule:ae,cancel:tn,state:Fe,steps:wl}=g2(typeof requestAnimationFrame<"u"?requestAnimationFrame:$e,!0),y2={useVisualState:Cx({scrapeMotionValuesFromProps:jx,createRenderState:wx,onMount:(e,t,{renderState:n,latestValues:r})=>{ae.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ae.render(()=>{Fd(n,r,{enableHardwareAcceleration:!1},Bd(t.tagName),e.transformTemplate),kx(t,n)})}})},x2={useVisualState:Cx({scrapeMotionValuesFromProps:Nd,createRenderState:Od})};function v2(e,{forwardMotionProps:t=!1},n,r){return{...Ld(e)?y2:x2,preloadedFeatures:n,useRender:l2(t),createVisualElement:r,Component:e}}function Gt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Px=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ba(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const $2=e=>t=>Px(t)&&e(t,Ba(t));function Kt(e,t,n,r){return Gt(e,t,$2(n),r)}const w2=(e,t)=>n=>t(e(n)),jn=(...e)=>e.reduce(w2);function Ex(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Nf=Ex("dragHorizontal"),Vf=Ex("dragVertical");function zx(e){let t=!1;if(e==="y")t=Vf();else if(e==="x")t=Nf();else{const n=Nf(),r=Vf();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Tx(){const e=zx(!0);return e?(e(),!1):!0}class _n{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Wf(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Tx())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t),l[r]&&ae.update(()=>l[r](o,s))};return Kt(e.current,n,i,{passive:!e.getProps()[r]})}class S2 extends _n{mount(){this.unmount=jn(Wf(this.node,!0),Wf(this.node,!1))}unmount(){}}class b2 extends _n{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=jn(Gt(this.node.current,"focus",()=>this.onFocus()),Gt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Dx=(e,t)=>t?e===t?!0:Dx(e,t.parentElement):!1;function Sl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ba(n))}class k2 extends _n{constructor(){super(...arguments),this.removeStartListeners=$e,this.removeEndListeners=$e,this.removeAccessibleListeners=$e,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Kt(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();ae.update(()=>{!f&&!Dx(this.node.current,l.target)?d&&d(l,c):u&&u(l,c)})},{passive:!(r.onTap||r.onPointerUp)}),s=Kt(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=jn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=l=>{l.key!=="Enter"||!this.checkPressEnd()||Sl("up",(c,u)=>{const{onTap:d}=this.node.getProps();d&&ae.update(()=>d(c,u))})};this.removeEndListeners(),this.removeEndListeners=Gt(this.node.current,"keyup",s),Sl("down",(l,c)=>{this.startPress(l,c)})},n=Gt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Sl("cancel",(o,s)=>this.cancelPress(o,s))},i=Gt(this.node.current,"blur",r);this.removeAccessibleListeners=jn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ae.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Tx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ae.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Kt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Gt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=jn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const hu=new WeakMap,bl=new WeakMap,j2=e=>{const t=hu.get(e.target);t&&t(e)},C2=e=>{e.forEach(j2)};function P2({root:e,...t}){const n=e||document;bl.has(n)||bl.set(n,{});const r=bl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(C2,{root:e,...t})),r[i]}function E2(e,t,n){const r=P2(t);return hu.set(e,n),r.observe(e),()=>{hu.delete(e),r.unobserve(e)}}const z2={some:0,all:1};class T2 extends _n{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:z2[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(c)};return E2(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(D2(t,n))&&this.startObserver()}unmount(){}}function D2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const A2={inView:{Feature:T2},tap:{Feature:k2},focus:{Feature:b2},hover:{Feature:S2}};function Ax(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function R2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function _2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Na(e,t,n){const r=e.getProps();return Vd(r,t,n!==void 0?n:r.custom,R2(e),_2(e))}let Wd=$e;const Qn=e=>e*1e3,Yt=e=>e/1e3,M2={current:!1},Rx=e=>Array.isArray(e)&&typeof e[0]=="number";function _x(e){return!!(!e||typeof e=="string"&&Mx[e]||Rx(e)||Array.isArray(e)&&e.every(_x))}const Ti=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Mx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ti([0,.65,.55,1]),circOut:Ti([.55,0,1,.45]),backIn:Ti([.31,.01,.66,-.59]),backOut:Ti([.33,1.53,.69,.99])};function Lx(e){if(e)return Rx(e)?Ti(e):Array.isArray(e)?e.map(Lx):Mx[e]}function L2(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:l,times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=Lx(l);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function I2(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Ix=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,O2=1e-7,F2=12;function B2(e,t,n,r,i){let o,s,l=0;do s=t+(n-t)/2,o=Ix(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>O2&&++l<F2);return s}function Eo(e,t,n,r){if(e===t&&n===r)return $e;const i=o=>B2(o,0,1,e,n);return o=>o===0||o===1?o:Ix(i(o),t,r)}const N2=Eo(.42,0,1,1),V2=Eo(0,0,.58,1),Ox=Eo(.42,0,.58,1),W2=e=>Array.isArray(e)&&typeof e[0]!="number",Fx=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Bx=e=>t=>1-e(1-t),Ud=e=>1-Math.sin(Math.acos(e)),Nx=Bx(Ud),U2=Fx(Ud),Vx=Eo(.33,1.53,.69,.99),Hd=Bx(Vx),H2=Fx(Hd),G2=e=>(e*=2)<1?.5*Hd(e):.5*(2-Math.pow(2,-10*(e-1))),q2={linear:$e,easeIn:N2,easeInOut:Ox,easeOut:V2,circIn:Ud,circInOut:U2,circOut:Nx,backIn:Hd,backInOut:H2,backOut:Vx,anticipate:G2},Uf=e=>{if(Array.isArray(e)){Wd(e.length===4);const[t,n,r,i]=e;return Eo(t,n,r,i)}else if(typeof e=="string")return q2[e];return e},Gd=(e,t)=>n=>!!(Co(n)&&Kb.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Wx=(e,t,n)=>r=>{if(!Co(r))return r;const[i,o,s,l]=r.match(Fa);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},K2=e=>En(0,255,e),kl={...lr,transform:e=>Math.round(K2(e))},Hn={test:Gd("rgb","red"),parse:Wx("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+kl.transform(e)+", "+kl.transform(t)+", "+kl.transform(n)+", "+Vi(Ni.transform(r))+")"};function Y2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const mu={test:Gd("#"),parse:Y2,transform:Hn.transform},jr={test:Gd("hsl","hue"),parse:Wx("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ft.transform(Vi(t))+", "+Ft.transform(Vi(n))+", "+Vi(Ni.transform(r))+")"},We={test:e=>Hn.test(e)||mu.test(e)||jr.test(e),parse:e=>Hn.test(e)?Hn.parse(e):jr.test(e)?jr.parse(e):mu.parse(e),transform:e=>Co(e)?e:e.hasOwnProperty("red")?Hn.transform(e):jr.transform(e)},he=(e,t,n)=>-n*e+n*t+e;function jl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Q2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=jl(c,l,e+1/3),o=jl(c,l,e),s=jl(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Cl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},X2=[mu,Hn,jr],J2=e=>X2.find(t=>t.test(e));function Hf(e){const t=J2(e);let n=t.parse(e);return t===jr&&(n=Q2(n)),n}const Ux=(e,t)=>{const n=Hf(e),r=Hf(t),i={...n};return o=>(i.red=Cl(n.red,r.red,o),i.green=Cl(n.green,r.green,o),i.blue=Cl(n.blue,r.blue,o),i.alpha=he(n.alpha,r.alpha,o),Hn.transform(i))};function Z2(e){var t,n;return isNaN(e)&&Co(e)&&(((t=e.match(Fa))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(yx))===null||n===void 0?void 0:n.length)||0)>0}const Hx={regex:Gb,countKey:"Vars",token:"${v}",parse:$e},Gx={regex:yx,countKey:"Colors",token:"${c}",parse:We.parse},qx={regex:Fa,countKey:"Numbers",token:"${n}",parse:lr.parse};function Pl(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function ra(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Pl(n,Hx),Pl(n,Gx),Pl(n,qx),n}function Kx(e){return ra(e).values}function Yx(e){const{values:t,numColors:n,numVars:r,tokenised:i}=ra(e),o=t.length;return s=>{let l=i;for(let c=0;c<o;c++)c<r?l=l.replace(Hx.token,s[c]):c<r+n?l=l.replace(Gx.token,We.transform(s[c])):l=l.replace(qx.token,Vi(s[c]));return l}}const ek=e=>typeof e=="number"?0:e;function tk(e){const t=Kx(e);return Yx(e)(t.map(ek))}const zn={test:Z2,parse:Kx,createTransformer:Yx,getAnimatableNone:tk},Qx=(e,t)=>n=>`${n>0?t:e}`;function Xx(e,t){return typeof e=="number"?n=>he(e,t,n):We.test(e)?Ux(e,t):e.startsWith("var(")?Qx(e,t):Zx(e,t)}const Jx=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>Xx(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},nk=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Xx(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},Zx=(e,t)=>{const n=zn.createTransformer(t),r=ra(e),i=ra(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?jn(Jx(r.values,i.values),n):Qx(e,t)},go=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Gf=(e,t)=>n=>he(e,t,n);function rk(e){return typeof e=="number"?Gf:typeof e=="string"?We.test(e)?Ux:Zx:Array.isArray(e)?Jx:typeof e=="object"?nk:Gf}function ik(e,t,n){const r=[],i=n||rk(e[0]),o=e.length-1;for(let s=0;s<o;s++){let l=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||$e:t;l=jn(c,l)}r.push(l)}return r}function ev(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Wd(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=ik(t,r,i),l=s.length,c=u=>{let d=0;if(l>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=go(e[d],e[d+1],u);return s[d](f)};return n?u=>c(En(e[0],e[o-1],u)):c}function ok(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=go(0,t,r);e.push(he(n,1,i))}}function sk(e){const t=[0];return ok(t,e.length-1),t}function ak(e,t){return e.map(n=>n*t)}function lk(e,t){return e.map(()=>t||Ox).splice(0,e.length-1)}function ia({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=W2(r)?r.map(Uf):Uf(r),o={done:!1,value:t[0]},s=ak(n&&n.length===t.length?n:sk(t),e),l=ev(s,t,{ease:Array.isArray(i)?i:lk(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}function tv(e,t){return t?e*(1e3/t):0}const ck=5;function nv(e,t,n){const r=Math.max(t-ck,0);return tv(n-e(r),t-r)}const El=.001,uk=.01,dk=10,pk=.05,fk=1;function hk({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=En(pk,fk,s),e=En(uk,dk,Yt(e)),s<1?(i=u=>{const d=u*s,f=d*e,h=d-n,y=gu(u,s),w=Math.exp(-f);return El-h/y*w},o=u=>{const f=u*s*e,h=f*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,w=Math.exp(-f),S=gu(Math.pow(u,2),s);return(-i(u)+El>0?-1:1)*((h-y)*w)/S}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-El+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=gk(i,o,l);if(e=Qn(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const mk=12;function gk(e,t,n){let r=n;for(let i=1;i<mk;i++)r=r-e(r)/t(r);return r}function gu(e,t){return e*Math.sqrt(1-t*t)}const yk=["duration","bounce"],xk=["stiffness","damping","mass"];function qf(e,t){return t.some(n=>e[n]!==void 0)}function vk(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!qf(e,xk)&&qf(e,yk)){const n=hk(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function rv({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=vk({...r,velocity:-Yt(r.velocity||0)}),y=f||0,w=c/(2*Math.sqrt(l*u)),S=o-i,b=Yt(Math.sqrt(l/u)),v=Math.abs(S)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let g;if(w<1){const x=gu(b,w);g=$=>{const k=Math.exp(-w*b*$);return o-k*((y+w*b*S)/x*Math.sin(x*$)+S*Math.cos(x*$))}}else if(w===1)g=x=>o-Math.exp(-b*x)*(S+(y+b*S)*x);else{const x=b*Math.sqrt(w*w-1);g=$=>{const k=Math.exp(-w*b*$),C=Math.min(x*$,300);return o-k*((y+w*b*S)*Math.sinh(C)+x*S*Math.cosh(C))/x}}return{calculatedDuration:h&&d||null,next:x=>{const $=g(x);if(h)s.done=x>=d;else{let k=y;x!==0&&(w<1?k=nv(g,x,$):k=0);const C=Math.abs(k)<=n,P=Math.abs(o-$)<=t;s.done=C&&P}return s.value=s.done?o:$,s}}}function Kf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},y=E=>l!==void 0&&E<l||c!==void 0&&E>c,w=E=>l===void 0?c:c===void 0||Math.abs(l-E)<Math.abs(c-E)?l:c;let S=n*t;const b=f+S,v=s===void 0?b:s(b);v!==b&&(S=v-f);const g=E=>-S*Math.exp(-E/r),x=E=>v+g(E),$=E=>{const A=g(E),R=x(E);h.done=Math.abs(A)<=u,h.value=h.done?v:R};let k,C;const P=E=>{y(h.value)&&(k=E,C=rv({keyframes:[h.value,w(h.value)],velocity:nv(x,E,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:E=>{let A=!1;return!C&&k===void 0&&(A=!0,$(E),P(E)),k!==void 0&&E>k?C.next(E-k):(!A&&$(E),h)}}}const $k=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ae.update(t,!0),stop:()=>tn(t),now:()=>Fe.isProcessing?Fe.timestamp:performance.now()}},Yf=2e4;function Qf(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Yf;)t+=n,r=e.next(t);return t>=Yf?1/0:t}const wk={decay:Kf,inertia:Kf,tween:ia,keyframes:ia,spring:rv};function oa({autoplay:e=!0,delay:t=0,driver:n=$k,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:l="loop",onPlay:c,onStop:u,onComplete:d,onUpdate:f,...h}){let y=1,w=!1,S,b;const v=()=>{b=new Promise(M=>{S=M})};v();let g;const x=wk[i]||ia;let $;x!==ia&&typeof r[0]!="number"&&($=ev([0,100],r,{clamp:!1}),r=[0,100]);const k=x({...h,keyframes:r});let C;l==="mirror"&&(C=x({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let P="idle",E=null,A=null,R=null;k.calculatedDuration===null&&o&&(k.calculatedDuration=Qf(k));const{calculatedDuration:X}=k;let pe=1/0,B=1/0;X!==null&&(pe=X+s,B=pe*(o+1)-s);let q=0;const Ae=M=>{if(A===null)return;y>0&&(A=Math.min(A,M)),y<0&&(A=Math.min(M-B/y,A)),E!==null?q=E:q=Math.round(M-A)*y;const H=q-t*(y>=0?1:-1),At=y>=0?H<0:H>B;q=Math.max(H,0),P==="finished"&&E===null&&(q=B);let Ke=q,St=k;if(o){const bt=Math.min(q,B)/pe;let rn=Math.floor(bt),dt=bt%1;!dt&&bt>=1&&(dt=1),dt===1&&rn--,rn=Math.min(rn,o+1),!!(rn%2)&&(l==="reverse"?(dt=1-dt,s&&(dt-=s/pe)):l==="mirror"&&(St=C)),Ke=En(0,1,dt)*pe}const ke=At?{done:!1,value:r[0]}:St.next(Ke);$&&(ke.value=$(ke.value));let{done:ut}=ke;!At&&X!==null&&(ut=y>=0?q>=B:q<=0);const Mn=E===null&&(P==="finished"||P==="running"&&ut);return f&&f(ke.value),Mn&&T(),ke},ee=()=>{g&&g.stop(),g=void 0},ce=()=>{P="idle",ee(),S(),v(),A=R=null},T=()=>{P="finished",d&&d(),ee(),S()},_=()=>{if(w)return;g||(g=n(Ae));const M=g.now();c&&c(),E!==null?A=M-E:(!A||P==="finished")&&(A=M),P==="finished"&&v(),R=A,E=null,P="running",g.start()};e&&_();const L={then(M,H){return b.then(M,H)},get time(){return Yt(q)},set time(M){M=Qn(M),q=M,E!==null||!g||y===0?E=M:A=g.now()-M/y},get duration(){const M=k.calculatedDuration===null?Qf(k):k.calculatedDuration;return Yt(M)},get speed(){return y},set speed(M){M===y||!g||(y=M,L.time=Yt(q))},get state(){return P},play:_,pause:()=>{P="paused",E=q},stop:()=>{w=!0,P!=="idle"&&(P="idle",u&&u(),ce())},cancel:()=>{R!==null&&Ae(R),ce()},complete:()=>{P="finished"},sample:M=>(A=0,Ae(M))};return L}function Sk(e){let t;return()=>(t===void 0&&(t=e()),t)}const bk=Sk(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),kk=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Xo=10,jk=2e4,Ck=(e,t)=>t.type==="spring"||e==="backgroundColor"||!_x(t.ease);function Pk(e,t,{onUpdate:n,onComplete:r,...i}){if(!(bk()&&kk.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,l,c,u=!1;const d=()=>{c=new Promise(x=>{l=x})};d();let{keyframes:f,duration:h=300,ease:y,times:w}=i;if(Ck(t,i)){const x=oa({...i,repeat:0,delay:0});let $={done:!1,value:f[0]};const k=[];let C=0;for(;!$.done&&C<jk;)$=x.sample(C),k.push($.value),C+=Xo;w=void 0,f=k,h=C-Xo,y="linear"}const S=L2(e.owner.current,t,f,{...i,duration:h,ease:y,times:w}),b=()=>{u=!1,S.cancel()},v=()=>{u=!0,ae.update(b),l(),d()};return S.onfinish=()=>{u||(e.set(I2(f,i)),r&&r(),v())},{then(x,$){return c.then(x,$)},attachTimeline(x){return S.timeline=x,S.onfinish=null,$e},get time(){return Yt(S.currentTime||0)},set time(x){S.currentTime=Qn(x)},get speed(){return S.playbackRate},set speed(x){S.playbackRate=x},get duration(){return Yt(h)},play:()=>{s||(S.play(),tn(b))},pause:()=>S.pause(),stop:()=>{if(s=!0,S.playState==="idle")return;const{currentTime:x}=S;if(x){const $=oa({...i,autoplay:!1});e.setWithVelocity($.sample(x-Xo).value,$.sample(x).value,Xo)}v()},complete:()=>{u||S.finish()},cancel:v}}function Ek({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:$e,pause:$e,stop:$e,then:o=>(o(),Promise.resolve()),cancel:$e,complete:$e});return t?oa({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const zk={type:"spring",stiffness:500,damping:25,restSpeed:10},Tk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Dk={type:"keyframes",duration:.8},Ak={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Rk=(e,{keyframes:t})=>t.length>2?Dk:ar.has(e)?e.startsWith("scale")?Tk(t[1]):zk:Ak,yu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(zn.test(t)||t==="0")&&!t.startsWith("url(")),_k=new Set(["brightness","contrast","saturate","opacity"]);function Mk(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Fa)||[];if(!r)return e;const i=n.replace(r,"");let o=_k.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Lk=/([a-z-]*)\(.*?\)/g,xu={...zn,getAnimatableNone:e=>{const t=e.match(Lk);return t?t.map(Mk).join(" "):e}},Ik={...xx,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:xu,WebkitFilter:xu},qd=e=>Ik[e];function iv(e,t){let n=qd(e);return n!==xu&&(n=zn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ov=e=>/^0[^.\s]+$/.test(e);function Ok(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||ov(e)}function Fk(e,t,n,r){const i=yu(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let l;const c=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),Ok(o[u])&&c.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(l=o[u]);if(i&&c.length&&l)for(let u=0;u<c.length;u++){const d=c[u];o[d]=iv(t,l)}return o}function Bk({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}function Kd(e,t){return e[t]||e.default||e}const Nk={skipAnimations:!1},Yd=(e,t,n,r={})=>i=>{const o=Kd(r,e)||{},s=o.delay||r.delay||0;let{elapsed:l=0}=r;l=l-Qn(s);const c=Fk(t,e,n,o),u=c[0],d=c[c.length-1],f=yu(e,u),h=yu(e,d);let y={keyframes:c,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-l,onUpdate:w=>{t.set(w),o.onUpdate&&o.onUpdate(w)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(Bk(o)||(y={...y,...Rk(e,y)}),y.duration&&(y.duration=Qn(y.duration)),y.repeatDelay&&(y.repeatDelay=Qn(y.repeatDelay)),!f||!h||M2.current||o.type===!1||Nk.skipAnimations)return Ek(y);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const w=Pk(t,e,y);if(w)return w}return oa(y)};function sa(e){return!!(et(e)&&e.add)}const sv=e=>/^\-?\d*\.?\d+$/.test(e);function Qd(e,t){e.indexOf(t)===-1&&e.push(t)}function Xd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Jd{constructor(){this.subscriptions=[]}add(t){return Qd(this.subscriptions,t),()=>Xd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Vk=e=>!isNaN(parseFloat(e));class Wk{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Fe;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ae.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ae.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Vk(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Jd);const r=this.events[t].add(n);return t==="change"?()=>{r(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?tv(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qr(e,t){return new Wk(e,t)}const av=e=>t=>t.test(e),Uk={test:e=>e==="auto",parse:e=>e},lv=[lr,I,Ft,an,Qb,Yb,Uk],gi=e=>lv.find(av(e)),Hk=[...lv,We,zn],Gk=e=>Hk.find(av(e));function qk(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Qr(n))}function Kk(e,t){const n=Na(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const l=d2(o[s]);qk(e,s,l)}}function Yk(e,t,n){var r,i;const o=Object.keys(t).filter(l=>!e.hasValue(l)),s=o.length;if(s)for(let l=0;l<s;l++){const c=o[l],u=t[c];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[c])!==null&&r!==void 0?r:e.readValue(c))!==null&&i!==void 0?i:t[c]),d!=null&&(typeof d=="string"&&(sv(d)||ov(d))?d=parseFloat(d):!Gk(d)&&zn.test(u)&&(d=iv(c,u)),e.addValue(c,Qr(d,{owner:e})),n[c]===void 0&&(n[c]=d),d!==null&&e.setBaseTarget(c,d))}}function Qk(e,t){return t?(t[e]||t.default||t).from:void 0}function Xk(e,t,n){const r={};for(const i in e){const o=Qk(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function Jk({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Zk(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function cv(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const c=e.getValue("willChange");r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const h=e.getValue(f),y=l[f];if(!h||y===void 0||d&&Jk(d,f))continue;const w={delay:n,elapsed:0,...Kd(o||{},f)};if(window.HandoffAppearAnimations){const v=e.getProps()[ux];if(v){const g=window.HandoffAppearAnimations(v,f,h,ae);g!==null&&(w.elapsed=g,w.isHandoff=!0)}}let S=!w.isHandoff&&!Zk(h,y);if(w.type==="spring"&&(h.getVelocity()||w.velocity)&&(S=!1),h.animation&&(S=!1),S)continue;h.start(Yd(f,h,y,e.shouldReduceMotion&&ar.has(f)?{type:!1}:w));const b=h.animation;sa(c)&&(c.add(f),b.then(()=>c.remove(f))),u.push(b)}return s&&Promise.all(u).then(()=>{s&&Kk(e,s)}),u}function vu(e,t,n={}){const r=Na(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(cv(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=i;return ej(e,t,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[c,u]=l==="beforeChildren"?[o,s]:[s,o];return c().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function ej(e,t,n=0,r=0,i=1,o){const s=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(tj).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(vu(u,t,{...o,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function tj(e,t){return e.sortNodePosition(t)}function nj(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>vu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=vu(e,t,n);else{const i=typeof t=="function"?Na(e,t,n.custom):t;r=Promise.all(cv(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const rj=[..._d].reverse(),ij=_d.length;function oj(e){return t=>Promise.all(t.map(({animation:n,options:r})=>nj(e,n,r)))}function sj(e){let t=oj(e);const n=lj();let r=!0;const i=(c,u)=>{const d=Na(e,u);if(d){const{transition:f,transitionEnd:h,...y}=d;c={...c,...y,...h}}return c};function o(c){t=c(e)}function s(c,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},h=[],y=new Set;let w={},S=1/0;for(let v=0;v<ij;v++){const g=rj[v],x=n[g],$=d[g]!==void 0?d[g]:f[g],k=ho($),C=g===u?x.isActive:null;C===!1&&(S=v);let P=$===f[g]&&$!==d[g]&&k;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),x.protectedKeys={...w},!x.isActive&&C===null||!$&&!x.prevProp||Ia($)||typeof $=="boolean")continue;let A=aj(x.prevProp,$)||g===u&&x.isActive&&!P&&k||v>S&&k,R=!1;const X=Array.isArray($)?$:[$];let pe=X.reduce(i,{});C===!1&&(pe={});const{prevResolvedValues:B={}}=x,q={...B,...pe},Ae=ee=>{A=!0,y.has(ee)&&(R=!0,y.delete(ee)),x.needsAnimating[ee]=!0};for(const ee in q){const ce=pe[ee],T=B[ee];if(w.hasOwnProperty(ee))continue;let _=!1;na(ce)&&na(T)?_=!Ax(ce,T):_=ce!==T,_?ce!==void 0?Ae(ee):y.add(ee):ce!==void 0&&y.has(ee)?Ae(ee):x.protectedKeys[ee]=!0}x.prevProp=$,x.prevResolvedValues=pe,x.isActive&&(w={...w,...pe}),r&&e.blockInitialAnimation&&(A=!1),A&&(!P||R)&&h.push(...X.map(ee=>({animation:ee,options:{type:g,...c}})))}if(y.size){const v={};y.forEach(g=>{const x=e.getBaseTarget(g);x!==void 0&&(v[g]=x)}),h.push({animation:v})}let b=!!h.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,b?t(h):Promise.resolve()}function l(c,u,d){var f;if(n[c].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(y=>{var w;return(w=y.animationState)===null||w===void 0?void 0:w.setActive(c,u)}),n[c].isActive=u;const h=s(d,c);for(const y in n)n[y].protectedKeys={};return h}return{animateChanges:s,setActive:l,setAnimateFunction:o,getState:()=>n}}function aj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ax(t,e):!1}function Ln(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lj(){return{animate:Ln(!0),whileInView:Ln(),whileHover:Ln(),whileTap:Ln(),whileDrag:Ln(),whileFocus:Ln(),exit:Ln()}}class cj extends _n{constructor(t){super(t),t.animationState||(t.animationState=sj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Ia(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let uj=0;class dj extends _n{constructor(){super(...arguments),this.id=uj++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const pj={animation:{Feature:cj},exit:{Feature:dj}},Xf=(e,t)=>Math.abs(e-t);function fj(e,t){const n=Xf(e.x,t.x),r=Xf(e.y,t.y);return Math.sqrt(n**2+r**2)}class uv{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Tl(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,y=fj(f.offset,{x:0,y:0})>=3;if(!h&&!y)return;const{point:w}=f,{timestamp:S}=Fe;this.history.push({...w,timestamp:S});const{onStart:b,onMove:v}=this.handlers;h||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=zl(h,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:y,onSessionEnd:w,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Tl(f.type==="pointercancel"?this.lastMoveEventInfo:zl(h,this.transformPagePoint),this.history);this.startEvent&&y&&y(f,b),w&&w(f,b)},!Px(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Ba(t),l=zl(s,this.transformPagePoint),{point:c}=l,{timestamp:u}=Fe;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Tl(l,this.history)),this.removeListeners=jn(Kt(this.contextWindow,"pointermove",this.handlePointerMove),Kt(this.contextWindow,"pointerup",this.handlePointerUp),Kt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),tn(this.updatePoint)}}function zl(e,t){return t?{point:t(e.point)}:e}function Jf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Tl({point:e},t){return{point:e,delta:Jf(e,dv(t)),offset:Jf(e,hj(t)),velocity:mj(t,.1)}}function hj(e){return e[0]}function dv(e){return e[e.length-1]}function mj(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=dv(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Qn(t)));)n--;if(!r)return{x:0,y:0};const o=Yt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function at(e){return e.max-e.min}function $u(e,t=0,n=.01){return Math.abs(e-t)<=n}function Zf(e,t,n,r=.5){e.origin=r,e.originPoint=he(t.min,t.max,e.origin),e.scale=at(n)/at(t),($u(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=he(n.min,n.max,e.origin)-e.originPoint,($u(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Wi(e,t,n,r){Zf(e.x,t.x,n.x,r?r.originX:void 0),Zf(e.y,t.y,n.y,r?r.originY:void 0)}function eh(e,t,n){e.min=n.min+t.min,e.max=e.min+at(t)}function gj(e,t,n){eh(e.x,t.x,n.x),eh(e.y,t.y,n.y)}function th(e,t,n){e.min=t.min-n.min,e.max=e.min+at(t)}function Ui(e,t,n){th(e.x,t.x,n.x),th(e.y,t.y,n.y)}function yj(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?he(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?he(n,e,r.max):Math.min(e,n)),e}function nh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function xj(e,{top:t,left:n,bottom:r,right:i}){return{x:nh(e.x,n,i),y:nh(e.y,t,r)}}function rh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function vj(e,t){return{x:rh(e.x,t.x),y:rh(e.y,t.y)}}function $j(e,t){let n=.5;const r=at(e),i=at(t);return i>r?n=go(t.min,t.max-r,e.min):r>i&&(n=go(e.min,e.max-i,t.min)),En(0,1,n)}function wj(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const wu=.35;function Sj(e=wu){return e===!1?e=0:e===!0&&(e=wu),{x:ih(e,"left","right"),y:ih(e,"top","bottom")}}function ih(e,t,n){return{min:oh(e,t),max:oh(e,n)}}function oh(e,t){return typeof e=="number"?e:e[t]||0}const sh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Cr=()=>({x:sh(),y:sh()}),ah=()=>({min:0,max:0}),we=()=>({x:ah(),y:ah()});function ft(e){return[e("x"),e("y")]}function pv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function bj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function kj(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Dl(e){return e===void 0||e===1}function Su({scale:e,scaleX:t,scaleY:n}){return!Dl(e)||!Dl(t)||!Dl(n)}function Fn(e){return Su(e)||fv(e)||e.z||e.rotate||e.rotateX||e.rotateY}function fv(e){return lh(e.x)||lh(e.y)}function lh(e){return e&&e!=="0%"}function aa(e,t,n){const r=e-n,i=t*r;return n+i}function ch(e,t,n,r,i){return i!==void 0&&(e=aa(e,i,r)),aa(e,n,r)+t}function bu(e,t=0,n=1,r,i){e.min=ch(e.min,t,n,r,i),e.max=ch(e.max,t,n,r,i)}function hv(e,{x:t,y:n}){bu(e.x,t.translate,t.scale,t.originPoint),bu(e.y,n.translate,n.scale,n.originPoint)}function jj(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const c=o.instance;c&&c.style&&c.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Pr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,hv(e,s)),r&&Fn(o.latestValues)&&Pr(e,o.latestValues))}t.x=uh(t.x),t.y=uh(t.y)}function uh(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function un(e,t){e.min=e.min+t,e.max=e.max+t}function dh(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=he(e.min,e.max,o);bu(e,t[n],t[r],s,t.scale)}const Cj=["x","scaleX","originX"],Pj=["y","scaleY","originY"];function Pr(e,t){dh(e.x,t,Cj),dh(e.y,t,Pj)}function mv(e,t){return pv(kj(e.getBoundingClientRect(),t))}function Ej(e,t,n){const r=mv(e,n),{scroll:i}=t;return i&&(un(r.x,i.offset.x),un(r.y,i.offset.y)),r}const gv=({current:e})=>e?e.ownerDocument.defaultView:null,zj=new WeakMap;class Tj{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ba(d,"page").point)},o=(d,f)=>{const{drag:h,dragPropagation:y,onDragStart:w}=this.getProps();if(h&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=zx(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ft(b=>{let v=this.getAxisMotionValue(b).get()||0;if(Ft.test(v)){const{projection:g}=this.visualElement;if(g&&g.layout){const x=g.layout.layoutBox[b];x&&(v=at(x)*(parseFloat(v)/100))}}this.originPoint[b]=v}),w&&ae.update(()=>w(d,f),!1,!0);const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},s=(d,f)=>{const{dragPropagation:h,dragDirectionLock:y,onDirectionLock:w,onDrag:S}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:b}=f;if(y&&this.currentDirection===null){this.currentDirection=Dj(b),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),S&&S(d,f)},l=(d,f)=>this.stop(d,f),c=()=>ft(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new uv(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:gv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ae.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Jo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=yj(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&kr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=xj(i.layoutBox,n):this.constraints=!1,this.elastic=Sj(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ft(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=wj(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!kr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Ej(r,i.root,this.visualElement.getTransformPagePoint());let s=vj(i.layout.layoutBox,o);if(n){const l=n(bj(s));this.hasMutatedConstraints=!!l,l&&(s=pv(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=ft(d=>{if(!Jo(d,n,this.currentDirection))return;let f=c&&c[d]||{};s&&(f={min:0,max:0});const h=i?200:1e6,y=i?40:1e7,w={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,w)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Yd(t,r,0,n))}stopAnimation(){ft(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ft(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ft(n=>{const{drag:r}=this.getProps();if(!Jo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n];o.set(t[n]-he(s,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!kr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ft(s=>{const l=this.getAxisMotionValue(s);if(l){const c=l.get();i[s]=$j({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ft(s=>{if(!Jo(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(he(c,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;zj.set(this.visualElement,this);const t=this.visualElement.current,n=Kt(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();kr(c)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Gt(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(ft(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=wu,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function Jo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Dj(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Aj extends _n{constructor(t){super(t),this.removeGroupControls=$e,this.removeListeners=$e,this.controls=new Tj(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$e}unmount(){this.removeGroupControls(),this.removeListeners()}}const ph=e=>(t,n)=>{e&&ae.update(()=>e(t,n))};class Rj extends _n{constructor(){super(...arguments),this.removePointerDownListener=$e}onPointerDown(t){this.session=new uv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:ph(t),onStart:ph(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ae.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Kt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function _j(){const e=j.useContext(Ad);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=j.useId();return j.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const ks={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(I.test(e))e=parseFloat(e);else return e;const n=fh(e,t.target.x),r=fh(e,t.target.y);return`${n}% ${r}%`}},Mj={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=zn.parse(e);if(i.length>5)return r;const o=zn.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=c;const u=he(l,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class Lj extends Ne.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Vb(Ij),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ks.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||ae.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function yv(e){const[t,n]=_j(),r=j.useContext(px);return Ne.createElement(Lj,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(fx),isPresent:t,safeToRemove:n})}const Ij={borderRadius:{...yi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yi,borderTopRightRadius:yi,borderBottomLeftRadius:yi,borderBottomRightRadius:yi,boxShadow:Mj},xv=["TopLeft","TopRight","BottomLeft","BottomRight"],Oj=xv.length,hh=e=>typeof e=="string"?parseFloat(e):e,mh=e=>typeof e=="number"||I.test(e);function Fj(e,t,n,r,i,o){i?(e.opacity=he(0,n.opacity!==void 0?n.opacity:1,Bj(r)),e.opacityExit=he(t.opacity!==void 0?t.opacity:1,0,Nj(r))):o&&(e.opacity=he(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<Oj;s++){const l=`border${xv[s]}Radius`;let c=gh(t,l),u=gh(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||mh(c)===mh(u)?(e[l]=Math.max(he(hh(c),hh(u),r),0),(Ft.test(u)||Ft.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=he(t.rotate||0,n.rotate||0,r))}function gh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Bj=vv(0,.5,Nx),Nj=vv(.5,.95,$e);function vv(e,t,n){return r=>r<e?0:r>t?1:n(go(e,t,r))}function yh(e,t){e.min=t.min,e.max=t.max}function pt(e,t){yh(e.x,t.x),yh(e.y,t.y)}function xh(e,t,n,r,i){return e-=t,e=aa(e,1/n,r),i!==void 0&&(e=aa(e,1/i,r)),e}function Vj(e,t=0,n=1,r=.5,i,o=e,s=e){if(Ft.test(t)&&(t=parseFloat(t),t=he(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=he(o.min,o.max,r);e===o&&(l-=t),e.min=xh(e.min,t,n,l,i),e.max=xh(e.max,t,n,l,i)}function vh(e,t,[n,r,i],o,s){Vj(e,t[n],t[r],t[i],t.scale,o,s)}const Wj=["x","scaleX","originX"],Uj=["y","scaleY","originY"];function $h(e,t,n,r){vh(e.x,t,Wj,n?n.x:void 0,r?r.x:void 0),vh(e.y,t,Uj,n?n.y:void 0,r?r.y:void 0)}function wh(e){return e.translate===0&&e.scale===1}function $v(e){return wh(e.x)&&wh(e.y)}function Hj(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function wv(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Sh(e){return at(e.x)/at(e.y)}class Gj{constructor(){this.members=[]}add(t){Qd(this.members,t),t.scheduleRender()}remove(t){if(Xd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function bh(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:c,rotateX:u,rotateY:d}=n;c&&(r+=`rotate(${c}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const qj=(e,t)=>e.depth-t.depth;class Kj{constructor(){this.children=[],this.isDirty=!1}add(t){Qd(this.children,t),this.isDirty=!0}remove(t){Xd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(qj),this.isDirty=!1,this.children.forEach(t)}}function Yj(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(tn(r),e(o-t))};return ae.read(r,!0),()=>tn(r)}function Qj(e){window.MotionDebug&&window.MotionDebug.record(e)}function Xj(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Jj(e,t,n){const r=et(e)?e:Qr(e);return r.start(Yd("",r,t,n)),r.animation}const kh=["","X","Y","Z"],Zj={visibility:"hidden"},jh=1e3;let eC=0;const Bn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Sv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=eC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Bn.totalNodes=Bn.resolvedTargetDeltas=Bn.recalculatedProjection=0,this.nodes.forEach(rC),this.nodes.forEach(lC),this.nodes.forEach(cC),this.nodes.forEach(iC),Qj(Bn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Kj)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Jd),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Xj(s),this.instance=s;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Yj(h,250),ks.hasAnimatedSinceResize&&(ks.hasAnimatedSinceResize=!1,this.nodes.forEach(Ph))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:y,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||d.getDefaultTransition()||hC,{onLayoutAnimationStart:b,onLayoutAnimationComplete:v}=d.getProps(),g=!this.targetLayout||!wv(this.targetLayout,w)||y,x=!h&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const $={...Kd(S,"layout"),onPlay:b,onComplete:v};(d.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($)}else h||Ph(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uC),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ch);return}this.isUpdating||this.nodes.forEach(sC),this.isUpdating=!1,this.nodes.forEach(aC),this.nodes.forEach(tC),this.nodes.forEach(nC),this.clearAllSnapshots();const l=performance.now();Fe.delta=En(0,1e3/60,l-Fe.timestamp),Fe.timestamp=l,Fe.isProcessing=!0,wl.update.process(Fe),wl.preRender.process(Fe),wl.render.process(Fe),Fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(oC),this.sharedNodes.forEach(dC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!$v(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(l||Fn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),mC(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return we();const l=s.measureViewportBox(),{scroll:c}=this.root;return c&&(un(l.x,c.offset.x),un(l.y,c.offset.y)),l}removeElementScroll(s){const l=we();pt(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){pt(l,s);const{scroll:h}=this.root;h&&(un(l.x,-h.offset.x),un(l.y,-h.offset.y))}un(l.x,d.offset.x),un(l.y,d.offset.y)}}return l}applyTransform(s,l=!1){const c=we();pt(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Pr(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Fn(d.latestValues)&&Pr(c,d.latestValues)}return Fn(this.latestValues)&&Pr(c,this.latestValues),c}removeTransform(s){const l=we();pt(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!Fn(u.latestValues))continue;Su(u.latestValues)&&u.updateSnapshot();const d=we(),f=u.measurePageBox();pt(d,f),$h(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Fn(this.latestValues)&&$h(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Fe.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Ui(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gj(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pt(this.target,this.layout.layoutBox),hv(this.target,this.targetDelta)):pt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Ui(this.relativeTargetOrigin,this.target,y.target),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Bn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Su(this.parent.latestValues)||fv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Fe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;pt(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,y=this.treeScale.y;jj(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:w}=l;if(!w){this.projectionTransform&&(this.projectionDelta=Cr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Cr(),this.projectionDeltaWithTransform=Cr());const S=this.projectionTransform;Wi(this.projectionDelta,this.layoutCorrected,w,this.latestValues),this.projectionTransform=bh(this.projectionDelta,this.treeScale),(this.projectionTransform!==S||this.treeScale.x!==h||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),Bn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=Cr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=we(),y=c?c.source:void 0,w=this.layout?this.layout.source:void 0,S=y!==w,b=this.getStack(),v=!b||b.members.length<=1,g=!!(S&&!v&&this.options.crossfade===!0&&!this.path.some(fC));this.animationProgress=0;let x;this.mixTargetDelta=$=>{const k=$/1e3;Eh(f.x,s.x,k),Eh(f.y,s.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ui(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),pC(this.relativeTarget,this.relativeTargetOrigin,h,k),x&&Hj(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=we()),pt(x,this.relativeTarget)),S&&(this.animationValues=d,Fj(d,u,this.latestValues,k,g,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{ks.hasAnimatedSinceResize=!0,this.currentAnimation=Jj(0,jh,{...s,onUpdate:l=>{this.mixTargetDelta(l),s.onUpdate&&s.onUpdate(l)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(jh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&bv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||we();const f=at(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+f;const h=at(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+h}pt(l,c),Pr(l,d),Wi(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new Gj),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:l}=this.options;return l?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:l}=this.options;return l?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(l=!0),!l)return;const u={};for(let d=0;d<kh.length;d++){const f="rotate"+kh[d];c[f]&&(u[f]=c[f],s.setStaticValue(f,0))}s.render();for(const d in u)s.setStaticValue(d,u[d]);s.scheduleRender()}getProjectionStyles(s){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Zj;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=bs(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=bs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Fn(this.latestValues)&&(S.transform=d?d({},""):"none",this.hasProjected=!1),S}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=bh(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:y,y:w}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${w.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=h.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const S in ea){if(h[S]===void 0)continue;const{correct:b,applyTo:v}=ea[S],g=u.transform==="none"?h[S]:b(h[S],f);if(v){const x=v.length;for(let $=0;$<x;$++)u[v[$]]=g}else u[S]=g}return this.options.layoutId&&(u.pointerEvents=f===this?bs(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Ch),this.root.sharedNodes.clear()}}}function tC(e){e.updateLayout()}function nC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?ft(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],y=at(h);h.min=r[f].min,h.max=h.min+y}):bv(o,n.layoutBox,r)&&ft(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],y=at(r[f]);h.max=h.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+y)});const l=Cr();Wi(l,r,n.layoutBox);const c=Cr();s?Wi(c,e.applyTransform(i,!0),n.measuredBox):Wi(c,r,n.layoutBox);const u=!$v(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:y}=f;if(h&&y){const w=we();Ui(w,n.layoutBox,h.layoutBox);const S=we();Ui(S,r,y.layoutBox),wv(w,S)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=S,e.relativeTargetOrigin=w,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function rC(e){Bn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function iC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function oC(e){e.clearSnapshot()}function Ch(e){e.clearMeasurements()}function sC(e){e.isLayoutDirty=!1}function aC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ph(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function lC(e){e.resolveTargetDelta()}function cC(e){e.calcProjection()}function uC(e){e.resetRotation()}function dC(e){e.removeLeadSnapshot()}function Eh(e,t,n){e.translate=he(t.translate,0,n),e.scale=he(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function zh(e,t,n,r){e.min=he(t.min,n.min,r),e.max=he(t.max,n.max,r)}function pC(e,t,n,r){zh(e.x,t.x,n.x,r),zh(e.y,t.y,n.y,r)}function fC(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const hC={duration:.45,ease:[.4,0,.1,1]},Th=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Dh=Th("applewebkit/")&&!Th("chrome/")?Math.round:$e;function Ah(e){e.min=Dh(e.min),e.max=Dh(e.max)}function mC(e){Ah(e.x),Ah(e.y)}function bv(e,t,n){return e==="position"||e==="preserve-aspect"&&!$u(Sh(t),Sh(n),.2)}const gC=Sv({attachResizeListener:(e,t)=>Gt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Al={current:void 0},kv=Sv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Al.current){const e=new gC({});e.mount(window),e.setOptions({layoutScroll:!0}),Al.current=e}return Al.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),yC={pan:{Feature:Rj},drag:{Feature:Aj,ProjectionNode:kv,MeasureLayout:yv}},xC=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function vC(e){const t=xC.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function ku(e,t,n=1){const[r,i]=vC(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return sv(s)?parseFloat(s):s}else return fu(i)?ku(i,t,n+1):i}function $C(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!fu(o))return;const s=ku(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!fu(o))continue;const s=ku(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const wC=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),jv=e=>wC.has(e),SC=e=>Object.keys(e).some(jv),Rh=e=>e===lr||e===I,_h=(e,t)=>parseFloat(e.split(", ")[t]),Mh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return _h(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?_h(o[1],e):0}},bC=new Set(["x","y","z"]),kC=jo.filter(e=>!bC.has(e));function jC(e){const t=[];return kC.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Xr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Mh(4,13),y:Mh(5,14)};Xr.translateX=Xr.x;Xr.translateY=Xr.y;const CC=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,l={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{l[u]=Xr[u](r,o)}),t.render();const c=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(l[u]),e[u]=Xr[u](c,o)}),e},PC=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(jv);let o=[],s=!1;const l=[];if(i.forEach(c=>{const u=e.getValue(c);if(!e.hasValue(c))return;let d=n[c],f=gi(d);const h=t[c];let y;if(na(h)){const w=h.length,S=h[0]===null?1:0;d=h[S],f=gi(d);for(let b=S;b<w&&h[b]!==null;b++)y?Wd(gi(h[b])===y):y=gi(h[b])}else y=gi(h);if(f!==y)if(Rh(f)&&Rh(y)){const w=u.get();typeof w=="string"&&u.set(parseFloat(w)),typeof h=="string"?t[c]=parseFloat(h):Array.isArray(h)&&y===I&&(t[c]=h.map(parseFloat))}else f!=null&&f.transform&&(y!=null&&y.transform)&&(d===0||h===0)?d===0?u.set(y.transform(d)):t[c]=f.transform(h):(s||(o=jC(e),s=!0),l.push(c),r[c]=r[c]!==void 0?r[c]:t[c],u.jump(h))}),l.length){const c=l.indexOf("height")>=0?window.pageYOffset:null,u=CC(t,e,l);return o.length&&o.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),La&&c!==null&&window.scrollTo({top:c}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function EC(e,t,n,r){return SC(t)?PC(e,t,n,r):{target:t,transitionEnd:r}}const zC=(e,t,n,r)=>{const i=$C(e,t,r);return t=i.target,r=i.transitionEnd,EC(e,t,n,r)},ju={current:null},Cv={current:!1};function TC(){if(Cv.current=!0,!!La)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ju.current=e.matches;e.addListener(t),t()}else ju.current=!1}function DC(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(et(o))e.addValue(i,o),sa(r)&&r.add(i);else if(et(s))e.addValue(i,Qr(o,{owner:e})),sa(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const l=e.getValue(i);!l.hasAnimated&&l.set(o)}else{const l=e.getStaticValue(i);e.addValue(i,Qr(l!==void 0?l:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Lh=new WeakMap,Pv=Object.keys(mo),AC=Pv.length,Ih=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],RC=Md.length;class _C{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ae.render(this.render,!1,!0);const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=Oa(n),this.isVariantNode=dx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const h=d[f];l[f]!==void 0&&et(h)&&(h.set(l[f],!1),sa(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Lh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Cv.current||TC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ju.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Lh.delete(this.current),this.projection&&this.projection.unmount(),tn(this.notifyUpdate),tn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=ar.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ae.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,l;for(let c=0;c<AC;c++){const u=Pv[c],{isEnabled:d,Feature:f,ProjectionNode:h,MeasureLayout:y}=mo[u];h&&(s=h),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),y&&(l=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:u,drag:d,dragConstraints:f,layoutScroll:h,layoutRoot:y}=n;this.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||f&&kr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:h,layoutRoot:y})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Ih.length;r++){const i=Ih[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=DC(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<RC;r++){const i=Md[r],o=this.props[i];(ho(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Qr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Vd(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!et(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Jd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ev extends _C{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=Xk(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){Yk(this,r,s);const l=zC(this,r,s,n);n=l.transitionEnd,r=l.target}return{transition:t,transitionEnd:n,...r}}}function MC(e){return window.getComputedStyle(e)}class LC extends Ev{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(ar.has(n)){const r=qd(n);return r&&r.default||0}else{const r=MC(t),i=(gx(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return mv(t,n)}build(t,n,r,i){Id(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Nd(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;et(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Sx(t,n,r,i)}}class IC extends Ev{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ar.has(n)){const r=qd(n);return r&&r.default||0}return n=bx.has(n)?n:Rd(n),t.getAttribute(n)}measureInstanceViewportBox(){return we()}scrapeMotionValuesFromProps(t,n){return jx(t,n)}build(t,n,r,i){Fd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){kx(t,n,r,i)}mount(t){this.isSVGTag=Bd(t.tagName),super.mount(t)}}const OC=(e,t)=>Ld(e)?new IC(t,{enableHardwareAcceleration:!1}):new LC(t,{enableHardwareAcceleration:!0}),FC={layout:{ProjectionNode:kv,MeasureLayout:yv}},BC={...pj,...A2,...yC,...FC},zv=Bb((e,t)=>v2(e,t,BC,OC)),NC=p(zv.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.ocean};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${({fullWidth:e})=>e&&Z`
    width: 100%;
  `}
  
  ${({size:e,theme:t})=>{switch(e){case"sm":return Z`
          padding: ${t.spacing.sm} ${t.spacing.md};
          font-size: ${t.typography.fontSize.sm};
          min-height: 40px;
          
          @media (max-width: ${t.breakpoints.sm}) {
            min-height: 44px;
            padding: ${t.spacing.md} ${t.spacing.lg};
          }
        `;case"lg":return Z`
          padding: ${t.spacing.md} ${t.spacing.xl};
          font-size: ${t.typography.fontSize.lg};
          min-height: 52px;
          
          @media (max-width: ${t.breakpoints.sm}) {
            min-height: 48px;
            padding: ${t.spacing.md} ${t.spacing.lg};
            font-size: ${t.typography.fontSize.base};
          }
        `;default:return Z`
          padding: ${t.spacing.md} ${t.spacing.lg};
          font-size: ${t.typography.fontSize.base};
          min-height: 44px;
          
          @media (max-width: ${t.breakpoints.sm}) {
            min-height: 48px;
          }
        `}}}
  
  ${({variant:e,theme:t})=>{switch(e){case"secondary":return Z`
          background: ${t.colors.gray[100]};
          color: ${t.colors.gray[700]};
          
          &:hover:not(:disabled) {
            background: ${t.colors.gray[200]};
          }
        `;case"outline":return Z`
          background: transparent;
          color: ${t.colors.ocean};
          border-color: ${t.colors.ocean};
          
          &:hover:not(:disabled) {
            background: ${t.colors.ocean};
            color: ${t.colors.white};
          }
        `;case"ghost":return Z`
          background: transparent;
          color: ${t.colors.gray[600]};
          
          &:hover:not(:disabled) {
            background: ${t.colors.gray[100]};
            color: ${t.colors.gray[800]};
          }
        `;case"danger":return Z`
          background: ${t.colors.error};
          color: ${t.colors.white};
          
          &:hover:not(:disabled) {
            background: #dc2626;
          }
        `;default:return Z`
          background: ${t.colors.ocean};
          color: ${t.colors.white};
          
          &:hover:not(:disabled) {
            background: #0c5a94;
          }
        `}}}
`,VC=p.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,F=({variant:e="primary",size:t="md",fullWidth:n=!1,disabled:r=!1,loading:i=!1,children:o,onClick:s,type:l="button","data-testid":c,...u})=>a.jsxs(NC,{variant:e,size:t,fullWidth:n,disabled:r||i,onClick:s,type:l,"data-testid":c,whileHover:{scale:r||i?1:1.02},whileTap:{scale:r||i?1:.98},...u,children:[i&&a.jsx(VC,{}),o]}),WC=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  white-space: nowrap;
  
  ${({size:e,theme:t})=>{switch(e){case"sm":return Z`
          padding: ${t.spacing.xs} ${t.spacing.sm};
          font-size: ${t.typography.fontSize.xs};
        `;default:return Z`
          padding: ${t.spacing.sm} ${t.spacing.md};
          font-size: ${t.typography.fontSize.sm};
        `}}}
  
  ${({variant:e,theme:t})=>{switch(e){case"secondary":return Z`
          background: ${t.colors.gray[100]};
          color: ${t.colors.gray[700]};
        `;case"success":return Z`
          background: #dcfce7;
          color: #166534;
        `;case"warning":return Z`
          background: #fef3c7;
          color: #92400e;
        `;case"error":return Z`
          background: #fee2e2;
          color: #991b1b;
        `;case"gold":return Z`
          background: ${t.colors.gold};
          color: ${t.colors.navy};
        `;default:return Z`
          background: ${t.colors.ocean};
          color: ${t.colors.white};
        `}}}
`,le=({children:e,variant:t="primary",size:n="md",className:r,...i})=>a.jsx(WC,{variant:t,size:n,className:r,...i,children:e}),UC=p.div`
  display: flex;
  align-items: center;
  gap: ${({size:e})=>{switch(e){case"sm":return"8px";case"lg":return"16px";default:return"12px"}}};
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`,HC=p.img`
  height: ${({size:e})=>{switch(e){case"sm":return"24px";case"lg":return"48px";default:return"32px"}}};
  width: auto;
  object-fit: contain;
`,GC=p.span`
  font-size: ${({size:e})=>{switch(e){case"sm":return"16px";case"lg":return"24px";default:return"20px"}}};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.navy};
  display: ${({hideText:e})=>e?"none":"block"};
  
  @media (max-width: 480px) {
    display: ${({hideText:e})=>"none"};
  }
`,Va=({size:e="md",hideText:t=!1,onClick:n,"data-testid":r})=>{const i=`data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#FCD34D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F97316;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#E0F2FE;stop-opacity:1" />
          <stop offset="30%" style="stop-color:#7DD3FC;stop-opacity:1" />
          <stop offset="70%" style="stop-color:#0EA5E9;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0369A1;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#1E3A8A;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0EA5E9;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Sun -->
      <circle cx="500" cy="150" r="120" fill="url(#sunGradient)" />
      
      <!-- Ship Hull -->
      <path d="M150 350 Q200 320 300 320 L600 320 Q650 320 680 350 L680 400 Q680 420 660 420 L170 420 Q150 420 150 400 Z" fill="url(#shipGradient)" />
      
      <!-- Ship Deck Lines -->
      <rect x="180" y="340" width="480" height="8" rx="4" fill="white" opacity="0.8" />
      <rect x="200" y="360" width="440" height="6" rx="3" fill="white" opacity="0.6" />
      <rect x="220" y="380" width="400" height="4" rx="2" fill="white" opacity="0.4" />
      
      <!-- Ship Superstructure -->
      <rect x="300" y="280" width="200" height="40" rx="8" fill="white" />
      <rect x="320" y="260" width="160" height="20" rx="4" fill="#F97316" />
      
      <!-- Waves -->
      <path d="M0 450 Q100 430 200 450 T400 450 T600 450 T800 450 L800 500 Q600 480 400 500 T0 500 Z" fill="url(#waveGradient)" />
      <path d="M0 480 Q150 460 300 480 T600 480 T800 480 L800 520 Q600 500 400 520 T0 520 Z" fill="url(#waveGradient)" opacity="0.7" />
    </svg>
  `)}`;return a.jsxs(UC,{size:e,onClick:n,"data-testid":r,children:[a.jsx(HC,{src:i,alt:"CruiseMate Logo",size:e}),!t&&a.jsx(GC,{size:e,children:"CruiseMate"})]})},qC={},Oh=e=>{let t;const n=new Set,r=(d,f)=>{const h=typeof d=="function"?d(t):d;if(!Object.is(h,t)){const y=t;t=f??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(w=>w(t,y))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(qC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},KC=e=>e?Oh(e):Oh;var Tv={exports:{}},Dv={},Av={exports:{}},Rv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=j;function YC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var QC=typeof Object.is=="function"?Object.is:YC,XC=Jr.useState,JC=Jr.useEffect,ZC=Jr.useLayoutEffect,e5=Jr.useDebugValue;function t5(e,t){var n=t(),r=XC({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return ZC(function(){i.value=n,i.getSnapshot=t,Rl(i)&&o({inst:i})},[e,n,t]),JC(function(){return Rl(i)&&o({inst:i}),e(function(){Rl(i)&&o({inst:i})})},[e]),e5(n),n}function Rl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!QC(e,n)}catch{return!0}}function n5(e,t){return t()}var r5=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?n5:t5;Rv.useSyncExternalStore=Jr.useSyncExternalStore!==void 0?Jr.useSyncExternalStore:r5;Av.exports=Rv;var i5=Av.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=j,o5=i5;function s5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var a5=typeof Object.is=="function"?Object.is:s5,l5=o5.useSyncExternalStore,c5=Wa.useRef,u5=Wa.useEffect,d5=Wa.useMemo,p5=Wa.useDebugValue;Dv.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=c5(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=d5(function(){function c(y){if(!u){if(u=!0,d=y,y=r(y),i!==void 0&&s.hasValue){var w=s.value;if(i(w,y))return f=w}return f=y}if(w=f,a5(d,y))return w;var S=r(y);return i!==void 0&&i(w,S)?(d=y,w):(d=y,f=S)}var u=!1,d,f,h=n===void 0?null:n;return[function(){return c(t())},h===null?void 0:function(){return c(h())}]},[t,n,r,i]);var l=l5(e,o[0],o[1]);return u5(function(){s.hasValue=!0,s.value=l},[l]),p5(l),l};Tv.exports=Dv;var f5=Tv.exports;const h5=sg(f5),_v={},{useDebugValue:m5}=Ne,{useSyncExternalStoreWithSelector:g5}=h5;let Fh=!1;const y5=e=>e;function x5(e,t=y5,n){(_v?"production":void 0)!=="production"&&n&&!Fh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Fh=!0);const r=g5(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return m5(r),r}const v5=e=>{(_v?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?KC(e):e,n=(r,i)=>x5(t,r,i);return Object.assign(n,t),n},$5=e=>v5,w5={};function S5(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var o;const s=c=>c===null?null:JSON.parse(c,void 0),l=(o=n.getItem(i))!=null?o:null;return l instanceof Promise?l.then(s):s(l)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,void 0)),removeItem:i=>n.removeItem(i)}}const yo=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return yo(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return yo(r)(n)}}}},b5=(e,t)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:b=>b,version:0,merge:(b,v)=>({...v,...b}),...t},s=!1;const l=new Set,c=new Set;let u;try{u=o.getStorage()}catch{}if(!u)return e((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...b)},r,i);const d=yo(o.serialize),f=()=>{const b=o.partialize({...r()});let v;const g=d({state:b,version:o.version}).then(x=>u.setItem(o.name,x)).catch(x=>{v=x});if(v)throw v;return g},h=i.setState;i.setState=(b,v)=>{h(b,v),f()};const y=e((...b)=>{n(...b),f()},r,i);let w;const S=()=>{var b;if(!u)return;s=!1,l.forEach(g=>g(r()));const v=((b=o.onRehydrateStorage)==null?void 0:b.call(o,r()))||void 0;return yo(u.getItem.bind(u))(o.name).then(g=>{if(g)return o.deserialize(g)}).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==o.version){if(o.migrate)return o.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var x;return w=o.merge(g,(x=r())!=null?x:y),n(w,!0),f()}).then(()=>{v==null||v(w,void 0),s=!0,c.forEach(g=>g(w))}).catch(g=>{v==null||v(void 0,g)})};return i.persist={setOptions:b=>{o={...o,...b},b.getStorage&&(u=b.getStorage())},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>S(),hasHydrated:()=>s,onHydrate:b=>(l.add(b),()=>{l.delete(b)}),onFinishHydration:b=>(c.add(b),()=>{c.delete(b)})},S(),w||y},k5=(e,t)=>(n,r,i)=>{let o={storage:S5(()=>localStorage),partialize:S=>S,version:0,merge:(S,b)=>({...b,...S}),...t},s=!1;const l=new Set,c=new Set;let u=o.storage;if(!u)return e((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...S)},r,i);const d=()=>{const S=o.partialize({...r()});return u.setItem(o.name,{state:S,version:o.version})},f=i.setState;i.setState=(S,b)=>{f(S,b),d()};const h=e((...S)=>{n(...S),d()},r,i);i.getInitialState=()=>h;let y;const w=()=>{var S,b;if(!u)return;s=!1,l.forEach(g=>{var x;return g((x=r())!=null?x:h)});const v=((b=o.onRehydrateStorage)==null?void 0:b.call(o,(S=r())!=null?S:h))||void 0;return yo(u.getItem.bind(u))(o.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==o.version){if(o.migrate)return[!0,o.migrate(g.state,g.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,g.state];return[!1,void 0]}).then(g=>{var x;const[$,k]=g;if(y=o.merge(k,(x=r())!=null?x:h),n(y,!0),$)return d()}).then(()=>{v==null||v(y,void 0),y=r(),s=!0,c.forEach(g=>g(y))}).catch(g=>{v==null||v(void 0,g)})};return i.persist={setOptions:S=>{o={...o,...S},S.storage&&(u=S.storage)},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>w(),hasHydrated:()=>s,onHydrate:S=>(l.add(S),()=>{l.delete(S)}),onFinishHydration:S=>(c.add(S),()=>{c.delete(S)})},o.skipHydration||w(),y||h},j5=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((w5?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),b5(e,t)):k5(e,t),C5=j5,Le=$5()(C5((e,t)=>({currentPersona:"guest",setPersona:n=>e({currentPersona:n}),currentPassenger:{id:"1",passengerId:"P001",name:"Sarah Johnson",party:{adults:2,children:1,infants:0},cabinClass:"Balcony",loyaltyTier:"Gold",ship:"Royal Caribbean Odyssey",cruiseLine:"Royal Caribbean",sailingStart:"2024-03-15",sailingEnd:"2024-03-22",itinerary:[{date:"2024-03-15",port:"Miami",country:"USA",lat:25.7617,lng:-80.1918},{date:"2024-03-16",port:"At Sea",country:"Caribbean",lat:24,lng:-76},{date:"2024-03-17",port:"Nassau",country:"Bahamas",lat:25.0443,lng:-77.3504},{date:"2024-03-18",port:"Cozumel",country:"Mexico",lat:20.423,lng:-86.9223},{date:"2024-03-19",port:"Costa Maya",country:"Mexico",lat:18.7373,lng:-87.7586},{date:"2024-03-20",port:"At Sea",country:"Caribbean",lat:22,lng:-80},{date:"2024-03-21",port:"Key West",country:"USA",lat:24.5551,lng:-81.78},{date:"2024-03-22",port:"Miami",country:"USA",lat:25.7617,lng:-80.1918}]},setCurrentPassenger:n=>e({currentPassenger:n}),selectedActivityTypes:[],setSelectedActivityTypes:n=>e({selectedActivityTypes:n}),selectedDestination:null,setSelectedDestination:n=>e({selectedDestination:n}),cartItems:[],addToCart:n=>{const{cartItems:r}=t(),i=r.findIndex(o=>o.id===n.id&&o.type===n.type);if(i>=0){const o=[...r];o[i].quantity+=n.quantity,e({cartItems:o})}else e({cartItems:[...r,n]})},removeFromCart:(n,r)=>{const{cartItems:i}=t();e({cartItems:i.filter(o=>!(o.id===n&&o.type===r))})},updateCartItemQuantity:(n,r,i)=>{const{cartItems:o}=t();if(i<=0){t().removeFromCart(n,r);return}const s=o.map(l=>l.id===n&&l.type===r?{...l,quantity:i}:l);e({cartItems:s})},clearCart:()=>e({cartItems:[]}),getCartTotal:()=>{const{cartItems:n}=t();return n.reduce((r,i)=>r+i.price*i.quantity,0)},perks:[],addPerk:n=>{const{perks:r}=t();e({perks:[...r,n]})},usePerk:n=>{const{perks:r}=t(),i=r.map(o=>o.id===n?{...o,status:"used"}:o);e({perks:i})},gamification:{tier:1,progress:0,totalPurchases:0,unlockedPerks:[]},loyaltyPoints:2500,updateGamificationProgress:n=>{const{gamification:r}=t();e({gamification:{...r,progress:Math.min(n,100)}})},incrementTier:()=>{const{gamification:n}=t();e({gamification:{...n,tier:Math.min(n.tier+1,3),progress:0}})},setLastSpinDate:n=>{const{gamification:r}=t();e({gamification:{...r,lastSpinDate:n}})},incrementPurchases:()=>{const{gamification:n}=t(),r=n.totalPurchases+1;let i=n.progress+25,o=n.tier;i>=100&&o<3&&(o+=1,i=0),e({gamification:{...n,totalPurchases:r,progress:Math.min(i,100),tier:o}})},unlockPerk:n=>{const{gamification:r}=t();r.unlockedPerks.includes(n)||e({gamification:{...r,unlockedPerks:[...r.unlockedPerks,n]}})},addLoyaltyPoints:n=>{const{loyaltyPoints:r}=t();e({loyaltyPoints:r+n})},spendLoyaltyPoints:n=>{const{loyaltyPoints:r}=t();e({loyaltyPoints:Math.max(0,r-n)})},featureFlags:{enableGamification:!0,enableTimedDeals:!0,enableDynamicWeatherSections:!0,enableSimulatorDeepLink:!0,enableA11yHints:!0},toggleFeatureFlag:n=>{const{featureFlags:r}=t();e({featureFlags:{...r,[n]:!r[n]}})}}),{name:"cruisex-app-store",partialize:e=>({currentPersona:e.currentPersona,currentPassenger:e.currentPassenger,selectedActivityTypes:e.selectedActivityTypes,selectedDestination:e.selectedDestination,cartItems:e.cartItems,perks:e.perks,gamification:e.gamification,loyaltyPoints:e.loyaltyPoints,featureFlags:e.featureFlags})}));class P5{constructor(){zo(this,"events",[]);this.loadPersistedEvents()}track(t,n={}){const r={eventName:t,payload:n,timestamp:Date.now()};this.events.push(r),console.log("📊 Analytics Event:",{event:t,data:n,time:new Date().toISOString()}),this.persistEvents()}persistEvents(){try{const t=this.events.slice(-1e3);localStorage.setItem("cruisex_analytics",JSON.stringify(t))}catch(t){console.warn("Failed to persist analytics events:",t)}}getEvents(){return[...this.events]}getEventsByName(t){return this.events.filter(n=>n.eventName===t)}clearEvents(){this.events=[],localStorage.removeItem("cruisex_analytics")}loadPersistedEvents(){try{const t=localStorage.getItem("cruisex_analytics");t&&(this.events=JSON.parse(t))}catch(t){console.warn("Failed to load persisted analytics events:",t)}}}const W=new P5,U={OFFER_CREATED:"offer_created",OFFER_UPDATED:"offer_updated",OFFER_DELETED:"offer_deleted",BUNDLE_CREATED:"bundle_created",BUNDLE_UPDATED:"bundle_updated",BUNDLE_DELETED:"bundle_deleted",RULE_CREATED:"rule_created",RULE_UPDATED:"rule_updated",RULE_DELETED:"rule_deleted",SEGMENT_CREATED:"segment_created",SIMULATOR_RUN:"simulator_run",OFFER_VIEWED:"offer_viewed",OFFER_ADDED_TO_CART:"offer_added_to_cart",BUNDLE_VIEWED:"bundle_viewed",BUNDLE_ADDED_TO_CART:"bundle_added_to_cart",CART_VIEWED:"cart_viewed",CHECKOUT_STARTED:"checkout_started",CHECKOUT_COMPLETED:"checkout_completed",SPIN_WHEEL_USED:"spin_wheel_used",PERK_UNLOCKED:"perk_unlocked",SURPRISE_ME_CLICKED:"surprise_me_clicked",PAGE_VIEWED:"page_viewed",PERSONA_SWITCHED:"persona_switched"},E5=p.header`
  background: ${({theme:e})=>e.colors.navy};
  color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing.md};
  box-shadow: ${({theme:e})=>e.shadows.md};
  position: sticky;
  top: 0;
  z-index: 100;
  height: 80px;
  display: flex;
  align-items: center;
`,z5=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`,T5=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,D5=p.button`
  display: none;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  
  &:hover {
    background: ${({theme:e})=>e.colors.ocean};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,A5=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing.xs};
  }
`,R5=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    display: none;
  }
`,_5=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.xs};
  background: ${({theme:e})=>e.colors.ocean};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.xs}) {
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    
    button {
      font-size: 12px;
      padding: 4px 8px;
      min-height: 32px;
    }
  }
`,M5=p.div`
  position: relative;
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  
  &:hover {
    background: ${({theme:e})=>e.colors.ocean};
  }
`,L5=p(le)`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 18px;
  height: 18px;
  padding: 0;
  font-size: 10px;
  transform: translate(25%, -25%);
`,I5=({onMenuClick:e})=>{const t=wt();ii();const{currentPersona:n,setPersona:r,cartItems:i,currentPassenger:o}=Le(),s=i.reduce((d,f)=>d+f.quantity,0),l=()=>{t("/"),W.track(U.PAGE_VIEWED,{page:"landing"})},c=d=>{r(d),W.track(U.PERSONA_SWITCHED,{from:n,to:d}),t(d==="admin"?"/admin":"/guest/activity-selection")},u=()=>{t("/guest/cart"),W.track(U.CART_VIEWED,{itemCount:s})};return a.jsx(E5,{children:a.jsxs(z5,{children:[a.jsxs(T5,{children:[a.jsx(D5,{onClick:e,"data-testid":"menu-button",children:a.jsx(vb,{size:24})}),a.jsx(Va,{onClick:l,"data-testid":"logo",size:"md"})]}),a.jsxs(A5,{children:[n==="guest"&&o&&a.jsxs(R5,{children:[a.jsx(ax,{size:18}),a.jsx("span",{style:{fontSize:"14px"},children:o.name.split(" ")[0]}),a.jsx(le,{variant:"gold",size:"sm",children:o.loyaltyTier||"Member"})]}),n==="guest"&&a.jsxs(M5,{onClick:u,"data-testid":"cart-button",children:[a.jsx(si,{size:20}),s>0&&a.jsx(L5,{variant:"gold",size:"sm",children:s})]}),a.jsxs(_5,{children:[a.jsx(F,{size:"sm",variant:n==="admin"?"primary":"ghost",onClick:()=>c("admin"),"data-testid":"admin-persona-button",children:"Admin"}),a.jsx(F,{size:"sm",variant:n==="guest"?"primary":"ghost",onClick:()=>c("guest"),"data-testid":"guest-persona-button",children:"Guest"})]})]})]})})},O5=p.aside`
  width: 280px;
  background: ${({theme:e})=>e.colors.white};
  border-right: 1px solid ${({theme:e})=>e.colors.gray[200]};
  padding: ${({theme:e})=>e.spacing.lg};
  overflow-y: auto;
  flex-shrink: 0;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(${({isOpen:e})=>e?"0":"-100%"});
    transition: transform 0.3s ease;
    padding: ${({theme:e})=>e.spacing.md};
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,F5=p.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: flex;
  }
`,B5=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,N5=p.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.gray[500]};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  
  &:hover {
    background: ${({theme:e})=>e.colors.gray[100]};
    color: ${({theme:e})=>e.colors.gray[700]};
  }
`,Bh=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Nh=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.gray[500]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
  }
`,Vh=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({theme:e})=>e.colors.gray[600]};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  
  &:hover {
    background: ${({theme:e})=>e.colors.gray[50]};
    color: ${({theme:e})=>e.colors.gray[800]};
  }
  
  ${({active:e,theme:t})=>e&&Z`
    background: ${t.colors.ocean}10;
    color: ${t.colors.ocean};
    font-weight: ${t.typography.fontWeight.medium};
  `}
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,Wh=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,Uh=p.span`
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`,V5=[{path:"/admin",label:"Dashboard",icon:a.jsx(db,{size:20}),persona:"admin"},{path:"/admin/offers",label:"Offers",icon:a.jsx(Ra,{size:20}),persona:"admin"},{path:"/admin/bundles",label:"Bundles",icon:a.jsx(rx,{size:20}),persona:"admin"},{path:"/admin/segments",label:"Segments",icon:a.jsx(Rn,{size:20}),persona:"admin"},{path:"/admin/rules",label:"Rules",icon:a.jsx(ai,{size:20}),persona:"admin"},{path:"/admin/simulator",label:"Simulator",icon:a.jsx(Td,{size:20}),persona:"admin"},{path:"/admin/analytics",label:"Analytics",icon:a.jsx(Yr,{size:20}),persona:"admin"},{path:"/guest/activity-selection",label:"My Interests",icon:a.jsx(en,{size:20}),persona:"guest"},{path:"/guest/trip-map",label:"Trip Map",icon:a.jsx(Dd,{size:20}),persona:"guest"},{path:"/guest/onboard-upgrades",label:"Upgrades",icon:a.jsx(Yr,{size:20}),persona:"guest"},{path:"/guest/cart",label:"My Trip Plan",icon:a.jsx(si,{size:20}),persona:"guest"},{path:"/guest/gamify",label:"Rewards",icon:a.jsx(en,{size:20}),persona:"guest"},{path:"/guest/wallet",label:"Wallet",icon:a.jsx(Eb,{size:20}),persona:"guest"}],W5=({isOpen:e=!0,onClose:t})=>{const n=wt(),r=ii(),i=Le(u=>u.currentPersona),o=V5.filter(u=>u.persona===i),s=(u,d)=>{n(u),t==null||t(),W.track(U.PAGE_VIEWED,{page:d.toLowerCase(),persona:i})},l=o.filter(u=>u.persona==="admin"),c=o.filter(u=>u.persona==="guest");return a.jsxs(O5,{isOpen:e,children:[a.jsxs(F5,{children:[a.jsx(B5,{children:i==="admin"?"Admin Studio":"Guest Experience"}),a.jsx(N5,{onClick:t,children:a.jsx(pu,{size:20})})]}),i==="admin"&&a.jsxs(Bh,{children:[a.jsx(Nh,{children:"Admin Studio"}),l.map(u=>a.jsxs(Vh,{active:r.pathname===u.path,onClick:()=>s(u.path,u.label),"data-testid":`nav-${u.label.toLowerCase().replace(" ","-")}`,children:[a.jsx(Wh,{children:u.icon}),a.jsx(Uh,{children:u.label})]},u.path))]}),i==="guest"&&a.jsxs(Bh,{children:[a.jsx(Nh,{children:"Guest Experience"}),c.map(u=>a.jsxs(Vh,{active:r.pathname===u.path,onClick:()=>s(u.path,u.label),"data-testid":`nav-${u.label.toLowerCase().replace(" ","-")}`,children:[a.jsx(Wh,{children:u.icon}),a.jsx(Uh,{children:u.label})]},u.path))]})]})},U5=p.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${m.colors.white};
  border-top: 1px solid ${m.colors.gray[200]};
  padding: ${m.spacing.sm} ${m.spacing.md};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: ${m.shadows.lg};
`,H5=p.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${m.spacing.xs};
  background: none;
  border: none;
  padding: ${m.spacing.sm};
  border-radius: ${m.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
  
  ${e=>e.active&&`
    background: ${m.colors.primary}15;
    color: ${m.colors.primary};
  `}
  
  &:hover {
    background: ${m.colors.gray[100]};
  }
`,G5=p.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${e=>e.active?m.colors.primary:m.colors.gray[500]};
`,q5=p.span`
  font-size: ${m.typography.fontSize.xs};
  font-weight: ${e=>e.active?m.typography.fontWeight.semibold:m.typography.fontWeight.normal};
  color: ${e=>e.active?m.colors.primary:m.colors.gray[500]};
`,K5=({className:e})=>{const t=wt(),n=ii(),{cartItems:r}=Le(),i=r.reduce((s,l)=>s+l.quantity,0),o=[{path:"/dashboard",icon:"🚢",label:"My Cruise"},{path:"/guest/trip-map",icon:"📍",label:"Ports"},{path:"/itinerary",icon:"📅",label:"Itinerary"},{path:"/guest/cart",icon:"🛒",label:"Cart",badge:i>0?i:void 0},{path:"/profile",icon:"👤",label:"Profile"}];return a.jsx(U5,{className:e,children:o.map(s=>a.jsxs(H5,{active:n.pathname===s.path,onClick:()=>t(s.path),style:{position:"relative"},children:[a.jsx(G5,{active:n.pathname===s.path,children:s.icon}),a.jsx(q5,{active:n.pathname===s.path,children:s.label}),s.badge&&a.jsx("div",{style:{position:"absolute",top:"4px",right:"8px",background:m.colors.sunset,color:"white",borderRadius:"10px",minWidth:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"bold"},children:s.badge})]},s.path))})},Hh=p.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Y5=p.div`
  display: flex;
  flex: 1;
  position: relative;
`,Gh=p.main`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.offWhite};
  overflow-y: auto;
  min-height: calc(100vh - 80px);
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing.lg};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-left: ${({sidebarOpen:e})=>e?"280px":"0"};
    transition: margin-left 0.3s ease;
  }
`,Q5=p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({visible:e})=>e?1:0};
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,X5=({children:e})=>{const[t,n]=j.useState(!1),r=ii(),i=r.pathname.startsWith("/guest")||r.pathname==="/dashboard"||r.pathname==="/itinerary"||r.pathname==="/concierge"||r.pathname==="/profile",o=r.pathname.startsWith("/admin"),s=()=>{n(!1)};return i?a.jsxs(Hh,{children:[a.jsx(Gh,{sidebarOpen:!1,style:{padding:0,minHeight:"100vh"},children:e}),a.jsx(K5,{})]}):a.jsxs(Hh,{children:[a.jsx(I5,{onMenuClick:()=>n(!t)}),a.jsxs(Y5,{children:[!o&&a.jsx(W5,{isOpen:t,onClose:()=>n(!1)}),a.jsx(Q5,{visible:t,onClick:s}),a.jsx(Gh,{sidebarOpen:t,children:e})]})]})},J5=tx`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Z5=p.div`
  position: fixed;
  bottom: ${({theme:e})=>e.spacing.lg};
  right: ${({theme:e})=>e.spacing.lg};
  z-index: 1000;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    bottom: ${({theme:e})=>e.spacing.md};
    right: ${({theme:e})=>e.spacing.md};
  }
`,e4=p.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: ${({theme:e})=>e.shadows.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: ${J5} 3s ease-in-out infinite;
  position: relative;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${({theme:e})=>e.shadows.xl};
  }
  
  ${({hasNotification:e,theme:t})=>e&&`
    &::after {
      content: '';
      position: absolute;
      top: 8px;
      right: 8px;
      width: 12px;
      height: 12px;
      background: ${t.colors.sunshine};
      border-radius: 50%;
      border: 2px solid white;
    }
  `}
`,t4=p.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 320px;
  height: 400px;
  background: white;
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transform: ${({isOpen:e})=>e?"scale(1)":"scale(0)"};
  transform-origin: bottom right;
  transition: all 0.3s ease;
  opacity: ${({isOpen:e})=>e?1:0};
  pointer-events: ${({isOpen:e})=>e?"auto":"none"};
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 280px;
    height: 350px;
  }
`,n4=p.div`
  padding: ${({theme:e})=>e.spacing.lg};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  color: white;
  border-radius: ${({theme:e})=>e.borderRadius.xl} ${({theme:e})=>e.borderRadius.xl} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,r4=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,i4=p.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,o4=p.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.lg};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,s4=p.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({isBot:e})=>!e&&"flex-direction: row-reverse;"}
`,a4=p.div`
  max-width: 80%;
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({isBot:e,theme:t})=>e?t.colors.gray[100]:t.colors.primary};
  color: ${({isBot:e,theme:t})=>e?t.colors.gray[800]:"white"};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1.4;
`,l4=p.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({isBot:e,theme:t})=>e?t.colors.secondary:t.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
`,c4=p.div`
  padding: ${({theme:e})=>e.spacing.lg};
  border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,u4=p.input`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,d4=p.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary};
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({theme:e})=>e.colors.secondary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,qh=["🌞 Don't forget to bring sunscreen for your beach day in Nassau!","🏊‍♀️ The pool deck is perfect today - grab your swimsuit!","🍽️ Your dinner reservation is at 7 PM - smart casual dress code.","🌧️ Looks like rain in Cozumel - perfect time for the spa!","🎭 Tonight's show starts at 8 PM in the main theater.","☕ The coffee shop opens at 6 AM if you're an early bird!","🛍️ Duty-free shopping closes at 6 PM today.","🏃‍♂️ The fitness center has yoga at 7 AM tomorrow morning."],p4=()=>{const[e,t]=j.useState(!1),[n,r]=j.useState([]),[i,o]=j.useState(""),[s,l]=j.useState(!0),{currentPassenger:c}=Le();j.useEffect(()=>{const h={id:"1",text:`Hi ${(c==null?void 0:c.name.split(" ")[0])||"there"}! 👋 I'm your cruise assistant. I can help you with reminders, recommendations, and questions about your trip!`,isBot:!0,timestamp:new Date};r([h]);const y=setInterval(()=>{if(!e){l(!0);const w=qh[Math.floor(Math.random()*qh.length)],S={id:Date.now().toString(),text:w,isBot:!0,timestamp:new Date};r(b=>[...b,S])}},3e4);return()=>clearInterval(y)},[c,e]);const u=()=>{t(!e),e||l(!1)},d=()=>{if(!i.trim())return;const h={id:Date.now().toString(),text:i,isBot:!1,timestamp:new Date};r(y=>[...y,h]),o(""),setTimeout(()=>{const y=["Thanks for your question! Let me help you with that. 😊","Great question! I'd recommend checking with guest services for the most up-to-date information.","That sounds like fun! Have you checked out the activities in your trip map?","I'm here to help! Is there anything specific you'd like to know about your cruise?","Excellent choice! Don't forget to make a reservation if needed."],w={id:(Date.now()+1).toString(),text:y[Math.floor(Math.random()*y.length)],isBot:!0,timestamp:new Date};r(S=>[...S,w])},1e3)},f=h=>{h.key==="Enter"&&d()};return a.jsxs(Z5,{isOpen:e,children:[a.jsxs(t4,{isOpen:e,children:[a.jsxs(n4,{children:[a.jsxs(r4,{children:[a.jsx(Va,{size:"sm",hideText:!0}),"Cruise Assistant"]}),a.jsx(i4,{onClick:u,children:a.jsx(pu,{size:20})})]}),a.jsx(o4,{children:n.map(h=>a.jsxs(s4,{isBot:h.isBot,children:[a.jsx(l4,{isBot:h.isBot,children:h.isBot?"🤖":"👤"}),a.jsx(a4,{isBot:h.isBot,children:h.text})]},h.id))}),a.jsxs(c4,{children:[a.jsx(u4,{value:i,onChange:h=>o(h.target.value),onKeyPress:f,placeholder:"Ask me anything..."}),a.jsx(d4,{onClick:d,disabled:!i.trim(),children:a.jsx(Sb,{size:16})})]})]}),a.jsx(e4,{onClick:u,hasNotification:s,"data-testid":"chatbot-button",children:e?a.jsx(pu,{size:24}):a.jsx(ix,{size:24})})]})},f4=p(zv.div)`
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: all 0.2s ease;
  
  ${({padding:e,theme:t})=>{switch(e){case"sm":return Z`
          padding: ${t.spacing.sm};
          
          @media (min-width: ${t.breakpoints.sm}) {
            padding: ${t.spacing.md};
          }
        `;case"lg":return Z`
          padding: ${t.spacing.lg};
          
          @media (min-width: ${t.breakpoints.sm}) {
            padding: ${t.spacing.xl};
          }
        `;default:return Z`
          padding: ${t.spacing.md};
          
          @media (min-width: ${t.breakpoints.sm}) {
            padding: ${t.spacing.lg};
          }
        `}}}
  
  ${({hover:e,theme:t})=>e&&Z`
    @media (hover: hover) {
      &:hover {
        box-shadow: ${t.shadows.md};
        transform: translateY(-2px);
      }
    }
    
    @media (hover: none) {
      &:active {
        box-shadow: ${t.shadows.md};
        transform: translateY(-1px);
      }
    }
  `}
  
  ${({clickable:e})=>e&&Z`
    cursor: pointer;
    
    @media (max-width: ${({theme:t})=>t.breakpoints.sm}) {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    }
  `}
`,N=({children:e,padding:t="md",hover:n=!1,clickable:r=!1,onClick:i,className:o,"data-testid":s,...l})=>a.jsx(f4,{padding:t,hover:n,clickable:r,onClick:i,className:o,"data-testid":s,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},...l,children:e}),h4=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
`,m4=p.div`
  background: linear-gradient(
    135deg,
    ${m.colors.primary} 0%,
    ${m.colors.secondary} 100%
  );
  padding: ${m.spacing.xxl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,g4=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.md};
  line-height: 1.2;
  
  @media (min-width: ${m.breakpoints.sm}) {
    font-size: ${m.typography.fontSize["3xl"]};
    margin-bottom: ${m.spacing.lg};
  }
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["4xl"]};
  }
`,y4=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${m.spacing.xl};
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize.xl};
  }
`,x4=p.div`
  display: flex;
  flex-direction: column;
  gap: ${m.spacing.md};
  align-items: center;
  
  @media (min-width: ${m.breakpoints.sm}) {
    flex-direction: row;
    gap: ${m.spacing.lg};
    justify-content: center;
  }
`,v4=p.div`
  padding: ${m.spacing.xxl} ${m.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`,$4=p.h2`
  font-size: ${m.typography.fontSize.xl};
  font-weight: ${m.typography.fontWeight.bold};
  color: ${m.colors.navy};
  text-align: center;
  margin-bottom: ${m.spacing.xl};
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["2xl"]};
  }
`,w4=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${m.spacing.lg};
  
  @media (min-width: ${m.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: ${m.spacing.xl};
  }
`,S4=p(N)`
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${m.shadows.xl};
  }
`,b4=p.div`
  height: 160px;
  background: url(${({imageUrl:e})=>e}) center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
`,k4=p.div`
  padding: ${m.spacing.xl};
  text-align: center;
`,j4=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${m.colors.primary}15;
  border-radius: ${m.borderRadius.full};
  margin: 0 auto ${m.spacing.lg};
  color: ${m.colors.primary};
`,C4=p.h3`
  font-size: ${m.typography.fontSize.lg};
  font-weight: ${m.typography.fontWeight.semibold};
  color: ${m.colors.navy};
  margin-bottom: ${m.spacing.md};
`,P4=p.p`
  color: ${m.colors.gray[600]};
  line-height: 1.6;
  font-size: ${m.typography.fontSize.sm};
`,E4=p(F)`
  background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%);
  border: none;
  box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
`,z4=[{icon:a.jsx(Rn,{size:32}),title:"Family-Friendly Activities",description:"Discover activities perfect for every family member, from toddlers to grandparents!",imageUrl:"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},{icon:a.jsx(ai,{size:32}),title:"Smart Recommendations",description:"Get personalized suggestions based on your interests, weather, and destination.",imageUrl:"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},{icon:a.jsx(Yr,{size:32}),title:"Interactive Trip Planning",description:"Explore destinations on our fun map interface and build your perfect cruise itinerary.",imageUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}],T4=()=>{const e=wt(),t=Le(i=>i.setPersona),n=()=>{t("admin"),e("/admin"),W.track(U.PAGE_VIEWED,{page:"admin_dashboard",source:"landing_cta"})},r=()=>{t("guest"),e("/guest/activity-selection"),W.track(U.PAGE_VIEWED,{page:"guest_activity_selection",source:"landing_cta"})};return a.jsxs(h4,{children:[a.jsxs(m4,{children:[a.jsx(g4,{children:"Welcome to CruiseMate"}),a.jsx(y4,{children:"Your premium cruise companion for curated experiences, exclusive destinations, and personalized luxury at sea."}),a.jsxs(x4,{children:[a.jsxs(E4,{size:"lg",onClick:r,"data-testid":"guest-demo-button",children:["Begin Your Experience",a.jsx(fo,{size:20})]}),a.jsxs(F,{size:"lg",variant:"outline",onClick:n,"data-testid":"admin-demo-button",children:["Admin Dashboard",a.jsx(fo,{size:20})]})]})]}),a.jsxs(v4,{children:[a.jsx($4,{children:"Why Choose CruiseMate?"}),a.jsx(w4,{children:z4.map((i,o)=>a.jsxs(S4,{children:[a.jsx(b4,{imageUrl:i.imageUrl}),a.jsxs(k4,{children:[a.jsx(j4,{children:i.icon}),a.jsx(C4,{children:i.title}),a.jsx(P4,{children:i.description})]})]},o))})]})]})},Kh=[{id:"res_78213",passengerId:"pax_1001",name:"Alex Martin",party:{adults:2,children:1,infants:0},cabinClass:"Balcony",loyaltyTier:"Gold",ship:"Ocean Vista",cruiseLine:"BlueWave Cruises",sailingStart:"2025-11-03",sailingEnd:"2025-11-10",itinerary:[{date:"2025-11-04",port:"Nassau",country:"Bahamas",lat:25.06,lng:-77.34},{date:"2025-11-06",port:"Cozumel",country:"Mexico",lat:20.51,lng:-86.95},{date:"2025-11-08",port:"Key West",country:"USA",lat:24.56,lng:-81.78}]},{id:"res_78214",passengerId:"pax_1002",name:"Sarah & Mike Johnson",party:{adults:2,children:0,infants:0},cabinClass:"Suite",loyaltyTier:"Platinum",ship:"Ocean Vista",cruiseLine:"BlueWave Cruises",sailingStart:"2025-11-03",sailingEnd:"2025-11-10",itinerary:[{date:"2025-11-04",port:"Nassau",country:"Bahamas",lat:25.06,lng:-77.34},{date:"2025-11-06",port:"Cozumel",country:"Mexico",lat:20.51,lng:-86.95},{date:"2025-11-08",port:"Key West",country:"USA",lat:24.56,lng:-81.78}]},{id:"res_78215",passengerId:"pax_1003",name:"Emma Wilson",party:{adults:1,children:0,infants:0},cabinClass:"Interior",loyaltyTier:"Silver",ship:"Ocean Vista",cruiseLine:"BlueWave Cruises",sailingStart:"2025-11-03",sailingEnd:"2025-11-10",itinerary:[{date:"2025-11-04",port:"Nassau",country:"Bahamas",lat:25.06,lng:-77.34},{date:"2025-11-06",port:"Cozumel",country:"Mexico",lat:20.51,lng:-86.95},{date:"2025-11-08",port:"Key West",country:"USA",lat:24.56,lng:-81.78}]}],Yh=[{date:"2025-11-04",port:"Nassau",condition:"Sunny",tempC:28,windKph:12},{date:"2025-11-06",port:"Cozumel",condition:"Showers",tempC:26,windKph:18},{date:"2025-11-08",port:"Key West",condition:"Partly Cloudy",tempC:27,windKph:15},{date:"2025-11-05",port:"At Sea",condition:"Sunny",tempC:29,windKph:8},{date:"2025-11-07",port:"At Sea",condition:"Cloudy",tempC:25,windKph:20}],D4=[{id:"off_cabana",type:"experience",title:"Sun Deck Cabana",desc:"Full-day lounger + fruit platter",price:89,currency:"USD",tags:["sunny","onboard"],media:"cabana.jpg"},{id:"off_spa",type:"spa",title:"Couples Massage",desc:"75-min aromatherapy session",price:159,currency:"USD",tags:["rainy","romance"],media:"spa.jpg"},{id:"off_wifi",type:"service",title:"Premium Wi-Fi",desc:"Unlimited streaming tier",price:59,currency:"USD",tags:["any","tech"],media:"wifi.jpg"},{id:"off_dine",type:"dining",title:"Chef's Table",desc:"7-course tasting menu",price:129,currency:"USD",tags:["luxury","evening"],media:"dining.jpg"},{id:"off_kidsclub",type:"kids",title:"Kids Club Unlimited",desc:"All-week supervised programs",price:49,currency:"USD",tags:["family"],media:"kids.jpg"},{id:"off_excursion_snorkel",type:"excursion",title:"Snorkeling Adventure",desc:"Guided reef exploration with equipment",price:79,currency:"USD",tags:["sunny","adventure","water"],media:"snorkel.jpg"},{id:"off_shopping",type:"shopping",title:"Duty-Free Shopping Credit",desc:"$50 credit for onboard shopping",price:40,currency:"USD",tags:["rainy","indoor"],media:"shopping.jpg"},{id:"off_fitness",type:"fitness",title:"Personal Training Session",desc:"1-hour session with certified trainer",price:85,currency:"USD",tags:["wellness","indoor"],media:"fitness.jpg"}],A4=[{id:"bun_luxury",title:"Luxury Escape",desc:"Massage + Chef's Table + Premium Wi-Fi",items:["off_spa","off_dine","off_wifi"],bundlePrice:299,compareAt:347,currency:"USD",media:"luxury.jpg",badges:["Best Value","Gold Tier Bonus"]},{id:"bun_family",title:"Family Adventure",desc:"Kids Club + Wi-Fi + Beach Day Cabana",items:["off_kidsclub","off_wifi","off_cabana"],bundlePrice:169,compareAt:197,currency:"USD",media:"family.jpg",badges:["Family Favorite"]},{id:"bun_romance",title:"Romantic Getaway",desc:"Couples Massage + Chef's Table + Cabana",items:["off_spa","off_dine","off_cabana"],bundlePrice:329,compareAt:377,currency:"USD",media:"romance.jpg",badges:["Couples Choice"]},{id:"bun_adventure",title:"Adventure Seeker",desc:"Snorkeling + Fitness + Wi-Fi",items:["off_excursion_snorkel","off_fitness","off_wifi"],bundlePrice:199,compareAt:223,currency:"USD",media:"adventure.jpg",badges:["Active Lifestyle"]}],R4=[{id:"seg_family",name:"Family",definition:{childrenMin:1}},{id:"seg_couple",name:"Couple",definition:{adults:2,children:0}},{id:"seg_solo",name:"Solo Traveler",definition:{adults:1,children:0}},{id:"seg_loyal_gold",name:"Loyalty Gold",definition:{loyaltyTier:["Gold","Platinum"]}},{id:"seg_luxury",name:"Luxury Guests",definition:{cabinClass:["Suite","Balcony"]}}],_4=[{id:"rule_sunny_beach",name:"Sunny→Cabana Push",when:{port:["Nassau","Cozumel","Key West"],weather:["Sunny","Partly Cloudy"],dateRange:{start:"2025-11-01",end:"2025-12-31"}},then:{promoteOffers:["off_cabana","off_excursion_snorkel"],promoteBundles:["bun_family","bun_adventure"],badges:["Weather-Perfect"],discounts:[{offerId:"off_cabana",percent:10}]},priority:80,enabled:!0},{id:"rule_rain_spa",name:"Rainy→Spa & Dining",when:{weather:["Showers","Rain","Cloudy"]},then:{promoteOffers:["off_spa","off_dine","off_shopping"],promoteBundles:["bun_luxury","bun_romance"],badges:["Indoor Comfort"]},priority:70,enabled:!0},{id:"rule_loyal_gold",name:"Gold Tier Perk",when:{loyaltyTier:["Gold","Platinum"]},then:{perks:["Free Welcome Cocktail"],discounts:[{bundleId:"bun_luxury",percent:8}],badges:["VIP Member"]},priority:60,enabled:!0},{id:"rule_family_kids",name:"Family with Kids",when:{"party.children":1},then:{promoteOffers:["off_kidsclub"],promoteBundles:["bun_family"],badges:["Family Fun"],discounts:[{offerId:"off_kidsclub",percent:15}]},priority:75,enabled:!0},{id:"rule_suite_luxury",name:"Suite Guests Premium",when:{cabinClass:["Suite"]},then:{promoteOffers:["off_dine","off_spa"],promoteBundles:["bun_luxury","bun_romance"],perks:["Priority Dining Reservations"],badges:["Suite Exclusive"]},priority:65,enabled:!0}],ye=(e=300+Math.random()*700)=>new Promise(t=>setTimeout(t,e)),ue={OFFERS:"cruisex_offers",BUNDLES:"cruisex_bundles",SEGMENTS:"cruisex_segments",RULES:"cruisex_rules"},M4=()=>{localStorage.getItem(ue.OFFERS)||localStorage.setItem(ue.OFFERS,JSON.stringify(D4)),localStorage.getItem(ue.BUNDLES)||localStorage.setItem(ue.BUNDLES,JSON.stringify(A4)),localStorage.getItem(ue.SEGMENTS)||localStorage.setItem(ue.SEGMENTS,JSON.stringify(R4)),localStorage.getItem(ue.RULES)||localStorage.setItem(ue.RULES,JSON.stringify(_4))};M4();const Y={async getPassengers(){return await ye(),Kh},async getPassenger(e){return await ye(),Kh.find(n=>n.id===e)||null},async getWeather(){return await ye(),Yh},async getWeatherByDatePort(e,t){return await ye(),Yh.find(r=>r.date===e&&r.port===t)||null},async getOffers(){await ye();const e=localStorage.getItem(ue.OFFERS);return e?JSON.parse(e):[]},async getOffer(e){return await ye(),(await this.getOffers()).find(n=>n.id===e)||null},async createOffer(e){await ye();const t={...e,id:`off_${Date.now()}`},r=[...await this.getOffers(),t];return localStorage.setItem(ue.OFFERS,JSON.stringify(r)),t},async updateOffer(e,t){await ye();const n=await this.getOffers(),r=n.findIndex(o=>o.id===e);if(r===-1)return null;const i={...n[r],...t};return n[r]=i,localStorage.setItem(ue.OFFERS,JSON.stringify(n)),i},async deleteOffer(e){await ye();const n=(await this.getOffers()).filter(r=>r.id!==e);return localStorage.setItem(ue.OFFERS,JSON.stringify(n)),!0},async getBundles(){await ye();const e=localStorage.getItem(ue.BUNDLES);return e?JSON.parse(e):[]},async getBundle(e){return await ye(),(await this.getBundles()).find(n=>n.id===e)||null},async createBundle(e){await ye();const t={...e,id:`bun_${Date.now()}`},r=[...await this.getBundles(),t];return localStorage.setItem(ue.BUNDLES,JSON.stringify(r)),t},async updateBundle(e,t){await ye();const n=await this.getBundles(),r=n.findIndex(o=>o.id===e);if(r===-1)return null;const i={...n[r],...t};return n[r]=i,localStorage.setItem(ue.BUNDLES,JSON.stringify(n)),i},async deleteBundle(e){await ye();const n=(await this.getBundles()).filter(r=>r.id!==e);return localStorage.setItem(ue.BUNDLES,JSON.stringify(n)),!0},async getSegments(){await ye();const e=localStorage.getItem(ue.SEGMENTS);return e?JSON.parse(e):[]},async createSegment(e){await ye();const t={...e,id:`seg_${Date.now()}`},r=[...await this.getSegments(),t];return localStorage.setItem(ue.SEGMENTS,JSON.stringify(r)),t},async updateSegment(e,t){await ye();const n=await this.getSegments(),r=n.findIndex(o=>o.id===e);if(r===-1)return null;const i={...n[r],...t};return n[r]=i,localStorage.setItem(ue.SEGMENTS,JSON.stringify(n)),i},async deleteSegment(e){await ye();const n=(await this.getSegments()).filter(r=>r.id!==e);return localStorage.setItem(ue.SEGMENTS,JSON.stringify(n)),!0},async getRules(){await ye();const e=localStorage.getItem(ue.RULES);return e?JSON.parse(e):[]},async createRule(e){await ye();const t={...e,id:`rule_${Date.now()}`},r=[...await this.getRules(),t];return localStorage.setItem(ue.RULES,JSON.stringify(r)),t},async updateRule(e,t){await ye();const n=await this.getRules(),r=n.findIndex(o=>o.id===e);if(r===-1)return null;const i={...n[r],...t};return n[r]=i,localStorage.setItem(ue.RULES,JSON.stringify(n)),i},async deleteRule(e){await ye();const n=(await this.getRules()).filter(r=>r.id!==e);return localStorage.setItem(ue.RULES,JSON.stringify(n)),!0}},_l={en:{"common.loading":"Loading...","common.error":"Something went wrong","common.save":"Save","common.cancel":"Cancel","common.delete":"Delete","common.edit":"Edit","common.create":"Create","common.back":"Back","common.next":"Next","common.previous":"Previous","common.close":"Close","common.confirm":"Confirm","nav.admin":"Admin Studio","nav.guest":"Guest Experience","nav.dashboard":"Dashboard","nav.offers":"Offers","nav.bundles":"Bundles","nav.segments":"Segments","nav.rules":"Rules","nav.simulator":"Simulator","nav.analytics":"Analytics","nav.pretrip":"Pre-Trip","nav.onboard":"Onboard","nav.gamify":"Rewards","nav.cart":"Cart","nav.wallet":"Wallet","admin.dashboard.title":"Revenue Manager Dashboard","admin.offers.title":"Manage Offers","admin.offers.create":"Create New Offer","admin.bundles.title":"Manage Bundles","admin.bundles.create":"Create New Bundle","admin.rules.title":"Manage Rules","admin.rules.create":"Create New Rule","admin.simulator.title":"Preview Simulator","admin.simulator.run":"Run Simulation","guest.pretrip.title":"Enhance Your Cruise","guest.onboard.title":"Today's Offers","guest.cart.title":"Your Cart","guest.wallet.title":"Your Wallet","guest.gamify.title":"Unlock Rewards","guest.gamify.spin":"Spin to Win","guest.surprise.title":"Surprise Me!","offer.addToCart":"Add to Cart","offer.viewDetails":"View Details","bundle.addToCart":"Add Bundle","bundle.viewDetails":"View Bundle","bundle.includes":"Includes","bundle.saveAmount":"Save","cart.empty":"Your cart is empty","cart.total":"Total","cart.checkout":"Checkout","checkout.success":"Purchase successful!","checkout.failed":"Purchase failed. Please try again.","weather.sunny":"Sunny","weather.cloudy":"Cloudy","weather.rainy":"Rainy","weather.partlyCloudy":"Partly Cloudy","loyalty.gold":"Gold Member","loyalty.platinum":"Platinum Member","loyalty.silver":"Silver Member","perk.unlocked":"Perk Unlocked!","perk.expired":"Expired"}};class L4{constructor(){zo(this,"currentLocale","en")}setLocale(t){_l[t]&&(this.currentLocale=t)}t(t,n){var i;const r=((i=_l[this.currentLocale])==null?void 0:i[t])||t;return n?Object.entries(n).reduce((o,[s,l])=>o.replace(`{{${s}}}`,l),r):r}getCurrentLocale(){return this.currentLocale}getAvailableLocales(){return Object.keys(_l)}}const Qh=new L4,ne=Qh.t.bind(Qh),Xh=p.div`
  max-width: 1400px;
  margin: 0 auto;
`,I4=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,O4=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }
`,F4=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1.5;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize.base};
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,B4=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme:e})=>e.spacing.lg};
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`,N4=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
`,V4=p.div`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,W4=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({theme:e})=>e.colors.ocean}10;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.ocean};
  margin-right: ${({theme:e})=>e.spacing.md};
`,U4=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,H4=p.div`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,G4=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`,q4=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,K4=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${({theme:e})=>e.colors.ocean}10;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  color: ${({theme:e})=>e.colors.ocean};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Y4=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,Q4=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  line-height: 1.6;
`,X4=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,J4=p.div`
  text-align: center;
`,Z4=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,e3=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.gray[500]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,t3=[{icon:a.jsx(ox,{size:24}),value:"13.4%",label:"Conversion Rate",trend:"+2.1%"},{icon:a.jsx(si,{size:24}),value:"1.9",label:"Attach Rate",trend:"+0.3"},{icon:a.jsx(zd,{size:24}),value:"$112",label:"Average Order Value",trend:"+$8"},{icon:a.jsx(Yr,{size:24}),value:"$72k",label:"GMV (7 days)",trend:"+12%"}],n3=()=>{const e=wt(),[t,n]=j.useState({offers:0,bundles:0,segments:0,rules:0}),[r,i]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const[c,u,d,f]=await Promise.all([Y.getOffers(),Y.getBundles(),Y.getSegments(),Y.getRules()]);n({offers:c.length,bundles:u.length,segments:d.length,rules:f.length})}catch(c){console.error("Failed to load dashboard stats:",c)}finally{i(!1)}})(),W.track(U.PAGE_VIEWED,{page:"admin_dashboard"})},[]);const o=[{path:"/admin/offers",icon:a.jsx(Ra,{size:32}),title:ne("admin.offers.title"),description:"Create and manage individual offers with pricing, descriptions, and targeting rules.",stats:[{value:t.offers.toString(),label:"Total Offers"},{value:"8",label:"Active"}]},{path:"/admin/bundles",icon:a.jsx(rx,{size:32}),title:ne("admin.bundles.title"),description:"Build curated packages that combine multiple offers with special pricing.",stats:[{value:t.bundles.toString(),label:"Total Bundles"},{value:"4",label:"Active"}]},{path:"/admin/segments",icon:a.jsx(Rn,{size:32}),title:"Manage Segments",description:"Define passenger segments based on demographics, loyalty, and preferences.",stats:[{value:t.segments.toString(),label:"Segments"},{value:"3",label:"Active"}]},{path:"/admin/rules",icon:a.jsx(ai,{size:32}),title:ne("admin.rules.title"),description:"Create intelligent rules that automatically promote offers based on context.",stats:[{value:t.rules.toString(),label:"Total Rules"},{value:"5",label:"Enabled"}]},{path:"/admin/simulator",icon:a.jsx(Td,{size:32}),title:ne("admin.simulator.title"),description:"Test how your rules and offers appear to different passenger segments.",stats:[{value:"12",label:"Simulations"},{value:"3",label:"Today"}]},{path:"/admin/analytics",icon:a.jsx(Yr,{size:32}),title:"Analytics Dashboard",description:"Track performance metrics, conversion rates, and revenue optimization.",stats:[{value:"13.4%",label:"CVR"},{value:"$72k",label:"GMV"}]}],s=(l,c)=>{e(l),W.track(U.PAGE_VIEWED,{page:l.split("/").pop(),source:"dashboard_module"})};return r?a.jsx(Xh,{children:a.jsx("div",{children:"Loading dashboard..."})}):a.jsxs(Xh,{children:[a.jsxs(I4,{children:[a.jsx(O4,{children:ne("admin.dashboard.title")}),a.jsx(F4,{children:"Manage your cruise upselling platform and track performance metrics"})]}),a.jsx(B4,{children:t3.map((l,c)=>a.jsxs(N4,{hover:!0,children:[a.jsxs(V4,{children:[a.jsx(W4,{children:l.icon}),a.jsx(le,{variant:"success",size:"sm",children:l.trend})]}),a.jsx(U4,{children:l.value}),a.jsx(H4,{children:l.label})]},c))}),a.jsx(G4,{children:o.map(l=>a.jsxs(q4,{onClick:()=>s(l.path,l.title),"data-testid":`module-${l.path.split("/").pop()}`,children:[a.jsx(K4,{children:l.icon}),a.jsx(Y4,{children:l.title}),a.jsx(Q4,{children:l.description}),a.jsx(X4,{children:l.stats.map((c,u)=>a.jsxs(J4,{children:[a.jsx(Z4,{children:c.value}),a.jsx(e3,{children:c.label})]},u))}),a.jsxs(F,{fullWidth:!0,variant:"outline",children:["Manage ",l.title]})]},l.path))})]})},Jh=p.div`
  max-width: 1400px;
  margin: 0 auto;
`,r3=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,i3=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }
`,o3=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`,s3=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
  position: relative;
`,a3=p.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.ocean}, ${({theme:e})=>e.colors.teal});
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,l3=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,c3=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,u3=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  line-height: 1.5;
`,d3=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,p3=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.ocean};
`,f3=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.xs};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,h3=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,m3=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${({theme:e})=>e.colors.gray[500]};
`,g3=p.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.colors.gray[500]};
`,y3=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const c=await Y.getOffers();t(c)}catch(c){console.error("Failed to load offers:",c)}finally{r(!1)}})(),W.track(U.PAGE_VIEWED,{page:"admin_offers"})},[]);const i=()=>{W.track(U.OFFER_CREATED,{source:"admin_offers"})},o=l=>{W.track(U.OFFER_UPDATED,{offerId:l.id})},s=async l=>{if(window.confirm(`Are you sure you want to delete "${l.title}"?`))try{await Y.deleteOffer(l.id),t(e.filter(c=>c.id!==l.id)),W.track(U.OFFER_DELETED,{offerId:l.id})}catch(c){console.error("Failed to delete offer:",c)}};return n?a.jsx(Jh,{children:a.jsx(m3,{children:"Loading offers..."})}):a.jsxs(Jh,{children:[a.jsxs(r3,{children:[a.jsx(i3,{children:ne("admin.offers.title")}),a.jsxs(F,{onClick:i,"data-testid":"create-offer-button",children:[a.jsx(ot,{size:20}),ne("admin.offers.create")]})]}),e.length===0?a.jsxs(g3,{children:[a.jsx("h3",{children:"No offers created yet"}),a.jsx("p",{children:"Create your first offer to get started with upselling."}),a.jsx("div",{style:{marginTop:"16px"},children:a.jsxs(F,{onClick:i,children:[a.jsx(ot,{size:20}),"Create First Offer"]})})]}):a.jsx(o3,{children:e.map(l=>a.jsxs(s3,{hover:!0,"data-testid":`offer-card-${l.id}`,children:[a.jsx(a3,{children:l.media||"No Image"}),a.jsxs(l3,{children:[a.jsx(c3,{children:l.title}),a.jsx(u3,{children:l.desc}),a.jsxs(d3,{children:[a.jsxs(p3,{children:[a.jsx(zd,{size:20}),l.price]}),a.jsx(le,{variant:"secondary",size:"sm",children:l.type})]}),a.jsx(f3,{children:l.tags.map(c=>a.jsx(le,{variant:"primary",size:"sm",children:c},c))})]}),a.jsxs(h3,{children:[a.jsxs(F,{size:"sm",variant:"outline",onClick:()=>o(l),"data-testid":`edit-offer-${l.id}`,children:[a.jsx(_a,{size:16}),"Edit"]}),a.jsxs(F,{size:"sm",variant:"danger",onClick:()=>s(l),"data-testid":`delete-offer-${l.id}`,children:[a.jsx(ko,{size:16}),"Delete"]})]})]},l.id))})]})},Zh=p.div`
  max-width: 1400px;
  margin: 0 auto;
`,x3=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,v3=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }
`,$3=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`,w3=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
`,S3=p.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.teal},
    ${({theme:e})=>e.colors.gold}
  );
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,b3=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,k3=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,j3=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  line-height: 1.5;
`,C3=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,P3=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.ocean};
`,E3=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.gray[500]};
  text-decoration: line-through;
`,z3=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.success};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,T3=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,D3=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.gray[700]};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,A3=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
`,R3=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,_3=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.xs};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,M3=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,L3=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${({theme:e})=>e.colors.gray[500]};
`,I3=p.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.colors.gray[500]};
`,O3=()=>{const[e,t]=j.useState([]),[n,r]=j.useState([]),[i,o]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const[f,h]=await Promise.all([Y.getBundles(),Y.getOffers()]);t(f),r(h)}catch(f){console.error("Failed to load bundles:",f)}finally{o(!1)}})(),W.track(U.PAGE_VIEWED,{page:"admin_bundles"})},[]);const s=d=>{const f=n.find(h=>h.id===d);return(f==null?void 0:f.title)||"Unknown Offer"},l=()=>{W.track(U.BUNDLE_CREATED,{source:"admin_bundles"})},c=d=>{W.track(U.BUNDLE_UPDATED,{bundleId:d.id})},u=async d=>{if(window.confirm(`Are you sure you want to delete "${d.title}"?`))try{await Y.deleteBundle(d.id),t(e.filter(f=>f.id!==d.id)),W.track(U.BUNDLE_DELETED,{bundleId:d.id})}catch(f){console.error("Failed to delete bundle:",f)}};return i?a.jsx(Zh,{children:a.jsx(L3,{children:"Loading bundles..."})}):a.jsxs(Zh,{children:[a.jsxs(x3,{children:[a.jsx(v3,{children:ne("admin.bundles.title")}),a.jsxs(F,{onClick:l,"data-testid":"create-bundle-button",children:[a.jsx(ot,{size:20}),ne("admin.bundles.create")]})]}),e.length===0?a.jsxs(I3,{children:[a.jsx("h3",{children:"No bundles created yet"}),a.jsx("p",{children:"Create your first bundle to offer curated packages to guests."}),a.jsx("div",{style:{marginTop:"16px"},children:a.jsxs(F,{onClick:l,children:[a.jsx(ot,{size:20}),"Create First Bundle"]})})]}):a.jsx($3,{children:e.map(d=>a.jsxs(w3,{hover:!0,"data-testid":`bundle-card-${d.id}`,children:[a.jsx(S3,{children:d.media||"Bundle Package"}),a.jsxs(b3,{children:[a.jsx(k3,{children:d.title}),a.jsx(j3,{children:d.desc}),a.jsxs(C3,{children:[a.jsxs(P3,{children:["$",d.bundlePrice]}),a.jsxs(E3,{children:["$",d.compareAt]}),a.jsxs(z3,{children:["Save $",d.compareAt-d.bundlePrice]})]}),a.jsxs(T3,{children:[a.jsxs(D3,{children:[ne("bundle.includes"),":"]}),a.jsx(A3,{children:d.items.map(f=>a.jsxs(R3,{children:[a.jsx(Ra,{size:16}),s(f)]},f))})]}),d.badges&&a.jsx(_3,{children:d.badges.map(f=>a.jsx(le,{variant:"gold",size:"sm",children:f},f))})]}),a.jsxs(M3,{children:[a.jsxs(F,{size:"sm",variant:"outline",onClick:()=>c(d),"data-testid":`edit-bundle-${d.id}`,children:[a.jsx(_a,{size:16}),"Edit"]}),a.jsxs(F,{size:"sm",variant:"danger",onClick:()=>u(d),"data-testid":`delete-bundle-${d.id}`,children:[a.jsx(ko,{size:16}),"Delete"]})]})]},d.id))})]})},F3=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,B3=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,N3=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
`,V3=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,W3=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
`,U3=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,H3=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({theme:e})=>e.colors.teal}20;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.teal};
`,G3=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,q3=p.div`
  background: ${({theme:e})=>e.colors.gray[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono.join(", ")};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[700]};
`,K3=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,Y3=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const l=await Y.getSegments();t(l)}catch(l){console.error("Failed to load segments:",l)}finally{r(!1)}})(),W.track(U.PAGE_VIEWED,{page:"admin_segments"})},[]);const i=()=>{W.track(U.SEGMENT_CREATED,{source:"admin_segments"})},o=async s=>{if(window.confirm(`Are you sure you want to delete "${s.name}"?`))try{await Y.deleteSegment(s.id),t(e.filter(l=>l.id!==s.id))}catch(l){console.error("Failed to delete segment:",l)}};return n?a.jsx("div",{children:"Loading segments..."}):a.jsxs(F3,{children:[a.jsxs(B3,{children:[a.jsx(N3,{children:"Manage Segments"}),a.jsxs(F,{onClick:i,"data-testid":"create-segment-button",children:[a.jsx(ot,{size:20}),"Create Segment"]})]}),a.jsx(V3,{children:e.map(s=>a.jsxs(W3,{hover:!0,children:[a.jsxs(U3,{children:[a.jsx(H3,{children:a.jsx(Rn,{size:24})}),a.jsx(G3,{children:s.name})]}),a.jsx(q3,{children:JSON.stringify(s.definition,null,2)}),a.jsxs(K3,{children:[a.jsxs(F,{size:"sm",variant:"outline",children:[a.jsx(_a,{size:16}),"Edit"]}),a.jsxs(F,{size:"sm",variant:"danger",onClick:()=>o(s),children:[a.jsx(ko,{size:16}),"Delete"]})]})]},s.id))})]})},Q3=p.div`
  max-width: 1400px;
  margin: 0 auto;
`,X3=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,J3=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
`,Z3=p.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing.lg};
`,eP=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
`,tP=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,nP=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,rP=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({theme:e})=>e.colors.gold}20;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.gold};
`,iP=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,oP=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,sP=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,em=p.div``,tm=p.h4`
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.gray[700]};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,nm=p.div`
  background: ${({theme:e})=>e.colors.gray[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono.join(", ")};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[700]};
`,aP=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,lP=p.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.sm};
  border: none;
  background: none;
  color: ${({enabled:e,theme:t})=>e?t.colors.success:t.colors.gray[500]};
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.gray[100]};
  }
`,cP=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const c=await Y.getRules();t(c)}catch(c){console.error("Failed to load rules:",c)}finally{r(!1)}})(),W.track(U.PAGE_VIEWED,{page:"admin_rules"})},[]);const i=()=>{W.track(U.RULE_CREATED,{source:"admin_rules"})},o=async l=>{try{const c=await Y.updateRule(l.id,{enabled:!l.enabled});c&&(t(e.map(u=>u.id===l.id?c:u)),W.track(U.RULE_UPDATED,{ruleId:l.id,enabled:!l.enabled}))}catch(c){console.error("Failed to toggle rule:",c)}},s=async l=>{if(window.confirm(`Are you sure you want to delete "${l.name}"?`))try{await Y.deleteRule(l.id),t(e.filter(c=>c.id!==l.id)),W.track(U.RULE_DELETED,{ruleId:l.id})}catch(c){console.error("Failed to delete rule:",c)}};return n?a.jsx("div",{children:"Loading rules..."}):a.jsxs(Q3,{children:[a.jsxs(X3,{children:[a.jsx(J3,{children:ne("admin.rules.title")}),a.jsxs(F,{onClick:i,"data-testid":"create-rule-button",children:[a.jsx(ot,{size:20}),ne("admin.rules.create")]})]}),a.jsx(Z3,{children:e.map(l=>a.jsxs(eP,{hover:!0,children:[a.jsxs(tP,{children:[a.jsxs(nP,{children:[a.jsx(rP,{children:a.jsx(ai,{size:24})}),a.jsx(iP,{children:l.name})]}),a.jsxs(oP,{children:[a.jsxs(le,{variant:"secondary",size:"sm",children:["Priority: ",l.priority]}),a.jsx(le,{variant:l.enabled?"success":"secondary",size:"sm",children:l.enabled?"Enabled":"Disabled"})]})]}),a.jsxs(sP,{children:[a.jsxs(em,{children:[a.jsx(tm,{children:"When (Conditions)"}),a.jsx(nm,{children:JSON.stringify(l.when,null,2)})]}),a.jsxs(em,{children:[a.jsx(tm,{children:"Then (Actions)"}),a.jsx(nm,{children:JSON.stringify(l.then,null,2)})]})]}),a.jsxs(aP,{children:[a.jsxs(lP,{enabled:l.enabled,onClick:()=>o(l),"data-testid":`toggle-rule-${l.id}`,children:[l.enabled?a.jsx(Pb,{size:20}):a.jsx(Cb,{size:20}),l.enabled?"Enabled":"Disabled"]}),a.jsxs(F,{size:"sm",variant:"outline",children:[a.jsx(_a,{size:16}),"Edit"]}),a.jsxs(F,{size:"sm",variant:"danger",onClick:()=>s(l),children:[a.jsx(ko,{size:16}),"Delete"]})]})]},l.id))})]})},uP=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  
  ${({fullWidth:e})=>e&&Z`
    width: 100%;
  `}
`,dP=p.label`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.gray[700]};
`,pP=p.div`
  position: relative;
`,fP=p.select`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  padding-right: ${({theme:e})=>e.spacing.xl};
  border: 2px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.gray[800]};
  transition: all 0.2s ease;
  appearance: none;
  cursor: pointer;
  min-height: 48px;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.ocean};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.ocean}20;
  }
  
  &:disabled {
    background: ${({theme:e})=>e.colors.gray[50]};
    color: ${({theme:e})=>e.colors.gray[500]};
    cursor: not-allowed;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: 16px; /* Prevents zoom on iOS */
    min-height: 52px;
  }
  
  ${({hasError:e,theme:t})=>e&&Z`
    border-color: ${t.colors.error};
    
    &:focus {
      border-color: ${t.colors.error};
      box-shadow: 0 0 0 3px ${t.colors.error}20;
    }
  `}
`,hP=p(fb)`
  position: absolute;
  right: ${({theme:e})=>e.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: ${({theme:e})=>e.colors.gray[400]};
  pointer-events: none;
`,mP=p.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.error};
`,Ml=({label:e,placeholder:t,value:n,onChange:r,options:i,disabled:o=!1,error:s,required:l=!1,fullWidth:c=!1,"data-testid":u,...d})=>{const f=h=>{r==null||r(h.target.value)};return a.jsxs(uP,{fullWidth:c,children:[e&&a.jsxs(dP,{children:[e,l&&a.jsx("span",{style:{color:"red"},children:" *"})]}),a.jsxs(pP,{children:[a.jsxs(fP,{value:n,onChange:f,disabled:o,hasError:!!s,"data-testid":u,...d,children:[t&&a.jsx("option",{value:"",disabled:!0,children:t}),i.map(h=>a.jsx("option",{value:h.value,children:h.label},h.value))]}),a.jsx(hP,{})]}),s&&a.jsx(mP,{children:s})]})};class Zd{constructor(t){zo(this,"rules");this.rules=t.filter(n=>n.enabled).sort((n,r)=>r.priority-n.priority)}evaluate(t){const n={promotedOffers:[],promotedBundles:[],perks:[],discounts:[],badges:[]};for(const r of this.rules)this.matchesCondition(r.when,t)&&this.applyRuleAction(r.then,n);return{promotedOffers:[...new Set(n.promotedOffers)],promotedBundles:[...new Set(n.promotedBundles)],perks:[...new Set(n.perks)],discounts:this.consolidateDiscounts(n.discounts),badges:[...new Set(n.badges)]}}matchesCondition(t,n){if(t.port&&n.port&&!t.port.includes(n.port)||t.weather&&n.weather&&!t.weather.includes(n.weather))return!1;if(t.dateRange){const r=new Date(n.date),i=new Date(t.dateRange.start),o=new Date(t.dateRange.end);if(r<i||r>o)return!1}return!(t.loyaltyTier&&n.loyaltyTier&&!t.loyaltyTier.includes(n.loyaltyTier)||t.cabinClass&&!t.cabinClass.includes(n.cabinClass)||t["party.children"]!==void 0&&n.party.children<t["party.children"]||t.seaDay!==void 0&&n.seaDay!==t.seaDay)}applyRuleAction(t,n){t.promoteOffers&&n.promotedOffers.push(...t.promoteOffers),t.promoteBundles&&n.promotedBundles.push(...t.promoteBundles),t.perks&&n.perks.push(...t.perks),t.discounts&&n.discounts.push(...t.discounts),t.badges&&n.badges.push(...t.badges)}consolidateDiscounts(t){const n=new Map;for(const r of t){const i=r.offerId||r.bundleId||"unknown",o=n.get(i);if(!o)n.set(i,r);else{const s=o.percent||o.fixed||0;(r.percent||r.fixed||0)>s&&n.set(i,r)}}return Array.from(n.values())}}const ep=(e,t,n,r,i)=>({date:t,port:n,weather:r,seaDay:i||n==="At Sea",party:e.party,cabinClass:e.cabinClass,loyaltyTier:e.loyaltyTier}),gP=p.div`
  max-width: 1400px;
  margin: 0 auto;
`,yP=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,xP=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,vP=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
`,$P=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr 2fr;
    gap: ${({theme:e})=>e.spacing.xl};
  }
`,wP=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
  height: fit-content;
`,Ll=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`,Il=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,SP=p.div``,Zo=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,bP=p.div`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,es=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,kP=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,xi=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.ocean}10;
  color: ${({theme:e})=>e.colors.ocean};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,rm=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,im=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,om=p.div`
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.gray[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border-left: 4px solid ${({theme:e})=>e.colors.teal};
`,sm=p.div`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,am=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,jP=()=>{const[e,t]=j.useState([]),[n,r]=j.useState([]),[i,o]=j.useState([]),[s,l]=j.useState([]),[c,u]=j.useState([]),[d,f]=j.useState(""),[h,y]=j.useState(""),[w,S]=j.useState(""),[b,v]=j.useState(""),[g,x]=j.useState(!1),[$,k]=j.useState(null),[C,P]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const[q,Ae,ee,ce,T]=await Promise.all([Y.getPassengers(),Y.getWeather(),Y.getRules(),Y.getOffers(),Y.getBundles()]);t(q),r(Ae),o(ee),l(ce),u(T),q.length>0&&(f(q[0].id),q[0].itinerary.length>0&&(y(q[0].itinerary[0].date),S(q[0].itinerary[0].port)))}catch(q){console.error("Failed to load simulator data:",q)}finally{P(!1)}})(),W.track(U.PAGE_VIEWED,{page:"admin_simulator"})},[]);const E=()=>{var L;const B=e.find(M=>M.id===d);if(!B)return;const q=b||((L=n.find(M=>M.date===h&&M.port===w))==null?void 0:L.condition)||"Sunny",Ae=ep(B,h,w,q,g),ce=new Zd(i).evaluate(Ae),T=ce.promotedOffers.map(M=>s.find(H=>H.id===M)).filter(Boolean),_=ce.promotedBundles.map(M=>c.find(H=>H.id===M)).filter(Boolean);k({context:Ae,result:ce,promotedOfferDetails:T,promotedBundleDetails:_}),W.track(U.SIMULATOR_RUN,{passengerId:d,date:h,port:w,weather:q,promotedOffersCount:ce.promotedOffers.length,promotedBundlesCount:ce.promotedBundles.length})},A=e.map(B=>({value:B.id,label:`${B.name} (${B.loyaltyTier||"Member"})`})),R=e.find(B=>B.id===d),X=(R==null?void 0:R.itinerary.map(B=>({value:B.date,label:`${B.date} - ${B.port}`})))||[],pe=[{value:"",label:"Use actual weather"},{value:"Sunny",label:"Sunny"},{value:"Partly Cloudy",label:"Partly Cloudy"},{value:"Cloudy",label:"Cloudy"},{value:"Showers",label:"Showers"},{value:"Rain",label:"Rain"}];return C?a.jsx("div",{children:"Loading simulator..."}):a.jsxs(gP,{children:[a.jsxs(yP,{children:[a.jsx(xP,{children:ne("admin.simulator.title")}),a.jsx(vP,{children:"Test how your rules and offers appear to different passenger segments and contexts"})]}),a.jsxs($P,{children:[a.jsxs(wP,{children:[a.jsxs(Ll,{children:[a.jsx(Il,{children:"Passenger Context"}),a.jsx(Ml,{label:"Select Passenger",value:d,onChange:f,options:A,fullWidth:!0})]}),a.jsxs(Ll,{children:[a.jsx(Il,{children:"Date & Location"}),a.jsx(Ml,{label:"Date & Port",value:h,onChange:B=>{y(B);const q=R==null?void 0:R.itinerary.find(Ae=>Ae.date===B);q&&(S(q.port),x(q.port==="At Sea"))},options:X,fullWidth:!0})]}),a.jsxs(Ll,{children:[a.jsx(Il,{children:"Weather Override"}),a.jsx(Ml,{label:"Weather Condition",value:b,onChange:v,options:pe,fullWidth:!0})]}),a.jsxs(F,{fullWidth:!0,size:"lg",onClick:E,"data-testid":"run-simulation-button",children:[a.jsx(Td,{size:20}),ne("admin.simulator.run")]})]}),a.jsx(SP,{children:$&&a.jsxs(a.Fragment,{children:[a.jsxs(Zo,{children:[a.jsx(bP,{children:a.jsx(es,{children:"Simulation Context"})}),a.jsxs(kP,{children:[a.jsxs(xi,{children:[a.jsx(bo,{size:16}),$.context.date]}),a.jsxs(xi,{children:[a.jsx(Kr,{size:16}),$.context.port||"At Sea"]}),a.jsxs(xi,{children:[a.jsx(Rn,{size:16}),$.context.party.adults,"A ",$.context.party.children,"C"]}),a.jsxs(xi,{children:[a.jsx(nx,{size:16}),$.context.loyaltyTier||"Member"]}),$.context.weather&&a.jsxs(xi,{children:["☀️ ",$.context.weather]})]})]}),a.jsxs(Zo,{children:[a.jsx(es,{children:"Promoted Offers"}),a.jsx(rm,{children:a.jsx(im,{children:$.promotedOfferDetails.map(B=>a.jsxs(om,{children:[a.jsx(sm,{children:B.title}),a.jsxs(am,{children:["$",B.price," - ",B.desc]})]},B.id))})})]}),a.jsxs(Zo,{children:[a.jsx(es,{children:"Promoted Bundles"}),a.jsx(rm,{children:a.jsx(im,{children:$.promotedBundleDetails.map(B=>a.jsxs(om,{children:[a.jsx(sm,{children:B.title}),a.jsxs(am,{children:["$",B.bundlePrice," - ",B.desc]})]},B.id))})})]}),$.result.badges.length>0&&a.jsxs(Zo,{children:[a.jsx(es,{children:"Applied Badges"}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:$.result.badges.map(B=>a.jsx(le,{variant:"gold",size:"sm",children:B},B))})]})]})})]})]})},CP=p.div`
  max-width: 1400px;
  margin: 0 auto;
`,PP=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,EP=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,zP=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
`,TP=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,DP=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
`,AP=p.div`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,RP=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({theme:e})=>e.colors.ocean}10;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.ocean};
  margin-right: ${({theme:e})=>e.spacing.md};
`,_P=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,MP=p.div`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,lm=p.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,ts=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
`,ns=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,cm=p.div`
  height: 300px;
  background: ${({theme:e})=>e.colors.gray[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.gray[500]};
  font-style: italic;
`,um=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,dm=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.gray[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,pm=p.div``,fm=p.div`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,hm=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,LP=[{icon:a.jsx(ox,{size:24}),value:"13.4%",label:"Conversion Rate",trend:"+2.1%",trendUp:!0},{icon:a.jsx(si,{size:24}),value:"1.9",label:"Attach Rate",trend:"+0.3",trendUp:!0},{icon:a.jsx(zd,{size:24}),value:"$112",label:"Average Order Value",trend:"+$8",trendUp:!0},{icon:a.jsx(Yr,{size:24}),value:"$72k",label:"GMV (7 days)",trend:"+12%",trendUp:!0},{icon:a.jsx(Rn,{size:24}),value:"2,847",label:"Active Passengers",trend:"+156",trendUp:!0},{icon:a.jsx(Ra,{size:24}),value:"8",label:"Active Offers",trend:"+2",trendUp:!0}],IP=[{name:"Premium Wi-Fi",revenue:"$12,450",conversions:"234"},{name:"Couples Massage",revenue:"$8,920",conversions:"56"},{name:"Chef's Table",revenue:"$7,740",conversions:"60"},{name:"Sun Deck Cabana",revenue:"$6,230",conversions:"70"}],OP=[{name:"Luxury Escape",revenue:"$18,750",conversions:"62"},{name:"Family Adventure",revenue:"$14,320",conversions:"84"},{name:"Romantic Getaway",revenue:"$11,890",conversions:"36"}],FP=()=>a.jsxs(CP,{children:[a.jsxs(PP,{children:[a.jsx(EP,{children:"Analytics Dashboard"}),a.jsx(zP,{children:"Track performance metrics and optimize your upselling strategy"})]}),a.jsx(TP,{children:LP.map((e,t)=>a.jsxs(DP,{hover:!0,children:[a.jsxs(AP,{children:[a.jsx(RP,{children:e.icon}),a.jsx(le,{variant:e.trendUp?"success":"error",size:"sm",children:e.trend})]}),a.jsx(_P,{children:e.value}),a.jsx(MP,{children:e.label})]},t))}),a.jsxs(lm,{children:[a.jsxs(ts,{children:[a.jsx(ns,{children:"Revenue Trend (Last 30 Days)"}),a.jsx(cm,{children:"📈 Revenue chart would be displayed here"})]}),a.jsxs(ts,{children:[a.jsx(ns,{children:"Conversion by Weather"}),a.jsx(cm,{children:"🌤️ Weather conversion chart"})]})]}),a.jsxs(lm,{children:[a.jsxs(ts,{children:[a.jsx(ns,{children:"Top Performing Offers"}),a.jsx(um,{children:IP.map((e,t)=>a.jsxs(dm,{children:[a.jsxs(pm,{children:[a.jsx(fm,{children:e.name}),a.jsxs(hm,{children:[e.conversions," conversions"]})]}),a.jsx(le,{variant:"success",size:"sm",children:e.revenue})]},t))})]}),a.jsxs(ts,{children:[a.jsx(ns,{children:"Top Performing Bundles"}),a.jsx(um,{children:OP.map((e,t)=>a.jsxs(dm,{children:[a.jsxs(pm,{children:[a.jsx(fm,{children:e.name}),a.jsxs(hm,{children:[e.conversions," conversions"]})]}),a.jsx(le,{variant:"success",size:"sm",children:e.revenue})]},t))})]})]})]}),BP=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,NP=p.div`
  background: linear-gradient(135deg, ${m.colors.primary} 0%, ${m.colors.secondary} 100%);
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
    opacity: 0.2;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`,VP=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin: 0 0 ${m.spacing.sm} 0;
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,WP=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0 0 ${m.spacing.lg} 0;
`,UP=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${m.spacing.md};
  padding: 0 ${m.spacing.md};
  margin-top: ${m.spacing.xl};
`,mm=p(N)`
  padding: ${m.spacing.lg};
  text-align: center;
  background: ${m.colors.white};
  border-radius: ${m.borderRadius.lg};
  box-shadow: ${m.shadows.md};
`,gm=p.div`
  font-size: ${m.typography.fontSize["3xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  color: ${m.colors.primary};
  margin-bottom: ${m.spacing.xs};
`,ym=p.div`
  font-size: ${m.typography.fontSize.sm};
  color: ${m.colors.gray[600]};
  font-weight: ${m.typography.fontWeight.medium};
`,HP=p(N)`
  margin: ${m.spacing.lg} ${m.spacing.md} 0;
  padding: 0;
  border-radius: ${m.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${m.shadows.md};
`,GP=p.div`
  height: 120px;
  background: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
  }
`,qP=p.div`
  padding: ${m.spacing.lg};
`,KP=p.h3`
  font-size: ${m.typography.fontSize.lg};
  font-weight: ${m.typography.fontWeight.semibold};
  color: ${m.colors.navy};
  margin: 0 0 ${m.spacing.sm} 0;
`,YP=p.p`
  color: ${m.colors.gray[600]};
  margin: 0;
  font-size: ${m.typography.fontSize.sm};
`,QP=p.div`
  margin: ${m.spacing.lg} ${m.spacing.md} 0;
`,XP=p(N)`
  padding: ${m.spacing.lg};
  background: linear-gradient(135deg, ${m.colors.ocean} 0%, ${m.colors.secondary} 100%);
  color: ${m.colors.white};
  border-radius: ${m.borderRadius.lg};
  box-shadow: ${m.shadows.md};
`,JP=p.div`
  display: flex;
  align-items: center;
  gap: ${m.spacing.sm};
  margin-bottom: ${m.spacing.md};
`,ZP=p.div`
  font-size: 24px;
`,eE=p.h3`
  font-size: ${m.typography.fontSize.lg};
  font-weight: ${m.typography.fontWeight.semibold};
  margin: 0;
`,tE=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nE=p.div`
  font-size: ${m.typography.fontSize["3xl"]};
  font-weight: ${m.typography.fontWeight.bold};
`,rE=p.div`
  text-align: right;
`,iE=p.div`
  font-size: ${m.typography.fontSize.base};
  margin-bottom: ${m.spacing.xs};
`,oE=p.div`
  font-size: ${m.typography.fontSize.sm};
  opacity: 0.9;
  color: ${m.colors.sunshine};
`,sE=()=>a.jsxs(BP,{children:[a.jsxs(NP,{children:[a.jsx(VP,{children:"Welcome aboard!"}),a.jsx(WP,{children:"Royal Caribbean Odyssey"})]}),a.jsxs(UP,{children:[a.jsxs(mm,{children:[a.jsx(gm,{children:"5"}),a.jsx(ym,{children:"Days Left"})]}),a.jsxs(mm,{children:[a.jsx(gm,{children:"Barbados"}),a.jsx(ym,{children:"Next Port"})]})]}),a.jsxs(HP,{children:[a.jsx(GP,{}),a.jsxs(qP,{children:[a.jsx(KP,{children:"Next Destination"}),a.jsx(YP,{children:"Arriving tomorrow at 8:00 AM"})]})]}),a.jsx(QP,{children:a.jsxs(XP,{children:[a.jsxs(JP,{children:[a.jsx(ZP,{children:"🌤️"}),a.jsx(eE,{children:"Today's Weather - Nassau"})]}),a.jsxs(tE,{children:[a.jsx(nE,{children:"82°F"}),a.jsxs(rE,{children:[a.jsx(iE,{children:"Sunny & Clear"}),a.jsx(oE,{children:"Perfect for Beach Activities"})]})]})]})})]}),aE=p.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1E293B 0%, #334155 50%, #0EA5E9 100%);
  padding: ${({theme:e})=>e.spacing.lg};
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
    opacity: 0.1;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`,lE=p.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  overflow: hidden;
`,cE=p.div`
  height: 100%;
  background: ${({theme:e})=>e.colors.white};
  width: ${({progress:e})=>e}%;
  transition: width 0.3s ease;
  border-radius: 2px;
`,uE=p(N)`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.xl};
  margin: ${({theme:e})=>e.spacing.lg} 0;
  text-align: center;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
`,dE=p.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({theme:e})=>e.spacing.lg};
  font-size: 2rem;
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.3);
  
  &::after {
    content: '⚓';
    color: white;
    font-size: 2rem;
  }
`,pE=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,fE=p.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.gray[600]};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,hE=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.md};
  margin: ${({theme:e})=>e.spacing.lg} 0;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,mE=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
  cursor: pointer;
  border: 2px solid ${({selected:e,theme:t})=>e?t.colors.primary:t.colors.gray[200]};
  background: ${({selected:e,theme:t})=>e?`${t.colors.primary}10`:t.colors.white};
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-2px);
  }
`,gE=p.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  color: white;
  font-size: 1.5rem;
  
  &::after {
    content: '◆';
  }
`,yE=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,xE=p.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,vE=p.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: auto;
  padding-top: ${({theme:e})=>e.spacing.lg};
`,$E=p.div`
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  opacity: 0.9;
`,vi=[{id:"welcome",title:"Welcome to CruiseMate",description:"Your premium cruise companion designed to curate exceptional experiences tailored to your preferences.",icon:"logo"},{id:"interests",title:"Curate Your Perfect Experience",description:"Select your preferred activities to receive personalized recommendations and exclusive offers.",icon:"compass",options:[{id:"adventure",title:"Adventure & Sports",description:"Thrilling excursions and active experiences",icon:"mountain"},{id:"culture",title:"Culture & Heritage",description:"Immersive cultural tours and historical sites",icon:"landmark"},{id:"relaxation",title:"Wellness & Spa",description:"Rejuvenating treatments and serene experiences",icon:"spa"},{id:"family",title:"Family Experiences",description:"Memorable activities for all generations",icon:"family"},{id:"dining",title:"Culinary Excellence",description:"Fine dining and exclusive culinary experiences",icon:"dining"},{id:"entertainment",title:"Premium Entertainment",description:"Exclusive shows and VIP experiences",icon:"theater"}]}],xm=()=>{const e=wt(),{setSelectedActivityTypes:t}=Le(),[n,r]=j.useState(0),[i,o]=j.useState([]),s=vi[n],l=(n+1)/vi.length*100,c=h=>{o(y=>y.includes(h)?y.filter(w=>w!==h):[...y,h])},u=()=>{s.id==="interests"&&t(i),n<vi.length-1?r(n+1):e("/guest/onboard-upgrades")},d=()=>{n>0&&r(n-1)},f=s.options?i.length>0:!0;return a.jsxs(aE,{children:[a.jsxs($E,{children:["Step ",n+1," of ",vi.length]}),a.jsx(lE,{children:a.jsx(cE,{progress:l})}),a.jsxs(uE,{children:[a.jsx(dE,{children:s.icon==="logo"?a.jsx(Va,{size:"lg",hideText:!0}):s.icon}),a.jsx(pE,{children:s.title}),a.jsx(fE,{children:s.description}),s.options&&a.jsx(hE,{children:s.options.map(h=>a.jsxs(mE,{selected:i.includes(h.id),onClick:()=>c(h.id),children:[a.jsx(gE,{children:h.icon}),a.jsx(yE,{children:h.title}),a.jsx(xE,{children:h.description}),i.includes(h.id)&&a.jsx(qr,{size:20,style:{position:"absolute",top:"12px",right:"12px",color:"#0EA5E9"}})]},h.id))}),a.jsxs(vE,{children:[a.jsx("div",{style:{visibility:n===0?"hidden":"visible"},children:a.jsxs(F,{variant:"outline",onClick:d,disabled:n===0,children:[a.jsx(Ed,{size:16}),"Back"]})}),a.jsx(F,{onClick:u,disabled:!f,size:"lg",children:n===vi.length-1?a.jsxs(a.Fragment,{children:[a.jsx(ir,{size:16}),"See My Personalized Offers"]}):a.jsxs(a.Fragment,{children:["Continue",a.jsx(fo,{size:16})]})})]})]})]})},vm=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,$m=p.div`
  background: linear-gradient(135deg, ${m.colors.primary} 0%, ${m.colors.secondary} 100%);
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
    opacity: 0.2;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`,wm=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.sm};
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,Sm=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0;
`,wE=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`,SE=p(N)`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  padding: ${({theme:e})=>e.spacing.lg};
`,bE=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  padding-bottom: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,kE=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,jE=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,$i=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.gray[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,wi=p.div`
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary};
  min-width: 60px;
`,Si=p.div`
  flex: 1;
`,bi=p.div`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.navy};
`,ki=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,CE=()=>{const{currentPassenger:e,cartItems:t,selectedActivityTypes:n}=Le();if(!e)return a.jsx(vm,{children:a.jsxs($m,{children:[a.jsx(wm,{children:"Your Itinerary"}),a.jsx(Sm,{children:"Loading your cruise schedule..."})]})});const r=(i,o)=>{const s=[],l=t.filter(c=>c.type==="offer");return l.length>0&&o==="10:00 AM"&&s.push({time:"10:00 AM",title:`${l[0].id.replace("-"," ").replace(/\b\w/g,c=>c.toUpperCase())} Experience`,location:`${i} - Booked`,type:"booked"}),n.includes("relaxation")&&o==="2:00 PM"&&s.push({time:"2:00 PM",title:"Spa & Wellness Session",location:"Onboard Serenity Spa",type:"wellness"}),n.includes("dining")&&o==="7:00 PM"&&s.push({time:"7:00 PM",title:"Specialty Dining Experience",location:"Chef's Table Restaurant",type:"dining"}),s};return a.jsxs(vm,{children:[a.jsxs($m,{children:[a.jsx(wm,{children:"Your Personalized Itinerary"}),a.jsx(Sm,{children:"Customized based on your preferences and bookings"})]}),a.jsx(wE,{children:e.itinerary.map((i,o)=>a.jsxs(SE,{children:[a.jsxs(bE,{children:[a.jsx(bo,{size:20}),a.jsxs(kE,{children:["Day ",o+1," - ",new Date(i.date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})]})]}),a.jsxs(jE,{children:[a.jsxs($i,{children:[a.jsx(wi,{children:"8:00 AM"}),a.jsx(Kr,{size:16}),a.jsxs(Si,{children:[a.jsx(bi,{children:i.port==="At Sea"?"Sea Day Activities":`Arrive in ${i.port}`}),a.jsx(ki,{children:i.port==="At Sea"?"Enjoy onboard experiences":`${i.port}, ${i.country}`})]})]}),i.port!=="At Sea"&&r(i.port,"10:00 AM").map((s,l)=>a.jsxs($i,{children:[a.jsx(wi,{children:s.time}),a.jsx(_r,{size:16}),a.jsxs(Si,{children:[a.jsx(bi,{children:s.title}),a.jsx(ki,{children:s.location})]})]},l)),r(i.port,"2:00 PM").map((s,l)=>a.jsxs($i,{children:[a.jsx(wi,{children:s.time}),a.jsx(_r,{size:16}),a.jsxs(Si,{children:[a.jsx(bi,{children:s.title}),a.jsx(ki,{children:s.location})]})]},`afternoon-${l}`)),r(i.port,"7:00 PM").map((s,l)=>a.jsxs($i,{children:[a.jsx(wi,{children:s.time}),a.jsx(_r,{size:16}),a.jsxs(Si,{children:[a.jsx(bi,{children:s.title}),a.jsx(ki,{children:s.location})]})]},`evening-${l}`)),i.port!=="At Sea"&&a.jsxs($i,{children:[a.jsx(wi,{children:"6:00 PM"}),a.jsx(Kr,{size:16}),a.jsxs(Si,{children:[a.jsxs(bi,{children:["Depart ",i.port]}),a.jsx(ki,{children:"All aboard - Next destination"})]})]})]})]},i.date))})]})},PE=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,EE=p.div`
  background: linear-gradient(135deg, ${m.colors.primary} 0%, ${m.colors.secondary} 100%);
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
    opacity: 0.2;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`,zE=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.sm};
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,TE=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0;
`,DE=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 800px;
  margin: 0 auto;
`,Ol=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  text-align: center;
`,Fl=p.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary} 0%, ${({theme:e})=>e.colors.secondary} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.white};
`,Bl=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,Nl=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,AE=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.sunset} 0%, ${({theme:e})=>e.colors.accent} 100%);
  color: ${({theme:e})=>e.colors.white};
  text-align: center;
`,RE=()=>a.jsxs(PE,{children:[a.jsxs(EE,{children:[a.jsx(zE,{children:"Premium Concierge Service"}),a.jsx(TE,{children:"Dedicated assistance for your luxury cruise experience"})]}),a.jsxs(DE,{children:[a.jsxs(AE,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"12px"},children:[a.jsx(_r,{size:20}),a.jsx("strong",{children:"Available 24/7"})]}),a.jsx("p",{style:{margin:0,fontSize:"14px"},children:"Our concierge team is always ready to assist you"})]}),a.jsxs(Ol,{children:[a.jsx(Fl,{children:a.jsx(ix,{size:24})}),a.jsx(Bl,{children:"Live Chat"}),a.jsx(Nl,{children:"Get instant help with dining reservations, activity bookings, and general questions"}),a.jsx(F,{size:"lg",fullWidth:!0,children:"Start Chat"})]}),a.jsxs(Ol,{children:[a.jsx(Fl,{children:a.jsx(wb,{size:24})}),a.jsx(Bl,{children:"Call Concierge"}),a.jsx(Nl,{children:"Speak directly with our concierge team for personalized assistance"}),a.jsx(F,{size:"lg",fullWidth:!0,variant:"outline",children:"Call Now - Ext. 1234"})]}),a.jsxs(Ol,{children:[a.jsx(Fl,{children:a.jsx(xb,{size:24})}),a.jsx(Bl,{children:"Special Requests"}),a.jsx(Nl,{children:"Submit special requests for celebrations, dietary needs, or accessibility requirements"}),a.jsx(F,{size:"lg",fullWidth:!0,variant:"outline",children:"Submit Request"})]})]})]}),bm=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,_E=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 800px;
  margin: 0 auto;
`,ME=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary} 0%, ${({theme:e})=>e.colors.secondary} 100%);
  color: ${({theme:e})=>e.colors.white};
`,LE=p.div`
  width: 80px;
  height: 80px;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.primary};
`,IE=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,OE=p.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,FE=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.sunset} 0%, ${({theme:e})=>e.colors.accent} 100%);
  color: ${({theme:e})=>e.colors.white};
`,BE=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,NE=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  text-align: center;
`,VE=p(N)`
  padding: 0;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Vl=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: ${({theme:e})=>e.colors.gray[50]};
  }
`,Wl=p.div`
  width: 40px;
  height: 40px;
  background: ${({theme:e})=>e.colors.primary}15;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.primary};
`,Ul=p.div`
  flex: 1;
`,Hl=p.div`
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Gl=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,WE=()=>{const{currentPassenger:e,loyaltyPoints:t}=Le();return e?a.jsxs(bm,{children:[a.jsxs(ME,{children:[a.jsx(LE,{children:a.jsx(ax,{size:40})}),a.jsx(IE,{children:e.name}),a.jsx(OE,{children:a.jsx(le,{variant:"gold",size:"md",children:e.loyaltyTier||"Gold Member"})})]}),a.jsxs(_E,{children:[a.jsxs(FE,{children:[a.jsx(BE,{children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(ir,{size:20}),a.jsx("span",{children:"CruiseMate Rewards"})]})}),a.jsxs(NE,{children:[t.toLocaleString()," Points"]}),a.jsx("div",{style:{textAlign:"center",marginTop:"12px",fontSize:"14px"},children:"Earn points with every purchase and activity booking"})]}),a.jsxs(VE,{children:[a.jsxs(Vl,{children:[a.jsx(Wl,{children:a.jsx(du,{size:20})}),a.jsxs(Ul,{children:[a.jsx(Hl,{children:"Payment Methods"}),a.jsx(Gl,{children:"Manage your cards and payment preferences"})]})]}),a.jsxs(Vl,{children:[a.jsx(Wl,{children:a.jsx(en,{size:20})}),a.jsxs(Ul,{children:[a.jsx(Hl,{children:"Rewards & Offers"}),a.jsx(Gl,{children:"View available rewards and special offers"})]})]}),a.jsxs(Vl,{children:[a.jsx(Wl,{children:a.jsx(bb,{size:20})}),a.jsxs(Ul,{children:[a.jsx(Hl,{children:"Preferences"}),a.jsx(Gl,{children:"Customize your cruise experience"})]})]})]}),a.jsx(F,{fullWidth:!0,size:"lg",variant:"outline",children:"Sign Out"})]})]}):a.jsx(bm,{children:a.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:a.jsx("h2",{children:"Please sign in to view your profile"})})})},UE=[{id:"adventure",name:"Adventure & Thrills",emoji:"🏄‍♂️",description:"Exciting activities that get your heart pumping",color:"#FF6B6B",activities:["snorkeling","zip-lining","rock-climbing","jet-skiing","parasailing"]},{id:"relaxation",name:"Relaxation & Wellness",emoji:"🧘‍♀️",description:"Peaceful activities to unwind and recharge",color:"#4ECDC4",activities:["spa","yoga","meditation","massage","beach-lounging"]},{id:"family",name:"Family Fun",emoji:"👨‍👩‍👧‍👦",description:"Activities perfect for the whole family",color:"#FFE66D",activities:["mini-golf","family-games","kids-club","family-dining","pool-activities"]},{id:"culture",name:"Culture & History",emoji:"🏛️",description:"Explore local culture and historical sites",color:"#45B7D1",activities:["museum-tours","historical-sites","local-markets","cultural-shows","cooking-classes"]},{id:"dining",name:"Food & Drinks",emoji:"🍽️",description:"Culinary experiences and specialty dining",color:"#F38BA8",activities:["specialty-dining","wine-tasting","cooking-classes","food-tours","cocktail-making"]},{id:"nature",name:"Nature & Wildlife",emoji:"🌿",description:"Connect with nature and discover wildlife",color:"#06D6A0",activities:["wildlife-tours","botanical-gardens","hiking","bird-watching","eco-tours"]},{id:"entertainment",name:"Shows & Entertainment",emoji:"🎭",description:"Live performances and entertainment",color:"#9B59B6",activities:["theater-shows","live-music","comedy-shows","dance-performances","karaoke"]},{id:"shopping",name:"Shopping & Souvenirs",emoji:"🛍️",description:"Find unique treasures and local crafts",color:"#E67E22",activities:["local-markets","duty-free","artisan-crafts","jewelry-shopping","souvenir-hunting"]}],HE=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,GE=p.div`
  background: linear-gradient(
    135deg,
    ${m.colors.primary} 0%,
    ${m.colors.secondary} 100%
  );
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,qE=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.sm};
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,KE=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${m.spacing.lg};
  line-height: 1.6;
`,YE=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${m.spacing.sm};
  margin-bottom: ${m.spacing.lg};
`,ql=p.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({active:e})=>e?m.colors.white:"rgba(255,255,255,0.3)"};
  transition: all 0.3s ease;
`,QE=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`,XE=p.h2`
  font-size: ${m.typography.fontSize.xl};
  font-weight: ${m.typography.fontWeight.bold};
  color: ${m.colors.navy};
  text-align: center;
  margin-bottom: ${m.spacing.xl};
`,JE=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${m.spacing.lg};
  margin-bottom: ${m.spacing.xl};
  
  @media (min-width: ${m.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`,ZE=p(N)`
  padding: 0;
  overflow: hidden;
  cursor: ${({animating:e})=>e?"wait":"pointer"};
  pointer-events: ${({animating:e})=>e?"none":"auto"};
  position: relative;
  border: 2px solid ${({selected:e,color:t})=>e?t||m.colors.primary:m.colors.gray[200]};
  transition: all 0.3s ease;
  transform: ${({animating:e,justSelected:t})=>e?"scale(0.95)":t?"scale(1.05)":"scale(1)"};
  
  &:hover {
    transform: ${({animating:e,justSelected:t})=>e?"scale(0.95)":t?"scale(1.05)":"translateY(-4px)"};
    box-shadow: ${m.shadows.xl};
  }

  ${({justSelected:e})=>e&&`
    animation: successPulse 0.6s ease-out;
    
    @keyframes successPulse {
      0% { 
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      }
      50% { 
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
      }
      100% { 
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
      }
    }
  `}
`,ez=p.div`
  height: 160px;
  background: url(${({imageUrl:e})=>e}) center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
`,tz=p.div`
  padding: ${m.spacing.lg};
`,nz=p.div`
  display: flex;
  align-items: center;
  gap: ${m.spacing.md};
  margin-bottom: ${m.spacing.md};
`,rz=p.div`
  font-size: 2rem;
  line-height: 1;
`,iz=p.div`
  flex: 1;
`,oz=p.h3`
  font-size: ${m.typography.fontSize.lg};
  font-weight: ${m.typography.fontWeight.semibold};
  color: ${m.colors.navy};
  margin-bottom: ${m.spacing.xs};
`,sz=p.p`
  font-size: ${m.typography.fontSize.sm};
  color: ${m.colors.gray[600]};
  line-height: 1.4;
`,az=p.div`
  position: absolute;
  top: ${m.spacing.md};
  right: ${m.spacing.md};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({selected:e,color:t,animating:n})=>n?m.colors.gray[400]:e?t||m.colors.primary:"rgba(255,255,255,0.9)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({selected:e,animating:t})=>t||e?"white":m.colors.gray[600]};
  transition: all 0.3s ease;
  z-index: 2;
  box-shadow: ${m.shadows.md};
  
  ${({animating:e})=>e&&`
    animation: spin 0.6s linear;
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `}

  ${({justSelected:e})=>e&&`
    animation: checkmark 0.6s ease-out;
    
    @keyframes checkmark {
      0% { 
        transform: scale(0.8);
      }
      50% { 
        transform: scale(1.2);
      }
      100% { 
        transform: scale(1);
      }
    }
  `}
`,lz=p.div`
  position: sticky;
  bottom: ${m.spacing.lg};
  margin: 0 ${m.spacing.md};
  background: ${m.colors.white};
  padding: ${m.spacing.lg};
  border-radius: ${m.borderRadius.lg};
  box-shadow: ${m.shadows.xl};
  border: 2px solid ${m.colors.primary};
  text-align: center;
`,km=p.div`
  font-size: ${m.typography.fontSize.sm};
  color: ${m.colors.gray[600]};
  margin-bottom: ${m.spacing.md};
  font-weight: ${m.typography.fontWeight.medium};
`,cz=p.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) ${({show:e})=>e?"translateY(0)":"translateY(-100px)"};
  background: ${m.colors.success};
  color: white;
  padding: ${m.spacing.sm} ${m.spacing.lg};
  border-radius: ${m.borderRadius.full};
  font-size: ${m.typography.fontSize.sm};
  font-weight: ${m.typography.fontWeight.semibold};
  z-index: 1000;
  opacity: ${({show:e})=>e?1:0};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${m.spacing.xs};
  box-shadow: ${m.shadows.lg};
`,uz={adventure:"https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",relaxation:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",family:"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",culture:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",dining:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",nature:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",entertainment:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",shopping:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},dz=()=>{const e=wt(),{setSelectedActivityTypes:t}=Le(),[n,r]=j.useState([]),[i]=j.useState(UE),[o,s]=j.useState(null),[l,c]=j.useState(null),[u,d]=j.useState(!1),[f,h]=j.useState("");j.useEffect(()=>{W.track(U.PAGE_VIEWED,{page:"activity_selection"})},[]);const y=S=>{s(S),setTimeout(()=>{r(b=>{var x,$;const v=b.includes(S),g=v?b.filter(k=>k!==S):[...b,S];if(v){const k=(($=i.find(C=>C.id===S))==null?void 0:$.name)||"Activity";h(`${k} removed`),d(!0),setTimeout(()=>d(!1),1500)}else{c(S);const k=((x=i.find(C=>C.id===S))==null?void 0:x.name)||"Activity";h(`✨ ${k} added!`),d(!0),setTimeout(()=>c(null),1e3),setTimeout(()=>d(!1),2e3)}return W.track("activity_type_selected",{activityId:S,selected:!v,totalSelected:g.length}),g}),s(null)},150)},w=()=>{t(n),W.track("activity_selection_completed",{selectedTypes:n,count:n.length,skipped:n.length===0}),e("/guest/onboard-upgrades")};return a.jsxs(HE,{children:[a.jsx(cz,{show:u,children:f}),a.jsxs(GE,{children:[a.jsx(qE,{children:"What do you love to do? 🌟"}),a.jsx(KE,{children:"Help us create the perfect cruise experience by selecting the activities you enjoy most!"}),a.jsxs(YE,{children:[a.jsx(ql,{active:!0}),a.jsx(ql,{}),a.jsx(ql,{})]})]}),a.jsxs(QE,{children:[a.jsx(XE,{children:"Choose Your Perfect Activities"}),a.jsx(JE,{children:i.map(S=>{const b=n.includes(S.id),v=o===S.id,g=l===S.id,x=uz[S.id]||"https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";return a.jsxs(ZE,{selected:b,color:S.color,animating:v,justSelected:g,onClick:()=>!v&&y(S.id),"data-testid":`activity-${S.id}`,children:[a.jsx(ez,{imageUrl:x}),a.jsx(tz,{children:a.jsxs(nz,{children:[a.jsx(rz,{children:S.emoji}),a.jsxs(iz,{children:[a.jsx(oz,{children:S.name}),a.jsx(sz,{children:S.description})]})]})}),a.jsx(az,{selected:b,color:S.color,animating:v,justSelected:g,children:v?a.jsx("div",{style:{width:"12px",height:"12px",border:"2px solid transparent",borderTop:"2px solid white",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}):b?a.jsx(qr,{size:18}):a.jsx(gb,{size:18})})]},S.id)})})]}),a.jsx(lz,{children:n.length>0?a.jsxs(a.Fragment,{children:[a.jsxs(km,{children:[n.length," ",n.length===1?"activity type":"activity types"," selected"]}),a.jsxs(F,{size:"lg",fullWidth:!0,onClick:w,"data-testid":"continue-button",children:["Continue to Upgrades",a.jsx(Af,{size:20})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(km,{children:"Select activities to get personalized recommendations, or skip to explore everything"}),a.jsxs(F,{size:"lg",fullWidth:!0,variant:"outline",onClick:w,"data-testid":"skip-button",children:["Skip for Now - Continue to Upgrades",a.jsx(Af,{size:20})]})]})})]})},pz=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,fz=p.div`
  background: linear-gradient(
    135deg,
    ${m.colors.primary} 0%,
    ${m.colors.secondary} 100%
  );
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,hz=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.sm};

  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,mz=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${m.spacing.lg};
`,gz=p.div`
  display: inline-flex;
  align-items: center;
  gap: ${m.spacing.xs};
  background: ${m.colors.sunset};
  color: ${m.colors.white};
  padding: ${m.spacing.sm} ${m.spacing.md};
  border-radius: ${m.borderRadius.full};
  font-weight: ${m.typography.fontWeight.semibold};
  font-size: ${m.typography.fontSize.sm};
  animation: pulse 2s infinite;
  margin-bottom: ${m.spacing.lg};

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`,yz=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`,xz=p.h2`
  font-size: ${m.typography.fontSize.xl};
  font-weight: ${m.typography.fontWeight.bold};
  color: ${m.colors.navy};
  text-align: center;
  margin-bottom: ${m.spacing.xl};
`,vz=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${m.spacing.lg};
  margin-bottom: ${m.spacing.xl};

  @media (min-width: ${m.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`,$z=p(N)`
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid
    ${({visited:e,featured:t,theme:n})=>e?n.colors.success:t?n.colors.sunset:n.colors.gray[200]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${m.shadows.xl};
  }
`,wz=p.div`
  height: 160px;
  background: url(${({imageUrl:e})=>e}) center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
`,Sz=p.div`
  padding: ${m.spacing.lg};
`,bz=p.div`
  background: ${m.colors.sunset};
  color: ${m.colors.white};
  padding: ${m.spacing.sm} ${m.spacing.md};
  font-size: ${m.typography.fontSize.xs};
  font-weight: ${m.typography.fontWeight.semibold};
  text-align: center;
  margin-bottom: ${m.spacing.md};
  border-radius: ${m.borderRadius.sm};
`,kz=p.div`
  margin-bottom: ${m.spacing.md};
`,jz=p.h3`
  font-size: ${m.typography.fontSize.lg};
  font-weight: ${m.typography.fontWeight.semibold};
  color: ${m.colors.navy};
  margin-bottom: ${m.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${m.spacing.sm};
`,Cz=p.div`
  font-size: ${m.typography.fontSize.sm};
  color: ${m.colors.gray[600]};
  display: flex;
  align-items: center;
  gap: ${m.spacing.xs};
  margin-bottom: ${m.spacing.sm};
`,Pz=p.div`
  display: flex;
  align-items: center;
  gap: ${m.spacing.sm};
  margin-bottom: ${m.spacing.md};
  padding: ${m.spacing.sm};
  background: ${m.colors.gray[50]};
  border-radius: ${m.borderRadius.md};
`,jm=p.div`
  display: flex;
  align-items: center;
  gap: ${m.spacing.xs};
  font-size: ${m.typography.fontSize.sm};
  color: ${m.colors.gray[700]};
`,Ez=p.div`
  font-size: ${m.typography.fontSize.sm};
  color: ${m.colors.primary};
  font-weight: ${m.typography.fontWeight.medium};
  margin-bottom: ${m.spacing.md};
  display: flex;
  align-items: center;
  gap: ${m.spacing.xs};
`,Cm=p(le)`
  position: absolute;
  top: ${m.spacing.md};
  right: ${m.spacing.md};
  z-index: 2;
`,zz=p.div`
  position: absolute;
  bottom: ${({theme:e})=>e.spacing.lg};
  right: ${({theme:e})=>e.spacing.lg};
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`,Tz=p(N)`
  position: sticky;
  bottom: ${m.spacing.lg};
  margin: 0 ${m.spacing.md};
  padding: ${m.spacing.lg};
  background: ${m.colors.white};
  box-shadow: ${m.shadows.xl};
  border: 2px solid ${m.colors.primary};
  text-align: center;
`,Dz=p.div`
  margin-bottom: ${m.spacing.md};
`,Az=p.h3`
  font-size: ${m.typography.fontSize.lg};
  font-weight: ${m.typography.fontWeight.semibold};
  color: ${m.colors.navy};
  margin-bottom: ${m.spacing.xs};
`,Rz=p.p`
  color: ${m.colors.gray[600]};
  font-size: ${m.typography.fontSize.sm};
`,_z=e=>{switch(e.toLowerCase()){case"sunny":return"☀️";case"partly cloudy":return"⛅";case"cloudy":return"☁️";case"showers":return"🌦️";case"rain":return"🌧️";default:return"☀️"}},Mz=()=>{const e=wt(),{currentPassenger:t,selectedActivityTypes:n,setSelectedDestination:r}=Le(),[i,o]=j.useState([]),[s,l]=j.useState([]),[c,u]=j.useState([]);j.useEffect(()=>{(async()=>{try{const[S,b]=await Promise.all([Y.getWeather(),Y.getOffers()]);o(S),l(b)}catch(S){console.error("Failed to load trip map data:",S)}})(),W.track(U.PAGE_VIEWED,{page:"trip_map"})},[]);const d=w=>{r(w),u(S=>[...new Set([...S,w.port])]),W.track("destination_selected",{port:w.port,country:w.country,date:w.date}),e("/guest/destination-activities")},f=(w,S)=>i.find(b=>b.date===w&&b.port===S),h=w=>Math.floor(Math.random()*8)+3;if(!t)return a.jsx("div",{children:"Loading your trip..."});const y=w=>({Nassau:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",Cozumel:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","Costa Maya":"https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","Key West":"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",Miami:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",Barbados:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","St. Thomas":"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","St. Maarten":"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",Jamaica:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","Grand Cayman":"https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"})[w]||"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";return a.jsxs(pz,{children:[a.jsxs(fz,{children:[a.jsx(gz,{children:"🔥 Book Now - Limited Shore Excursion Spots Available!"}),a.jsx(hz,{children:"Your Exclusive Shore Destinations"}),a.jsx(mz,{children:"Discover curated excursions at each port - book early for premium experiences!"})]}),a.jsxs(yz,{children:[a.jsx(xz,{children:"Select Your Perfect Shore Excursions"}),a.jsx(vz,{children:t.itinerary.map((w,S)=>{const b=f(w.date,w.port),v=h(w.port),g=c.includes(w.port),x=S===0||w.port==="Nassau";return w.port==="At Sea"?null:a.jsxs($z,{visited:g,featured:x,onClick:()=>d(w),"data-testid":`destination-${w.port}`,children:[g&&a.jsx(Cm,{variant:"success",size:"sm",children:"✓ Booked"}),x&&!g&&a.jsx(Cm,{variant:"gold",size:"sm",children:"⭐ Featured"}),a.jsx(wz,{imageUrl:y(w.port)}),a.jsxs(Sz,{children:[a.jsx(bz,{children:"Early Bird Special - Save 20%!"}),a.jsxs(kz,{children:[a.jsxs(jz,{children:[a.jsx(Kr,{size:20}),w.port]}),a.jsxs(Cz,{children:[a.jsx(bo,{size:16}),new Date(w.date).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})]})]}),b&&a.jsxs(Pz,{children:[a.jsxs(jm,{children:[_z(b.condition),b.condition]}),a.jsxs(jm,{children:[a.jsx(jb,{size:16}),b.tempC,"°C"]})]}),a.jsxs(Ez,{children:["🎯 ",v," exclusive excursions available"]}),a.jsxs(F,{size:"sm",fullWidth:!0,children:["Explore ",w.port," Excursions"]})]})]},`${w.port}-${w.date}`)})}),a.jsx(zz,{children:a.jsx(Va,{size:"md",hideText:!0})})]}),a.jsxs(Tz,{children:[a.jsxs(Dz,{children:[a.jsx(Az,{children:"Ready to Complete Your Cruise Package?"}),a.jsx(Rz,{children:"You've selected amazing upgrades! Complete your booking to secure these exclusive deals."})]}),a.jsxs(F,{size:"lg",fullWidth:!0,onClick:()=>e("/guest/cart"),"data-testid":"view-cart-button",children:[a.jsx(si,{size:20}),"Complete My Booking"]})]})]})},Lz=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,Iz=p.div`
  background: linear-gradient(
    135deg,
    ${m.colors.primary} 0%,
    ${m.colors.secondary} 100%
  );
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,Oz=p(F)`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${({theme:e})=>e.colors.white};
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,Fz=p.div`
  display: inline-flex;
  align-items: center;
  gap: ${m.spacing.xs};
  background: ${m.colors.sunset};
  color: ${m.colors.white};
  padding: ${m.spacing.sm} ${m.spacing.md};
  border-radius: ${m.borderRadius.full};
  font-weight: ${m.typography.fontWeight.semibold};
  font-size: ${m.typography.fontSize.sm};
  animation: pulse 2s infinite;
  margin-bottom: ${m.spacing.lg};

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`,Bz=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.sm};

  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,Nz=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${m.spacing.lg};
`,Vz=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;
`,Kl=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[700]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Wz=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Uz=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`,Hz=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${m.spacing.lg};
  margin-bottom: ${m.spacing.xl};
  
  @media (min-width: ${m.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`,Gz=p(N)`
  padding: 0;
  overflow: hidden;
  border: 2px solid
    ${({featured:e,theme:t})=>e?t.colors.sunset:t.colors.gray[200]};
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${m.shadows.xl};
  }
`,qz=p.div`
  height: 160px;
  background: url(${({imageUrl:e})=>e}) center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
`,Kz=p.div`
  padding: ${m.spacing.lg};
`,Yz=p.h3`
  font-size: ${m.typography.fontSize.lg};
  font-weight: ${m.typography.fontWeight.semibold};
  color: ${m.colors.navy};
  margin-bottom: ${m.spacing.sm};
`,Qz=p.p`
  color: ${m.colors.gray[600]};
  font-size: ${m.typography.fontSize.sm};
  line-height: 1.5;
  margin-bottom: ${m.spacing.md};
`,Xz=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Yl=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,Jz=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Zz=p.div`
  font-size: ${m.typography.fontSize.xl};
  font-weight: ${m.typography.fontWeight.bold};
  color: ${m.colors.primary};
`,eT=p(le)`
  position: absolute;
  top: ${m.spacing.md};
  right: ${m.spacing.md};
  z-index: 2;
`,tT=p(N)`
  position: sticky;
  bottom: ${m.spacing.lg};
  margin: 0 ${m.spacing.md};
  padding: ${m.spacing.lg};
  background: ${m.colors.white};
  box-shadow: ${m.shadows.xl};
  border: 2px solid ${m.colors.primary};
`,nT=p(F)`
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${({isAdding:e})=>e&&`
    background: ${m.colors.gray[400]} !important;
    cursor: wait;
    transform: scale(0.95);
  `}
  
  ${({justAdded:e})=>e&&`
    background: ${m.colors.success} !important;
    transform: scale(1.05);
    animation: successBounce 0.6s ease-out;
    
    @keyframes successBounce {
      0% { 
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      }
      50% { 
        transform: scale(1.1);
        box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
      }
      100% { 
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
      }
    }
  `}
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,rT=p.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) ${({show:e})=>e?"translateY(0)":"translateY(-100px)"};
  background: ${m.colors.success};
  color: white;
  padding: ${m.spacing.sm} ${m.spacing.lg};
  border-radius: ${m.borderRadius.full};
  font-size: ${m.typography.fontSize.sm};
  font-weight: ${m.typography.fontWeight.semibold};
  z-index: 1000;
  opacity: ${({show:e})=>e?1:0};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${m.spacing.xs};
  box-shadow: ${m.shadows.lg};
`,iT=()=>{const e=wt(),{selectedDestination:t,selectedActivityTypes:n,addToCart:r}=Le(),[i,o]=j.useState([]),[s,l]=j.useState(null),[c,u]=j.useState(!0),[d,f]=j.useState(null),[h,y]=j.useState(null),[w,S]=j.useState(!1),[b,v]=j.useState(""),g={off_cabana:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",off_spa:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",off_wifi:"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",off_dine:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",off_kidsclub:"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",off_excursion_snorkel:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",off_shopping:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",off_fitness:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","cultural-tour-mayan":"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","beach-horseback":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","catamaran-sail":"https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","zip-line-adventure":"https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","cenote-swimming":"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","dolphin-encounter":"https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","fishing-charter":"https://images.unsplash.com/photo-1445723542262-5c9b906b7b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","jungle-atv":"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","sunset-cruise":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","scuba-diving":"https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","local-market-tour":"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","beach-club-vip":"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","rum-tasting":"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","wildlife-sanctuary":"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","glass-bottom-boat":"https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","cooking-class":"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","helicopter-tour":"https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","kayak-mangroves":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","art-gallery-walk":"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","submarine-tour":"https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","golf-course":"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","spa-retreat":"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"};j.useEffect(()=>{(async()=>{try{const[C,P]=await Promise.all([Y.getOffers(),Y.getWeather()]);if(o(C),t){const E=P.find(A=>A.date===t.date&&A.port===t.port);l(E||null)}}catch(C){console.error("Failed to load destination activities:",C)}finally{u(!1)}})(),W.track(U.PAGE_VIEWED,{page:"destination_activities",destination:t==null?void 0:t.port})},[t]);const x=k=>{f(k.id),setTimeout(()=>{r({id:k.id,type:"offer",quantity:1,price:k.price}),W.track(U.OFFER_ADDED_TO_CART,{offerId:k.id,offerTitle:k.title,price:k.price,destination:t==null?void 0:t.port}),f(null),y(k.id),v(`✨ ${k.title} added to your trip!`),S(!0),setTimeout(()=>y(null),2e3),setTimeout(()=>S(!1),3e3)},300)},$=k=>(n==null?void 0:n.some(C=>k.tags.some(P=>P.includes(C))))||!1;return t?c?a.jsx("div",{children:"Loading activities..."}):a.jsxs(Lz,{children:[a.jsx(rT,{show:w,children:b}),a.jsxs(Iz,{children:[a.jsxs(Oz,{variant:"ghost",onClick:()=>e("/guest/trip-map"),"data-testid":"back-button",children:[a.jsx(Ed,{size:20}),"Back to Map"]}),a.jsx(Fz,{children:"🔥 Limited Spots Available - Book Now for Best Prices!"}),a.jsxs(Bz,{children:[a.jsx(Kr,{size:32}),t.port,", ",t.country]}),a.jsx(Nz,{children:"Exclusive shore excursions curated for your perfect day"}),a.jsxs(Vz,{children:[a.jsxs(Kl,{children:["📅 ",new Date(t.date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})]}),s&&a.jsxs(a.Fragment,{children:[a.jsxs(Kl,{children:["🌤️ ",s.condition," ",s.tempC,"°C"]}),a.jsxs(Kl,{children:["💨 Wind ",s.windKph," km/h"]})]})]})]}),a.jsxs(Uz,{children:[a.jsx(Wz,{children:"🎯 Exclusive Shore Excursions"}),a.jsx(Hz,{children:i.map(k=>{const C=$(k),P=g[k.id]||"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",E=d===k.id,A=h===k.id;return a.jsxs(Gz,{featured:C,children:[C&&a.jsx(eT,{variant:"gold",size:"sm",children:"⭐ Recommended"}),a.jsx(qz,{imageUrl:P}),a.jsxs(Kz,{children:[a.jsx(Yz,{children:k.title}),a.jsx(Qz,{children:k.desc}),a.jsxs(Xz,{children:[a.jsxs(Yl,{children:[a.jsx(_r,{size:16}),"2-4 hours"]}),a.jsxs(Yl,{children:[a.jsx(Rn,{size:16}),"All ages"]}),a.jsxs(Yl,{children:[a.jsx(ir,{size:16}),"4.8 rating"]})]}),a.jsxs(Jz,{children:[a.jsxs(Zz,{children:["$",k.price]}),a.jsx(nT,{size:"sm",isAdding:E,justAdded:A,onClick:()=>!E&&x(k),"data-testid":`add-activity-${k.id}`,disabled:E,children:E?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{width:"12px",height:"12px",border:"2px solid transparent",borderTop:"2px solid white",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),"Adding..."]}):A?a.jsxs(a.Fragment,{children:[a.jsx(qr,{size:16}),"Added!"]}):a.jsxs(a.Fragment,{children:[a.jsx(ot,{size:16}),"Add to Trip"]})})]})]})]},k.id)})})]}),a.jsxs(tT,{children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:"16px"},children:[a.jsx("h3",{style:{margin:"0 0 8px 0",color:"#0F172A",fontSize:"18px",fontWeight:"600"},children:"Ready to Book Your Adventures?"}),a.jsx("p",{style:{margin:0,color:"#64748B",fontSize:"14px"},children:"Secure your spots now - popular excursions fill up fast!"})]}),a.jsx(F,{fullWidth:!0,size:"lg",onClick:()=>e("/guest/cart"),children:"Complete My Booking"})]})]}):(e("/guest/trip-map"),null)},oT=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,sT=p.div`
  background: linear-gradient(
    135deg,
    ${m.colors.primary} 0%,
    ${m.colors.secondary} 100%
  );
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,aT=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }
`,lT=p.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  opacity: 0.9;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,cT=p.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background: ${({theme:e})=>e.colors.sunset};
  color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`,uT=p.div`
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`,dT=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,pT=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`,fT=p(N)`
  padding: 0;
  overflow: hidden;
  border: 2px solid
    ${({featured:e,theme:t})=>e?t.colors.sunset:t.colors.gray[200]};
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({theme:e})=>e.shadows.xl};
  }
`,hT=p.div`
  height: 160px;
  background: url(${({imageUrl:e})=>e}) center/cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
`,mT=p.div`
  padding: ${({theme:e})=>e.spacing.lg};
`,gT=p.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,yT=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,xT=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1.5;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,vT=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,$T=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary};
`,wT=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.gray[500]};
  text-decoration: line-through;
`,ST=p.div`
  background: ${({theme:e})=>e.colors.success};
  color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,bT=p.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${m.spacing.lg} 0;
`,kT=p.li`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[700]};
`,jT=p(le)`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  right: ${({theme:e})=>e.spacing.md};
  z-index: 2;
`,CT=p(N)`
  position: sticky;
  bottom: ${({theme:e})=>e.spacing.lg};
  margin: 0 ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg};
  background: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  border: 2px solid ${({theme:e})=>e.colors.primary};
`,PT=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,ET=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary};
`,zT=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.success};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,TT=()=>{const e=wt(),{selectedActivityTypes:t,addToCart:n}=Le(),[r,i]=j.useState([]),[o,s]=j.useState([]);j.useEffect(()=>{s((()=>{const y=[{id:"balcony-upgrade",title:"Ocean View Balcony Suite",description:"Upgrade to a spacious balcony suite with panoramic ocean views, priority boarding, and dedicated concierge service.",price:299,originalPrice:399,category:"accommodation",imageUrl:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",features:["Private ocean view balcony","Priority boarding & disembarkation","24/7 room service included","Premium bath amenities"],featured:!0},{id:"specialty-dining",title:"Culinary Excellence Package",description:"Unlimited access to all specialty restaurants featuring world-class cuisine from renowned chefs.",price:199,originalPrice:299,category:"dining",imageUrl:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",features:["All specialty restaurants included","Chef's table experiences","Wine pairing dinners","Priority reservations"]},{id:"premium-beverage",title:"Premium Beverage Collection",description:"Curated selection of premium wines, craft cocktails, and artisanal beverages throughout your voyage.",price:159,originalPrice:219,category:"beverage",imageUrl:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",features:["Premium wine & champagne","Craft cocktails & spirits","Specialty coffee & teas","In-suite beverage service"]}],w=[];return t.includes("relaxation")?w.push({id:"spa-package",title:"Serenity Spa & Wellness Retreat",description:"Indulge in our comprehensive wellness experience with unlimited spa access and premium treatments.",price:249,originalPrice:349,category:"wellness",imageUrl:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",features:["Unlimited thermal suite access","Three signature treatments","Private relaxation areas","Wellness consultation included"],featured:!0}):t.includes("adventure")?w.push({id:"adventure-package",title:"Adventure Sports Collection",description:"Access to all premium adventure activities and exclusive adrenaline experiences.",price:179,originalPrice:249,category:"adventure",imageUrl:"https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",features:["Rock climbing & zip-line","Surf simulator sessions","Adventure equipment included","Professional instruction"]}):t.includes("entertainment")&&w.push({id:"vip-entertainment",title:"VIP Entertainment Experience",description:"Exclusive access to premium shows, meet & greets, and VIP entertainment events.",price:199,originalPrice:279,category:"entertainment",imageUrl:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",features:["Premium theater seating","Artist meet & greet access","Exclusive VIP events","Behind-the-scenes tours"]}),[...y,...w].slice(0,4)})())},[t]);const l=h=>{i(y=>y.includes(h)?y.filter(w=>w!==h):[...y,h])},c=o.filter(h=>r.includes(h.id)),u=c.reduce((h,y)=>h+y.price,0),d=c.reduce((h,y)=>h+(y.originalPrice-y.price),0),f=()=>{c.forEach(h=>{n({id:h.id,type:"offer",quantity:1,price:h.price})}),e("/guest/trip-map")};return a.jsxs(oT,{children:[a.jsxs(sT,{children:[a.jsx(cT,{style:{background:"linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",boxShadow:"0 4px 20px rgba(245, 158, 11, 0.3)"},children:"Limited Time - Exclusive Offers"}),a.jsx(aT,{children:"Curated Premium Experiences"}),a.jsx(lT,{children:"Handpicked luxury upgrades tailored to your preferences"})]}),a.jsxs(uT,{children:[a.jsx(dT,{children:"Premium Selections Curated for You"}),a.jsx(pT,{children:o.map(h=>a.jsxs(fT,{featured:h.featured,children:[h.featured&&a.jsx(jT,{variant:"gold",size:"sm",children:"⭐ Most Popular"}),a.jsx(hT,{imageUrl:h.imageUrl}),a.jsxs(mT,{children:[a.jsx(gT,{children:a.jsxs("div",{children:[a.jsx(yT,{children:h.title}),a.jsx(xT,{children:h.description})]})}),a.jsx(bT,{children:h.features.map((y,w)=>a.jsxs(kT,{children:[a.jsx(qr,{size:16,color:"#10B981"}),y]},w))}),a.jsxs(vT,{children:[a.jsxs($T,{children:["$",h.price]}),a.jsxs(wT,{children:["$",h.originalPrice]}),a.jsxs(ST,{children:["Save $",h.originalPrice-h.price]})]}),a.jsx(F,{fullWidth:!0,size:"lg",variant:r.includes(h.id)?"primary":"outline",onClick:()=>l(h.id),children:r.includes(h.id)?a.jsxs(a.Fragment,{children:[a.jsx(qr,{size:16}),"Added to Package"]}):a.jsxs(a.Fragment,{children:[a.jsx(en,{size:16}),"Add to Package"]})})]})]},h.id))})]}),r.length>0&&a.jsxs(CT,{children:[a.jsxs(PT,{children:[a.jsxs("div",{children:[a.jsxs(ET,{children:["$",u]}),a.jsxs(zT,{children:["You save $",d,"!"]})]}),a.jsx("div",{style:{textAlign:"right"},children:a.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:[r.length," upgrade",r.length>1?"s":""," selected"]})})]}),a.jsxs(F,{fullWidth:!0,size:"lg",onClick:f,children:[a.jsx(si,{size:16}),"Continue to Shore Excursions",a.jsx(fo,{size:16})]})]}),r.length===0&&a.jsx("div",{style:{padding:"0 16px",marginBottom:"20px"},children:a.jsxs(F,{fullWidth:!0,size:"lg",variant:"outline",onClick:f,children:["Skip Upgrades - Continue to Activities",a.jsx(fo,{size:16})]})})]})},DT=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,AT=p.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,RT=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }
`,_T=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    margin-bottom: ${({theme:e})=>e.spacing.lg};
  }
`,MT=p.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing.md};
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,rs=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  background: ${({theme:e})=>e.colors.ocean}10;
  color: ${({theme:e})=>e.colors.ocean};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  white-space: nowrap;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`,Ql=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
`,Xl=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Jl=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,Zl=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`,Cu=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
  position: relative;
  overflow: hidden;
`,ec=p.div`
  width: 100%;
  height: 160px;
  background: ${({imageUrl:e,theme:t})=>e?`url(${e}) center/cover`:`linear-gradient(135deg, ${t.colors.ocean}, ${t.colors.secondary})`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({imageUrl:e})=>e?"linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)":"none"};
    border-radius: ${({theme:e})=>e.borderRadius.md};
  }
`,tc=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,nc=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,rc=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  line-height: 1.5;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,ic=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Pm=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.ocean};
`,Em=p.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  right: ${({theme:e})=>e.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
`,LT=p(Cu)`
  border: 2px solid ${({theme:e})=>e.colors.gold};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.white}, ${({theme:e})=>e.colors.gold}05);
`,IT=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,OT=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.ocean};
`,FT=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.gray[500]};
  text-decoration: line-through;
`,BT=p(F)`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.gold}, ${({theme:e})=>e.colors.teal});
  border: none;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #e6a54a, #0da5a3);
  }
`,NT=()=>{const{currentPassenger:e,setCurrentPassenger:t,addToCart:n}=Le(),[r,i]=j.useState([]),[o,s]=j.useState([]),[l,c]=j.useState([]),[u,d]=j.useState([]),[f,h]=j.useState([]),[y,w]=j.useState([]),[S,b]=j.useState(!0),v={"spa-package":"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","dining-package":"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","beverage-package":"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","shore-excursion":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","fitness-class":"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",entertainment:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","ultimate-bundle":"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","family-bundle":"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","romance-bundle":"https://images.unsplash.com/photo-1520637836862-4d197d17c90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"};j.useEffect(()=>{(async()=>{try{const[k,C,P,E]=await Promise.all([Y.getPassengers(),Y.getOffers(),Y.getBundles(),Y.getRules()]);i(C),s(P),c(E),!e&&k.length>0&&t(k[0])}catch(k){console.error("Failed to load pre-trip data:",k)}finally{b(!1)}})(),W.track(U.PAGE_VIEWED,{page:"guest_pretrip"})},[e,t]),j.useEffect(()=>{if(e&&l.length>0){const $=ep(e,new Date().toISOString().split("T")[0],void 0,"Sunny",!1),C=new Zd(l).evaluate($),P=C.promotedOffers.map(A=>r.find(R=>R.id===A)).filter(Boolean),E=C.promotedBundles.map(A=>o.find(R=>R.id===A)).filter(Boolean);d(P),h(E),w(C.badges)}},[e,r,o,l]);const g=($,k)=>{n({id:$.id,type:k,quantity:1,price:k==="bundle"?$.bundlePrice:$.price}),W.track(k==="offer"?U.OFFER_ADDED_TO_CART:U.BUNDLE_ADDED_TO_CART,{itemId:$.id,itemTitle:$.title,price:k==="bundle"?$.bundlePrice:$.price})},x=()=>{W.track(U.SURPRISE_ME_CLICKED,{source:"pretrip"})};return S?a.jsx("div",{children:"Loading your personalized offers..."}):e?a.jsxs(DT,{children:[a.jsxs(AT,{children:[a.jsx(RT,{children:ne("guest.pretrip.title")}),a.jsx(_T,{children:"Personalized for your upcoming cruise"}),a.jsxs(MT,{children:[a.jsxs(rs,{children:[a.jsx(Dd,{size:16}),e.ship]}),a.jsxs(rs,{children:[a.jsx(bo,{size:16}),e.sailingStart," - ",e.sailingEnd]}),a.jsxs(rs,{children:[a.jsx(Rn,{size:16}),e.party.adults,"A ",e.party.children,"C"]}),a.jsxs(rs,{children:[a.jsx(nx,{size:16}),e.loyaltyTier||"Member"]})]})]}),f.length>0&&a.jsxs(Ql,{children:[a.jsxs(Xl,{children:[a.jsx(Jl,{children:"Recommended Bundles"}),a.jsxs(BT,{onClick:x,children:[a.jsx(kb,{size:20}),ne("guest.surprise.title")]})]}),a.jsx(Zl,{children:f.map($=>{var k;return a.jsxs(LT,{hover:!0,children:[a.jsxs(Em,{children:[(k=$.badges)==null?void 0:k.map(C=>a.jsx(le,{variant:"gold",size:"sm",children:C},C)),y.map(C=>a.jsx(le,{variant:"success",size:"sm",children:C},C))]}),a.jsx(ec,{imageUrl:v[$.id],children:!v[$.id]&&($.media||"Bundle Package")}),a.jsxs(tc,{children:[a.jsx(nc,{children:$.title}),a.jsx(rc,{children:$.desc})]}),a.jsxs(ic,{children:[a.jsxs(IT,{children:[a.jsxs(OT,{children:["$",$.bundlePrice]}),a.jsxs(FT,{children:["$",$.compareAt]})]}),a.jsxs(F,{size:"sm",onClick:()=>g($,"bundle"),"data-testid":`add-bundle-${$.id}`,children:[a.jsx(ot,{size:16}),ne("bundle.addToCart")]})]})]},$.id)})})]}),a.jsxs(Ql,{children:[a.jsx(Xl,{children:a.jsx(Jl,{children:"Recommended for You"})}),a.jsx(Zl,{children:u.map($=>a.jsxs(Cu,{hover:!0,children:[a.jsx(Em,{children:y.map(k=>a.jsx(le,{variant:"success",size:"sm",children:k},k))}),a.jsx(ec,{imageUrl:v[$.id],children:!v[$.id]&&($.media||$.title)}),a.jsxs(tc,{children:[a.jsx(nc,{children:$.title}),a.jsx(rc,{children:$.desc})]}),a.jsxs(ic,{children:[a.jsxs(Pm,{children:["$",$.price]}),a.jsxs(F,{size:"sm",onClick:()=>g($,"offer"),"data-testid":`add-offer-${$.id}`,children:[a.jsx(ot,{size:16}),ne("offer.addToCart")]})]})]},$.id))})]}),r.filter($=>!u.find(k=>k.id===$.id)).length>0&&a.jsxs(Ql,{children:[a.jsx(Xl,{children:a.jsx(Jl,{children:"All Available Offers"})}),a.jsx(Zl,{children:r.filter($=>!u.find(k=>k.id===$.id)).slice(0,6).map($=>a.jsxs(Cu,{hover:!0,children:[a.jsx(ec,{imageUrl:v[$.id],children:!v[$.id]&&($.media||$.title)}),a.jsxs(tc,{children:[a.jsx(nc,{children:$.title}),a.jsx(rc,{children:$.desc})]}),a.jsxs(ic,{children:[a.jsxs(Pm,{children:["$",$.price]}),a.jsxs(F,{size:"sm",variant:"outline",onClick:()=>g($,"offer"),children:[a.jsx(ot,{size:16}),"Add"]})]})]},$.id))})]})]}):a.jsx("div",{children:"Please select a passenger to view offers."})},VT=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,WT=p.div`
  background: linear-gradient(
    135deg,
    ${m.colors.primary} 0%,
    ${m.colors.secondary} 100%
  );
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,UT=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.sm};
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,HT=p.div`
  display: flex;
  gap: ${m.spacing.sm};
  margin-top: ${m.spacing.lg};
  overflow-x: auto;
  padding-bottom: ${m.spacing.sm};
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,GT=p.button`
  padding: ${m.spacing.sm} ${m.spacing.md};
  border: 2px solid ${({active:e})=>e?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.3)"};
  border-radius: ${m.borderRadius.md};
  background: ${({active:e})=>e?"rgba(255,255,255,0.2)":"transparent"};
  color: ${m.colors.white};
  font-weight: ${m.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
  min-height: 48px;
  font-size: ${m.typography.fontSize.sm};
  
  @media (min-width: ${m.breakpoints.sm}) {
    padding: ${m.spacing.md} ${m.spacing.lg};
    font-size: ${m.typography.fontSize.base};
  }
  
  @media (hover: hover) {
    &:hover {
      background: rgba(255,255,255,0.2);
    }
  }
`,qT=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,KT=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,YT=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,QT=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.teal}10;
  color: ${({theme:e})=>e.colors.teal};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,XT=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.gold}10, ${({theme:e})=>e.colors.white});
  border: 2px solid ${({theme:e})=>e.colors.gold};
`,JT=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,ZT=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
`,e6=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.error};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,t6=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`,zm=p.div`
  margin-bottom: ${m.spacing.xl};
`,Tm=p.h3`
  font-size: ${m.typography.fontSize.xl};
  font-weight: ${m.typography.fontWeight.bold};
  color: ${m.colors.navy};
  text-align: center;
  margin-bottom: ${m.spacing.lg};
`,Dm=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${m.spacing.lg};
  
  @media (min-width: ${m.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`,Am=p(N)`
  padding: 0;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${m.shadows.xl};
  }
`,Rm=p.div`
  width: 100%;
  height: 160px;
  background: ${({imageUrl:e})=>e?`url(${e}) center/cover`:`linear-gradient(135deg, ${m.colors.ocean}, ${m.colors.secondary})`};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${m.colors.white};
  font-size: ${m.typography.fontSize.sm};
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({imageUrl:e})=>e?"linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)":"none"};
  }
`,_m=p.div`
  padding: ${m.spacing.lg};
`,Mm=p.h4`
  font-size: ${m.typography.fontSize.lg};
  font-weight: ${m.typography.fontWeight.semibold};
  color: ${m.colors.navy};
  margin-bottom: ${m.spacing.sm};
`,Lm=p.p`
  color: ${m.colors.gray[600]};
  font-size: ${m.typography.fontSize.sm};
  line-height: 1.5;
  margin-bottom: ${m.spacing.md};
`,Im=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Om=p.div`
  font-size: ${m.typography.fontSize.xl};
  font-weight: ${m.typography.fontWeight.bold};
  color: ${m.colors.primary};
`,n6=p.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  right: ${({theme:e})=>e.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
`,r6=e=>{switch(e.toLowerCase()){case"sunny":return a.jsx(_f,{size:16});case"cloudy":case"partly cloudy":return a.jsx(mb,{size:16});case"showers":case"rain":return a.jsx(hb,{size:16});default:return a.jsx(_f,{size:16})}},i6=()=>{const{currentPassenger:e,addToCart:t}=Le(),[n,r]=j.useState(""),[i,o]=j.useState([]),[s,l]=j.useState([]),[c,u]=j.useState([]),[d,f]=j.useState([]),[h,y]=j.useState([]),[w,S]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const[k,C,,P]=await Promise.all([Y.getWeather(),Y.getOffers(),Y.getBundles(),Y.getRules()]);o(k),l(C),u(P),e!=null&&e.itinerary.length&&r(e.itinerary[0].date)}catch(k){console.error("Failed to load onboard data:",k)}finally{S(!1)}})(),W.track(U.PAGE_VIEWED,{page:"guest_onboard"})},[e]),j.useEffect(()=>{var $;if(e&&n&&c.length>0){const k=e.itinerary.find(X=>X.date===n),C=(($=i.find(X=>X.date===n&&X.port===(k==null?void 0:k.port)))==null?void 0:$.condition)||"Sunny",P=ep(e,n,k==null?void 0:k.port,C,(k==null?void 0:k.port)==="At Sea"),A=new Zd(c).evaluate(P),R=A.promotedOffers.map(X=>s.find(pe=>pe.id===X)).filter(Boolean);f(R),y(A.badges)}},[e,n,i,s,c]);const b=$=>{t({id:$.id,type:"offer",quantity:1,price:$.price}),W.track(U.OFFER_ADDED_TO_CART,{offerId:$.id,offerTitle:$.title,price:$.price,source:"onboard"})};if(w||!e)return a.jsx("div",{children:"Loading today's offers..."});const v=e.itinerary.find($=>$.date===n),g=i.find($=>$.date===n&&$.port===(v==null?void 0:v.port)),x={"spa-package":"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","dining-package":"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","beverage-package":"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","shore-excursion":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","fitness-class":"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",entertainment:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"};return a.jsxs(VT,{children:[a.jsxs(WT,{children:[a.jsx(UT,{children:ne("guest.onboard.title")}),a.jsx(HT,{children:e.itinerary.map($=>a.jsxs(GT,{active:n===$.date,onClick:()=>r($.date),children:[new Date($.date).toLocaleDateString("en-US",{month:"short",day:"numeric"}),a.jsx("br",{}),a.jsx("small",{children:$.port})]},$.date))})]}),a.jsxs(t6,{children:[v&&a.jsx(qT,{children:a.jsxs(KT,{children:[a.jsxs(YT,{children:[a.jsx(Kr,{size:20,style:{marginRight:"8px"}}),v.port,", ",v.country]}),g&&a.jsxs(QT,{children:[r6(g.condition),g.condition," ",g.tempC,"°C"]})]})}),a.jsxs(XT,{children:[a.jsxs(JT,{children:[a.jsx(ZT,{children:"⚡ Flash Deal - 30% Off Spa Services"}),a.jsx(e6,{children:"Ends in 2h 15m"})]}),a.jsx("p",{children:"Limited time offer for today only! Book your relaxation session now."})]}),d.length>0&&a.jsxs(zm,{children:[a.jsx(Tm,{children:"Perfect for Today"}),a.jsx(Dm,{children:d.map($=>a.jsxs(Am,{children:[a.jsx(n6,{children:h.map(k=>a.jsx(le,{variant:"success",size:"sm",children:k},k))}),a.jsx(Rm,{imageUrl:x[$.id],children:!x[$.id]&&($.media||$.title)}),a.jsxs(_m,{children:[a.jsx(Mm,{children:$.title}),a.jsx(Lm,{children:$.desc}),a.jsxs(Im,{children:[a.jsxs(Om,{children:["$",$.price]}),a.jsxs(F,{size:"sm",onClick:()=>b($),"data-testid":`add-offer-${$.id}`,children:[a.jsx(ot,{size:16}),"Add"]})]})]})]},$.id))})]}),a.jsxs(zm,{children:[a.jsx(Tm,{children:"All Available Today"}),a.jsx(Dm,{children:s.filter($=>!d.find(k=>k.id===$.id)).slice(0,4).map($=>a.jsxs(Am,{children:[a.jsx(Rm,{imageUrl:x[$.id],children:!x[$.id]&&($.media||$.title)}),a.jsxs(_m,{children:[a.jsx(Mm,{children:$.title}),a.jsx(Lm,{children:$.desc}),a.jsxs(Im,{children:[a.jsxs(Om,{children:["$",$.price]}),a.jsxs(F,{size:"sm",variant:"outline",onClick:()=>b($),children:[a.jsx(ot,{size:16}),"Add"]})]})]})]},$.id))})]})]})]})},o6=p.div`
  max-width: 1000px;
  margin: 0 auto;
`,s6=p.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,a6=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }
`,l6=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
`,c6=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
`,u6=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,d6=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${({theme:e})=>e.colors.gold}20;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  color: ${({theme:e})=>e.colors.gold};
`,p6=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
`,f6=p.div`
  width: 100%;
  height: 12px;
  background: ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  overflow: hidden;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,h6=p.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.teal},
    ${({theme:e})=>e.colors.gold}
  );
  width: ${({progress:e})=>e}%;
  transition: width 0.3s ease;
`,m6=p.div`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,g6=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
`,Mv=p.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${({theme:e})=>e.colors.gold} 0deg 45deg,
    ${({theme:e})=>e.colors.teal} 45deg 90deg,
    ${({theme:e})=>e.colors.ocean} 90deg 135deg,
    ${({theme:e})=>e.colors.success} 135deg 180deg,
    ${({theme:e})=>e.colors.gold} 180deg 225deg,
    ${({theme:e})=>e.colors.teal} 225deg 270deg,
    ${({theme:e})=>e.colors.ocean} 270deg 315deg,
    ${({theme:e})=>e.colors.success} 315deg 360deg
  );
  margin: 0 auto ${({theme:e})=>e.spacing.lg};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadows.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 200px;
    height: 200px;
  }
`,y6=tx`
  from { transform: rotate(0deg); }
  to { transform: rotate(1440deg); }
`,x6=p(Mv)`
  animation: ${y6} 3s ease-out;
`,Fm=p.div`
  width: 40px;
  height: 40px;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.navy};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,v6=p(F)`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.gold},
    ${({theme:e})=>e.colors.teal}
  );
  border: none;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #e6a54a, #0da5a3);
  }
`,$6=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`,w6=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
  text-align: center;
`,S6=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({theme:e})=>e.colors.teal}20;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  color: ${({theme:e})=>e.colors.teal};
  margin: 0 auto ${({theme:e})=>e.spacing.md};
`,b6=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,k6=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,oc=[{icon:a.jsx(en,{size:24}),title:"5% Discount",description:"On your next purchase"},{icon:a.jsx(ir,{size:24}),title:"10% Discount",description:"Premium offer discount"},{icon:a.jsx(sx,{size:24}),title:"Free Cocktail",description:"Complimentary welcome drink"},{icon:a.jsx(ai,{size:24}),title:"Priority Booking",description:"Skip the line for reservations"}],j6=()=>{const{gamification:e,setLastSpinDate:t,unlockPerk:n,addPerk:r}=Le(),[i,o]=j.useState(!1),[s,l]=j.useState(null),c=()=>{if(!e.lastSpinDate)return!0;const h=new Date(e.lastSpinDate),y=new Date;return h.toDateString()!==y.toDateString()},u=()=>{!c()||i||(o(!0),W.track(U.SPIN_WHEEL_USED,{tier:e.tier}),setTimeout(()=>{const h=oc[Math.floor(Math.random()*oc.length)];l(h.title),t(new Date().toISOString()),r({id:`perk_${Date.now()}`,title:h.title,description:h.description,status:"active"}),W.track(U.PERK_UNLOCKED,{perk:h.title,source:"spin_wheel"}),o(!1),alert(`🎉 You won: ${h.title}!`)},3e3))},d=h=>{switch(h){case 1:return"Explorer";case 2:return"Adventurer";case 3:return"Captain";default:return"Explorer"}},f=h=>{switch(h){case 1:return a.jsx(ir,{size:32});case 2:return a.jsx(sx,{size:32});case 3:return a.jsx(ai,{size:32});default:return a.jsx(ir,{size:32})}};return a.jsxs(o6,{children:[a.jsxs(s6,{children:[a.jsx(a6,{children:ne("guest.gamify.title")}),a.jsx(l6,{children:"Earn rewards and unlock exclusive perks"})]}),a.jsxs(c6,{children:[a.jsxs(u6,{children:[a.jsx(d6,{children:f(e.tier)}),a.jsxs("div",{children:[a.jsxs(p6,{children:["Tier ",e.tier,": ",d(e.tier)]}),a.jsxs(le,{variant:"gold",size:"sm",children:[e.totalPurchases," purchases made"]})]})]}),a.jsx(f6,{children:a.jsx(h6,{progress:e.progress})}),a.jsxs(m6,{children:[e.progress,"% to next tier",e.tier<3&&` (${100-e.progress}% remaining)`]})]}),a.jsxs(g6,{children:[a.jsx("h2",{style:{marginBottom:"24px"},children:ne("guest.gamify.spin")}),i?a.jsx(x6,{children:a.jsx(Fm,{children:"🎯"})}):a.jsx(Mv,{children:a.jsx(Fm,{children:"🎯"})}),a.jsx(v6,{size:"lg",disabled:!c()||i,onClick:u,"data-testid":"spin-wheel-button",children:i?"Spinning...":c()?"Spin to Win!":"Come back tomorrow!"}),!c()&&!i&&a.jsx("p",{style:{marginTop:"16px",color:"#64748B"},children:"You've already spun today. Come back tomorrow for another chance!"})]}),a.jsxs(N,{padding:"lg",children:[a.jsx("h2",{style:{marginBottom:"24px",textAlign:"center"},children:"Possible Rewards"}),a.jsx($6,{children:oc.map((h,y)=>a.jsxs(w6,{children:[a.jsx(S6,{children:h.icon}),a.jsx(b6,{children:h.title}),a.jsx(k6,{children:h.description})]},y))})]})]})},Bm=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,C6=p.div`
  background: linear-gradient(
    135deg,
    ${m.colors.primary} 0%,
    ${m.colors.secondary} 100%
  );
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,P6=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.sm};

  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,E6=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0;
`,z6=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 800px;
  margin: 0 auto;
`,T6=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,D6=p.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }
`,A6=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,R6=p(N)`
  padding: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing.lg};
    gap: ${({theme:e})=>e.spacing.lg};
  }
`,_6=p.div`
  width: 80px;
  height: 80px;
  background: ${({imageUrl:e,theme:t})=>e?`url(${e}) center/cover`:`linear-gradient(135deg, ${t.colors.ocean}, ${t.colors.secondary})`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  text-align: center;
  flex-shrink: 0;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,M6=p.div`
  flex: 1;
`,L6=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,I6=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
  text-transform: capitalize;
`,O6=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex-shrink: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing.md};
  }
`,F6=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Nm=p.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.gray[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.gray[50]};
    border-color: ${({theme:e})=>e.colors.gray[400]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,B6=p.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  min-width: 24px;
  text-align: center;
`,N6=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.ocean};
`,V6=p(N)`
  padding: ${({theme:e})=>e.spacing.xl};
  position: sticky;
  bottom: ${({theme:e})=>e.spacing.lg};
  background: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,W6=p.div`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.sunset} 0%,
    ${({theme:e})=>e.colors.accent} 100%
  );
  color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,U6=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,H6=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
`,G6=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,Vm=p(F)`
  ${({selected:e,theme:t})=>e&&`
    background: ${t.colors.primary};
    color: ${t.colors.white};
    border-color: ${t.colors.primary};
  `}
`,sc=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};

  &:last-child {
    margin-bottom: 0;
    padding-top: ${({theme:e})=>e.spacing.md};
    border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  }
`,q6=p.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.colors.gray[500]};
`,K6=p.div`
  font-size: 4rem;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Y6=p(F)`
  margin-top: 16px;
  background: ${({isComplete:e,isProcessing:t})=>e?"#10B981":t?"#6B7280":void 0};
  position: relative;
  overflow: hidden;
`,Wm=(e,t)=>{const n={offer:["https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80","https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"],bundle:["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80","https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"]},r=n[e]||n.offer;return r[parseInt(t)%r.length]},Q6=()=>{const e=wt(),{cartItems:t,updateCartItemQuantity:n,removeFromCart:r,clearCart:i,getCartTotal:o,incrementPurchases:s,loyaltyPoints:l,spendLoyaltyPoints:c,addLoyaltyPoints:u}=Le(),[d,f]=j.useState("card"),h=(C,P,E)=>{n(C,P,E)},y=(C,P)=>{r(C,P)},w=o()*1.1,S=Math.floor(w*100),b=l>=S,[v,g]=j.useState(!1),[x,$]=j.useState(!1),k=()=>{g(!0),W.track(U.CHECKOUT_STARTED,{itemCount:t.length,totalValue:o(),paymentMethod:d}),setTimeout(()=>{d==="points"?c(S):u(Math.floor(w*10)),s(),g(!1),$(!0),W.track(U.CHECKOUT_COMPLETED,{totalValue:o(),paymentMethod:d}),setTimeout(()=>{i(),e("/dashboard")},2e3)},2e3)};return t.length===0?a.jsxs(Bm,{children:[a.jsx(T6,{children:a.jsx(D6,{children:ne("guest.cart.title")})}),a.jsxs(q6,{children:[a.jsx(K6,{children:"🛒"}),a.jsx("h3",{children:ne("cart.empty")}),a.jsx("p",{children:"Add some offers to your cart to get started!"})]})]}):a.jsxs(Bm,{children:[a.jsxs(C6,{children:[a.jsx(P6,{children:"Your Premium Selection"}),a.jsx(E6,{children:"Review and complete your luxury cruise experience"})]}),a.jsx(z6,{children:a.jsx(A6,{children:t.map(C=>a.jsxs(R6,{children:[a.jsx(_6,{imageUrl:Wm(C.type,C.id),children:!Wm(C.type,C.id)&&(C.type==="bundle"?"📦":"🎯")}),a.jsxs(M6,{children:[a.jsxs(L6,{children:[C.type==="bundle"?"Adventure Bundle":"Shore Excursion"," ",C.id]}),a.jsx(I6,{children:C.type==="bundle"?"Activity Package":"Single Activity"})]}),a.jsxs(O6,{children:[a.jsxs(F6,{children:[a.jsx(Nm,{onClick:()=>h(C.id,C.type,C.quantity-1),disabled:C.quantity<=1,children:a.jsx($b,{size:16})}),a.jsx(B6,{children:C.quantity}),a.jsx(Nm,{onClick:()=>h(C.id,C.type,C.quantity+1),children:a.jsx(ot,{size:16})})]}),a.jsxs(N6,{children:["$",(C.price*C.quantity).toFixed(2)]}),a.jsx(F,{size:"sm",variant:"ghost",onClick:()=>y(C.id,C.type),children:a.jsx(ko,{size:16})})]})]},`${C.type}-${C.id}`))})}),a.jsxs(V6,{children:[a.jsxs(W6,{children:[a.jsxs(U6,{children:[a.jsx(ir,{size:20}),a.jsx("span",{children:"CruiseMate Rewards"})]}),a.jsxs(H6,{children:[l.toLocaleString()," points available"]}),d==="points"&&a.jsxs("div",{style:{fontSize:"14px",marginTop:"8px"},children:["This purchase requires ",S.toLocaleString()," points"]})]}),a.jsxs(sc,{children:[a.jsxs("span",{children:["Subtotal (",t.reduce((C,P)=>C+P.quantity,0)," ","items)"]}),a.jsxs("span",{children:["$",o().toFixed(2)]})]}),a.jsxs(sc,{children:[a.jsx("span",{children:"Taxes & Fees"}),a.jsxs("span",{children:["$",(o()*.1).toFixed(2)]})]}),a.jsxs(sc,{children:[a.jsx("span",{children:ne("cart.total")}),a.jsx("span",{children:d==="points"?`${S.toLocaleString()} points`:`$${w.toFixed(2)}`})]}),a.jsxs(G6,{children:[a.jsxs(Vm,{variant:d==="card"?"primary":"outline",selected:d==="card",onClick:()=>f("card"),children:[a.jsx(du,{size:16}),"Card"]}),a.jsxs(Vm,{variant:d==="points"?"primary":"outline",selected:d==="points",onClick:()=>f("points"),disabled:!b,children:[a.jsx(en,{size:16}),"Points"]})]}),a.jsx(Y6,{fullWidth:!0,size:"lg",onClick:k,disabled:d==="points"&&!b||v,"data-testid":"checkout-button",isComplete:x,isProcessing:v,children:x?a.jsxs(a.Fragment,{children:[a.jsx(qr,{size:20}),"Booking Confirmed!"]}):v?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{width:"20px",height:"20px",border:"2px solid #ffffff40",borderTop:"2px solid #ffffff",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"Processing...",a.jsx("style",{children:`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `})]}):d==="points"?a.jsxs(a.Fragment,{children:[a.jsx(en,{size:20}),"Pay with ",S.toLocaleString()," Points"]}):a.jsxs(a.Fragment,{children:[a.jsx(du,{size:20}),"Complete Booking $",w.toFixed(2)]})}),d==="card"&&a.jsxs("div",{style:{textAlign:"center",fontSize:"12px",color:"#666",marginTop:"8px"},children:["Earn ",Math.floor(w*10)," loyalty points with this purchase!"]})]})]})},X6=p.div`
  padding: 0;
  background: ${m.colors.white};
  min-height: 100vh;
  padding-bottom: 100px;
`,J6=p.div`
  background: linear-gradient(
    135deg,
    ${m.colors.primary} 0%,
    ${m.colors.secondary} 100%
  );
  padding: ${m.spacing.xl} ${m.spacing.md};
  color: ${m.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
      center/cover;
    opacity: 0.2;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,Z6=p.h1`
  font-size: ${m.typography.fontSize["2xl"]};
  font-weight: ${m.typography.fontWeight.bold};
  margin-bottom: ${m.spacing.sm};
  
  @media (min-width: ${m.breakpoints.md}) {
    font-size: ${m.typography.fontSize["3xl"]};
  }
`,e8=p.p`
  font-size: ${m.typography.fontSize.lg};
  opacity: 0.9;
  margin: 0;
`,t8=p.div`
  padding: ${m.spacing.xl} ${m.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`,is=p.div`
  margin-bottom: ${m.spacing.xl};
`,os=p.h2`
  font-size: ${m.typography.fontSize.xl};
  font-weight: ${m.typography.fontWeight.bold};
  color: ${m.colors.navy};
  text-align: center;
  margin-bottom: ${m.spacing.lg};
`,ac=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${m.spacing.lg};
  
  @media (min-width: ${m.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`,Um=p(N)`
  padding: ${m.spacing.lg};
  position: relative;
  opacity: ${({status:e})=>e==="expired"?.6:1};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${m.shadows.xl};
  }
`,Hm=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Gm=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,qm=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({status:e,theme:t})=>{switch(e){case"active":return t.colors.success+"20";case"used":return t.colors.gray[200];case"expired":return t.colors.error+"20";default:return t.colors.gray[200]}}};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({status:e,theme:t})=>{switch(e){case"active":return t.colors.success;case"used":return t.colors.gray[500];case"expired":return t.colors.error;default:return t.colors.gray[500]}}};
`,Km=p.div``,Ym=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Qm=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,Xm=p.div`
  width: 80px;
  height: 80px;
  background: ${({theme:e})=>e.colors.gray[100]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.gray[500]};
  margin-top: ${({theme:e})=>e.spacing.md};
`,Jm=p(N)`
  padding: ${({theme:e})=>e.spacing.lg};
`,Zm=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,eg=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({theme:e})=>e.colors.ocean}20;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.ocean};
`,tg=p.div``,ng=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,rg=p.div`
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,n8=p.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.colors.gray[500]};
`,ig=e=>{switch(e){case"active":return a.jsx(pb,{size:24});case"used":return a.jsx(_r,{size:24});case"expired":return a.jsx(zb,{size:24});default:return a.jsx(en,{size:24})}},og=e=>{switch(e){case"active":return a.jsx(le,{variant:"success",size:"sm",children:"Active"});case"used":return a.jsx(le,{variant:"secondary",size:"sm",children:"Used"});case"expired":return a.jsx(le,{variant:"error",size:"sm",children:ne("perk.expired")});default:return a.jsx(le,{variant:"secondary",size:"sm",children:"Unknown"})}},r8=[{id:"res_1",title:"Chef's Table Dinner",date:"2025-11-05",time:"7:00 PM",location:"Deck 12 - Specialty Restaurant"},{id:"res_2",title:"Couples Massage",date:"2025-11-06",time:"2:00 PM",location:"Deck 9 - Spa & Wellness"}],i8=()=>{const{perks:e,currentPassenger:t}=Le(),n=e.filter(o=>o.status==="active"),r=e.filter(o=>o.status==="used"),i=e.filter(o=>o.status==="expired");return a.jsxs(X6,{children:[a.jsxs(J6,{children:[a.jsx(Z6,{children:ne("guest.wallet.title")}),a.jsx(e8,{children:"Your perks, vouchers, and upcoming reservations"})]}),a.jsxs(t8,{children:[a.jsxs(is,{children:[a.jsxs(os,{children:["Active Perks (",n.length,")"]}),n.length>0?a.jsx(ac,{children:n.map(o=>a.jsxs(Um,{status:o.status,hover:!0,children:[a.jsxs(Hm,{children:[a.jsxs(Gm,{children:[a.jsx(qm,{status:o.status,children:ig(o.status)}),a.jsxs(Km,{children:[a.jsx(Ym,{children:o.title}),a.jsx(Qm,{children:o.description})]})]}),og(o.status)]}),a.jsx(Xm,{children:a.jsx(Rf,{size:32})})]},o.id))}):a.jsxs(n8,{children:[a.jsx(en,{size:48,style:{marginBottom:"16px"}}),a.jsx("h3",{children:"No active perks"}),a.jsx("p",{children:"Spin the wheel or make purchases to earn perks!"})]})]}),a.jsxs(is,{children:[a.jsx(os,{children:"Upcoming Reservations"}),a.jsx(ac,{children:r8.map(o=>a.jsxs(Jm,{hover:!0,children:[a.jsxs(Zm,{children:[a.jsx(eg,{children:a.jsx(bo,{size:24})}),a.jsxs(tg,{children:[a.jsx(ng,{children:o.title}),a.jsxs(rg,{children:[o.date," at ",o.time,a.jsx("br",{}),o.location]})]})]}),a.jsx(Xm,{children:a.jsx(Rf,{size:32})})]},o.id))})]}),t&&a.jsxs(is,{children:[a.jsx(os,{children:"Trip Summary"}),a.jsx(Jm,{children:a.jsxs(Zm,{children:[a.jsx(eg,{children:a.jsx(Dd,{size:24})}),a.jsxs(tg,{children:[a.jsx(ng,{children:t.ship}),a.jsxs(rg,{children:[t.sailingStart," - ",t.sailingEnd,a.jsx("br",{}),t.cabinClass," Cabin • ",t.loyaltyTier||"Member",a.jsx("br",{}),"Party: ",t.party.adults," Adults, ",t.party.children," Children"]})]})]})})]}),(r.length>0||i.length>0)&&a.jsxs(is,{children:[a.jsx(os,{children:"Perk History"}),a.jsx(ac,{children:[...r,...i].map(o=>a.jsx(Um,{status:o.status,children:a.jsxs(Hm,{children:[a.jsxs(Gm,{children:[a.jsx(qm,{status:o.status,children:ig(o.status)}),a.jsxs(Km,{children:[a.jsx(Ym,{children:o.title}),a.jsx(Qm,{children:o.description})]})]}),og(o.status)]})},o.id))})]})]})]})},o8=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${({theme:e})=>e.spacing.xl};
`,s8=p(N)`
  text-align: center;
  max-width: 500px;
  padding: ${({theme:e})=>e.spacing.xxl};
`,a8=p.h1`
  font-size: 6rem;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.ocean};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  line-height: 1;
`,l8=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.navy};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,c8=p.p`
  color: ${({theme:e})=>e.colors.gray[600]};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  line-height: 1.6;
`,u8=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,d8=()=>{const e=wt(),t=()=>{e("/")},n=()=>{e(-1)};return a.jsx(o8,{children:a.jsxs(s8,{children:[a.jsx(a8,{children:"404"}),a.jsx(l8,{children:"Page Not Found"}),a.jsx(c8,{children:"The page you're looking for doesn't exist or has been moved. Let's get you back on course."}),a.jsxs(u8,{children:[a.jsxs(F,{onClick:n,variant:"outline",children:[a.jsx(Ed,{size:20}),"Go Back"]}),a.jsxs(F,{onClick:t,children:[a.jsx(yb,{size:20}),"Go Home"]})]})]})})};function p8(){return a.jsxs(ib,{theme:m,children:[a.jsx(lb,{}),a.jsx(sS,{children:a.jsxs(X5,{children:[a.jsxs(rS,{children:[a.jsx(ie,{path:"/",element:a.jsx(T4,{})}),a.jsx(ie,{path:"/guided-journey",element:a.jsx(xm,{})}),a.jsx(ie,{path:"/start",element:a.jsx(xm,{})}),a.jsx(ie,{path:"/dashboard",element:a.jsx(sE,{})}),a.jsx(ie,{path:"/admin",element:a.jsx(n3,{})}),a.jsx(ie,{path:"/admin/offers",element:a.jsx(y3,{})}),a.jsx(ie,{path:"/admin/bundles",element:a.jsx(O3,{})}),a.jsx(ie,{path:"/admin/segments",element:a.jsx(Y3,{})}),a.jsx(ie,{path:"/admin/rules",element:a.jsx(cP,{})}),a.jsx(ie,{path:"/admin/simulator",element:a.jsx(jP,{})}),a.jsx(ie,{path:"/admin/analytics",element:a.jsx(FP,{})}),a.jsx(ie,{path:"/guest/activity-selection",element:a.jsx(dz,{})}),a.jsx(ie,{path:"/guest/trip-map",element:a.jsx(Mz,{})}),a.jsx(ie,{path:"/guest/destination-activities",element:a.jsx(iT,{})}),a.jsx(ie,{path:"/guest/onboard-upgrades",element:a.jsx(TT,{})}),a.jsx(ie,{path:"/guest/pretrip",element:a.jsx(NT,{})}),a.jsx(ie,{path:"/guest/onboard",element:a.jsx(i6,{})}),a.jsx(ie,{path:"/guest/gamify",element:a.jsx(j6,{})}),a.jsx(ie,{path:"/guest/cart",element:a.jsx(Q6,{})}),a.jsx(ie,{path:"/guest/wallet",element:a.jsx(i8,{})}),a.jsx(ie,{path:"/itinerary",element:a.jsx(CE,{})}),a.jsx(ie,{path:"/concierge",element:a.jsx(RE,{})}),a.jsx(ie,{path:"/profile",element:a.jsx(WE,{})}),a.jsx(ie,{path:"*",element:a.jsx(d8,{})})]}),a.jsx(p4,{})]})})]})}lc.createRoot(document.getElementById("root")).render(a.jsx(Ne.StrictMode,{children:a.jsx(p8,{})}));
