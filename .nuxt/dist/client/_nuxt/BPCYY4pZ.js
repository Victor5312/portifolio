const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Cy03CCjD.js","./Ba0swzBq.js","./error-404.DL_4WIao.css","./CIseH_DD.js","./error-500.I1Dtv2V5.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function Eh(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ge={},Vr=[],Si=()=>{},w_=()=>!1,wa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),cc=n=>n.startsWith("onUpdate:"),$e=Object.assign,Th=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},lx=Object.prototype.hasOwnProperty,ue=(n,t)=>lx.call(n,t),Vt=Array.isArray,lr=n=>Aa(n)==="[object Map]",Nl=n=>Aa(n)==="[object Set]",jd=n=>Aa(n)==="[object Date]",Ht=n=>typeof n=="function",xe=n=>typeof n=="string",Kn=n=>typeof n=="symbol",fe=n=>n!==null&&typeof n=="object",A_=n=>(fe(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),R_=Object.prototype.toString,Aa=n=>R_.call(n),cx=n=>Aa(n).slice(8,-1),C_=n=>Aa(n)==="[object Object]",uc=n=>xe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,qr=Eh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fc=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},ux=/-\w/g,cn=fc(n=>n.replace(ux,t=>t.slice(1).toUpperCase())),fx=/\B([A-Z])/g,ls=fc(n=>n.replace(fx,"-$1").toLowerCase()),hc=fc(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fc=fc(n=>n?`on${hc(n)}`:""),_i=(n,t)=>!Object.is(n,t),Sl=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},P_=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},wh=n=>{const t=parseFloat(n);return isNaN(t)?n:t},hx=n=>{const t=xe(n)?Number(n):NaN;return isNaN(t)?n:t};let $d;const dc=()=>$d||($d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ns(n){if(Vt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=xe(i)?_x(i):ns(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(xe(n)||fe(n))return n}const dx=/;(?![^(]*\))/g,px=/:([^]+)/,mx=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function _x(n){const t={};return n.replace(mx,e=>e.startsWith("/*")?"":e).split(dx).forEach(e=>{if(e){const i=e.split(px);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ni(n){let t="";if(xe(n))t=n;else if(Vt(n))for(let e=0;e<n.length;e++){const i=ni(n[e]);i&&(t+=i+" ")}else if(fe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function gx(n){if(!n)return null;let{class:t,style:e}=n;return t&&!xe(t)&&(n.class=ni(t)),e&&(n.style=ns(e)),n}const vx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xx=Eh(vx);function L_(n){return!!n||n===""}function yx(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=pc(n[r],t[r],e);return i}function Yd(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),r=new Uint8Array(i.length);for(const s of n){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&pc(s,i[a],e)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function Sx(n,t,e){let i=lr(n),r=lr(t);if(i||r||(i=Nl(n),r=Nl(t),i||r))return i&&r?Yd(n,t,e):!1;const s=Object.keys(n).length,o=Object.keys(t).length;if(s!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),u=t.hasOwnProperty(a);if(l&&!u||!l&&u||!pc(n[a],t[a],e))return!1}return String(n)===String(t)}function Kd(n,t,e,i){e||(e=[new Map,new Map]);const[r,s]=e;if(r.has(n)||s.has(t))return r.get(n)===t&&s.get(t)===n;r.set(n,t),s.set(t,n);const o=i(n,t,e);return r.delete(n),s.delete(t),o}function pc(n,t,e){if(n===t)return!0;let i=jd(n),r=jd(t);return i||r?i&&r?n.getTime()===t.getTime():!1:(i=Kn(n),r=Kn(t),i||r?n===t:(i=Vt(n),r=Vt(t),i||r?i&&r?Kd(n,t,e,yx):!1:(i=fe(n),r=fe(t),i||r?!i||!r?!1:Kd(n,t,e,Sx):String(n)===String(t))))}const D_=n=>!!(n&&n.__v_isRef===!0),wn=n=>xe(n)?n:n==null?"":Vt(n)||fe(n)&&(n.toString===R_||!Ht(n.toString))?D_(n)?wn(n.value):JSON.stringify(n,I_,2):String(n),I_=(n,t)=>D_(t)?I_(n,t.value):lr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Bc(i,s)+" =>"]=r,e),{})}:Nl(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Bc(e))}:Kn(t)?Bc(t):fe(t)&&!Vt(t)&&!C_(t)?String(t):t,Bc=(n,t="")=>{var e;return Kn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};let Xe;class U_{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Xe&&(Xe.active?(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const r=this.scopes.slice();for(t=0,e=r.length;t<e;t++)r[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Xe;try{return Xe=this,t()}finally{Xe=e}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){if(this._on>0&&--this._on===0){if(Xe===this)Xe=this.prevScope;else{let t=Xe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(e=0,i=r.length;e<i;e++)r[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Mx(n){return new U_(n)}function mc(){return Xe}let ve;const kc=new WeakSet;class N_{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&(Xe.active?Xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kc.has(this)&&(kc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||F_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jd(this),B_(this);const t=ve,e=si;ve=this,si=!0;try{return this.fn()}finally{k_(this),ve=t,si=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ch(t);this.deps=this.depsTail=void 0,Jd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xu(this)&&this.run()}get dirty(){return Xu(this)}}let O_=0,Wo,Xo;function F_(n,t=!1){if(n.flags|=8,t){n.next=Xo,Xo=n;return}n.next=Wo,Wo=n}function Ah(){O_++}function Rh(){if(--O_>0)return;if(Xo){let t=Xo;for(Xo=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Wo;){let t=Wo;for(Wo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function B_(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function k_(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),Ch(i),bx(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Xu(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(z_(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function z_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===na)||(n.globalVersion=na,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Xu(n))))return;n.flags|=2;const t=n.dep,e=ve,i=si;ve=n,si=!0;try{B_(n);const r=n.fn(n._value);(t.version===0||_i(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{ve=e,si=i,k_(n),n.flags&=-3}}function Ch(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Ch(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function bx(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let si=!0;const H_=[];function Wi(){H_.push(si),si=!1}function Xi(){const n=H_.pop();si=n===void 0?!0:n}function Jd(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ve;ve=void 0;try{t()}finally{ve=e}}}let na=0;class Ex{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ph{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!si||ve===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ve)e=this.activeLink=new Ex(ve,this),ve.deps?(e.prevDep=ve.depsTail,ve.depsTail.nextDep=e,ve.depsTail=e):ve.deps=ve.depsTail=e,V_(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ve.depsTail,e.nextDep=void 0,ve.depsTail.nextDep=e,ve.depsTail=e,ve.deps===e&&(ve.deps=i)}return e}trigger(t){this.version++,na++,this.notify(t)}notify(t){Ah();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Rh()}}}function V_(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)V_(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ol=new WeakMap,jr=Symbol(""),qu=Symbol(""),ia=Symbol("");function Je(n,t,e){if(si&&ve){let i=Ol.get(n);i||Ol.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Ph),r.map=i,r.key=e),r.track()}}function ki(n,t,e,i,r,s){const o=Ol.get(n);if(!o){na++;return}const a=l=>{l&&l.trigger()};if(Ah(),t==="clear")o.forEach(a);else{const l=Vt(n),u=l&&uc(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,d)=>{(d==="length"||d===ia||!Kn(d)&&d>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(ia)),t){case"add":l?u&&a(o.get("length")):(a(o.get(jr)),lr(n)&&a(o.get(qu)));break;case"delete":l||(a(o.get(jr)),lr(n)&&a(o.get(qu)));break;case"set":lr(n)&&a(o.get(jr));break}}Rh()}function Tx(n,t){const e=Ol.get(n);return e&&e.get(t)}function _s(n){const t=oe(n);return t===n||(Je(t,"iterate",ia),In(n))?t:oi(n)?Vi(n)?t.map(e=>pr(Jn(e))):t.map(pr):t.map(Jn)}function _c(n){return Je(n=oe(n),"iterate",ia),n}function di(n,t){return oi(n)?pr(Vi(n)?Jn(t):t):Jn(t)}const wx={__proto__:null,[Symbol.iterator](){return zc(this,Symbol.iterator,n=>di(this,n))},concat(...n){return _s(this).concat(...n.map(t=>Vt(t)?_s(t):t))},entries(){return zc(this,"entries",n=>(n[1]=di(this,n[1]),n))},every(n,t){return Ai(this,"every",n,t,void 0,arguments)},filter(n,t){return Ai(this,"filter",n,t,e=>e.map(i=>di(this,i)),arguments)},find(n,t){return Ai(this,"find",n,t,e=>di(this,e),arguments)},findIndex(n,t){return Ai(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ai(this,"findLast",n,t,e=>di(this,e),arguments)},findLastIndex(n,t){return Ai(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ai(this,"forEach",n,t,void 0,arguments)},includes(...n){return Hc(this,"includes",n)},indexOf(...n){return Hc(this,"indexOf",n)},join(n){return _s(this).join(n)},lastIndexOf(...n){return Hc(this,"lastIndexOf",n)},map(n,t){return Ai(this,"map",n,t,void 0,arguments)},pop(){return wo(this,"pop")},push(...n){return wo(this,"push",n)},reduce(n,...t){return Zd(this,"reduce",n,t)},reduceRight(n,...t){return Zd(this,"reduceRight",n,t)},shift(){return wo(this,"shift")},some(n,t){return Ai(this,"some",n,t,void 0,arguments)},splice(...n){return wo(this,"splice",n)},toReversed(){return _s(this).toReversed()},toSorted(n){return _s(this).toSorted(n)},toSpliced(...n){return _s(this).toSpliced(...n)},unshift(...n){return wo(this,"unshift",n)},values(){return zc(this,"values",n=>di(this,n))}};function zc(n,t,e){const i=_c(n),r=i[t]();return i!==n&&!In(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const Ax=Array.prototype;function Ai(n,t,e,i,r,s){const o=_c(n),a=o!==n&&!In(n),l=o[t];if(l!==Ax[t]){const f=l.apply(n,s);return a?Jn(f):f}let u=e;o!==n&&(a?u=function(f,d){return e.call(this,di(n,f),d,n)}:e.length>2&&(u=function(f,d){return e.call(this,f,d,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Zd(n,t,e,i){const r=_c(n),s=r!==n&&!In(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=di(n,u)),e.call(this,u,di(n,c),f,n)}):e.length>3&&(o=function(u,c,f){return e.call(this,u,c,f,n)}));const l=r[t](o,...i);return a?di(n,l):l}function Hc(n,t,e){const i=oe(n);Je(i,"iterate",ia);const r=i[t](...e);return(r===-1||r===!1)&&gc(e[0])?(e[0]=oe(e[0]),i[t](...e)):r}function wo(n,t,e=[]){Wi(),Ah();const i=oe(n)[t].apply(n,e);return Rh(),Xi(),i}const Rx=Eh("__proto__,__v_isRef,__isVue"),G_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Kn));function Cx(n){Kn(n)||(n=String(n));const t=oe(this);return Je(t,"has",n),t.hasOwnProperty(n)}class W_{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?kx:$_:s?j_:q_).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Vt(t);if(!r){let l;if(o&&(l=wx[e]))return l;if(e==="hasOwnProperty")return Cx}const a=Reflect.get(t,e,Ue(t)?t:i);if((Kn(e)?G_.has(e):Rx(e))||(r||Je(t,"get",e),s))return a;if(Ue(a)){const l=o&&uc(e)?a:a.value;return r&&fe(l)?$u(l):l}return fe(a)?r?$u(a):dr(a):a}}class X_ extends W_{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Vt(t)&&uc(e);if(!this._isShallow){const u=oi(s);if(!In(i)&&!oi(i)&&(s=oe(s),i=oe(i)),!o&&Ue(s)&&!Ue(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:ue(t,e),l=Reflect.set(t,e,i,Ue(t)?t:r);return t===oe(r)&&l&&(a?_i(i,s)&&ki(t,"set",e,i):ki(t,"add",e,i)),l}deleteProperty(t,e){const i=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&ki(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Kn(e)||!G_.has(e))&&Je(t,"has",e),i}ownKeys(t){return Je(t,"iterate",Vt(t)?"length":jr),Reflect.ownKeys(t)}}class Px extends W_{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Lx=new X_,Dx=new Px,Ix=new X_(!0);const ju=n=>n,Oa=n=>Reflect.getPrototypeOf(n);function Ux(n,t,e){return function(...i){const r=this.__v_raw,s=oe(r),o=lr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?ju:t?pr:Jn;return!t&&Je(s,"iterate",l?qu:jr),$e(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function Fa(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Nx(n,t){const e={get(r){const s=this.__v_raw,o=oe(s),a=oe(r);n||(_i(r,a)&&Je(o,"get",r),Je(o,"get",a));const{has:l}=Oa(o),u=t?ju:n?pr:Jn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Je(oe(r),"iterate",jr),r.size},has(r){const s=this.__v_raw,o=oe(s),a=oe(r);return n||(_i(r,a)&&Je(o,"has",r),Je(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=oe(a),u=t?ju:n?pr:Jn;return!n&&Je(l,"iterate",jr),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return $e(e,n?{add:Fa("add"),set:Fa("set"),delete:Fa("delete"),clear:Fa("clear")}:{add(r){const s=oe(this),o=Oa(s),a=oe(r),l=!t&&!In(r)&&!oi(r)?a:r;return o.has.call(s,l)||_i(r,l)&&o.has.call(s,r)||_i(a,l)&&o.has.call(s,a)||(s.add(l),ki(s,"add",l,l)),this},set(r,s){!t&&!In(s)&&!oi(s)&&(s=oe(s));const o=oe(this),{has:a,get:l}=Oa(o);let u=a.call(o,r);u||(r=oe(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?_i(s,c)&&ki(o,"set",r,s):ki(o,"add",r,s),this},delete(r){const s=oe(this),{has:o,get:a}=Oa(s);let l=o.call(s,r);l||(r=oe(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&ki(s,"delete",r,void 0),u},clear(){const r=oe(this),s=r.size!==0,o=r.clear();return s&&ki(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ux(r,n,t)}),e}function Lh(n,t){const e=Nx(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ue(e,r)&&r in i?e:i,r,s)}const Ox={get:Lh(!1,!1)},Fx={get:Lh(!1,!0)},Bx={get:Lh(!0,!1)};const q_=new WeakMap,j_=new WeakMap,$_=new WeakMap,kx=new WeakMap;function zx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dr(n){return oi(n)?n:Dh(n,!1,Lx,Ox,q_)}function ks(n){return Dh(n,!1,Ix,Fx,j_)}function $u(n){return Dh(n,!0,Dx,Bx,$_)}function Dh(n,t,e,i,r){if(!fe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=zx(cx(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return r.set(n,a),a}function Vi(n){return oi(n)?Vi(n.__v_raw):!!(n&&n.__v_isReactive)}function oi(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function gc(n){return n?!!n.__v_raw:!1}function oe(n){const t=n&&n.__v_raw;return t?oe(t):n}function Hx(n){return!ue(n,"__v_skip")&&Object.isExtensible(n)&&P_(n,"__v_skip",!0),n}const Jn=n=>fe(n)?dr(n):n,pr=n=>fe(n)?$u(n):n;function Ue(n){return n?n.__v_isRef===!0:!1}function Oe(n){return Y_(n,!1)}function Yu(n){return Y_(n,!0)}function Y_(n,t){return Ue(n)?n:new Vx(n,t)}class Vx{constructor(t,e){this.dep=new Ph,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:oe(t),this._value=e?t:Jn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||In(t)||oi(t);t=i?t:oe(t),_i(t,e)&&(this._rawValue=t,this._value=i?t:Jn(t),this.dep.trigger())}}function ct(n){return Ue(n)?n.value:n}function Gx(n){return Ht(n)?n():ct(n)}const Wx={get:(n,t,e)=>t==="__v_raw"?n:ct(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Ue(r)&&!Ue(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function K_(n){return Vi(n)?n:new Proxy(n,Wx)}class Xx{constructor(t,e,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Kn(e)?e:String(e),this._raw=oe(t);let r=!0,s=t;if(!Vt(t)||Kn(this._key)||!uc(this._key))do r=!gc(s)||In(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let t=this._object[this._key];return this._shallow&&(t=ct(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Ue(this._raw[this._key])){const e=this._object[this._key];if(Ue(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return Tx(this._raw,this._key)}}class qx{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function jx(n,t,e){return Ue(n)?n:Ht(n)?new qx(n):fe(n)&&arguments.length>1?$x(n,t,e):Oe(n)}function $x(n,t,e){return new Xx(n,t,e)}class Yx{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Ph(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return F_(this,!0),!0}get value(){const t=this.dep.track();return z_(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Kx(n,t,e=!1){let i,r;return Ht(n)?i=n:(i=n.get,r=n.set),new Yx(i,r,e)}const Ba={},Fl=new WeakMap;let Ir;function Jx(n,t=!1,e=Ir){if(e){let i=Fl.get(e);i||Fl.set(e,i=[]),i.push(n)}}function Zx(n,t,e=ge){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=x=>r?x:In(x)||r===!1||r===0?zi(x,1):zi(x);let c,f,d,h,m=!1,g=!1;if(Ue(n)?(f=()=>n.value,m=In(n)):Vi(n)?(f=()=>u(n),m=!0):Vt(n)?(g=!0,m=n.some(x=>Vi(x)||In(x)),f=()=>n.map(x=>{if(Ue(x))return x.value;if(Vi(x))return u(x);if(Ht(x))return l?l(x,2):x()})):Ht(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){Wi();try{d()}finally{Xi()}}const x=Ir;Ir=c;try{return l?l(n,3,[h]):n(h)}finally{Ir=x}}:f=Si,t&&r){const x=f,E=r===!0?1/0:r;f=()=>zi(x(),E)}const v=mc(),_=()=>{c.stop(),v&&v.active&&Th(v.effects,c)};if(s&&t){const x=t;t=(...E)=>{const w=x(...E);return _(),w}}let y=g?new Array(n.length).fill(Ba):Ba;const p=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(t){const E=c.run();if(x||r||m||(g?E.some((w,R)=>_i(w,y[R])):_i(E,y))){d&&d();const w=Ir;Ir=c;try{const R=[E,y===Ba?void 0:g&&y[0]===Ba?[]:y,h];y=E,l?l(t,3,R):t(...R)}finally{Ir=w}}}else c.run()};return a&&a(p),c=new N_(f),c.scheduler=o?()=>o(p,!1):p,h=x=>Jx(x,!1,c),d=c.onStop=()=>{const x=Fl.get(c);if(x){if(l)l(x,4);else for(const E of x)E();Fl.delete(c)}},t?i?p(!0):y=c.run():o?o(p.bind(null,!0),!0):c.run(),_.pause=c.pause.bind(c),_.resume=c.resume.bind(c),_.stop=_,_}function zi(n,t=1/0,e){if(t<=0||!fe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ue(n))zi(n.value,t,e);else if(Vt(n))for(let i=0;i<n.length;i++)zi(n[i],t,e);else if(Nl(n)||lr(n))n.forEach(i=>{zi(i,t,e)});else if(C_(n)){for(const i in n)zi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zi(n[i],t,e)}return n}function Ra(n,t,e,i){try{return i?n(...i):n()}catch(r){go(r,t,e)}}function ai(n,t,e,i){if(Ht(n)){const r=Ra(n,t,e,i);return r&&A_(r)&&r.catch(s=>{go(s,t,e)}),r}if(Vt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ai(n[s],t,e,i));return r}}function go(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){Wi(),Ra(s,null,10,[n,l,u]),Xi();return}}Qx(n,e,r,i,o)}function Qx(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const on=[];let ui=-1;const Xs=[];let nr=null,Ns=0;const J_=Promise.resolve();let Bl=null;function Ih(n){const t=Bl||J_;return n?t.then(this?n.bind(this):n):t}function ty(n){let t=ui+1,e=on.length;for(;t<e;){const i=t+e>>>1,r=on[i],s=ra(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Uh(n){if(!(n.flags&1)){const t=ra(n),e=on[on.length-1];!e||!(n.flags&2)&&t>=ra(e)?on.push(n):on.splice(ty(t),0,n),n.flags|=1,Z_()}}function Z_(){Bl||(Bl=J_.then(Q_))}function Ku(n){if(!Vt(n))nr&&n.id===-1?nr.splice(Ns+1,0,n):n.flags&1||(Xs.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Xs.push(n[t]);Z_()}function Qd(n,t,e=ui+1){for(;e<on.length;e++){const i=on[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;on.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kl(n){if(Xs.length){const t=[...new Set(Xs)].sort((e,i)=>ra(e)-ra(i));if(Xs.length=0,nr){for(let e=0;e<t.length;e++)nr.push(t[e]);return}for(nr=t,Ns=0;Ns<nr.length;Ns++){const e=nr[Ns];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}nr=null,Ns=0}}const ra=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Q_(n){try{for(ui=0;ui<on.length;ui++){const t=on[ui];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ra(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ui<on.length;ui++){const t=on[ui];t&&(t.flags&=-2)}ui=-1,on.length=0,kl(),Bl=null,(on.length||Xs.length)&&Q_()}}let Pn=null,tg=null;function zl(n){const t=Pn;return Pn=n,tg=n&&n.type.__scopeId||null,t}function Nh(n,t=Pn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&Wl(-1);const s=zl(t),o=Kr.length;let a;try{a=n(...r)}finally{for(let l=Kr.length;l>o;l--)qh();zl(s),i._d&&Wl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ri(n,t){if(Pn===null)return n;const e=Tc(Pn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=ge]=t[r];s&&(Ht(s)&&(s={mounted:s,updated:s}),s.deep&&zi(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function fi(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Wi(),ai(l,e,8,[n.el,a,n,t]),Xi())}}function Oh(n,t){if(qe){let e=qe.provides;const i=qe.parent&&qe.parent.provides;i===e&&(e=qe.provides=Object.create(i)),e[n]=t}}function qs(n,t,e=!1){const i=vo();if(i||$r){let r=$r?$r._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Ht(t)?t.call(i&&i.proxy):t}}function Fh(){return!!(vo()||$r)}const ey=Symbol.for("v-scx"),ny=()=>qs(ey);function iy(n,t){return Bh(n,null,t)}function Vc(n,t,e){return Bh(n,t,e)}function Bh(n,t,e=ge){const{immediate:i,deep:r,flush:s,once:o}=e,a=$e({},e),l=t&&i||!t&&s!=="post";let u;if(ro){if(s==="sync"){const h=ny();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Si,h.resume=Si,h.pause=Si,h}}const c=qe;a.call=(h,m,g)=>ai(h,c,m,g);let f=!1;s==="post"?a.scheduler=h=>{sn(h,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,m)=>{m?h():Uh(h)}),a.augmentJob=h=>{t&&(h.flags|=4),f&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const d=Zx(n,t,a);return ro&&(u?u.push(d):l&&d()),d}function ry(n,t,e){const i=this.proxy,r=xe(n)?n.includes(".")?eg(i,n):()=>i[n]:n.bind(i,i);let s;Ht(t)?s=t:(s=t.handler,e=t);const o=Ca(this),a=Bh(r,s.bind(i),e);return o(),a}function eg(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const sy=Symbol("_vte"),vc=n=>n.__isTeleport,Gc=Symbol("_leaveCb");function oy(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==On){t=e;break}}return t}function ng(n){if(!xc(n))return vc(n.type)&&n.children?oy(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Ht(e.default))return e.default()}}function kh(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;kh(vc(e.type)&&ng(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function zh(n,t){return Ht(n)?$e({name:n.name},t,{setup:n}):n}function Hh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function tp(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Hl=new WeakMap;function js(n,t,e,i,r=!1){if(Vt(n)){n.forEach((g,v)=>js(g,t&&(Vt(t)?t[v]:t),e,i,r));return}if($s(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&js(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Tc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===ge?a.refs={}:a.refs,f=a.setupState,d=oe(f),h=f===ge?w_:g=>tp(c,g)?!1:ue(d,g),m=(g,v)=>!(v&&tp(c,v));if(u!=null&&u!==l){if(ep(t),xe(u))c[u]=null,h(u)&&(f[u]=null);else if(Ue(u)){const g=t;m(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(Ht(l))Ra(l,a,12,[o,c]);else{const g=xe(l),v=Ue(l);if(g||v){const _=()=>{if(n.f){const y=g?h(l)?f[l]:c[l]:m()||!n.k?l.value:c[n.k];if(r)Vt(y)&&Th(y,s);else if(Vt(y))y.includes(s)||y.push(s);else if(g)c[l]=[s],h(l)&&(f[l]=c[l]);else{const p=[s];m(l,n.k)&&(l.value=p),n.k&&(c[n.k]=p)}}else g?(c[l]=o,h(l)&&(f[l]=o)):v&&(m(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{_(),Hl.delete(n)};y.id=-1,Hl.set(n,y),sn(y,e)}else ep(n),_()}}}function ep(n){const t=Hl.get(n);t&&(t.flags|=8,Hl.delete(n))}let np=!1;const gs=()=>{np||(console.error("Hydration completed but contains mismatches."),np=!0)},ay=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",ly=n=>n.namespaceURI.includes("MathML"),ka=n=>{if(n.nodeType===1){if(ay(n))return"svg";if(ly(n))return"mathml"}},zs=n=>n.nodeType===8;function cy(n){const{mt:t,p:e,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=n,c=(p,x)=>{if(!x.hasChildNodes()){e(null,p,x),kl(),x._vnode=p;return}f(x.firstChild,p,null,null,null),kl(),x._vnode=p},f=(p,x,E,w,R,A=!1)=>{A=A||!!x.dynamicChildren;const M=zs(p)&&p.data==="[",S=()=>g(p,x,E,w,R,M),{type:L,ref:N,shapeFlag:O,patchFlag:H}=x;let $=p.nodeType;x.el=p,H===-2&&(A=!1,x.dynamicChildren=null);let B=null;switch(L){case Yr:$!==3?x.children===""?(l(x.el=r(""),o(p),p),B=p):B=S():(p.data!==x.children&&(gs(),p.data=x.children),B=s(p));break;case On:y(p)?(B=s(p),_(x.el=p.content.firstChild,p,E)):$!==8||M?B=S():B=s(p);break;case Ks:if(M&&(p=s(p),$=p.nodeType),$===1||$===3){B=p;const X=!x.children.length;for(let z=0;z<x.staticCount;z++)X&&(x.children+=B.nodeType===1?B.outerHTML:B.data),z===x.staticCount-1&&(x.anchor=B),B=s(B);return M?s(B):B}else S();break;case an:M?B=m(p,x,E,w,R,A):B=S();break;default:if(O&1)($!==1||x.type.toLowerCase()!==p.tagName.toLowerCase())&&!y(p)?B=S():B=d(p,x,E,w,R,A);else if(O&6){x.slotScopeIds=R;const X=o(p);if(M?B=v(p):zs(p)&&p.data==="teleport start"?B=v(p,p.data,"teleport end"):B=s(p),t(x,X,null,E,w,ka(X),A),($s(x)||x.component.asyncDep)&&!x.component.subTree){let z;M?(z=Le(Ks),z.anchor=B?B.previousSibling:X.lastChild):z=p.nodeType===3?$t(""):Le(p.nodeType===8?On:"div"),z.el=p,x.component.subTree=z}}else O&64?$!==8?B=S():B=x.type.hydrate(p,x,E,w,R,A,n,h):O&128&&(B=x.type.hydrate(p,x,E,w,ka(o(p)),R,A,n,f))}return N!=null&&js(N,null,w,x),B},d=(p,x,E,w,R,A)=>{A=A||!!x.dynamicChildren;const{type:M,dynamicProps:S,props:L,patchFlag:N,shapeFlag:O,dirs:H,transition:$}=x,B=M==="input"||M==="option",X=!!S;if(B||X||N!==-1){H&&fi(x,null,E,"created");let z=!1;if(y(p)){z=Eg(null,$)&&E&&E.vnode.props&&E.vnode.props.appear;const pt=p.content.firstChild;if(z){const ft=pt.getAttribute("class");ft&&(pt.$cls=ft),$.beforeEnter(pt)}_(pt,p,E),x.el=p=pt}if(O&16&&!(L&&(L.innerHTML||L.textContent))){let pt=h(p.firstChild,x,p,E,w,R,A);for(pt&&!Ml(p,1)&&gs();pt;){const ft=pt;pt=pt.nextSibling,a(ft)}}else if(O&8){let pt=x.children;pt[0]===`
`&&(p.tagName==="PRE"||p.tagName==="TEXTAREA")&&(pt=pt.slice(1));const{textContent:ft}=p;ft!==pt&&ft!==pt.replace(/\r\n|\r/g,`
`)&&(Ml(p,0)||gs(),p.textContent=x.children)}if(L){if(B||X||!A||N&48){const pt=p.tagName.includes("-"),ft=p.namespaceURI.includes("svg")?"svg":p.namespaceURI.includes("MathML")?"mathml":void 0;for(const St in L)if(B&&(St.endsWith("value")||St==="indeterminate")||wa(St)&&!qr(St)||St[0]==="."||pt&&!qr(St)||S&&S.includes(St)){if(fy(p,St,L[St]))continue;i(p,St,null,L[St],ft,E)}}else if(L.onClick)i(p,"onClick",null,L.onClick,void 0,E);else if(N&4&&Vi(L.style))for(const pt in L.style)L.style[pt]}let ht;(ht=L&&L.onVnodeBeforeMount)&&Gn(ht,E,x),H&&fi(x,null,E,"beforeMount"),((ht=L&&L.onVnodeMounted)||H||z)&&Pg(()=>{ht&&Gn(ht,E,x),z&&$.enter(p),H&&fi(x,null,E,"mounted")},w)}return p.nextSibling},h=(p,x,E,w,R,A,M)=>{M=M||!!x.dynamicChildren;const S=x.children,L=S.length;let N=!1;for(let O=0;O<L;O++){const H=M?S[O]:S[O]=Rn(S[O]),$=H.type===Yr;p?($&&!M&&O+1<L&&Rn(S[O+1]).type===Yr&&(l(r(p.data.slice(H.children.length)),E,s(p)),p.data=H.children),p=f(p,H,w,R,A,M)):$&&!H.children?l(H.el=r(""),E):(N||(N=!0,Ml(E,1)||gs()),e(null,H,E,null,w,R,ka(E),A))}return p},m=(p,x,E,w,R,A)=>{const{slotScopeIds:M}=x;M&&(R=R?R.concat(M):M);const S=o(p),L=h(s(p),x,S,E,w,R,A);return L&&zs(L)&&L.data==="]"?s(x.anchor=L):(gs(),l(x.anchor=u("]"),S,L),L)},g=(p,x,E,w,R,A)=>{if(dy(p,x)||gs(),x.el=null,A){const L=v(p);for(;;){const N=s(p);if(N&&N!==L)a(N);else break}}const M=s(p),S=o(p);return a(p),e(null,x,S,M,E,w,ka(S),R),E&&(E.vnode.el=x.el,Ec(E,x.el)),M},v=(p,x="[",E="]")=>{let w=0;for(;p;)if(p=s(p),p&&zs(p)&&(p.data===x&&w++,p.data===E)){if(w===0)return s(p);w--}return p},_=(p,x,E)=>{const w=x.parentNode;w&&w.replaceChild(p,x);let R=E;for(;R;)R.vnode.el===x&&(R.vnode.el=R.subTree.el=p),R=R.parent},y=p=>p.nodeType===1&&p.tagName==="TEMPLATE";return[c,f]}const uy=new Set(["src","srcset","href","poster"]);function fy(n,t,e){return uy.has(t)?n.getAttribute(t)===(e==null?null:`${e}`):!1}const Vl="data-allow-mismatch",hy={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ml(n,t){if(t===0||t===1)for(;n&&!n.hasAttribute(Vl);)n=n.parentElement;return Vh(n&&n.getAttribute(Vl),t)}function Vh(n,t){if(n==null)return!1;if(n==="")return!0;{const e=n.split(",");return t===0&&e.includes("children")?!0:e.includes(hy[t])}}function dy(n,t){return Ml(n.parentElement,1)||py(n)||my(t)}function py(n){return n.nodeType===1&&Vh(n.getAttribute(Vl),1)}function my({props:n}){const t=n&&n[Vl];return typeof t=="string"&&Vh(t,1)}dc().requestIdleCallback;dc().cancelIdleCallback;function _y(n,t){if(zs(n)&&n.data==="["){let e=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(zs(i))if(i.data==="]"){if(--e===0)break}else i.data==="["&&e++;i=i.nextSibling}}else t(n)}const $s=n=>!!n.type.__asyncLoader;function ip(n){Ht(n)&&(n={loader:n});const{loader:t,loadingComponent:e,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let u=null,c,f=0;const d=()=>(f++,u=null,h()),h=()=>{let m;return u||(m=u=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),l)return new Promise((v,_)=>{l(g,()=>v(d()),()=>_(g),f+1)});throw g}).then(g=>m!==u&&u?u:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return zh({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(m,g,v){const _=m.isConnected;let y=!1;(g.bu||(g.bu=[])).push(()=>y=!0);const p=()=>{y||!m.parentNode||_&&!m.isConnected||v()},x=s?()=>{const E=s(p,w=>_y(m,w));E&&(g.bum||(g.bum=[])).push(E)}:p;c?x():h().then(()=>!g.isUnmounted&&x())},get __asyncResolved(){return c},setup(){const m=qe;if(Hh(m),c)return()=>za(c,m);const g=E=>{u=null,go(E,m,13,!i)};if(a&&m.suspense||ro)return h().then(E=>()=>za(E,m)).catch(E=>(g(E),()=>i?Le(i,{error:E}):null));const v=Oe(!1),_=Oe(),y=Oe(!!r);let p,x;return Gh(()=>{p!=null&&clearTimeout(p),x!=null&&clearTimeout(x)}),r&&(x=setTimeout(()=>{m.isUnmounted||(y.value=!1)},r)),o!=null&&(p=setTimeout(()=>{if(!m.isUnmounted&&!v.value&&!_.value){const E=new Error(`Async component timed out after ${o}ms.`);g(E),_.value=E}},o)),h().then(()=>{m.isUnmounted||(v.value=!0,m.parent&&xc(m.parent.vnode)&&m.parent.update())}).catch(E=>{if(m.isUnmounted){u=null;return}g(E),_.value=E}),()=>{if(v.value&&c)return za(c,m);if(_.value&&i)return Le(i,{error:_.value});if(e&&!y.value)return za(e,m)}}})}function za(n,t){const{ref:e,props:i,children:r,ce:s}=t.vnode,o=Le(n,i,r);return o.ref=e,o.ce=s,delete t.vnode.ce,o}const xc=n=>n.type.__isKeepAlive;function ig(n,t){sg(n,"a",t)}function rg(n,t){sg(n,"da",t)}function sg(n,t,e=qe){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(yc(t,i,e),e){let r=e.parent;for(;r&&r.parent;)xc(r.parent.vnode)&&gy(i,t,e,r),r=r.parent}}function gy(n,t,e,i){const r=yc(t,n,i,!0);Gh(()=>{Th(i[t],r)},e)}function yc(n,t,e=qe,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Wi();const a=Ca(e),l=ai(t,e,n,o);return a(),Xi(),l});return i?r.unshift(s):r.push(s),s}}const $i=n=>(t,e=qe)=>{(!ro||n==="sp")&&yc(n,(...i)=>t(...i),e)},vy=$i("bm"),Sc=$i("m"),xy=$i("bu"),yy=$i("u"),Mc=$i("bum"),Gh=$i("um"),Sy=$i("sp"),My=$i("rtg"),by=$i("rtc");function og(n,t=qe){yc("ec",n,t)}const ag="components";function KD(n,t){return cg(ag,n,!0,t)||n}const lg=Symbol.for("v-ndc");function Ey(n){return xe(n)?cg(ag,n,!1)||n:n||lg}function cg(n,t,e=!0,i=!1){const r=Pn||qe;if(r){const s=r.type;{const a=hS(s,!1);if(a&&(a===t||a===cn(t)||a===hc(cn(t))))return s}const o=rp(r[n]||s[n],t)||rp(r.appContext[n],t);return!o&&i?s:o}}function rp(n,t){return n&&(n[t]||n[cn(t)]||n[hc(cn(t))])}function Ty(n,t,e,i){let r;const s=e,o=Vt(n);if(o||xe(n)){const a=o&&Vi(n);let l=!1,u=!1;a&&(l=!In(n),u=oi(n),n=_c(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?pr(Jn(n[c])):Jn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(fe(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const Ju=n=>n?Ug(n)?Tc(n):Ju(n.parent):null,qo=$e(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ju(n.parent),$root:n=>Ju(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fg(n),$forceUpdate:n=>n.f||(n.f=()=>{Uh(n.update)}),$nextTick:n=>n.n||(n.n=Ih.bind(n.proxy)),$watch:n=>ry.bind(n)}),Wc=(n,t)=>n!==ge&&!n.__isScriptSetup&&ue(n,t),wy={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Wc(i,t))return o[t]=1,i[t];if(r!==ge&&ue(r,t))return o[t]=2,r[t];if(ue(s,t))return o[t]=3,s[t];if(e!==ge&&ue(e,t))return o[t]=4,e[t];Zu&&(o[t]=0)}}const u=qo[t];let c,f;if(u)return t==="$attrs"&&Je(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==ge&&ue(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ue(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Wc(r,t)?(r[t]=e,!0):i!==ge&&ue(i,t)?(i[t]=e,!0):ue(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==ge&&a[0]!=="$"&&ue(n,a)||Wc(t,a)||ue(s,a)||ue(i,a)||ue(qo,a)||ue(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ue(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function sp(n){return Vt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Zu=!0;function Ay(n){const t=fg(n),e=n.proxy,i=n.ctx;Zu=!1,t.beforeCreate&&op(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:m,activated:g,deactivated:v,beforeDestroy:_,beforeUnmount:y,destroyed:p,unmounted:x,render:E,renderTracked:w,renderTriggered:R,errorCaptured:A,serverPrefetch:M,expose:S,inheritAttrs:L,components:N,directives:O,filters:H}=t;if(u&&Ry(u,i,null),o)for(const X in o){const z=o[X];Ht(z)&&(i[X]=z.bind(e))}if(r){const X=r.call(e,e);fe(X)&&(n.data=dr(X))}if(Zu=!0,s)for(const X in s){const z=s[X],ht=Ht(z)?z.bind(e,e):Ht(z.get)?z.get.bind(e,e):Si,pt=!Ht(z)&&Ht(z.set)?z.set.bind(e):Si,ft=Og({get:ht,set:pt});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ft.value,set:St=>ft.value=St})}if(a)for(const X in a)ug(a[X],i,e,X);if(l){const X=Ht(l)?l.call(e):l;Reflect.ownKeys(X).forEach(z=>{Oh(z,X[z])})}c&&op(c,n,"c");function B(X,z){Vt(z)?z.forEach(ht=>X(ht.bind(e))):z&&X(z.bind(e))}if(B(vy,f),B(Sc,d),B(xy,h),B(yy,m),B(ig,g),B(rg,v),B(og,A),B(by,w),B(My,R),B(Mc,y),B(Gh,x),B(Sy,M),Vt(S))if(S.length){const X=n.exposed||(n.exposed={});S.forEach(z=>{Object.defineProperty(X,z,{get:()=>e[z],set:ht=>e[z]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Si&&(n.render=E),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),O&&(n.directives=O),M&&Hh(n)}function Ry(n,t,e=Si){Vt(n)&&(n=Qu(n));for(const i in n){const r=n[i];let s;fe(r)?"default"in r?s=qs(r.from||i,r.default,!0):s=qs(r.from||i):s=qs(r),Ue(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function op(n,t,e){ai(Vt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ug(n,t,e,i){let r=i.includes(".")?eg(e,i):()=>e[i];if(xe(n)){const s=t[n];Ht(s)&&Vc(r,s)}else if(Ht(n))Vc(r,n.bind(e));else if(fe(n))if(Vt(n))n.forEach(s=>ug(s,t,e,i));else{const s=Ht(n.handler)?n.handler.bind(e):t[n.handler];Ht(s)&&Vc(r,s,n)}}function fg(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>Gl(l,u,o,!0)),Gl(l,t,o)),fe(t)&&s.set(t,l),l}function Gl(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Gl(n,s,e,!0),r&&r.forEach(o=>Gl(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Cy[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Cy={data:ap,props:lp,emits:lp,methods:Fo,computed:Fo,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Fo,directives:Fo,watch:Ly,provide:ap,inject:Py};function ap(n,t){return t?n?function(){return $e(Ht(n)?n.call(this,this):n,Ht(t)?t.call(this,this):t)}:t:n}function Py(n,t){return Fo(Qu(n),Qu(t))}function Qu(n){if(Vt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function en(n,t){return n?[...new Set([].concat(n,t))]:t}function Fo(n,t){return n?$e(Object.create(null),n,t):t}function lp(n,t){return n?Vt(n)&&Vt(t)?[...new Set([...n,...t])]:$e(Object.create(null),sp(n),sp(t??{})):t}function Ly(n,t){if(!n)return t;if(!t)return n;const e=$e(Object.create(null),n);for(const i in t)e[i]=en(n[i],t[i]);return e}function hg(){return{app:null,config:{isNativeTag:w_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dy=0;function Iy(n,t){return function(i,r=null){Ht(i)||(i=$e({},i)),r!=null&&!fe(r)&&(r=null);const s=hg(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Dy++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:pS,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Ht(c.install)?(o.add(c),c.install(u,...f)):Ht(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const h=u._ceVNode||Le(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(h,c):n(h,c,d),l=!0,u._container=c,c.__vue_app__=u,Tc(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(ai(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=$r;$r=u;try{return c()}finally{$r=f}}};return u}}let $r=null;const Uy=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${cn(t)}Modifiers`]||n[`${ls(t)}Modifiers`];function Ny(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ge;let r=e;const s=t.startsWith("update:"),o=s&&Uy(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>xe(c)?c.trim():c)),o.number&&(r=r.map(wh)));let a,l=i[a=Fc(t)]||i[a=Fc(cn(t))];!l&&s&&(l=i[a=Fc(ls(t))]),l&&ai(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ai(u,n,6,r)}}const Oy=new WeakMap;function dg(n,t,e=!1){const i=e?Oy:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ht(n)){const l=u=>{const c=dg(u,t,!0);c&&(a=!0,$e(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(fe(n)&&i.set(n,null),null):(Vt(s)?s.forEach(l=>o[l]=null):$e(o,s),fe(n)&&i.set(n,o),o)}function bc(n,t){return!n||!wa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ue(n,t[0].toLowerCase()+t.slice(1))||ue(n,ls(t))||ue(n,t))}function Xc(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:d,setupState:h,ctx:m,inheritAttrs:g}=n,v=zl(n);let _,y;try{if(e.shapeFlag&4){const x=r||i,E=x;_=Rn(u.call(E,x,c,f,h,d,m)),y=a}else{const x=t;_=Rn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),y=t.props?a:By(a)}}catch(x){Kr.length=0,go(x,n,1),_=Le(On)}let p=_;if(y&&g!==!1){const x=Object.keys(y),{shapeFlag:E}=p;x.length&&E&7&&(s&&x.some(cc)&&(y=ky(y,s)),p=is(p,y,!1,!0))}if(e.dirs&&(p=is(p,null,!1,!0),p.dirs=p.dirs?p.dirs.concat(e.dirs):e.dirs),e.transition){const x=vc(p.type)&&ng(p)||p;kh(x,e.transition)}return _=p,zl(v),_}function Fy(n,t=!0){let e;for(let i=0;i<n.length;i++){const r=n[i];if(oa(r)){if(r.type!==On||r.children==="v-if"){if(e)return;e=r}}else return}return e}const By=n=>{let t;for(const e in n)(e==="class"||e==="style"||wa(e))&&((t||(t={}))[e]=n[e]);return t},ky=(n,t)=>{const e={};for(const i in n)(!cc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function zy(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?cp(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(pg(o,i,d)&&!bc(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?cp(i,o,u):!0:!!o;return!1}function cp(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(pg(t,n,s)&&!bc(e,s))return!0}return!1}function pg(n,t,e){const i=n[e],r=t[e];return e==="style"&&fe(i)&&fe(r)?!pc(i,r):i!==r}function Ec({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const mg={},_g=()=>Object.create(mg),gg=n=>Object.getPrototypeOf(n)===mg;function Hy(n,t,e,i=!1){const r={},s=_g();n.propsDefaults=Object.create(null),vg(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:ks(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Vy(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=oe(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(bc(n.emitsOptions,d))continue;const h=t[d];if(l)if(ue(s,d))h!==s[d]&&(s[d]=h,u=!0);else{const m=cn(d);r[m]=tf(l,a,m,h,n,!1)}else h!==s[d]&&(s[d]=h,u=!0)}}}else{vg(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!ue(t,f)&&((c=ls(f))===f||!ue(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=tf(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!ue(t,f))&&(delete s[f],u=!0)}u&&ki(n.attrs,"set","")}function vg(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(qr(l))continue;const u=t[l];let c;r&&ue(r,c=cn(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:bc(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=oe(e),u=a||ge;for(let c=0;c<s.length;c++){const f=s[c];e[f]=tf(r,l,f,u[f],n,!ue(u,f))}}return o}function tf(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=ue(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ht(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=Ca(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ls(e))&&(i=!0))}return i}const Gy=new WeakMap;function xg(n,t,e=!1){const i=e?Gy:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ht(n)){const c=f=>{l=!0;const[d,h]=xg(f,t,!0);$e(o,d),h&&a.push(...h)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return fe(n)&&i.set(n,Vr),Vr;if(Vt(s))for(let c=0;c<s.length;c++){const f=cn(s[c]);up(f)&&(o[f]=ge)}else if(s)for(const c in s){const f=cn(c);if(up(f)){const d=s[c],h=o[f]=Vt(d)||Ht(d)?{type:d}:$e({},d),m=h.type;let g=!1,v=!0;if(Vt(m))for(let _=0;_<m.length;++_){const y=m[_],p=Ht(y)&&y.name;if(p==="Boolean"){g=!0;break}else p==="String"&&(v=!1)}else g=Ht(m)&&m.name==="Boolean";h[0]=g,h[1]=v,(g||ue(h,"default"))&&a.push(f)}}const u=[o,a];return fe(n)&&i.set(n,u),u}function up(n){return n[0]!=="$"&&!qr(n)}const Wh=n=>n==="_"||n==="_ctx"||n==="$stable",Xh=n=>Vt(n)?n.map(Rn):[Rn(n)],Wy=(n,t,e)=>{if(t._n)return t;const i=Nh((...r)=>Xh(t(...r)),e);return i._c=!1,i},yg=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Wh(r))continue;const s=n[r];if(Ht(s))t[r]=Wy(r,s,i);else if(s!=null){const o=Xh(s);t[r]=()=>o}}},Sg=(n,t)=>{const e=Xh(t);n.slots.default=()=>e},Mg=(n,t,e)=>{for(const i in t)(e||!Wh(i))&&(n[i]=t[i])},Xy=(n,t,e)=>{const i=n.slots=_g();if(n.vnode.shapeFlag&32){const r=t._;r?(Mg(i,t,e),e&&P_(i,"_",r,!0)):yg(t,i)}else t&&Sg(n,t)},qy=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ge;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Mg(r,t,e):(s=!t.$stable,yg(t,r)),o=t}else t&&(Sg(n,t),o={default:1});if(s)for(const a in r)!Wh(a)&&o[a]==null&&delete r[a]},sn=Pg;function jy(n){return bg(n)}function $y(n){return bg(n,cy)}function bg(n,t){const e=dc();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=Si,insertStaticContent:m}=n,g=(D,T,Y,nt=null,tt=null,q=null,ut=void 0,et=null,st=!!T.dynamicChildren)=>{if(D===T)return;D&&!ir(D,T)&&(nt=Mt(D),St(D,tt,q,!0),D=null),T.patchFlag===-2&&(st=!1,T.dynamicChildren=null),T.dynamicChildren&&D&&D.dynamicChildren&&D.dynamicChildren.hasOnce&&(T.dynamicChildren===Vr&&(T.dynamicChildren=[]),T.dynamicChildren.hasOnce=!0);const{type:Q,ref:P,shapeFlag:b}=T;switch(Q){case Yr:v(D,T,Y,nt);break;case On:_(D,T,Y,nt);break;case Ks:D==null&&y(T,Y,nt,ut);break;case an:N(D,T,Y,nt,tt,q,ut,et,st);break;default:b&1?E(D,T,Y,nt,tt,q,ut,et,st):b&6?O(D,T,Y,nt,tt,q,ut,et,st):(b&64||b&128)&&Q.process(D,T,Y,nt,tt,q,ut,et,st,It)}P!=null&&tt?js(P,D&&D.ref,q,T||D,!T):P==null&&D&&D.ref!=null&&js(D.ref,null,q,D,!0)},v=(D,T,Y,nt)=>{if(D==null)i(T.el=a(T.children),Y,nt);else{const tt=T.el=D.el;T.children!==D.children&&u(tt,T.children)}},_=(D,T,Y,nt)=>{D==null?i(T.el=l(T.children||""),Y,nt):T.el=D.el},y=(D,T,Y,nt)=>{[D.el,D.anchor]=m(D.children,T,Y,nt,D.el,D.anchor)},p=({el:D,anchor:T},Y,nt)=>{let tt;for(;D&&D!==T;)tt=d(D),i(D,Y,nt),D=tt;i(T,Y,nt)},x=({el:D,anchor:T})=>{let Y;for(;D&&D!==T;)Y=d(D),r(D),D=Y;r(T)},E=(D,T,Y,nt,tt,q,ut,et,st)=>{if(T.type==="svg"?ut="svg":T.type==="math"&&(ut="mathml"),D==null)w(T,Y,nt,tt,q,ut,et,st);else{const Q=D.el&&D.el._isVueCE?D.el:null;try{Q&&Q._beginPatch(),M(D,T,tt,q,ut,et,st)}finally{Q&&Q._endPatch()}}},w=(D,T,Y,nt,tt,q,ut,et)=>{let st,Q;const{props:P,shapeFlag:b,transition:U,dirs:W}=D;if(st=D.el=o(D.type,q,P&&P.is,P),b&8?c(st,D.children):b&16&&A(D.children,st,null,nt,tt,qc(D,q),ut,et),W&&fi(D,null,nt,"created"),R(st,D,D.scopeId,ut,nt),P){for(const j in P)j!=="value"&&!qr(j)&&s(st,j,null,P[j],q,nt);"value"in P&&s(st,"value",null,P.value,q),(Q=P.onVnodeBeforeMount)&&Gn(Q,nt,D)}W&&fi(D,null,nt,"beforeMount");const J=Eg(tt,U);J&&U.beforeEnter(st),i(st,T,Y),((Q=P&&P.onVnodeMounted)||J||W)&&sn(()=>{Q&&Gn(Q,nt,D),J&&U.enter(st),W&&fi(D,null,nt,"mounted")},tt)},R=(D,T,Y,nt,tt)=>{if(Y&&h(D,Y),nt)for(let q=0;q<nt.length;q++)h(D,nt[q]);if(tt){let q=tt.subTree;if(T===q||Rg(q.type)&&(q.ssContent===T||q.ssFallback===T)){const ut=tt.vnode;R(D,ut,ut.scopeId,ut.slotScopeIds,tt.parent)}}},A=(D,T,Y,nt,tt,q,ut,et,st=0)=>{for(let Q=st;Q<D.length;Q++){const P=D[Q]=et?Fi(D[Q]):Rn(D[Q]);g(null,P,T,Y,nt,tt,q,ut,et)}},M=(D,T,Y,nt,tt,q,ut)=>{const et=T.el=D.el;let{patchFlag:st,dynamicChildren:Q,dirs:P}=T;st|=D.patchFlag&16;const b=D.props||ge,U=T.props||ge;let W;if(Y&&br(Y,!1),(W=U.onVnodeBeforeUpdate)&&Gn(W,Y,T,D),P&&fi(T,D,Y,"beforeUpdate"),Y&&br(Y,!0),Q&&(!D.dynamicChildren||D.dynamicChildren.length!==Q.length)&&(st=0,ut=!1,Q=null),(b.innerHTML&&U.innerHTML==null||b.textContent&&U.textContent==null)&&c(et,""),Q?S(D.dynamicChildren,Q,et,Y,nt,qc(T,tt),q):ut||z(D,T,et,null,Y,nt,qc(T,tt),q,!1),st>0){if(st&16)L(et,b,U,Y,tt);else if(st&2&&b.class!==U.class&&s(et,"class",null,U.class,tt),st&4&&s(et,"style",b.style,U.style,tt),st&8){const J=T.dynamicProps;for(let j=0;j<J.length;j++){const xt=J[j],mt=b[xt],yt=U[xt];(yt!==mt||xt==="value")&&s(et,xt,mt,yt,tt,Y)}}st&1&&D.children!==T.children&&c(et,T.children)}else!ut&&Q==null&&L(et,b,U,Y,tt);((W=U.onVnodeUpdated)||P)&&sn(()=>{W&&Gn(W,Y,T,D),P&&fi(T,D,Y,"updated")},nt)},S=(D,T,Y,nt,tt,q,ut)=>{for(let et=0;et<T.length;et++){const st=D[et],Q=T[et],P=st.el&&(st.type===an||!ir(st,Q)||st.shapeFlag&198)?f(st.el):Y;g(st,Q,P,null,nt,tt,q,ut,!0)}},L=(D,T,Y,nt,tt)=>{if(T!==Y){if(T!==ge)for(const q in T)!qr(q)&&!(q in Y)&&s(D,q,T[q],null,tt,nt);for(const q in Y){if(qr(q))continue;const ut=Y[q],et=T[q];ut!==et&&q!=="value"&&s(D,q,et,ut,tt,nt)}"value"in Y&&s(D,"value",T.value,Y.value,tt)}},N=(D,T,Y,nt,tt,q,ut,et,st)=>{const Q=T.el=D?D.el:a(""),P=T.anchor=D?D.anchor:a("");let{patchFlag:b,dynamicChildren:U,slotScopeIds:W}=T;W&&(et=et?et.concat(W):W),D==null?(i(Q,Y,nt),i(P,Y,nt),A(T.children||[],Y,P,tt,q,ut,et,st)):b>0&&b&64&&U&&D.dynamicChildren&&D.dynamicChildren.length===U.length?(S(D.dynamicChildren,U,Y,tt,q,ut,et),(T.key!=null||tt&&T===tt.subTree)&&Tg(D,T,!0)):z(D,T,Y,P,tt,q,ut,et,st)},O=(D,T,Y,nt,tt,q,ut,et,st)=>{T.slotScopeIds=et,D==null?T.shapeFlag&512?tt.ctx.activate(T,Y,nt,ut,st):H(T,Y,nt,tt,q,ut,st):$(D,T,st)},H=(D,T,Y,nt,tt,q,ut)=>{const et=D.component=aS(D,nt,tt);if(xc(D)&&(et.ctx.renderer=It),lS(et,!1,ut),et.asyncDep){if(tt&&tt.registerDep(et,B,ut),!D.el){const st=et.subTree=Le(On);_(null,st,T,Y),D.placeholder=st.el}}else B(et,D,T,Y,tt,q,ut)},$=(D,T,Y)=>{const nt=T.component=D.component;if(zy(D,T,Y))if(nt.asyncDep&&!nt.asyncResolved){T.el=D.el,X(nt,T,Y);return}else nt.next=T,nt.update();else T.el=D.el,nt.vnode=T},B=(D,T,Y,nt,tt,q,ut)=>{const et=()=>{if(D.isMounted){let{next:b,bu:U,u:W,parent:J,vnode:j}=D;{const lt=wg(D);if(lt){b&&(b.el=j.el,X(D,b,ut)),lt.asyncDep.then(()=>{sn(()=>{D.isUnmounted||Q()},tt)});return}}let xt=b,mt;br(D,!1),b?(b.el=j.el,X(D,b,ut)):b=j,U&&Sl(U),(mt=b.props&&b.props.onVnodeBeforeUpdate)&&Gn(mt,J,b,j),br(D,!0);const yt=Xc(D),Rt=D.subTree;D.subTree=yt,g(Rt,yt,f(Rt.el),Mt(Rt),D,tt,q),b.el=yt.el,xt===null&&Ec(D,yt.el),W&&sn(W,tt),(mt=b.props&&b.props.onVnodeUpdated)&&sn(()=>Gn(mt,J,b,j),tt)}else{let b;const{el:U,props:W}=T,{bm:J,m:j,parent:xt,root:mt,type:yt}=D,Rt=$s(T);if(br(D,!1),J&&Sl(J),!Rt&&(b=W&&W.onVnodeBeforeMount)&&Gn(b,xt,T),br(D,!0),U&&ee){const lt=()=>{D.subTree=Xc(D),ee(U,D.subTree,D,tt,null)};Rt&&yt.__asyncHydrate?yt.__asyncHydrate(U,D,lt):lt()}else{mt.ce&&mt.ce._hasShadowRoot()&&mt.ce._injectChildStyle(yt,D.parent?D.parent.type:void 0);const lt=D.subTree=Xc(D);g(null,lt,Y,nt,D,tt,q),T.el=lt.el}if(j&&sn(j,tt),!Rt&&(b=W&&W.onVnodeMounted)){const lt=T;sn(()=>Gn(b,xt,lt),tt)}(T.shapeFlag&256||xt&&$s(xt.vnode)&&xt.vnode.shapeFlag&256)&&D.a&&sn(D.a,tt),D.isMounted=!0,T=Y=nt=null}};D.scope.on();const st=D.effect=new N_(et);D.scope.off();const Q=D.update=st.run.bind(st),P=D.job=st.runIfDirty.bind(st);P.i=D,P.id=D.uid,st.scheduler=()=>Uh(P),br(D,!0),Q()},X=(D,T,Y)=>{T.component=D;const nt=D.vnode.props;D.vnode=T,D.next=null,Vy(D,T.props,nt,Y),qy(D,T.children,Y),Wi(),Qd(D),Xi()},z=(D,T,Y,nt,tt,q,ut,et,st=!1)=>{const Q=D&&D.children,P=D?D.shapeFlag:0,b=T.children,{patchFlag:U,shapeFlag:W}=T;if(U>0){if(U&128){pt(Q,b,Y,nt,tt,q,ut,et,st);return}else if(U&256){ht(Q,b,Y,nt,tt,q,ut,et,st);return}}W&8?(P&16&&Dt(Q,tt,q),b!==Q&&c(Y,b)):P&16?W&16?pt(Q,b,Y,nt,tt,q,ut,et,st):Dt(Q,tt,q,!0):(P&8&&c(Y,""),W&16&&A(b,Y,nt,tt,q,ut,et,st))},ht=(D,T,Y,nt,tt,q,ut,et,st)=>{D=D||Vr,T=T||Vr;const Q=D.length,P=T.length,b=Math.min(Q,P);let U;for(U=0;U<b;U++){const W=T[U]=st?Fi(T[U]):Rn(T[U]);g(D[U],W,Y,null,tt,q,ut,et,st)}Q>P?Dt(D,tt,q,!0,!1,b):A(T,Y,nt,tt,q,ut,et,st,b)},pt=(D,T,Y,nt,tt,q,ut,et,st)=>{let Q=0;const P=T.length;let b=D.length-1,U=P-1;for(;Q<=b&&Q<=U;){const W=D[Q],J=T[Q]=st?Fi(T[Q]):Rn(T[Q]);if(ir(W,J))g(W,J,Y,null,tt,q,ut,et,st);else break;Q++}for(;Q<=b&&Q<=U;){const W=D[b],J=T[U]=st?Fi(T[U]):Rn(T[U]);if(ir(W,J))g(W,J,Y,null,tt,q,ut,et,st);else break;b--,U--}if(Q>b){if(Q<=U){const W=U+1,J=W<P?T[W].el:nt;for(;Q<=U;)g(null,T[Q]=st?Fi(T[Q]):Rn(T[Q]),Y,J,tt,q,ut,et,st),Q++}}else if(Q>U)for(;Q<=b;)St(D[Q],tt,q,!0),Q++;else{const W=Q,J=Q,j=new Map;for(Q=J;Q<=U;Q++){const Ct=T[Q]=st?Fi(T[Q]):Rn(T[Q]);Ct.key!=null&&j.set(Ct.key,Q)}let xt,mt=0;const yt=U-J+1;let Rt=!1,lt=0;const bt=new Array(yt);for(Q=0;Q<yt;Q++)bt[Q]=0;for(Q=W;Q<=b;Q++){const Ct=D[Q];if(mt>=yt){St(Ct,tt,q,!0);continue}let vt;if(Ct.key!=null)vt=j.get(Ct.key);else for(xt=J;xt<=U;xt++)if(bt[xt-J]===0&&ir(Ct,T[xt])){vt=xt;break}vt===void 0?St(Ct,tt,q,!0):(bt[vt-J]=Q+1,vt>=lt?lt=vt:Rt=!0,g(Ct,T[vt],Y,null,tt,q,ut,et,st),mt++)}const Bt=Rt?Yy(bt):Vr;for(xt=Bt.length-1,Q=yt-1;Q>=0;Q--){const Ct=J+Q,vt=T[Ct],zt=T[Ct+1],F=Ct+1<P?zt.el||Ag(zt):nt;bt[Q]===0?g(null,vt,Y,F,tt,q,ut,et,st):Rt&&(xt<0||Q!==Bt[xt]?ft(vt,Y,F,2):xt--)}}},ft=(D,T,Y,nt,tt=null)=>{const{el:q,type:ut,transition:et,children:st,shapeFlag:Q}=D;if(Q&6){ft(D.component.subTree,T,Y,nt);return}if(Q&128){D.suspense.move(T,Y,nt);return}if(Q&64){ut.move(D,T,Y,It);return}if(ut===an){i(q,T,Y);for(let b=0;b<st.length;b++)ft(st[b],T,Y,nt);i(D.anchor,T,Y);return}if(ut===Ks){p(D,T,Y);return}if(nt!==2&&Q&1&&et)if(nt===0)et.persisted&&!q[Gc]?i(q,T,Y):(et.beforeEnter(q),i(q,T,Y),sn(()=>et.enter(q),tt));else{const{leave:b,delayLeave:U,afterLeave:W}=et,J=()=>{D.ctx.isUnmounted?r(q):i(q,T,Y)},j=()=>{const xt=q._isLeaving||!!q[Gc];q._isLeaving&&q[Gc](!0),et.persisted&&!xt?J():b(q,()=>{J(),W&&W()})};U?U(q,J,j):j()}else i(q,T,Y)},St=(D,T,Y,nt=!1,tt=!1)=>{const{type:q,props:ut,ref:et,children:st,dynamicChildren:Q,shapeFlag:P,patchFlag:b,dirs:U,cacheIndex:W,memo:J}=D;if((b===-2||Q&&Q.hasOnce)&&(tt=!1),et!=null&&(Wi(),js(et,null,Y,D,!0),Xi()),W!=null&&(!D.ctx||D.ctx===T)&&(T.renderCache[W]=void 0),P&256){T.ctx.deactivate(D);return}const j=P&1&&U,xt=!$s(D);let mt;if(xt&&(mt=ut&&ut.onVnodeBeforeUnmount)&&Gn(mt,T,D),P&6)_t(D.component,Y,nt);else{if(P&128){D.suspense.unmount(Y,nt);return}j&&fi(D,null,T,"beforeUnmount"),P&64?D.type.remove(D,T,Y,It,nt):Q&&!Q.hasOnce&&(q!==an||b>0&&b&64)?Dt(Q,T,Y,!1,!0):(q===an&&b&384||!tt&&P&16)&&Dt(st,T,Y),nt&&Xt(D)}const yt=J!=null&&W==null;(xt&&(mt=ut&&ut.onVnodeUnmounted)||j||yt)&&sn(()=>{mt&&Gn(mt,T,D),j&&fi(D,null,T,"unmounted"),yt&&(D.el=null)},Y)},Xt=D=>{const{type:T,el:Y,anchor:nt,transition:tt}=D;if(T===an){rt(Y,nt);return}if(T===Ks){x(D),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave();return}const q=()=>{r(Y),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave()};if(D.shapeFlag&1&&tt&&!tt.persisted){const{leave:ut,delayLeave:et}=tt,st=()=>ut(Y,q);et?et(D.el,q,st):st()}else q()},rt=(D,T)=>{let Y;for(;D!==T;)Y=d(D),r(D),D=Y;r(T)},_t=(D,T,Y)=>{const{bum:nt,scope:tt,job:q,subTree:ut,um:et,m:st,a:Q}=D;fp(st),fp(Q),nt&&Sl(nt),tt.stop(),q?(q.flags|=8,St(ut,D,T,Y)):D.vnode.el&&ut&&(ut.transition=D.vnode.transition,St(ut,D,T,Y)),et&&sn(et,T),sn(()=>{D.isUnmounted=!0},T)},Dt=(D,T,Y,nt=!1,tt=!1,q=0)=>{for(let ut=q;ut<D.length;ut++)St(D[ut],T,Y,nt,tt)},Mt=D=>{if(D.shapeFlag&6)return Mt(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const T=d(D.anchor||D.el),Y=T&&T[sy];return Y?d(Y):T};let Ut=!1;const Kt=(D,T,Y)=>{let nt;D==null?T._vnode&&(St(T._vnode,null,null,!0),nt=T._vnode.component):g(T._vnode||null,D,T,null,null,null,Y),T._vnode=D,Ut||(Ut=!0,Qd(nt),kl(),Ut=!1)},It={p:g,um:St,m:ft,r:Xt,mt:H,mc:A,pc:z,pbc:S,n:Mt,o:n};let re,ee;return t&&([re,ee]=t(It)),{render:Kt,hydrate:re,createApp:Iy(Kt,re)}}function qc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function br({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Eg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Tg(n,t,e=!1){const i=n.children,r=t.children;if(Vt(i)&&Vt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Fi(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Tg(o,a)),a.type===Yr&&(a.patchFlag===-1&&(a=r[s]=Fi(a)),a.el=o.el),a.type===On&&!a.el&&(a.el=o.el)}}function Yy(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function wg(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wg(t)}function fp(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Ag(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Ag(t.subTree):null}const Rg=n=>n.__isSuspense;let ef=0;const Ky={name:"Suspense",__isSuspense:!0,process(n,t,e,i,r,s,o,a,l,u){if(n==null)Zy(t,e,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!n.suspense.isInFallback&&!s.isHydrating){t.suspense=n.suspense,t.suspense.vnode=t,t.el=n.el;return}Qy(n,t,e,i,r,o,a,l,u)}},hydrate:tS,normalize:eS},Jy=Ky;function sa(n,t){const e=n.props&&n.props[t];Ht(e)&&e()}function Zy(n,t,e,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),d=n.suspense=Cg(n,r,i,t,f,e,s,o,a,l);u(null,d.pendingBranch=n.ssContent,f,null,i,d,s,o),d.deps>0?(sa(n,"onPending"),sa(n,"onFallback"),u(null,n.ssFallback,t,e,i,null,s,o),Ys(d,n.ssFallback)):d.resolve(!1,!0)}function Qy(n,t,e,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=t.suspense=n.suspense;f.vnode=t,t.el=n.el;const d=t.ssContent,h=t.ssFallback,{activeBranch:m,pendingBranch:g,isInFallback:v,isHydrating:_}=f;if(g)f.pendingBranch=d,ir(g,d)?(f.deps++,l(g,d,_?e:f.hiddenContainer,null,r,f,s,o,a),f.deps--,f.deps<=0?f.resolve():v&&!_&&!f.isFallbackMountPending&&(l(m,h,e,i,r,null,s,o,a),Ys(f,h))):(f.pendingId=ef++,_?(f.isHydrating=!1,f.activeBranch=g):u(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),v?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():f.isFallbackMountPending||(l(m,h,e,i,r,null,s,o,a),Ys(f,h))):m&&ir(m,d)?(l(m,d,e,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(m&&ir(m,d))l(m,d,e,i,r,f,s,o,a),Ys(f,d);else if(sa(t,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=ef++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:y,pendingId:p}=f;y>0?setTimeout(()=>{f.pendingId===p&&f.fallback(h)},y):y===0&&f.fallback(h)}}function Cg(n,t,e,i,r,s,o,a,l,u,c=!1){const{p:f,m:d,um:h,n:m,o:{parentNode:g,remove:v}}=u;let _;const y=nS(n);y&&t&&t.pendingBranch&&(_=t.pendingId,t.deps++);const p=n.props?hx(n.props.timeout):void 0,x=s,E={vnode:n,parent:t,parentComponent:e,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:ef++,timeout:typeof p=="number"?p:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(w=!1,R=!1){const{vnode:A,activeBranch:M,pendingBranch:S,pendingId:L,effects:N,parentComponent:O,container:H,isInFallback:$}=E;let B=!1;if(E.isHydrating)E.isHydrating=!1;else if(!w){B=M&&S.transition&&S.transition.mode==="out-in";let ht=!1;B&&(M.transition.afterLeave=()=>{L===E.pendingId&&(d(S,H,s===x&&!ht?m(M):s,0),Ku(N),$&&A.ssFallback&&(A.ssFallback.el=null))}),M&&!E.isFallbackMountPending&&(g(M.el)===H&&(s=m(M),ht=!0),h(M,O,E,!0),!B&&$&&A.ssFallback&&sn(()=>A.ssFallback.el=null,E)),B||d(S,H,s,0)}E.isFallbackMountPending=!1,Ys(E,S),E.pendingBranch=null,E.isInFallback=!1;let X=E.parent,z=!1;for(;X;){if(X.pendingBranch){for(let ht=0;ht<N.length;ht++)X.effects.push(N[ht]);z=!0;break}X=X.parent}!z&&!B&&Ku(N),E.effects=[],y&&t&&t.pendingBranch&&_===t.pendingId&&(_=void 0,t.deps--,t.deps===0&&!R&&t.resolve()),sa(A,"onResolve")},fallback(w){if(!E.pendingBranch)return;const{vnode:R,activeBranch:A,parentComponent:M,container:S,namespace:L}=E;sa(R,"onFallback");const N=m(A),O=()=>{if(E.isFallbackMountPending=!1,!E.isInFallback)return;const $=E.vnode.ssFallback;f(null,$,S,N,M,null,L,a,l),Ys(E,$)},H=w.transition&&w.transition.mode==="out-in";H&&(E.isFallbackMountPending=!0,A.transition.afterLeave=O),E.isInFallback=!0,h(A,M,null,!0),H||O()},move(w,R,A){E.activeBranch&&d(E.activeBranch,w,R,A),E.container=w},next(){return E.activeBranch&&m(E.activeBranch)},registerDep(w,R,A){const M=!!E.pendingBranch;M&&E.deps++;const S=w.vnode.el;w.asyncDep.catch(L=>{go(L,w,0)}).then(L=>{if(w.isUnmounted||E.isUnmounted||E.pendingId!==w.suspenseId)return;if(nf(),S&&!w.scope.active){M&&--E.deps===0&&E.resolve();return}w.asyncResolved=!0;const{vnode:N}=w;rf(w,L),S&&(N.el=S);const O=!S&&w.subTree.el;R(w,N,g(S||w.subTree.el),S?null:m(w.subTree),E,o,A),O&&(N.placeholder=null,v(O)),Ec(w,N.el),M&&--E.deps===0&&E.resolve()})},unmount(w,R){E.isUnmounted=!0,E.activeBranch&&h(E.activeBranch,e,w,R),E.pendingBranch&&h(E.pendingBranch,e,w,R)}};return E}function tS(n,t,e,i,r,s,o,a,l){const u=t.suspense=Cg(t,i,e,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(n,u.pendingBranch=t.ssContent,e,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function eS(n){const{shapeFlag:t,children:e}=n,i=t&32;n.ssContent=hp(i?e.default:e),n.ssFallback=i?hp(e.fallback):Le(On)}function hp(n){let t;if(Ht(n)){const e=io&&n._c;e&&(n._d=!1,ce()),n=n(),e&&(n._d=!0,t=_n,qh())}return Vt(n)&&(n=Fy(n)),n=Rn(n),t&&!n.dynamicChildren&&(n.dynamicChildren=t.filter(e=>e!==n)),n}function Pg(n,t){t&&t.pendingBranch?Vt(n)?t.effects.push(...n):t.effects.push(n):Ku(n)}function Ys(n,t){n.activeBranch=t;const{vnode:e,parentComponent:i}=n;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;e.el=r,i&&i.subTree===e&&(i.vnode.el=r,Ec(i,r))}function nS(n){const t=n.props&&n.props.suspensible;return t!=null&&t!==!1}const an=Symbol.for("v-fgt"),Yr=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),Ks=Symbol.for("v-stc"),Kr=[];let _n=null;function ce(n=!1){Kr.push(_n=n?null:[])}function qh(){Kr.pop(),_n=Kr[Kr.length-1]||null}let io=1;function Wl(n,t=!1){io+=n,n<0&&_n&&t&&(_n.hasOnce=!0)}function Lg(n){return n.dynamicChildren=io>0?_n||Vr:null,qh(),io>0&&_n&&_n.push(n),n}function Ee(n,t,e,i,r,s){return Lg(I(n,t,e,i,r,s,!0))}function Br(n,t,e,i,r){return Lg(Le(n,t,e,i,r,!0))}function oa(n){return n?n.__v_isVNode===!0:!1}function ir(n,t){return n.type===t.type&&n.key===t.key}const Dg=({key:n})=>n??null,bl=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?xe(n)||Ue(n)||Ht(n)?{i:Pn,r:n,k:t,f:!!e}:n:null);function I(n,t=null,e=null,i=0,r=null,s=n===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Dg(t),ref:t&&bl(t),scopeId:tg,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pn};return a?(Xl(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=xe(e)?8:16),io>0&&!o&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const Le=iS;function iS(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===lg)&&(n=On),oa(n)){const a=is(n,t,!0);return e&&Xl(a,e),io>0&&!s&&_n&&(a.shapeFlag&6?_n[_n.indexOf(n)]=a:_n.push(a)),a.patchFlag=-2,a}if(dS(n)&&(n=n.__vccOpts),t){t=Ig(t);let{class:a,style:l}=t;a&&!xe(a)&&(t.class=ni(a)),fe(l)&&(gc(l)&&!Vt(l)&&(l=$e({},l)),t.style=ns(l))}const o=xe(n)?1:Rg(n)?128:vc(n)?64:fe(n)?4:Ht(n)?2:0;return I(n,t,e,i,r,o,s,!0)}function Ig(n){return n?gc(n)||gg(n)?$e({},n):n:null}function is(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?rS(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Dg(u),ref:t&&t.ref?e&&s?Vt(s)?s.concat(bl(t)):[s,bl(t)]:bl(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==an?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&is(n.ssContent),ssFallback:n.ssFallback&&is(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&kh(c,l.clone(c)),c}function $t(n=" ",t=0){return Le(Yr,null,n,t)}function Ao(n,t){const e=Le(Ks,null,n);return e.staticCount=t,e}function Ur(n="",t=!1){return t?(ce(),Br(On,null,n)):Le(On,null,n)}function Rn(n){return n==null||typeof n=="boolean"?Le(On):Vt(n)?Le(an,null,n.slice()):oa(n)?Fi(n):Le(Yr,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:is(n)}function Xl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Vt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Xl(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!gg(t)?t._ctx=Pn:r===3&&Pn&&(Pn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Ht(t)){if(i&65){Xl(n,{default:t});return}t={default:t,_ctx:Pn},e=32}else t=String(t),i&64?(e=16,t=[$t(t)]):e=8;n.children=t,n.shapeFlag|=e}function rS(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=ni([t.class,i.class]));else if(r==="style")t.style=ns([t.style,i.style]);else if(wa(r)){const s=t[r],o=i[r];o&&s!==o&&!(Vt(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!cc(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function Gn(n,t,e,i=null){ai(n,t,7,[e,i])}const sS=hg();let oS=0;function aS(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||sS,s={uid:oS++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new U_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xg(i,r),emitsOptions:dg(i,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:i.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ny.bind(null,s),n.ce&&n.ce(s),s}let qe=null;const vo=()=>qe||Pn;let ql,aa;{const n=dc(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ql=t("__VUE_INSTANCE_SETTERS__",e=>qe=e),aa=t("__VUE_SSR_SETTERS__",e=>ro=e)}const Ca=n=>{const t=qe;return ql(n),n.scope.on(),()=>{n.scope.off(),ql(t)}},nf=()=>{qe&&qe.scope.off(),ql(null)};function Ug(n){return n.vnode.shapeFlag&4}let ro=!1;function lS(n,t=!1,e=!1){t&&aa(t);const{props:i,children:r}=n.vnode,s=Ug(n);Hy(n,i,s,t),Xy(n,r,e||t);const o=s?cS(n,t):void 0;return t&&aa(!1),o}function cS(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,wy);const{setup:i}=e;if(i){Wi();const r=n.setupContext=i.length>1?fS(n):null,s=Ca(n),o=Ra(i,n,0,[n.props,r]),a=A_(o);if(Xi(),s(),(a||n.sp)&&!$s(n)&&Hh(n),a){if(o.then(nf,nf),t)return o.then(l=>{aa(!0);try{rf(n,l,t)}finally{aa(!1)}}).catch(l=>{go(l,n,0)});n.asyncDep=o}else rf(n,o)}else Ng(n)}function rf(n,t,e){Ht(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fe(t)&&(n.setupState=K_(t)),Ng(n)}function Ng(n,t,e){const i=n.type;n.render||(n.render=i.render||Si);{const r=Ca(n);Wi();try{Ay(n)}finally{Xi(),r()}}}const uS={get(n,t){return Je(n,"get",""),n[t]}};function fS(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,uS),slots:n.slots,emit:n.emit,expose:t}}function Tc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(K_(Hx(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in qo)return qo[e](n)},has(t,e){return e in t||e in qo}})):n.proxy}function hS(n,t=!0){return Ht(n)?n.displayName||n.name:n.name||t&&n.__name}function dS(n){return Ht(n)&&"__vccOpts"in n}const Og=(n,t)=>Kx(n,t,ro);function Fg(n,t,e){try{Wl(-1);const i=arguments.length;return i===2?fe(t)&&!Vt(t)?oa(t)?Le(n,null,[t]):Le(n,t):Le(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&oa(e)&&(e=[e]),Le(n,t,e))}finally{Wl(1)}}const pS="3.5.43";let sf;const dp=typeof window<"u"&&window.trustedTypes;if(dp)try{sf=dp.createPolicy("vue",{createHTML:n=>n})}catch{}const Bg=sf?n=>sf.createHTML(n):n=>n,mS="http://www.w3.org/2000/svg",_S="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,pp=Ni&&Ni.createElement("template"),gS={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Ni.createElementNS(mS,n):t==="mathml"?Ni.createElementNS(_S,n):e?Ni.createElement(n,{is:e}):Ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ni.createTextNode(n),createComment:n=>Ni.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ni.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{pp.innerHTML=Bg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=pp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},vS=Symbol("_vtc");function xS(n,t,e){const i=n[vS];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const jl=Symbol("_vod"),kg=Symbol("_vsh"),Yi={name:"show",beforeMount(n,{value:t},{transition:e}){n[jl]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Ro(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Ro(n,!0),i.enter(n)):i.leave(n,()=>{Ro(n,!1)}):Ro(n,t))},beforeUnmount(n,{value:t}){Ro(n,t)}};function Ro(n,t){n.style.display=t?n[jl]:"none",n[kg]=!t}const yS=Symbol(""),SS=/(?:^|;)\s*display\s*:/;function MS(n,t,e){const i=n.style,r=xe(e);let s=!1;if(e&&!r){if(t)if(xe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Bo(i,a,"")}else for(const o in t)e[o]==null&&Bo(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?ES(n,o,!xe(t)&&t?t[o]:void 0,a)||Bo(i,o,a):Bo(i,o,"")}}else if(r){if(t!==e){const o=i[yS];o&&(e+=";"+o),i.cssText=e,s=SS.test(e)}}else t&&n.removeAttribute("style");jl in n&&(n[jl]=s?i.display:"",n[kg]&&(i.display="none"))}const Ha=/\s*!important$/;function Bo(n,t,e){if(Vt(e))e.forEach(i=>Bo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))Ha.test(e)?n.setProperty(t,e.replace(Ha,""),"important"):n.setProperty(t,e);else{const i=bS(n,t);Ha.test(e)?n.setProperty(ls(i),e.replace(Ha,""),"important"):n[i]=e}}const mp=["Webkit","Moz","ms"],jc={};function bS(n,t){const e=jc[t];if(e)return e;let i=cn(t);if(i!=="filter"&&i in n)return jc[t]=i;i=hc(i);for(let r=0;r<mp.length;r++){const s=mp[r]+i;if(s in n)return jc[t]=s}return t}function ES(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&xe(i)&&e===i}const _p="http://www.w3.org/1999/xlink";function gp(n,t,e,i,r,s=xx(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(_p,t.slice(6,t.length)):n.setAttributeNS(_p,t,e):e==null||s&&!L_(e)?n.removeAttribute(t):n.setAttribute(t,s?"":Kn(e)?String(e):e)}function vp(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Bg(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=L_(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Os(n,t,e,i){n.addEventListener(t,e,i)}function TS(n,t,e,i){n.removeEventListener(t,e,i)}const xp=Symbol("_vei");function wS(n,t,e,i,r=null){const s=n[xp]||(n[xp]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=CS(t);if(i){const u=s[t]=DS(i,r);Os(n,a,u,l)}else o&&(TS(n,a,o,l),s[t]=void 0)}}const AS=/(Once|Passive|Capture)$/,RS=/^on:?(?:Once|Passive|Capture)$/;function CS(n){let t,e;for(;(e=n.match(AS))&&!RS.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ls(n.slice(2)),t]}let $c=0;const PS=Promise.resolve(),LS=()=>$c||(PS.then(()=>$c=0),$c=Date.now());function DS(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const r=e.value;if(Vt(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&ai(u,t,5,a)}}else ai(r,t,5,[i])};return e.value=n,e.attached=LS(),e}const yp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,IS=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?xS(n,i,o):t==="style"?MS(n,e,i):wa(t)?cc(t)||wS(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):US(n,t,i,o))?(vp(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gp(n,t,i,o,s,t!=="value")):n._isVueCE&&(NS(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!xe(i)))?vp(n,cn(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),gp(n,t,i,o))};function US(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&yp(t)&&Ht(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yp(t)&&xe(e)?!1:t in n}function NS(n,t){const e=n._def.props;if(!e)return!1;const i=cn(t);return Array.isArray(e)?e.some(r=>cn(r)===i):Object.keys(e).some(r=>cn(r)===i)}const Sp=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Vt(t)?e=>Sl(t,e):t};function OS(n){n.target.composing=!0}function Mp(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Va=Symbol("_assign"),Ga=Symbol("_initialValue");function Yc(n,t,e){return t&&(n=n.trim()),e&&(n=wh(n)),n}const FS={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n.parentNode&&(n.type==="text"?n[Ga]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Ga]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Va]=Sp(r);const s=i||r.props&&r.props.type==="number";Os(n,t?"change":"input",o=>{o.target.composing||n[Va](Yc(n.value,e,s))}),(e||s)&&Os(n,"change",()=>{n.value=Yc(n.value,e,s)}),t||(Os(n,"compositionstart",OS),Os(n,"compositionend",Mp),Os(n,"change",Mp))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const r=t??"",s=n[Ga];delete n[Ga],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Va](Yc(n.value,e,i)):n.value=r},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Va]=Sp(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?wh(n.value):n.value,l=t??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l)}},BS=["ctrl","shift","alt","meta"],kS={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>BS.some(e=>n[`${e}Key`]&&!t.includes(e))},zS=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((r,...s)=>{for(let o=0;o<t.length;o++){const a=kS[t[o]];if(a&&a(r,t))return}return n(r,...s)}))},zg=$e({patchProp:IS},gS);let jo,bp=!1;function HS(){return jo||(jo=jy(zg))}function VS(){return jo=bp?jo:$y(zg),bp=!0,jo}const GS=((...n)=>{const t=HS().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Vg(i);if(!r)return;const s=t._component;!Ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,Hg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t}),WS=((...n)=>{const t=VS().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Vg(i);if(r)return e(r,!0,Hg(r))},t});function Hg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Vg(n){return xe(n)?document.querySelector(n):n}const XS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,qS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,jS=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function $S(n,t){if(n==="__proto__"||n==="constructor"&&t&&typeof t=="object"&&"prototype"in t){YS(n);return}return t}function YS(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function $l(n,t={}){if(typeof n!="string")return n;if(n[0]==='"'&&n[n.length-1]==='"'&&n.indexOf("\\")===-1)return n.slice(1,-1);const e=n.trim();if(e.length<=9)switch(e.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!jS.test(n)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(XS.test(n)||qS.test(n)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,$S)}return JSON.parse(n)}catch(i){if(t.strict)throw i;return n}}const Gg=/#/g,Wg=/&/g,KS=/\//g,JS=/=/g,ZS=/\?/g,wc=/\+/g,QS=/%5e/gi,tM=/%60/gi,eM=/%7c/gi,nM=/%20/gi,iM=/%2f/gi,rM=/%252f/gi;function Xg(n){return encodeURI(""+n).replace(eM,"|")}function of(n){return Xg(typeof n=="string"?n:JSON.stringify(n)).replace(wc,"%2B").replace(nM,"+").replace(Gg,"%23").replace(Wg,"%26").replace(tM,"`").replace(QS,"^").replace(KS,"%2F")}function Kc(n){return of(n).replace(JS,"%3D")}function sM(n){return Xg(n).replace(Gg,"%23").replace(ZS,"%3F").replace(rM,"%2F").replace(Wg,"%26").replace(wc,"%2B")}function la(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function oM(n){return la(n.replace(iM,"%252F"))}function aM(n){return la(n.replace(wc," "))}function lM(n){return la(n.replace(wc," "))}function jh(n=""){const t=Object.create(null);n[0]==="?"&&(n=n.slice(1));for(const e of n.split("&")){const i=e.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=aM(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=lM(i[2]||"");t[r]===void 0?t[r]=s:Array.isArray(t[r])?t[r].push(s):t[r]=[t[r],s]}return t}function cM(n,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(e=>`${Kc(n)}=${of(e)}`).join("&"):`${Kc(n)}=${of(t)}`:Kc(n)}function qg(n){return Object.keys(n).filter(t=>n[t]!==void 0).map(t=>cM(t,n[t])).filter(Boolean).join("&")}const uM=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,fM=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,hM=/^([/\\]\s*){2,}[^/\\]/,dM=/^[\s\0]*(blob|data|javascript|vbscript):$/i,pM=/\/$|\/\?|\/#/,mM=/^\.?\//;function xo(n,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?uM.test(n):fM.test(n)||(t.acceptRelative?hM.test(n):!1)}function af(n){return!!n&&dM.test(n)}function lf(n="",t){return t?pM.test(n):n.endsWith("/")}function jg(n="",t){if(!t)return(lf(n)?n.slice(0,-1):n)||"/";if(!lf(n,!0))return n||"/";let e=n,i="";const r=n.indexOf("#");r!==-1&&(e=n.slice(0,r),i=n.slice(r));const[s,...o]=e.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function cf(n="",t){if(!t)return n.endsWith("/")?n:n+"/";if(lf(n,!0))return n||"/";let e=n,i="";const r=n.indexOf("#");if(r!==-1&&(e=n.slice(0,r),i=n.slice(r),!e))return i;const[s,...o]=e.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function _M(n=""){return n.startsWith("/")}function Ep(n=""){return _M(n)?n:"/"+n}function gM(n,t){if(Yg(t)||xo(n))return n;const e=jg(t);if(n.startsWith(e)){const i=n[e.length];if(!i||i==="/"||i==="?")return n}return Ac(e,n)}function vM(n,t){if(Yg(t))return n;const e=jg(t);if(!n.startsWith(e))return n;const i=n[e.length];return i&&i!=="/"&&i!=="?"?n:"/"+n.slice(e.length).replace(/^\/+/,"")}function $g(n,t){const e=Rc(n),i={...jh(e.search),...t};return e.search=qg(i),$h(e)}function Yg(n){return!n||n==="/"}function xM(n){return n&&n!=="/"}function Ac(n,...t){let e=n||"";for(const i of t.filter(r=>xM(r)))if(e){const r=i.replace(mM,"");e=cf(e)+r}else e=i;return e}function Kg(...n){const t=/\/(?!\/)/,e=n.filter(Boolean),i=[];let r=0;for(const o of e)if(!(!o||o==="/")){for(const[a,l]of o.split(t).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&xo(i[0]))continue;i.pop(),r--;continue}if(a===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),r++}}let s=i.join("/");return r>=0?e[0]?.startsWith("/")&&!s.startsWith("/")?s="/"+s:e[0]?.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,e[e.length-1]?.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function yM(n,t,e={}){return e.trailingSlash||(n=cf(n),t=cf(t)),e.leadingSlash||(n=Ep(n),t=Ep(t)),e.encoding||(n=la(n),t=la(t)),n===t}function Tp(n){return $h({...Rc(n),hash:""})}const Jg=Symbol.for("ufo:protocolRelative");function Rc(n="",t){const e=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(e){const[,f,d=""]=e;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!xo(n,{acceptRelative:!0}))return wp(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=wp(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[Jg]:!i}}function wp(n=""){const[t="",e="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:e,hash:i}}function $h(n){const t=n.pathname||"",e=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[Jg]?(n.protocol||"")+"//":"")+r+s+t+e+i}class SM extends Error{constructor(t,e){super(t,e),this.name="FetchError",e?.cause&&!this.cause&&(this.cause=e.cause)}}function MM(n){const t=n.error?.message||n.error?.toString()||"",e=n.request?.method||n.options?.method||"GET",i=n.request?.url||String(n.request)||"/",r=`[${e}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",o=`${r}: ${s}${t?` ${t}`:""}`,a=new SM(o,n.error?{cause:n.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return n[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return n.response&&n.response[u]}});return a}const bM=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Ap(n="GET"){return bM.has(n.toUpperCase())}function EM(n){if(n===void 0)return!1;const t=typeof n;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(n)?!0:n.buffer||n instanceof FormData||n instanceof URLSearchParams?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const TM=new Set(["image/svg","application/xml","application/xhtml","application/html"]),wM=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function AM(n=""){if(!n)return"json";const t=n.split(";").shift()||"";return wM.test(t)?"json":t==="text/event-stream"?"stream":TM.has(t)||t.startsWith("text/")?"text":"blob"}function RM(n,t,e,i){const r=CM(t?.headers??n?.headers,e?.headers,i);let s;return(e?.query||e?.params||t?.params||t?.query)&&(s={...e?.params,...e?.query,...t?.params,...t?.query}),{...e,...t,query:s,params:s,headers:r}}function CM(n,t,e){if(!t)return new e(n);const i=new e(t);if(n)for(const[r,s]of Symbol.iterator in n||Array.isArray(n)?n:new e(n))i.set(r,s);return i}async function Wa(n,t){if(t)if(Array.isArray(t))for(const e of t)await e(n);else await t(n)}const PM=new Set([408,409,425,429,500,502,503,504]),LM=new Set([101,204,205,304]);function Zg(n={}){const{fetch:t=globalThis.fetch,Headers:e=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=Ap(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):PM.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(h=>setTimeout(h,d)),s(a.request,{...a.options,retry:c-1})}}const u=MM(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:RM(l,u,n.defaults,e),response:void 0,error:void 0};if(c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&(await Wa(c,c.options.onRequest),c.options.headers instanceof e||(c.options.headers=new e(c.options.headers||{}))),typeof c.request=="string"&&(c.options.baseURL&&(c.request=gM(c.request,c.options.baseURL)),c.options.query&&(c.request=$g(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&Ap(c.options.method))if(EM(c.options.body)){const h=c.options.headers.get("content-type");typeof c.options.body!="string"&&(c.options.body=h==="application/x-www-form-urlencoded"?new URLSearchParams(c.options.body).toString():JSON.stringify(c.options.body)),h||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")}else("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half"));let f;if(!c.options.signal&&c.options.timeout){const h=new i;f=setTimeout(()=>{const m=new Error("[TimeoutError]: The operation was aborted due to timeout");m.name="TimeoutError",m.code=23,h.abort(m)},c.options.timeout),c.options.signal=h.signal}try{c.response=await t(c.request,c.options)}catch(h){return c.error=h,c.options.onRequestError&&await Wa(c,c.options.onRequestError),await r(c)}finally{f&&clearTimeout(f)}if((c.response.body||c.response._bodyInit)&&!LM.has(c.response.status)&&c.options.method!=="HEAD"){const h=(c.options.parseResponse?"json":c.options.responseType)||AM(c.response.headers.get("content-type")||"");switch(h){case"json":{const m=await c.response.text(),g=c.options.parseResponse||$l;c.response._data=g(m);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[h]()}}return c.options.onResponse&&await Wa(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await Wa(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>t(...a),o.create=(a={},l={})=>Zg({...n,...l,defaults:{...n.defaults,...l.defaults,...a}}),o}const Yl=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),DM=Yl.fetch?(...n)=>Yl.fetch(...n):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),IM=Yl.Headers,UM=Yl.AbortController,NM=Zg({fetch:DM,Headers:IM,AbortController:UM}),OM=NM,FM=()=>window?.__NUXT__?.config||{},Yh=()=>FM().app,BM=()=>Yh().baseURL,kM=()=>Yh().buildAssetsDir,Kh=(...n)=>Kg(Qg(),kM(),...n),Qg=(...n)=>{const t=Yh(),e=t.cdnURL||t.baseURL;return n.length?Kg(e,...n):e};globalThis.__buildAssetsURL=Kh,globalThis.__publicAssetsURL=Qg;globalThis.$fetch||(globalThis.$fetch=OM.create({baseURL:BM()}));"global"in globalThis||(globalThis.global=globalThis);function uf(n,t={},e){for(const i in n){const r=n[i],s=e?`${e}:${i}`:i;typeof r=="object"&&r!==null?uf(r,t,s):typeof r=="function"&&(t[s]=r)}return t}const zM={run:n=>n()},HM=()=>zM,t0=typeof console.createTask<"u"?console.createTask:HM;function VM(n,t){const e=t.shift(),i=t0(e);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...t))),Promise.resolve())}function GM(n,t){const e=t.shift(),i=t0(e);return Promise.all(n.map(r=>i.run(()=>r(...t))))}function Jc(n,t){for(const e of[...n])e(t)}let WM=class{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,i={}){if(!t||typeof e!="function")return()=>{};const r=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,e(...s));return i=this.hook(t,r),i}removeHook(t,e){if(this._hooks[t]){const i=this._hooks[t].indexOf(e);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const i=this._hooks[t]||[];delete this._hooks[t];for(const r of i)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=uf(t),i=Object.keys(e).map(r=>this.hook(r,e[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(t){const e=uf(t);for(const i in e)this.removeHook(i,e[i])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...e){return e.unshift(t),this.callHookWith(VM,t,...e)}callHookParallel(t,...e){return e.unshift(t),this.callHookWith(GM,t,...e)}callHookWith(t,e,...i){const r=this._before||this._after?{name:e,args:i,context:{}}:void 0;this._before&&Jc(this._before,r);const s=t(e in this._hooks?[...this._hooks[e]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&Jc(this._after,r)}):(this._after&&r&&Jc(this._after,r),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}};function XM(){return new WM}function qM(n={}){let t,e=!1;const i=o=>{if(t&&t!==o)throw new Error("Context conflict")};let r;if(n.asyncContext){const o=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),t=o,e=!0},unset:()=>{t=void 0,e=!1},call:(o,a)=>{i(o),t=o;try{return r?r.run(o,a):a()}finally{e||(t=void 0)}},async callAsync(o,a){t=o;const l=()=>{t=o},u=()=>t===o?l:void 0;ff.add(u);try{const c=r?r.run(o,a):a();return e||(t=void 0),await c}finally{ff.delete(u)}}}}function jM(n={}){const t={};return{get(e,i={}){return t[e]||(t[e]=qM({...n,...i})),t[e]}}}const Kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Rp="__unctx__",$M=Kl[Rp]||(Kl[Rp]=jM()),YM=(n,t={})=>$M.get(n,t),Cp="__unctx_async_handlers__",ff=Kl[Cp]||(Kl[Cp]=new Set);function KM(n){const t=[];for(const r of ff){const s=r();s&&t.push(s)}const e=()=>{for(const r of t)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw e(),r})),[i,e]}const JM=!0,ZD={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},ZM=null,QM="#__nuxt",e0="nuxt-app",Pp=36e5,tb="vite:preloadError";function n0(n=e0){return YM(n,{asyncContext:!1})}const eb="__nuxt_plugin";function nb(n){let t=0;const e={_id:n.id||e0||"nuxt-app",_scope:Mx(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.21.11"},get vue(){return e.vueApp.version}},payload:ks({...n.ssrContext?.payload||{},data:ks({}),state:dr({}),once:new Set,_errors:ks({})}),static:{data:{}},runWithContext(r){return e._scope.active&&!mc()?e._scope.run(()=>Lp(e,r)):Lp(e,r)},isHydrating:!0,deferHydration(){if(!e.isHydrating)return()=>{};t++;let r=!1;return()=>{if(!r&&(r=!0,t--,t===0))return e.isHydrating=!1,e.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:ks({}),_payloadRevivers:{},...n};{const r=window.__NUXT__;if(r)for(const s in r)switch(s){case"data":case"state":case"_errors":Object.assign(e.payload[s],r[s]);break;default:e.payload[s]=r[s]}}e.hooks=XM(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(r,s)=>{const o="$"+r;Xa(e,o,s),Xa(e.vueApp.config.globalProperties,o,s)},Xa(e.vueApp,"$nuxt",e),Xa(e.vueApp.config.globalProperties,"$nuxt",e);{window.addEventListener(tb,s=>{e.callHook("app:chunkError",{error:s.payload}),s.payload?.message?.includes("Unable to preload CSS")&&s.preventDefault()}),window.useNuxtApp||=fn;const r=e.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});e.hook("app:mounted",r)}const i=e.payload.config;return e.provide("config",i),e}function ib(n,t){t.hooks&&n.hooks.addHooks(t.hooks)}async function rb(n,t){if(typeof t=="function"){const{provide:e}=await n.runWithContext(()=>t(n))||{};if(e&&typeof e=="object")for(const i in e)n.provide(i,e[i])}}async function sb(n,t){const e=new Set,i=[],r=[];let s,o=0;async function a(l){const u=l.dependsOn?.filter(c=>t.some(f=>f._name===c)&&!e.has(c))??[];if(u.length>0)i.push([new Set(u),l]);else{const c=rb(n,l).then(async()=>{l._name&&(e.add(l._name),await Promise.all(i.map(async([f,d])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(d)))})))}).catch(f=>{if(!l.parallel&&!n.payload.error)throw f;s||=f});l.parallel?r.push(c):await c}}for(const l of t)ib(n,l);for(const l of t)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s)throw n.payload.error||s}function xr(n){if(typeof n=="function")return n;const t=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[eb]:!0,_name:t})}function Lp(n,t,e){const i=()=>t();return n0(n._id).set(n),n.vueApp.runWithContext(i)}function ob(n){let t;return Fh()&&(t=vo()?.appContext.app.$nuxt),t||=n0(n).tryUse(),t||null}function fn(n){const t=ob(n);if(!t)throw new Error("[nuxt] instance unavailable");return t}function ca(n){return fn().$config}function Xa(n,t,e){Object.defineProperty(n,t,{get:()=>e})}function Zc(n){if(n===null||typeof n!="object")return!1;const t=Object.getPrototypeOf(n);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function hf(n,t,e=".",i){if(!Zc(t))return hf(n,{},e,i);const r={...t};for(const s of Object.keys(n)){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,e)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Zc(o)&&Zc(r[s])?r[s]=hf(o,r[s],(e?`${e}.`:"")+s.toString(),i):r[s]=o))}return r}function ab(n){return(...t)=>t.reduce((e,i)=>hf(e,i,"",n),{})}const Dp=ab();function lb(n,t){try{return t in n}catch{return!1}}class Ip extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(t,e={}){super(t,e),e.cause&&!this.cause&&(this.cause=e.cause)}toJSON(){const t={message:this.message,statusCode:df(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=i0(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}function cb(n){if(typeof n=="string")return new Ip(n);if(ub(n))return n;const t=new Ip(n.message??n.statusMessage??"",{cause:n.cause||n});if(lb(n,"stack"))try{Object.defineProperty(t,"stack",{get(){return n.stack}})}catch{try{t.stack=n.stack}catch{}}if(n.data&&(t.data=n.data),n.statusCode?t.statusCode=df(n.statusCode,t.statusCode):n.status&&(t.statusCode=df(n.status,t.statusCode)),n.statusMessage?t.statusMessage=n.statusMessage:n.statusText&&(t.statusMessage=n.statusText),t.statusMessage){const e=t.statusMessage;i0(t.statusMessage)!==e&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(t.fatal=n.fatal),n.unhandled!==void 0&&(t.unhandled=n.unhandled),t}function ub(n){return n?.constructor?.__h3_error__===!0}const fb=/[^\u0009\u0020-\u007E]/g;function i0(n=""){return n.replace(fb,"")}function df(n,t=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?t:n}const r0=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const rs=()=>fn()?.$router;function hb(n){const t=n.scope;let e=mc();for(;e;){if(e===t)return!0;e=e.parent}return!1}const Jh=()=>{if(Fh()){const n=vo();if(!n||hb(n))return qs(r0,fn()._route)}return fn()._route};const db=()=>{try{if(fn()._processingMiddleware)return!0}catch{return!1}return!1},pb=(n,t)=>{n||="/";const e=typeof n=="string"?n:"path"in n?mb(n):rs().resolve(n).href;if(t?.open){const{protocol:u}=new URL(e,window.location.href);if(u&&af(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`);const{target:c="_blank",windowFeatures:f={}}=t.open,d=[];for(const[h,m]of Object.entries(f))m!==void 0&&d.push(`${h.toLowerCase()}=${m}`);return open(e,c,d.join(", ")),Promise.resolve()}const i=xo(e,{acceptRelative:!0}),r=t?.external||i;if(r){if(!t?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:u}=new URL(e,window.location.href);if(u&&af(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`)}const s=db();if(!r&&s){if(t?.replace){if(typeof n=="string"){const{pathname:u,search:c,hash:f}=Rc(n);return{path:u,...c&&{query:jh(c)},...f&&{hash:f},replace:!0}}return{...n,replace:!0}}return n}const o=rs(),a=fn();if(r)return a._scope.stop(),t?.replace?location.replace(e):location.href=e,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve();const l=typeof n=="string"?_b(n):n;return t?.replace?o.replace(l):o.push(l)};function mb(n){return $g(n.path||"",n.query||{})+(n.hash||"")}function _b(n){const t=Rc(n);return sM(oM(t.pathname))+t.search+t.hash}const s0="__nuxt_error",Zh=()=>jx(fn().payload,"error"),gb=n=>{const t=Qh(n);try{const e=Zh();fn().hooks.callHook("app:error",t),e.value||=t}catch{throw t}return t},vb=async(n={})=>{const t=fn(),e=Zh();t.callHook("app:error:cleared",n),n.redirect&&await rs().replace(n.redirect),e.value=ZM},xb=n=>!!n&&typeof n=="object"&&s0 in n,Qh=n=>{typeof n!="string"&&n.statusText&&(n.message??=n.statusText);const t=cb(n);return Object.defineProperty(t,s0,{value:!0,configurable:!1,writable:!1}),Object.defineProperty(t,"status",{get:()=>t.statusCode,configurable:!0}),Object.defineProperty(t,"statusText",{get:()=>t.statusMessage,configurable:!0}),t},yb=-1,Sb=-2,Mb=-3,bb=-4,Eb=-5,Tb=-6,wb=-7,o0=2**32-1,pf=o0-1;function Ab(n){return!(!Number.isInteger(n)||n<0||n>pf)}function Rb(n){return!(!Number.isInteger(n)||n<0||n>o0)}function Cb(n){return Uint8Array.fromBase64(n).buffer}function Pb(n){return Uint8Array.from(Buffer.from(n,"base64")).buffer}function Lb(n){const t=atob(n),e=t.length,i=new Uint8Array(e);for(let r=0;r<e;r++)i[r]=t.charCodeAt(r);return i.buffer}const Db=typeof Uint8Array.fromBase64=="function",Ib=typeof process=="object"&&process.versions?.node!==void 0,Ub=Db?Cb:Ib?Pb:Lb;function Nb(n,t){return n}const Ob=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,Up=typeof SharedArrayBuffer>"u"?void 0:Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype,"byteLength").get,Fb={fromPrimitive:n=>n,fromISOString:n=>new Date(n),fromStringValue:(n,t)=>n==="URL"?new URL(t):n==="URLSearchParams"?new URLSearchParams(t):Temporal[n.slice(9)].from(t),fromArrayBuffer:n=>n,fromRegExpInfo:(n,t)=>new RegExp(n,t),fromViewInfo:(n,t,e,i)=>{try{Ob.call(t)}catch(s){if(!Up)throw s;Up.call(t)}const r=globalThis[n];return e!==void 0?new r(t,e,i):new r(t)},box:n=>Object(n),createArray:n=>new Array(n),createSparseArray:n=>{const t=[];return t[pf]=void 0,delete t[pf],t.length=n,t},createObject:()=>({}),createNullPrototypeObject:()=>Object.create(null),createSet:()=>new Set,createMap:()=>new Map,set:(n,t,e)=>{n[t]=e},addValue:(n,t)=>{n.add(t)},addEntry:(n,t,e)=>{n.set(t,e)}},Bb=Object.freeze(Fb);function kb(n,t,e){return zb(JSON.parse(n),t)}function zb(n,t,e){const i=Nb(Bb);if(typeof n=="number")return a(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const r=n,s=Array(r.length);let o=null;function a(l,u=!1){if(l===yb)return i.fromPrimitive(void 0);if(l===Mb)return i.fromPrimitive(NaN);if(l===bb)return i.fromPrimitive(1/0);if(l===Eb)return i.fromPrimitive(-1/0);if(l===Tb)return i.fromPrimitive(-0);if(u||typeof l!="number")throw new Error("Invalid input");if(l in s)return s[l];if(l>=r.length)throw new Error("Invalid input");const c=r[l];if(!c||typeof c!="object")s[l]=i.fromPrimitive(c);else if(Array.isArray(c))if(typeof c[0]=="string"){const f=c[0],d=t&&Object.hasOwn(t,f)?t[f]:void 0;if(d){let h=c[1];if(typeof h!="number"&&(h=r.push(c[1])-1),Object.hasOwn(s,h))return s[l]=d(s[h]);if(o??=new Set,o.has(h))throw new Error("Invalid circular reference");return o.add(h),s[l]=d(a(h)),o.delete(h),s[l]}switch(f){case"Date":s[l]=i.fromISOString(c[1]);break;case"Set":const h=i.createSet();s[l]=h;for(let v=1;v<c.length;v+=1)i.addValue(h,a(c[v]));break;case"Map":const m=i.createMap();s[l]=m;for(let v=1;v<c.length;v+=2)i.addEntry(m,a(c[v]),a(c[v+1]));break;case"RegExp":s[l]=i.fromRegExpInfo(c[1],c[2]);break;case"Object":{const v=c[1];if(typeof r[v]=="object"&&r[v][0]!=="BigInt")throw new Error("Invalid input");s[l]=i.box(a(v));break}case"BigInt":s[l]=i.fromPrimitive(BigInt(c[1]));break;case"null":const g=i.createNullPrototypeObject();s[l]=g;for(let v=1;v<c.length;v+=2){const _=c[v];if(typeof _!="string")throw new Error("Cannot parse an object with a non-string key");if(_==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");i.set(g,_,a(c[v+1]))}break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Float16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":case"DataView":{if(r[c[1]][0]!=="ArrayBuffer")throw new Error("Invalid data");const v=a(c[1]);s[l]=i.fromViewInfo(f,v,c[2],c[3]);break}case"ArrayBuffer":{const v=c[1];if(typeof v!="string")throw new Error("Invalid ArrayBuffer encoding");s[l]=i.fromArrayBuffer(Ub(v));break}case"URL":case"URLSearchParams":case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{s[l]=i.fromStringValue(f,c[1]);break}default:throw new Error(`Unknown type ${f}`)}}else if(c[0]===wb){const f=c[1];if(!Rb(f))throw new Error("Invalid input");const d=i.createSparseArray(f);s[l]=d;for(let h=2;h<c.length;h+=2){const m=c[h];if(!Ab(m)||m>=f)throw new Error("Invalid input");i.set(d,m,a(c[h+1]))}}else{const f=i.createArray(c.length);s[l]=f;for(let d=0;d<c.length;d+=1){const h=c[d];h!==Sb&&i.set(f,d,a(h))}}else{const f=i.createObject();s[l]=f;for(const d of Object.keys(c)){if(d==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");i.set(f,d,a(c[d]))}}return s[l]}return a(0)}const Hb=new Set(["link","style","script","noscript"]),Vb=new Set(["title","titleTemplate","script","style","noscript"]),mf=new Set(["base","meta","link","style","script","noscript"]),Gb=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Wb=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Np=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Xb=new Set(["templateParams","htmlAttrs","bodyAttrs"]),qb=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Qc=n=>typeof n=="number"?Number.isFinite(n):n;function a0(n){return n==="__proto__"||n==="constructor"||n==="prototype"}const _f=(n,t)=>n._w===t._w?n._p-t._p:n._w-t._w,Op={base:-10,title:10},jb={critical:-8,high:-1,low:2},Fp={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},$b=/@import/,Co=n=>n===""||n===!0;function Yb(n,t){if(typeof t.tagPriority=="number")return t.tagPriority;let e=100;const i=jb[t.tagPriority]||0,r=n.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Fp;if(t.tag in Op)e=Op[t.tag];else if(t.tag==="meta"){const s=t.props["http-equiv"]==="content-security-policy"?"content-security-policy":t.props.charset?"charset":t.props.name==="viewport"?"viewport":null;s&&(e=Fp.meta[s])}else if(t.tag==="link"&&t.props.rel)e=r.link[t.props.rel];else if(t.tag==="script"){const s=String(t.props.type);Co(t.props.async)?e=r.script.async:t.props.src&&!Co(t.props.defer)&&!Co(t.props.async)&&s!=="module"&&!s.endsWith("json")||t.innerHTML&&!s.endsWith("json")?e=r.script.sync:(Co(t.props.defer)&&t.props.src&&!Co(t.props.async)||s==="module")&&(e=r.script.defer)}else t.tag==="style"&&(e=t.innerHTML&&$b.test(t.innerHTML)?r.style.imported:r.style.sync);return(e||100)+i}function gf(n,t={},e){for(const i in n){const r=n[i],s=e?`${e}:${i}`:i;typeof r=="object"&&r!==null?gf(r,t,s):typeof r=="function"&&(t[s]=r)}return t}const l0=(()=>{if(console.createTask)return console.createTask;const n={run:t=>t()};return()=>n})();function c0(n,t,e,i){for(let r=e;r<n.length;r+=1)try{const s=i?i.run(()=>n[r](...t)):n[r](...t);if(s&&typeof s.then=="function")return Promise.resolve(s).then(()=>c0(n,t,r+1,i))}catch(s){return Promise.reject(s)}}function Kb(n,t,e){if(n.length>0)return c0(n,t,0,l0(e))}function Jb(n,t,e){if(n.length>0){const i=l0(e);return Promise.all(n.map(r=>i.run(()=>r(...t))))}}function tu(n,t){for(const e of[...n])e(t)}var Zb=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,t,e={}){if(!n||typeof t!="function")return()=>{};const i=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!e.allowDeprecated){let s=r.message;s||(s=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(t),()=>{t&&(this.removeHook(n,t),t=void 0)}}hookOnce(n,t){let e,i=(...r)=>(typeof e=="function"&&e(),e=void 0,i=void 0,t(...r));return e=this.hook(n,i),e}removeHook(n,t){const e=this._hooks[n];if(e){const i=e.indexOf(t);i!==-1&&e.splice(i,1),e.length===0&&(this._hooks[n]=void 0)}}clearHook(n){this._hooks[n]=void 0}deprecateHook(n,t){this._deprecatedHooks[n]=typeof t=="string"?{to:t}:t;const e=this._hooks[n]||[];this._hooks[n]=void 0;for(const i of e)this.hook(n,i)}deprecateHooks(n){for(const t in n)this.deprecateHook(t,n[t])}addHooks(n){const t=gf(n),e=Object.keys(t).map(i=>this.hook(i,t[i]));return()=>{for(const i of e)i();e.length=0}}removeHooks(n){const t=gf(n);for(const e in t)this.removeHook(e,t[e])}removeAllHooks(){this._hooks={}}callHook(n,...t){return this.callHookWith(Kb,n,t)}callHookParallel(n,...t){return this.callHookWith(Jb,n,t)}callHookWith(n,t,e){const i=this._before||this._after?{name:t,args:e,context:{}}:void 0;this._before&&tu(this._before,i);const r=n(this._hooks[t]?[...this._hooks[t]]:[],e,t);return r instanceof Promise?r.finally(()=>{this._after&&i&&tu(this._after,i)}):(this._after&&i&&tu(this._after,i),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const t=this._before.indexOf(n);t!==-1&&this._before.splice(t,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const t=this._after.indexOf(n);t!==-1&&this._after.splice(t,1)}}}};function Qb(){return new Zb}const tE=["name","property","http-equiv"],eE=new Set(["viewport","description","keywords","robots"]);function u0(n){const t=n.indexOf(":");if(t===-1)return!1;const e=n.indexOf(":",t+1),i=n.slice(t+1,e===-1?n.length:e);return i==="twitter"?n==="meta:twitter:image"||n.startsWith("meta:twitter:image:"):qb.has(i)}function vf(n){const{props:t,tag:e}=n;if(Wb.has(e))return e;if(e==="link"&&t.rel==="canonical")return"canonical";if(e==="link"&&t.rel==="alternate"){if(t.hreflang)return`alternate:${t.hreflang}`;if(t.type)return`alternate:${t.type}:${t.href||""}`}if(t.charset)return"charset";if(n.tag==="meta"){for(const i of tE)if(t[i]!==void 0){const r=t[i],s=r&&typeof r=="string"&&r.includes(":"),o=r&&eE.has(r),l=!(s||o)&&n.key?`:key:${n.key}`:"";return`${e}:${r}${l}`}}if(n.key)return`${e}:key:${n.key}`;if(t.id)return`${e}:id:${t.id}`;if(e==="link"&&t.rel==="alternate")return`alternate:${t.href||""}`;if(Vb.has(e)){const i=n.textContent||n.innerHTML;if(i)return`${e}:content:${i}`}}function f0(n){const t=n._h||n._d;if(t)return t;const e=n.textContent||n.innerHTML;if(e)return e;const i=Object.keys(n.props).sort();return`${n.tag}:${i.map(r=>`${r}:${String(n.props[r])}`).join(",")}`}function Jl(n,t,e){typeof n==="function"&&(!e||e!=="titleTemplate"&&!(e[0]==="o"&&e[1]==="n"))&&(n=n());const r=t?t(e,n):n;if(Array.isArray(r)){let s;for(let o=0;o<r.length;o++){const a=Jl(r[o],t);s?s[o]=a:a!==r[o]&&(s=r.slice(0,o),s[o]=a)}return s||r}if(r?.constructor===Object){let s;for(const o in r){const a=a0(o),l=a?void 0:Jl(r[o],t,o);if(!s&&(a||o==="_resolver"||l!==r[o])){s={};for(const c in r){if(c===o)break;s[c]=r[c]}}s&&!a&&(s[o]=l)}return s||r}return r}const nE=/[\s"'<>/=\x00-\x1F\x7F]/;function iE(n,t){const e=n==="style"?new Map:new Set;function i(r){if(r==null||r===void 0)return;const s=String(r).trim();if(s)if(n==="style"){const[o,...a]=s.split(":").map(l=>l?l.trim():"");o&&a.length&&e.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>e.add(o))}return typeof t=="string"?n==="style"?t.split(";").forEach(i):i(t):Array.isArray(t)?t.forEach(r=>i(r)):t&&typeof t=="object"&&Object.entries(t).forEach(([r,s])=>{s&&s!=="false"&&(n==="style"?e.set(String(r).trim(),String(s)):i(r))}),e}function h0(n,t){if(n.props=n.props||{},!t)return n;if(n.tag==="templateParams")return n.props=t,n;const e=mf.has(n.tag)||n.tag==="htmlAttrs"||n.tag==="bodyAttrs";for(const i of Object.keys(t)){if(a0(i))continue;const r=i.startsWith("data-"),s=e&&!Np.has(i),o=s&&!r?i.toLowerCase():i;if(s&&(!o||nE.test(o)))continue;const a=t[i];if(a===null){n.props[o]=null;continue}if(i==="class"||i==="style"){n.props[i]=iE(i,a);continue}if(Np.has(i)){if((i==="textContent"||i==="innerHTML")&&typeof a=="object"){let c=t.type;if(t.type||(c="application/json"),!c?.endsWith("json")&&c!=="speculationrules")continue;t.type=c,n.props.type=c,n[i]=JSON.stringify(a)}else n[i]=a;continue}const l=String(a),u=n.tag==="meta"&&o==="content";l==="true"||l===""?n.props[o]=r||u?l:!0:!a&&r&&l==="false"?n.props[o]="false":a!==void 0&&(n.props[o]=a)}return n}function rE(n,t){const e=typeof t=="object"&&typeof t!="function"?t:{[n==="script"||n==="noscript"||n==="style"?"innerHTML":"textContent"]:t},i=h0({tag:n,props:{}},e);return i.key&&Hb.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function sE(n,t){if(!n)return[];typeof n=="function"&&(n=n());const e=(r,s)=>{for(let o=0;o<t.length;o++)s=t[o](r,s);return s};n=e(void 0,n);const i=[];return n=Jl(n,e),Object.entries(n||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push(rE(r,o))}),i.flat()}function Bp(n,t){const e=typeof t=="function"?t(n):t,i=e.key||String(n.plugins.size+1);n.plugins.get(i)||(n.plugins.set(i,e),n.hooks.addHooks(e.hooks||{}))}function oE(n={}){const t=Qb();t.addHooks(n.hooks||{});const e=!n.document,i=new Map,r=new Map,s=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:n,hooks:t,ssr:e,entries:i,headEntries(){return[...i.values()]},use:a=>Bp(o,a),push(a,l){const u={...l||{}};delete u.head;const c=u._index??o._entryCount++,f={_i:c,input:a,options:u},d={_poll(h=!1){o.dirty=!0,!h&&s.add(c),t.callHook("entries:updated",o)},dispose(){i.delete(c)&&o.invalidate()},patch(h){(!u.mode||u.mode==="server"&&e||u.mode==="client"&&!e)&&(f.input=h,i.set(c,f),d._poll())}};return d.patch(a),d},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await t.callHook("entries:resolve",a);s.size;){const d=s.values().next().value;s.delete(d);const h=i.get(d);if(h){const m={tags:sE(h.input,n.propResolvers||[]).map(g=>Object.assign(g,h.options)),entry:h};await t.callHook("entries:normalize",m),h._tags=m.tags.map((g,v)=>(g._w=Yb(o,g),g._p=(h._i<<10)+v,g._d=vf(g),g._d||(g._h=f0(g)),g))}}let l=!1;a.entries.flatMap(d=>(d._tags||[]).map(h=>({...h,props:{...h.props}}))).sort(_f).reduce((d,h)=>{const m=h._d||h._h;if(!d.has(m))return d.set(m,h);const g=d.get(m);if((h?.tagDuplicateStrategy||(Xb.has(h.tag)?"merge":null)||(h.key&&h.key===g.key?"merge":null))==="merge"){const _={...g.props};Object.entries(h.props).forEach(([y,p])=>_[y]=y==="style"?new Map([...g.props.style||new Map,...p]):y==="class"?new Set([...g.props.class||new Set,...p]):p),d.set(m,{...h,props:_})}else h._p>>10===g._p>>10&&h.tag==="meta"&&u0(m)?(d.set(m,Object.assign([...Array.isArray(g)?g:[g],h],h)),l=!0):(h._w===g._w?h._p>g._p:h?._w<g?._w)&&d.set(m,h);return d},a.tagMap);const u=a.tagMap.get("title"),c=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,c){const d=c?.textContent;if(o._titleTemplate=d,d){let h=typeof d=="function"?d(u?.textContent):d;typeof h=="string"&&!o.plugins.has("template-params")&&(h=h.replace("%s",u?.textContent||"")),u?h===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:h}):(c.tag="title",c.textContent=h)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(_f)),await t.callHook("tags:beforeResolve",a),await t.callHook("tags:resolve",a),await t.callHook("tags:afterResolve",a);const f=[];for(const d of a.tags){const{innerHTML:h,tag:m,props:g}=d;if(Gb.has(m)&&!(Object.keys(g).length===0&&!Qc(d.innerHTML)&&!Qc(d.textContent))&&!(m==="meta"&&!Qc(g.content)&&!g["http-equiv"]&&!g.charset)){if(m==="script"&&h){if(String(g.type).endsWith("json")){const v=typeof h=="string"?h:JSON.stringify(h);d.innerHTML=v.replace(/</g,"\\u003C")}else typeof h=="string"&&(d.innerHTML=h.replace(new RegExp(`</${m}`,"g"),`<\\/${m}`));d._d=vf(d)}f.push(d)}}return f},invalidate(){for(const a of i.values())s.add(a._i);o.dirty=!0,t.callHook("entries:updated",o)}};return(n?.plugins||[]).forEach(a=>Bp(o,a)),o.hooks.callHook("init",o),n.init?.forEach(a=>a&&o.push(a)),o}const eu="%separator";function aE(n,t,e=!1){let i;if(t==="s"||t==="pageTitle")i=n.pageTitle;else if(t.includes(".")){const r=t.indexOf(".");i=n[t.substring(0,r)]?.[t.substring(r+1)]}else i=n[t];if(i!==void 0)return e?(i||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):i||""}function qa(n,t,e,i=!1){if(typeof n!="string"||!n.includes("%"))return n;let r=n;try{r=decodeURI(n)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return n;const o=n.includes(eu);return n=n.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===eu||!s.includes(a))return a;const l=aE(t,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(n=n.split(eu).map(a=>a.trim()).filter(a=>a!=="").join(e?` ${e} `:" ")),n}const kp=n=>n.includes(":key")?n:n.split(":").join(":key:"),lE={key:"aliasSorting",hooks:{"tags:resolve":n=>{let t=!1;for(const e of n.tags){const i=e.tagPriority;if(!i)continue;const r=String(i);if(r.startsWith("before:")){const s=kp(r.slice(7)),o=n.tagMap.get(s);o&&(typeof o.tagPriority=="number"&&(e.tagPriority=o.tagPriority),e._p=o._p-1,t=!0)}else if(r.startsWith("after:")){const s=kp(r.slice(6)),o=n.tagMap.get(s);o&&(typeof o.tagPriority=="number"&&(e.tagPriority=o.tagPriority),e._p=o._p+1,t=!0)}}t&&(n.tags=n.tags.sort(_f))}}},cE={key:"deprecations",hooks:{"entries:normalize":({tags:n})=>{for(const t of n)t.props.children&&(t.innerHTML=t.props.children,delete t.props.children),t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.body&&(t.tagPosition="bodyClose",delete t.props.body)}}};async function xf(n){if(typeof n==="function")return n;if(n instanceof Promise)return await n;if(Array.isArray(n))return await Promise.all(n.map(e=>xf(e)));if(n?.constructor===Object){const e={};for(const i of Object.keys(n))e[i]=await xf(n[i]);return e}return n}const uE={key:"promises",hooks:{"entries:resolve":async n=>{const t=[];for(const e in n.entries)n.entries[e]._promisesProcessed||t.push(xf(n.entries[e].input).then(i=>{n.entries[e].input=i,n.entries[e]._promisesProcessed=!0}));await Promise.all(t)}}},fE={meta:"content",link:"href",htmlAttrs:"lang"},hE=["innerHTML","textContent"],dE=n=>({key:"template-params",hooks:{"entries:normalize":t=>{const e=t.tags.filter(i=>i.tag==="templateParams"&&i.mode==="server")?.[0]?.props||{};Object.keys(e).length&&(n._ssrPayload={templateParams:{...n._ssrPayload?.templateParams||{},...e}})},"tags:resolve":({tagMap:t,tags:e})=>{const i=t.get("templateParams")?.props||{},r=i.separator||"|";delete i.separator,i.pageTitle=qa(i.pageTitle||n._title||"",i,r);for(const s of e){if(s.processTemplateParams===!1)continue;const o=fE[s.tag];if(o&&typeof s.props[o]=="string")s.props[o]=qa(s.props[o],i,r);else if(s.processTemplateParams||s.tag==="titleTemplate"||s.tag==="title")for(const a of hE)typeof s[a]=="string"&&(s[a]=qa(s[a],i,r,s.tag==="script"&&s.props.type.endsWith("json")))}n._templateParams=i,n._separator=r},"tags:afterResolve":({tagMap:t})=>{const e=t.get("title");e?.textContent&&e.processTemplateParams!==!1&&(e.textContent=qa(e.textContent,n._templateParams,n._separator))}}}),pE=(n,t)=>Ue(t)?Gx(t):t,d0="usehead";function mE(n){return{install(e){e.config.globalProperties.$unhead=n,e.config.globalProperties.$head=n,e.provide(d0,n)}}.install}function _E(){if(Fh()){const n=qs(d0);if(n)return n}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function QD(n,t={}){const e=t.head||_E();return e.ssr?e.push(n||{},t):gE(e,n,t)}function gE(n,t,e={}){const i=mc();if(i&&!i.active)return{patch(){},dispose(){},_poll(){}};const r=Oe(!1);let s;return iy(()=>{const a=r.value?{}:Jl(t,pE);s?s.patch(a):s=n.push(a,e)}),vo()&&(Mc(()=>{s.dispose()}),rg(()=>{r.value=!0}),ig(()=>{r.value=!1})),s}const vE={},p0=(n,t)=>[],xE=p0,yE=function(t){if(!t.includes("%"))return t;const e=t.indexOf("?"),i=e===-1?t:t.slice(0,e);try{return e===-1?decodeURI(i):decodeURI(i)+t.slice(e)}catch{return t}},zp=(n,t)=>{if(typeof n!="string")return n;const e=yE(n);return t?e.toLowerCase():e},SE=n=>vE.sensitive?Dp({},...p0("",zp(n,!1)).map(t=>t.data).reverse()):Dp({},...xE("",zp(n,!0)).map(t=>t.data).reverse()),ME=SE;let El;function bE(){let n;return n=$fetch(Kh(`builds/meta/${ca().app.buildId}.json`),{responseType:"json"}).then(t=>{if(!t||typeof t!="object"||!Array.isArray(t.prerendered))throw new Error("[nuxt] Received malformed app manifest. Ensure that `builds/meta/*.json` is served as JSON by your hosting/proxy and not rewritten to an HTML fallback.");return t}),El=n,n.catch(t=>{El===n&&(El=void 0),console.error("[nuxt] Error fetching app manifest.",t)}),n}function td(){return El||bE()}function Pa(n){const t=typeof n=="string"?n:n.path;try{return ME(t)}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function Hp(n,t={}){if(await AE(n)){const e=await wE(n,t),i=ed(n)?"default":"force-cache";return await m0(e,i)||null}return null}const EE="_payload.json",TE="_b";async function wE(n,t={}){const e=new URL(n,"http://localhost");if(e.host!=="localhost"||xo(e.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=ca(),r=t.hash||(t.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await RE(n)?s:i.app.baseURL,a=Ac(o,e.pathname,EE);return ed(n)||(e.search=""),r&&e.searchParams.set(TE,String(r)),a+e.search}async function m0(n,t){try{if(JM){const e=await fetch(n,{cache:t});return e.ok?await v0(await e.text()):null}}catch(e){console.warn("[nuxt] Cannot load payload ",n,e)}return null}function _0(n){if(n.redirect)return!1;if(n.prerender)return!0}function Cc(n){return new URL(n,"http://localhost").pathname}function ed(n){return!!Pa({path:Cc(n)}).payload}async function g0(n){n=Cc(n),n=n==="/"?n:n.replace(/\/$/,"");try{return(await td()).prerendered.includes(n)}catch{return!1}}async function AE(n=Jh().path){const t=Pa({path:Cc(n)});if(t.ssr===!1)return!1;const e=_0(t);return e!==void 0?e:t.payload?!0:await g0(n)}async function RE(n=Jh().path){const t=_0(Pa({path:Cc(n)}));return t!==void 0?t:await g0(n)}let Er=null;async function CE(){if(Er)return Er;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const t=await v0(n.textContent||""),e=n.dataset.src?await m0(n.dataset.src,t.prerenderedAt?"force-cache":"no-cache"):void 0;return Er={...t,...e,...window.__NUXT__},Er.config?.public&&(Er.config.public=dr(Er.config.public)),Er}async function v0(n){return await kb(n,fn()._payloadRevivers)}function PE(n,t){fn()._payloadRevivers[n]=t}const LE=[["NuxtError",n=>Qh(n)],["EmptyShallowRef",n=>Yu(n==="_"?void 0:n==="0n"?BigInt(0):$l(n))],["EmptyRef",n=>Oe(n==="_"?void 0:n==="0n"?BigInt(0):$l(n))],["ShallowRef",n=>Yu(n)],["ShallowReactive",n=>ks(n)],["Ref",n=>Oe(n)],["Reactive",n=>dr(n)]],DE=xr({name:"nuxt:revive-payload:client",order:-30,async setup(n){let t,e;for(const[i,r]of LE)PE(i,r);Object.assign(n.payload,([t,e]=KM(()=>n.runWithContext(CE)),t=await t,e(),t)),window.__NUXT__=n.payload}});async function nd(n,t={}){const e=t.document||n.resolvedOptions.document;if(!e||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return n._domUpdatePromise||(n._domUpdatePromise=new Promise(async r=>{const s=new Map,o=new Promise(h=>{n.resolveTags().then(m=>{h(m.map(g=>{const v=s.get(g._d)||0,_={tag:g,id:(v?`${g._d}:${v}`:g._d)||g._h,shouldRender:!0};return g._d&&u0(g._d)&&s.set(g._d,v+1),_}))})});let a=n._dom;if(!a){a={title:e.title,elMap:new Map().set("htmlAttrs",e.documentElement).set("bodyAttrs",e.body)};for(const h of["body","head"]){const m=e[h]?.children;for(const g of m){const v=g.tagName.toLowerCase();if(!mf.has(v))continue;const _=h0({tag:v,props:{}},{innerHTML:g.innerHTML,...g.getAttributeNames().reduce((y,p)=>(y[p]=g.getAttribute(p),y),{})||{}});if(_.key=g.getAttribute("data-hid")||void 0,_._d=vf(_)||f0(_),a.elMap.has(_._d)){let y=1,p=_._d;for(;a.elMap.has(p);)p=`${_._d}:${y++}`;a.elMap.set(p,g)}else a.elMap.set(_._d,g)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(h,m,g){const v=`${h}:${m}`;a.sideEffects[v]=g,delete a.pendingSideEffects[v]}function u({id:h,$el:m,tag:g}){const v=g.tag.endsWith("Attrs");a.elMap.set(h,m),v||(g.textContent&&g.textContent!==m.textContent&&(m.textContent=g.textContent),g.innerHTML&&g.innerHTML!==m.innerHTML&&(m.innerHTML=g.innerHTML),l(h,"el",()=>{m?.remove(),a.elMap.delete(h)}));for(const _ in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,_))continue;const y=g.props[_];if(_.startsWith("on")&&typeof y=="function"){const x=m?.dataset;if(x&&x[`${_}fired`]){const E=_.slice(0,-5);y.call(m,new Event(E.substring(2)))}m.getAttribute(`data-${_}`)!==""&&((g.tag==="bodyAttrs"?e.defaultView:m).addEventListener(_.substring(2),y.bind(m)),m.setAttribute(`data-${_}`,""));continue}const p=`attr:${_}`;if(_==="class"){if(!y)continue;for(const x of y)v&&l(h,`${p}:${x}`,()=>m.classList.remove(x)),!m.classList.contains(x)&&m.classList.add(x)}else if(_==="style"){if(!y)continue;for(const[x,E]of y)l(h,`${p}:${x}`,()=>{m.style.removeProperty(x)}),m.style.setProperty(x,E)}else y!==!1&&y!==null&&(m.getAttribute(_)!==y&&m.setAttribute(_,y===!0?"":String(y)),v&&l(h,p,()=>m.removeAttribute(_)))}}const c=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const h of d){const{tag:m,shouldRender:g,id:v}=h;if(g){if(m.tag==="title"){e.title=m.textContent,l("title","",()=>e.title=a.title);continue}h.$el=h.$el||a.elMap.get(v),h.$el?u(h):mf.has(m.tag)&&c.push(h)}}for(const h of c){const m=h.tag.tagPosition||"head";h.$el=e.createElement(h.tag.tag),u(h),f[m]=f[m]||e.createDocumentFragment(),f[m].appendChild(h.$el)}for(const h of d)await n.hooks.callHook("dom:renderTag",h,e,l);f.head&&e.head.appendChild(f.head),f.bodyOpen&&e.body.insertBefore(f.bodyOpen,e.body.firstChild),f.bodyClose&&e.body.appendChild(f.bodyClose);for(const h in a.pendingSideEffects)a.pendingSideEffects[h]();n._dom=a,await n.hooks.callHook("dom:rendered",{renders:d}),r()}).finally(()=>{n._domUpdatePromise=void 0,n.dirty=!1})),n._domUpdatePromise}function IE(n={}){const t=n.domOptions?.render||nd;n.document=n.document||(typeof window<"u"?document:void 0);const e=n.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1,i=oE({...n,plugins:[...n.plugins||[],{key:"client",hooks:{"entries:updated":t}}],init:[e?JSON.parse(e):!1,...n.init||[]]});return i.ssr=!1,i}function UE(n,t){let e=0;return()=>{const i=++e;t(()=>{e===i&&n()})}}function NE(n={}){const t=IE({domOptions:{render:UE(()=>nd(t),e=>setTimeout(e,0))},...n});return t.install=mE(t),t}const OE={disableDefaults:!0,disableCapoSorting:!1,plugins:[cE,uE,dE,lE]},FE=xr({name:"nuxt:head",enforce:"pre",setup(n){const t=NE(OE);n.vueApp.use(t);{let e=!0;const i=async()=>{e=!1,await nd(t)};t.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!e}),n.hooks.hook("page:start",()=>{e=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i);const r=t.push.bind(t);t.push=((s,o)=>{const a=r(s,o),l=a.dispose.bind(a);return a.dispose=()=>{const u=n["~transitionPromise"];u?u.then(l):l()},a})}}}),BE=n=>{const t=Pa({path:n.path});if(t.redirect){const e=t.redirect.includes("#")?t.redirect:t.redirect+n.hash;return xo(e,{acceptRelative:!0})?(window.location.href=e,!1):e}},kE=[BE];function nu(n){const t=n&&typeof n=="object"?n:{};typeof n=="object"&&(n=$h({pathname:n.path||"",search:qg(n.query||{}),hash:n.hash||""}));const e=new URL(n.toString(),window.location.href);return{path:e.pathname,fullPath:n,query:jh(e.search),hash:e.hash,params:t.params||{},name:void 0,matched:t.matched||[],redirectedFrom:void 0,meta:t.meta||{},href:n}}const zE=xr({name:"nuxt:router",enforce:"pre",setup(n){const t=vM(window.location.pathname,ca().app.baseURL)+window.location.search+window.location.hash,e=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(h,m)=>(i[h].push(m),()=>{const g=i[h].indexOf(m);g!==-1&&i[h].splice(g,1)}),s=ca().app.baseURL,o=dr(nu(t));let a=0;async function l(h,m){const g=++a;try{const v=nu(h);for(const _ of i["navigate:before"]){const y=await _(v,o);if(g!==a||y===!1||y instanceof Error)return;if(typeof y=="string"&&y.length)return await l(y,!0)}for(const _ of i["resolve:before"])if(await _(v,o),g!==a)return;Object.assign(o,v),window.history[m?"replaceState":"pushState"]({},"",Ac(s,v.fullPath)),n.isHydrating||await n.runWithContext(vb);for(const _ of i["navigate:after"])await _(v,o)}catch(v){for(const _ of i.error)await _(v)}}const c={currentRoute:Og(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:h=>l(h,!1),replace:h=>l(h,!0),back:()=>window.history.go(-1),go:h=>window.history.go(h),forward:()=>window.history.go(1),beforeResolve:h=>r("resolve:before",h),beforeEach:h=>r("navigate:before",h),afterEach:h=>r("navigate:after",h),onError:h=>r("error",h),resolve:nu,addRoute:(h,m)=>{e.push(m)},getRoutes:()=>e,hasRoute:h=>e.some(m=>m.name===h),removeRoute:h=>{const m=e.findIndex(g=>g.name===h);m!==-1&&e.splice(m,1)}};n.vueApp.component("RouterLink",zh({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(h,{slots:m})=>{const g=()=>l(h.to,h.replace);return()=>{const v=c.resolve(h.to);return h.custom?m.default?.({href:h.to,navigate:g,route:v}):Fg("a",{href:h.to,onClick:_=>(_.preventDefault(),g())},m)}}})),window.addEventListener("popstate",h=>{const m=h.target.location;c.replace(m.href.replace(m.origin,""))}),n._route=o,n._middleware||={global:[],named:{}};const f=n.payload.state._layout,d=n.payload.state._layoutProps;return n.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(h,m)=>{h.meta=dr(h.meta||{}),n.isHydrating&&f&&!oi(h.meta.layout)&&(h.meta.layout=f,h.meta.layoutProps=d),n._processingMiddleware=!0;{const g=new Set([...kE,...n._middleware.global]),v=Pa({path:h.path});if(v.appMiddleware)for(const _ in v.appMiddleware){const y=n._middleware.named[_];y&&(v.appMiddleware[_]?g.add(y):g.delete(y))}for(const _ of g){const y=await n.runWithContext(()=>_(h,m));if(y!==!0&&(y||y===!1))return y}}}),c.afterEach(()=>{delete n._processingMiddleware}),await c.replace(t),yM(o.fullPath,t)||await n.runWithContext(()=>pb(o.fullPath))}),{provide:{route:o,router:c}}}}),Vp=globalThis.requestIdleCallback||(n=>{const t=Date.now(),e={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{n(e)},1)}),tI=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),id=n=>{const t=fn();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{Vp(()=>n())}):Vp(()=>n())},HE=xr({name:"nuxt:payload",setup(n){const t=new Set;rs().beforeResolve(async(e,i)=>{const r=ed(e.path),s=r?Tp(e.fullPath):e.path,o=r?Tp(i.fullPath):i.path;if(s===o)return;const a=await Hp(s);if(a){for(const l of t)delete n.static.data[l];for(const l in a.data)l in n.static.data||t.add(l),n.static.data[l]=a.data[l]}}),id(()=>{n.hooks.hook("link:prefetch",async e=>{const{hostname:i}=new URL(e,window.location.href);i===window.location.hostname&&await Hp(e).catch(()=>{console.warn("[nuxt] Error preloading payload for",e)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(td,1e3)})}}),VE=xr(()=>{const n=rs();id(()=>{n.beforeResolve(async()=>{await new Promise(t=>{setTimeout(t,100),requestAnimationFrame(()=>{setTimeout(t,0)})})})})}),GE=xr(n=>{let t;async function e(){let i;try{i=await td()}catch(r){const s=r;if(!("status"in s&&(s.status===404||s.status===403)))throw s}t&&clearTimeout(t),t=setTimeout(e,Pp);try{const r=await $fetch(Kh("builds/latest.json")+`?${Date.now()}`);r.id!==i?.id&&(n.hooks.callHook("app:manifest:update",r),t&&clearTimeout(t))}catch{}}id(()=>{t=setTimeout(e,Pp)})});function WE(n={}){const t=n.path||window.location.pathname,e=new URL(t,window.location.href);if(e.host!==window.location.host)throw new Error(`Cannot navigate to a URL with a different host: '${t}'.`);if(e.protocol&&af(e.protocol))throw new Error(`Cannot navigate to a URL with '${e.protocol}' protocol.`);let i={};try{i=$l(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||i?.path!==t||i?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:fn().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const XE=xr({name:"nuxt:chunk-reload",setup(n){const t=rs(),e=ca(),i=new Set;t.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o=Ac(e.app.baseURL,s.fullPath);WE({path:o,persistState:!0})}n.hook("app:manifest:update",()=>{t.beforeResolve(r)}),t.onError((s,o)=>{i.has(s)&&r(o)})}}),qE=xr({name:"nuxt:global-components"}),jE=[DE,FE,zE,HE,VE,GE,XE,qE];const rd="177",$E=0,Gp=1,YE=2,x0=1,KE=2,Ui=3,mr=0,gn=1,ln=2,cr=0,Js=1,Wp=2,Xp=3,qp=4,JE=5,kr=100,ZE=101,QE=102,tT=103,eT=104,nT=200,iT=201,rT=202,sT=203,yf=204,Sf=205,oT=206,aT=207,lT=208,cT=209,uT=210,fT=211,hT=212,dT=213,pT=214,Mf=0,bf=1,Ef=2,so=3,Tf=4,wf=5,Af=6,Rf=7,y0=0,mT=1,_T=2,ur=0,gT=1,vT=2,xT=3,S0=4,yT=5,ST=6,MT=7,M0=300,oo=301,ao=302,Cf=303,Pf=304,Pc=306,Lf=1e3,Gr=1001,Df=1002,Un=1003,bT=1004,ja=1005,vi=1006,iu=1007,Wr=1008,Mi=1009,b0=1010,E0=1011,ua=1012,sd=1013,ss=1014,xi=1015,La=1016,od=1017,ad=1018,fa=1020,T0=35902,w0=1021,A0=1022,ri=1023,ha=1026,da=1027,ld=1028,cd=1029,R0=1030,ud=1031,fd=1033,Tl=33776,wl=33777,Al=33778,Rl=33779,If=35840,Uf=35841,Nf=35842,Of=35843,Ff=36196,Bf=37492,kf=37496,zf=37808,Hf=37809,Vf=37810,Gf=37811,Wf=37812,Xf=37813,qf=37814,jf=37815,$f=37816,Yf=37817,Kf=37818,Jf=37819,Zf=37820,Qf=37821,Cl=36492,th=36494,eh=36495,C0=36283,nh=36284,ih=36285,rh=36286,ET=3200,TT=3201,P0=0,wT=1,rr="",Xn="srgb",lo="srgb-linear",Zl="linear",de="srgb",vs=7680,jp=519,AT=512,RT=513,CT=514,L0=515,PT=516,LT=517,DT=518,IT=519,$p=35044,UT=35048,Yp="300 es",Hi=2e3,Ql=2001;class yo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kp=1234567;const $o=Math.PI/180,pa=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function hd(n,t){return(n%t+t)%t}function NT(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function OT(n,t,e){return n!==t?(e-n)/(t-n):0}function Yo(n,t,e){return(1-e)*n+e*t}function FT(n,t,e,i){return Yo(n,t,1-Math.exp(-e*i))}function BT(n,t=1){return t-Math.abs(hd(n,t*2)-t)}function kT(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function zT(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function HT(n,t){return n+Math.floor(Math.random()*(t-n+1))}function VT(n,t){return n+Math.random()*(t-n)}function GT(n){return n*(.5-Math.random())}function WT(n){n!==void 0&&(Kp=n);let t=Kp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function XT(n){return n*$o}function qT(n){return n*pa}function jT(n){return(n&n-1)===0&&n!==0}function $T(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function YT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function KT(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),u=s((t+i)/2),c=o((t+i)/2),f=s((t-i)/2),d=o((t-i)/2),h=s((i-t)/2),m=o((i-t)/2);switch(r){case"XYX":n.set(a*c,l*f,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*m,l*h,a*u);break;case"YXY":n.set(l*h,a*c,l*m,a*u);break;case"ZYZ":n.set(l*m,l*h,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const xs={DEG2RAD:$o,RAD2DEG:pa,generateUUID:cs,clamp:Yt,euclideanModulo:hd,mapLinear:NT,inverseLerp:OT,lerp:Yo,damp:FT,pingpong:BT,smoothstep:kT,smootherstep:zT,randInt:HT,randFloat:VT,randFloatSpread:GT,seededRandom:WT,degToRad:XT,radToDeg:qT,isPowerOfTwo:jT,ceilPowerOfTwo:$T,floorPowerOfTwo:YT,setQuaternionFromProperEuler:KT,normalize:nn,denormalize:Fs};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Da{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],m=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=m,t[e+3]=g;return}if(f!==g||l!==d||u!==h||c!==m){let v=1-a;const _=l*d+u*h+c*m+f*g,y=_>=0?1:-1,p=1-_*_;if(p>Number.EPSILON){const E=Math.sqrt(p),w=Math.atan2(E,_*y);v=Math.sin(v*w)/E,a=Math.sin(a*w)/E}const x=a*y;if(l=l*v+d*x,u=u*v+h*x,c=c*v+m*x,f=f*v+g*x,v===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=E,u*=E,c*=E,f*=E}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],h=s[o+2],m=s[o+3];return t[e]=a*m+c*f+l*h-u*d,t[e+1]=l*m+c*d+u*f-a*h,t[e+2]=u*m+c*h+a*d-l*f,t[e+3]=c*m-a*f-l*d-u*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f-d*h*m;break;case"YXZ":this._x=d*c*f+u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f+d*h*m;break;case"ZXY":this._x=d*c*f-u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f-d*h*m;break;case"ZYX":this._x=d*c*f-u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f+d*h*m;break;case"YZX":this._x=d*c*f+u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f-d*h*m;break;case"XZY":this._x=d*c*f-u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f+d*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*i+e*this._x,this._y=h*r+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ru.copy(this).projectOnVector(t),this.sub(ru)}reflect(t){return this.sub(ru.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new k,Jp=new Da;class qt{constructor(t,e,i,r,s,o,a,l,u){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],m=i[8],g=r[0],v=r[3],_=r[6],y=r[1],p=r[4],x=r[7],E=r[2],w=r[5],R=r[8];return s[0]=o*g+a*y+l*E,s[3]=o*v+a*p+l*w,s[6]=o*_+a*x+l*R,s[1]=u*g+c*y+f*E,s[4]=u*v+c*p+f*w,s[7]=u*_+c*x+f*R,s[2]=d*g+h*y+m*E,s[5]=d*v+h*p+m*w,s[8]=d*_+h*x+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,d=a*l-c*s,h=u*s-o*l,m=e*f+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=f*g,t[1]=(r*u-c*i)*g,t[2]=(a*i-r*o)*g,t[3]=d*g,t[4]=(c*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=h*g,t[7]=(i*l-u*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(su.makeScale(t,e)),this}rotate(t){return this.premultiply(su.makeRotation(-t)),this}translate(t,e){return this.premultiply(su.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const su=new qt;function D0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function tc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JT(){const n=tc("canvas");return n.style.display="block",n}const Zp={};function Zs(n){n in Zp||(Zp[n]=!0,console.warn(n))}function ZT(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function QT(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tw(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qp=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ew(){const n={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?Zl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lo]:{primaries:t,whitePoint:i,transfer:Zl,toXYZ:Qp,fromXYZ:tm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:t,whitePoint:i,transfer:de,toXYZ:Qp,fromXYZ:tm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}const ie=ew();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ys;class nw{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ys===void 0&&(ys=tc("canvas")),ys.width=t.width,ys.height=t.height;const r=ys.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ys}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let iw=0;class dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ou(r[o].image)):s.push(ou(r[o]))}else s=ou(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ou(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rw=0;const au=new k;class un extends yo{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,i=Gr,r=Gr,s=vi,o=Wr,a=ri,l=Mi,u=un.DEFAULT_ANISOTROPY,c=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=cs(),this.name="",this.source=new dd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==M0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lf:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case Df:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lf:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case Df:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=M0;un.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,r=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],m=l[9],g=l[2],v=l[6],_=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+g)<.1&&Math.abs(m+v)<.1&&Math.abs(u+h+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const p=(u+1)/2,x=(h+1)/2,E=(_+1)/2,w=(c+d)/4,R=(f+g)/4,A=(m+v)/4;return p>x&&p>E?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=w/i,s=R/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=A/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=A/s),this.set(i,r,s,e),this}let y=Math.sqrt((v-m)*(v-m)+(f-g)*(f-g)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(v-m)/y,this.y=(f-g)/y,this.z=(d-c)/y,this.w=Math.acos((u+h+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sw extends yo{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new un(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new dd(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends sw{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class I0 extends un{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ow extends un{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$a.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(t.matrixWorld),this.union($a)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),Ya.subVectors(this.max,Po),Ss.subVectors(t.a,Po),Ms.subVectors(t.b,Po),bs.subVectors(t.c,Po),Ki.subVectors(Ms,Ss),Ji.subVectors(bs,Ms),Tr.subVectors(Ss,bs);let e=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-Tr.z,Tr.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,Tr.z,0,-Tr.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-Tr.y,Tr.x,0];return!lu(e,Ss,Ms,bs,Ya)||(e=[1,0,0,0,1,0,0,0,1],!lu(e,Ss,Ms,bs,Ya))?!1:(Ka.crossVectors(Ki,Ji),e=[Ka.x,Ka.y,Ka.z],lu(e,Ss,Ms,bs,Ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ci=[new k,new k,new k,new k,new k,new k,new k,new k],Qn=new k,$a=new us,Ss=new k,Ms=new k,bs=new k,Ki=new k,Ji=new k,Tr=new k,Po=new k,Ya=new k,Ka=new k,wr=new k;function lu(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wr.fromArray(n,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=t.dot(wr),u=e.dot(wr),c=i.dot(wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const aw=new us,Lo=new k,cu=new k;class So{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):aw.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const e=Lo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Lo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(cu)),this.expandByPoint(Lo.copy(t.center).sub(cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Pi=new k,uu=new k,Ja=new k,Zi=new k,fu=new k,Za=new k,hu=new k;class pd{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){uu.copy(t).add(e).multiplyScalar(.5),Ja.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(uu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ja),a=Zi.dot(this.direction),l=-Zi.dot(Ja),u=Zi.lengthSq(),c=Math.abs(1-o*o);let f,d,h,m;if(c>0)if(f=o*l-a,d=o*a-l,m=s*c,f>=0)if(d>=-m)if(d<=m){const g=1/c;f*=g,d*=g,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(uu).addScaledVector(Ja,d),h}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(i=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),c>=0?(s=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,r,s){fu.subVectors(e,t),Za.subVectors(i,t),hu.crossVectors(fu,Za);let o=this.direction.dot(hu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);const l=a*this.direction.dot(Za.crossVectors(Zi,Za));if(l<0)return null;const u=a*this.direction.dot(fu.cross(Zi));if(u<0||l+u>o)return null;const c=-a*Zi.dot(hu);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,o,a,l,u,c,f,d,h,m,g,v){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,d,h,m,g,v)}set(t,e,i,r,s,o,a,l,u,c,f,d,h,m,g,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=u,_[6]=c,_[10]=f,_[14]=d,_[3]=h,_[7]=m,_[11]=g,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Es.setFromMatrixColumn(t,0).length(),s=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*c,h=o*f,m=a*c,g=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=h+m*u,e[5]=d-g*u,e[9]=-a*l,e[2]=g-d*u,e[6]=m+h*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,h=l*f,m=u*c,g=u*f;e[0]=d+g*a,e[4]=m*a-h,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=h*a-m,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,h=l*f,m=u*c,g=u*f;e[0]=d-g*a,e[4]=-o*f,e[8]=m+h*a,e[1]=h+m*a,e[5]=o*c,e[9]=g-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,h=o*f,m=a*c,g=a*f;e[0]=l*c,e[4]=m*u-h,e[8]=d*u+g,e[1]=l*f,e[5]=g*u+d,e[9]=h*u-m,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,h=o*u,m=a*l,g=a*u;e[0]=l*c,e[4]=g-d*f,e[8]=m*f+h,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=h*f+m,e[10]=d-g*f}else if(t.order==="XZY"){const d=o*l,h=o*u,m=a*l,g=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=d*f+g,e[5]=o*c,e[9]=h*f-m,e[2]=m*f-h,e[6]=a*c,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lw,t,cw)}lookAt(t,e,i){const r=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Qi.crossVectors(i,En),Qi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Qi.crossVectors(i,En)),Qi.normalize(),Qa.crossVectors(En,Qi),r[0]=Qi.x,r[4]=Qa.x,r[8]=En.x,r[1]=Qi.y,r[5]=Qa.y,r[9]=En.y,r[2]=Qi.z,r[6]=Qa.z,r[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],m=i[2],g=i[6],v=i[10],_=i[14],y=i[3],p=i[7],x=i[11],E=i[15],w=r[0],R=r[4],A=r[8],M=r[12],S=r[1],L=r[5],N=r[9],O=r[13],H=r[2],$=r[6],B=r[10],X=r[14],z=r[3],ht=r[7],pt=r[11],ft=r[15];return s[0]=o*w+a*S+l*H+u*z,s[4]=o*R+a*L+l*$+u*ht,s[8]=o*A+a*N+l*B+u*pt,s[12]=o*M+a*O+l*X+u*ft,s[1]=c*w+f*S+d*H+h*z,s[5]=c*R+f*L+d*$+h*ht,s[9]=c*A+f*N+d*B+h*pt,s[13]=c*M+f*O+d*X+h*ft,s[2]=m*w+g*S+v*H+_*z,s[6]=m*R+g*L+v*$+_*ht,s[10]=m*A+g*N+v*B+_*pt,s[14]=m*M+g*O+v*X+_*ft,s[3]=y*w+p*S+x*H+E*z,s[7]=y*R+p*L+x*$+E*ht,s[11]=y*A+p*N+x*B+E*pt,s[15]=y*M+p*O+x*X+E*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],d=t[10],h=t[14],m=t[3],g=t[7],v=t[11],_=t[15];return m*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*h-i*l*h)+g*(+e*l*h-e*u*d+s*o*d-r*o*h+r*u*c-s*l*c)+v*(+e*u*f-e*a*h-s*o*f+i*o*h+s*a*c-i*u*c)+_*(-r*a*c-e*l*f+e*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],h=t[11],m=t[12],g=t[13],v=t[14],_=t[15],y=f*v*u-g*d*u+g*l*h-a*v*h-f*l*_+a*d*_,p=m*d*u-c*v*u-m*l*h+o*v*h+c*l*_-o*d*_,x=c*g*u-m*f*u+m*a*h-o*g*h-c*a*_+o*f*_,E=m*f*l-c*g*l-m*a*d+o*g*d+c*a*v-o*f*v,w=e*y+i*p+r*x+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=y*R,t[1]=(g*d*s-f*v*s-g*r*h+i*v*h+f*r*_-i*d*_)*R,t[2]=(a*v*s-g*l*s+g*r*u-i*v*u-a*r*_+i*l*_)*R,t[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*h-i*l*h)*R,t[4]=p*R,t[5]=(c*v*s-m*d*s+m*r*h-e*v*h-c*r*_+e*d*_)*R,t[6]=(m*l*s-o*v*s-m*r*u+e*v*u+o*r*_-e*l*_)*R,t[7]=(o*d*s-c*l*s+c*r*u-e*d*u-o*r*h+e*l*h)*R,t[8]=x*R,t[9]=(m*f*s-c*g*s-m*i*h+e*g*h+c*i*_-e*f*_)*R,t[10]=(o*g*s-m*a*s+m*i*u-e*g*u-o*i*_+e*a*_)*R,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*h-e*a*h)*R,t[12]=E*R,t[13]=(c*g*r-m*f*r+m*i*d-e*g*d-c*i*v+e*f*v)*R,t[14]=(m*a*r-o*g*r-m*i*l+e*g*l+o*i*v-e*a*v)*R,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,d=s*u,h=s*c,m=s*f,g=o*c,v=o*f,_=a*f,y=l*u,p=l*c,x=l*f,E=i.x,w=i.y,R=i.z;return r[0]=(1-(g+_))*E,r[1]=(h+x)*E,r[2]=(m-p)*E,r[3]=0,r[4]=(h-x)*w,r[5]=(1-(d+_))*w,r[6]=(v+y)*w,r[7]=0,r[8]=(m+p)*R,r[9]=(v-y)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Es.set(r[0],r[1],r[2]).length();const o=Es.set(r[4],r[5],r[6]).length(),a=Es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ti.copy(this);const u=1/s,c=1/o,f=1/a;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=c,ti.elements[5]*=c,ti.elements[6]*=c,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,e.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Hi){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let h,m;if(a===Hi)h=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Ql)h=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Hi){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),d=(e+t)*u,h=(i+r)*c;let m,g;if(a===Hi)m=(o+s)*f,g=-2*f;else if(a===Ql)m=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Es=new k,ti=new pe,lw=new k(0,0,0),cw=new k(1,1,1),Qi=new k,Qa=new k,En=new k,em=new pe,nm=new Da;class bi{constructor(t=0,e=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return em.makeRotationFromQuaternion(t),this.setFromRotationMatrix(em,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nm.setFromEuler(this),this.setFromQuaternion(nm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uw=0;const im=new k,Ts=new Da,Li=new pe,tl=new k,Do=new k,fw=new k,hw=new Da,rm=new k(1,0,0),sm=new k(0,1,0),om=new k(0,0,1),am={type:"added"},dw={type:"removed"},ws={type:"childadded",child:null},du={type:"childremoved",child:null};class Be extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new k,e=new bi,i=new Da,r=new k(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new qt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(rm,t)}rotateY(t){return this.rotateOnAxis(sm,t)}rotateZ(t){return this.rotateOnAxis(om,t)}translateOnAxis(t,e){return im.copy(t).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rm,t)}translateY(t){return this.translateOnAxis(sm,t)}translateZ(t){return this.translateOnAxis(om,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?tl.copy(t):tl.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Do,tl,this.up):Li.lookAt(tl,Do,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Li),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(am),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dw),du.child=t,this.dispatchEvent(du),du.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(am),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,fw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,hw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Be.DEFAULT_UP=new k(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new k,Di=new k,pu=new k,Ii=new k,As=new k,Rs=new k,lm=new k,mu=new k,_u=new k,gu=new k,vu=new Pe,xu=new Pe,yu=new Pe;class ii{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ei.subVectors(t,e),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ei.subVectors(r,e),Di.subVectors(i,e),pu.subVectors(t,e);const o=ei.dot(ei),a=ei.dot(Di),l=ei.dot(pu),u=Di.dot(Di),c=Di.dot(pu),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-a*c)*d,m=(o*c-a*l)*d;return s.set(1-h-m,m,h)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return vu.setScalar(0),xu.setScalar(0),yu.setScalar(0),vu.fromBufferAttribute(t,e),xu.fromBufferAttribute(t,i),yu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(vu,s.x),o.addScaledVector(xu,s.y),o.addScaledVector(yu,s.z),o}static isFrontFacing(t,e,i,r){return ei.subVectors(i,e),Di.subVectors(t,e),ei.cross(Di).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ei.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ii.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),Rs.subVectors(s,i),mu.subVectors(t,i);const l=As.dot(mu),u=Rs.dot(mu);if(l<=0&&u<=0)return e.copy(i);_u.subVectors(t,r);const c=As.dot(_u),f=Rs.dot(_u);if(c>=0&&f<=c)return e.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(As,o);gu.subVectors(t,s);const h=As.dot(gu),m=Rs.dot(gu);if(m>=0&&h<=m)return e.copy(s);const g=h*u-l*m;if(g<=0&&u>=0&&m<=0)return a=u/(u-m),e.copy(i).addScaledVector(Rs,a);const v=c*m-h*f;if(v<=0&&f-c>=0&&h-m>=0)return lm.subVectors(s,r),a=(f-c)/(f-c+(h-m)),e.copy(r).addScaledVector(lm,a);const _=1/(v+g+d);return o=g*_,a=d*_,e.copy(i).addScaledVector(As,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Su(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ie.workingColorSpace){if(t=hd(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Su(o,s,t+1/3),this.g=Su(o,s,t),this.b=Su(o,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xn){const i=U0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return ie.workingToColorSpace(Ke.copy(this),t),Math.round(Yt(Ke.r*255,0,255))*65536+Math.round(Yt(Ke.g*255,0,255))*256+Math.round(Yt(Ke.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ke.copy(this),e);const i=Ke.r,r=Ke.g,s=Ke.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Xn){ie.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,r=Ke.b;return t!==Xn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+e,tr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(tr),t.getHSL(el);const i=Yo(tr.h,el.h,e),r=Yo(tr.s,el.s,e),s=Yo(tr.l,el.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Jt;Jt.NAMES=U0;let pw=0;class Mo extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Js,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _d extends Mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new k,nl=new Lt;let mw=0;class Yn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mw++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$p,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)nl.fromBufferAttribute(this,e),nl.applyMatrix3(t),this.setXY(e,nl.x,nl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=nn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$p&&(t.usage=this.usage),t}}class N0 extends Yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class O0 extends Yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends Yn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let _w=0;const Vn=new pe,Mu=new Be,Cs=new k,Tn=new us,Io=new us,He=new k;class hn extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D0(t)?O0:N0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return Mu.lookAt(t),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(Tn.min,Io.min),Tn.expandByPoint(He),He.addVectors(Tn.max,Io.max),Tn.expandByPoint(He)):(Tn.expandByPoint(Io.min),Tn.expandByPoint(Io.max))}Tn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)He.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(He));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)He.fromBufferAttribute(a,u),l&&(Cs.fromBufferAttribute(t,u),He.add(Cs)),r=Math.max(r,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new k,l[A]=new k;const u=new k,c=new k,f=new k,d=new Lt,h=new Lt,m=new Lt,g=new k,v=new k;function _(A,M,S){u.fromBufferAttribute(i,A),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,A),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,S),c.sub(u),f.sub(u),h.sub(d),m.sub(d);const L=1/(h.x*m.y-m.x*h.y);isFinite(L)&&(g.copy(c).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(L),v.copy(f).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(L),a[A].add(g),a[M].add(g),a[S].add(g),l[A].add(v),l[M].add(v),l[S].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,M=y.length;A<M;++A){const S=y[A],L=S.start,N=S.count;for(let O=L,H=L+N;O<H;O+=3)_(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const p=new k,x=new k,E=new k,w=new k;function R(A){E.fromBufferAttribute(r,A),w.copy(E);const M=a[A];p.copy(M),p.sub(E.multiplyScalar(E.dot(M))).normalize(),x.crossVectors(w,M);const L=x.dot(l[A])<0?-1:1;o.setXYZW(A,p.x,p.y,p.z,L)}for(let A=0,M=y.length;A<M;++A){const S=y[A],L=S.start,N=S.count;for(let O=L,H=L+N;O<H;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,c=new k,f=new k;if(t)for(let d=0,h=t.count;d<h;d+=3){const m=t.getX(d+0),g=t.getX(d+1),v=t.getX(d+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,v),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let d=0,h=e.count;d<h;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let h=0,m=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*c;for(let _=0;_<c;_++)d[m++]=u[h++]}return new Yn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=t(d,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new pe,Ar=new pd,il=new So,um=new k,rl=new k,sl=new k,ol=new k,bu=new k,al=new k,fm=new k,ll=new k;class Ve extends Be{constructor(t=new hn,e=new _d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){al.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(bu.fromBufferAttribute(f,t),o?al.addScaledVector(bu,c):al.addScaledVector(bu.sub(e),c))}e.add(al)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),Ar.copy(t.ray).recast(t.near),!(il.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(il,um)===null||Ar.origin.distanceToSquared(um)>(t.far-t.near)**2))&&(cm.copy(s).invert(),Ar.copy(t.ray).applyMatrix4(cm),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ar)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const v=d[m],_=o[v.materialIndex],y=Math.max(v.start,h.start),p=Math.min(a.count,Math.min(v.start+v.count,h.start+h.count));for(let x=y,E=p;x<E;x+=3){const w=a.getX(x),R=a.getX(x+1),A=a.getX(x+2);r=cl(this,_,t,i,u,c,f,w,R,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let v=m,_=g;v<_;v+=3){const y=a.getX(v),p=a.getX(v+1),x=a.getX(v+2);r=cl(this,o,t,i,u,c,f,y,p,x),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const v=d[m],_=o[v.materialIndex],y=Math.max(v.start,h.start),p=Math.min(l.count,Math.min(v.start+v.count,h.start+h.count));for(let x=y,E=p;x<E;x+=3){const w=x,R=x+1,A=x+2;r=cl(this,_,t,i,u,c,f,w,R,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let v=m,_=g;v<_;v+=3){const y=v,p=v+1,x=v+2;r=cl(this,o,t,i,u,c,f,y,p,x),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function gw(n,t,e,i,r,s,o,a){let l;if(t.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===mr,a),l===null)return null;ll.copy(a),ll.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(ll);return u<e.near||u>e.far?null:{distance:u,point:ll.clone(),object:n}}function cl(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,rl),n.getVertexPosition(l,sl),n.getVertexPosition(u,ol);const c=gw(n,t,e,i,rl,sl,ol,fm);if(c){const f=new k;ii.getBarycoord(fm,rl,sl,ol,f),r&&(c.uv=ii.getInterpolatedAttribute(r,a,l,u,f,new Lt)),s&&(c.uv1=ii.getInterpolatedAttribute(s,a,l,u,f,new Lt)),o&&(c.normal=ii.getInterpolatedAttribute(o,a,l,u,f,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new k,materialIndex:0};ii.getNormal(rl,sl,ol,d.normal),c.face=d,c.barycoord=f}return c}class Ia extends hn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,h=0;m("z","y","x",-1,-1,i,e,t,o,s,0),m("z","y","x",1,-1,i,e,-t,o,s,1),m("x","z","y",1,1,t,i,e,r,o,2),m("x","z","y",1,-1,t,i,-e,r,o,3),m("x","y","z",1,-1,t,e,i,r,s,4),m("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(f,2));function m(g,v,_,y,p,x,E,w,R,A,M){const S=x/R,L=E/A,N=x/2,O=E/2,H=w/2,$=R+1,B=A+1;let X=0,z=0;const ht=new k;for(let pt=0;pt<B;pt++){const ft=pt*L-O;for(let St=0;St<$;St++){const Xt=St*S-N;ht[g]=Xt*y,ht[v]=ft*p,ht[_]=H,u.push(ht.x,ht.y,ht.z),ht[g]=0,ht[v]=0,ht[_]=w>0?1:-1,c.push(ht.x,ht.y,ht.z),f.push(St/R),f.push(1-pt/A),X+=1}}for(let pt=0;pt<A;pt++)for(let ft=0;ft<R;ft++){const St=d+ft+$*pt,Xt=d+ft+$*(pt+1),rt=d+(ft+1)+$*(pt+1),_t=d+(ft+1)+$*pt;l.push(St,Xt,_t),l.push(Xt,rt,_t),z+=6}a.addGroup(h,z,M),h+=z,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function co(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function rn(n){const t={};for(let e=0;e<n.length;e++){const i=co(n[e]);for(const r in i)t[r]=i[r]}return t}function vw(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function F0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const xw={clone:co,merge:rn};var yw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yw,this.fragmentShader=Sw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=co(t.uniforms),this.uniformsGroups=vw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class B0 extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new k,hm=new Lt,dm=new Lt;class qn extends B0{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,e){return this.getViewBounds(t,hm,dm),e.subVectors(dm,hm)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($o*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ps=-90,Ls=1;class Mw extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);const s=new qn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);const o=new qn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);const a=new qn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);const l=new qn(Ps,Ls,t,e);l.layers=this.layers,this.add(l);const u=new qn(Ps,Ls,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,d,h),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class k0 extends un{constructor(t=[],e=oo,i,r,s,o,a,l,u,c){super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bw extends os{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new k0(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ia(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:cr});s.uniforms.tEquirect.value=e;const o=new Ve(r,s),a=e.minFilter;return e.minFilter===Wr&&(e.minFilter=vi),new Mw(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class ko extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ew={type:"move"};class Eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const v=e.getJointPose(g,i),_=this._getHandJoint(u,g);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,m=.005;u.inputState.pinching&&d>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ew)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ko;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class gd{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new gd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tw extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ww extends un{constructor(t=null,e=1,i=1,r,s,o,a,l,u=Un,c=Un,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pm extends Yn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new pe,mm=new pe,ul=[],_m=new us,Aw=new pe,Uo=new Ve,No=new So;class zr extends Ve{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Aw)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),_m.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(_m)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),No.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(i),t.ray.intersectsSphere(No)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ds),mm.multiplyMatrices(i,Ds),Uo.matrixWorld=mm,Uo.raycast(t,ul);for(let o=0,a=ul.length;o<a;o++){const l=ul[o];l.instanceId=s,l.object=this,e.push(l)}ul.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ww(new Float32Array(r*this.count),r,this.count,ld,xi));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Tu=new k,Rw=new k,Cw=new qt;class Nr{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Tu.subVectors(i,e).cross(Rw.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Cw.getNormalMatrix(t),r=this.coplanarPoint(Tu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new So,fl=new k;class vd{constructor(t=new Nr,e=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],h=r[8],m=r[9],g=r[10],v=r[11],_=r[12],y=r[13],p=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,v-h,x-_).normalize(),i[1].setComponents(l+s,d+u,v+h,x+_).normalize(),i[2].setComponents(l+o,d+c,v+m,x+y).normalize(),i[3].setComponents(l-o,d-c,v-m,x-y).normalize(),i[4].setComponents(l-a,d-f,v-g,x-p).normalize(),e===Hi)i[5].setComponents(l+a,d+f,v+g,x+p).normalize();else if(e===Ql)i[5].setComponents(a,f,g,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(fl.x=r.normal.x>0?t.max.x:t.min.x,fl.y=r.normal.y>0?t.max.y:t.min.y,fl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z0 extends Mo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gm=new pe,sh=new pd,hl=new So,dl=new k;class Pw extends Be{constructor(t=new hn,e=new z0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,t.ray.intersectsSphere(hl)===!1)return;gm.copy(r).invert(),sh.copy(t.ray).applyMatrix4(gm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let m=d,g=h;m<g;m++){const v=u.getX(m);dl.fromBufferAttribute(f,v),vm(dl,v,l,r,t,e,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let m=d,g=h;m<g;m++)dl.fromBufferAttribute(f,m),vm(dl,m,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vm(n,t,e,i,r,s,o){const a=sh.distanceSqToPoint(n);if(a<e){const l=new k;sh.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class H0 extends un{constructor(t,e,i=ss,r,s,o,a=Un,l=Un,u,c=ha,f=1){if(c!==ha&&c!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xd extends hn{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],u=new k,c=new Lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const h=i+f/e*r;u.x=t*Math.cos(h),u.y=t*Math.sin(h),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[d]/t+1)/2,c.y=(o[d+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xd(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ec extends hn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],h=[];let m=0;const g=[],v=i/2;let _=0;y(),o===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(c),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(h,2));function y(){const x=new k,E=new k;let w=0;const R=(e-t)/i;for(let A=0;A<=s;A++){const M=[],S=A/s,L=S*(e-t)+t;for(let N=0;N<=r;N++){const O=N/r,H=O*l+a,$=Math.sin(H),B=Math.cos(H);E.x=L*$,E.y=-S*i+v,E.z=L*B,f.push(E.x,E.y,E.z),x.set($,R,B).normalize(),d.push(x.x,x.y,x.z),h.push(O,1-S),M.push(m++)}g.push(M)}for(let A=0;A<r;A++)for(let M=0;M<s;M++){const S=g[M][A],L=g[M+1][A],N=g[M+1][A+1],O=g[M][A+1];(t>0||M!==0)&&(c.push(S,L,O),w+=3),(e>0||M!==s-1)&&(c.push(L,N,O),w+=3)}u.addGroup(_,w,0),_+=w}function p(x){const E=m,w=new Lt,R=new k;let A=0;const M=x===!0?t:e,S=x===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,v*S,0),d.push(0,S,0),h.push(.5,.5),m++;const L=m;for(let N=0;N<=r;N++){const H=N/r*l+a,$=Math.cos(H),B=Math.sin(H);R.x=M*B,R.y=v*S,R.z=M*$,f.push(R.x,R.y,R.z),d.push(0,S,0),w.x=$*.5+.5,w.y=B*.5*S+.5,h.push(w.x,w.y),m++}for(let N=0;N<r;N++){const O=E+N,H=L+N;x===!0?c.push(H,H+1,O):c.push(H+1,H,O),A+=3}u.addGroup(_,A,x===!0?1:2),_+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yd extends hn{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(s.slice(),3)),this.setAttribute("uv",new Me(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const p=new k,x=new k,E=new k;for(let w=0;w<e.length;w+=3)h(e[w+0],p),h(e[w+1],x),h(e[w+2],E),l(p,x,E,y)}function l(y,p,x,E){const w=E+1,R=[];for(let A=0;A<=w;A++){R[A]=[];const M=y.clone().lerp(x,A/w),S=p.clone().lerp(x,A/w),L=w-A;for(let N=0;N<=L;N++)N===0&&A===w?R[A][N]=M:R[A][N]=M.clone().lerp(S,N/L)}for(let A=0;A<w;A++)for(let M=0;M<2*(w-A)-1;M++){const S=Math.floor(M/2);M%2===0?(d(R[A][S+1]),d(R[A+1][S]),d(R[A][S])):(d(R[A][S+1]),d(R[A+1][S+1]),d(R[A+1][S]))}}function u(y){const p=new k;for(let x=0;x<s.length;x+=3)p.x=s[x+0],p.y=s[x+1],p.z=s[x+2],p.normalize().multiplyScalar(y),s[x+0]=p.x,s[x+1]=p.y,s[x+2]=p.z}function c(){const y=new k;for(let p=0;p<s.length;p+=3){y.x=s[p+0],y.y=s[p+1],y.z=s[p+2];const x=v(y)/2/Math.PI+.5,E=_(y)/Math.PI+.5;o.push(x,1-E)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){const p=o[y+0],x=o[y+2],E=o[y+4],w=Math.max(p,x,E),R=Math.min(p,x,E);w>.9&&R<.1&&(p<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,p){const x=y*3;p.x=t[x+0],p.y=t[x+1],p.z=t[x+2]}function m(){const y=new k,p=new k,x=new k,E=new k,w=new Lt,R=new Lt,A=new Lt;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),p.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),E.copy(y).add(p).add(x).divideScalar(3);const L=v(E);g(w,S+0,y,L),g(R,S+2,p,L),g(A,S+4,x,L)}}function g(y,p,x,E){E<0&&y.x===1&&(o[p]=y.x-1),x.x===0&&x.z===0&&(o[p]=E/2/Math.PI+.5)}function v(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yd(t.vertices,t.indices,t.radius,t.details)}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,h=(o-c)/d;return(r+h)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Lt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new k,r=[],s=[],o=[],a=new k,l=new pe;for(let h=0;h<=t;h++){const m=h/t;r[h]=this.getTangentAt(m,new k)}s[0]=new k,o[0]=new k;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Yt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(e===!0){let h=Math.acos(Yt(s[0].dot(s[t]),-1,1));h/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sd extends wi{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Lt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=u-this.aY;l=d*c-h*f+this.aX,u=d*f+h*c+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lw extends Sd{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Md(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,h=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,h*=c,r(o,a,d,h)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const pl=new k,wu=new Md,Au=new Md,Ru=new Md;class Dw extends wi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new k){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(pl.subVectors(r[0],r[1]).add(r[0]),u=pl);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(pl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=pl),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(c),h);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),wu.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,m,g,v),Au.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,m,g,v),Ru.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,m,g,v)}else this.curveType==="catmullrom"&&(wu.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),Au.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),Ru.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return i.set(wu.calc(l),Au.calc(l),Ru.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new k().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xm(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function Iw(n,t){const e=1-n;return e*e*t}function Uw(n,t){return 2*(1-n)*n*t}function Nw(n,t){return n*n*t}function Ko(n,t,e,i){return Iw(n,t)+Uw(n,e)+Nw(n,i)}function Ow(n,t){const e=1-n;return e*e*e*t}function Fw(n,t){const e=1-n;return 3*e*e*n*t}function Bw(n,t){return 3*(1-n)*n*n*t}function kw(n,t){return n*n*n*t}function Jo(n,t,e,i,r){return Ow(n,t)+Fw(n,e)+Bw(n,i)+kw(n,r)}class V0 extends wi{constructor(t=new Lt,e=new Lt,i=new Lt,r=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Lt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Jo(t,r.x,s.x,o.x,a.x),Jo(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zw extends wi{constructor(t=new k,e=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new k){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Jo(t,r.x,s.x,o.x,a.x),Jo(t,r.y,s.y,o.y,a.y),Jo(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class G0 extends wi{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hw extends wi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W0 extends wi{constructor(t=new Lt,e=new Lt,i=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Lt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Ko(t,r.x,s.x,o.x),Ko(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vw extends wi{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Ko(t,r.x,s.x,o.x),Ko(t,r.y,s.y,o.y),Ko(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X0 extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(xm(a,l.x,u.x,c.x,f.x),xm(a,l.y,u.y,c.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Lt().fromArray(r))}return this}}var ym=Object.freeze({__proto__:null,ArcCurve:Lw,CatmullRomCurve3:Dw,CubicBezierCurve:V0,CubicBezierCurve3:zw,EllipseCurve:Sd,LineCurve:G0,LineCurve3:Hw,QuadraticBezierCurve:W0,QuadraticBezierCurve3:Vw,SplineCurve:X0});class Gw extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ym[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new ym[r.type]().fromJSON(r))}return this}}class Sm extends Gw{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new G0(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new W0(this.currentPoint.clone(),new Lt(t,e),new Lt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new V0(this.currentPoint.clone(),new Lt(t,e),new Lt(i,r),new Lt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new X0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+u,e+c,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const u=new Sd(t,e,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class q0 extends Sm{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Sm().fromJSON(r))}return this}}function Ww(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=j0(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=Yw(n,t,s,e)),n.length>80*e){a=1/0,l=1/0;let c=-1/0,f=-1/0;for(let d=e;d<r;d+=e){const h=n[d],m=n[d+1];h<a&&(a=h),m<l&&(l=m),h>c&&(c=h),m>f&&(f=m)}u=Math.max(c-a,f-l),u=u!==0?32767/u:0}return ma(s,o,e,a,l,u,0),o}function j0(n,t,e,i,r){let s;if(r===o1(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=Mm(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=Mm(o/i|0,n[o],n[o+1],s);return s&&uo(s,s.next)&&(ga(s),s=s.next),s}function as(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(uo(e,e.next)||Ae(e.prev,e,e.next)===0)){if(ga(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ma(n,t,e,i,r,s,o){if(!n)return;!o&&s&&t1(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,u=n.next;if(s?qw(n,i,r,s):Xw(n)){t.push(l.i,n.i,u.i),ga(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=jw(as(n),t),ma(n,t,e,i,r,s,2)):o===2&&$w(n,t,e,i,r,s):ma(as(n),t,e,i,r,s,1);break}}}function Xw(n){const t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,u=i.y,c=Math.min(r,s,o),f=Math.min(a,l,u),d=Math.max(r,s,o),h=Math.max(a,l,u);let m=i.next;for(;m!==t;){if(m.x>=c&&m.x<=d&&m.y>=f&&m.y<=h&&zo(r,a,s,l,o,u,m.x,m.y)&&Ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qw(n,t,e,i){const r=n.prev,s=n,o=n.next;if(Ae(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,d=o.y,h=Math.min(a,l,u),m=Math.min(c,f,d),g=Math.max(a,l,u),v=Math.max(c,f,d),_=oh(h,m,t,e,i),y=oh(g,v,t,e,i);let p=n.prevZ,x=n.nextZ;for(;p&&p.z>=_&&x&&x.z<=y;){if(p.x>=h&&p.x<=g&&p.y>=m&&p.y<=v&&p!==r&&p!==o&&zo(a,c,l,f,u,d,p.x,p.y)&&Ae(p.prev,p,p.next)>=0||(p=p.prevZ,x.x>=h&&x.x<=g&&x.y>=m&&x.y<=v&&x!==r&&x!==o&&zo(a,c,l,f,u,d,x.x,x.y)&&Ae(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;p&&p.z>=_;){if(p.x>=h&&p.x<=g&&p.y>=m&&p.y<=v&&p!==r&&p!==o&&zo(a,c,l,f,u,d,p.x,p.y)&&Ae(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;x&&x.z<=y;){if(x.x>=h&&x.x<=g&&x.y>=m&&x.y<=v&&x!==r&&x!==o&&zo(a,c,l,f,u,d,x.x,x.y)&&Ae(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jw(n,t){let e=n;do{const i=e.prev,r=e.next.next;!uo(i,r)&&Y0(i,e,e.next,r)&&_a(i,r)&&_a(r,i)&&(t.push(i.i,e.i,r.i),ga(e),ga(e.next),e=n=r),e=e.next}while(e!==n);return as(e)}function $w(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&i1(o,a)){let l=K0(o,a);o=as(o,o.next),l=as(l,l.next),ma(o,t,e,i,r,s,0),ma(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Yw(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,u=j0(n,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(n1(u))}r.sort(Kw);for(let s=0;s<r.length;s++)e=Jw(r[s],e);return e}function Kw(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function Jw(n,t){const e=Zw(n,t);if(!e)return t;const i=K0(e,n);return as(i,i.next),as(e,e.next)}function Zw(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(uo(n,e))return e;do{if(uo(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,u=o.y;let c=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&$0(r<u?i:s,r,l,u,r<u?s:i,r,e.x,e.y)){const f=Math.abs(r-e.y)/(i-e.x);_a(e,n)&&(f<c||f===c&&(e.x>o.x||e.x===o.x&&Qw(o,e)))&&(o=e,c=f)}e=e.next}while(e!==a);return o}function Qw(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function t1(n,t,e,i){let r=n;do r.z===0&&(r.z=oh(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,e1(r)}function e1(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let u=0;u<e&&(a++,o=o.nextZ,!!o);u++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function oh(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function n1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function $0(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function zo(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&$0(n,t,e,i,r,s,o,a)}function i1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!r1(n,t)&&(_a(n,t)&&_a(t,n)&&s1(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||uo(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function uo(n,t){return n.x===t.x&&n.y===t.y}function Y0(n,t,e,i){const r=_l(Ae(n,t,e)),s=_l(Ae(n,t,i)),o=_l(Ae(e,i,n)),a=_l(Ae(e,i,t));return!!(r!==s&&o!==a||r===0&&ml(n,e,t)||s===0&&ml(n,i,t)||o===0&&ml(e,n,i)||a===0&&ml(e,t,i))}function ml(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function _l(n){return n>0?1:n<0?-1:0}function r1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Y0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _a(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function s1(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function K0(n,t){const e=ah(n.i,n.x,n.y),i=ah(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Mm(n,t,e,i){const r=ah(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ga(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ah(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function o1(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class a1{static triangulate(t,e,i=2){return Ww(t,e,i)}}class Zo{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Zo.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];bm(t),Em(i,t);let o=t.length;e.forEach(bm);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Em(i,e[l]);const a=a1.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function bm(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Em(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class bd extends yd{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bd(t.radius,t.detail)}}class Jr extends hn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,d=e/l,h=[],m=[],g=[],v=[];for(let _=0;_<c;_++){const y=_*d-o;for(let p=0;p<u;p++){const x=p*f-s;m.push(x,-y,0),g.push(0,0,1),v.push(p/a),v.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const p=y+u*_,x=y+u*(_+1),E=y+1+u*(_+1),w=y+1+u*_;h.push(p,x,w),h.push(x,E,w)}this.setIndex(h),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ed extends hn{constructor(t=new q0([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(o,2));function u(c){const f=r.length/3,d=c.extractPoints(e);let h=d.shape;const m=d.holes;Zo.isClockWise(h)===!1&&(h=h.reverse());for(let v=0,_=m.length;v<_;v++){const y=m[v];Zo.isClockWise(y)===!0&&(m[v]=y.reverse())}const g=Zo.triangulateShape(h,m);for(let v=0,_=m.length;v<_;v++){const y=m[v];h=h.concat(y)}for(let v=0,_=h.length;v<_;v++){const y=h[v];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let v=0,_=g.length;v<_;v++){const y=g[v],p=y[0]+f,x=y[1]+f,E=y[2]+f;i.push(p,x,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return l1(e,t)}static fromJSON(t,e){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];i.push(o)}return new Ed(i,t.curveSegments)}}function l1(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}class Lc extends hn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new k,d=new k,h=[],m=[],g=[],v=[];for(let _=0;_<=i;_++){const y=[],p=_/i;let x=0;_===0&&o===0?x=.5/e:_===i&&l===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){const w=E/e;f.x=-t*Math.cos(r+w*s)*Math.sin(o+p*a),f.y=t*Math.cos(o+p*a),f.z=t*Math.sin(r+w*s)*Math.sin(o+p*a),m.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),v.push(w+x,1-p),y.push(u++)}c.push(y)}for(let _=0;_<i;_++)for(let y=0;y<e;y++){const p=c[_][y+1],x=c[_][y],E=c[_+1][y],w=c[_+1][y+1];(_!==0||o>0)&&h.push(p,x,w),(_!==i-1||l<Math.PI)&&h.push(x,E,w)}this.setIndex(h),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pi extends Mo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=P0,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class c1 extends Mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ET,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class u1 extends Mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class J0 extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class f1 extends J0{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Cu=new pe,Tm=new k,wm=new k;class h1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vd,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Tm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tm),wm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wm),e.updateMatrixWorld(),Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Z0 extends B0{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class d1 extends h1{constructor(){super(new Z0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p1 extends J0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new d1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class m1 extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Am=new pe;class _1{constructor(t,e,i=0,r=1/0){this.ray=new pd(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new md,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Am.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Am),this}intersectObject(t,e=!0,i=[]){return lh(t,this,i,e),i.sort(Rm),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)lh(t[r],this,i,e);return i.sort(Rm),i}}function Rm(n,t){return n.distance-t.distance}function lh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)lh(s[o],t,e,!0)}}function Cm(n,t,e,i){const r=g1(i);switch(e){case w0:return n*t;case ld:return n*t/r.components*r.byteLength;case cd:return n*t/r.components*r.byteLength;case R0:return n*t*2/r.components*r.byteLength;case ud:return n*t*2/r.components*r.byteLength;case A0:return n*t*3/r.components*r.byteLength;case ri:return n*t*4/r.components*r.byteLength;case fd:return n*t*4/r.components*r.byteLength;case Tl:case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Al:case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uf:case Of:return Math.max(n,16)*Math.max(t,8)/4;case If:case Nf:return Math.max(n,8)*Math.max(t,8)/2;case Ff:case Bf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hf:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vf:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gf:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Wf:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Xf:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case qf:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case jf:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case $f:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Yf:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Kf:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Jf:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Zf:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Qf:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Cl:case th:case eh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case C0:case nh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ih:case rh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g1(n){switch(n){case Mi:case b0:return{byteLength:1,components:1};case ua:case E0:case La:return{byteLength:2,components:1};case od:case ad:return{byteLength:2,components:4};case ss:case sd:case xi:return{byteLength:4,components:1};case T0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);function Q0(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function v1(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<f.length;h++){const m=f[d],g=f[h];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,f[d]=g)}f.length=d+1;for(let h=0,m=f.length;h<m;h++){const g=f[h];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,R1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,D1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",K1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_A=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ER=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$R=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:x1,alphahash_pars_fragment:y1,alphamap_fragment:S1,alphamap_pars_fragment:M1,alphatest_fragment:b1,alphatest_pars_fragment:E1,aomap_fragment:T1,aomap_pars_fragment:w1,batching_pars_vertex:A1,batching_vertex:R1,begin_vertex:C1,beginnormal_vertex:P1,bsdfs:L1,iridescence_fragment:D1,bumpmap_pars_fragment:I1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:F1,color_fragment:B1,color_pars_fragment:k1,color_pars_vertex:z1,color_vertex:H1,common:V1,cube_uv_reflection_fragment:G1,defaultnormal_vertex:W1,displacementmap_pars_vertex:X1,displacementmap_vertex:q1,emissivemap_fragment:j1,emissivemap_pars_fragment:$1,colorspace_fragment:Y1,colorspace_pars_fragment:K1,envmap_fragment:J1,envmap_common_pars_fragment:Z1,envmap_pars_fragment:Q1,envmap_pars_vertex:tA,envmap_physical_pars_fragment:fA,envmap_vertex:eA,fog_vertex:nA,fog_pars_vertex:iA,fog_fragment:rA,fog_pars_fragment:sA,gradientmap_pars_fragment:oA,lightmap_pars_fragment:aA,lights_lambert_fragment:lA,lights_lambert_pars_fragment:cA,lights_pars_begin:uA,lights_toon_fragment:hA,lights_toon_pars_fragment:dA,lights_phong_fragment:pA,lights_phong_pars_fragment:mA,lights_physical_fragment:_A,lights_physical_pars_fragment:gA,lights_fragment_begin:vA,lights_fragment_maps:xA,lights_fragment_end:yA,logdepthbuf_fragment:SA,logdepthbuf_pars_fragment:MA,logdepthbuf_pars_vertex:bA,logdepthbuf_vertex:EA,map_fragment:TA,map_pars_fragment:wA,map_particle_fragment:AA,map_particle_pars_fragment:RA,metalnessmap_fragment:CA,metalnessmap_pars_fragment:PA,morphinstance_vertex:LA,morphcolor_vertex:DA,morphnormal_vertex:IA,morphtarget_pars_vertex:UA,morphtarget_vertex:NA,normal_fragment_begin:OA,normal_fragment_maps:FA,normal_pars_fragment:BA,normal_pars_vertex:kA,normal_vertex:zA,normalmap_pars_fragment:HA,clearcoat_normal_fragment_begin:VA,clearcoat_normal_fragment_maps:GA,clearcoat_pars_fragment:WA,iridescence_pars_fragment:XA,opaque_fragment:qA,packing:jA,premultiplied_alpha_fragment:$A,project_vertex:YA,dithering_fragment:KA,dithering_pars_fragment:JA,roughnessmap_fragment:ZA,roughnessmap_pars_fragment:QA,shadowmap_pars_fragment:tR,shadowmap_pars_vertex:eR,shadowmap_vertex:nR,shadowmask_pars_fragment:iR,skinbase_vertex:rR,skinning_pars_vertex:sR,skinning_vertex:oR,skinnormal_vertex:aR,specularmap_fragment:lR,specularmap_pars_fragment:cR,tonemapping_fragment:uR,tonemapping_pars_fragment:fR,transmission_fragment:hR,transmission_pars_fragment:dR,uv_pars_fragment:pR,uv_pars_vertex:mR,uv_vertex:_R,worldpos_vertex:gR,background_vert:vR,background_frag:xR,backgroundCube_vert:yR,backgroundCube_frag:SR,cube_vert:MR,cube_frag:bR,depth_vert:ER,depth_frag:TR,distanceRGBA_vert:wR,distanceRGBA_frag:AR,equirect_vert:RR,equirect_frag:CR,linedashed_vert:PR,linedashed_frag:LR,meshbasic_vert:DR,meshbasic_frag:IR,meshlambert_vert:UR,meshlambert_frag:NR,meshmatcap_vert:OR,meshmatcap_frag:FR,meshnormal_vert:BR,meshnormal_frag:kR,meshphong_vert:zR,meshphong_frag:HR,meshphysical_vert:VR,meshphysical_frag:GR,meshtoon_vert:WR,meshtoon_frag:XR,points_vert:qR,points_frag:jR,shadow_vert:$R,shadow_frag:YR,sprite_vert:KR,sprite_frag:JR},wt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},mi={basic:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:rn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:rn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:rn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:rn([wt.points,wt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:rn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:rn([wt.common,wt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:rn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:rn([wt.sprite,wt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:rn([wt.common,wt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:rn([wt.lights,wt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};mi.physical={uniforms:rn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const gl={r:0,b:0,g:0},Cr=new bi,ZR=new pe;function QR(n,t,e,i,r,s,o){const a=new Jt(0);let l=s===!0?0:1,u,c,f=null,d=0,h=null;function m(p){let x=p.isScene===!0?p.background:null;return x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x}function g(p){let x=!1;const E=m(p);E===null?_(a,l):E&&E.isColor&&(_(E,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(p,x){const E=m(x);E&&(E.isCubeTexture||E.mapping===Pc)?(c===void 0&&(c=new Ve(new Ia(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:co(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Cr.copy(x.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ZR.makeRotationFromEuler(Cr)),c.material.toneMapped=ie.getTransfer(E.colorSpace)!==de,(f!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Ve(new Jr(2,2),new Ei({name:"BackgroundMaterial",uniforms:co(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=ie.getTransfer(E.colorSpace)!==de,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function _(p,x){p.getRGB(gl,F0(n)),i.buffers.color.setClear(gl.r,gl.g,gl.b,x,o)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,x=1){a.set(p),l=x,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g,addToRenderList:v,dispose:y}}function tC(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,L,N,O,H){let $=!1;const B=f(O,N,L);s!==B&&(s=B,u(s.object)),$=h(S,O,N,H),$&&m(S,O,N,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(S,L,N,O),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,L,N){const O=N.wireframe===!0;let H=i[S.id];H===void 0&&(H={},i[S.id]=H);let $=H[L.id];$===void 0&&($={},H[L.id]=$);let B=$[O];return B===void 0&&(B=d(l()),$[O]=B),B}function d(S){const L=[],N=[],O=[];for(let H=0;H<e;H++)L[H]=0,N[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:O,object:S,attributes:{},index:null}}function h(S,L,N,O){const H=s.attributes,$=L.attributes;let B=0;const X=N.getAttributes();for(const z in X)if(X[z].location>=0){const pt=H[z];let ft=$[z];if(ft===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),pt===void 0||pt.attribute!==ft||ft&&pt.data!==ft.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function m(S,L,N,O){const H={},$=L.attributes;let B=0;const X=N.getAttributes();for(const z in X)if(X[z].location>=0){let pt=$[z];pt===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));const ft={};ft.attribute=pt,pt&&pt.data&&(ft.data=pt.data),H[z]=ft,B++}s.attributes=H,s.attributesNum=B,s.index=O}function g(){const S=s.newAttributes;for(let L=0,N=S.length;L<N;L++)S[L]=0}function v(S){_(S,0)}function _(S,L){const N=s.newAttributes,O=s.enabledAttributes,H=s.attributeDivisors;N[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),H[S]!==L&&(n.vertexAttribDivisor(S,L),H[S]=L)}function y(){const S=s.newAttributes,L=s.enabledAttributes;for(let N=0,O=L.length;N<O;N++)L[N]!==S[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function p(S,L,N,O,H,$,B){B===!0?n.vertexAttribIPointer(S,L,N,H,$):n.vertexAttribPointer(S,L,N,O,H,$)}function x(S,L,N,O){g();const H=O.attributes,$=N.getAttributes(),B=L.defaultAttributeValues;for(const X in $){const z=$[X];if(z.location>=0){let ht=H[X];if(ht===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ht!==void 0){const pt=ht.normalized,ft=ht.itemSize,St=t.get(ht);if(St===void 0)continue;const Xt=St.buffer,rt=St.type,_t=St.bytesPerElement,Dt=rt===n.INT||rt===n.UNSIGNED_INT||ht.gpuType===sd;if(ht.isInterleavedBufferAttribute){const Mt=ht.data,Ut=Mt.stride,Kt=ht.offset;if(Mt.isInstancedInterleavedBuffer){for(let It=0;It<z.locationSize;It++)_(z.location+It,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let It=0;It<z.locationSize;It++)v(z.location+It);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let It=0;It<z.locationSize;It++)p(z.location+It,ft/z.locationSize,rt,pt,Ut*_t,(Kt+ft/z.locationSize*It)*_t,Dt)}else{if(ht.isInstancedBufferAttribute){for(let Mt=0;Mt<z.locationSize;Mt++)_(z.location+Mt,ht.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Mt=0;Mt<z.locationSize;Mt++)v(z.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let Mt=0;Mt<z.locationSize;Mt++)p(z.location+Mt,ft/z.locationSize,rt,pt,ft*_t,ft/z.locationSize*Mt*_t,Dt)}}else if(B!==void 0){const pt=B[X];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(z.location,pt);break;case 3:n.vertexAttrib3fv(z.location,pt);break;case 4:n.vertexAttrib4fv(z.location,pt);break;default:n.vertexAttrib1fv(z.location,pt)}}}}y()}function E(){A();for(const S in i){const L=i[S];for(const N in L){const O=L[N];for(const H in O)c(O[H].object),delete O[H];delete L[N]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const N in L){const O=L[N];for(const H in O)c(O[H].object),delete O[H];delete L[N]}delete i[S.id]}function R(S){for(const L in i){const N=i[L];if(N[S.id]===void 0)continue;const O=N[S.id];for(const H in O)c(O[H].object),delete O[H];delete N[S.id]}}function A(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:v,disableUnusedAttributes:y}}function eC(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function a(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let m=0;m<f;m++)h+=c[m];e.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u.length;m++)o(u[m],c[m],d[m]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g]*d[g];e.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nC(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===La&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Mi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!A)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:y,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:E,maxSamples:w}}function iC(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Nr,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=c(f,d,0)},this.setState=function(f,d,h){const m=f.clippingPlanes,g=f.clipIntersection,v=f.clipShadows,_=n.get(f);if(!r||m===null||m.length===0||s&&!v)s?c(null):u();else{const y=s?0:i,p=y*4;let x=_.clippingState||null;l.value=x,x=c(m,d,p,h);for(let E=0;E!==p;++E)x[E]=e[E];_.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,d,h,m){const g=f!==null?f.length:0;let v=null;if(g!==0){if(v=l.value,m!==!0||v===null){const _=h+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(v===null||v.length<_)&&(v=new Float32Array(_));for(let p=0,x=h;p!==g;++p,x+=4)o.copy(f[p]).applyMatrix4(y,a),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,v}}function rC(n){let t=new WeakMap;function e(o,a){return a===Cf?o.mapping=oo:a===Pf&&(o.mapping=ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cf||a===Pf)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new bw(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Hs=4,Pm=[.125,.215,.35,.446,.526,.582],Hr=20,Pu=new Z0,Lm=new Jt;let Lu=null,Du=0,Iu=0,Uu=!1;const Or=(1+Math.sqrt(5))/2,Is=1/Or,Dm=[new k(-Or,Is,0),new k(Or,Is,0),new k(-Is,0,Or),new k(Is,0,Or),new k(0,Or,-Is),new k(0,Or,Is),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],sC=new k;class Im{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=sC}=s;Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lu,Du,Iu),this._renderer.xr.enabled=Uu,t.scissorTest=!1,vl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oo||t.mapping===ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:La,format:ri,colorSpace:lo,depthBuffer:!1},r=Um(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oC(s)),this._blurMaterial=aC(s,t,e)}return r}_compileMaterial(t){const e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,Pu)}_sceneToCubeUV(t,e,i,r,s){const l=new qn(90,1,e,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Lm),f.toneMapping=ur,f.autoClear=!1;const m=new _d({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Ve(new Ia,m);let v=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,v=!0):(m.color.copy(Lm),v=!0);for(let y=0;y<6;y++){const p=y%3;p===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[y],s.y,s.z)):p===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[y]));const x=this._cubeSize;vl(r,p*x,y>2?x:0,x,x),f.setRenderTarget(r),v&&f.render(g,l),f.render(t,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===oo||t.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;vl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Pu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dm[(r-s-1)%Dm.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ve(this._lodPlanes[r],u),d=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Hr-1),g=s/m,v=isFinite(s)?1+Math.floor(c*g):Hr;v>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Hr}`);const _=[];let y=0;for(let R=0;R<Hr;++R){const A=R/g,M=Math.exp(-A*A/2);_.push(M),R===0?y+=M:R<v&&(y+=2*M)}for(let R=0;R<_.length;R++)_[R]=_[R]/y;d.envMap.value=t.texture,d.samples.value=v,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:p}=this;d.dTheta.value=m,d.mipInt.value=p-i;const x=this._sizeLods[r],E=3*x*(r>p-Hs?r-p+Hs:0),w=4*(this._cubeSize-x);vl(e,E,w,3*x,2*x),l.setRenderTarget(e),l.render(f,Pu)}}function oC(n){const t=[],e=[],i=[];let r=n;const s=n-Hs+1+Pm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Hs?l=Pm[o-n+Hs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,m=6,g=3,v=2,_=1,y=new Float32Array(g*m*h),p=new Float32Array(v*m*h),x=new Float32Array(_*m*h);for(let w=0;w<h;w++){const R=w%3*2/3-1,A=w>2?0:-1,M=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];y.set(M,g*m*w),p.set(d,v*m*w);const S=[w,w,w,w,w,w];x.set(S,_*m*w)}const E=new hn;E.setAttribute("position",new Yn(y,g)),E.setAttribute("uv",new Yn(p,v)),E.setAttribute("faceIndex",new Yn(x,_)),t.push(E),r>Hs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Um(n,t,e){const i=new os(n,t,e);return i.texture.mapping=Pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vl(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function aC(n,t,e){const i=new Float32Array(Hr),r=new k(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Nm(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Om(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lC(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Cf||l===Pf,c=l===oo||l===ao;if(u||c){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Im(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return u&&h&&h.height>0||c&&h&&r(h)?(e===null&&(e=new Im(n)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function cC(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Zs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uC(n,t,e,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(t.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)t.update(d[h],n.ARRAY_BUFFER)}function u(f){const d=[],h=f.index,m=f.attributes.position;let g=0;if(h!==null){const y=h.array;g=h.version;for(let p=0,x=y.length;p<x;p+=3){const E=y[p+0],w=y[p+1],R=y[p+2];d.push(E,w,w,R,R,E)}}else if(m!==void 0){const y=m.array;g=m.version;for(let p=0,x=y.length/3-1;p<x;p+=3){const E=p+0,w=p+1,R=p+2;d.push(E,w,w,R,R,E)}}else return;const v=new(D0(d)?O0:N0)(d,1);v.version=g;const _=s.get(f);_&&t.remove(_),s.set(f,v)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function fC(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),e.update(h,i,1)}function u(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,d*o,m),e.update(h,i,m))}function c(d,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,m);let v=0;for(let _=0;_<m;_++)v+=h[_];e.update(v,i,1)}function f(d,h,m,g){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<d.length;_++)u(d[_]/o,h[_],g[_]);else{v.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,g,0,m);let _=0;for(let y=0;y<m;y++)_+=h[y]*g[y];e.update(_,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function hC(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function dC(n,t,e){const i=new WeakMap,r=new Pe;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let p=0;h===!0&&(p=1),m===!0&&(p=2),g===!0&&(p=3);let x=a.attributes.position.count*p,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*E*4*f),R=new I0(w,x,E,f);R.type=xi,R.needsUpdate=!0;const A=p*4;for(let S=0;S<f;S++){const L=v[S],N=_[S],O=y[S],H=x*E*4*S;for(let $=0;$<L.count;$++){const B=$*A;h===!0&&(r.fromBufferAttribute(L,$),w[H+B+0]=r.x,w[H+B+1]=r.y,w[H+B+2]=r.z,w[H+B+3]=0),m===!0&&(r.fromBufferAttribute(N,$),w[H+B+4]=r.x,w[H+B+5]=r.y,w[H+B+6]=r.z,w[H+B+7]=0),g===!0&&(r.fromBufferAttribute(O,$),w[H+B+8]=r.x,w[H+B+9]=r.y,w[H+B+10]=r.z,w[H+B+11]=O.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Lt(x,E)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let h=0;for(let g=0;g<u.length;g++)h+=u[g];const m=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function pC(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const tv=new un,Fm=new H0(1,1),ev=new I0,nv=new ow,iv=new k0,Bm=[],km=[],zm=new Float32Array(16),Hm=new Float32Array(9),Vm=new Float32Array(4);function bo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Bm[r];if(s===void 0&&(s=new Float32Array(r),Bm[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dc(n,t){let e=km[t];e===void 0&&(e=new Int32Array(t),km[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mC(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _C(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function gC(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function vC(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function xC(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;Vm.set(i),n.uniformMatrix2fv(this.addr,!1,Vm),ze(e,i)}}function yC(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;Hm.set(i),n.uniformMatrix3fv(this.addr,!1,Hm),ze(e,i)}}function SC(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;zm.set(i),n.uniformMatrix4fv(this.addr,!1,zm),ze(e,i)}}function MC(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function bC(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function EC(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function TC(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function wC(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function AC(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function RC(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function CC(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function PC(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fm.compareFunction=L0,s=Fm):s=tv,e.setTexture2D(t||s,r)}function LC(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||nv,r)}function DC(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||iv,r)}function IC(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ev,r)}function UC(n){switch(n){case 5126:return mC;case 35664:return _C;case 35665:return gC;case 35666:return vC;case 35674:return xC;case 35675:return yC;case 35676:return SC;case 5124:case 35670:return MC;case 35667:case 35671:return bC;case 35668:case 35672:return EC;case 35669:case 35673:return TC;case 5125:return wC;case 36294:return AC;case 36295:return RC;case 36296:return CC;case 35678:case 36198:case 36298:case 36306:case 35682:return PC;case 35679:case 36299:case 36307:return LC;case 35680:case 36300:case 36308:case 36293:return DC;case 36289:case 36303:case 36311:case 36292:return IC}}function NC(n,t){n.uniform1fv(this.addr,t)}function OC(n,t){const e=bo(t,this.size,2);n.uniform2fv(this.addr,e)}function FC(n,t){const e=bo(t,this.size,3);n.uniform3fv(this.addr,e)}function BC(n,t){const e=bo(t,this.size,4);n.uniform4fv(this.addr,e)}function kC(n,t){const e=bo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zC(n,t){const e=bo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function HC(n,t){const e=bo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function VC(n,t){n.uniform1iv(this.addr,t)}function GC(n,t){n.uniform2iv(this.addr,t)}function WC(n,t){n.uniform3iv(this.addr,t)}function XC(n,t){n.uniform4iv(this.addr,t)}function qC(n,t){n.uniform1uiv(this.addr,t)}function jC(n,t){n.uniform2uiv(this.addr,t)}function $C(n,t){n.uniform3uiv(this.addr,t)}function YC(n,t){n.uniform4uiv(this.addr,t)}function KC(n,t,e){const i=this.cache,r=t.length,s=Dc(e,r);ke(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||tv,s[o])}function JC(n,t,e){const i=this.cache,r=t.length,s=Dc(e,r);ke(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||nv,s[o])}function ZC(n,t,e){const i=this.cache,r=t.length,s=Dc(e,r);ke(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||iv,s[o])}function QC(n,t,e){const i=this.cache,r=t.length,s=Dc(e,r);ke(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ev,s[o])}function tP(n){switch(n){case 5126:return NC;case 35664:return OC;case 35665:return FC;case 35666:return BC;case 35674:return kC;case 35675:return zC;case 35676:return HC;case 5124:case 35670:return VC;case 35667:case 35671:return GC;case 35668:case 35672:return WC;case 35669:case 35673:return XC;case 5125:return qC;case 36294:return jC;case 36295:return $C;case 36296:return YC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return JC;case 35680:case 36300:case 36308:case 36293:return ZC;case 36289:case 36303:case 36311:case 36292:return QC}}class eP{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=UC(e.type)}}class nP{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tP(e.type)}}class iP{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Nu=/(\w+)(\])?(\[|\.)?/g;function Gm(n,t){n.seq.push(t),n.map[t.id]=t}function rP(n,t,e){const i=n.name,r=i.length;for(Nu.lastIndex=0;;){const s=Nu.exec(i),o=Nu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Gm(e,u===void 0?new eP(a,n,t):new nP(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new iP(a),Gm(e,f)),e=f}}}class Pl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);rP(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Wm(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sP=37297;let oP=0;function aP(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Xm=new qt;function lP(n){ie._getMatrix(Xm,ie.workingColorSpace,n);const t=`mat3( ${Xm.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Zl:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function qm(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+aP(n.getShaderSource(t),o)}else return r}function cP(n,t){const e=lP(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function uP(n,t){let e;switch(t){case gT:e="Linear";break;case vT:e="Reinhard";break;case xT:e="Cineon";break;case S0:e="ACESFilmic";break;case ST:e="AgX";break;case MT:e="Neutral";break;case yT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xl=new k;function fP(){ie.getLuminanceCoefficients(xl);const n=xl.x.toFixed(4),t=xl.y.toFixed(4),e=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function dP(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pP(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ho(n){return n!==""}function jm(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $m(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mP=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(n){return n.replace(mP,gP)}const _P=new Map;function gP(n,t){let e=jt[t];if(e===void 0){const i=_P.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ch(e)}const vP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(n){return n.replace(vP,xP)}function xP(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yP(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===x0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===KE?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function SP(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case oo:case ao:t="ENVMAP_TYPE_CUBE";break;case Pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function MP(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ao&&(t="ENVMAP_MODE_REFRACTION"),t}function bP(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case y0:t="ENVMAP_BLENDING_MULTIPLY";break;case mT:t="ENVMAP_BLENDING_MIX";break;case _T:t="ENVMAP_BLENDING_ADD";break}return t}function EP(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function TP(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=yP(e),u=SP(e),c=MP(e),f=bP(e),d=EP(e),h=hP(e),m=dP(s),g=r.createProgram();let v,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ho).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ho).join(`
`),_.length>0&&(_+=`
`)):(v=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),_=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ur?"#define TONE_MAPPING":"",e.toneMapping!==ur?jt.tonemapping_pars_fragment:"",e.toneMapping!==ur?uP("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,cP("linearToOutputTexel",e.outputColorSpace),fP(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),o=ch(o),o=jm(o,e),o=$m(o,e),a=ch(a),a=jm(a,e),a=$m(a,e),o=Ym(o),a=Ym(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const p=y+v+o,x=y+_+a,E=Wm(r,r.VERTEX_SHADER,p),w=Wm(r,r.FRAGMENT_SHADER,x);r.attachShader(g,E),r.attachShader(g,w),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(E).trim(),H=r.getShaderInfoLog(w).trim();let $=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,w);else{const X=qm(r,E,"vertex"),z=qm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+X+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||H==="")&&(B=!1);B&&(L.diagnostics={runnable:$,programLog:N,vertexShader:{log:O,prefix:v},fragmentShader:{log:H,prefix:_}})}r.deleteShader(E),r.deleteShader(w),A=new Pl(r,g),M=pP(r,g)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,sP)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=oP++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let wP=0;class AP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new RP(t),e.set(t,i)),i}}class RP{constructor(t){this.id=wP++,this.code=t,this.usedTimes=0}}function CP(n,t,e,i,r,s,o){const a=new md,l=new AP,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function v(M,S,L,N,O){const H=N.fog,$=O.geometry,B=M.isMeshStandardMaterial?N.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),z=X&&X.mapping===Pc?X.image.height:null,ht=m[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ft=pt!==void 0?pt.length:0;let St=0;$.morphAttributes.position!==void 0&&(St=1),$.morphAttributes.normal!==void 0&&(St=2),$.morphAttributes.color!==void 0&&(St=3);let Xt,rt,_t,Dt;if(ht){const se=mi[ht];Xt=se.vertexShader,rt=se.fragmentShader}else Xt=M.vertexShader,rt=M.fragmentShader,l.update(M),_t=l.getVertexShaderID(M),Dt=l.getFragmentShaderID(M);const Mt=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),Kt=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,re=!!M.map,ee=!!M.matcap,D=!!X,T=!!M.aoMap,Y=!!M.lightMap,nt=!!M.bumpMap,tt=!!M.normalMap,q=!!M.displacementMap,ut=!!M.emissiveMap,et=!!M.metalnessMap,st=!!M.roughnessMap,Q=M.anisotropy>0,P=M.clearcoat>0,b=M.dispersion>0,U=M.iridescence>0,W=M.sheen>0,J=M.transmission>0,j=Q&&!!M.anisotropyMap,xt=P&&!!M.clearcoatMap,mt=P&&!!M.clearcoatNormalMap,yt=P&&!!M.clearcoatRoughnessMap,Rt=U&&!!M.iridescenceMap,lt=U&&!!M.iridescenceThicknessMap,bt=W&&!!M.sheenColorMap,Bt=W&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,vt=!!M.specularColorMap,zt=!!M.specularIntensityMap,F=J&&!!M.transmissionMap,it=J&&!!M.thicknessMap,at=!!M.gradientMap,Et=!!M.alphaMap,dt=M.alphaTest>0,ot=!!M.alphaHash,Tt=!!M.extensions;let Ot=ur;M.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const ae={shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:Xt,fragmentShader:rt,defines:M.defines,customVertexShaderID:_t,customFragmentShaderID:Dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&O.instanceColor!==null,instancingMorph:Kt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:lo,alphaToCoverage:!!M.alphaToCoverage,map:re,matcap:ee,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:Y,bumpMap:nt,normalMap:tt,displacementMap:d&&q,emissiveMap:ut,normalMapObjectSpace:tt&&M.normalMapType===wT,normalMapTangentSpace:tt&&M.normalMapType===P0,metalnessMap:et,roughnessMap:st,anisotropy:Q,anisotropyMap:j,clearcoat:P,clearcoatMap:xt,clearcoatNormalMap:mt,clearcoatRoughnessMap:yt,dispersion:b,iridescence:U,iridescenceMap:Rt,iridescenceThicknessMap:lt,sheen:W,sheenColorMap:bt,sheenRoughnessMap:Bt,specularMap:Ct,specularColorMap:vt,specularIntensityMap:zt,transmission:J,transmissionMap:F,thicknessMap:it,gradientMap:at,opaque:M.transparent===!1&&M.blending===Js&&M.alphaToCoverage===!1,alphaMap:Et,alphaTest:dt,alphaHash:ot,combine:M.combine,mapUv:re&&g(M.map.channel),aoMapUv:T&&g(M.aoMap.channel),lightMapUv:Y&&g(M.lightMap.channel),bumpMapUv:nt&&g(M.bumpMap.channel),normalMapUv:tt&&g(M.normalMap.channel),displacementMapUv:q&&g(M.displacementMap.channel),emissiveMapUv:ut&&g(M.emissiveMap.channel),metalnessMapUv:et&&g(M.metalnessMap.channel),roughnessMapUv:st&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:xt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(M.sheenRoughnessMap.channel),specularMapUv:Ct&&g(M.specularMap.channel),specularColorMapUv:vt&&g(M.specularColorMap.channel),specularIntensityMapUv:zt&&g(M.specularIntensityMap.channel),transmissionMapUv:F&&g(M.transmissionMap.channel),thicknessMapUv:it&&g(M.thicknessMap.channel),alphaMapUv:Et&&g(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(tt||Q),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(re||Et),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ut,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:re&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:ut&&M.emissiveMap.isVideoTexture===!0&&ie.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Tt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&M.extensions.multiDraw===!0||It)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ae.vertexUv1s=u.has(1),ae.vertexUv2s=u.has(2),ae.vertexUv3s=u.has(3),u.clear(),ae}function _(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),p(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function p(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const S=m[M.type];let L;if(S){const N=mi[S];L=xw.clone(N.uniforms)}else L=M.uniforms;return L}function E(M,S){let L;for(let N=0,O=c.length;N<O;N++){const H=c[N];if(H.cacheKey===S){L=H,++L.usedTimes;break}}return L===void 0&&(L=new TP(n,S,M,s),c.push(L)),L}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function A(){l.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:E,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:A}}function PP(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function LP(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Zm(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,h,m,g,v){let _=n[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:h,groupOrder:m,renderOrder:f.renderOrder,z:g,group:v},n[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=h,_.groupOrder=m,_.renderOrder=f.renderOrder,_.z=g,_.group=v),t++,_}function a(f,d,h,m,g,v){const _=o(f,d,h,m,g,v);h.transmission>0?i.push(_):h.transparent===!0?r.push(_):e.push(_)}function l(f,d,h,m,g,v){const _=o(f,d,h,m,g,v);h.transmission>0?i.unshift(_):h.transparent===!0?r.unshift(_):e.unshift(_)}function u(f,d){e.length>1&&e.sort(f||LP),i.length>1&&i.sort(d||Jm),r.length>1&&r.sort(d||Jm)}function c(){for(let f=t,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function DP(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zm,n.set(i,[o])):r>=s.length?(o=new Zm,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function IP(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Jt};break;case"SpotLight":e={position:new k,direction:new k,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function UP(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let NP=0;function OP(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function FP(n){const t=new IP,e=UP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new pe,o=new pe;function a(u){let c=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,m=0,g=0,v=0,_=0,y=0,p=0,x=0,E=0,w=0,R=0;u.sort(OP);for(let M=0,S=u.length;M<S;M++){const L=u[M],N=L.color,O=L.intensity,H=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=N.r*O,f+=N.g*O,d+=N.b*O;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],O);R++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,z=e.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.directionalShadow[h]=z,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=L.shadow.matrix,y++}i.directional[h]=B,h++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(N).multiplyScalar(O),B.distance=H,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[g]=B;const X=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,X.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[g]=X.matrix,L.castShadow){const z=e.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.spotShadow[g]=z,i.spotShadowMap[g]=$,x++}g++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(N).multiplyScalar(O),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=B,v++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const X=L.shadow,z=e.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=L.shadow.matrix,p++}i.point[m]=B,m++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(O),B.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[_]=B,_++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==h||A.pointLength!==m||A.spotLength!==g||A.rectAreaLength!==v||A.hemiLength!==_||A.numDirectionalShadows!==y||A.numPointShadows!==p||A.numSpotShadows!==x||A.numSpotMaps!==E||A.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=v,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=p,i.pointShadowMap.length=p,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=p,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,A.directionalLength=h,A.pointLength=m,A.spotLength=g,A.rectAreaLength=v,A.hemiLength=_,A.numDirectionalShadows=y,A.numPointShadows=p,A.numSpotShadows=x,A.numSpotMaps=E,A.numLightProbes=R,i.version=NP++)}function l(u,c){let f=0,d=0,h=0,m=0,g=0;const v=c.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const p=u[_];if(p.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),f++}else if(p.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),h++}else if(p.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(p.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(p.width*.5,0,0),x.halfHeight.set(0,p.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(p.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(v),d++}else if(p.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(p.matrixWorld),x.direction.transformDirection(v),g++}}}return{setup:a,setupView:l,state:i}}function Qm(n){const t=new FP(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function BP(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Qm(n),t.set(r,[a])):s>=o.length?(a=new Qm(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const kP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HP(n,t,e){let i=new vd;const r=new Lt,s=new Lt,o=new Pe,a=new c1({depthPacking:TT}),l=new u1,u={},c=e.maxTextureSize,f={[mr]:gn,[gn]:mr,[ln]:ln},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:kP,fragmentShader:zP}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new hn;m.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ve(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x0;let _=this.type;this.render=function(w,R,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(cr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=_!==Ui&&this.type===Ui,H=_===Ui&&this.type!==Ui;for(let $=0,B=w.length;$<B;$++){const X=w[$],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ht=z.getFrameExtents();if(r.multiply(ht),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ht.x),r.x=s.x*ht.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ht.y),r.y=s.y*ht.y,z.mapSize.y=s.y)),z.map===null||O===!0||H===!0){const ft=this.type!==Ui?{minFilter:Un,magFilter:Un}:{};z.map!==null&&z.map.dispose(),z.map=new os(r.x,r.y,ft),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const pt=z.getViewportCount();for(let ft=0;ft<pt;ft++){const St=z.getViewport(ft);o.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),N.viewport(o),z.updateMatrices(X,ft),i=z.getFrustum(),x(R,A,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Ui&&y(z,A),z.needsUpdate=!1}_=this.type,v.needsUpdate=!1,n.setRenderTarget(M,S,L)};function y(w,R){const A=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new os(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,A,d,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,A,h,g,null)}function p(w,R,A,M){let S=null;const L=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=A.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=S.uuid,O=R.uuid;let H=u[N];H===void 0&&(H={},u[N]=H);let $=H[O];$===void 0&&($=S.clone(),H[O]=$,R.addEventListener("dispose",E)),S=$}if(S.visible=R.visible,S.wireframe=R.wireframe,M===Ui?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=A}return S}function x(w,R,A,M,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const O=t.update(w),H=w.material;if(Array.isArray(H)){const $=O.groups;for(let B=0,X=$.length;B<X;B++){const z=$[B],ht=H[z.materialIndex];if(ht&&ht.visible){const pt=p(w,ht,M,S);w.onBeforeShadow(n,w,R,A,O,pt,z),n.renderBufferDirect(A,null,O,pt,w,z),w.onAfterShadow(n,w,R,A,O,pt,z)}}}else if(H.visible){const $=p(w,H,M,S);w.onBeforeShadow(n,w,R,A,O,$,null),n.renderBufferDirect(A,null,O,$,w,null),w.onAfterShadow(n,w,R,A,O,$,null)}}const N=w.children;for(let O=0,H=N.length;O<H;O++)x(N[O],R,A,M,S)}function E(w){w.target.removeEventListener("dispose",E);for(const A in u){const M=u[A],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const VP={[Mf]:bf,[Ef]:Af,[Tf]:Rf,[so]:wf,[bf]:Mf,[Af]:Ef,[Rf]:Tf,[wf]:so};function GP(n,t){function e(){let F=!1;const it=new Pe;let at=null;const Et=new Pe(0,0,0,0);return{setMask:function(dt){at!==dt&&!F&&(n.colorMask(dt,dt,dt,dt),at=dt)},setLocked:function(dt){F=dt},setClear:function(dt,ot,Tt,Ot,ae){ae===!0&&(dt*=Ot,ot*=Ot,Tt*=Ot),it.set(dt,ot,Tt,Ot),Et.equals(it)===!1&&(n.clearColor(dt,ot,Tt,Ot),Et.copy(it))},reset:function(){F=!1,at=null,Et.set(-1,0,0,0)}}}function i(){let F=!1,it=!1,at=null,Et=null,dt=null;return{setReversed:function(ot){if(it!==ot){const Tt=t.get("EXT_clip_control");ot?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),it=ot;const Ot=dt;dt=null,this.setClear(Ot)}},getReversed:function(){return it},setTest:function(ot){ot?Mt(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(ot){at!==ot&&!F&&(n.depthMask(ot),at=ot)},setFunc:function(ot){if(it&&(ot=VP[ot]),Et!==ot){switch(ot){case Mf:n.depthFunc(n.NEVER);break;case bf:n.depthFunc(n.ALWAYS);break;case Ef:n.depthFunc(n.LESS);break;case so:n.depthFunc(n.LEQUAL);break;case Tf:n.depthFunc(n.EQUAL);break;case wf:n.depthFunc(n.GEQUAL);break;case Af:n.depthFunc(n.GREATER);break;case Rf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=ot}},setLocked:function(ot){F=ot},setClear:function(ot){dt!==ot&&(it&&(ot=1-ot),n.clearDepth(ot),dt=ot)},reset:function(){F=!1,at=null,Et=null,dt=null,it=!1}}}function r(){let F=!1,it=null,at=null,Et=null,dt=null,ot=null,Tt=null,Ot=null,ae=null;return{setTest:function(se){F||(se?Mt(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(se){it!==se&&!F&&(n.stencilMask(se),it=se)},setFunc:function(se,dn,Zt){(at!==se||Et!==dn||dt!==Zt)&&(n.stencilFunc(se,dn,Zt),at=se,Et=dn,dt=Zt)},setOp:function(se,dn,Zt){(ot!==se||Tt!==dn||Ot!==Zt)&&(n.stencilOp(se,dn,Zt),ot=se,Tt=dn,Ot=Zt)},setLocked:function(se){F=se},setClear:function(se){ae!==se&&(n.clearStencil(se),ae=se)},reset:function(){F=!1,it=null,at=null,Et=null,dt=null,ot=null,Tt=null,Ot=null,ae=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,h=[],m=null,g=!1,v=null,_=null,y=null,p=null,x=null,E=null,w=null,R=new Jt(0,0,0),A=0,M=!1,S=null,L=null,N=null,O=null,H=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=X>=2);let ht=null,pt={};const ft=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),Xt=new Pe().fromArray(ft),rt=new Pe().fromArray(St);function _t(F,it,at,Et){const dt=new Uint8Array(4),ot=n.createTexture();n.bindTexture(F,ot),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<at;Tt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(it+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ot}const Dt={};Dt[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(n.DEPTH_TEST),o.setFunc(so),nt(!1),tt(Gp),Mt(n.CULL_FACE),T(cr);function Mt(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function Ut(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Kt(F,it){return f[F]!==it?(n.bindFramebuffer(F,it),f[F]=it,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=it),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=it),!0):!1}function It(F,it){let at=h,Et=!1;if(F){at=d.get(it),at===void 0&&(at=[],d.set(it,at));const dt=F.textures;if(at.length!==dt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Tt=dt.length;ot<Tt;ot++)at[ot]=n.COLOR_ATTACHMENT0+ot;at.length=dt.length,Et=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,Et=!0);Et&&n.drawBuffers(at)}function re(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const ee={[kr]:n.FUNC_ADD,[ZE]:n.FUNC_SUBTRACT,[QE]:n.FUNC_REVERSE_SUBTRACT};ee[tT]=n.MIN,ee[eT]=n.MAX;const D={[nT]:n.ZERO,[iT]:n.ONE,[rT]:n.SRC_COLOR,[yf]:n.SRC_ALPHA,[uT]:n.SRC_ALPHA_SATURATE,[lT]:n.DST_COLOR,[oT]:n.DST_ALPHA,[sT]:n.ONE_MINUS_SRC_COLOR,[Sf]:n.ONE_MINUS_SRC_ALPHA,[cT]:n.ONE_MINUS_DST_COLOR,[aT]:n.ONE_MINUS_DST_ALPHA,[fT]:n.CONSTANT_COLOR,[hT]:n.ONE_MINUS_CONSTANT_COLOR,[dT]:n.CONSTANT_ALPHA,[pT]:n.ONE_MINUS_CONSTANT_ALPHA};function T(F,it,at,Et,dt,ot,Tt,Ot,ae,se){if(F===cr){g===!0&&(Ut(n.BLEND),g=!1);return}if(g===!1&&(Mt(n.BLEND),g=!0),F!==JE){if(F!==v||se!==M){if((_!==kr||x!==kr)&&(n.blendEquation(n.FUNC_ADD),_=kr,x=kr),se)switch(F){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wp:n.blendFunc(n.ONE,n.ONE);break;case Xp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,p=null,E=null,w=null,R.set(0,0,0),A=0,v=F,M=se}return}dt=dt||it,ot=ot||at,Tt=Tt||Et,(it!==_||dt!==x)&&(n.blendEquationSeparate(ee[it],ee[dt]),_=it,x=dt),(at!==y||Et!==p||ot!==E||Tt!==w)&&(n.blendFuncSeparate(D[at],D[Et],D[ot],D[Tt]),y=at,p=Et,E=ot,w=Tt),(Ot.equals(R)===!1||ae!==A)&&(n.blendColor(Ot.r,Ot.g,Ot.b,ae),R.copy(Ot),A=ae),v=F,M=!1}function Y(F,it){F.side===ln?Ut(n.CULL_FACE):Mt(n.CULL_FACE);let at=F.side===gn;it&&(at=!at),nt(at),F.blending===Js&&F.transparent===!1?T(cr):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Et=F.stencilWrite;a.setTest(Et),Et&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function tt(F){F!==$E?(Mt(n.CULL_FACE),F!==L&&(F===Gp?n.cullFace(n.BACK):F===YE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),L=F}function q(F){F!==N&&(B&&n.lineWidth(F),N=F)}function ut(F,it,at){F?(Mt(n.POLYGON_OFFSET_FILL),(O!==it||H!==at)&&(n.polygonOffset(it,at),O=it,H=at)):Ut(n.POLYGON_OFFSET_FILL)}function et(F){F?Mt(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function st(F){F===void 0&&(F=n.TEXTURE0+$-1),ht!==F&&(n.activeTexture(F),ht=F)}function Q(F,it,at){at===void 0&&(ht===null?at=n.TEXTURE0+$-1:at=ht);let Et=pt[at];Et===void 0&&(Et={type:void 0,texture:void 0},pt[at]=Et),(Et.type!==F||Et.texture!==it)&&(ht!==at&&(n.activeTexture(at),ht=at),n.bindTexture(F,it||Dt[F]),Et.type=F,Et.texture=it)}function P(){const F=pt[ht];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(F){Xt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Xt.copy(F))}function Bt(F){rt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function Ct(F,it){let at=u.get(it);at===void 0&&(at=new WeakMap,u.set(it,at));let Et=at.get(F);Et===void 0&&(Et=n.getUniformBlockIndex(it,F.name),at.set(F,Et))}function vt(F,it){const Et=u.get(it).get(F);l.get(it)!==Et&&(n.uniformBlockBinding(it,Et,F.__bindingPointIndex),l.set(it,Et))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ht=null,pt={},f={},d=new WeakMap,h=[],m=null,g=!1,v=null,_=null,y=null,p=null,x=null,E=null,w=null,R=new Jt(0,0,0),A=0,M=!1,S=null,L=null,N=null,O=null,H=null,Xt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Mt,disable:Ut,bindFramebuffer:Kt,drawBuffers:It,useProgram:re,setBlending:T,setMaterial:Y,setFlipSided:nt,setCullFace:tt,setLineWidth:q,setPolygonOffset:ut,setScissorTest:et,activeTexture:st,bindTexture:Q,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:U,texImage2D:Rt,texImage3D:lt,updateUBOMapping:Ct,uniformBlockBinding:vt,texStorage2D:mt,texStorage3D:yt,texSubImage2D:W,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:xt,scissor:bt,viewport:Bt,reset:zt}}function WP(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Lt,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,b){return h?new OffscreenCanvas(P,b):tc("canvas")}function g(P,b,U){let W=1;const J=Q(P);if((J.width>U||J.height>U)&&(W=U/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(W*J.width),xt=Math.floor(W*J.height);f===void 0&&(f=m(j,xt));const mt=b?m(j,xt):f;return mt.width=j,mt.height=xt,mt.getContext("2d").drawImage(P,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+xt+")."),mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function v(P){return P.generateMipmaps}function _(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function p(P,b,U,W,J=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=b;if(b===n.RED&&(U===n.FLOAT&&(j=n.R32F),U===n.HALF_FLOAT&&(j=n.R16F),U===n.UNSIGNED_BYTE&&(j=n.R8)),b===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.R8UI),U===n.UNSIGNED_SHORT&&(j=n.R16UI),U===n.UNSIGNED_INT&&(j=n.R32UI),U===n.BYTE&&(j=n.R8I),U===n.SHORT&&(j=n.R16I),U===n.INT&&(j=n.R32I)),b===n.RG&&(U===n.FLOAT&&(j=n.RG32F),U===n.HALF_FLOAT&&(j=n.RG16F),U===n.UNSIGNED_BYTE&&(j=n.RG8)),b===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RG8UI),U===n.UNSIGNED_SHORT&&(j=n.RG16UI),U===n.UNSIGNED_INT&&(j=n.RG32UI),U===n.BYTE&&(j=n.RG8I),U===n.SHORT&&(j=n.RG16I),U===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGB8UI),U===n.UNSIGNED_SHORT&&(j=n.RGB16UI),U===n.UNSIGNED_INT&&(j=n.RGB32UI),U===n.BYTE&&(j=n.RGB8I),U===n.SHORT&&(j=n.RGB16I),U===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),U===n.UNSIGNED_INT&&(j=n.RGBA32UI),U===n.BYTE&&(j=n.RGBA8I),U===n.SHORT&&(j=n.RGBA16I),U===n.INT&&(j=n.RGBA32I)),b===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),b===n.RGBA){const xt=J?Zl:ie.getTransfer(W);U===n.FLOAT&&(j=n.RGBA32F),U===n.HALF_FLOAT&&(j=n.RGBA16F),U===n.UNSIGNED_BYTE&&(j=xt===de?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(P,b){let U;return P?b===null||b===ss||b===fa?U=n.DEPTH24_STENCIL8:b===xi?U=n.DEPTH32F_STENCIL8:b===ua&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ss||b===fa?U=n.DEPTH_COMPONENT24:b===xi?U=n.DEPTH_COMPONENT32F:b===ua&&(U=n.DEPTH_COMPONENT16),U}function E(P,b){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==vi?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){const b=P.target;b.removeEventListener("dispose",w),A(b),b.isVideoTexture&&c.delete(b)}function R(P){const b=P.target;b.removeEventListener("dispose",R),S(b)}function A(P){const b=i.get(P);if(b.__webglInit===void 0)return;const U=P.source,W=d.get(U);if(W){const J=W[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(P),Object.keys(W).length===0&&d.delete(U)}i.remove(P)}function M(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const U=P.source,W=d.get(U);delete W[b.__cacheKey],o.memory.textures--}function S(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(b.__webglFramebuffer[W]))for(let J=0;J<b.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(b.__webglFramebuffer[W][J]);else n.deleteFramebuffer(b.__webglFramebuffer[W]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[W])}else{if(Array.isArray(b.__webglFramebuffer))for(let W=0;W<b.__webglFramebuffer.length;W++)n.deleteFramebuffer(b.__webglFramebuffer[W]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let W=0;W<b.__webglColorRenderbuffer.length;W++)b.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[W]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const U=P.textures;for(let W=0,J=U.length;W<J;W++){const j=i.get(U[W]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(U[W])}i.remove(P)}let L=0;function N(){L=0}function O(){const P=L;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function H(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function $(P,b){const U=i.get(P);if(P.isVideoTexture&&et(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const W=P.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(U,P,b);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+b)}function B(P,b){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Dt(U,P,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+b)}function X(P,b){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Dt(U,P,b);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+b)}function z(P,b){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Mt(U,P,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+b)}const ht={[Lf]:n.REPEAT,[Gr]:n.CLAMP_TO_EDGE,[Df]:n.MIRRORED_REPEAT},pt={[Un]:n.NEAREST,[bT]:n.NEAREST_MIPMAP_NEAREST,[ja]:n.NEAREST_MIPMAP_LINEAR,[vi]:n.LINEAR,[iu]:n.LINEAR_MIPMAP_NEAREST,[Wr]:n.LINEAR_MIPMAP_LINEAR},ft={[AT]:n.NEVER,[IT]:n.ALWAYS,[RT]:n.LESS,[L0]:n.LEQUAL,[CT]:n.EQUAL,[DT]:n.GEQUAL,[PT]:n.GREATER,[LT]:n.NOTEQUAL};function St(P,b){if(b.type===xi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===vi||b.magFilter===iu||b.magFilter===ja||b.magFilter===Wr||b.minFilter===vi||b.minFilter===iu||b.minFilter===ja||b.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ht[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ht[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ht[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,pt[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ft[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==ja&&b.minFilter!==Wr||b.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Xt(P,b){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));const W=b.source;let J=d.get(W);J===void 0&&(J={},d.set(W,J));const j=H(b);if(j!==P.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[j].usedTimes++;const xt=J[P.__cacheKey];xt!==void 0&&(J[P.__cacheKey].usedTimes--,xt.usedTimes===0&&M(b)),P.__cacheKey=j,P.__webglTexture=J[j].texture}return U}function rt(P,b,U){return Math.floor(Math.floor(P/U)/b)}function _t(P,b,U,W){const j=P.updateRanges;if(j.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,U,W,b.data);else{j.sort((lt,bt)=>lt.start-bt.start);let xt=0;for(let lt=1;lt<j.length;lt++){const bt=j[xt],Bt=j[lt],Ct=bt.start+bt.count,vt=rt(Bt.start,b.width,4),zt=rt(bt.start,b.width,4);Bt.start<=Ct+1&&vt===zt&&rt(Bt.start+Bt.count-1,b.width,4)===vt?bt.count=Math.max(bt.count,Bt.start+Bt.count-bt.start):(++xt,j[xt]=Bt)}j.length=xt+1;const mt=n.getParameter(n.UNPACK_ROW_LENGTH),yt=n.getParameter(n.UNPACK_SKIP_PIXELS),Rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let lt=0,bt=j.length;lt<bt;lt++){const Bt=j[lt],Ct=Math.floor(Bt.start/4),vt=Math.ceil(Bt.count/4),zt=Ct%b.width,F=Math.floor(Ct/b.width),it=vt,at=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,zt,F,it,at,U,W,b.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,mt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Rt)}}function Dt(P,b,U){let W=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(W=n.TEXTURE_3D);const J=Xt(P,b),j=b.source;e.bindTexture(W,P.__webglTexture,n.TEXTURE0+U);const xt=i.get(j);if(j.version!==xt.__version||J===!0){e.activeTexture(n.TEXTURE0+U);const mt=ie.getPrimaries(ie.workingColorSpace),yt=b.colorSpace===rr?null:ie.getPrimaries(b.colorSpace),Rt=b.colorSpace===rr||mt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let lt=g(b.image,!1,r.maxTextureSize);lt=st(b,lt);const bt=s.convert(b.format,b.colorSpace),Bt=s.convert(b.type);let Ct=p(b.internalFormat,bt,Bt,b.colorSpace,b.isVideoTexture);St(W,b);let vt;const zt=b.mipmaps,F=b.isVideoTexture!==!0,it=xt.__version===void 0||J===!0,at=j.dataReady,Et=E(b,lt);if(b.isDepthTexture)Ct=x(b.format===da,b.type),it&&(F?e.texStorage2D(n.TEXTURE_2D,1,Ct,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Ct,lt.width,lt.height,0,bt,Bt,null));else if(b.isDataTexture)if(zt.length>0){F&&it&&e.texStorage2D(n.TEXTURE_2D,Et,Ct,zt[0].width,zt[0].height);for(let dt=0,ot=zt.length;dt<ot;dt++)vt=zt[dt],F?at&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,vt.width,vt.height,bt,Bt,vt.data):e.texImage2D(n.TEXTURE_2D,dt,Ct,vt.width,vt.height,0,bt,Bt,vt.data);b.generateMipmaps=!1}else F?(it&&e.texStorage2D(n.TEXTURE_2D,Et,Ct,lt.width,lt.height),at&&_t(b,lt,bt,Bt)):e.texImage2D(n.TEXTURE_2D,0,Ct,lt.width,lt.height,0,bt,Bt,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Ct,zt[0].width,zt[0].height,lt.depth);for(let dt=0,ot=zt.length;dt<ot;dt++)if(vt=zt[dt],b.format!==ri)if(bt!==null)if(F){if(at)if(b.layerUpdates.size>0){const Tt=Cm(vt.width,vt.height,b.format,b.type);for(const Ot of b.layerUpdates){const ae=vt.data.subarray(Ot*Tt/vt.data.BYTES_PER_ELEMENT,(Ot+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,Ot,vt.width,vt.height,1,bt,ae)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,vt.width,vt.height,lt.depth,bt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,Ct,vt.width,vt.height,lt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,vt.width,vt.height,lt.depth,bt,Bt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,Ct,vt.width,vt.height,lt.depth,0,bt,Bt,vt.data)}else{F&&it&&e.texStorage2D(n.TEXTURE_2D,Et,Ct,zt[0].width,zt[0].height);for(let dt=0,ot=zt.length;dt<ot;dt++)vt=zt[dt],b.format!==ri?bt!==null?F?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,Ct,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?at&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,vt.width,vt.height,bt,Bt,vt.data):e.texImage2D(n.TEXTURE_2D,dt,Ct,vt.width,vt.height,0,bt,Bt,vt.data)}else if(b.isDataArrayTexture)if(F){if(it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Ct,lt.width,lt.height,lt.depth),at)if(b.layerUpdates.size>0){const dt=Cm(lt.width,lt.height,b.format,b.type);for(const ot of b.layerUpdates){const Tt=lt.data.subarray(ot*dt/lt.data.BYTES_PER_ELEMENT,(ot+1)*dt/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,lt.width,lt.height,1,bt,Bt,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Bt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,lt.width,lt.height,lt.depth,0,bt,Bt,lt.data);else if(b.isData3DTexture)F?(it&&e.texStorage3D(n.TEXTURE_3D,Et,Ct,lt.width,lt.height,lt.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Bt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,lt.width,lt.height,lt.depth,0,bt,Bt,lt.data);else if(b.isFramebufferTexture){if(it)if(F)e.texStorage2D(n.TEXTURE_2D,Et,Ct,lt.width,lt.height);else{let dt=lt.width,ot=lt.height;for(let Tt=0;Tt<Et;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,Ct,dt,ot,0,bt,Bt,null),dt>>=1,ot>>=1}}else if(zt.length>0){if(F&&it){const dt=Q(zt[0]);e.texStorage2D(n.TEXTURE_2D,Et,Ct,dt.width,dt.height)}for(let dt=0,ot=zt.length;dt<ot;dt++)vt=zt[dt],F?at&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,bt,Bt,vt):e.texImage2D(n.TEXTURE_2D,dt,Ct,bt,Bt,vt);b.generateMipmaps=!1}else if(F){if(it){const dt=Q(lt);e.texStorage2D(n.TEXTURE_2D,Et,Ct,dt.width,dt.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Bt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Ct,bt,Bt,lt);v(b)&&_(W),xt.__version=j.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Mt(P,b,U){if(b.image.length!==6)return;const W=Xt(P,b),J=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+U);const j=i.get(J);if(J.version!==j.__version||W===!0){e.activeTexture(n.TEXTURE0+U);const xt=ie.getPrimaries(ie.workingColorSpace),mt=b.colorSpace===rr?null:ie.getPrimaries(b.colorSpace),yt=b.colorSpace===rr||xt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Rt=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let ot=0;ot<6;ot++)!Rt&&!lt?bt[ot]=g(b.image[ot],!0,r.maxCubemapSize):bt[ot]=lt?b.image[ot].image:b.image[ot],bt[ot]=st(b,bt[ot]);const Bt=bt[0],Ct=s.convert(b.format,b.colorSpace),vt=s.convert(b.type),zt=p(b.internalFormat,Ct,vt,b.colorSpace),F=b.isVideoTexture!==!0,it=j.__version===void 0||W===!0,at=J.dataReady;let Et=E(b,Bt);St(n.TEXTURE_CUBE_MAP,b);let dt;if(Rt){F&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,zt,Bt.width,Bt.height);for(let ot=0;ot<6;ot++){dt=bt[ot].mipmaps;for(let Tt=0;Tt<dt.length;Tt++){const Ot=dt[Tt];b.format!==ri?Ct!==null?F?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,Ot.width,Ot.height,Ct,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,Ot.width,Ot.height,Ct,vt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,zt,Ot.width,Ot.height,0,Ct,vt,Ot.data)}}}else{if(dt=b.mipmaps,F&&it){dt.length>0&&Et++;const ot=Q(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,zt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(lt){F?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,bt[ot].width,bt[ot].height,Ct,vt,bt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,zt,bt[ot].width,bt[ot].height,0,Ct,vt,bt[ot].data);for(let Tt=0;Tt<dt.length;Tt++){const ae=dt[Tt].image[ot].image;F?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,ae.width,ae.height,Ct,vt,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,zt,ae.width,ae.height,0,Ct,vt,ae.data)}}else{F?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ct,vt,bt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,zt,Ct,vt,bt[ot]);for(let Tt=0;Tt<dt.length;Tt++){const Ot=dt[Tt];F?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Ct,vt,Ot.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,zt,Ct,vt,Ot.image[ot])}}}v(b)&&_(n.TEXTURE_CUBE_MAP),j.__version=J.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ut(P,b,U,W,J,j){const xt=s.convert(U.format,U.colorSpace),mt=s.convert(U.type),yt=p(U.internalFormat,xt,mt,U.colorSpace),Rt=i.get(b),lt=i.get(U);if(lt.__renderTarget=b,!Rt.__hasExternalTextures){const bt=Math.max(1,b.width>>j),Bt=Math.max(1,b.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,j,yt,bt,Bt,b.depth,0,xt,mt,null):e.texImage2D(J,j,yt,bt,Bt,0,xt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),ut(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,lt.__webglTexture,0,q(b)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,lt.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(P,b,U){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const W=b.depthTexture,J=W&&W.isDepthTexture?W.type:null,j=x(b.stencilBuffer,J),xt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=q(b);ut(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,j,b.width,b.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,P)}else{const W=b.textures;for(let J=0;J<W.length;J++){const j=W[J],xt=s.convert(j.format,j.colorSpace),mt=s.convert(j.type),yt=p(j.internalFormat,xt,mt,j.colorSpace),Rt=q(b);U&&ut(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,yt,b.width,b.height):ut(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,yt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,yt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(b.depthTexture);W.__renderTarget=b,(!W.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const J=W.__webglTexture,j=q(b);if(b.depthTexture.format===ha)ut(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(b.depthTexture.format===da)ut(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function re(P){const b=i.get(P),U=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),W){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=W}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const W=P.texture.mipmaps;W&&W.length>0?It(b.__webglFramebuffer[0],P):It(b.__webglFramebuffer,P)}else if(U){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]===void 0)b.__webglDepthbuffer[W]=n.createRenderbuffer(),Kt(b.__webglDepthbuffer[W],P,!1);else{const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}else{const W=P.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Kt(b.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(P,b,U){const W=i.get(P);b!==void 0&&Ut(W.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&re(P)}function D(P){const b=P.texture,U=i.get(P),W=i.get(b);P.addEventListener("dispose",R);const J=P.textures,j=P.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=b.version,o.memory.textures++),j){U.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[mt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)U.__webglFramebuffer[mt][yt]=n.createFramebuffer()}else U.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)U.__webglFramebuffer[mt]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(xt)for(let mt=0,yt=J.length;mt<yt;mt++){const Rt=i.get(J[mt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ut(P)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let mt=0;mt<J.length;mt++){const yt=J[mt];U.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[mt]);const Rt=s.convert(yt.format,yt.colorSpace),lt=s.convert(yt.type),bt=p(yt.internalFormat,Rt,lt,yt.colorSpace,P.isXRRenderTarget===!0),Bt=q(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,bt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,U.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Kt(U.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),St(n.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)Ut(U.__webglFramebuffer[mt][yt],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else Ut(U.__webglFramebuffer[mt],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);v(b)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let mt=0,yt=J.length;mt<yt;mt++){const Rt=J[mt],lt=i.get(Rt);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),St(n.TEXTURE_2D,Rt),Ut(U.__webglFramebuffer,P,Rt,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),v(Rt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(mt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,W.__webglTexture),St(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)Ut(U.__webglFramebuffer[yt],P,b,n.COLOR_ATTACHMENT0,mt,yt);else Ut(U.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,mt,0);v(b)&&_(mt),e.unbindTexture()}P.depthBuffer&&re(P)}function T(P){const b=P.textures;for(let U=0,W=b.length;U<W;U++){const J=b[U];if(v(J)){const j=y(P),xt=i.get(J).__webglTexture;e.bindTexture(j,xt),_(j),e.unbindTexture()}}}const Y=[],nt=[];function tt(P){if(P.samples>0){if(ut(P)===!1){const b=P.textures,U=P.width,W=P.height;let J=n.COLOR_BUFFER_BIT;const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(P),mt=b.length>1;if(mt)for(let Rt=0;Rt<b.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const yt=P.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Rt]);const lt=i.get(b[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,U,W,0,0,U,W,J,n.NEAREST),l===!0&&(Y.length=0,nt.length=0,Y.push(n.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Y.push(j),nt.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Rt=0;Rt<b.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Rt]);const lt=i.get(b[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function q(P){return Math.min(r.maxSamples,P.samples)}function ut(P){const b=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function et(P){const b=o.render.frame;c.get(P)!==b&&(c.set(P,b),P.update())}function st(P,b){const U=P.colorSpace,W=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||U!==lo&&U!==rr&&(ie.getTransfer(U)===de?(W!==ri||J!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}function Q(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=ut}function XP(n,t){function e(i,r=rr){let s;const o=ie.getTransfer(r);if(i===Mi)return n.UNSIGNED_BYTE;if(i===od)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ad)return n.UNSIGNED_SHORT_5_5_5_1;if(i===T0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===b0)return n.BYTE;if(i===E0)return n.SHORT;if(i===ua)return n.UNSIGNED_SHORT;if(i===sd)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===La)return n.HALF_FLOAT;if(i===w0)return n.ALPHA;if(i===A0)return n.RGB;if(i===ri)return n.RGBA;if(i===ha)return n.DEPTH_COMPONENT;if(i===da)return n.DEPTH_STENCIL;if(i===ld)return n.RED;if(i===cd)return n.RED_INTEGER;if(i===R0)return n.RG;if(i===ud)return n.RG_INTEGER;if(i===fd)return n.RGBA_INTEGER;if(i===Tl||i===wl||i===Al||i===Rl)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===If||i===Uf||i===Nf||i===Of)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===If)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ff||i===Bf||i===kf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ff||i===Bf)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===qf||i===jf||i===$f||i===Yf||i===Kf||i===Jf||i===Zf||i===Qf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$f)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qf)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cl||i===th||i===eh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Cl)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===C0||i===nh||i===ih||i===rh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ih)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const qP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $P{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new un,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ei({vertexShader:qP,fragmentShader:jP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new Jr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YP extends yo{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,m=null;const g=new $P,v=e.getContextAttributes();let _=null,y=null;const p=[],x=[],E=new Lt;let w=null;const R=new qn;R.viewport=new Pe;const A=new qn;A.viewport=new Pe;const M=[R,A],S=new m1;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let _t=p[rt];return _t===void 0&&(_t=new Eu,p[rt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(rt){let _t=p[rt];return _t===void 0&&(_t=new Eu,p[rt]=_t),_t.getGripSpace()},this.getHand=function(rt){let _t=p[rt];return _t===void 0&&(_t=new Eu,p[rt]=_t),_t.getHandSpace()};function O(rt){const _t=x.indexOf(rt.inputSource);if(_t===-1)return;const Dt=p[_t];Dt!==void 0&&(Dt.update(rt.inputSource,rt.frame,u||o),Dt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function H(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",$);for(let rt=0;rt<p.length;rt++){const _t=x[rt];_t!==null&&(x[rt]=null,p[rt].disconnect(_t))}L=null,N=null,g.reset(),t.setRenderTarget(_),h=null,d=null,f=null,r=null,y=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){s=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(rt){u=rt},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(rt){if(r=rt,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",H),r.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Mt=null,Ut=null;v.depth&&(Ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=v.stencil?da:ha,Mt=v.stencil?fa:ss);const Kt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Kt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new os(d.textureWidth,d.textureHeight,{format:ri,type:Mi,depthTexture:new H0(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,e,Dt),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new os(h.framebufferWidth,h.framebufferHeight,{format:ri,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Xt.setContext(r),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(rt){for(let _t=0;_t<rt.removed.length;_t++){const Dt=rt.removed[_t],Mt=x.indexOf(Dt);Mt>=0&&(x[Mt]=null,p[Mt].disconnect(Dt))}for(let _t=0;_t<rt.added.length;_t++){const Dt=rt.added[_t];let Mt=x.indexOf(Dt);if(Mt===-1){for(let Kt=0;Kt<p.length;Kt++)if(Kt>=x.length){x.push(Dt),Mt=Kt;break}else if(x[Kt]===null){x[Kt]=Dt,Mt=Kt;break}if(Mt===-1)break}const Ut=p[Mt];Ut&&Ut.connect(Dt)}}const B=new k,X=new k;function z(rt,_t,Dt){B.setFromMatrixPosition(_t.matrixWorld),X.setFromMatrixPosition(Dt.matrixWorld);const Mt=B.distanceTo(X),Ut=_t.projectionMatrix.elements,Kt=Dt.projectionMatrix.elements,It=Ut[14]/(Ut[10]-1),re=Ut[14]/(Ut[10]+1),ee=(Ut[9]+1)/Ut[5],D=(Ut[9]-1)/Ut[5],T=(Ut[8]-1)/Ut[0],Y=(Kt[8]+1)/Kt[0],nt=It*T,tt=It*Y,q=Mt/(-T+Y),ut=q*-T;if(_t.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ut),rt.translateZ(q),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Ut[10]===-1)rt.projectionMatrix.copy(_t.projectionMatrix),rt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const et=It+q,st=re+q,Q=nt-ut,P=tt+(Mt-ut),b=ee*re/st*et,U=D*re/st*et;rt.projectionMatrix.makePerspective(Q,P,b,U,et,st),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function ht(rt,_t){_t===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(_t.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(r===null)return;let _t=rt.near,Dt=rt.far;g.texture!==null&&(g.depthNear>0&&(_t=g.depthNear),g.depthFar>0&&(Dt=g.depthFar)),S.near=A.near=R.near=_t,S.far=A.far=R.far=Dt,(L!==S.near||N!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,N=S.far),R.layers.mask=rt.layers.mask|2,A.layers.mask=rt.layers.mask|4,S.layers.mask=R.layers.mask|A.layers.mask;const Mt=rt.parent,Ut=S.cameras;ht(S,Mt);for(let Kt=0;Kt<Ut.length;Kt++)ht(Ut[Kt],Mt);Ut.length===2?z(S,R,A):S.projectionMatrix.copy(R.projectionMatrix),pt(rt,S,Mt)};function pt(rt,_t,Dt){Dt===null?rt.matrix.copy(_t.matrixWorld):(rt.matrix.copy(Dt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(_t.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(_t.projectionMatrix),rt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=pa*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(rt){l=rt,d!==null&&(d.fixedFoveation=rt),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=rt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let ft=null;function St(rt,_t){if(c=_t.getViewerPose(u||o),m=_t,c!==null){const Dt=c.views;h!==null&&(t.setRenderTargetFramebuffer(y,h.framebuffer),t.setRenderTarget(y));let Mt=!1;Dt.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let It=0;It<Dt.length;It++){const re=Dt[It];let ee=null;if(h!==null)ee=h.getViewport(re);else{const T=f.getViewSubImage(d,re);ee=T.viewport,It===0&&(t.setRenderTargetTextures(y,T.colorTexture,T.depthStencilTexture),t.setRenderTarget(y))}let D=M[It];D===void 0&&(D=new qn,D.layers.enable(It),D.viewport=new Pe,M[It]=D),D.matrix.fromArray(re.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(re.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ee.x,ee.y,ee.width,ee.height),It===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(D)}const Ut=r.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const It=f.getDepthInformation(Dt[0]);It&&It.isValid&&It.texture&&g.init(t,It,r.renderState)}}for(let Dt=0;Dt<p.length;Dt++){const Mt=x[Dt],Ut=p[Dt];Mt!==null&&Ut!==void 0&&Ut.update(Mt,_t,u||o)}ft&&ft(rt,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),m=null}const Xt=new Q0;Xt.setAnimationLoop(St),this.setAnimationLoop=function(rt){ft=rt},this.dispose=function(){}}}const Pr=new bi,KP=new pe;function JP(n,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function i(v,_){_.color.getRGB(v.fogColor.value,F0(n)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,y,p,x){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(v,_):_.isMeshToonMaterial?(s(v,_),f(v,_)):_.isMeshPhongMaterial?(s(v,_),c(v,_)):_.isMeshStandardMaterial?(s(v,_),d(v,_),_.isMeshPhysicalMaterial&&h(v,_,x)):_.isMeshMatcapMaterial?(s(v,_),m(v,_)):_.isMeshDepthMaterial?s(v,_):_.isMeshDistanceMaterial?(s(v,_),g(v,_)):_.isMeshNormalMaterial?s(v,_):_.isLineBasicMaterial?(o(v,_),_.isLineDashedMaterial&&a(v,_)):_.isPointsMaterial?l(v,_,y,p):_.isSpriteMaterial?u(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===gn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===gn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const y=t.get(_),p=y.envMap,x=y.envMapRotation;p&&(v.envMap.value=p,Pr.copy(x),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.envMapRotation.value.setFromMatrix4(KP.makeRotationFromEuler(Pr)),v.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function o(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function a(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function l(v,_,y,p){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*y,v.scale.value=p*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function c(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function f(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function d(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function h(v,_,y){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===gn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,_){_.matcap&&(v.matcap.value=_.matcap)}function g(v,_){const y=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZP(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,p){const x=p.program;i.uniformBlockBinding(y,x)}function u(y,p){let x=r[y.id];x===void 0&&(m(y),x=c(y),r[y.id]=x,y.addEventListener("dispose",v));const E=p.program;i.updateUBOMapping(y,E);const w=t.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function c(y){const p=f();y.__bindingPointIndex=p;const x=n.createBuffer(),E=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,p,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const p=r[y.id],x=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,p);for(let w=0,R=x.length;w<R;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,S=A.length;M<S;M++){const L=A[M];if(h(L,w,M,E)===!0){const N=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let $=0;$<O.length;$++){const B=O[$],X=g(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+H,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,p,x,E){const w=y.value,R=p+"_"+x;if(E[R]===void 0)return typeof w=="number"||typeof w=="boolean"?E[R]=w:E[R]=w.clone(),!0;{const A=E[R];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return E[R]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function m(y){const p=y.uniforms;let x=0;const E=16;for(let R=0,A=p.length;R<A;R++){const M=Array.isArray(p[R])?p[R]:[p[R]];for(let S=0,L=M.length;S<L;S++){const N=M[S],O=Array.isArray(N.value)?N.value:[N.value];for(let H=0,$=O.length;H<$;H++){const B=O[H],X=g(B),z=x%E,ht=z%X.boundary,pt=z+ht;x+=ht,pt!==0&&E-pt<X.storage&&(x+=E-pt),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=X.storage}}}const w=x%E;return w>0&&(x+=E-w),y.__size=x,y.__cache={},this}function g(y){const p={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(p.boundary=4,p.storage=4):y.isVector2?(p.boundary=8,p.storage=8):y.isVector3||y.isColor?(p.boundary=16,p.storage=12):y.isVector4?(p.boundary=16,p.storage=16):y.isMatrix3?(p.boundary=48,p.storage=48):y.isMatrix4?(p.boundary=64,p.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),p}function v(y){const p=y.target;p.removeEventListener("dispose",v);const x=o.indexOf(p.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function _(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:_}}class QP{constructor(t={}){const{canvas:e=JT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,_=null;const y=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let E=!1;this._outputColorSpace=Xn;let w=0,R=0,A=null,M=-1,S=null;const L=new Pe,N=new Pe;let O=null;const H=new Jt(0);let $=0,B=e.width,X=e.height,z=1,ht=null,pt=null;const ft=new Pe(0,0,B,X),St=new Pe(0,0,B,X);let Xt=!1;const rt=new vd;let _t=!1,Dt=!1;const Mt=new pe,Ut=new pe,Kt=new k,It=new Pe,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function D(){return A===null?z:1}let T=i;function Y(C,V){return e.getContext(C,V)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rd}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),T===null){const V="webgl2";if(T=Y(V,C),T===null)throw Y(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let nt,tt,q,ut,et,st,Q,P,b,U,W,J,j,xt,mt,yt,Rt,lt,bt,Bt,Ct,vt,zt,F;function it(){nt=new cC(T),nt.init(),vt=new XP(T,nt),tt=new nC(T,nt,t,vt),q=new GP(T,nt),tt.reverseDepthBuffer&&d&&q.buffers.depth.setReversed(!0),ut=new hC(T),et=new PP,st=new WP(T,nt,q,et,tt,vt,ut),Q=new rC(x),P=new lC(x),b=new v1(T),zt=new tC(T,b),U=new uC(T,b,ut,zt),W=new pC(T,U,b,ut),bt=new dC(T,tt,st),yt=new iC(et),J=new CP(x,Q,P,nt,tt,zt,yt),j=new JP(x,et),xt=new DP,mt=new BP(nt),lt=new QR(x,Q,P,q,W,h,l),Rt=new HP(x,W,tt),F=new ZP(T,ut,tt,q),Bt=new eC(T,nt,ut),Ct=new fC(T,nt,ut),ut.programs=J.programs,x.capabilities=tt,x.extensions=nt,x.properties=et,x.renderLists=xt,x.shadowMap=Rt,x.state=q,x.info=ut}it();const at=new YP(x,T);this.xr=at,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const C=nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(B,X,!1))},this.getSize=function(C){return C.set(B,X)},this.setSize=function(C,V,K=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,X=V,e.width=Math.floor(C*z),e.height=Math.floor(V*z),K===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(B*z,X*z).floor()},this.setDrawingBufferSize=function(C,V,K){B=C,X=V,z=K,e.width=Math.floor(C*K),e.height=Math.floor(V*K),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ft)},this.setViewport=function(C,V,K,Z){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,V,K,Z),q.viewport(L.copy(ft).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(St)},this.setScissor=function(C,V,K,Z){C.isVector4?St.set(C.x,C.y,C.z,C.w):St.set(C,V,K,Z),q.scissor(N.copy(St).multiplyScalar(z).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(C){q.setScissorTest(Xt=C)},this.setOpaqueSort=function(C){ht=C},this.setTransparentSort=function(C){pt=C},this.getClearColor=function(C){return C.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,K=!0){let Z=0;if(C){let G=!1;if(A!==null){const gt=A.texture.format;G=gt===fd||gt===ud||gt===cd}if(G){const gt=A.texture.type,At=gt===Mi||gt===ss||gt===ua||gt===fa||gt===od||gt===ad,Nt=lt.getClearColor(),Pt=lt.getClearAlpha(),Gt=Nt.r,Wt=Nt.g,Ft=Nt.b;At?(m[0]=Gt,m[1]=Wt,m[2]=Ft,m[3]=Pt,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=Gt,g[1]=Wt,g[2]=Ft,g[3]=Pt,T.clearBufferiv(T.COLOR,0,g))}else Z|=T.COLOR_BUFFER_BIT}V&&(Z|=T.DEPTH_BUFFER_BIT),K&&(Z|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),lt.dispose(),xt.dispose(),mt.dispose(),et.dispose(),Q.dispose(),P.dispose(),W.dispose(),zt.dispose(),F.dispose(),J.dispose(),at.dispose(),at.removeEventListener("sessionstart",hs),at.removeEventListener("sessionend",kn),li.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=ut.autoReset,V=Rt.enabled,K=Rt.autoUpdate,Z=Rt.needsUpdate,G=Rt.type;it(),ut.autoReset=C,Rt.enabled=V,Rt.autoUpdate=K,Rt.needsUpdate=Z,Rt.type=G}function ot(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Tt(C){const V=C.target;V.removeEventListener("dispose",Tt),Ot(V)}function Ot(C){ae(C),et.remove(C)}function ae(C){const V=et.get(C).programs;V!==void 0&&(V.forEach(function(K){J.releaseProgram(K)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,K,Z,G,gt){V===null&&(V=re);const At=G.isMesh&&G.matrixWorld.determinant()<0,Nt=nx(C,V,K,Z,G);q.setMaterial(Z,At);let Pt=K.index,Gt=1;if(Z.wireframe===!0){if(Pt=U.getWireframeAttribute(K),Pt===void 0)return;Gt=2}const Wt=K.drawRange,Ft=K.attributes.position;let Qt=Wt.start*Gt,he=(Wt.start+Wt.count)*Gt;gt!==null&&(Qt=Math.max(Qt,gt.start*Gt),he=Math.min(he,(gt.start+gt.count)*Gt)),Pt!==null?(Qt=Math.max(Qt,0),he=Math.min(he,Pt.count)):Ft!=null&&(Qt=Math.max(Qt,0),he=Math.min(he,Ft.count));const be=he-Qt;if(be<0||be===1/0)return;zt.setup(G,Z,Nt,K,Pt);let Ce,ne=Bt;if(Pt!==null&&(Ce=b.get(Pt),ne=Ct,ne.setIndex(Ce)),G.isMesh)Z.wireframe===!0?(q.setLineWidth(Z.wireframeLinewidth*D()),ne.setMode(T.LINES)):ne.setMode(T.TRIANGLES);else if(G.isLine){let kt=Z.linewidth;kt===void 0&&(kt=1),q.setLineWidth(kt*D()),G.isLineSegments?ne.setMode(T.LINES):G.isLineLoop?ne.setMode(T.LINE_LOOP):ne.setMode(T.LINE_STRIP)}else G.isPoints?ne.setMode(T.POINTS):G.isSprite&&ne.setMode(T.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ne.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const kt=G._multiDrawStarts,We=G._multiDrawCounts,le=G._multiDrawCount,Zn=Pt?b.get(Pt).bytesPerElement:1,ms=et.get(Z).currentProgram.getUniforms();for(let bn=0;bn<le;bn++)ms.setValue(T,"_gl_DrawID",bn),ne.render(kt[bn]/Zn,We[bn])}else if(G.isInstancedMesh)ne.renderInstances(Qt,be,G.count);else if(K.isInstancedBufferGeometry){const kt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,We=Math.min(K.instanceCount,kt);ne.renderInstances(Qt,be,We)}else ne.render(Qt,be)};function se(C,V,K){C.transparent===!0&&C.side===ln&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,Na(C,V,K),C.side=mr,C.needsUpdate=!0,Na(C,V,K),C.side=ln):Na(C,V,K)}this.compile=function(C,V,K=null){K===null&&(K=C),_=mt.get(K),_.init(V),p.push(_),K.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),C!==K&&C.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const Z=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){const Nt=gt[At];se(Nt,K,G),Z.add(Nt)}else se(gt,K,G),Z.add(gt)}),_=p.pop(),Z},this.compileAsync=function(C,V,K=null){const Z=this.compile(C,V,K);return new Promise(G=>{function gt(){if(Z.forEach(function(At){et.get(At).currentProgram.isReady()&&Z.delete(At)}),Z.size===0){G(C);return}setTimeout(gt,10)}nt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let dn=null;function Zt(C){dn&&dn(C)}function hs(){li.stop()}function kn(){li.start()}const li=new Q0;li.setAnimationLoop(Zt),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(C){dn=C,at.setAnimationLoop(C),C===null?li.stop():li.start()},at.addEventListener("sessionstart",hs),at.addEventListener("sessionend",kn),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(V),V=at.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,V,A),_=mt.get(C,p.length),_.init(V),p.push(_),Ut.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),rt.setFromProjectionMatrix(Ut),Dt=this.localClippingEnabled,_t=yt.init(this.clippingPlanes,Dt),v=xt.get(C,y.length),v.init(),y.push(v),at.enabled===!0&&at.isPresenting===!0){const gt=x.xr.getDepthSensingMesh();gt!==null&&ds(gt,V,-1/0,x.sortObjects)}ds(C,V,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(ht,pt),ee=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,ee&&lt.addToRenderList(v,C),this.info.render.frame++,_t===!0&&yt.beginShadows();const K=_.state.shadowsArray;Rt.render(K,C,V),_t===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=v.opaque,G=v.transmissive;if(_.setupLights(),V.isArrayCamera){const gt=V.cameras;if(G.length>0)for(let At=0,Nt=gt.length;At<Nt;At++){const Pt=gt[At];Sr(Z,G,C,Pt)}ee&&lt.render(C);for(let At=0,Nt=gt.length;At<Nt;At++){const Pt=gt[At];Eo(v,C,Pt,Pt.viewport)}}else G.length>0&&Sr(Z,G,C,V),ee&&lt.render(C),Eo(v,C,V);A!==null&&R===0&&(st.updateMultisampleRenderTarget(A),st.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,V),zt.resetDefaultState(),M=-1,S=null,p.pop(),p.length>0?(_=p[p.length-1],_t===!0&&yt.setGlobalState(x.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function ds(C,V,K,Z){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||rt.intersectsSprite(C)){Z&&It.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ut);const At=W.update(C),Nt=C.material;Nt.visible&&v.push(C,At,Nt,K,It.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||rt.intersectsObject(C))){const At=W.update(C),Nt=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),It.copy(C.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),It.copy(At.boundingSphere.center)),It.applyMatrix4(C.matrixWorld).applyMatrix4(Ut)),Array.isArray(Nt)){const Pt=At.groups;for(let Gt=0,Wt=Pt.length;Gt<Wt;Gt++){const Ft=Pt[Gt],Qt=Nt[Ft.materialIndex];Qt&&Qt.visible&&v.push(C,At,Qt,K,It.z,Ft)}}else Nt.visible&&v.push(C,At,Nt,K,It.z,null)}}const gt=C.children;for(let At=0,Nt=gt.length;At<Nt;At++)ds(gt[At],V,K,Z)}function Eo(C,V,K,Z){const G=C.opaque,gt=C.transmissive,At=C.transparent;_.setupLightsView(K),_t===!0&&yt.setGlobalState(x.clippingPlanes,K),Z&&q.viewport(L.copy(Z)),G.length>0&&ps(G,V,K),gt.length>0&&ps(gt,V,K),At.length>0&&ps(At,V,K),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Sr(C,V,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new os(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?La:Mi,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const gt=_.state.transmissionRenderTarget[Z.id],At=Z.viewport||L;gt.setSize(At.z*x.transmissionResolutionScale,At.w*x.transmissionResolutionScale);const Nt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(H),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),ee&&lt.render(K);const Pt=x.toneMapping;x.toneMapping=ur;const Gt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),_t===!0&&yt.setGlobalState(x.clippingPlanes,Z),ps(C,K,Z),st.updateMultisampleRenderTarget(gt),st.updateRenderTargetMipmap(gt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ft=0,Qt=V.length;Ft<Qt;Ft++){const he=V[Ft],be=he.object,Ce=he.geometry,ne=he.material,kt=he.group;if(ne.side===ln&&be.layers.test(Z.layers)){const We=ne.side;ne.side=gn,ne.needsUpdate=!0,Wd(be,K,Z,Ce,ne,kt),ne.side=We,ne.needsUpdate=!0,Wt=!0}}Wt===!0&&(st.updateMultisampleRenderTarget(gt),st.updateRenderTargetMipmap(gt))}x.setRenderTarget(Nt),x.setClearColor(H,$),Gt!==void 0&&(Z.viewport=Gt),x.toneMapping=Pt}function ps(C,V,K){const Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,gt=C.length;G<gt;G++){const At=C[G],Nt=At.object,Pt=At.geometry,Gt=At.group;let Wt=At.material;Wt.allowOverride===!0&&Z!==null&&(Wt=Z),Nt.layers.test(K.layers)&&Wd(Nt,V,K,Pt,Wt,Gt)}}function Wd(C,V,K,Z,G,gt){C.onBeforeRender(x,V,K,Z,G,gt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(x,V,K,Z,C,gt),G.transparent===!0&&G.side===ln&&G.forceSinglePass===!1?(G.side=gn,G.needsUpdate=!0,x.renderBufferDirect(K,V,Z,G,C,gt),G.side=mr,G.needsUpdate=!0,x.renderBufferDirect(K,V,Z,G,C,gt),G.side=ln):x.renderBufferDirect(K,V,Z,G,C,gt),C.onAfterRender(x,V,K,Z,G,gt)}function Na(C,V,K){V.isScene!==!0&&(V=re);const Z=et.get(C),G=_.state.lights,gt=_.state.shadowsArray,At=G.state.version,Nt=J.getParameters(C,G.state,gt,V,K),Pt=J.getProgramCacheKey(Nt);let Gt=Z.programs;Z.environment=C.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(C.isMeshStandardMaterial?P:Q).get(C.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Gt===void 0&&(C.addEventListener("dispose",Tt),Gt=new Map,Z.programs=Gt);let Wt=Gt.get(Pt);if(Wt!==void 0){if(Z.currentProgram===Wt&&Z.lightsStateVersion===At)return qd(C,Nt),Wt}else Nt.uniforms=J.getUniforms(C),C.onBeforeCompile(Nt,x),Wt=J.acquireProgram(Nt,Pt),Gt.set(Pt,Wt),Z.uniforms=Nt.uniforms;const Ft=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=yt.uniform),qd(C,Nt),Z.needsLights=rx(C),Z.lightsStateVersion=At,Z.needsLights&&(Ft.ambientLightColor.value=G.state.ambient,Ft.lightProbe.value=G.state.probe,Ft.directionalLights.value=G.state.directional,Ft.directionalLightShadows.value=G.state.directionalShadow,Ft.spotLights.value=G.state.spot,Ft.spotLightShadows.value=G.state.spotShadow,Ft.rectAreaLights.value=G.state.rectArea,Ft.ltc_1.value=G.state.rectAreaLTC1,Ft.ltc_2.value=G.state.rectAreaLTC2,Ft.pointLights.value=G.state.point,Ft.pointLightShadows.value=G.state.pointShadow,Ft.hemisphereLights.value=G.state.hemi,Ft.directionalShadowMap.value=G.state.directionalShadowMap,Ft.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ft.spotShadowMap.value=G.state.spotShadowMap,Ft.spotLightMatrix.value=G.state.spotLightMatrix,Ft.spotLightMap.value=G.state.spotLightMap,Ft.pointShadowMap.value=G.state.pointShadowMap,Ft.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Wt,Z.uniformsList=null,Wt}function Xd(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Pl.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function qd(C,V){const K=et.get(C);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function nx(C,V,K,Z,G){V.isScene!==!0&&(V=re),st.resetTextureUnits();const gt=V.fog,At=Z.isMeshStandardMaterial?V.environment:null,Nt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:lo,Pt=(Z.isMeshStandardMaterial?P:Q).get(Z.envMap||At),Gt=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Wt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ft=!!K.morphAttributes.position,Qt=!!K.morphAttributes.normal,he=!!K.morphAttributes.color;let be=ur;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(be=x.toneMapping);const Ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ne=Ce!==void 0?Ce.length:0,kt=et.get(Z),We=_.state.lights;if(_t===!0&&(Dt===!0||C!==S)){const tn=C===S&&Z.id===M;yt.setState(Z,C,tn)}let le=!1;Z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==We.state.version||kt.outputColorSpace!==Nt||G.isBatchedMesh&&kt.batching===!1||!G.isBatchedMesh&&kt.batching===!0||G.isBatchedMesh&&kt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&kt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&kt.instancing===!1||!G.isInstancedMesh&&kt.instancing===!0||G.isSkinnedMesh&&kt.skinning===!1||!G.isSkinnedMesh&&kt.skinning===!0||G.isInstancedMesh&&kt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&kt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&kt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&kt.instancingMorph===!1&&G.morphTexture!==null||kt.envMap!==Pt||Z.fog===!0&&kt.fog!==gt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==yt.numPlanes||kt.numIntersection!==yt.numIntersection)||kt.vertexAlphas!==Gt||kt.vertexTangents!==Wt||kt.morphTargets!==Ft||kt.morphNormals!==Qt||kt.morphColors!==he||kt.toneMapping!==be||kt.morphTargetsCount!==ne)&&(le=!0):(le=!0,kt.__version=Z.version);let Zn=kt.currentProgram;le===!0&&(Zn=Na(Z,V,G));let ms=!1,bn=!1,To=!1;const ye=Zn.getUniforms(),zn=kt.uniforms;if(q.useProgram(Zn.program)&&(ms=!0,bn=!0,To=!0),Z.id!==M&&(M=Z.id,bn=!0),ms||S!==C){q.buffers.depth.getReversed()?(Mt.copy(C.projectionMatrix),QT(Mt),tw(Mt),ye.setValue(T,"projectionMatrix",Mt)):ye.setValue(T,"projectionMatrix",C.projectionMatrix),ye.setValue(T,"viewMatrix",C.matrixWorldInverse);const pn=ye.map.cameraPosition;pn!==void 0&&pn.setValue(T,Kt.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&ye.setValue(T,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ye.setValue(T,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,bn=!0,To=!0)}if(G.isSkinnedMesh){ye.setOptional(T,G,"bindMatrix"),ye.setOptional(T,G,"bindMatrixInverse");const tn=G.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ye.setValue(T,"boneTexture",tn.boneTexture,st))}G.isBatchedMesh&&(ye.setOptional(T,G,"batchingTexture"),ye.setValue(T,"batchingTexture",G._matricesTexture,st),ye.setOptional(T,G,"batchingIdTexture"),ye.setValue(T,"batchingIdTexture",G._indirectTexture,st),ye.setOptional(T,G,"batchingColorTexture"),G._colorsTexture!==null&&ye.setValue(T,"batchingColorTexture",G._colorsTexture,st));const Hn=K.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&bt.update(G,K,Zn),(bn||kt.receiveShadow!==G.receiveShadow)&&(kt.receiveShadow=G.receiveShadow,ye.setValue(T,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(zn.envMap.value=Pt,zn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(zn.envMapIntensity.value=V.environmentIntensity),bn&&(ye.setValue(T,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&ix(zn,To),gt&&Z.fog===!0&&j.refreshFogUniforms(zn,gt),j.refreshMaterialUniforms(zn,Z,z,X,_.state.transmissionRenderTarget[C.id]),Pl.upload(T,Xd(kt),zn,st)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Pl.upload(T,Xd(kt),zn,st),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ye.setValue(T,"center",G.center),ye.setValue(T,"modelViewMatrix",G.modelViewMatrix),ye.setValue(T,"normalMatrix",G.normalMatrix),ye.setValue(T,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const tn=Z.uniformsGroups;for(let pn=0,Oc=tn.length;pn<Oc;pn++){const Mr=tn[pn];F.update(Mr,Zn),F.bind(Mr,Zn)}}return Zn}function ix(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function rx(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,V,K){const Z=et.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),et.get(C.texture).__webglTexture=V,et.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const K=et.get(C);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const sx=T.createFramebuffer();this.setRenderTarget=function(C,V=0,K=0){A=C,w=V,R=K;let Z=!0,G=null,gt=!1,At=!1;if(C){const Pt=et.get(C);if(Pt.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(T.FRAMEBUFFER,null),Z=!1;else if(Pt.__webglFramebuffer===void 0)st.setupRenderTarget(C);else if(Pt.__hasExternalTextures)st.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ft=C.depthTexture;if(Pt.__boundDepthTexture!==Ft){if(Ft!==null&&et.has(Ft)&&(C.width!==Ft.image.width||C.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(C)}}const Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(At=!0);const Wt=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[V])?G=Wt[V][K]:G=Wt[V],gt=!0):C.samples>0&&st.useMultisampledRTT(C)===!1?G=et.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?G=Wt[K]:G=Wt,L.copy(C.viewport),N.copy(C.scissor),O=C.scissorTest}else L.copy(ft).multiplyScalar(z).floor(),N.copy(St).multiplyScalar(z).floor(),O=Xt;if(K!==0&&(G=sx),q.bindFramebuffer(T.FRAMEBUFFER,G)&&Z&&q.drawBuffers(C,G),q.viewport(L),q.scissor(N),q.setScissorTest(O),gt){const Pt=et.get(C.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pt.__webglTexture,K)}else if(At){const Pt=et.get(C.texture),Gt=V;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pt.__webglTexture,K,Gt)}else if(C!==null&&K!==0){const Pt=et.get(C.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Pt.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(C,V,K,Z,G,gt,At,Nt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){q.bindFramebuffer(T.FRAMEBUFFER,Pt);try{const Gt=C.textures[Nt],Wt=Gt.format,Ft=Gt.type;if(!tt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-Z&&K>=0&&K<=C.height-G&&(C.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Nt),T.readPixels(V,K,Z,G,vt.convert(Wt),vt.convert(Ft),gt))}finally{const Gt=A!==null?et.get(A).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(C,V,K,Z,G,gt,At,Nt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(V>=0&&V<=C.width-Z&&K>=0&&K<=C.height-G){q.bindFramebuffer(T.FRAMEBUFFER,Pt);const Gt=C.textures[Nt],Wt=Gt.format,Ft=Gt.type;if(!tt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Qt),T.bufferData(T.PIXEL_PACK_BUFFER,gt.byteLength,T.STREAM_READ),C.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Nt),T.readPixels(V,K,Z,G,vt.convert(Wt),vt.convert(Ft),0);const he=A!==null?et.get(A).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,he);const be=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ZT(T,be,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Qt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,gt),T.deleteBuffer(Qt),T.deleteSync(be),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,K=0){const Z=Math.pow(2,-K),G=Math.floor(C.image.width*Z),gt=Math.floor(C.image.height*Z),At=V!==null?V.x:0,Nt=V!==null?V.y:0;st.setTexture2D(C,0),T.copyTexSubImage2D(T.TEXTURE_2D,K,0,0,At,Nt,G,gt),q.unbindTexture()};const ox=T.createFramebuffer(),ax=T.createFramebuffer();this.copyTextureToTexture=function(C,V,K=null,Z=null,G=0,gt=null){gt===null&&(G!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=G,G=0):gt=0);let At,Nt,Pt,Gt,Wt,Ft,Qt,he,be;const Ce=C.isCompressedTexture?C.mipmaps[gt]:C.image;if(K!==null)At=K.max.x-K.min.x,Nt=K.max.y-K.min.y,Pt=K.isBox3?K.max.z-K.min.z:1,Gt=K.min.x,Wt=K.min.y,Ft=K.isBox3?K.min.z:0;else{const Hn=Math.pow(2,-G);At=Math.floor(Ce.width*Hn),Nt=Math.floor(Ce.height*Hn),C.isDataArrayTexture?Pt=Ce.depth:C.isData3DTexture?Pt=Math.floor(Ce.depth*Hn):Pt=1,Gt=0,Wt=0,Ft=0}Z!==null?(Qt=Z.x,he=Z.y,be=Z.z):(Qt=0,he=0,be=0);const ne=vt.convert(V.format),kt=vt.convert(V.type);let We;V.isData3DTexture?(st.setTexture3D(V,0),We=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(st.setTexture2DArray(V,0),We=T.TEXTURE_2D_ARRAY):(st.setTexture2D(V,0),We=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);const le=T.getParameter(T.UNPACK_ROW_LENGTH),Zn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ms=T.getParameter(T.UNPACK_SKIP_PIXELS),bn=T.getParameter(T.UNPACK_SKIP_ROWS),To=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ce.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ce.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Gt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ft);const ye=C.isDataArrayTexture||C.isData3DTexture,zn=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const Hn=et.get(C),tn=et.get(V),pn=et.get(Hn.__renderTarget),Oc=et.get(tn.__renderTarget);q.bindFramebuffer(T.READ_FRAMEBUFFER,pn.__webglFramebuffer),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,Oc.__webglFramebuffer);for(let Mr=0;Mr<Pt;Mr++)ye&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,et.get(C).__webglTexture,G,Ft+Mr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,et.get(V).__webglTexture,gt,be+Mr)),T.blitFramebuffer(Gt,Wt,At,Nt,Qt,he,At,Nt,T.DEPTH_BUFFER_BIT,T.NEAREST);q.bindFramebuffer(T.READ_FRAMEBUFFER,null),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||et.has(C)){const Hn=et.get(C),tn=et.get(V);q.bindFramebuffer(T.READ_FRAMEBUFFER,ox),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,ax);for(let pn=0;pn<Pt;pn++)ye?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Hn.__webglTexture,G,Ft+pn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Hn.__webglTexture,G),zn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,tn.__webglTexture,gt,be+pn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,tn.__webglTexture,gt),G!==0?T.blitFramebuffer(Gt,Wt,At,Nt,Qt,he,At,Nt,T.COLOR_BUFFER_BIT,T.NEAREST):zn?T.copyTexSubImage3D(We,gt,Qt,he,be+pn,Gt,Wt,At,Nt):T.copyTexSubImage2D(We,gt,Qt,he,Gt,Wt,At,Nt);q.bindFramebuffer(T.READ_FRAMEBUFFER,null),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else zn?C.isDataTexture||C.isData3DTexture?T.texSubImage3D(We,gt,Qt,he,be,At,Nt,Pt,ne,kt,Ce.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(We,gt,Qt,he,be,At,Nt,Pt,ne,Ce.data):T.texSubImage3D(We,gt,Qt,he,be,At,Nt,Pt,ne,kt,Ce):C.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,gt,Qt,he,At,Nt,ne,kt,Ce.data):C.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,gt,Qt,he,Ce.width,Ce.height,ne,Ce.data):T.texSubImage2D(T.TEXTURE_2D,gt,Qt,he,At,Nt,ne,kt,Ce);T.pixelStorei(T.UNPACK_ROW_LENGTH,le),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Zn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ms),T.pixelStorei(T.UNPACK_SKIP_ROWS,bn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,To),gt===0&&V.generateMipmaps&&T.generateMipmap(We),q.unbindTexture()},this.copyTextureToTexture3D=function(C,V,K=null,Z=null,G=0){return Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,V,K,Z,G)},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&st.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?st.setTextureCube(C,0):C.isData3DTexture?st.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?st.setTexture2DArray(C,0):st.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){w=0,R=0,A=null,q.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const rv=n=>Math.min(1,Math.max(0,n)),Bs=n=>{const t=rv(n);return t*t*(3-2*t)},Ou=(n,t,e)=>n.map((i,r)=>i+(t[r]-i)*e);function Vs(n){return Math.sin(n*.13)*1.4+1}function sv(n){return Vs(n)-Bs((-n-126)/14)*23}function t2(n,t={x:0,y:0}){const e=rv(n/.58),i=Bs(e/.14),r=12-Bs(e)*140;let s=[Vs(r)*i,3.1,r],o=[Vs(r-12)*i,3.7-i*.6,r-12];if(n>.58&&n<=.7){const a=Bs((n-.58)/.12);s=Ou([Vs(-128),3.1,-128],[0,3.8,-137],a),o=Ou([Vs(-140),3.1,-140],[0,4,-150],a)}else if(n>.7&&n<=.83){const a=Bs((n-.7)/.13);s=Ou([0,3.8,-137],[0,8.5,-123],a),o=[0,4,-150]}else if(n>.83){const a=Bs((n-.83)/.17)*Math.PI*1.5;s=[Math.sin(a)*27,8.5+Math.sin(a)*.8,-150+Math.cos(a)*27],o=[0,4,-150]}return s[0]+=t.x*(1.6-i*1.3),s[1]-=t.y*(.65-i*.47),o[0]+=t.x*(2-i*1.6),o[1]-=t.y*.2,{posicao:s,olhar:o,tunel:e,alinhamento:i}}function e2(n,t,e,i){let r=127;const s=()=>(r=r*16807%2147483647,(r-1)/2147483646),o=new ko;o.position.set(0,0,-150),n.add(o);const a=new Ve(t(new xd(14,80)),t(new pi({color:"#658244",roughness:1})));a.rotation.x=-Math.PI/2,a.position.y=-.12,o.add(a);const l=t(new pi({color:"#5b4933",roughness:1}));function u(A,M,S,L){const N=new k().subVectors(M,A),O=t(new ec(L,S,N.length(),9)),H=new Ve(O,l);H.position.copy(A).add(M).multiplyScalar(.5),H.quaternion.setFromUnitVectors(new k(0,1,0),N.normalize()),o.add(H)}u(new k(0,0,0),new k(.25,5.6,.1),.65,.2);const c=[];for(let A=0;A<9;A++){const M=A/9*Math.PI*2,S=new k(Math.cos(M)*(2.6+s()),6+s()*2,Math.sin(M)*(2.7+s()));u(new k(.15,3.2+s()*1.8,.05),S,.25,.055),c.push(S),u(S.clone().multiplyScalar(.7).add(new k(0,1,0)),S.clone().add(new k(.7,1,.5)),.1,.025)}c.push(new k(0,8,0));const f=t(new bd(1,1)),d=t(new pi({color:"#84a449",roughness:.88,flatShading:!0})),h=t(new zr(f,d,480)),m=new Be,g=new Jt;for(let A=0;A<480;A++){const M=c[A%c.length],S=s()*Math.PI*2,L=Math.sqrt(s())*2.2;m.position.set(M.x+Math.cos(S)*L,M.y+(s()-.5)*2,M.z+Math.sin(S)*L),m.rotation.set(s()*3,s()*3,s()*3);const N=.35+s()*.65;m.scale.set(N,N*.65,N),m.updateMatrix(),h.setMatrixAt(A,m.matrix),g.setHSL(.22+s()*.075,.37+s()*.2,.2+s()*.18),h.setColorAt(A,g)}o.add(h);const v=window.innerWidth<650?850:1600,_=t(new Lc(1,7,4)),y=t(new pi({color:"#f5f8df",roughness:.65,side:ln}));y.onBeforeCompile=A=>{A.uniforms.tempo=e,A.uniforms.vento=i,A.vertexShader=`uniform float tempo; uniform float vento;
`+A.vertexShader,A.vertexShader=A.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      transformed.x+=sin(tempo*1.2+instanceMatrix[3].x+instanceMatrix[3].z)*.07+vento*.09;`)};const p=t(new zr(_,y,v*6)),x=t(new zr(_,t(new pi({color:"#e4c853",roughness:.75})),v)),E=t(new zr(t(new ec(.009,.016,1,4)),t(new pi({color:"#31532c",roughness:1})),v));for(let A=0;A<v;A++){let M,S;do{const N=s()*Math.PI*2,O=3+Math.sqrt(s())*9;M=Math.cos(N)*O,S=Math.sin(N)*O}while(Math.abs(M-sv(S-150))<2.8+Math.sin((S-150)*.09)*.8);const L=.45+s()*.5;m.position.set(M,L/2,S),m.rotation.set(0,0,0),m.scale.set(1,L,1),m.updateMatrix(),E.setMatrixAt(A,m.matrix),m.position.y=L,m.scale.set(.1,.07,.1),m.updateMatrix(),x.setMatrixAt(A,m.matrix);for(let N=0;N<6;N++){const O=N/6*Math.PI*2;m.position.set(M+Math.cos(O)*.18,L,S+Math.sin(O)*.18),m.rotation.set(0,-O,0),m.scale.set(.26,.045,.08),m.updateMatrix(),p.setMatrixAt(A*6+N,m.matrix),g.set(["#fffdf2","#fffdf2","#f4d27b","#fffdf2","#eab4a6","#d9d4ed"][A%6]),p.setColorAt(A*6+N,g)}}o.add(E,x,p);const w=t(new zr(_,y,240)),R=Array.from({length:240},()=>({angulo:s()*Math.PI*2,raio:4+s()*3.5,altura:1+s()*3,escala:.07+s()*.07}));return w.frustumCulled=!1,o.add(w),{atualizar(A,M){o.visible=M>.42,o.visible&&(R.forEach((S,L)=>{const N=S.angulo+A*.12;m.position.set(Math.cos(N)*S.raio,S.altura+Math.sin(A*.6+N)*.4,Math.sin(N)*S.raio),m.rotation.set(N+A*.3,N,N*.5),m.scale.set(S.escala,S.escala*.2,S.escala*.55),m.updateMatrix(),w.setMatrixAt(L,m.matrix)}),w.instanceMatrix.needsUpdate=!0,h.rotation.y=Math.sin(A*.3)*.012)}}}const n2={key:0,class:"campo-alternativo","aria-hidden":"true"},i2={__name:"Campo",props:{movimento:Boolean},emits:["progresso"],setup(n,{emit:t}){const e=n,i=t,r=Oe(null),s=Oe(!0);let o,a,l,u,c,f,d=!0,h=0;const m={x:0,y:0},g=[],v={value:0},_={value:0};let y,p=0,x=0,E=0;const w=new Lt,R=new Lt;let A=0;const M=new _1,S=new k,L=new k,N=new k;function O(){if(!y)return;const ft=y.getBoundingClientRect();p=xs.clamp(-ft.top/Math.max(1,ft.height-window.innerHeight),0,1),i("progresso",p)}function H(){m.x=0,m.y=0,E=0}function $(ft){const St=r.value.getBoundingClientRect();if(ft.clientY<St.top||ft.clientY>St.bottom||ft.clientX<St.left||ft.clientX>St.right){H();return}const Xt=(ft.clientX-St.left)/St.width-.5,rt=(ft.clientY-St.top)/St.height-.5;A=Math.min(2,A+Math.hypot(Xt-m.x,rt-m.y)*5),m.x=Xt,m.y=rt,E=1}function B(ft){ft.relatedTarget||H()}function X(ft){return g.push(ft),ft}function z(){if(!o)return;const{width:ft,height:St}=r.value.getBoundingClientRect();o.setSize(ft,St),l.aspect=ft/St,l.fov=ft<650?62:47,l.updateProjectionMatrix(),O()}function ht(ft){return sv(ft)}function pt(ft){return 2.5+Math.sin(ft*.09)*.8}return Sc(()=>{y=r.value.closest(".percurso-campo"),window.addEventListener("pointermove",$,{passive:!0}),window.addEventListener("pointerout",B),window.addEventListener("blur",H),window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O,{passive:!0}),O();try{let F=function(it){u=requestAnimationFrame(F);const at=Math.min((it-zt)/1e3,.05);if(zt=it,!d||document.hidden)return;e.movimento&&(h+=at),v.value=h;const Et=1-Math.exp(-at*5);if(e.movimento){x+=(p-x)*Et,R.set(m.x,m.y),w.lerp(R,Et),A*=Math.exp(-at*2.5),_.value+=(w.x*E*(1+A)-_.value)*Et;const Zt=t2(x,w);l.position.fromArray(Zt.posicao),N.fromArray(Zt.olhar),l.lookAt(N),l.updateMatrixWorld(),Ct.rotation.y=h*.006}M.setFromCamera({x:m.x*2,y:-m.y*2},l);const dt=l.aspect<1,ot=Math.min(1,x/.58),Tt=xs.smoothstep(ot,0,.14),Ot=xs.smoothstep(ot,.06,.38),ae=xs.smoothstep(x,.54,.7),se=1-Math.exp(-at*10),dn=Math.max(0,12-l.position.z-24);Rt.forEach((Zt,hs)=>{const kn=Zt.angulo+h*.16+ot*Math.PI*3,li=Zt.raio+Math.sin(h+Zt.fase)*.12;if(Zt.solta)Q.position.set(Math.sin(Zt.fase*7+h*.12)*16,1+(Zt.fase*2+h*.23)%10,-12+Math.cos(Zt.fase)*10-dn);else{const Sr=-7+Zt.espessura+Math.cos(kn)*.7-Ot*Zt.fase*2.8-dn;Q.position.set(xs.lerp(dt?0:3.5,Vs(Sr),Tt)+Math.cos(kn)*(li+Ot*1.4),xs.lerp(5.5,3.1,Tt)+Math.sin(kn)*(li+Ot*.6),Sr)}const ds=Zt.angulo+h*.16+Zt.fase*.35,Eo=6+(Zt.raio-1.45)*5.5;if(Q.position.lerp(S.set(Math.cos(ds)*Eo,1.3+Zt.fase*.8+Math.sin(h*.7+Zt.angulo)*.5,-150+Math.sin(ds)*Eo),ae),e.movimento){M.ray.closestPointToPoint(Q.position,S),L.subVectors(Q.position,S);const Sr=L.length(),ps=Math.max(0,1-Sr/5.5)*E;L.normalize().multiplyScalar(ps*Math.min(4.2,(6.5+A*2)*Zt.resposta)),Zt.deslocamento.lerp(L,se)}Q.position.add(Zt.deslocamento),Q.rotation.set(Zt.fase+h*.55,kn+h*.2,kn+Zt.fase),Q.scale.setScalar(Zt.escala*(1+ae*.35)),Q.updateMatrix(),yt.setMatrixAt(hs,Q.matrix)}),yt.instanceMatrix.needsUpdate=!0,vt.atualizar(h,x),st.forEach((Zt,hs)=>{const kn=l.position.z-(4-hs*24);Zt.visible=x>.67?Math.abs(kn)<85:kn>-20&&kn<85}),o.render(a,l)};o=new QP({antialias:!0,alpha:!1,powerPreference:"high-performance"}),o.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),o.toneMapping=S0,o.toneMappingExposure=1.15,r.value.appendChild(o.domElement),a=new Tw,a.background=new Jt("#bccdbb"),a.fog=new gd("#b6c9b1",.032),l=new qn(47,1,.1,180),l.position.set(0,3.1,12),l.lookAt(0,3.7,-12),a.add(new f1("#f5ffe8","#16331b",2.2));const ft=new p1("#ecffd2",3.2);ft.position.set(-12,18,-8),a.add(ft);const St=X(new Jr(180,300,1,1)),Xt=X(new pi({color:"#263e20",roughness:1})),rt=new Ve(St,Xt);rt.rotation.x=-Math.PI/2,rt.position.set(0,-.16,-115),a.add(rt);for(let it=0;it<4;it++){const at=X(new Jr(190,22,100,1)),Et=at.attributes.position;for(let Tt=0;Tt<Et.count;Tt++){const Ot=Et.getX(Tt),ae=3.5+it*1.3+Math.sin(Ot*.065+it*2)*2.8+Math.cos(Ot*.16+it)*1.2;Et.setY(Tt,Et.getY(Tt)>0?ae:-6)}at.computeVertexNormals();const dt=X(new _d({color:["#354d36","#466349","#5c755b","#73886b"][it],side:ln})),ot=new Ve(at,dt);ot.position.z=-215-it*13,a.add(ot)}const _t=X(new Lc(1,20,12)),Dt=X(new pi({color:"#3b5831",roughness:1}));for(let it=0;it<14;it++){const at=new Ve(_t,Dt);at.position.set((it%2?-1:1)*(24+Math.sin(it)*5),-2,-8-it*12),at.scale.set(13,4+Math.sin(it*2)*2,19),a.add(at)}const Mt=[],Ut=[],Kt=[],It=20,re=480;for(let it=0;it<=re;it++){const at=17-it*.5,Et=ht(at),dt=pt(at);for(let ot=0;ot<=It;ot++){const Tt=ot/It;if(Mt.push(Et+(Tt*2-1)*dt,.025,at),Ut.push(Tt,it/re),it<re&&ot<It){const Ot=it*(It+1)+ot;Kt.push(Ot,Ot+It+1,Ot+1,Ot+1,Ot+It+1,Ot+It+2)}}}const ee=X(new hn);ee.setAttribute("position",new Me(Mt,3)),ee.setIndex(Kt),ee.setAttribute("uv",new Me(Ut,2)),ee.computeVertexNormals();const D=X(ee.clone());D.translate(0,-.13,0);const T=X(new Ei({uniforms:{tempo:v},vertexShader:"varying vec3 ponto; varying vec2 faixa; void main(){ ponto=position; faixa=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
        uniform float tempo; varying vec3 ponto; varying vec2 faixa;
        vec2 semente(vec2 p){ return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453); }
        void main(){
          vec2 p=ponto.xz*5.5+vec2(sin(ponto.z*2.+tempo*.5),cos(ponto.x*3.-tempo*.4))*.09;
          vec2 celula=floor(p), local=fract(p), identidade=vec2(0.); float distancia=8.;
          for(int x=-1;x<=1;x++) for(int y=-1;y<=1;y++){
            vec2 vizinha=vec2(float(x),float(y)); vec2 centro=vizinha+semente(celula+vizinha)-local;
            float d=dot(centro,centro); if(d<distancia){ distancia=d; identidade=celula+vizinha; }
          }
          float variedade=semente(identidade).x;
          vec3 pedra=mix(vec3(.28,.39,.32),vec3(.68,.72,.53),variedade);
          pedra*=.65+.35*(1.-smoothstep(.03,.5,distancia));
          float luz=sin(ponto.x*3.8+ponto.z*2.5+tempo*.9+sin(ponto.z*2.-tempo*.4));
          float luz2=sin(ponto.x*2.9-ponto.z*4.2-tempo*.65+cos(ponto.x*2.4+tempo*.3));
          float reflexo=pow(max(0.,1.-abs(luz+luz2)*.62),12.);
          float centro=sin(faixa.x*3.14159);
          vec3 cor=mix(pedra,vec3(.025,.38,.33),centro*.6)+vec3(.48,.66,.42)*reflexo*.38;
          float nevoa=1.-exp(-length(cameraPosition-ponto)*.021);
          gl_FragColor=vec4(mix(cor,vec3(.30,.62,.55),nevoa*.45),1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,side:ln}));a.add(new Ve(D,T));const Y=X(new Ei({uniforms:{tempo:v},vertexShader:`uniform float tempo; varying vec3 ponto; varying vec2 faixa;
          void main(){ vec3 posicao=position; faixa=uv;
            posicao.y+=(sin(position.x*2.2+position.z*1.4-tempo*.8)*.016+sin(position.z*3.3-position.x*1.7+tempo*.6)*.009)*sin(uv.x*3.14159);
            ponto=posicao; gl_Position=projectionMatrix*modelViewMatrix*vec4(posicao,1.);
          }`,fragmentShader:`uniform float tempo; varying vec3 ponto; varying vec2 faixa;
          void main(){
            float a=ponto.x*2.2+ponto.z*1.4-tempo*.8;
            float b=ponto.z*3.3-ponto.x*1.7+tempo*.6;
            float c=ponto.x*7.1+ponto.z*5.2+sin(ponto.z*1.3+tempo*.4)-tempo*1.2;
            vec3 normal=normalize(vec3(-cos(a)*.07+cos(b)*.045+sin(c)*.018,1.,-cos(a)*.05-cos(b)*.08+cos(c)*.023));
            vec3 olhar=normalize(cameraPosition-ponto);
            float fresnel=.04+.96*pow(1.-max(dot(olhar,normal),0.),4.);
            vec3 ceu=mix(vec3(.04,.24,.28),vec3(.26,.63,.65),clamp(normal.z*3.+.58,0.,1.));
            vec3 cor=mix(vec3(.055,.49,.43),ceu,fresnel);
            vec3 meio=normalize(olhar+normalize(vec3(-.28,.52,-.8)));
            float brilho=pow(max(dot(normal,meio),0.),120.);
            cor+=vec3(1.,.98,.78)*brilho*1.6;
            float borda=pow(abs(faixa.x*2.-1.),14.);
            cor=mix(cor,vec3(.61,.83,.64),borda*.25);
            float nevoa=1.-exp(-length(cameraPosition-ponto)*.018);
            cor=mix(cor,vec3(.28,.62,.56),nevoa*.35);
            gl_FragColor=vec4(cor,clamp(.32+fresnel*.32+brilho*.25,.32,.8));
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,side:ln,transparent:!0,depthWrite:!1}));a.add(new Ve(ee,Y));const nt=X(new Jr(.07,1,1,4));nt.translate(0,.5,0);const tt=nt.attributes.position;for(let it=0;it<tt.count;it++)tt.setX(it,tt.getX(it)*(1-tt.getY(it)*.96));const q=X(new pi({color:"#638f39",roughness:.95,side:ln}));q.onBeforeCompile=it=>{it.uniforms.tempo=v,it.uniforms.vento=_,it.vertexShader=`uniform float tempo; uniform float vento;
`+it.vertexShader,it.vertexShader=it.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float fase=instanceMatrix[3].x*.6+instanceMatrix[3].z*.5;
        transformed.x += (sin(tempo*1.4+fase)*.22+vento*.5)*position.y*position.y;
        transformed.z += cos(tempo*.9+fase)*position.y*position.y*.1;`)};const ut=window.innerWidth<650?38e3:76e3,et=ut/8,st=Array.from({length:8},()=>X(new zr(nt,q,et))),Q=new Be,P=new Jt;let b=913;const U=()=>(b=b*16807%2147483647,(b-1)/2147483646);for(let it=0;it<ut;it++){const at=Math.floor(it/et),Et=st[at];let dt,ot;do dt=(U()-.5)*(it%4===0?76:24),ot=16-at*24-U()*24;while(Math.abs(dt-ht(ot))<pt(ot)+.12);Q.position.set(dt,-.12,ot),Q.rotation.set((U()-.5)*.2,U()*Math.PI,(U()-.5)*.2);const Tt=(.22+U()*.75)*(Math.hypot(dt,ot+150)<14?.22:1);Q.scale.set(.7+U(),Tt,1),Q.updateMatrix(),Et.setMatrixAt(it%et,Q.matrix),P.setHSL(.23+U()*.065,.3+U()*.25,.12+U()*.2),Et.setColorAt(it%et,P)}a.add(...st);const W=new q0;W.moveTo(0,-.5),W.bezierCurveTo(.43,-.16,.31,.28,0,.5),W.bezierCurveTo(-.31,.24,-.42,-.17,0,-.5);const J=X(new Ed(W,5)),j=J.attributes.position;for(let it=0;it<j.count;it++)j.setZ(it,Math.abs(j.getX(it))*.4);J.computeVertexNormals();const xt=X(new pi({color:"#acdc69",roughness:.64,metalness:.12,side:ln})),mt=window.innerWidth<650?3200:6e3,yt=new zr(J,xt,mt);yt.instanceMatrix.setUsage(UT),yt.frustumCulled=!1;const Rt=Array.from({length:mt},(it,at)=>(P.setHSL(.19+U()*.14,.38+U()*.35,.18+U()*.47),yt.setColorAt(at,P),{angulo:U()*Math.PI*2,raio:2.05+(U()-.5)*1.2,espessura:(U()-.5)*1.7,escala:.12+U()*.24,fase:U()*10,solta:at<240,resposta:at%5<3?.18+U()*.12:.8+U()*.2,deslocamento:new k}));a.add(yt);const lt=X(new hn),bt=new Float32Array(480*3);for(let it=0;it<bt.length;it+=3)bt[it]=(U()-.5)*36,bt[it+1]=U()*12,bt[it+2]=7-U()*190;lt.setAttribute("position",new Yn(bt,3));const Bt=X(new z0({color:"#f0ffce",size:.025,transparent:!0,opacity:.6,depthWrite:!1})),Ct=new Pw(lt,Bt);a.add(Ct);const vt=e2(a,X,v,_);c=new ResizeObserver(z),c.observe(r.value),z(),f=new IntersectionObserver(([it])=>{d=it.isIntersecting}),f.observe(r.value);let zt=0;u=requestAnimationFrame(F)}catch{s.value=!1,o?.dispose()}}),Mc(()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",O),window.removeEventListener("pointermove",$),window.removeEventListener("pointerout",B),window.removeEventListener("blur",H),cancelAnimationFrame(u),c?.disconnect(),f?.disconnect(),g.forEach(ft=>ft.dispose()),o?.dispose()}),(ft,St)=>(ce(),Ee("div",{ref_key:"recipiente",ref:r,class:"campo-interativo",role:"img","aria-label":"Campo tridimensional: role para avançar pelo riacho e atravesse as folhas; mova o ponteiro para afastá-las e mudar a direção do vento"},[ct(s)?Ur("",!0):(ce(),Ee("div",n2,[(ce(),Ee(an,null,Ty(28,Xt=>I("span",{key:Xt,style:ns({left:`${Xt*17%100}%`,top:`${Xt*23%80}%`,transform:`rotate(${Xt*37}deg)`})},null,4)),64))]))],512))}},r2=/^[a-z][a-z0-9-]*$/i;function s2(n,t){return n&&r2.test(n)?n:t}const o2=Symbol.for("nuxt:client-only"),a2=zh({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:t,attrs:e}){const i=Yu(!1);Sc(()=>{i.value=!0});const r=vo();return r&&(r._nuxtClientOnly=!0),Oh(o2,!0),()=>{if(i.value){const l=t.default?.();return l&&l.length===1?[is(l[0],e)]:l}const s=t.fallback||t.placeholder;if(s)return Fg(s);const o=n.fallback||n.placeholder||"",a=s2(n.fallbackTag||n.placeholderTag,"span");return Ee(a,e,o)}}}),ci={name:"Victor",role:"Desenvolvimento web & experiências digitais",email:"",github:"",linkedin:"",bio:"Sou o Victor, desenvolvedor web. Já trabalhei em sites para empresas e sistemas de gestão, cuidando tanto das telas quanto da lógica e do banco de dados. Aqui reuni alguns desses projetos para mostrar um pouco do que faço."};function Oi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ov(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},va={duration:.5,overwrite:!1,delay:0},wd,je,Se,jn=1e8,_e=1/jn,uh=Math.PI*2,l2=uh/4,c2=0,av=Math.sqrt,u2=Math.cos,f2=Math.sin,Ge=function(t){return typeof t=="string"},De=function(t){return typeof t=="function"},qi=function(t){return typeof t=="number"},Ad=function(t){return typeof t>"u"},Ti=function(t){return typeof t=="object"},vn=function(t){return t!==!1},Rd=function(){return typeof window<"u"},yl=function(t){return De(t)||Ge(t)},lv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qe=Array.isArray,h2=/random\([^)]+\)/g,d2=/,\s*/g,t_=/(?:-?\.?\d|\.)+/gi,cv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uv=/[+-]=-?[.\d]+/,p2=/[^,'"\[\]\s]+/gi,m2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,we,hi,fh,Cd,Fn={},nc={},fv,hv=function(t){return(nc=fo(t,Fn))&&Mn},Pd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xa=function(t,e){return!e&&console.warn(t)},dv=function(t,e){return t&&(Fn[t]=e)&&nc&&(nc[t]=e)||Fn},ya=function(){return 0},_2={suppressEvents:!0,isStart:!0,kill:!1},Ll={suppressEvents:!0,kill:!1},g2={suppressEvents:!0},Ld={},fr=[],hh={},pv,An={},Bu={},e_=30,Dl=[],Dd="",Id=function(t){var e=t[0],i,r;if(Ti(e)||De(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Dl.length;r--&&!Dl[r].targetTest(e););i=Dl[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Ov(t[r],i)))||t.splice(r,1);return t},Zr=function(t){return t._gsap||Id($n(t))[0]._gsap},mv=function(t,e,i){return(i=t[e])&&De(i)?t[e]():Ad(i)&&t.getAttribute&&t.getAttribute(e)||i},xn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ie=function(t){return Math.round(t*1e5)/1e5||0},Te=function(t){return Math.round(t*1e7)/1e7||0},to=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},v2=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},ic=function(){var t=fr.length,e=fr.slice(0),i,r;for(hh={},fr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ud=function(t){return!!(t._initted||t._startAt||t.add)},_v=function(t,e,i,r){fr.length&&!je&&ic(),t.render(e,i,!!(je&&e<0&&Ud(t))),fr.length&&!je&&ic()},gv=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(p2).length<2?e:Ge(t)?t.trim():t},vv=function(t){return t},Bn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},x2=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},fo=function(t,e){for(var i in e)t[i]=e[i];return t},n_=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ti(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},rc=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},Qo=function(t){var e=t.parent||we,i=t.keyframes?x2(Qe(t.keyframes)):Bn;if(vn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},y2=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},xv=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Ic=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},_r=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Qr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},S2=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},dh=function(t,e,i,r){return t._startAt&&(je?t._startAt.revert(Ll):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},M2=function n(t){return!t||t._ts&&n(t.parent)},i_=function(t){return t._repeat?ho(t._tTime,t=t.duration()+t._rDelay)*t:0},ho=function(t,e){var i=Math.floor(t=Te(t/e));return t&&i===t?i-1:i},sc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Uc=function(t){return t._end=Te(t._start+(t._tDur/Math.abs(t._ts||t._rts||_e)||0))},Nc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Te(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Uc(t),i._dirty||Qr(i,t)),t},yv=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=sc(t.rawTime(),e),(!e._dur||Ua(0,e.totalDuration(),i)-e._tTime>_e)&&e.render(i,!0)),Qr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-_e}},gi=function(t,e,i,r){return e.parent&&_r(e),e._start=Te((qi(i)?i:i||t!==we?Wn(t,i,e):t._time)+e._delay),e._end=Te(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),xv(t,e,"_first","_last",t._sort?"_start":0),ph(e)||(t._recent=e),r||yv(t,e),t._ts<0&&Nc(t,t._tTime),t},Sv=function(t,e){return(Fn.ScrollTrigger||Pd("scrollTrigger",e))&&Fn.ScrollTrigger.create(e,t)},Mv=function(t,e,i,r,s){if(Od(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&pv!==Cn.frame)return fr.push(t),t._lazy=[s,r],1},b2=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},ph=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},E2=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&b2(t)&&!(!t._initted&&ph(t))||(t._ts<0||t._dp._ts<0)&&!ph(t))?0:1,a=t._rDelay,l=0,u,c,f;if(a&&t._repeat&&(l=Ua(0,t._tDur,e),c=ho(l,a),t._yoyo&&c&1&&(o=1-o),c!==ho(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||je||r||t._zTime===_e||!e&&t._zTime){if(!t._initted&&Mv(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?_e:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;e<0&&dh(t,e,i,!0),t._onUpdate&&!i&&Ln(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&_r(t,1),!i&&!je&&(Ln(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},T2=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},po=function(t,e,i,r){var s=t._repeat,o=Te(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Te(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Nc(t,t._tTime=t._tDur*a),t.parent&&Uc(t),i||Qr(t.parent,t),t},r_=function(t){return t instanceof mn?Qr(t):po(t,t._dur)},w2={_start:0,endTime:ya,totalDuration:ya},Wn=function n(t,e,i){var r=t.labels,s=t._recent||w2,o=t.duration()>=jn?s.endTime(!1):t._dur,a,l,u;return Ge(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&i&&(l=l/100*(Qe(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},ta=function(t,e,i){var r=qi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;o.immediateRender=vn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Fe(e[0],o,e[s+1])},yr=function(t,e){return t||t===0?e(t):e},Ua=function(t,e,i){return i<t?t:i>e?e:i},Ze=function(t,e){return!Ge(t)||!(e=m2.exec(t))?"":e[1]},A2=function(t,e,i){return yr(i,function(r){return Ua(t,e,r)})},mh=[].slice,bv=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==hi},R2=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Ge(r)&&!e||bv(r,1)?(s=i).push.apply(s,$n(r)):i.push(r)})||i},$n=function(t,e,i){return Se&&!e&&Se.selector?Se.selector(t):Ge(t)&&!i&&(fh||!mo())?mh.call((e||Cd).querySelectorAll(t),0):Qe(t)?R2(t,i):bv(t)?mh.call(t,0):t?[t]:[]},_h=function(t){return t=$n(t)[0]||xa("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return $n(e,i.querySelectorAll?i:i===t?xa("Invalid scope")||Cd.createElement("div"):t)}},Ev=function(t){return t.sort(function(){return .5-Math.random()})},Tv=function(t){if(De(t))return t;var e=Ti(t)?t:{each:t},i=ts(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=e.axis,c=r,f=r;return Ge(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,h,m){var g=(m||e).length,v=o[g],_,y,p,x,E,w,R,A,M;if(!v){if(M=e.grid==="auto"?0:(e.grid||[1,jn])[1],!M){for(R=-jn;R<(R=m[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(v=o[g]=[],_=l?Math.min(M,g)*c-.5:r%M,y=M===jn?0:l?g*f/M-.5:r/M|0,R=0,A=jn,w=0;w<g;w++)p=w%M-_,x=y-(w/M|0),v[w]=E=u?Math.abs(u==="y"?x:p):av(p*p+x*x),E>R&&(R=E),E<A&&(A=E);r==="random"&&Ev(v),v.max=R-A,v.min=A,v.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),v.b=g<0?s-g:s,v.u=Ze(e.amount||e.each)||0,i=i&&g<0?H2(i):i}return g=(v[d]-v.min)/v.max||0,Te(v.b+(i?i(g):g)*v.v)+v.u}},gh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Te(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(qi(i)?0:Ze(i))}},wv=function(t,e){var i=Qe(t),r,s;return!i&&Ti(t)&&(r=i=t.radius||jn,t.values?(t=$n(t.values),(s=!qi(t[0]))&&(r*=r)):t=gh(t.increment)),yr(e,i?De(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=jn,c=0,f=t.length,d,h;f--;)s?(d=t[f].x-a,h=t[f].y-l,d=d*d+h*h):d=Math.abs(t[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?t[c]:o,s||c===o||qi(o)?c:c+Ze(o)}:gh(t))},Av=function(t,e,i,r){return yr(Qe(t)?!e:i===!0?!!(i=0):!r,function(){return Qe(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},C2=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},P2=function(t,e){return function(i){return t(parseFloat(i))+(e||Ze(i))}},L2=function(t,e,i){return Cv(t,e,0,1,i)},Rv=function(t,e,i){return yr(i,function(r){return t[~~e(r)]})},D2=function n(t,e,i){var r=e-t;return Qe(t)?Rv(t,n(0,t.length),e):yr(i,function(s){return(r+(s-t)%r)%r+t})},I2=function n(t,e,i){var r=e-t,s=r*2;return Qe(t)?Rv(t,n(0,t.length-1),e):yr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Sa=function(t){return t.replace(h2,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(d2);return Av(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Cv=function(t,e,i,r,s){var o=e-t,a=r-i;return yr(s,function(l){return i+((l-t)/o*a||0)})},U2=function n(t,e,i,r){var s=isNaN(t+e)?0:function(h){return(1-h)*t+h*e};if(!s){var o=Ge(t),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(Qe(t)&&!Qe(e)){for(c=[],f=t.length,d=f-2,u=1;u<f;u++)c.push(n(t[u-1],t[u]));f--,s=function(m){m*=f;var g=Math.min(d,~~m);return c[g](m-g)},i=e}else r||(t=fo(Qe(t)?[]:{},t));if(!c){for(l in e)Nd.call(a,t,l,"get",e[l]);s=function(m){return kd(m,a)||(o?t.p:t)}}}return yr(i,s)},s_=function(t,e,i){var r=t.labels,s=jn,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ln=function(t,e,i){var r=t.vars,s=r[e],o=Se,a=t._ctx,l,u,c;if(s)return l=r[e+"Params"],u=r.callbackScope||t,i&&fr.length&&ic(),a&&(Se=a),c=l?s.apply(u,l):s.call(u),Se=o,c},Vo=function(t){return _r(t),t.scrollTrigger&&t.scrollTrigger.kill(!!je),t.progress()<1&&Ln(t,"onInterrupt"),t},Ws,Pv=[],Lv=function(t){if(t)if(t=!t.name&&t.default||t,Rd()||t.headless){var e=t.name,i=De(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:ya,render:kd,add:Nd,kill:J2,modifier:K2,rawVars:0},o={targetTest:0,get:0,getSetter:Bd,aliases:{},register:0};if(mo(),t!==r){if(An[e])return;Bn(r,Bn(rc(t,s),o)),fo(r.prototype,fo(s,rc(t,o))),An[r.prop=e]=r,t.targetTest&&(Dl.push(r),Ld[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}dv(e,r),t.register&&t.register(Mn,r,yn)}else Pv.push(t)},me=255,Go={aqua:[0,me,me],lime:[0,me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,me],navy:[0,0,128],white:[me,me,me],olive:[128,128,0],yellow:[me,me,0],orange:[me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[me,0,0],pink:[me,192,203],cyan:[0,me,me],transparent:[me,me,me,0]},ku=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*me+.5|0},Dv=function(t,e,i){var r=t?qi(t)?[t>>16,t>>8&me,t&me]:0:Go.black,s,o,a,l,u,c,f,d,h,m;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Go[t])r=Go[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&me,r&me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&me,t&me]}else if(t.substr(0,3)==="hsl"){if(r=m=t.match(t_),!e)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=ku(l+1/3,s,o),r[1]=ku(l,s,o),r[2]=ku(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(cv),i&&r.length<4&&(r[3]=1),r}else r=t.match(t_)||Go.transparent;r=r.map(Number)}return e&&!m&&(s=r[0]/me,o=r[1]/me,a=r[2]/me,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(h=f-d,u=c>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Iv=function(t){var e=[],i=[],r=-1;return t.split(hr).forEach(function(s){var o=s.match(Gs)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},o_=function(t,e,i){var r="",s=(t+r).match(hr),o=e?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return t;if(s=s.map(function(d){return(d=Dv(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=Iv(t),l=i.c,l.join(r)!==c.c.join(r)))for(u=t.replace(hr,"1").split(Gs),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=t.split(hr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},hr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Go)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),N2=/hsl[a]?\(/,Uv=function(t){var e=t.join(" "),i;if(hr.lastIndex=0,hr.test(e))return i=N2.test(e),t[1]=o_(t[1],i),t[0]=o_(t[0],i,Iv(t[1])),!0},Ma,Cn=(function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,h,m=function g(v){var _=n()-r,y=v===!0,p,x,E,w;if((_>t||_<0)&&(i+=_-e),r+=_,E=r-i,p=E-o,(p>0||y)&&(w=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,o+=p+(p>=s?4:s-p),x=1),y||(l=u(g)),x)for(h=0;h<a.length;h++)a[h](E,d,w,v)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(v){return d/(1e3/(v||60))},wake:function(){fv&&(!fh&&Rd()&&(hi=fh=window,Cd=hi.document||{},Fn.gsap=Mn,(hi.gsapVersions||(hi.gsapVersions=[])).push(Mn.version),hv(nc||hi.GreenSockGlobals||!hi.gsap&&hi||{}),Pv.forEach(Lv)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(v){return setTimeout(v,o-f.time*1e3+1|0)},Ma=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ma=0,u=ya},lagSmoothing:function(v,_){t=v||1/0,e=Math.min(_||33,t)},fps:function(v){s=1e3/(v||240),o=f.time*1e3+s},add:function(v,_,y){var p=_?function(x,E,w,R){v(x,E,w,R),f.remove(p)}:v;return f.remove(v),a[y?"unshift":"push"](p),mo(),p},remove:function(v,_){~(_=a.indexOf(v))&&a.splice(_,1)&&h>=_&&h--},_listeners:a},f})(),mo=function(){return!Ma&&Cn.wake()},te={},O2=/^[\d.\-M][\d.\-,\s]/,F2=/["']/g,B2=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),e[r]=isNaN(u)?u.replace(F2,"").trim():+u,r=l.substr(a+1).trim();return e},k2=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},z2=function(t){var e=(t+"").split("("),i=te[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[B2(e[1])]:k2(t).split(",").map(gv)):te._CE&&O2.test(t)?te._CE("",t):i},H2=function(t){return function(e){return 1-t(1-e)}},ts=function(t,e){return t&&(De(t)?t:te[t]||z2(t))||e},fs=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return xn(t,function(a){te[a]=Fn[a]=s,te[o=a.toLowerCase()]=i;for(var l in s)te[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=te[a+"."+l]=s[l]}),s},Nv=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},zu=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/uh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*f2((c-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:Nv(a);return s=uh/s,l.config=function(u,c){return n(t,u,c)},l},Hu=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Nv(i);return r.config=function(s){return n(t,s)},r};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;fs(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});te.Linear.easeNone=te.none=te.Linear.easeIn;fs("Elastic",zu("in"),zu("out"),zu());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);fs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});fs("Circ",function(n){return-(av(1-n*n)-1)});fs("Sine",function(n){return n===1?1:-u2(n*l2)+1});fs("Back",Hu("in"),Hu("out"),Hu());te.SteppedEase=te.steps=Fn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-_e;return function(a){return((r*Ua(0,o,a)|0)+s)*i}}};va.ease=te["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Dd+=n+","+n+"Params,"});var Ov=function(t,e){this.id=c2++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mv,this.set=e?e.getSetter:Bd},ba=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,po(this,+e.duration,1,1),this.data=e.data,Se&&(this._ctx=Se,Se.data.push(this)),Ma||Cn.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,po(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(mo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nc(this,i),!s._dp||s.parent||yv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===_e||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),_v(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+i_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+i_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ho(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-_e?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?sc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-_e?0:this._rts,this.totalTime(Ua(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Uc(this),S2(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_e&&(this._tTime-=_e)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Te(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(vn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sc(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=g2);var r=je;return je=i,Ud(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),je=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,r_(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,r_(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Wn(this,i),vn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,vn(r)),this._dur||(this._zTime=-_e),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_e,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-_e)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=De(i)?i:vv,l=function(){var c=r.then;r.then=null,s&&s(),De(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){Vo(this)},n})();Bn(ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_e,_prom:0,_ps:!1,_rts:1});var mn=(function(n){ov(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=vn(i.sortChildren),we&&gi(i.parent||we,Oi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Sv(Oi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return ta(0,arguments,this),this},e.from=function(r,s,o){return ta(1,arguments,this),this},e.fromTo=function(r,s,o,a){return ta(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Fe(r,s,Wn(this,o),1),this},e.call=function(r,s,o){return gi(this,Fe.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Fe(r,o,Wn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Qo(o).immediateRender=vn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},e.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Qo(a).immediateRender=vn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Te(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,h,m,g,v,_,y,p,x,E,w,R;if(this!==we&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,x=this._start,p=this._ts,_=!p,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,v=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(v*100+r,s,o);if(d=Te(c%v),c===l?(g=this._repeat,d=u):(E=Te(c/v),g=~~E,g&&g===E&&(d=u,g--),d>u&&(d=u)),E=ho(this._tTime,v),!a&&this._tTime&&E!==g&&this._tTime-E*v-this._dur<=0&&(E=g),w&&g&1&&(d=u-d,R=1),g!==E&&!this._lock){var A=w&&E&1,M=A===(w&&g&1);if(g<E&&(A=!A),a=A?0:c%u?u:c,this._lock=1,this.render(a||(R?0:Te(g*v)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,E=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=A?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=T2(this,Te(a),Te(d)),y&&(c-=d-(d=y._start))),this._tTime=c,this._time=d,this._act=!!p,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!E&&(Ln(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!_){y=0,m&&(c+=this._zTime=-_e);break}}h=m}else{h=this._last;for(var S=r<0?r:d;h;){if(m=h._prev,(h._act||S<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(S-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(S-h._start)*h._ts,s,o||je&&Ud(h)),d!==this._time||!this._ts&&!_){y=0,m&&(c+=this._zTime=S?-_e:_e);break}}h=m}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-_e)._zTime=d>=a?1:-1,this._ts))return this._start=x,Uc(this),this.render(r,s,o);this._onUpdate&&!s&&Ln(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(x===this._start||Math.abs(p)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&_r(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ln(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(qi(s)||(s=Wn(this,s,r)),!(r instanceof ba)){if(Qe(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ge(r))return this.addLabel(r,s);if(De(r))r=Fe.delayedCall(0,r);else return this}return this!==r?gi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Fe?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Ge(r)?this.removeLabel(r):De(r)?this.killTweensOf(r):(r.parent===this&&Ic(this,r),r===this._recent&&(this._recent=this._last),Qr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Te(Cn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Fe.delayedCall(0,s||ya,o);return a.data="isPause",this._hasPause=1,gi(this,a,Wn(this,r))},e.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&_r(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)sr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=$n(r),l=this._first,u=qi(s),c;l;)l instanceof Fe?v2(l._targets,a)&&(u?(!sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,h,m=Fe.to(o,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||_e,onStart:function(){if(o.pause(),!h){var v=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==v&&po(m,v,0,1).render(m._time,!0,!0),h=1}c&&c.apply(m,f||[])}},s));return d?m.render(0):m},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bn({startAt:{time:Wn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),s_(this,Wn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),s_(this,Wn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+_e)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Te(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Qr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Qr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=jn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Te(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;po(o,o===we&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(we._ts&&(_v(we,sc(r,we)),pv=Cn.frame),Cn.frame>=e_){e_+=Nn.autoSleep||120;var s=we._first;if((!s||!s._ts)&&Nn.autoSleep&&Cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Cn.sleep()}}},t})(ba);Bn(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var V2=function(t,e,i,r,s,o,a){var l=new yn(this._pt,t,e,0,1,Vv,null,s),u=0,c=0,f,d,h,m,g,v,_,y;for(l.b=i,l.e=r,i+="",r+="",(_=~r.indexOf("random("))&&(r=Sa(r)),o&&(y=[i,r],o(y,t,e),i=y[0],r=y[1]),d=i.match(Fu)||[];f=Fu.exec(r);)m=f[0],g=r.substring(u,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),m!==d[c++]&&(v=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:v,c:m.charAt(1)==="="?to(v,m)-v:parseFloat(m)-v,m:h&&h<4?Math.round:0},u=Fu.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(uv.test(r)||_)&&(l.e=0),this._pt=l,l},Nd=function(t,e,i,r,s,o,a,l,u,c){De(r)&&(r=r(s||0,t,o));var f=t[e],d=i!=="get"?i:De(f)?u?t[e.indexOf("set")||!De(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,h=De(f)?u?j2:zv:Fd,m;if(Ge(r)&&(~r.indexOf("random(")&&(r=Sa(r)),r.charAt(1)==="="&&(m=to(d,r)+(Ze(d)||0),(m||m===0)&&(r=m))),!c||d!==r||vh)return!isNaN(d*r)&&r!==""?(m=new yn(this._pt,t,e,+d||0,r-(d||0),typeof f=="boolean"?Y2:Hv,0,h),u&&(m.fp=u),a&&m.modifier(a,this,t),this._pt=m):(!f&&!(e in t)&&Pd(e,r),V2.call(this,t,e,d,r,h,l||Nn.stringFilter,u))},G2=function(t,e,i,r,s){if(De(t)&&(t=ea(t,s,e,i,r)),!Ti(t)||t.style&&t.nodeType||Qe(t)||lv(t))return Ge(t)?ea(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=ea(t[a],s,e,i,r);return o},Fv=function(t,e,i,r,s,o){var a,l,u,c;if(An[t]&&(a=new An[t]).init(s,a.rawVars?e[t]:G2(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new yn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Ws))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},sr,vh,Od=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,m=t._dur,g=t._startAt,v=t._targets,_=t.parent,y=_&&_.data==="nested"?_.vars.targets:v,p=t._overwrite==="auto"&&!wd,x=t.timeline,E=r.easeReverse||f,w,R,A,M,S,L,N,O,H,$,B,X,z;if(x&&(!d||!s)&&(s="none"),t._ease=ts(s,va.ease),t._rEase=E&&(ts(E)||t._ease),t._from=!x&&!!r.runBackwards,t._from&&(t.ratio=1),!x||d&&!r.stagger){if(O=v[0]?Zr(v[0]).harness:0,X=O&&r[O.prop],w=rc(r,Ld),g&&(g._zTime<0&&g.progress(1),e<0&&c&&a&&!h?g.render(-1,!0):g.revert(c&&m?Ll:_2),g._lazy=0),o){if(_r(t._startAt=Fe.set(v,Bn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&vn(l),startAt:null,delay:0,onUpdate:u&&function(){return Ln(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je||!a&&!h)&&t._startAt.revert(Ll),a&&m&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&m&&!g){if(e&&(a=!1),A=Bn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&vn(l),immediateRender:a,stagger:0,parent:_},w),X&&(A[O.prop]=X),_r(t._startAt=Fe.set(v,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je?t._startAt.revert(Ll):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,_e,_e);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&vn(l)||l&&!m,R=0;R<v.length;R++){if(S=v[R],N=S._gsap||Id(v)[R]._gsap,t._ptLookup[R]=$={},hh[N.id]&&fr.length&&ic(),B=y===v?R:y.indexOf(S),O&&(H=new O).init(S,X||w,t,B,y)!==!1&&(t._pt=M=new yn(t._pt,S,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ht){$[ht]=M}),H.priority&&(L=1)),!O||X)for(A in w)An[A]&&(H=Fv(A,w,t,B,S,y))?H.priority&&(L=1):$[A]=M=Nd.call(t,S,A,"get",w[A],B,y,0,r.stringFilter);t._op&&t._op[R]&&t.kill(S,t._op[R]),p&&t._pt&&(sr=t,we.killTweensOf(S,$,t.globalTime(e)),z=!t.parent,sr=0),t._pt&&l&&(hh[N.id]=1)}L&&Gv(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!z,d&&e<=0&&x.render(jn,!0,!0)},W2=function(t,e,i,r,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,f,d,h;if(!u)for(u=t._ptCache[e]=[],d=t._ptLookup,h=t._targets.length;h--;){if(c=d[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return vh=1,t.vars[e]="+=0",Od(t,a),vh=0,l?xa(e+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)f=u[h],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Ie(i)+Ze(f.e)),f.b&&(f.b=c.s+Ze(f.b))},X2=function(t,e){var i=t[0]?Zr(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=fo({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},q2=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(Qe(e))a=i[t]||(i[t]=[]),e.forEach(function(l,u){return a.push({t:u/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ea=function(t,e,i,r,s){return De(t)?t.call(e,i,r,s):Ge(t)&&~t.indexOf("random(")?Sa(t):t},Bv=Dd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",kv={};xn(Bv+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return kv[n]=1});var Fe=(function(n){ov(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Qo(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,m=l.keyframes,g=l.defaults,v=l.scrollTrigger,_=r.parent||we,y=(Qe(i)||lv(i)?qi(i[0]):"length"in r)?[i]:$n(i),p,x,E,w,R,A,M,S;if(a._targets=y.length?Id(y):xa("GSAP target "+i+" not found. https://gsap.com",!Nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||d||yl(u)||yl(c)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(p=a.timeline=new mn({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:y}),p.kill(),p.parent=p._dp=Oi(a),p._start=0,d||yl(u)||yl(c)){if(w=y.length,M=d&&Tv(d),Ti(d))for(R in d)~Bv.indexOf(R)&&(S||(S={}),S[R]=d[R]);for(x=0;x<w;x++)E=rc(r,kv),E.stagger=0,L&&(E.easeReverse=L),S&&fo(E,S),A=y[x],E.duration=+ea(u,Oi(a),x,A,y),E.delay=(+ea(c,Oi(a),x,A,y)||0)-a._delay,!d&&w===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),p.to(A,E,M?M(x,A,y):0),p._ease=te.none;p.duration()?u=c=0:a.timeline=0}else if(m){Qo(Bn(p.vars.defaults,{ease:"none"})),p._ease=ts(m.ease||r.ease||"none");var N=0,O,H,$;if(Qe(m))m.forEach(function(B){return p.to(y,B,">")}),p.duration();else{E={};for(R in m)R==="ease"||R==="easeEach"||q2(R,m[R],E,m.easeEach);for(R in E)for(O=E[R].sort(function(B,X){return B.t-X.t}),N=0,x=0;x<O.length;x++)H=O[x],$={ease:H.e,duration:(H.t-(x?O[x-1].t:0))/100*u},$[R]=H.v,p.to(y,$,N),N+=$.duration;p.duration()<u&&p.to({},{duration:u-p.duration()})}}u||a.duration(u=p.duration())}else a.timeline=0;return h===!0&&!wd&&(sr=Oi(a),we.killTweensOf(y),sr=0),gi(_,Oi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!m&&a._start===Te(_._time)&&vn(f)&&M2(Oi(a))&&_.data!=="nested")&&(a._tTime=-_e,a.render(Math.max(0,-c)||0)),v&&Sv(Oi(a),v),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-_e&&!c?l:r<_e?0:r,d,h,m,g,v,_,y,p;if(!u)E2(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,p=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(d=Te(f%g),f===l?(m=this._repeat,d=u):(v=Te(f/g),m=~~v,m&&m===v?(d=u,m--):d>u&&(d=u)),_=this._yoyo&&m&1,_&&(d=u-d),v=ho(this._tTime,g),d===a&&!o&&this._initted&&m===v)return this._tTime=f,this;m!==v&&this.vars.repeatRefresh&&!_&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Te(g*m),!0).invalidate()._lock=0)}if(!this._initted){if(Mv(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==v))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=d<a;if(x!==this._inv){var E=x?a:u-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(x?-1:1)/E:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/u);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!v&&(Ln(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;p&&p.render(r<0?r:p._dur*p._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&dh(this,r,s,o),Ln(this,"onUpdate")),this._repeat&&m!==v&&this.vars.onRepeat&&!s&&this.parent&&Ln(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&dh(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&_r(this,1),!s&&!(c&&!a)&&(f||a||_)&&(Ln(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Ma||Cn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Od(this,u),c=this._ease(u/this._dur),W2(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Nc(this,0),this.parent||xv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!je),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,sr&&sr.vars.overwrite!==!0)._first||Vo(this),this.parent&&o!==this.timeline.totalDuration()&&po(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?$n(r):a,u=this._ptLookup,c=this._pt,f,d,h,m,g,v,_;if((!s||s==="all")&&y2(a,l))return s==="all"&&(this._pt=0),Vo(this);for(f=this._op=this._op||[],s!=="all"&&(Ge(s)&&(g={},xn(s,function(y){return g[y]=1}),s=g),s=X2(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){d=u[_],s==="all"?(f[_]=s,m=d,h={}):(h=f[_]=f[_]||{},m=s);for(g in m)v=d&&d[g],v&&((!("kill"in v.d)||v.d.kill(g)===!0)&&Ic(this,v,"_pt"),delete d[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&c&&Vo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return ta(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return ta(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return we.killTweensOf(r,s,o)},t})(ba);Bn(Fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(n){Fe[n]=function(){var t=new mn,e=mh.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Fd=function(t,e,i){return t[e]=i},zv=function(t,e,i){return t[e](i)},j2=function(t,e,i,r){return t[e](r.fp,i)},$2=function(t,e,i){return t.setAttribute(e,i)},Bd=function(t,e){return De(t[e])?zv:Ad(t[e])&&t.setAttribute?$2:Fd},Hv=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Y2=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Vv=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},kd=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},K2=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},J2=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Ic(this,e,"_pt"):e.dep||(i=1),e=r;return!i},Z2=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},Gv=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},yn=(function(){function n(e,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Hv,this.d=l||this,this.set=u||Fd,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Z2,this.m=i,this.mt=s,this.tween=r},n})();xn(Dd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Ld[n]=1});Fn.TweenMax=Fn.TweenLite=Fe;Fn.TimelineLite=Fn.TimelineMax=mn;we=new mn({sortChildren:!1,defaults:va,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=Uv;var es=[],Il={},Q2=[],a_=0,tL=0,Vu=function(t){return(Il[t]||Q2).map(function(e){return e()})},xh=function(){var t=Date.now(),e=[];t-a_>2&&(Vu("matchMediaInit"),es.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=hi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&e.push(i))}),Vu("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),a_=t,Vu("matchMedia"))},Wv=(function(){function n(e,i){this.selector=i&&_h(i),this.data=[],this._r=[],this.isReverted=!1,this.id=tL++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){De(i)&&(s=r,r=i,i=De);var o=this,a=function(){var u=Se,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=_h(s)),Se=o,f=r.apply(o,arguments),De(f)&&o._r.push(f),Se=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===De?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=Se;Se=null,i(this),Se=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Fe&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof mn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Fe)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=es.length;o--;)es[o].id===this.id&&es.splice(o,1)},t.revert=function(i){this.kill(i||{})},n})(),eL=(function(){function n(e){this.contexts=[],this.scope=e,Se&&Se.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){Ti(i)||(i={matches:i});var o=new Wv(0,s||this.scope),a=o.conditions={},l,u,c;Se&&!o.selector&&(o.selector=Se.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=hi.matchMedia(i[u]),l&&(es.indexOf(o)<0&&es.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(xh):l.addEventListener("change",xh)));return c&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),oc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return Lv(r)})},timeline:function(t){return new mn(t)},getTweensOf:function(t,e){return we.getTweensOf(t,e)},getProperty:function(t,e,i,r){Ge(t)&&(t=$n(t)[0]);var s=Zr(t||{}).get,o=i?vv:gv;return i==="native"&&(i=""),t&&(e?o((An[e]&&An[e].get||s)(t,e,i,r)):function(a,l,u){return o((An[a]&&An[a].get||s)(t,a,l,u))})},quickSetter:function(t,e,i){if(t=$n(t),t.length>1){var r=t.map(function(c){return Mn.quickSetter(c,e,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}t=t[0]||{};var o=An[e],a=Zr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,u=o?function(c){var f=new o;Ws._pt=0,f.init(t,i?c+i:c,Ws,0,[t]),f.render(1,f),Ws._pt&&kd(1,Ws)}:a.set(t,l);return o?u:function(c){return u(t,l,i?c+i:c,a,1)}},quickTo:function(t,e,i){var r,s=Mn.to(t,Bn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(e,l,u,c)};return o.tween=s,o},isTweening:function(t){return we.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ts(t.ease,va.ease)),n_(va,t||{})},config:function(t){return n_(Nn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!An[a]&&!Fn[a]&&xa(e+" effect requires "+a+" plugin.")}),Bu[e]=function(a,l,u){return i($n(a),Bn(l||{},s),u)},o&&(mn.prototype[e]=function(a,l,u){return this.add(Bu[e](a,Ti(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){te[t]=ts(e)},parseEase:function(t,e){return arguments.length?ts(t,e):te},getById:function(t){return we.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new mn(t),r,s;for(i.smoothChildTiming=vn(t.smoothChildTiming),we.remove(i),i._dp=0,i._time=i._tTime=we._time,r=we._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Fe&&r.vars.onComplete===r._targets[0]))&&gi(i,r,r._start-r._delay),r=s;return gi(we,i,0),i},context:function(t,e){return t?new Wv(t,e):Se},matchMedia:function(t){return new eL(t)},matchMediaRefresh:function(){return es.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||xh()},addEventListener:function(t,e){var i=Il[t]||(Il[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Il[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:D2,wrapYoyo:I2,distribute:Tv,random:Av,snap:wv,normalize:L2,getUnit:Ze,clamp:A2,splitColor:Dv,toArray:$n,selector:_h,mapRange:Cv,pipe:C2,unitize:P2,interpolate:U2,shuffle:Ev},install:hv,effects:Bu,ticker:Cn,updateRoot:mn.updateRoot,plugins:An,globalTimeline:we,core:{PropTween:yn,globals:dv,Tween:Fe,Timeline:mn,Animation:ba,getCache:Zr,_removeLinkedListItem:Ic,reverting:function(){return je},context:function(t){return t&&Se&&(Se.data.push(t),t._ctx=Se),Se},suppressOverwrites:function(t){return wd=t}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return oc[n]=Fe[n]});Cn.add(mn.updateRoot);Ws=oc.to({},{duration:0});var nL=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},iL=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=nL(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},Gu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ge(s)&&(l={},xn(s,function(c){return l[c]=1}),s=l),e){l={};for(u in s)l[u]=e(s[u]);s=l}iL(a,s)}}}},Mn=oc.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)je?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Gu("roundProps",gh),Gu("modifiers"),Gu("snap",wv))||oc;Fe.version=mn.version=Mn.version="3.15.0";fv=1;Rd()&&mo();te.Power0;te.Power1;te.Power2;te.Power3;te.Power4;te.Linear;te.Quad;te.Cubic;te.Quart;te.Quint;te.Strong;te.Elastic;te.Back;te.SteppedEase;te.Bounce;te.Sine;te.Expo;te.Circ;var l_,or,eo,zd,Xr,c_,Hd,rL=function(){return typeof window<"u"},ji={},Fr=180/Math.PI,no=Math.PI/180,Us=Math.atan2,u_=1e8,Vd=/([A-Z])/g,sL=/(left|right|width|margin|padding|x)/i,oL=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},aL=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},lL=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},cL=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},uL=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Xv=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qv=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},fL=function(t,e,i){return t.style[e]=i},hL=function(t,e,i){return t.style.setProperty(e,i)},dL=function(t,e,i){return t._gsap[e]=i},pL=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},mL=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},_L=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Re="transform",Sn=Re+"Origin",gL=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in ji&&s){if(this.tfm=this.tfm||{},t!=="transform")t=yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Bi(r,a)}):this.tfm[t]=o.x?o[t]:Bi(r,t),t===Sn&&(this.tfm.zOrigin=o.zOrigin);else return yi.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Re)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Sn,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},jv=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},vL=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Vd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Hd(),(!s||!s.isStart)&&!i[Re]&&(jv(i),r.zOrigin&&i[Sn]&&(i[Sn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},$v=function(t,e){var i={target:t,props:[],revert:vL,save:gL};return t._gsap||Mn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},Yv,Sh=function(t,e){var i=or.createElementNS?or.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):or.createElement(t);return i&&i.style?i:or.createElement(t)},Dn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Vd,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,_o(e)||e,1)||""},f_="O,Moz,ms,Ms,Webkit".split(","),_o=function(t,e,i){var r=e||Xr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(f_[o]+t in s););return o<0?null:(o===3?"ms":o>=0?f_[o]:"")+t},Mh=function(){rL()&&window.document&&(l_=window,or=l_.document,eo=or.documentElement,Xr=Sh("div")||{style:{}},Sh("div"),Re=_o(Re),Sn=Re+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yv=!!_o("perspective"),Hd=Mn.core.reverting,zd=1)},h_=function(t){var e=t.ownerSVGElement,i=Sh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),eo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),eo.removeChild(i),s},d_=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Kv=function(t){var e,i;try{e=t.getBBox()}catch{e=h_(t),i=1}return e&&(e.width||e.height)||i||(e=h_(t)),e&&!e.width&&!e.x&&!e.y?{x:+d_(t,["x","cx","x1"])||0,y:+d_(t,["y","cy","y1"])||0,width:0,height:0}:e},Jv=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Kv(t))},gr=function(t,e){if(e){var i=t.style,r;e in ji&&e!==Sn&&(e=Re),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(Vd,"-$1").toLowerCase())):i.removeAttribute(e)}},ar=function(t,e,i,r,s,o){var a=new yn(t._pt,e,i,0,1,o?qv:Xv);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},p_={deg:1,rad:1,turn:1},xL={grid:1,flex:1},vr=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Xr.style,l=sL.test(e),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",m,g,v,_;if(r===o||!s||p_[r]||p_[o])return s;if(o!=="px"&&!d&&(s=n(t,e,i,"px")),_=t.getCTM&&Jv(t),(h||o==="%")&&(ji[e]||~e.indexOf("adius")))return m=_?t.getBBox()[l?"width":"height"]:t[c],Ie(h?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,_&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===or||!g.appendChild)&&(g=or.body),v=g._gsap,v&&h&&v.width&&l&&v.time===Cn.time&&!v.uncache)return Ie(s/v.width*f);if(h&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+r,m=t[c],y?t.style[e]=y:gr(t,e)}else(h||o==="%")&&!xL[Dn(g,"display")]&&(a.position=Dn(t,"position")),g===t&&(a.position="static"),g.appendChild(Xr),m=Xr[c],g.removeChild(Xr),a.position="absolute";return l&&h&&(v=Zr(g),v.time=Cn.time,v.width=g[c]),Ie(d?m*s/f:m&&s?f/m*s:0)},Bi=function(t,e,i,r){var s;return zd||Mh(),e in yi&&e!=="transform"&&(e=yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),ji[e]&&e!=="transform"?(s=Ta(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:lc(Dn(t,Sn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ac[e]&&ac[e](t,e,i)||Dn(t,e)||mv(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?vr(t,e,s,i)+i:s},yL=function(t,e,i,r){if(!i||i==="none"){var s=_o(e,t,1),o=s&&Dn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Dn(t,"borderTopColor"))}var a=new yn(this._pt,t.style,e,0,1,Vv),l=0,u=0,c,f,d,h,m,g,v,_,y,p,x,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Dn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=t.style[e],t.style[e]=r,r=Dn(t,e)||r,g?t.style[e]=g:gr(t,e)),c=[i,r],Uv(c),i=c[0],r=c[1],d=i.match(Gs)||[],E=r.match(Gs)||[],E.length){for(;f=Gs.exec(r);)v=f[0],y=r.substring(l,f.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),v!==(g=d[u++]||"")&&(h=parseFloat(g)||0,x=g.substr((h+"").length),v.charAt(1)==="="&&(v=to(h,v)+x),_=parseFloat(v),p=v.substr((_+"").length),l=Gs.lastIndex-p.length,p||(p=p||Nn.units[e]||x,l===r.length&&(r+=p,a.e+=p)),x!==p&&(h=vr(t,e,g,p)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:h,c:_-h,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?qv:Xv;return uv.test(r)&&(a.e=0),this._pt=a,a},m_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},SL=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=m_[i]||i,e[1]=m_[r]||r,e.join(" ")},ML=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ji[a]&&(l=1,a=a==="transformOrigin"?Sn:Re),gr(i,a);l&&(gr(i,Re),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ta(i,1),o.uncache=1,jv(r)))}},ac={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new yn(t._pt,e,i,0,0,ML);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Ea=[1,0,0,1,0,0],Zv={},Qv=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},__=function(t){var e=Dn(t,Re);return Qv(e)?Ea:e.substr(7).match(cv).map(Ie)},Gd=function(t,e){var i=t._gsap||Zr(t),r=t.style,s=__(t),o,a,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ea:s):(s===Ea&&!t.offsetParent&&t!==eo&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,eo.appendChild(t)),s=__(t),l?r.display=l:gr(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):eo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bh=function(t,e,i,r,s,o){var a=t._gsap,l=s||Gd(t,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],m=l[1],g=l[2],v=l[3],_=l[4],y=l[5],p=e.split(" "),x=parseFloat(p[0])||0,E=parseFloat(p[1])||0,w,R,A,M;i?l!==Ea&&(R=h*v-m*g)&&(A=x*(v/R)+E*(-g/R)+(g*y-v*_)/R,M=x*(-m/R)+E*(h/R)-(h*y-m*_)/R,x=A,E=M):(w=Kv(t),x=w.x+(~p[0].indexOf("%")?x/100*w.width:x),E=w.y+(~(p[1]||p[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&a.smooth?(_=x-u,y=E-c,a.xOffset=f+(_*h+y*g)-_,a.yOffset=d+(_*m+y*v)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[Sn]="0px 0px",o&&(ar(o,a,"xOrigin",u,x),ar(o,a,"yOrigin",c,E),ar(o,a,"xOffset",f,a.xOffset),ar(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+E)},Ta=function(t,e){var i=t._gsap||new Ov(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=Dn(t,Sn)||"0",c,f,d,h,m,g,v,_,y,p,x,E,w,R,A,M,S,L,N,O,H,$,B,X,z,ht,pt,ft,St,Xt,rt,_t;return c=f=d=g=v=_=y=p=x=0,h=m=1,i.svg=!!(t.getCTM&&Jv(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),r.scale=r.rotate=r.translate="none"),R=Gd(t,i.svg),i.svg&&(i.uncache?(z=t.getBBox(),u=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),bh(t,X||u,!!X||i.originIsAbsolute,i.smooth!==!1,R)),E=i.xOrigin||0,w=i.yOrigin||0,R!==Ea&&(L=R[0],N=R[1],O=R[2],H=R[3],c=$=R[4],f=B=R[5],R.length===6?(h=Math.sqrt(L*L+N*N),m=Math.sqrt(H*H+O*O),g=L||N?Us(N,L)*Fr:0,y=O||H?Us(O,H)*Fr+g:0,y&&(m*=Math.abs(Math.cos(y*no))),i.svg&&(c-=E-(E*L+w*O),f-=w-(E*N+w*H))):(_t=R[6],Xt=R[7],pt=R[8],ft=R[9],St=R[10],rt=R[11],c=R[12],f=R[13],d=R[14],A=Us(_t,St),v=A*Fr,A&&(M=Math.cos(-A),S=Math.sin(-A),X=$*M+pt*S,z=B*M+ft*S,ht=_t*M+St*S,pt=$*-S+pt*M,ft=B*-S+ft*M,St=_t*-S+St*M,rt=Xt*-S+rt*M,$=X,B=z,_t=ht),A=Us(-O,St),_=A*Fr,A&&(M=Math.cos(-A),S=Math.sin(-A),X=L*M-pt*S,z=N*M-ft*S,ht=O*M-St*S,rt=H*S+rt*M,L=X,N=z,O=ht),A=Us(N,L),g=A*Fr,A&&(M=Math.cos(A),S=Math.sin(A),X=L*M+N*S,z=$*M+B*S,N=N*M-L*S,B=B*M-$*S,L=X,$=z),v&&Math.abs(v)+Math.abs(g)>359.9&&(v=g=0,_=180-_),h=Ie(Math.sqrt(L*L+N*N+O*O)),m=Ie(Math.sqrt(B*B+_t*_t)),A=Us($,B),y=Math.abs(A)>2e-4?A*Fr:0,x=rt?1/(rt<0?-rt:rt):0),i.svg&&(X=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Qv(Dn(t,Re)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Ie(h),i.scaleY=Ie(m),i.rotation=Ie(g)+a,i.rotationX=Ie(v)+a,i.rotationY=Ie(_)+a,i.skewX=y+a,i.skewY=p+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!e&&i.zOrigin||0)&&(r[Sn]=lc(u)),i.xOffset=i.yOffset=0,i.force3D=Nn.force3D,i.renderTransform=i.svg?EL:Yv?tx:bL,i.uncache=0,i},lc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wu=function(t,e,i){var r=Ze(e);return Ie(parseFloat(e)+parseFloat(vr(t,"x",i+"px",r)))+r},bL=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tx(t,e)},Lr="0deg",Oo="0px",Dr=") ",tx=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,m=i.scaleX,g=i.scaleY,v=i.transformPerspective,_=i.force3D,y=i.target,p=i.zOrigin,x="",E=_==="auto"&&t&&t!==1||_===!0;if(p&&(f!==Lr||c!==Lr)){var w=parseFloat(c)*no,R=Math.sin(w),A=Math.cos(w),M;w=parseFloat(f)*no,M=Math.cos(w),o=Wu(y,o,R*M*-p),a=Wu(y,a,-Math.sin(w)*-p),l=Wu(y,l,A*M*-p+p)}v!==Oo&&(x+="perspective("+v+Dr),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(E||o!==Oo||a!==Oo||l!==Oo)&&(x+=l!==Oo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Dr),u!==Lr&&(x+="rotate("+u+Dr),c!==Lr&&(x+="rotateY("+c+Dr),f!==Lr&&(x+="rotateX("+f+Dr),(d!==Lr||h!==Lr)&&(x+="skew("+d+", "+h+Dr),(m!==1||g!==1)&&(x+="scale("+m+", "+g+Dr),y.style[Re]=x||"translate(0, 0)"},EL=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,m=i.xOrigin,g=i.yOrigin,v=i.xOffset,_=i.yOffset,y=i.forceCSS,p=parseFloat(o),x=parseFloat(a),E,w,R,A,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=no,u*=no,E=Math.cos(l)*f,w=Math.sin(l)*f,R=Math.sin(l-u)*-d,A=Math.cos(l-u)*d,u&&(c*=no,M=Math.tan(u-c),M=Math.sqrt(1+M*M),R*=M,A*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),E*=M,w*=M)),E=Ie(E),w=Ie(w),R=Ie(R),A=Ie(A)):(E=f,A=d,w=R=0),(p&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(p=vr(h,"x",o,"px"),x=vr(h,"y",a,"px")),(m||g||v||_)&&(p=Ie(p+m-(m*E+g*R)+v),x=Ie(x+g-(m*w+g*A)+_)),(r||s)&&(M=h.getBBox(),p=Ie(p+r/100*M.width),x=Ie(x+s/100*M.height)),M="matrix("+E+","+w+","+R+","+A+","+p+","+x+")",h.setAttribute("transform",M),y&&(h.style[Re]=M)},TL=function(t,e,i,r,s){var o=360,a=Ge(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fr:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*u_)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*u_)%o-~~(u/o)*o)),t._pt=d=new yn(t._pt,e,i,r,u,aL),d.e=c,d.u="deg",t._props.push(i),d},g_=function(t,e){for(var i in e)t[i]=e[i];return t},wL=function(t,e,i){var r=g_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,h,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Re]=e,a=Ta(i,1),gr(i,Re),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Re],o[Re]=e,a=Ta(i,1),o[Re]=u);for(l in ji)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=Ze(u),m=Ze(c),f=h!==m?vr(i,l,u,m):parseFloat(u),d=parseFloat(c),t._pt=new yn(t._pt,a,l,f,d-f,yh),t._pt.u=m||0,t._props.push(l));g_(a,r)};xn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});ac[t>1?"border"+n:n]=function(a,l,u,c,f){var d,h;if(arguments.length<4)return d=o.map(function(m){return Bi(a,m,u)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(c+"").split(" "),h={},o.forEach(function(m,g){return h[m]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,h,f)}});var ex={name:"css",register:Mh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,u,c,f,d,h,m,g,v,_,y,p,x,E,w,R,A,M;zd||Mh(),this.styles=this.styles||$v(t),A=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(c=e[g],!(An[g]&&Fv(g,e,i,r,t,s)))){if(h=typeof c,m=ac[g],h==="function"&&(c=c.call(i,r,t,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=Sa(c)),m)m(this,t,g,c,i)&&(R=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(g)+"").trim(),c+="",hr.lastIndex=0,hr.test(u)||(v=Ze(u),_=Ze(c),_?v!==_&&(u=vr(t,g,u,_)+_):v&&(c+=v)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),A.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,t,s):l[g],Ge(u)&&~u.indexOf("random(")&&(u=Sa(u)),Ze(u+"")||u==="auto"||(u+=Nn.units[g]||Ze(Bi(t,g))||""),(u+"").charAt(1)==="="&&(u=Bi(t,g))):u=Bi(t,g),d=parseFloat(u),y=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),f=parseFloat(c),g in yi&&(g==="autoAlpha"&&(d===1&&Bi(t,"visibility")==="hidden"&&f&&(d=0),A.push("visibility",0,a.visibility),ar(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=yi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),p=g in ji,p){if(this.styles.save(g),M=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Dn(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=c,c=Dn(t,"perspective"),S?t.style.perspective=S:gr(t,"perspective")}f=parseFloat(c)}if(x||(E=t._gsap,E.renderTransform&&!e.parseTransform||Ta(t,e.parseTransform),w=e.smoothOrigin!==!1&&E.smooth,x=this._pt=new yn(this._pt,a,Re,0,1,E.renderTransform,E,0,-1),x.dep=1),g==="scale")this._pt=new yn(this._pt,E,"scaleY",E.scaleY,(y?to(E.scaleY,y+f):f)-E.scaleY||0,yh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(Sn,0,a[Sn]),c=SL(c),E.svg?bh(t,c,0,w,0,this):(_=parseFloat(c.split(" ")[2])||0,_!==E.zOrigin&&ar(this,E,"zOrigin",E.zOrigin,_),ar(this,a,g,lc(u),lc(c)));continue}else if(g==="svgOrigin"){bh(t,c,1,w,0,this);continue}else if(g in Zv){TL(this,E,g,d,y?to(d,y+c):c);continue}else if(g==="smoothOrigin"){ar(this,E,"smooth",E.smooth,c);continue}else if(g==="force3D"){E[g]=c;continue}else if(g==="transform"){wL(this,c,t);continue}}else g in a||(g=_o(g)||g);if(p||(f||f===0)&&(d||d===0)&&!oL.test(c)&&g in a)v=(u+"").substr((d+"").length),f||(f=0),_=Ze(c)||(g in Nn.units?Nn.units[g]:v),v!==_&&(d=vr(t,g,u,_)),this._pt=new yn(this._pt,p?E:a,g,d,(y?to(d,y+f):f)-d,!p&&(_==="px"||g==="zIndex")&&e.autoRound!==!1?uL:yh),this._pt.u=_||0,p&&M!==c?(this._pt.b=u,this._pt.e=M,this._pt.r=cL):v!==_&&_!=="%"&&(this._pt.b=u,this._pt.r=lL);else if(g in a)yL.call(this,t,g,u,y?y+c:c);else if(g in t)this.add(t,g,u||t[g],y?y+c:c,r,s);else if(g!=="parseTransform"){Pd(g,c);continue}p||(g in a?A.push(g,0,a[g]):typeof t[g]=="function"?A.push(g,2,t[g]()):A.push(g,1,u||t[g])),o.push(g)}}R&&Gv(this)},render:function(t,e){if(e.tween._time||!Hd())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Bi,aliases:yi,getSetter:function(t,e,i){var r=yi[e];return r&&r.indexOf(",")<0&&(e=r),e in ji&&e!==Sn&&(t._gsap.x||Bi(t,"x"))?i&&c_===i?e==="scale"?pL:dL:(c_=i||{})&&(e==="scale"?mL:_L):t.style&&!Ad(t.style[e])?fL:~e.indexOf("-")?hL:Bd(t,e)},core:{_removeProperty:gr,_getMatrix:Gd}};Mn.utils.checkPrefix=_o;Mn.core.getStyleSaver=$v;(function(n,t,e,i){var r=xn(n+","+t+","+e,function(s){ji[s]=1});xn(t,function(s){Nn.units[s]="deg",Zv[s]=1}),yi[r[13]]=n+","+t,xn(i,function(s){var o=s.split(":");yi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Nn.units[n]="px"});Mn.registerPlugin(ex);var Ul=Mn.registerPlugin(ex)||Mn;Ul.core.Tween;const v_=""+new URL("rajahub.BPvnoCJd.png",import.meta.url).href,x_=""+new URL("alfred.DO3Ix6WN.png",import.meta.url).href,y_=""+new URL("raja.CFyN9aW7.png",import.meta.url).href,S_=""+new URL("gostiki.BaOO3HZY.png",import.meta.url).href,AL={class:"cabecalho"},RL=["aria-expanded"],CL={key:0,id:"menu-movel",class:"navegacao-movel","aria-label":"Navegação móvel"},PL={id:"conteudo"},LL={id:"inicio",class:"percurso-campo"},DL={class:"arte-abertura"},IL={class:"sobretitulo"},UL={key:0},NL={key:1},OL={key:2},FL={key:3},BL={class:"controles-percurso"},kL={class:"barra-percurso","aria-hidden":"true"},zL=["aria-pressed"],HL={class:"indice-abertura"},VL={id:"sobre",class:"sobre espacamento-secao"},GL={class:"composicao-sobre"},WL={class:"texto-sobre"},XL={id:"marcas",class:"faixa-marcas","aria-label":"Marcas e projetos em que trabalhei"},qL={class:"cabecalho-marcas"},jL=["aria-pressed"],$L={class:"janela-marcas"},YL={class:"grupo-marcas"},KL={class:"marca-projeto"},JL=["src"],ZL={class:"marca-projeto"},QL=["src"],tD={class:"marca-projeto"},eD=["src"],nD={class:"grupo-marcas","aria-hidden":"true"},iD={class:"marca-projeto"},rD=["src"],sD={class:"marca-projeto"},oD=["src"],aD={class:"marca-projeto"},lD=["src"],cD={id:"tecnologias",class:"tecnologias espacamento-secao"},uD={class:"filtros",role:"group","aria-label":"Filtrar tecnologias"},fD=["aria-pressed"],hD=["aria-pressed"],dD=["aria-pressed"],pD=["aria-pressed"],mD={class:"grade-tecnologias"},_D={class:"cartao-tecnologia"},gD={class:"cartao-tecnologia"},vD={class:"cartao-tecnologia"},xD={class:"cartao-tecnologia"},yD={class:"cartao-tecnologia"},SD={class:"cartao-tecnologia"},MD={class:"cartao-tecnologia"},bD={class:"cartao-tecnologia"},ED={id:"projetos",class:"projetos espacamento-secao"},TD={class:"grade-projetos"},wD={class:"visual-projeto projeto-raja"},AD={class:"print-projeto"},RD=["src"],CD={id:"contato",class:"rodape espacamento-secao"},PD={class:"titulo-rodape"},LD=["href"],DD={class:"contato-rodape"},ID=["href"],UD={class:"redes-sociais"},ND=["href"],OD=["href"],FD={class:"base-rodape"},BD={class:"preferencias"},kD=["aria-pressed"],zD=["aria-pressed"],HD=["aria-label"],VD={key:0,class:"conteudo-janela"},GD=["src"],WD={class:"nota-formulario",role:"status"},XD={__name:"app",setup(n){const t=Oe(!1),e=Oe(!1),i=Oe(!1),r=Oe(!0),s=Oe(0),o=Oe("Todas"),a=Oe(null),l=Oe(null),u=Oe(null),c=Oe(""),f=Oe(!1);function d(y){a.value=y,Ih(()=>l.value.showModal())}function h(){e.value=!1}function m(y){const p=y.target.closest('a[href^="#"]');if(!p)return;const x=document.getElementById(p.getAttribute("href").slice(1));x&&(y.preventDefault(),x.scrollIntoView({behavior:r.value?"smooth":"instant"}))}function g(){i.value=!i.value;try{localStorage.setItem("victor-theme",i.value?"dark":"light")}catch{}}function v(){if(!c.value.trim())return;const y=new Blob([`IDEIA DE PROJETO

${c.value.trim()}

Rascunho criado no portfólio de Victor. Este arquivo não foi enviado.
`],{type:"text/plain;charset=utf-8"}),p=URL.createObjectURL(y),x=document.createElement("a");x.href=p,x.download="minha-ideia.txt",x.click(),setTimeout(()=>URL.revokeObjectURL(p),1e3),f.value=!0}let _;return Sc(()=>{try{i.value=localStorage.getItem("victor-theme")==="dark"}catch{}r.value=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,r.value&&(_=Ul.context(()=>{Ul.from(".titulo-abertura > span",{y:75,opacity:0,duration:1.2,stagger:.13,ease:"power3.out"}),Ul.from(".introducao-abertura, .rodape-abertura",{opacity:0,y:18,duration:1,delay:.4,clearProps:"opacity,transform"})}))}),Mc(()=>_?.revert()),(y,p)=>{const x=i2,E=a2;return ce(),Ee("div",{class:ni(["site",{escuro:ct(i),"movimento-desativado":!ct(r)}]),onClick:m},[p[97]||(p[97]=I("a",{class:"pular-conteudo",href:"#conteudo"},"Pular para o conteúdo",-1)),I("header",AL,[p[22]||(p[22]=Ao('<a class="marca" href="#inicio" aria-label="Victor, início">victor<span class="simbolo-marca">✳</span></a><p class="descricao-cabecalho"> DESENVOLVIMENTO WEB<br>&amp; EXPERIÊNCIAS DIGITAIS </p><nav class="navegacao-principal" aria-label="Navegação principal"><a href="#sobre">Sobre <sup>01</sup></a><a href="#tecnologias">Tecnologias <sup>02</sup></a><a href="#projetos">Projetos <sup>03</sup></a></nav><a class="link-contato" href="#contato">Vamos conversar <span>↗</span></a>',4)),I("button",{class:"alternar-menu",onClick:p[0]||(p[0]=w=>e.value=!ct(e)),"aria-expanded":ct(e),"aria-controls":"menu-movel"},wn(ct(e)?"Fechar −":"Menu +"),9,RL)]),ct(e)?(ce(),Ee("nav",CL,[I("a",{href:"#sobre",onClick:h},[...p[23]||(p[23]=[I("sup",null,"01",-1),$t("Sobre ↗",-1)])]),I("a",{href:"#tecnologias",onClick:h},[...p[24]||(p[24]=[I("sup",null,"02",-1),$t("Tecnologias ↗",-1)])]),I("a",{href:"#projetos",onClick:h},[...p[25]||(p[25]=[I("sup",null,"03",-1),$t("Projetos ↗",-1)])]),I("a",{href:"#contato",onClick:h},[...p[26]||(p[26]=[I("sup",null,"04",-1),$t("Contato ↗",-1)])])])):Ur("",!0),I("main",PL,[I("div",LL,[I("section",{class:"abertura",style:ns({"--progresso":ct(s)}),"aria-label":"Percurso interativo pelo campo"},[p[34]||(p[34]=I("div",{class:"introducao-abertura"},[I("span",{class:"sobretitulo"},[I("i",{class:"ponto-destaque"}),$t(" OLÁ, EU SOU O VICTOR")]),I("p",null,[$t("Entre boas ideias"),I("br"),$t("e experiências reais, existe código.")])],-1)),I("div",DL,[Le(E,null,{default:Nh(()=>[Le(x,{movimento:ct(r),onProgresso:p[1]||(p[1]=w=>s.value=w)},null,8,["movimento"])]),_:1})]),p[35]||(p[35]=I("div",{class:"legenda-arte"},[I("span",null,"UM CAMPO DE POSSIBILIDADES"),I("span",null,"ROLE PARA CAMINHAR. MOVA O MOUSE PARA EXPLORAR.")],-1)),p[36]||(p[36]=I("h1",{class:"titulo-abertura"},[I("span",null,"Um pouco"),I("span",{class:"segunda-linha"},[I("em",null,"do que"),I("span",{class:"asterisco-titulo","aria-hidden":"true"},"✳")]),I("span",null,[$t("eu "),I("em",null,"faço.")])],-1)),I("div",{class:ni(["mensagem-percurso",{visivel:ct(s)>.2&&ct(s)<.94,"mensagem-clareira":ct(s)>.58}])},[I("span",IL,wn(ct(s)<.58?"01 / EXPLORE":ct(s)<.7?"02 / RESPIRE":ct(s)<.83?"03 / AMPLIE":"04 / NOVOS ÂNGULOS"),1),ct(s)<.58?(ce(),Ee("h2",UL,[...p[27]||(p[27]=[$t(" Fique à vontade.",-1),I("br",null,null,-1),I("em",null,"A casa é sua.",-1)])])):ct(s)<.7?(ce(),Ee("h2",NL,[...p[28]||(p[28]=[$t(" Pode ir",-1),I("br",null,null,-1),I("em",null,"sem pressa.",-1)])])):ct(s)<.83?(ce(),Ee("h2",OL,[...p[29]||(p[29]=[$t(" De longe,",-1),I("br",null,null,-1),I("em",null,"tudo muda.",-1)])])):(ce(),Ee("h2",FL,[...p[30]||(p[30]=[$t("Agora, vamos",-1),I("br",null,null,-1),I("em",null,"aos projetos.",-1)])]))],2),I("div",BL,[I("span",null,"PERCURSO "+wn(String(Math.round(ct(s)*100)).padStart(3,"0"))+"%",1),I("div",kL,[I("span",{style:ns({transform:`scaleX(${ct(s)})`})},null,4)]),I("button",{onClick:p[2]||(p[2]=w=>r.value=!ct(r)),"aria-pressed":!ct(r)},wn(ct(r)?"Pausar movimento":"Retomar movimento"),9,zL),p[31]||(p[31]=I("a",{href:"#sobre"},"Pular percurso ↗",-1))]),p[37]||(p[37]=I("div",{class:"rodape-abertura"},[I("a",{class:"link-circular",href:"#projetos"},[I("span",{class:"circulo"},"↗"),$t(" Explore meu trabalho")]),I("p",null,[$t(" DO BACK-END À INTERFACE."),I("br"),$t("DA PRIMEIRA LINHA AO ÚLTIMO DETALHE. ")]),I("a",{href:"#sobre",class:"link-rolagem"},[$t("ROLE PARA DESCOBRIR "),I("span",null,"↓")])],-1)),I("div",HL,[p[32]||(p[32]=I("span",null,"PORTFÓLIO PESSOAL",-1)),p[33]||(p[33]=I("span",null,"CRIATIVIDADE ENCONTRA TECNOLOGIA",-1)),I("span",null,"© "+wn(new Date().getFullYear()),1)])],4)]),I("section",VL,[p[42]||(p[42]=I("div",{class:"rotulo-secao"},[I("span",null,"01 / SOBRE MIM"),I("span",null,"UM POUCO SOBRE MEU TRABALHO")],-1)),I("div",GL,[p[41]||(p[41]=I("div",{class:"simbolo-sobre","aria-hidden":"true"},"↳",-1)),I("div",null,[p[39]||(p[39]=I("h2",null,[$t("Entre sites"),I("br"),$t("e "),I("em",null,"sistemas.")],-1)),I("div",WL,[I("p",null,wn(ct(ci).bio),1),p[38]||(p[38]=I("p",null," Gosto de entender como as coisas funcionam antes de sair programando. O que precisa aparecer na tela? O que dá para simplificar? É a partir dessas perguntas que começo a trabalhar. ",-1))]),p[40]||(p[40]=I("a",{href:"#tecnologias",class:"link-texto"},[$t("Veja as tecnologias que uso "),I("span",null,"↘")],-1))])])]),I("section",XL,[I("div",qL,[p[43]||(p[43]=I("p",null,"MARCAS E PROJETOS EM QUE TRABALHEI",-1)),ct(r)?(ce(),Ee("button",{key:0,onClick:p[3]||(p[3]=w=>t.value=!ct(t)),"aria-pressed":ct(t)},wn(ct(t)?"Retomar faixa":"Pausar faixa"),9,jL)):Ur("",!0)]),I("div",$L,[I("div",{class:ni(["trilho-marcas",{pausado:ct(t)}])},[I("div",YL,[I("div",KL,[I("img",{src:ct(x_),alt:"Alfred",loading:"lazy"},null,8,JL)]),I("div",ZL,[I("img",{src:ct(y_),alt:"RajaHub",class:"invertida",loading:"lazy"},null,8,QL)]),I("div",tD,[I("img",{src:ct(S_),alt:"Gostiki",loading:"lazy"},null,8,eD)]),p[44]||(p[44]=I("div",{class:"marca-projeto"},[I("span",{class:"marca-tipografica"},"PersonalFit")],-1))]),I("div",nD,[I("div",iD,[I("img",{src:ct(x_),alt:"",loading:"lazy"},null,8,rD)]),I("div",sD,[I("img",{src:ct(y_),alt:"",class:"invertida",loading:"lazy"},null,8,oD)]),I("div",aD,[I("img",{src:ct(S_),alt:"",loading:"lazy"},null,8,lD)]),p[45]||(p[45]=I("div",{class:"marca-projeto"},[I("span",{class:"marca-tipografica"},"PersonalFit")],-1))])],2)])]),I("section",cD,[p[55]||(p[55]=I("div",{class:"rotulo-secao"},[I("span",null,"02 / TECNOLOGIAS"),I("span",null,"AS FERRAMENTAS. AS POSSIBILIDADES.")],-1)),p[56]||(p[56]=I("div",{class:"cabecalho-secao"},[I("h2",null,[$t("O que uso"),I("br"),I("em",null,"para criar.")]),I("p",null,[$t(" Da tela ao banco de dados."),I("br"),$t("Estas são as tecnologias que uso nos meus projetos. ")])],-1)),I("div",uD,[I("button",{"aria-pressed":ct(o)==="Todas",class:ni({ativo:ct(o)==="Todas"}),onClick:p[4]||(p[4]=w=>o.value="Todas")},[...p[46]||(p[46]=[$t(" Todas",-1),I("span",null,"08",-1)])],10,fD),I("button",{"aria-pressed":ct(o)==="Front-end",class:ni({ativo:ct(o)==="Front-end"}),onClick:p[5]||(p[5]=w=>o.value="Front-end")}," Front-end ",10,hD),I("button",{"aria-pressed":ct(o)==="Back-end",class:ni({ativo:ct(o)==="Back-end"}),onClick:p[6]||(p[6]=w=>o.value="Back-end")}," Back-end ",10,dD),I("button",{"aria-pressed":ct(o)==="Banco de dados",class:ni({ativo:ct(o)==="Banco de dados"}),onClick:p[7]||(p[7]=w=>o.value="Banco de dados")}," Banco de dados ",10,pD)]),I("div",mD,[Ri(I("article",_D,[...p[47]||(p[47]=[I("div",{class:"topo-tecnologia"},[I("span",{class:"simbolo-tecnologia"},"<?>"),I("span",{class:"categoria-tecnologia"},"BACK-END")],-1),I("h3",null,"PHP",-1),I("p",null,"Aplicações & lógica de servidor",-1),I("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1)])],512),[[Yi,ct(o)==="Todas"||ct(o)==="Back-end"]]),Ri(I("article",gD,[...p[48]||(p[48]=[I("div",{class:"topo-tecnologia"},[I("span",{class:"simbolo-tecnologia"},"Py"),I("span",{class:"categoria-tecnologia"},"BACK-END")],-1),I("h3",null,"Python",-1),I("p",null,"Automação & desenvolvimento web",-1),I("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1)])],512),[[Yi,ct(o)==="Todas"||ct(o)==="Back-end"]]),Ri(I("article",vD,[...p[49]||(p[49]=[I("div",{class:"topo-tecnologia"},[I("span",{class:"simbolo-tecnologia"},"Fl"),I("span",{class:"categoria-tecnologia"},"BACK-END")],-1),I("h3",null,"Flask",-1),I("p",null,"APIs & aplicações leves",-1),I("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1)])],512),[[Yi,ct(o)==="Todas"||ct(o)==="Back-end"]]),Ri(I("article",xD,[...p[50]||(p[50]=[I("div",{class:"topo-tecnologia"},[I("span",{class:"simbolo-tecnologia"},"Dj"),I("span",{class:"categoria-tecnologia"},"BACK-END")],-1),I("h3",null,"Django",-1),I("p",null,"Aplicações web estruturadas",-1),I("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1)])],512),[[Yi,ct(o)==="Todas"||ct(o)==="Back-end"]]),Ri(I("article",yD,[...p[51]||(p[51]=[I("div",{class:"topo-tecnologia"},[I("span",{class:"simbolo-tecnologia"},"My"),I("span",{class:"categoria-tecnologia"},"BANCO DE DADOS")],-1),I("h3",null,"MySQL",-1),I("p",null,"Dados & consultas relacionais",-1),I("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1)])],512),[[Yi,ct(o)==="Todas"||ct(o)==="Banco de dados"]]),Ri(I("article",SD,[...p[52]||(p[52]=[I("div",{class:"topo-tecnologia"},[I("span",{class:"simbolo-tecnologia"},"Js"),I("span",{class:"categoria-tecnologia"},"FRONT-END")],-1),I("h3",null,"JavaScript",-1),I("p",null,"Interatividade & comportamento",-1),I("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1)])],512),[[Yi,ct(o)==="Todas"||ct(o)==="Front-end"]]),Ri(I("article",MD,[...p[53]||(p[53]=[I("div",{class:"topo-tecnologia"},[I("span",{class:"simbolo-tecnologia"},"</>"),I("span",{class:"categoria-tecnologia"},"FRONT-END")],-1),I("h3",null,"HTML",-1),I("p",null,"Estrutura & semântica",-1),I("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1)])],512),[[Yi,ct(o)==="Todas"||ct(o)==="Front-end"]]),Ri(I("article",bD,[...p[54]||(p[54]=[I("div",{class:"topo-tecnologia"},[I("span",{class:"simbolo-tecnologia"},"#"),I("span",{class:"categoria-tecnologia"},"FRONT-END")],-1),I("h3",null,"CSS",-1),I("p",null,"Design & responsividade",-1),I("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1)])],512),[[Yi,ct(o)==="Todas"||ct(o)==="Front-end"]])])]),I("section",ED,[p[65]||(p[65]=I("div",{class:"rotulo-secao"},[I("span",null,"03 / PROJETOS"),I("span",null,"SITES E SISTEMAS")],-1)),p[66]||(p[66]=I("div",{class:"cabecalho-secao"},[I("h2",null,[$t("Alguns trabalhos"),I("br"),$t("de que "),I("em",null,"fiz parte.")]),I("p",null," Sites para apresentar uma empresa e sistemas para organizar a rotina. Selecione um projeto para saber mais. ")],-1)),I("div",TD,[I("button",{class:"cartao-projeto",onClick:p[8]||(p[8]=w=>d("PersonalFit")),"aria-label":"Ver detalhes: PersonalFit"},[...p[57]||(p[57]=[Ao('<div class="visual-projeto projeto-personalfit"><div class="topo-visual"><span>V / 01</span><span>SISTEMA WEB</span></div><div class="capa-projeto"><span class="nome-capa">PersonalFit</span><span class="legenda-capa">A rotina do treino, organizada.</span><div class="recursos-capa"><span>Alunos</span><span>Treinos</span><span>Avaliações</span></div></div><span class="abrir-projeto">↗</span></div><div class="informacoes-projeto"><h3>PersonalFit</h3><span>PHP · MYSQL · JAVASCRIPT</span></div><p class="resumo-projeto"> Gestão de alunos e treinos, com acesso para o personal e o aluno. </p>',3)])]),I("button",{class:"cartao-projeto",onClick:p[9]||(p[9]=w=>d("Alfred")),"aria-label":"Ver detalhes: Alfred"},[...p[58]||(p[58]=[Ao('<div class="visual-projeto projeto-alfred"><div class="topo-visual"><span>V / 02</span><span>SISTEMA HOSPITALAR</span></div><div class="capa-projeto"><span class="nome-capa">Alfred</span><span class="legenda-capa">Presente em 27 cidades.</span><div class="recursos-capa"><span>Gestão hospitalar</span><span>Atendimentos</span><span>Agendas</span></div></div><span class="abrir-projeto">↗</span></div><div class="informacoes-projeto"><h3>Alfred</h3><span>PHP · MYSQL · JAVASCRIPT</span></div><p class="resumo-projeto"> Sistema hospitalar utilizado em 27 cidades, em cujo desenvolvimento participei. </p>',3)])]),I("button",{class:"cartao-projeto",onClick:p[10]||(p[10]=w=>d("RajaHub")),"aria-label":"Ver detalhes: RajaHub"},[I("div",wD,[p[60]||(p[60]=I("div",{class:"topo-visual"},[I("span",null,"V / 03"),I("span",null,"SITE INSTITUCIONAL")],-1)),I("div",AD,[p[59]||(p[59]=I("div",{class:"barra-print","aria-hidden":"true"},[I("span",null,"● ● ●"),$t(" rajahub.com.br ")],-1)),I("img",{src:ct(v_),alt:"Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação.",loading:"lazy",width:"1265",height:"712"},null,8,RD)]),p[61]||(p[61]=I("span",{class:"abrir-projeto"},"↗",-1))]),p[62]||(p[62]=I("div",{class:"informacoes-projeto"},[I("h3",null,"RajaHub"),I("span",null,"WORDPRESS · PHP · JAVASCRIPT")],-1)),p[63]||(p[63]=I("p",{class:"resumo-projeto"}," Site do RajaHub, que apresenta suas frentes de atuação e conecta empreendedores e investidores. ",-1))]),I("button",{class:"cartao-projeto",onClick:p[11]||(p[11]=w=>d("Gostiki")),"aria-label":"Ver detalhes: Gostiki"},[...p[64]||(p[64]=[Ao('<div class="visual-projeto projeto-gostiki"><div class="topo-visual"><span>V / 04</span><span>SISTEMA DE GESTÃO</span></div><div class="capa-projeto"><span class="nome-capa">Gostiki</span><span class="legenda-capa">Do balcão ao delivery.</span><div class="recursos-capa"><span>PDV</span><span>Pedidos</span><span>Impressão</span></div></div><span class="abrir-projeto">↗</span></div><div class="informacoes-projeto"><h3>Gostiki</h3><span>PHP · MYSQL · JAVASCRIPT</span></div><p class="resumo-projeto"> Sistema para a Gostiki Açaí &amp; Sorvete, com vendas, pedidos e gestão de lojas. </p>',3)])])])]),p[73]||(p[73]=Ao('<section class="feito-com espacamento-secao"><div class="rotulo-secao"><span>NOS BASTIDORES</span><span>ESTE SITE TAMBÉM É UM PROJETO.</span></div><div class="conteudo-construcao"><h2>Feito com código.<br><em>E um pouco de curiosidade.</em></h2><div><p>A experiência que você está explorando foi construída com:</p><div class="etiquetas-tecnologias"><span>Nuxt</span><span>Vue</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>GSAP</span><span>Three.js</span><span>WebGL</span></div><p class="nota-construcao"> Nuxt &amp; Vue na estrutura. GSAP no movimento.<br>Three.js &amp; WebGL na dimensão extra. </p></div></div></section>',1)),I("footer",CD,[p[72]||(p[72]=I("div",{class:"rotulo-secao"},[I("span",null,"04 / O PRÓXIMO PASSO"),I("span",{class:"destaque-rodape"},"● UMA IDEIA PODE SER O COMEÇO.")],-1)),I("div",PD,[p[67]||(p[67]=I("h2",null,[$t("Vamos criar"),I("br"),$t("algo "),I("em",null,"interessante?")],-1)),ct(ci).email?(ce(),Ee("a",{key:0,href:"mailto:"+ct(ci).email,class:"seta-grande","aria-label":"Enviar e-mail"},"↗",8,LD)):(ce(),Ee("button",{key:1,class:"seta-grande","aria-label":"Preparar uma ideia de projeto",onClick:p[12]||(p[12]=w=>ct(u).showModal())}," ↗ "))]),I("div",DD,[p[69]||(p[69]=I("p",null,[$t(" Todo projeto começa com uma conversa."),I("br"),$t("E toda conversa, com uma boa ideia. ")],-1)),ct(ci).email?(ce(),Ee("a",{key:0,href:"mailto:"+ct(ci).email,class:"link-texto"},wn(ct(ci).email)+" ↗",9,ID)):(ce(),Ee("button",{key:1,class:"link-texto",onClick:p[13]||(p[13]=w=>ct(u).showModal())},[...p[68]||(p[68]=[$t(" Prepare sua ideia ",-1),I("span",null,"↗",-1)])])),I("div",UD,[ct(ci).github?(ce(),Ee("a",{key:0,href:ct(ci).github,target:"_blank",rel:"noopener noreferrer"},"GitHub ↗",8,ND)):Ur("",!0),ct(ci).linkedin?(ce(),Ee("a",{key:1,href:ct(ci).linkedin,target:"_blank",rel:"noopener noreferrer"},"LinkedIn ↗",8,OD)):Ur("",!0)])]),I("div",FD,[p[71]||(p[71]=I("a",{class:"marca",href:"#inicio"},[$t("victor"),I("span",{class:"simbolo-marca"},"✳")],-1)),I("span",null,"© "+wn(new Date().getFullYear())+" VICTOR · FEITO COM INTENÇÃO.",1),I("div",BD,[I("button",{onClick:g,"aria-pressed":ct(i)},wn(ct(i)?"◑ Tema escuro":"◐ Tema claro"),9,kD),I("button",{onClick:p[14]||(p[14]=w=>r.value=!ct(r)),"aria-pressed":ct(r)}," Movimento "+wn(ct(r)?"ativado":"desativado"),9,zD),p[70]||(p[70]=I("a",{href:"#inicio","aria-label":"Voltar ao topo"},"↑",-1))])])])]),I("dialog",{ref_key:"dialog",ref:l,"aria-label":ct(a)?"Detalhes do projeto: "+ct(a):"Detalhes do projeto",class:"janela-detalhes",onClick:p[17]||(p[17]=w=>{w.target===ct(l)&&ct(l).close()})},[ct(a)?(ce(),Ee("div",VD,[I("button",{class:"fechar-janela",onClick:p[15]||(p[15]=w=>ct(l).close()),"aria-label":"Fechar detalhes"}," ✕ "),ct(a)==="PersonalFit"?(ce(),Ee(an,{key:0},[p[74]||(p[74]=I("span",{class:"sobretitulo"},"SISTEMA WEB / 01",-1)),p[75]||(p[75]=I("h2",null,"PersonalFit · Alunos e treinos",-1)),p[76]||(p[76]=I("p",null," Sistema com áreas separadas para personal e aluno. Reúne cadastro de alunos, montagem de treinos, agenda e avaliações físicas. O aluno pode consultar seus treinos e acompanhar o histórico. Também conta com uma API para acesso aos dados do aluno. ",-1)),p[77]||(p[77]=I("div",{class:"etiquetas-tecnologias"},[I("span",null,"PHP"),I("span",null,"MySQL"),I("span",null,"JavaScript"),I("span",null,"HTML"),I("span",null,"CSS")],-1))],64)):ct(a)==="Alfred"?(ce(),Ee(an,{key:1},[p[78]||(p[78]=I("span",{class:"sobretitulo"},"SISTEMA HOSPITALAR / 02",-1)),p[79]||(p[79]=I("h2",null,"Alfred · Gestão hospitalar",-1)),p[80]||(p[80]=I("p",null," Participei do desenvolvimento do Alfred, sistema hospitalar utilizado em 27 cidades. O sistema reúne recursos para organizar atendimentos, agendas e outras rotinas da saúde, com módulos para diferentes etapas da gestão hospitalar. ",-1)),p[81]||(p[81]=I("div",{class:"etiquetas-tecnologias"},[I("span",null,"PHP"),I("span",null,"MySQL"),I("span",null,"JavaScript"),I("span",null,"HTML"),I("span",null,"CSS")],-1))],64)):ct(a)==="RajaHub"?(ce(),Ee(an,{key:2},[p[82]||(p[82]=I("span",{class:"sobretitulo"},"SITE INSTITUCIONAL / 03",-1)),p[83]||(p[83]=I("h2",null,"RajaHub · Site institucional",-1)),p[84]||(p[84]=I("p",null," Participei do desenvolvimento do site do RajaHub, voltado a empreendedorismo, tecnologia e inovação. O site apresenta as frentes de atuação do grupo e os caminhos para quem busca investimento ou quer investir. O projeto local utiliza WordPress, com templates em PHP e estilos próprios. ",-1)),I("img",{class:"print-detalhes",src:ct(v_),alt:"Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação.",width:"1265",height:"712"},null,8,GD),p[85]||(p[85]=I("div",{class:"etiquetas-tecnologias"},[I("span",null,"WordPress"),I("span",null,"PHP"),I("span",null,"JavaScript"),I("span",null,"HTML"),I("span",null,"CSS")],-1)),p[86]||(p[86]=I("a",{class:"link-texto visitar-projeto",href:"https://rajahub.com.br/",target:"_blank",rel:"noopener noreferrer"},[$t("Visitar site "),I("span",null,"↗")],-1))],64)):ct(a)==="Gostiki"?(ce(),Ee(an,{key:3},[p[87]||(p[87]=I("span",{class:"sobretitulo"},"SISTEMA DE GESTÃO / 04",-1)),p[88]||(p[88]=I("h2",null,"Gostiki · Vendas e operação",-1)),p[89]||(p[89]=I("p",null," Participei do desenvolvimento do sistema da Gostiki Açaí & Sorvete. O projeto reúne ponto de venda, mesas, delivery, cadastro de produtos e complementos, além da gestão de lojas e clientes. Também inclui recursos de integração com o iFood e impressão de comandas pelo Gostiki Print. ",-1)),p[90]||(p[90]=I("div",{class:"etiquetas-tecnologias"},[I("span",null,"PHP"),I("span",null,"MySQL"),I("span",null,"JavaScript"),I("span",null,"HTML"),I("span",null,"CSS")],-1))],64)):Ur("",!0),I("button",{class:"link-texto",onClick:p[16]||(p[16]=w=>ct(l).close())},[...p[91]||(p[91]=[$t(" Voltar aos projetos ",-1),I("span",null,"↙",-1)])])])):Ur("",!0)],8,HD),I("dialog",{ref_key:"briefDialog",ref:u,"aria-label":"Preparar uma ideia de projeto",class:"janela-detalhes",onClick:p[21]||(p[21]=w=>{w.target===ct(u)&&ct(u).close()})},[I("form",{class:"conteudo-janela",onSubmit:zS(v,["prevent"])},[I("button",{type:"button",class:"fechar-janela",onClick:p[18]||(p[18]=w=>ct(u).close()),"aria-label":"Fechar rascunho"}," ✕"),p[92]||(p[92]=I("span",{class:"sobretitulo"},"DO PRIMEIRO INSIGHT AO PRÓXIMO PASSO",-1)),p[93]||(p[93]=I("h2",null,[$t("Qual é a "),I("em",null,"sua ideia?")],-1)),p[94]||(p[94]=I("p",null," Os canais de contato serão adicionados em breve. Por enquanto, organize sua ideia e salve um rascunho no seu dispositivo. ",-1)),p[95]||(p[95]=I("label",{for:"ideia"},"O que você quer construir?",-1)),Ri(I("textarea",{id:"ideia","onUpdate:modelValue":p[19]||(p[19]=w=>Ue(c)?c.value=w:null),required:"",maxlength:"5000",rows:"5",placeholder:"Conte sobre o projeto, o objetivo e o que você imagina…",onInput:p[20]||(p[20]=w=>f.value=!1)},null,544),[[FS,ct(c)]]),p[96]||(p[96]=I("button",{class:"salvar-ideia",type:"submit"},[$t(" Salvar minha ideia "),I("span",null,"↓")],-1)),I("p",WD,wn(ct(f)?"Rascunho preparado para download. Nenhuma mensagem foi enviada.":"Seu texto permanece no navegador. Nada é enviado."),1)],32)],512)],2)}}},qD="modulepreload",jD=function(n,t){return new URL(n,t).href},M_={},b_=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){let u=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=u(e.map(c=>{if(c=jD(c,i),c in M_)return;M_[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(i)for(let m=o.length-1;m>=0;m--){const g=o[m];if(g.href===c&&(!f||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":qD,f||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),f)return new Promise((m,g)=>{h.addEventListener("load",m),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},$D={__name:"nuxt-error-page",props:{error:Object},setup(n){const e=n.error,i=Number(e.statusCode||500),r=i===404,s=e.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=e.message||e.toString(),a=void 0,c=r?ip(()=>b_(()=>import("./Cy03CCjD.js"),__vite__mapDeps([0,1,2]),import.meta.url)):ip(()=>b_(()=>import("./CIseH_DD.js"),__vite__mapDeps([3,1,4]),import.meta.url));return(f,d)=>(ce(),Br(ct(c),gx(Ig({status:ct(i),statusText:ct(s),statusCode:ct(i),statusMessage:ct(s),description:ct(o),stack:ct(a)})),null,16))}},YD={key:0},E_={__name:"nuxt-root",setup(n){const t=()=>null,e=fn(),i=e.deferHydration();if(e.isHydrating){const c=e.hooks.hookOnce("app:error",i),f=rs().beforeEach(()=>{c(),f()})}const r=!1;Oh(r0,Jh()),e.hooks.callHookWith(c=>c.map(f=>f()),"vue:setup",[]);const s=Zh(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;function l(c,f,d){const h=e.vueApp.config.errorHandler;if(h&&!h.__nuxt_default)try{h(c,f,d)}catch(m){console.error("[nuxt] Error in `app.config.errorHandler`",m)}}og((c,f,d)=>{if(e.hooks.callHook("vue:error",c,f,d).catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),a.test(navigator.userAgent))return e.hooks.callHook("app:error",c),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,c),!1;if(xb(c)&&(c.fatal||c.unhandled))return e.runWithContext(()=>gb(c)),l(c,f,d),!1});const u=!1;return(c,f)=>(ce(),Br(Jy,{onResolve:ct(i)},{default:Nh(()=>[ct(o)?(ce(),Ee("div",YD)):ct(s)?(ce(),Br(ct($D),{key:1,error:ct(s)},null,8,["error"])):ct(u)?(ce(),Br(ct(t),{key:2,context:ct(u)},null,8,["context"])):ct(r)?(ce(),Br(Ey(ct(r)),{key:3})):(ce(),Br(ct(XD),{key:4}))]),_:1},8,["onResolve"]))}};let T_;{let n;T_=async function(){if(n)return n;const i=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?WS(E_):GS(E_),r=nb({vueApp:i});async function s(o){await r.callHook("app:error",o),r.payload.error||=Qh(o)}s.__nuxt_default=!0,i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await sb(r,jE)}catch(o){s(o)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(QM),await r.hooks.callHook("app:mounted",i),await Ih()}catch(o){s(o)}return i},n=T_().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{Ee as A,I as B,wn as C,Le as D,Nh as E,$t as F,QD as G,ob as H,Fh as I,qs as J,d0 as K,fn as a,id as b,Mc as c,zh as d,tI as e,KD as f,_b as g,Fg as h,Oe as i,mb as j,ct as k,Og as l,Ac as m,pb as n,Sc as o,jh as p,xo as q,Vp as r,Yu as s,af as t,rs as u,ca as v,cf as w,jg as x,ZD as y,ce as z};
