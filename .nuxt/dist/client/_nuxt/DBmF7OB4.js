const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C86ofg0p.js","./DYSXbBgj.js","./error-404.DL_4WIao.css","./CpH-CoWf.js","./error-500.I1Dtv2V5.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function yh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},Hr=[],Mi=()=>{},y_=()=>!1,ba=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sc=n=>n.startsWith("onUpdate:"),Kt=Object.assign,Sh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ex=Object.prototype.hasOwnProperty,ht=(n,e)=>ex.call(n,e),Ve=Array.isArray,lr=n=>Ea(n)==="[object Map]",Dl=n=>Ea(n)==="[object Set]",Wd=n=>Ea(n)==="[object Date]",He=n=>typeof n=="function",St=n=>typeof n=="string",Kn=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",S_=n=>(dt(n)||He(n))&&He(n.then)&&He(n.catch),M_=Object.prototype.toString,Ea=n=>M_.call(n),tx=n=>Ea(n).slice(8,-1),b_=n=>Ea(n)==="[object Object]",oc=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xr=yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ac=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},nx=/-\w/g,un=ac(n=>n.replace(nx,e=>e.slice(1).toUpperCase())),ix=/\B([A-Z])/g,as=ac(n=>n.replace(ix,"-$1").toLowerCase()),lc=ac(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ic=ac(n=>n?`on${lc(n)}`:""),gi=(n,e)=>!Object.is(n,e),vl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},E_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Mh=n=>{const e=parseFloat(n);return isNaN(e)?n:e},rx=n=>{const e=St(n)?Number(n):NaN;return isNaN(e)?n:e};let Xd;const cc=()=>Xd||(Xd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ts(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?lx(i):ts(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||dt(n))return n}const sx=/;(?![^(]*\))/g,ox=/:([^]+)/,ax=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function lx(n){const e={};return n.replace(ax,t=>t.startsWith("/*")?"":t).split(sx).forEach(t=>{if(t){const i=t.split(ox);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function di(n){let e="";if(St(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=di(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function cx(n){if(!n)return null;let{class:e,style:t}=n;return e&&!St(e)&&(n.class=di(e)),t&&(n.style=ts(t)),n}const ux="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fx=yh(ux);function T_(n){return!!n||n===""}function hx(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=uc(n[r],e[r],t);return i}function qd(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&uc(s,i[a],t)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function dx(n,e,t){let i=lr(n),r=lr(e);if(i||r||(i=Dl(n),r=Dl(e),i||r))return i&&r?qd(n,e,t):!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),u=e.hasOwnProperty(a);if(l&&!u||!l&&u||!uc(n[a],e[a],t))return!1}return String(n)===String(e)}function jd(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const o=i(n,e,t);return r.delete(n),s.delete(e),o}function uc(n,e,t){if(n===e)return!0;let i=Wd(n),r=Wd(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=Kn(n),r=Kn(e),i||r?n===e:(i=Ve(n),r=Ve(e),i||r?i&&r?jd(n,e,t,hx):!1:(i=dt(n),r=dt(e),i||r?!i||!r?!1:jd(n,e,t,dx):String(n)===String(e))))}const w_=n=>!!(n&&n.__v_isRef===!0),nt=n=>St(n)?n:n==null?"":Ve(n)||dt(n)&&(n.toString===M_||!He(n.toString))?w_(n)?nt(n.value):JSON.stringify(n,A_,2):String(n),A_=(n,e)=>w_(e)?A_(n,e.value):lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Uc(i,s)+" =>"]=r,t),{})}:Dl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Uc(t))}:Kn(e)?Uc(e):dt(e)&&!Ve(e)&&!b_(e)?String(e):e,Uc=(n,e="")=>{var t;return Kn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let jt;class R_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&jt&&(jt.active?(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){if(this._on>0&&--this._on===0){if(jt===this)jt=this.prevScope;else{let e=jt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function px(n){return new R_(n)}function fc(){return jt}let yt;const Oc=new WeakSet;class C_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&(jt.active?jt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oc.has(this)&&(Oc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||L_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$d(this),D_(this);const e=yt,t=ri;yt=this,ri=!0;try{return this.fn()}finally{I_(this),yt=e,ri=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Th(e);this.deps=this.depsTail=void 0,$d(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hu(this)&&this.run()}get dirty(){return Hu(this)}}let P_=0,Ho,Vo;function L_(n,e=!1){if(n.flags|=8,e){n.next=Vo,Vo=n;return}n.next=Ho,Ho=n}function bh(){P_++}function Eh(){if(--P_>0)return;if(Vo){let e=Vo;for(Vo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ho;){let e=Ho;for(Ho=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function D_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function I_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Th(i),mx(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Hu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(U_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function U_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qo)||(n.globalVersion=Qo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Hu(n))))return;n.flags|=2;const e=n.dep,t=yt,i=ri;yt=n,ri=!0;try{D_(n);const r=n.fn(n._value);(e.version===0||gi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{yt=t,ri=i,I_(n),n.flags&=-3}}function Th(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Th(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function mx(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ri=!0;const O_=[];function Xi(){O_.push(ri),ri=!1}function qi(){const n=O_.pop();ri=n===void 0?!0:n}function $d(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=yt;yt=void 0;try{e()}finally{yt=t}}}let Qo=0;class _x{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!yt||!ri||yt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==yt)t=this.activeLink=new _x(yt,this),yt.deps?(t.prevDep=yt.depsTail,yt.depsTail.nextDep=t,yt.depsTail=t):yt.deps=yt.depsTail=t,N_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=yt.depsTail,t.nextDep=void 0,yt.depsTail.nextDep=t,yt.depsTail=t,yt.deps===t&&(yt.deps=i)}return t}trigger(e){this.version++,Qo++,this.notify(e)}notify(e){bh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Eh()}}}function N_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)N_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Il=new WeakMap,qr=Symbol(""),Vu=Symbol(""),ea=Symbol("");function Qt(n,e,t){if(ri&&yt){let i=Il.get(n);i||Il.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new wh),r.map=i,r.key=t),r.track()}}function zi(n,e,t,i,r,s){const o=Il.get(n);if(!o){Qo++;return}const a=l=>{l&&l.trigger()};if(bh(),e==="clear")o.forEach(a);else{const l=Ve(n),u=l&&oc(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,d)=>{(d==="length"||d===ea||!Kn(d)&&d>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(ea)),e){case"add":l?u&&a(o.get("length")):(a(o.get(qr)),lr(n)&&a(o.get(Vu)));break;case"delete":l||(a(o.get(qr)),lr(n)&&a(o.get(Vu)));break;case"set":lr(n)&&a(o.get(qr));break}}Eh()}function gx(n,e){const t=Il.get(n);return t&&t.get(e)}function ms(n){const e=ct(n);return e===n||(Qt(e,"iterate",ea),In(n))?e:si(n)?Gi(n)?e.map(t=>pr(Jn(t))):e.map(pr):e.map(Jn)}function hc(n){return Qt(n=ct(n),"iterate",ea),n}function pi(n,e){return si(n)?pr(Gi(n)?Jn(e):e):Jn(e)}const vx={__proto__:null,[Symbol.iterator](){return Nc(this,Symbol.iterator,n=>pi(this,n))},concat(...n){return ms(this).concat(...n.map(e=>Ve(e)?ms(e):e))},entries(){return Nc(this,"entries",n=>(n[1]=pi(this,n[1]),n))},every(n,e){return Ri(this,"every",n,e,void 0,arguments)},filter(n,e){return Ri(this,"filter",n,e,t=>t.map(i=>pi(this,i)),arguments)},find(n,e){return Ri(this,"find",n,e,t=>pi(this,t),arguments)},findIndex(n,e){return Ri(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ri(this,"findLast",n,e,t=>pi(this,t),arguments)},findLastIndex(n,e){return Ri(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ri(this,"forEach",n,e,void 0,arguments)},includes(...n){return Fc(this,"includes",n)},indexOf(...n){return Fc(this,"indexOf",n)},join(n){return ms(this).join(n)},lastIndexOf(...n){return Fc(this,"lastIndexOf",n)},map(n,e){return Ri(this,"map",n,e,void 0,arguments)},pop(){return To(this,"pop")},push(...n){return To(this,"push",n)},reduce(n,...e){return Yd(this,"reduce",n,e)},reduceRight(n,...e){return Yd(this,"reduceRight",n,e)},shift(){return To(this,"shift")},some(n,e){return Ri(this,"some",n,e,void 0,arguments)},splice(...n){return To(this,"splice",n)},toReversed(){return ms(this).toReversed()},toSorted(n){return ms(this).toSorted(n)},toSpliced(...n){return ms(this).toSpliced(...n)},unshift(...n){return To(this,"unshift",n)},values(){return Nc(this,"values",n=>pi(this,n))}};function Nc(n,e,t){const i=hc(n),r=i[e]();return i!==n&&!In(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const xx=Array.prototype;function Ri(n,e,t,i,r,s){const o=hc(n),a=o!==n&&!In(n),l=o[e];if(l!==xx[e]){const f=l.apply(n,s);return a?Jn(f):f}let u=t;o!==n&&(a?u=function(f,d){return t.call(this,pi(n,f),d,n)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Yd(n,e,t,i){const r=hc(n),s=r!==n&&!In(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=pi(n,u)),t.call(this,u,pi(n,c),f,n)}):t.length>3&&(o=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](o,...i);return a?pi(n,l):l}function Fc(n,e,t){const i=ct(n);Qt(i,"iterate",ea);const r=i[e](...t);return(r===-1||r===!1)&&dc(t[0])?(t[0]=ct(t[0]),i[e](...t)):r}function To(n,e,t=[]){Xi(),bh();const i=ct(n)[e].apply(n,t);return Eh(),qi(),i}const yx=yh("__proto__,__v_isRef,__isVue"),F_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Kn));function Sx(n){Kn(n)||(n=String(n));const e=ct(this);return Qt(e,"has",n),e.hasOwnProperty(n)}class B_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Lx:V_:s?H_:z_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=vx[t]))return l;if(t==="hasOwnProperty")return Sx}const a=Reflect.get(e,t,Ot(e)?e:i);if((Kn(t)?F_.has(t):yx(t))||(r||Qt(e,"get",t),s))return a;if(Ot(a)){const l=o&&oc(t)?a:a.value;return r&&dt(l)?Wu(l):l}return dt(a)?r?Wu(a):dr(a):a}}class k_ extends B_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ve(e)&&oc(t);if(!this._isShallow){const u=si(s);if(!In(i)&&!si(i)&&(s=ct(s),i=ct(i)),!o&&Ot(s)&&!Ot(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:ht(e,t),l=Reflect.set(e,t,i,Ot(e)?e:r);return e===ct(r)&&l&&(a?gi(i,s)&&zi(e,"set",t,i):zi(e,"add",t,i)),l}deleteProperty(e,t){const i=ht(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&zi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Kn(t)||!F_.has(t))&&Qt(e,"has",t),i}ownKeys(e){return Qt(e,"iterate",Ve(e)?"length":qr),Reflect.ownKeys(e)}}class Mx extends B_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const bx=new k_,Ex=new Mx,Tx=new k_(!0);const Gu=n=>n,Ia=n=>Reflect.getPrototypeOf(n);function wx(n,e,t){return function(...i){const r=this.__v_raw,s=ct(r),o=lr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?Gu:e?pr:Jn;return!e&&Qt(s,"iterate",l?Vu:qr),Kt(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function Ua(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ax(n,e){const t={get(r){const s=this.__v_raw,o=ct(s),a=ct(r);n||(gi(r,a)&&Qt(o,"get",r),Qt(o,"get",a));const{has:l}=Ia(o),u=e?Gu:n?pr:Jn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Qt(ct(r),"iterate",qr),r.size},has(r){const s=this.__v_raw,o=ct(s),a=ct(r);return n||(gi(r,a)&&Qt(o,"has",r),Qt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ct(a),u=e?Gu:n?pr:Jn;return!n&&Qt(l,"iterate",qr),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Kt(t,n?{add:Ua("add"),set:Ua("set"),delete:Ua("delete"),clear:Ua("clear")}:{add(r){const s=ct(this),o=Ia(s),a=ct(r),l=!e&&!In(r)&&!si(r)?a:r;return o.has.call(s,l)||gi(r,l)&&o.has.call(s,r)||gi(a,l)&&o.has.call(s,a)||(s.add(l),zi(s,"add",l,l)),this},set(r,s){!e&&!In(s)&&!si(s)&&(s=ct(s));const o=ct(this),{has:a,get:l}=Ia(o);let u=a.call(o,r);u||(r=ct(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?gi(s,c)&&zi(o,"set",r,s):zi(o,"add",r,s),this},delete(r){const s=ct(this),{has:o,get:a}=Ia(s);let l=o.call(s,r);l||(r=ct(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&zi(s,"delete",r,void 0),u},clear(){const r=ct(this),s=r.size!==0,o=r.clear();return s&&zi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=wx(r,n,e)}),t}function Ah(n,e){const t=Ax(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ht(t,r)&&r in i?t:i,r,s)}const Rx={get:Ah(!1,!1)},Cx={get:Ah(!1,!0)},Px={get:Ah(!0,!1)};const z_=new WeakMap,H_=new WeakMap,V_=new WeakMap,Lx=new WeakMap;function Dx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dr(n){return si(n)?n:Rh(n,!1,bx,Rx,z_)}function Bs(n){return Rh(n,!1,Tx,Cx,H_)}function Wu(n){return Rh(n,!0,Ex,Px,V_)}function Rh(n,e,t,i,r){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=Dx(tx(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Gi(n){return si(n)?Gi(n.__v_raw):!!(n&&n.__v_isReactive)}function si(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function dc(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function Ix(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&E_(n,"__v_skip",!0),n}const Jn=n=>dt(n)?dr(n):n,pr=n=>dt(n)?Wu(n):n;function Ot(n){return n?n.__v_isRef===!0:!1}function Ft(n){return G_(n,!1)}function Xu(n){return G_(n,!0)}function G_(n,e){return Ot(n)?n:new Ux(n,e)}class Ux{constructor(e,t){this.dep=new wh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Jn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||si(e);e=i?e:ct(e),gi(e,t)&&(this._rawValue=e,this._value=i?e:Jn(e),this.dep.trigger())}}function ge(n){return Ot(n)?n.value:n}function Ox(n){return He(n)?n():ge(n)}const Nx={get:(n,e,t)=>e==="__v_raw"?n:ge(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ot(r)&&!Ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function W_(n){return Gi(n)?n:new Proxy(n,Nx)}class Fx{constructor(e,t,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Kn(t)?t:String(t),this._raw=ct(e);let r=!0,s=e;if(!Ve(e)||Kn(this._key)||!oc(this._key))do r=!dc(s)||In(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ge(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ot(this._raw[this._key])){const t=this._object[this._key];if(Ot(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return gx(this._raw,this._key)}}class Bx{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function kx(n,e,t){return Ot(n)?n:He(n)?new Bx(n):dt(n)&&arguments.length>1?zx(n,e,t):Ft(n)}function zx(n,e,t){return new Fx(n,e,t)}class Hx{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&yt!==this)return L_(this,!0),!0}get value(){const e=this.dep.track();return U_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vx(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new Hx(i,r,t)}const Oa={},Ul=new WeakMap;let Ir;function Gx(n,e=!1,t=Ir){if(t){let i=Ul.get(t);i||Ul.set(t,i=[]),i.push(n)}}function Wx(n,e,t=xt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=v=>r?v:In(v)||r===!1||r===0?Hi(v,1):Hi(v);let c,f,d,h,p=!1,_=!1;if(Ot(n)?(f=()=>n.value,p=In(n)):Gi(n)?(f=()=>u(n),p=!0):Ve(n)?(_=!0,p=n.some(v=>Gi(v)||In(v)),f=()=>n.map(v=>{if(Ot(v))return v.value;if(Gi(v))return u(v);if(He(v))return l?l(v,2):v()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Xi();try{d()}finally{qi()}}const v=Ir;Ir=c;try{return l?l(n,3,[h]):n(h)}finally{Ir=v}}:f=Mi,e&&r){const v=f,T=r===!0?1/0:r;f=()=>Hi(v(),T)}const g=fc(),m=()=>{c.stop(),g&&g.active&&Sh(g.effects,c)};if(s&&e){const v=e;e=(...T)=>{const A=v(...T);return m(),A}}let y=_?new Array(n.length).fill(Oa):Oa;const x=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(e){const T=c.run();if(v||r||p||(_?T.some((A,R)=>gi(A,y[R])):gi(T,y))){d&&d();const A=Ir;Ir=c;try{const R=[T,y===Oa?void 0:_&&y[0]===Oa?[]:y,h];y=T,l?l(e,3,R):e(...R)}finally{Ir=A}}}else c.run()};return a&&a(x),c=new C_(f),c.scheduler=o?()=>o(x,!1):x,h=v=>Gx(v,!1,c),d=c.onStop=()=>{const v=Ul.get(c);if(v){if(l)l(v,4);else for(const T of v)T();Ul.delete(c)}},e?i?x(!0):y=c.run():o?o(x.bind(null,!0),!0):c.run(),m.pause=c.pause.bind(c),m.resume=c.resume.bind(c),m.stop=m,m}function Hi(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ot(n))Hi(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)Hi(n[i],e,t);else if(Dl(n)||lr(n))n.forEach(i=>{Hi(i,e,t)});else if(b_(n)){for(const i in n)Hi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hi(n[i],e,t)}return n}function Ta(n,e,t,i){try{return i?n(...i):n()}catch(r){_o(r,e,t)}}function oi(n,e,t,i){if(He(n)){const r=Ta(n,e,t,i);return r&&S_(r)&&r.catch(s=>{_o(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(oi(n[s],e,t,i));return r}}function _o(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){Xi(),Ta(s,null,10,[n,l,u]),qi();return}}Xx(n,t,r,i,o)}function Xx(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ln=[];let ui=-1;const Ws=[];let nr=null,Us=0;const X_=Promise.resolve();let Ol=null;function Ch(n){const e=Ol||X_;return n?e.then(this?n.bind(this):n):e}function qx(n){let e=ui+1,t=ln.length;for(;e<t;){const i=e+t>>>1,r=ln[i],s=ta(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ph(n){if(!(n.flags&1)){const e=ta(n),t=ln[ln.length-1];!t||!(n.flags&2)&&e>=ta(t)?ln.push(n):ln.splice(qx(e),0,n),n.flags|=1,q_()}}function q_(){Ol||(Ol=X_.then(j_))}function qu(n){if(!Ve(n))nr&&n.id===-1?nr.splice(Us+1,0,n):n.flags&1||(Ws.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Ws.push(n[e]);q_()}function Kd(n,e,t=ui+1){for(;t<ln.length;t++){const i=ln[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ln.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Nl(n){if(Ws.length){const e=[...new Set(Ws)].sort((t,i)=>ta(t)-ta(i));if(Ws.length=0,nr){for(let t=0;t<e.length;t++)nr.push(e[t]);return}for(nr=e,Us=0;Us<nr.length;Us++){const t=nr[Us];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}nr=null,Us=0}}const ta=n=>n.id==null?n.flags&2?-1:1/0:n.id;function j_(n){try{for(ui=0;ui<ln.length;ui++){const e=ln[ui];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ta(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ui<ln.length;ui++){const e=ln[ui];e&&(e.flags&=-2)}ui=-1,ln.length=0,Nl(),Ol=null,(ln.length||Ws.length)&&j_()}}let Pn=null,$_=null;function Fl(n){const e=Pn;return Pn=n,$_=n&&n.type.__scopeId||null,e}function Lh(n,e=Pn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Hl(-1);const s=Fl(e),o=Yr.length;let a;try{a=n(...r)}finally{for(let l=Yr.length;l>o;l--)Vh();Fl(s),i._d&&Hl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function jx(n,e){if(Pn===null)return n;const t=Sc(Pn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=xt]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&Hi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function fi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Xi(),oi(l,t,8,[n.el,a,n,e]),qi())}}function Dh(n,e){if($t){let t=$t.provides;const i=$t.parent&&$t.parent.provides;i===t&&(t=$t.provides=Object.create(i)),t[n]=e}}function Xs(n,e,t=!1){const i=go();if(i||jr){let r=jr?jr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}function Ih(){return!!(go()||jr)}const $x=Symbol.for("v-scx"),Yx=()=>Xs($x);function Kx(n,e){return Uh(n,null,e)}function Bc(n,e,t){return Uh(n,e,t)}function Uh(n,e,t=xt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Kt({},t),l=e&&i||!e&&s!=="post";let u;if(io){if(s==="sync"){const h=Yx();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Mi,h.resume=Mi,h.pause=Mi,h}}const c=$t;a.call=(h,p,_)=>oi(h,c,p,_);let f=!1;s==="post"?a.scheduler=h=>{an(h,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,p)=>{p?h():Ph(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const d=Wx(n,e,a);return io&&(u?u.push(d):l&&d()),d}function Jx(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Y_(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=wa(this),a=Uh(r,s.bind(i),t);return o(),a}function Y_(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Zx=Symbol("_vte"),pc=n=>n.__isTeleport,kc=Symbol("_leaveCb");function Qx(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Nn){e=t;break}}return e}function K_(n){if(!mc(n))return pc(n.type)&&n.children?Qx(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&He(t.default))return t.default()}}function Oh(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Oh(pc(t.type)&&K_(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Nh(n,e){return He(n)?Kt({name:n.name},e,{setup:n}):n}function Fh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Jd(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Bl=new WeakMap;function qs(n,e,t,i,r=!1){if(Ve(n)){n.forEach((_,g)=>qs(_,e&&(Ve(e)?e[g]:e),t,i,r));return}if(js(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&qs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Sc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===xt?a.refs={}:a.refs,f=a.setupState,d=ct(f),h=f===xt?y_:_=>Jd(c,_)?!1:ht(d,_),p=(_,g)=>!(g&&Jd(c,g));if(u!=null&&u!==l){if(Zd(e),St(u))c[u]=null,h(u)&&(f[u]=null);else if(Ot(u)){const _=e;p(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if(He(l))Ta(l,a,12,[o,c]);else{const _=St(l),g=Ot(l);if(_||g){const m=()=>{if(n.f){const y=_?h(l)?f[l]:c[l]:p()||!n.k?l.value:c[n.k];if(r)Ve(y)&&Sh(y,s);else if(Ve(y))y.includes(s)||y.push(s);else if(_)c[l]=[s],h(l)&&(f[l]=c[l]);else{const x=[s];p(l,n.k)&&(l.value=x),n.k&&(c[n.k]=x)}}else _?(c[l]=o,h(l)&&(f[l]=o)):g&&(p(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{m(),Bl.delete(n)};y.id=-1,Bl.set(n,y),an(y,t)}else Zd(n),m()}}}function Zd(n){const e=Bl.get(n);e&&(e.flags|=8,Bl.delete(n))}let Qd=!1;const _s=()=>{Qd||(console.error("Hydration completed but contains mismatches."),Qd=!0)},ey=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",ty=n=>n.namespaceURI.includes("MathML"),Na=n=>{if(n.nodeType===1){if(ey(n))return"svg";if(ty(n))return"mathml"}},ks=n=>n.nodeType===8;function ny(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=n,c=(x,v)=>{if(!v.hasChildNodes()){t(null,x,v),Nl(),v._vnode=x;return}f(v.firstChild,x,null,null,null),Nl(),v._vnode=x},f=(x,v,T,A,R,S=!1)=>{S=S||!!v.dynamicChildren;const M=ks(x)&&x.data==="[",b=()=>_(x,v,T,A,R,M),{type:C,ref:U,shapeFlag:O,patchFlag:z}=v;let $=x.nodeType;v.el=x,z===-2&&(S=!1,v.dynamicChildren=null);let F=null;switch(C){case $r:$!==3?v.children===""?(l(v.el=r(""),o(x),x),F=x):F=b():(x.data!==v.children&&(_s(),x.data=v.children),F=s(x));break;case Nn:y(x)?(F=s(x),m(v.el=x.content.firstChild,x,T)):$!==8||M?F=b():F=s(x);break;case Ys:if(M&&(x=s(x),$=x.nodeType),$===1||$===3){F=x;const X=!v.children.length;for(let k=0;k<v.staticCount;k++)X&&(v.children+=F.nodeType===1?F.outerHTML:F.data),k===v.staticCount-1&&(v.anchor=F),F=s(F);return M?s(F):F}else b();break;case Bt:M?F=p(x,v,T,A,R,S):F=b();break;default:if(O&1)($!==1||v.type.toLowerCase()!==x.tagName.toLowerCase())&&!y(x)?F=b():F=d(x,v,T,A,R,S);else if(O&6){v.slotScopeIds=R;const X=o(x);if(M?F=g(x):ks(x)&&x.data==="teleport start"?F=g(x,x.data,"teleport end"):F=s(x),e(v,X,null,T,A,Na(X),S),(js(v)||v.component.asyncDep)&&!v.component.subTree){let k;M?(k=Dt(Ys),k.anchor=F?F.previousSibling:X.lastChild):k=x.nodeType===3?Ye(""):Dt(x.nodeType===8?Nn:"div"),k.el=x,v.component.subTree=k}}else O&64?$!==8?F=b():F=v.type.hydrate(x,v,T,A,R,S,n,h):O&128&&(F=v.type.hydrate(x,v,T,A,Na(o(x)),R,S,n,f))}return U!=null&&qs(U,null,A,v),F},d=(x,v,T,A,R,S)=>{S=S||!!v.dynamicChildren;const{type:M,dynamicProps:b,props:C,patchFlag:U,shapeFlag:O,dirs:z,transition:$}=v,F=M==="input"||M==="option",X=!!b;if(F||X||U!==-1){z&&fi(v,null,T,"created");let k=!1;if(y(x)){k=vg(null,$)&&T&&T.vnode.props&&T.vnode.props.appear;const de=x.content.firstChild;if(k){const ue=de.getAttribute("class");ue&&(de.$cls=ue),$.beforeEnter(de)}m(de,x,T),v.el=x=de}if(O&16&&!(C&&(C.innerHTML||C.textContent))){let de=h(x.firstChild,v,x,T,A,R,S);for(de&&!xl(x,1)&&_s();de;){const ue=de;de=de.nextSibling,a(ue)}}else if(O&8){let de=v.children;de[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(de=de.slice(1));const{textContent:ue}=x;ue!==de&&ue!==de.replace(/\r\n|\r/g,`
`)&&(xl(x,0)||_s(),x.textContent=v.children)}if(C){if(F||X||!S||U&48){const de=x.tagName.includes("-"),ue=x.namespaceURI.includes("svg")?"svg":x.namespaceURI.includes("MathML")?"mathml":void 0;for(const Se in C)if(F&&(Se.endsWith("value")||Se==="indeterminate")||ba(Se)&&!Xr(Se)||Se[0]==="."||de&&!Xr(Se)||b&&b.includes(Se)){if(ry(x,Se,C[Se]))continue;i(x,Se,null,C[Se],ue,T)}}else if(C.onClick)i(x,"onClick",null,C.onClick,void 0,T);else if(U&4&&Gi(C.style))for(const de in C.style)C.style[de]}let fe;(fe=C&&C.onVnodeBeforeMount)&&Gn(fe,T,v),z&&fi(v,null,T,"beforeMount"),((fe=C&&C.onVnodeMounted)||z||k)&&Eg(()=>{fe&&Gn(fe,T,v),k&&$.enter(x),z&&fi(v,null,T,"mounted")},A)}return x.nextSibling},h=(x,v,T,A,R,S,M)=>{M=M||!!v.dynamicChildren;const b=v.children,C=b.length;let U=!1;for(let O=0;O<C;O++){const z=M?b[O]:b[O]=Rn(b[O]),$=z.type===$r;x?($&&!M&&O+1<C&&Rn(b[O+1]).type===$r&&(l(r(x.data.slice(z.children.length)),T,s(x)),x.data=z.children),x=f(x,z,A,R,S,M)):$&&!z.children?l(z.el=r(""),T):(U||(U=!0,xl(T,1)||_s()),t(null,z,T,null,A,R,Na(T),S))}return x},p=(x,v,T,A,R,S)=>{const{slotScopeIds:M}=v;M&&(R=R?R.concat(M):M);const b=o(x),C=h(s(x),v,b,T,A,R,S);return C&&ks(C)&&C.data==="]"?s(v.anchor=C):(_s(),l(v.anchor=u("]"),b,C),C)},_=(x,v,T,A,R,S)=>{if(oy(x,v)||_s(),v.el=null,S){const C=g(x);for(;;){const U=s(x);if(U&&U!==C)a(U);else break}}const M=s(x),b=o(x);return a(x),t(null,v,b,M,T,A,Na(b),R),T&&(T.vnode.el=v.el,yc(T,v.el)),M},g=(x,v="[",T="]")=>{let A=0;for(;x;)if(x=s(x),x&&ks(x)&&(x.data===v&&A++,x.data===T)){if(A===0)return s(x);A--}return x},m=(x,v,T)=>{const A=v.parentNode;A&&A.replaceChild(x,v);let R=T;for(;R;)R.vnode.el===v&&(R.vnode.el=R.subTree.el=x),R=R.parent},y=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[c,f]}const iy=new Set(["src","srcset","href","poster"]);function ry(n,e,t){return iy.has(e)?n.getAttribute(e)===(t==null?null:`${t}`):!1}const kl="data-allow-mismatch",sy={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function xl(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(kl);)n=n.parentElement;return Bh(n&&n.getAttribute(kl),e)}function Bh(n,e){if(n==null)return!1;if(n==="")return!0;{const t=n.split(",");return e===0&&t.includes("children")?!0:t.includes(sy[e])}}function oy(n,e){return xl(n.parentElement,1)||ay(n)||ly(e)}function ay(n){return n.nodeType===1&&Bh(n.getAttribute(kl),1)}function ly({props:n}){const e=n&&n[kl];return typeof e=="string"&&Bh(e,1)}cc().requestIdleCallback;cc().cancelIdleCallback;function cy(n,e){if(ks(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(ks(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const js=n=>!!n.type.__asyncLoader;function ep(n){He(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let u=null,c,f=0;const d=()=>(f++,u=null,h()),h=()=>{let p;return u||(p=u=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((g,m)=>{l(_,()=>g(d()),()=>m(_),f+1)});throw _}).then(_=>p!==u&&u?u:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return Nh({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(p,_,g){const m=p.isConnected;let y=!1;(_.bu||(_.bu=[])).push(()=>y=!0);const x=()=>{y||!p.parentNode||m&&!p.isConnected||g()},v=s?()=>{const T=s(x,A=>cy(p,A));T&&(_.bum||(_.bum=[])).push(T)}:x;c?v():h().then(()=>!_.isUnmounted&&v())},get __asyncResolved(){return c},setup(){const p=$t;if(Fh(p),c)return()=>Fa(c,p);const _=T=>{u=null,_o(T,p,13,!i)};if(a&&p.suspense||io)return h().then(T=>()=>Fa(T,p)).catch(T=>(_(T),()=>i?Dt(i,{error:T}):null));const g=Ft(!1),m=Ft(),y=Ft(!!r);let x,v;return kh(()=>{x!=null&&clearTimeout(x),v!=null&&clearTimeout(v)}),r&&(v=setTimeout(()=>{p.isUnmounted||(y.value=!1)},r)),o!=null&&(x=setTimeout(()=>{if(!p.isUnmounted&&!g.value&&!m.value){const T=new Error(`Async component timed out after ${o}ms.`);_(T),m.value=T}},o)),h().then(()=>{p.isUnmounted||(g.value=!0,p.parent&&mc(p.parent.vnode)&&p.parent.update())}).catch(T=>{if(p.isUnmounted){u=null;return}_(T),m.value=T}),()=>{if(g.value&&c)return Fa(c,p);if(m.value&&i)return Dt(i,{error:m.value});if(t&&!y.value)return Fa(t,p)}}})}function Fa(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=Dt(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const mc=n=>n.type.__isKeepAlive;function J_(n,e){Q_(n,"a",e)}function Z_(n,e){Q_(n,"da",e)}function Q_(n,e,t=$t){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_c(e,i,t),t){let r=t.parent;for(;r&&r.parent;)mc(r.parent.vnode)&&uy(i,e,t,r),r=r.parent}}function uy(n,e,t,i){const r=_c(e,n,i,!0);kh(()=>{Sh(i[e],r)},t)}function _c(n,e,t=$t,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Xi();const a=wa(t),l=oi(e,t,n,o);return a(),qi(),l});return i?r.unshift(s):r.push(s),s}}const Yi=n=>(e,t=$t)=>{(!io||n==="sp")&&_c(n,(...i)=>e(...i),t)},fy=Yi("bm"),gc=Yi("m"),hy=Yi("bu"),dy=Yi("u"),vc=Yi("bum"),kh=Yi("um"),py=Yi("sp"),my=Yi("rtg"),_y=Yi("rtc");function eg(n,e=$t){_c("ec",n,e)}const tg="components";function XD(n,e){return ig(tg,n,!0,e)||n}const ng=Symbol.for("v-ndc");function gy(n){return St(n)?ig(tg,n,!1)||n:n||ng}function ig(n,e,t=!0,i=!1){const r=Pn||$t;if(r){const s=r.type;{const a=sS(s,!1);if(a&&(a===e||a===un(e)||a===lc(un(e))))return s}const o=tp(r[n]||s[n],e)||tp(r.appContext[n],e);return!o&&i?s:o}}function tp(n,e){return n&&(n[e]||n[un(e)]||n[lc(un(e))])}function ci(n,e,t,i){let r;const s=t,o=Ve(n);if(o||St(n)){const a=o&&Gi(n);let l=!1,u=!1;a&&(l=!In(n),u=si(n),n=hc(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?pr(Jn(n[c])):Jn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(dt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const ju=n=>n?Rg(n)?Sc(n):ju(n.parent):null,Go=Kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ju(n.parent),$root:n=>ju(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>sg(n),$forceUpdate:n=>n.f||(n.f=()=>{Ph(n.update)}),$nextTick:n=>n.n||(n.n=Ch.bind(n.proxy)),$watch:n=>Jx.bind(n)}),zc=(n,e)=>n!==xt&&!n.__isScriptSetup&&ht(n,e),vy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(zc(i,e))return o[e]=1,i[e];if(r!==xt&&ht(r,e))return o[e]=2,r[e];if(ht(s,e))return o[e]=3,s[e];if(t!==xt&&ht(t,e))return o[e]=4,t[e];$u&&(o[e]=0)}}const u=Go[e];let c,f;if(u)return e==="$attrs"&&Qt(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==xt&&ht(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ht(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return zc(r,e)?(r[e]=t,!0):i!==xt&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==xt&&a[0]!=="$"&&ht(n,a)||zc(e,a)||ht(s,a)||ht(i,a)||ht(Go,a)||ht(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function np(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let $u=!0;function xy(n){const e=sg(n),t=n.proxy,i=n.ctx;$u=!1,e.beforeCreate&&ip(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:p,activated:_,deactivated:g,beforeDestroy:m,beforeUnmount:y,destroyed:x,unmounted:v,render:T,renderTracked:A,renderTriggered:R,errorCaptured:S,serverPrefetch:M,expose:b,inheritAttrs:C,components:U,directives:O,filters:z}=e;if(u&&yy(u,i,null),o)for(const X in o){const k=o[X];He(k)&&(i[X]=k.bind(t))}if(r){const X=r.call(t,t);dt(X)&&(n.data=dr(X))}if($u=!0,s)for(const X in s){const k=s[X],fe=He(k)?k.bind(t,t):He(k.get)?k.get.bind(t,t):Mi,de=!He(k)&&He(k.set)?k.set.bind(t):Mi,ue=Gh({get:fe,set:de});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ue.value,set:Se=>ue.value=Se})}if(a)for(const X in a)rg(a[X],i,t,X);if(l){const X=He(l)?l.call(t):l;Reflect.ownKeys(X).forEach(k=>{Dh(k,X[k])})}c&&ip(c,n,"c");function F(X,k){Ve(k)?k.forEach(fe=>X(fe.bind(t))):k&&X(k.bind(t))}if(F(fy,f),F(gc,d),F(hy,h),F(dy,p),F(J_,_),F(Z_,g),F(eg,S),F(_y,A),F(my,R),F(vc,y),F(kh,v),F(py,M),Ve(b))if(b.length){const X=n.exposed||(n.exposed={});b.forEach(k=>{Object.defineProperty(X,k,{get:()=>t[k],set:fe=>t[k]=fe,enumerable:!0})})}else n.exposed||(n.exposed={});T&&n.render===Mi&&(n.render=T),C!=null&&(n.inheritAttrs=C),U&&(n.components=U),O&&(n.directives=O),M&&Fh(n)}function yy(n,e,t=Mi){Ve(n)&&(n=Yu(n));for(const i in n){const r=n[i];let s;dt(r)?"default"in r?s=Xs(r.from||i,r.default,!0):s=Xs(r.from||i):s=Xs(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ip(n,e,t){oi(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function rg(n,e,t,i){let r=i.includes(".")?Y_(t,i):()=>t[i];if(St(n)){const s=e[n];He(s)&&Bc(r,s)}else if(He(n))Bc(r,n.bind(t));else if(dt(n))if(Ve(n))n.forEach(s=>rg(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Bc(r,s,n)}}function sg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>zl(l,u,o,!0)),zl(l,e,o)),dt(e)&&s.set(e,l),l}function zl(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&zl(n,s,t,!0),r&&r.forEach(o=>zl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Sy[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Sy={data:rp,props:sp,emits:sp,methods:Uo,computed:Uo,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Uo,directives:Uo,watch:by,provide:rp,inject:My};function rp(n,e){return e?n?function(){return Kt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function My(n,e){return Uo(Yu(n),Yu(e))}function Yu(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function rn(n,e){return n?[...new Set([].concat(n,e))]:e}function Uo(n,e){return n?Kt(Object.create(null),n,e):e}function sp(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Kt(Object.create(null),np(n),np(e??{})):e}function by(n,e){if(!n)return e;if(!e)return n;const t=Kt(Object.create(null),n);for(const i in e)t[i]=rn(n[i],e[i]);return t}function og(){return{app:null,config:{isNativeTag:y_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ey=0;function Ty(n,e){return function(i,r=null){He(i)||(i=Kt({},i)),r!=null&&!dt(r)&&(r=null);const s=og(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Ey++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:aS,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(u,...f)):He(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const h=u._ceVNode||Dt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(h,c):n(h,c,d),l=!0,u._container=c,c.__vue_app__=u,Sc(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(oi(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=jr;jr=u;try{return c()}finally{jr=f}}};return u}}let jr=null;const wy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${un(e)}Modifiers`]||n[`${as(e)}Modifiers`];function Ay(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let r=t;const s=e.startsWith("update:"),o=s&&wy(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>St(c)?c.trim():c)),o.number&&(r=r.map(Mh)));let a,l=i[a=Ic(e)]||i[a=Ic(un(e))];!l&&s&&(l=i[a=Ic(as(e))]),l&&oi(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,oi(u,n,6,r)}}const Ry=new WeakMap;function ag(n,e,t=!1){const i=t?Ry:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=u=>{const c=ag(u,e,!0);c&&(a=!0,Kt(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(dt(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):Kt(o,s),dt(n)&&i.set(n,o),o)}function xc(n,e){return!n||!ba(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,as(e))||ht(n,e))}function Hc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:d,setupState:h,ctx:p,inheritAttrs:_}=n,g=Fl(n);let m,y;try{if(t.shapeFlag&4){const v=r||i,T=v;m=Rn(u.call(T,v,c,f,h,d,p)),y=a}else{const v=e;m=Rn(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),y=e.props?a:Py(a)}}catch(v){Yr.length=0,_o(v,n,1),m=Dt(Nn)}let x=m;if(y&&_!==!1){const v=Object.keys(y),{shapeFlag:T}=x;v.length&&T&7&&(s&&v.some(sc)&&(y=Ly(y,s)),x=ns(x,y,!1,!0))}if(t.dirs&&(x=ns(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition){const v=pc(x.type)&&K_(x)||x;Oh(v,t.transition)}return m=x,Fl(g),m}function Cy(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(ia(r)){if(r.type!==Nn||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Py=n=>{let e;for(const t in n)(t==="class"||t==="style"||ba(t))&&((e||(e={}))[t]=n[t]);return e},Ly=(n,e)=>{const t={};for(const i in n)(!sc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Dy(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?op(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(lg(o,i,d)&&!xc(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?op(i,o,u):!0:!!o;return!1}function op(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(lg(e,n,s)&&!xc(t,s))return!0}return!1}function lg(n,e,t){const i=n[t],r=e[t];return t==="style"&&dt(i)&&dt(r)?!uc(i,r):i!==r}function yc({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const cg={},ug=()=>Object.create(cg),fg=n=>Object.getPrototypeOf(n)===cg;function Iy(n,e,t,i=!1){const r={},s=ug();n.propsDefaults=Object.create(null),hg(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Bs(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Uy(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ct(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(xc(n.emitsOptions,d))continue;const h=e[d];if(l)if(ht(s,d))h!==s[d]&&(s[d]=h,u=!0);else{const p=un(d);r[p]=Ku(l,a,p,h,n,!1)}else h!==s[d]&&(s[d]=h,u=!0)}}}else{hg(n,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!ht(e,f)&&((c=as(f))===f||!ht(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Ku(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ht(e,f))&&(delete s[f],u=!0)}u&&zi(n.attrs,"set","")}function hg(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xr(l))continue;const u=e[l];let c;r&&ht(r,c=un(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:xc(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=ct(t),u=a||xt;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Ku(r,l,f,u[f],n,!ht(u,f))}}return o}function Ku(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=wa(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===as(t))&&(i=!0))}return i}const Oy=new WeakMap;function dg(n,e,t=!1){const i=t?Oy:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const c=f=>{l=!0;const[d,h]=dg(f,e,!0);Kt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return dt(n)&&i.set(n,Hr),Hr;if(Ve(s))for(let c=0;c<s.length;c++){const f=un(s[c]);ap(f)&&(o[f]=xt)}else if(s)for(const c in s){const f=un(c);if(ap(f)){const d=s[c],h=o[f]=Ve(d)||He(d)?{type:d}:Kt({},d),p=h.type;let _=!1,g=!0;if(Ve(p))for(let m=0;m<p.length;++m){const y=p[m],x=He(y)&&y.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(g=!1)}else _=He(p)&&p.name==="Boolean";h[0]=_,h[1]=g,(_||ht(h,"default"))&&a.push(f)}}const u=[o,a];return dt(n)&&i.set(n,u),u}function ap(n){return n[0]!=="$"&&!Xr(n)}const zh=n=>n==="_"||n==="_ctx"||n==="$stable",Hh=n=>Ve(n)?n.map(Rn):[Rn(n)],Ny=(n,e,t)=>{if(e._n)return e;const i=Lh((...r)=>Hh(e(...r)),t);return i._c=!1,i},pg=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zh(r))continue;const s=n[r];if(He(s))e[r]=Ny(r,s,i);else if(s!=null){const o=Hh(s);e[r]=()=>o}}},mg=(n,e)=>{const t=Hh(e);n.slots.default=()=>t},_g=(n,e,t)=>{for(const i in e)(t||!zh(i))&&(n[i]=e[i])},Fy=(n,e,t)=>{const i=n.slots=ug();if(n.vnode.shapeFlag&32){const r=e._;r?(_g(i,e,t),t&&E_(i,"_",r,!0)):pg(e,i)}else e&&mg(n,e)},By=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:_g(r,e,t):(s=!e.$stable,pg(e,r)),o=e}else e&&(mg(n,e),o={default:1});if(s)for(const a in r)!zh(a)&&o[a]==null&&delete r[a]},an=Eg;function ky(n){return gg(n)}function zy(n){return gg(n,ny)}function gg(n,e){const t=cc();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=Mi,insertStaticContent:p}=n,_=(D,w,Y,ne=null,ee=null,q=null,ce=void 0,te=null,se=!!w.dynamicChildren)=>{if(D===w)return;D&&!ir(D,w)&&(ne=Me(D),Se(D,ee,q,!0),D=null),w.patchFlag===-2&&(se=!1,w.dynamicChildren=null),w.dynamicChildren&&D&&D.dynamicChildren&&D.dynamicChildren.hasOnce&&(w.dynamicChildren===Hr&&(w.dynamicChildren=[]),w.dynamicChildren.hasOnce=!0);const{type:Q,ref:L,shapeFlag:E}=w;switch(Q){case $r:g(D,w,Y,ne);break;case Nn:m(D,w,Y,ne);break;case Ys:D==null&&y(w,Y,ne,ce);break;case Bt:U(D,w,Y,ne,ee,q,ce,te,se);break;default:E&1?T(D,w,Y,ne,ee,q,ce,te,se):E&6?O(D,w,Y,ne,ee,q,ce,te,se):(E&64||E&128)&&Q.process(D,w,Y,ne,ee,q,ce,te,se,Ie)}L!=null&&ee?qs(L,D&&D.ref,q,w||D,!w):L==null&&D&&D.ref!=null&&qs(D.ref,null,q,D,!0)},g=(D,w,Y,ne)=>{if(D==null)i(w.el=a(w.children),Y,ne);else{const ee=w.el=D.el;w.children!==D.children&&u(ee,w.children)}},m=(D,w,Y,ne)=>{D==null?i(w.el=l(w.children||""),Y,ne):w.el=D.el},y=(D,w,Y,ne)=>{[D.el,D.anchor]=p(D.children,w,Y,ne,D.el,D.anchor)},x=({el:D,anchor:w},Y,ne)=>{let ee;for(;D&&D!==w;)ee=d(D),i(D,Y,ne),D=ee;i(w,Y,ne)},v=({el:D,anchor:w})=>{let Y;for(;D&&D!==w;)Y=d(D),r(D),D=Y;r(w)},T=(D,w,Y,ne,ee,q,ce,te,se)=>{if(w.type==="svg"?ce="svg":w.type==="math"&&(ce="mathml"),D==null)A(w,Y,ne,ee,q,ce,te,se);else{const Q=D.el&&D.el._isVueCE?D.el:null;try{Q&&Q._beginPatch(),M(D,w,ee,q,ce,te,se)}finally{Q&&Q._endPatch()}}},A=(D,w,Y,ne,ee,q,ce,te)=>{let se,Q;const{props:L,shapeFlag:E,transition:I,dirs:W}=D;if(se=D.el=o(D.type,q,L&&L.is,L),E&8?c(se,D.children):E&16&&S(D.children,se,null,ne,ee,Vc(D,q),ce,te),W&&fi(D,null,ne,"created"),R(se,D,D.scopeId,ce,ne),L){for(const j in L)j!=="value"&&!Xr(j)&&s(se,j,null,L[j],q,ne);"value"in L&&s(se,"value",null,L.value,q),(Q=L.onVnodeBeforeMount)&&Gn(Q,ne,D)}W&&fi(D,null,ne,"beforeMount");const J=vg(ee,I);J&&I.beforeEnter(se),i(se,w,Y),((Q=L&&L.onVnodeMounted)||J||W)&&an(()=>{Q&&Gn(Q,ne,D),J&&I.enter(se),W&&fi(D,null,ne,"mounted")},ee)},R=(D,w,Y,ne,ee)=>{if(Y&&h(D,Y),ne)for(let q=0;q<ne.length;q++)h(D,ne[q]);if(ee){let q=ee.subTree;if(w===q||Mg(q.type)&&(q.ssContent===w||q.ssFallback===w)){const ce=ee.vnode;R(D,ce,ce.scopeId,ce.slotScopeIds,ee.parent)}}},S=(D,w,Y,ne,ee,q,ce,te,se=0)=>{for(let Q=se;Q<D.length;Q++){const L=D[Q]=te?Bi(D[Q]):Rn(D[Q]);_(null,L,w,Y,ne,ee,q,ce,te)}},M=(D,w,Y,ne,ee,q,ce)=>{const te=w.el=D.el;let{patchFlag:se,dynamicChildren:Q,dirs:L}=w;se|=D.patchFlag&16;const E=D.props||xt,I=w.props||xt;let W;if(Y&&br(Y,!1),(W=I.onVnodeBeforeUpdate)&&Gn(W,Y,w,D),L&&fi(w,D,Y,"beforeUpdate"),Y&&br(Y,!0),Q&&(!D.dynamicChildren||D.dynamicChildren.length!==Q.length)&&(se=0,ce=!1,Q=null),(E.innerHTML&&I.innerHTML==null||E.textContent&&I.textContent==null)&&c(te,""),Q?b(D.dynamicChildren,Q,te,Y,ne,Vc(w,ee),q):ce||k(D,w,te,null,Y,ne,Vc(w,ee),q,!1),se>0){if(se&16)C(te,E,I,Y,ee);else if(se&2&&E.class!==I.class&&s(te,"class",null,I.class,ee),se&4&&s(te,"style",E.style,I.style,ee),se&8){const J=w.dynamicProps;for(let j=0;j<J.length;j++){const xe=J[j],pe=E[xe],ye=I[xe];(ye!==pe||xe==="value")&&s(te,xe,pe,ye,ee,Y)}}se&1&&D.children!==w.children&&c(te,w.children)}else!ce&&Q==null&&C(te,E,I,Y,ee);((W=I.onVnodeUpdated)||L)&&an(()=>{W&&Gn(W,Y,w,D),L&&fi(w,D,Y,"updated")},ne)},b=(D,w,Y,ne,ee,q,ce)=>{for(let te=0;te<w.length;te++){const se=D[te],Q=w[te],L=se.el&&(se.type===Bt||!ir(se,Q)||se.shapeFlag&198)?f(se.el):Y;_(se,Q,L,null,ne,ee,q,ce,!0)}},C=(D,w,Y,ne,ee)=>{if(w!==Y){if(w!==xt)for(const q in w)!Xr(q)&&!(q in Y)&&s(D,q,w[q],null,ee,ne);for(const q in Y){if(Xr(q))continue;const ce=Y[q],te=w[q];ce!==te&&q!=="value"&&s(D,q,te,ce,ee,ne)}"value"in Y&&s(D,"value",w.value,Y.value,ee)}},U=(D,w,Y,ne,ee,q,ce,te,se)=>{const Q=w.el=D?D.el:a(""),L=w.anchor=D?D.anchor:a("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:W}=w;W&&(te=te?te.concat(W):W),D==null?(i(Q,Y,ne),i(L,Y,ne),S(w.children||[],Y,L,ee,q,ce,te,se)):E>0&&E&64&&I&&D.dynamicChildren&&D.dynamicChildren.length===I.length?(b(D.dynamicChildren,I,Y,ee,q,ce,te),(w.key!=null||ee&&w===ee.subTree)&&xg(D,w,!0)):k(D,w,Y,L,ee,q,ce,te,se)},O=(D,w,Y,ne,ee,q,ce,te,se)=>{w.slotScopeIds=te,D==null?w.shapeFlag&512?ee.ctx.activate(w,Y,ne,ce,se):z(w,Y,ne,ee,q,ce,se):$(D,w,se)},z=(D,w,Y,ne,ee,q,ce)=>{const te=D.component=eS(D,ne,ee);if(mc(D)&&(te.ctx.renderer=Ie),tS(te,!1,ce),te.asyncDep){if(ee&&ee.registerDep(te,F,ce),!D.el){const se=te.subTree=Dt(Nn);m(null,se,w,Y),D.placeholder=se.el}}else F(te,D,w,Y,ee,q,ce)},$=(D,w,Y)=>{const ne=w.component=D.component;if(Dy(D,w,Y))if(ne.asyncDep&&!ne.asyncResolved){w.el=D.el,X(ne,w,Y);return}else ne.next=w,ne.update();else w.el=D.el,ne.vnode=w},F=(D,w,Y,ne,ee,q,ce)=>{const te=()=>{if(D.isMounted){let{next:E,bu:I,u:W,parent:J,vnode:j}=D;{const le=yg(D);if(le){E&&(E.el=j.el,X(D,E,ce)),le.asyncDep.then(()=>{an(()=>{D.isUnmounted||Q()},ee)});return}}let xe=E,pe;br(D,!1),E?(E.el=j.el,X(D,E,ce)):E=j,I&&vl(I),(pe=E.props&&E.props.onVnodeBeforeUpdate)&&Gn(pe,J,E,j),br(D,!0);const ye=Hc(D),Re=D.subTree;D.subTree=ye,_(Re,ye,f(Re.el),Me(Re),D,ee,q),E.el=ye.el,xe===null&&yc(D,ye.el),W&&an(W,ee),(pe=E.props&&E.props.onVnodeUpdated)&&an(()=>Gn(pe,J,E,j),ee)}else{let E;const{el:I,props:W}=w,{bm:J,m:j,parent:xe,root:pe,type:ye}=D,Re=js(w);if(br(D,!1),J&&vl(J),!Re&&(E=W&&W.onVnodeBeforeMount)&&Gn(E,xe,w),br(D,!0),I&&rt){const le=()=>{D.subTree=Hc(D),rt(I,D.subTree,D,ee,null)};Re&&ye.__asyncHydrate?ye.__asyncHydrate(I,D,le):le()}else{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(ye,D.parent?D.parent.type:void 0);const le=D.subTree=Hc(D);_(null,le,Y,ne,D,ee,q),w.el=le.el}if(j&&an(j,ee),!Re&&(E=W&&W.onVnodeMounted)){const le=w;an(()=>Gn(E,xe,le),ee)}(w.shapeFlag&256||xe&&js(xe.vnode)&&xe.vnode.shapeFlag&256)&&D.a&&an(D.a,ee),D.isMounted=!0,w=Y=ne=null}};D.scope.on();const se=D.effect=new C_(te);D.scope.off();const Q=D.update=se.run.bind(se),L=D.job=se.runIfDirty.bind(se);L.i=D,L.id=D.uid,se.scheduler=()=>Ph(L),br(D,!0),Q()},X=(D,w,Y)=>{w.component=D;const ne=D.vnode.props;D.vnode=w,D.next=null,Uy(D,w.props,ne,Y),By(D,w.children,Y),Xi(),Kd(D),qi()},k=(D,w,Y,ne,ee,q,ce,te,se=!1)=>{const Q=D&&D.children,L=D?D.shapeFlag:0,E=w.children,{patchFlag:I,shapeFlag:W}=w;if(I>0){if(I&128){de(Q,E,Y,ne,ee,q,ce,te,se);return}else if(I&256){fe(Q,E,Y,ne,ee,q,ce,te,se);return}}W&8?(L&16&&De(Q,ee,q),E!==Q&&c(Y,E)):L&16?W&16?de(Q,E,Y,ne,ee,q,ce,te,se):De(Q,ee,q,!0):(L&8&&c(Y,""),W&16&&S(E,Y,ne,ee,q,ce,te,se))},fe=(D,w,Y,ne,ee,q,ce,te,se)=>{D=D||Hr,w=w||Hr;const Q=D.length,L=w.length,E=Math.min(Q,L);let I;for(I=0;I<E;I++){const W=w[I]=se?Bi(w[I]):Rn(w[I]);_(D[I],W,Y,null,ee,q,ce,te,se)}Q>L?De(D,ee,q,!0,!1,E):S(w,Y,ne,ee,q,ce,te,se,E)},de=(D,w,Y,ne,ee,q,ce,te,se)=>{let Q=0;const L=w.length;let E=D.length-1,I=L-1;for(;Q<=E&&Q<=I;){const W=D[Q],J=w[Q]=se?Bi(w[Q]):Rn(w[Q]);if(ir(W,J))_(W,J,Y,null,ee,q,ce,te,se);else break;Q++}for(;Q<=E&&Q<=I;){const W=D[E],J=w[I]=se?Bi(w[I]):Rn(w[I]);if(ir(W,J))_(W,J,Y,null,ee,q,ce,te,se);else break;E--,I--}if(Q>E){if(Q<=I){const W=I+1,J=W<L?w[W].el:ne;for(;Q<=I;)_(null,w[Q]=se?Bi(w[Q]):Rn(w[Q]),Y,J,ee,q,ce,te,se),Q++}}else if(Q>I)for(;Q<=E;)Se(D[Q],ee,q,!0),Q++;else{const W=Q,J=Q,j=new Map;for(Q=J;Q<=I;Q++){const Ce=w[Q]=se?Bi(w[Q]):Rn(w[Q]);Ce.key!=null&&j.set(Ce.key,Q)}let xe,pe=0;const ye=I-J+1;let Re=!1,le=0;const be=new Array(ye);for(Q=0;Q<ye;Q++)be[Q]=0;for(Q=W;Q<=E;Q++){const Ce=D[Q];if(pe>=ye){Se(Ce,ee,q,!0);continue}let ve;if(Ce.key!=null)ve=j.get(Ce.key);else for(xe=J;xe<=I;xe++)if(be[xe-J]===0&&ir(Ce,w[xe])){ve=xe;break}ve===void 0?Se(Ce,ee,q,!0):(be[ve-J]=Q+1,ve>=le?le=ve:Re=!0,_(Ce,w[ve],Y,null,ee,q,ce,te,se),pe++)}const Be=Re?Hy(be):Hr;for(xe=Be.length-1,Q=ye-1;Q>=0;Q--){const Ce=J+Q,ve=w[Ce],ze=w[Ce+1],N=Ce+1<L?ze.el||Sg(ze):ne;be[Q]===0?_(null,ve,Y,N,ee,q,ce,te,se):Re&&(xe<0||Q!==Be[xe]?ue(ve,Y,N,2):xe--)}}},ue=(D,w,Y,ne,ee=null)=>{const{el:q,type:ce,transition:te,children:se,shapeFlag:Q}=D;if(Q&6){ue(D.component.subTree,w,Y,ne);return}if(Q&128){D.suspense.move(w,Y,ne);return}if(Q&64){ce.move(D,w,Y,Ie);return}if(ce===Bt){i(q,w,Y);for(let E=0;E<se.length;E++)ue(se[E],w,Y,ne);i(D.anchor,w,Y);return}if(ce===Ys){x(D,w,Y);return}if(ne!==2&&Q&1&&te)if(ne===0)te.persisted&&!q[kc]?i(q,w,Y):(te.beforeEnter(q),i(q,w,Y),an(()=>te.enter(q),ee));else{const{leave:E,delayLeave:I,afterLeave:W}=te,J=()=>{D.ctx.isUnmounted?r(q):i(q,w,Y)},j=()=>{const xe=q._isLeaving||!!q[kc];q._isLeaving&&q[kc](!0),te.persisted&&!xe?J():E(q,()=>{J(),W&&W()})};I?I(q,J,j):j()}else i(q,w,Y)},Se=(D,w,Y,ne=!1,ee=!1)=>{const{type:q,props:ce,ref:te,children:se,dynamicChildren:Q,shapeFlag:L,patchFlag:E,dirs:I,cacheIndex:W,memo:J}=D;if((E===-2||Q&&Q.hasOnce)&&(ee=!1),te!=null&&(Xi(),qs(te,null,Y,D,!0),qi()),W!=null&&(!D.ctx||D.ctx===w)&&(w.renderCache[W]=void 0),L&256){w.ctx.deactivate(D);return}const j=L&1&&I,xe=!js(D);let pe;if(xe&&(pe=ce&&ce.onVnodeBeforeUnmount)&&Gn(pe,w,D),L&6)me(D.component,Y,ne);else{if(L&128){D.suspense.unmount(Y,ne);return}j&&fi(D,null,w,"beforeUnmount"),L&64?D.type.remove(D,w,Y,Ie,ne):Q&&!Q.hasOnce&&(q!==Bt||E>0&&E&64)?De(Q,w,Y,!1,!0):(q===Bt&&E&384||!ee&&L&16)&&De(se,w,Y),ne&&qe(D)}const ye=J!=null&&W==null;(xe&&(pe=ce&&ce.onVnodeUnmounted)||j||ye)&&an(()=>{pe&&Gn(pe,w,D),j&&fi(D,null,w,"unmounted"),ye&&(D.el=null)},Y)},qe=D=>{const{type:w,el:Y,anchor:ne,transition:ee}=D;if(w===Bt){re(Y,ne);return}if(w===Ys){v(D),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave();return}const q=()=>{r(Y),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(D.shapeFlag&1&&ee&&!ee.persisted){const{leave:ce,delayLeave:te}=ee,se=()=>ce(Y,q);te?te(D.el,q,se):se()}else q()},re=(D,w)=>{let Y;for(;D!==w;)Y=d(D),r(D),D=Y;r(w)},me=(D,w,Y)=>{const{bum:ne,scope:ee,job:q,subTree:ce,um:te,m:se,a:Q}=D;lp(se),lp(Q),ne&&vl(ne),ee.stop(),q?(q.flags|=8,Se(ce,D,w,Y)):D.vnode.el&&ce&&(ce.transition=D.vnode.transition,Se(ce,D,w,Y)),te&&an(te,w),an(()=>{D.isUnmounted=!0},w)},De=(D,w,Y,ne=!1,ee=!1,q=0)=>{for(let ce=q;ce<D.length;ce++)Se(D[ce],w,Y,ne,ee)},Me=D=>{if(D.shapeFlag&6)return Me(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const w=d(D.anchor||D.el),Y=w&&w[Zx];return Y?d(Y):w};let Ue=!1;const Ze=(D,w,Y)=>{let ne;D==null?w._vnode&&(Se(w._vnode,null,null,!0),ne=w._vnode.component):_(w._vnode||null,D,w,null,null,null,Y),w._vnode=D,Ue||(Ue=!0,Kd(ne),Nl(),Ue=!1)},Ie={p:_,um:Se,m:ue,r:qe,mt:z,mc:S,pc:k,pbc:b,n:Me,o:n};let at,rt;return e&&([at,rt]=e(Ie)),{render:Ze,hydrate:at,createApp:Ty(Ze,at)}}function Vc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function br({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function vg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function xg(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Bi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&xg(o,a)),a.type===$r&&(a.patchFlag===-1&&(a=r[s]=Bi(a)),a.el=o.el),a.type===Nn&&!a.el&&(a.el=o.el)}}function Hy(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function yg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yg(e)}function lp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Sg(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Sg(e.subTree):null}const Mg=n=>n.__isSuspense;let Ju=0;const Vy={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,l,u){if(n==null)Wy(e,t,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!n.suspense.isInFallback&&!s.isHydrating){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}Xy(n,e,t,i,r,o,a,l,u)}},hydrate:qy,normalize:jy},Gy=Vy;function na(n,e){const t=n.props&&n.props[e];He(t)&&t()}function Wy(n,e,t,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),d=n.suspense=bg(n,r,i,e,f,t,s,o,a,l);u(null,d.pendingBranch=n.ssContent,f,null,i,d,s,o),d.deps>0?(na(n,"onPending"),na(n,"onFallback"),u(null,n.ssFallback,e,t,i,null,s,o),$s(d,n.ssFallback)):d.resolve(!1,!0)}function Xy(n,e,t,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:p,pendingBranch:_,isInFallback:g,isHydrating:m}=f;if(_)f.pendingBranch=d,ir(_,d)?(f.deps++,l(_,d,m?t:f.hiddenContainer,null,r,f,s,o,a),f.deps--,f.deps<=0?f.resolve():g&&!m&&!f.isFallbackMountPending&&(l(p,h,t,i,r,null,s,o,a),$s(f,h))):(f.pendingId=Ju++,m?(f.isHydrating=!1,f.activeBranch=_):u(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),g?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():f.isFallbackMountPending||(l(p,h,t,i,r,null,s,o,a),$s(f,h))):p&&ir(p,d)?(l(p,d,t,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(p&&ir(p,d))l(p,d,t,i,r,f,s,o,a),$s(f,d);else if(na(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Ju++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:y,pendingId:x}=f;y>0?setTimeout(()=>{f.pendingId===x&&f.fallback(h)},y):y===0&&f.fallback(h)}}function bg(n,e,t,i,r,s,o,a,l,u,c=!1){const{p:f,m:d,um:h,n:p,o:{parentNode:_,remove:g}}=u;let m;const y=$y(n);y&&e&&e.pendingBranch&&(m=e.pendingId,e.deps++);const x=n.props?rx(n.props.timeout):void 0,v=s,T={vnode:n,parent:e,parentComponent:t,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Ju++,timeout:typeof x=="number"?x:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(A=!1,R=!1){const{vnode:S,activeBranch:M,pendingBranch:b,pendingId:C,effects:U,parentComponent:O,container:z,isInFallback:$}=T;let F=!1;if(T.isHydrating)T.isHydrating=!1;else if(!A){F=M&&b.transition&&b.transition.mode==="out-in";let fe=!1;F&&(M.transition.afterLeave=()=>{C===T.pendingId&&(d(b,z,s===v&&!fe?p(M):s,0),qu(U),$&&S.ssFallback&&(S.ssFallback.el=null))}),M&&!T.isFallbackMountPending&&(_(M.el)===z&&(s=p(M),fe=!0),h(M,O,T,!0),!F&&$&&S.ssFallback&&an(()=>S.ssFallback.el=null,T)),F||d(b,z,s,0)}T.isFallbackMountPending=!1,$s(T,b),T.pendingBranch=null,T.isInFallback=!1;let X=T.parent,k=!1;for(;X;){if(X.pendingBranch){for(let fe=0;fe<U.length;fe++)X.effects.push(U[fe]);k=!0;break}X=X.parent}!k&&!F&&qu(U),T.effects=[],y&&e&&e.pendingBranch&&m===e.pendingId&&(m=void 0,e.deps--,e.deps===0&&!R&&e.resolve()),na(S,"onResolve")},fallback(A){if(!T.pendingBranch)return;const{vnode:R,activeBranch:S,parentComponent:M,container:b,namespace:C}=T;na(R,"onFallback");const U=p(S),O=()=>{if(T.isFallbackMountPending=!1,!T.isInFallback)return;const $=T.vnode.ssFallback;f(null,$,b,U,M,null,C,a,l),$s(T,$)},z=A.transition&&A.transition.mode==="out-in";z&&(T.isFallbackMountPending=!0,S.transition.afterLeave=O),T.isInFallback=!0,h(S,M,null,!0),z||O()},move(A,R,S){T.activeBranch&&d(T.activeBranch,A,R,S),T.container=A},next(){return T.activeBranch&&p(T.activeBranch)},registerDep(A,R,S){const M=!!T.pendingBranch;M&&T.deps++;const b=A.vnode.el;A.asyncDep.catch(C=>{_o(C,A,0)}).then(C=>{if(A.isUnmounted||T.isUnmounted||T.pendingId!==A.suspenseId)return;if(Zu(),b&&!A.scope.active){M&&--T.deps===0&&T.resolve();return}A.asyncResolved=!0;const{vnode:U}=A;Qu(A,C),b&&(U.el=b);const O=!b&&A.subTree.el;R(A,U,_(b||A.subTree.el),b?null:p(A.subTree),T,o,S),O&&(U.placeholder=null,g(O)),yc(A,U.el),M&&--T.deps===0&&T.resolve()})},unmount(A,R){T.isUnmounted=!0,T.activeBranch&&h(T.activeBranch,t,A,R),T.pendingBranch&&h(T.pendingBranch,t,A,R)}};return T}function qy(n,e,t,i,r,s,o,a,l){const u=e.suspense=bg(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(n,u.pendingBranch=e.ssContent,t,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function jy(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=cp(i?t.default:t),n.ssFallback=i?cp(t.fallback):Dt(Nn)}function cp(n){let e;if(He(n)){const t=no&&n._c;t&&(n._d=!1,Xe()),n=n(),t&&(n._d=!0,e=gn,Vh())}return Ve(n)&&(n=Cy(n)),n=Rn(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function Eg(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):qu(n)}function $s(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;t.el=r,i&&i.subTree===t&&(i.vnode.el=r,yc(i,r))}function $y(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const Bt=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Nn=Symbol.for("v-cmt"),Ys=Symbol.for("v-stc"),Yr=[];let gn=null;function Xe(n=!1){Yr.push(gn=n?null:[])}function Vh(){Yr.pop(),gn=Yr[Yr.length-1]||null}let no=1;function Hl(n,e=!1){no+=n,n<0&&gn&&e&&(gn.hasOnce=!0)}function Tg(n){return n.dynamicChildren=no>0?gn||Hr:null,Vh(),no>0&&gn&&gn.push(n),n}function Ke(n,e,t,i,r,s){return Tg(H(n,e,t,i,r,s,!0))}function Fr(n,e,t,i,r){return Tg(Dt(n,e,t,i,r,!0))}function ia(n){return n?n.__v_isVNode===!0:!1}function ir(n,e){return n.type===e.type&&n.key===e.key}const wg=({key:n})=>n??null,yl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Ot(n)||He(n)?{i:Pn,r:n,k:e,f:!!t}:n:null);function H(n,e=null,t=null,i=0,r=null,s=n===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wg(e),ref:e&&yl(e),scopeId:$_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pn};return a?(Vl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),no>0&&!o&&gn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&gn.push(l),l}const Dt=Yy;function Yy(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ng)&&(n=Nn),ia(n)){const a=ns(n,e,!0);return t&&Vl(a,t),no>0&&!s&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if(oS(n)&&(n=n.__vccOpts),e){e=Ag(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=di(a)),dt(l)&&(dc(l)&&!Ve(l)&&(l=Kt({},l)),e.style=ts(l))}const o=St(n)?1:Mg(n)?128:pc(n)?64:dt(n)?4:He(n)?2:0;return H(n,e,t,i,r,o,s,!0)}function Ag(n){return n?dc(n)||fg(n)?Kt({},n):n:null}function ns(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?Jy(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&wg(u),ref:e&&e.ref?t&&s?Ve(s)?s.concat(yl(e)):[s,yl(e)]:yl(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ns(n.ssContent),ssFallback:n.ssFallback&&ns(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Oh(c,l.clone(c)),c}function Ye(n=" ",e=0){return Dt($r,null,n,e)}function Ky(n,e){const t=Dt(Ys,null,n);return t.staticCount=e,t}function Ui(n="",e=!1){return e?(Xe(),Fr(Nn,null,n)):Dt(Nn,null,n)}function Rn(n){return n==null||typeof n=="boolean"?Dt(Nn):Ve(n)?Dt(Bt,null,n.slice()):ia(n)?Bi(n):Dt($r,null,String(n))}function Bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ns(n)}function Vl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Vl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!fg(e)?e._ctx=Pn:r===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(He(e)){if(i&65){Vl(n,{default:e});return}e={default:e,_ctx:Pn},t=32}else e=String(e),i&64?(t=16,e=[Ye(e)]):t=8;n.children=e,n.shapeFlag|=t}function Jy(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=di([e.class,i.class]));else if(r==="style")e.style=ts([e.style,i.style]);else if(ba(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!sc(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Gn(n,e,t,i=null){oi(n,e,7,[t,i])}const Zy=og();let Qy=0;function eS(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Zy,s={uid:Qy++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new R_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dg(i,r),emitsOptions:ag(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ay.bind(null,s),n.ce&&n.ce(s),s}let $t=null;const go=()=>$t||Pn;let Gl,ra;{const n=cc(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Gl=e("__VUE_INSTANCE_SETTERS__",t=>$t=t),ra=e("__VUE_SSR_SETTERS__",t=>io=t)}const wa=n=>{const e=$t;return Gl(n),n.scope.on(),()=>{n.scope.off(),Gl(e)}},Zu=()=>{$t&&$t.scope.off(),Gl(null)};function Rg(n){return n.vnode.shapeFlag&4}let io=!1;function tS(n,e=!1,t=!1){e&&ra(e);const{props:i,children:r}=n.vnode,s=Rg(n);Iy(n,i,s,e),Fy(n,r,t||e);const o=s?nS(n,e):void 0;return e&&ra(!1),o}function nS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vy);const{setup:i}=t;if(i){Xi();const r=n.setupContext=i.length>1?rS(n):null,s=wa(n),o=Ta(i,n,0,[n.props,r]),a=S_(o);if(qi(),s(),(a||n.sp)&&!js(n)&&Fh(n),a){if(o.then(Zu,Zu),e)return o.then(l=>{ra(!0);try{Qu(n,l,e)}finally{ra(!1)}}).catch(l=>{_o(l,n,0)});n.asyncDep=o}else Qu(n,o)}else Cg(n)}function Qu(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=W_(e)),Cg(n)}function Cg(n,e,t){const i=n.type;n.render||(n.render=i.render||Mi);{const r=wa(n);Xi();try{xy(n)}finally{qi(),r()}}}const iS={get(n,e){return Qt(n,"get",""),n[e]}};function rS(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,iS),slots:n.slots,emit:n.emit,expose:e}}function Sc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(W_(Ix(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Go)return Go[t](n)},has(e,t){return t in e||t in Go}})):n.proxy}function sS(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function oS(n){return He(n)&&"__vccOpts"in n}const Gh=(n,e)=>Vx(n,e,io);function Pg(n,e,t){try{Hl(-1);const i=arguments.length;return i===2?dt(e)&&!Ve(e)?ia(e)?Dt(n,null,[e]):Dt(n,e):Dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ia(t)&&(t=[t]),Dt(n,e,t))}finally{Hl(1)}}const aS="3.5.43";let ef;const up=typeof window<"u"&&window.trustedTypes;if(up)try{ef=up.createPolicy("vue",{createHTML:n=>n})}catch{}const Lg=ef?n=>ef.createHTML(n):n=>n,lS="http://www.w3.org/2000/svg",cS="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,fp=Ni&&Ni.createElement("template"),uS={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ni.createElementNS(lS,n):e==="mathml"?Ni.createElementNS(cS,n):t?Ni.createElement(n,{is:t}):Ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ni.createTextNode(n),createComment:n=>Ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{fp.innerHTML=Lg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=fp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fS=Symbol("_vtc");function hS(n,e,t){const i=n[fS];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const hp=Symbol("_vod"),dS=Symbol("_vsh"),pS=Symbol(""),mS=/(?:^|;)\s*display\s*:/;function _S(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Oo(i,a,"")}else for(const o in e)t[o]==null&&Oo(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?vS(n,o,!St(e)&&e?e[o]:void 0,a)||Oo(i,o,a):Oo(i,o,"")}}else if(r){if(e!==t){const o=i[pS];o&&(t+=";"+o),i.cssText=t,s=mS.test(t)}}else e&&n.removeAttribute("style");hp in n&&(n[hp]=s?i.display:"",n[dS]&&(i.display="none"))}const Ba=/\s*!important$/;function Oo(n,e,t){if(Ve(t))t.forEach(i=>Oo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Ba.test(t)?n.setProperty(e,t.replace(Ba,""),"important"):n.setProperty(e,t);else{const i=gS(n,e);Ba.test(t)?n.setProperty(as(i),t.replace(Ba,""),"important"):n[i]=t}}const dp=["Webkit","Moz","ms"],Gc={};function gS(n,e){const t=Gc[e];if(t)return t;let i=un(e);if(i!=="filter"&&i in n)return Gc[e]=i;i=lc(i);for(let r=0;r<dp.length;r++){const s=dp[r]+i;if(s in n)return Gc[e]=s}return e}function vS(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&St(i)&&t===i}const pp="http://www.w3.org/1999/xlink";function mp(n,e,t,i,r,s=fx(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(pp,e.slice(6,e.length)):n.setAttributeNS(pp,e,t):t==null||s&&!T_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Kn(t)?String(t):t)}function _p(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Lg(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=T_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Os(n,e,t,i){n.addEventListener(e,t,i)}function xS(n,e,t,i){n.removeEventListener(e,t,i)}const gp=Symbol("_vei");function yS(n,e,t,i,r=null){const s=n[gp]||(n[gp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=bS(e);if(i){const u=s[e]=wS(i,r);Os(n,a,u,l)}else o&&(xS(n,a,o,l),s[e]=void 0)}}const SS=/(Once|Passive|Capture)$/,MS=/^on:?(?:Once|Passive|Capture)$/;function bS(n){let e,t;for(;(t=n.match(SS))&&!MS.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):as(n.slice(2)),e]}let Wc=0;const ES=Promise.resolve(),TS=()=>Wc||(ES.then(()=>Wc=0),Wc=Date.now());function wS(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Ve(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&oi(u,e,5,a)}}else oi(r,e,5,[i])};return t.value=n,t.attached=TS(),t}const vp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,AS=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?hS(n,i,o):e==="style"?_S(n,t,i):ba(e)?sc(e)||yS(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RS(n,e,i,o))?(_p(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mp(n,e,i,o,s,e!=="value")):n._isVueCE&&(CS(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!St(i)))?_p(n,un(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),mp(n,e,i,o))};function RS(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&vp(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vp(e)&&St(t)?!1:e in n}function CS(n,e){const t=n._def.props;if(!t)return!1;const i=un(e);return Array.isArray(t)?t.some(r=>un(r)===i):Object.keys(t).some(r=>un(r)===i)}const xp=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>vl(e,t):e};function PS(n){n.target.composing=!0}function yp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ka=Symbol("_assign"),za=Symbol("_initialValue");function Xc(n,e,t){return e&&(n=n.trim()),t&&(n=Mh(n)),n}const LS={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[za]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[za]=n.defaultValue.replace(/\r\n?/g,`
`))),n[ka]=xp(r);const s=i||r.props&&r.props.type==="number";Os(n,e?"change":"input",o=>{o.target.composing||n[ka](Xc(n.value,t,s))}),(t||s)&&Os(n,"change",()=>{n.value=Xc(n.value,t,s)}),e||(Os(n,"compositionstart",PS),Os(n,"compositionend",yp),Os(n,"change",yp))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[za];delete n[za],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[ka](Xc(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[ka]=xp(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Mh(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},DS=["ctrl","shift","alt","meta"],IS={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>DS.some(t=>n[`${t}Key`]&&!e.includes(t))},US=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=IS[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},Dg=Kt({patchProp:AS},uS);let Wo,Sp=!1;function OS(){return Wo||(Wo=ky(Dg))}function NS(){return Wo=Sp?Wo:zy(Dg),Sp=!0,Wo}const FS=((...n)=>{const e=OS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ug(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Ig(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e}),BS=((...n)=>{const e=NS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ug(i);if(r)return t(r,!0,Ig(r))},e});function Ig(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ug(n){return St(n)?document.querySelector(n):n}const kS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,zS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,HS=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function VS(n,e){if(n==="__proto__"||n==="constructor"&&e&&typeof e=="object"&&"prototype"in e){GS(n);return}return e}function GS(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function Wl(n,e={}){if(typeof n!="string")return n;if(n[0]==='"'&&n[n.length-1]==='"'&&n.indexOf("\\")===-1)return n.slice(1,-1);const t=n.trim();if(t.length<=9)switch(t.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!HS.test(n)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(kS.test(n)||zS.test(n)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,VS)}return JSON.parse(n)}catch(i){if(e.strict)throw i;return n}}const Og=/#/g,Ng=/&/g,WS=/\//g,XS=/=/g,qS=/\?/g,Mc=/\+/g,jS=/%5e/gi,$S=/%60/gi,YS=/%7c/gi,KS=/%20/gi,JS=/%2f/gi,ZS=/%252f/gi;function Fg(n){return encodeURI(""+n).replace(YS,"|")}function tf(n){return Fg(typeof n=="string"?n:JSON.stringify(n)).replace(Mc,"%2B").replace(KS,"+").replace(Og,"%23").replace(Ng,"%26").replace($S,"`").replace(jS,"^").replace(WS,"%2F")}function qc(n){return tf(n).replace(XS,"%3D")}function QS(n){return Fg(n).replace(Og,"%23").replace(qS,"%3F").replace(ZS,"%2F").replace(Ng,"%26").replace(Mc,"%2B")}function sa(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function eM(n){return sa(n.replace(JS,"%252F"))}function tM(n){return sa(n.replace(Mc," "))}function nM(n){return sa(n.replace(Mc," "))}function Wh(n=""){const e=Object.create(null);n[0]==="?"&&(n=n.slice(1));for(const t of n.split("&")){const i=t.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=tM(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=nM(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function iM(n,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${qc(n)}=${tf(t)}`).join("&"):`${qc(n)}=${tf(e)}`:qc(n)}function Bg(n){return Object.keys(n).filter(e=>n[e]!==void 0).map(e=>iM(e,n[e])).filter(Boolean).join("&")}const rM=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,sM=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,oM=/^([/\\]\s*){2,}[^/\\]/,aM=/^[\s\0]*(blob|data|javascript|vbscript):$/i,lM=/\/$|\/\?|\/#/,cM=/^\.?\//;function vo(n,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?rM.test(n):sM.test(n)||(e.acceptRelative?oM.test(n):!1)}function nf(n){return!!n&&aM.test(n)}function rf(n="",e){return e?lM.test(n):n.endsWith("/")}function kg(n="",e){if(!e)return(rf(n)?n.slice(0,-1):n)||"/";if(!rf(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");r!==-1&&(t=n.slice(0,r),i=n.slice(r));const[s,...o]=t.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function sf(n="",e){if(!e)return n.endsWith("/")?n:n+"/";if(rf(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");if(r!==-1&&(t=n.slice(0,r),i=n.slice(r),!t))return i;const[s,...o]=t.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function uM(n=""){return n.startsWith("/")}function Mp(n=""){return uM(n)?n:"/"+n}function fM(n,e){if(Hg(e)||vo(n))return n;const t=kg(e);if(n.startsWith(t)){const i=n[t.length];if(!i||i==="/"||i==="?")return n}return bc(t,n)}function hM(n,e){if(Hg(e))return n;const t=kg(e);if(!n.startsWith(t))return n;const i=n[t.length];return i&&i!=="/"&&i!=="?"?n:"/"+n.slice(t.length).replace(/^\/+/,"")}function zg(n,e){const t=Ec(n),i={...Wh(t.search),...e};return t.search=Bg(i),Xh(t)}function Hg(n){return!n||n==="/"}function dM(n){return n&&n!=="/"}function bc(n,...e){let t=n||"";for(const i of e.filter(r=>dM(r)))if(t){const r=i.replace(cM,"");t=sf(t)+r}else t=i;return t}function Vg(...n){const e=/\/(?!\/)/,t=n.filter(Boolean),i=[];let r=0;for(const o of t)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&vo(i[0]))continue;i.pop(),r--;continue}if(a===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),r++}}let s=i.join("/");return r>=0?t[0]?.startsWith("/")&&!s.startsWith("/")?s="/"+s:t[0]?.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,t[t.length-1]?.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function pM(n,e,t={}){return t.trailingSlash||(n=sf(n),e=sf(e)),t.leadingSlash||(n=Mp(n),e=Mp(e)),t.encoding||(n=sa(n),e=sa(e)),n===e}function bp(n){return Xh({...Ec(n),hash:""})}const Gg=Symbol.for("ufo:protocolRelative");function Ec(n="",e){const t=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(t){const[,f,d=""]=t;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!vo(n,{acceptRelative:!0}))return Ep(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=Ep(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[Gg]:!i}}function Ep(n=""){const[e="",t="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:i}}function Xh(n){const e=n.pathname||"",t=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[Gg]?(n.protocol||"")+"//":"")+r+s+e+t+i}class mM extends Error{constructor(e,t){super(e,t),this.name="FetchError",t?.cause&&!this.cause&&(this.cause=t.cause)}}function _M(n){const e=n.error?.message||n.error?.toString()||"",t=n.request?.method||n.options?.method||"GET",i=n.request?.url||String(n.request)||"/",r=`[${t}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new mM(o,n.error?{cause:n.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return n[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return n.response&&n.response[u]}});return a}const gM=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Tp(n="GET"){return gM.has(n.toUpperCase())}function vM(n){if(n===void 0)return!1;const e=typeof n;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(n)?!0:n.buffer||n instanceof FormData||n instanceof URLSearchParams?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const xM=new Set(["image/svg","application/xml","application/xhtml","application/html"]),yM=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function SM(n=""){if(!n)return"json";const e=n.split(";").shift()||"";return yM.test(e)?"json":e==="text/event-stream"?"stream":xM.has(e)||e.startsWith("text/")?"text":"blob"}function MM(n,e,t,i){const r=bM(e?.headers??n?.headers,t?.headers,i);let s;return(t?.query||t?.params||e?.params||e?.query)&&(s={...t?.params,...t?.query,...e?.params,...e?.query}),{...t,...e,query:s,params:s,headers:r}}function bM(n,e,t){if(!e)return new t(n);const i=new t(e);if(n)for(const[r,s]of Symbol.iterator in n||Array.isArray(n)?n:new t(n))i.set(r,s);return i}async function Ha(n,e){if(e)if(Array.isArray(e))for(const t of e)await t(n);else await e(n)}const EM=new Set([408,409,425,429,500,502,503,504]),TM=new Set([101,204,205,304]);function Wg(n={}){const{fetch:e=globalThis.fetch,Headers:t=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=Tp(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):EM.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(h=>setTimeout(h,d)),s(a.request,{...a.options,retry:c-1})}}const u=_M(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:MM(l,u,n.defaults,t),response:void 0,error:void 0};if(c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&(await Ha(c,c.options.onRequest),c.options.headers instanceof t||(c.options.headers=new t(c.options.headers||{}))),typeof c.request=="string"&&(c.options.baseURL&&(c.request=fM(c.request,c.options.baseURL)),c.options.query&&(c.request=zg(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&Tp(c.options.method))if(vM(c.options.body)){const h=c.options.headers.get("content-type");typeof c.options.body!="string"&&(c.options.body=h==="application/x-www-form-urlencoded"?new URLSearchParams(c.options.body).toString():JSON.stringify(c.options.body)),h||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")}else("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half"));let f;if(!c.options.signal&&c.options.timeout){const h=new i;f=setTimeout(()=>{const p=new Error("[TimeoutError]: The operation was aborted due to timeout");p.name="TimeoutError",p.code=23,h.abort(p)},c.options.timeout),c.options.signal=h.signal}try{c.response=await e(c.request,c.options)}catch(h){return c.error=h,c.options.onRequestError&&await Ha(c,c.options.onRequestError),await r(c)}finally{f&&clearTimeout(f)}if((c.response.body||c.response._bodyInit)&&!TM.has(c.response.status)&&c.options.method!=="HEAD"){const h=(c.options.parseResponse?"json":c.options.responseType)||SM(c.response.headers.get("content-type")||"");switch(h){case"json":{const p=await c.response.text(),_=c.options.parseResponse||Wl;c.response._data=_(p);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[h]()}}return c.options.onResponse&&await Ha(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await Ha(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Wg({...n,...l,defaults:{...n.defaults,...l.defaults,...a}}),o}const Xl=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),wM=Xl.fetch?(...n)=>Xl.fetch(...n):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),AM=Xl.Headers,RM=Xl.AbortController,CM=Wg({fetch:wM,Headers:AM,AbortController:RM}),PM=CM,LM=()=>window?.__NUXT__?.config||{},qh=()=>LM().app,DM=()=>qh().baseURL,IM=()=>qh().buildAssetsDir,jh=(...n)=>Vg(Xg(),IM(),...n),Xg=(...n)=>{const e=qh(),t=e.cdnURL||e.baseURL;return n.length?Vg(t,...n):t};globalThis.__buildAssetsURL=jh,globalThis.__publicAssetsURL=Xg;globalThis.$fetch||(globalThis.$fetch=PM.create({baseURL:DM()}));"global"in globalThis||(globalThis.global=globalThis);function of(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?of(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const UM={run:n=>n()},OM=()=>UM,qg=typeof console.createTask<"u"?console.createTask:OM;function NM(n,e){const t=e.shift(),i=qg(t);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function FM(n,e){const t=e.shift(),i=qg(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}function jc(n,e){for(const t of[...n])t(e)}let BM=class{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,i={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,t(...s));return i=this.hook(e,r),i}removeHook(e,t){if(this._hooks[e]){const i=this._hooks[e].indexOf(t);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=of(e),i=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const t=of(e);for(const i in t)this.removeHook(i,t[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(NM,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(FM,e,...t)}callHookWith(e,t,...i){const r=this._before||this._after?{name:t,args:i,context:{}}:void 0;this._before&&jc(this._before,r);const s=e(t in this._hooks?[...this._hooks[t]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&jc(this._after,r)}):(this._after&&r&&jc(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}};function kM(){return new BM}function zM(n={}){let e,t=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(n.asyncContext){const o=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,t=!0},unset:()=>{e=void 0,t=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{t||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;af.add(u);try{const c=r?r.run(o,a):a();return t||(e=void 0),await c}finally{af.delete(u)}}}}function HM(n={}){const e={};return{get(t,i={}){return e[t]||(e[t]=zM({...n,...i})),e[t]}}}const ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},wp="__unctx__",VM=ql[wp]||(ql[wp]=HM()),GM=(n,e={})=>VM.get(n,e),Ap="__unctx_async_handlers__",af=ql[Ap]||(ql[Ap]=new Set);function WM(n){const e=[];for(const r of af){const s=r();s&&e.push(s)}const t=()=>{for(const r of e)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw t(),r})),[i,t]}const XM=!0,jD={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},qM=null,jM="#__nuxt",jg="nuxt-app",Rp=36e5,$M="vite:preloadError";function $g(n=jg){return GM(n,{asyncContext:!1})}const YM="__nuxt_plugin";function KM(n){let e=0;const t={_id:n.id||jg||"nuxt-app",_scope:px(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.21.11"},get vue(){return t.vueApp.version}},payload:Bs({...n.ssrContext?.payload||{},data:Bs({}),state:dr({}),once:new Set,_errors:Bs({})}),static:{data:{}},runWithContext(r){return t._scope.active&&!fc()?t._scope.run(()=>Cp(t,r)):Cp(t,r)},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Bs({}),_payloadRevivers:{},...n};{const r=window.__NUXT__;if(r)for(const s in r)switch(s){case"data":case"state":case"_errors":Object.assign(t.payload[s],r[s]);break;default:t.payload[s]=r[s]}}t.hooks=kM(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(r,s)=>{const o="$"+r;Va(t,o,s),Va(t.vueApp.config.globalProperties,o,s)},Va(t.vueApp,"$nuxt",t),Va(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener($M,s=>{t.callHook("app:chunkError",{error:s.payload}),s.payload?.message?.includes("Unable to preload CSS")&&s.preventDefault()}),window.useNuxtApp||=hn;const r=t.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});t.hook("app:mounted",r)}const i=t.payload.config;return t.provide("config",i),t}function JM(n,e){e.hooks&&n.hooks.addHooks(e.hooks)}async function ZM(n,e){if(typeof e=="function"){const{provide:t}=await n.runWithContext(()=>e(n))||{};if(t&&typeof t=="object")for(const i in t)n.provide(i,t[i])}}async function QM(n,e){const t=new Set,i=[],r=[];let s,o=0;async function a(l){const u=l.dependsOn?.filter(c=>e.some(f=>f._name===c)&&!t.has(c))??[];if(u.length>0)i.push([new Set(u),l]);else{const c=ZM(n,l).then(async()=>{l._name&&(t.add(l._name),await Promise.all(i.map(async([f,d])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(d)))})))}).catch(f=>{if(!l.parallel&&!n.payload.error)throw f;s||=f});l.parallel?r.push(c):await c}}for(const l of e)JM(n,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s)throw n.payload.error||s}function xr(n){if(typeof n=="function")return n;const e=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[YM]:!0,_name:e})}function Cp(n,e,t){const i=()=>e();return $g(n._id).set(n),n.vueApp.runWithContext(i)}function eb(n){let e;return Ih()&&(e=go()?.appContext.app.$nuxt),e||=$g(n).tryUse(),e||null}function hn(n){const e=eb(n);if(!e)throw new Error("[nuxt] instance unavailable");return e}function oa(n){return hn().$config}function Va(n,e,t){Object.defineProperty(n,e,{get:()=>t})}function $c(n){if(n===null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function lf(n,e,t=".",i){if(!$c(e))return lf(n,{},t,i);const r={...e};for(const s of Object.keys(n)){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:$c(o)&&$c(r[s])?r[s]=lf(o,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=o))}return r}function tb(n){return(...e)=>e.reduce((t,i)=>lf(t,i,"",n),{})}const Pp=tb();function nb(n,e){try{return e in n}catch{return!1}}class Lp extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,t={}){super(e,t),t.cause&&!this.cause&&(this.cause=t.cause)}toJSON(){const e={message:this.message,statusCode:cf(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Yg(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function ib(n){if(typeof n=="string")return new Lp(n);if(rb(n))return n;const e=new Lp(n.message??n.statusMessage??"",{cause:n.cause||n});if(nb(n,"stack"))try{Object.defineProperty(e,"stack",{get(){return n.stack}})}catch{try{e.stack=n.stack}catch{}}if(n.data&&(e.data=n.data),n.statusCode?e.statusCode=cf(n.statusCode,e.statusCode):n.status&&(e.statusCode=cf(n.status,e.statusCode)),n.statusMessage?e.statusMessage=n.statusMessage:n.statusText&&(e.statusMessage=n.statusText),e.statusMessage){const t=e.statusMessage;Yg(e.statusMessage)!==t&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(e.fatal=n.fatal),n.unhandled!==void 0&&(e.unhandled=n.unhandled),e}function rb(n){return n?.constructor?.__h3_error__===!0}const sb=/[^\u0009\u0020-\u007E]/g;function Yg(n=""){return n.replace(sb,"")}function cf(n,e=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?e:n}const Kg=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const is=()=>hn()?.$router;function ob(n){const e=n.scope;let t=fc();for(;t;){if(t===e)return!0;t=t.parent}return!1}const $h=()=>{if(Ih()){const n=go();if(!n||ob(n))return Xs(Kg,hn()._route)}return hn()._route};const ab=()=>{try{if(hn()._processingMiddleware)return!0}catch{return!1}return!1},lb=(n,e)=>{n||="/";const t=typeof n=="string"?n:"path"in n?cb(n):is().resolve(n).href;if(e?.open){const{protocol:u}=new URL(t,window.location.href);if(u&&nf(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`);const{target:c="_blank",windowFeatures:f={}}=e.open,d=[];for(const[h,p]of Object.entries(f))p!==void 0&&d.push(`${h.toLowerCase()}=${p}`);return open(t,c,d.join(", ")),Promise.resolve()}const i=vo(t,{acceptRelative:!0}),r=e?.external||i;if(r){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:u}=new URL(t,window.location.href);if(u&&nf(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`)}const s=ab();if(!r&&s){if(e?.replace){if(typeof n=="string"){const{pathname:u,search:c,hash:f}=Ec(n);return{path:u,...c&&{query:Wh(c)},...f&&{hash:f},replace:!0}}return{...n,replace:!0}}return n}const o=is(),a=hn();if(r)return a._scope.stop(),e?.replace?location.replace(t):location.href=t,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve();const l=typeof n=="string"?ub(n):n;return e?.replace?o.replace(l):o.push(l)};function cb(n){return zg(n.path||"",n.query||{})+(n.hash||"")}function ub(n){const e=Ec(n);return QS(eM(e.pathname))+e.search+e.hash}const Jg="__nuxt_error",Yh=()=>kx(hn().payload,"error"),fb=n=>{const e=Kh(n);try{const t=Yh();hn().hooks.callHook("app:error",e),t.value||=e}catch{throw e}return e},hb=async(n={})=>{const e=hn(),t=Yh();e.callHook("app:error:cleared",n),n.redirect&&await is().replace(n.redirect),t.value=qM},db=n=>!!n&&typeof n=="object"&&Jg in n,Kh=n=>{typeof n!="string"&&n.statusText&&(n.message??=n.statusText);const e=ib(n);return Object.defineProperty(e,Jg,{value:!0,configurable:!1,writable:!1}),Object.defineProperty(e,"status",{get:()=>e.statusCode,configurable:!0}),Object.defineProperty(e,"statusText",{get:()=>e.statusMessage,configurable:!0}),e},pb=-1,mb=-2,_b=-3,gb=-4,vb=-5,xb=-6,yb=-7,Zg=2**32-1,uf=Zg-1;function Sb(n){return!(!Number.isInteger(n)||n<0||n>uf)}function Mb(n){return!(!Number.isInteger(n)||n<0||n>Zg)}function bb(n){return Uint8Array.fromBase64(n).buffer}function Eb(n){return Uint8Array.from(Buffer.from(n,"base64")).buffer}function Tb(n){const e=atob(n),t=e.length,i=new Uint8Array(t);for(let r=0;r<t;r++)i[r]=e.charCodeAt(r);return i.buffer}const wb=typeof Uint8Array.fromBase64=="function",Ab=typeof process=="object"&&process.versions?.node!==void 0,Rb=wb?bb:Ab?Eb:Tb;function Cb(n,e){return n}const Pb=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,Dp=typeof SharedArrayBuffer>"u"?void 0:Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype,"byteLength").get,Lb={fromPrimitive:n=>n,fromISOString:n=>new Date(n),fromStringValue:(n,e)=>n==="URL"?new URL(e):n==="URLSearchParams"?new URLSearchParams(e):Temporal[n.slice(9)].from(e),fromArrayBuffer:n=>n,fromRegExpInfo:(n,e)=>new RegExp(n,e),fromViewInfo:(n,e,t,i)=>{try{Pb.call(e)}catch(s){if(!Dp)throw s;Dp.call(e)}const r=globalThis[n];return t!==void 0?new r(e,t,i):new r(e)},box:n=>Object(n),createArray:n=>new Array(n),createSparseArray:n=>{const e=[];return e[uf]=void 0,delete e[uf],e.length=n,e},createObject:()=>({}),createNullPrototypeObject:()=>Object.create(null),createSet:()=>new Set,createMap:()=>new Map,set:(n,e,t)=>{n[e]=t},addValue:(n,e)=>{n.add(e)},addEntry:(n,e,t)=>{n.set(e,t)}},Db=Object.freeze(Lb);function Ib(n,e,t){return Ub(JSON.parse(n),e)}function Ub(n,e,t){const i=Cb(Db);if(typeof n=="number")return a(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const r=n,s=Array(r.length);let o=null;function a(l,u=!1){if(l===pb)return i.fromPrimitive(void 0);if(l===_b)return i.fromPrimitive(NaN);if(l===gb)return i.fromPrimitive(1/0);if(l===vb)return i.fromPrimitive(-1/0);if(l===xb)return i.fromPrimitive(-0);if(u||typeof l!="number")throw new Error("Invalid input");if(l in s)return s[l];if(l>=r.length)throw new Error("Invalid input");const c=r[l];if(!c||typeof c!="object")s[l]=i.fromPrimitive(c);else if(Array.isArray(c))if(typeof c[0]=="string"){const f=c[0],d=e&&Object.hasOwn(e,f)?e[f]:void 0;if(d){let h=c[1];if(typeof h!="number"&&(h=r.push(c[1])-1),Object.hasOwn(s,h))return s[l]=d(s[h]);if(o??=new Set,o.has(h))throw new Error("Invalid circular reference");return o.add(h),s[l]=d(a(h)),o.delete(h),s[l]}switch(f){case"Date":s[l]=i.fromISOString(c[1]);break;case"Set":const h=i.createSet();s[l]=h;for(let g=1;g<c.length;g+=1)i.addValue(h,a(c[g]));break;case"Map":const p=i.createMap();s[l]=p;for(let g=1;g<c.length;g+=2)i.addEntry(p,a(c[g]),a(c[g+1]));break;case"RegExp":s[l]=i.fromRegExpInfo(c[1],c[2]);break;case"Object":{const g=c[1];if(typeof r[g]=="object"&&r[g][0]!=="BigInt")throw new Error("Invalid input");s[l]=i.box(a(g));break}case"BigInt":s[l]=i.fromPrimitive(BigInt(c[1]));break;case"null":const _=i.createNullPrototypeObject();s[l]=_;for(let g=1;g<c.length;g+=2){const m=c[g];if(typeof m!="string")throw new Error("Cannot parse an object with a non-string key");if(m==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");i.set(_,m,a(c[g+1]))}break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Float16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":case"DataView":{if(r[c[1]][0]!=="ArrayBuffer")throw new Error("Invalid data");const g=a(c[1]);s[l]=i.fromViewInfo(f,g,c[2],c[3]);break}case"ArrayBuffer":{const g=c[1];if(typeof g!="string")throw new Error("Invalid ArrayBuffer encoding");s[l]=i.fromArrayBuffer(Rb(g));break}case"URL":case"URLSearchParams":case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{s[l]=i.fromStringValue(f,c[1]);break}default:throw new Error(`Unknown type ${f}`)}}else if(c[0]===yb){const f=c[1];if(!Mb(f))throw new Error("Invalid input");const d=i.createSparseArray(f);s[l]=d;for(let h=2;h<c.length;h+=2){const p=c[h];if(!Sb(p)||p>=f)throw new Error("Invalid input");i.set(d,p,a(c[h+1]))}}else{const f=i.createArray(c.length);s[l]=f;for(let d=0;d<c.length;d+=1){const h=c[d];h!==mb&&i.set(f,d,a(h))}}else{const f=i.createObject();s[l]=f;for(const d of Object.keys(c)){if(d==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");i.set(f,d,a(c[d]))}}return s[l]}return a(0)}const Ob=new Set(["link","style","script","noscript"]),Nb=new Set(["title","titleTemplate","script","style","noscript"]),ff=new Set(["base","meta","link","style","script","noscript"]),Fb=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Bb=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Ip=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),kb=new Set(["templateParams","htmlAttrs","bodyAttrs"]),zb=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Yc=n=>typeof n=="number"?Number.isFinite(n):n;function Qg(n){return n==="__proto__"||n==="constructor"||n==="prototype"}const hf=(n,e)=>n._w===e._w?n._p-e._p:n._w-e._w,Up={base:-10,title:10},Hb={critical:-8,high:-1,low:2},Op={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Vb=/@import/,wo=n=>n===""||n===!0;function Gb(n,e){if(typeof e.tagPriority=="number")return e.tagPriority;let t=100;const i=Hb[e.tagPriority]||0,r=n.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Op;if(e.tag in Up)t=Up[e.tag];else if(e.tag==="meta"){const s=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;s&&(t=Op.meta[s])}else if(e.tag==="link"&&e.props.rel)t=r.link[e.props.rel];else if(e.tag==="script"){const s=String(e.props.type);wo(e.props.async)?t=r.script.async:e.props.src&&!wo(e.props.defer)&&!wo(e.props.async)&&s!=="module"&&!s.endsWith("json")||e.innerHTML&&!s.endsWith("json")?t=r.script.sync:(wo(e.props.defer)&&e.props.src&&!wo(e.props.async)||s==="module")&&(t=r.script.defer)}else e.tag==="style"&&(t=e.innerHTML&&Vb.test(e.innerHTML)?r.style.imported:r.style.sync);return(t||100)+i}function df(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?df(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const e0=(()=>{if(console.createTask)return console.createTask;const n={run:e=>e()};return()=>n})();function t0(n,e,t,i){for(let r=t;r<n.length;r+=1)try{const s=i?i.run(()=>n[r](...e)):n[r](...e);if(s&&typeof s.then=="function")return Promise.resolve(s).then(()=>t0(n,e,r+1,i))}catch(s){return Promise.reject(s)}}function Wb(n,e,t){if(n.length>0)return t0(n,e,0,e0(t))}function Xb(n,e,t){if(n.length>0){const i=e0(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}}function Kc(n,e){for(const t of[...n])t(e)}var qb=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,e,t={}){if(!n||typeof e!="function")return()=>{};const i=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!t.allowDeprecated){let s=r.message;s||(s=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(e),()=>{e&&(this.removeHook(n,e),e=void 0)}}hookOnce(n,e){let t,i=(...r)=>(typeof t=="function"&&t(),t=void 0,i=void 0,e(...r));return t=this.hook(n,i),t}removeHook(n,e){const t=this._hooks[n];if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1),t.length===0&&(this._hooks[n]=void 0)}}clearHook(n){this._hooks[n]=void 0}deprecateHook(n,e){this._deprecatedHooks[n]=typeof e=="string"?{to:e}:e;const t=this._hooks[n]||[];this._hooks[n]=void 0;for(const i of t)this.hook(n,i)}deprecateHooks(n){for(const e in n)this.deprecateHook(e,n[e])}addHooks(n){const e=df(n),t=Object.keys(e).map(i=>this.hook(i,e[i]));return()=>{for(const i of t)i();t.length=0}}removeHooks(n){const e=df(n);for(const t in e)this.removeHook(t,e[t])}removeAllHooks(){this._hooks={}}callHook(n,...e){return this.callHookWith(Wb,n,e)}callHookParallel(n,...e){return this.callHookWith(Xb,n,e)}callHookWith(n,e,t){const i=this._before||this._after?{name:e,args:t,context:{}}:void 0;this._before&&Kc(this._before,i);const r=n(this._hooks[e]?[...this._hooks[e]]:[],t,e);return r instanceof Promise?r.finally(()=>{this._after&&i&&Kc(this._after,i)}):(this._after&&i&&Kc(this._after,i),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const e=this._before.indexOf(n);e!==-1&&this._before.splice(e,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const e=this._after.indexOf(n);e!==-1&&this._after.splice(e,1)}}}};function jb(){return new qb}const $b=["name","property","http-equiv"],Yb=new Set(["viewport","description","keywords","robots"]);function n0(n){const e=n.indexOf(":");if(e===-1)return!1;const t=n.indexOf(":",e+1),i=n.slice(e+1,t===-1?n.length:t);return i==="twitter"?n==="meta:twitter:image"||n.startsWith("meta:twitter:image:"):zb.has(i)}function pf(n){const{props:e,tag:t}=n;if(Bb.has(t))return t;if(t==="link"&&e.rel==="canonical")return"canonical";if(t==="link"&&e.rel==="alternate"){if(e.hreflang)return`alternate:${e.hreflang}`;if(e.type)return`alternate:${e.type}:${e.href||""}`}if(e.charset)return"charset";if(n.tag==="meta"){for(const i of $b)if(e[i]!==void 0){const r=e[i],s=r&&typeof r=="string"&&r.includes(":"),o=r&&Yb.has(r),l=!(s||o)&&n.key?`:key:${n.key}`:"";return`${t}:${r}${l}`}}if(n.key)return`${t}:key:${n.key}`;if(e.id)return`${t}:id:${e.id}`;if(t==="link"&&e.rel==="alternate")return`alternate:${e.href||""}`;if(Nb.has(t)){const i=n.textContent||n.innerHTML;if(i)return`${t}:content:${i}`}}function i0(n){const e=n._h||n._d;if(e)return e;const t=n.textContent||n.innerHTML;if(t)return t;const i=Object.keys(n.props).sort();return`${n.tag}:${i.map(r=>`${r}:${String(n.props[r])}`).join(",")}`}function jl(n,e,t){typeof n==="function"&&(!t||t!=="titleTemplate"&&!(t[0]==="o"&&t[1]==="n"))&&(n=n());const r=e?e(t,n):n;if(Array.isArray(r)){let s;for(let o=0;o<r.length;o++){const a=jl(r[o],e);s?s[o]=a:a!==r[o]&&(s=r.slice(0,o),s[o]=a)}return s||r}if(r?.constructor===Object){let s;for(const o in r){const a=Qg(o),l=a?void 0:jl(r[o],e,o);if(!s&&(a||o==="_resolver"||l!==r[o])){s={};for(const c in r){if(c===o)break;s[c]=r[c]}}s&&!a&&(s[o]=l)}return s||r}return r}const Kb=/[\s"'<>/=\x00-\x1F\x7F]/;function Jb(n,e){const t=n==="style"?new Map:new Set;function i(r){if(r==null||r===void 0)return;const s=String(r).trim();if(s)if(n==="style"){const[o,...a]=s.split(":").map(l=>l?l.trim():"");o&&a.length&&t.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>t.add(o))}return typeof e=="string"?n==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(n==="style"?t.set(String(r).trim(),String(s)):i(r))}),t}function r0(n,e){if(n.props=n.props||{},!e)return n;if(n.tag==="templateParams")return n.props=e,n;const t=ff.has(n.tag)||n.tag==="htmlAttrs"||n.tag==="bodyAttrs";for(const i of Object.keys(e)){if(Qg(i))continue;const r=i.startsWith("data-"),s=t&&!Ip.has(i),o=s&&!r?i.toLowerCase():i;if(s&&(!o||Kb.test(o)))continue;const a=e[i];if(a===null){n.props[o]=null;continue}if(i==="class"||i==="style"){n.props[i]=Jb(i,a);continue}if(Ip.has(i)){if((i==="textContent"||i==="innerHTML")&&typeof a=="object"){let c=e.type;if(e.type||(c="application/json"),!c?.endsWith("json")&&c!=="speculationrules")continue;e.type=c,n.props.type=c,n[i]=JSON.stringify(a)}else n[i]=a;continue}const l=String(a),u=n.tag==="meta"&&o==="content";l==="true"||l===""?n.props[o]=r||u?l:!0:!a&&r&&l==="false"?n.props[o]="false":a!==void 0&&(n.props[o]=a)}return n}function Zb(n,e){const t=typeof e=="object"&&typeof e!="function"?e:{[n==="script"||n==="noscript"||n==="style"?"innerHTML":"textContent"]:e},i=r0({tag:n,props:{}},t);return i.key&&Ob.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function Qb(n,e){if(!n)return[];typeof n=="function"&&(n=n());const t=(r,s)=>{for(let o=0;o<e.length;o++)s=e[o](r,s);return s};n=t(void 0,n);const i=[];return n=jl(n,t),Object.entries(n||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push(Zb(r,o))}),i.flat()}function Np(n,e){const t=typeof e=="function"?e(n):e,i=t.key||String(n.plugins.size+1);n.plugins.get(i)||(n.plugins.set(i,t),n.hooks.addHooks(t.hooks||{}))}function eE(n={}){const e=jb();e.addHooks(n.hooks||{});const t=!n.document,i=new Map,r=new Map,s=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:n,hooks:e,ssr:t,entries:i,headEntries(){return[...i.values()]},use:a=>Np(o,a),push(a,l){const u={...l||{}};delete u.head;const c=u._index??o._entryCount++,f={_i:c,input:a,options:u},d={_poll(h=!1){o.dirty=!0,!h&&s.add(c),e.callHook("entries:updated",o)},dispose(){i.delete(c)&&o.invalidate()},patch(h){(!u.mode||u.mode==="server"&&t||u.mode==="client"&&!t)&&(f.input=h,i.set(c,f),d._poll())}};return d.patch(a),d},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);s.size;){const d=s.values().next().value;s.delete(d);const h=i.get(d);if(h){const p={tags:Qb(h.input,n.propResolvers||[]).map(_=>Object.assign(_,h.options)),entry:h};await e.callHook("entries:normalize",p),h._tags=p.tags.map((_,g)=>(_._w=Gb(o,_),_._p=(h._i<<10)+g,_._d=pf(_),_._d||(_._h=i0(_)),_))}}let l=!1;a.entries.flatMap(d=>(d._tags||[]).map(h=>({...h,props:{...h.props}}))).sort(hf).reduce((d,h)=>{const p=h._d||h._h;if(!d.has(p))return d.set(p,h);const _=d.get(p);if((h?.tagDuplicateStrategy||(kb.has(h.tag)?"merge":null)||(h.key&&h.key===_.key?"merge":null))==="merge"){const m={..._.props};Object.entries(h.props).forEach(([y,x])=>m[y]=y==="style"?new Map([..._.props.style||new Map,...x]):y==="class"?new Set([..._.props.class||new Set,...x]):x),d.set(p,{...h,props:m})}else h._p>>10===_._p>>10&&h.tag==="meta"&&n0(p)?(d.set(p,Object.assign([...Array.isArray(_)?_:[_],h],h)),l=!0):(h._w===_._w?h._p>_._p:h?._w<_?._w)&&d.set(p,h);return d},a.tagMap);const u=a.tagMap.get("title"),c=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,c){const d=c?.textContent;if(o._titleTemplate=d,d){let h=typeof d=="function"?d(u?.textContent):d;typeof h=="string"&&!o.plugins.has("template-params")&&(h=h.replace("%s",u?.textContent||"")),u?h===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:h}):(c.tag="title",c.textContent=h)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(hf)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const f=[];for(const d of a.tags){const{innerHTML:h,tag:p,props:_}=d;if(Fb.has(p)&&!(Object.keys(_).length===0&&!Yc(d.innerHTML)&&!Yc(d.textContent))&&!(p==="meta"&&!Yc(_.content)&&!_["http-equiv"]&&!_.charset)){if(p==="script"&&h){if(String(_.type).endsWith("json")){const g=typeof h=="string"?h:JSON.stringify(h);d.innerHTML=g.replace(/</g,"\\u003C")}else typeof h=="string"&&(d.innerHTML=h.replace(new RegExp(`</${p}`,"g"),`<\\/${p}`));d._d=pf(d)}f.push(d)}}return f},invalidate(){for(const a of i.values())s.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(n?.plugins||[]).forEach(a=>Np(o,a)),o.hooks.callHook("init",o),n.init?.forEach(a=>a&&o.push(a)),o}const Jc="%separator";function tE(n,e,t=!1){let i;if(e==="s"||e==="pageTitle")i=n.pageTitle;else if(e.includes(".")){const r=e.indexOf(".");i=n[e.substring(0,r)]?.[e.substring(r+1)]}else i=n[e];if(i!==void 0)return t?(i||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):i||""}function Ga(n,e,t,i=!1){if(typeof n!="string"||!n.includes("%"))return n;let r=n;try{r=decodeURI(n)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return n;const o=n.includes(Jc);return n=n.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Jc||!s.includes(a))return a;const l=tE(e,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(n=n.split(Jc).map(a=>a.trim()).filter(a=>a!=="").join(t?` ${t} `:" ")),n}const Fp=n=>n.includes(":key")?n:n.split(":").join(":key:"),nE={key:"aliasSorting",hooks:{"tags:resolve":n=>{let e=!1;for(const t of n.tags){const i=t.tagPriority;if(!i)continue;const r=String(i);if(r.startsWith("before:")){const s=Fp(r.slice(7)),o=n.tagMap.get(s);o&&(typeof o.tagPriority=="number"&&(t.tagPriority=o.tagPriority),t._p=o._p-1,e=!0)}else if(r.startsWith("after:")){const s=Fp(r.slice(6)),o=n.tagMap.get(s);o&&(typeof o.tagPriority=="number"&&(t.tagPriority=o.tagPriority),t._p=o._p+1,e=!0)}}e&&(n.tags=n.tags.sort(hf))}}},iE={key:"deprecations",hooks:{"entries:normalize":({tags:n})=>{for(const e of n)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function mf(n){if(typeof n==="function")return n;if(n instanceof Promise)return await n;if(Array.isArray(n))return await Promise.all(n.map(t=>mf(t)));if(n?.constructor===Object){const t={};for(const i of Object.keys(n))t[i]=await mf(n[i]);return t}return n}const rE={key:"promises",hooks:{"entries:resolve":async n=>{const e=[];for(const t in n.entries)n.entries[t]._promisesProcessed||e.push(mf(n.entries[t].input).then(i=>{n.entries[t].input=i,n.entries[t]._promisesProcessed=!0}));await Promise.all(e)}}},sE={meta:"content",link:"href",htmlAttrs:"lang"},oE=["innerHTML","textContent"],aE=n=>({key:"template-params",hooks:{"entries:normalize":e=>{const t=e.tags.filter(i=>i.tag==="templateParams"&&i.mode==="server")?.[0]?.props||{};Object.keys(t).length&&(n._ssrPayload={templateParams:{...n._ssrPayload?.templateParams||{},...t}})},"tags:resolve":({tagMap:e,tags:t})=>{const i=e.get("templateParams")?.props||{},r=i.separator||"|";delete i.separator,i.pageTitle=Ga(i.pageTitle||n._title||"",i,r);for(const s of t){if(s.processTemplateParams===!1)continue;const o=sE[s.tag];if(o&&typeof s.props[o]=="string")s.props[o]=Ga(s.props[o],i,r);else if(s.processTemplateParams||s.tag==="titleTemplate"||s.tag==="title")for(const a of oE)typeof s[a]=="string"&&(s[a]=Ga(s[a],i,r,s.tag==="script"&&s.props.type.endsWith("json")))}n._templateParams=i,n._separator=r},"tags:afterResolve":({tagMap:e})=>{const t=e.get("title");t?.textContent&&t.processTemplateParams!==!1&&(t.textContent=Ga(t.textContent,n._templateParams,n._separator))}}}),lE=(n,e)=>Ot(e)?Ox(e):e,s0="usehead";function cE(n){return{install(t){t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(s0,n)}}.install}function uE(){if(Ih()){const n=Xs(s0);if(n)return n}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function $D(n,e={}){const t=e.head||uE();return t.ssr?t.push(n||{},e):fE(t,n,e)}function fE(n,e,t={}){const i=fc();if(i&&!i.active)return{patch(){},dispose(){},_poll(){}};const r=Ft(!1);let s;return Kx(()=>{const a=r.value?{}:jl(e,lE);s?s.patch(a):s=n.push(a,t)}),go()&&(vc(()=>{s.dispose()}),Z_(()=>{r.value=!0}),J_(()=>{r.value=!1})),s}const hE={},o0=(n,e)=>[],dE=o0,pE=function(e){if(!e.includes("%"))return e;const t=e.indexOf("?"),i=t===-1?e:e.slice(0,t);try{return t===-1?decodeURI(i):decodeURI(i)+e.slice(t)}catch{return e}},Bp=(n,e)=>{if(typeof n!="string")return n;const t=pE(n);return e?t.toLowerCase():t},mE=n=>hE.sensitive?Pp({},...o0("",Bp(n,!1)).map(e=>e.data).reverse()):Pp({},...dE("",Bp(n,!0)).map(e=>e.data).reverse()),_E=mE;let Sl;function gE(){let n;return n=$fetch(jh(`builds/meta/${oa().app.buildId}.json`),{responseType:"json"}).then(e=>{if(!e||typeof e!="object"||!Array.isArray(e.prerendered))throw new Error("[nuxt] Received malformed app manifest. Ensure that `builds/meta/*.json` is served as JSON by your hosting/proxy and not rewritten to an HTML fallback.");return e}),Sl=n,n.catch(e=>{Sl===n&&(Sl=void 0),console.error("[nuxt] Error fetching app manifest.",e)}),n}function Jh(){return Sl||gE()}function Aa(n){const e=typeof n=="string"?n:n.path;try{return _E(e)}catch(t){return console.error("[nuxt] Error matching route rules.",t),{}}}async function kp(n,e={}){if(await SE(n)){const t=await yE(n,e),i=Zh(n)?"default":"force-cache";return await a0(t,i)||null}return null}const vE="_payload.json",xE="_b";async function yE(n,e={}){const t=new URL(n,"http://localhost");if(t.host!=="localhost"||vo(t.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=oa(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await ME(n)?s:i.app.baseURL,a=bc(o,t.pathname,vE);return Zh(n)||(t.search=""),r&&t.searchParams.set(xE,String(r)),a+t.search}async function a0(n,e){try{if(XM){const t=await fetch(n,{cache:e});return t.ok?await u0(await t.text()):null}}catch(t){console.warn("[nuxt] Cannot load payload ",n,t)}return null}function l0(n){if(n.redirect)return!1;if(n.prerender)return!0}function Tc(n){return new URL(n,"http://localhost").pathname}function Zh(n){return!!Aa({path:Tc(n)}).payload}async function c0(n){n=Tc(n),n=n==="/"?n:n.replace(/\/$/,"");try{return(await Jh()).prerendered.includes(n)}catch{return!1}}async function SE(n=$h().path){const e=Aa({path:Tc(n)});if(e.ssr===!1)return!1;const t=l0(e);return t!==void 0?t:e.payload?!0:await c0(n)}async function ME(n=$h().path){const e=l0(Aa({path:Tc(n)}));return e!==void 0?e:await c0(n)}let Er=null;async function bE(){if(Er)return Er;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const e=await u0(n.textContent||""),t=n.dataset.src?await a0(n.dataset.src,e.prerenderedAt?"force-cache":"no-cache"):void 0;return Er={...e,...t,...window.__NUXT__},Er.config?.public&&(Er.config.public=dr(Er.config.public)),Er}async function u0(n){return await Ib(n,hn()._payloadRevivers)}function EE(n,e){hn()._payloadRevivers[n]=e}const TE=[["NuxtError",n=>Kh(n)],["EmptyShallowRef",n=>Xu(n==="_"?void 0:n==="0n"?BigInt(0):Wl(n))],["EmptyRef",n=>Ft(n==="_"?void 0:n==="0n"?BigInt(0):Wl(n))],["ShallowRef",n=>Xu(n)],["ShallowReactive",n=>Bs(n)],["Ref",n=>Ft(n)],["Reactive",n=>dr(n)]],wE=xr({name:"nuxt:revive-payload:client",order:-30,async setup(n){let e,t;for(const[i,r]of TE)EE(i,r);Object.assign(n.payload,([e,t]=WM(()=>n.runWithContext(bE)),e=await e,t(),e)),window.__NUXT__=n.payload}});async function Qh(n,e={}){const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return n._domUpdatePromise||(n._domUpdatePromise=new Promise(async r=>{const s=new Map,o=new Promise(h=>{n.resolveTags().then(p=>{h(p.map(_=>{const g=s.get(_._d)||0,m={tag:_,id:(g?`${_._d}:${g}`:_._d)||_._h,shouldRender:!0};return _._d&&n0(_._d)&&s.set(_._d,g+1),m}))})});let a=n._dom;if(!a){a={title:t.title,elMap:new Map().set("htmlAttrs",t.documentElement).set("bodyAttrs",t.body)};for(const h of["body","head"]){const p=t[h]?.children;for(const _ of p){const g=_.tagName.toLowerCase();if(!ff.has(g))continue;const m=r0({tag:g,props:{}},{innerHTML:_.innerHTML,..._.getAttributeNames().reduce((y,x)=>(y[x]=_.getAttribute(x),y),{})||{}});if(m.key=_.getAttribute("data-hid")||void 0,m._d=pf(m)||i0(m),a.elMap.has(m._d)){let y=1,x=m._d;for(;a.elMap.has(x);)x=`${m._d}:${y++}`;a.elMap.set(x,_)}else a.elMap.set(m._d,_)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(h,p,_){const g=`${h}:${p}`;a.sideEffects[g]=_,delete a.pendingSideEffects[g]}function u({id:h,$el:p,tag:_}){const g=_.tag.endsWith("Attrs");a.elMap.set(h,p),g||(_.textContent&&_.textContent!==p.textContent&&(p.textContent=_.textContent),_.innerHTML&&_.innerHTML!==p.innerHTML&&(p.innerHTML=_.innerHTML),l(h,"el",()=>{p?.remove(),a.elMap.delete(h)}));for(const m in _.props){if(!Object.prototype.hasOwnProperty.call(_.props,m))continue;const y=_.props[m];if(m.startsWith("on")&&typeof y=="function"){const v=p?.dataset;if(v&&v[`${m}fired`]){const T=m.slice(0,-5);y.call(p,new Event(T.substring(2)))}p.getAttribute(`data-${m}`)!==""&&((_.tag==="bodyAttrs"?t.defaultView:p).addEventListener(m.substring(2),y.bind(p)),p.setAttribute(`data-${m}`,""));continue}const x=`attr:${m}`;if(m==="class"){if(!y)continue;for(const v of y)g&&l(h,`${x}:${v}`,()=>p.classList.remove(v)),!p.classList.contains(v)&&p.classList.add(v)}else if(m==="style"){if(!y)continue;for(const[v,T]of y)l(h,`${x}:${v}`,()=>{p.style.removeProperty(v)}),p.style.setProperty(v,T)}else y!==!1&&y!==null&&(p.getAttribute(m)!==y&&p.setAttribute(m,y===!0?"":String(y)),g&&l(h,x,()=>p.removeAttribute(m)))}}const c=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const h of d){const{tag:p,shouldRender:_,id:g}=h;if(_){if(p.tag==="title"){t.title=p.textContent,l("title","",()=>t.title=a.title);continue}h.$el=h.$el||a.elMap.get(g),h.$el?u(h):ff.has(p.tag)&&c.push(h)}}for(const h of c){const p=h.tag.tagPosition||"head";h.$el=t.createElement(h.tag.tag),u(h),f[p]=f[p]||t.createDocumentFragment(),f[p].appendChild(h.$el)}for(const h of d)await n.hooks.callHook("dom:renderTag",h,t,l);f.head&&t.head.appendChild(f.head),f.bodyOpen&&t.body.insertBefore(f.bodyOpen,t.body.firstChild),f.bodyClose&&t.body.appendChild(f.bodyClose);for(const h in a.pendingSideEffects)a.pendingSideEffects[h]();n._dom=a,await n.hooks.callHook("dom:rendered",{renders:d}),r()}).finally(()=>{n._domUpdatePromise=void 0,n.dirty=!1})),n._domUpdatePromise}function AE(n={}){const e=n.domOptions?.render||Qh;n.document=n.document||(typeof window<"u"?document:void 0);const t=n.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1,i=eE({...n,plugins:[...n.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[t?JSON.parse(t):!1,...n.init||[]]});return i.ssr=!1,i}function RE(n,e){let t=0;return()=>{const i=++t;e(()=>{t===i&&n()})}}function CE(n={}){const e=AE({domOptions:{render:RE(()=>Qh(e),t=>setTimeout(t,0))},...n});return e.install=cE(e),e}const PE={disableDefaults:!0,disableCapoSorting:!1,plugins:[iE,rE,aE,nE]},LE=xr({name:"nuxt:head",enforce:"pre",setup(n){const e=CE(PE);n.vueApp.use(e);{let t=!0;const i=async()=>{t=!1,await Qh(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!t}),n.hooks.hook("page:start",()=>{t=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i);const r=e.push.bind(e);e.push=((s,o)=>{const a=r(s,o),l=a.dispose.bind(a);return a.dispose=()=>{const u=n["~transitionPromise"];u?u.then(l):l()},a})}}}),DE=n=>{const e=Aa({path:n.path});if(e.redirect){const t=e.redirect.includes("#")?e.redirect:e.redirect+n.hash;return vo(t,{acceptRelative:!0})?(window.location.href=t,!1):t}},IE=[DE];function Zc(n){const e=n&&typeof n=="object"?n:{};typeof n=="object"&&(n=Xh({pathname:n.path||"",search:Bg(n.query||{}),hash:n.hash||""}));const t=new URL(n.toString(),window.location.href);return{path:t.pathname,fullPath:n,query:Wh(t.search),hash:t.hash,params:e.params||{},name:void 0,matched:e.matched||[],redirectedFrom:void 0,meta:e.meta||{},href:n}}const UE=xr({name:"nuxt:router",enforce:"pre",setup(n){const e=hM(window.location.pathname,oa().app.baseURL)+window.location.search+window.location.hash,t=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(h,p)=>(i[h].push(p),()=>{const _=i[h].indexOf(p);_!==-1&&i[h].splice(_,1)}),s=oa().app.baseURL,o=dr(Zc(e));let a=0;async function l(h,p){const _=++a;try{const g=Zc(h);for(const m of i["navigate:before"]){const y=await m(g,o);if(_!==a||y===!1||y instanceof Error)return;if(typeof y=="string"&&y.length)return await l(y,!0)}for(const m of i["resolve:before"])if(await m(g,o),_!==a)return;Object.assign(o,g),window.history[p?"replaceState":"pushState"]({},"",bc(s,g.fullPath)),n.isHydrating||await n.runWithContext(hb);for(const m of i["navigate:after"])await m(g,o)}catch(g){for(const m of i.error)await m(g)}}const c={currentRoute:Gh(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:h=>l(h,!1),replace:h=>l(h,!0),back:()=>window.history.go(-1),go:h=>window.history.go(h),forward:()=>window.history.go(1),beforeResolve:h=>r("resolve:before",h),beforeEach:h=>r("navigate:before",h),afterEach:h=>r("navigate:after",h),onError:h=>r("error",h),resolve:Zc,addRoute:(h,p)=>{t.push(p)},getRoutes:()=>t,hasRoute:h=>t.some(p=>p.name===h),removeRoute:h=>{const p=t.findIndex(_=>_.name===h);p!==-1&&t.splice(p,1)}};n.vueApp.component("RouterLink",Nh({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(h,{slots:p})=>{const _=()=>l(h.to,h.replace);return()=>{const g=c.resolve(h.to);return h.custom?p.default?.({href:h.to,navigate:_,route:g}):Pg("a",{href:h.to,onClick:m=>(m.preventDefault(),_())},p)}}})),window.addEventListener("popstate",h=>{const p=h.target.location;c.replace(p.href.replace(p.origin,""))}),n._route=o,n._middleware||={global:[],named:{}};const f=n.payload.state._layout,d=n.payload.state._layoutProps;return n.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(h,p)=>{h.meta=dr(h.meta||{}),n.isHydrating&&f&&!si(h.meta.layout)&&(h.meta.layout=f,h.meta.layoutProps=d),n._processingMiddleware=!0;{const _=new Set([...IE,...n._middleware.global]),g=Aa({path:h.path});if(g.appMiddleware)for(const m in g.appMiddleware){const y=n._middleware.named[m];y&&(g.appMiddleware[m]?_.add(y):_.delete(y))}for(const m of _){const y=await n.runWithContext(()=>m(h,p));if(y!==!0&&(y||y===!1))return y}}}),c.afterEach(()=>{delete n._processingMiddleware}),await c.replace(e),pM(o.fullPath,e)||await n.runWithContext(()=>lb(o.fullPath))}),{provide:{route:o,router:c}}}}),zp=globalThis.requestIdleCallback||(n=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{n(t)},1)}),YD=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),ed=n=>{const e=hn();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{zp(()=>n())}):zp(()=>n())},OE=xr({name:"nuxt:payload",setup(n){const e=new Set;is().beforeResolve(async(t,i)=>{const r=Zh(t.path),s=r?bp(t.fullPath):t.path,o=r?bp(i.fullPath):i.path;if(s===o)return;const a=await kp(s);if(a){for(const l of e)delete n.static.data[l];for(const l in a.data)l in n.static.data||e.add(l),n.static.data[l]=a.data[l]}}),ed(()=>{n.hooks.hook("link:prefetch",async t=>{const{hostname:i}=new URL(t,window.location.href);i===window.location.hostname&&await kp(t).catch(()=>{console.warn("[nuxt] Error preloading payload for",t)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Jh,1e3)})}}),NE=xr(()=>{const n=is();ed(()=>{n.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),FE=xr(n=>{let e;async function t(){let i;try{i=await Jh()}catch(r){const s=r;if(!("status"in s&&(s.status===404||s.status===403)))throw s}e&&clearTimeout(e),e=setTimeout(t,Rp);try{const r=await $fetch(jh("builds/latest.json")+`?${Date.now()}`);r.id!==i?.id&&(n.hooks.callHook("app:manifest:update",r),e&&clearTimeout(e))}catch{}}ed(()=>{e=setTimeout(t,Rp)})});function BE(n={}){const e=n.path||window.location.pathname,t=new URL(e,window.location.href);if(t.host!==window.location.host)throw new Error(`Cannot navigate to a URL with a different host: '${e}'.`);if(t.protocol&&nf(t.protocol))throw new Error(`Cannot navigate to a URL with '${t.protocol}' protocol.`);let i={};try{i=Wl(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||i?.path!==e||i?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:hn().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const kE=xr({name:"nuxt:chunk-reload",setup(n){const e=is(),t=oa(),i=new Set;e.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o=bc(t.app.baseURL,s.fullPath);BE({path:o,persistState:!0})}n.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),zE=xr({name:"nuxt:global-components"}),HE=[wE,LE,UE,OE,NE,FE,kE,zE];const td="177",VE=0,Hp=1,GE=2,f0=1,WE=2,Oi=3,mr=0,vn=1,cn=2,cr=0,Ks=1,Vp=2,Gp=3,Wp=4,XE=5,Br=100,qE=101,jE=102,$E=103,YE=104,KE=200,JE=201,ZE=202,QE=203,_f=204,gf=205,eT=206,tT=207,nT=208,iT=209,rT=210,sT=211,oT=212,aT=213,lT=214,vf=0,xf=1,yf=2,ro=3,Sf=4,Mf=5,bf=6,Ef=7,h0=0,cT=1,uT=2,ur=0,fT=1,hT=2,dT=3,d0=4,pT=5,mT=6,_T=7,p0=300,so=301,oo=302,Tf=303,wf=304,wc=306,Af=1e3,Vr=1001,Rf=1002,Un=1003,gT=1004,Wa=1005,xi=1006,Qc=1007,Gr=1008,bi=1009,m0=1010,_0=1011,aa=1012,nd=1013,rs=1014,yi=1015,Ra=1016,id=1017,rd=1018,la=1020,g0=35902,v0=1021,x0=1022,ii=1023,ca=1026,ua=1027,sd=1028,od=1029,y0=1030,ad=1031,ld=1033,Ml=33776,bl=33777,El=33778,Tl=33779,Cf=35840,Pf=35841,Lf=35842,Df=35843,If=36196,Uf=37492,Of=37496,Nf=37808,Ff=37809,Bf=37810,kf=37811,zf=37812,Hf=37813,Vf=37814,Gf=37815,Wf=37816,Xf=37817,qf=37818,jf=37819,$f=37820,Yf=37821,wl=36492,Kf=36494,Jf=36495,S0=36283,Zf=36284,Qf=36285,eh=36286,vT=3200,xT=3201,M0=0,yT=1,rr="",Xn="srgb",ao="srgb-linear",$l="linear",mt="srgb",gs=7680,Xp=519,ST=512,MT=513,bT=514,b0=515,ET=516,TT=517,wT=518,AT=519,qp=35044,RT=35048,jp="300 es",Vi=2e3,Yl=2001;class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $p=1234567;const Xo=Math.PI/180,fa=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function cd(n,e){return(n%e+e)%e}function CT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function PT(n,e,t){return n!==e?(t-n)/(e-n):0}function qo(n,e,t){return(1-t)*n+t*e}function LT(n,e,t,i){return qo(n,e,1-Math.exp(-t*i))}function DT(n,e=1){return e-Math.abs(cd(n,e*2)-e)}function IT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function UT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function OT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function NT(n,e){return n+Math.random()*(e-n)}function FT(n){return n*(.5-Math.random())}function BT(n){n!==void 0&&($p=n);let e=$p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kT(n){return n*Xo}function zT(n){return n*fa}function HT(n){return(n&n-1)===0&&n!==0}function VT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function GT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function WT(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*p,l*h,a*u);break;case"YXY":n.set(l*h,a*c,l*p,a*u);break;case"ZYZ":n.set(l*p,l*h,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vs={DEG2RAD:Xo,RAD2DEG:fa,generateUUID:ls,clamp:Je,euclideanModulo:cd,mapLinear:CT,inverseLerp:PT,lerp:qo,damp:LT,pingpong:DT,smoothstep:IT,smootherstep:UT,randInt:OT,randFloat:NT,randFloatSpread:FT,seededRandom:BT,degToRad:kT,radToDeg:zT,isPowerOfTwo:HT,ceilPowerOfTwo:VT,floorPowerOfTwo:GT,setQuaternionFromProperEuler:WT,normalize:sn,denormalize:Ns};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ca{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_;return}if(f!==_||l!==d||u!==h||c!==p){let g=1-a;const m=l*d+u*h+c*p+f*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const T=Math.sqrt(x),A=Math.atan2(T,m*y);g=Math.sin(g*A)/T,a=Math.sin(a*A)/T}const v=a*y;if(l=l*g+d*v,u=u*g+h*v,c=c*g+p*v,f=f*g+_*v,g===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=T,u*=T,c*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+c*f+l*h-u*d,e[t+1]=l*p+c*d+u*f-a*h,e[t+2]=u*p+c*h+a*d-l*f,e[t+3]=c*p-a*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*h*p,this._y=u*h*f-d*c*p,this._z=u*c*p+d*h*f,this._w=u*c*f-d*h*p;break;case"YXZ":this._x=d*c*f+u*h*p,this._y=u*h*f-d*c*p,this._z=u*c*p-d*h*f,this._w=u*c*f+d*h*p;break;case"ZXY":this._x=d*c*f-u*h*p,this._y=u*h*f+d*c*p,this._z=u*c*p+d*h*f,this._w=u*c*f-d*h*p;break;case"ZYX":this._x=d*c*f-u*h*p,this._y=u*h*f+d*c*p,this._z=u*c*p-d*h*f,this._w=u*c*f+d*h*p;break;case"YZX":this._x=d*c*f+u*h*p,this._y=u*h*f+d*c*p,this._z=u*c*p-d*h*f,this._w=u*c*f-d*h*p;break;case"XZY":this._x=d*c*f-u*h*p,this._y=u*h*f-d*c*p,this._z=u*c*p+d*h*f,this._w=u*c*f+d*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eu=new B,Yp=new Ca;class je{constructor(e,t,i,r,s,o,a,l,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],p=i[8],_=r[0],g=r[3],m=r[6],y=r[1],x=r[4],v=r[7],T=r[2],A=r[5],R=r[8];return s[0]=o*_+a*y+l*T,s[3]=o*g+a*x+l*A,s[6]=o*m+a*v+l*R,s[1]=u*_+c*y+f*T,s[4]=u*g+c*x+f*A,s[7]=u*m+c*v+f*R,s[2]=d*_+h*y+p*T,s[5]=d*g+h*x+p*A,s[8]=d*m+h*v+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,h=u*s-o*l,p=t*f+i*d+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tu.makeScale(e,t)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,t){return this.premultiply(tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new je;function E0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XT(){const n=Kl("canvas");return n.style.display="block",n}const Kp={};function Js(n){n in Kp||(Kp[n]=!0,console.warn(n))}function qT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function jT(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $T(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jp=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zp=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YT(){const n={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?$l:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ao]:{primaries:e,whitePoint:i,transfer:$l,toXYZ:Jp,fromXYZ:Zp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Jp,fromXYZ:Zp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}const ot=YT();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xs;class KT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=Kl("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JT=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nu(r[o].image)):s.push(nu(r[o]))}else s=nu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function nu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?KT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZT=0;const iu=new B;class fn extends xo{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Vr,r=Vr,s=xi,o=Gr,a=ii,l=bi,u=fn.DEFAULT_ANISOTROPY,c=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=ls(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Af:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Af:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=p0;fn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(u+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,v=(h+1)/2,T=(m+1)/2,A=(c+d)/4,R=(f+_)/4,S=(p+g)/4;return x>v&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=R/i):v>T?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=S/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-_)/y,this.z=(d-c)/y,this.w=Math.acos((u+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QT extends xo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new fn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ud(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends QT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class T0 extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ew extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),qa.subVectors(this.max,Ao),ys.subVectors(e.a,Ao),Ss.subVectors(e.b,Ao),Ms.subVectors(e.c,Ao),Ki.subVectors(Ss,ys),Ji.subVectors(Ms,Ss),Tr.subVectors(ys,Ms);let t=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-Tr.z,Tr.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,Tr.z,0,-Tr.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-Tr.y,Tr.x,0];return!ru(t,ys,Ss,Ms,qa)||(t=[1,0,0,0,1,0,0,0,1],!ru(t,ys,Ss,Ms,qa))?!1:(ja.crossVectors(Ki,Ji),t=[ja.x,ja.y,ja.z],ru(t,ys,Ss,Ms,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,Xa=new cs,ys=new B,Ss=new B,Ms=new B,Ki=new B,Ji=new B,Tr=new B,Ao=new B,qa=new B,ja=new B,wr=new B;function ru(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wr.fromArray(n,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),u=t.dot(wr),c=i.dot(wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const tw=new cs,Ro=new B,su=new B;class yo{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(su)),this.expandByPoint(Ro.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pi=new B,ou=new B,$a=new B,Zi=new B,au=new B,Ya=new B,lu=new B;class fd{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ou.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(ou);const s=e.distanceTo(t)*.5,o=-this.direction.dot($a),a=Zi.dot(this.direction),l=-Zi.dot($a),u=Zi.lengthSq(),c=Math.abs(1-o*o);let f,d,h,p;if(c>0)if(f=o*l-a,d=o*a-l,p=s*c,f>=0)if(d>=-p)if(d<=p){const _=1/c;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d<=-p?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=p?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ou).addScaledVector($a,d),h}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,r,s){au.subVectors(t,e),Ya.subVectors(i,e),lu.crossVectors(au,Ya);let o=this.direction.dot(lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(Zi,Ya));if(l<0)return null;const u=a*this.direction.dot(au.cross(Zi));if(u<0||l+u>o)return null;const c=-a*Zi.dot(lu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,o,a,l,u,c,f,d,h,p,_,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,h,p,_,g)}set(e,t,i,r,s,o,a,l,u,c,f,d,h,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=h,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,h=o*f,p=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=h+p*u,t[5]=d-_*u,t[9]=-a*l,t[2]=_-d*u,t[6]=p+h*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,p=u*c,_=u*f;t[0]=d+_*a,t[4]=p*a-h,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=h*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,p=u*c,_=u*f;t[0]=d-_*a,t[4]=-o*f,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*c,t[9]=_-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,h=o*f,p=a*c,_=a*f;t[0]=l*c,t[4]=p*u-h,t[8]=d*u+_,t[1]=l*f,t[5]=_*u+d,t[9]=h*u-p,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*u,p=a*l,_=a*u;t[0]=l*c,t[4]=_-d*f,t[8]=p*f+h,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=h*f+p,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*u,p=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+_,t[5]=o*c,t[9]=h*f-p,t[2]=p*f-h,t[6]=a*c,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nw,e,iw)}lookAt(e,t,i){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Qi.crossVectors(i,Tn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Qi.crossVectors(i,Tn)),Qi.normalize(),Ka.crossVectors(Tn,Qi),r[0]=Qi.x,r[4]=Ka.x,r[8]=Tn.x,r[1]=Qi.y,r[5]=Ka.y,r[9]=Tn.y,r[2]=Qi.z,r[6]=Ka.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],p=i[2],_=i[6],g=i[10],m=i[14],y=i[3],x=i[7],v=i[11],T=i[15],A=r[0],R=r[4],S=r[8],M=r[12],b=r[1],C=r[5],U=r[9],O=r[13],z=r[2],$=r[6],F=r[10],X=r[14],k=r[3],fe=r[7],de=r[11],ue=r[15];return s[0]=o*A+a*b+l*z+u*k,s[4]=o*R+a*C+l*$+u*fe,s[8]=o*S+a*U+l*F+u*de,s[12]=o*M+a*O+l*X+u*ue,s[1]=c*A+f*b+d*z+h*k,s[5]=c*R+f*C+d*$+h*fe,s[9]=c*S+f*U+d*F+h*de,s[13]=c*M+f*O+d*X+h*ue,s[2]=p*A+_*b+g*z+m*k,s[6]=p*R+_*C+g*$+m*fe,s[10]=p*S+_*U+g*F+m*de,s[14]=p*M+_*O+g*X+m*ue,s[3]=y*A+x*b+v*z+T*k,s[7]=y*R+x*C+v*$+T*fe,s[11]=y*S+x*U+v*F+T*de,s[15]=y*M+x*O+v*X+T*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*h-i*l*h)+_*(+t*l*h-t*u*d+s*o*d-r*o*h+r*u*c-s*l*c)+g*(+t*u*f-t*a*h-s*o*f+i*o*h+s*a*c-i*u*c)+m*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=f*g*u-_*d*u+_*l*h-a*g*h-f*l*m+a*d*m,x=p*d*u-c*g*u-p*l*h+o*g*h+c*l*m-o*d*m,v=c*_*u-p*f*u+p*a*h-o*_*h-c*a*m+o*f*m,T=p*f*l-c*_*l-p*a*d+o*_*d+c*a*g-o*f*g,A=t*y+i*x+r*v+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(_*d*s-f*g*s-_*r*h+i*g*h+f*r*m-i*d*m)*R,e[2]=(a*g*s-_*l*s+_*r*u-i*g*u-a*r*m+i*l*m)*R,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*h-i*l*h)*R,e[4]=x*R,e[5]=(c*g*s-p*d*s+p*r*h-t*g*h-c*r*m+t*d*m)*R,e[6]=(p*l*s-o*g*s-p*r*u+t*g*u+o*r*m-t*l*m)*R,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*h+t*l*h)*R,e[8]=v*R,e[9]=(p*f*s-c*_*s-p*i*h+t*_*h+c*i*m-t*f*m)*R,e[10]=(o*_*s-p*a*s+p*i*u-t*_*u-o*i*m+t*a*m)*R,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*h-t*a*h)*R,e[12]=T*R,e[13]=(c*_*r-p*f*r+p*i*d-t*_*d-c*i*g+t*f*g)*R,e[14]=(p*a*r-o*_*r-p*i*l+t*_*l+o*i*g-t*a*g)*R,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,h=s*c,p=s*f,_=o*c,g=o*f,m=a*f,y=l*u,x=l*c,v=l*f,T=i.x,A=i.y,R=i.z;return r[0]=(1-(_+m))*T,r[1]=(h+v)*T,r[2]=(p-x)*T,r[3]=0,r[4]=(h-v)*A,r[5]=(1-(d+m))*A,r[6]=(g+y)*A,r[7]=0,r[8]=(p+x)*R,r[9]=(g-y)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=bs.set(r[0],r[1],r[2]).length();const o=bs.set(r[4],r[5],r[6]).length(),a=bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);const u=1/s,c=1/o,f=1/a;return ei.elements[0]*=u,ei.elements[1]*=u,ei.elements[2]*=u,ei.elements[4]*=c,ei.elements[5]*=c,ei.elements[6]*=c,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,t.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,p;if(a===Vi)h=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Yl)h=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,h=(i+r)*c;let p,_;if(a===Vi)p=(o+s)*f,_=-2*f;else if(a===Yl)p=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bs=new B,ei=new _t,nw=new B(0,0,0),iw=new B(1,1,1),Qi=new B,Ka=new B,Tn=new B,Qp=new _t,em=new Ca;class Ei{constructor(e=0,t=0,i=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rw=0;const tm=new B,Es=new Ca,Li=new _t,Ja=new B,Co=new B,sw=new B,ow=new Ca,nm=new B(1,0,0),im=new B(0,1,0),rm=new B(0,0,1),sm={type:"added"},aw={type:"removed"},Ts={type:"childadded",child:null},cu={type:"childremoved",child:null};class zt extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new B,t=new Ei,i=new Ca,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,t){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ja.copy(e):Ja.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Co,Ja,this.up):Li.lookAt(Ja,Co,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Li),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aw),cu.child=e,this.dispatchEvent(cu),cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,sw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,ow,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new B(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new B,Di=new B,uu=new B,Ii=new B,ws=new B,As=new B,om=new B,fu=new B,hu=new B,du=new B,pu=new Lt,mu=new Lt,_u=new Lt;class ni{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ti.subVectors(e,t),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ti.subVectors(r,t),Di.subVectors(i,t),uu.subVectors(e,t);const o=ti.dot(ti),a=ti.dot(Di),l=ti.dot(uu),u=Di.dot(Di),c=Di.dot(uu),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-a*c)*d,p=(o*c-a*l)*d;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return pu.setScalar(0),mu.setScalar(0),_u.setScalar(0),pu.fromBufferAttribute(e,t),mu.fromBufferAttribute(e,i),_u.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pu,s.x),o.addScaledVector(mu,s.y),o.addScaledVector(_u,s.z),o}static isFrontFacing(e,t,i,r){return ti.subVectors(i,t),Di.subVectors(e,t),ti.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ti.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),As.subVectors(s,i),fu.subVectors(e,i);const l=ws.dot(fu),u=As.dot(fu);if(l<=0&&u<=0)return t.copy(i);hu.subVectors(e,r);const c=ws.dot(hu),f=As.dot(hu);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ws,o);du.subVectors(e,s);const h=ws.dot(du),p=As.dot(du);if(p>=0&&h<=p)return t.copy(s);const _=h*u-l*p;if(_<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(i).addScaledVector(As,a);const g=c*p-h*f;if(g<=0&&f-c>=0&&h-p>=0)return om.subVectors(s,r),a=(f-c)/(f-c+(h-p)),t.copy(r).addScaledVector(om,a);const m=1/(g+_+d);return o=_*m,a=d*m,t.copy(i).addScaledVector(ws,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Za={h:0,s:0,l:0};function gu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=cd(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=gu(o,s,e+1/3),this.g=gu(o,s,e),this.b=gu(o,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const i=w0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return ot.workingToColorSpace(Zt.copy(this),e),Math.round(Je(Zt.r*255,0,255))*65536+Math.round(Je(Zt.g*255,0,255))*256+Math.round(Je(Zt.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Xn){ot.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(Za);const i=qo(er.h,Za.h,t),r=qo(er.s,Za.s,t),s=qo(er.l,Za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Qe;Qe.NAMES=w0;let lw=0;class So extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Ks,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_f,this.blendDst=gf,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_f&&(i.blendSrc=this.blendSrc),this.blendDst!==gf&&(i.blendDst=this.blendDst),this.blendEquation!==Br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dd extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new B,Qa=new Le;let cw=0;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qp,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class A0 extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class R0 extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uw=0;const Vn=new _t,vu=new zt,Rs=new B,wn=new cs,Po=new cs,Gt=new B;class dn extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?R0:A0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(wn.min,Po.min),wn.expandByPoint(Gt),Gt.addVectors(wn.max,Po.max),wn.expandByPoint(Gt)):(wn.expandByPoint(Po.min),wn.expandByPoint(Po.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Gt.fromBufferAttribute(a,u),l&&(Rs.fromBufferAttribute(e,u),Gt.add(Rs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new B,l[S]=new B;const u=new B,c=new B,f=new B,d=new Le,h=new Le,p=new Le,_=new B,g=new B;function m(S,M,b){u.fromBufferAttribute(i,S),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,S),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,b),c.sub(u),f.sub(u),h.sub(d),p.sub(d);const C=1/(h.x*p.y-p.x*h.y);isFinite(C)&&(_.copy(c).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(C),g.copy(f).multiplyScalar(h.x).addScaledVector(c,-p.x).multiplyScalar(C),a[S].add(_),a[M].add(_),a[b].add(_),l[S].add(g),l[M].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let S=0,M=y.length;S<M;++S){const b=y[S],C=b.start,U=b.count;for(let O=C,z=C+U;O<z;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new B,v=new B,T=new B,A=new B;function R(S){T.fromBufferAttribute(r,S),A.copy(T);const M=a[S];x.copy(M),x.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(A,M);const C=v.dot(l[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,C)}for(let S=0,M=y.length;S<M;++S){const b=y[S],C=b.start,U=b.count;for(let O=C,z=C+U;O<z;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,f=new B;if(e)for(let d=0,h=e.count;d<h;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let h=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*c;for(let m=0;m<c;m++)d[p++]=u[h++]}return new Yn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const am=new _t,Ar=new fd,el=new yo,lm=new B,tl=new B,nl=new B,il=new B,xu=new B,rl=new B,cm=new B,sl=new B;class Wt extends zt{constructor(e=new dn,t=new dd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(xu.fromBufferAttribute(f,e),o?rl.addScaledVector(xu,c):rl.addScaledVector(xu.sub(t),c))}t.add(rl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(el.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(el,lm)===null||Ar.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(am.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(am),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),x=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let v=y,T=x;v<T;v+=3){const A=a.getX(v),R=a.getX(v+1),S=a.getX(v+2);r=ol(this,m,e,i,u,c,f,A,R,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const y=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);r=ol(this,o,e,i,u,c,f,y,x,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),x=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=y,T=x;v<T;v+=3){const A=v,R=v+1,S=v+2;r=ol(this,m,e,i,u,c,f,A,R,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const y=g,x=g+1,v=g+2;r=ol(this,o,e,i,u,c,f,y,x,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function fw(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;sl.copy(a),sl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(sl);return u<t.near||u>t.far?null:{distance:u,point:sl.clone(),object:n}}function ol(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,tl),n.getVertexPosition(l,nl),n.getVertexPosition(u,il);const c=fw(n,e,t,i,tl,nl,il,cm);if(c){const f=new B;ni.getBarycoord(cm,tl,nl,il,f),r&&(c.uv=ni.getInterpolatedAttribute(r,a,l,u,f,new Le)),s&&(c.uv1=ni.getInterpolatedAttribute(s,a,l,u,f,new Le)),o&&(c.normal=ni.getInterpolatedAttribute(o,a,l,u,f,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new B,materialIndex:0};ni.getNormal(tl,nl,il,d.normal),c.face=d,c.barycoord=f}return c}class Pa extends dn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(f,2));function p(_,g,m,y,x,v,T,A,R,S,M){const b=v/R,C=T/S,U=v/2,O=T/2,z=A/2,$=R+1,F=S+1;let X=0,k=0;const fe=new B;for(let de=0;de<F;de++){const ue=de*C-O;for(let Se=0;Se<$;Se++){const qe=Se*b-U;fe[_]=qe*y,fe[g]=ue*x,fe[m]=z,u.push(fe.x,fe.y,fe.z),fe[_]=0,fe[g]=0,fe[m]=A>0?1:-1,c.push(fe.x,fe.y,fe.z),f.push(Se/R),f.push(1-de/S),X+=1}}for(let de=0;de<S;de++)for(let ue=0;ue<R;ue++){const Se=d+ue+$*de,qe=d+ue+$*(de+1),re=d+(ue+1)+$*(de+1),me=d+(ue+1)+$*de;l.push(Se,qe,me),l.push(qe,re,me),k+=6}a.addGroup(h,k,M),h+=k,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=lo(n[t]);for(const r in i)e[r]=i[r]}return e}function hw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function C0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const dw={clone:lo,merge:on};var pw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pw,this.fragmentShader=mw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=hw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class P0 extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new B,um=new Le,fm=new Le;class qn extends P0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,um,fm),t.subVectors(fm,um)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Ps=1;class _w extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Cs,Ps,e,t);r.layers=this.layers,this.add(r);const s=new qn(Cs,Ps,e,t);s.layers=this.layers,this.add(s);const o=new qn(Cs,Ps,e,t);o.layers=this.layers,this.add(o);const a=new qn(Cs,Ps,e,t);a.layers=this.layers,this.add(a);const l=new qn(Cs,Ps,e,t);l.layers=this.layers,this.add(l);const u=new qn(Cs,Ps,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class L0 extends fn{constructor(e=[],t=so,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gw extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new L0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pa(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:cr});s.uniforms.tEquirect.value=t;const o=new Wt(r,s),a=t.minFilter;return t.minFilter===Gr&&(t.minFilter=xi),new _w(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class No extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vw={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,p=.005;u.inputState.pinching&&d>h+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new No;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new pd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xw extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yw extends fn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Un,c=Un,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hm extends Yn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ls=new _t,dm=new _t,al=[],pm=new cs,Sw=new _t,Lo=new Wt,Do=new yo;class kr extends Wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Sw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),pm.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(pm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Do.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),e.ray.intersectsSphere(Do)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ls),dm.multiplyMatrices(i,Ls),Lo.matrixWorld=dm,Lo.raycast(e,al);for(let o=0,a=al.length;o<a;o++){const l=al[o];l.instanceId=s,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new yw(new Float32Array(r*this.count),r,this.count,sd,yi));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Su=new B,Mw=new B,bw=new je;class Ur{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Su.subVectors(i,t).cross(Mw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bw.getNormalMatrix(e),r=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new yo,ll=new B;class md{constructor(e=new Ur,t=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],h=r[8],p=r[9],_=r[10],g=r[11],m=r[12],y=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-s,d-u,g-h,v-m).normalize(),i[1].setComponents(l+s,d+u,g+h,v+m).normalize(),i[2].setComponents(l+o,d+c,g+p,v+y).normalize(),i[3].setComponents(l-o,d-c,g-p,v-y).normalize(),i[4].setComponents(l-a,d-f,g-_,v-x).normalize(),t===Vi)i[5].setComponents(l+a,d+f,g+_,v+x).normalize();else if(t===Yl)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D0 extends So{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mm=new _t,th=new fd,cl=new yo,ul=new B;class Ew extends zt{constructor(e=new dn,t=new D0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;mm.copy(r).invert(),th.copy(e.ray).applyMatrix4(mm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let p=d,_=h;p<_;p++){const g=u.getX(p);ul.fromBufferAttribute(f,g),_m(ul,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let p=d,_=h;p<_;p++)ul.fromBufferAttribute(f,p),_m(ul,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _m(n,e,t,i,r,s,o){const a=th.distanceSqToPoint(n);if(a<t){const l=new B;th.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class I0 extends fn{constructor(e,t,i=rs,r,s,o,a=Un,l=Un,u,c=ca,f=1){if(c!==ca&&c!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _d extends dn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new B,c=new Le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const h=i+f/t*r;u.x=e*Math.cos(h),u.y=e*Math.sin(h),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[d]/e+1)/2,c.y=(o[d+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _d(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jl extends dn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],h=[];let p=0;const _=[],g=i/2;let m=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(h,2));function y(){const v=new B,T=new B;let A=0;const R=(t-e)/i;for(let S=0;S<=s;S++){const M=[],b=S/s,C=b*(t-e)+e;for(let U=0;U<=r;U++){const O=U/r,z=O*l+a,$=Math.sin(z),F=Math.cos(z);T.x=C*$,T.y=-b*i+g,T.z=C*F,f.push(T.x,T.y,T.z),v.set($,R,F).normalize(),d.push(v.x,v.y,v.z),h.push(O,1-b),M.push(p++)}_.push(M)}for(let S=0;S<r;S++)for(let M=0;M<s;M++){const b=_[M][S],C=_[M+1][S],U=_[M+1][S+1],O=_[M][S+1];(e>0||M!==0)&&(c.push(b,C,O),A+=3),(t>0||M!==s-1)&&(c.push(C,U,O),A+=3)}u.addGroup(m,A,0),m+=A}function x(v){const T=p,A=new Le,R=new B;let S=0;const M=v===!0?e:t,b=v===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,g*b,0),d.push(0,b,0),h.push(.5,.5),p++;const C=p;for(let U=0;U<=r;U++){const z=U/r*l+a,$=Math.cos(z),F=Math.sin(z);R.x=M*F,R.y=g*b,R.z=M*$,f.push(R.x,R.y,R.z),d.push(0,b,0),A.x=$*.5+.5,A.y=F*.5*b+.5,h.push(A.x,A.y),p++}for(let U=0;U<r;U++){const O=T+U,z=C+U;v===!0?c.push(z,z+1,O):c.push(z+1,z,O),S+=3}u.addGroup(m,S,v===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gd extends dn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new B,v=new B,T=new B;for(let A=0;A<t.length;A+=3)h(t[A+0],x),h(t[A+1],v),h(t[A+2],T),l(x,v,T,y)}function l(y,x,v,T){const A=T+1,R=[];for(let S=0;S<=A;S++){R[S]=[];const M=y.clone().lerp(v,S/A),b=x.clone().lerp(v,S/A),C=A-S;for(let U=0;U<=C;U++)U===0&&S===A?R[S][U]=M:R[S][U]=M.clone().lerp(b,U/C)}for(let S=0;S<A;S++)for(let M=0;M<2*(A-S)-1;M++){const b=Math.floor(M/2);M%2===0?(d(R[S][b+1]),d(R[S+1][b]),d(R[S][b])):(d(R[S][b+1]),d(R[S+1][b+1]),d(R[S+1][b]))}}function u(y){const x=new B;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function c(){const y=new B;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=g(y)/2/Math.PI+.5,T=m(y)/Math.PI+.5;o.push(v,1-T)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],T=o[y+4],A=Math.max(x,v,T),R=Math.min(x,v,T);A>.9&&R<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function p(){const y=new B,x=new B,v=new B,T=new B,A=new Le,R=new Le,S=new Le;for(let M=0,b=0;M<s.length;M+=9,b+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),A.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),S.set(o[b+4],o[b+5]),T.copy(y).add(x).add(v).divideScalar(3);const C=g(T);_(A,b+0,y,C),_(R,b+2,x,C),_(S,b+4,v,C)}}function _(y,x,v,T){T<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.vertices,e.indices,e.radius,e.details)}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,h=(o-c)/d;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Le:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new B,r=[],s=[],o=[],a=new B,l=new _t;for(let h=0;h<=e;h++){const p=h/e;r[h]=this.getTangentAt(p,new B)}s[0]=new B,o[0]=new B;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Je(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Je(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vd extends Ai{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Le){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=u-this.aY;l=d*c-h*f+this.aX,u=d*f+h*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tw extends vd{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xd(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,h=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,h*=c,r(o,a,d,h)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const fl=new B,Mu=new xd,bu=new xd,Eu=new xd;class ww extends Ai{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new B){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(fl.subVectors(r[0],r[1]).add(r[0]),u=fl);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(fl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=fl),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let p=Math.pow(u.distanceToSquared(f),h),_=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(c),h);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Mu.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,p,_,g),bu.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,p,_,g),Eu.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,p,_,g)}else this.curveType==="catmullrom"&&(Mu.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),bu.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),Eu.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return i.set(Mu.calc(l),bu.calc(l),Eu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gm(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Aw(n,e){const t=1-n;return t*t*e}function Rw(n,e){return 2*(1-n)*n*e}function Cw(n,e){return n*n*e}function jo(n,e,t,i){return Aw(n,e)+Rw(n,t)+Cw(n,i)}function Pw(n,e){const t=1-n;return t*t*t*e}function Lw(n,e){const t=1-n;return 3*t*t*n*e}function Dw(n,e){return 3*(1-n)*n*n*e}function Iw(n,e){return n*n*n*e}function $o(n,e,t,i,r){return Pw(n,e)+Lw(n,t)+Dw(n,i)+Iw(n,r)}class U0 extends Ai{constructor(e=new Le,t=new Le,i=new Le,r=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Le){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($o(e,r.x,s.x,o.x,a.x),$o(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uw extends Ai{constructor(e=new B,t=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new B){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($o(e,r.x,s.x,o.x,a.x),$o(e,r.y,s.y,o.y,a.y),$o(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O0 extends Ai{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ow extends Ai{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N0 extends Ai{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nw extends Ai{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y),jo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(gm(a,l.x,u.x,c.x,f.x),gm(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Le().fromArray(r))}return this}}var vm=Object.freeze({__proto__:null,ArcCurve:Tw,CatmullRomCurve3:ww,CubicBezierCurve:U0,CubicBezierCurve3:Uw,EllipseCurve:vd,LineCurve:O0,LineCurve3:Ow,QuadraticBezierCurve:N0,QuadraticBezierCurve3:Nw,SplineCurve:F0});class Fw extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vm[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new vm[r.type]().fromJSON(r))}return this}}class xm extends Fw{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new O0(this.currentPoint.clone(),new Le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new N0(this.currentPoint.clone(),new Le(e,t),new Le(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new U0(this.currentPoint.clone(),new Le(e,t),new Le(i,r),new Le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new F0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new vd(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class B0 extends xm{constructor(e){super(e),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new xm().fromJSON(r))}return this}}function Bw(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=k0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=Gw(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let c=-1/0,f=-1/0;for(let d=t;d<r;d+=t){const h=n[d],p=n[d+1];h<a&&(a=h),p<l&&(l=p),h>c&&(c=h),p>f&&(f=p)}u=Math.max(c-a,f-l),u=u!==0?32767/u:0}return ha(s,o,t,a,l,u,0),o}function k0(n,e,t,i,r){let s;if(r===e1(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=ym(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=ym(o/i|0,n[o],n[o+1],s);return s&&co(s,s.next)&&(pa(s),s=s.next),s}function os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(co(t,t.next)||Rt(t.prev,t,t.next)===0)){if(pa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ha(n,e,t,i,r,s,o){if(!n)return;!o&&s&&$w(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,u=n.next;if(s?zw(n,i,r,s):kw(n)){e.push(l.i,n.i,u.i),pa(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=Hw(os(n),e),ha(n,e,t,i,r,s,2)):o===2&&Vw(n,e,t,i,r,s):ha(os(n),e,t,i,r,s,1);break}}}function kw(n){const e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=Math.min(r,s,o),f=Math.min(a,l,u),d=Math.max(r,s,o),h=Math.max(a,l,u);let p=i.next;for(;p!==e;){if(p.x>=c&&p.x<=d&&p.y>=f&&p.y<=h&&Fo(r,a,s,l,o,u,p.x,p.y)&&Rt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zw(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Rt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,d=o.y,h=Math.min(a,l,u),p=Math.min(c,f,d),_=Math.max(a,l,u),g=Math.max(c,f,d),m=nh(h,p,e,t,i),y=nh(_,g,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=m&&v&&v.z<=y;){if(x.x>=h&&x.x<=_&&x.y>=p&&x.y<=g&&x!==r&&x!==o&&Fo(a,c,l,f,u,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=h&&v.x<=_&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Fo(a,c,l,f,u,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=h&&x.x<=_&&x.y>=p&&x.y<=g&&x!==r&&x!==o&&Fo(a,c,l,f,u,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=h&&v.x<=_&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Fo(a,c,l,f,u,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Hw(n,e){let t=n;do{const i=t.prev,r=t.next.next;!co(i,r)&&H0(i,t,t.next,r)&&da(i,r)&&da(r,i)&&(e.push(i.i,t.i,r.i),pa(t),pa(t.next),t=n=r),t=t.next}while(t!==n);return os(t)}function Vw(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jw(o,a)){let l=V0(o,a);o=os(o,o.next),l=os(l,l.next),ha(o,e,t,i,r,s,0),ha(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Gw(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=k0(n,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(Kw(u))}r.sort(Ww);for(let s=0;s<r.length;s++)t=Xw(r[s],t);return t}function Ww(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Xw(n,e){const t=qw(n,e);if(!t)return e;const i=V0(t,n);return os(i,i.next),os(t,t.next)}function qw(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(co(n,t))return t;do{if(co(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let c=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&z0(r<u?i:s,r,l,u,r<u?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);da(t,n)&&(f<c||f===c&&(t.x>o.x||t.x===o.x&&jw(o,t)))&&(o=t,c=f)}t=t.next}while(t!==a);return o}function jw(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function $w(n,e,t,i){let r=n;do r.z===0&&(r.z=nh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Yw(r)}function Yw(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function nh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Kw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function z0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Fo(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&z0(n,e,t,i,r,s,o,a)}function Jw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Zw(n,e)&&(da(n,e)&&da(e,n)&&Qw(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||co(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function co(n,e){return n.x===e.x&&n.y===e.y}function H0(n,e,t,i){const r=dl(Rt(n,e,t)),s=dl(Rt(n,e,i)),o=dl(Rt(t,i,n)),a=dl(Rt(t,i,e));return!!(r!==s&&o!==a||r===0&&hl(n,t,e)||s===0&&hl(n,i,e)||o===0&&hl(t,n,i)||a===0&&hl(t,e,i))}function hl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function dl(n){return n>0?1:n<0?-1:0}function Zw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&H0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function da(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function Qw(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function V0(n,e){const t=ih(n.i,n.x,n.y),i=ih(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ym(n,e,t,i){const r=ih(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function pa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ih(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function e1(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class t1{static triangulate(e,t,i=2){return Bw(e,t,i)}}class Yo{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Yo.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Sm(e),Mm(i,e);let o=e.length;t.forEach(Sm);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Mm(i,t[l]);const a=t1.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Sm(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Mm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class yd extends gd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yd(e.radius,e.detail)}}class Kr extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,h=[],p=[],_=[],g=[];for(let m=0;m<c;m++){const y=m*d-o;for(let x=0;x<u;x++){const v=x*f-s;p.push(v,-y,0),_.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+u*m,v=y+u*(m+1),T=y+1+u*(m+1),A=y+1+u*m;h.push(x,v,A),h.push(v,T,A)}this.setIndex(h),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sd extends dn{constructor(e=new B0([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(s,3)),this.setAttribute("uv",new Et(o,2));function u(c){const f=r.length/3,d=c.extractPoints(t);let h=d.shape;const p=d.holes;Yo.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];Yo.isClockWise(y)===!0&&(p[g]=y.reverse())}const _=Yo.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];h=h.concat(y)}for(let g=0,m=h.length;g<m;g++){const y=h[g];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){const y=_[g],x=y[0]+f,v=y[1]+f,T=y[2]+f;i.push(x,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return n1(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Sd(i,e.curveSegments)}}function n1(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Ac extends dn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new B,d=new B,h=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){const y=[],x=m/i;let v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const A=T/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),p.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(A+v,1-x),y.push(u++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const x=c[m][y+1],v=c[m][y],T=c[m+1][y],A=c[m+1][y+1];(m!==0||o>0)&&h.push(x,v,A),(m!==i-1||l<Math.PI)&&h.push(v,T,A)}this.setIndex(h),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mi extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=M0,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i1 extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r1 extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class G0 extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class s1 extends G0{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Tu=new _t,bm=new B,Em=new B;class o1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),t.position.copy(bm),Em.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Em),t.updateMatrixWorld(),Tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class W0 extends P0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class a1 extends o1{constructor(){super(new W0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l1 extends G0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new a1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class c1 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Tm=new _t;class u1{constructor(e,t,i=0,r=1/0){this.ray=new fd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tm),this}intersectObject(e,t=!0,i=[]){return rh(e,this,i,t),i.sort(wm),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rh(e[r],this,i,t);return i.sort(wm),i}}function wm(n,e){return n.distance-e.distance}function rh(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)rh(s[o],e,t,!0)}}function Am(n,e,t,i){const r=f1(i);switch(t){case v0:return n*e;case sd:return n*e/r.components*r.byteLength;case od:return n*e/r.components*r.byteLength;case y0:return n*e*2/r.components*r.byteLength;case ad:return n*e*2/r.components*r.byteLength;case x0:return n*e*3/r.components*r.byteLength;case ii:return n*e*4/r.components*r.byteLength;case ld:return n*e*4/r.components*r.byteLength;case Ml:case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pf:case Df:return Math.max(n,16)*Math.max(e,8)/4;case Cf:case Lf:return Math.max(n,8)*Math.max(e,8)/2;case If:case Uf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Of:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $f:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wl:case Kf:case Jf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case S0:case Zf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qf:case eh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f1(n){switch(n){case bi:case m0:return{byteLength:1,components:1};case aa:case _0:case Ra:return{byteLength:2,components:1};case id:case rd:return{byteLength:2,components:4};case rs:case nd:case yi:return{byteLength:4,components:1};case g0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=td);function X0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function h1(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){const p=f[d],_=f[h];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){const _=f[h];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var d1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
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
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x1=`#ifdef USE_AOMAP
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
#endif`,y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S1=`#ifdef USE_BATCHING
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
#endif`,M1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w1=`#ifdef USE_IRIDESCENCE
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
#endif`,A1=`#ifdef USE_BUMPMAP
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N1=`#define PI 3.141592653589793
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
} // validated`,F1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B1=`vec3 transformedNormal = objectNormal;
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
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G1="gl_FragColor = linearToOutputTexel( gl_FragColor );",W1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eA=`#ifdef USE_GRADIENTMAP
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
}`,tA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rA=`uniform bool receiveShadow;
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
#endif`,sA=`#ifdef USE_ENVMAP
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
#endif`,oA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uA=`PhysicalMaterial material;
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
#endif`,fA=`struct PhysicalMaterial {
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
}`,hA=`
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
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
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_A=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MA=`#if defined( USE_POINTS_UV )
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
#endif`,bA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`#ifdef USE_MORPHTARGETS
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
#endif`,CA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OA=`#ifdef USE_NORMALMAP
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
#endif`,NA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$A=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JA=`float getShadowMask() {
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
}`,ZA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QA=`#ifdef USE_SKINNING
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
#endif`,eR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tR=`#ifdef USE_SKINNING
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
#endif`,nR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oR=`#ifdef USE_TRANSMISSION
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
#endif`,aR=`#ifdef USE_TRANSMISSION
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
#endif`,lR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dR=`uniform sampler2D t2D;
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
}`,pR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vR=`#include <common>
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
}`,xR=`#if DEPTH_PACKING == 3200
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
}`,yR=`#define DISTANCE
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
}`,SR=`#define DISTANCE
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
}`,MR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ER=`uniform float scale;
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
}`,TR=`uniform vec3 diffuse;
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
}`,wR=`#include <common>
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
}`,AR=`uniform vec3 diffuse;
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
}`,RR=`#define LAMBERT
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
}`,CR=`#define LAMBERT
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
}`,PR=`#define MATCAP
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
}`,LR=`#define MATCAP
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
}`,DR=`#define NORMAL
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
}`,IR=`#define NORMAL
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
}`,UR=`#define PHONG
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
}`,OR=`#define PHONG
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
}`,NR=`#define STANDARD
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
}`,FR=`#define STANDARD
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
}`,BR=`#define TOON
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
}`,kR=`#define TOON
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
}`,zR=`uniform float size;
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
}`,HR=`uniform vec3 diffuse;
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
}`,VR=`#include <common>
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
}`,GR=`uniform vec3 color;
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
}`,WR=`uniform float rotation;
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
}`,XR=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:d1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:_1,alphatest_fragment:g1,alphatest_pars_fragment:v1,aomap_fragment:x1,aomap_pars_fragment:y1,batching_pars_vertex:S1,batching_vertex:M1,begin_vertex:b1,beginnormal_vertex:E1,bsdfs:T1,iridescence_fragment:w1,bumpmap_pars_fragment:A1,clipping_planes_fragment:R1,clipping_planes_pars_fragment:C1,clipping_planes_pars_vertex:P1,clipping_planes_vertex:L1,color_fragment:D1,color_pars_fragment:I1,color_pars_vertex:U1,color_vertex:O1,common:N1,cube_uv_reflection_fragment:F1,defaultnormal_vertex:B1,displacementmap_pars_vertex:k1,displacementmap_vertex:z1,emissivemap_fragment:H1,emissivemap_pars_fragment:V1,colorspace_fragment:G1,colorspace_pars_fragment:W1,envmap_fragment:X1,envmap_common_pars_fragment:q1,envmap_pars_fragment:j1,envmap_pars_vertex:$1,envmap_physical_pars_fragment:sA,envmap_vertex:Y1,fog_vertex:K1,fog_pars_vertex:J1,fog_fragment:Z1,fog_pars_fragment:Q1,gradientmap_pars_fragment:eA,lightmap_pars_fragment:tA,lights_lambert_fragment:nA,lights_lambert_pars_fragment:iA,lights_pars_begin:rA,lights_toon_fragment:oA,lights_toon_pars_fragment:aA,lights_phong_fragment:lA,lights_phong_pars_fragment:cA,lights_physical_fragment:uA,lights_physical_pars_fragment:fA,lights_fragment_begin:hA,lights_fragment_maps:dA,lights_fragment_end:pA,logdepthbuf_fragment:mA,logdepthbuf_pars_fragment:_A,logdepthbuf_pars_vertex:gA,logdepthbuf_vertex:vA,map_fragment:xA,map_pars_fragment:yA,map_particle_fragment:SA,map_particle_pars_fragment:MA,metalnessmap_fragment:bA,metalnessmap_pars_fragment:EA,morphinstance_vertex:TA,morphcolor_vertex:wA,morphnormal_vertex:AA,morphtarget_pars_vertex:RA,morphtarget_vertex:CA,normal_fragment_begin:PA,normal_fragment_maps:LA,normal_pars_fragment:DA,normal_pars_vertex:IA,normal_vertex:UA,normalmap_pars_fragment:OA,clearcoat_normal_fragment_begin:NA,clearcoat_normal_fragment_maps:FA,clearcoat_pars_fragment:BA,iridescence_pars_fragment:kA,opaque_fragment:zA,packing:HA,premultiplied_alpha_fragment:VA,project_vertex:GA,dithering_fragment:WA,dithering_pars_fragment:XA,roughnessmap_fragment:qA,roughnessmap_pars_fragment:jA,shadowmap_pars_fragment:$A,shadowmap_pars_vertex:YA,shadowmap_vertex:KA,shadowmask_pars_fragment:JA,skinbase_vertex:ZA,skinning_pars_vertex:QA,skinning_vertex:eR,skinnormal_vertex:tR,specularmap_fragment:nR,specularmap_pars_fragment:iR,tonemapping_fragment:rR,tonemapping_pars_fragment:sR,transmission_fragment:oR,transmission_pars_fragment:aR,uv_pars_fragment:lR,uv_pars_vertex:cR,uv_vertex:uR,worldpos_vertex:fR,background_vert:hR,background_frag:dR,backgroundCube_vert:pR,backgroundCube_frag:mR,cube_vert:_R,cube_frag:gR,depth_vert:vR,depth_frag:xR,distanceRGBA_vert:yR,distanceRGBA_frag:SR,equirect_vert:MR,equirect_frag:bR,linedashed_vert:ER,linedashed_frag:TR,meshbasic_vert:wR,meshbasic_frag:AR,meshlambert_vert:RR,meshlambert_frag:CR,meshmatcap_vert:PR,meshmatcap_frag:LR,meshnormal_vert:DR,meshnormal_frag:IR,meshphong_vert:UR,meshphong_frag:OR,meshphysical_vert:NR,meshphysical_frag:FR,meshtoon_vert:BR,meshtoon_frag:kR,points_vert:zR,points_frag:HR,shadow_vert:VR,shadow_frag:GR,sprite_vert:WR,sprite_frag:XR},we={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},_i={basic:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Qe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:on([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:on([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Qe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:on([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:on([we.points,we.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:on([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:on([we.common,we.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:on([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:on([we.sprite,we.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:on([we.common,we.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:on([we.lights,we.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_i.physical={uniforms:on([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const pl={r:0,b:0,g:0},Cr=new Ei,qR=new _t;function jR(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,c,f=null,d=0,h=null;function p(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const T=p(x);T===null?m(a,l):T&&T.isColor&&(m(T,1),v=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,v){const T=p(v);T&&(T.isCubeTexture||T.mapping===wc)?(c===void 0&&(c=new Wt(new Pa(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:lo(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Cr.copy(v.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qR.makeRotationFromEuler(Cr)),c.material.toneMapped=ot.getTransfer(T.colorSpace)!==mt,(f!==T||d!==T.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Wt(new Kr(2,2),new Ti({name:"BackgroundMaterial",uniforms:lo(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=ot.getTransfer(T.colorSpace)!==mt,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,h=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function m(x,v){x.getRGB(pl,C0(n)),i.buffers.color.setClear(pl.r,pl.g,pl.b,v,o)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:g,dispose:y}}function $R(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,C,U,O,z){let $=!1;const F=f(O,U,C);s!==F&&(s=F,u(s.object)),$=h(b,O,U,z),$&&p(b,O,U,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(b,C,U,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function u(b){return n.bindVertexArray(b)}function c(b){return n.deleteVertexArray(b)}function f(b,C,U){const O=U.wireframe===!0;let z=i[b.id];z===void 0&&(z={},i[b.id]=z);let $=z[C.id];$===void 0&&($={},z[C.id]=$);let F=$[O];return F===void 0&&(F=d(l()),$[O]=F),F}function d(b){const C=[],U=[],O=[];for(let z=0;z<t;z++)C[z]=0,U[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:b,attributes:{},index:null}}function h(b,C,U,O){const z=s.attributes,$=C.attributes;let F=0;const X=U.getAttributes();for(const k in X)if(X[k].location>=0){const de=z[k];let ue=$[k];if(ue===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),de===void 0||de.attribute!==ue||ue&&de.data!==ue.data)return!0;F++}return s.attributesNum!==F||s.index!==O}function p(b,C,U,O){const z={},$=C.attributes;let F=0;const X=U.getAttributes();for(const k in X)if(X[k].location>=0){let de=$[k];de===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));const ue={};ue.attribute=de,de&&de.data&&(ue.data=de.data),z[k]=ue,F++}s.attributes=z,s.attributesNum=F,s.index=O}function _(){const b=s.newAttributes;for(let C=0,U=b.length;C<U;C++)b[C]=0}function g(b){m(b,0)}function m(b,C){const U=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;U[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),z[b]!==C&&(n.vertexAttribDivisor(b,C),z[b]=C)}function y(){const b=s.newAttributes,C=s.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==b[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function x(b,C,U,O,z,$,F){F===!0?n.vertexAttribIPointer(b,C,U,z,$):n.vertexAttribPointer(b,C,U,O,z,$)}function v(b,C,U,O){_();const z=O.attributes,$=U.getAttributes(),F=C.defaultAttributeValues;for(const X in $){const k=$[X];if(k.location>=0){let fe=z[X];if(fe===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){const de=fe.normalized,ue=fe.itemSize,Se=e.get(fe);if(Se===void 0)continue;const qe=Se.buffer,re=Se.type,me=Se.bytesPerElement,De=re===n.INT||re===n.UNSIGNED_INT||fe.gpuType===nd;if(fe.isInterleavedBufferAttribute){const Me=fe.data,Ue=Me.stride,Ze=fe.offset;if(Me.isInstancedInterleavedBuffer){for(let Ie=0;Ie<k.locationSize;Ie++)m(k.location+Ie,Me.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ie=0;Ie<k.locationSize;Ie++)g(k.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Ie=0;Ie<k.locationSize;Ie++)x(k.location+Ie,ue/k.locationSize,re,de,Ue*me,(Ze+ue/k.locationSize*Ie)*me,De)}else{if(fe.isInstancedBufferAttribute){for(let Me=0;Me<k.locationSize;Me++)m(k.location+Me,fe.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<k.locationSize;Me++)g(k.location+Me);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Me=0;Me<k.locationSize;Me++)x(k.location+Me,ue/k.locationSize,re,de,ue*me,ue/k.locationSize*Me*me,De)}}else if(F!==void 0){const de=F[X];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(k.location,de);break;case 3:n.vertexAttrib3fv(k.location,de);break;case 4:n.vertexAttrib4fv(k.location,de);break;default:n.vertexAttrib1fv(k.location,de)}}}}y()}function T(){S();for(const b in i){const C=i[b];for(const U in C){const O=C[U];for(const z in O)c(O[z].object),delete O[z];delete C[U]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const C=i[b.id];for(const U in C){const O=C[U];for(const z in O)c(O[z].object),delete O[z];delete C[U]}delete i[b.id]}function R(b){for(const C in i){const U=i[C];if(U[b.id]===void 0)continue;const O=U[b.id];for(const z in O)c(O[z].object),delete O[z];delete U[b.id]}}function S(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function YR(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let p=0;p<f;p++)h+=c[p];t.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<u.length;p++)o(u[p],c[p],d[p]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_]*d[_];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ii&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const S=R===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yi&&!S)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function JR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ur,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,h){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!r||p===null||p.length===0||s&&!g)s?c(null):u();else{const y=s?0:i,x=y*4;let v=m.clippingState||null;l.value=v,v=c(p,d,x,h);for(let T=0;T!==x;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=h+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,v=h;x!==_;++x,v+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function ZR(n){let e=new WeakMap;function t(o,a){return a===Tf?o.mapping=so:a===wf&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tf||a===wf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new gw(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const zs=4,Rm=[.125,.215,.35,.446,.526,.582],zr=20,wu=new W0,Cm=new Qe;let Au=null,Ru=0,Cu=0,Pu=!1;const Or=(1+Math.sqrt(5))/2,Ds=1/Or,Pm=[new B(-Or,Ds,0),new B(Or,Ds,0),new B(-Ds,0,Or),new B(Ds,0,Or),new B(0,Or,-Ds),new B(0,Or,Ds),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],QR=new B;class Lm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=QR}=s;Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Cu),this._renderer.xr.enabled=Pu,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ra,format:ii,colorSpace:ao,depthBuffer:!1},r=Dm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eC(s)),this._blurMaterial=tC(s,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,wu)}_sceneToCubeUV(e,t,i,r,s){const l=new qn(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Cm),f.toneMapping=ur,f.autoClear=!1;const p=new dd({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new Wt(new Pa,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Cm),g=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[y],s.y,s.z)):x===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[y]));const v=this._cubeSize;ml(r,x*v,y>2?v:0,v,v),f.setRenderTarget(r),g&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ml(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pm[(r-s-1)%Pm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Wt(this._lodPlanes[r],u),d=u.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*zr-1),_=s/p,g=isFinite(s)?1+Math.floor(c*_):zr;g>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zr}`);const m=[];let y=0;for(let R=0;R<zr;++R){const S=R/_,M=Math.exp(-S*S/2);m.push(M),R===0?y+=M:R<g&&(y+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-i;const v=this._sizeLods[r],T=3*v*(r>x-zs?r-x+zs:0),A=4*(this._cubeSize-v);ml(t,T,A,3*v,2*v),l.setRenderTarget(t),l.render(f,wu)}}function eC(n){const e=[],t=[],i=[];let r=n;const s=n-zs+1+Rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-zs?l=Rm[o-n+zs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*h),x=new Float32Array(g*p*h),v=new Float32Array(m*p*h);for(let A=0;A<h;A++){const R=A%3*2/3-1,S=A>2?0:-1,M=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];y.set(M,_*p*A),x.set(d,g*p*A);const b=[A,A,A,A,A,A];v.set(b,m*p*A)}const T=new dn;T.setAttribute("position",new Yn(y,_)),T.setAttribute("uv",new Yn(x,g)),T.setAttribute("faceIndex",new Yn(v,m)),e.push(T),r>zs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dm(n,e,t){const i=new ss(n,e,t);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tC(n,e,t){const i=new Float32Array(zr),r=new B(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Md(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Im(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Um(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Md(){return`

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
	`}function nC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Tf||l===wf,c=l===so||l===oo;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Lm(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return u&&h&&h.height>0||c&&h&&r(h)?(t===null&&(t=new Lm(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Js("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rC(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function u(f){const d=[],h=f.index,p=f.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let x=0,v=y.length;x<v;x+=3){const T=y[x+0],A=y[x+1],R=y[x+2];d.push(T,A,A,R,R,T)}}else if(p!==void 0){const y=p.array;_=p.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const T=x+0,A=x+1,R=x+2;d.push(T,A,A,R,R,T)}}else return;const g=new(E0(d)?R0:A0)(d,1);g.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,g)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function sC(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function u(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,d*o,p),t.update(h,i,p))}function c(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function f(d,h,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)u(d[m]/o,h[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=h[y]*_[y];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function oC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function aC(n,e,t){const i=new WeakMap,r=new Lt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;h===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const A=new Float32Array(v*T*4*f),R=new T0(A,v,T,f);R.type=yi,R.needsUpdate=!0;const S=x*4;for(let b=0;b<f;b++){const C=g[b],U=m[b],O=y[b],z=v*T*4*b;for(let $=0;$<C.count;$++){const F=$*S;h===!0&&(r.fromBufferAttribute(C,$),A[z+F+0]=r.x,A[z+F+1]=r.y,A[z+F+2]=r.z,A[z+F+3]=0),p===!0&&(r.fromBufferAttribute(U,$),A[z+F+4]=r.x,A[z+F+5]=r.y,A[z+F+6]=r.z,A[z+F+7]=0),_===!0&&(r.fromBufferAttribute(O,$),A[z+F+8]=r.x,A[z+F+9]=r.y,A[z+F+10]=r.z,A[z+F+11]=O.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Le(v,T)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<u.length;_++)h+=u[_];const p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function lC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const q0=new fn,Om=new I0(1,1),j0=new T0,$0=new ew,Y0=new L0,Nm=[],Fm=[],Bm=new Float32Array(16),km=new Float32Array(9),zm=new Float32Array(4);function Mo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Nm[r];if(s===void 0&&(s=new Float32Array(r),Nm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rc(n,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function fC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function hC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function dC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;zm.set(i),n.uniformMatrix2fv(this.addr,!1,zm),Vt(t,i)}}function pC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;km.set(i),n.uniformMatrix3fv(this.addr,!1,km),Vt(t,i)}}function mC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Bm.set(i),n.uniformMatrix4fv(this.addr,!1,Bm),Vt(t,i)}}function _C(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function vC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function xC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function yC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function MC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function bC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function EC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Om.compareFunction=b0,s=Om):s=q0,t.setTexture2D(e||s,r)}function TC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$0,r)}function wC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Y0,r)}function AC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||j0,r)}function RC(n){switch(n){case 5126:return cC;case 35664:return uC;case 35665:return fC;case 35666:return hC;case 35674:return dC;case 35675:return pC;case 35676:return mC;case 5124:case 35670:return _C;case 35667:case 35671:return gC;case 35668:case 35672:return vC;case 35669:case 35673:return xC;case 5125:return yC;case 36294:return SC;case 36295:return MC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return EC;case 35679:case 36299:case 36307:return TC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return AC}}function CC(n,e){n.uniform1fv(this.addr,e)}function PC(n,e){const t=Mo(e,this.size,2);n.uniform2fv(this.addr,t)}function LC(n,e){const t=Mo(e,this.size,3);n.uniform3fv(this.addr,t)}function DC(n,e){const t=Mo(e,this.size,4);n.uniform4fv(this.addr,t)}function IC(n,e){const t=Mo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UC(n,e){const t=Mo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OC(n,e){const t=Mo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NC(n,e){n.uniform1iv(this.addr,e)}function FC(n,e){n.uniform2iv(this.addr,e)}function BC(n,e){n.uniform3iv(this.addr,e)}function kC(n,e){n.uniform4iv(this.addr,e)}function zC(n,e){n.uniform1uiv(this.addr,e)}function HC(n,e){n.uniform2uiv(this.addr,e)}function VC(n,e){n.uniform3uiv(this.addr,e)}function GC(n,e){n.uniform4uiv(this.addr,e)}function WC(n,e,t){const i=this.cache,r=e.length,s=Rc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||q0,s[o])}function XC(n,e,t){const i=this.cache,r=e.length,s=Rc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$0,s[o])}function qC(n,e,t){const i=this.cache,r=e.length,s=Rc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Y0,s[o])}function jC(n,e,t){const i=this.cache,r=e.length,s=Rc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||j0,s[o])}function $C(n){switch(n){case 5126:return CC;case 35664:return PC;case 35665:return LC;case 35666:return DC;case 35674:return IC;case 35675:return UC;case 35676:return OC;case 5124:case 35670:return NC;case 35667:case 35671:return FC;case 35668:case 35672:return BC;case 35669:case 35673:return kC;case 5125:return zC;case 36294:return HC;case 36295:return VC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return qC;case 36289:case 36303:case 36311:case 36292:return jC}}class YC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RC(t.type)}}class KC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$C(t.type)}}class JC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function Hm(n,e){n.seq.push(e),n.map[e.id]=e}function ZC(n,e,t){const i=n.name,r=i.length;for(Lu.lastIndex=0;;){const s=Lu.exec(i),o=Lu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Hm(t,u===void 0?new YC(a,n,e):new KC(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new JC(a),Hm(t,f)),t=f}}}class Al{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ZC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QC=37297;let eP=0;function tP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Gm=new je;function nP(n){ot._getMatrix(Gm,ot.workingColorSpace,n);const e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case $l:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tP(n.getShaderSource(e),o)}else return r}function iP(n,e){const t=nP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rP(n,e){let t;switch(e){case fT:t="Linear";break;case hT:t="Reinhard";break;case dT:t="Cineon";break;case d0:t="ACESFilmic";break;case mT:t="AgX";break;case _T:t="Neutral";break;case pT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _l=new B;function sP(){ot.getLuminanceCoefficients(_l);const n=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function aP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Bo(n){return n!==""}function Xm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cP=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(n){return n.replace(cP,fP)}const uP=new Map;function fP(n,e){let t=$e[e];if(t===void 0){const i=uP.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}const hP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(n){return n.replace(hP,dP)}function dP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $m(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===WE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function mP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _P(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===oo&&(e="ENVMAP_MODE_REFRACTION"),e}function gP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case h0:e="ENVMAP_BLENDING_MULTIPLY";break;case cT:e="ENVMAP_BLENDING_MIX";break;case uT:e="ENVMAP_BLENDING_ADD";break}return e}function vP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pP(t),u=mP(t),c=_P(t),f=gP(t),d=vP(t),h=oP(t),p=aP(s),_=r.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),m.length>0&&(m+=`
`)):(g=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),m=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?$e.tonemapping_pars_fragment:"",t.toneMapping!==ur?rP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,iP("linearToOutputTexel",t.outputColorSpace),sP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=sh(o),o=Xm(o,t),o=qm(o,t),a=sh(a),a=Xm(a,t),a=qm(a,t),o=jm(o),a=jm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+g+o,v=y+m+a,T=Vm(r,r.VERTEX_SHADER,x),A=Vm(r,r.FRAGMENT_SHADER,v);r.attachShader(_,T),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(T).trim(),z=r.getShaderInfoLog(A).trim();let $=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,A);else{const X=Wm(r,T,"vertex"),k=Wm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+X+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||z==="")&&(F=!1);F&&(C.diagnostics={runnable:$,programLog:U,vertexShader:{log:O,prefix:g},fragmentShader:{log:z,prefix:m}})}r.deleteShader(T),r.deleteShader(A),S=new Al(r,_),M=lP(r,_)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,QC)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eP++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let yP=0;class SP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MP(e),t.set(e,i)),i}}class MP{constructor(e){this.id=yP++,this.code=e,this.usedTimes=0}}function bP(n,e,t,i,r,s,o){const a=new hd,l=new SP,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,b,C,U,O){const z=U.fog,$=O.geometry,F=M.isMeshStandardMaterial?U.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),k=X&&X.mapping===wc?X.image.height:null,fe=p[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=de!==void 0?de.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let qe,re,me,De;if(fe){const lt=_i[fe];qe=lt.vertexShader,re=lt.fragmentShader}else qe=M.vertexShader,re=M.fragmentShader,l.update(M),me=l.getVertexShaderID(M),De=l.getFragmentShaderID(M);const Me=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Ze=O.isInstancedMesh===!0,Ie=O.isBatchedMesh===!0,at=!!M.map,rt=!!M.matcap,D=!!X,w=!!M.aoMap,Y=!!M.lightMap,ne=!!M.bumpMap,ee=!!M.normalMap,q=!!M.displacementMap,ce=!!M.emissiveMap,te=!!M.metalnessMap,se=!!M.roughnessMap,Q=M.anisotropy>0,L=M.clearcoat>0,E=M.dispersion>0,I=M.iridescence>0,W=M.sheen>0,J=M.transmission>0,j=Q&&!!M.anisotropyMap,xe=L&&!!M.clearcoatMap,pe=L&&!!M.clearcoatNormalMap,ye=L&&!!M.clearcoatRoughnessMap,Re=I&&!!M.iridescenceMap,le=I&&!!M.iridescenceThicknessMap,be=W&&!!M.sheenColorMap,Be=W&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ve=!!M.specularColorMap,ze=!!M.specularIntensityMap,N=J&&!!M.transmissionMap,ie=J&&!!M.thicknessMap,ae=!!M.gradientMap,Ee=!!M.alphaMap,he=M.alphaTest>0,oe=!!M.alphaHash,Te=!!M.extensions;let Ne=ur;M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const ut={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:re,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:De,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&O._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&O.instanceColor!==null,instancingMorph:Ze&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ao,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:rt,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:k,aoMap:w,lightMap:Y,bumpMap:ne,normalMap:ee,displacementMap:d&&q,emissiveMap:ce,normalMapObjectSpace:ee&&M.normalMapType===yT,normalMapTangentSpace:ee&&M.normalMapType===M0,metalnessMap:te,roughnessMap:se,anisotropy:Q,anisotropyMap:j,clearcoat:L,clearcoatMap:xe,clearcoatNormalMap:pe,clearcoatRoughnessMap:ye,dispersion:E,iridescence:I,iridescenceMap:Re,iridescenceThicknessMap:le,sheen:W,sheenColorMap:be,sheenRoughnessMap:Be,specularMap:Ce,specularColorMap:ve,specularIntensityMap:ze,transmission:J,transmissionMap:N,thicknessMap:ie,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Ks&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:he,alphaHash:oe,combine:M.combine,mapUv:at&&_(M.map.channel),aoMapUv:w&&_(M.aoMap.channel),lightMapUv:Y&&_(M.lightMap.channel),bumpMapUv:ne&&_(M.bumpMap.channel),normalMapUv:ee&&_(M.normalMap.channel),displacementMapUv:q&&_(M.displacementMap.channel),emissiveMapUv:ce&&_(M.emissiveMap.channel),metalnessMapUv:te&&_(M.metalnessMap.channel),roughnessMapUv:se&&_(M.roughnessMap.channel),anisotropyMapUv:j&&_(M.anisotropyMap.channel),clearcoatMapUv:xe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(M.sheenRoughnessMap.channel),specularMapUv:Ce&&_(M.specularMap.channel),specularColorMapUv:ve&&_(M.specularColorMap.channel),specularIntensityMapUv:ze&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:ie&&_(M.thicknessMap.channel),alphaMapUv:Ee&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ee||Q),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(at||Ee),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ue,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=u.has(1),ut.vertexUv2s=u.has(2),ut.vertexUv3s=u.has(3),u.clear(),ut}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(b,M),x(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const b=p[M.type];let C;if(b){const U=_i[b];C=dw.clone(U.uniforms)}else C=M.uniforms;return C}function T(M,b){let C;for(let U=0,O=c.length;U<O;U++){const z=c[U];if(z.cacheKey===b){C=z,++C.usedTimes;break}}return C===void 0&&(C=new xP(n,b,M,s),c.push(C)),C}function A(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function S(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:S}}function EP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function TP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ym(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Km(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,p,_,g){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:p,renderOrder:f.renderOrder,z:_,group:g},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=_,m.group=g),e++,m}function a(f,d,h,p,_,g){const m=o(f,d,h,p,_,g);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(f,d,h,p,_,g){const m=o(f,d,h,p,_,g);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||TP),i.length>1&&i.sort(d||Ym),r.length>1&&r.sort(d||Ym)}function c(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function wP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Km,n.set(i,[o])):r>=s.length?(o=new Km,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Qe};break;case"SpotLight":t={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function RP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CP=0;function PP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LP(n){const e=new AP,t=RP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new _t,o=new _t;function a(u){let c=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,p=0,_=0,g=0,m=0,y=0,x=0,v=0,T=0,A=0,R=0;u.sort(PP);for(let M=0,b=u.length;M<b;M++){const C=u[M],U=C.color,O=C.intensity,z=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=U.r*O,f+=U.g*O,d+=U.b*O;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],O);R++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,k=t.get(C);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.directionalShadow[h]=k,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=C.shadow.matrix,y++}i.directional[h]=F,h++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(U).multiplyScalar(O),F.distance=z,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[_]=F;const X=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,X.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=X.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=$,v++}_++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(U).multiplyScalar(O),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=F,g++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const X=C.shadow,k=t.get(C);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,i.pointShadow[p]=k,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=C.shadow.matrix,x++}i.point[p]=F,p++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(O),F.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[m]=F,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const S=i.hash;(S.directionalLength!==h||S.pointLength!==p||S.spotLength!==_||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==y||S.numPointShadows!==x||S.numSpotShadows!==v||S.numSpotMaps!==T||S.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,S.directionalLength=h,S.pointLength=p,S.spotLength=_,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=y,S.numPointShadows=x,S.numSpotShadows=v,S.numSpotMaps=T,S.numLightProbes=R,i.version=CP++)}function l(u,c){let f=0,d=0,h=0,p=0,_=0;const g=c.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){const x=u[m];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(x.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(x.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Jm(n){const e=new LP(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function DP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jm(n),e.set(r,[a])):s>=o.length?(a=new Jm(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const IP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UP=`uniform sampler2D shadow_pass;
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
}`;function OP(n,e,t){let i=new md;const r=new Le,s=new Le,o=new Lt,a=new i1({depthPacking:xT}),l=new r1,u={},c=t.maxTextureSize,f={[mr]:vn,[vn]:mr,[cn]:cn},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:IP,fragmentShader:UP}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new dn;p.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f0;let m=this.type;this.render=function(A,R,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(cr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=m!==Oi&&this.type===Oi,z=m===Oi&&this.type!==Oi;for(let $=0,F=A.length;$<F;$++){const X=A[$],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const fe=k.getFrameExtents();if(r.multiply(fe),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/fe.x),r.x=s.x*fe.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/fe.y),r.y=s.y*fe.y,k.mapSize.y=s.y)),k.map===null||O===!0||z===!0){const ue=this.type!==Oi?{minFilter:Un,magFilter:Un}:{};k.map!==null&&k.map.dispose(),k.map=new ss(r.x,r.y,ue),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const de=k.getViewportCount();for(let ue=0;ue<de;ue++){const Se=k.getViewport(ue);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),U.viewport(o),k.updateMatrices(X,ue),i=k.getFrustum(),v(R,S,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Oi&&y(k,S),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,b,C)};function y(A,R){const S=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ss(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,S,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,S,h,_,null)}function x(A,R,S,M){let b=null;const C=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)b=C;else if(b=S.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=b.uuid,O=R.uuid;let z=u[U];z===void 0&&(z={},u[U]=z);let $=z[O];$===void 0&&($=b.clone(),z[O]=$,R.addEventListener("dispose",T)),b=$}if(b.visible=R.visible,b.wireframe=R.wireframe,M===Oi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:f[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=n.properties.get(b);U.light=S}return b}function v(A,R,S,M,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Oi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const O=e.update(A),z=A.material;if(Array.isArray(z)){const $=O.groups;for(let F=0,X=$.length;F<X;F++){const k=$[F],fe=z[k.materialIndex];if(fe&&fe.visible){const de=x(A,fe,M,b);A.onBeforeShadow(n,A,R,S,O,de,k),n.renderBufferDirect(S,null,O,de,A,k),A.onAfterShadow(n,A,R,S,O,de,k)}}}else if(z.visible){const $=x(A,z,M,b);A.onBeforeShadow(n,A,R,S,O,$,null),n.renderBufferDirect(S,null,O,$,A,null),A.onAfterShadow(n,A,R,S,O,$,null)}}const U=A.children;for(let O=0,z=U.length;O<z;O++)v(U[O],R,S,M,b)}function T(A){A.target.removeEventListener("dispose",T);for(const S in u){const M=u[S],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const NP={[vf]:xf,[yf]:bf,[Sf]:Ef,[ro]:Mf,[xf]:vf,[bf]:yf,[Ef]:Sf,[Mf]:ro};function FP(n,e){function t(){let N=!1;const ie=new Lt;let ae=null;const Ee=new Lt(0,0,0,0);return{setMask:function(he){ae!==he&&!N&&(n.colorMask(he,he,he,he),ae=he)},setLocked:function(he){N=he},setClear:function(he,oe,Te,Ne,ut){ut===!0&&(he*=Ne,oe*=Ne,Te*=Ne),ie.set(he,oe,Te,Ne),Ee.equals(ie)===!1&&(n.clearColor(he,oe,Te,Ne),Ee.copy(ie))},reset:function(){N=!1,ae=null,Ee.set(-1,0,0,0)}}}function i(){let N=!1,ie=!1,ae=null,Ee=null,he=null;return{setReversed:function(oe){if(ie!==oe){const Te=e.get("EXT_clip_control");oe?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ie=oe;const Ne=he;he=null,this.setClear(Ne)}},getReversed:function(){return ie},setTest:function(oe){oe?Me(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(oe){ae!==oe&&!N&&(n.depthMask(oe),ae=oe)},setFunc:function(oe){if(ie&&(oe=NP[oe]),Ee!==oe){switch(oe){case vf:n.depthFunc(n.NEVER);break;case xf:n.depthFunc(n.ALWAYS);break;case yf:n.depthFunc(n.LESS);break;case ro:n.depthFunc(n.LEQUAL);break;case Sf:n.depthFunc(n.EQUAL);break;case Mf:n.depthFunc(n.GEQUAL);break;case bf:n.depthFunc(n.GREATER);break;case Ef:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=oe}},setLocked:function(oe){N=oe},setClear:function(oe){he!==oe&&(ie&&(oe=1-oe),n.clearDepth(oe),he=oe)},reset:function(){N=!1,ae=null,Ee=null,he=null,ie=!1}}}function r(){let N=!1,ie=null,ae=null,Ee=null,he=null,oe=null,Te=null,Ne=null,ut=null;return{setTest:function(lt){N||(lt?Me(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(lt){ie!==lt&&!N&&(n.stencilMask(lt),ie=lt)},setFunc:function(lt,pn,et){(ae!==lt||Ee!==pn||he!==et)&&(n.stencilFunc(lt,pn,et),ae=lt,Ee=pn,he=et)},setOp:function(lt,pn,et){(oe!==lt||Te!==pn||Ne!==et)&&(n.stencilOp(lt,pn,et),oe=lt,Te=pn,Ne=et)},setLocked:function(lt){N=lt},setClear:function(lt){ut!==lt&&(n.clearStencil(lt),ut=lt)},reset:function(){N=!1,ie=null,ae=null,Ee=null,he=null,oe=null,Te=null,Ne=null,ut=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,h=[],p=null,_=!1,g=null,m=null,y=null,x=null,v=null,T=null,A=null,R=new Qe(0,0,0),S=0,M=!1,b=null,C=null,U=null,O=null,z=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=X>=2);let fe=null,de={};const ue=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),qe=new Lt().fromArray(ue),re=new Lt().fromArray(Se);function me(N,ie,ae,Ee){const he=new Uint8Array(4),oe=n.createTexture();n.bindTexture(N,oe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<ae;Te++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ie+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return oe}const De={};De[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),o.setFunc(ro),ne(!1),ee(Hp),Me(n.CULL_FACE),w(cr);function Me(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function Ue(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Ze(N,ie){return f[N]!==ie?(n.bindFramebuffer(N,ie),f[N]=ie,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ie),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ie(N,ie){let ae=h,Ee=!1;if(N){ae=d.get(ie),ae===void 0&&(ae=[],d.set(ie,ae));const he=N.textures;if(ae.length!==he.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Te=he.length;oe<Te;oe++)ae[oe]=n.COLOR_ATTACHMENT0+oe;ae.length=he.length,Ee=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(ae)}function at(N){return p!==N?(n.useProgram(N),p=N,!0):!1}const rt={[Br]:n.FUNC_ADD,[qE]:n.FUNC_SUBTRACT,[jE]:n.FUNC_REVERSE_SUBTRACT};rt[$E]=n.MIN,rt[YE]=n.MAX;const D={[KE]:n.ZERO,[JE]:n.ONE,[ZE]:n.SRC_COLOR,[_f]:n.SRC_ALPHA,[rT]:n.SRC_ALPHA_SATURATE,[nT]:n.DST_COLOR,[eT]:n.DST_ALPHA,[QE]:n.ONE_MINUS_SRC_COLOR,[gf]:n.ONE_MINUS_SRC_ALPHA,[iT]:n.ONE_MINUS_DST_COLOR,[tT]:n.ONE_MINUS_DST_ALPHA,[sT]:n.CONSTANT_COLOR,[oT]:n.ONE_MINUS_CONSTANT_COLOR,[aT]:n.CONSTANT_ALPHA,[lT]:n.ONE_MINUS_CONSTANT_ALPHA};function w(N,ie,ae,Ee,he,oe,Te,Ne,ut,lt){if(N===cr){_===!0&&(Ue(n.BLEND),_=!1);return}if(_===!1&&(Me(n.BLEND),_=!0),N!==XE){if(N!==g||lt!==M){if((m!==Br||v!==Br)&&(n.blendEquation(n.FUNC_ADD),m=Br,v=Br),lt)switch(N){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vp:n.blendFunc(n.ONE,n.ONE);break;case Gp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,x=null,T=null,A=null,R.set(0,0,0),S=0,g=N,M=lt}return}he=he||ie,oe=oe||ae,Te=Te||Ee,(ie!==m||he!==v)&&(n.blendEquationSeparate(rt[ie],rt[he]),m=ie,v=he),(ae!==y||Ee!==x||oe!==T||Te!==A)&&(n.blendFuncSeparate(D[ae],D[Ee],D[oe],D[Te]),y=ae,x=Ee,T=oe,A=Te),(Ne.equals(R)===!1||ut!==S)&&(n.blendColor(Ne.r,Ne.g,Ne.b,ut),R.copy(Ne),S=ut),g=N,M=!1}function Y(N,ie){N.side===cn?Ue(n.CULL_FACE):Me(n.CULL_FACE);let ae=N.side===vn;ie&&(ae=!ae),ne(ae),N.blending===Ks&&N.transparent===!1?w(cr):w(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ee=N.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function ee(N){N!==VE?(Me(n.CULL_FACE),N!==C&&(N===Hp?n.cullFace(n.BACK):N===GE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),C=N}function q(N){N!==U&&(F&&n.lineWidth(N),U=N)}function ce(N,ie,ae){N?(Me(n.POLYGON_OFFSET_FILL),(O!==ie||z!==ae)&&(n.polygonOffset(ie,ae),O=ie,z=ae)):Ue(n.POLYGON_OFFSET_FILL)}function te(N){N?Me(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function se(N){N===void 0&&(N=n.TEXTURE0+$-1),fe!==N&&(n.activeTexture(N),fe=N)}function Q(N,ie,ae){ae===void 0&&(fe===null?ae=n.TEXTURE0+$-1:ae=fe);let Ee=de[ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},de[ae]=Ee),(Ee.type!==N||Ee.texture!==ie)&&(fe!==ae&&(n.activeTexture(ae),fe=ae),n.bindTexture(N,ie||De[N]),Ee.type=N,Ee.texture=ie)}function L(){const N=de[fe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){qe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function Be(N){re.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function Ce(N,ie){let ae=u.get(ie);ae===void 0&&(ae=new WeakMap,u.set(ie,ae));let Ee=ae.get(N);Ee===void 0&&(Ee=n.getUniformBlockIndex(ie,N.name),ae.set(N,Ee))}function ve(N,ie){const Ee=u.get(ie).get(N);l.get(ie)!==Ee&&(n.uniformBlockBinding(ie,Ee,N.__bindingPointIndex),l.set(ie,Ee))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},fe=null,de={},f={},d=new WeakMap,h=[],p=null,_=!1,g=null,m=null,y=null,x=null,v=null,T=null,A=null,R=new Qe(0,0,0),S=0,M=!1,b=null,C=null,U=null,O=null,z=null,qe.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Me,disable:Ue,bindFramebuffer:Ze,drawBuffers:Ie,useProgram:at,setBlending:w,setMaterial:Y,setFlipSided:ne,setCullFace:ee,setLineWidth:q,setPolygonOffset:ce,setScissorTest:te,activeTexture:se,bindTexture:Q,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:I,texImage2D:Re,texImage3D:le,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:ye,texSubImage2D:W,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:xe,scissor:be,viewport:Be,reset:ze}}function BP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Le,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return h?new OffscreenCanvas(L,E):Kl("canvas")}function _(L,E,I){let W=1;const J=Q(L);if((J.width>I||J.height>I)&&(W=I/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(W*J.width),xe=Math.floor(W*J.height);f===void 0&&(f=p(j,xe));const pe=E?p(j,xe):f;return pe.width=j,pe.height=xe,pe.getContext("2d").drawImage(L,0,0,j,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+xe+")."),pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(L,E,I,W,J=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=E;if(E===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),E===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),E===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),E===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RG8UI),I===n.UNSIGNED_SHORT&&(j=n.RG16UI),I===n.UNSIGNED_INT&&(j=n.RG32UI),I===n.BYTE&&(j=n.RG8I),I===n.SHORT&&(j=n.RG16I),I===n.INT&&(j=n.RG32I)),E===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGB8UI),I===n.UNSIGNED_SHORT&&(j=n.RGB16UI),I===n.UNSIGNED_INT&&(j=n.RGB32UI),I===n.BYTE&&(j=n.RGB8I),I===n.SHORT&&(j=n.RGB16I),I===n.INT&&(j=n.RGB32I)),E===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),I===n.UNSIGNED_INT&&(j=n.RGBA32UI),I===n.BYTE&&(j=n.RGBA8I),I===n.SHORT&&(j=n.RGBA16I),I===n.INT&&(j=n.RGBA32I)),E===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),E===n.RGBA){const xe=J?$l:ot.getTransfer(W);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=xe===mt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(L,E){let I;return L?E===null||E===rs||E===la?I=n.DEPTH24_STENCIL8:E===yi?I=n.DEPTH32F_STENCIL8:E===aa&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rs||E===la?I=n.DEPTH_COMPONENT24:E===yi?I=n.DEPTH_COMPONENT32F:E===aa&&(I=n.DEPTH_COMPONENT16),I}function T(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Un&&L.minFilter!==xi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function A(L){const E=L.target;E.removeEventListener("dispose",A),S(E),E.isVideoTexture&&c.delete(E)}function R(L){const E=L.target;E.removeEventListener("dispose",R),b(E)}function S(L){const E=i.get(L);if(E.__webglInit===void 0)return;const I=L.source,W=d.get(I);if(W){const J=W[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(L),Object.keys(W).length===0&&d.delete(I)}i.remove(L)}function M(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const I=L.source,W=d.get(I);delete W[E.__cacheKey],o.memory.textures--}function b(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let J=0;J<E.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(E.__webglFramebuffer[W][J]);else n.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)n.deleteFramebuffer(E.__webglFramebuffer[W]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const I=L.textures;for(let W=0,J=I.length;W<J;W++){const j=i.get(I[W]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[W])}i.remove(L)}let C=0;function U(){C=0}function O(){const L=C;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),C+=1,L}function z(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){const I=i.get(L);if(L.isVideoTexture&&te(L),L.isRenderTargetTexture===!1&&L.version>0&&I.__version!==L.version){const W=L.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(I,L,E);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+E)}function F(L,E){const I=i.get(L);if(L.version>0&&I.__version!==L.version){De(I,L,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+E)}function X(L,E){const I=i.get(L);if(L.version>0&&I.__version!==L.version){De(I,L,E);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+E)}function k(L,E){const I=i.get(L);if(L.version>0&&I.__version!==L.version){Me(I,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+E)}const fe={[Af]:n.REPEAT,[Vr]:n.CLAMP_TO_EDGE,[Rf]:n.MIRRORED_REPEAT},de={[Un]:n.NEAREST,[gT]:n.NEAREST_MIPMAP_NEAREST,[Wa]:n.NEAREST_MIPMAP_LINEAR,[xi]:n.LINEAR,[Qc]:n.LINEAR_MIPMAP_NEAREST,[Gr]:n.LINEAR_MIPMAP_LINEAR},ue={[ST]:n.NEVER,[AT]:n.ALWAYS,[MT]:n.LESS,[b0]:n.LEQUAL,[bT]:n.EQUAL,[wT]:n.GEQUAL,[ET]:n.GREATER,[TT]:n.NOTEQUAL};function Se(L,E){if(E.type===yi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xi||E.magFilter===Qc||E.magFilter===Wa||E.magFilter===Gr||E.minFilter===xi||E.minFilter===Qc||E.minFilter===Wa||E.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,fe[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,fe[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,fe[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,de[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,de[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Wa&&E.minFilter!==Gr||E.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function qe(L,E){let I=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",A));const W=E.source;let J=d.get(W);J===void 0&&(J={},d.set(W,J));const j=z(E);if(j!==L.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),J[j].usedTimes++;const xe=J[L.__cacheKey];xe!==void 0&&(J[L.__cacheKey].usedTimes--,xe.usedTimes===0&&M(E)),L.__cacheKey=j,L.__webglTexture=J[j].texture}return I}function re(L,E,I){return Math.floor(Math.floor(L/I)/E)}function me(L,E,I,W){const j=L.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,I,W,E.data);else{j.sort((le,be)=>le.start-be.start);let xe=0;for(let le=1;le<j.length;le++){const be=j[xe],Be=j[le],Ce=be.start+be.count,ve=re(Be.start,E.width,4),ze=re(be.start,E.width,4);Be.start<=Ce+1&&ve===ze&&re(Be.start+Be.count-1,E.width,4)===ve?be.count=Math.max(be.count,Be.start+Be.count-be.start):(++xe,j[xe]=Be)}j.length=xe+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let le=0,be=j.length;le<be;le++){const Be=j[le],Ce=Math.floor(Be.start/4),ve=Math.ceil(Be.count/4),ze=Ce%E.width,N=Math.floor(Ce/E.width),ie=ve,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,ze,N,ie,ae,I,W,E.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function De(L,E,I){let W=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=n.TEXTURE_3D);const J=qe(L,E),j=E.source;t.bindTexture(W,L.__webglTexture,n.TEXTURE0+I);const xe=i.get(j);if(j.version!==xe.__version||J===!0){t.activeTexture(n.TEXTURE0+I);const pe=ot.getPrimaries(ot.workingColorSpace),ye=E.colorSpace===rr?null:ot.getPrimaries(E.colorSpace),Re=E.colorSpace===rr||pe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let le=_(E.image,!1,r.maxTextureSize);le=se(E,le);const be=s.convert(E.format,E.colorSpace),Be=s.convert(E.type);let Ce=x(E.internalFormat,be,Be,E.colorSpace,E.isVideoTexture);Se(W,E);let ve;const ze=E.mipmaps,N=E.isVideoTexture!==!0,ie=xe.__version===void 0||J===!0,ae=j.dataReady,Ee=T(E,le);if(E.isDepthTexture)Ce=v(E.format===ua,E.type),ie&&(N?t.texStorage2D(n.TEXTURE_2D,1,Ce,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ce,le.width,le.height,0,be,Be,null));else if(E.isDataTexture)if(ze.length>0){N&&ie&&t.texStorage2D(n.TEXTURE_2D,Ee,Ce,ze[0].width,ze[0].height);for(let he=0,oe=ze.length;he<oe;he++)ve=ze[he],N?ae&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,be,Be,ve.data):t.texImage2D(n.TEXTURE_2D,he,Ce,ve.width,ve.height,0,be,Be,ve.data);E.generateMipmaps=!1}else N?(ie&&t.texStorage2D(n.TEXTURE_2D,Ee,Ce,le.width,le.height),ae&&me(E,le,be,Be)):t.texImage2D(n.TEXTURE_2D,0,Ce,le.width,le.height,0,be,Be,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ce,ze[0].width,ze[0].height,le.depth);for(let he=0,oe=ze.length;he<oe;he++)if(ve=ze[he],E.format!==ii)if(be!==null)if(N){if(ae)if(E.layerUpdates.size>0){const Te=Am(ve.width,ve.height,E.format,E.type);for(const Ne of E.layerUpdates){const ut=ve.data.subarray(Ne*Te/ve.data.BYTES_PER_ELEMENT,(Ne+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ne,ve.width,ve.height,1,be,ut)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,le.depth,be,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ce,ve.width,ve.height,le.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,le.depth,be,Be,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ce,ve.width,ve.height,le.depth,0,be,Be,ve.data)}else{N&&ie&&t.texStorage2D(n.TEXTURE_2D,Ee,Ce,ze[0].width,ze[0].height);for(let he=0,oe=ze.length;he<oe;he++)ve=ze[he],E.format!==ii?be!==null?N?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,be,Be,ve.data):t.texImage2D(n.TEXTURE_2D,he,Ce,ve.width,ve.height,0,be,Be,ve.data)}else if(E.isDataArrayTexture)if(N){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ce,le.width,le.height,le.depth),ae)if(E.layerUpdates.size>0){const he=Am(le.width,le.height,E.format,E.type);for(const oe of E.layerUpdates){const Te=le.data.subarray(oe*he/le.data.BYTES_PER_ELEMENT,(oe+1)*he/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,be,Be,Te)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,Be,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,be,Be,le.data);else if(E.isData3DTexture)N?(ie&&t.texStorage3D(n.TEXTURE_3D,Ee,Ce,le.width,le.height,le.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,Be,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,be,Be,le.data);else if(E.isFramebufferTexture){if(ie)if(N)t.texStorage2D(n.TEXTURE_2D,Ee,Ce,le.width,le.height);else{let he=le.width,oe=le.height;for(let Te=0;Te<Ee;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ce,he,oe,0,be,Be,null),he>>=1,oe>>=1}}else if(ze.length>0){if(N&&ie){const he=Q(ze[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ce,he.width,he.height)}for(let he=0,oe=ze.length;he<oe;he++)ve=ze[he],N?ae&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,be,Be,ve):t.texImage2D(n.TEXTURE_2D,he,Ce,be,Be,ve);E.generateMipmaps=!1}else if(N){if(ie){const he=Q(le);t.texStorage2D(n.TEXTURE_2D,Ee,Ce,he.width,he.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Be,le)}else t.texImage2D(n.TEXTURE_2D,0,Ce,be,Be,le);g(E)&&m(W),xe.__version=j.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Me(L,E,I){if(E.image.length!==6)return;const W=qe(L,E),J=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+I);const j=i.get(J);if(J.version!==j.__version||W===!0){t.activeTexture(n.TEXTURE0+I);const xe=ot.getPrimaries(ot.workingColorSpace),pe=E.colorSpace===rr?null:ot.getPrimaries(E.colorSpace),ye=E.colorSpace===rr||xe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!Re&&!le?be[oe]=_(E.image[oe],!0,r.maxCubemapSize):be[oe]=le?E.image[oe].image:E.image[oe],be[oe]=se(E,be[oe]);const Be=be[0],Ce=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),ze=x(E.internalFormat,Ce,ve,E.colorSpace),N=E.isVideoTexture!==!0,ie=j.__version===void 0||W===!0,ae=J.dataReady;let Ee=T(E,Be);Se(n.TEXTURE_CUBE_MAP,E);let he;if(Re){N&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ze,Be.width,Be.height);for(let oe=0;oe<6;oe++){he=be[oe].mipmaps;for(let Te=0;Te<he.length;Te++){const Ne=he[Te];E.format!==ii?Ce!==null?N?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Ne.width,Ne.height,Ce,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,ze,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Ne.width,Ne.height,Ce,ve,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,ze,Ne.width,Ne.height,0,Ce,ve,Ne.data)}}}else{if(he=E.mipmaps,N&&ie){he.length>0&&Ee++;const oe=Q(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ze,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){N?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,Ce,ve,be[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ze,be[oe].width,be[oe].height,0,Ce,ve,be[oe].data);for(let Te=0;Te<he.length;Te++){const ut=he[Te].image[oe].image;N?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,ut.width,ut.height,Ce,ve,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,ze,ut.width,ut.height,0,Ce,ve,ut.data)}}else{N?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ce,ve,be[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ze,Ce,ve,be[oe]);for(let Te=0;Te<he.length;Te++){const Ne=he[Te];N?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,Ce,ve,Ne.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,ze,Ce,ve,Ne.image[oe])}}}g(E)&&m(n.TEXTURE_CUBE_MAP),j.__version=J.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ue(L,E,I,W,J,j){const xe=s.convert(I.format,I.colorSpace),pe=s.convert(I.type),ye=x(I.internalFormat,xe,pe,I.colorSpace),Re=i.get(E),le=i.get(I);if(le.__renderTarget=E,!Re.__hasExternalTextures){const be=Math.max(1,E.width>>j),Be=Math.max(1,E.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,j,ye,be,Be,E.depth,0,xe,pe,null):t.texImage2D(J,j,ye,be,Be,0,xe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,le.__webglTexture,0,q(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,le.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(L,E,I){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const W=E.depthTexture,J=W&&W.isDepthTexture?W.type:null,j=v(E.stencilBuffer,J),xe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=q(E);ce(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,j,E.width,E.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,j,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,j,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,L)}else{const W=E.textures;for(let J=0;J<W.length;J++){const j=W[J],xe=s.convert(j.format,j.colorSpace),pe=s.convert(j.type),ye=x(j.internalFormat,xe,pe,j.colorSpace),Re=q(E);I&&ce(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ye,E.width,E.height):ce(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ye,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ye,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(E.depthTexture);W.__renderTarget=E,(!W.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const J=W.__webglTexture,j=q(E);if(E.depthTexture.format===ca)ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===ua)ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function at(L){const E=i.get(L),I=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const W=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=W}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const W=L.texture.mipmaps;W&&W.length>0?Ie(E.__webglFramebuffer[0],L):Ie(E.__webglFramebuffer,L)}else if(I){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=n.createRenderbuffer(),Ze(E.__webglDepthbuffer[W],L,!1);else{const J=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}else{const W=L.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ze(E.__webglDepthbuffer,L,!1);else{const J=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(L,E,I){const W=i.get(L);E!==void 0&&Ue(W.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&at(L)}function D(L){const E=L.texture,I=i.get(L),W=i.get(E);L.addEventListener("dispose",R);const J=L.textures,j=L.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=E.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)I.__webglFramebuffer[pe][ye]=n.createFramebuffer()}else I.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)I.__webglFramebuffer[pe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(xe)for(let pe=0,ye=J.length;pe<ye;pe++){const Re=i.get(J[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&ce(L)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<J.length;pe++){const ye=J[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Re=s.convert(ye.format,ye.colorSpace),le=s.convert(ye.type),be=x(ye.internalFormat,Re,le,ye.colorSpace,L.isXRRenderTarget===!0),Be=q(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,be,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(I.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Se(n.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Ue(I.__webglFramebuffer[pe][ye],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else Ue(I.__webglFramebuffer[pe],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(E)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let pe=0,ye=J.length;pe<ye;pe++){const Re=J[pe],le=i.get(Re);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Se(n.TEXTURE_2D,Re),Ue(I.__webglFramebuffer,L,Re,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),g(Re)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,W.__webglTexture),Se(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Ue(I.__webglFramebuffer[ye],L,E,n.COLOR_ATTACHMENT0,pe,ye);else Ue(I.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,pe,0);g(E)&&m(pe),t.unbindTexture()}L.depthBuffer&&at(L)}function w(L){const E=L.textures;for(let I=0,W=E.length;I<W;I++){const J=E[I];if(g(J)){const j=y(L),xe=i.get(J).__webglTexture;t.bindTexture(j,xe),m(j),t.unbindTexture()}}}const Y=[],ne=[];function ee(L){if(L.samples>0){if(ce(L)===!1){const E=L.textures,I=L.width,W=L.height;let J=n.COLOR_BUFFER_BIT;const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(L),pe=E.length>1;if(pe)for(let Re=0;Re<E.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ye=L.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);const le=i.get(E[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,I,W,0,0,I,W,J,n.NEAREST),l===!0&&(Y.length=0,ne.length=0,Y.push(n.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Y.push(j),ne.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<E.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);const le=i.get(E[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function q(L){return Math.min(r.maxSamples,L.samples)}function ce(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function te(L){const E=o.render.frame;c.get(L)!==E&&(c.set(L,E),L.update())}function se(L,E){const I=L.colorSpace,W=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||I!==ao&&I!==rr&&(ot.getTransfer(I)===mt?(W!==ii||J!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),E}function Q(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=rt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ce}function kP(n,e){function t(i,r=rr){let s;const o=ot.getTransfer(r);if(i===bi)return n.UNSIGNED_BYTE;if(i===id)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===g0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===m0)return n.BYTE;if(i===_0)return n.SHORT;if(i===aa)return n.UNSIGNED_SHORT;if(i===nd)return n.INT;if(i===rs)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===Ra)return n.HALF_FLOAT;if(i===v0)return n.ALPHA;if(i===x0)return n.RGB;if(i===ii)return n.RGBA;if(i===ca)return n.DEPTH_COMPONENT;if(i===ua)return n.DEPTH_STENCIL;if(i===sd)return n.RED;if(i===od)return n.RED_INTEGER;if(i===y0)return n.RG;if(i===ad)return n.RG_INTEGER;if(i===ld)return n.RGBA_INTEGER;if(i===Ml||i===bl||i===El||i===Tl)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cf||i===Pf||i===Lf||i===Df)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===If||i===Uf||i===Of)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===If||i===Uf)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Of)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nf||i===Ff||i===Bf||i===kf||i===zf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===qf||i===jf||i===$f||i===Yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ff)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$f)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===Kf||i===Jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wl)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===S0||i===Zf||i===Qf||i===eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===la?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HP=`
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

}`;class VP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new fn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:zP,fragmentShader:HP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GP extends xo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,p=null;const _=new VP,g=t.getContextAttributes();let m=null,y=null;const x=[],v=[],T=new Le;let A=null;const R=new qn;R.viewport=new Lt;const S=new qn;S.viewport=new Lt;const M=[R,S],b=new c1;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=x[re];return me===void 0&&(me=new yu,x[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=x[re];return me===void 0&&(me=new yu,x[re]=me),me.getGripSpace()},this.getHand=function(re){let me=x[re];return me===void 0&&(me=new yu,x[re]=me),me.getHandSpace()};function O(re){const me=v.indexOf(re.inputSource);if(me===-1)return;const De=x[me];De!==void 0&&(De.update(re.inputSource,re.frame,u||o),De.dispatchEvent({type:re.type,data:re.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",$);for(let re=0;re<x.length;re++){const me=v[re];me!==null&&(v[re]=null,x[re].disconnect(me))}C=null,U=null,_.reset(),e.setRenderTarget(m),h=null,d=null,f=null,r=null,y=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(re){u=re},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Me=null,Ue=null;g.depth&&(Ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=g.stencil?ua:ca,Me=g.stencil?la:rs);const Ze={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ss(d.textureWidth,d.textureHeight,{format:ii,type:bi,depthTexture:new I0(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const De={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,De),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new ss(h.framebufferWidth,h.framebufferHeight,{format:ii,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(re){for(let me=0;me<re.removed.length;me++){const De=re.removed[me],Me=v.indexOf(De);Me>=0&&(v[Me]=null,x[Me].disconnect(De))}for(let me=0;me<re.added.length;me++){const De=re.added[me];let Me=v.indexOf(De);if(Me===-1){for(let Ze=0;Ze<x.length;Ze++)if(Ze>=v.length){v.push(De),Me=Ze;break}else if(v[Ze]===null){v[Ze]=De,Me=Ze;break}if(Me===-1)break}const Ue=x[Me];Ue&&Ue.connect(De)}}const F=new B,X=new B;function k(re,me,De){F.setFromMatrixPosition(me.matrixWorld),X.setFromMatrixPosition(De.matrixWorld);const Me=F.distanceTo(X),Ue=me.projectionMatrix.elements,Ze=De.projectionMatrix.elements,Ie=Ue[14]/(Ue[10]-1),at=Ue[14]/(Ue[10]+1),rt=(Ue[9]+1)/Ue[5],D=(Ue[9]-1)/Ue[5],w=(Ue[8]-1)/Ue[0],Y=(Ze[8]+1)/Ze[0],ne=Ie*w,ee=Ie*Y,q=Me/(-w+Y),ce=q*-w;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ce),re.translateZ(q),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ue[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const te=Ie+q,se=at+q,Q=ne-ce,L=ee+(Me-ce),E=rt*at/se*te,I=D*at/se*te;re.projectionMatrix.makePerspective(Q,L,E,I,te,se),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function fe(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let me=re.near,De=re.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(De=_.depthFar)),b.near=S.near=R.near=me,b.far=S.far=R.far=De,(C!==b.near||U!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,U=b.far),R.layers.mask=re.layers.mask|2,S.layers.mask=re.layers.mask|4,b.layers.mask=R.layers.mask|S.layers.mask;const Me=re.parent,Ue=b.cameras;fe(b,Me);for(let Ze=0;Ze<Ue.length;Ze++)fe(Ue[Ze],Me);Ue.length===2?k(b,R,S):b.projectionMatrix.copy(R.projectionMatrix),de(re,b,Me)};function de(re,me,De){De===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(De.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=fa*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ue=null;function Se(re,me){if(c=me.getViewerPose(u||o),p=me,c!==null){const De=c.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Me=!1;De.length!==b.cameras.length&&(b.cameras.length=0,Me=!0);for(let Ie=0;Ie<De.length;Ie++){const at=De[Ie];let rt=null;if(h!==null)rt=h.getViewport(at);else{const w=f.getViewSubImage(d,at);rt=w.viewport,Ie===0&&(e.setRenderTargetTextures(y,w.colorTexture,w.depthStencilTexture),e.setRenderTarget(y))}let D=M[Ie];D===void 0&&(D=new qn,D.layers.enable(Ie),D.viewport=new Lt,M[Ie]=D),D.matrix.fromArray(at.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(at.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(rt.x,rt.y,rt.width,rt.height),Ie===0&&(b.matrix.copy(D.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Me===!0&&b.cameras.push(D)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ie=f.getDepthInformation(De[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,r.renderState)}}for(let De=0;De<x.length;De++){const Me=v[De],Ue=x[De];Me!==null&&Ue!==void 0&&Ue.update(Me,me,u||o)}ue&&ue(re,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),p=null}const qe=new X0;qe.setAnimationLoop(Se),this.setAnimationLoop=function(re){ue=re},this.dispose=function(){}}}const Pr=new Ei,WP=new _t;function XP(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,C0(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),c(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,x):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===vn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===vn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,v=y.envMapRotation;x&&(g.envMap.value=x,Pr.copy(v),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.envMapRotation.value.setFromMatrix4(WP.makeRotationFromEuler(Pr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qP(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function u(y,x){let v=r[y.id];v===void 0&&(p(y),v=c(y),r[y.id]=v,y.addEventListener("dispose",g));const T=x.program;i.updateUBOMapping(y,T);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function c(y){const x=f();y.__bindingPointIndex=x;const v=n.createBuffer(),T=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],v=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,R=v.length;A<R;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,b=S.length;M<b;M++){const C=S[M];if(h(C,A,M,T)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let $=0;$<O.length;$++){const F=O[$],X=_(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,U+z,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,z),z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,x,v,T){const A=y.value,R=x+"_"+v;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const S=T[R];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return T[R]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function p(y){const x=y.uniforms;let v=0;const T=16;for(let R=0,S=x.length;R<S;R++){const M=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,C=M.length;b<C;b++){const U=M[b],O=Array.isArray(U.value)?U.value:[U.value];for(let z=0,$=O.length;z<$;z++){const F=O[z],X=_(F),k=v%T,fe=k%X.boundary,de=k+fe;v+=fe,de!==0&&T-de<X.storage&&(v+=T-de),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=X.storage}}}const A=v%T;return A>0&&(v+=T-A),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}class jP{constructor(e={}){const{canvas:t=XT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Xn;let A=0,R=0,S=null,M=-1,b=null;const C=new Lt,U=new Lt;let O=null;const z=new Qe(0);let $=0,F=t.width,X=t.height,k=1,fe=null,de=null;const ue=new Lt(0,0,F,X),Se=new Lt(0,0,F,X);let qe=!1;const re=new md;let me=!1,De=!1;const Me=new _t,Ue=new _t,Ze=new B,Ie=new Lt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function D(){return S===null?k:1}let w=i;function Y(P,V){return t.getContext(P,V)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${td}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",oe,!1),w===null){const V="webgl2";if(w=Y(V,P),w===null)throw Y(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ne,ee,q,ce,te,se,Q,L,E,I,W,J,j,xe,pe,ye,Re,le,be,Be,Ce,ve,ze,N;function ie(){ne=new iC(w),ne.init(),ve=new kP(w,ne),ee=new KR(w,ne,e,ve),q=new FP(w,ne),ee.reverseDepthBuffer&&d&&q.buffers.depth.setReversed(!0),ce=new oC(w),te=new EP,se=new BP(w,ne,q,te,ee,ve,ce),Q=new ZR(v),L=new nC(v),E=new h1(w),ze=new $R(w,E),I=new rC(w,E,ce,ze),W=new lC(w,I,E,ce),be=new aC(w,ee,se),ye=new JR(te),J=new bP(v,Q,L,ne,ee,ze,ye),j=new XP(v,te),xe=new wP,pe=new DP(ne),le=new jR(v,Q,L,q,W,h,l),Re=new OP(v,W,ee),N=new qP(w,ce,ee,q),Be=new YR(w,ne,ce),Ce=new sC(w,ne,ce),ce.programs=J.programs,v.capabilities=ee,v.extensions=ne,v.properties=te,v.renderLists=xe,v.shadowMap=Re,v.state=q,v.info=ce}ie();const ae=new GP(v,w);this.xr=ae,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const P=ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(F,X,!1))},this.getSize=function(P){return P.set(F,X)},this.setSize=function(P,V,K=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,X=V,t.width=Math.floor(P*k),t.height=Math.floor(V*k),K===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(F*k,X*k).floor()},this.setDrawingBufferSize=function(P,V,K){F=P,X=V,k=K,t.width=Math.floor(P*K),t.height=Math.floor(V*K),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(ue)},this.setViewport=function(P,V,K,Z){P.isVector4?ue.set(P.x,P.y,P.z,P.w):ue.set(P,V,K,Z),q.viewport(C.copy(ue).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(Se)},this.setScissor=function(P,V,K,Z){P.isVector4?Se.set(P.x,P.y,P.z,P.w):Se.set(P,V,K,Z),q.scissor(U.copy(Se).multiplyScalar(k).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(P){q.setScissorTest(qe=P)},this.setOpaqueSort=function(P){fe=P},this.setTransparentSort=function(P){de=P},this.getClearColor=function(P){return P.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(P=!0,V=!0,K=!0){let Z=0;if(P){let G=!1;if(S!==null){const _e=S.texture.format;G=_e===ld||_e===ad||_e===od}if(G){const _e=S.texture.type,Ae=_e===bi||_e===rs||_e===aa||_e===la||_e===id||_e===rd,Oe=le.getClearColor(),Pe=le.getClearAlpha(),Ge=Oe.r,We=Oe.g,Fe=Oe.b;Ae?(p[0]=Ge,p[1]=We,p[2]=Fe,p[3]=Pe,w.clearBufferuiv(w.COLOR,0,p)):(_[0]=Ge,_[1]=We,_[2]=Fe,_[3]=Pe,w.clearBufferiv(w.COLOR,0,_))}else Z|=w.COLOR_BUFFER_BIT}V&&(Z|=w.DEPTH_BUFFER_BIT),K&&(Z|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),le.dispose(),xe.dispose(),pe.dispose(),te.dispose(),Q.dispose(),L.dispose(),W.dispose(),ze.dispose(),N.dispose(),J.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",fs),ae.removeEventListener("sessionend",kn),ai.stop()};function Ee(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=ce.autoReset,V=Re.enabled,K=Re.autoUpdate,Z=Re.needsUpdate,G=Re.type;ie(),ce.autoReset=P,Re.enabled=V,Re.autoUpdate=K,Re.needsUpdate=Z,Re.type=G}function oe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Te(P){const V=P.target;V.removeEventListener("dispose",Te),Ne(V)}function Ne(P){ut(P),te.remove(P)}function ut(P){const V=te.get(P).programs;V!==void 0&&(V.forEach(function(K){J.releaseProgram(K)}),P.isShaderMaterial&&J.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,K,Z,G,_e){V===null&&(V=at);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Oe=$v(P,V,K,Z,G);q.setMaterial(Z,Ae);let Pe=K.index,Ge=1;if(Z.wireframe===!0){if(Pe=I.getWireframeAttribute(K),Pe===void 0)return;Ge=2}const We=K.drawRange,Fe=K.attributes.position;let tt=We.start*Ge,pt=(We.start+We.count)*Ge;_e!==null&&(tt=Math.max(tt,_e.start*Ge),pt=Math.min(pt,(_e.start+_e.count)*Ge)),Pe!==null?(tt=Math.max(tt,0),pt=Math.min(pt,Pe.count)):Fe!=null&&(tt=Math.max(tt,0),pt=Math.min(pt,Fe.count));const Tt=pt-tt;if(Tt<0||Tt===1/0)return;ze.setup(G,Z,Oe,K,Pe);let Pt,st=Be;if(Pe!==null&&(Pt=E.get(Pe),st=Ce,st.setIndex(Pt)),G.isMesh)Z.wireframe===!0?(q.setLineWidth(Z.wireframeLinewidth*D()),st.setMode(w.LINES)):st.setMode(w.TRIANGLES);else if(G.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),q.setLineWidth(ke*D()),G.isLineSegments?st.setMode(w.LINES):G.isLineLoop?st.setMode(w.LINE_LOOP):st.setMode(w.LINE_STRIP)}else G.isPoints?st.setMode(w.POINTS):G.isSprite&&st.setMode(w.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ke=G._multiDrawStarts,qt=G._multiDrawCounts,ft=G._multiDrawCount,Zn=Pe?E.get(Pe).bytesPerElement:1,ps=te.get(Z).currentProgram.getUniforms();for(let En=0;En<ft;En++)ps.setValue(w,"_gl_DrawID",En),st.render(ke[En]/Zn,qt[En])}else if(G.isInstancedMesh)st.renderInstances(tt,Tt,G.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,qt=Math.min(K.instanceCount,ke);st.renderInstances(tt,Tt,qt)}else st.render(tt,Tt)};function lt(P,V,K){P.transparent===!0&&P.side===cn&&P.forceSinglePass===!1?(P.side=vn,P.needsUpdate=!0,Da(P,V,K),P.side=mr,P.needsUpdate=!0,Da(P,V,K),P.side=cn):Da(P,V,K)}this.compile=function(P,V,K=null){K===null&&(K=P),m=pe.get(K),m.init(V),x.push(m),K.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),P!==K&&P.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Z=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Oe=_e[Ae];lt(Oe,K,G),Z.add(Oe)}else lt(_e,K,G),Z.add(_e)}),m=x.pop(),Z},this.compileAsync=function(P,V,K=null){const Z=this.compile(P,V,K);return new Promise(G=>{function _e(){if(Z.forEach(function(Ae){te.get(Ae).currentProgram.isReady()&&Z.delete(Ae)}),Z.size===0){G(P);return}setTimeout(_e,10)}ne.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let pn=null;function et(P){pn&&pn(P)}function fs(){ai.stop()}function kn(){ai.start()}const ai=new X0;ai.setAnimationLoop(et),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(P){pn=P,ae.setAnimationLoop(P),P===null?ai.stop():ai.start()},ae.addEventListener("sessionstart",fs),ae.addEventListener("sessionend",kn),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(V),V=ae.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,V,S),m=pe.get(P,x.length),m.init(V),x.push(m),Ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(Ue),De=this.localClippingEnabled,me=ye.init(this.clippingPlanes,De),g=xe.get(P,y.length),g.init(),y.push(g),ae.enabled===!0&&ae.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&hs(_e,V,-1/0,v.sortObjects)}hs(P,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(fe,de),rt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,rt&&le.addToRenderList(g,P),this.info.render.frame++,me===!0&&ye.beginShadows();const K=m.state.shadowsArray;Re.render(K,P,V),me===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,G=g.transmissive;if(m.setupLights(),V.isArrayCamera){const _e=V.cameras;if(G.length>0)for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++){const Pe=_e[Ae];Sr(Z,G,P,Pe)}rt&&le.render(P);for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++){const Pe=_e[Ae];bo(g,P,Pe,Pe.viewport)}}else G.length>0&&Sr(Z,G,P,V),rt&&le.render(P),bo(g,P,V);S!==null&&R===0&&(se.updateMultisampleRenderTarget(S),se.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(v,P,V),ze.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],me===!0&&ye.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function hs(P,V,K,Z){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||re.intersectsSprite(P)){Z&&Ie.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ue);const Ae=W.update(P),Oe=P.material;Oe.visible&&g.push(P,Ae,Oe,K,Ie.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||re.intersectsObject(P))){const Ae=W.update(P),Oe=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ie.copy(P.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ie.copy(Ae.boundingSphere.center)),Ie.applyMatrix4(P.matrixWorld).applyMatrix4(Ue)),Array.isArray(Oe)){const Pe=Ae.groups;for(let Ge=0,We=Pe.length;Ge<We;Ge++){const Fe=Pe[Ge],tt=Oe[Fe.materialIndex];tt&&tt.visible&&g.push(P,Ae,tt,K,Ie.z,Fe)}}else Oe.visible&&g.push(P,Ae,Oe,K,Ie.z,null)}}const _e=P.children;for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++)hs(_e[Ae],V,K,Z)}function bo(P,V,K,Z){const G=P.opaque,_e=P.transmissive,Ae=P.transparent;m.setupLightsView(K),me===!0&&ye.setGlobalState(v.clippingPlanes,K),Z&&q.viewport(C.copy(Z)),G.length>0&&ds(G,V,K),_e.length>0&&ds(_e,V,K),Ae.length>0&&ds(Ae,V,K),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Sr(P,V,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new ss(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Ra:bi,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const _e=m.state.transmissionRenderTarget[Z.id],Ae=Z.viewport||C;_e.setSize(Ae.z*v.transmissionResolutionScale,Ae.w*v.transmissionResolutionScale);const Oe=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(z),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),rt&&le.render(K);const Pe=v.toneMapping;v.toneMapping=ur;const Ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),me===!0&&ye.setGlobalState(v.clippingPlanes,Z),ds(P,K,Z),se.updateMultisampleRenderTarget(_e),se.updateRenderTargetMipmap(_e),ne.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Fe=0,tt=V.length;Fe<tt;Fe++){const pt=V[Fe],Tt=pt.object,Pt=pt.geometry,st=pt.material,ke=pt.group;if(st.side===cn&&Tt.layers.test(Z.layers)){const qt=st.side;st.side=vn,st.needsUpdate=!0,Hd(Tt,K,Z,Pt,st,ke),st.side=qt,st.needsUpdate=!0,We=!0}}We===!0&&(se.updateMultisampleRenderTarget(_e),se.updateRenderTargetMipmap(_e))}v.setRenderTarget(Oe),v.setClearColor(z,$),Ge!==void 0&&(Z.viewport=Ge),v.toneMapping=Pe}function ds(P,V,K){const Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,_e=P.length;G<_e;G++){const Ae=P[G],Oe=Ae.object,Pe=Ae.geometry,Ge=Ae.group;let We=Ae.material;We.allowOverride===!0&&Z!==null&&(We=Z),Oe.layers.test(K.layers)&&Hd(Oe,V,K,Pe,We,Ge)}}function Hd(P,V,K,Z,G,_e){P.onBeforeRender(v,V,K,Z,G,_e),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(v,V,K,Z,P,_e),G.transparent===!0&&G.side===cn&&G.forceSinglePass===!1?(G.side=vn,G.needsUpdate=!0,v.renderBufferDirect(K,V,Z,G,P,_e),G.side=mr,G.needsUpdate=!0,v.renderBufferDirect(K,V,Z,G,P,_e),G.side=cn):v.renderBufferDirect(K,V,Z,G,P,_e),P.onAfterRender(v,V,K,Z,G,_e)}function Da(P,V,K){V.isScene!==!0&&(V=at);const Z=te.get(P),G=m.state.lights,_e=m.state.shadowsArray,Ae=G.state.version,Oe=J.getParameters(P,G.state,_e,V,K),Pe=J.getProgramCacheKey(Oe);let Ge=Z.programs;Z.environment=P.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(P.isMeshStandardMaterial?L:Q).get(P.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Ge===void 0&&(P.addEventListener("dispose",Te),Ge=new Map,Z.programs=Ge);let We=Ge.get(Pe);if(We!==void 0){if(Z.currentProgram===We&&Z.lightsStateVersion===Ae)return Gd(P,Oe),We}else Oe.uniforms=J.getUniforms(P),P.onBeforeCompile(Oe,v),We=J.acquireProgram(Oe,Pe),Ge.set(Pe,We),Z.uniforms=Oe.uniforms;const Fe=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Fe.clippingPlanes=ye.uniform),Gd(P,Oe),Z.needsLights=Kv(P),Z.lightsStateVersion=Ae,Z.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=We,Z.uniformsList=null,We}function Vd(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Al.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function Gd(P,V){const K=te.get(P);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function $v(P,V,K,Z,G){V.isScene!==!0&&(V=at),se.resetTextureUnits();const _e=V.fog,Ae=Z.isMeshStandardMaterial?V.environment:null,Oe=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ao,Pe=(Z.isMeshStandardMaterial?L:Q).get(Z.envMap||Ae),Ge=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Fe=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,pt=!!K.morphAttributes.color;let Tt=ur;Z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const Pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,st=Pt!==void 0?Pt.length:0,ke=te.get(Z),qt=m.state.lights;if(me===!0&&(De===!0||P!==b)){const nn=P===b&&Z.id===M;ye.setState(Z,P,nn)}let ft=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==qt.state.version||ke.outputColorSpace!==Oe||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Pe||Z.fog===!0&&ke.fog!==_e||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ye.numPlanes||ke.numIntersection!==ye.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==We||ke.morphTargets!==Fe||ke.morphNormals!==tt||ke.morphColors!==pt||ke.toneMapping!==Tt||ke.morphTargetsCount!==st)&&(ft=!0):(ft=!0,ke.__version=Z.version);let Zn=ke.currentProgram;ft===!0&&(Zn=Da(Z,V,G));let ps=!1,En=!1,Eo=!1;const Mt=Zn.getUniforms(),zn=ke.uniforms;if(q.useProgram(Zn.program)&&(ps=!0,En=!0,Eo=!0),Z.id!==M&&(M=Z.id,En=!0),ps||b!==P){q.buffers.depth.getReversed()?(Me.copy(P.projectionMatrix),jT(Me),$T(Me),Mt.setValue(w,"projectionMatrix",Me)):Mt.setValue(w,"projectionMatrix",P.projectionMatrix),Mt.setValue(w,"viewMatrix",P.matrixWorldInverse);const mn=Mt.map.cameraPosition;mn!==void 0&&mn.setValue(w,Ze.setFromMatrixPosition(P.matrixWorld)),ee.logarithmicDepthBuffer&&Mt.setValue(w,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(w,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,En=!0,Eo=!0)}if(G.isSkinnedMesh){Mt.setOptional(w,G,"bindMatrix"),Mt.setOptional(w,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Mt.setValue(w,"boneTexture",nn.boneTexture,se))}G.isBatchedMesh&&(Mt.setOptional(w,G,"batchingTexture"),Mt.setValue(w,"batchingTexture",G._matricesTexture,se),Mt.setOptional(w,G,"batchingIdTexture"),Mt.setValue(w,"batchingIdTexture",G._indirectTexture,se),Mt.setOptional(w,G,"batchingColorTexture"),G._colorsTexture!==null&&Mt.setValue(w,"batchingColorTexture",G._colorsTexture,se));const Hn=K.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&be.update(G,K,Zn),(En||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Mt.setValue(w,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(zn.envMap.value=Pe,zn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(zn.envMapIntensity.value=V.environmentIntensity),En&&(Mt.setValue(w,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Yv(zn,Eo),_e&&Z.fog===!0&&j.refreshFogUniforms(zn,_e),j.refreshMaterialUniforms(zn,Z,k,X,m.state.transmissionRenderTarget[P.id]),Al.upload(w,Vd(ke),zn,se)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Al.upload(w,Vd(ke),zn,se),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(w,"center",G.center),Mt.setValue(w,"modelViewMatrix",G.modelViewMatrix),Mt.setValue(w,"normalMatrix",G.normalMatrix),Mt.setValue(w,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const nn=Z.uniformsGroups;for(let mn=0,Dc=nn.length;mn<Dc;mn++){const Mr=nn[mn];N.update(Mr,Zn),N.bind(Mr,Zn)}}return Zn}function Yv(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function Kv(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,V,K){const Z=te.get(P);Z.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),te.get(P.texture).__webglTexture=V,te.get(P.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,V){const K=te.get(P);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const Jv=w.createFramebuffer();this.setRenderTarget=function(P,V=0,K=0){S=P,A=V,R=K;let Z=!0,G=null,_e=!1,Ae=!1;if(P){const Pe=te.get(P);if(Pe.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(w.FRAMEBUFFER,null),Z=!1;else if(Pe.__webglFramebuffer===void 0)se.setupRenderTarget(P);else if(Pe.__hasExternalTextures)se.rebindTextures(P,te.get(P.texture).__webglTexture,te.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Fe=P.depthTexture;if(Pe.__boundDepthTexture!==Fe){if(Fe!==null&&te.has(Fe)&&(P.width!==Fe.image.width||P.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(P)}}const Ge=P.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const We=te.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(We[V])?G=We[V][K]:G=We[V],_e=!0):P.samples>0&&se.useMultisampledRTT(P)===!1?G=te.get(P).__webglMultisampledFramebuffer:Array.isArray(We)?G=We[K]:G=We,C.copy(P.viewport),U.copy(P.scissor),O=P.scissorTest}else C.copy(ue).multiplyScalar(k).floor(),U.copy(Se).multiplyScalar(k).floor(),O=qe;if(K!==0&&(G=Jv),q.bindFramebuffer(w.FRAMEBUFFER,G)&&Z&&q.drawBuffers(P,G),q.viewport(C),q.scissor(U),q.setScissorTest(O),_e){const Pe=te.get(P.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,K)}else if(Ae){const Pe=te.get(P.texture),Ge=V;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Pe.__webglTexture,K,Ge)}else if(P!==null&&K!==0){const Pe=te.get(P.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Pe.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(P,V,K,Z,G,_e,Ae,Oe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){q.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Ge=P.textures[Oe],We=Ge.format,Fe=Ge.type;if(!ee.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-Z&&K>=0&&K<=P.height-G&&(P.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Oe),w.readPixels(V,K,Z,G,ve.convert(We),ve.convert(Fe),_e))}finally{const Ge=S!==null?te.get(S).__webglFramebuffer:null;q.bindFramebuffer(w.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,V,K,Z,G,_e,Ae,Oe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(V>=0&&V<=P.width-Z&&K>=0&&K<=P.height-G){q.bindFramebuffer(w.FRAMEBUFFER,Pe);const Ge=P.textures[Oe],We=Ge.format,Fe=Ge.type;if(!ee.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,tt),w.bufferData(w.PIXEL_PACK_BUFFER,_e.byteLength,w.STREAM_READ),P.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Oe),w.readPixels(V,K,Z,G,ve.convert(We),ve.convert(Fe),0);const pt=S!==null?te.get(S).__webglFramebuffer:null;q.bindFramebuffer(w.FRAMEBUFFER,pt);const Tt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await qT(w,Tt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,tt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,_e),w.deleteBuffer(tt),w.deleteSync(Tt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,V=null,K=0){const Z=Math.pow(2,-K),G=Math.floor(P.image.width*Z),_e=Math.floor(P.image.height*Z),Ae=V!==null?V.x:0,Oe=V!==null?V.y:0;se.setTexture2D(P,0),w.copyTexSubImage2D(w.TEXTURE_2D,K,0,0,Ae,Oe,G,_e),q.unbindTexture()};const Zv=w.createFramebuffer(),Qv=w.createFramebuffer();this.copyTextureToTexture=function(P,V,K=null,Z=null,G=0,_e=null){_e===null&&(G!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Ae,Oe,Pe,Ge,We,Fe,tt,pt,Tt;const Pt=P.isCompressedTexture?P.mipmaps[_e]:P.image;if(K!==null)Ae=K.max.x-K.min.x,Oe=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,We=K.min.y,Fe=K.isBox3?K.min.z:0;else{const Hn=Math.pow(2,-G);Ae=Math.floor(Pt.width*Hn),Oe=Math.floor(Pt.height*Hn),P.isDataArrayTexture?Pe=Pt.depth:P.isData3DTexture?Pe=Math.floor(Pt.depth*Hn):Pe=1,Ge=0,We=0,Fe=0}Z!==null?(tt=Z.x,pt=Z.y,Tt=Z.z):(tt=0,pt=0,Tt=0);const st=ve.convert(V.format),ke=ve.convert(V.type);let qt;V.isData3DTexture?(se.setTexture3D(V,0),qt=w.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(se.setTexture2DArray(V,0),qt=w.TEXTURE_2D_ARRAY):(se.setTexture2D(V,0),qt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,V.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,V.unpackAlignment);const ft=w.getParameter(w.UNPACK_ROW_LENGTH),Zn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ps=w.getParameter(w.UNPACK_SKIP_PIXELS),En=w.getParameter(w.UNPACK_SKIP_ROWS),Eo=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Pt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Pt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ge),w.pixelStorei(w.UNPACK_SKIP_ROWS,We),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Fe);const Mt=P.isDataArrayTexture||P.isData3DTexture,zn=V.isDataArrayTexture||V.isData3DTexture;if(P.isDepthTexture){const Hn=te.get(P),nn=te.get(V),mn=te.get(Hn.__renderTarget),Dc=te.get(nn.__renderTarget);q.bindFramebuffer(w.READ_FRAMEBUFFER,mn.__webglFramebuffer),q.bindFramebuffer(w.DRAW_FRAMEBUFFER,Dc.__webglFramebuffer);for(let Mr=0;Mr<Pe;Mr++)Mt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,te.get(P).__webglTexture,G,Fe+Mr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,te.get(V).__webglTexture,_e,Tt+Mr)),w.blitFramebuffer(Ge,We,Ae,Oe,tt,pt,Ae,Oe,w.DEPTH_BUFFER_BIT,w.NEAREST);q.bindFramebuffer(w.READ_FRAMEBUFFER,null),q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||te.has(P)){const Hn=te.get(P),nn=te.get(V);q.bindFramebuffer(w.READ_FRAMEBUFFER,Zv),q.bindFramebuffer(w.DRAW_FRAMEBUFFER,Qv);for(let mn=0;mn<Pe;mn++)Mt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Hn.__webglTexture,G,Fe+mn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Hn.__webglTexture,G),zn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,nn.__webglTexture,_e,Tt+mn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,nn.__webglTexture,_e),G!==0?w.blitFramebuffer(Ge,We,Ae,Oe,tt,pt,Ae,Oe,w.COLOR_BUFFER_BIT,w.NEAREST):zn?w.copyTexSubImage3D(qt,_e,tt,pt,Tt+mn,Ge,We,Ae,Oe):w.copyTexSubImage2D(qt,_e,tt,pt,Ge,We,Ae,Oe);q.bindFramebuffer(w.READ_FRAMEBUFFER,null),q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else zn?P.isDataTexture||P.isData3DTexture?w.texSubImage3D(qt,_e,tt,pt,Tt,Ae,Oe,Pe,st,ke,Pt.data):V.isCompressedArrayTexture?w.compressedTexSubImage3D(qt,_e,tt,pt,Tt,Ae,Oe,Pe,st,Pt.data):w.texSubImage3D(qt,_e,tt,pt,Tt,Ae,Oe,Pe,st,ke,Pt):P.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,_e,tt,pt,Ae,Oe,st,ke,Pt.data):P.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,_e,tt,pt,Pt.width,Pt.height,st,Pt.data):w.texSubImage2D(w.TEXTURE_2D,_e,tt,pt,Ae,Oe,st,ke,Pt);w.pixelStorei(w.UNPACK_ROW_LENGTH,ft),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Zn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ps),w.pixelStorei(w.UNPACK_SKIP_ROWS,En),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Eo),_e===0&&V.generateMipmaps&&w.generateMipmap(qt),q.unbindTexture()},this.copyTextureToTexture3D=function(P,V,K=null,Z=null,G=0){return Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,V,K,Z,G)},this.initRenderTarget=function(P){te.get(P).__webglFramebuffer===void 0&&se.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?se.setTextureCube(P,0):P.isData3DTexture?se.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?se.setTexture2DArray(P,0):se.setTexture2D(P,0),q.unbindTexture()},this.resetState=function(){A=0,R=0,S=null,q.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const K0=n=>Math.min(1,Math.max(0,n)),Fs=n=>{const e=K0(n);return e*e*(3-2*e)},Du=(n,e,t)=>n.map((i,r)=>i+(e[r]-i)*t);function Hs(n){return Math.sin(n*.13)*1.4+1}function J0(n){return Hs(n)-Fs((-n-126)/14)*23}function $P(n,e={x:0,y:0}){const t=K0(n/.58),i=Fs(t/.14),r=12-Fs(t)*140;let s=[Hs(r)*i,3.1,r],o=[Hs(r-12)*i,3.7-i*.6,r-12];if(n>.58&&n<=.7){const a=Fs((n-.58)/.12);s=Du([Hs(-128),3.1,-128],[0,3.8,-137],a),o=Du([Hs(-140),3.1,-140],[0,4,-150],a)}else if(n>.7&&n<=.83){const a=Fs((n-.7)/.13);s=Du([0,3.8,-137],[0,8.5,-123],a),o=[0,4,-150]}else if(n>.83){const a=Fs((n-.83)/.17)*Math.PI*1.5;s=[Math.sin(a)*27,8.5+Math.sin(a)*.8,-150+Math.cos(a)*27],o=[0,4,-150]}return s[0]+=e.x*(1.6-i*1.3),s[1]-=e.y*(.65-i*.47),o[0]+=e.x*(2-i*1.6),o[1]-=e.y*.2,{posicao:s,olhar:o,tunel:t,alinhamento:i}}function YP(n,e,t,i){let r=127;const s=()=>(r=r*16807%2147483647,(r-1)/2147483646),o=new No;o.position.set(0,0,-150),n.add(o);const a=new Wt(e(new _d(14,80)),e(new mi({color:"#658244",roughness:1})));a.rotation.x=-Math.PI/2,a.position.y=-.12,o.add(a);const l=e(new mi({color:"#5b4933",roughness:1}));function u(S,M,b,C){const U=new B().subVectors(M,S),O=e(new Jl(C,b,U.length(),9)),z=new Wt(O,l);z.position.copy(S).add(M).multiplyScalar(.5),z.quaternion.setFromUnitVectors(new B(0,1,0),U.normalize()),o.add(z)}u(new B(0,0,0),new B(.25,5.6,.1),.65,.2);const c=[];for(let S=0;S<9;S++){const M=S/9*Math.PI*2,b=new B(Math.cos(M)*(2.6+s()),6+s()*2,Math.sin(M)*(2.7+s()));u(new B(.15,3.2+s()*1.8,.05),b,.25,.055),c.push(b),u(b.clone().multiplyScalar(.7).add(new B(0,1,0)),b.clone().add(new B(.7,1,.5)),.1,.025)}c.push(new B(0,8,0));const f=e(new yd(1,1)),d=e(new mi({color:"#84a449",roughness:.88,flatShading:!0})),h=e(new kr(f,d,480)),p=new zt,_=new Qe;for(let S=0;S<480;S++){const M=c[S%c.length],b=s()*Math.PI*2,C=Math.sqrt(s())*2.2;p.position.set(M.x+Math.cos(b)*C,M.y+(s()-.5)*2,M.z+Math.sin(b)*C),p.rotation.set(s()*3,s()*3,s()*3);const U=.35+s()*.65;p.scale.set(U,U*.65,U),p.updateMatrix(),h.setMatrixAt(S,p.matrix),_.setHSL(.22+s()*.075,.37+s()*.2,.2+s()*.18),h.setColorAt(S,_)}o.add(h);const g=window.innerWidth<650?600:1200,m=e(new Ac(1,7,4)),y=e(new mi({color:"#f5f8df",roughness:.65,side:cn}));y.onBeforeCompile=S=>{S.uniforms.tempo=t,S.uniforms.vento=i,S.vertexShader=`uniform float tempo; uniform float vento;
`+S.vertexShader,S.vertexShader=S.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      transformed.x+=sin(tempo*1.2+instanceMatrix[3].x+instanceMatrix[3].z)*.07+vento*.09;`)};const x=e(new kr(m,y,g*6)),v=e(new kr(m,e(new mi({color:"#e4c853",roughness:.75})),g)),T=e(new kr(e(new Jl(.009,.016,1,4)),e(new mi({color:"#31532c",roughness:1})),g));for(let S=0;S<g;S++){let M,b;do{const U=s()*Math.PI*2,O=3+Math.sqrt(s())*9;M=Math.cos(U)*O,b=Math.sin(U)*O}while(Math.abs(M-J0(b-150))<2.8+Math.sin((b-150)*.09)*.8);const C=.3+s()*.5;p.position.set(M,C/2,b),p.rotation.set(0,0,0),p.scale.set(1,C,1),p.updateMatrix(),T.setMatrixAt(S,p.matrix),p.position.y=C,p.scale.set(.065,.045,.065),p.updateMatrix(),v.setMatrixAt(S,p.matrix);for(let U=0;U<6;U++){const O=U/6*Math.PI*2;p.position.set(M+Math.cos(O)*.12,C,b+Math.sin(O)*.12),p.rotation.set(0,-O,0),p.scale.set(.16,.025,.055),p.updateMatrix(),x.setMatrixAt(S*6+U,p.matrix),_.set(S%4===0?"#e0edb3":"#fffdf2"),x.setColorAt(S*6+U,_)}}o.add(T,v,x);const A=e(new kr(m,y,240)),R=Array.from({length:240},()=>({angulo:s()*Math.PI*2,raio:4+s()*3.5,altura:1+s()*3,escala:.07+s()*.07}));return A.frustumCulled=!1,o.add(A),{atualizar(S,M){o.visible=M>.42,o.visible&&(R.forEach((b,C)=>{const U=b.angulo+S*.12;p.position.set(Math.cos(U)*b.raio,b.altura+Math.sin(S*.6+U)*.4,Math.sin(U)*b.raio),p.rotation.set(U+S*.3,U,U*.5),p.scale.set(b.escala,b.escala*.2,b.escala*.55),p.updateMatrix(),A.setMatrixAt(C,p.matrix)}),A.instanceMatrix.needsUpdate=!0,h.rotation.y=Math.sin(S*.3)*.012)}}}const KP={key:0,class:"campo-alternativo","aria-hidden":"true"},JP={__name:"Campo",props:{movimento:Boolean},emits:["progresso"],setup(n,{emit:e}){const t=n,i=e,r=Ft(null),s=Ft(!0);let o,a,l,u,c,f,d=!0,h=0;const p={x:0,y:0},_=[],g={value:0},m={value:0};let y,x=0,v=0,T=0;const A=new Le,R=new Le;let S=0;const M=new u1,b=new B,C=new B,U=new B;function O(){if(!y)return;const ue=y.getBoundingClientRect();x=vs.clamp(-ue.top/Math.max(1,ue.height-window.innerHeight),0,1),i("progresso",x)}function z(){p.x=0,p.y=0,T=0}function $(ue){const Se=r.value.getBoundingClientRect();if(ue.clientY<Se.top||ue.clientY>Se.bottom||ue.clientX<Se.left||ue.clientX>Se.right){z();return}const qe=(ue.clientX-Se.left)/Se.width-.5,re=(ue.clientY-Se.top)/Se.height-.5;S=Math.min(2,S+Math.hypot(qe-p.x,re-p.y)*5),p.x=qe,p.y=re,T=1}function F(ue){ue.relatedTarget||z()}function X(ue){return _.push(ue),ue}function k(){if(!o)return;const{width:ue,height:Se}=r.value.getBoundingClientRect();o.setSize(ue,Se),l.aspect=ue/Se,l.fov=ue<650?62:47,l.updateProjectionMatrix(),O()}function fe(ue){return J0(ue)}function de(ue){return 2.5+Math.sin(ue*.09)*.8}return gc(()=>{y=r.value.closest(".percurso-campo"),window.addEventListener("pointermove",$,{passive:!0}),window.addEventListener("pointerout",F),window.addEventListener("blur",z),window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O,{passive:!0}),O();try{let N=function(ie){u=requestAnimationFrame(N);const ae=Math.min((ie-ze)/1e3,.05);if(ze=ie,!d||document.hidden)return;t.movimento&&(h+=ae),g.value=h;const Ee=1-Math.exp(-ae*5);if(t.movimento){v+=(x-v)*Ee,R.set(p.x,p.y),A.lerp(R,Ee),S*=Math.exp(-ae*2.5),m.value+=(A.x*T*(1+S)-m.value)*Ee;const et=$P(v,A);l.position.fromArray(et.posicao),U.fromArray(et.olhar),l.lookAt(U),l.updateMatrixWorld(),Ce.rotation.y=h*.006}M.setFromCamera({x:p.x*2,y:-p.y*2},l);const he=l.aspect<1,oe=Math.min(1,v/.58),Te=vs.smoothstep(oe,0,.14),Ne=vs.smoothstep(oe,.06,.38),ut=vs.smoothstep(v,.54,.7),lt=1-Math.exp(-ae*10),pn=Math.max(0,12-l.position.z-24);Re.forEach((et,fs)=>{const kn=et.angulo+h*.16+oe*Math.PI*3,ai=et.raio+Math.sin(h+et.fase)*.12;if(et.solta)Q.position.set(Math.sin(et.fase*7+h*.12)*16,1+(et.fase*2+h*.23)%10,-12+Math.cos(et.fase)*10-pn);else{const Sr=-7+et.espessura+Math.cos(kn)*.7-Ne*et.fase*2.8-pn;Q.position.set(vs.lerp(he?0:3.5,Hs(Sr),Te)+Math.cos(kn)*(ai+Ne*1.4),vs.lerp(5.5,3.1,Te)+Math.sin(kn)*(ai+Ne*.6),Sr)}const hs=et.angulo+h*.16+et.fase*.35,bo=6+(et.raio-1.45)*5.5;if(Q.position.lerp(b.set(Math.cos(hs)*bo,1.3+et.fase*.8+Math.sin(h*.7+et.angulo)*.5,-150+Math.sin(hs)*bo),ut),t.movimento){M.ray.closestPointToPoint(Q.position,b),C.subVectors(Q.position,b);const Sr=C.length(),ds=Math.max(0,1-Sr/5.5)*T;C.normalize().multiplyScalar(ds*Math.min(4.2,(6.5+S*2)*et.resposta)),et.deslocamento.lerp(C,lt)}Q.position.add(et.deslocamento),Q.rotation.set(et.fase+h*.55,kn+h*.2,kn+et.fase),Q.scale.setScalar(et.escala*(1+ut*.35)),Q.updateMatrix(),ye.setMatrixAt(fs,Q.matrix)}),ye.instanceMatrix.needsUpdate=!0,ve.atualizar(h,v),se.forEach((et,fs)=>{const kn=l.position.z-(4-fs*24);et.visible=v>.67?Math.abs(kn)<85:kn>-20&&kn<85}),o.render(a,l)};o=new jP({antialias:!0,alpha:!1,powerPreference:"high-performance"}),o.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),o.toneMapping=d0,o.toneMappingExposure=1.15,r.value.appendChild(o.domElement),a=new xw,a.background=new Qe("#bccdbb"),a.fog=new pd("#b6c9b1",.032),l=new qn(47,1,.1,180),l.position.set(0,3.1,12),l.lookAt(0,3.7,-12),a.add(new s1("#f5ffe8","#16331b",2.2));const ue=new l1("#ecffd2",3.2);ue.position.set(-12,18,-8),a.add(ue);const Se=X(new Kr(180,300,1,1)),qe=X(new mi({color:"#263e20",roughness:1})),re=new Wt(Se,qe);re.rotation.x=-Math.PI/2,re.position.set(0,-.16,-115),a.add(re);for(let ie=0;ie<4;ie++){const ae=X(new Kr(190,22,100,1)),Ee=ae.attributes.position;for(let Te=0;Te<Ee.count;Te++){const Ne=Ee.getX(Te),ut=3.5+ie*1.3+Math.sin(Ne*.065+ie*2)*2.8+Math.cos(Ne*.16+ie)*1.2;Ee.setY(Te,Ee.getY(Te)>0?ut:-6)}ae.computeVertexNormals();const he=X(new dd({color:["#354d36","#466349","#5c755b","#73886b"][ie],side:cn})),oe=new Wt(ae,he);oe.position.z=-215-ie*13,a.add(oe)}const me=X(new Ac(1,20,12)),De=X(new mi({color:"#3b5831",roughness:1}));for(let ie=0;ie<14;ie++){const ae=new Wt(me,De);ae.position.set((ie%2?-1:1)*(24+Math.sin(ie)*5),-2,-8-ie*12),ae.scale.set(13,4+Math.sin(ie*2)*2,19),a.add(ae)}const Me=[],Ue=[],Ze=[],Ie=20,at=480;for(let ie=0;ie<=at;ie++){const ae=17-ie*.5,Ee=fe(ae),he=de(ae);for(let oe=0;oe<=Ie;oe++){const Te=oe/Ie;if(Me.push(Ee+(Te*2-1)*he,.025,ae),Ue.push(Te,ie/at),ie<at&&oe<Ie){const Ne=ie*(Ie+1)+oe;Ze.push(Ne,Ne+Ie+1,Ne+1,Ne+1,Ne+Ie+1,Ne+Ie+2)}}}const rt=X(new dn);rt.setAttribute("position",new Et(Me,3)),rt.setIndex(Ze),rt.setAttribute("uv",new Et(Ue,2)),rt.computeVertexNormals();const D=X(rt.clone());D.translate(0,-.13,0);const w=X(new Ti({uniforms:{tempo:g},vertexShader:"varying vec3 ponto; varying vec2 faixa; void main(){ ponto=position; faixa=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
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
        }`,side:cn}));a.add(new Wt(D,w));const Y=X(new Ti({uniforms:{tempo:g},vertexShader:`uniform float tempo; varying vec3 ponto; varying vec2 faixa;
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
          }`,side:cn,transparent:!0,depthWrite:!1}));a.add(new Wt(rt,Y));const ne=X(new Kr(.07,1,1,4));ne.translate(0,.5,0);const ee=ne.attributes.position;for(let ie=0;ie<ee.count;ie++)ee.setX(ie,ee.getX(ie)*(1-ee.getY(ie)*.96));const q=X(new mi({color:"#638f39",roughness:.95,side:cn}));q.onBeforeCompile=ie=>{ie.uniforms.tempo=g,ie.uniforms.vento=m,ie.vertexShader=`uniform float tempo; uniform float vento;
`+ie.vertexShader,ie.vertexShader=ie.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float fase=instanceMatrix[3].x*.6+instanceMatrix[3].z*.5;
        transformed.x += (sin(tempo*1.4+fase)*.22+vento*.5)*position.y*position.y;
        transformed.z += cos(tempo*.9+fase)*position.y*position.y*.1;`)};const ce=window.innerWidth<650?38e3:76e3,te=ce/8,se=Array.from({length:8},()=>X(new kr(ne,q,te))),Q=new zt,L=new Qe;let E=913;const I=()=>(E=E*16807%2147483647,(E-1)/2147483646);for(let ie=0;ie<ce;ie++){const ae=Math.floor(ie/te),Ee=se[ae];let he,oe;do he=(I()-.5)*(ie%4===0?76:24),oe=16-ae*24-I()*24;while(Math.abs(he-fe(oe))<de(oe)+.12);Q.position.set(he,-.12,oe),Q.rotation.set((I()-.5)*.2,I()*Math.PI,(I()-.5)*.2);const Te=(.22+I()*.75)*(Math.hypot(he,oe+150)<14?.22:1);Q.scale.set(.7+I(),Te,1),Q.updateMatrix(),Ee.setMatrixAt(ie%te,Q.matrix),L.setHSL(.23+I()*.065,.3+I()*.25,.12+I()*.2),Ee.setColorAt(ie%te,L)}a.add(...se);const W=new B0;W.moveTo(0,-.5),W.bezierCurveTo(.43,-.16,.31,.28,0,.5),W.bezierCurveTo(-.31,.24,-.42,-.17,0,-.5);const J=X(new Sd(W,5)),j=J.attributes.position;for(let ie=0;ie<j.count;ie++)j.setZ(ie,Math.abs(j.getX(ie))*.4);J.computeVertexNormals();const xe=X(new mi({color:"#acdc69",roughness:.64,metalness:.12,side:cn})),pe=window.innerWidth<650?3200:6e3,ye=new kr(J,xe,pe);ye.instanceMatrix.setUsage(RT),ye.frustumCulled=!1;const Re=Array.from({length:pe},(ie,ae)=>(L.setHSL(.19+I()*.14,.38+I()*.35,.18+I()*.47),ye.setColorAt(ae,L),{angulo:I()*Math.PI*2,raio:2.05+(I()-.5)*1.2,espessura:(I()-.5)*1.7,escala:.12+I()*.24,fase:I()*10,solta:ae<240,resposta:ae%5<3?.18+I()*.12:.8+I()*.2,deslocamento:new B}));a.add(ye);const le=X(new dn),be=new Float32Array(480*3);for(let ie=0;ie<be.length;ie+=3)be[ie]=(I()-.5)*36,be[ie+1]=I()*12,be[ie+2]=7-I()*190;le.setAttribute("position",new Yn(be,3));const Be=X(new D0({color:"#f0ffce",size:.025,transparent:!0,opacity:.6,depthWrite:!1})),Ce=new Ew(le,Be);a.add(Ce);const ve=YP(a,X,g,m);c=new ResizeObserver(k),c.observe(r.value),k(),f=new IntersectionObserver(([ie])=>{d=ie.isIntersecting}),f.observe(r.value);let ze=0;u=requestAnimationFrame(N)}catch{s.value=!1,o?.dispose()}}),vc(()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",O),window.removeEventListener("pointermove",$),window.removeEventListener("pointerout",F),window.removeEventListener("blur",z),cancelAnimationFrame(u),c?.disconnect(),f?.disconnect(),_.forEach(ue=>ue.dispose()),o?.dispose()}),(ue,Se)=>(Xe(),Ke("div",{ref_key:"recipiente",ref:r,class:"campo-interativo",role:"img","aria-label":"Campo tridimensional: role para avançar pelo riacho e atravesse as folhas; mova o ponteiro para afastá-las e mudar a direção do vento"},[ge(s)?Ui("",!0):(Xe(),Ke("div",KP,[(Xe(),Ke(Bt,null,ci(28,qe=>H("span",{key:qe,style:ts({left:`${qe*17%100}%`,top:`${qe*23%80}%`,transform:`rotate(${qe*37}deg)`})},null,4)),64))]))],512))}},ZP=/^[a-z][a-z0-9-]*$/i;function QP(n,e){return n&&ZP.test(n)?n:e}const e2=Symbol.for("nuxt:client-only"),t2=Nh({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:e,attrs:t}){const i=Xu(!1);gc(()=>{i.value=!0});const r=go();return r&&(r._nuxtClientOnly=!0),Dh(e2,!0),()=>{if(i.value){const l=e.default?.();return l&&l.length===1?[ns(l[0],t)]:l}const s=e.fallback||e.placeholder;if(s)return Pg(s);const o=n.fallback||n.placeholder||"",a=QP(n.fallbackTag||n.placeholderTag,"span");return Ke(a,t,o)}}}),li={name:"Victor",role:"Desenvolvimento web & experiências digitais",email:"",github:"",linkedin:"",bio:"Sou o Victor, desenvolvedor web. Já trabalhei em sites para empresas e sistemas de gestão, cuidando tanto das telas quanto da lógica e do banco de dados. Aqui reuni alguns desses projetos para mostrar um pouco do que faço."};function Fi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Z0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ma={duration:.5,overwrite:!1,delay:0},bd,Yt,bt,jn=1e8,vt=1/jn,oh=Math.PI*2,n2=oh/4,i2=0,Q0=Math.sqrt,r2=Math.cos,s2=Math.sin,Xt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},Ed=function(e){return typeof e>"u"},wi=function(e){return typeof e=="object"},xn=function(e){return e!==!1},Td=function(){return typeof window<"u"},gl=function(e){return It(e)||Xt(e)},ev=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,o2=/random\([^)]+\)/g,a2=/,\s*/g,Zm=/(?:-?\.?\d|\.)+/gi,tv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Iu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nv=/[+-]=-?[.\d]+/,l2=/[^,'"\[\]\s]+/gi,c2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,hi,ah,wd,Fn={},Zl={},iv,rv=function(e){return(Zl=uo(e,Fn))&&bn},Ad=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_a=function(e,t){return!t&&console.warn(e)},sv=function(e,t){return e&&(Fn[e]=t)&&Zl&&(Zl[e]=t)||Fn},ga=function(){return 0},u2={suppressEvents:!0,isStart:!0,kill:!1},Rl={suppressEvents:!0,kill:!1},f2={suppressEvents:!0},Rd={},fr=[],lh={},ov,An={},Uu={},Qm=30,Cl=[],Cd="",Pd=function(e){var t=e[0],i,r;if(wi(t)||It(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Cl.length;r--&&!Cl[r].targetTest(t););i=Cl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Rv(e[r],i)))||e.splice(r,1);return e},Jr=function(e){return e._gsap||Pd($n(e))[0]._gsap},av=function(e,t,i){return(i=e[t])&&It(i)?e[t]():Ed(i)&&e.getAttribute&&e.getAttribute(t)||i},yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},Qs=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},h2=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ql=function(){var e=fr.length,t=fr.slice(0),i,r;for(lh={},fr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ld=function(e){return!!(e._initted||e._startAt||e.add)},lv=function(e,t,i,r){fr.length&&!Yt&&Ql(),e.render(t,i,!!(Yt&&t<0&&Ld(e))),fr.length&&!Yt&&Ql()},cv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(l2).length<2?t:Xt(e)?e.trim():e},uv=function(e){return e},Bn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},d2=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},uo=function(e,t){for(var i in t)e[i]=t[i];return e},e_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=wi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ec=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ko=function(e){var t=e.parent||At,i=e.keyframes?d2(tn(e.keyframes)):Bn;if(xn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},p2=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},fv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Cc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},_r=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},m2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ch=function(e,t,i,r){return e._startAt&&(Yt?e._startAt.revert(Rl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},_2=function n(e){return!e||e._ts&&n(e.parent)},t_=function(e){return e._repeat?fo(e._tTime,e=e.duration()+e._rDelay)*e:0},fo=function(e,t){var i=Math.floor(e=wt(e/t));return e&&i===e?i-1:i},tc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pc=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},Lc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pc(e),i._dirty||Zr(i,e)),e},hv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=tc(e.rawTime(),t),(!t._dur||La(0,t.totalDuration(),i)-t._tTime>vt)&&t.render(i,!0)),Zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-vt}},vi=function(e,t,i,r){return t.parent&&_r(t),t._start=wt((ji(i)?i:i||e!==At?Wn(e,i,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),fv(e,t,"_first","_last",e._sort?"_start":0),uh(t)||(e._recent=t),r||hv(e,t),e._ts<0&&Lc(e,e._tTime),e},dv=function(e,t){return(Fn.ScrollTrigger||Ad("scrollTrigger",t))&&Fn.ScrollTrigger.create(t,e)},pv=function(e,t,i,r,s){if(Id(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ov!==Cn.frame)return fr.push(e),e._lazy=[s,r],1},g2=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},uh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},v2=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&g2(e)&&!(!e._initted&&uh(e))||(e._ts<0||e._dp._ts<0)&&!uh(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=La(0,e._tDur,t),c=fo(l,a),e._yoyo&&c&1&&(o=1-o),c!==fo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Yt||r||e._zTime===vt||!t&&e._zTime){if(!e._initted&&pv(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?vt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&ch(e,t,i,!0),e._onUpdate&&!i&&Ln(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ln(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&_r(e,1),!i&&!Yt&&(Ln(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},x2=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ho=function(e,t,i,r){var s=e._repeat,o=wt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:wt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Lc(e,e._tTime=e._tDur*a),e.parent&&Pc(e),i||Zr(e.parent,e),e},n_=function(e){return e instanceof _n?Zr(e):ho(e,e._dur)},y2={_start:0,endTime:ga,totalDuration:ga},Wn=function n(e,t,i){var r=e.labels,s=e._recent||y2,o=e.duration()>=jn?s.endTime(!1):e._dur,a,l,u;return Xt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(tn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Jo=function(e,t,i){var r=ji(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;o.immediateRender=xn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new kt(t[0],o,t[s+1])},yr=function(e,t){return e||e===0?t(e):t},La=function(e,t,i){return i<e?e:i>t?t:i},en=function(e,t){return!Xt(e)||!(t=c2.exec(e))?"":t[1]},S2=function(e,t,i){return yr(i,function(r){return La(e,t,r)})},fh=[].slice,mv=function(e,t){return e&&wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wi(e[0]))&&!e.nodeType&&e!==hi},M2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Xt(r)&&!t||mv(r,1)?(s=i).push.apply(s,$n(r)):i.push(r)})||i},$n=function(e,t,i){return bt&&!t&&bt.selector?bt.selector(e):Xt(e)&&!i&&(ah||!po())?fh.call((t||wd).querySelectorAll(e),0):tn(e)?M2(e,i):mv(e)?fh.call(e,0):e?[e]:[]},hh=function(e){return e=$n(e)[0]||_a("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return $n(t,i.querySelectorAll?i:i===e?_a("Invalid scope")||wd.createElement("div"):e)}},_v=function(e){return e.sort(function(){return .5-Math.random()})},gv=function(e){if(It(e))return e;var t=wi(e)?e:{each:e},i=Qr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Xt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,h,p){var _=(p||t).length,g=o[_],m,y,x,v,T,A,R,S,M;if(!g){if(M=t.grid==="auto"?0:(t.grid||[1,jn])[1],!M){for(R=-jn;R<(R=p[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(g=o[_]=[],m=l?Math.min(M,_)*c-.5:r%M,y=M===jn?0:l?_*f/M-.5:r/M|0,R=0,S=jn,A=0;A<_;A++)x=A%M-m,v=y-(A/M|0),g[A]=T=u?Math.abs(u==="y"?v:x):Q0(x*x+v*v),T>R&&(R=T),T<S&&(S=T);r==="random"&&_v(g),g.max=R-S,g.min=S,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=en(t.amount||t.each)||0,i=i&&_<0?O2(i):i}return _=(g[d]-g.min)/g.max||0,wt(g.b+(i?i(_):_)*g.v)+g.u}},dh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=wt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ji(i)?0:en(i))}},vv=function(e,t){var i=tn(e),r,s;return!i&&wi(e)&&(r=i=e.radius||jn,e.values?(e=$n(e.values),(s=!ji(e[0]))&&(r*=r)):e=dh(e.increment)),yr(t,i?It(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=jn,c=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||ji(o)?c:c+en(o)}:dh(e))},xv=function(e,t,i,r){return yr(tn(e)?!t:i===!0?!!(i=0):!r,function(){return tn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},b2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},E2=function(e,t){return function(i){return e(parseFloat(i))+(t||en(i))}},T2=function(e,t,i){return Sv(e,t,0,1,i)},yv=function(e,t,i){return yr(i,function(r){return e[~~t(r)]})},w2=function n(e,t,i){var r=t-e;return tn(e)?yv(e,n(0,e.length),t):yr(i,function(s){return(r+(s-e)%r)%r+e})},A2=function n(e,t,i){var r=t-e,s=r*2;return tn(e)?yv(e,n(0,e.length-1),t):yr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},va=function(e){return e.replace(o2,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(a2);return xv(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Sv=function(e,t,i,r,s){var o=t-e,a=r-i;return yr(s,function(l){return i+((l-e)/o*a||0)})},R2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Xt(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(p){p*=f;var _=Math.min(d,~~p);return c[_](p-_)},i=t}else r||(e=uo(tn(e)?[]:{},e));if(!c){for(l in t)Dd.call(a,e,l,"get",t[l]);s=function(p){return Nd(p,a)||(o?e.p:e)}}}return yr(i,s)},i_=function(e,t,i){var r=e.labels,s=jn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ln=function(e,t,i){var r=e.vars,s=r[t],o=bt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&fr.length&&Ql(),a&&(bt=a),c=l?s.apply(u,l):s.call(u),bt=o,c},ko=function(e){return _r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&Ln(e,"onInterrupt"),e},Gs,Mv=[],bv=function(e){if(e)if(e=!e.name&&e.default||e,Td()||e.headless){var t=e.name,i=It(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ga,render:Nd,add:Dd,kill:X2,modifier:W2,rawVars:0},o={targetTest:0,get:0,getSetter:Od,aliases:{},register:0};if(po(),e!==r){if(An[t])return;Bn(r,Bn(ec(e,s),o)),uo(r.prototype,uo(s,ec(e,o))),An[r.prop=t]=r,e.targetTest&&(Cl.push(r),Rd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}sv(t,r),e.register&&e.register(bn,r,Sn)}else Mv.push(e)},gt=255,zo={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},Ou=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*gt+.5|0},Ev=function(e,t,i){var r=e?ji(e)?[e>>16,e>>8&gt,e&gt]:0:zo.black,s,o,a,l,u,c,f,d,h,p;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zo[e])r=zo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&gt,r&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(r=p=e.match(Zm),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Ou(l+1/3,s,o),r[1]=Ou(l,s,o),r[2]=Ou(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(tv),i&&r.length<4&&(r[3]=1),r}else r=e.match(Zm)||zo.transparent;r=r.map(Number)}return t&&!p&&(s=r[0]/gt,o=r[1]/gt,a=r[2]/gt,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(h=f-d,u=c>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Tv=function(e){var t=[],i=[],r=-1;return e.split(hr).forEach(function(s){var o=s.match(Vs)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},r_=function(e,t,i){var r="",s=(e+r).match(hr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=Ev(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=Tv(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(hr,"1").split(Vs),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(hr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},hr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zo)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),C2=/hsl[a]?\(/,wv=function(e){var t=e.join(" "),i;if(hr.lastIndex=0,hr.test(t))return i=C2.test(t),e[1]=r_(e[1],i),e[0]=r_(e[0],i,Tv(e[1])),!0},xa,Cn=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,h,p=function _(g){var m=n()-r,y=g===!0,x,v,T,A;if((m>e||m<0)&&(i+=m-t),r+=m,T=r-i,x=T-o,(x>0||y)&&(A=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,o+=x+(x>=s?4:s-x),v=1),y||(l=u(_)),v)for(h=0;h<a.length;h++)a[h](T,d,A,g)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){iv&&(!ah&&Td()&&(hi=ah=window,wd=hi.document||{},Fn.gsap=bn,(hi.gsapVersions||(hi.gsapVersions=[])).push(bn.version),rv(Zl||hi.GreenSockGlobals||!hi.gsap&&hi||{}),Mv.forEach(bv)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},xa=1,p(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),xa=0,u=ga},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,m,y){var x=m?function(v,T,A,R){g(v,T,A,R),f.remove(x)}:g;return f.remove(g),a[y?"unshift":"push"](x),po(),x},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&h>=m&&h--},_listeners:a},f})(),po=function(){return!xa&&Cn.wake()},it={},P2=/^[\d.\-M][\d.\-,\s]/,L2=/["']/g,D2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(L2,"").trim():+u,r=l.substr(a+1).trim();return t},I2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},U2=function(e){var t=(e+"").split("("),i=it[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[D2(t[1])]:I2(e).split(",").map(cv)):it._CE&&P2.test(e)?it._CE("",e):i},O2=function(e){return function(t){return 1-e(1-t)}},Qr=function(e,t){return e&&(It(e)?e:it[e]||U2(e))||t},us=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return yn(e,function(a){it[a]=Fn[a]=s,it[o=a.toLowerCase()]=i;for(var l in s)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=s[l]}),s},Av=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nu=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/oh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*s2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Av(a);return s=oh/s,l.config=function(u,c){return n(e,u,c)},l},Fu=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Av(i);return r.config=function(s){return n(e,s)},r};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;us(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;us("Elastic",Nu("in"),Nu("out"),Nu());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};us("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);us("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});us("Circ",function(n){return-(Q0(1-n*n)-1)});us("Sine",function(n){return n===1?1:-r2(n*n2)+1});us("Back",Fu("in"),Fu("out"),Fu());it.SteppedEase=it.steps=Fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-vt;return function(a){return((r*La(0,o,a)|0)+s)*i}}};ma.ease=it["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Cd+=n+","+n+"Params,"});var Rv=function(e,t){this.id=i2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:av,this.set=t?t.getSetter:Od},ya=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ho(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),xa||Cn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ho(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(po(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Lc(this,i),!s._dp||s.parent||hv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===vt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),lv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+t_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+t_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?fo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?tc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-vt?0:this._rts,this.totalTime(La(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Pc(this),m2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(po(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=wt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&vi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(xn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=f2);var r=Yt;return Yt=i,Ld(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Yt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,n_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,n_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Wn(this,i),xn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,xn(r)),this._dur||(this._zTime=-vt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-vt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=It(i)?i:uv,l=function(){var c=r.then;r.then=null,s&&s(),It(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ko(this)},n})();Bn(ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var _n=(function(n){Z0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=xn(i.sortChildren),At&&vi(i.parent||At,Fi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&dv(Fi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Jo(0,arguments,this),this},t.from=function(r,s,o){return Jo(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Jo(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(r,s,Wn(this,o),1),this},t.call=function(r,s,o){return vi(this,kt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new kt(r,o,Wn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ko(o).immediateRender=xn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Ko(a).immediateRender=xn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:wt(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,h,p,_,g,m,y,x,v,T,A,R;if(this!==At&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,v=this._start,x=this._ts,m=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(d=wt(c%g),c===l?(_=this._repeat,d=u):(T=wt(c/g),_=~~T,_&&_===T&&(d=u,_--),d>u&&(d=u)),T=fo(this._tTime,g),!a&&this._tTime&&T!==_&&this._tTime-T*g-this._dur<=0&&(T=_),A&&_&1&&(d=u-d,R=1),_!==T&&!this._lock){var S=A&&T&1,M=S===(A&&_&1);if(_<T&&(S=!S),a=S?0:c%u?u:c,this._lock=1,this.render(a||(R?0:wt(_*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=S?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=x2(this,wt(a),wt(d)),y&&(c-=d-(d=y._start))),this._tTime=c,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(Ln(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(p=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!m){y=0,p&&(c+=this._zTime=-vt);break}}h=p}else{h=this._last;for(var b=r<0?r:d;h;){if(p=h._prev,(h._act||b<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,s,o||Yt&&Ld(h)),d!==this._time||!this._ts&&!m){y=0,p&&(c+=this._zTime=b?-vt:vt);break}}h=p}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-vt)._zTime=d>=a?1:-1,this._ts))return this._start=v,Pc(this),this.render(r,s,o);this._onUpdate&&!s&&Ln(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&_r(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ln(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ji(s)||(s=Wn(this,s,r)),!(r instanceof ya)){if(tn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Xt(r))return this.addLabel(r,s);if(It(r))r=kt.delayedCall(0,r);else return this}return this!==r?vi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof kt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Xt(r)?this.removeLabel(r):It(r)?this.killTweensOf(r):(r.parent===this&&Cc(this,r),r===this._recent&&(this._recent=this._last),Zr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(Cn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=kt.delayedCall(0,s||ga,o);return a.data="isPause",this._hasPause=1,vi(this,a,Wn(this,r))},t.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&_r(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)sr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=$n(r),l=this._first,u=ji(s),c;l;)l instanceof kt?h2(l._targets,a)&&(u?(!sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,h,p=kt.to(o,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||vt,onStart:function(){if(o.pause(),!h){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());p._dur!==g&&ho(p,g,0,1).render(p._time,!0,!0),h=1}c&&c.apply(p,f||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bn({startAt:{time:Wn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),i_(this,Wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),i_(this,Wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=wt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Zr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Zr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=jn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=wt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ho(o,o===At&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(At._ts&&(lv(At,tc(r,At)),ov=Cn.frame),Cn.frame>=Qm){Qm+=On.autoSleep||120;var s=At._first;if((!s||!s._ts)&&On.autoSleep&&Cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Cn.sleep()}}},e})(ya);Bn(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var N2=function(e,t,i,r,s,o,a){var l=new Sn(this._pt,e,t,0,1,Uv,null,s),u=0,c=0,f,d,h,p,_,g,m,y;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=va(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),d=i.match(Iu)||[];f=Iu.exec(r);)p=f[0],_=r.substring(u,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),p!==d[c++]&&(g=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:g,c:p.charAt(1)==="="?Qs(g,p)-g:parseFloat(p)-g,m:h&&h<4?Math.round:0},u=Iu.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(nv.test(r)||m)&&(l.e=0),this._pt=l,l},Dd=function(e,t,i,r,s,o,a,l,u,c){It(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:It(f)?u?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,h=It(f)?u?H2:Dv:Ud,p;if(Xt(r)&&(~r.indexOf("random(")&&(r=va(r)),r.charAt(1)==="="&&(p=Qs(d,r)+(en(d)||0),(p||p===0)&&(r=p))),!c||d!==r||ph)return!isNaN(d*r)&&r!==""?(p=new Sn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?G2:Iv,0,h),u&&(p.fp=u),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&Ad(t,r),N2.call(this,e,t,d,r,h,l||On.stringFilter,u))},F2=function(e,t,i,r,s){if(It(e)&&(e=Zo(e,s,t,i,r)),!wi(e)||e.style&&e.nodeType||tn(e)||ev(e))return Xt(e)?Zo(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Zo(e[a],s,t,i,r);return o},Cv=function(e,t,i,r,s,o){var a,l,u,c;if(An[e]&&(a=new An[e]).init(s,a.rawVars?t[e]:F2(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Sn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Gs))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},sr,ph,Id=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,p=e._dur,_=e._startAt,g=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:g,x=e._overwrite==="auto"&&!bd,v=e.timeline,T=r.easeReverse||f,A,R,S,M,b,C,U,O,z,$,F,X,k;if(v&&(!d||!s)&&(s="none"),e._ease=Qr(s,ma.ease),e._rEase=T&&(Qr(T)||e._ease),e._from=!v&&!!r.runBackwards,e._from&&(e.ratio=1),!v||d&&!r.stagger){if(O=g[0]?Jr(g[0]).harness:0,X=O&&r[O.prop],A=ec(r,Rd),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!h?_.render(-1,!0):_.revert(c&&p?Rl:u2),_._lazy=0),o){if(_r(e._startAt=kt.set(g,Bn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&xn(l),startAt:null,delay:0,onUpdate:u&&function(){return Ln(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!a&&!h)&&e._startAt.revert(Rl),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&p&&!_){if(t&&(a=!1),S=Bn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&xn(l),immediateRender:a,stagger:0,parent:m},A),X&&(S[O.prop]=X),_r(e._startAt=kt.set(g,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(Rl):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&xn(l)||l&&!p,R=0;R<g.length;R++){if(b=g[R],U=b._gsap||Pd(g)[R]._gsap,e._ptLookup[R]=$={},lh[U.id]&&fr.length&&Ql(),F=y===g?R:y.indexOf(b),O&&(z=new O).init(b,X||A,e,F,y)!==!1&&(e._pt=M=new Sn(e._pt,b,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(fe){$[fe]=M}),z.priority&&(C=1)),!O||X)for(S in A)An[S]&&(z=Cv(S,A,e,F,b,y))?z.priority&&(C=1):$[S]=M=Dd.call(e,b,S,"get",A[S],F,y,0,r.stringFilter);e._op&&e._op[R]&&e.kill(b,e._op[R]),x&&e._pt&&(sr=e,At.killTweensOf(b,$,e.globalTime(t)),k=!e.parent,sr=0),e._pt&&l&&(lh[U.id]=1)}C&&Ov(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!k,d&&t<=0&&v.render(jn,!0,!0)},B2=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,h;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(c=d[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ph=1,e.vars[t]="+=0",Id(e,a),ph=0,l?_a(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)f=u[h],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Ut(i)+en(f.e)),f.b&&(f.b=c.s+en(f.b))},k2=function(e,t){var i=e[0]?Jr(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=uo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},z2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(tn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Zo=function(e,t,i,r,s){return It(e)?e.call(t,i,r,s):Xt(e)&&~e.indexOf("random(")?va(e):e},Pv=Cd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Lv={};yn(Pv+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Lv[n]=1});var kt=(function(n){Z0(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ko(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=r.parent||At,y=(tn(i)||ev(i)?ji(i[0]):"length"in r)?[i]:$n(i),x,v,T,A,R,S,M,b;if(a._targets=y.length?Pd(y):_a("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,p||d||gl(u)||gl(c)){r=a.vars;var C=r.easeReverse||r.yoyoEase;if(x=a.timeline=new _n({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:y}),x.kill(),x.parent=x._dp=Fi(a),x._start=0,d||gl(u)||gl(c)){if(A=y.length,M=d&&gv(d),wi(d))for(R in d)~Pv.indexOf(R)&&(b||(b={}),b[R]=d[R]);for(v=0;v<A;v++)T=ec(r,Lv),T.stagger=0,C&&(T.easeReverse=C),b&&uo(T,b),S=y[v],T.duration=+Zo(u,Fi(a),v,S,y),T.delay=(+Zo(c,Fi(a),v,S,y)||0)-a._delay,!d&&A===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(S,T,M?M(v,S,y):0),x._ease=it.none;x.duration()?u=c=0:a.timeline=0}else if(p){Ko(Bn(x.vars.defaults,{ease:"none"})),x._ease=Qr(p.ease||r.ease||"none");var U=0,O,z,$;if(tn(p))p.forEach(function(F){return x.to(y,F,">")}),x.duration();else{T={};for(R in p)R==="ease"||R==="easeEach"||z2(R,p[R],T,p.easeEach);for(R in T)for(O=T[R].sort(function(F,X){return F.t-X.t}),U=0,v=0;v<O.length;v++)z=O[v],$={ease:z.e,duration:(z.t-(v?O[v-1].t:0))/100*u},$[R]=z.v,x.to(y,$,U),U+=$.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return h===!0&&!bd&&(sr=Fi(a),At.killTweensOf(y),sr=0),vi(m,Fi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!p&&a._start===wt(m._time)&&xn(f)&&_2(Fi(a))&&m.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-c)||0)),g&&dv(Fi(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-vt&&!c?l:r<vt?0:r,d,h,p,_,g,m,y,x;if(!u)v2(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(d=wt(f%_),f===l?(p=this._repeat,d=u):(g=wt(f/_),p=~~g,p&&p===g?(d=u,p--):d>u&&(d=u)),m=this._yoyo&&p&1,m&&(d=u-d),g=fo(this._tTime,_),d===a&&!o&&this._initted&&p===g)return this._tTime=f,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(wt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(pv(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var T=v?a:u-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/u);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!g&&(Ln(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&ch(this,r,s,o),Ln(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&Ln(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&ch(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&_r(this,1),!s&&!(c&&!a)&&(f||a||m)&&(Ln(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){xa||Cn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Id(this,u),c=this._ease(u/this._dur),B2(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Lc(this,0),this.parent||fv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ko(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Yt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,sr&&sr.vars.overwrite!==!0)._first||ko(this),this.parent&&o!==this.timeline.totalDuration()&&ho(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?$n(r):a,u=this._ptLookup,c=this._pt,f,d,h,p,_,g,m;if((!s||s==="all")&&p2(a,l))return s==="all"&&(this._pt=0),ko(this);for(f=this._op=this._op||[],s!=="all"&&(Xt(s)&&(_={},yn(s,function(y){return _[y]=1}),s=_),s=k2(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=u[m],s==="all"?(f[m]=s,p=d,h={}):(h=f[m]=f[m]||{},p=s);for(_ in p)g=d&&d[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Cc(this,g,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&c&&ko(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jo(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Jo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return At.killTweensOf(r,s,o)},e})(ya);Bn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(n){kt[n]=function(){var e=new _n,t=fh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Ud=function(e,t,i){return e[t]=i},Dv=function(e,t,i){return e[t](i)},H2=function(e,t,i,r){return e[t](r.fp,i)},V2=function(e,t,i){return e.setAttribute(t,i)},Od=function(e,t){return It(e[t])?Dv:Ed(e[t])&&e.setAttribute?V2:Ud},Iv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},G2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Uv=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Nd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},W2=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},X2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Cc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},q2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Ov=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Sn=(function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Iv,this.d=l||this,this.set=u||Ud,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=q2,this.m=i,this.mt=s,this.tween=r},n})();yn(Cd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Rd[n]=1});Fn.TweenMax=Fn.TweenLite=kt;Fn.TimelineLite=Fn.TimelineMax=_n;At=new _n({sortChildren:!1,defaults:ma,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=wv;var es=[],Pl={},j2=[],s_=0,$2=0,Bu=function(e){return(Pl[e]||j2).map(function(t){return t()})},mh=function(){var e=Date.now(),t=[];e-s_>2&&(Bu("matchMediaInit"),es.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=hi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Bu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),s_=e,Bu("matchMedia"))},Nv=(function(){function n(t,i){this.selector=i&&hh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=$2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){It(i)&&(s=r,r=i,i=It);var o=this,a=function(){var u=bt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=hh(s)),bt=o,f=r.apply(o,arguments),It(f)&&o._r.push(f),bt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===It?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=bt;bt=null,i(this),bt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof kt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof _n?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof kt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=es.length;o--;)es[o].id===this.id&&es.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),Y2=(function(){function n(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){wi(i)||(i={matches:i});var o=new Nv(0,s||this.scope),a=o.conditions={},l,u,c;bt&&!o.selector&&(o.selector=bt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=hi.matchMedia(i[u]),l&&(es.indexOf(o)<0&&es.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(mh):l.addEventListener("change",mh)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),nc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return bv(r)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,i,r){Xt(e)&&(e=$n(e)[0]);var s=Jr(e||{}).get,o=i?uv:cv;return i==="native"&&(i=""),e&&(t?o((An[t]&&An[t].get||s)(e,t,i,r)):function(a,l,u){return o((An[a]&&An[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=$n(e),e.length>1){var r=e.map(function(c){return bn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=An[t],a=Jr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;Gs._pt=0,f.init(e,i?c+i:c,Gs,0,[e]),f.render(1,f),Gs._pt&&Nd(1,Gs)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=bn.to(e,Bn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qr(e.ease,ma.ease)),e_(ma,e||{})},config:function(e){return e_(On,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!An[a]&&!Fn[a]&&_a(t+" effect requires "+a+" plugin.")}),Uu[t]=function(a,l,u){return i($n(a),Bn(l||{},s),u)},o&&(_n.prototype[t]=function(a,l,u){return this.add(Uu[t](a,wi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){it[e]=Qr(t)},parseEase:function(e,t){return arguments.length?Qr(e,t):it},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new _n(e),r,s;for(i.smoothChildTiming=xn(e.smoothChildTiming),At.remove(i),i._dp=0,i._time=i._tTime=At._time,r=At._first;r;)s=r._next,(t||!(!r._dur&&r instanceof kt&&r.vars.onComplete===r._targets[0]))&&vi(i,r,r._start-r._delay),r=s;return vi(At,i,0),i},context:function(e,t){return e?new Nv(e,t):bt},matchMedia:function(e){return new Y2(e)},matchMediaRefresh:function(){return es.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||mh()},addEventListener:function(e,t){var i=Pl[e]||(Pl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Pl[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:w2,wrapYoyo:A2,distribute:gv,random:xv,snap:vv,normalize:T2,getUnit:en,clamp:S2,splitColor:Ev,toArray:$n,selector:hh,mapRange:Sv,pipe:b2,unitize:E2,interpolate:R2,shuffle:_v},install:rv,effects:Uu,ticker:Cn,updateRoot:_n.updateRoot,plugins:An,globalTimeline:At,core:{PropTween:Sn,globals:sv,Tween:kt,Timeline:_n,Animation:ya,getCache:Jr,_removeLinkedListItem:Cc,reverting:function(){return Yt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return bd=e}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return nc[n]=kt[n]});Cn.add(_n.updateRoot);Gs=nc.to({},{duration:0});var K2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},J2=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=K2(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ku=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Xt(s)&&(l={},yn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}J2(a,s)}}}},bn=nc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Yt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ku("roundProps",dh),ku("modifiers"),ku("snap",vv))||nc;kt.version=_n.version=bn.version="3.15.0";iv=1;Td()&&po();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;var o_,or,eo,Fd,Wr,a_,Bd,Z2=function(){return typeof window<"u"},$i={},Nr=180/Math.PI,to=Math.PI/180,Is=Math.atan2,l_=1e8,kd=/([A-Z])/g,Q2=/(left|right|width|margin|padding|x)/i,eL=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_h=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Fv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Bv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sL=function(e,t,i){return e.style[t]=i},oL=function(e,t,i){return e.style.setProperty(t,i)},aL=function(e,t,i){return e._gsap[t]=i},lL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},cL=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},uL=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ct="transform",Mn=Ct+"Origin",fL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in $i&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ki(r,a)}):this.tfm[e]=o.x?o[e]:ki(r,e),e===Mn&&(this.tfm.zOrigin=o.zOrigin);else return Si.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ct)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Mn,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},kv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(kd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bd(),(!s||!s.isStart)&&!i[Ct]&&(kv(i),r.zOrigin&&i[Mn]&&(i[Mn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},zv=function(e,t){var i={target:e,props:[],revert:hL,save:fL};return e._gsap||bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Hv,gh=function(e,t){var i=or.createElementNS?or.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):or.createElement(e);return i&&i.style?i:or.createElement(e)},Dn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(kd,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,mo(t)||t,1)||""},c_="O,Moz,ms,Ms,Webkit".split(","),mo=function(e,t,i){var r=t||Wr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(c_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?c_[o]:"")+e},vh=function(){Z2()&&window.document&&(o_=window,or=o_.document,eo=or.documentElement,Wr=gh("div")||{style:{}},gh("div"),Ct=mo(Ct),Mn=Ct+"Origin",Wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hv=!!mo("perspective"),Bd=bn.core.reverting,Fd=1)},u_=function(e){var t=e.ownerSVGElement,i=gh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),eo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),eo.removeChild(i),s},f_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Vv=function(e){var t,i;try{t=e.getBBox()}catch{t=u_(e),i=1}return t&&(t.width||t.height)||i||(t=u_(e)),t&&!t.width&&!t.x&&!t.y?{x:+f_(e,["x","cx","x1"])||0,y:+f_(e,["y","cy","y1"])||0,width:0,height:0}:t},Gv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vv(e))},gr=function(e,t){if(t){var i=e.style,r;t in $i&&t!==Mn&&(t=Ct),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(kd,"-$1").toLowerCase())):i.removeAttribute(t)}},ar=function(e,t,i,r,s,o){var a=new Sn(e._pt,t,i,0,1,o?Bv:Fv);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},h_={deg:1,rad:1,turn:1},dL={grid:1,flex:1},vr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Wr.style,l=Q2.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",p,_,g,m;if(r===o||!s||h_[r]||h_[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),m=e.getCTM&&Gv(e),(h||o==="%")&&($i[t]||~t.indexOf("adius")))return p=m?e.getBBox()[l?"width":"height"]:e[c],Ut(h?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===or||!_.appendChild)&&(_=or.body),g=_._gsap,g&&h&&g.width&&l&&g.time===Cn.time&&!g.uncache)return Ut(s/g.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,p=e[c],y?e.style[t]=y:gr(e,t)}else(h||o==="%")&&!dL[Dn(_,"display")]&&(a.position=Dn(e,"position")),_===e&&(a.position="static"),_.appendChild(Wr),p=Wr[c],_.removeChild(Wr),a.position="absolute";return l&&h&&(g=Jr(_),g.time=Cn.time,g.width=_[c]),Ut(d?p*s/f:p&&s?f/p*s:0)},ki=function(e,t,i,r){var s;return Fd||vh(),t in Si&&t!=="transform"&&(t=Si[t],~t.indexOf(",")&&(t=t.split(",")[0])),$i[t]&&t!=="transform"?(s=Ma(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rc(Dn(e,Mn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ic[t]&&ic[t](e,t,i)||Dn(e,t)||av(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?vr(e,t,s,i)+i:s},pL=function(e,t,i,r){if(!i||i==="none"){var s=mo(t,e,1),o=s&&Dn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Dn(e,"borderTopColor"))}var a=new Sn(this._pt,e.style,t,0,1,Uv),l=0,u=0,c,f,d,h,p,_,g,m,y,x,v,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Dn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Dn(e,t)||r,_?e.style[t]=_:gr(e,t)),c=[i,r],wv(c),i=c[0],r=c[1],d=i.match(Vs)||[],T=r.match(Vs)||[],T.length){for(;f=Vs.exec(r);)g=f[0],y=r.substring(l,f.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),g!==(_=d[u++]||"")&&(h=parseFloat(_)||0,v=_.substr((h+"").length),g.charAt(1)==="="&&(g=Qs(h,g)+v),m=parseFloat(g),x=g.substr((m+"").length),l=Vs.lastIndex-x.length,x||(x=x||On.units[t]||v,l===r.length&&(r+=x,a.e+=x)),v!==x&&(h=vr(e,t,_,x)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:h,c:m-h,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Bv:Fv;return nv.test(r)&&(a.e=0),this._pt=a,a},d_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mL=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=d_[i]||i,t[1]=d_[r]||r,t.join(" ")},_L=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],$i[a]&&(l=1,a=a==="transformOrigin"?Mn:Ct),gr(i,a);l&&(gr(i,Ct),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ma(i,1),o.uncache=1,kv(r)))}},ic={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Sn(e._pt,t,i,0,0,_L);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Sa=[1,0,0,1,0,0],Wv={},Xv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},p_=function(e){var t=Dn(e,Ct);return Xv(t)?Sa:t.substr(7).match(tv).map(Ut)},zd=function(e,t){var i=e._gsap||Jr(e),r=e.style,s=p_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Sa:s):(s===Sa&&!e.offsetParent&&e!==eo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,eo.appendChild(e)),s=p_(e),l?r.display=l:gr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):eo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xh=function(e,t,i,r,s,o){var a=e._gsap,l=s||zd(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],p=l[1],_=l[2],g=l[3],m=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,T=parseFloat(x[1])||0,A,R,S,M;i?l!==Sa&&(R=h*g-p*_)&&(S=v*(g/R)+T*(-_/R)+(_*y-g*m)/R,M=v*(-p/R)+T*(h/R)-(h*y-p*m)/R,v=S,T=M):(A=Vv(e),v=A.x+(~x[0].indexOf("%")?v/100*A.width:v),T=A.y+(~(x[1]||x[0]).indexOf("%")?T/100*A.height:T)),r||r!==!1&&a.smooth?(m=v-u,y=T-c,a.xOffset=f+(m*h+y*_)-m,a.yOffset=d+(m*p+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Mn]="0px 0px",o&&(ar(o,a,"xOrigin",u,v),ar(o,a,"yOrigin",c,T),ar(o,a,"xOffset",f,a.xOffset),ar(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+T)},Ma=function(e,t){var i=e._gsap||new Rv(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Dn(e,Mn)||"0",c,f,d,h,p,_,g,m,y,x,v,T,A,R,S,M,b,C,U,O,z,$,F,X,k,fe,de,ue,Se,qe,re,me;return c=f=d=_=g=m=y=x=v=0,h=p=1,i.svg=!!(e.getCTM&&Gv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ct]!=="none"?l[Ct]:"")),r.scale=r.rotate=r.translate="none"),R=zd(e,i.svg),i.svg&&(i.uncache?(k=e.getBBox(),u=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),xh(e,X||u,!!X||i.originIsAbsolute,i.smooth!==!1,R)),T=i.xOrigin||0,A=i.yOrigin||0,R!==Sa&&(C=R[0],U=R[1],O=R[2],z=R[3],c=$=R[4],f=F=R[5],R.length===6?(h=Math.sqrt(C*C+U*U),p=Math.sqrt(z*z+O*O),_=C||U?Is(U,C)*Nr:0,y=O||z?Is(O,z)*Nr+_:0,y&&(p*=Math.abs(Math.cos(y*to))),i.svg&&(c-=T-(T*C+A*O),f-=A-(T*U+A*z))):(me=R[6],qe=R[7],de=R[8],ue=R[9],Se=R[10],re=R[11],c=R[12],f=R[13],d=R[14],S=Is(me,Se),g=S*Nr,S&&(M=Math.cos(-S),b=Math.sin(-S),X=$*M+de*b,k=F*M+ue*b,fe=me*M+Se*b,de=$*-b+de*M,ue=F*-b+ue*M,Se=me*-b+Se*M,re=qe*-b+re*M,$=X,F=k,me=fe),S=Is(-O,Se),m=S*Nr,S&&(M=Math.cos(-S),b=Math.sin(-S),X=C*M-de*b,k=U*M-ue*b,fe=O*M-Se*b,re=z*b+re*M,C=X,U=k,O=fe),S=Is(U,C),_=S*Nr,S&&(M=Math.cos(S),b=Math.sin(S),X=C*M+U*b,k=$*M+F*b,U=U*M-C*b,F=F*M-$*b,C=X,$=k),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),h=Ut(Math.sqrt(C*C+U*U+O*O)),p=Ut(Math.sqrt(F*F+me*me)),S=Is($,F),y=Math.abs(S)>2e-4?S*Nr:0,v=re?1/(re<0?-re:re):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Xv(Dn(e,Ct)),X&&e.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Ut(h),i.scaleY=Ut(p),i.rotation=Ut(_)+a,i.rotationX=Ut(g)+a,i.rotationY=Ut(m)+a,i.skewX=y+a,i.skewY=x+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Mn]=rc(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?vL:Hv?qv:gL,i.uncache=0,i},rc=function(e){return(e=e.split(" "))[0]+" "+e[1]},zu=function(e,t,i){var r=en(t);return Ut(parseFloat(t)+parseFloat(vr(e,"x",i+"px",r)))+r},gL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qv(e,t)},Lr="0deg",Io="0px",Dr=") ",qv=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,p=i.scaleX,_=i.scaleY,g=i.transformPerspective,m=i.force3D,y=i.target,x=i.zOrigin,v="",T=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==Lr||c!==Lr)){var A=parseFloat(c)*to,R=Math.sin(A),S=Math.cos(A),M;A=parseFloat(f)*to,M=Math.cos(A),o=zu(y,o,R*M*-x),a=zu(y,a,-Math.sin(A)*-x),l=zu(y,l,S*M*-x+x)}g!==Io&&(v+="perspective("+g+Dr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(T||o!==Io||a!==Io||l!==Io)&&(v+=l!==Io||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Dr),u!==Lr&&(v+="rotate("+u+Dr),c!==Lr&&(v+="rotateY("+c+Dr),f!==Lr&&(v+="rotateX("+f+Dr),(d!==Lr||h!==Lr)&&(v+="skew("+d+", "+h+Dr),(p!==1||_!==1)&&(v+="scale("+p+", "+_+Dr),y.style[Ct]=v||"translate(0, 0)"},vL=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,p=i.xOrigin,_=i.yOrigin,g=i.xOffset,m=i.yOffset,y=i.forceCSS,x=parseFloat(o),v=parseFloat(a),T,A,R,S,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=to,u*=to,T=Math.cos(l)*f,A=Math.sin(l)*f,R=Math.sin(l-u)*-d,S=Math.cos(l-u)*d,u&&(c*=to,M=Math.tan(u-c),M=Math.sqrt(1+M*M),R*=M,S*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),T*=M,A*=M)),T=Ut(T),A=Ut(A),R=Ut(R),S=Ut(S)):(T=f,S=d,A=R=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=vr(h,"x",o,"px"),v=vr(h,"y",a,"px")),(p||_||g||m)&&(x=Ut(x+p-(p*T+_*R)+g),v=Ut(v+_-(p*A+_*S)+m)),(r||s)&&(M=h.getBBox(),x=Ut(x+r/100*M.width),v=Ut(v+s/100*M.height)),M="matrix("+T+","+A+","+R+","+S+","+x+","+v+")",h.setAttribute("transform",M),y&&(h.style[Ct]=M)},xL=function(e,t,i,r,s){var o=360,a=Xt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Nr:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*l_)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*l_)%o-~~(u/o)*o)),e._pt=d=new Sn(e._pt,t,i,r,u,tL),d.e=c,d.u="deg",e._props.push(i),d},m_=function(e,t){for(var i in t)e[i]=t[i];return e},yL=function(e,t,i){var r=m_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,h,p;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ct]=t,a=Ma(i,1),gr(i,Ct),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ct],o[Ct]=t,a=Ma(i,1),o[Ct]=u);for(l in $i)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=en(u),p=en(c),f=h!==p?vr(i,l,u,p):parseFloat(u),d=parseFloat(c),e._pt=new Sn(e._pt,a,l,f,d-f,_h),e._pt.u=p||0,e._props.push(l));m_(a,r)};yn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ic[e>1?"border"+n:n]=function(a,l,u,c,f){var d,h;if(arguments.length<4)return d=o.map(function(p){return ki(a,p,u)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(c+"").split(" "),h={},o.forEach(function(p,_){return h[p]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var jv={name:"css",register:vh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,h,p,_,g,m,y,x,v,T,A,R,S,M;Fd||vh(),this.styles=this.styles||zv(e),S=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(An[_]&&Cv(_,t,i,r,e,s)))){if(h=typeof c,p=ic[_],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=va(c)),p)p(this,e,_,c,i)&&(R=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",hr.lastIndex=0,hr.test(u)||(g=en(u),m=en(c),m?g!==m&&(u=vr(e,_,u,m)+m):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),S.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Xt(u)&&~u.indexOf("random(")&&(u=va(u)),en(u+"")||u==="auto"||(u+=On.units[_]||en(ki(e,_))||""),(u+"").charAt(1)==="="&&(u=ki(e,_))):u=ki(e,_),d=parseFloat(u),y=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),f=parseFloat(c),_ in Si&&(_==="autoAlpha"&&(d===1&&ki(e,"visibility")==="hidden"&&f&&(d=0),S.push("visibility",0,a.visibility),ar(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in $i,x){if(this.styles.save(_),M=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Dn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=Dn(e,"perspective"),b?e.style.perspective=b:gr(e,"perspective")}f=parseFloat(c)}if(v||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ma(e,t.parseTransform),A=t.smoothOrigin!==!1&&T.smooth,v=this._pt=new Sn(this._pt,a,Ct,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new Sn(this._pt,T,"scaleY",T.scaleY,(y?Qs(T.scaleY,y+f):f)-T.scaleY||0,_h),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(Mn,0,a[Mn]),c=mL(c),T.svg?xh(e,c,0,A,0,this):(m=parseFloat(c.split(" ")[2])||0,m!==T.zOrigin&&ar(this,T,"zOrigin",T.zOrigin,m),ar(this,a,_,rc(u),rc(c)));continue}else if(_==="svgOrigin"){xh(e,c,1,A,0,this);continue}else if(_ in Wv){xL(this,T,_,d,y?Qs(d,y+c):c);continue}else if(_==="smoothOrigin"){ar(this,T,"smooth",T.smooth,c);continue}else if(_==="force3D"){T[_]=c;continue}else if(_==="transform"){yL(this,c,e);continue}}else _ in a||(_=mo(_)||_);if(x||(f||f===0)&&(d||d===0)&&!eL.test(c)&&_ in a)g=(u+"").substr((d+"").length),f||(f=0),m=en(c)||(_ in On.units?On.units[_]:g),g!==m&&(d=vr(e,_,u,m)),this._pt=new Sn(this._pt,x?T:a,_,d,(y?Qs(d,y+f):f)-d,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?rL:_h),this._pt.u=m||0,x&&M!==c?(this._pt.b=u,this._pt.e=M,this._pt.r=iL):g!==m&&m!=="%"&&(this._pt.b=u,this._pt.r=nL);else if(_ in a)pL.call(this,e,_,u,y?y+c:c);else if(_ in e)this.add(e,_,u||e[_],y?y+c:c,r,s);else if(_!=="parseTransform"){Ad(_,c);continue}x||(_ in a?S.push(_,0,a[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,u||e[_])),o.push(_)}}R&&Ov(this)},render:function(e,t){if(t.tween._time||!Bd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ki,aliases:Si,getSetter:function(e,t,i){var r=Si[t];return r&&r.indexOf(",")<0&&(t=r),t in $i&&t!==Mn&&(e._gsap.x||ki(e,"x"))?i&&a_===i?t==="scale"?lL:aL:(a_=i||{})&&(t==="scale"?cL:uL):e.style&&!Ed(e.style[t])?sL:~t.indexOf("-")?oL:Od(e,t)},core:{_removeProperty:gr,_getMatrix:zd}};bn.utils.checkPrefix=mo;bn.core.getStyleSaver=zv;(function(n,e,t,i){var r=yn(n+","+e+","+t,function(s){$i[s]=1});yn(e,function(s){On.units[s]="deg",Wv[s]=1}),Si[r[13]]=n+","+e,yn(i,function(s){var o=s.split(":");Si[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});bn.registerPlugin(jv);var Ll=bn.registerPlugin(jv)||bn;Ll.core.Tween;const SL=""+new URL("rajahub.BPvnoCJd.png",import.meta.url).href,ML=""+new URL("pba.wyuKTiXF.svg",import.meta.url).href,bL=""+new URL("alfred.DO3Ix6WN.png",import.meta.url).href,EL=""+new URL("raja.CFyN9aW7.png",import.meta.url).href,TL=""+new URL("gostiki.BaOO3HZY.png",import.meta.url).href,wL={class:"cabecalho"},AL=["aria-expanded"],RL={key:0,id:"menu-movel",class:"navegacao-movel","aria-label":"Navegação móvel"},CL=["href"],PL={id:"conteudo"},LL={id:"inicio",class:"percurso-campo"},DL={class:"arte-abertura"},IL={class:"sobretitulo"},UL={key:0},OL={key:1},NL={key:2},FL={key:3},BL={class:"controles-percurso"},kL={class:"barra-percurso","aria-hidden":"true"},zL=["aria-pressed"],HL={class:"indice-abertura"},VL={id:"sobre",class:"sobre espacamento-secao"},GL={class:"composicao-sobre"},WL={class:"texto-sobre"},XL={id:"marcas",class:"faixa-marcas","aria-label":"Marcas e projetos em que trabalhei"},qL={class:"cabecalho-marcas"},jL=["aria-pressed"],$L={class:"janela-marcas"},YL=["aria-hidden"],KL=["src","alt"],JL={key:1,class:"marca-tipografica"},ZL={id:"tecnologias",class:"tecnologias espacamento-secao"},QL={class:"filtros",role:"group","aria-label":"Filtrar tecnologias"},eD=["aria-pressed","onClick"],tD={key:0},nD={class:"grade-tecnologias"},iD={class:"topo-tecnologia"},rD={class:"simbolo-tecnologia"},sD={class:"categoria-tecnologia"},oD={id:"projetos",class:"projetos espacamento-secao"},aD={class:"grade-projetos"},lD=["onClick","aria-label"],cD={class:"topo-visual"},uD={key:0,class:"print-projeto"},fD=["src","alt"],hD={key:1,class:"capa-projeto"},dD={class:"nome-capa"},pD={class:"legenda-capa"},mD={class:"recursos-capa"},_D={class:"informacoes-projeto"},gD={class:"resumo-projeto"},vD={class:"feito-com espacamento-secao"},xD={class:"conteudo-construcao"},yD={class:"etiquetas-tecnologias"},SD={id:"contato",class:"rodape espacamento-secao"},MD={class:"titulo-rodape"},bD=["href"],ED={class:"contato-rodape"},TD=["href"],wD={class:"redes-sociais"},AD=["href"],RD=["href"],CD={class:"base-rodape"},PD={class:"preferencias"},LD=["aria-pressed"],DD=["aria-pressed"],ID=["aria-label"],UD={key:0,class:"conteudo-janela"},OD={class:"sobretitulo"},ND=["src","alt"],FD={class:"etiquetas-tecnologias"},BD=["href"],kD={class:"nota-formulario",role:"status"},zD={__name:"app",setup(n){const e=Ft(!1),t=[{name:"PBA Contabilidade",image:ML,invert:!0},{name:"Alfred",image:bL},{name:"RajaHub",image:EL,invert:!0},{name:"Gostiki",image:TL},{name:"PersonalFit"}],i=Ft(!1),r=Ft(!1),s=Ft(!0),o=Ft(0),a=Ft("Todas"),l=Ft(null),u=Ft(null),c=Ft(null),f=Ft(""),d=Ft(!1),h=["Todas","Front-end","Back-end","Banco de dados"],p=[{name:"PHP",category:"Back-end",label:"Aplicações & lógica de servidor",mark:"<?>"},{name:"Python",category:"Back-end",label:"Automação & desenvolvimento web",mark:"Py"},{name:"Flask",category:"Back-end",label:"APIs & aplicações leves",mark:"Fl"},{name:"Django",category:"Back-end",label:"Aplicações web estruturadas",mark:"Dj"},{name:"MySQL",category:"Banco de dados",label:"Dados & consultas relacionais",mark:"My"},{name:"JavaScript",category:"Front-end",label:"Interatividade & comportamento",mark:"Js"},{name:"HTML",category:"Front-end",label:"Estrutura & semântica",mark:"</>"},{name:"CSS",category:"Front-end",label:"Design & responsividade",mark:"#"}],_=Gh(()=>p.filter(R=>a.value==="Todas"||R.category===a.value)),g=[{id:"01",name:"PBA Contabilidade",type:"SITE PARA EMPRESA",tags:"HTML · CSS · JAVASCRIPT",class:"projeto-pba",cover:"PBA",caption:"Contabilidade para cartórios",features:["Serviços","Dúvidas frequentes","Contato"],summary:"Site da PBA voltado à contabilidade para cartórios.",title:"PBA · Contabilidade para cartórios",description:"Participei do desenvolvimento do site da PBA voltado a cartórios. A página apresenta os serviços, explica as etapas do atendimento e reúne dúvidas frequentes e formas de contato. O projeto combina HTML, CSS e JavaScript, com uma aplicação Flask para servir o site.",stack:["HTML","CSS","JavaScript","Bootstrap","Python","Flask"]},{id:"02",name:"PersonalFit",type:"SISTEMA WEB",tags:"PHP · MYSQL · JAVASCRIPT",class:"projeto-personalfit",cover:"PersonalFit",caption:"A rotina do treino, organizada.",features:["Alunos","Treinos","Avaliações"],summary:"Gestão de alunos e treinos, com acesso para o personal e o aluno.",title:"PersonalFit · Alunos e treinos",description:"Sistema com áreas separadas para personal e aluno. Reúne cadastro de alunos, montagem de treinos, agenda e avaliações físicas. O aluno pode consultar seus treinos e acompanhar o histórico. Também conta com uma API para acesso aos dados do aluno.",stack:["PHP","MySQL","JavaScript","HTML","CSS"]},{id:"03",name:"Alfred",type:"SISTEMA HOSPITALAR",tags:"PHP · MYSQL · JAVASCRIPT",class:"projeto-alfred",cover:"Alfred",caption:"Presente em 27 cidades.",features:["Gestão hospitalar","Atendimentos","Agendas"],summary:"Sistema hospitalar utilizado em 27 cidades, em cujo desenvolvimento participei.",title:"Alfred · Gestão hospitalar",description:"Participei do desenvolvimento do Alfred, sistema hospitalar utilizado em 27 cidades. O sistema reúne recursos para organizar atendimentos, agendas e outras rotinas da saúde, com módulos para diferentes etapas da gestão hospitalar.",stack:["PHP","MySQL","JavaScript","HTML","CSS"]},{id:"04",name:"RajaHub",type:"SITE INSTITUCIONAL",tags:"WORDPRESS · PHP · JAVASCRIPT",class:"projeto-raja",cover:"RajaHub",caption:"Empreendedorismo, tecnologia e inovação.",features:["Ventures","Bizz","Inc"],image:SL,imageAlt:"Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação.",url:"https://rajahub.com.br/",summary:"Site do RajaHub, que apresenta suas frentes de atuação e conecta empreendedores e investidores.",title:"RajaHub · Site institucional",description:"Participei do desenvolvimento do site do RajaHub, voltado a empreendedorismo, tecnologia e inovação. O site apresenta as frentes de atuação do grupo e os caminhos para quem busca investimento ou quer investir. O projeto local utiliza WordPress, com templates em PHP e estilos próprios.",stack:["WordPress","PHP","JavaScript","HTML","CSS"]},{id:"05",name:"Gostiki",type:"SISTEMA DE GESTÃO",tags:"PHP · MYSQL · JAVASCRIPT",class:"projeto-gostiki",cover:"Gostiki",caption:"Do balcão ao delivery.",features:["PDV","Pedidos","Impressão"],summary:"Sistema para a Gostiki Açaí & Sorvete, com vendas, pedidos e gestão de lojas.",title:"Gostiki · Vendas e operação",description:"Participei do desenvolvimento do sistema da Gostiki Açaí & Sorvete. O projeto reúne ponto de venda, mesas, delivery, cadastro de produtos e complementos, além da gestão de lojas e clientes. Também inclui recursos de integração com o iFood e impressão de comandas pelo Gostiki Print.",stack:["PHP","MySQL","JavaScript","HTML","CSS"]}];function m(R){l.value=R,Ch(()=>u.value.showModal())}function y(){i.value=!1}function x(R){const S=R.target.closest('a[href^="#"]');if(!S)return;const M=document.getElementById(S.getAttribute("href").slice(1));M&&(R.preventDefault(),M.scrollIntoView({behavior:s.value?"smooth":"instant"}))}function v(){r.value=!r.value;try{localStorage.setItem("victor-theme",r.value?"dark":"light")}catch{}}function T(){if(!f.value.trim())return;const R=new Blob([`IDEIA DE PROJETO

${f.value.trim()}

Rascunho criado no portfólio de Victor. Este arquivo não foi enviado.
`],{type:"text/plain;charset=utf-8"}),S=URL.createObjectURL(R),M=document.createElement("a");M.href=S,M.download="minha-ideia.txt",M.click(),setTimeout(()=>URL.revokeObjectURL(S),1e3),d.value=!0}let A;return gc(()=>{try{r.value=localStorage.getItem("victor-theme")==="dark"}catch{}s.value=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,s.value&&(A=Ll.context(()=>{Ll.from(".titulo-abertura > span",{y:75,opacity:0,duration:1.2,stagger:.13,ease:"power3.out"}),Ll.from(".introducao-abertura, .rodape-abertura",{opacity:0,y:18,duration:1,delay:.4,clearProps:"opacity,transform"})}))}),vc(()=>A?.revert()),(R,S)=>{const M=JP,b=t2;return Xe(),Ke("div",{class:di(["site",{escuro:ge(r),"movimento-desativado":!ge(s)}]),onClick:x},[S[56]||(S[56]=H("a",{class:"pular-conteudo",href:"#conteudo"},"Pular para o conteúdo",-1)),H("header",wL,[S[14]||(S[14]=Ky('<a class="marca" href="#inicio" aria-label="Victor, início">victor<span class="simbolo-marca">✳</span></a><p class="descricao-cabecalho"> DESENVOLVIMENTO WEB<br>&amp; EXPERIÊNCIAS DIGITAIS </p><nav class="navegacao-principal" aria-label="Navegação principal"><a href="#sobre">Sobre <sup>01</sup></a><a href="#tecnologias">Tecnologias <sup>02</sup></a><a href="#projetos">Projetos <sup>03</sup></a></nav><a class="link-contato" href="#contato">Vamos conversar <span>↗</span></a>',4)),H("button",{class:"alternar-menu",onClick:S[0]||(S[0]=C=>i.value=!ge(i)),"aria-expanded":ge(i),"aria-controls":"menu-movel"},nt(ge(i)?"Fechar −":"Menu +"),9,AL)]),ge(i)?(Xe(),Ke("nav",RL,[(Xe(),Ke(Bt,null,ci(["Sobre","Tecnologias","Projetos","Contato"],(C,U)=>H("a",{key:C,href:"#"+C.toLowerCase(),onClick:y},[H("sup",null,"0"+nt(U+1),1),Ye(nt(C)+" ↗",1)],8,CL)),64))])):Ui("",!0),H("main",PL,[H("div",LL,[H("section",{class:"abertura",style:ts({"--progresso":ge(o)}),"aria-label":"Percurso interativo pelo campo"},[S[22]||(S[22]=H("div",{class:"introducao-abertura"},[H("span",{class:"sobretitulo"},[H("i",{class:"ponto-destaque"}),Ye(" OLÁ, EU SOU O VICTOR")]),H("p",null,[Ye("Entre boas ideias"),H("br"),Ye("e experiências reais, existe código.")])],-1)),H("div",DL,[Dt(b,null,{default:Lh(()=>[Dt(M,{movimento:ge(s),onProgresso:S[1]||(S[1]=C=>o.value=C)},null,8,["movimento"])]),_:1})]),S[23]||(S[23]=H("div",{class:"legenda-arte"},[H("span",null,"UM CAMPO DE POSSIBILIDADES"),H("span",null,"ROLE PARA CAMINHAR. MOVA O MOUSE PARA EXPLORAR.")],-1)),S[24]||(S[24]=H("h1",{class:"titulo-abertura"},[H("span",null,"Um pouco"),H("span",{class:"segunda-linha"},[H("em",null,"do que"),H("span",{class:"asterisco-titulo","aria-hidden":"true"},"✳")]),H("span",null,[Ye("eu "),H("em",null,"faço.")])],-1)),H("div",{class:di(["mensagem-percurso",{visivel:ge(o)>.2&&ge(o)<.94,"mensagem-clareira":ge(o)>.58}])},[H("span",IL,nt(ge(o)<.58?"01 / EXPLORE":ge(o)<.7?"02 / RESPIRE":ge(o)<.83?"03 / AMPLIE":"04 / NOVOS ÂNGULOS"),1),ge(o)<.58?(Xe(),Ke("h2",UL,[...S[15]||(S[15]=[Ye(" Fique à vontade.",-1),H("br",null,null,-1),H("em",null,"A casa é sua.",-1)])])):ge(o)<.7?(Xe(),Ke("h2",OL,[...S[16]||(S[16]=[Ye(" Pode ir",-1),H("br",null,null,-1),H("em",null,"sem pressa.",-1)])])):ge(o)<.83?(Xe(),Ke("h2",NL,[...S[17]||(S[17]=[Ye(" De longe,",-1),H("br",null,null,-1),H("em",null,"tudo muda.",-1)])])):(Xe(),Ke("h2",FL,[...S[18]||(S[18]=[Ye("Agora, vamos",-1),H("br",null,null,-1),H("em",null,"aos projetos.",-1)])]))],2),H("div",BL,[H("span",null,"PERCURSO "+nt(String(Math.round(ge(o)*100)).padStart(3,"0"))+"%",1),H("div",kL,[H("span",{style:ts({transform:`scaleX(${ge(o)})`})},null,4)]),H("button",{onClick:S[2]||(S[2]=C=>s.value=!ge(s)),"aria-pressed":!ge(s)},nt(ge(s)?"Pausar movimento":"Retomar movimento"),9,zL),S[19]||(S[19]=H("a",{href:"#sobre"},"Pular percurso ↗",-1))]),S[25]||(S[25]=H("div",{class:"rodape-abertura"},[H("a",{class:"link-circular",href:"#projetos"},[H("span",{class:"circulo"},"↗"),Ye(" Explore meu trabalho")]),H("p",null,[Ye(" DO BACK-END À INTERFACE."),H("br"),Ye("DA PRIMEIRA LINHA AO ÚLTIMO DETALHE. ")]),H("a",{href:"#sobre",class:"link-rolagem"},[Ye("ROLE PARA DESCOBRIR "),H("span",null,"↓")])],-1)),H("div",HL,[S[20]||(S[20]=H("span",null,"PORTFÓLIO PESSOAL",-1)),S[21]||(S[21]=H("span",null,"CRIATIVIDADE ENCONTRA TECNOLOGIA",-1)),H("span",null,"© "+nt(new Date().getFullYear()),1)])],4)]),H("section",VL,[S[30]||(S[30]=H("div",{class:"rotulo-secao"},[H("span",null,"01 / SOBRE MIM"),H("span",null,"UM POUCO SOBRE MEU TRABALHO")],-1)),H("div",GL,[S[29]||(S[29]=H("div",{class:"simbolo-sobre","aria-hidden":"true"},"↳",-1)),H("div",null,[S[27]||(S[27]=H("h2",null,[Ye("Entre sites"),H("br"),Ye("e "),H("em",null,"sistemas.")],-1)),H("div",WL,[H("p",null,nt(ge(li).bio),1),S[26]||(S[26]=H("p",null," Gosto de entender como as coisas funcionam antes de sair programando. O que precisa aparecer na tela? O que dá para simplificar? É a partir dessas perguntas que começo a trabalhar. ",-1))]),S[28]||(S[28]=H("a",{href:"#tecnologias",class:"link-texto"},[Ye("Veja as tecnologias que uso "),H("span",null,"↘")],-1))])])]),H("section",XL,[H("div",qL,[S[31]||(S[31]=H("p",null,"MARCAS E PROJETOS EM QUE TRABALHEI",-1)),ge(s)?(Xe(),Ke("button",{key:0,onClick:S[3]||(S[3]=C=>e.value=!ge(e)),"aria-pressed":ge(e)},nt(ge(e)?"Retomar faixa":"Pausar faixa"),9,jL)):Ui("",!0)]),H("div",$L,[H("div",{class:di(["trilho-marcas",{pausado:ge(e)}])},[(Xe(),Ke(Bt,null,ci(2,C=>H("div",{key:C,class:"grupo-marcas","aria-hidden":C===2?"true":void 0},[(Xe(),Ke(Bt,null,ci(t,U=>H("div",{key:U.name,class:"marca-projeto"},[U.image?(Xe(),Ke("img",{key:0,src:U.image,alt:U.name,class:di({invertida:U.invert}),loading:"lazy"},null,10,KL)):(Xe(),Ke("span",JL,nt(U.name),1))])),64))],8,YL)),64))],2)])]),H("section",ZL,[S[33]||(S[33]=H("div",{class:"rotulo-secao"},[H("span",null,"02 / TECNOLOGIAS"),H("span",null,"AS FERRAMENTAS. AS POSSIBILIDADES.")],-1)),S[34]||(S[34]=H("div",{class:"cabecalho-secao"},[H("h2",null,[Ye("O que uso"),H("br"),H("em",null,"para criar.")]),H("p",null,[Ye(" Da tela ao banco de dados."),H("br"),Ye("Estas são as tecnologias que uso nos meus projetos. ")])],-1)),H("div",QL,[(Xe(),Ke(Bt,null,ci(h,C=>H("button",{key:C,"aria-pressed":ge(a)===C,class:di({ativo:ge(a)===C}),onClick:U=>a.value=C},[Ye(nt(C),1),C==="Todas"?(Xe(),Ke("span",tD,"08")):Ui("",!0)],10,eD)),64))]),H("div",nD,[(Xe(!0),Ke(Bt,null,ci(ge(_),(C,U)=>(Xe(),Ke("article",{key:C.name,class:"cartao-tecnologia"},[H("div",iD,[H("span",rD,nt(C.mark),1),H("span",sD,nt(C.category),1)]),H("h3",null,nt(C.name),1),H("p",null,nt(C.label),1),S[32]||(S[32]=H("span",{class:"seta-tecnologia","aria-hidden":"true"},"↗",-1))]))),128))])]),H("section",oD,[S[37]||(S[37]=H("div",{class:"rotulo-secao"},[H("span",null,"03 / PROJETOS"),H("span",null,"SITES E SISTEMAS")],-1)),S[38]||(S[38]=H("div",{class:"cabecalho-secao"},[H("h2",null,[Ye("Alguns trabalhos"),H("br"),Ye("de que "),H("em",null,"fiz parte.")]),H("p",null," Sites para apresentar uma empresa e sistemas para organizar a rotina. Selecione um projeto para saber mais. ")],-1)),H("div",aD,[(Xe(),Ke(Bt,null,ci(g,C=>H("button",{key:C.id,class:"cartao-projeto",onClick:U=>m(C),"aria-label":"Ver detalhes: "+C.name},[H("div",{class:di(["visual-projeto",C.class])},[H("div",cD,[H("span",null,"V / "+nt(C.id),1),H("span",null,nt(C.type),1)]),C.image?(Xe(),Ke("div",uD,[S[35]||(S[35]=H("div",{class:"barra-print","aria-hidden":"true"},[H("span",null,"● ● ●"),Ye(" rajahub.com.br")],-1)),H("img",{src:C.image,alt:C.imageAlt,loading:"lazy",width:"1265",height:"712"},null,8,fD)])):(Xe(),Ke("div",hD,[H("span",dD,nt(C.cover),1),H("span",pD,nt(C.caption),1),H("div",mD,[(Xe(!0),Ke(Bt,null,ci(C.features,U=>(Xe(),Ke("span",{key:U},nt(U),1))),128))])])),S[36]||(S[36]=H("span",{class:"abrir-projeto"},"↗",-1))],2),H("div",_D,[H("h3",null,nt(C.name),1),H("span",null,nt(C.tags),1)]),H("p",gD,nt(C.summary),1)],8,lD)),64))])]),H("section",vD,[S[42]||(S[42]=H("div",{class:"rotulo-secao"},[H("span",null,"NOS BASTIDORES"),H("span",null,"ESTE SITE TAMBÉM É UM PROJETO.")],-1)),H("div",xD,[S[41]||(S[41]=H("h2",null,[Ye("Feito com código."),H("br"),H("em",null,"E um pouco de curiosidade.")],-1)),H("div",null,[S[39]||(S[39]=H("p",null,"A experiência que você está explorando foi construída com:",-1)),H("div",yD,[(Xe(),Ke(Bt,null,ci(["Nuxt","Vue","JavaScript","HTML","CSS","GSAP","Three.js","WebGL"],C=>H("span",{key:C},nt(C),1)),64))]),S[40]||(S[40]=H("p",{class:"nota-construcao"},[Ye(" Nuxt & Vue na estrutura. GSAP no movimento."),H("br"),Ye("Three.js & WebGL na dimensão extra. ")],-1))])])]),H("footer",SD,[S[48]||(S[48]=H("div",{class:"rotulo-secao"},[H("span",null,"04 / O PRÓXIMO PASSO"),H("span",{class:"destaque-rodape"},"● UMA IDEIA PODE SER O COMEÇO.")],-1)),H("div",MD,[S[43]||(S[43]=H("h2",null,[Ye("Vamos criar"),H("br"),Ye("algo "),H("em",null,"interessante?")],-1)),ge(li).email?(Xe(),Ke("a",{key:0,href:"mailto:"+ge(li).email,class:"seta-grande","aria-label":"Enviar e-mail"},"↗",8,bD)):(Xe(),Ke("button",{key:1,class:"seta-grande","aria-label":"Preparar uma ideia de projeto",onClick:S[4]||(S[4]=C=>ge(c).showModal())}," ↗ "))]),H("div",ED,[S[45]||(S[45]=H("p",null,[Ye(" Todo projeto começa com uma conversa."),H("br"),Ye("E toda conversa, com uma boa ideia. ")],-1)),ge(li).email?(Xe(),Ke("a",{key:0,href:"mailto:"+ge(li).email,class:"link-texto"},nt(ge(li).email)+" ↗",9,TD)):(Xe(),Ke("button",{key:1,class:"link-texto",onClick:S[5]||(S[5]=C=>ge(c).showModal())},[...S[44]||(S[44]=[Ye(" Prepare sua ideia ",-1),H("span",null,"↗",-1)])])),H("div",wD,[ge(li).github?(Xe(),Ke("a",{key:0,href:ge(li).github,target:"_blank",rel:"noopener noreferrer"},"GitHub ↗",8,AD)):Ui("",!0),ge(li).linkedin?(Xe(),Ke("a",{key:1,href:ge(li).linkedin,target:"_blank",rel:"noopener noreferrer"},"LinkedIn ↗",8,RD)):Ui("",!0)])]),H("div",CD,[S[47]||(S[47]=H("a",{class:"marca",href:"#inicio"},[Ye("victor"),H("span",{class:"simbolo-marca"},"✳")],-1)),H("span",null,"© "+nt(new Date().getFullYear())+" VICTOR · FEITO COM INTENÇÃO.",1),H("div",PD,[H("button",{onClick:v,"aria-pressed":ge(r)},nt(ge(r)?"◑ Tema escuro":"◐ Tema claro"),9,LD),H("button",{onClick:S[6]||(S[6]=C=>s.value=!ge(s)),"aria-pressed":ge(s)}," Movimento "+nt(ge(s)?"ativado":"desativado"),9,DD),S[46]||(S[46]=H("a",{href:"#inicio","aria-label":"Voltar ao topo"},"↑",-1))])])])]),H("dialog",{ref_key:"dialog",ref:u,"aria-label":ge(l)?.title||"Detalhes do projeto",class:"janela-detalhes",onClick:S[9]||(S[9]=C=>{C.target===ge(u)&&ge(u).close()})},[ge(l)?(Xe(),Ke("div",UD,[H("button",{class:"fechar-janela",onClick:S[7]||(S[7]=C=>ge(u).close()),"aria-label":"Fechar detalhes"}," ✕"),H("span",OD,nt(ge(l).type)+" / "+nt(ge(l).id),1),H("h2",null,nt(ge(l).title),1),H("p",null,nt(ge(l).description),1),ge(l).image?(Xe(),Ke("img",{key:0,class:"print-detalhes",src:ge(l).image,alt:ge(l).imageAlt,width:"1265",height:"712"},null,8,ND)):Ui("",!0),H("div",FD,[(Xe(!0),Ke(Bt,null,ci(ge(l).stack,C=>(Xe(),Ke("span",{key:C},nt(C),1))),128))]),ge(l).url?(Xe(),Ke("a",{key:1,class:"link-texto visitar-projeto",href:ge(l).url,target:"_blank",rel:"noopener noreferrer"},[...S[49]||(S[49]=[Ye("Visitar site ",-1),H("span",null,"↗",-1)])],8,BD)):Ui("",!0),H("button",{class:"link-texto",onClick:S[8]||(S[8]=C=>ge(u).close())},[...S[50]||(S[50]=[Ye(" Voltar aos projetos ",-1),H("span",null,"↙",-1)])])])):Ui("",!0)],8,ID),H("dialog",{ref_key:"briefDialog",ref:c,"aria-label":"Preparar uma ideia de projeto",class:"janela-detalhes",onClick:S[13]||(S[13]=C=>{C.target===ge(c)&&ge(c).close()})},[H("form",{class:"conteudo-janela",onSubmit:US(T,["prevent"])},[H("button",{type:"button",class:"fechar-janela",onClick:S[10]||(S[10]=C=>ge(c).close()),"aria-label":"Fechar rascunho"}," ✕"),S[51]||(S[51]=H("span",{class:"sobretitulo"},"DO PRIMEIRO INSIGHT AO PRÓXIMO PASSO",-1)),S[52]||(S[52]=H("h2",null,[Ye("Qual é a "),H("em",null,"sua ideia?")],-1)),S[53]||(S[53]=H("p",null," Os canais de contato serão adicionados em breve. Por enquanto, organize sua ideia e salve um rascunho no seu dispositivo. ",-1)),S[54]||(S[54]=H("label",{for:"ideia"},"O que você quer construir?",-1)),jx(H("textarea",{id:"ideia","onUpdate:modelValue":S[11]||(S[11]=C=>Ot(f)?f.value=C:null),required:"",maxlength:"5000",rows:"5",placeholder:"Conte sobre o projeto, o objetivo e o que você imagina…",onInput:S[12]||(S[12]=C=>d.value=!1)},null,544),[[LS,ge(f)]]),S[55]||(S[55]=H("button",{class:"salvar-ideia",type:"submit"},[Ye(" Salvar minha ideia "),H("span",null,"↓")],-1)),H("p",kD,nt(ge(d)?"Rascunho preparado para download. Nenhuma mensagem foi enviada.":"Seu texto permanece no navegador. Nada é enviado."),1)],32)],512)],2)}}},HD="modulepreload",VD=function(n,e){return new URL(n,e).href},__={},g_=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let u=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=u(t.map(c=>{if(c=VD(c,i),c in __)return;__[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(i)for(let p=o.length-1;p>=0;p--){const _=o[p];if(_.href===c&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":HD,f||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),f)return new Promise((p,_)=>{h.addEventListener("load",p),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},GD={__name:"nuxt-error-page",props:{error:Object},setup(n){const t=n.error,i=Number(t.statusCode||500),r=i===404,s=t.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=t.message||t.toString(),a=void 0,c=r?ep(()=>g_(()=>import("./C86ofg0p.js"),__vite__mapDeps([0,1,2]),import.meta.url)):ep(()=>g_(()=>import("./CpH-CoWf.js"),__vite__mapDeps([3,1,4]),import.meta.url));return(f,d)=>(Xe(),Fr(ge(c),cx(Ag({status:ge(i),statusText:ge(s),statusCode:ge(i),statusMessage:ge(s),description:ge(o),stack:ge(a)})),null,16))}},WD={key:0},v_={__name:"nuxt-root",setup(n){const e=()=>null,t=hn(),i=t.deferHydration();if(t.isHydrating){const c=t.hooks.hookOnce("app:error",i),f=is().beforeEach(()=>{c(),f()})}const r=!1;Dh(Kg,$h()),t.hooks.callHookWith(c=>c.map(f=>f()),"vue:setup",[]);const s=Yh(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;function l(c,f,d){const h=t.vueApp.config.errorHandler;if(h&&!h.__nuxt_default)try{h(c,f,d)}catch(p){console.error("[nuxt] Error in `app.config.errorHandler`",p)}}eg((c,f,d)=>{if(t.hooks.callHook("vue:error",c,f,d).catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),a.test(navigator.userAgent))return t.hooks.callHook("app:error",c),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,c),!1;if(db(c)&&(c.fatal||c.unhandled))return t.runWithContext(()=>fb(c)),l(c,f,d),!1});const u=!1;return(c,f)=>(Xe(),Fr(Gy,{onResolve:ge(i)},{default:Lh(()=>[ge(o)?(Xe(),Ke("div",WD)):ge(s)?(Xe(),Fr(ge(GD),{key:1,error:ge(s)},null,8,["error"])):ge(u)?(Xe(),Fr(ge(e),{key:2,context:ge(u)},null,8,["context"])):ge(r)?(Xe(),Fr(gy(ge(r)),{key:3})):(Xe(),Fr(ge(zD),{key:4}))]),_:1},8,["onResolve"]))}};let x_;{let n;x_=async function(){if(n)return n;const i=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?BS(v_):FS(v_),r=KM({vueApp:i});async function s(o){await r.callHook("app:error",o),r.payload.error||=Kh(o)}s.__nuxt_default=!0,i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await QM(r,HE)}catch(o){s(o)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(jM),await r.hooks.callHook("app:mounted",i),await Ch()}catch(o){s(o)}return i},n=x_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{Ke as A,H as B,nt as C,Dt as D,Lh as E,Ye as F,$D as G,eb as H,Ih as I,Xs as J,s0 as K,hn as a,ed as b,vc as c,Nh as d,YD as e,XD as f,ub as g,Pg as h,Ft as i,cb as j,ge as k,Gh as l,bc as m,lb as n,gc as o,Wh as p,vo as q,zp as r,Xu as s,nf as t,is as u,oa as v,sf as w,kg as x,jD as y,Xe as z};
