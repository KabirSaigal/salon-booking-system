function BT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function gv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qd={exports:{}},Xa={},Wd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function zT(){if(dy)return Pe;dy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function P(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,H={};function U(O,Q,fe){this.props=O,this.context=Q,this.refs=H,this.updater=fe||F}U.prototype.isReactComponent={},U.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},U.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function W(){}W.prototype=U.prototype;function Z(O,Q,fe){this.props=O,this.context=Q,this.refs=H,this.updater=fe||F}var ne=Z.prototype=new W;ne.constructor=Z,$(ne,U.prototype),ne.isPureReactComponent=!0;var ue=Array.isArray,Re=Object.prototype.hasOwnProperty,Ie={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function I(O,Q,fe){var Se,ke={},be=null,Me=null;if(Q!=null)for(Se in Q.ref!==void 0&&(Me=Q.ref),Q.key!==void 0&&(be=""+Q.key),Q)Re.call(Q,Se)&&!C.hasOwnProperty(Se)&&(ke[Se]=Q[Se]);var Ue=arguments.length-2;if(Ue===1)ke.children=fe;else if(1<Ue){for(var $e=Array(Ue),wt=0;wt<Ue;wt++)$e[wt]=arguments[wt+2];ke.children=$e}if(O&&O.defaultProps)for(Se in Ue=O.defaultProps,Ue)ke[Se]===void 0&&(ke[Se]=Ue[Se]);return{$$typeof:n,type:O,key:be,ref:Me,props:ke,_owner:Ie.current}}function k(O,Q){return{$$typeof:n,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function D(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return Q[fe]})}var L=/\/+/g;function R(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):Q.toString(36)}function it(O,Q,fe,Se,ke){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(be){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case n:case e:Me=!0}}if(Me)return Me=O,ke=ke(Me),O=Se===""?"."+R(Me,0):Se,ue(ke)?(fe="",O!=null&&(fe=O.replace(L,"$&/")+"/"),it(ke,Q,fe,"",function(wt){return wt})):ke!=null&&(N(ke)&&(ke=k(ke,fe+(!ke.key||Me&&Me.key===ke.key?"":(""+ke.key).replace(L,"$&/")+"/")+O)),Q.push(ke)),1;if(Me=0,Se=Se===""?".":Se+":",ue(O))for(var Ue=0;Ue<O.length;Ue++){be=O[Ue];var $e=Se+R(be,Ue);Me+=it(be,Q,fe,$e,ke)}else if($e=P(O),typeof $e=="function")for(O=$e.call(O),Ue=0;!(be=O.next()).done;)be=be.value,$e=Se+R(be,Ue++),Me+=it(be,Q,fe,$e,ke);else if(be==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ot(O,Q,fe){if(O==null)return O;var Se=[],ke=0;return it(O,Se,"","",function(be){return Q.call(fe,be,ke++)}),Se}function Lt(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var Be={current:null},re={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:re,ReactCurrentOwner:Ie};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Ot,forEach:function(O,Q,fe){Ot(O,function(){Q.apply(this,arguments)},fe)},count:function(O){var Q=0;return Ot(O,function(){Q++}),Q},toArray:function(O){return Ot(O,function(Q){return Q})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pe.Component=U,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=Z,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Pe.act=oe,Pe.cloneElement=function(O,Q,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=$({},O.props),ke=O.key,be=O.ref,Me=O._owner;if(Q!=null){if(Q.ref!==void 0&&(be=Q.ref,Me=Ie.current),Q.key!==void 0&&(ke=""+Q.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for($e in Q)Re.call(Q,$e)&&!C.hasOwnProperty($e)&&(Se[$e]=Q[$e]===void 0&&Ue!==void 0?Ue[$e]:Q[$e])}var $e=arguments.length-2;if($e===1)Se.children=fe;else if(1<$e){Ue=Array($e);for(var wt=0;wt<$e;wt++)Ue[wt]=arguments[wt+2];Se.children=Ue}return{$$typeof:n,type:O.type,key:ke,ref:be,props:Se,_owner:Me}},Pe.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Pe.createElement=I,Pe.createFactory=function(O){var Q=I.bind(null,O);return Q.type=O,Q},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:d,render:O}},Pe.isValidElement=N,Pe.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Lt}},Pe.memo=function(O,Q){return{$$typeof:y,type:O,compare:Q===void 0?null:Q}},Pe.startTransition=function(O){var Q=re.transition;re.transition={};try{O()}finally{re.transition=Q}},Pe.unstable_act=oe,Pe.useCallback=function(O,Q){return Be.current.useCallback(O,Q)},Pe.useContext=function(O){return Be.current.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O){return Be.current.useDeferredValue(O)},Pe.useEffect=function(O,Q){return Be.current.useEffect(O,Q)},Pe.useId=function(){return Be.current.useId()},Pe.useImperativeHandle=function(O,Q,fe){return Be.current.useImperativeHandle(O,Q,fe)},Pe.useInsertionEffect=function(O,Q){return Be.current.useInsertionEffect(O,Q)},Pe.useLayoutEffect=function(O,Q){return Be.current.useLayoutEffect(O,Q)},Pe.useMemo=function(O,Q){return Be.current.useMemo(O,Q)},Pe.useReducer=function(O,Q,fe){return Be.current.useReducer(O,Q,fe)},Pe.useRef=function(O){return Be.current.useRef(O)},Pe.useState=function(O){return Be.current.useState(O)},Pe.useSyncExternalStore=function(O,Q,fe){return Be.current.useSyncExternalStore(O,Q,fe)},Pe.useTransition=function(){return Be.current.useTransition()},Pe.version="18.3.1",Pe}var fy;function Kf(){return fy||(fy=1,Wd.exports=zT()),Wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function $T(){if(py)return Xa;py=1;var n=Kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var E,T={},P=null,F=null;y!==void 0&&(P=""+y),p.key!==void 0&&(P=""+p.key),p.ref!==void 0&&(F=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(d&&d.defaultProps)for(E in p=d.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:d,key:P,ref:F,props:T,_owner:o.current}}return Xa.Fragment=t,Xa.jsx=c,Xa.jsxs=c,Xa}var my;function HT(){return my||(my=1,qd.exports=$T()),qd.exports}var S=HT(),G=Kf();const yv=gv(G),qT=BT({__proto__:null,default:yv},[G]);var Ju={},Kd={exports:{}},rn={},Gd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function WT(){return gy||(gy=1,function(n){function e(re,me){var oe=re.length;re.push(me);e:for(;0<oe;){var O=oe-1>>>1,Q=re[O];if(0<o(Q,me))re[O]=me,re[oe]=Q,oe=O;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],oe=re.pop();if(oe!==me){re[0]=oe;e:for(var O=0,Q=re.length,fe=Q>>>1;O<fe;){var Se=2*(O+1)-1,ke=re[Se],be=Se+1,Me=re[be];if(0>o(ke,oe))be<Q&&0>o(Me,ke)?(re[O]=Me,re[be]=oe,O=be):(re[O]=ke,re[Se]=oe,O=Se);else if(be<Q&&0>o(Me,oe))re[O]=Me,re[be]=oe,O=be;else break e}}return me}function o(re,me){var oe=re.sortIndex-me.sortIndex;return oe!==0?oe:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],E=1,T=null,P=3,F=!1,$=!1,H=!1,U=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ue(re){if(H=!1,ne(re),!$)if(t(p)!==null)$=!0,Lt(Re);else{var me=t(y);me!==null&&Be(ue,me.startTime-re)}}function Re(re,me){$=!1,H&&(H=!1,W(I),I=-1),F=!0;var oe=P;try{for(ne(me),T=t(p);T!==null&&(!(T.expirationTime>me)||re&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,P=T.priorityLevel;var Q=O(T.expirationTime<=me);me=n.unstable_now(),typeof Q=="function"?T.callback=Q:T===t(p)&&i(p),ne(me)}else i(p);T=t(p)}if(T!==null)var fe=!0;else{var Se=t(y);Se!==null&&Be(ue,Se.startTime-me),fe=!1}return fe}finally{T=null,P=oe,F=!1}}var Ie=!1,C=null,I=-1,k=5,N=-1;function D(){return!(n.unstable_now()-N<k)}function L(){if(C!==null){var re=n.unstable_now();N=re;var me=!0;try{me=C(!0,re)}finally{me?R():(Ie=!1,C=null)}}else Ie=!1}var R;if(typeof Z=="function")R=function(){Z(L)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Ot=it.port2;it.port1.onmessage=L,R=function(){Ot.postMessage(null)}}else R=function(){U(L,0)};function Lt(re){C=re,Ie||(Ie=!0,R())}function Be(re,me){I=U(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){$||F||($=!0,Lt(Re))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return P},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(P){case 1:case 2:case 3:var me=3;break;default:me=P}var oe=P;P=me;try{return re()}finally{P=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var oe=P;P=re;try{return me()}finally{P=oe}},n.unstable_scheduleCallback=function(re,me,oe){var O=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,re={id:E++,callback:me,priorityLevel:re,startTime:oe,expirationTime:Q,sortIndex:-1},oe>O?(re.sortIndex=oe,e(y,re),t(p)===null&&re===t(y)&&(H?(W(I),I=-1):H=!0,Be(ue,oe-O))):(re.sortIndex=Q,e(p,re),$||F||($=!0,Lt(Re))),re},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(re){var me=P;return function(){var oe=P;P=me;try{return re.apply(this,arguments)}finally{P=oe}}}}(Qd)),Qd}var yy;function KT(){return yy||(yy=1,Gd.exports=WT()),Gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function GT(){if(_y)return rn;_y=1;var n=Kf(),e=KT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function P(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function F(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function $(r,s,a,h){if(s===null||typeof s>"u"||F(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(r,s,a,h,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){U[r]=new H(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];U[s]=new H(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){U[r]=new H(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){U[r]=new H(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){U[r]=new H(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){U[r]=new H(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){U[r]=new H(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){U[r]=new H(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){U[r]=new H(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(W,Z);U[s]=new H(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(W,Z);U[s]=new H(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(W,Z);U[s]=new H(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){U[r]=new H(r,1,!1,r.toLowerCase(),null,!1,!1)}),U.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){U[r]=new H(r,1,!1,r.toLowerCase(),null,!0,!0)});function ne(r,s,a,h){var f=U.hasOwnProperty(s)?U[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,f,h)&&(a=null),h||f===null?P(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var ue=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Re=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,O;function Q(r){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+r}var fe=!1;function Se(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var h=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){h=B}r.call(s.prototype)}else{try{throw Error()}catch(B){h=B}r()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var f=B.stack.split(`
`),g=h.stack.split(`
`),v=f.length-1,A=g.length-1;1<=v&&0<=A&&f[v]!==g[A];)A--;for(;1<=v&&0<=A;v--,A--)if(f[v]!==g[A]){if(v!==1||A!==1)do if(v--,A--,0>A||f[v]!==g[A]){var x=`
`+f[v].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=v&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function ke(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function be(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case C:return"Fragment";case Ie:return"Portal";case k:return"Profiler";case I:return"StrictMode";case R:return"Suspense";case it:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case L:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ot:return s=r.displayName||null,s!==null?s:be(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return be(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){h=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(v){h=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function mr(r){r._valueTracker||(r._valueTracker=wt(r))}function Ds(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=$e(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function zr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Fi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Os(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function na(r,s){s=s.checked,s!=null&&ne(r,"checked",s,!1)}function ra(r,s){na(r,s);var a=Ue(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ls(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ls(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ml(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ls(r,s,a){(s!=="number"||zr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var gr=Array.isArray;function yr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ia(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Vs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Ms(r,s){var a=Ue(s.value),h=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function sa(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var _r,oa=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=_r.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function $r(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bi=["Webkit","ms","Moz","O"];Object.keys(ji).forEach(function(r){Bi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ji[s]=ji[r]})});function aa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||ji.hasOwnProperty(r)&&ji[r]?(""+s).trim():s+"px"}function la(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=aa(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var ua=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(r,s){if(s){if(ua[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ha(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function Us(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Fs=null,gn=null,Gn=null;function js(r){if(r=La(r)){if(typeof Fs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=fu(s),Fs(r.stateNode,r.type,s))}}function Qn(r){gn?Gn?Gn.push(r):Gn=[r]:gn=r}function da(){if(gn){var r=gn,s=Gn;if(Gn=gn=null,js(r),s)for(r=0;r<s.length;r++)js(s[r])}}function $i(r,s){return r(s)}function fa(){}var vr=!1;function pa(r,s,a){if(vr)return r(s,a);vr=!0;try{return $i(r,s,a)}finally{vr=!1,(gn!==null||Gn!==null)&&(fa(),da())}}function st(r,s){var a=r.stateNode;if(a===null)return null;var h=fu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Bs=!1;if(d)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Bs=!1}function Hi(r,s,a,h,f,g,v,A,x){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(Y){this.onError(Y)}}var qi=!1,zs=null,Cn=!1,ma=null,vh={onError:function(r){qi=!0,zs=r}};function $s(r,s,a,h,f,g,v,A,x){qi=!1,zs=null,Hi.apply(vh,arguments)}function Ul(r,s,a,h,f,g,v,A,x){if($s.apply(this,arguments),qi){if(qi){var B=zs;qi=!1,zs=null}else throw Error(t(198));Cn||(Cn=!0,ma=B)}}function xn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Wi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Nn(r){if(xn(r)!==r)throw Error(t(188))}function Fl(r){var s=r.alternate;if(!s){if(s=xn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Nn(f),r;if(g===h)return Nn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var v=!1,A=f.child;A;){if(A===a){v=!0,a=f,h=g;break}if(A===h){v=!0,h=f,a=g;break}A=A.sibling}if(!v){for(A=g.child;A;){if(A===a){v=!0,a=g,h=f;break}if(A===h){v=!0,h=g,a=f;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ga(r){return r=Fl(r),r!==null?Hs(r):null}function Hs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Hs(r);if(s!==null)return s;r=r.sibling}return null}var qs=e.unstable_scheduleCallback,ya=e.unstable_cancelCallback,jl=e.unstable_shouldYield,Eh=e.unstable_requestPaint,He=e.unstable_now,Bl=e.unstable_getCurrentPriorityLevel,Ki=e.unstable_ImmediatePriority,Hr=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,_a=e.unstable_LowPriority,zl=e.unstable_IdlePriority,Gi=null,an=null;function $l(r){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Gi,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:ql,va=Math.log,Hl=Math.LN2;function ql(r){return r>>>=0,r===0?32:31-(va(r)/Hl|0)|0}var Ws=64,Ks=4194304;function qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Qi(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var A=v&~f;A!==0?h=qr(A):(g&=v,g!==0&&(h=qr(g)))}else v=a&~f,v!==0?h=qr(v):g!==0&&(h=qr(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Ht(s),f=1<<a,h|=r[a],s&=~f;return h}function wh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Er(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Ht(g),A=1<<v,x=f[v];x===-1?((A&a)===0||(A&h)!==0)&&(f[v]=wh(A,s)):x<=s&&(r.expiredLanes|=A),g&=~A}}function ln(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Xi(){var r=Ws;return Ws<<=1,(Ws&4194240)===0&&(Ws=64),r}function Wr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Kr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Ht(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function Gr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Ht(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Ne=0;function Qr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Wl,Gs,Kl,Gl,Ql,Ea=!1,Xn=[],kt=null,bn=null,Dn=null,Xr=new Map,_n=new Map,Yn=[],Th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xl(r,s){switch(r){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Xr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(s.pointerId)}}function Xt(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=La(s),s!==null&&Gs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Ih(r,s,a,h,f){switch(s){case"focusin":return kt=Xt(kt,r,s,a,h,f),!0;case"dragenter":return bn=Xt(bn,r,s,a,h,f),!0;case"mouseover":return Dn=Xt(Dn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return Xr.set(g,Xt(Xr.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,_n.set(g,Xt(_n.get(g)||null,r,s,a,h,f)),!0}return!1}function Yl(r){var s=ts(r.target);if(s!==null){var a=xn(s);if(a!==null){if(s=a.tag,s===13){if(s=Wi(a),s!==null){r.blockedOn=s,Ql(r.priority,function(){Kl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function wr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Qs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);zi=h,a.target.dispatchEvent(h),zi=null}else return s=La(a),s!==null&&Gs(s),r.blockedOn=a,!1;s.shift()}return!0}function Yi(r,s,a){wr(r)&&a.delete(s)}function Jl(){Ea=!1,kt!==null&&wr(kt)&&(kt=null),bn!==null&&wr(bn)&&(bn=null),Dn!==null&&wr(Dn)&&(Dn=null),Xr.forEach(Yi),_n.forEach(Yi)}function On(r,s){r.blockedOn===s&&(r.blockedOn=null,Ea||(Ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jl)))}function Ln(r){function s(f){return On(f,r)}if(0<Xn.length){On(Xn[0],r);for(var a=1;a<Xn.length;a++){var h=Xn[a];h.blockedOn===r&&(h.blockedOn=null)}}for(kt!==null&&On(kt,r),bn!==null&&On(bn,r),Dn!==null&&On(Dn,r),Xr.forEach(s),_n.forEach(s),a=0;a<Yn.length;a++)h=Yn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Yl(a),a.blockedOn===null&&Yn.shift()}var Tr=ue.ReactCurrentBatchConfig,Yr=!0;function Qe(r,s,a,h){var f=Ne,g=Tr.transition;Tr.transition=null;try{Ne=1,wa(r,s,a,h)}finally{Ne=f,Tr.transition=g}}function Sh(r,s,a,h){var f=Ne,g=Tr.transition;Tr.transition=null;try{Ne=4,wa(r,s,a,h)}finally{Ne=f,Tr.transition=g}}function wa(r,s,a,h){if(Yr){var f=Qs(r,s,a,h);if(f===null)Lh(r,s,h,Ji,a),Xl(r,h);else if(Ih(f,r,s,a,h))h.stopPropagation();else if(Xl(r,h),s&4&&-1<Th.indexOf(r)){for(;f!==null;){var g=La(f);if(g!==null&&Wl(g),g=Qs(r,s,a,h),g===null&&Lh(r,s,h,Ji,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else Lh(r,s,h,null,a)}}var Ji=null;function Qs(r,s,a,h){if(Ji=null,r=Us(h),r=ts(r),r!==null)if(s=xn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Wi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Ji=r,null}function Ta(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bl()){case Ki:return 1;case Hr:return 4;case yn:case _a:return 16;case zl:return 536870912;default:return 16}default:return 16}}var un=null,Xs=null,Yt=null;function Ia(){if(Yt)return Yt;var r,s=Xs,a=s.length,h,f="value"in un?un.value:un.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(h=1;h<=v&&s[a-h]===f[g-h];h++);return Yt=f.slice(r,1<h?1-h:void 0)}function Ys(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Jn(){return!0}function Sa(){return!1}function Pt(r){function s(a,h,f,g,v){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Jn:Sa,this.isPropagationStopped=Sa,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=Pt(Vn),Zn=oe({},Vn,{view:0,detail:0}),Ah=Pt(Zn),Zs,Ir,Jr,Zi=oe({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Jr&&(Jr&&r.type==="mousemove"?(Zs=r.screenX-Jr.screenX,Ir=r.screenY-Jr.screenY):Ir=Zs=0,Jr=r),Zs)},movementY:function(r){return"movementY"in r?r.movementY:Ir}}),eo=Pt(Zi),Aa=oe({},Zi,{dataTransfer:0}),Zl=Pt(Aa),to=oe({},Zn,{relatedTarget:0}),no=Pt(to),eu=oe({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Pt(eu),tu=oe({},Vn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),nu=Pt(tu),ru=oe({},Vn,{data:0}),Ra=Pt(ru),ro={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function su(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=iu[r])?!!s[r]:!1}function er(){return su}var u=oe({},Zn,{key:function(r){if(r.key){var s=ro[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ys(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?Ys(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ys(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Pt(u),_=oe({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Pt(_),V=oe({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),z=Pt(V),te=oe({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Pt(te),mt=oe({},Zi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),De=Pt(mt),Tt=[9,13,27,32],ut=d&&"CompositionEvent"in window,vn=null;d&&"documentMode"in document&&(vn=document.documentMode);var cn=d&&"TextEvent"in window&&!vn,es=d&&(!ut||vn&&8<vn&&11>=vn),io=" ",om=!1;function am(r,s){switch(r){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var so=!1;function U0(r,s){switch(r){case"compositionend":return lm(s);case"keypress":return s.which!==32?null:(om=!0,io);case"textInput":return r=s.data,r===io&&om?null:r;default:return null}}function F0(r,s){if(so)return r==="compositionend"||!ut&&am(r,s)?(r=Ia(),Yt=Xs=un=null,so=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return es&&s.locale!=="ko"?null:s.data;default:return null}}var j0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!j0[r.type]:s==="textarea"}function cm(r,s,a,h){Qn(h),s=cu(s,"onChange"),0<s.length&&(a=new Js("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var ka=null,Pa=null;function B0(r){Pm(r,0)}function ou(r){var s=co(r);if(Ds(s))return r}function z0(r,s){if(r==="change")return s}var hm=!1;if(d){var Rh;if(d){var kh="oninput"in document;if(!kh){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),kh=typeof dm.oninput=="function"}Rh=kh}else Rh=!1;hm=Rh&&(!document.documentMode||9<document.documentMode)}function fm(){ka&&(ka.detachEvent("onpropertychange",pm),Pa=ka=null)}function pm(r){if(r.propertyName==="value"&&ou(Pa)){var s=[];cm(s,Pa,r,Us(r)),pa(B0,s)}}function $0(r,s,a){r==="focusin"?(fm(),ka=s,Pa=a,ka.attachEvent("onpropertychange",pm)):r==="focusout"&&fm()}function H0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ou(Pa)}function q0(r,s){if(r==="click")return ou(s)}function W0(r,s){if(r==="input"||r==="change")return ou(s)}function K0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:K0;function Ca(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!Mn(r[f],s[f]))return!1}return!0}function mm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function gm(r,s){var a=mm(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mm(a)}}function ym(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?ym(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function _m(){for(var r=window,s=zr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=zr(r.document)}return s}function Ph(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function G0(r){var s=_m(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&ym(a.ownerDocument.documentElement,a)){if(h!==null&&Ph(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=gm(a,g);var v=gm(a,h);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Q0=d&&"documentMode"in document&&11>=document.documentMode,oo=null,Ch=null,xa=null,xh=!1;function vm(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xh||oo==null||oo!==zr(h)||(h=oo,"selectionStart"in h&&Ph(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),xa&&Ca(xa,h)||(xa=h,h=cu(Ch,"onSelect"),0<h.length&&(s=new Js("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=oo)))}function au(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var ao={animationend:au("Animation","AnimationEnd"),animationiteration:au("Animation","AnimationIteration"),animationstart:au("Animation","AnimationStart"),transitionend:au("Transition","TransitionEnd")},Nh={},Em={};d&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function lu(r){if(Nh[r])return Nh[r];if(!ao[r])return r;var s=ao[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Em)return Nh[r]=s[a];return r}var wm=lu("animationend"),Tm=lu("animationiteration"),Im=lu("animationstart"),Sm=lu("transitionend"),Am=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(r,s){Am.set(r,s),l(s,[r])}for(var bh=0;bh<Rm.length;bh++){var Dh=Rm[bh],X0=Dh.toLowerCase(),Y0=Dh[0].toUpperCase()+Dh.slice(1);Zr(X0,"on"+Y0)}Zr(wm,"onAnimationEnd"),Zr(Tm,"onAnimationIteration"),Zr(Im,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(Sm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function km(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Ul(h,s,void 0,r),r.currentTarget=null}function Pm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var v=h.length-1;0<=v;v--){var A=h[v],x=A.instance,B=A.currentTarget;if(A=A.listener,x!==g&&f.isPropagationStopped())break e;km(f,A,B),g=x}else for(v=0;v<h.length;v++){if(A=h[v],x=A.instance,B=A.currentTarget,A=A.listener,x!==g&&f.isPropagationStopped())break e;km(f,A,B),g=x}}}if(Cn)throw r=ma,Cn=!1,ma=null,r}function Ke(r,s){var a=s[Bh];a===void 0&&(a=s[Bh]=new Set);var h=r+"__bubble";a.has(h)||(Cm(s,r,2,!1),a.add(h))}function Oh(r,s,a){var h=0;s&&(h|=4),Cm(a,r,h,s)}var uu="_reactListening"+Math.random().toString(36).slice(2);function ba(r){if(!r[uu]){r[uu]=!0,i.forEach(function(a){a!=="selectionchange"&&(J0.has(a)||Oh(a,!1,r),Oh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[uu]||(s[uu]=!0,Oh("selectionchange",!1,s))}}function Cm(r,s,a,h){switch(Ta(s)){case 1:var f=Qe;break;case 4:f=Sh;break;default:f=wa}a=f.bind(null,s,a,r),f=void 0,!Bs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Lh(r,s,a,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var v=h.tag;if(v===3||v===4){var A=h.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=h.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===f||x.nodeType===8&&x.parentNode===f))return;v=v.return}for(;A!==null;){if(v=ts(A),v===null)return;if(x=v.tag,x===5||x===6){h=g=v;continue e}A=A.parentNode}}h=h.return}pa(function(){var B=g,Y=Us(a),J=[];e:{var X=Am.get(r);if(X!==void 0){var se=Js,ce=r;switch(r){case"keypress":if(Ys(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=no;break;case"focusout":ce="blur",se=no;break;case"beforeblur":case"afterblur":se=no;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Zl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=z;break;case wm:case Tm:case Im:se=Sr;break;case Sm:se=je;break;case"scroll":se=Ah;break;case"wheel":se=De;break;case"copy":case"cut":case"paste":se=nu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var he=(s&4)!==0,ot=!he&&r==="scroll",M=he?X!==null?X+"Capture":null:X;he=[];for(var b=B,j;b!==null;){j=b;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,M!==null&&(ee=st(b,M),ee!=null&&he.push(Da(b,ee,j)))),ot)break;b=b.return}0<he.length&&(X=new se(X,ce,null,a,Y),J.push({event:X,listeners:he}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",X&&a!==zi&&(ce=a.relatedTarget||a.fromElement)&&(ts(ce)||ce[Ar]))break e;if((se||X)&&(X=Y.window===Y?Y:(X=Y.ownerDocument)?X.defaultView||X.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=B,ce=ce?ts(ce):null,ce!==null&&(ot=xn(ce),ce!==ot||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=B),se!==ce)){if(he=eo,ee="onMouseLeave",M="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(he=w,ee="onPointerLeave",M="onPointerEnter",b="pointer"),ot=se==null?X:co(se),j=ce==null?X:co(ce),X=new he(ee,b+"leave",se,a,Y),X.target=ot,X.relatedTarget=j,ee=null,ts(Y)===B&&(he=new he(M,b+"enter",ce,a,Y),he.target=j,he.relatedTarget=ot,ee=he),ot=ee,se&&ce)t:{for(he=se,M=ce,b=0,j=he;j;j=lo(j))b++;for(j=0,ee=M;ee;ee=lo(ee))j++;for(;0<b-j;)he=lo(he),b--;for(;0<j-b;)M=lo(M),j--;for(;b--;){if(he===M||M!==null&&he===M.alternate)break t;he=lo(he),M=lo(M)}he=null}else he=null;se!==null&&xm(J,X,se,he,!1),ce!==null&&ot!==null&&xm(J,ot,ce,he,!0)}}e:{if(X=B?co(B):window,se=X.nodeName&&X.nodeName.toLowerCase(),se==="select"||se==="input"&&X.type==="file")var de=z0;else if(um(X))if(hm)de=W0;else{de=H0;var ge=$0}else(se=X.nodeName)&&se.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(de=q0);if(de&&(de=de(r,B))){cm(J,de,a,Y);break e}ge&&ge(r,X,B),r==="focusout"&&(ge=X._wrapperState)&&ge.controlled&&X.type==="number"&&Ls(X,"number",X.value)}switch(ge=B?co(B):window,r){case"focusin":(um(ge)||ge.contentEditable==="true")&&(oo=ge,Ch=B,xa=null);break;case"focusout":xa=Ch=oo=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,vm(J,a,Y);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":vm(J,a,Y)}var ye;if(ut)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else so?am(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(es&&a.locale!=="ko"&&(so||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&so&&(ye=Ia()):(un=Y,Xs="value"in un?un.value:un.textContent,so=!0)),ge=cu(B,Ee),0<ge.length&&(Ee=new Ra(Ee,r,null,a,Y),J.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=lm(a),ye!==null&&(Ee.data=ye)))),(ye=cn?U0(r,a):F0(r,a))&&(B=cu(B,"onBeforeInput"),0<B.length&&(Y=new Ra("onBeforeInput","beforeinput",null,a,Y),J.push({event:Y,listeners:B}),Y.data=ye))}Pm(J,s)})}function Da(r,s,a){return{instance:r,listener:s,currentTarget:a}}function cu(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=st(r,a),g!=null&&h.unshift(Da(r,g,f)),g=st(r,s),g!=null&&h.push(Da(r,g,f))),r=r.return}return h}function lo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function xm(r,s,a,h,f){for(var g=s._reactName,v=[];a!==null&&a!==h;){var A=a,x=A.alternate,B=A.stateNode;if(x!==null&&x===h)break;A.tag===5&&B!==null&&(A=B,f?(x=st(a,g),x!=null&&v.unshift(Da(a,x,A))):f||(x=st(a,g),x!=null&&v.push(Da(a,x,A)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var Z0=/\r\n?/g,eT=/\u0000|\uFFFD/g;function Nm(r){return(typeof r=="string"?r:""+r).replace(Z0,`
`).replace(eT,"")}function hu(r,s,a){if(s=Nm(s),Nm(r)!==s&&a)throw Error(t(425))}function du(){}var Vh=null,Mh=null;function Uh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,tT=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,nT=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(r){return bm.resolve(null).then(r).catch(rT)}:Fh;function rT(r){setTimeout(function(){throw r})}function jh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),Ln(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);Ln(s)}function ei(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Dm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var uo=Math.random().toString(36).slice(2),tr="__reactFiber$"+uo,Oa="__reactProps$"+uo,Ar="__reactContainer$"+uo,Bh="__reactEvents$"+uo,iT="__reactListeners$"+uo,sT="__reactHandles$"+uo;function ts(r){var s=r[tr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Dm(r);r!==null;){if(a=r[tr])return a;r=Dm(r)}return s}r=a,a=r.parentNode}return null}function La(r){return r=r[tr]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function co(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function fu(r){return r[Oa]||null}var zh=[],ho=-1;function ti(r){return{current:r}}function Ge(r){0>ho||(r.current=zh[ho],zh[ho]=null,ho--)}function qe(r,s){ho++,zh[ho]=r.current,r.current=s}var ni={},Vt=ti(ni),Jt=ti(!1),ns=ni;function fo(r,s){var a=r.type.contextTypes;if(!a)return ni;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Zt(r){return r=r.childContextTypes,r!=null}function pu(){Ge(Jt),Ge(Vt)}function Om(r,s,a){if(Vt.current!==ni)throw Error(t(168));qe(Vt,s),qe(Jt,a)}function Lm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return oe({},a,h)}function mu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ni,ns=Vt.current,qe(Vt,r),qe(Jt,Jt.current),!0}function Vm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Lm(r,s,ns),h.__reactInternalMemoizedMergedChildContext=r,Ge(Jt),Ge(Vt),qe(Vt,r)):Ge(Jt),qe(Jt,a)}var Rr=null,gu=!1,$h=!1;function Mm(r){Rr===null?Rr=[r]:Rr.push(r)}function oT(r){gu=!0,Mm(r)}function ri(){if(!$h&&Rr!==null){$h=!0;var r=0,s=Ne;try{var a=Rr;for(Ne=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Rr=null,gu=!1}catch(f){throw Rr!==null&&(Rr=Rr.slice(r+1)),qs(Ki,ri),f}finally{Ne=s,$h=!1}}return null}var po=[],mo=0,yu=null,_u=0,En=[],wn=0,rs=null,kr=1,Pr="";function is(r,s){po[mo++]=_u,po[mo++]=yu,yu=r,_u=s}function Um(r,s,a){En[wn++]=kr,En[wn++]=Pr,En[wn++]=rs,rs=r;var h=kr;r=Pr;var f=32-Ht(h)-1;h&=~(1<<f),a+=1;var g=32-Ht(s)+f;if(30<g){var v=f-f%5;g=(h&(1<<v)-1).toString(32),h>>=v,f-=v,kr=1<<32-Ht(s)+f|a<<f|h,Pr=g+r}else kr=1<<g|a<<f|h,Pr=r}function Hh(r){r.return!==null&&(is(r,1),Um(r,1,0))}function qh(r){for(;r===yu;)yu=po[--mo],po[mo]=null,_u=po[--mo],po[mo]=null;for(;r===rs;)rs=En[--wn],En[wn]=null,Pr=En[--wn],En[wn]=null,kr=En[--wn],En[wn]=null}var hn=null,dn=null,Xe=!1,Un=null;function Fm(r,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function jm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,hn=r,dn=ei(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,hn=r,dn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=rs!==null?{id:kr,overflow:Pr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,hn=r,dn=null,!0):!1;default:return!1}}function Wh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Kh(r){if(Xe){var s=dn;if(s){var a=s;if(!jm(r,s)){if(Wh(r))throw Error(t(418));s=ei(a.nextSibling);var h=hn;s&&jm(r,s)?Fm(h,a):(r.flags=r.flags&-4097|2,Xe=!1,hn=r)}}else{if(Wh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,hn=r}}}function Bm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;hn=r}function vu(r){if(r!==hn)return!1;if(!Xe)return Bm(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Uh(r.type,r.memoizedProps)),s&&(s=dn)){if(Wh(r))throw zm(),Error(t(418));for(;s;)Fm(r,s),s=ei(s.nextSibling)}if(Bm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){dn=ei(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}dn=null}}else dn=hn?ei(r.stateNode.nextSibling):null;return!0}function zm(){for(var r=dn;r;)r=ei(r.nextSibling)}function go(){dn=hn=null,Xe=!1}function Gh(r){Un===null?Un=[r]:Un.push(r)}var aT=ue.ReactCurrentBatchConfig;function Va(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var A=f.refs;v===null?delete A[g]:A[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Eu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function $m(r){var s=r._init;return s(r._payload)}function Hm(r){function s(M,b){if(r){var j=M.deletions;j===null?(M.deletions=[b],M.flags|=16):j.push(b)}}function a(M,b){if(!r)return null;for(;b!==null;)s(M,b),b=b.sibling;return null}function h(M,b){for(M=new Map;b!==null;)b.key!==null?M.set(b.key,b):M.set(b.index,b),b=b.sibling;return M}function f(M,b){return M=hi(M,b),M.index=0,M.sibling=null,M}function g(M,b,j){return M.index=j,r?(j=M.alternate,j!==null?(j=j.index,j<b?(M.flags|=2,b):j):(M.flags|=2,b)):(M.flags|=1048576,b)}function v(M){return r&&M.alternate===null&&(M.flags|=2),M}function A(M,b,j,ee){return b===null||b.tag!==6?(b=Fd(j,M.mode,ee),b.return=M,b):(b=f(b,j),b.return=M,b)}function x(M,b,j,ee){var de=j.type;return de===C?Y(M,b,j.props.children,ee,j.key):b!==null&&(b.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Lt&&$m(de)===b.type)?(ee=f(b,j.props),ee.ref=Va(M,b,j),ee.return=M,ee):(ee=Hu(j.type,j.key,j.props,null,M.mode,ee),ee.ref=Va(M,b,j),ee.return=M,ee)}function B(M,b,j,ee){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=jd(j,M.mode,ee),b.return=M,b):(b=f(b,j.children||[]),b.return=M,b)}function Y(M,b,j,ee,de){return b===null||b.tag!==7?(b=ds(j,M.mode,ee,de),b.return=M,b):(b=f(b,j),b.return=M,b)}function J(M,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Fd(""+b,M.mode,j),b.return=M,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Re:return j=Hu(b.type,b.key,b.props,null,M.mode,j),j.ref=Va(M,null,b),j.return=M,j;case Ie:return b=jd(b,M.mode,j),b.return=M,b;case Lt:var ee=b._init;return J(M,ee(b._payload),j)}if(gr(b)||me(b))return b=ds(b,M.mode,j,null),b.return=M,b;Eu(M,b)}return null}function X(M,b,j,ee){var de=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:A(M,b,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:return j.key===de?x(M,b,j,ee):null;case Ie:return j.key===de?B(M,b,j,ee):null;case Lt:return de=j._init,X(M,b,de(j._payload),ee)}if(gr(j)||me(j))return de!==null?null:Y(M,b,j,ee,null);Eu(M,j)}return null}function se(M,b,j,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return M=M.get(j)||null,A(b,M,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Re:return M=M.get(ee.key===null?j:ee.key)||null,x(b,M,ee,de);case Ie:return M=M.get(ee.key===null?j:ee.key)||null,B(b,M,ee,de);case Lt:var ge=ee._init;return se(M,b,j,ge(ee._payload),de)}if(gr(ee)||me(ee))return M=M.get(j)||null,Y(b,M,ee,de,null);Eu(b,ee)}return null}function ce(M,b,j,ee){for(var de=null,ge=null,ye=b,Ee=b=0,At=null;ye!==null&&Ee<j.length;Ee++){ye.index>Ee?(At=ye,ye=null):At=ye.sibling;var Ve=X(M,ye,j[Ee],ee);if(Ve===null){ye===null&&(ye=At);break}r&&ye&&Ve.alternate===null&&s(M,ye),b=g(Ve,b,Ee),ge===null?de=Ve:ge.sibling=Ve,ge=Ve,ye=At}if(Ee===j.length)return a(M,ye),Xe&&is(M,Ee),de;if(ye===null){for(;Ee<j.length;Ee++)ye=J(M,j[Ee],ee),ye!==null&&(b=g(ye,b,Ee),ge===null?de=ye:ge.sibling=ye,ge=ye);return Xe&&is(M,Ee),de}for(ye=h(M,ye);Ee<j.length;Ee++)At=se(ye,M,Ee,j[Ee],ee),At!==null&&(r&&At.alternate!==null&&ye.delete(At.key===null?Ee:At.key),b=g(At,b,Ee),ge===null?de=At:ge.sibling=At,ge=At);return r&&ye.forEach(function(di){return s(M,di)}),Xe&&is(M,Ee),de}function he(M,b,j,ee){var de=me(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var ge=de=null,ye=b,Ee=b=0,At=null,Ve=j.next();ye!==null&&!Ve.done;Ee++,Ve=j.next()){ye.index>Ee?(At=ye,ye=null):At=ye.sibling;var di=X(M,ye,Ve.value,ee);if(di===null){ye===null&&(ye=At);break}r&&ye&&di.alternate===null&&s(M,ye),b=g(di,b,Ee),ge===null?de=di:ge.sibling=di,ge=di,ye=At}if(Ve.done)return a(M,ye),Xe&&is(M,Ee),de;if(ye===null){for(;!Ve.done;Ee++,Ve=j.next())Ve=J(M,Ve.value,ee),Ve!==null&&(b=g(Ve,b,Ee),ge===null?de=Ve:ge.sibling=Ve,ge=Ve);return Xe&&is(M,Ee),de}for(ye=h(M,ye);!Ve.done;Ee++,Ve=j.next())Ve=se(ye,M,Ee,Ve.value,ee),Ve!==null&&(r&&Ve.alternate!==null&&ye.delete(Ve.key===null?Ee:Ve.key),b=g(Ve,b,Ee),ge===null?de=Ve:ge.sibling=Ve,ge=Ve);return r&&ye.forEach(function(jT){return s(M,jT)}),Xe&&is(M,Ee),de}function ot(M,b,j,ee){if(typeof j=="object"&&j!==null&&j.type===C&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:e:{for(var de=j.key,ge=b;ge!==null;){if(ge.key===de){if(de=j.type,de===C){if(ge.tag===7){a(M,ge.sibling),b=f(ge,j.props.children),b.return=M,M=b;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Lt&&$m(de)===ge.type){a(M,ge.sibling),b=f(ge,j.props),b.ref=Va(M,ge,j),b.return=M,M=b;break e}a(M,ge);break}else s(M,ge);ge=ge.sibling}j.type===C?(b=ds(j.props.children,M.mode,ee,j.key),b.return=M,M=b):(ee=Hu(j.type,j.key,j.props,null,M.mode,ee),ee.ref=Va(M,b,j),ee.return=M,M=ee)}return v(M);case Ie:e:{for(ge=j.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(M,b.sibling),b=f(b,j.children||[]),b.return=M,M=b;break e}else{a(M,b);break}else s(M,b);b=b.sibling}b=jd(j,M.mode,ee),b.return=M,M=b}return v(M);case Lt:return ge=j._init,ot(M,b,ge(j._payload),ee)}if(gr(j))return ce(M,b,j,ee);if(me(j))return he(M,b,j,ee);Eu(M,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(M,b.sibling),b=f(b,j),b.return=M,M=b):(a(M,b),b=Fd(j,M.mode,ee),b.return=M,M=b),v(M)):a(M,b)}return ot}var yo=Hm(!0),qm=Hm(!1),wu=ti(null),Tu=null,_o=null,Qh=null;function Xh(){Qh=_o=Tu=null}function Yh(r){var s=wu.current;Ge(wu),r._currentValue=s}function Jh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function vo(r,s){Tu=r,Qh=_o=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(en=!0),r.firstContext=null)}function Tn(r){var s=r._currentValue;if(Qh!==r)if(r={context:r,memoizedValue:s,next:null},_o===null){if(Tu===null)throw Error(t(308));_o=r,Tu.dependencies={lanes:0,firstContext:r}}else _o=_o.next=r;return s}var ss=null;function Zh(r){ss===null?ss=[r]:ss.push(r)}function Wm(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Zh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Cr(r,h)}function Cr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ii=!1;function ed(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function si(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Le&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Cr(r,a)}return f=h.interleaved,f===null?(s.next=s,Zh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Cr(r,a)}function Iu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Gr(r,a)}}function Gm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Su(r,s,a,h){var f=r.updateQueue;ii=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var x=A,B=x.next;x.next=null,v===null?g=B:v.next=B,v=x;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,A=Y.lastBaseUpdate,A!==v&&(A===null?Y.firstBaseUpdate=B:A.next=B,Y.lastBaseUpdate=x))}if(g!==null){var J=f.baseState;v=0,Y=B=x=null,A=g;do{var X=A.lane,se=A.eventTime;if((h&X)===X){Y!==null&&(Y=Y.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ce=r,he=A;switch(X=s,se=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){J=ce.call(se,J,X);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,X=typeof ce=="function"?ce.call(se,J,X):ce,X==null)break e;J=oe({},J,X);break e;case 2:ii=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,X=f.effects,X===null?f.effects=[A]:X.push(A))}else se={eventTime:se,lane:X,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Y===null?(B=Y=se,x=J):Y=Y.next=se,v|=X;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;X=A,A=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);if(Y===null&&(x=J),f.baseState=x,f.firstBaseUpdate=B,f.lastBaseUpdate=Y,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ls|=v,r.lanes=v,r.memoizedState=J}}function Qm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ma={},nr=ti(Ma),Ua=ti(Ma),Fa=ti(Ma);function os(r){if(r===Ma)throw Error(t(174));return r}function td(r,s){switch(qe(Fa,s),qe(Ua,r),qe(nr,Ma),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ge(nr),qe(nr,s)}function Eo(){Ge(nr),Ge(Ua),Ge(Fa)}function Xm(r){os(Fa.current);var s=os(nr.current),a=pt(s,r.type);s!==a&&(qe(Ua,r),qe(nr,a))}function nd(r){Ua.current===r&&(Ge(nr),Ge(Ua))}var Ye=ti(0);function Au(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var rd=[];function id(){for(var r=0;r<rd.length;r++)rd[r]._workInProgressVersionPrimary=null;rd.length=0}var Ru=ue.ReactCurrentDispatcher,sd=ue.ReactCurrentBatchConfig,as=0,Je=null,gt=null,It=null,ku=!1,ja=!1,Ba=0,lT=0;function Mt(){throw Error(t(321))}function od(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Mn(r[a],s[a]))return!1;return!0}function ad(r,s,a,h,f,g){if(as=g,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ru.current=r===null||r.memoizedState===null?dT:fT,r=a(h,f),ja){g=0;do{if(ja=!1,Ba=0,25<=g)throw Error(t(301));g+=1,It=gt=null,s.updateQueue=null,Ru.current=pT,r=a(h,f)}while(ja)}if(Ru.current=xu,s=gt!==null&&gt.next!==null,as=0,It=gt=Je=null,ku=!1,s)throw Error(t(300));return r}function ld(){var r=Ba!==0;return Ba=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Je.memoizedState=It=r:It=It.next=r,It}function In(){if(gt===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=It===null?Je.memoizedState:It.next;if(s!==null)It=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?Je.memoizedState=It=r:It=It.next=r}return It}function za(r,s){return typeof s=="function"?s(r):s}function ud(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=gt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var A=v=null,x=null,B=g;do{var Y=B.lane;if((as&Y)===Y)x!==null&&(x=x.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),h=B.hasEagerState?B.eagerState:r(h,B.action);else{var J={lane:Y,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};x===null?(A=x=J,v=h):x=x.next=J,Je.lanes|=Y,ls|=Y}B=B.next}while(B!==null&&B!==g);x===null?v=h:x.next=A,Mn(h,s.memoizedState)||(en=!0),s.memoizedState=h,s.baseState=v,s.baseQueue=x,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Je.lanes|=g,ls|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function cd(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);Mn(g,s.memoizedState)||(en=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function Ym(){}function Jm(r,s){var a=Je,h=In(),f=s(),g=!Mn(h.memoizedState,f);if(g&&(h.memoizedState=f,en=!0),h=h.queue,hd(tg.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,$a(9,eg.bind(null,a,h,f,s),void 0,null),St===null)throw Error(t(349));(as&30)!==0||Zm(a,s,f)}return f}function Zm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function eg(r,s,a,h){s.value=a,s.getSnapshot=h,ng(s)&&rg(r)}function tg(r,s,a){return a(function(){ng(s)&&rg(r)})}function ng(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Mn(r,a)}catch{return!0}}function rg(r){var s=Cr(r,1);s!==null&&zn(s,r,1,-1)}function ig(r){var s=rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:r},s.queue=r,r=r.dispatch=hT.bind(null,Je,r),[s.memoizedState,r]}function $a(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function sg(){return In().memoizedState}function Pu(r,s,a,h){var f=rr();Je.flags|=r,f.memoizedState=$a(1|s,a,void 0,h===void 0?null:h)}function Cu(r,s,a,h){var f=In();h=h===void 0?null:h;var g=void 0;if(gt!==null){var v=gt.memoizedState;if(g=v.destroy,h!==null&&od(h,v.deps)){f.memoizedState=$a(s,a,g,h);return}}Je.flags|=r,f.memoizedState=$a(1|s,a,g,h)}function og(r,s){return Pu(8390656,8,r,s)}function hd(r,s){return Cu(2048,8,r,s)}function ag(r,s){return Cu(4,2,r,s)}function lg(r,s){return Cu(4,4,r,s)}function ug(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function cg(r,s,a){return a=a!=null?a.concat([r]):null,Cu(4,4,ug.bind(null,s,r),a)}function dd(){}function hg(r,s){var a=In();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&od(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function dg(r,s){var a=In();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&od(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function fg(r,s,a){return(as&21)===0?(r.baseState&&(r.baseState=!1,en=!0),r.memoizedState=a):(Mn(a,s)||(a=Xi(),Je.lanes|=a,ls|=a,r.baseState=!0),s)}function uT(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var h=sd.transition;sd.transition={};try{r(!1),s()}finally{Ne=a,sd.transition=h}}function pg(){return In().memoizedState}function cT(r,s,a){var h=ui(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},mg(r))gg(s,a);else if(a=Wm(r,s,a,h),a!==null){var f=Kt();zn(a,r,h,f),yg(a,s,h)}}function hT(r,s,a){var h=ui(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(mg(r))gg(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,A=g(v,a);if(f.hasEagerState=!0,f.eagerState=A,Mn(A,v)){var x=s.interleaved;x===null?(f.next=f,Zh(s)):(f.next=x.next,x.next=f),s.interleaved=f;return}}catch{}finally{}a=Wm(r,s,f,h),a!==null&&(f=Kt(),zn(a,r,h,f),yg(a,s,h))}}function mg(r){var s=r.alternate;return r===Je||s!==null&&s===Je}function gg(r,s){ja=ku=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function yg(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Gr(r,a)}}var xu={readContext:Tn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},dT={readContext:Tn,useCallback:function(r,s){return rr().memoizedState=[r,s===void 0?null:s],r},useContext:Tn,useEffect:og,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Pu(4194308,4,ug.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Pu(4,2,r,s)},useMemo:function(r,s){var a=rr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=rr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=cT.bind(null,Je,r),[h.memoizedState,r]},useRef:function(r){var s=rr();return r={current:r},s.memoizedState=r},useState:ig,useDebugValue:dd,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=ig(!1),s=r[0];return r=uT.bind(null,r[1]),rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=Je,f=rr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));(as&30)!==0||Zm(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,og(tg.bind(null,h,g,r),[r]),h.flags|=2048,$a(9,eg.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=rr(),s=St.identifierPrefix;if(Xe){var a=Pr,h=kr;a=(h&~(1<<32-Ht(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ba++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=lT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},fT={readContext:Tn,useCallback:hg,useContext:Tn,useEffect:hd,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:dg,useReducer:ud,useRef:sg,useState:function(){return ud(za)},useDebugValue:dd,useDeferredValue:function(r){var s=In();return fg(s,gt.memoizedState,r)},useTransition:function(){var r=ud(za)[0],s=In().memoizedState;return[r,s]},useMutableSource:Ym,useSyncExternalStore:Jm,useId:pg,unstable_isNewReconciler:!1},pT={readContext:Tn,useCallback:hg,useContext:Tn,useEffect:hd,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:dg,useReducer:cd,useRef:sg,useState:function(){return cd(za)},useDebugValue:dd,useDeferredValue:function(r){var s=In();return gt===null?s.memoizedState=r:fg(s,gt.memoizedState,r)},useTransition:function(){var r=cd(za)[0],s=In().memoizedState;return[r,s]},useMutableSource:Ym,useSyncExternalStore:Jm,useId:pg,unstable_isNewReconciler:!1};function Fn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function fd(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Nu={isMounted:function(r){return(r=r._reactInternals)?xn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Kt(),f=ui(r),g=xr(h,f);g.payload=s,a!=null&&(g.callback=a),s=si(r,g,f),s!==null&&(zn(s,r,f,h),Iu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Kt(),f=ui(r),g=xr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=si(r,g,f),s!==null&&(zn(s,r,f,h),Iu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),h=ui(r),f=xr(a,h);f.tag=2,s!=null&&(f.callback=s),s=si(r,f,h),s!==null&&(zn(s,r,h,a),Iu(s,r,h))}};function _g(r,s,a,h,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,v):s.prototype&&s.prototype.isPureReactComponent?!Ca(a,h)||!Ca(f,g):!0}function vg(r,s,a){var h=!1,f=ni,g=s.contextType;return typeof g=="object"&&g!==null?g=Tn(g):(f=Zt(s)?ns:Vt.current,h=s.contextTypes,g=(h=h!=null)?fo(r,f):ni),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Nu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Eg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Nu.enqueueReplaceState(s,s.state,null)}function pd(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},ed(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Tn(g):(g=Zt(s)?ns:Vt.current,f.context=fo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(fd(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Nu.enqueueReplaceState(f,f.state,null),Su(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function wo(r,s){try{var a="",h=s;do a+=ke(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function md(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function gd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var mT=typeof WeakMap=="function"?WeakMap:Map;function wg(r,s,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Uu||(Uu=!0,Nd=h),gd(r,s)},a}function Tg(r,s,a){a=xr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){gd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){gd(r,s),typeof h!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Ig(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new mT;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=CT.bind(null,r,s,a),s.then(r,r))}function Sg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ag(r,s,a,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=xr(-1,1),s.tag=2,si(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var gT=ue.ReactCurrentOwner,en=!1;function Wt(r,s,a,h){s.child=r===null?qm(s,null,a,h):yo(s,r.child,a,h)}function Rg(r,s,a,h,f){a=a.render;var g=s.ref;return vo(s,f),h=ad(r,s,a,h,g,f),a=ld(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Xe&&a&&Hh(s),s.flags|=1,Wt(r,s,h,f),s.child)}function kg(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!Ud(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Pg(r,s,g,h,f)):(r=Hu(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ca,a(v,h)&&r.ref===s.ref)return Nr(r,s,f)}return s.flags|=1,r=hi(g,h),r.ref=s.ref,r.return=s,s.child=r}function Pg(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(Ca(g,h)&&r.ref===s.ref)if(en=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(en=!0);else return s.lanes=r.lanes,Nr(r,s,f)}return yd(r,s,a,h,f)}function Cg(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Io,fn),fn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,qe(Io,fn),fn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,qe(Io,fn),fn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,qe(Io,fn),fn|=h;return Wt(r,s,f,a),s.child}function xg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function yd(r,s,a,h,f){var g=Zt(a)?ns:Vt.current;return g=fo(s,g),vo(s,f),a=ad(r,s,a,h,g,f),h=ld(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Xe&&h&&Hh(s),s.flags|=1,Wt(r,s,a,f),s.child)}function Ng(r,s,a,h,f){if(Zt(a)){var g=!0;mu(s)}else g=!1;if(vo(s,f),s.stateNode===null)Du(r,s),vg(s,a,h),pd(s,a,h,f),h=!0;else if(r===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var x=v.context,B=a.contextType;typeof B=="object"&&B!==null?B=Tn(B):(B=Zt(a)?ns:Vt.current,B=fo(s,B));var Y=a.getDerivedStateFromProps,J=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==h||x!==B)&&Eg(s,v,h,B),ii=!1;var X=s.memoizedState;v.state=X,Su(s,h,v,f),x=s.memoizedState,A!==h||X!==x||Jt.current||ii?(typeof Y=="function"&&(fd(s,a,Y,h),x=s.memoizedState),(A=ii||_g(s,a,A,h,X,x,B))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=x),v.props=h,v.state=x,v.context=B,h=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{v=s.stateNode,Km(r,s),A=s.memoizedProps,B=s.type===s.elementType?A:Fn(s.type,A),v.props=B,J=s.pendingProps,X=v.context,x=a.contextType,typeof x=="object"&&x!==null?x=Tn(x):(x=Zt(a)?ns:Vt.current,x=fo(s,x));var se=a.getDerivedStateFromProps;(Y=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==J||X!==x)&&Eg(s,v,h,x),ii=!1,X=s.memoizedState,v.state=X,Su(s,h,v,f);var ce=s.memoizedState;A!==J||X!==ce||Jt.current||ii?(typeof se=="function"&&(fd(s,a,se,h),ce=s.memoizedState),(B=ii||_g(s,a,B,h,X,ce,x)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(h,ce,x),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(h,ce,x)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),v.props=h,v.state=ce,v.context=x,h=B):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),h=!1)}return _d(r,s,a,h,g,f)}function _d(r,s,a,h,f,g){xg(r,s);var v=(s.flags&128)!==0;if(!h&&!v)return f&&Vm(s,a,!1),Nr(r,s,g);h=s.stateNode,gT.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&v?(s.child=yo(s,r.child,null,g),s.child=yo(s,null,A,g)):Wt(r,s,A,g),s.memoizedState=h.state,f&&Vm(s,a,!0),s.child}function bg(r){var s=r.stateNode;s.pendingContext?Om(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Om(r,s.context,!1),td(r,s.containerInfo)}function Dg(r,s,a,h,f){return go(),Gh(f),s.flags|=256,Wt(r,s,a,h),s.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function Ed(r){return{baseLanes:r,cachePool:null,transitions:null}}function Og(r,s,a){var h=s.pendingProps,f=Ye.current,g=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),qe(Ye,f&1),r===null)return Kh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=h.children,r=h.fallback,g?(h=s.mode,g=s.child,v={mode:"hidden",children:v},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=v):g=qu(v,h,0,null),r=ds(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Ed(a),s.memoizedState=vd,r):wd(s,v));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return yT(r,s,v,h,A,f,a);if(g){g=h.fallback,v=s.mode,f=r.child,A=f.sibling;var x={mode:"hidden",children:h.children};return(v&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=x,s.deletions=null):(h=hi(f,x),h.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=hi(A,g):(g=ds(g,v,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,v=r.child.memoizedState,v=v===null?Ed(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=vd,h}return g=r.child,r=g.sibling,h=hi(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function wd(r,s){return s=qu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function bu(r,s,a,h){return h!==null&&Gh(h),yo(s,r.child,null,a),r=wd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function yT(r,s,a,h,f,g,v){if(a)return s.flags&256?(s.flags&=-257,h=md(Error(t(422))),bu(r,s,v,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=qu({mode:"visible",children:h.children},f,0,null),g=ds(g,f,v,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&yo(s,r.child,null,v),s.child.memoizedState=Ed(v),s.memoizedState=vd,g);if((s.mode&1)===0)return bu(r,s,v,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=md(g,h,void 0),bu(r,s,v,h)}if(A=(v&r.childLanes)!==0,en||A){if(h=St,h!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|v))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Cr(r,f),zn(h,r,f,-1))}return Md(),h=md(Error(t(421))),bu(r,s,v,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=xT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,dn=ei(f.nextSibling),hn=s,Xe=!0,Un=null,r!==null&&(En[wn++]=kr,En[wn++]=Pr,En[wn++]=rs,kr=r.id,Pr=r.overflow,rs=s),s=wd(s,h.children),s.flags|=4096,s)}function Lg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Jh(r.return,s,a)}function Td(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function Vg(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Wt(r,s,h.children,a),h=Ye.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Lg(r,a,s);else if(r.tag===19)Lg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(qe(Ye,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Au(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Td(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Au(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Td(s,!0,a,null,g);break;case"together":Td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Du(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ls|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=hi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=hi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function _T(r,s,a){switch(s.tag){case 3:bg(s),go();break;case 5:Xm(s);break;case 1:Zt(s.type)&&mu(s);break;case 4:td(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;qe(wu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(qe(Ye,Ye.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Og(r,s,a):(qe(Ye,Ye.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);qe(Ye,Ye.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Vg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),qe(Ye,Ye.current),h)break;return null;case 22:case 23:return s.lanes=0,Cg(r,s,a)}return Nr(r,s,a)}var Mg,Id,Ug,Fg;Mg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Id=function(){},Ug=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,os(nr.current);var g=null;switch(a){case"input":f=Fi(r,f),h=Fi(r,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=ia(r,f),h=ia(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=du)}ca(a,h);var v;a=null;for(B in f)if(!h.hasOwnProperty(B)&&f.hasOwnProperty(B)&&f[B]!=null)if(B==="style"){var A=f[B];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?g||(g=[]):(g=g||[]).push(B,null));for(B in h){var x=h[B];if(A=f!=null?f[B]:void 0,h.hasOwnProperty(B)&&x!==A&&(x!=null||A!=null))if(B==="style")if(A){for(v in A)!A.hasOwnProperty(v)||x&&x.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in x)x.hasOwnProperty(v)&&A[v]!==x[v]&&(a||(a={}),a[v]=x[v])}else a||(g||(g=[]),g.push(B,a)),a=x;else B==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,A=A?A.__html:void 0,x!=null&&A!==x&&(g=g||[]).push(B,x)):B==="children"?typeof x!="string"&&typeof x!="number"||(g=g||[]).push(B,""+x):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(x!=null&&B==="onScroll"&&Ke("scroll",r),g||A===x||(g=[])):(g=g||[]).push(B,x))}a&&(g=g||[]).push("style",a);var B=g;(s.updateQueue=B)&&(s.flags|=4)}},Fg=function(r,s,a,h){a!==h&&(s.flags|=4)};function Ha(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Ut(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function vT(r,s,a){var h=s.pendingProps;switch(qh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(s),null;case 1:return Zt(s.type)&&pu(),Ut(s),null;case 3:return h=s.stateNode,Eo(),Ge(Jt),Ge(Vt),id(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(vu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(Od(Un),Un=null))),Id(r,s),Ut(s),null;case 5:nd(s);var f=os(Fa.current);if(a=s.type,r!==null&&s.stateNode!=null)Ug(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Ut(s),null}if(r=os(nr.current),vu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[tr]=s,h[Oa]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",h),Ke("close",h);break;case"iframe":case"object":case"embed":Ke("load",h);break;case"video":case"audio":for(f=0;f<Na.length;f++)Ke(Na[f],h);break;case"source":Ke("error",h);break;case"img":case"image":case"link":Ke("error",h),Ke("load",h);break;case"details":Ke("toggle",h);break;case"input":Os(h,g),Ke("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",h);break;case"textarea":Vs(h,g),Ke("invalid",h)}ca(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var A=g[v];v==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&hu(h.textContent,A,r),f=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&hu(h.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ke("scroll",h)}switch(a){case"input":mr(h),Ml(h,g,!0);break;case"textarea":mr(h),sa(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=du)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=v.createElement(a,{is:h.is}):(r=v.createElement(a),a==="select"&&(v=r,h.multiple?v.multiple=!0:h.size&&(v.size=h.size))):r=v.createElementNS(r,a),r[tr]=s,r[Oa]=h,Mg(r,s,!1,!1),s.stateNode=r;e:{switch(v=ha(a,h),a){case"dialog":Ke("cancel",r),Ke("close",r),f=h;break;case"iframe":case"object":case"embed":Ke("load",r),f=h;break;case"video":case"audio":for(f=0;f<Na.length;f++)Ke(Na[f],r);f=h;break;case"source":Ke("error",r),f=h;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=h;break;case"details":Ke("toggle",r),f=h;break;case"input":Os(r,h),f=Fi(r,h),Ke("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),Ke("invalid",r);break;case"textarea":Vs(r,h),f=ia(r,h),Ke("invalid",r);break;default:f=h}ca(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var x=A[g];g==="style"?la(r,x):g==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&oa(r,x)):g==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&$r(r,x):typeof x=="number"&&$r(r,""+x):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?x!=null&&g==="onScroll"&&Ke("scroll",r):x!=null&&ne(r,g,x,v))}switch(a){case"input":mr(r),Ml(r,h,!1);break;case"textarea":mr(r),sa(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Ue(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?yr(r,!!h.multiple,g,!1):h.defaultValue!=null&&yr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=du)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ut(s),null;case 6:if(r&&s.stateNode!=null)Fg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=os(Fa.current),os(nr.current),vu(s)){if(h=s.stateNode,a=s.memoizedProps,h[tr]=s,(g=h.nodeValue!==a)&&(r=hn,r!==null))switch(r.tag){case 3:hu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&hu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[tr]=s,s.stateNode=h}return Ut(s),null;case 13:if(Ge(Ye),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&dn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)zm(),go(),s.flags|=98560,g=!1;else if(g=vu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[tr]=s}else go(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ut(s),g=!1}else Un!==null&&(Od(Un),Un=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ye.current&1)!==0?yt===0&&(yt=3):Md())),s.updateQueue!==null&&(s.flags|=4),Ut(s),null);case 4:return Eo(),Id(r,s),r===null&&ba(s.stateNode.containerInfo),Ut(s),null;case 10:return Yh(s.type._context),Ut(s),null;case 17:return Zt(s.type)&&pu(),Ut(s),null;case 19:if(Ge(Ye),g=s.memoizedState,g===null)return Ut(s),null;if(h=(s.flags&128)!==0,v=g.rendering,v===null)if(h)Ha(g,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=Au(r),v!==null){for(s.flags|=128,Ha(g,!1),h=v.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return qe(Ye,Ye.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>So&&(s.flags|=128,h=!0,Ha(g,!1),s.lanes=4194304)}else{if(!h)if(r=Au(v),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ha(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Xe)return Ut(s),null}else 2*He()-g.renderingStartTime>So&&a!==1073741824&&(s.flags|=128,h=!0,Ha(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Ye.current,qe(Ye,h?a&1|2:a&1),s):(Ut(s),null);case 22:case 23:return Vd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(fn&1073741824)!==0&&(Ut(s),s.subtreeFlags&6&&(s.flags|=8192)):Ut(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function ET(r,s){switch(qh(s),s.tag){case 1:return Zt(s.type)&&pu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Eo(),Ge(Jt),Ge(Vt),id(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return nd(s),null;case 13:if(Ge(Ye),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));go()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Ye),null;case 4:return Eo(),null;case 10:return Yh(s.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var Ou=!1,Ft=!1,wT=typeof WeakSet=="function"?WeakSet:Set,le=null;function To(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){et(r,s,h)}else a.current=null}function Sd(r,s,a){try{a()}catch(h){et(r,s,h)}}var jg=!1;function TT(r,s){if(Vh=Yr,r=_m(),Ph(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,A=-1,x=-1,B=0,Y=0,J=r,X=null;t:for(;;){for(var se;J!==a||f!==0&&J.nodeType!==3||(A=v+f),J!==g||h!==0&&J.nodeType!==3||(x=v+h),J.nodeType===3&&(v+=J.nodeValue.length),(se=J.firstChild)!==null;)X=J,J=se;for(;;){if(J===r)break t;if(X===a&&++B===f&&(A=v),X===g&&++Y===h&&(x=v),(se=J.nextSibling)!==null)break;J=X,X=J.parentNode}J=se}a=A===-1||x===-1?null:{start:A,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mh={focusedElem:r,selectionRange:a},Yr=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ot=ce.memoizedState,M=s.stateNode,b=M.getSnapshotBeforeUpdate(s.elementType===s.type?he:Fn(s.type,he),ot);M.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){et(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ce=jg,jg=!1,ce}function qa(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Sd(s,a,g)}f=f.next}while(f!==h)}}function Lu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function Ad(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Bg(r){var s=r.alternate;s!==null&&(r.alternate=null,Bg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[tr],delete s[Oa],delete s[Bh],delete s[iT],delete s[sT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function zg(r){return r.tag===5||r.tag===3||r.tag===4}function $g(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||zg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Rd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=du));else if(h!==4&&(r=r.child,r!==null))for(Rd(r,s,a),r=r.sibling;r!==null;)Rd(r,s,a),r=r.sibling}function kd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(kd(r,s,a),r=r.sibling;r!==null;)kd(r,s,a),r=r.sibling}var Ct=null,jn=!1;function oi(r,s,a){for(a=a.child;a!==null;)Hg(r,s,a),a=a.sibling}function Hg(r,s,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Gi,a)}catch{}switch(a.tag){case 5:Ft||To(a,s);case 6:var h=Ct,f=jn;Ct=null,oi(r,s,a),Ct=h,jn=f,Ct!==null&&(jn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(jn?(r=Ct,a=a.stateNode,r.nodeType===8?jh(r.parentNode,a):r.nodeType===1&&jh(r,a),Ln(r)):jh(Ct,a.stateNode));break;case 4:h=Ct,f=jn,Ct=a.stateNode.containerInfo,jn=!0,oi(r,s,a),Ct=h,jn=f;break;case 0:case 11:case 14:case 15:if(!Ft&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&((g&2)!==0||(g&4)!==0)&&Sd(a,s,v),f=f.next}while(f!==h)}oi(r,s,a);break;case 1:if(!Ft&&(To(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(A){et(a,s,A)}oi(r,s,a);break;case 21:oi(r,s,a);break;case 22:a.mode&1?(Ft=(h=Ft)||a.memoizedState!==null,oi(r,s,a),Ft=h):oi(r,s,a);break;default:oi(r,s,a)}}function qg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new wT),s.forEach(function(h){var f=NT.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Bn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,jn=!1;break e;case 3:Ct=A.stateNode.containerInfo,jn=!0;break e;case 4:Ct=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));Hg(g,v,f),Ct=null,jn=!1;var x=f.alternate;x!==null&&(x.return=null),f.return=null}catch(B){et(f,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Wg(s,r),s=s.sibling}function Wg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Bn(s,r),ir(r),h&4){try{qa(3,r,r.return),Lu(3,r)}catch(he){et(r,r.return,he)}try{qa(5,r,r.return)}catch(he){et(r,r.return,he)}}break;case 1:Bn(s,r),ir(r),h&512&&a!==null&&To(a,a.return);break;case 5:if(Bn(s,r),ir(r),h&512&&a!==null&&To(a,a.return),r.flags&32){var f=r.stateNode;try{$r(f,"")}catch(he){et(r,r.return,he)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,A=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&na(f,g),ha(A,v);var B=ha(A,g);for(v=0;v<x.length;v+=2){var Y=x[v],J=x[v+1];Y==="style"?la(f,J):Y==="dangerouslySetInnerHTML"?oa(f,J):Y==="children"?$r(f,J):ne(f,Y,J,B)}switch(A){case"input":ra(f,g);break;case"textarea":Ms(f,g);break;case"select":var X=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?yr(f,!!g.multiple,se,!1):X!==!!g.multiple&&(g.defaultValue!=null?yr(f,!!g.multiple,g.defaultValue,!0):yr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Oa]=g}catch(he){et(r,r.return,he)}}break;case 6:if(Bn(s,r),ir(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(he){et(r,r.return,he)}}break;case 3:if(Bn(s,r),ir(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(he){et(r,r.return,he)}break;case 4:Bn(s,r),ir(r);break;case 13:Bn(s,r),ir(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(xd=He())),h&4&&qg(r);break;case 22:if(Y=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(B=Ft)||Y,Bn(s,r),Ft=B):Bn(s,r),ir(r),h&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!Y&&(r.mode&1)!==0)for(le=r,Y=r.child;Y!==null;){for(J=le=Y;le!==null;){switch(X=le,se=X.child,X.tag){case 0:case 11:case 14:case 15:qa(4,X,X.return);break;case 1:To(X,X.return);var ce=X.stateNode;if(typeof ce.componentWillUnmount=="function"){h=X,a=X.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){et(h,a,he)}}break;case 5:To(X,X.return);break;case 22:if(X.memoizedState!==null){Qg(J);continue}}se!==null?(se.return=X,le=se):Qg(J)}Y=Y.sibling}e:for(Y=null,J=r;;){if(J.tag===5){if(Y===null){Y=J;try{f=J.stateNode,B?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,x=J.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null,A.style.display=aa("display",v))}catch(he){et(r,r.return,he)}}}else if(J.tag===6){if(Y===null)try{J.stateNode.nodeValue=B?"":J.memoizedProps}catch(he){et(r,r.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;Y===J&&(Y=null),J=J.return}Y===J&&(Y=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Bn(s,r),ir(r),h&4&&qg(r);break;case 21:break;default:Bn(s,r),ir(r)}}function ir(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(zg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&($r(f,""),h.flags&=-33);var g=$g(r);kd(r,g,f);break;case 3:case 4:var v=h.stateNode.containerInfo,A=$g(r);Rd(r,A,v);break;default:throw Error(t(161))}}catch(x){et(r,r.return,x)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function IT(r,s,a){le=r,Kg(r)}function Kg(r,s,a){for(var h=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&h){var v=f.memoizedState!==null||Ou;if(!v){var A=f.alternate,x=A!==null&&A.memoizedState!==null||Ft;A=Ou;var B=Ft;if(Ou=v,(Ft=x)&&!B)for(le=f;le!==null;)v=le,x=v.child,v.tag===22&&v.memoizedState!==null?Xg(f):x!==null?(x.return=v,le=x):Xg(f);for(;g!==null;)le=g,Kg(g),g=g.sibling;le=f,Ou=A,Ft=B}Gg(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,le=g):Gg(r)}}function Gg(r){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Lu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ft)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Qm(s,g,h);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Qm(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var x=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var Y=B.memoizedState;if(Y!==null){var J=Y.dehydrated;J!==null&&Ln(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&Ad(s)}catch(X){et(s,s.return,X)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function Qg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function Xg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Lu(4,s)}catch(x){et(s,a,x)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(x){et(s,f,x)}}var g=s.return;try{Ad(s)}catch(x){et(s,g,x)}break;case 5:var v=s.return;try{Ad(s)}catch(x){et(s,v,x)}}}catch(x){et(s,s.return,x)}if(s===r){le=null;break}var A=s.sibling;if(A!==null){A.return=s.return,le=A;break}le=s.return}}var ST=Math.ceil,Vu=ue.ReactCurrentDispatcher,Pd=ue.ReactCurrentOwner,Sn=ue.ReactCurrentBatchConfig,Le=0,St=null,ct=null,xt=0,fn=0,Io=ti(0),yt=0,Wa=null,ls=0,Mu=0,Cd=0,Ka=null,tn=null,xd=0,So=1/0,br=null,Uu=!1,Nd=null,ai=null,Fu=!1,li=null,ju=0,Ga=0,bd=null,Bu=-1,zu=0;function Kt(){return(Le&6)!==0?He():Bu!==-1?Bu:Bu=He()}function ui(r){return(r.mode&1)===0?1:(Le&2)!==0&&xt!==0?xt&-xt:aT.transition!==null?(zu===0&&(zu=Xi()),zu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:Ta(r.type)),r)}function zn(r,s,a,h){if(50<Ga)throw Ga=0,bd=null,Error(t(185));Kr(r,a,h),((Le&2)===0||r!==St)&&(r===St&&((Le&2)===0&&(Mu|=a),yt===4&&ci(r,xt)),nn(r,h),a===1&&Le===0&&(s.mode&1)===0&&(So=He()+500,gu&&ri()))}function nn(r,s){var a=r.callbackNode;Er(r,s);var h=Qi(r,r===St?xt:0);if(h===0)a!==null&&ya(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&ya(a),s===1)r.tag===0?oT(Jg.bind(null,r)):Mm(Jg.bind(null,r)),nT(function(){(Le&6)===0&&ri()}),a=null;else{switch(Qr(h)){case 1:a=Ki;break;case 4:a=Hr;break;case 16:a=yn;break;case 536870912:a=zl;break;default:a=yn}a=oy(a,Yg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Yg(r,s){if(Bu=-1,zu=0,(Le&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Ao()&&r.callbackNode!==a)return null;var h=Qi(r,r===St?xt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=$u(r,h);else{s=h;var f=Le;Le|=2;var g=ey();(St!==r||xt!==s)&&(br=null,So=He()+500,cs(r,s));do try{kT();break}catch(A){Zg(r,A)}while(!0);Xh(),Vu.current=g,Le=f,ct!==null?s=0:(St=null,xt=0,s=yt)}if(s!==0){if(s===2&&(f=ln(r),f!==0&&(h=f,s=Dd(r,f))),s===1)throw a=Wa,cs(r,0),ci(r,h),nn(r,He()),a;if(s===6)ci(r,h);else{if(f=r.current.alternate,(h&30)===0&&!AT(f)&&(s=$u(r,h),s===2&&(g=ln(r),g!==0&&(h=g,s=Dd(r,g))),s===1))throw a=Wa,cs(r,0),ci(r,h),nn(r,He()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:hs(r,tn,br);break;case 3:if(ci(r,h),(h&130023424)===h&&(s=xd+500-He(),10<s)){if(Qi(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Kt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Fh(hs.bind(null,r,tn,br),s);break}hs(r,tn,br);break;case 4:if(ci(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var v=31-Ht(h);g=1<<v,v=s[v],v>f&&(f=v),h&=~g}if(h=f,h=He()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*ST(h/1960))-h,10<h){r.timeoutHandle=Fh(hs.bind(null,r,tn,br),h);break}hs(r,tn,br);break;case 5:hs(r,tn,br);break;default:throw Error(t(329))}}}return nn(r,He()),r.callbackNode===a?Yg.bind(null,r):null}function Dd(r,s){var a=Ka;return r.current.memoizedState.isDehydrated&&(cs(r,s).flags|=256),r=$u(r,s),r!==2&&(s=tn,tn=a,s!==null&&Od(s)),r}function Od(r){tn===null?tn=r:tn.push.apply(tn,r)}function AT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!Mn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ci(r,s){for(s&=~Cd,s&=~Mu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Ht(s),h=1<<a;r[a]=-1,s&=~h}}function Jg(r){if((Le&6)!==0)throw Error(t(327));Ao();var s=Qi(r,0);if((s&1)===0)return nn(r,He()),null;var a=$u(r,s);if(r.tag!==0&&a===2){var h=ln(r);h!==0&&(s=h,a=Dd(r,h))}if(a===1)throw a=Wa,cs(r,0),ci(r,s),nn(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,hs(r,tn,br),nn(r,He()),null}function Ld(r,s){var a=Le;Le|=1;try{return r(s)}finally{Le=a,Le===0&&(So=He()+500,gu&&ri())}}function us(r){li!==null&&li.tag===0&&(Le&6)===0&&Ao();var s=Le;Le|=1;var a=Sn.transition,h=Ne;try{if(Sn.transition=null,Ne=1,r)return r()}finally{Ne=h,Sn.transition=a,Le=s,(Le&6)===0&&ri()}}function Vd(){fn=Io.current,Ge(Io)}function cs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,tT(a)),ct!==null)for(a=ct.return;a!==null;){var h=a;switch(qh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&pu();break;case 3:Eo(),Ge(Jt),Ge(Vt),id();break;case 5:nd(h);break;case 4:Eo();break;case 13:Ge(Ye);break;case 19:Ge(Ye);break;case 10:Yh(h.type._context);break;case 22:case 23:Vd()}a=a.return}if(St=r,ct=r=hi(r.current,null),xt=fn=s,yt=0,Wa=null,Cd=Mu=ls=0,tn=Ka=null,ss!==null){for(s=0;s<ss.length;s++)if(a=ss[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,h.next=v}a.pending=h}ss=null}return r}function Zg(r,s){do{var a=ct;try{if(Xh(),Ru.current=xu,ku){for(var h=Je.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}ku=!1}if(as=0,It=gt=Je=null,ja=!1,Ba=0,Pd.current=null,a===null||a.return===null){yt=1,Wa=s,ct=null;break}e:{var g=r,v=a.return,A=a,x=s;if(s=xt,A.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var B=x,Y=A,J=Y.tag;if((Y.mode&1)===0&&(J===0||J===11||J===15)){var X=Y.alternate;X?(Y.updateQueue=X.updateQueue,Y.memoizedState=X.memoizedState,Y.lanes=X.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var se=Sg(v);if(se!==null){se.flags&=-257,Ag(se,v,A,g,s),se.mode&1&&Ig(g,B,s),s=se,x=B;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(x),s.updateQueue=he}else ce.add(x);break e}else{if((s&1)===0){Ig(g,B,s),Md();break e}x=Error(t(426))}}else if(Xe&&A.mode&1){var ot=Sg(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Ag(ot,v,A,g,s),Gh(wo(x,A));break e}}g=x=wo(x,A),yt!==4&&(yt=2),Ka===null?Ka=[g]:Ka.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var M=wg(g,x,s);Gm(g,M);break e;case 1:A=x;var b=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ai===null||!ai.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=Tg(g,A,s);Gm(g,ee);break e}}g=g.return}while(g!==null)}ny(a)}catch(de){s=de,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function ey(){var r=Vu.current;return Vu.current=xu,r===null?xu:r}function Md(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||(ls&268435455)===0&&(Mu&268435455)===0||ci(St,xt)}function $u(r,s){var a=Le;Le|=2;var h=ey();(St!==r||xt!==s)&&(br=null,cs(r,s));do try{RT();break}catch(f){Zg(r,f)}while(!0);if(Xh(),Le=a,Vu.current=h,ct!==null)throw Error(t(261));return St=null,xt=0,yt}function RT(){for(;ct!==null;)ty(ct)}function kT(){for(;ct!==null&&!jl();)ty(ct)}function ty(r){var s=sy(r.alternate,r,fn);r.memoizedProps=r.pendingProps,s===null?ny(r):ct=s,Pd.current=null}function ny(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=vT(a,s,fn),a!==null){ct=a;return}}else{if(a=ET(a,s),a!==null){a.flags&=32767,ct=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ct=null;return}}if(s=s.sibling,s!==null){ct=s;return}ct=s=r}while(s!==null);yt===0&&(yt=5)}function hs(r,s,a){var h=Ne,f=Sn.transition;try{Sn.transition=null,Ne=1,PT(r,s,a,h)}finally{Sn.transition=f,Ne=h}return null}function PT(r,s,a,h){do Ao();while(li!==null);if((Le&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===St&&(ct=St=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fu||(Fu=!0,oy(yn,function(){return Ao(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Sn.transition,Sn.transition=null;var v=Ne;Ne=1;var A=Le;Le|=4,Pd.current=null,TT(r,a),Wg(a,r),G0(Mh),Yr=!!Vh,Mh=Vh=null,r.current=a,IT(a),Eh(),Le=A,Ne=v,Sn.transition=g}else r.current=a;if(Fu&&(Fu=!1,li=r,ju=f),g=r.pendingLanes,g===0&&(ai=null),$l(a.stateNode),nn(r,He()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Uu)throw Uu=!1,r=Nd,Nd=null,r;return(ju&1)!==0&&r.tag!==0&&Ao(),g=r.pendingLanes,(g&1)!==0?r===bd?Ga++:(Ga=0,bd=r):Ga=0,ri(),null}function Ao(){if(li!==null){var r=Qr(ju),s=Sn.transition,a=Ne;try{if(Sn.transition=null,Ne=16>r?16:r,li===null)var h=!1;else{if(r=li,li=null,ju=0,(Le&6)!==0)throw Error(t(331));var f=Le;for(Le|=4,le=r.current;le!==null;){var g=le,v=g.child;if((le.flags&16)!==0){var A=g.deletions;if(A!==null){for(var x=0;x<A.length;x++){var B=A[x];for(le=B;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:qa(8,Y,g)}var J=Y.child;if(J!==null)J.return=Y,le=J;else for(;le!==null;){Y=le;var X=Y.sibling,se=Y.return;if(Bg(Y),Y===B){le=null;break}if(X!==null){X.return=se,le=X;break}le=se}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ot=he.sibling;he.sibling=null,he=ot}while(he!==null)}}le=g}}if((g.subtreeFlags&2064)!==0&&v!==null)v.return=g,le=v;else e:for(;le!==null;){if(g=le,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:qa(9,g,g.return)}var M=g.sibling;if(M!==null){M.return=g.return,le=M;break e}le=g.return}}var b=r.current;for(le=b;le!==null;){v=le;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,le=j;else e:for(v=b;le!==null;){if(A=le,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Lu(9,A)}}catch(de){et(A,A.return,de)}if(A===v){le=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,le=ee;break e}le=A.return}}if(Le=f,ri(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Gi,r)}catch{}h=!0}return h}finally{Ne=a,Sn.transition=s}}return!1}function ry(r,s,a){s=wo(a,s),s=wg(r,s,1),r=si(r,s,1),s=Kt(),r!==null&&(Kr(r,1,s),nn(r,s))}function et(r,s,a){if(r.tag===3)ry(r,r,a);else for(;s!==null;){if(s.tag===3){ry(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ai===null||!ai.has(h))){r=wo(a,r),r=Tg(s,r,1),s=si(s,r,1),r=Kt(),s!==null&&(Kr(s,1,r),nn(s,r));break}}s=s.return}}function CT(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,St===r&&(xt&a)===a&&(yt===4||yt===3&&(xt&130023424)===xt&&500>He()-xd?cs(r,0):Cd|=a),nn(r,s)}function iy(r,s){s===0&&((r.mode&1)===0?s=1:(s=Ks,Ks<<=1,(Ks&130023424)===0&&(Ks=4194304)));var a=Kt();r=Cr(r,s),r!==null&&(Kr(r,s,a),nn(r,a))}function xT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),iy(r,a)}function NT(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),iy(r,a)}var sy;sy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Jt.current)en=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return en=!1,_T(r,s,a);en=(r.flags&131072)!==0}else en=!1,Xe&&(s.flags&1048576)!==0&&Um(s,_u,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Du(r,s),r=s.pendingProps;var f=fo(s,Vt.current);vo(s,a),f=ad(null,s,h,r,f,a);var g=ld();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zt(h)?(g=!0,mu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ed(s),f.updater=Nu,s.stateNode=f,f._reactInternals=s,pd(s,h,r,a),s=_d(null,s,h,!0,g,a)):(s.tag=0,Xe&&g&&Hh(s),Wt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Du(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=DT(h),r=Fn(h,r),f){case 0:s=yd(null,s,h,r,a);break e;case 1:s=Ng(null,s,h,r,a);break e;case 11:s=Rg(null,s,h,r,a);break e;case 14:s=kg(null,s,h,Fn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Fn(h,f),yd(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Fn(h,f),Ng(r,s,h,f,a);case 3:e:{if(bg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,Km(r,s),Su(s,h,null,a);var v=s.memoizedState;if(h=v.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=wo(Error(t(423)),s),s=Dg(r,s,h,a,f);break e}else if(h!==f){f=wo(Error(t(424)),s),s=Dg(r,s,h,a,f);break e}else for(dn=ei(s.stateNode.containerInfo.firstChild),hn=s,Xe=!0,Un=null,a=qm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(go(),h===f){s=Nr(r,s,a);break e}Wt(r,s,h,a)}s=s.child}return s;case 5:return Xm(s),r===null&&Kh(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,Uh(h,f)?v=null:g!==null&&Uh(h,g)&&(s.flags|=32),xg(r,s),Wt(r,s,v,a),s.child;case 6:return r===null&&Kh(s),null;case 13:return Og(r,s,a);case 4:return td(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=yo(s,null,h,a):Wt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Fn(h,f),Rg(r,s,h,f,a);case 7:return Wt(r,s,s.pendingProps,a),s.child;case 8:return Wt(r,s,s.pendingProps.children,a),s.child;case 12:return Wt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,qe(wu,h._currentValue),h._currentValue=v,g!==null)if(Mn(g.value,v)){if(g.children===f.children&&!Jt.current){s=Nr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){v=g.child;for(var x=A.firstContext;x!==null;){if(x.context===h){if(g.tag===1){x=xr(-1,a&-a),x.tag=2;var B=g.updateQueue;if(B!==null){B=B.shared;var Y=B.pending;Y===null?x.next=x:(x.next=Y.next,Y.next=x),B.pending=x}}g.lanes|=a,x=g.alternate,x!==null&&(x.lanes|=a),Jh(g.return,a,s),A.lanes|=a;break}x=x.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),Jh(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Wt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,vo(s,a),f=Tn(f),h=h(f),s.flags|=1,Wt(r,s,h,a),s.child;case 14:return h=s.type,f=Fn(h,s.pendingProps),f=Fn(h.type,f),kg(r,s,h,f,a);case 15:return Pg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Fn(h,f),Du(r,s),s.tag=1,Zt(h)?(r=!0,mu(s)):r=!1,vo(s,a),vg(s,h,f),pd(s,h,f,a),_d(null,s,h,!0,r,a);case 19:return Vg(r,s,a);case 22:return Cg(r,s,a)}throw Error(t(156,s.tag))};function oy(r,s){return qs(r,s)}function bT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,a,h){return new bT(r,s,a,h)}function Ud(r){return r=r.prototype,!(!r||!r.isReactComponent)}function DT(r){if(typeof r=="function")return Ud(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===Ot)return 14}return 2}function hi(r,s){var a=r.alternate;return a===null?(a=An(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Hu(r,s,a,h,f,g){var v=2;if(h=r,typeof r=="function")Ud(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case C:return ds(a.children,f,g,s);case I:v=8,f|=8;break;case k:return r=An(12,a,s,f|2),r.elementType=k,r.lanes=g,r;case R:return r=An(13,a,s,f),r.elementType=R,r.lanes=g,r;case it:return r=An(19,a,s,f),r.elementType=it,r.lanes=g,r;case Be:return qu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:v=10;break e;case D:v=9;break e;case L:v=11;break e;case Ot:v=14;break e;case Lt:v=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(v,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function ds(r,s,a,h){return r=An(7,r,h,s),r.lanes=a,r}function qu(r,s,a,h){return r=An(22,r,h,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function Fd(r,s,a){return r=An(6,r,null,s),r.lanes=a,r}function jd(r,s,a){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function OT(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wr(0),this.expirationTimes=Wr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Bd(r,s,a,h,f,g,v,A,x){return r=new OT(r,s,a,A,x),s===1?(s=1,g===!0&&(s|=8)):s=0,g=An(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(g),r}function LT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function ay(r){if(!r)return ni;r=r._reactInternals;e:{if(xn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Zt(a))return Lm(r,a,s)}return s}function ly(r,s,a,h,f,g,v,A,x){return r=Bd(a,h,!0,r,f,g,v,A,x),r.context=ay(null),a=r.current,h=Kt(),f=ui(a),g=xr(h,f),g.callback=s??null,si(a,g,f),r.current.lanes=f,Kr(r,f,h),nn(r,h),r}function Wu(r,s,a,h){var f=s.current,g=Kt(),v=ui(f);return a=ay(a),s.context===null?s.context=a:s.pendingContext=a,s=xr(g,v),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=si(f,s,v),r!==null&&(zn(r,f,v,g),Iu(r,f,v)),v}function Ku(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function uy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function zd(r,s){uy(r,s),(r=r.alternate)&&uy(r,s)}function VT(){return null}var cy=typeof reportError=="function"?reportError:function(r){console.error(r)};function $d(r){this._internalRoot=r}Gu.prototype.render=$d.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Wu(r,s,null,null)},Gu.prototype.unmount=$d.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;us(function(){Wu(null,r,null,null)}),s[Ar]=null}};function Gu(r){this._internalRoot=r}Gu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Gl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Yn.length&&s!==0&&s<Yn[a].priority;a++);Yn.splice(a,0,r),a===0&&Yl(r)}};function Hd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Qu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function hy(){}function MT(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var B=Ku(v);g.call(B)}}var v=ly(s,h,r,0,null,!1,!1,"",hy);return r._reactRootContainer=v,r[Ar]=v.current,ba(r.nodeType===8?r.parentNode:r),us(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var A=h;h=function(){var B=Ku(x);A.call(B)}}var x=Bd(r,0,!1,null,null,!1,!1,"",hy);return r._reactRootContainer=x,r[Ar]=x.current,ba(r.nodeType===8?r.parentNode:r),us(function(){Wu(s,x,a,h)}),x}function Xu(r,s,a,h,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var A=f;f=function(){var x=Ku(v);A.call(x)}}Wu(s,v,r,f)}else v=MT(a,s,r,f,h);return Ku(v)}Wl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=qr(s.pendingLanes);a!==0&&(Gr(s,a|1),nn(s,He()),(Le&6)===0&&(So=He()+500,ri()))}break;case 13:us(function(){var h=Cr(r,1);if(h!==null){var f=Kt();zn(h,r,1,f)}}),zd(r,1)}},Gs=function(r){if(r.tag===13){var s=Cr(r,134217728);if(s!==null){var a=Kt();zn(s,r,134217728,a)}zd(r,134217728)}},Kl=function(r){if(r.tag===13){var s=ui(r),a=Cr(r,s);if(a!==null){var h=Kt();zn(a,r,s,h)}zd(r,s)}},Gl=function(){return Ne},Ql=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Fs=function(r,s,a){switch(s){case"input":if(ra(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=fu(h);if(!f)throw Error(t(90));Ds(h),ra(h,f)}}}break;case"textarea":Ms(r,a);break;case"select":s=a.value,s!=null&&yr(r,!!a.multiple,s,!1)}},$i=Ld,fa=us;var UT={usingClientEntryPoint:!1,Events:[La,co,fu,Qn,da,Ld]},Qa={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FT={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ga(r),r===null?null:r.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||VT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yu.isDisabled&&Yu.supportsFiber)try{Gi=Yu.inject(FT),an=Yu}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UT,rn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(s))throw Error(t(200));return LT(r,s,null,a)},rn.createRoot=function(r,s){if(!Hd(r))throw Error(t(299));var a=!1,h="",f=cy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Bd(r,1,!1,null,null,a,!1,h,f),r[Ar]=s.current,ba(r.nodeType===8?r.parentNode:r),new $d(s)},rn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ga(s),r=r===null?null:r.stateNode,r},rn.flushSync=function(r){return us(r)},rn.hydrate=function(r,s,a){if(!Qu(s))throw Error(t(200));return Xu(null,r,s,!0,a)},rn.hydrateRoot=function(r,s,a){if(!Hd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",v=cy;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=ly(s,null,r,1,a??null,f,!1,g,v),r[Ar]=s.current,ba(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Gu(s)},rn.render=function(r,s,a){if(!Qu(s))throw Error(t(200));return Xu(null,r,s,!1,a)},rn.unmountComponentAtNode=function(r){if(!Qu(r))throw Error(t(40));return r._reactRootContainer?(us(function(){Xu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},rn.unstable_batchedUpdates=Ld,rn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Qu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Xu(r,s,a,!1,h)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var vy;function _v(){if(vy)return Kd.exports;vy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kd.exports=GT(),Kd.exports}var Ey;function QT(){if(Ey)return Ju;Ey=1;var n=_v();return Ju.createRoot=n.createRoot,Ju.hydrateRoot=n.hydrateRoot,Ju}var XT=QT();const YT=gv(XT);_v();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},dl.apply(this,arguments)}var wi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(wi||(wi={}));const wy="popstate";function JT(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:d}=i.location;return mf("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:wc(o)}return eI(e,t,null,n)}function lt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function vv(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZT(){return Math.random().toString(36).substr(2,8)}function Ty(n,e){return{usr:n.state,key:n.key,idx:e}}function mf(n,e,t,i){return t===void 0&&(t=null),dl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Wo(e):e,{state:t,key:e&&e.key||i||ZT()})}function wc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Wo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function eI(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d=wi.Pop,p=null,y=E();y==null&&(y=0,c.replaceState(dl({},c.state,{idx:y}),""));function E(){return(c.state||{idx:null}).idx}function T(){d=wi.Pop;let U=E(),W=U==null?null:U-y;y=U,p&&p({action:d,location:H.location,delta:W})}function P(U,W){d=wi.Push;let Z=mf(H.location,U,W);y=E()+1;let ne=Ty(Z,y),ue=H.createHref(Z);try{c.pushState(ne,"",ue)}catch(Re){if(Re instanceof DOMException&&Re.name==="DataCloneError")throw Re;o.location.assign(ue)}l&&p&&p({action:d,location:H.location,delta:1})}function F(U,W){d=wi.Replace;let Z=mf(H.location,U,W);y=E();let ne=Ty(Z,y),ue=H.createHref(Z);c.replaceState(ne,"",ue),l&&p&&p({action:d,location:H.location,delta:0})}function $(U){let W=o.location.origin!=="null"?o.location.origin:o.location.href,Z=typeof U=="string"?U:wc(U);return Z=Z.replace(/ $/,"%20"),lt(W,"No window.location.(origin|href) available to create URL for href: "+Z),new URL(Z,W)}let H={get action(){return d},get location(){return n(o,c)},listen(U){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(wy,T),p=U,()=>{o.removeEventListener(wy,T),p=null}},createHref(U){return e(o,U)},createURL:$,encodeLocation(U){let W=$(U);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:P,replace:F,go(U){return c.go(U)}};return H}var Iy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Iy||(Iy={}));function tI(n,e,t){return t===void 0&&(t="/"),nI(n,e,t)}function nI(n,e,t,i){let o=typeof e=="string"?Wo(e):e,l=Gf(o.pathname||"/",t);if(l==null)return null;let c=Ev(n);rI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=mI(l);d=dI(c[p],y)}return d}function Ev(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(lt(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Ii([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(lt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Ev(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:cI(y,l.index),routesMeta:E})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of wv(l.path))o(l,c,p)}),e}function wv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=wv(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function rI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:hI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const iI=/^:[\w-]+$/,sI=3,oI=2,aI=1,lI=10,uI=-2,Sy=n=>n==="*";function cI(n,e){let t=n.split("/"),i=t.length;return t.some(Sy)&&(i+=uI),e&&(i+=oI),t.filter(o=>!Sy(o)).reduce((o,l)=>o+(iI.test(l)?sI:l===""?aI:lI),i)}function hI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function dI(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=fI({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),P=p.route;if(!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Ii([l,T.pathname]),pathnameBase:vI(Ii([l,T.pathnameBase])),route:P}),T.pathnameBase!=="/"&&(l=Ii([l,T.pathnameBase]))}return c}function fI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=pI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,E,T)=>{let{paramName:P,isOptional:F}=E;if(P==="*"){let H=d[T]||"";c=l.slice(0,l.length-H.length).replace(/(.)\/+$/,"$1")}const $=d[T];return F&&!$?y[P]=void 0:y[P]=($||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function pI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),vv(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function mI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vv(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Gf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function gI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Wo(n):n;return{pathname:t?t.startsWith("/")?t:yI(t,e):e,search:EI(i),hash:wI(o)}}function yI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Xd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _I(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Qf(n,e){let t=_I(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Xf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Wo(n):(o=dl({},n),lt(!o.pathname||!o.pathname.includes("?"),Xd("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),Xd("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),Xd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let P=c.split("/");for(;P[0]==="..";)P.shift(),T-=1;o.pathname=P.join("/")}d=T>=0?e[T]:"/"}let p=gI(o,d),y=c&&c!=="/"&&c.endsWith("/"),E=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}const Ii=n=>n.join("/").replace(/\/\/+/g,"/"),vI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),EI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,wI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function TI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Tv=["post","put","patch","delete"];new Set(Tv);const II=["get",...Tv];new Set(II);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},fl.apply(this,arguments)}const Yf=G.createContext(null),SI=G.createContext(null),Vi=G.createContext(null),zc=G.createContext(null),Mi=G.createContext({outlet:null,matches:[],isDataRoute:!1}),Iv=G.createContext(null);function AI(n,e){let{relative:t}=e===void 0?{}:e;Ko()||lt(!1);let{basename:i,navigator:o}=G.useContext(Vi),{hash:l,pathname:c,search:d}=Av(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Ii([i,c])),o.createHref({pathname:p,search:d,hash:l})}function Ko(){return G.useContext(zc)!=null}function Is(){return Ko()||lt(!1),G.useContext(zc).location}function Sv(n){G.useContext(Vi).static||G.useLayoutEffect(n)}function Ss(){let{isDataRoute:n}=G.useContext(Mi);return n?UI():RI()}function RI(){Ko()||lt(!1);let n=G.useContext(Yf),{basename:e,future:t,navigator:i}=G.useContext(Vi),{matches:o}=G.useContext(Mi),{pathname:l}=Is(),c=JSON.stringify(Qf(o,t.v7_relativeSplatPath)),d=G.useRef(!1);return Sv(()=>{d.current=!0}),G.useCallback(function(y,E){if(E===void 0&&(E={}),!d.current)return;if(typeof y=="number"){i.go(y);return}let T=Xf(y,JSON.parse(c),l,E.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Ii([e,T.pathname])),(E.replace?i.replace:i.push)(T,E.state,E)},[e,i,c,l,n])}function Av(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=G.useContext(Vi),{matches:o}=G.useContext(Mi),{pathname:l}=Is(),c=JSON.stringify(Qf(o,i.v7_relativeSplatPath));return G.useMemo(()=>Xf(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function kI(n,e){return PI(n,e)}function PI(n,e,t,i){Ko()||lt(!1);let{navigator:o,static:l}=G.useContext(Vi),{matches:c}=G.useContext(Mi),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let y=d?d.pathnameBase:"/";d&&d.route;let E=Is(),T;if(e){var P;let W=typeof e=="string"?Wo(e):e;y==="/"||(P=W.pathname)!=null&&P.startsWith(y)||lt(!1),T=W}else T=E;let F=T.pathname||"/",$=F;if(y!=="/"){let W=y.replace(/^\//,"").split("/");$="/"+F.replace(/^\//,"").split("/").slice(W.length).join("/")}let H=tI(n,{pathname:$}),U=DI(H&&H.map(W=>Object.assign({},W,{params:Object.assign({},p,W.params),pathname:Ii([y,o.encodeLocation?o.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?y:Ii([y,o.encodeLocation?o.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),c,t,i);return e&&U?G.createElement(zc.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:wi.Pop}},U):U}function CI(){let n=MI(),e=TI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:o},t):null,null)}const xI=G.createElement(CI,null);class NI extends G.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?G.createElement(Mi.Provider,{value:this.props.routeContext},G.createElement(Iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bI(n){let{routeContext:e,match:t,children:i}=n,o=G.useContext(Yf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),G.createElement(Mi.Provider,{value:e},i)}function DI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let E=c.findIndex(T=>T.route.id&&(d==null?void 0:d[T.route.id])!==void 0);E>=0||lt(!1),c=c.slice(0,Math.min(c.length,E+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let E=0;E<c.length;E++){let T=c[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=E),T.route.id){let{loaderData:P,errors:F}=t,$=T.route.loader&&P[T.route.id]===void 0&&(!F||F[T.route.id]===void 0);if(T.route.lazy||$){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((E,T,P)=>{let F,$=!1,H=null,U=null;t&&(F=d&&T.route.id?d[T.route.id]:void 0,H=T.route.errorElement||xI,p&&(y<0&&P===0?(FI("route-fallback"),$=!0,U=null):y===P&&($=!0,U=T.route.hydrateFallbackElement||null)));let W=e.concat(c.slice(0,P+1)),Z=()=>{let ne;return F?ne=H:$?ne=U:T.route.Component?ne=G.createElement(T.route.Component,null):T.route.element?ne=T.route.element:ne=E,G.createElement(bI,{match:T,routeContext:{outlet:E,matches:W,isDataRoute:t!=null},children:ne})};return t&&(T.route.ErrorBoundary||T.route.errorElement||P===0)?G.createElement(NI,{location:t.location,revalidation:t.revalidation,component:H,error:F,children:Z(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):Z()},null)}var Rv=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Rv||{}),kv=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(kv||{});function OI(n){let e=G.useContext(Yf);return e||lt(!1),e}function LI(n){let e=G.useContext(SI);return e||lt(!1),e}function VI(n){let e=G.useContext(Mi);return e||lt(!1),e}function Pv(n){let e=VI(),t=e.matches[e.matches.length-1];return t.route.id||lt(!1),t.route.id}function MI(){var n;let e=G.useContext(Iv),t=LI(),i=Pv();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function UI(){let{router:n}=OI(Rv.UseNavigateStable),e=Pv(kv.UseNavigateStable),t=G.useRef(!1);return Sv(()=>{t.current=!0}),G.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,fl({fromRouteId:e},l)))},[n,e])}const Ay={};function FI(n,e,t){Ay[n]||(Ay[n]=!0)}function jI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function BI(n){let{to:e,replace:t,state:i,relative:o}=n;Ko()||lt(!1);let{future:l,static:c}=G.useContext(Vi),{matches:d}=G.useContext(Mi),{pathname:p}=Is(),y=Ss(),E=Xf(e,Qf(d,l.v7_relativeSplatPath),p,o==="path"),T=JSON.stringify(E);return G.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function pi(n){lt(!1)}function zI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=wi.Pop,navigator:l,static:c=!1,future:d}=n;Ko()&&lt(!1);let p=e.replace(/^\/*/,"/"),y=G.useMemo(()=>({basename:p,navigator:l,static:c,future:fl({v7_relativeSplatPath:!1},d)}),[p,d,l,c]);typeof i=="string"&&(i=Wo(i));let{pathname:E="/",search:T="",hash:P="",state:F=null,key:$="default"}=i,H=G.useMemo(()=>{let U=Gf(E,p);return U==null?null:{location:{pathname:U,search:T,hash:P,state:F,key:$},navigationType:o}},[p,E,T,P,F,$,o]);return H==null?null:G.createElement(Vi.Provider,{value:y},G.createElement(zc.Provider,{children:t,value:H}))}function Ry(n){let{children:e,location:t}=n;return kI(gf(e),t)}new Promise(()=>{});function gf(n,e){e===void 0&&(e=[]);let t=[];return G.Children.forEach(n,(i,o)=>{if(!G.isValidElement(i))return;let l=[...e,o];if(i.type===G.Fragment){t.push.apply(t,gf(i.props.children,l));return}i.type!==pi&&lt(!1),!i.props.index||!i.props.children||lt(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=gf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yf(){return yf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},yf.apply(this,arguments)}function $I(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function HI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qI(n,e){return n.button===0&&(!e||e==="_self")&&!HI(n)}function _f(n){return n===void 0&&(n=""),new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let i=n[t];return e.concat(Array.isArray(i)?i.map(o=>[t,o]):[[t,i]])},[]))}function WI(n,e){let t=_f(n);return e&&e.forEach((i,o)=>{t.has(o)||e.getAll(o).forEach(l=>{t.append(o,l)})}),t}const KI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],GI="6";try{window.__reactRouterVersion=GI}catch{}const QI="startTransition",ky=qT[QI];function XI(n){let{basename:e,children:t,future:i,window:o}=n,l=G.useRef();l.current==null&&(l.current=JT({window:o,v5Compat:!0}));let c=l.current,[d,p]=G.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},E=G.useCallback(T=>{y&&ky?ky(()=>p(T)):p(T)},[p,y]);return G.useLayoutEffect(()=>c.listen(E),[c,E]),G.useEffect(()=>jI(i),[i]),G.createElement(zI,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:i})}const YI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mi=G.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:E,viewTransition:T}=e,P=$I(e,KI),{basename:F}=G.useContext(Vi),$,H=!1;if(typeof y=="string"&&JI.test(y)&&($=y,YI))try{let ne=new URL(window.location.href),ue=y.startsWith("//")?new URL(ne.protocol+y):new URL(y),Re=Gf(ue.pathname,F);ue.origin===ne.origin&&Re!=null?y=Re+ue.search+ue.hash:H=!0}catch{}let U=AI(y,{relative:o}),W=ZI(y,{replace:c,state:d,target:p,preventScrollReset:E,relative:o,viewTransition:T});function Z(ne){i&&i(ne),ne.defaultPrevented||W(ne)}return G.createElement("a",yf({},P,{href:$||U,onClick:H||l?i:Z,ref:t,target:p}))});var Py;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Py||(Py={}));var Cy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Cy||(Cy={}));function ZI(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,p=Ss(),y=Is(),E=Av(n,{relative:c});return G.useCallback(T=>{if(qI(T,t)){T.preventDefault();let P=i!==void 0?i:wc(y)===wc(E);p(n,{replace:P,state:o,preventScrollReset:l,relative:c,viewTransition:d})}},[y,p,E,i,o,t,n,l,c,d])}function eS(n){let e=G.useRef(_f(n)),t=G.useRef(!1),i=Is(),o=G.useMemo(()=>WI(i.search,t.current?null:e.current),[i.search]),l=Ss(),c=G.useCallback((d,p)=>{const y=_f(typeof d=="function"?d(o):d);t.current=!0,l("?"+y,p)},[l,o]);return[o,c]}const tS=()=>{};var xy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},nS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Jf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let P=(d&15)<<2|y>>6,F=y&63;p||(F=64,c||(P=64)),i.push(t[E],t[T],t[P],t[F])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Cv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new rS;const P=l<<2|d>>4;if(i.push(P),y!==64){const F=d<<4&240|y>>2;if(i.push(F),T!==64){const $=y<<6&192|T;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iS=function(n){const e=Cv(n);return Jf.encodeByteArray(e,!0)},Tc=function(n){return iS(n).replace(/\./g,"")},xv=function(n){try{return Jf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=()=>Nv().__FIREBASE_DEFAULTS__,oS=()=>{if(typeof process>"u"||typeof xy>"u")return;const n=xy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},aS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xv(n[1]);return e&&JSON.parse(e)},$c=()=>{try{return tS()||sS()||oS()||aS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bv=n=>{var e,t;return(t=(e=$c())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dv=n=>{const e=bv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Ov=()=>{var n;return(n=$c())===null||n===void 0?void 0:n.config},Lv=n=>{var e;return(e=$c())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tc(JSON.stringify(t)),Tc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function uS(){var n;const e=(n=$c())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fS(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pS(){return!uS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zf(){try{return typeof indexedDB=="object"}catch{return!1}}function mS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="FirebaseError";class pr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=gS,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?yS(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new pr(o,d,i)}}function yS(n,e){return n.replace(_S,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const _S=/\{\$([^}]+)}/g;function vS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ys(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Ny(l)&&Ny(c)){if(!ys(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ny(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function tl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function nl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ES(n,e){const t=new wS(n,e);return t.subscribe.bind(t)}class wS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");TS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Yd),o.error===void 0&&(o.error=Yd),o.complete===void 0&&(o.complete=Yd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=1e3,SS=2,AS=4*60*60*1e3,RS=.5;function kS(n,e=IS,t=SS){const i=e*Math.pow(t,n),o=Math.round(RS*i*(Math.random()-.5)*2);return Math.min(AS,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n){return n&&n._delegate?n._delegate:n}class dr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new pl;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xS(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:CS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(n){return n===fs?void 0:n}function xS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new PS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ce||(Ce={}));const bS={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},DS=Ce.INFO,OS={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},LS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=OS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hc{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=LS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const VS=(n,e)=>e.some(t=>n instanceof t);let by,Dy;function MS(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function US(){return Dy||(Dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mv=new WeakMap,vf=new WeakMap,Uv=new WeakMap,Jd=new WeakMap,ep=new WeakMap;function FS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Si(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Mv.set(t,n)}).catch(()=>{}),ep.set(e,n),e}function jS(n){if(vf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});vf.set(n,e)}let Ef={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Uv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Si(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function BS(n){Ef=n(Ef)}function zS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Zd(this),e,...t);return Uv.set(i,e.sort?e.sort():[e]),Si(i)}:US().includes(n)?function(...e){return n.apply(Zd(this),e),Si(Mv.get(this))}:function(...e){return Si(n.apply(Zd(this),e))}}function $S(n){return typeof n=="function"?zS(n):(n instanceof IDBTransaction&&jS(n),VS(n,MS())?new Proxy(n,Ef):n)}function Si(n){if(n instanceof IDBRequest)return FS(n);if(Jd.has(n))return Jd.get(n);const e=$S(n);return e!==n&&(Jd.set(n,e),ep.set(e,n)),e}const Zd=n=>ep.get(n);function HS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Si(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Si(c.result),p.oldVersion,p.newVersion,Si(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const qS=["get","getKey","getAll","getAllKeys","count"],WS=["put","add","delete","clear"],ef=new Map;function Oy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=WS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||qS.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return ef.set(e,l),l}BS(n=>({...n,get:(e,t,i)=>Oy(e,t)||n.get(e,t,i),has:(e,t)=>!!Oy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function GS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wf="@firebase/app",Ly="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Hc("@firebase/app"),QS="@firebase/app-compat",XS="@firebase/analytics-compat",YS="@firebase/analytics",JS="@firebase/app-check-compat",ZS="@firebase/app-check",eA="@firebase/auth",tA="@firebase/auth-compat",nA="@firebase/database",rA="@firebase/data-connect",iA="@firebase/database-compat",sA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",uA="@firebase/messaging",cA="@firebase/messaging-compat",hA="@firebase/performance",dA="@firebase/performance-compat",fA="@firebase/remote-config",pA="@firebase/remote-config-compat",mA="@firebase/storage",gA="@firebase/storage-compat",yA="@firebase/firestore",_A="@firebase/vertexai",vA="@firebase/firestore-compat",EA="firebase",wA="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="[DEFAULT]",TA={[wf]:"fire-core",[QS]:"fire-core-compat",[YS]:"fire-analytics",[XS]:"fire-analytics-compat",[ZS]:"fire-app-check",[JS]:"fire-app-check-compat",[eA]:"fire-auth",[tA]:"fire-auth-compat",[nA]:"fire-rtdb",[rA]:"fire-data-connect",[iA]:"fire-rtdb-compat",[sA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[uA]:"fire-fcm",[cA]:"fire-fcm-compat",[hA]:"fire-perf",[dA]:"fire-perf-compat",[fA]:"fire-rc",[pA]:"fire-rc-compat",[mA]:"fire-gcs",[gA]:"fire-gcs-compat",[yA]:"fire-fst",[vA]:"fire-fst-compat",[_A]:"fire-vertex","fire-js":"fire-js",[EA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map,IA=new Map,If=new Map;function Vy(n,e){try{n.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Mr(n){const e=n.name;if(If.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;If.set(e,n);for(const t of Ic.values())Vy(t,n);for(const t of IA.values())Vy(t,n);return!0}function Qo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Rn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new Go("app","Firebase",SA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=wA;function Fv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Tf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ai.create("bad-app-name",{appName:String(o)});if(t||(t=Ov()),!t)throw Ai.create("no-options");const l=Ic.get(o);if(l){if(ys(t,l.options)&&ys(i,l.config))return l;throw Ai.create("duplicate-app",{appName:o})}const c=new NS(o);for(const p of If.values())c.addComponent(p);const d=new AA(t,i,c);return Ic.set(o,d),d}function qc(n=Tf){const e=Ic.get(n);if(!e&&n===Tf&&Ov())return Fv();if(!e)throw Ai.create("no-app",{appName:n});return e}function qn(n,e,t){var i;let o=(i=TA[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(d.join(" "));return}Mr(new dr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="firebase-heartbeat-database",kA=1,ml="firebase-heartbeat-store";let tf=null;function jv(){return tf||(tf=HS(RA,kA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ml)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ai.create("idb-open",{originalErrorMessage:n.message})})),tf}async function PA(n){try{const t=(await jv()).transaction(ml),i=await t.objectStore(ml).get(Bv(n));return await t.done,i}catch(e){if(e instanceof pr)Vr.warn(e.message);else{const t=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function My(n,e){try{const i=(await jv()).transaction(ml,"readwrite");await i.objectStore(ml).put(e,Bv(n)),await i.done}catch(t){if(t instanceof pr)Vr.warn(t.message);else{const i=Ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(i.message)}}}function Bv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=1024,xA=30;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Uy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>xA){const c=OA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Vr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uy(),{heartbeatsToSend:i,unsentEntries:o}=bA(this._heartbeatsCache.heartbeats),l=Tc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function Uy(){return new Date().toISOString().substring(0,10)}function bA(n,e=CA){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Fy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Fy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zf()?mS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await PA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return My(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return My(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Fy(n){return Tc(JSON.stringify({version:2,heartbeats:n})).length}function OA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(n){Mr(new dr("platform-logger",e=>new KS(e),"PRIVATE")),Mr(new dr("heartbeat",e=>new NA(e),"PRIVATE")),qn(wf,Ly,n),qn(wf,Ly,"esm2017"),qn("fire-js","")}LA("");function tp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VA=zv,$v=new Go("auth","Firebase",zv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new Hc("@firebase/auth");function MA(n,...e){Sc.logLevel<=Ce.WARN&&Sc.warn(`Auth (${As}): ${n}`,...e)}function hc(n,...e){Sc.logLevel<=Ce.ERROR&&Sc.error(`Auth (${As}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,...e){throw np(n,...e)}function ar(n,...e){return np(n,...e)}function Hv(n,e,t){const i=Object.assign(Object.assign({},VA()),{[e]:t});return new Go("auth","Firebase",i).create(e,{appName:n.name})}function Ri(n){return Hv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function np(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return $v.create(n,...e)}function _e(n,e,...t){if(!n)throw np(e,...t)}function Dr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hc(e),new Error(e)}function Ur(n,e){n||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function UA(){return jy()==="http:"||jy()==="https:"}function jy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UA()||hS()||"connection"in navigator)?navigator.onLine:!0}function jA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=lS()||dS()}get(){return FA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n,e){Ur(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$A=new Pl(3e4,6e4);function Rs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ui(n,e,t,i,o={}){return Wv(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=kl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return cS()||(y.referrerPolicy="no-referrer"),qv.fetch()(await Kv(n,n.config.apiHost,t,d),y)})}async function Wv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},BA),e);try{const o=new qA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Zu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Zu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Zu(n,"user-disabled",c);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Hv(n,E,y);Wn(n,E)}}catch(o){if(o instanceof pr)throw o;Wn(n,"network-request-failed",{message:String(o)})}}async function Wc(n,e,t,i,o={}){const l=await Ui(n,e,t,i,o);return"mfaPendingCredential"in l&&Wn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Kv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?rp(n.config,o):`${n.config.apiScheme}://${o}`;return zA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function HA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ar(this.auth,"network-request-failed")),$A.get())})}}function Zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ar(n,e,i);return o.customData._tokenResponse=t,o}function By(n){return n!==void 0&&n.enterprise!==void 0}class WA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return HA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KA(n,e){return Ui(n,"GET","/v2/recaptchaConfig",Rs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(n,e){return Ui(n,"POST","/v1/accounts:delete",e)}async function Ac(n,e){return Ui(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QA(n,e=!1){const t=tt(n),i=await t.getIdToken(e),o=ip(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:al(nf(o.auth_time)),issuedAtTime:al(nf(o.iat)),expirationTime:al(nf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function nf(n){return Number(n)*1e3}function ip(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return hc("JWT malformed, contained fewer than 3 sections"),null;try{const o=xv(t);return o?JSON.parse(o):(hc("Failed to decode base64 JWT payload"),null)}catch(o){return hc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function zy(n){const e=ip(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof pr&&XA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function XA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=al(this.lastLoginAt),this.creationTime=al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await gl(n,Ac(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Gv(l.providerUserInfo):[],d=ZA(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Af(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function JA(n){const e=tt(n);await Rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Gv(n){return n.map(e=>{var{providerId:t}=e,i=tp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(n,e){const t=await Wv(n,{},async()=>{const i=kl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await Kv(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",qv.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tR(n,e){return Ui(n,"POST","/v2/accounts:revokeToken",Rs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=zy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await eR(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new bo;return i&&(_e(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Af(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await gl(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return QA(this,e)}reload(){return JA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Rc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(Ri(this.auth));const e=await this.getIdToken();return await gl(this,GA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,P=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Z=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ne,emailVerified:ue,isAnonymous:Re,providerData:Ie,stsTokenManager:C}=t;_e(ne&&C,e,"internal-error");const I=bo.fromJSON(this.name,C);_e(typeof ne=="string",e,"internal-error"),fi(T,e.name),fi(P,e.name),_e(typeof ue=="boolean",e,"internal-error"),_e(typeof Re=="boolean",e,"internal-error"),fi(F,e.name),fi($,e.name),fi(H,e.name),fi(U,e.name),fi(W,e.name),fi(Z,e.name);const k=new $n({uid:ne,auth:e,email:P,emailVerified:ue,displayName:T,isAnonymous:Re,photoURL:$,phoneNumber:F,tenantId:H,stsTokenManager:I,createdAt:W,lastLoginAt:Z});return Ie&&Array.isArray(Ie)&&(k.providerData=Ie.map(N=>Object.assign({},N))),U&&(k._redirectEventId=U),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new bo;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Rc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Gv(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new bo;d.updateFromIdToken(i);const p=new $n({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Af(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=new Map;function Or(n){Ur(n instanceof Function,"Expected a class definition");let e=$y.get(n);return e?(Ur(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$y.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qv.type="NONE";const Hy=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,e,t){return`firebase:${n}:${e}:${t}`}class Do{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=dc(this.userKey,o.apiKey,l),this.fullPersistenceKey=dc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ac(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Do(Or(Hy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Or(Hy);const c=dc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const E=await y._get(c);if(E){let T;if(typeof E=="string"){const P=await Ac(e,{idToken:E}).catch(()=>{});if(!P)break;T=await $n._fromGetAccountInfoResponse(e,P,E)}else T=$n._fromJSON(e,E);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Do(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Do(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tE(e))return"Blackberry";if(nE(e))return"Webos";if(Yv(e))return"Safari";if((e.includes("chrome/")||Jv(e))&&!e.includes("edge/"))return"Chrome";if(eE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xv(n=$t()){return/firefox\//i.test(n)}function Yv(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jv(n=$t()){return/crios\//i.test(n)}function Zv(n=$t()){return/iemobile/i.test(n)}function eE(n=$t()){return/android/i.test(n)}function tE(n=$t()){return/blackberry/i.test(n)}function nE(n=$t()){return/webos/i.test(n)}function sp(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nR(n=$t()){var e;return sp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rR(){return fS()&&document.documentMode===10}function rE(n=$t()){return sp(n)||eE(n)||nE(n)||tE(n)||/windows phone/i.test(n)||Zv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(n,e=[]){let t;switch(n){case"Browser":t=qy($t());break;case"Worker":t=`${qy($t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${As}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(n,e={}){return Ui(n,"GET","/v2/passwordPolicy",Rs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=6;class aR{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:oR,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wy(this),this.idTokenSubscription=new Wy(this),this.beforeStateQueue=new iR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ac(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Rn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(Ri(this));const t=e?tt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(Ri(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(Ri(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sR(this),t=new aR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await tR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&MA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xo(n){return tt(n)}class Wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=ES(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uR(n){Kc=n}function sE(n){return Kc.loadJS(n)}function cR(){return Kc.recaptchaEnterpriseScript}function hR(){return Kc.gapiScript}function dR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class fR{constructor(){this.enterprise=new pR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class pR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const mR="recaptcha-enterprise",oE="NO_RECAPTCHA";class gR{constructor(e){this.type=mR,this.auth=Xo(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{KA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new WA(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;By(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(oE)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fR().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&By(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=cR();p.length!==0&&(p+=d),sE(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function Ky(n,e,t,i=!1,o=!1){const l=new gR(n);let c;if(o)c=oE;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Gy(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ky(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Ky(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(n,e){const t=Qo(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ys(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function _R(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Or);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function vR(n,e,t){const i=Xo(n);_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=aE(e),{host:c,port:d}=ER(e),p=d===null?"":`:${d}`,y={url:`${l}//${c}${p}/`},E=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){_e(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_e(ys(y,i.config.emulator)&&ys(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,wR()}function aE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ER(n){const e=aE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Qy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Qy(c)}}}function Qy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function TR(n,e){return Ui(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(n,e){return Wc(n,"POST","/v1/accounts:signInWithPassword",Rs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(n,e){return Wc(n,"POST","/v1/accounts:signInWithEmailLink",Rs(n,e))}async function AR(n,e){return Wc(n,"POST","/v1/accounts:signInWithEmailLink",Rs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends op{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new yl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new yl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gy(e,t,"signInWithPassword",IR);case"emailLink":return SR(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gy(e,i,"signUpPassword",TR);case"emailLink":return AR(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n,e){return Wc(n,"POST","/v1/accounts:signInWithIdp",Rs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="http://localhost";class _s extends op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=tp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new _s(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Oo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:RR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=kl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PR(n){const e=tl(nl(n)).link,t=e?tl(nl(e)).deep_link_id:null,i=tl(nl(n)).deep_link_id;return(i?tl(nl(i)).link:null)||i||t||e||n}class ap{constructor(e){var t,i,o,l,c,d;const p=tl(nl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=kR((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=PR(e);try{return new ap(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.providerId=Yo.PROVIDER_ID}static credential(e,t){return yl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ap.parseLink(t);return _e(i,"argument-error"),yl._fromEmailAndCode(e,i.code,i.tenantId)}}Yo.PROVIDER_ID="password";Yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends lE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Cl{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _s._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.GOOGLE_SIGN_IN_METHOD="google.com";yi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Cl{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Cl{constructor(){super("twitter.com")}static credential(e,t){return _s._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $n._fromIdTokenResponse(e,i,o),c=Xy(i);return new Mo({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Xy(i);return new Mo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Xy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends pr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new kc(e,t,i,o)}}function uE(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(n,l,e,i):l})}async function CR(n,e,t=!1){const i=await gl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(n,e,t=!1){const{auth:i}=n;if(Rn(i.app))return Promise.reject(Ri(i));const o="reauthenticate";try{const l=await gl(n,uE(i,o,e,n),t);_e(l.idToken,i,"internal-error");const c=ip(l.idToken);_e(c,i,"internal-error");const{sub:d}=c;return _e(n.uid===d,i,"user-mismatch"),Mo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Wn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(n,e,t=!1){if(Rn(n.app))return Promise.reject(Ri(n));const i="signIn",o=await uE(n,i,e),l=await Mo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function NR(n,e){return cE(Xo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(n){const e=Xo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function DR(n,e,t){return Rn(n.app)?Promise.reject(Ri(n)):NR(tt(n),Yo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&bR(n),i})}function OR(n,e,t,i){return tt(n).onIdTokenChanged(e,t,i)}function LR(n,e,t){return tt(n).beforeAuthStateChanged(e,t)}function hE(n,e,t,i){return tt(n).onAuthStateChanged(e,t,i)}function _l(n){return tt(n).signOut()}const Pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pc,"1"),this.storage.removeItem(Pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=1e3,MR=10;class fE extends dE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);rR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,MR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},VR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fE.type="LOCAL";const UR=fE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE extends dE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pE.type="SESSION";const mE=pE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Gc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await FR(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=lp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const P=T;if(P.data.eventId===y)switch(P.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(P.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){return window}function BR(n){lr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function zR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $R(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function HR(){return gE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="firebaseLocalStorageDb",qR=1,Cc="firebaseLocalStorage",_E="fbase_key";class xl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qc(n,e){return n.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function WR(){const n=indexedDB.deleteDatabase(yE);return new xl(n).toPromise()}function Rf(){const n=indexedDB.open(yE,qR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Cc,{keyPath:_E})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Cc)?e(i):(i.close(),await WR(),e(await Rf()))})})}async function Yy(n,e,t){const i=Qc(n,!0).put({[_E]:e,value:t});return new xl(i).toPromise()}async function KR(n,e){const t=Qc(n,!1).get(e),i=await new xl(t).toPromise();return i===void 0?null:i.value}function Jy(n,e){const t=Qc(n,!0).delete(e);return new xl(t).toPromise()}const GR=800,QR=3;class vE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>QR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gc._getInstance(HR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zR(),!this.activeServiceWorker)return;this.sender=new jR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$R()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rf();return await Yy(e,Pc,"1"),await Jy(e,Pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>KR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Qc(o,!1).getAll();return new xl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vE.type="LOCAL";const XR=vE;new Pl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(n,e){return e?Or(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JR(n){return cE(n.auth,new up(n),n.bypassAuthState)}function ZR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),xR(t,new up(n),n.bypassAuthState)}async function ek(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),CR(t,new up(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JR;case"linkViaPopup":case"linkViaRedirect":return ek;case"reauthViaPopup":case"reauthViaRedirect":return ZR;default:Wn(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new Pl(2e3,1e4);class xo extends EE{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,xo.currentPopupAction&&xo.currentPopupAction.cancel(),xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tk.get())};e()}}xo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="pendingRedirect",fc=new Map;class rk extends EE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const i=await ik(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ik(n,e){const t=ak(e),i=ok(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function sk(n,e){fc.set(n._key(),e)}function ok(n){return Or(n._redirectPersistence)}function ak(n){return dc(nk,n.config.apiKey,n.name)}async function lk(n,e,t=!1){if(Rn(n.app))return Promise.reject(Ri(n));const i=Xo(n),o=YR(i,e),c=await new rk(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=10*60*1e3;class ck{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!wE(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ar(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(n,e={}){return Ui(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pk=/^https?/;async function mk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dk(n);for(const t of e)try{if(gk(t))return}catch{}Wn(n,"unauthorized-domain")}function gk(n){const e=Sf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!pk.test(t))return!1;if(fk.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new Pl(3e4,6e4);function e_(){const n=lr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _k(n){return new Promise((e,t)=>{var i,o,l;function c(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),t(ar(n,"network-request-failed"))},timeout:yk.get()})}if(!((o=(i=lr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=lr().gapi)===null||l===void 0)&&l.load)c();else{const d=dR("iframefcb");return lr()[d]=()=>{gapi.load?c():t(ar(n,"network-request-failed"))},sE(`${hR()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw pc=null,e})}let pc=null;function vk(n){return pc=pc||_k(n),pc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new Pl(5e3,15e3),wk="__/auth/iframe",Tk="emulator/auth/iframe",Ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ak(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?rp(e,Tk):`https://${n.config.authDomain}/${wk}`,i={apiKey:e.apiKey,appName:n.name,v:As},o=Sk.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${kl(i).slice(1)}`}async function Rk(n){const e=await vk(n),t=lr().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:Ak(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ik,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=ar(n,"network-request-failed"),d=lr().setTimeout(()=>{l(c)},Ek.get());function p(){lr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pk=500,Ck=600,xk="_blank",Nk="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bk(n,e,t,i=Pk,o=Ck){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},kk),{width:i.toString(),height:o.toString(),top:l,left:c}),y=$t().toLowerCase();t&&(d=Jv(y)?xk:t),Xv(y)&&(e=e||Nk,p.scrollbars="yes");const E=Object.entries(p).reduce((P,[F,$])=>`${P}${F}=${$},`,"");if(nR(y)&&d!=="_self")return Dk(e||"",d),new t_(null);const T=window.open(e||"",d,E);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new t_(T)}function Dk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="__/auth/handler",Lk="emulator/auth/handler",Vk=encodeURIComponent("fac");async function n_(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:As,eventId:o};if(e instanceof lE){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",vS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))c[E]=T}if(e instanceof Cl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(c.scopes=E.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await n._getAppCheckToken(),y=p?`#${Vk}=${encodeURIComponent(p)}`:"";return`${Mk(n)}?${kl(d).slice(1)}${y}`}function Mk({config:n}){return n.emulator?rp(n,Lk):`https://${n.authDomain}/${Ok}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="webStorageSupport";class Uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mE,this._completeRedirectFn=lk,this._overrideRedirectResult=sk}async _openPopup(e,t,i,o){var l;Ur((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await n_(e,t,i,Sf(),o);return bk(e,c,lp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await n_(e,t,i,Sf(),o);return BR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Rk(e),i=new ck(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rf,{type:rf},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[rf];c!==void 0&&t(!!c),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rE()||Yv()||sp()}}const Fk=Uk;var r_="@firebase/auth",i_="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zk(n){Mr(new dr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;_e(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iE(n)},y=new lR(i,o,l,p);return _R(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Mr(new dr("auth-internal",e=>{const t=Xo(e.getProvider("auth").getImmediate());return(i=>new jk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(r_,i_,Bk(n)),qn(r_,i_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=5*60,Hk=Lv("authIdTokenMaxAge")||$k;let s_=null;const qk=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Hk)return;const o=t==null?void 0:t.token;s_!==o&&(s_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Wk(n=qc()){const e=Qo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yR(n,{popupRedirectResolver:Fk,persistence:[XR,UR,mE]}),i=Lv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=qk(l.toString());LR(t,c,()=>c(t.currentUser)),OR(t,d=>c(d))}}const o=bv("auth");return o&&vR(t,`http://${o}`),t}function Kk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}uR({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ar("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Kk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zk("Browser");var o_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki,TE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,I){function k(){}k.prototype=I.prototype,C.D=I.prototype,C.prototype=new k,C.prototype.constructor=C,C.C=function(N,D,L){for(var R=Array(arguments.length-2),it=2;it<arguments.length;it++)R[it-2]=arguments[it];return I.prototype[D].apply(N,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,I,k){k||(k=0);var N=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)N[D]=I.charCodeAt(k++)|I.charCodeAt(k++)<<8|I.charCodeAt(k++)<<16|I.charCodeAt(k++)<<24;else for(D=0;16>D;++D)N[D]=I[k++]|I[k++]<<8|I[k++]<<16|I[k++]<<24;I=C.g[0],k=C.g[1],D=C.g[2];var L=C.g[3],R=I+(L^k&(D^L))+N[0]+3614090360&4294967295;I=k+(R<<7&4294967295|R>>>25),R=L+(D^I&(k^D))+N[1]+3905402710&4294967295,L=I+(R<<12&4294967295|R>>>20),R=D+(k^L&(I^k))+N[2]+606105819&4294967295,D=L+(R<<17&4294967295|R>>>15),R=k+(I^D&(L^I))+N[3]+3250441966&4294967295,k=D+(R<<22&4294967295|R>>>10),R=I+(L^k&(D^L))+N[4]+4118548399&4294967295,I=k+(R<<7&4294967295|R>>>25),R=L+(D^I&(k^D))+N[5]+1200080426&4294967295,L=I+(R<<12&4294967295|R>>>20),R=D+(k^L&(I^k))+N[6]+2821735955&4294967295,D=L+(R<<17&4294967295|R>>>15),R=k+(I^D&(L^I))+N[7]+4249261313&4294967295,k=D+(R<<22&4294967295|R>>>10),R=I+(L^k&(D^L))+N[8]+1770035416&4294967295,I=k+(R<<7&4294967295|R>>>25),R=L+(D^I&(k^D))+N[9]+2336552879&4294967295,L=I+(R<<12&4294967295|R>>>20),R=D+(k^L&(I^k))+N[10]+4294925233&4294967295,D=L+(R<<17&4294967295|R>>>15),R=k+(I^D&(L^I))+N[11]+2304563134&4294967295,k=D+(R<<22&4294967295|R>>>10),R=I+(L^k&(D^L))+N[12]+1804603682&4294967295,I=k+(R<<7&4294967295|R>>>25),R=L+(D^I&(k^D))+N[13]+4254626195&4294967295,L=I+(R<<12&4294967295|R>>>20),R=D+(k^L&(I^k))+N[14]+2792965006&4294967295,D=L+(R<<17&4294967295|R>>>15),R=k+(I^D&(L^I))+N[15]+1236535329&4294967295,k=D+(R<<22&4294967295|R>>>10),R=I+(D^L&(k^D))+N[1]+4129170786&4294967295,I=k+(R<<5&4294967295|R>>>27),R=L+(k^D&(I^k))+N[6]+3225465664&4294967295,L=I+(R<<9&4294967295|R>>>23),R=D+(I^k&(L^I))+N[11]+643717713&4294967295,D=L+(R<<14&4294967295|R>>>18),R=k+(L^I&(D^L))+N[0]+3921069994&4294967295,k=D+(R<<20&4294967295|R>>>12),R=I+(D^L&(k^D))+N[5]+3593408605&4294967295,I=k+(R<<5&4294967295|R>>>27),R=L+(k^D&(I^k))+N[10]+38016083&4294967295,L=I+(R<<9&4294967295|R>>>23),R=D+(I^k&(L^I))+N[15]+3634488961&4294967295,D=L+(R<<14&4294967295|R>>>18),R=k+(L^I&(D^L))+N[4]+3889429448&4294967295,k=D+(R<<20&4294967295|R>>>12),R=I+(D^L&(k^D))+N[9]+568446438&4294967295,I=k+(R<<5&4294967295|R>>>27),R=L+(k^D&(I^k))+N[14]+3275163606&4294967295,L=I+(R<<9&4294967295|R>>>23),R=D+(I^k&(L^I))+N[3]+4107603335&4294967295,D=L+(R<<14&4294967295|R>>>18),R=k+(L^I&(D^L))+N[8]+1163531501&4294967295,k=D+(R<<20&4294967295|R>>>12),R=I+(D^L&(k^D))+N[13]+2850285829&4294967295,I=k+(R<<5&4294967295|R>>>27),R=L+(k^D&(I^k))+N[2]+4243563512&4294967295,L=I+(R<<9&4294967295|R>>>23),R=D+(I^k&(L^I))+N[7]+1735328473&4294967295,D=L+(R<<14&4294967295|R>>>18),R=k+(L^I&(D^L))+N[12]+2368359562&4294967295,k=D+(R<<20&4294967295|R>>>12),R=I+(k^D^L)+N[5]+4294588738&4294967295,I=k+(R<<4&4294967295|R>>>28),R=L+(I^k^D)+N[8]+2272392833&4294967295,L=I+(R<<11&4294967295|R>>>21),R=D+(L^I^k)+N[11]+1839030562&4294967295,D=L+(R<<16&4294967295|R>>>16),R=k+(D^L^I)+N[14]+4259657740&4294967295,k=D+(R<<23&4294967295|R>>>9),R=I+(k^D^L)+N[1]+2763975236&4294967295,I=k+(R<<4&4294967295|R>>>28),R=L+(I^k^D)+N[4]+1272893353&4294967295,L=I+(R<<11&4294967295|R>>>21),R=D+(L^I^k)+N[7]+4139469664&4294967295,D=L+(R<<16&4294967295|R>>>16),R=k+(D^L^I)+N[10]+3200236656&4294967295,k=D+(R<<23&4294967295|R>>>9),R=I+(k^D^L)+N[13]+681279174&4294967295,I=k+(R<<4&4294967295|R>>>28),R=L+(I^k^D)+N[0]+3936430074&4294967295,L=I+(R<<11&4294967295|R>>>21),R=D+(L^I^k)+N[3]+3572445317&4294967295,D=L+(R<<16&4294967295|R>>>16),R=k+(D^L^I)+N[6]+76029189&4294967295,k=D+(R<<23&4294967295|R>>>9),R=I+(k^D^L)+N[9]+3654602809&4294967295,I=k+(R<<4&4294967295|R>>>28),R=L+(I^k^D)+N[12]+3873151461&4294967295,L=I+(R<<11&4294967295|R>>>21),R=D+(L^I^k)+N[15]+530742520&4294967295,D=L+(R<<16&4294967295|R>>>16),R=k+(D^L^I)+N[2]+3299628645&4294967295,k=D+(R<<23&4294967295|R>>>9),R=I+(D^(k|~L))+N[0]+4096336452&4294967295,I=k+(R<<6&4294967295|R>>>26),R=L+(k^(I|~D))+N[7]+1126891415&4294967295,L=I+(R<<10&4294967295|R>>>22),R=D+(I^(L|~k))+N[14]+2878612391&4294967295,D=L+(R<<15&4294967295|R>>>17),R=k+(L^(D|~I))+N[5]+4237533241&4294967295,k=D+(R<<21&4294967295|R>>>11),R=I+(D^(k|~L))+N[12]+1700485571&4294967295,I=k+(R<<6&4294967295|R>>>26),R=L+(k^(I|~D))+N[3]+2399980690&4294967295,L=I+(R<<10&4294967295|R>>>22),R=D+(I^(L|~k))+N[10]+4293915773&4294967295,D=L+(R<<15&4294967295|R>>>17),R=k+(L^(D|~I))+N[1]+2240044497&4294967295,k=D+(R<<21&4294967295|R>>>11),R=I+(D^(k|~L))+N[8]+1873313359&4294967295,I=k+(R<<6&4294967295|R>>>26),R=L+(k^(I|~D))+N[15]+4264355552&4294967295,L=I+(R<<10&4294967295|R>>>22),R=D+(I^(L|~k))+N[6]+2734768916&4294967295,D=L+(R<<15&4294967295|R>>>17),R=k+(L^(D|~I))+N[13]+1309151649&4294967295,k=D+(R<<21&4294967295|R>>>11),R=I+(D^(k|~L))+N[4]+4149444226&4294967295,I=k+(R<<6&4294967295|R>>>26),R=L+(k^(I|~D))+N[11]+3174756917&4294967295,L=I+(R<<10&4294967295|R>>>22),R=D+(I^(L|~k))+N[2]+718787259&4294967295,D=L+(R<<15&4294967295|R>>>17),R=k+(L^(D|~I))+N[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,C.g[2]=C.g[2]+D&4294967295,C.g[3]=C.g[3]+L&4294967295}i.prototype.u=function(C,I){I===void 0&&(I=C.length);for(var k=I-this.blockSize,N=this.B,D=this.h,L=0;L<I;){if(D==0)for(;L<=k;)o(this,C,L),L+=this.blockSize;if(typeof C=="string"){for(;L<I;)if(N[D++]=C.charCodeAt(L++),D==this.blockSize){o(this,N),D=0;break}}else for(;L<I;)if(N[D++]=C[L++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=I},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;var k=8*this.o;for(I=C.length-8;I<C.length;++I)C[I]=k&255,k/=256;for(this.u(C),C=Array(16),I=k=0;4>I;++I)for(var N=0;32>N;N+=8)C[k++]=this.g[I]>>>N&255;return C};function l(C,I){var k=d;return Object.prototype.hasOwnProperty.call(k,C)?k[C]:k[C]=I(C)}function c(C,I){this.h=I;for(var k=[],N=!0,D=C.length-1;0<=D;D--){var L=C[D]|0;N&&L==I||(k[D]=L,N=!1)}this.g=k}var d={};function p(C){return-128<=C&&128>C?l(C,function(I){return new c([I|0],0>I?-1:0)}):new c([C|0],0>C?-1:0)}function y(C){if(isNaN(C)||!isFinite(C))return T;if(0>C)return U(y(-C));for(var I=[],k=1,N=0;C>=k;N++)I[N]=C/k|0,k*=4294967296;return new c(I,0)}function E(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return U(E(C.substring(1),I));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=y(Math.pow(I,8)),N=T,D=0;D<C.length;D+=8){var L=Math.min(8,C.length-D),R=parseInt(C.substring(D,D+L),I);8>L?(L=y(Math.pow(I,L)),N=N.j(L).add(y(R))):(N=N.j(k),N=N.add(y(R)))}return N}var T=p(0),P=p(1),F=p(16777216);n=c.prototype,n.m=function(){if(H(this))return-U(this).m();for(var C=0,I=1,k=0;k<this.g.length;k++){var N=this.i(k);C+=(0<=N?N:4294967296+N)*I,I*=4294967296}return C},n.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if($(this))return"0";if(H(this))return"-"+U(this).toString(C);for(var I=y(Math.pow(C,6)),k=this,N="";;){var D=ue(k,I).g;k=W(k,D.j(I));var L=((0<k.g.length?k.g[0]:k.h)>>>0).toString(C);if(k=D,$(k))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},n.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function $(C){if(C.h!=0)return!1;for(var I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function H(C){return C.h==-1}n.l=function(C){return C=W(this,C),H(C)?-1:$(C)?0:1};function U(C){for(var I=C.g.length,k=[],N=0;N<I;N++)k[N]=~C.g[N];return new c(k,~C.h).add(P)}n.abs=function(){return H(this)?U(this):this},n.add=function(C){for(var I=Math.max(this.g.length,C.g.length),k=[],N=0,D=0;D<=I;D++){var L=N+(this.i(D)&65535)+(C.i(D)&65535),R=(L>>>16)+(this.i(D)>>>16)+(C.i(D)>>>16);N=R>>>16,L&=65535,R&=65535,k[D]=R<<16|L}return new c(k,k[k.length-1]&-2147483648?-1:0)};function W(C,I){return C.add(U(I))}n.j=function(C){if($(this)||$(C))return T;if(H(this))return H(C)?U(this).j(U(C)):U(U(this).j(C));if(H(C))return U(this.j(U(C)));if(0>this.l(F)&&0>C.l(F))return y(this.m()*C.m());for(var I=this.g.length+C.g.length,k=[],N=0;N<2*I;N++)k[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<C.g.length;D++){var L=this.i(N)>>>16,R=this.i(N)&65535,it=C.i(D)>>>16,Ot=C.i(D)&65535;k[2*N+2*D]+=R*Ot,Z(k,2*N+2*D),k[2*N+2*D+1]+=L*Ot,Z(k,2*N+2*D+1),k[2*N+2*D+1]+=R*it,Z(k,2*N+2*D+1),k[2*N+2*D+2]+=L*it,Z(k,2*N+2*D+2)}for(N=0;N<I;N++)k[N]=k[2*N+1]<<16|k[2*N];for(N=I;N<2*I;N++)k[N]=0;return new c(k,0)};function Z(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function ne(C,I){this.g=C,this.h=I}function ue(C,I){if($(I))throw Error("division by zero");if($(C))return new ne(T,T);if(H(C))return I=ue(U(C),I),new ne(U(I.g),U(I.h));if(H(I))return I=ue(C,U(I)),new ne(U(I.g),I.h);if(30<C.g.length){if(H(C)||H(I))throw Error("slowDivide_ only works with positive integers.");for(var k=P,N=I;0>=N.l(C);)k=Re(k),N=Re(N);var D=Ie(k,1),L=Ie(N,1);for(N=Ie(N,2),k=Ie(k,2);!$(N);){var R=L.add(N);0>=R.l(C)&&(D=D.add(k),L=R),N=Ie(N,1),k=Ie(k,1)}return I=W(C,D.j(I)),new ne(D,I)}for(D=T;0<=C.l(I);){for(k=Math.max(1,Math.floor(C.m()/I.m())),N=Math.ceil(Math.log(k)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=y(k),R=L.j(I);H(R)||0<R.l(C);)k-=N,L=y(k),R=L.j(I);$(L)&&(L=P),D=D.add(L),C=W(C,R)}return new ne(D,C)}n.A=function(C){return ue(this,C).h},n.and=function(C){for(var I=Math.max(this.g.length,C.g.length),k=[],N=0;N<I;N++)k[N]=this.i(N)&C.i(N);return new c(k,this.h&C.h)},n.or=function(C){for(var I=Math.max(this.g.length,C.g.length),k=[],N=0;N<I;N++)k[N]=this.i(N)|C.i(N);return new c(k,this.h|C.h)},n.xor=function(C){for(var I=Math.max(this.g.length,C.g.length),k=[],N=0;N<I;N++)k[N]=this.i(N)^C.i(N);return new c(k,this.h^C.h)};function Re(C){for(var I=C.g.length+1,k=[],N=0;N<I;N++)k[N]=C.i(N)<<1|C.i(N-1)>>>31;return new c(k,C.h)}function Ie(C,I){var k=I>>5;I%=32;for(var N=C.g.length-k,D=[],L=0;L<N;L++)D[L]=0<I?C.i(L+k)>>>I|C.i(L+k+1)<<32-I:C.i(L+k);return new c(D,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,TE=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=E,ki=c}).apply(typeof o_<"u"?o_:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var IE,rl,SE,mc,kf,AE,RE,kE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var V=u[w];if(!(V in _))break e;_=_[V]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,V={next:function(){if(!w&&_<u.length){var z=_++;return{value:m(z,u[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,w),u.apply(m,V)}}return function(){return u.apply(m,arguments)}}function P(u,m,_){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,P.apply(null,arguments)}function F(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function $(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,V,z){for(var te=Array(arguments.length-2),je=2;je<arguments.length;je++)te[je-2]=arguments[je];return m.prototype[V].apply(w,te)}}function H(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function U(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const V=u.length||0,z=w.length||0;u.length=V+z;for(let te=0;te<z;te++)u[V+te]=w[te]}else u.push(w)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ue(u){return ue[" "](u),u}ue[" "]=function(){};var Re=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Ie(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function C(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let _,w;for(let V=1;V<arguments.length;V++){w=arguments[V];for(_ in w)u[_]=w[_];for(let z=0;z<k.length;z++)_=k[z],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function L(u){d.setTimeout(()=>{throw u},0)}function R(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class it{constructor(){this.h=this.g=null}add(m,_){const w=Ot.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Ot=new W(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,re=!1,me=new it,oe=()=>{const u=d.Promise.resolve(void 0);Be=()=>{u.then(O)}};var O=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){L(_)}var m=Ot;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function ke(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Re){e:{try{ue(m.nodeName);var V=!0;break e}catch{}V=!1}V||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ke.aa.h.call(this)}}$(ke,fe);var be={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,_,w,V){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=V,this.key=++Ue,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,m,_,w,V){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var te=zr(u,m,w,V);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new $e(m,this.src,z,!!w,V),m.fa=_,u.push(m)),m};function Ds(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],V=Array.prototype.indexOf.call(w,m,void 0),z;(z=0<=V)&&Array.prototype.splice.call(w,V,1),z&&(wt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function zr(u,m,_,w){for(var V=0;V<u.length;++V){var z=u[V];if(!z.da&&z.listener==m&&z.capture==!!_&&z.ha==w)return V}return-1}var Fi="closure_lm_"+(1e6*Math.random()|0),Os={};function na(u,m,_,w,V){if(Array.isArray(m)){for(var z=0;z<m.length;z++)na(u,m[z],_,w,V);return null}return _=sa(_),u&&u[Me]?u.K(m,_,y(w)?!!w.capture:!1,V):ra(u,m,_,!1,w,V)}function ra(u,m,_,w,V,z){if(!m)throw Error("Invalid event type");var te=y(V)?!!V.capture:!!V,je=Vs(u);if(je||(u[Fi]=je=new mr(u)),_=je.add(m,_,w,te,z),_.proxy)return _;if(w=Ml(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Se||(V=te),V===void 0&&(V=!1),u.addEventListener(m.toString(),w,V);else if(u.attachEvent)u.attachEvent(yr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ml(){function u(_){return m.call(u.src,u.listener,_)}const m=ia;return u}function Ls(u,m,_,w,V){if(Array.isArray(m))for(var z=0;z<m.length;z++)Ls(u,m[z],_,w,V);else w=y(w)?!!w.capture:!!w,_=sa(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(z=u.g[m],_=zr(z,_,w,V),-1<_&&(wt(z[_]),Array.prototype.splice.call(z,_,1),z.length==0&&(delete u.g[m],u.h--)))):u&&(u=Vs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=zr(m,_,w,V)),(_=-1<u?m[u]:null)&&gr(_))}function gr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Ds(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(yr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Vs(m))?(Ds(_,u),_.h==0&&(_.src=null,m[Fi]=null)):wt(u)}}}function yr(u){return u in Os?Os[u]:Os[u]="on"+u}function ia(u,m){if(u.da)u=!0;else{m=new ke(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&gr(u),u=_.call(w,m)}return u}function Vs(u){return u=u[Fi],u instanceof mr?u:null}var Ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function sa(u){return typeof u=="function"?u:(u[Ms]||(u[Ms]=function(m){return u.handleEvent(m)}),u[Ms])}function ft(){Q.call(this),this.i=new mr(this),this.M=this,this.F=null}$(ft,Q),ft.prototype[Me]=!0,ft.prototype.removeEventListener=function(u,m,_,w){Ls(this,u,m,_,w)};function pt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var V=m;m=new fe(w,u),N(m,V)}if(V=!0,_)for(var z=_.length-1;0<=z;z--){var te=m.g=_[z];V=_r(te,w,!0,m)&&V}if(te=m.g=u,V=_r(te,w,!0,m)&&V,V=_r(te,w,!1,m)&&V,_)for(z=0;z<_.length;z++)te=m.g=_[z],V=_r(te,w,!1,m)&&V}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)wt(_[w]);delete u.g[m],u.h--}}this.F=null},ft.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ft.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function _r(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var V=!0,z=0;z<m.length;++z){var te=m[z];if(te&&!te.da&&te.capture==_){var je=te.listener,mt=te.ha||te.src;te.fa&&Ds(u.i,te),V=je.call(mt,w)!==!1&&V}}return V&&!w.defaultPrevented}function oa(u,m,_){if(typeof u=="function")_&&(u=P(u,_));else if(u&&typeof u.handleEvent=="function")u=P(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function $r(u){u.g=oa(()=>{u.g=null,u.i&&(u.i=!1,$r(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class ji extends Q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:$r(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bi(u){Q.call(this),this.h=u,this.g={}}$(Bi,Q);var aa=[];function la(u){Ie(u.g,function(m,_){this.g.hasOwnProperty(_)&&gr(m)},u),u.g={}}Bi.prototype.N=function(){Bi.aa.N.call(this),la(this)},Bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ua=d.JSON.stringify,ca=d.JSON.parse,ha=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function zi(){}zi.prototype.h=null;function Us(u){return u.h||(u.h=u.i())}function Fs(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gn(){fe.call(this,"d")}$(Gn,fe);function js(){fe.call(this,"c")}$(js,fe);var Qn={},da=null;function $i(){return da=da||new ft}Qn.La="serverreachability";function fa(u){fe.call(this,Qn.La,u)}$(fa,fe);function vr(u){const m=$i();pt(m,new fa(m))}Qn.STAT_EVENT="statevent";function pa(u,m){fe.call(this,Qn.STAT_EVENT,u),this.stat=m}$(pa,fe);function st(u){const m=$i();pt(m,new pa(m,u))}Qn.Ma="timingevent";function Bs(u,m){fe.call(this,Qn.Ma,u),this.size=m}$(Bs,fe);function Pn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function qi(u,m,_,w,V,z){u.info(function(){if(u.g)if(z)for(var te="",je=z.split("&"),mt=0;mt<je.length;mt++){var De=je[mt].split("=");if(1<De.length){var Tt=De[0];De=De[1];var ut=Tt.split("_");te=2<=ut.length&&ut[1]=="type"?te+(Tt+"="+De+"&"):te+(Tt+"=redacted&")}}else te=null;else te=z;return"XMLHTTP REQ ("+w+") [attempt "+V+"]: "+m+`
`+_+`
`+te})}function zs(u,m,_,w,V,z,te){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+V+"]: "+m+`
`+_+`
`+z+" "+te})}function Cn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+vh(u,_)+(w?" "+w:"")})}function ma(u,m){u.info(function(){return"TIMEOUT: "+m})}Hi.prototype.info=function(){};function vh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var V=w[1];if(Array.isArray(V)&&!(1>V.length)){var z=V[0];if(z!="noop"&&z!="stop"&&z!="close")for(var te=1;te<V.length;te++)V[te]=""}}}}return ua(_)}catch{return m}}var $s={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ul={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xn;function Wi(){}$(Wi,zi),Wi.prototype.g=function(){return new XMLHttpRequest},Wi.prototype.i=function(){return{}},xn=new Wi;function Nn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var ga={},Hs={};function qs(u,m,_){u.L=1,u.v=Gr(ln(m)),u.m=_,u.P=!0,ya(u,null)}function ya(u,m){u.F=Date.now(),He(u),u.A=ln(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Xr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Fl,u.g=ru(u.j,_?m:null,!u.m),0<u.O&&(u.M=new ji(P(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(aa[0]=V.toString()),V=aa);for(var z=0;z<V.length;z++){var te=na(_,V[z],w||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),vr(),qi(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Yt(this.g);var m=this.g.Ba();const vn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Ia(this.g)))){this.J||ut!=4||m==7||(m==8||0>=vn?vr(3):vr(2)),Ki(this);var _=this.g.Z();this.X=_;t:if(jl(this)){var w=Ia(this.g);u="";var V=w.length,z=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Hr(this);var te="";break t}this.h.i=new d.TextDecoder}for(m=0;m<V;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(z&&m==V-1)});w.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,zs(this.i,this.u,this.A,this.l,this.R,ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,mt=this.g;if((je=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(je)){var De=je;break t}}De=null}if(_=De)Cn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,_);else{this.o=!1,this.s=3,st(12),yn(this),Hr(this);break e}}if(this.P){_=!0;let cn;for(;!this.J&&this.C<te.length;)if(cn=Eh(this,te),cn==Hs){ut==4&&(this.s=4,st(14),_=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==ga){this.s=4,st(15),Cn(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else Cn(this.i,this.l,cn,null),_a(this,cn);if(jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||te.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)Cn(this.i,this.l,te,"[Invalid Chunked Response]"),yn(this),Hr(this);else if(0<te.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Aa(Tt),Tt.M=!0,st(11))}}else Cn(this.i,this.l,te,null),_a(this,te);ut==4&&yn(this),this.o&&!this.J&&(ut==4?no(this.j,this):(this.o=!1,He(this)))}else Ys(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),yn(this),Hr(this)}}}catch{}finally{}};function jl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Eh(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Hs:(_=Number(m.substring(_,w)),isNaN(_)?ga:(w+=1,w+_>m.length?Hs:(m=m.slice(w,w+_),u.C=w+_,m)))}Nn.prototype.cancel=function(){this.J=!0,yn(this)};function He(u){u.S=Date.now()+u.I,Bl(u,u.I)}function Bl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(P(u.ba,u),m)}function Ki(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ma(this.i,this.A),this.L!=2&&(vr(),st(17)),yn(this),this.s=2,Hr(this)):Bl(this,this.S-u)};function Hr(u){u.j.G==0||u.J||no(u.j,u)}function yn(u){Ki(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,la(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function _a(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Ht(_.h,u))){if(!u.K&&Ht(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var V=w;if(V[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)to(_),Vn(_);else break e;eo(_),st(18)}}else _.za=V[1],0<_.za-_.T&&37500>V[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(P(_.Za,_),6e3));if(1>=$l(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Sr(_,11)}else if((u.K||_.g==u)&&to(_),!Z(m))for(V=_.Da.g.parse(m),m=0;m<V.length;m++){let De=V[m];if(_.T=De[0],De=De[1],_.G==2)if(De[0]=="c"){_.K=De[1],_.ia=De[2];const Tt=De[3];Tt!=null&&(_.la=Tt,_.j.info("VER="+_.la));const ut=De[4];ut!=null&&(_.Aa=ut,_.j.info("SVER="+_.Aa));const vn=De[5];vn!=null&&typeof vn=="number"&&0<vn&&(w=1.5*vn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const cn=u.g;if(cn){const es=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(es){var z=w.h;z.g||es.indexOf("spdy")==-1&&es.indexOf("quic")==-1&&es.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(va(z,z.h),z.h=null))}if(w.D){const io=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(w.ya=io,ze(w.I,w.D,io))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var te=u;if(w.qa=nu(w,w.J?w.ia:null,w.W),te.K){Hl(w.h,te);var je=te,mt=w.L;mt&&(je.I=mt),je.B&&(Ki(je),He(je)),w.g=te}else Zi(w);0<_.i.length&&Zn(_)}else De[0]!="stop"&&De[0]!="close"||Sr(_,7);else _.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Sr(_,7):Pt(_):De[0]!="noop"&&_.l&&_.l.ta(De),_.v=0)}}vr(4)}catch{}}var zl=class{constructor(u,m){this.g=u,this.map=m}};function Gi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function an(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function $l(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function va(u,m){u.g?u.g.add(m):u.h=m}function Hl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Gi.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ql(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return H(u.i)}function Ws(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Ks(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ks(u),w=Ws(u),V=w.length,z=0;z<V;z++)m.call(void 0,w[z],_&&_[z],u)}var Qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),V=null;if(0<=w){var z=u[_].substring(0,w);V=u[_].substring(w+1)}else z=u[_];m(z,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Er(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Er){this.h=u.h,Xi(this,u.j),this.o=u.o,this.g=u.g,Wr(this,u.s),this.l=u.l;var m=u.i,_=new Xn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Kr(this,_),this.m=u.m}else u&&(m=String(u).match(Qi))?(this.h=!1,Xi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Wr(this,m[4]),this.l=Ne(m[5]||"",!0),Kr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Er.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Qr(m,Gs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Qr(m,Gs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Qr(_,_.charAt(0)=="/"?Gl:Kl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Qr(_,Ea)),u.join("")};function ln(u){return new Er(u)}function Xi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Wr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Kr(u,m,_){m instanceof Xn?(u.i=m,Yn(u.i,u.h)):(_||(m=Qr(m,Ql)),u.i=new Xn(m,u.h))}function ze(u,m,_){u.i.set(m,_)}function Gr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Wl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Wl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Gs=/[#\/\?@]/g,Kl=/[#\?:]/g,Gl=/[#\?]/g,Ql=/[#\?@]/g,Ea=/#/g;function Xn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&wh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Xn.prototype,n.add=function(u,m){kt(this),this.i=null,u=_n(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function bn(u,m){kt(u),m=_n(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Dn(u,m){return kt(u),m=_n(u,m),u.g.has(m)}n.forEach=function(u,m){kt(this),this.g.forEach(function(_,w){_.forEach(function(V){u.call(m,V,w,this)},this)},this)},n.na=function(){kt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const V=u[w];for(let z=0;z<V.length;z++)_.push(m[w])}return _},n.V=function(u){kt(this);let m=[];if(typeof u=="string")Dn(this,u)&&(m=m.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return kt(this),this.i=null,u=_n(this,u),Dn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Xr(u,m,_){bn(u,m),0<_.length&&(u.i=null,u.g.set(_n(u,m),H(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const z=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var V=z;te[w]!==""&&(V+="="+encodeURIComponent(String(te[w]))),u.push(V)}}return this.i=u.join("&")};function _n(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Yn(u,m){m&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(_,w){var V=w.toLowerCase();w!=V&&(bn(this,w),Xr(this,V,_))},u)),u.j=m}function Th(u,m){const _=new Hi;if(d.Image){const w=new Image;w.onload=F(Xt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=F(Xt,_,"TestLoadImage: error",!1,m,w),w.onabort=F(Xt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=F(Xt,_,"TestLoadImage: timeout",!1,m,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Xl(u,m){const _=new Hi,w=new AbortController,V=setTimeout(()=>{w.abort(),Xt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(z=>{clearTimeout(V),z.ok?Xt(_,"TestPingServer: ok",!0,m):Xt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(V),Xt(_,"TestPingServer: error",!1,m)})}function Xt(u,m,_,w,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),w(_)}catch{}}function Ih(){this.g=new ha}function Yl(u,m,_){const w=_||"";try{qr(u,function(V,z){let te=V;y(V)&&(te=ua(V)),m.push(w+z+"="+encodeURIComponent(te))})}catch(V){throw m.push(w+"type="+encodeURIComponent("_badmap")),V}}function wr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(wr,zi),wr.prototype.g=function(){return new Yi(this.l,this.j)},wr.prototype.i=function(u){return function(){return u}}({});function Yi(u,m){ft.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Yi,ft),n=Yi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?On(this):Ln(this),this.readyState==3&&Jl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,On(this))},n.Qa=function(u){this.g&&(this.response=u,On(this))},n.ga=function(){this.g&&On(this)};function On(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let m="";return Ie(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Yr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Tr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,m,_))}function Qe(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Qe,ft);var Sh=/^https?$/i,wa=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xn.g(),this.v=this.o?Us(this.o):Us(xn),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(z){Ji(this,z);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var V in w)_.set(V,w[V]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())_.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(z=>z.toLowerCase()=="content-type"),V=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(wa,m,void 0))||w||V||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,te]of _)this.g.setRequestHeader(z,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xs(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){Ji(this,z)}};function Ji(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Qs(u),un(u)}function Qs(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ta(this):this.bb())},n.bb=function(){Ta(this)};function Ta(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)oa(u.Ea,0,u);else if(pt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=te===0){var V=String(u.D).match(Qi)[1]||null;!V&&d.self&&d.self.location&&(V=d.self.location.protocol.slice(0,-1)),w=!Sh.test(V?V.toLowerCase():"")}_=w}if(_)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var z=2<Yt(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Qs(u)}}finally{un(u)}}}}function un(u,m){if(u.g){Xs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Xs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ca(m)}};function Ia(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ys(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(Z(u[w]))continue;var _=D(u[w]);const V=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const z=m[V]||[];m[V]=z,z.push(_)}C(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Sa(u){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,u),this.cb=Jn("retryDelaySeedMs",1e4,u),this.Wa=Jn("forwardChannelMaxRetries",2,u),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(u&&u.concurrentRequestLimit),this.Da=new Ih,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Sa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){st(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=nu(this,null,this.W),Zn(this)};function Pt(u){if(Js(u),u.G==3){var m=u.U++,_=ln(u.I);if(ze(_,"SID",u.K),ze(_,"RID",m),ze(_,"TYPE","terminate"),Ir(u,_),m=new Nn(u,u.j,m),m.L=2,m.v=Gr(ln(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=ru(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}tu(u)}function Vn(u){u.g&&(Aa(u),u.g.cancel(),u.g=null)}function Js(u){Vn(u),u.u&&(d.clearTimeout(u.u),u.u=null),to(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Zn(u){if(!an(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||oe(),re||(Be(),re=!0),me.add(m,u),u.B=0}}function Ah(u,m){return $l(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(P(u.Ga,u,m),eu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new Nn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=I(z),N(z,this.S)):z=this.S),this.m!==null||this.O||(V.H=z,z=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Jr(this,V,m),_=ln(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Ir(this,_),z&&(this.O?m="headers="+encodeURIComponent(String(Tr(z)))+"&"+m:this.m&&Yr(_,this.m,z)),va(this.h,V),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",m),ze(_,"SID","null"),V.T=!0,qs(V,_,null)):qs(V,_,m),this.G=2}}else this.G==3&&(u?Zs(this,u):this.i.length==0||an(this.h)||Zs(this))};function Zs(u,m){var _;m?_=m.l:_=u.U++;const w=ln(u.I);ze(w,"SID",u.K),ze(w,"RID",_),ze(w,"AID",u.T),Ir(u,w),u.m&&u.o&&Yr(w,u.m,u.o),_=new Nn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Jr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),va(u.h,_),qs(_,w,m)}function Ir(u,m){u.H&&Ie(u.H,function(_,w){ze(m,w,_)}),u.l&&qr({},function(_,w){ze(m,w,_)})}function Jr(u,m,_){_=Math.min(u.i.length,_);var w=u.l?P(u.l.Na,u.l,u):null;e:{var V=u.i;let z=-1;for(;;){const te=["count="+_];z==-1?0<_?(z=V[0].g,te.push("ofs="+z)):z=0:te.push("ofs="+z);let je=!0;for(let mt=0;mt<_;mt++){let De=V[mt].g;const Tt=V[mt].map;if(De-=z,0>De)z=Math.max(0,V[mt].g-100),je=!1;else try{Yl(Tt,te,"req"+De+"_")}catch{w&&w(Tt)}}if(je){w=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Zi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||oe(),re||(Be(),re=!0),me.add(m,u),u.v=0}}function eo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(P(u.Fa,u),eu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(P(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Vn(this),Zl(this))};function Aa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Zl(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=ln(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),Ir(u,m),u.m&&u.o&&Yr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Gr(ln(m)),_.m=null,_.P=!0,ya(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Vn(this),eo(this),st(19))};function to(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function no(u,m){var _=null;if(u.g==m){to(u),Aa(u),u.g=null;var w=2}else if(Ht(u.h,m))_=m.D,Hl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var V=u.B;w=$i(),pt(w,new Bs(w,_)),Zn(u)}else Zi(u);else if(V=m.s,V==3||V==0&&0<m.X||!(w==1&&Ah(u,m)||w==2&&eo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),V){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function eu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Sr(u,m){if(u.j.info("Error code "+m),m==2){var _=P(u.fb,u),w=u.Xa;const V=!w;w=new Er(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Xi(w,"https"),Gr(w),V?Th(w.toString(),_):Xl(w.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(m),tu(u),Js(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function tu(u){if(u.G=0,u.ka=[],u.l){const m=ql(u.h);(m.length!=0||u.i.length!=0)&&(U(u.ka,m),U(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function nu(u,m,_){var w=_ instanceof Er?ln(_):new Er(_);if(w.g!="")m&&(w.g=m+"."+w.g),Wr(w,w.s);else{var V=d.location;w=V.protocol,m=m?m+"."+V.hostname:V.hostname,V=+V.port;var z=new Er(null);w&&Xi(z,w),m&&(z.g=m),V&&Wr(z,V),_&&(z.l=_),w=z}return _=u.D,m=u.ya,_&&m&&ze(w,_,m),ze(w,"VER",u.la),Ir(u,w),w}function ru(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new wr({eb:_})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ra(){}n=Ra.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ro(){}ro.prototype.g=function(u,m){return new qt(u,m)};function qt(u,m){ft.call(this),this.g=new Sa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Z(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Z(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new er(this)}$(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Pt(this.g)},qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ua(u),u=_);m.i.push(new zl(m.Ya++,u)),m.G==3&&Zn(m)},qt.prototype.N=function(){this.g.l=null,delete this.j,Pt(this.g),delete this.g,qt.aa.N.call(this)};function iu(u){Gn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(iu,Gn);function su(){js.call(this),this.status=1}$(su,js);function er(u){this.g=u}$(er,Ra),er.prototype.ua=function(){pt(this.g,"a")},er.prototype.ta=function(u){pt(this.g,new iu(u))},er.prototype.sa=function(u){pt(this.g,new su)},er.prototype.ra=function(){pt(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,kE=function(){return new ro},RE=function(){return $i()},AE=Qn,kf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,mc=$s,Ul.COMPLETE="complete",SE=Ul,Fs.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,rl=Fs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,IE=Qe}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});const a_="@firebase/firestore",l_="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Hc("@firebase/firestore");function Ro(){return vs.logLevel}function ae(n,...e){if(vs.logLevel<=Ce.DEBUG){const t=e.map(cp);vs.debug(`Firestore (${Jo}): ${n}`,...t)}}function Fr(n,...e){if(vs.logLevel<=Ce.ERROR){const t=e.map(cp);vs.error(`Firestore (${Jo}): ${n}`,...t)}}function Uo(n,...e){if(vs.logLevel<=Ce.WARN){const t=e.map(cp);vs.warn(`Firestore (${Jo}): ${n}`,...t)}}function cp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n="Unexpected state"){const e=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: `+n;throw Fr(e),new Error(e)}function Fe(n,e){n||ve()}function Te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Bt.UNAUTHENTICATED))}shutdown(){}}class Qk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Xk{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Lr,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Lr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string"),new PE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Bt(e)}}class Yk{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Jk{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new Yk(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class u_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zk{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Rn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new u_(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new u_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=eP(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function Pf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const l=CE(),c=tP(l.encode(c_(n,t)),l.encode(c_(e,t)));return c!==0?c:Ae(i,o)}}t+=i>65535?2:1}return Ae(n.length,e.length)}function c_(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function tP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function Fo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=-62135596800,d_=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*d_);return new _t(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<h_)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/d_}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-h_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new _t(0,0))}static max(){return new we(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="__name__";class sr{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(),i===void 0?i=e.length-t:i>e.length-t&&ve(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=sr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=sr.isNumericId(e),o=sr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?sr.extractNumericId(e).compare(sr.extractNumericId(t)):Pf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ki.fromString(e.substring(4,e.length-2))}}class We extends sr{construct(e,t,i){return new We(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ie(q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new We(t)}static emptyPath(){return new We([])}}const nP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends sr{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return nP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===f_}static keyField(){return new bt([f_])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ie(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ie(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new ie(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(We.fromString(e))}static fromName(e){return new pe(We.fromString(e).popFirst(5))}static empty(){return new pe(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new We(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=-1;function rP(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new xi(o,pe.empty(),e)}function iP(n){return new xi(n.readTime,n.key,vl)}class xi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new xi(we.min(),pe.empty(),vl)}static max(){return new xi(we.max(),pe.empty(),vl)}}function sP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==oP)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(o=>o?K.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new K((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{c[y]=E,++d,d===l&&i(c)},E=>o(E))}})}static doWhile(e,t){return new K((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function lP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ea(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Xc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=-1;function Yc(n){return n==null}function xc(n){return n===0&&1/n==-1/0}function uP(n){return typeof n=="number"&&Number.isInteger(n)&&!xc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="";function cP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=p_(e)),e=hP(n.get(t),e);return p_(e)}function hP(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case NE:t+="";break;default:t+=l}}return t}function p_(n){return n+NE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ks(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new g_(this.data.getIterator())}getIteratorFrom(e){return new g_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class g_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Hn([])}unionWith(e){let t=new vt(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new DE("Invalid base64 string: "+l):l}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const dP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(n){if(Fe(!!n),typeof n=="string"){let e=0;const t=dP.exec(n);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="server_timestamp",LE="__type__",VE="__previous_value__",ME="__local_write_time__";function Jc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[LE])===null||t===void 0?void 0:t.stringValue)===OE}function Zc(n){const e=n.mapValue.fields[VE];return Jc(e)?Zc(e):e}function El(n){const e=Ni(n.mapValue.fields[ME].timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}const Nc="(default)";class wl{constructor(e,t){this.projectId=e,this.database=t||Nc}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database===Nc}isEqual(e){return e instanceof wl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="__type__",pP="__max__",nc={mapValue:{}},FE="__vector__",bc="value";function Di(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jc(n)?4:gP(n)?9007199254740991:mP(n)?10:11:ve()}function fr(n,e){if(n===e)return!0;const t=Di(n);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return El(n).isEqual(El(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ni(o.timestampValue),d=Ni(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return bi(o.bytesValue).isEqual(bi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=at(o.doubleValue),d=at(l.doubleValue);return c===d?xc(c)===xc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Fo(n.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(m_(c)!==m_(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!fr(c[p],d[p])))return!1;return!0}(n,e);default:return ve()}}function Tl(n,e){return(n.values||[]).find(t=>fr(t,e))!==void 0}function jo(n,e){if(n===e)return 0;const t=Di(n),i=Di(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=at(l.integerValue||l.doubleValue),p=at(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return y_(n.timestampValue,e.timestampValue);case 4:return y_(El(n),El(e));case 5:return Pf(n.stringValue,e.stringValue);case 6:return function(l,c){const d=bi(l),p=bi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const E=Ae(d[y],p[y]);if(E!==0)return E}return Ae(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ae(at(l.latitude),at(c.latitude));return d!==0?d:Ae(at(l.longitude),at(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return __(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,E;const T=l.fields||{},P=c.fields||{},F=(d=T[bc])===null||d===void 0?void 0:d.arrayValue,$=(p=P[bc])===null||p===void 0?void 0:p.arrayValue,H=Ae(((y=F==null?void 0:F.values)===null||y===void 0?void 0:y.length)||0,((E=$==null?void 0:$.values)===null||E===void 0?void 0:E.length)||0);return H!==0?H:__(F,$)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===nc.mapValue&&c===nc.mapValue)return 0;if(l===nc.mapValue)return 1;if(c===nc.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const P=Pf(p[T],E[T]);if(P!==0)return P;const F=jo(d[p[T]],y[E[T]]);if(F!==0)return F}return Ae(p.length,E.length)}(n.mapValue,e.mapValue);default:throw ve()}}function y_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Ni(n),i=Ni(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function __(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=jo(t[o],i[o]);if(l)return l}return Ae(t.length,i.length)}function Bo(n){return Cf(n)}function Cf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ni(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Cf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Cf(t.fields[c])}`;return o+"}"}(n.mapValue):ve()}function gc(n){switch(Di(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zc(n);return e?16+gc(e):16;case 5:return 2*n.stringValue.length;case 6:return bi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+gc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return ks(i.fields,(l,c)=>{o+=l.length+gc(c)}),o}(n.mapValue);default:throw ve()}}function Dc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xf(n){return!!n&&"integerValue"in n}function dp(n){return!!n&&"arrayValue"in n}function v_(n){return!!n&&"nullValue"in n}function E_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yc(n){return!!n&&"mapValue"in n}function mP(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[UE])===null||t===void 0?void 0:t.stringValue)===FE}function ll(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ks(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ll(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ll(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!yc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ll(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ll(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());yc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];yc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ks(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new kn(ll(this.value))}}function jE(n){const e=[];return ks(n.fields,(t,i)=>{const o=new bt([t]);if(yc(i)){const l=jE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new Hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new zt(e,0,we.min(),we.min(),we.min(),kn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,we.min(),we.min(),kn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,we.min(),we.min(),kn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){this.position=e,this.inclusive=t}}function w_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(c.referenceValue),t.key):i=jo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function T_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t="asc"){this.field=e,this.dir=t}}function yP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{}class dt extends BE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new vP(e,t,i):t==="array-contains"?new TP(e,i):t==="in"?new IP(e,i):t==="not-in"?new SP(e,i):t==="array-contains-any"?new AP(e,i):new dt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new EP(e,i):new wP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jo(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends BE{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Kn(e,t)}matches(e){return zE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function zE(n){return n.op==="and"}function $E(n){return _P(n)&&zE(n)}function _P(n){for(const e of n.filters)if(e instanceof Kn)return!1;return!0}function Nf(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+Bo(n.value);if($E(n))return n.filters.map(e=>Nf(e)).join(",");{const e=n.filters.map(t=>Nf(t)).join(",");return`${n.op}(${e})`}}function HE(n,e){return n instanceof dt?function(i,o){return o instanceof dt&&i.op===o.op&&i.field.isEqual(o.field)&&fr(i.value,o.value)}(n,e):n instanceof Kn?function(i,o){return o instanceof Kn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&HE(c,o.filters[d]),!0):!1}(n,e):void ve()}function qE(n){return n instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`}(n):n instanceof Kn?function(t){return t.op.toString()+" {"+t.getFilters().map(qE).join(" ,")+"}"}(n):"Filter"}class vP extends dt{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class EP extends dt{constructor(e,t){super(e,"in",t),this.keys=WE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wP extends dt{constructor(e,t){super(e,"not-in",t),this.keys=WE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function WE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>pe.fromName(i.referenceValue))}class TP extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dp(t)&&Tl(t.arrayValue,this.value)}}class IP extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Tl(this.value.arrayValue,t)}}class SP extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Tl(this.value.arrayValue,t)}}class AP extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Tl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function I_(n,e=null,t=[],i=[],o=null,l=null,c=null){return new RP(n,e,t,i,o,l,c)}function fp(n){const e=Te(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Nf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Yc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Bo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Bo(i)).join(",")),e.le=t}return e.le}function pp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!HE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!T_(n.startAt,e.startAt)&&T_(n.endAt,e.endAt)}function bf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function kP(n,e,t,i,o,l,c,d){return new Ps(n,e,t,i,o,l,c,d)}function mp(n){return new Ps(n)}function S_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gp(n){return n.collectionGroup!==null}function Lo(n){const e=Te(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new vt(bt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Il(l,i))}),t.has(bt.keyField().canonicalString())||e.he.push(new Il(bt.keyField(),i))}return e.he}function ur(n){const e=Te(n);return e.Pe||(e.Pe=PP(e,Lo(n))),e.Pe}function PP(n,e){if(n.limitType==="F")return I_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Il(o.field,l)});const t=n.endAt?new zo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new zo(n.startAt.position,n.startAt.inclusive):null;return I_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Df(n,e){const t=n.filters.concat([e]);return new Ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Oc(n,e,t){return new Ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function eh(n,e){return pp(ur(n),ur(e))&&n.limitType===e.limitType}function KE(n){return`${fp(ur(n))}|lt:${n.limitType}`}function ko(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>qE(o)).join(", ")}]`),Yc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Bo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Bo(o)).join(",")),`Target(${i})`}(ur(n))}; limitType=${n.limitType})`}function th(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Lo(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=w_(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,Lo(i),o)||i.endAt&&!function(c,d,p){const y=w_(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,Lo(i),o))}(n,e)}function CP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function GE(n){return(e,t)=>{let i=!1;for(const o of Lo(n)){const l=xP(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function xP(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?jo(p,y):ve()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return bE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new Ze(pe.comparator);function jr(){return NP}const QE=new Ze(pe.comparator);function il(...n){let e=QE;for(const t of n)e=e.insert(t.key,t);return e}function XE(n){let e=QE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ps(){return ul()}function YE(){return ul()}function ul(){return new Cs(n=>n.toString(),(n,e)=>n.isEqual(e))}const bP=new Ze(pe.comparator),DP=new vt(pe.comparator);function xe(...n){let e=DP;for(const t of n)e=e.add(t);return e}const OP=new vt(Ae);function LP(){return OP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function JE(n){return{integerValue:""+n}}function VP(n,e){return uP(e)?JE(e):yp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this._=void 0}}function MP(n,e,t){return n instanceof Lc?function(o,l){const c={fields:{[LE]:{stringValue:OE},[ME]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Jc(l)&&(l=Zc(l)),l&&(c.fields[VE]=l),{mapValue:c}}(t,e):n instanceof Sl?ew(n,e):n instanceof Al?tw(n,e):function(o,l){const c=ZE(o,l),d=A_(c)+A_(o.Ie);return xf(c)&&xf(o.Ie)?JE(d):yp(o.serializer,d)}(n,e)}function UP(n,e,t){return n instanceof Sl?ew(n,e):n instanceof Al?tw(n,e):t}function ZE(n,e){return n instanceof Vc?function(i){return xf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Lc extends nh{}class Sl extends nh{constructor(e){super(),this.elements=e}}function ew(n,e){const t=nw(e);for(const i of n.elements)t.some(o=>fr(o,i))||t.push(i);return{arrayValue:{values:t}}}class Al extends nh{constructor(e){super(),this.elements=e}}function tw(n,e){let t=nw(e);for(const i of n.elements)t=t.filter(o=>!fr(o,i));return{arrayValue:{values:t}}}class Vc extends nh{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function A_(n){return at(n.integerValue||n.doubleValue)}function nw(n){return dp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function FP(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof Sl&&o instanceof Sl||i instanceof Al&&o instanceof Al?Fo(i.elements,o.elements,fr):i instanceof Vc&&o instanceof Vc?fr(i.Ie,o.Ie):i instanceof Lc&&o instanceof Lc}(n.transform,e.transform)}class jP{constructor(e,t){this.version=e,this.transformResults=t}}class cr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rh{}function rw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new _p(n.key,cr.none()):new Nl(n.key,n.data,cr.none());{const t=n.data,i=kn.empty();let o=new vt(bt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new xs(n.key,i,new Hn(o.toArray()),cr.none())}}function BP(n,e,t){n instanceof Nl?function(o,l,c){const d=o.value.clone(),p=k_(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof xs?function(o,l,c){if(!_c(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=k_(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(iw(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function cl(n,e,t,i){return n instanceof Nl?function(l,c,d,p){if(!_c(l.precondition,c))return d;const y=l.value.clone(),E=P_(l.fieldTransforms,p,c);return y.setAll(E),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof xs?function(l,c,d,p){if(!_c(l.precondition,c))return d;const y=P_(l.fieldTransforms,p,c),E=c.data;return E.setAll(iw(l)),E.setAll(y),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return _c(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function zP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=ZE(i.transform,o||null);l!=null&&(t===null&&(t=kn.empty()),t.set(i.field,l))}return t||null}function R_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Fo(i,o,(l,c)=>FP(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nl extends rh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class xs extends rh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function iw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function k_(n,e,t){const i=new Map;Fe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,UP(c,d,t[o]))}return i}function P_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,MP(l,c,e))}return i}class _p extends rh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $P extends rh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&BP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=cl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=cl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=YE();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=rw(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(we.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,(t,i)=>R_(t,i))&&Fo(this.baseMutations,e.baseMutations,(t,i)=>R_(t,i))}}class vp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length);let o=function(){return bP}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new vp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Oe;function KP(n){switch(n){case q.OK:return ve();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ve()}}function sw(n){if(n===void 0)return Fr("GRPC error has no .code"),q.UNKNOWN;switch(n){case ht.OK:return q.OK;case ht.CANCELLED:return q.CANCELLED;case ht.UNKNOWN:return q.UNKNOWN;case ht.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ht.INTERNAL:return q.INTERNAL;case ht.UNAVAILABLE:return q.UNAVAILABLE;case ht.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ht.NOT_FOUND:return q.NOT_FOUND;case ht.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ht.ABORTED:return q.ABORTED;case ht.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ht.DATA_LOSS:return q.DATA_LOSS;default:return ve()}}(Oe=ht||(ht={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=new ki([4294967295,4294967295],0);function C_(n){const e=CE().encode(n),t=new TE;return t.update(e),new Uint8Array(t.digest())}function x_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ki([t,i],0),new ki([o,l],0)]}class Ep{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new sl(`Invalid padding: ${t}`);if(i<0)throw new sl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new sl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new sl(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ki.fromNumber(this.Ee)}Ae(e,t,i){let o=e.add(t.multiply(ki.fromNumber(i)));return o.compare(GP)===1&&(o=new ki([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=C_(e),[i,o]=x_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,o,l);if(!this.Re(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Ep(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=C_(e),[i,o]=x_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,o,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class sl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,bl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ih(we.min(),o,new Ze(Ae),jr(),xe())}}class bl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new bl(i,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,i,o){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=o}}class ow{constructor(e,t){this.targetId=e,this.ge=t}}class aw{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class N_{constructor(){this.pe=0,this.ye=b_(),this.we=Dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=xe(),t=xe(),i=xe();return this.ye.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve()}}),new bl(this.we,this.Se,e,t,i)}Me(){this.be=!1,this.ye=b_()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Fe(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class QP{constructor(e){this.ke=e,this.qe=new Map,this.Qe=jr(),this.$e=rc(),this.Ue=rc(),this.Ke=new Ze(Ae)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:ve()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,i=e.ge.count,o=this.Xe(t);if(o){const l=o.target;if(bf(l))if(i===0){const c=new pe(l.path);this.ze(t,c,zt.newNoDocument(c,we.min()))}else Fe(i===1);else{const c=this.et(t);if(c!==i){const d=this.tt(e),p=d?this.nt(d,e,c):1;if(p!==0){this.Ye(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=bi(i).toUint8Array()}catch(p){if(p instanceof DE)return Uo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Ep(c,o,l)}catch(p){return Uo(p instanceof sl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&bf(d.target)){const p=new pe(d.target.path);this._t(p).has(c)||this.ut(c,p)||this.ze(c,p,zt.newNoDocument(p,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let i=xe();this.Ue.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const o=new ih(e,t,this.Ke,this.Qe,i);return this.Qe=jr(),this.$e=rc(),this.Ue=rc(),this.Ke=new Ze(Ae),o}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new N_,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new vt(Ae),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new vt(Ae),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new N_),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function rc(){return new Ze(pe.comparator)}function b_(){return new Ze(pe.comparator)}const XP={asc:"ASCENDING",desc:"DESCENDING"},YP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JP={and:"AND",or:"OR"};class ZP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Of(n,e){return n.useProto3Json||Yc(e)?e:{value:e}}function Mc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function eC(n,e){return Mc(n,e.toTimestamp())}function hr(n){return Fe(!!n),we.fromTimestamp(function(t){const i=Ni(t);return new _t(i.seconds,i.nanos)}(n))}function wp(n,e){return Lf(n,e).canonicalString()}function Lf(n,e){const t=function(o){return new We(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function uw(n){const e=We.fromString(n);return Fe(pw(e)),e}function Vf(n,e){return wp(n.databaseId,e.path)}function sf(n,e){const t=uw(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(hw(t))}function cw(n,e){return wp(n.databaseId,e)}function tC(n){const e=uw(n);return e.length===4?We.emptyPath():hw(e)}function Mf(n){return new We(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hw(n){return Fe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function D_(n,e,t){return{name:Vf(n,e),fields:t.value.mapValue.fields}}function nC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Fe(E===void 0||typeof E=="string"),Dt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Dt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const E=y.code===void 0?q.UNKNOWN:sw(y.code);return new ie(E,y.message||"")}(c);t=new aw(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=sf(n,i.document.name),l=hr(i.document.updateTime),c=i.document.createTime?hr(i.document.createTime):we.min(),d=new kn({mapValue:{fields:i.document.fields}}),p=zt.newFoundDocument(o,l,c,d),y=i.targetIds||[],E=i.removedTargetIds||[];t=new vc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=sf(n,i.document),l=i.readTime?hr(i.readTime):we.min(),c=zt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new vc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=sf(n,i.document),l=i.removedTargetIds||[];t=new vc([],l,o,null)}else{if(!("filter"in e))return ve();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new WP(o,l),d=i.targetId;t=new ow(d,c)}}return t}function rC(n,e){let t;if(e instanceof Nl)t={update:D_(n,e.key,e.value)};else if(e instanceof _p)t={delete:Vf(n,e.key)};else if(e instanceof xs)t={update:D_(n,e.key,e.data),updateMask:dC(e.fieldMask)};else{if(!(e instanceof $P))return ve();t={verify:Vf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Lc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Sl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Al)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Vc)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw ve()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:eC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve()}(n,e.precondition)),t}function iC(n,e){return n&&n.length>0?(Fe(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?hr(o.updateTime):hr(l);return c.isEqual(we.min())&&(c=hr(l)),new jP(c,o.transformResults||[])}(t,e))):[]}function sC(n,e){return{documents:[cw(n,e.path)]}}function oC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=cw(n,o);const l=function(y){if(y.length!==0)return fw(Kn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(E=>function(P){return{field:Po(P.field),direction:uC(P.dir)}}(E))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Of(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ht:t,parent:o}}function aC(n){let e=tC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const P=dw(T);return P instanceof Kn&&$E(P)?P.getFilters():[P]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(P=>function($){return new Il(Co($.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(P))}(t.orderBy));let d=null;t.limit&&(d=function(T){let P;return P=typeof T=="object"?T.value:T,Yc(P)?null:P}(t.limit));let p=null;t.startAt&&(p=function(T){const P=!!T.before,F=T.values||[];return new zo(F,P)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const P=!T.before,F=T.values||[];return new zo(F,P)}(t.endAt)),kP(e,o,c,l,d,"F",p,y)}function lC(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Co(t.unaryFilter.field);return dt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Co(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Co(t.unaryFilter.field);return dt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Co(t.unaryFilter.field);return dt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(n):n.fieldFilter!==void 0?function(t){return dt.create(Co(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Kn.create(t.compositeFilter.filters.map(i=>dw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve()}}(t.compositeFilter.op))}(n):ve()}function uC(n){return XP[n]}function cC(n){return YP[n]}function hC(n){return JP[n]}function Po(n){return{fieldPath:n.canonicalString()}}function Co(n){return bt.fromServerFormat(n.fieldPath)}function fw(n){return n instanceof dt?function(t){if(t.op==="=="){if(E_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NAN"}};if(v_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(E_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NAN"}};if(v_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Po(t.field),op:cC(t.op),value:t.value}}}(n):n instanceof Kn?function(t){const i=t.getFilters().map(o=>fw(o));return i.length===1?i[0]:{compositeFilter:{op:hC(t.op),filters:i}}}(n):ve()}function dC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,i,o,l=we.min(),c=we.min(),d=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.Tt=e}}function pC(n){const e=aC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.Tn=new gC}addToCollectionParentIndex(e,t){return this.Tn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(xi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(xi.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class gC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(We.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mw=41943040;class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(mw,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new $o(0)}static Kn(){return new $o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="LruGarbageCollector",yC=1048576;function V_([n,e],[t,i]){const o=Ae(n,t);return o===0?Ae(e,i):o}class _C{constructor(e){this.Hn=e,this.buffer=new vt(V_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();V_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ae(L_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ea(t)?ae(L_,"Ignoring IndexedDB error during garbage collection: ",t):await Zo(t)}await this.er(3e5)})}}class EC{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Xc.ae);const i=new _C(t);return this.tr.forEachTarget(e,o=>i.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>i.Zn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(O_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),O_):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,o,l,c,d,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),Ro()<=Ce.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function wC(n,e){return new EC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.changes=new Cs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&cl(i.mutation,o,Hn.empty(),_t.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,xe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=xe()){const o=ps();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=il();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=ps();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,xe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=jr();const c=ul(),d=function(){return ul()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof xs)?l=l.insert(y.key,y):E!==void 0?(c.set(y.key,E.mutation.getFieldMask()),cl(E.mutation,y,E.mutation.getFieldMask(),_t.now())):c.set(y.key,Hn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>c.set(y,E)),t.forEach((y,E)=>{var T;return d.set(y,new IC(E,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=ul();let o=new Ze((c,d)=>c-d),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||Hn.empty();E=d.applyToLocalView(y,E),i.set(p,E);const T=(o.get(d.batchId)||xe()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,E=p.value,T=YE();E.forEach(P=>{if(!l.has(P)){const F=rw(t.get(P),i.get(P));F!==null&&T.set(P,F),l=l.add(P)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return K.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return pe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(ps());let d=vl,p=l;return c.next(y=>K.forEach(y,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(P=>{p=p.insert(E,P)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,xe())).next(E=>({batchId:d,changes:XE(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(i=>{let o=il();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=il();return this.indexManager.getCollectionParents(e,l).next(d=>K.forEach(d,p=>{const y=function(T,P){return new Ps(P,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,P)=>{c=c.insert(T,P)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const E=y.getKey();c.get(E)===null&&(c=c.insert(E,zt.newInvalidDocument(E)))});let d=il();return c.forEach((p,y)=>{const E=l.get(p);E!==void 0&&cl(E.mutation,y,Hn.empty(),_t.now()),th(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return K.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:pC(o.bundledQuery),readTime:hr(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.overlays=new Ze(pe.comparator),this.Rr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ps();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Et(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Rr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=ps(),l=t.length+1,c=new pe(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new Ze((y,E)=>y-E);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ps(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const d=ps(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>d.set(y,E)),!(d.size()>=o)););return K.resolve(d)}Et(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Rr.get(o.largestBatchId).delete(i.key);this.Rr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new qP(t,i));let l=this.Rr.get(t);l===void 0&&(l=xe(),this.Rr.set(t,l)),this.Rr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.Vr=new vt(Rt.mr),this.gr=new vt(Rt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new Rt(e,t))}Sr(e,t){e.forEach(i=>this.removeReference(i,t))}br(e){const t=new pe(new We([])),i=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.gr.forEachInRange([i,o],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new pe(new We([])),i=new Rt(t,e),o=new Rt(t,e+1);let l=xe();return this.gr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Rt(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return pe.comparator(e.key,t.key)||Ae(e.Cr,t.Cr)}static pr(e,t){return Ae(e.Cr,t.Cr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new vt(Rt.mr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new HP(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.Mr=this.Mr.add(new Rt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Nr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?hp:this.Fr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([i,o],c=>{const d=this.Or(c.Cr);l.push(d)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(Ae);return t.forEach(o=>{const l=new Rt(o,0),c=new Rt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{i=i.add(d.Cr)})}),K.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const c=new Rt(new pe(l),0);let d=new vt(Ae);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.Cr)),!0)},c),K.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(i=>{const o=this.Or(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return K.forEach(t.mutations,o=>{const l=new Rt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new Rt(t,0),o=this.Mr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.kr=e,this.docs=function(){return new Ze(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=jr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=jr();const c=t.path,d=new pe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||sP(iP(E),i)<=0||(o.has(E.key)||th(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ve()}qr(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new xC(this)}getSize(e){return K.resolve(this.size)}}class xC extends TC{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.persistence=e,this.Qr=new Cs(t=>fp(t),pp),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Tp,this.targetCount=0,this.Kr=$o.Un()}forEachTarget(e,t){return this.Qr.forEach((i,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),K.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.zn(t),K.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.Ur.yr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.Ur.Sr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Ur.vr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Xc(0),this.zr=!1,this.zr=!0,this.jr=new kC,this.referenceDelegate=e(this),this.Hr=new NC(this),this.indexManager=new mC,this.remoteDocumentCache=function(o){return new CC(o)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new fC(t),this.Yr=new AC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new RC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new PC(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new bC(this.Gr.next());return this.referenceDelegate.Zr(),i(o).next(l=>this.referenceDelegate.Xr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}ei(e,t){return K.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class bC extends aP{constructor(e){super(),this.currentSequenceNumber=e}}class Ip{constructor(e){this.persistence=e,this.ti=new Tp,this.ni=null}static ri(e){return new Ip(e)}get ii(){if(this.ni)return this.ni;throw ve()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),K.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ii.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ii,i=>{const o=pe.fromPath(i);return this.si(e,o).next(l=>{l||t.removeEntry(o,we.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return K.or([()=>K.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Uc{constructor(e,t){this.persistence=e,this.oi=new Cs(i=>cP(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=wC(this,t)}static ri(e,t){return new Uc(e,t)}Zr(){}Xr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return K.forEach(this.oi,(i,o)=>this.ar(e,i,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.qr(e,c=>this.ar(e,c,t).next(d=>{d||(i++,l.removeEntry(c,we.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),K.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gc(e.data.value)),t}ar(e,t,i){return K.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=o}static Yi(e,t){let i=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Sp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return pS()?8:lP($t())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new DC;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,i,o){return i.documentReadCount<this.es?(Ro()<=Ce.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),K.resolve()):(Ro()<=Ce.DEBUG&&ae("QueryEngine","Query:",ko(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ts*o?(Ro()<=Ce.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):K.resolve())}rs(e,t){if(S_(t))return K.resolve(null);let i=ur(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Oc(t,null,"F"),i=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=xe(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.cs(t,d);return this.ls(t,y,c,p.readTime)?this.rs(e,Oc(t,null,"F")):this.hs(e,y,t,p)}))})))}ss(e,t,i,o){return S_(t)||o.isEqual(we.min())?K.resolve(null):this.ns.getDocuments(e,i).next(l=>{const c=this.cs(t,l);return this.ls(t,c,i,o)?K.resolve(null):(Ro()<=Ce.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ko(t)),this.hs(e,c,t,rP(o,vl)).next(d=>d))})}cs(e,t){let i=new vt(GE(e));return t.forEach((o,l)=>{th(e,l)&&(i=i.add(l))}),i}ls(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}_s(e,t,i){return Ro()<=Ce.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",ko(t)),this.ns.getDocumentsMatchingQuery(e,t,xi.min(),i)}hs(e,t,i,o){return this.ns.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="LocalStore",LC=3e8;class VC{constructor(e,t,i,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new Ze(Ae),this.Is=new Cs(l=>fp(l),pp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function MC(n,e,t,i){return new VC(n,e,t,i)}async function yw(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=xe();for(const y of o){c.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){d.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Rs:y,removedBatchIds:c,addedBatchIds:d}))})})}function UC(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,y,E){const T=y.batch,P=T.keys();let F=K.resolve();return P.forEach($=>{F=F.next(()=>E.getEntry(p,$)).next(H=>{const U=y.docVersions.get($);Fe(U!==null),H.version.compareTo(U)<0&&(T.applyToRemoteDocument(H,y),H.isValidDocument()&&(H.setReadTime(y.commitVersion),E.addEntry(H)))})}),F.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=xe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function _w(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function FC(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const d=[];e.targetChanges.forEach((E,T)=>{const P=o.get(T);if(!P)return;d.push(t.Hr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,E.addedDocuments,T)));let F=P.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,i)),o=o.insert(T,F),function(H,U,W){return H.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=LC?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(P,F,E)&&d.push(t.Hr.updateTargetData(l,F))});let p=jr(),y=xe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(jC(l,c,e.documentUpdates).next(E=>{p=E.Vs,y=E.fs})),!i.isEqual(we.min())){const E=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(E)}return K.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.Ts=o,l))}function jC(n,e,t){let i=xe(),o=xe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=jr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae(Ap,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Vs:c,fs:o}})}function BC(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=hp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function zC(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Hr.getTargetData(i,e).next(l=>l?(o=l,K.resolve(o)):t.Hr.allocateTargetId(i).next(c=>(o=new Ti(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.Ts.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function Uf(n,e,t){const i=Te(n),o=i.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!ea(c))throw c;ae(Ap,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ts=i.Ts.remove(e),i.Is.delete(o.target)}function M_(n,e,t){const i=Te(n);let o=we.min(),l=xe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,E){const T=Te(p),P=T.Is.get(E);return P!==void 0?K.resolve(T.Ts.get(P)):T.Hr.getTargetData(y,E)}(i,c,ur(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Ps.getDocumentsMatchingQuery(c,e,t?o:we.min(),t?l:xe())).next(d=>($C(i,CP(e),d),{documents:d,gs:l})))}function $C(n,e,t){let i=n.Es.get(e)||we.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Es.set(e,i)}class U_{constructor(){this.activeTargetIds=LP()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HC{constructor(){this.ho=new U_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new U_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="ConnectivityMonitor";class j_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ae(F_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ae(F_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic=null;function Ff(){return ic===null?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="RestConnection",WC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class KC{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${o}`,this.wo=this.databaseId.database===Nc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}So(e,t,i,o,l){const c=Ff(),d=this.bo(e,t.toUriEncodedString());ae(of,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,l),this.vo(e,d,p,i).then(y=>(ae(of,`Received RPC '${e}' ${c}: `,y),y),y=>{throw Uo(of,`RPC '${e}' ${c} failed with error: `,y,"url: ",d,"request:",i),y})}Co(e,t,i,o,l,c){return this.So(e,t,i,o,l)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}bo(e,t){const i=WC[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class QC extends KC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,o){const l=Ff();return new Promise((c,d)=>{const p=new IE;p.setWithCredentials(!0),p.listenOnce(SE.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case mc.NO_ERROR:const E=p.getResponseJson();ae(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),c(E);break;case mc.TIMEOUT:ae(jt,`RPC '${e}' ${l} timed out`),d(new ie(q.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const T=p.getStatus();if(ae(jt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let P=p.getResponseJson();Array.isArray(P)&&(P=P[0]);const F=P==null?void 0:P.error;if(F&&F.status&&F.message){const $=function(U){const W=U.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(W)>=0?W:q.UNKNOWN}(F.status);d(new ie($,F.message))}else d(new ie(q.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ie(q.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{ae(jt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ae(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}Wo(e,t,i){const o=Ff(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=kE(),d=RE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");ae(jt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=c.createWebChannel(E,p);let P=!1,F=!1;const $=new GC({Fo:U=>{F?ae(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(P||(ae(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),P=!0),ae(jt,`RPC '${e}' stream ${o} sending:`,U),T.send(U))},Mo:()=>T.close()}),H=(U,W,Z)=>{U.listen(W,ne=>{try{Z(ne)}catch(ue){setTimeout(()=>{throw ue},0)}})};return H(T,rl.EventType.OPEN,()=>{F||(ae(jt,`RPC '${e}' stream ${o} transport opened.`),$.Qo())}),H(T,rl.EventType.CLOSE,()=>{F||(F=!0,ae(jt,`RPC '${e}' stream ${o} transport closed`),$.Uo())}),H(T,rl.EventType.ERROR,U=>{F||(F=!0,Uo(jt,`RPC '${e}' stream ${o} transport errored:`,U),$.Uo(new ie(q.UNAVAILABLE,"The operation could not be completed")))}),H(T,rl.EventType.MESSAGE,U=>{var W;if(!F){const Z=U.data[0];Fe(!!Z);const ne=Z,ue=(ne==null?void 0:ne.error)||((W=ne[0])===null||W===void 0?void 0:W.error);if(ue){ae(jt,`RPC '${e}' stream ${o} received error:`,ue);const Re=ue.status;let Ie=function(k){const N=ht[k];if(N!==void 0)return sw(N)}(Re),C=ue.message;Ie===void 0&&(Ie=q.INTERNAL,C="Unknown error status: "+Re+" with message "+ue.message),F=!0,$.Uo(new ie(Ie,C)),T.close()}else ae(jt,`RPC '${e}' stream ${o} received:`,Z),$.Ko(Z)}}),H(d,AE.STAT_EVENT,U=>{U.stat===kf.PROXY?ae(jt,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===kf.NOPROXY&&ae(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.$o()},0),$}}function af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){return new ZP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=o,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="PersistentStream";class Ew{constructor(e,t,i,o,l,c,d,p){this.Ti=e,this.n_=i,this.r_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new vw(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.i_===t&&this.V_(i,o)},i=>{e(()=>{const o=new ie(q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(o)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{i(()=>this.m_(o))}),this.stream.onMessage(o=>{i(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ae(B_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ae(B_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XC extends Ew{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=nC(this.serializer,e),i=function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?hr(c.readTime):we.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=Mf(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=bf(p)?{documents:sC(l,p)}:{query:oC(l,p).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=lw(l,c.resumeToken);const y=Of(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(we.min())>0){d.readTime=Mc(l,c.snapshotVersion.toTimestamp());const y=Of(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=lC(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=Mf(this.serializer),t.removeTarget=e,this.I_(t)}}class YC extends Ew{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=iC(e.writeResults,e.commitTime),i=hr(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=Mf(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>rC(this.serializer,i))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{}class ZC extends JC{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.So(e,Lf(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(q.UNKNOWN,l.toString())})}Co(e,t,i,o,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,Lf(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ie(q.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class ex{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Fr(t),this.N_=!1):ae("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="RemoteStore";class tx{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{i.enqueueAndForget(async()=>{Ns(this)&&(ae(Es,"Restarting streams for network reachability change."),await async function(p){const y=Te(p);y.W_.add(4),await Dl(y),y.j_.set("Unknown"),y.W_.delete(4),await oh(y)}(this))})}),this.j_=new ex(i,o)}}async function oh(n){if(Ns(n))for(const e of n.G_)await e(!0)}async function Dl(n){for(const e of n.G_)await e(!1)}function ww(n,e){const t=Te(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Cp(t)?Pp(t):ta(t).c_()&&kp(t,e))}function Rp(n,e){const t=Te(n),i=ta(t);t.K_.delete(e),i.c_()&&Tw(t,e),t.K_.size===0&&(i.c_()?i.P_():Ns(t)&&t.j_.set("Unknown"))}function kp(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ta(n).y_(e)}function Tw(n,e){n.H_.Ne(e),ta(n).w_(e)}function Pp(n){n.H_=new QP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),ta(n).start(),n.j_.B_()}function Cp(n){return Ns(n)&&!ta(n).u_()&&n.K_.size>0}function Ns(n){return Te(n).W_.size===0}function Iw(n){n.H_=void 0}async function nx(n){n.j_.set("Online")}async function rx(n){n.K_.forEach((e,t)=>{kp(n,e)})}async function ix(n,e){Iw(n),Cp(n)?(n.j_.q_(e),Pp(n)):n.j_.set("Unknown")}async function sx(n,e,t){if(n.j_.set("Online"),e instanceof aw&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.K_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.K_.delete(d),o.H_.removeTarget(d))}(n,e)}catch(i){ae(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Fc(n,i)}else if(e instanceof vc?n.H_.We(e):e instanceof ow?n.H_.Ze(e):n.H_.je(e),!t.isEqual(we.min()))try{const i=await _w(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.K_.get(y);E&&l.K_.set(y,E.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const E=l.K_.get(p);if(!E)return;l.K_.set(p,E.withResumeToken(Dt.EMPTY_BYTE_STRING,E.snapshotVersion)),Tw(l,p);const T=new Ti(E.target,p,y,E.sequenceNumber);kp(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ae(Es,"Failed to raise snapshot:",i),await Fc(n,i)}}async function Fc(n,e,t){if(!ea(e))throw e;n.W_.add(1),await Dl(n),n.j_.set("Offline"),t||(t=()=>_w(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae(Es,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await oh(n)})}function Sw(n,e){return e().catch(t=>Fc(n,t,e))}async function ah(n){const e=Te(n),t=Oi(e);let i=e.U_.length>0?e.U_[e.U_.length-1].batchId:hp;for(;ox(e);)try{const o=await BC(e.localStore,i);if(o===null){e.U_.length===0&&t.P_();break}i=o.batchId,ax(e,o)}catch(o){await Fc(e,o)}Aw(e)&&Rw(e)}function ox(n){return Ns(n)&&n.U_.length<10}function ax(n,e){n.U_.push(e);const t=Oi(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Aw(n){return Ns(n)&&!Oi(n).u_()&&n.U_.length>0}function Rw(n){Oi(n).start()}async function lx(n){Oi(n).C_()}async function ux(n){const e=Oi(n);for(const t of n.U_)e.b_(t.mutations)}async function cx(n,e,t){const i=n.U_.shift(),o=vp.from(i,e,t);await Sw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await ah(n)}async function hx(n,e){e&&Oi(n).S_&&await async function(i,o){if(function(c){return KP(c)&&c!==q.ABORTED}(o.code)){const l=i.U_.shift();Oi(i).h_(),await Sw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await ah(i)}}(n,e),Aw(n)&&Rw(n)}async function z_(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),ae(Es,"RemoteStore received new credentials");const i=Ns(t);t.W_.add(3),await Dl(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await oh(t)}async function dx(n,e){const t=Te(n);e?(t.W_.delete(2),await oh(t)):e||(t.W_.add(2),await Dl(t),t.j_.set("Unknown"))}function ta(n){return n.J_||(n.J_=function(t,i,o){const l=Te(t);return l.M_(),new XC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{xo:nx.bind(null,n),No:rx.bind(null,n),Lo:ix.bind(null,n),p_:sx.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Cp(n)?Pp(n):n.j_.set("Unknown")):(await n.J_.stop(),Iw(n))})),n.J_}function Oi(n){return n.Y_||(n.Y_=function(t,i,o){const l=Te(t);return l.M_(),new YC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:lx.bind(null,n),Lo:hx.bind(null,n),D_:ux.bind(null,n),v_:cx.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await ah(n)):(await n.Y_.stop(),n.U_.length>0&&(ae(Es,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new xp(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Np(n,e){if(Fr("AsyncQueue",`${e}: ${n}`),ea(n))return new ie(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=il(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.Z_=new Ze(pe.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ve():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Ho{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Ho(e,t,Vo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class px{constructor(){this.queries=H_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=H_(),l.forEach((c,d)=>{for(const p of d.ta)p.onError(i)})})(this,new ie(q.ABORTED,"Firestore shutting down"))}}function H_(){return new Cs(n=>KE(n),eh)}async function kw(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.na()&&e.ra()&&(i=2):(l=new fx,i=e.ra()?0:1);try{switch(i){case 0:l.ea=await t.onListen(o,!0);break;case 1:l.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=Np(c,`Initialization of query '${ko(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&bp(t)}async function Pw(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?o=e.ra()?0:1:!l.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function mx(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(o)&&(i=!0);c.ea=o}}i&&bp(t)}function gx(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.ta)l.onError(t);i.queries.delete(e)}function bp(n){n.ia.forEach(e=>{e.next()})}var jf,q_;(q_=jf||(jf={}))._a="default",q_.Cache="cache";class Cw{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ho(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==jf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.key=e}}class Nw{constructor(e){this.key=e}}class yx{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=xe(),this.mutatedKeys=xe(),this.ya=GE(e),this.wa=new Vo(this.ya)}get Sa(){return this.fa}ba(e,t){const i=t?t.Da:new $_,o=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const P=o.get(E),F=th(this.query,T)?T:null,$=!!P&&this.mutatedKeys.has(P.key),H=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let U=!1;P&&F?P.data.isEqual(F.data)?$!==H&&(i.track({type:3,doc:F}),U=!0):this.va(P,F)||(i.track({type:2,doc:F}),U=!0,(p&&this.ya(F,p)>0||y&&this.ya(F,y)<0)&&(d=!0)):!P&&F?(i.track({type:0,doc:F}),U=!0):P&&!F&&(i.track({type:1,doc:P}),U=!0,(p||y)&&(d=!0)),U&&(F?(c=c.add(F),l=H?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{wa:c,Da:i,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((E,T)=>function(F,$){const H=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return H(F)-H($)}(E.type,T.type)||this.ya(E.doc,T.doc)),this.Ca(i),o=o!=null&&o;const d=t&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,c.length!==0||y?{snapshot:new Ho(this.query,e.wa,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new $_,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=xe(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new Nw(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new xw(i))}),t}Oa(e){this.fa=e.gs,this.pa=xe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Ho.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Dp="SyncEngine";class _x{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class vx{constructor(e){this.key=e,this.Ba=!1}}class Ex{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Cs(d=>KE(d),eh),this.qa=new Map,this.Qa=new Set,this.$a=new Ze(pe.comparator),this.Ua=new Map,this.Ka=new Tp,this.Wa={},this.Ga=new Map,this.za=$o.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function wx(n,e,t=!0){const i=Mw(n);let o;const l=i.ka.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Na()):o=await bw(i,e,t,!0),o}async function Tx(n,e){const t=Mw(n);await bw(t,e,!0,!1)}async function bw(n,e,t,i){const o=await zC(n.localStore,ur(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await Ix(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&ww(n.remoteStore,o),d}async function Ix(n,e,t,i,o){n.Ha=(T,P,F)=>async function(H,U,W,Z){let ne=U.view.ba(W);ne.ls&&(ne=await M_(H.localStore,U.query,!1).then(({documents:C})=>U.view.ba(C,ne)));const ue=Z&&Z.targetChanges.get(U.targetId),Re=Z&&Z.targetMismatches.get(U.targetId)!=null,Ie=U.view.applyChanges(ne,H.isPrimaryClient,ue,Re);return K_(H,U.targetId,Ie.Ma),Ie.snapshot}(n,T,P,F);const l=await M_(n.localStore,e,!0),c=new yx(e,l.gs),d=c.ba(l.documents),p=bl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);K_(n,t,y.Ma);const E=new _x(e,t,c);return n.ka.set(e,E),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),y.snapshot}async function Sx(n,e,t){const i=Te(n),o=i.ka.get(e),l=i.qa.get(o.targetId);if(l.length>1)return i.qa.set(o.targetId,l.filter(c=>!eh(c,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Uf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Rp(i.remoteStore,o.targetId),Bf(i,o.targetId)}).catch(Zo)):(Bf(i,o.targetId),await Uf(i.localStore,o.targetId,!0))}async function Ax(n,e){const t=Te(n),i=t.ka.get(e),o=t.qa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Rp(t.remoteStore,i.targetId))}async function Rx(n,e,t){const i=Dx(n);try{const o=await function(c,d){const p=Te(c),y=_t.now(),E=d.reduce((F,$)=>F.add($.key),xe());let T,P;return p.persistence.runTransaction("Locally write mutations","readwrite",F=>{let $=jr(),H=xe();return p.ds.getEntries(F,E).next(U=>{$=U,$.forEach((W,Z)=>{Z.isValidDocument()||(H=H.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(F,$)).next(U=>{T=U;const W=[];for(const Z of d){const ne=zP(Z,T.get(Z.key).overlayedDocument);ne!=null&&W.push(new xs(Z.key,ne,jE(ne.value.mapValue),cr.exists(!0)))}return p.mutationQueue.addMutationBatch(F,y,W,d)}).next(U=>{P=U;const W=U.applyToLocalDocumentSet(T,H);return p.documentOverlayCache.saveOverlays(F,U.batchId,W)})}).then(()=>({batchId:P.batchId,changes:XE(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.Wa[c.currentUser.toKey()];y||(y=new Ze(Ae)),y=y.insert(d,p),c.Wa[c.currentUser.toKey()]=y}(i,o.batchId,t),await Ol(i,o.changes),await ah(i.remoteStore)}catch(o){const l=Np(o,"Failed to persist write");t.reject(l)}}async function Dw(n,e){const t=Te(n);try{const i=await FC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Ua.get(l);c&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Ba=!0:o.modifiedDocuments.size>0?Fe(c.Ba):o.removedDocuments.size>0&&(Fe(c.Ba),c.Ba=!1))}),await Ol(t,i,e)}catch(i){await Zo(i)}}function W_(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Te(c);p.onlineState=d;let y=!1;p.queries.forEach((E,T)=>{for(const P of T.ta)P.sa(d)&&(y=!0)}),y&&bp(p)}(i.eventManager,e),o.length&&i.La.p_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function kx(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ua.get(e),l=o&&o.key;if(l){let c=new Ze(pe.comparator);c=c.insert(l,zt.newNoDocument(l,we.min()));const d=xe().add(l),p=new ih(we.min(),new Map,new Ze(Ae),c,d);await Dw(i,p),i.$a=i.$a.remove(l),i.Ua.delete(e),Op(i)}else await Uf(i.localStore,e,!1).then(()=>Bf(i,e,t)).catch(Zo)}async function Px(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await UC(t.localStore,e);Lw(t,i,null),Ow(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ol(t,o)}catch(o){await Zo(o)}}async function Cx(n,e,t){const i=Te(n);try{const o=await function(c,d){const p=Te(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Fe(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);Lw(i,e,t),Ow(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ol(i,o)}catch(o){await Zo(o)}}function Ow(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Lw(n,e,t){const i=Te(n);let o=i.Wa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Wa[i.currentUser.toKey()]=o}}function Bf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(i=>{n.Ka.containsKey(i)||Vw(n,i)})}function Vw(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Rp(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Op(n))}function K_(n,e,t){for(const i of t)i instanceof xw?(n.Ka.addReference(i.key,e),xx(n,i)):i instanceof Nw?(ae(Dp,"Document no longer in limbo: "+i.key),n.Ka.removeReference(i.key,e),n.Ka.containsKey(i.key)||Vw(n,i.key)):ve()}function xx(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(ae(Dp,"New document in limbo: "+t),n.Qa.add(i),Op(n))}function Op(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new pe(We.fromString(e)),i=n.za.next();n.Ua.set(i,new vx(t)),n.$a=n.$a.insert(t,i),ww(n.remoteStore,new Ti(ur(mp(t.path)),i,"TargetPurposeLimboResolution",Xc.ae))}}async function Ol(n,e,t){const i=Te(n),o=[],l=[],c=[];i.ka.isEmpty()||(i.ka.forEach((d,p)=>{c.push(i.Ha(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Sp.Yi(p.targetId,y);l.push(T)}}))}),await Promise.all(c),i.La.p_(o),await async function(p,y){const E=Te(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>K.forEach(y,P=>K.forEach(P.Hi,F=>E.persistence.referenceDelegate.addReference(T,P.targetId,F)).next(()=>K.forEach(P.Ji,F=>E.persistence.referenceDelegate.removeReference(T,P.targetId,F)))))}catch(T){if(!ea(T))throw T;ae(Ap,"Failed to update sequence numbers: "+T)}for(const T of y){const P=T.targetId;if(!T.fromCache){const F=E.Ts.get(P),$=F.snapshotVersion,H=F.withLastLimboFreeSnapshotVersion($);E.Ts=E.Ts.insert(P,H)}}}(i.localStore,l))}async function Nx(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){ae(Dp,"User change. New user:",e.toKey());const i=await yw(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(p=>{p.reject(new ie(q.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ol(t,i.Rs)}}function bx(n,e){const t=Te(n),i=t.Ua.get(e);if(i&&i.Ba)return xe().add(i.key);{let o=xe();const l=t.qa.get(e);if(!l)return o;for(const c of l){const d=t.ka.get(c);o=o.unionWith(d.view.Sa)}return o}}function Mw(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kx.bind(null,e),e.La.p_=mx.bind(null,e.eventManager),e.La.Ja=gx.bind(null,e.eventManager),e}function Dx(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Px.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Cx.bind(null,e),e}class jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sh(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return MC(this.persistence,new OC,e.initialUser,this.serializer)}Xa(e){return new gw(Ip.ri,this.serializer)}Za(e){return new HC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jc.provider={build:()=>new jc};class Ox extends jc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Fe(this.persistence.referenceDelegate instanceof Uc);const i=this.persistence.referenceDelegate.garbageCollector;return new vC(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new gw(i=>Uc.ri(i,t),this.serializer)}}class zf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>W_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nx.bind(null,this.syncEngine),await dx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new px}()}createDatastore(e){const t=sh(e.databaseInfo.databaseId),i=function(l){return new QC(l)}(e.databaseInfo);return function(l,c,d,p){return new ZC(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new tx(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>W_(this.syncEngine,t,0),function(){return j_.D()?new j_:new qC}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,E){const T=new Ex(o,l,c,d,p,y);return E&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Te(o);ae(Es,"RemoteStore shutting down."),l.W_.add(5),await Dl(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zf.provider={build:()=>new zf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="FirestoreClient";class Lx{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=xE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ae(Li,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ae(Li,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Np(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function lf(n,e){n.asyncQueue.verifyOperationInProgress(),ae(Li,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await yw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function G_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Vx(n);ae(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>z_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>z_(e.remoteStore,o)),n._onlineComponents=e}async function Vx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(Li,"Using user provided OfflineComponentProvider");try{await lf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Uo("Error using user provided cache. Falling back to memory cache: "+t),await lf(n,new jc)}}else ae(Li,"Using default OfflineComponentProvider"),await lf(n,new Ox(void 0));return n._offlineComponents}async function Fw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(Li,"Using user provided OnlineComponentProvider"),await G_(n,n._uninitializedComponentsProvider._online)):(ae(Li,"Using default OnlineComponentProvider"),await G_(n,new zf))),n._onlineComponents}function Mx(n){return Fw(n).then(e=>e.syncEngine)}async function jw(n){const e=await Fw(n),t=e.eventManager;return t.onListen=wx.bind(null,e.syncEngine),t.onUnlisten=Sx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Tx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ax.bind(null,e.syncEngine),t}function Ux(n,e,t={}){const i=new Lr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const E=new Uw({next:P=>{E.su(),c.enqueueAndForget(()=>Pw(l,T));const F=P.docs.has(d);!F&&P.fromCache?y.reject(new ie(q.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&P.fromCache&&p&&p.source==="server"?y.reject(new ie(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(P)},error:P=>y.reject(P)}),T=new Cw(mp(d.path),E,{includeMetadataChanges:!0,Ta:!0});return kw(l,T)}(await jw(n),n.asyncQueue,e,t,i)),i.promise}function Fx(n,e,t={}){const i=new Lr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const E=new Uw({next:P=>{E.su(),c.enqueueAndForget(()=>Pw(l,T)),P.fromCache&&p.source==="server"?y.reject(new ie(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(P)},error:P=>y.reject(P)}),T=new Cw(d,E,{includeMetadataChanges:!0,Ta:!0});return kw(l,T)}(await jw(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(n,e,t){if(!t)throw new ie(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jx(n,e,t,i){if(e===!0&&i===!0)throw new ie(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function X_(n){if(!pe.isDocumentKey(n))throw new ie(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Y_(n){if(pe.isDocumentKey(n))throw new ie(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve()}function ws(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=lh(n);throw new ie(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="firestore.googleapis.com",J_=!0;class Z_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$w,this.ssl=J_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:J_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yC)throw new ie(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Gk;switch(i.type){case"firstParty":return new Jk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ie(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Q_.get(t);i&&(ae("ComponentProvider","Removing Datastore"),Q_.delete(t),i.terminate())}(this),Promise.resolve()}}function Bx(n,e,t,i={}){var o;const l=(n=ws(n,uh))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==$w&&l.host!==d&&Uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:i});if(!ys(p,c)&&(n._setSettings(p),i.mockUserToken)){let y,E;if(typeof i.mockUserToken=="string")y=i.mockUserToken,E=Bt.MOCK_USER;else{y=Vv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ie(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Bt(T)}n._authCredentials=new Qk(new PE(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class mn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Pi extends Br{constructor(e,t,i){super(e,t,mp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new pe(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function Lp(n,e,...t){if(n=tt(n),zw("collection","path",e),n instanceof uh){const i=We.fromString(e,...t);return Y_(i),new Pi(n,null,i)}{if(!(n instanceof mn||n instanceof Pi))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return Y_(i),new Pi(n.firestore,null,i)}}function Ll(n,e,...t){if(n=tt(n),arguments.length===1&&(e=xE.newId()),zw("doc","path",e),n instanceof uh){const i=We.fromString(e,...t);return X_(i),new mn(n,null,new pe(i))}{if(!(n instanceof mn||n instanceof Pi))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return X_(i),new mn(n.firestore,n instanceof Pi?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="AsyncQueue";class tv{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new vw(this,"async_queue_retry"),this.Su=()=>{const i=af();i&&ae(ev,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const t=af();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=af();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Lr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ea(e))throw e;ae(ev,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Fr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.pu=!1,i))));return this.bu=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=xp.createAndSchedule(this,e,t,i,l=>this.Fu(l));return this.fu.push(o),o}Du(){this.gu&&ve()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Vl extends uh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new tv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tv(e),this._firestoreClient=void 0,await e}}}function zx(n,e){const t=typeof n=="object"?n:qc(),i=typeof n=="string"?n:Nc,o=Qo(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Dv("firestore");l&&Bx(o,...l)}return o}function Vp(n){if(n._terminated)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$x(n),n._firestoreClient}function $x(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,E){return new fP(d,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Bw(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new Lx(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qo(Dt.fromBase64String(e))}catch(t){throw new ie(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qo(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=/^__.*__$/;class qx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new xs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nl(e,this.data,t,this.fieldTransforms)}}function qw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class jp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new jp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:i,Qu:!1});return o.$u(e),o}Uu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:i,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Bc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(qw(this.Lu)&&Hx.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Wx{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||sh(e)}ju(e,t,i,o=!1){return new jp({Lu:e,methodName:t,zu:i,path:bt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bp(n){const e=n._freezeSettings(),t=sh(n._databaseId);return new Wx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Kx(n,e,t,i,o,l={}){const c=n.ju(l.merge||l.mergeFields?2:0,e,t,o);Qw("Data must be an object, but it was:",c,i);const d=Kw(i,c);let p,y;if(l.merge)p=new Hn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const P=Gx(e,T,t);if(!c.contains(P))throw new ie(q.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);Xx(E,P)||E.push(P)}p=new Hn(E),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new qx(new kn(d),p,y)}function Ww(n,e,t,i=!1){return zp(t,n.ju(i?4:3,e))}function zp(n,e){if(Gw(n=tt(n)))return Qw("Unsupported field value:",e,n),Kw(n,e);if(n instanceof Hw)return function(i,o){if(!qw(o.Lu))throw o.Wu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=zp(d,o.Ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=tt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return VP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:Mc(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Mc(o.serializer,l)}}if(i instanceof Up)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof qo)return{bytesValue:lw(o.serializer,i._byteString)};if(i instanceof mn){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:wp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Fp)return function(c,d){return{mapValue:{fields:{[UE]:{stringValue:FE},[bc]:{arrayValue:{values:c.toArray().map(y=>{if(typeof y!="number")throw d.Wu("VectorValues must only contain numeric values.");return yp(d.serializer,y)})}}}}}}(i,o);throw o.Wu(`Unsupported field value: ${lh(i)}`)}(n,e)}function Kw(n,e){const t={};return bE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(n,(i,o)=>{const l=zp(o,e.qu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function Gw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Up||n instanceof qo||n instanceof mn||n instanceof Hw||n instanceof Fp)}function Qw(n,e,t){if(!Gw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=lh(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function Gx(n,e,t){if((e=tt(e))instanceof Mp)return e._internalPath;if(typeof e=="string")return Xw(n,e);throw Bc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Qx=new RegExp("[~\\*/\\[\\]]");function Xw(n,e,t){if(e.search(Qx)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mp(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ie(q.INVALID_ARGUMENT,d+n+p)}function Xx(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ch("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Yx extends $p{data(){return super.data()}}function ch(n,e){return typeof e=="string"?Xw(n,e):e instanceof Mp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}class hh extends Hp{}function $f(n,e,...t){let i=[];e instanceof Hp&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof qp).length,d=l.filter(p=>p instanceof dh).length;if(c>1||c>0&&d>0)throw new ie(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class dh extends hh{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new dh(e,t,i)}_apply(e){const t=this._parse(e);return Jw(e._query,t),new Br(e.firestore,e.converter,Df(e._query,t))}_parse(e){const t=Bp(e.firestore);return function(l,c,d,p,y,E,T){let P;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ie(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){rv(T,E);const $=[];for(const H of T)$.push(nv(p,l,H));P={arrayValue:{values:$}}}else P=nv(p,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||rv(T,E),P=Ww(d,c,T,E==="in"||E==="not-in");return dt.create(y,E,P)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zx(n,e,t){const i=e,o=ch("where",n);return dh._create(o,i,t)}class qp extends Hp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)Jw(c,p),c=Df(c,p)}(e._query,t),new Br(e.firestore,e.converter,Df(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wp extends hh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Wp(e,t)}_apply(e){const t=function(o,l,c){if(o.startAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Il(l,c)}(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,function(o,l){const c=o.explicitOrderBy.concat([l]);return new Ps(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function Yw(n,e="asc"){const t=e,i=ch("orderBy",n);return Wp._create(i,t)}class Kp extends hh{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Kp(e,t,i)}_apply(e){return new Br(e.firestore,e.converter,Oc(e._query,this._limit,this._limitType))}}function e1(n){return Kp._create("limit",n,"F")}class Gp extends hh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Gp(e,t,i)}_apply(e){const t=n1(e,this.type,this._docOrFields,this._inclusive);return new Br(e.firestore,e.converter,function(o,l){return new Ps(o.path,o.collectionGroup,o.explicitOrderBy.slice(),o.filters.slice(),o.limit,o.limitType,l,o.endAt)}(e._query,t))}}function t1(...n){return Gp._create("startAfter",n,!1)}function n1(n,e,t,i){if(t[0]=tt(t[0]),t[0]instanceof $p)return function(l,c,d,p,y){if(!p)throw new ie(q.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const E=[];for(const T of Lo(l))if(T.field.isKeyField())E.push(Dc(c,p.key));else{const P=p.data.field(T.field);if(Jc(P))throw new ie(q.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(P===null){const F=T.field.canonicalString();throw new ie(q.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${F}' (used as the orderBy) does not exist.`)}E.push(P)}return new zo(E,y)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const o=Bp(n.firestore);return function(c,d,p,y,E,T){const P=c.explicitOrderBy;if(E.length>P.length)throw new ie(q.INVALID_ARGUMENT,`Too many arguments provided to ${y}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const F=[];for(let $=0;$<E.length;$++){const H=E[$];if(P[$].field.isKeyField()){if(typeof H!="string")throw new ie(q.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${y}(), but got a ${typeof H}`);if(!gp(c)&&H.indexOf("/")!==-1)throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${y}() must be a plain document ID, but '${H}' contains a slash.`);const U=c.path.child(We.fromString(H));if(!pe.isDocumentKey(U))throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${y}() must result in a valid document path, but '${U}' is not because it contains an odd number of segments.`);const W=new pe(U);F.push(Dc(d,W))}else{const U=Ww(p,y,H);F.push(U)}}return new zo(F,T)}(n._query,n.firestore._databaseId,o,e,t,i)}}function nv(n,e,t){if(typeof(t=tt(t))=="string"){if(t==="")throw new ie(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gp(e)&&t.indexOf("/")!==-1)throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(We.fromString(t));if(!pe.isDocumentKey(i))throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Dc(n,new pe(i))}if(t instanceof mn)return Dc(n,t._key);throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lh(t)}.`)}function rv(n,e){if(!Array.isArray(n)||n.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jw(n,e){const t=function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class r1{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ks(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[bc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>at(c.doubleValue));return new Fp(l)}convertGeoPoint(e){return new Up(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Zc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(El(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=We.fromString(e);Fe(pw(i));const o=new wl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zw extends $p{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(ch("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Ec extends Zw{data(e={}){return super.data(e)}}class s1{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ol(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Ec(this._firestore,this._userDataWriter,i.key,i,new ol(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new Ec(o._firestore,o._userDataWriter,d.doc.key,d.doc,new ol(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Ec(o._firestore,o._userDataWriter,d.doc.key,d.doc,new ol(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),E=c.indexOf(d.doc.key)),{type:o1(d.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function o1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n){n=ws(n,mn);const e=ws(n.firestore,Vl);return Ux(Vp(e),n._key).then(t=>u1(e,n,t))}class e0 extends r1{constructor(e){super(),this.firestore=e}convertBytes(e){return new qo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,t)}}function t0(n){n=ws(n,Br);const e=ws(n.firestore,Vl),t=Vp(e),i=new e0(e);return Jx(n._query),Fx(t,n._query).then(o=>new s1(e,i,n,o))}function a1(n){return n0(ws(n.firestore,Vl),[new _p(n._key,cr.none())])}function l1(n,e){const t=ws(n.firestore,Vl),i=Ll(n),o=i1(n.converter,e);return n0(t,[Kx(Bp(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,cr.exists(!1))]).then(()=>i)}function n0(n,e){return function(i,o){const l=new Lr;return i.asyncQueue.enqueueAndForget(async()=>Rx(await Mx(i),o,l)),l.promise}(Vp(n),e)}function u1(n,e,t){const i=t.docs.get(e._key),o=new e0(n);return new Zw(n,o,e._key,i,new ol(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Jo=o})(As),Mr(new dr("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Vl(new Xk(i.getProvider("auth-internal")),new Zk(c,i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ie(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(y.options.projectId,E)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),qn(a_,l_,e),qn(a_,l_,"esm2017")})();var c1="firebase",h1="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn(c1,h1,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="firebasestorage.googleapis.com",i0="storageBucket",d1=2*60*1e3,f1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends pr{constructor(e,t,i=0){super(uf(e),`Firebase Storage: ${t} (${uf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function uf(n){return"storage/"+n}function Qp(){const n="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,n)}function p1(n){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function m1(n){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g1(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,n)}function y1(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _1(n){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function v1(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function E1(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function w1(n){return new rt(nt.INVALID_URL,"Invalid URL '"+n+"'.")}function T1(n){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function I1(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+i0+"' property when initializing the app?")}function S1(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function A1(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function R1(n){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Hf(n){return new rt(nt.INVALID_ARGUMENT,n)}function s0(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function k1(n){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hl(n,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ya(n){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=pn.makeFromUrl(e,t)}catch{return new pn(e,"")}if(i.path==="")return i;throw T1(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ue){ue.path.charAt(ue.path.length-1)==="/"&&(ue.path_=ue.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(ue){ue.path_=decodeURIComponent(ue.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),P="(/([^?#]*).*)?$",F=new RegExp(`^https?://${T}/${E}/b/${o}/o${P}`,"i"),$={bucket:1,path:3},H=t===r0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",W=new RegExp(`^https?://${H}/${o}/${U}`,"i"),ne=[{regex:d,indices:p,postModify:l},{regex:F,indices:$,postModify:y},{regex:W,indices:{bucket:1,path:2},postModify:y}];for(let ue=0;ue<ne.length;ue++){const Re=ne[ue],Ie=Re.regex.exec(e);if(Ie){const C=Ie[Re.indices.bucket];let I=Ie[Re.indices.path];I||(I=""),i=new pn(C,I),Re.postModify(i);break}}if(i==null)throw w1(e);return i}}class P1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function E(...U){y||(y=!0,e.apply(null,U))}function T(U){o=setTimeout(()=>{o=null,n(F,p())},U)}function P(){l&&clearTimeout(l)}function F(U,...W){if(y){P();return}if(U){P(),E.call(null,U,...W);return}if(p()||c){P(),E.call(null,U,...W);return}i<64&&(i*=2);let ne;d===1?(d=2,ne=0):ne=(i+Math.random())*1e3,T(ne)}let $=!1;function H(U){$||($=!0,P(),!y&&(o!==null?(U||(d=2),clearTimeout(o),T(0)):U||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,H(!0)},t),H}function x1(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n){return n!==void 0}function b1(n){return typeof n=="object"&&!Array.isArray(n)}function Xp(n){return typeof n=="string"||n instanceof String}function iv(n){return Yp()&&n instanceof Blob}function Yp(){return typeof Blob<"u"}function sv(n,e,t,i){if(i<e)throw Hf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Hf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function o0(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var gs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(gs||(gs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,t,i,o,l,c,d,p,y,E,T,P=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((F,$)=>{this.resolve_=F,this.reject_=$,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new sc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===gs.NO_ERROR,p=l.getStatus();if(!d||D1(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===gs.ABORT;i(!1,new sc(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new sc(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());N1(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=Qp();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?s0():E1();c(p)}else{const p=v1();c(p)}};this.canceled_?t(!1,new sc(!1,null,!0)):this.backoffId_=C1(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&x1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function L1(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function V1(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function M1(n,e){e&&(n["X-Firebase-GMPID"]=e)}function U1(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function F1(n,e,t,i,o,l,c=!0){const d=o0(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return M1(y,e),L1(y,t),V1(y,l),U1(y,i),new O1(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function B1(...n){const e=j1();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Yp())return new Blob(n);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function z1(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(n){if(typeof atob>"u")throw R1("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cf{constructor(e,t){this.data=e,this.contentType=t||null}}function H1(n,e){switch(n){case or.RAW:return new cf(a0(e));case or.BASE64:case or.BASE64URL:return new cf(l0(n,e));case or.DATA_URL:return new cf(W1(e),K1(e))}throw Qp()}function a0(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function q1(n){let e;try{e=decodeURIComponent(n)}catch{throw hl(or.DATA_URL,"Malformed data URL.")}return a0(e)}function l0(n,e){switch(n){case or.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw hl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case or.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw hl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=$1(e)}catch(o){throw o.message.includes("polyfill")?o:hl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class u0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw hl(or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=G1(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function W1(n){const e=new u0(n);return e.base64?l0(or.BASE64,e.rest):q1(e.rest)}function K1(n){return new u0(n).contentType}function G1(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){let i=0,o="";iv(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(iv(this.data_)){const i=this.data_,o=z1(i,e,t);return o===null?null:new Ei(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ei(i,!0)}}static getBlob(...e){if(Yp()){const t=e.map(i=>i instanceof Ei?i.data_:i);return new Ei(B1.apply(null,t))}else{const t=e.map(c=>Xp(c)?H1(or.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[l++]=c[d]}),new Ei(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n){let e;try{e=JSON.parse(n)}catch{return null}return b1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function X1(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function h0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(n,e){return e}class Gt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||Y1}}let oc=null;function J1(n){return!Xp(n)||n.length<2?n:h0(n)}function d0(){if(oc)return oc;const n=[];n.push(new Gt("bucket")),n.push(new Gt("generation")),n.push(new Gt("metageneration")),n.push(new Gt("name","fullPath",!0));function e(l,c){return J1(c)}const t=new Gt("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new Gt("size");return o.xform=i,n.push(o),n.push(new Gt("timeCreated")),n.push(new Gt("updated")),n.push(new Gt("md5Hash",null,!0)),n.push(new Gt("cacheControl",null,!0)),n.push(new Gt("contentDisposition",null,!0)),n.push(new Gt("contentEncoding",null,!0)),n.push(new Gt("contentLanguage",null,!0)),n.push(new Gt("contentType",null,!0)),n.push(new Gt("metadata","customMetadata",!0)),oc=n,oc}function Z1(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new pn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function eN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return Z1(i,n),i}function f0(n,e,t){const i=c0(e);return i===null?null:eN(n,i,t)}function tN(n,e,t,i){const o=c0(e);if(o===null||!Xp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const E=n.bucket,T=n.fullPath,P="/b/"+c(E)+"/o/"+c(T),F=ph(P,t,i),$=o0({alt:"media",token:y});return F+$})[0]}function nN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class Jp{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(n){if(!n)throw Qp()}function rN(n,e){function t(i,o){const l=f0(n,o,e);return p0(l!==null),l}return t}function iN(n,e){function t(i,o){const l=f0(n,o,e);return p0(l!==null),tN(l,o,n.host,n._protocol)}return t}function m0(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=y1():o=g1():t.getStatus()===402?o=m1(n.bucket):t.getStatus()===403?o=_1(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function g0(n){const e=m0(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=p1(n.path)),l.serverResponse=o.serverResponse,l}return t}function sN(n,e,t){const i=e.fullServerUrl(),o=ph(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new Jp(o,l,iN(n,t),c);return d.errorHandler=g0(e),d}function oN(n,e){const t=e.fullServerUrl(),i=ph(t,n.host,n._protocol),o="DELETE",l=n.maxOperationRetryTime;function c(p,y){}const d=new Jp(i,o,c,l);return d.successCodes=[200,204],d.errorHandler=g0(e),d}function aN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function lN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=aN(null,e)),i}function uN(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let ne="";for(let ue=0;ue<2;ue++)ne=ne+Math.random().toString().slice(2);return ne}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=lN(e,i,o),E=nN(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,P=`\r
--`+p+"--",F=Ei.getBlob(T,i,P);if(F===null)throw S1();const $={name:y.fullPath},H=ph(l,n.host,n._protocol),U="POST",W=n.maxUploadRetryTime,Z=new Jp(H,U,rN(n,t),W);return Z.urlParams=$,Z.headers=c,Z.body=F.uploadData(),Z.errorHandler=m0(e),Z}class cN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Ya("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ya("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ya("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ya("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ya("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hN extends cN{initXhr(){this.xhr_.responseType="text"}}function Zp(){return new hN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this._service=e,t instanceof pn?this._location=t:this._location=pn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ts(e,t)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return h0(this._location.path)}get storage(){return this._service}get parent(){const e=Q1(this._location.path);if(e===null)return null;const t=new pn(this._location.bucket,e);return new Ts(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw k1(e)}}function dN(n,e,t){n._throwIfRoot("uploadBytes");const i=uN(n.storage,n._location,d0(),new Ei(e,!0),t);return n.storage.makeRequestWithTokens(i,Zp).then(o=>({metadata:o,ref:n}))}function fN(n){n._throwIfRoot("getDownloadURL");const e=sN(n.storage,n._location,d0());return n.storage.makeRequestWithTokens(e,Zp).then(t=>{if(t===null)throw A1();return t})}function pN(n){n._throwIfRoot("deleteObject");const e=oN(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Zp)}function mN(n,e){const t=X1(n._location.path,e),i=new pn(n._location.bucket,t);return new Ts(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(n){return/^[A-Za-z]+:\/\//.test(n)}function yN(n,e){return new Ts(n,e)}function y0(n,e){if(n instanceof em){const t=n;if(t._bucket==null)throw I1();const i=new Ts(t,t._bucket);return e!=null?y0(i,e):i}else return e!==void 0?mN(n,e):n}function _N(n,e){if(e&&gN(e)){if(n instanceof em)return yN(n,e);throw Hf("To use ref(service, url), the first argument must be a Storage instance.")}else return y0(n,e)}function ov(n,e){const t=e==null?void 0:e[i0];return t==null?null:pn.makeFromBucketSpec(t,n)}function vN(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Vv(o,n.app.options.projectId))}class em{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=r0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=d1,this._maxUploadRetryTime=f1,this._requests=new Set,o!=null?this._bucket=pn.makeFromBucketSpec(o,this._host):this._bucket=ov(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=ov(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ts(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new P1(s0());{const c=F1(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const av="@firebase/storage",lv="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="storage";function EN(n,e,t){return n=tt(n),dN(n,e,t)}function wN(n){return n=tt(n),fN(n)}function TN(n){return n=tt(n),pN(n)}function v0(n,e){return n=tt(n),_N(n,e)}function IN(n=qc(),e){n=tt(n);const i=Qo(n,_0).getImmediate({identifier:e}),o=Dv("storage");return o&&SN(i,...o),i}function SN(n,e,t,i={}){vN(n,e,t,i)}function AN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new em(t,i,o,e,As)}function RN(){Mr(new dr(_0,AN,"PUBLIC").setMultipleInstances(!0)),qn(av,lv,""),qn(av,lv,"esm2017")}RN();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=new Map,E0={activated:!1,tokenObservers:[]},kN={initialized:!1,enabled:!1};function Et(n){return qf.get(n)||Object.assign({},E0)}function PN(n,e){return qf.set(n,e),qf.get(n)}function mh(){return kN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="https://content-firebaseappcheck.googleapis.com/v1",CN="exchangeRecaptchaV3Token",xN="exchangeDebugToken",uv={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},NN=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,t,i,o,l){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=o,this.upperBound=l,this.pending=null,this.nextErrorWaitInterval=o,o>l)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new pl,this.pending.promise.catch(t=>{}),await DN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new pl,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function DN(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},on=new Go("appCheck","AppCheck",ON);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function tm(n){if(!Et(n).activated)throw on.create("use-before-activation",{appName:n.name})}function T0(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),i=Math.floor((e-t*3600*24)/3600),o=Math.floor((e-t*3600*24-i*3600)/60),l=e-t*3600*24-i*3600-o*60;let c="";return t&&(c+=ac(t)+"d:"),i&&(c+=ac(i)+"h:"),c+=ac(o)+"m:"+ac(l)+"s",c}function ac(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm({url:n,body:e},t){const i={"Content-Type":"application/json"},o=t.getImmediate({optional:!0});if(o){const T=await o.getHeartbeatsHeader();T&&(i["X-Firebase-Client"]=T)}const l={method:"POST",body:JSON.stringify(e),headers:i};let c;try{c=await fetch(n,l)}catch(T){throw on.create("fetch-network-error",{originalErrorMessage:T==null?void 0:T.message})}if(c.status!==200)throw on.create("fetch-status-error",{httpStatus:c.status});let d;try{d=await c.json()}catch(T){throw on.create("fetch-parse-error",{originalErrorMessage:T==null?void 0:T.message})}const p=d.ttl.match(/^([\d.]+)(s)$/);if(!p||!p[2]||isNaN(Number(p[1])))throw on.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${d.ttl}`});const y=Number(p[1])*1e3,E=Date.now();return{token:d.token,expireTimeMillis:E+y,issuedAtTimeMillis:E}}function LN(n,e){const{projectId:t,appId:i,apiKey:o}=n.options;return{url:`${w0}/projects/${t}/apps/${i}:${CN}?key=${o}`,body:{recaptcha_v3_token:e}}}function I0(n,e){const{projectId:t,appId:i,apiKey:o}=n.options;return{url:`${w0}/projects/${t}/apps/${i}:${xN}?key=${o}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="firebase-app-check-database",MN=1,Rl="firebase-app-check-store",S0="debug-token";let lc=null;function A0(){return lc||(lc=new Promise((n,e)=>{try{const t=indexedDB.open(VN,MN);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var o;e(on.create("storage-open",{originalErrorMessage:(o=i.target.error)===null||o===void 0?void 0:o.message}))},t.onupgradeneeded=i=>{const o=i.target.result;switch(i.oldVersion){case 0:o.createObjectStore(Rl,{keyPath:"compositeKey"})}}}catch(t){e(on.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),lc)}function UN(n){return k0(P0(n))}function FN(n,e){return R0(P0(n),e)}function jN(n){return R0(S0,n)}function BN(){return k0(S0)}async function R0(n,e){const i=(await A0()).transaction(Rl,"readwrite"),l=i.objectStore(Rl).put({compositeKey:n,value:e});return new Promise((c,d)=>{l.onsuccess=p=>{c()},i.onerror=p=>{var y;d(on.create("storage-set",{originalErrorMessage:(y=p.target.error)===null||y===void 0?void 0:y.message}))}})}async function k0(n){const t=(await A0()).transaction(Rl,"readonly"),o=t.objectStore(Rl).get(n);return new Promise((l,c)=>{o.onsuccess=d=>{const p=d.target.result;l(p?p.value:void 0)},t.onerror=d=>{var p;c(on.create("storage-get",{originalErrorMessage:(p=d.target.error)===null||p===void 0?void 0:p.message}))}})}function P0(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Hc("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(n){if(Zf()){let e;try{e=await UN(n)}catch(t){ms.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function hf(n,e){return Zf()?FN(n,e).catch(t=>{ms.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function $N(){let n;try{n=await BN()}catch{}if(n)return n;{const e=crypto.randomUUID();return jN(e).catch(t=>ms.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){return mh().enabled}async function im(){const n=mh();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function HN(){const n=Nv(),e=mh();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new pl;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve($N())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN={error:"UNKNOWN_ERROR"};function WN(n){return Jf.encodeString(JSON.stringify(n),!1)}async function Wf(n,e=!1,t=!1){const i=n.app;tm(i);const o=Et(i);let l=o.token,c;if(l&&!No(l)&&(o.token=void 0,l=void 0),!l){const y=await o.cachedTokenPromise;y&&(No(y)?l=y:await hf(i,void 0))}if(!e&&l&&No(l))return{token:l.token};let d=!1;if(rm())try{o.exchangeTokenPromise||(o.exchangeTokenPromise=nm(I0(i,await im()),n.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),d=!0);const y=await o.exchangeTokenPromise;return await hf(i,y),o.token=y,{token:y.token}}catch(y){return y.code==="appCheck/throttled"||y.code==="appCheck/initial-throttle"?ms.warn(y.message):t&&ms.error(y),df(y)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),d=!0),l=await Et(i).exchangeTokenPromise}catch(y){y.code==="appCheck/throttled"||y.code==="appCheck/initial-throttle"?ms.warn(y.message):t&&ms.error(y),c=y}let p;return l?c?No(l)?p={token:l.token,internalError:c}:p=df(c):(p={token:l.token},o.token=l,await hf(i,l)):p=df(c),d&&N0(i,p),p}async function KN(n){const e=n.app;tm(e);const{provider:t}=Et(e);if(rm()){const i=await im(),{token:o}=await nm(I0(e,i),n.heartbeatServiceProvider);return{token:o}}else{const{token:i}=await t.getToken();return{token:i}}}function C0(n,e,t,i){const{app:o}=n,l=Et(o),c={next:t,error:i,type:e};if(l.tokenObservers=[...l.tokenObservers,c],l.token&&No(l.token)){const d=l.token;Promise.resolve().then(()=>{t({token:d.token}),hv(n)}).catch(()=>{})}l.cachedTokenPromise.then(()=>hv(n))}function x0(n,e){const t=Et(n),i=t.tokenObservers.filter(o=>o.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function hv(n){const{app:e}=n,t=Et(e);let i=t.tokenRefresher;i||(i=GN(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function GN(n){const{app:e}=n;return new bN(async()=>{const t=Et(e);let i;if(t.token?i=await Wf(n,!0):i=await Wf(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=Et(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const o=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,o),Math.max(0,i-Date.now())}else return 0},uv.RETRIAL_MIN_WAIT,uv.RETRIAL_MAX_WAIT)}function N0(n,e){const t=Et(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function No(n){return n.expireTimeMillis-Date.now()>0}function df(n){return{token:WN(qN),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Et(this.app);for(const t of e)x0(this.app,t.next);return Promise.resolve()}}function XN(n,e){return new QN(n,e)}function YN(n){return{getToken:e=>Wf(n,e),getLimitedUseToken:()=>KN(n),addTokenListener:e=>C0(n,"INTERNAL",e),removeTokenListener:e=>x0(n.app,e)}}const JN="@firebase/app-check",ZN="0.8.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="https://www.google.com/recaptcha/api.js";function tb(n,e){const t=new pl,i=Et(n);i.reCAPTCHAState={initialized:t};const o=nb(n),l=cv(!1);return l?dv(n,e,l,o,t):sb(()=>{const c=cv(!1);if(!c)throw new Error("no recaptcha");dv(n,e,c,o,t)}),t.promise}function dv(n,e,t,i,o){t.ready(()=>{ib(n,e,t,i),o.resolve(t)})}function nb(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function rb(n){tm(n);const t=await Et(n).reCAPTCHAState.initialized.promise;return new Promise((i,o)=>{const l=Et(n).reCAPTCHAState;t.ready(()=>{i(t.execute(l.widgetId,{action:"fire_app_check"}))})})}function ib(n,e,t,i){const o=t.render(i,{sitekey:e,size:"invisible",callback:()=>{Et(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Et(n).reCAPTCHAState.succeeded=!1}}),l=Et(n);l.reCAPTCHAState=Object.assign(Object.assign({},l.reCAPTCHAState),{widgetId:o})}function sb(n){const e=document.createElement("script");e.src=eb,e.onload=n,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,i;ab(this._throttleData);const o=await rb(this._app).catch(c=>{throw on.create("recaptcha-error")});if(!(!((e=Et(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw on.create("recaptcha-error");let l;try{l=await nm(LN(this._app,o),this._heartbeatServiceProvider)}catch(c){throw!((t=c.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=ob(Number((i=c.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),on.create("initial-throttle",{time:T0(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):c}return this._throttleData=null,l}initialize(e){this._app=e,this._heartbeatServiceProvider=Qo(e,"heartbeat"),tb(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof sm?this._siteKey===e._siteKey:!1}}function ob(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+NN,httpStatus:n};{const t=e?e.backoffCount:0,i=kS(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+i,httpStatus:n}}}function ab(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw on.create("throttled",{time:T0(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n=qc(),e){n=tt(n);const t=Qo(n,"app-check");if(mh().initialized||HN(),rm()&&im().then(o=>console.log(`App Check debug token: ${o}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(l.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&l.provider.isEqual(e.provider))return o;throw on.create("already-initialized",{appName:n.name})}const i=t.initialize({options:e});return ub(n,e.provider,e.isTokenAutoRefreshEnabled),Et(n).isTokenAutoRefreshEnabled&&C0(i,"INTERNAL",()=>{}),i}function ub(n,e,t){const i=PN(n,Object.assign({},E0));i.activated=!0,i.provider=e,i.cachedTokenPromise=zN(n).then(o=>(o&&No(o)&&(i.token=o,N0(n,{token:o.token})),o)),i.isTokenAutoRefreshEnabled=t===void 0?n.automaticDataCollectionEnabled:t,i.provider.initialize(n)}const cb="app-check",fv="app-check-internal";function hb(){Mr(new dr(cb,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return XN(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(fv).initialize()})),Mr(new dr(fv,n=>{const e=n.getProvider("app-check").getImmediate();return YN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),qn(JN,ZN)}hb();const db={apiKey:"your_api_key_here",authDomain:"your_auth_domain_here",projectId:"your_project_id_here",storageBucket:"your_storage_bucket_here",messagingSenderId:"your_messaging_sender_id_here",appId:"your_app_id_here",measurementId:"your_measurement_id_here"},gh=Fv(db);lb(gh,{provider:new sm(void 0),isTokenAutoRefreshEnabled:!0});const Ci=Wk(gh),bs=zx(gh),b0=IN(gh),fb=async(n,e)=>{try{console.log("Attempting to sign in...");const t=await DR(Ci,n,e);console.log("Sign in successful, checking admin status...");const i=await fh(Ll(bs,"users",t.user.uid));if(console.log("User document:",i.data()),!i.exists())throw console.log("No user document found"),await _l(Ci),new Error("User document not found");if(i.data().role!=="admin")throw console.log("User is not admin"),await _l(Ci),new Error("Unauthorized access");return console.log("Admin access confirmed"),{user:t.user,userData:i.data()}}catch(t){throw console.error("Sign in error:",t),t}},pb=async()=>{try{await _l(Ci)}catch(n){throw console.error("Sign out error:",n),n}},mb=()=>new Promise((n,e)=>{const t=hE(Ci,async i=>{if(t(),i)try{const o=await fh(Ll(bs,"users",i.uid));o.exists()&&o.data().role==="admin"?n({user:i,userData:o.data()}):(await _l(Ci),n(null))}catch(o){console.error("Error getting user data:",o),await _l(Ci),n(null)}else n(null)},e)}),gb=n=>hE(Ci,async e=>{if(e)try{const t=await fh(Ll(bs,"users",e.uid)),i=t.exists()&&t.data().role==="admin";n({user:e,isAdmin:i,userData:t.data()})}catch(t){console.error("Error in auth subscription:",t),n({user:null,isAdmin:!1,userData:null})}else n({user:null,isAdmin:!1,userData:null})}),D0=G.createContext(),yh=()=>{const n=G.useContext(D0);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n},yb=({children:n})=>{const[e,t]=G.useState(null),[i,o]=G.useState(!0);G.useEffect(()=>{mb().then(d=>{var p;d&&d.user?t({...d.user,isAdmin:((p=d.userData)==null?void 0:p.role)==="admin"}):t(null),o(!1)});const c=gb(d=>{var p;d&&d.user?t({...d.user,isAdmin:((p=d.userData)==null?void 0:p.role)==="admin"}):t(null),o(!1)});return()=>c()},[]);const l={user:e,isAdmin:(e==null?void 0:e.isAdmin)||!1,loading:i};return S.jsx(D0.Provider,{value:l,children:!i&&n})};function _b({title:n,titleId:e,...t},i){return G.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":e},t),n?G.createElement("title",{id:e},n):null,G.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const vb=G.forwardRef(_b);function Eb({title:n,titleId:e,...t},i){return G.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":e},t),n?G.createElement("title",{id:e},n):null,G.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const wb=G.forwardRef(Eb),Tb=()=>{const[n,e]=G.useState(!1),t=Ss(),{user:i,isAdmin:o}=yh(),l=[{name:"Home",href:"/"},{name:"Services",href:"/services"},{name:"Book Now",href:"/booking"}],c=async()=>{try{e(!1),await pb(),await new Promise(d=>setTimeout(d,100)),t("/",{replace:!0})}catch(d){console.error("Error logging out:",d)}};return S.jsxs("nav",{className:"bg-white shadow-lg",children:[S.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:S.jsxs("div",{className:"flex justify-between h-16",children:[S.jsx("div",{className:"flex-shrink-0 flex items-center",children:S.jsx(mi,{to:"/",className:"text-2xl font-bold text-primary",children:"Manju Salon"})}),S.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center",children:[l.map(d=>S.jsx(mi,{to:d.href,className:"text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium",children:d.name},d.name)),o&&S.jsx(mi,{to:"/admin",className:"text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium",children:"Admin Dashboard"}),i&&S.jsx("button",{onClick:c,className:"ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm font-medium",children:"Logout"})]}),S.jsx("div",{className:"flex items-center sm:hidden",children:S.jsx("button",{onClick:()=>e(!n),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100",children:n?S.jsx(wb,{className:"block h-6 w-6"}):S.jsx(vb,{className:"block h-6 w-6"})})})]})}),n&&S.jsx("div",{className:"sm:hidden",children:S.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[l.map(d=>S.jsx(mi,{to:d.href,className:"block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50",onClick:()=>e(!1),children:d.name},d.name)),o&&S.jsx(mi,{to:"/admin",className:"block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50",onClick:()=>e(!1),children:"Admin Dashboard"}),i&&S.jsx("button",{onClick:c,className:"w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:text-red-700 hover:bg-gray-50",children:"Logout"})]})})]})},Ib=()=>{const n=[{name:"Haircut & Styling",description:"Professional haircut and styling services for all hair types",price:"$45",image:"https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Facial Treatment",description:"Rejuvenating facial treatments for glowing skin",price:"$75",image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Manicure & Pedicure",description:"Luxurious nail care and treatments",price:"$60",image:"https://images.unsplash.com/photo-1610992018333-f839b4debe10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}];return S.jsxs("div",{className:"space-y-16",children:[S.jsxs("section",{className:"relative h-[600px] flex items-center justify-center",children:[S.jsx("div",{className:"absolute inset-0 bg-black/50 z-10"}),S.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}),S.jsxs("div",{className:"relative z-20 text-center text-white px-4",children:[S.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Welcome to Manju Salon"}),S.jsx("p",{className:"text-xl mb-8",children:"Experience luxury beauty treatments"}),S.jsx(mi,{to:"/booking",className:"btn-primary",children:"Book Appointment"})]})]}),S.jsxs("section",{className:"py-12",children:[S.jsx("h2",{className:"text-3xl font-bold text-center mb-12",children:"Our Services"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map(e=>S.jsxs("div",{className:"card group",children:[S.jsx("div",{className:"relative h-48 mb-4 overflow-hidden rounded-lg",children:S.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"})}),S.jsx("h3",{className:"text-xl font-semibold mb-2",children:e.name}),S.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),S.jsx("p",{className:"text-primary font-bold",children:e.price})]},e.name))})]}),S.jsx("section",{className:"bg-primary text-white py-16",children:S.jsxs("div",{className:"text-center",children:[S.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Transform Your Look?"}),S.jsx("p",{className:"text-xl mb-8",children:"Book your appointment today and experience luxury beauty care"}),S.jsx(mi,{to:"/booking",className:"btn-secondary",children:"Schedule Now"})]})})]})},Ja={service:{name:n=>!n||typeof n!="string"?!1:n.length>=3&&n.length<=100,category:n=>["Hair","Skin","Nails","Wellness"].includes(n),price:n=>{const e=parseFloat(n);return!isNaN(e)&&e>=0&&e<=1e3},duration:n=>!n||typeof n!="string"?!1:n.length>=3&&n.length<=50,description:n=>!n||typeof n!="string"?!1:n.length>=10&&n.length<=500}};class Qt extends Error{constructor(e,t,i=400){super(e),this.name="AppError",this.code=t,this.status=i}}const _h="services",pv=12,Sb=5*1024*1024,Ab=["image/jpeg","image/png","image/webp"],Rb=n=>{const e=[];if(Ja.service.name(n.name)||e.push("Invalid service name"),Ja.service.category(n.category)||e.push("Invalid category"),Ja.service.price(n.price)||e.push("Invalid price"),Ja.service.duration(n.duration)||e.push("Invalid duration"),Ja.service.description(n.description)||e.push("Invalid description"),e.length>0)throw new Qt(e.join(", "),"INVALID_SERVICE_DATA")},kb=n=>{if(!n)throw new Qt("No image file provided","MISSING_IMAGE");if(!Ab.includes(n.type))throw new Qt("Invalid image type. Allowed types: JPEG, PNG, WebP","INVALID_IMAGE_TYPE");if(n.size>Sb)throw new Qt("Image size exceeds 5MB limit","IMAGE_TOO_LARGE")},O0=async(n=null)=>{try{let e=$f(Lp(bs,_h),Yw("name"),e1(pv));n&&(e=$f(e,t1(n)));const t=await t0(e),i=[];let o=null;return t.forEach(l=>{i.push({id:l.id,...l.data()}),o=l}),{services:i,lastVisible:o,hasMore:t.docs.length===pv}}catch(e){throw console.error("Error fetching services:",e),new Qt("Failed to fetch services","FETCH_ERROR",500)}},Pb=async n=>{try{const e=$f(Lp(bs,_h),Zx("category","==",n),Yw("name")),t=await t0(e),i=[];return t.forEach(o=>{i.push({id:o.id,...o.data()})}),i}catch(e){throw console.error("Error fetching services by category:",e),new Qt("Failed to fetch services by category","FETCH_ERROR",500)}},Cb=async(n,e)=>{try{Rb(n);let t=null;if(e){kb(e);const o=v0(b0,`services/${Date.now()}_${e.name}`),l=await EN(o,e);t=await wN(l.ref)}return{id:(await l1(Lp(bs,_h),{...n,imageUrl:t,createdAt:new Date,updatedAt:new Date})).id,...n,imageUrl:t}}catch(t){throw console.error("Error adding service:",t),new Qt(t instanceof Qt?t.message:"Failed to add service",t instanceof Qt?t.code:"ADD_ERROR",t instanceof Qt?t.status:500)}},xb=async n=>{try{const e=Ll(bs,_h,n),t=await fh(e);if(!t.exists())throw new Qt("Service not found","NOT_FOUND",404);const i=t.data();if(i.imageUrl){const o=v0(b0,i.imageUrl);await TN(o)}return await a1(e),{id:n}}catch(e){throw console.error("Error deleting service:",e),new Qt(e instanceof Qt?e.message:"Failed to delete service",e instanceof Qt?e.code:"DELETE_ERROR",e instanceof Qt?e.status:500)}},Nb=()=>{const[n,e]=G.useState([]),[t,i]=G.useState(!0),[o,l]=G.useState(null),[c,d]=G.useState("All"),[p,y]=G.useState(null),[E,T]=G.useState(!0),[P,F]=G.useState(!1),$=["All","Hair","Skin","Nails","Wellness"];G.useEffect(()=>{H()},[c]);const H=async(W=!1)=>{try{W?F(!0):(i(!0),l(null));let Z;c==="All"?Z=await O0(W?p:null):Z=await Pb(c),e(ne=>W?[...ne,...Z.services]:Z.services),y(Z.lastVisible),T(Z.hasMore)}catch(Z){console.error("Error fetching services:",Z),l(Z.message||"Failed to load services. Please try again later.")}finally{i(!1),F(!1)}},U=()=>{H(!0)};return t&&!P?S.jsx("div",{className:"flex justify-center items-center min-h-[400px]",children:S.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})}):o?S.jsx("div",{className:"text-center text-red-600 min-h-[400px] flex items-center justify-center",children:S.jsx("p",{children:o})}):S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Our Services"}),S.jsx("p",{className:"text-gray-600",children:"Explore our range of beauty and wellness services"})]}),S.jsx("div",{className:"flex justify-center gap-4 mb-12 flex-wrap",children:$.map(W=>S.jsx("button",{onClick:()=>d(W),className:`px-6 py-2 rounded-full transition-colors duration-300 ${c===W?"bg-primary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:W},W))}),n.length===0?S.jsx("div",{className:"text-center text-gray-500 py-12",children:c==="All"?"No services available at the moment.":`No services found in ${c} category.`}):S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map(W=>S.jsxs("div",{className:"card group",children:[S.jsx("div",{className:"relative h-48 mb-4 overflow-hidden rounded-lg",children:W.imageUrl?S.jsx("img",{src:W.imageUrl,alt:W.name,className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"}):S.jsx("div",{className:"w-full h-full bg-gray-200 flex items-center justify-center",children:S.jsx("span",{className:"text-gray-400",children:"No image available"})})}),S.jsx("h3",{className:"text-xl font-semibold mb-2",children:W.name}),S.jsx("p",{className:"text-gray-600 mb-4",children:W.description}),S.jsxs("div",{className:"flex justify-between items-center mb-4",children:[S.jsxs("span",{className:"text-primary font-bold",children:["$",W.price]}),S.jsx("span",{className:"text-gray-500",children:W.duration})]}),S.jsx(mi,{to:`/booking?service=${W.id}`,className:"btn-primary w-full text-center block",children:"Book Now"})]},W.id))}),E&&c==="All"&&S.jsx("div",{className:"text-center mt-12",children:S.jsx("button",{onClick:U,disabled:P,className:"btn-secondary disabled:opacity-50",children:P?"Loading...":"Load More Services"})})]})]})},bb=()=>{const[n]=eS(),e=Ss(),[t,i]=G.useState({name:"",email:"",phone:"",date:"",time:"",service:n.get("service")||"",notes:""}),o=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"],l=[{id:"1",name:"Haircut & Styling",price:45},{id:"2",name:"Hair Coloring",price:120},{id:"3",name:"Facial Treatment",price:75},{id:"4",name:"Manicure",price:35},{id:"5",name:"Pedicure",price:45},{id:"6",name:"Massage",price:90}],c=E=>{const{name:T,value:P}=E.target;i(F=>({...F,[T]:P}))},d=E=>{E.preventDefault(),console.log("Booking data:",t),e("/payment",{state:{bookingData:t}})},p=l.find(E=>E.id===t.service),y=p?p.price:0;return S.jsxs("div",{className:"max-w-2xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Book an Appointment"}),S.jsx("p",{className:"text-gray-600",children:"Schedule your beauty treatment today"})]}),S.jsxs("form",{onSubmit:d,className:"card space-y-6",children:[S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Name"}),S.jsx("input",{type:"text",name:"name",value:t.name,onChange:c,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),S.jsx("input",{type:"email",name:"email",value:t.email,onChange:c,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone"}),S.jsx("input",{type:"tel",name:"phone",value:t.phone,onChange:c,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Service"}),S.jsxs("select",{name:"service",value:t.service,onChange:c,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",children:[S.jsx("option",{value:"",children:"Select a service"}),l.map(E=>S.jsxs("option",{value:E.id,children:[E.name," - $",E.price]},E.id))]})]}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Date"}),S.jsx("input",{type:"date",name:"date",value:t.date,onChange:c,required:!0,min:new Date().toISOString().split("T")[0],className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time"}),S.jsxs("select",{name:"time",value:t.time,onChange:c,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",children:[S.jsx("option",{value:"",children:"Select time"}),o.map(E=>S.jsx("option",{value:E,children:E},E))]})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Special Notes"}),S.jsx("textarea",{name:"notes",value:t.notes,onChange:c,rows:"4",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsx("div",{className:"text-right",children:S.jsxs("p",{className:"text-lg font-semibold",children:["Total: ",S.jsxs("span",{className:"text-primary",children:["$",y]})]})}),S.jsx("button",{type:"submit",className:"btn-primary w-full",children:"Continue to Payment"})]})]})},Db=()=>{const{user:n}=yh(),[e,t]=G.useState([]),[i,o]=G.useState(!0),[l,c]=G.useState(null),[d,p]=G.useState(!1),[y,E]=G.useState(null),[T,P]=G.useState(null),[F,$]=G.useState(!0),[H,U]=G.useState({name:"",category:"",price:"",duration:"",description:""});G.useEffect(()=>{W()},[]);const W=async(C=!1)=>{try{o(!0),c(null);const I=await O0(C?T:null);t(k=>C?[...k,...I.services]:I.services),P(I.lastVisible),$(I.hasMore)}catch(I){c(I.message||"Failed to load services. Please try again."),console.error("Error fetching services:",I)}finally{o(!1)}},Z=C=>{const{name:I,value:k}=C.target;U(N=>({...N,[I]:k}))},ne=C=>{const I=C.target.files[0];if(I){if(!["image/jpeg","image/png","image/webp"].includes(I.type)){c("Please select a valid image file (JPEG, PNG, or WebP)"),C.target.value="";return}if(I.size>5*1024*1024){c("Image size should be less than 5MB"),C.target.value="";return}E(I),c(null)}},ue=()=>{E(null),document.querySelector('input[name="image"]')&&(document.querySelector('input[name="image"]').value="")},Re=async C=>{C.preventDefault();try{p(!0),c(null);const I={...H,price:parseFloat(H.price)};await Cb(I,y),U({name:"",category:"",price:"",duration:"",description:""}),E(null),C.target.image&&(C.target.image.value=""),await W()}catch(I){c(I.message||"Failed to add service. Please try again."),console.error("Error adding service:",I)}finally{p(!1)}},Ie=async C=>{if(window.confirm("Are you sure you want to delete this service?"))try{o(!0),c(null),await xb(C),await W()}catch(I){c(I.message||"Failed to delete service. Please try again."),console.error("Error deleting service:",I)}finally{o(!1)}};return S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-8",children:[S.jsx("h1",{className:"text-4xl font-bold mb-2",children:"Admin Dashboard"}),S.jsx("p",{className:"text-gray-600",children:"Manage your salon services"})]}),l&&S.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6",children:l}),S.jsxs("div",{className:"card mb-12",children:[S.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Add New Service"}),S.jsxs("form",{onSubmit:Re,className:"space-y-6",children:[S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Service Name"}),S.jsx("input",{type:"text",name:"name",value:H.name,onChange:Z,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Category"}),S.jsxs("select",{name:"category",value:H.category,onChange:Z,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",children:[S.jsx("option",{value:"",children:"Select category"}),S.jsx("option",{value:"Hair",children:"Hair"}),S.jsx("option",{value:"Skin",children:"Skin"}),S.jsx("option",{value:"Nails",children:"Nails"}),S.jsx("option",{value:"Wellness",children:"Wellness"})]})]})]}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Price ($)"}),S.jsx("input",{type:"number",name:"price",value:H.price,onChange:Z,required:!0,min:"0",step:"0.01",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Duration"}),S.jsx("input",{type:"text",name:"duration",value:H.duration,onChange:Z,required:!0,placeholder:"e.g., 1 hour",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),S.jsx("textarea",{name:"description",value:H.description,onChange:Z,required:!0,rows:"3",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Service Image"}),S.jsxs("div",{className:"space-y-4",children:[S.jsx("input",{type:"file",name:"image",onChange:ne,accept:"image/jpeg,image/png,image/webp",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",disabled:d}),y&&S.jsxs("div",{className:"relative",children:[S.jsx("img",{src:URL.createObjectURL(y),alt:"Preview",className:"w-32 h-32 object-cover rounded-lg"}),S.jsx("button",{type:"button",onClick:ue,className:"absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:S.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})]})]}),S.jsx("button",{type:"submit",disabled:d,className:"btn-primary w-full disabled:opacity-50",children:d?"Adding...":"Add Service"})]})]}),S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Current Services"}),i?S.jsx("div",{className:"flex justify-center items-center min-h-[200px]",children:S.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})}):e.length===0?S.jsx("div",{className:"text-center text-gray-500 py-8",children:"No services available. Add your first service using the form above."}):S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"overflow-x-auto",children:S.jsxs("table",{className:"w-full",children:[S.jsx("thead",{children:S.jsxs("tr",{className:"border-b",children:[S.jsx("th",{className:"text-left py-3 px-4",children:"Image"}),S.jsx("th",{className:"text-left py-3 px-4",children:"Name"}),S.jsx("th",{className:"text-left py-3 px-4",children:"Category"}),S.jsx("th",{className:"text-left py-3 px-4",children:"Price"}),S.jsx("th",{className:"text-left py-3 px-4",children:"Duration"}),S.jsx("th",{className:"text-left py-3 px-4",children:"Actions"})]})}),S.jsx("tbody",{children:e.map(C=>S.jsxs("tr",{className:"border-b",children:[S.jsx("td",{className:"py-3 px-4",children:C.imageUrl?S.jsx("img",{src:C.imageUrl,alt:C.name,className:"w-16 h-16 object-cover rounded"}):S.jsx("div",{className:"w-16 h-16 bg-gray-200 rounded flex items-center justify-center",children:S.jsx("span",{className:"text-gray-400 text-sm",children:"No image"})})}),S.jsx("td",{className:"py-3 px-4",children:C.name}),S.jsx("td",{className:"py-3 px-4",children:C.category}),S.jsxs("td",{className:"py-3 px-4",children:["$",C.price]}),S.jsx("td",{className:"py-3 px-4",children:C.duration}),S.jsx("td",{className:"py-3 px-4",children:S.jsx("button",{onClick:()=>Ie(C.id),className:"text-red-600 hover:text-red-800 disabled:opacity-50",disabled:i,children:i?"Deleting...":"Delete"})})]},C.id))})]})}),F&&S.jsx("div",{className:"mt-6 text-center",children:S.jsx("button",{onClick:()=>W(!0),className:"btn-secondary",disabled:i,children:i?"Loading...":"Load More"})})]})]})]})};var L0="https://js.stripe.com/v3",Ob=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var Lb=function(){for(var e=document.querySelectorAll('script[src^="'.concat(L0,'"]')),t=0;t<e.length;t++){var i=e[t];if(Ob.test(i.src))return i}return null},mv=function(e){var t="",i=document.createElement("script");i.src="".concat(L0).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(i),i},Vb=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:t})},Za=null,uc=null,cc=null,Mb=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},Ub=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}},Fb=function(e){return Za!==null?Za:(Za=new Promise(function(t,i){if(typeof window>"u"||typeof document>"u"){t(null);return}if(window.Stripe){t(window.Stripe);return}try{var o=Lb();if(!(o&&e)){if(!o)o=mv(e);else if(o&&cc!==null&&uc!==null){var l;o.removeEventListener("load",cc),o.removeEventListener("error",uc),(l=o.parentNode)===null||l===void 0||l.removeChild(o),o=mv(e)}}cc=Ub(t,i),uc=Mb(i),o.addEventListener("load",cc),o.addEventListener("error",uc)}catch(c){i(c);return}}),Za.catch(function(t){return Za=null,Promise.reject(t)}))},jb=function(e,t,i){if(e===null)return null;var o=e.apply(void 0,t);return Vb(o,i),o},el,V0=!1,M0=function(){return el||(el=Fb(null).catch(function(e){return el=null,Promise.reject(e)}),el)};Promise.resolve().then(function(){return M0()}).catch(function(n){V0||console.warn(n)});var Bb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];V0=!0;var o=Date.now();return M0().then(function(l){return jb(l,t,o)})};const zb=Bb("your_publishable_key"),$b=()=>{var p;const n=Is(),e=Ss(),[t,i]=G.useState(!1),[o,l]=G.useState(null),c=(p=n.state)==null?void 0:p.bookingData;G.useEffect(()=>{c||e("/booking")},[c,e]);const d=async()=>{try{i(!0),l(null);const y=await fetch("/api/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:c.totalPrice*100,service:c.service})}),{clientSecret:E}=await y.json(),T=await zb;if(!T)throw new Error("Stripe failed to load");const{error:P,paymentMethod:F}=await T.createPaymentMethod({type:"card",card:{}});if(P)throw P;const{error:$}=await T.confirmCardPayment(E,{payment_method:F.id});if($)throw $;e("/booking-confirmation")}catch(y){l(y.message)}finally{i(!1)}};return c?S.jsxs("div",{className:"max-w-2xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Payment"}),S.jsx("p",{className:"text-gray-600",children:"Complete your booking payment"})]}),S.jsxs("div",{className:"card space-y-6",children:[S.jsxs("div",{className:"border-b pb-4",children:[S.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Order Summary"}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("div",{className:"flex justify-between",children:[S.jsx("span",{children:"Service:"}),S.jsx("span",{children:c.service})]}),S.jsxs("div",{className:"flex justify-between",children:[S.jsx("span",{children:"Date:"}),S.jsx("span",{children:c.date})]}),S.jsxs("div",{className:"flex justify-between",children:[S.jsx("span",{children:"Time:"}),S.jsx("span",{children:c.time})]}),S.jsxs("div",{className:"flex justify-between font-bold text-lg",children:[S.jsx("span",{children:"Total:"}),S.jsxs("span",{className:"text-primary",children:["$",c.totalPrice]})]})]})]}),S.jsxs("div",{children:[S.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Payment Details"}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Card Number"}),S.jsx("input",{type:"text",placeholder:"1234 5678 9012 3456",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Expiry Date"}),S.jsx("input",{type:"text",placeholder:"MM/YY",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"CVC"}),S.jsx("input",{type:"text",placeholder:"123",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"})]})]})]})]}),o&&S.jsx("div",{className:"text-red-600 text-sm",children:o}),S.jsx("button",{onClick:d,disabled:t,className:"btn-primary w-full disabled:opacity-50",children:t?"Processing...":"Pay Now"})]})]}):null};class Hb{constructor(e=5,t=15*60*1e3){this.maxAttempts=e,this.windowMs=t,this.attempts=new Map}isBlocked(e){const t=Date.now(),i=this.attempts.get(e)||{count:0,timestamp:t};return t-i.timestamp>this.windowMs&&(i.count=0,i.timestamp=t),i.count++,this.attempts.set(e,i),i.count>=this.maxAttempts?{blocked:!0,timeLeft:Math.ceil((this.windowMs-(t-i.timestamp))/1e3)}:{blocked:!1}}reset(e){this.attempts.delete(e)}}const ff=new Hb,qb=()=>{const n=Ss(),{user:e,isAdmin:t}=yh(),[i,o]=G.useState({email:"",password:""}),[l,c]=G.useState(""),[d,p]=G.useState(!1),[y,E]=G.useState(!1),[T,P]=G.useState(0);G.useEffect(()=>{e&&t&&n("/admin")},[e,t,n]),G.useEffect(()=>{const $=()=>{const{blocked:H,timeLeft:U}=ff.isBlocked(i.email);E(H),P(U)};i.email&&$()},[i.email]);const F=async $=>{$.preventDefault(),c("");const{blocked:H,timeLeft:U}=ff.isBlocked(i.email);if(H){c(`Too many login attempts. Please try again in ${U} seconds.`);return}p(!0);try{await fb(i.email,i.password),ff.reset(i.email)}catch(W){console.error("Login error:",W);let Z="An error occurred. Please try again.";W.code==="auth/invalid-credential"||W.code==="auth/wrong-password"||W.code==="auth/user-not-found"?Z="Invalid email or password":W.code==="auth/too-many-requests"?Z="Too many failed attempts. Please try again later":W.message==="User document not found"?Z="User account not found. Please contact support.":W.message==="Unauthorized access"?Z="You do not have permission to access the admin dashboard.":W.code==="auth/network-request-failed"&&(Z="Network error. Please check your connection and try again."),c(Z)}finally{p(!1)}};return S.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:S.jsxs("div",{className:"max-w-md w-full space-y-8",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Admin Login"}),S.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Please sign in to access the admin dashboard"})]}),S.jsxs("form",{className:"mt-8 space-y-6",onSubmit:F,children:[S.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[S.jsxs("div",{children:[S.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email"}),S.jsx("input",{id:"email",name:"email",type:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm",placeholder:"Email address",value:i.email,onChange:$=>o({...i,email:$.target.value}),disabled:d||y})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),S.jsx("input",{id:"password",name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm",placeholder:"Password",value:i.password,onChange:$=>o({...i,password:$.target.value}),disabled:d||y})]})]}),l&&S.jsx("div",{className:"text-red-600 text-sm text-center bg-red-50 p-3 rounded-md",children:l}),y&&S.jsxs("div",{className:"text-red-600 text-sm text-center bg-red-50 p-3 rounded-md",children:["Too many login attempts. Please try again in ",T," seconds."]}),S.jsx("div",{children:S.jsx("button",{type:"submit",disabled:d||y,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed",children:d?S.jsxs("span",{className:"flex items-center",children:[S.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[S.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing in..."]}):y?"Account Temporarily Locked":"Sign in"})})]})]})})},Wb=({children:n})=>{const{user:e,loading:t}=yh();return t?S.jsx("div",{className:"flex justify-center items-center min-h-screen",children:S.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})}):e?n:S.jsx(BI,{to:"/login",replace:!0})};function Kb(){return S.jsx(yb,{children:S.jsx(XI,{children:S.jsx("div",{className:"min-h-screen",children:S.jsxs(Ry,{children:[S.jsx(pi,{path:"/login",element:S.jsx(qb,{})}),S.jsx(pi,{path:"*",element:S.jsxs(S.Fragment,{children:[S.jsx(Tb,{}),S.jsx("main",{className:"container mx-auto px-4 py-8",children:S.jsxs(Ry,{children:[S.jsx(pi,{path:"/",element:S.jsx(Ib,{})}),S.jsx(pi,{path:"/services",element:S.jsx(Nb,{})}),S.jsx(pi,{path:"/booking",element:S.jsx(bb,{})}),S.jsx(pi,{path:"/admin",element:S.jsx(Wb,{children:S.jsx(Db,{})})}),S.jsx(pi,{path:"/payment",element:S.jsx($b,{})})]})})]})})]})})})})}const pf={BASE_URL:"/salon-booking-system/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"your_api_key_here",VITE_FIREBASE_APP_ID:"your_app_id_here",VITE_FIREBASE_AUTH_DOMAIN:"your_auth_domain_here",VITE_FIREBASE_MEASUREMENT_ID:"your_measurement_id_here",VITE_FIREBASE_MESSAGING_SENDER_ID:"your_messaging_sender_id_here",VITE_FIREBASE_PROJECT_ID:"your_project_id_here",VITE_FIREBASE_STORAGE_BUCKET:"your_storage_bucket_here"},Gb=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID","VITE_FIREBASE_MEASUREMENT_ID","VITE_RECAPTCHA_SITE_KEY","VITE_STRIPE_PUBLISHABLE_KEY"],Qb={VITE_FIREBASE_API_KEY:/^AIza[0-9A-Za-z-_]{35}$/,VITE_FIREBASE_AUTH_DOMAIN:/^[a-zA-Z0-9-]+\.firebaseapp\.com$/,VITE_FIREBASE_PROJECT_ID:/^[a-zA-Z0-9-]+$/,VITE_FIREBASE_STORAGE_BUCKET:/^[a-zA-Z0-9-]+\.appspot\.com$/,VITE_FIREBASE_MESSAGING_SENDER_ID:/^[0-9]{12}$/,VITE_FIREBASE_APP_ID:/^1:[0-9]+:[a-zA-Z0-9-]+$/,VITE_FIREBASE_MEASUREMENT_ID:/^G-[A-Z0-9]{10}$/,VITE_RECAPTCHA_SITE_KEY:/^6L[0-9A-Za-z-_]{38}$/,VITE_STRIPE_PUBLISHABLE_KEY:/^pk_(test|live)_[0-9A-Za-z]{24}$/};function Xb(){const n=Gb.filter(t=>!pf[t]);if(n.length>0)throw new Error(`Missing required environment variables: ${n.join(", ")}`);for(const[t,i]of Object.entries(Qb)){const o=pf[t];if(!i.test(o))throw new Error(`Invalid format for ${t}`)}const e=[/password/i,/secret/i,/key/i,/token/i,/credential/i];for(const[t,i]of Object.entries(pf))e.some(o=>o.test(t))&&(i.includes("test")||i.includes("example"))&&console.warn(`Warning: ${t} appears to contain a test/example value`)}Xb();YT.createRoot(document.getElementById("root")).render(S.jsx(yv.StrictMode,{children:S.jsx(Kb,{})}));
//# sourceMappingURL=index-D4YtSdeG.js.map
