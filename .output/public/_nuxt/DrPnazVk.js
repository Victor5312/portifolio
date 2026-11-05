const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BYtLI9PQ.js","./D3r3UWZS.js","./error-404.DL_4WIao.css","./D7iEXR8V.js","./error-500.I1Dtv2V5.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Yh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const _t={},ss=[],Ui=()=>{},Qg=()=>!1,Va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Nc=n=>n.startsWith("onUpdate:"),Xt=Object.assign,Kh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ix=Object.prototype.hasOwnProperty,ft=(n,e)=>Ix.call(n,e),Ve=Array.isArray,Sr=n=>Ga(n)==="[object Map]",sc=n=>Ga(n)==="[object Set]",mp=n=>Ga(n)==="[object Date]",Ge=n=>typeof n=="function",yt=n=>typeof n=="string",ci=n=>typeof n=="symbol",ot=n=>n!==null&&typeof n=="object",e_=n=>(ot(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),t_=Object.prototype.toString,Ga=n=>t_.call(n),Ux=n=>Ga(n).slice(8,-1),n_=n=>Ga(n)==="[object Object]",Oc=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cs=Yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fc=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Nx=/-\w/g,yn=Fc(n=>n.replace(Nx,e=>e.slice(1).toUpperCase())),Ox=/\B([A-Z])/g,Ss=Fc(n=>n.replace(Ox,"-$1").toLowerCase()),Bc=Fc(n=>n.charAt(0).toUpperCase()+n.slice(1)),ou=Fc(n=>n?`on${Bc(n)}`:""),Ai=(n,e)=>!Object.is(n,e),Xl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},i_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Jh=n=>{const e=parseFloat(n);return isNaN(e)?n:e},r_=n=>{const e=yt(n)?Number(n):NaN;return isNaN(e)?n:e};let gp;const kc=()=>gp||(gp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ci(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=yt(i)?zx(i):Ci(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(yt(n)||ot(n))return n}const Fx=/;(?![^(]*\))/g,Bx=/:([^]+)/,kx=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function zx(n){const e={};return n.replace(kx,t=>t.startsWith("/*")?"":t).split(Fx).forEach(t=>{if(t){const i=t.split(Bx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _i(n){let e="";if(yt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=_i(n[t]);i&&(e+=i+" ")}else if(ot(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Hx(n){if(!n)return null;let{class:e,style:t}=n;return e&&!yt(e)&&(n.class=_i(e)),t&&(n.style=Ci(t)),n}const Vx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gx=Yh(Vx);function s_(n){return!!n||n===""}function Wx(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=zc(n[r],e[r],t);return i}function _p(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&zc(s,i[a],t)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function Xx(n,e,t){let i=Sr(n),r=Sr(e);if(i||r||(i=sc(n),r=sc(e),i||r))return i&&r?_p(n,e,t):!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),u=e.hasOwnProperty(a);if(l&&!u||!l&&u||!zc(n[a],e[a],t))return!1}return String(n)===String(e)}function vp(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const o=i(n,e,t);return r.delete(n),s.delete(e),o}function zc(n,e,t){if(n===e)return!0;let i=mp(n),r=mp(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=ci(n),r=ci(e),i||r?n===e:(i=Ve(n),r=Ve(e),i||r?i&&r?vp(n,e,t,Wx):!1:(i=ot(n),r=ot(e),i||r?!i||!r?!1:vp(n,e,t,Xx):String(n)===String(e))))}const o_=n=>!!(n&&n.__v_isRef===!0),en=n=>yt(n)?n:n==null?"":Ve(n)||ot(n)&&(n.toString===t_||!Ge(n.toString))?o_(n)?en(n.value):JSON.stringify(n,a_,2):String(n),a_=(n,e)=>o_(e)?a_(n,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[au(i,s)+" =>"]=r,t),{})}:sc(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>au(t))}:ci(e)?au(e):ot(e)&&!Ve(e)&&!n_(e)?String(e):e,au=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let tn;class l_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&tn&&(tn.active?(this.parent=tn,this.index=(tn.scopes||(tn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){if(this._on>0&&--this._on===0){if(tn===this)tn=this.prevScope;else{let e=tn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function qx(n){return new l_(n)}function Hc(){return tn}let vt;const lu=new WeakSet;class c_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&(tn.active?tn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,lu.has(this)&&(lu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||f_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xp(this),h_(this);const e=vt,t=yi;vt=this,yi=!0;try{return this.fn()}finally{d_(this),vt=e,yi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ed(e);this.deps=this.depsTail=void 0,xp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?lu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mf(this)&&this.run()}get dirty(){return mf(this)}}let u_=0,ia,ra;function f_(n,e=!1){if(n.flags|=8,e){n.next=ra,ra=n;return}n.next=ia,ia=n}function Zh(){u_++}function Qh(){if(--u_>0)return;if(ra){let e=ra;for(ra=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ia;){let e=ia;for(ia=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function h_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function d_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ed(i),jx(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function mf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(p_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function p_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ga)||(n.globalVersion=ga,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!mf(n))))return;n.flags|=2;const e=n.dep,t=vt,i=yi;vt=n,yi=!0;try{h_(n);const r=n.fn(n._value);(e.version===0||Ai(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{vt=t,yi=i,d_(n),n.flags&=-3}}function ed(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ed(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function jx(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let yi=!0;const m_=[];function nr(){m_.push(yi),yi=!1}function ir(){const n=m_.pop();yi=n===void 0?!0:n}function xp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let ga=0;class $x{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class td{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!vt||!yi||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new $x(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,g_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,ga++,this.notify(e)}notify(e){Zh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Qh()}}}function g_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)g_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const oc=new WeakMap,us=Symbol(""),gf=Symbol(""),_a=Symbol("");function ln(n,e,t){if(yi&&vt){let i=oc.get(n);i||oc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new td),r.map=i,r.key=t),r.track()}}function Ji(n,e,t,i,r,s){const o=oc.get(n);if(!o){ga++;return}const a=l=>{l&&l.trigger()};if(Zh(),e==="clear")o.forEach(a);else{const l=Ve(n),u=l&&Oc(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,d)=>{(d==="length"||d===_a||!ci(d)&&d>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(_a)),e){case"add":l?u&&a(o.get("length")):(a(o.get(us)),Sr(n)&&a(o.get(gf)));break;case"delete":l||(a(o.get(us)),Sr(n)&&a(o.get(gf)));break;case"set":Sr(n)&&a(o.get(us));break}}Qh()}function Yx(n,e){const t=oc.get(n);return t&&t.get(e)}function Cs(n){const e=rt(n);return e===n||(ln(e,"iterate",_a),Xn(n))?e:Mi(n)?er(n)?e.map(t=>Rr(ui(t))):e.map(Rr):e.map(ui)}function Vc(n){return ln(n=rt(n),"iterate",_a),n}function Ti(n,e){return Mi(n)?Rr(er(n)?ui(e):e):ui(e)}const Kx={__proto__:null,[Symbol.iterator](){return cu(this,Symbol.iterator,n=>Ti(this,n))},concat(...n){return Cs(this).concat(...n.map(e=>Ve(e)?Cs(e):e))},entries(){return cu(this,"entries",n=>(n[1]=Ti(this,n[1]),n))},every(n,e){return ki(this,"every",n,e,void 0,arguments)},filter(n,e){return ki(this,"filter",n,e,t=>t.map(i=>Ti(this,i)),arguments)},find(n,e){return ki(this,"find",n,e,t=>Ti(this,t),arguments)},findIndex(n,e){return ki(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ki(this,"findLast",n,e,t=>Ti(this,t),arguments)},findLastIndex(n,e){return ki(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ki(this,"forEach",n,e,void 0,arguments)},includes(...n){return uu(this,"includes",n)},indexOf(...n){return uu(this,"indexOf",n)},join(n){return Cs(this).join(n)},lastIndexOf(...n){return uu(this,"lastIndexOf",n)},map(n,e){return ki(this,"map",n,e,void 0,arguments)},pop(){return Bo(this,"pop")},push(...n){return Bo(this,"push",n)},reduce(n,...e){return yp(this,"reduce",n,e)},reduceRight(n,...e){return yp(this,"reduceRight",n,e)},shift(){return Bo(this,"shift")},some(n,e){return ki(this,"some",n,e,void 0,arguments)},splice(...n){return Bo(this,"splice",n)},toReversed(){return Cs(this).toReversed()},toSorted(n){return Cs(this).toSorted(n)},toSpliced(...n){return Cs(this).toSpliced(...n)},unshift(...n){return Bo(this,"unshift",n)},values(){return cu(this,"values",n=>Ti(this,n))}};function cu(n,e,t){const i=Vc(n),r=i[e]();return i!==n&&!Xn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Jx=Array.prototype;function ki(n,e,t,i,r,s){const o=Vc(n),a=o!==n&&!Xn(n),l=o[e];if(l!==Jx[e]){const f=l.apply(n,s);return a?ui(f):f}let u=t;o!==n&&(a?u=function(f,d){return t.call(this,Ti(n,f),d,n)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function yp(n,e,t,i){const r=Vc(n),s=r!==n&&!Xn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=Ti(n,u)),t.call(this,u,Ti(n,c),f,n)}):t.length>3&&(o=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](o,...i);return a?Ti(n,l):l}function uu(n,e,t){const i=rt(n);ln(i,"iterate",_a);const r=i[e](...t);return(r===-1||r===!1)&&Gc(t[0])?(t[0]=rt(t[0]),i[e](...t)):r}function Bo(n,e,t=[]){nr(),Zh();const i=rt(n)[e].apply(n,t);return Qh(),ir(),i}const Zx=Yh("__proto__,__v_isRef,__isVue"),__=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function Qx(n){ci(n)||(n=String(n));const e=rt(this);return ln(e,"has",n),e.hasOwnProperty(n)}class v_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?cy:S_:s?M_:y_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=Kx[t]))return l;if(t==="hasOwnProperty")return Qx}const a=Reflect.get(e,t,zt(e)?e:i);if((ci(t)?__.has(t):Zx(t))||(r||ln(e,"get",t),s))return a;if(zt(a)){const l=o&&Oc(t)?a:a.value;return r&&ot(l)?vf(l):l}return ot(a)?r?vf(a):Cr(a):a}}class x_ extends v_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ve(e)&&Oc(t);if(!this._isShallow){const u=Mi(s);if(!Xn(i)&&!Mi(i)&&(s=rt(s),i=rt(i)),!o&&zt(s)&&!zt(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,zt(e)?e:r);return e===rt(r)&&l&&(a?Ai(i,s)&&Ji(e,"set",t,i):Ji(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ji(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!__.has(t))&&ln(e,"has",t),i}ownKeys(e){return ln(e,"iterate",Ve(e)?"length":us),Reflect.ownKeys(e)}}class ey extends v_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ty=new x_,ny=new ey,iy=new x_(!0);const _f=n=>n,ol=n=>Reflect.getPrototypeOf(n);function ry(n,e,t){return function(...i){const r=this.__v_raw,s=rt(r),o=Sr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?_f:e?Rr:ui;return!e&&ln(s,"iterate",l?gf:us),Xt(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function al(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function sy(n,e){const t={get(r){const s=this.__v_raw,o=rt(s),a=rt(r);n||(Ai(r,a)&&ln(o,"get",r),ln(o,"get",a));const{has:l}=ol(o),u=e?_f:n?Rr:ui;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&ln(rt(r),"iterate",us),r.size},has(r){const s=this.__v_raw,o=rt(s),a=rt(r);return n||(Ai(r,a)&&ln(o,"has",r),ln(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=rt(a),u=e?_f:n?Rr:ui;return!n&&ln(l,"iterate",us),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Xt(t,n?{add:al("add"),set:al("set"),delete:al("delete"),clear:al("clear")}:{add(r){const s=rt(this),o=ol(s),a=rt(r),l=!e&&!Xn(r)&&!Mi(r)?a:r;return o.has.call(s,l)||Ai(r,l)&&o.has.call(s,r)||Ai(a,l)&&o.has.call(s,a)||(s.add(l),Ji(s,"add",l,l)),this},set(r,s){!e&&!Xn(s)&&!Mi(s)&&(s=rt(s));const o=rt(this),{has:a,get:l}=ol(o);let u=a.call(o,r);u||(r=rt(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?Ai(s,c)&&Ji(o,"set",r,s):Ji(o,"add",r,s),this},delete(r){const s=rt(this),{has:o,get:a}=ol(s);let l=o.call(s,r);l||(r=rt(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Ji(s,"delete",r,void 0),u},clear(){const r=rt(this),s=r.size!==0,o=r.clear();return s&&Ji(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ry(r,n,e)}),t}function nd(n,e){const t=sy(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ft(t,r)&&r in i?t:i,r,s)}const oy={get:nd(!1,!1)},ay={get:nd(!1,!0)},ly={get:nd(!0,!1)};const y_=new WeakMap,M_=new WeakMap,S_=new WeakMap,cy=new WeakMap;function uy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cr(n){return Mi(n)?n:id(n,!1,ty,oy,y_)}function Ys(n){return id(n,!1,iy,ay,M_)}function vf(n){return id(n,!0,ny,ly,S_)}function id(n,e,t,i,r){if(!ot(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=uy(Ux(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function er(n){return Mi(n)?er(n.__v_raw):!!(n&&n.__v_isReactive)}function Mi(n){return!!(n&&n.__v_isReadonly)}function Xn(n){return!!(n&&n.__v_isShallow)}function Gc(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function fy(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&i_(n,"__v_skip",!0),n}const ui=n=>ot(n)?Cr(n):n,Rr=n=>ot(n)?vf(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function It(n){return b_(n,!1)}function xf(n){return b_(n,!0)}function b_(n,e){return zt(n)?n:new hy(n,e)}class hy{constructor(e,t){this.dep=new td,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:ui(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Xn(e)||Mi(e);e=i?e:rt(e),Ai(e,t)&&(this._rawValue=e,this._value=i?e:ui(e),this.dep.trigger())}}function we(n){return zt(n)?n.value:n}function dy(n){return Ge(n)?n():we(n)}const py={get:(n,e,t)=>e==="__v_raw"?n:we(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return zt(r)&&!zt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function E_(n){return er(n)?n:new Proxy(n,py)}class my{constructor(e,t,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=ci(t)?t:String(t),this._raw=rt(e);let r=!0,s=e;if(!Ve(e)||ci(this._key)||!Oc(this._key))do r=!Gc(s)||Xn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=we(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&zt(this._raw[this._key])){const t=this._object[this._key];if(zt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return Yx(this._raw,this._key)}}class gy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function _y(n,e,t){return zt(n)?n:Ge(n)?new gy(n):ot(n)&&arguments.length>1?vy(n,e,t):It(n)}function vy(n,e,t){return new my(n,e,t)}class xy{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new td(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ga-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return f_(this,!0),!0}get value(){const e=this.dep.track();return p_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yy(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new xy(i,r,t)}const ll={},ac=new WeakMap;let Kr;function My(n,e=!1,t=Kr){if(t){let i=ac.get(t);i||ac.set(t,i=[]),i.push(n)}}function Sy(n,e,t=_t){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=v=>r?v:Xn(v)||r===!1||r===0?Zi(v,1):Zi(v);let c,f,d,h,p=!1,g=!1;if(zt(n)?(f=()=>n.value,p=Xn(n)):er(n)?(f=()=>u(n),p=!0):Ve(n)?(g=!0,p=n.some(v=>er(v)||Xn(v)),f=()=>n.map(v=>{if(zt(v))return v.value;if(er(v))return u(v);if(Ge(v))return l?l(v,2):v()})):Ge(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){nr();try{d()}finally{ir()}}const v=Kr;Kr=c;try{return l?l(n,3,[h]):n(h)}finally{Kr=v}}:f=Ui,e&&r){const v=f,b=r===!0?1/0:r;f=()=>Zi(v(),b)}const _=Hc(),m=()=>{c.stop(),_&&_.active&&Kh(_.effects,c)};if(s&&e){const v=e;e=(...b)=>{const w=v(...b);return m(),w}}let y=g?new Array(n.length).fill(ll):ll;const x=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(e){const b=c.run();if(v||r||p||(g?b.some((w,A)=>Ai(w,y[A])):Ai(b,y))){d&&d();const w=Kr;Kr=c;try{const A=[b,y===ll?void 0:g&&y[0]===ll?[]:y,h];y=b,l?l(e,3,A):e(...A)}finally{Kr=w}}}else c.run()};return a&&a(x),c=new c_(f),c.scheduler=o?()=>o(x,!1):x,h=v=>My(v,!1,c),d=c.onStop=()=>{const v=ac.get(c);if(v){if(l)l(v,4);else for(const b of v)b();ac.delete(c)}},e?i?x(!0):y=c.run():o?o(x.bind(null,!0),!0):c.run(),m.pause=c.pause.bind(c),m.resume=c.resume.bind(c),m.stop=m,m}function Zi(n,e=1/0,t){if(e<=0||!ot(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zt(n))Zi(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)Zi(n[i],e,t);else if(sc(n)||Sr(n))n.forEach(i=>{Zi(i,e,t)});else if(n_(n)){for(const i in n)Zi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zi(n[i],e,t)}return n}function Wa(n,e,t,i){try{return i?n(...i):n()}catch(r){Co(r,e,t)}}function fi(n,e,t,i){if(Ge(n)){const r=Wa(n,e,t,i);return r&&e_(r)&&r.catch(s=>{Co(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(fi(n[s],e,t,i));return r}}function Co(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||_t;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){nr(),Wa(s,null,10,[n,l,u]),ir();return}}by(n,t,r,i,o)}function by(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const xn=[];let Si=-1;const to=[];let gr=null,qs=0;const T_=Promise.resolve();let lc=null;function cc(n){const e=lc||T_;return n?e.then(this?n.bind(this):n):e}function Ey(n){let e=Si+1,t=xn.length;for(;e<t;){const i=e+t>>>1,r=xn[i],s=va(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function rd(n){if(!(n.flags&1)){const e=va(n),t=xn[xn.length-1];!t||!(n.flags&2)&&e>=va(t)?xn.push(n):xn.splice(Ey(e),0,n),n.flags|=1,w_()}}function w_(){lc||(lc=T_.then(A_))}function yf(n){if(!Ve(n))gr&&n.id===-1?gr.splice(qs+1,0,n):n.flags&1||(to.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)to.push(n[e]);w_()}function Mp(n,e,t=Si+1){for(;t<xn.length;t++){const i=xn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function uc(n){if(to.length){const e=[...new Set(to)].sort((t,i)=>va(t)-va(i));if(to.length=0,gr){for(let t=0;t<e.length;t++)gr.push(e[t]);return}for(gr=e,qs=0;qs<gr.length;qs++){const t=gr[qs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}gr=null,qs=0}}const va=n=>n.id==null?n.flags&2?-1:1/0:n.id;function A_(n){try{for(Si=0;Si<xn.length;Si++){const e=xn[Si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Si<xn.length;Si++){const e=xn[Si];e&&(e.flags&=-2)}Si=-1,xn.length=0,uc(),lc=null,(xn.length||to.length)&&A_()}}let Vn=null,C_=null;function fc(n){const e=Vn;return Vn=n,C_=n&&n.type.__scopeId||null,e}function hc(n,e=Vn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&_c(-1);const s=fc(e),o=ds.length;let a;try{a=n(...r)}finally{for(let l=ds.length;l>o;l--)pd();fc(s),i._d&&_c(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ty(n,e){if(Vn===null)return n;const t=$c(Vn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=_t]=e[r];s&&(Ge(s)&&(s={mounted:s,updated:s}),s.deep&&Zi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function bi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(nr(),fi(l,t,8,[n.el,a,n,e]),ir())}}function sd(n,e){if(nn){let t=nn.provides;const i=nn.parent&&nn.parent.provides;i===t&&(t=nn.provides=Object.create(i)),t[n]=e}}function no(n,e,t=!1){const i=bs();if(i||fs){let r=fs?fs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}function od(){return!!(bs()||fs)}const wy=Symbol.for("v-scx"),Ay=()=>no(wy);function Cy(n,e){return ad(n,null,e)}function ql(n,e,t){return ad(n,e,t)}function ad(n,e,t=_t){const{immediate:i,deep:r,flush:s,once:o}=t,a=Xt({},t),l=e&&i||!e&&s!=="post";let u;if(mo){if(s==="sync"){const h=Ay();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ui,h.resume=Ui,h.pause=Ui,h}}const c=nn;a.call=(h,p,g)=>fi(h,c,p,g);let f=!1;s==="post"?a.scheduler=h=>{vn(h,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,p)=>{p?h():rd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const d=Sy(n,e,a);return mo&&(u?u.push(d):l&&d()),d}function Ry(n,e,t){const i=this.proxy,r=yt(n)?n.includes(".")?R_(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=$a(this),a=ad(r,s.bind(i),t);return o(),a}function R_(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Py=Symbol("_vte"),Wc=n=>n.__isTeleport,ri=Symbol("_leaveCb"),ko=Symbol("_enterCb");function Ly(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qa(()=>{n.isMounted=!0}),ja(()=>{n.isUnmounting=!0}),n}const Qn=[Function,Array],P_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qn,onEnter:Qn,onAfterEnter:Qn,onEnterCancelled:Qn,onBeforeLeave:Qn,onLeave:Qn,onAfterLeave:Qn,onLeaveCancelled:Qn,onBeforeAppear:Qn,onAppear:Qn,onAfterAppear:Qn,onAppearCancelled:Qn},L_=n=>{const e=n.subTree;return e.component?L_(e.component):e},Dy={name:"BaseTransition",props:P_,setup(n,{slots:e}){const t=bs(),i=Ly();return()=>{const r=e.default&&U_(e.default(),!0),s=r&&r.length?D_(r):t.subTree?Js():void 0;if(!s)return;const o=rt(n),{mode:a}=o;if(i.isLeaving)return fu(s);const l=dc(s);if(!l)return fu(s);let u=Mf(l,o,i,t,f=>u=f);l.type!==Gt&&xa(l,u);let c=t.subTree&&dc(t.subTree);if(c&&c.type!==Gt&&!Ri(c,l)&&L_(t).type!==Gt){let f=Mf(c,o,i,t);if(xa(c,f),a==="out-in"&&l.type!==Gt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},fu(s);a==="in-out"&&l.type!==Gt?f.delayLeave=(d,h,p)=>{const g=I_(i,c);g[String(c.key)]=c,d[ri]=()=>{h(),d[ri]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{p(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function D_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Gt){e=t;break}}return e}const Iy=Dy;function I_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Mf(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:_,onAppear:m,onAfterAppear:y,onAppearCancelled:x}=e,v=String(n.key),b=I_(t,n),w=(M,S)=>{M&&fi(M,i,9,S)},A=(M,S)=>{const D=S[1];w(M,S),Ve(M)?M.every(L=>L.length<=1)&&D():M.length<=1&&D()},R={mode:o,persisted:a,beforeEnter(M){let S=l;if(!t.isMounted)if(s)S=_||l;else return;M[ri]&&M[ri](!0);const D=b[v];D&&Ri(n,D)&&D.el[ri]&&D.el[ri](),w(S,[M])},enter(M){if(b[v]===n)return;let S=u,D=c,L=f;if(!t.isMounted)if(s)S=m||u,D=y||c,L=x||f;else return;let N=!1;M[ko]=W=>{N||(N=!0,W?w(L,[M]):w(D,[M]),R.delayedLeave&&R.delayedLeave(),M[ko]=void 0)};const F=M[ko].bind(null,!1);S?A(S,[M,F]):F()},leave(M,S){const D=String(n.key);if(M[ko]&&M[ko](!0),t.isUnmounting)return S();w(d,[M]);let L=!1;M[ri]=F=>{L||(L=!0,S(),F?w(g,[M]):w(p,[M]),M[ri]=void 0,b[D]===n&&delete b[D])};const N=M[ri].bind(null,!1);b[D]=n,h?A(h,[M,N]):N()},clone(M){const S=Mf(M,e,t,i,r);return r&&r(S),S}};return R}function fu(n){if(Xa(n))return n=rr(n),n.children=null,n}function dc(n){if(!Xa(n))return Wc(n.type)&&n.children?D_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function xa(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;xa(Wc(t.type)&&dc(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function U_(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ut?(o.patchFlag&128&&r++,i=i.concat(U_(o.children,e,a))):(e||o.type!==Gt)&&i.push(a!=null?rr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ld(n,e){return Ge(n)?Xt({name:n.name},e,{setup:n}):n}function cd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Sp(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const pc=new WeakMap;function io(n,e,t,i,r=!1){if(Ve(n)){n.forEach((g,_)=>io(g,e&&(Ve(e)?e[_]:e),t,i,r));return}if(ro(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&io(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?$c(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===_t?a.refs={}:a.refs,f=a.setupState,d=rt(f),h=f===_t?Qg:g=>Sp(c,g)?!1:ft(d,g),p=(g,_)=>!(_&&Sp(c,_));if(u!=null&&u!==l){if(bp(e),yt(u))c[u]=null,h(u)&&(f[u]=null);else if(zt(u)){const g=e;p(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(Ge(l))Wa(l,a,12,[o,c]);else{const g=yt(l),_=zt(l);if(g||_){const m=()=>{if(n.f){const y=g?h(l)?f[l]:c[l]:p()||!n.k?l.value:c[n.k];if(r)Ve(y)&&Kh(y,s);else if(Ve(y))y.includes(s)||y.push(s);else if(g)c[l]=[s],h(l)&&(f[l]=c[l]);else{const x=[s];p(l,n.k)&&(l.value=x),n.k&&(c[n.k]=x)}}else g?(c[l]=o,h(l)&&(f[l]=o)):_&&(p(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{m(),pc.delete(n)};y.id=-1,pc.set(n,y),vn(y,t)}else bp(n),m()}}}function bp(n){const e=pc.get(n);e&&(e.flags|=8,pc.delete(n))}let Ep=!1;const Rs=()=>{Ep||(console.error("Hydration completed but contains mismatches."),Ep=!0)},Uy=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",Ny=n=>n.namespaceURI.includes("MathML"),cl=n=>{if(n.nodeType===1){if(Uy(n))return"svg";if(Ny(n))return"mathml"}},Ks=n=>n.nodeType===8;function Oy(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=n,c=(x,v)=>{if(!v.hasChildNodes()){t(null,x,v),uc(),v._vnode=x;return}f(v.firstChild,x,null,null,null),uc(),v._vnode=x},f=(x,v,b,w,A,R=!1)=>{R=R||!!v.dynamicChildren;const M=Ks(x)&&x.data==="[",S=()=>g(x,v,b,w,A,M),{type:D,ref:L,shapeFlag:N,patchFlag:F}=v;let W=x.nodeType;v.el=x,F===-2&&(R=!1,v.dynamicChildren=null);let O=null;switch(D){case hs:W!==3?v.children===""?(l(v.el=r(""),o(x),x),O=x):O=S():(x.data!==v.children&&(Rs(),x.data=v.children),O=s(x));break;case Gt:y(x)?(O=s(x),m(v.el=x.content.firstChild,x,b)):W!==8||M?O=S():O=s(x);break;case oo:if(M&&(x=s(x),W=x.nodeType),W===1||W===3){O=x;const j=!v.children.length;for(let H=0;H<v.staticCount;H++)j&&(v.children+=O.nodeType===1?O.outerHTML:O.data),H===v.staticCount-1&&(v.anchor=O),O=s(O);return M?s(O):O}else S();break;case Ut:M?O=p(x,v,b,w,A,R):O=S();break;default:if(N&1)(W!==1||v.type.toLowerCase()!==x.tagName.toLowerCase())&&!y(x)?O=S():O=d(x,v,b,w,A,R);else if(N&6){v.slotScopeIds=A;const j=o(x);if(M?O=_(x):Ks(x)&&x.data==="teleport start"?O=_(x,x.data,"teleport end"):O=s(x),e(v,j,null,b,w,cl(j),R),(ro(v)||v.component.asyncDep)&&!v.component.subTree){let H;M?(H=Lt(oo),H.anchor=O?O.previousSibling:j.lastChild):H=x.nodeType===3?oa(""):Lt(x.nodeType===8?Gt:"div"),H.el=x,v.component.subTree=H}}else N&64?W!==8?O=S():O=v.type.hydrate(x,v,b,w,A,R,n,h):N&128&&(O=v.type.hydrate(x,v,b,w,cl(o(x)),A,R,n,f))}return L!=null&&io(L,null,w,v),O},d=(x,v,b,w,A,R)=>{R=R||!!v.dynamicChildren;const{type:M,dynamicProps:S,props:D,patchFlag:L,shapeFlag:N,dirs:F,transition:W}=v,O=M==="input"||M==="option",j=!!S;if(O||j||L!==-1){F&&bi(v,null,b,"created");let H=!1;if(y(x)){H=n0(null,W)&&b&&b.vnode.props&&b.vnode.props.appear;const U=x.content.firstChild;if(H){const de=U.getAttribute("class");de&&(U.$cls=de),W.beforeEnter(U)}m(U,x,b),v.el=x=U}if(N&16&&!(D&&(D.innerHTML||D.textContent))){let U=h(x.firstChild,v,x,b,w,A,R);for(U&&!jl(x,1)&&Rs();U;){const de=U;U=U.nextSibling,a(de)}}else if(N&8){let U=v.children;U[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(U=U.slice(1));const{textContent:de}=x;de!==U&&de!==U.replace(/\r\n|\r/g,`
`)&&(jl(x,0)||Rs(),x.textContent=v.children)}if(D){if(O||j||!R||L&48){const U=x.tagName.includes("-"),de=x.namespaceURI.includes("svg")?"svg":x.namespaceURI.includes("MathML")?"mathml":void 0;for(const Me in D)if(O&&(Me.endsWith("value")||Me==="indeterminate")||Va(Me)&&!cs(Me)||Me[0]==="."||U&&!cs(Me)||S&&S.includes(Me)){if(By(x,Me,D[Me]))continue;i(x,Me,null,D[Me],de,b)}}else if(D.onClick)i(x,"onClick",null,D.onClick,void 0,b);else if(L&4&&er(D.style))for(const U in D.style)D.style[U]}let $;($=D&&D.onVnodeBeforeMount)&&ni($,b,v),F&&bi(v,null,b,"beforeMount"),(($=D&&D.onVnodeMounted)||F||H)&&l0(()=>{$&&ni($,b,v),H&&W.enter(x),F&&bi(v,null,b,"mounted")},w)}return x.nextSibling},h=(x,v,b,w,A,R,M)=>{M=M||!!v.dynamicChildren;const S=v.children,D=S.length;let L=!1;for(let N=0;N<D;N++){const F=M?S[N]:S[N]=kn(S[N]),W=F.type===hs;x?(W&&!M&&N+1<D&&kn(S[N+1]).type===hs&&(l(r(x.data.slice(F.children.length)),b,s(x)),x.data=F.children),x=f(x,F,w,A,R,M)):W&&!F.children?l(F.el=r(""),b):(L||(L=!0,jl(b,1)||Rs()),t(null,F,b,null,w,A,cl(b),R))}return x},p=(x,v,b,w,A,R)=>{const{slotScopeIds:M}=v;M&&(A=A?A.concat(M):M);const S=o(x),D=h(s(x),v,S,b,w,A,R);return D&&Ks(D)&&D.data==="]"?s(v.anchor=D):(Rs(),l(v.anchor=u("]"),S,D),D)},g=(x,v,b,w,A,R)=>{if(zy(x,v)||Rs(),v.el=null,R){const D=_(x);for(;;){const L=s(x);if(L&&L!==D)a(L);else break}}const M=s(x),S=o(x);return a(x),t(null,v,S,M,b,w,cl(S),A),b&&(b.vnode.el=v.el,jc(b,v.el)),M},_=(x,v="[",b="]")=>{let w=0;for(;x;)if(x=s(x),x&&Ks(x)&&(x.data===v&&w++,x.data===b)){if(w===0)return s(x);w--}return x},m=(x,v,b)=>{const w=v.parentNode;w&&w.replaceChild(x,v);let A=b;for(;A;)A.vnode.el===v&&(A.vnode.el=A.subTree.el=x),A=A.parent},y=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[c,f]}const Fy=new Set(["src","srcset","href","poster"]);function By(n,e,t){return Fy.has(e)?n.getAttribute(e)===(t==null?null:`${t}`):!1}const mc="data-allow-mismatch",ky={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function jl(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(mc);)n=n.parentElement;return ud(n&&n.getAttribute(mc),e)}function ud(n,e){if(n==null)return!1;if(n==="")return!0;{const t=n.split(",");return e===0&&t.includes("children")?!0:t.includes(ky[e])}}function zy(n,e){return jl(n.parentElement,1)||Hy(n)||Vy(e)}function Hy(n){return n.nodeType===1&&ud(n.getAttribute(mc),1)}function Vy({props:n}){const e=n&&n[mc];return typeof e=="string"&&ud(e,1)}kc().requestIdleCallback;kc().cancelIdleCallback;function Gy(n,e){if(Ks(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Ks(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const ro=n=>!!n.type.__asyncLoader;function Tp(n){Ge(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let u=null,c,f=0;const d=()=>(f++,u=null,h()),h=()=>{let p;return u||(p=u=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),l)return new Promise((_,m)=>{l(g,()=>_(d()),()=>m(g),f+1)});throw g}).then(g=>p!==u&&u?u:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return ld({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(p,g,_){const m=p.isConnected;let y=!1;(g.bu||(g.bu=[])).push(()=>y=!0);const x=()=>{y||!p.parentNode||m&&!p.isConnected||_()},v=s?()=>{const b=s(x,w=>Gy(p,w));b&&(g.bum||(g.bum=[])).push(b)}:x;c?v():h().then(()=>!g.isUnmounted&&v())},get __asyncResolved(){return c},setup(){const p=nn;if(cd(p),c)return()=>ul(c,p);const g=b=>{u=null,Co(b,p,13,!i)};if(a&&p.suspense||mo)return h().then(b=>()=>ul(b,p)).catch(b=>(g(b),()=>i?Lt(i,{error:b}):null));const _=It(!1),m=It(),y=It(!!r);let x,v;return fd(()=>{x!=null&&clearTimeout(x),v!=null&&clearTimeout(v)}),r&&(v=setTimeout(()=>{p.isUnmounted||(y.value=!1)},r)),o!=null&&(x=setTimeout(()=>{if(!p.isUnmounted&&!_.value&&!m.value){const b=new Error(`Async component timed out after ${o}ms.`);g(b),m.value=b}},o)),h().then(()=>{p.isUnmounted||(_.value=!0,p.parent&&Xa(p.parent.vnode)&&p.parent.update())}).catch(b=>{if(p.isUnmounted){u=null;return}g(b),m.value=b}),()=>{if(_.value&&c)return ul(c,p);if(m.value&&i)return Lt(i,{error:m.value});if(t&&!y.value)return ul(t,p)}}})}function ul(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=Lt(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const Xa=n=>n.type.__isKeepAlive;function N_(n,e){F_(n,"a",e)}function O_(n,e){F_(n,"da",e)}function F_(n,e,t=nn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Xc(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Xa(r.parent.vnode)&&Wy(i,e,t,r),r=r.parent}}function Wy(n,e,t,i){const r=Xc(e,n,i,!0);fd(()=>{Kh(i[e],r)},t)}function Xc(n,e,t=nn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{nr();const a=$a(t),l=fi(e,t,n,o);return a(),ir(),l});return i?r.unshift(s):r.push(s),s}}const ar=n=>(e,t=nn)=>{(!mo||n==="sp")&&Xc(n,(...i)=>e(...i),t)},Xy=ar("bm"),qa=ar("m"),qy=ar("bu"),jy=ar("u"),ja=ar("bum"),fd=ar("um"),$y=ar("sp"),Yy=ar("rtg"),Ky=ar("rtc");function B_(n,e=nn){Xc("ec",n,e)}const k_="components";function yD(n,e){return H_(k_,n,!0,e)||n}const z_=Symbol.for("v-ndc");function Jy(n){return yt(n)?H_(k_,n,!1)||n:n||z_}function H_(n,e,t=!0,i=!1){const r=Vn||nn;if(r){const s=r.type;{const a=kM(s,!1);if(a&&(a===e||a===yn(e)||a===Bc(yn(e))))return s}const o=wp(r[n]||s[n],e)||wp(r.appContext[n],e);return!o&&i?s:o}}function wp(n,e){return n&&(n[e]||n[yn(e)]||n[Bc(yn(e))])}function Jr(n,e,t,i){let r;const s=t,o=Ve(n);if(o||yt(n)){const a=o&&er(n);let l=!1,u=!1;a&&(l=!Xn(n),u=Mi(n),n=Vc(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?Rr(ui(n[c])):ui(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ot(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const Sf=n=>n?h0(n)?$c(n):Sf(n.parent):null,sa=Xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Sf(n.parent),$root:n=>Sf(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>G_(n),$forceUpdate:n=>n.f||(n.f=()=>{rd(n.update)}),$nextTick:n=>n.n||(n.n=cc.bind(n.proxy)),$watch:n=>Ry.bind(n)}),hu=(n,e)=>n!==_t&&!n.__isScriptSetup&&ft(n,e),Zy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(hu(i,e))return o[e]=1,i[e];if(r!==_t&&ft(r,e))return o[e]=2,r[e];if(ft(s,e))return o[e]=3,s[e];if(t!==_t&&ft(t,e))return o[e]=4,t[e];bf&&(o[e]=0)}}const u=sa[e];let c,f;if(u)return e==="$attrs"&&ln(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==_t&&ft(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ft(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return hu(r,e)?(r[e]=t,!0):i!==_t&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==_t&&a[0]!=="$"&&ft(n,a)||hu(e,a)||ft(s,a)||ft(i,a)||ft(sa,a)||ft(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ap(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bf=!0;function Qy(n){const e=G_(n),t=n.proxy,i=n.ctx;bf=!1,e.beforeCreate&&Cp(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:p,activated:g,deactivated:_,beforeDestroy:m,beforeUnmount:y,destroyed:x,unmounted:v,render:b,renderTracked:w,renderTriggered:A,errorCaptured:R,serverPrefetch:M,expose:S,inheritAttrs:D,components:L,directives:N,filters:F}=e;if(u&&eM(u,i,null),o)for(const j in o){const H=o[j];Ge(H)&&(i[j]=H.bind(t))}if(r){const j=r.call(t,t);ot(j)&&(n.data=Cr(j))}if(bf=!0,s)for(const j in s){const H=s[j],$=Ge(H)?H.bind(t,t):Ge(H.get)?H.get.bind(t,t):Ui,U=!Ge(H)&&Ge(H.set)?H.set.bind(t):Ui,de=md({get:$,set:U});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>de.value,set:Me=>de.value=Me})}if(a)for(const j in a)V_(a[j],i,t,j);if(l){const j=Ge(l)?l.call(t):l;Reflect.ownKeys(j).forEach(H=>{sd(H,j[H])})}c&&Cp(c,n,"c");function O(j,H){Ve(H)?H.forEach($=>j($.bind(t))):H&&j(H.bind(t))}if(O(Xy,f),O(qa,d),O(qy,h),O(jy,p),O(N_,g),O(O_,_),O(B_,R),O(Ky,w),O(Yy,A),O(ja,y),O(fd,v),O($y,M),Ve(S))if(S.length){const j=n.exposed||(n.exposed={});S.forEach(H=>{Object.defineProperty(j,H,{get:()=>t[H],set:$=>t[H]=$,enumerable:!0})})}else n.exposed||(n.exposed={});b&&n.render===Ui&&(n.render=b),D!=null&&(n.inheritAttrs=D),L&&(n.components=L),N&&(n.directives=N),M&&cd(n)}function eM(n,e,t=Ui){Ve(n)&&(n=Ef(n));for(const i in n){const r=n[i];let s;ot(r)?"default"in r?s=no(r.from||i,r.default,!0):s=no(r.from||i):s=no(r),zt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Cp(n,e,t){fi(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function V_(n,e,t,i){let r=i.includes(".")?R_(t,i):()=>t[i];if(yt(n)){const s=e[n];Ge(s)&&ql(r,s)}else if(Ge(n))ql(r,n.bind(t));else if(ot(n))if(Ve(n))n.forEach(s=>V_(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&ql(r,s,n)}}function G_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>gc(l,u,o,!0)),gc(l,e,o)),ot(e)&&s.set(e,l),l}function gc(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&gc(n,s,t,!0),r&&r.forEach(o=>gc(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=tM[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const tM={data:Rp,props:Pp,emits:Pp,methods:Yo,computed:Yo,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Yo,directives:Yo,watch:iM,provide:Rp,inject:nM};function Rp(n,e){return e?n?function(){return Xt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function nM(n,e){return Yo(Ef(n),Ef(e))}function Ef(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mn(n,e){return n?[...new Set([].concat(n,e))]:e}function Yo(n,e){return n?Xt(Object.create(null),n,e):e}function Pp(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Xt(Object.create(null),Ap(n),Ap(e??{})):e}function iM(n,e){if(!n)return e;if(!e)return n;const t=Xt(Object.create(null),n);for(const i in e)t[i]=mn(n[i],e[i]);return t}function W_(){return{app:null,config:{isNativeTag:Qg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rM=0;function sM(n,e){return function(i,r=null){Ge(i)||(i=Xt({},i)),r!=null&&!ot(r)&&(r=null);const s=W_(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:rM++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:HM,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(u,...f)):Ge(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const h=u._ceVNode||Lt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(h,c):n(h,c,d),l=!0,u._container=c,c.__vue_app__=u,$c(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(fi(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=fs;fs=u;try{return c()}finally{fs=f}}};return u}}let fs=null;const oM=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yn(e)}Modifiers`]||n[`${Ss(e)}Modifiers`];function aM(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||_t;let r=t;const s=e.startsWith("update:"),o=s&&oM(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>yt(c)?c.trim():c)),o.number&&(r=r.map(Jh)));let a,l=i[a=ou(e)]||i[a=ou(yn(e))];!l&&s&&(l=i[a=ou(Ss(e))]),l&&fi(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,fi(u,n,6,r)}}const lM=new WeakMap;function X_(n,e,t=!1){const i=t?lM:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ge(n)){const l=u=>{const c=X_(u,e,!0);c&&(a=!0,Xt(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ot(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):Xt(o,s),ot(n)&&i.set(n,o),o)}function qc(n,e){return!n||!Va(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,Ss(e))||ft(n,e))}function du(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:d,setupState:h,ctx:p,inheritAttrs:g}=n,_=fc(n);let m,y;try{if(t.shapeFlag&4){const v=r||i,b=v;m=kn(u.call(b,v,c,f,h,d,p)),y=a}else{const v=e;m=kn(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),y=e.props?a:uM(a)}}catch(v){ds.length=0,Co(v,n,1),m=Lt(Gt)}let x=m;if(y&&g!==!1){const v=Object.keys(y),{shapeFlag:b}=x;v.length&&b&7&&(s&&v.some(Nc)&&(y=fM(y,s)),x=rr(x,y,!1,!0))}if(t.dirs&&(x=rr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition){const v=Wc(x.type)&&dc(x)||x;xa(v,t.transition)}return m=x,fc(_),m}function cM(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(Ma(r)){if(r.type!==Gt||r.children==="v-if"){if(t)return;t=r}}else return}return t}const uM=n=>{let e;for(const t in n)(t==="class"||t==="style"||Va(t))&&((e||(e={}))[t]=n[t]);return e},fM=(n,e)=>{const t={};for(const i in n)(!Nc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function hM(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Lp(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(q_(o,i,d)&&!qc(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lp(i,o,u):!0:!!o;return!1}function Lp(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(q_(e,n,s)&&!qc(t,s))return!0}return!1}function q_(n,e,t){const i=n[t],r=e[t];return t==="style"&&ot(i)&&ot(r)?!zc(i,r):i!==r}function jc({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const j_={},$_=()=>Object.create(j_),Y_=n=>Object.getPrototypeOf(n)===j_;function dM(n,e,t,i=!1){const r={},s=$_();n.propsDefaults=Object.create(null),K_(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ys(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function pM(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=rt(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(qc(n.emitsOptions,d))continue;const h=e[d];if(l)if(ft(s,d))h!==s[d]&&(s[d]=h,u=!0);else{const p=yn(d);r[p]=Tf(l,a,p,h,n,!1)}else h!==s[d]&&(s[d]=h,u=!0)}}}else{K_(n,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!ft(e,f)&&((c=Ss(f))===f||!ft(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Tf(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ft(e,f))&&(delete s[f],u=!0)}u&&Ji(n.attrs,"set","")}function K_(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(cs(l))continue;const u=e[l];let c;r&&ft(r,c=yn(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:qc(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=rt(t),u=a||_t;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Tf(r,l,f,u[f],n,!ft(u,f))}}return o}function Tf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=$a(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ss(t))&&(i=!0))}return i}const mM=new WeakMap;function J_(n,e,t=!1){const i=t?mM:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ge(n)){const c=f=>{l=!0;const[d,h]=J_(f,e,!0);Xt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ot(n)&&i.set(n,ss),ss;if(Ve(s))for(let c=0;c<s.length;c++){const f=yn(s[c]);Dp(f)&&(o[f]=_t)}else if(s)for(const c in s){const f=yn(c);if(Dp(f)){const d=s[c],h=o[f]=Ve(d)||Ge(d)?{type:d}:Xt({},d),p=h.type;let g=!1,_=!0;if(Ve(p))for(let m=0;m<p.length;++m){const y=p[m],x=Ge(y)&&y.name;if(x==="Boolean"){g=!0;break}else x==="String"&&(_=!1)}else g=Ge(p)&&p.name==="Boolean";h[0]=g,h[1]=_,(g||ft(h,"default"))&&a.push(f)}}const u=[o,a];return ot(n)&&i.set(n,u),u}function Dp(n){return n[0]!=="$"&&!cs(n)}const hd=n=>n==="_"||n==="_ctx"||n==="$stable",dd=n=>Ve(n)?n.map(kn):[kn(n)],gM=(n,e,t)=>{if(e._n)return e;const i=hc((...r)=>dd(e(...r)),t);return i._c=!1,i},Z_=(n,e,t)=>{const i=n._ctx;for(const r in n){if(hd(r))continue;const s=n[r];if(Ge(s))e[r]=gM(r,s,i);else if(s!=null){const o=dd(s);e[r]=()=>o}}},Q_=(n,e)=>{const t=dd(e);n.slots.default=()=>t},e0=(n,e,t)=>{for(const i in e)(t||!hd(i))&&(n[i]=e[i])},_M=(n,e,t)=>{const i=n.slots=$_();if(n.vnode.shapeFlag&32){const r=e._;r?(e0(i,e,t),t&&i_(i,"_",r,!0)):Z_(e,i)}else e&&Q_(n,e)},vM=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=_t;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:e0(r,e,t):(s=!e.$stable,Z_(e,r)),o=e}else e&&(Q_(n,e),o={default:1});if(s)for(const a in r)!hd(a)&&o[a]==null&&delete r[a]},vn=l0;function xM(n){return t0(n)}function yM(n){return t0(n,Oy)}function t0(n,e){const t=kc();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=Ui,insertStaticContent:p}=n,g=(I,T,J,ie=null,ne=null,q=null,le=void 0,te=null,se=!!T.dynamicChildren)=>{if(I===T)return;I&&!Ri(I,T)&&(ie=ye(I),Me(I,ne,q,!0),I=null),T.patchFlag===-2&&(se=!1,T.dynamicChildren=null),T.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(T.dynamicChildren===ss&&(T.dynamicChildren=[]),T.dynamicChildren.hasOnce=!0);const{type:oe,ref:P,shapeFlag:E}=T;switch(oe){case hs:_(I,T,J,ie);break;case Gt:m(I,T,J,ie);break;case oo:I==null&&y(T,J,ie,le);break;case Ut:L(I,T,J,ie,ne,q,le,te,se);break;default:E&1?b(I,T,J,ie,ne,q,le,te,se):E&6?N(I,T,J,ie,ne,q,le,te,se):(E&64||E&128)&&oe.process(I,T,J,ie,ne,q,le,te,se,Oe)}P!=null&&ne?io(P,I&&I.ref,q,T||I,!T):P==null&&I&&I.ref!=null&&io(I.ref,null,q,I,!0)},_=(I,T,J,ie)=>{if(I==null)i(T.el=a(T.children),J,ie);else{const ne=T.el=I.el;T.children!==I.children&&u(ne,T.children)}},m=(I,T,J,ie)=>{I==null?i(T.el=l(T.children||""),J,ie):T.el=I.el},y=(I,T,J,ie)=>{[I.el,I.anchor]=p(I.children,T,J,ie,I.el,I.anchor)},x=({el:I,anchor:T},J,ie)=>{let ne;for(;I&&I!==T;)ne=d(I),i(I,J,ie),I=ne;i(T,J,ie)},v=({el:I,anchor:T})=>{let J;for(;I&&I!==T;)J=d(I),r(I),I=J;r(T)},b=(I,T,J,ie,ne,q,le,te,se)=>{if(T.type==="svg"?le="svg":T.type==="math"&&(le="mathml"),I==null)w(T,J,ie,ne,q,le,te,se);else{const oe=I.el&&I.el._isVueCE?I.el:null;try{oe&&oe._beginPatch(),M(I,T,ne,q,le,te,se)}finally{oe&&oe._endPatch()}}},w=(I,T,J,ie,ne,q,le,te)=>{let se,oe;const{props:P,shapeFlag:E,transition:B,dirs:V}=I;if(se=I.el=o(I.type,q,P&&P.is,P),E&8?c(se,I.children):E&16&&R(I.children,se,null,ie,ne,pu(I,q),le,te),V&&bi(I,null,ie,"created"),A(se,I,I.scopeId,le,ie),P){for(const Y in P)Y!=="value"&&!cs(Y)&&s(se,Y,null,P[Y],q,ie);"value"in P&&s(se,"value",null,P.value,q),(oe=P.onVnodeBeforeMount)&&ni(oe,ie,I)}V&&bi(I,null,ie,"beforeMount");const ee=n0(ne,B);ee&&B.beforeEnter(se),i(se,T,J),((oe=P&&P.onVnodeMounted)||ee||V)&&vn(()=>{oe&&ni(oe,ie,I),ee&&B.enter(se),V&&bi(I,null,ie,"mounted")},ne)},A=(I,T,J,ie,ne)=>{if(J&&h(I,J),ie)for(let q=0;q<ie.length;q++)h(I,ie[q]);if(ne){let q=ne.subTree;if(T===q||o0(q.type)&&(q.ssContent===T||q.ssFallback===T)){const le=ne.vnode;A(I,le,le.scopeId,le.slotScopeIds,ne.parent)}}},R=(I,T,J,ie,ne,q,le,te,se=0)=>{for(let oe=se;oe<I.length;oe++){const P=I[oe]=te?Yi(I[oe]):kn(I[oe]);g(null,P,T,J,ie,ne,q,le,te)}},M=(I,T,J,ie,ne,q,le)=>{const te=T.el=I.el;let{patchFlag:se,dynamicChildren:oe,dirs:P}=T;se|=I.patchFlag&16;const E=I.props||_t,B=T.props||_t;let V;if(J&&Br(J,!1),(V=B.onVnodeBeforeUpdate)&&ni(V,J,T,I),P&&bi(T,I,J,"beforeUpdate"),J&&Br(J,!0),oe&&(!I.dynamicChildren||I.dynamicChildren.length!==oe.length)&&(se=0,le=!1,oe=null),(E.innerHTML&&B.innerHTML==null||E.textContent&&B.textContent==null)&&c(te,""),oe?S(I.dynamicChildren,oe,te,J,ie,pu(T,ne),q):le||H(I,T,te,null,J,ie,pu(T,ne),q,!1),se>0){if(se&16)D(te,E,B,J,ne);else if(se&2&&E.class!==B.class&&s(te,"class",null,B.class,ne),se&4&&s(te,"style",E.style,B.style,ne),se&8){const ee=T.dynamicProps;for(let Y=0;Y<ee.length;Y++){const he=ee[Y],pe=E[he],xe=B[he];(xe!==pe||he==="value")&&s(te,he,pe,xe,ne,J)}}se&1&&I.children!==T.children&&c(te,T.children)}else!le&&oe==null&&D(te,E,B,J,ne);((V=B.onVnodeUpdated)||P)&&vn(()=>{V&&ni(V,J,T,I),P&&bi(T,I,J,"updated")},ie)},S=(I,T,J,ie,ne,q,le)=>{for(let te=0;te<T.length;te++){const se=I[te],oe=T[te],P=se.el&&(se.type===Ut||!Ri(se,oe)||se.shapeFlag&198)?f(se.el):J;g(se,oe,P,null,ie,ne,q,le,!0)}},D=(I,T,J,ie,ne)=>{if(T!==J){if(T!==_t)for(const q in T)!cs(q)&&!(q in J)&&s(I,q,T[q],null,ne,ie);for(const q in J){if(cs(q))continue;const le=J[q],te=T[q];le!==te&&q!=="value"&&s(I,q,te,le,ne,ie)}"value"in J&&s(I,"value",T.value,J.value,ne)}},L=(I,T,J,ie,ne,q,le,te,se)=>{const oe=T.el=I?I.el:a(""),P=T.anchor=I?I.anchor:a("");let{patchFlag:E,dynamicChildren:B,slotScopeIds:V}=T;V&&(te=te?te.concat(V):V),I==null?(i(oe,J,ie),i(P,J,ie),R(T.children||[],J,P,ne,q,le,te,se)):E>0&&E&64&&B&&I.dynamicChildren&&I.dynamicChildren.length===B.length?(S(I.dynamicChildren,B,J,ne,q,le,te),(T.key!=null||ne&&T===ne.subTree)&&i0(I,T,!0)):H(I,T,J,P,ne,q,le,te,se)},N=(I,T,J,ie,ne,q,le,te,se)=>{T.slotScopeIds=te,I==null?T.shapeFlag&512?ne.ctx.activate(T,J,ie,le,se):F(T,J,ie,ne,q,le,se):W(I,T,se)},F=(I,T,J,ie,ne,q,le)=>{const te=I.component=UM(I,ie,ne);if(Xa(I)&&(te.ctx.renderer=Oe),NM(te,!1,le),te.asyncDep){if(ne&&ne.registerDep(te,O,le),!I.el){const se=te.subTree=Lt(Gt);m(null,se,T,J),I.placeholder=se.el}}else O(te,I,T,J,ne,q,le)},W=(I,T,J)=>{const ie=T.component=I.component;if(hM(I,T,J))if(ie.asyncDep&&!ie.asyncResolved){T.el=I.el,j(ie,T,J);return}else ie.next=T,ie.update();else T.el=I.el,ie.vnode=T},O=(I,T,J,ie,ne,q,le)=>{const te=()=>{if(I.isMounted){let{next:E,bu:B,u:V,parent:ee,vnode:Y}=I;{const ce=r0(I);if(ce){E&&(E.el=Y.el,j(I,E,le)),ce.asyncDep.then(()=>{vn(()=>{I.isUnmounted||oe()},ne)});return}}let he=E,pe;Br(I,!1),E?(E.el=Y.el,j(I,E,le)):E=Y,B&&Xl(B),(pe=E.props&&E.props.onVnodeBeforeUpdate)&&ni(pe,ee,E,Y),Br(I,!0);const xe=du(I),Ae=I.subTree;I.subTree=xe,g(Ae,xe,f(Ae.el),ye(Ae),I,ne,q),E.el=xe.el,he===null&&jc(I,xe.el),V&&vn(V,ne),(pe=E.props&&E.props.onVnodeUpdated)&&vn(()=>ni(pe,ee,E,Y),ne)}else{let E;const{el:B,props:V}=T,{bm:ee,m:Y,parent:he,root:pe,type:xe}=I,Ae=ro(T);if(Br(I,!1),ee&&Xl(ee),!Ae&&(E=V&&V.onVnodeBeforeMount)&&ni(E,he,T),Br(I,!0),B&&nt){const ce=()=>{I.subTree=du(I),nt(B,I.subTree,I,ne,null)};Ae&&xe.__asyncHydrate?xe.__asyncHydrate(B,I,ce):ce()}else{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(xe,I.parent?I.parent.type:void 0);const ce=I.subTree=du(I);g(null,ce,J,ie,I,ne,q),T.el=ce.el}if(Y&&vn(Y,ne),!Ae&&(E=V&&V.onVnodeMounted)){const ce=T;vn(()=>ni(E,he,ce),ne)}(T.shapeFlag&256||he&&ro(he.vnode)&&he.vnode.shapeFlag&256)&&I.a&&vn(I.a,ne),I.isMounted=!0,T=J=ie=null}};I.scope.on();const se=I.effect=new c_(te);I.scope.off();const oe=I.update=se.run.bind(se),P=I.job=se.runIfDirty.bind(se);P.i=I,P.id=I.uid,se.scheduler=()=>rd(P),Br(I,!0),oe()},j=(I,T,J)=>{T.component=I;const ie=I.vnode.props;I.vnode=T,I.next=null,pM(I,T.props,ie,J),vM(I,T.children,J),nr(),Mp(I),ir()},H=(I,T,J,ie,ne,q,le,te,se=!1)=>{const oe=I&&I.children,P=I?I.shapeFlag:0,E=T.children,{patchFlag:B,shapeFlag:V}=T;if(B>0){if(B&128){U(oe,E,J,ie,ne,q,le,te,se);return}else if(B&256){$(oe,E,J,ie,ne,q,le,te,se);return}}V&8?(P&16&&Ee(oe,ne,q),E!==oe&&c(J,E)):P&16?V&16?U(oe,E,J,ie,ne,q,le,te,se):Ee(oe,ne,q,!0):(P&8&&c(J,""),V&16&&R(E,J,ie,ne,q,le,te,se))},$=(I,T,J,ie,ne,q,le,te,se)=>{I=I||ss,T=T||ss;const oe=I.length,P=T.length,E=Math.min(oe,P);let B;for(B=0;B<E;B++){const V=T[B]=se?Yi(T[B]):kn(T[B]);g(I[B],V,J,null,ne,q,le,te,se)}oe>P?Ee(I,ne,q,!0,!1,E):R(T,J,ie,ne,q,le,te,se,E)},U=(I,T,J,ie,ne,q,le,te,se)=>{let oe=0;const P=T.length;let E=I.length-1,B=P-1;for(;oe<=E&&oe<=B;){const V=I[oe],ee=T[oe]=se?Yi(T[oe]):kn(T[oe]);if(Ri(V,ee))g(V,ee,J,null,ne,q,le,te,se);else break;oe++}for(;oe<=E&&oe<=B;){const V=I[E],ee=T[B]=se?Yi(T[B]):kn(T[B]);if(Ri(V,ee))g(V,ee,J,null,ne,q,le,te,se);else break;E--,B--}if(oe>E){if(oe<=B){const V=B+1,ee=V<P?T[V].el:ie;for(;oe<=B;)g(null,T[oe]=se?Yi(T[oe]):kn(T[oe]),J,ee,ne,q,le,te,se),oe++}}else if(oe>B)for(;oe<=E;)Me(I[oe],ne,q,!0),oe++;else{const V=oe,ee=oe,Y=new Map;for(oe=ee;oe<=B;oe++){const Pe=T[oe]=se?Yi(T[oe]):kn(T[oe]);Pe.key!=null&&Y.set(Pe.key,oe)}let he,pe=0;const xe=B-ee+1;let Ae=!1,ce=0;const Te=new Array(xe);for(oe=0;oe<xe;oe++)Te[oe]=0;for(oe=V;oe<=E;oe++){const Pe=I[oe];if(pe>=xe){Me(Pe,ne,q,!0);continue}let ve;if(Pe.key!=null)ve=Y.get(Pe.key);else for(he=ee;he<=B;he++)if(Te[he-ee]===0&&Ri(Pe,T[he])){ve=he;break}ve===void 0?Me(Pe,ne,q,!0):(Te[ve-ee]=oe+1,ve>=ce?ce=ve:Ae=!0,g(Pe,T[ve],J,null,ne,q,le,te,se),pe++)}const Be=Ae?MM(Te):ss;for(he=Be.length-1,oe=xe-1;oe>=0;oe--){const Pe=ee+oe,ve=T[Pe],ze=T[Pe+1],k=Pe+1<P?ze.el||s0(ze):ie;Te[oe]===0?g(null,ve,J,k,ne,q,le,te,se):Ae&&(he<0||oe!==Be[he]?de(ve,J,k,2):he--)}}},de=(I,T,J,ie,ne=null)=>{const{el:q,type:le,transition:te,children:se,shapeFlag:oe}=I;if(oe&6){de(I.component.subTree,T,J,ie);return}if(oe&128){I.suspense.move(T,J,ie);return}if(oe&64){le.move(I,T,J,Oe);return}if(le===Ut){i(q,T,J);for(let E=0;E<se.length;E++)de(se[E],T,J,ie);i(I.anchor,T,J);return}if(le===oo){x(I,T,J);return}if(ie!==2&&oe&1&&te)if(ie===0)te.persisted&&!q[ri]?i(q,T,J):(te.beforeEnter(q),i(q,T,J),vn(()=>te.enter(q),ne));else{const{leave:E,delayLeave:B,afterLeave:V}=te,ee=()=>{I.ctx.isUnmounted?r(q):i(q,T,J)},Y=()=>{const he=q._isLeaving||!!q[ri];q._isLeaving&&q[ri](!0),te.persisted&&!he?ee():E(q,()=>{ee(),V&&V()})};B?B(q,ee,Y):Y()}else i(q,T,J)},Me=(I,T,J,ie=!1,ne=!1)=>{const{type:q,props:le,ref:te,children:se,dynamicChildren:oe,shapeFlag:P,patchFlag:E,dirs:B,cacheIndex:V,memo:ee}=I;if((E===-2||oe&&oe.hasOnce)&&(ne=!1),te!=null&&(nr(),io(te,null,J,I,!0),ir()),V!=null&&(!I.ctx||I.ctx===T)&&(T.renderCache[V]=void 0),P&256){T.ctx.deactivate(I);return}const Y=P&1&&B,he=!ro(I);let pe;if(he&&(pe=le&&le.onVnodeBeforeUnmount)&&ni(pe,T,I),P&6)fe(I.component,J,ie);else{if(P&128){I.suspense.unmount(J,ie);return}Y&&bi(I,null,T,"beforeUnmount"),P&64?I.type.remove(I,T,J,Oe,ie):oe&&!oe.hasOnce&&(q!==Ut||E>0&&E&64)?Ee(oe,T,J,!1,!0):(q===Ut&&E&384||!ne&&P&16)&&Ee(se,T,J),ie&&ae(I)}const xe=ee!=null&&V==null;(he&&(pe=le&&le.onVnodeUnmounted)||Y||xe)&&vn(()=>{pe&&ni(pe,T,I),Y&&bi(I,null,T,"unmounted"),xe&&(I.el=null)},J)},ae=I=>{const{type:T,el:J,anchor:ie,transition:ne}=I;if(T===Ut){K(J,ie);return}if(T===oo){v(I),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave();return}const q=()=>{r(J),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(I.shapeFlag&1&&ne&&!ne.persisted){const{leave:le,delayLeave:te}=ne,se=()=>le(J,q);te?te(I.el,q,se):se()}else q()},K=(I,T)=>{let J;for(;I!==T;)J=d(I),r(I),I=J;r(T)},fe=(I,T,J)=>{const{bum:ie,scope:ne,job:q,subTree:le,um:te,m:se,a:oe}=I;Ip(se),Ip(oe),ie&&Xl(ie),ne.stop(),q?(q.flags|=8,Me(le,I,T,J)):I.vnode.el&&le&&(le.transition=I.vnode.transition,Me(le,I,T,J)),te&&vn(te,T),vn(()=>{I.isUnmounted=!0},T)},Ee=(I,T,J,ie=!1,ne=!1,q=0)=>{for(let le=q;le<I.length;le++)Me(I[le],T,J,ie,ne)},ye=I=>{if(I.shapeFlag&6)return ye(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const T=d(I.anchor||I.el),J=T&&T[Py];return J?d(J):T};let Ne=!1;const Ke=(I,T,J)=>{let ie;I==null?T._vnode&&(Me(T._vnode,null,null,!0),ie=T._vnode.component):g(T._vnode||null,I,T,null,null,null,J),T._vnode=I,Ne||(Ne=!0,Mp(ie),uc(),Ne=!1)},Oe={p:g,um:Me,m:de,r:ae,mt:F,mc:R,pc:H,pbc:S,n:ye,o:n};let tt,nt;return e&&([tt,nt]=e(Oe)),{render:Ke,hydrate:tt,createApp:sM(Ke,tt)}}function pu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Br({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function n0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function i0(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Yi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&i0(o,a)),a.type===hs&&(a.patchFlag===-1&&(a=r[s]=Yi(a)),a.el=o.el),a.type===Gt&&!a.el&&(a.el=o.el)}}function MM(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function r0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:r0(e)}function Ip(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function s0(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?s0(e.subTree):null}const o0=n=>n.__isSuspense;let wf=0;const SM={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,l,u){if(n==null)EM(e,t,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!n.suspense.isInFallback&&!s.isHydrating){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}TM(n,e,t,i,r,o,a,l,u)}},hydrate:wM,normalize:AM},bM=SM;function ya(n,e){const t=n.props&&n.props[e];Ge(t)&&t()}function EM(n,e,t,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),d=n.suspense=a0(n,r,i,e,f,t,s,o,a,l);u(null,d.pendingBranch=n.ssContent,f,null,i,d,s,o),d.deps>0?(ya(n,"onPending"),ya(n,"onFallback"),u(null,n.ssFallback,e,t,i,null,s,o),so(d,n.ssFallback)):d.resolve(!1,!0)}function TM(n,e,t,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:_,isHydrating:m}=f;if(g)f.pendingBranch=d,Ri(g,d)?(f.deps++,l(g,d,m?t:f.hiddenContainer,null,r,f,s,o,a),f.deps--,f.deps<=0?f.resolve():_&&!m&&!f.isFallbackMountPending&&(l(p,h,t,i,r,null,s,o,a),so(f,h))):(f.pendingId=wf++,m?(f.isHydrating=!1,f.activeBranch=g):u(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),_?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():f.isFallbackMountPending||(l(p,h,t,i,r,null,s,o,a),so(f,h))):p&&Ri(p,d)?(l(p,d,t,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(p&&Ri(p,d))l(p,d,t,i,r,f,s,o,a),so(f,d);else if(ya(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=wf++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:y,pendingId:x}=f;y>0?setTimeout(()=>{f.pendingId===x&&f.fallback(h)},y):y===0&&f.fallback(h)}}function a0(n,e,t,i,r,s,o,a,l,u,c=!1){const{p:f,m:d,um:h,n:p,o:{parentNode:g,remove:_}}=u;let m;const y=CM(n);y&&e&&e.pendingBranch&&(m=e.pendingId,e.deps++);const x=n.props?r_(n.props.timeout):void 0,v=s,b={vnode:n,parent:e,parentComponent:t,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:wf++,timeout:typeof x=="number"?x:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(w=!1,A=!1){const{vnode:R,activeBranch:M,pendingBranch:S,pendingId:D,effects:L,parentComponent:N,container:F,isInFallback:W}=b;let O=!1;if(b.isHydrating)b.isHydrating=!1;else if(!w){O=M&&S.transition&&S.transition.mode==="out-in";let $=!1;O&&(M.transition.afterLeave=()=>{D===b.pendingId&&(d(S,F,s===v&&!$?p(M):s,0),yf(L),W&&R.ssFallback&&(R.ssFallback.el=null))}),M&&!b.isFallbackMountPending&&(g(M.el)===F&&(s=p(M),$=!0),h(M,N,b,!0),!O&&W&&R.ssFallback&&vn(()=>R.ssFallback.el=null,b)),O||d(S,F,s,0)}b.isFallbackMountPending=!1,so(b,S),b.pendingBranch=null,b.isInFallback=!1;let j=b.parent,H=!1;for(;j;){if(j.pendingBranch){for(let $=0;$<L.length;$++)j.effects.push(L[$]);H=!0;break}j=j.parent}!H&&!O&&yf(L),b.effects=[],y&&e&&e.pendingBranch&&m===e.pendingId&&(m=void 0,e.deps--,e.deps===0&&!A&&e.resolve()),ya(R,"onResolve")},fallback(w){if(!b.pendingBranch)return;const{vnode:A,activeBranch:R,parentComponent:M,container:S,namespace:D}=b;ya(A,"onFallback");const L=p(R),N=()=>{if(b.isFallbackMountPending=!1,!b.isInFallback)return;const W=b.vnode.ssFallback;f(null,W,S,L,M,null,D,a,l),so(b,W)},F=w.transition&&w.transition.mode==="out-in";F&&(b.isFallbackMountPending=!0,R.transition.afterLeave=N),b.isInFallback=!0,h(R,M,null,!0),F||N()},move(w,A,R){b.activeBranch&&d(b.activeBranch,w,A,R),b.container=w},next(){return b.activeBranch&&p(b.activeBranch)},registerDep(w,A,R){const M=!!b.pendingBranch;M&&b.deps++;const S=w.vnode.el;w.asyncDep.catch(D=>{Co(D,w,0)}).then(D=>{if(w.isUnmounted||b.isUnmounted||b.pendingId!==w.suspenseId)return;if(Af(),S&&!w.scope.active){M&&--b.deps===0&&b.resolve();return}w.asyncResolved=!0;const{vnode:L}=w;Cf(w,D),S&&(L.el=S);const N=!S&&w.subTree.el;A(w,L,g(S||w.subTree.el),S?null:p(w.subTree),b,o,R),N&&(L.placeholder=null,_(N)),jc(w,L.el),M&&--b.deps===0&&b.resolve()})},unmount(w,A){b.isUnmounted=!0,b.activeBranch&&h(b.activeBranch,t,w,A),b.pendingBranch&&h(b.pendingBranch,t,w,A)}};return b}function wM(n,e,t,i,r,s,o,a,l){const u=e.suspense=a0(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(n,u.pendingBranch=e.ssContent,t,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function AM(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=Up(i?t.default:t),n.ssFallback=i?Up(t.fallback):Lt(Gt)}function Up(n){let e;if(Ge(n)){const t=po&&n._c;t&&(n._d=!1,ut()),n=n(),t&&(n._d=!0,e=Cn,pd())}return Ve(n)&&(n=cM(n)),n=kn(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function l0(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):yf(n)}function so(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;t.el=r,i&&i.subTree===t&&(i.vnode.el=r,jc(i,r))}function CM(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const Ut=Symbol.for("v-fgt"),hs=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),ds=[];let Cn=null;function ut(n=!1){ds.push(Cn=n?null:[])}function pd(){ds.pop(),Cn=ds[ds.length-1]||null}let po=1;function _c(n,e=!1){po+=n,n<0&&Cn&&e&&(Cn.hasOnce=!0)}function c0(n){return n.dynamicChildren=po>0?Cn||ss:null,pd(),po>0&&Cn&&Cn.push(n),n}function wt(n,e,t,i,r,s){return c0(re(n,e,t,i,r,s,!0))}function ns(n,e,t,i,r){return c0(Lt(n,e,t,i,r,!0))}function Ma(n){return n?n.__v_isVNode===!0:!1}function Ri(n,e){return n.type===e.type&&n.key===e.key}const u0=({key:n})=>n??null,$l=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||zt(n)||Ge(n)?{i:Vn,r:n,k:e,f:!!t}:n:null);function re(n,e=null,t=null,i=0,r=null,s=n===Ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&u0(e),ref:e&&$l(e),scopeId:C_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vn};return a?(vc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),po>0&&!o&&Cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Cn.push(l),l}const Lt=RM;function RM(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===z_)&&(n=Gt),Ma(n)){const a=rr(n,e,!0);return t&&vc(a,t),po>0&&!s&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(n)]=a:Cn.push(a)),a.patchFlag=-2,a}if(zM(n)&&(n=n.__vccOpts),e){e=f0(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=_i(a)),ot(l)&&(Gc(l)&&!Ve(l)&&(l=Xt({},l)),e.style=Ci(l))}const o=yt(n)?1:o0(n)?128:Wc(n)?64:ot(n)?4:Ge(n)?2:0;return re(n,e,t,i,r,o,s,!0)}function f0(n){return n?Gc(n)||Y_(n)?Xt({},n):n:null}function rr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?LM(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&u0(u),ref:e&&e.ref?t&&s?Ve(s)?s.concat($l(e)):[s,$l(e)]:$l(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ut?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rr(n.ssContent),ssFallback:n.ssFallback&&rr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&xa(c,l.clone(c)),c}function oa(n=" ",e=0){return Lt(hs,null,n,e)}function PM(n,e){const t=Lt(oo,null,n);return t.staticCount=e,t}function Js(n="",e=!1){return e?(ut(),ns(Gt,null,n)):Lt(Gt,null,n)}function kn(n){return n==null||typeof n=="boolean"?Lt(Gt):Ve(n)?Lt(Ut,null,n.slice()):Ma(n)?Yi(n):Lt(hs,null,String(n))}function Yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rr(n)}function vc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),vc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Y_(e)?e._ctx=Vn:r===3&&Vn&&(Vn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ge(e)){if(i&65){vc(n,{default:e});return}e={default:e,_ctx:Vn},t=32}else e=String(e),i&64?(t=16,e=[oa(e)]):t=8;n.children=e,n.shapeFlag|=t}function LM(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=_i([e.class,i.class]));else if(r==="style")e.style=Ci([e.style,i.style]);else if(Va(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Nc(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function ni(n,e,t,i=null){fi(n,e,7,[t,i])}const DM=W_();let IM=0;function UM(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||DM,s={uid:IM++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new l_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J_(i,r),emitsOptions:X_(i,r),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:i.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=aM.bind(null,s),n.ce&&n.ce(s),s}let nn=null;const bs=()=>nn||Vn;let xc,Sa;{const n=kc(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};xc=e("__VUE_INSTANCE_SETTERS__",t=>nn=t),Sa=e("__VUE_SSR_SETTERS__",t=>mo=t)}const $a=n=>{const e=nn;return xc(n),n.scope.on(),()=>{n.scope.off(),xc(e)}},Af=()=>{nn&&nn.scope.off(),xc(null)};function h0(n){return n.vnode.shapeFlag&4}let mo=!1;function NM(n,e=!1,t=!1){e&&Sa(e);const{props:i,children:r}=n.vnode,s=h0(n);dM(n,i,s,e),_M(n,r,t||e);const o=s?OM(n,e):void 0;return e&&Sa(!1),o}function OM(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zy);const{setup:i}=t;if(i){nr();const r=n.setupContext=i.length>1?BM(n):null,s=$a(n),o=Wa(i,n,0,[n.props,r]),a=e_(o);if(ir(),s(),(a||n.sp)&&!ro(n)&&cd(n),a){if(o.then(Af,Af),e)return o.then(l=>{Sa(!0);try{Cf(n,l,e)}finally{Sa(!1)}}).catch(l=>{Co(l,n,0)});n.asyncDep=o}else Cf(n,o)}else d0(n)}function Cf(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ot(e)&&(n.setupState=E_(e)),d0(n)}function d0(n,e,t){const i=n.type;n.render||(n.render=i.render||Ui);{const r=$a(n);nr();try{Qy(n)}finally{ir(),r()}}}const FM={get(n,e){return ln(n,"get",""),n[e]}};function BM(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,FM),slots:n.slots,emit:n.emit,expose:e}}function $c(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(E_(fy(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in sa)return sa[t](n)},has(e,t){return t in e||t in sa}})):n.proxy}function kM(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function zM(n){return Ge(n)&&"__vccOpts"in n}const md=(n,e)=>yy(n,e,mo);function gd(n,e,t){try{_c(-1);const i=arguments.length;return i===2?ot(e)&&!Ve(e)?Ma(e)?Lt(n,null,[e]):Lt(n,e):Lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ma(t)&&(t=[t]),Lt(n,e,t))}finally{_c(1)}}const HM="3.5.43";let Rf;const Np=typeof window<"u"&&window.trustedTypes;if(Np)try{Rf=Np.createPolicy("vue",{createHTML:n=>n})}catch{}const p0=Rf?n=>Rf.createHTML(n):n=>n,VM="http://www.w3.org/2000/svg",GM="http://www.w3.org/1998/Math/MathML",ji=typeof document<"u"?document:null,Op=ji&&ji.createElement("template"),WM={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ji.createElementNS(VM,n):e==="mathml"?ji.createElementNS(GM,n):t?ji.createElement(n,{is:t}):ji.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ji.createTextNode(n),createComment:n=>ji.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ji.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Op.innerHTML=p0(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Op.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},cr="transition",zo="animation",ba=Symbol("_vtc"),m0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},XM=Xt({},P_,m0),qM=n=>(n.displayName="Transition",n.props=XM,n),jM=qM((n,{slots:e})=>gd(Iy,$M(n),e)),kr=(n,e=[])=>{Ve(n)?n.forEach(t=>t(...e)):n&&n(...e)},Fp=n=>n?Ve(n)?n.some(e=>e.length>1):n.length>1:!1;function $M(n){const e={};for(const L in n)L in m0||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,p=YM(r),g=p&&p[0],_=p&&p[1],{onBeforeEnter:m,onEnter:y,onEnterCancelled:x,onLeave:v,onLeaveCancelled:b,onBeforeAppear:w=m,onAppear:A=y,onAppearCancelled:R=x}=e,M=(L,N,F,W)=>{L._enterCancelled=W,zr(L,N?c:a),zr(L,N?u:o),F&&F()},S=(L,N)=>{L._isLeaving=!1,zr(L,f),zr(L,h),zr(L,d),N&&N()},D=L=>(N,F)=>{const W=L?A:y,O=()=>M(N,L,F);kr(W,[N,O]),Bp(()=>{zr(N,L?l:s),zi(N,L?c:a),Fp(W)||kp(N,i,g,O)})};return Xt(e,{onBeforeEnter(L){kr(m,[L]),zi(L,s),zi(L,o)},onBeforeAppear(L){kr(w,[L]),zi(L,l),zi(L,u)},onEnter:D(!1),onAppear:D(!0),onLeave(L,N){L._isLeaving=!0;const F=()=>S(L,N);zi(L,f),L._enterCancelled?(zi(L,d),Vp(L)):(Vp(L),zi(L,d)),Bp(()=>{L._isLeaving&&(zr(L,f),zi(L,h),Fp(v)||kp(L,i,_,F))}),kr(v,[L,F])},onEnterCancelled(L){M(L,!1,void 0,!0),kr(x,[L])},onAppearCancelled(L){M(L,!0,void 0,!0),kr(R,[L])},onLeaveCancelled(L){S(L),kr(b,[L])}})}function YM(n){if(n==null)return null;if(ot(n))return[mu(n.enter),mu(n.leave)];{const e=mu(n);return[e,e]}}function mu(n){return r_(n)}function zi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ba]||(n[ba]=new Set)).add(e)}function zr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ba];t&&(t.delete(e),t.size||(n[ba]=void 0))}function Bp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let KM=0;function kp(n,e,t,i){const r=n._endId=++KM,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=JM(n,e);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,d),s()},d=h=>{h.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,d)}function JM(n,e){const t=window.getComputedStyle(n),i=p=>(t[p]||"").split(", "),r=i(`${cr}Delay`),s=i(`${cr}Duration`),o=zp(r,s),a=i(`${zo}Delay`),l=i(`${zo}Duration`),u=zp(a,l);let c=null,f=0,d=0;e===cr?o>0&&(c=cr,f=o,d=s.length):e===zo?u>0&&(c=zo,f=u,d=l.length):(f=Math.max(o,u),c=f>0?o>u?cr:zo:null,d=c?c===cr?s.length:l.length:0);const h=c===cr&&/\b(?:transform|all)(?:,|$)/.test(i(`${cr}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:h}}function zp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Hp(t)+Hp(n[i])))}function Hp(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Vp(n){return(n?n.ownerDocument:document).body.offsetHeight}function ZM(n,e,t){const i=n[ba];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Gp=Symbol("_vod"),QM=Symbol("_vsh"),eS=Symbol(""),tS=/(?:^|;)\s*display\s*:/;function nS(n,e,t){const i=n.style,r=yt(t);let s=!1;if(t&&!r){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ko(i,a,"")}else for(const o in e)t[o]==null&&Ko(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?rS(n,o,!yt(e)&&e?e[o]:void 0,a)||Ko(i,o,a):Ko(i,o,"")}}else if(r){if(e!==t){const o=i[eS];o&&(t+=";"+o),i.cssText=t,s=tS.test(t)}}else e&&n.removeAttribute("style");Gp in n&&(n[Gp]=s?i.display:"",n[QM]&&(i.display="none"))}const fl=/\s*!important$/;function Ko(n,e,t){if(Ve(t))t.forEach(i=>Ko(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))fl.test(t)?n.setProperty(e,t.replace(fl,""),"important"):n.setProperty(e,t);else{const i=iS(n,e);fl.test(t)?n.setProperty(Ss(i),t.replace(fl,""),"important"):n[i]=t}}const Wp=["Webkit","Moz","ms"],gu={};function iS(n,e){const t=gu[e];if(t)return t;let i=yn(e);if(i!=="filter"&&i in n)return gu[e]=i;i=Bc(i);for(let r=0;r<Wp.length;r++){const s=Wp[r]+i;if(s in n)return gu[e]=s}return e}function rS(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&yt(i)&&t===i}const Xp="http://www.w3.org/1999/xlink";function qp(n,e,t,i,r,s=Gx(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Xp,e.slice(6,e.length)):n.setAttributeNS(Xp,e,t):t==null||s&&!s_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ci(t)?String(t):t)}function jp(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?p0(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=s_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function js(n,e,t,i){n.addEventListener(e,t,i)}function sS(n,e,t,i){n.removeEventListener(e,t,i)}const $p=Symbol("_vei");function oS(n,e,t,i,r=null){const s=n[$p]||(n[$p]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=cS(e);if(i){const u=s[e]=hS(i,r);js(n,a,u,l)}else o&&(sS(n,a,o,l),s[e]=void 0)}}const aS=/(Once|Passive|Capture)$/,lS=/^on:?(?:Once|Passive|Capture)$/;function cS(n){let e,t;for(;(t=n.match(aS))&&!lS.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ss(n.slice(2)),e]}let _u=0;const uS=Promise.resolve(),fS=()=>_u||(uS.then(()=>_u=0),_u=Date.now());function hS(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Ve(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&fi(u,e,5,a)}}else fi(r,e,5,[i])};return t.value=n,t.attached=fS(),t}const Yp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,dS=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?ZM(n,i,o):e==="style"?nS(n,t,i):Va(e)?Nc(e)||oS(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pS(n,e,i,o))?(jp(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qp(n,e,i,o,s,e!=="value")):n._isVueCE&&(mS(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!yt(i)))?jp(n,yn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),qp(n,e,i,o))};function pS(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yp(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yp(e)&&yt(t)?!1:e in n}function mS(n,e){const t=n._def.props;if(!t)return!1;const i=yn(e);return Array.isArray(t)?t.some(r=>yn(r)===i):Object.keys(t).some(r=>yn(r)===i)}const Kp=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>Xl(e,t):e};function gS(n){n.target.composing=!0}function Jp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hl=Symbol("_assign"),dl=Symbol("_initialValue");function vu(n,e,t){return e&&(n=n.trim()),t&&(n=Jh(n)),n}const _S={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[dl]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[dl]=n.defaultValue.replace(/\r\n?/g,`
`))),n[hl]=Kp(r);const s=i||r.props&&r.props.type==="number";js(n,e?"change":"input",o=>{o.target.composing||n[hl](vu(n.value,t,s))}),(t||s)&&js(n,"change",()=>{n.value=vu(n.value,t,s)}),e||(js(n,"compositionstart",gS),js(n,"compositionend",Jp),js(n,"change",Jp))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[dl];delete n[dl],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[hl](vu(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[hl]=Kp(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Jh(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},vS=["ctrl","shift","alt","meta"],xS={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>vS.some(t=>n[`${t}Key`]&&!e.includes(t))},yS=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=xS[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},g0=Xt({patchProp:dS},WM);let aa,Zp=!1;function MS(){return aa||(aa=xM(g0))}function SS(){return aa=Zp?aa:yM(g0),Zp=!0,aa}const bS=((...n)=>{const e=MS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=v0(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,_0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e}),ES=((...n)=>{const e=SS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=v0(i);if(r)return t(r,!0,_0(r))},e});function _0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function v0(n){return yt(n)?document.querySelector(n):n}const TS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,wS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,AS=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function CS(n,e){if(n==="__proto__"||n==="constructor"&&e&&typeof e=="object"&&"prototype"in e){RS(n);return}return e}function RS(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function yc(n,e={}){if(typeof n!="string")return n;if(n[0]==='"'&&n[n.length-1]==='"'&&n.indexOf("\\")===-1)return n.slice(1,-1);const t=n.trim();if(t.length<=9)switch(t.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!AS.test(n)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(TS.test(n)||wS.test(n)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,CS)}return JSON.parse(n)}catch(i){if(e.strict)throw i;return n}}const x0=/#/g,y0=/&/g,PS=/\//g,LS=/=/g,DS=/\?/g,Yc=/\+/g,IS=/%5e/gi,US=/%60/gi,NS=/%7c/gi,OS=/%20/gi,FS=/%2f/gi,BS=/%252f/gi;function M0(n){return encodeURI(""+n).replace(NS,"|")}function Pf(n){return M0(typeof n=="string"?n:JSON.stringify(n)).replace(Yc,"%2B").replace(OS,"+").replace(x0,"%23").replace(y0,"%26").replace(US,"`").replace(IS,"^").replace(PS,"%2F")}function xu(n){return Pf(n).replace(LS,"%3D")}function kS(n){return M0(n).replace(x0,"%23").replace(DS,"%3F").replace(BS,"%2F").replace(y0,"%26").replace(Yc,"%2B")}function Ea(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function zS(n){return Ea(n.replace(FS,"%252F"))}function HS(n){return Ea(n.replace(Yc," "))}function VS(n){return Ea(n.replace(Yc," "))}function _d(n=""){const e=Object.create(null);n[0]==="?"&&(n=n.slice(1));for(const t of n.split("&")){const i=t.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=HS(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=VS(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function GS(n,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${xu(n)}=${Pf(t)}`).join("&"):`${xu(n)}=${Pf(e)}`:xu(n)}function S0(n){return Object.keys(n).filter(e=>n[e]!==void 0).map(e=>GS(e,n[e])).filter(Boolean).join("&")}const WS=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,XS=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,qS=/^([/\\]\s*){2,}[^/\\]/,jS=/^[\s\0]*(blob|data|javascript|vbscript):$/i,$S=/\/$|\/\?|\/#/,YS=/^\.?\//;function Ro(n,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?WS.test(n):XS.test(n)||(e.acceptRelative?qS.test(n):!1)}function Lf(n){return!!n&&jS.test(n)}function Df(n="",e){return e?$S.test(n):n.endsWith("/")}function b0(n="",e){if(!e)return(Df(n)?n.slice(0,-1):n)||"/";if(!Df(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");r!==-1&&(t=n.slice(0,r),i=n.slice(r));const[s,...o]=t.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function If(n="",e){if(!e)return n.endsWith("/")?n:n+"/";if(Df(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");if(r!==-1&&(t=n.slice(0,r),i=n.slice(r),!t))return i;const[s,...o]=t.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function KS(n=""){return n.startsWith("/")}function Qp(n=""){return KS(n)?n:"/"+n}function JS(n,e){if(T0(e)||Ro(n))return n;const t=b0(e);if(n.startsWith(t)){const i=n[t.length];if(!i||i==="/"||i==="?")return n}return Kc(t,n)}function ZS(n,e){if(T0(e))return n;const t=b0(e);if(!n.startsWith(t))return n;const i=n[t.length];return i&&i!=="/"&&i!=="?"?n:"/"+n.slice(t.length).replace(/^\/+/,"")}function E0(n,e){const t=Jc(n),i={..._d(t.search),...e};return t.search=S0(i),vd(t)}function T0(n){return!n||n==="/"}function QS(n){return n&&n!=="/"}function Kc(n,...e){let t=n||"";for(const i of e.filter(r=>QS(r)))if(t){const r=i.replace(YS,"");t=If(t)+r}else t=i;return t}function w0(...n){const e=/\/(?!\/)/,t=n.filter(Boolean),i=[];let r=0;for(const o of t)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&Ro(i[0]))continue;i.pop(),r--;continue}if(a===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),r++}}let s=i.join("/");return r>=0?t[0]?.startsWith("/")&&!s.startsWith("/")?s="/"+s:t[0]?.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,t[t.length-1]?.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function eb(n,e,t={}){return t.trailingSlash||(n=If(n),e=If(e)),t.leadingSlash||(n=Qp(n),e=Qp(e)),t.encoding||(n=Ea(n),e=Ea(e)),n===e}function em(n){return vd({...Jc(n),hash:""})}const A0=Symbol.for("ufo:protocolRelative");function Jc(n="",e){const t=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(t){const[,f,d=""]=t;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!Ro(n,{acceptRelative:!0}))return tm(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=tm(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[A0]:!i}}function tm(n=""){const[e="",t="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:i}}function vd(n){const e=n.pathname||"",t=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[A0]?(n.protocol||"")+"//":"")+r+s+e+t+i}class tb extends Error{constructor(e,t){super(e,t),this.name="FetchError",t?.cause&&!this.cause&&(this.cause=t.cause)}}function nb(n){const e=n.error?.message||n.error?.toString()||"",t=n.request?.method||n.options?.method||"GET",i=n.request?.url||String(n.request)||"/",r=`[${t}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new tb(o,n.error?{cause:n.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return n[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return n.response&&n.response[u]}});return a}const ib=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function nm(n="GET"){return ib.has(n.toUpperCase())}function rb(n){if(n===void 0)return!1;const e=typeof n;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(n)?!0:n.buffer||n instanceof FormData||n instanceof URLSearchParams?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const sb=new Set(["image/svg","application/xml","application/xhtml","application/html"]),ob=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function ab(n=""){if(!n)return"json";const e=n.split(";").shift()||"";return ob.test(e)?"json":e==="text/event-stream"?"stream":sb.has(e)||e.startsWith("text/")?"text":"blob"}function lb(n,e,t,i){const r=cb(e?.headers??n?.headers,t?.headers,i);let s;return(t?.query||t?.params||e?.params||e?.query)&&(s={...t?.params,...t?.query,...e?.params,...e?.query}),{...t,...e,query:s,params:s,headers:r}}function cb(n,e,t){if(!e)return new t(n);const i=new t(e);if(n)for(const[r,s]of Symbol.iterator in n||Array.isArray(n)?n:new t(n))i.set(r,s);return i}async function pl(n,e){if(e)if(Array.isArray(e))for(const t of e)await t(n);else await e(n)}const ub=new Set([408,409,425,429,500,502,503,504]),fb=new Set([101,204,205,304]);function C0(n={}){const{fetch:e=globalThis.fetch,Headers:t=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=nm(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):ub.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(h=>setTimeout(h,d)),s(a.request,{...a.options,retry:c-1})}}const u=nb(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:lb(l,u,n.defaults,t),response:void 0,error:void 0};if(c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&(await pl(c,c.options.onRequest),c.options.headers instanceof t||(c.options.headers=new t(c.options.headers||{}))),typeof c.request=="string"&&(c.options.baseURL&&(c.request=JS(c.request,c.options.baseURL)),c.options.query&&(c.request=E0(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&nm(c.options.method))if(rb(c.options.body)){const h=c.options.headers.get("content-type");typeof c.options.body!="string"&&(c.options.body=h==="application/x-www-form-urlencoded"?new URLSearchParams(c.options.body).toString():JSON.stringify(c.options.body)),h||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")}else("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half"));let f;if(!c.options.signal&&c.options.timeout){const h=new i;f=setTimeout(()=>{const p=new Error("[TimeoutError]: The operation was aborted due to timeout");p.name="TimeoutError",p.code=23,h.abort(p)},c.options.timeout),c.options.signal=h.signal}try{c.response=await e(c.request,c.options)}catch(h){return c.error=h,c.options.onRequestError&&await pl(c,c.options.onRequestError),await r(c)}finally{f&&clearTimeout(f)}if((c.response.body||c.response._bodyInit)&&!fb.has(c.response.status)&&c.options.method!=="HEAD"){const h=(c.options.parseResponse?"json":c.options.responseType)||ab(c.response.headers.get("content-type")||"");switch(h){case"json":{const p=await c.response.text(),g=c.options.parseResponse||yc;c.response._data=g(p);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[h]()}}return c.options.onResponse&&await pl(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await pl(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>C0({...n,...l,defaults:{...n.defaults,...l.defaults,...a}}),o}const Mc=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),hb=Mc.fetch?(...n)=>Mc.fetch(...n):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),db=Mc.Headers,pb=Mc.AbortController,mb=C0({fetch:hb,Headers:db,AbortController:pb}),gb=mb,_b=()=>window?.__NUXT__?.config||{},xd=()=>_b().app,vb=()=>xd().baseURL,xb=()=>xd().buildAssetsDir,yd=(...n)=>w0(R0(),xb(),...n),R0=(...n)=>{const e=xd(),t=e.cdnURL||e.baseURL;return n.length?w0(t,...n):t};globalThis.__buildAssetsURL=yd,globalThis.__publicAssetsURL=R0;globalThis.$fetch||(globalThis.$fetch=gb.create({baseURL:vb()}));"global"in globalThis||(globalThis.global=globalThis);function Uf(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?Uf(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const yb={run:n=>n()},Mb=()=>yb,P0=typeof console.createTask<"u"?console.createTask:Mb;function Sb(n,e){const t=e.shift(),i=P0(t);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function bb(n,e){const t=e.shift(),i=P0(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}function yu(n,e){for(const t of[...n])t(e)}let Eb=class{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,i={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,t(...s));return i=this.hook(e,r),i}removeHook(e,t){if(this._hooks[e]){const i=this._hooks[e].indexOf(t);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=Uf(e),i=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const t=Uf(e);for(const i in t)this.removeHook(i,t[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(Sb,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(bb,e,...t)}callHookWith(e,t,...i){const r=this._before||this._after?{name:t,args:i,context:{}}:void 0;this._before&&yu(this._before,r);const s=e(t in this._hooks?[...this._hooks[t]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&yu(this._after,r)}):(this._after&&r&&yu(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}};function Tb(){return new Eb}function wb(n={}){let e,t=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(n.asyncContext){const o=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,t=!0},unset:()=>{e=void 0,t=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{t||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Nf.add(u);try{const c=r?r.run(o,a):a();return t||(e=void 0),await c}finally{Nf.delete(u)}}}}function Ab(n={}){const e={};return{get(t,i={}){return e[t]||(e[t]=wb({...n,...i})),e[t]}}}const Sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},im="__unctx__",Cb=Sc[im]||(Sc[im]=Ab()),Rb=(n,e={})=>Cb.get(n,e),rm="__unctx_async_handlers__",Nf=Sc[rm]||(Sc[rm]=new Set);function Pb(n){const e=[];for(const r of Nf){const s=r();s&&e.push(s)}const t=()=>{for(const r of e)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw t(),r})),[i,t]}const Lb=!0,SD={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},Db=null,Ib="#__nuxt",L0="nuxt-app",sm=36e5,Ub="vite:preloadError";function D0(n=L0){return Rb(n,{asyncContext:!1})}const Nb="__nuxt_plugin";function Ob(n){let e=0;const t={_id:n.id||L0||"nuxt-app",_scope:qx(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.21.11"},get vue(){return t.vueApp.version}},payload:Ys({...n.ssrContext?.payload||{},data:Ys({}),state:Cr({}),once:new Set,_errors:Ys({})}),static:{data:{}},runWithContext(r){return t._scope.active&&!Hc()?t._scope.run(()=>om(t,r)):om(t,r)},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Ys({}),_payloadRevivers:{},...n};{const r=window.__NUXT__;if(r)for(const s in r)switch(s){case"data":case"state":case"_errors":Object.assign(t.payload[s],r[s]);break;default:t.payload[s]=r[s]}}t.hooks=Tb(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(r,s)=>{const o="$"+r;ml(t,o,s),ml(t.vueApp.config.globalProperties,o,s)},ml(t.vueApp,"$nuxt",t),ml(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener(Ub,s=>{t.callHook("app:chunkError",{error:s.payload}),s.payload?.message?.includes("Unable to preload CSS")&&s.preventDefault()}),window.useNuxtApp||=bn;const r=t.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});t.hook("app:mounted",r)}const i=t.payload.config;return t.provide("config",i),t}function Fb(n,e){e.hooks&&n.hooks.addHooks(e.hooks)}async function Bb(n,e){if(typeof e=="function"){const{provide:t}=await n.runWithContext(()=>e(n))||{};if(t&&typeof t=="object")for(const i in t)n.provide(i,t[i])}}async function kb(n,e){const t=new Set,i=[],r=[];let s,o=0;async function a(l){const u=l.dependsOn?.filter(c=>e.some(f=>f._name===c)&&!t.has(c))??[];if(u.length>0)i.push([new Set(u),l]);else{const c=Bb(n,l).then(async()=>{l._name&&(t.add(l._name),await Promise.all(i.map(async([f,d])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(d)))})))}).catch(f=>{if(!l.parallel&&!n.payload.error)throw f;s||=f});l.parallel?r.push(c):await c}}for(const l of e)Fb(n,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s)throw n.payload.error||s}function Ur(n){if(typeof n=="function")return n;const e=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[Nb]:!0,_name:e})}function om(n,e,t){const i=()=>e();return D0(n._id).set(n),n.vueApp.runWithContext(i)}function zb(n){let e;return od()&&(e=bs()?.appContext.app.$nuxt),e||=D0(n).tryUse(),e||null}function bn(n){const e=zb(n);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ta(n){return bn().$config}function ml(n,e,t){Object.defineProperty(n,e,{get:()=>t})}function Mu(n){if(n===null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function Of(n,e,t=".",i){if(!Mu(e))return Of(n,{},t,i);const r={...e};for(const s of Object.keys(n)){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Mu(o)&&Mu(r[s])?r[s]=Of(o,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=o))}return r}function Hb(n){return(...e)=>e.reduce((t,i)=>Of(t,i,"",n),{})}const am=Hb();function Vb(n,e){try{return e in n}catch{return!1}}class lm extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,t={}){super(e,t),t.cause&&!this.cause&&(this.cause=t.cause)}toJSON(){const e={message:this.message,statusCode:Ff(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=I0(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function Gb(n){if(typeof n=="string")return new lm(n);if(Wb(n))return n;const e=new lm(n.message??n.statusMessage??"",{cause:n.cause||n});if(Vb(n,"stack"))try{Object.defineProperty(e,"stack",{get(){return n.stack}})}catch{try{e.stack=n.stack}catch{}}if(n.data&&(e.data=n.data),n.statusCode?e.statusCode=Ff(n.statusCode,e.statusCode):n.status&&(e.statusCode=Ff(n.status,e.statusCode)),n.statusMessage?e.statusMessage=n.statusMessage:n.statusText&&(e.statusMessage=n.statusText),e.statusMessage){const t=e.statusMessage;I0(e.statusMessage)!==t&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(e.fatal=n.fatal),n.unhandled!==void 0&&(e.unhandled=n.unhandled),e}function Wb(n){return n?.constructor?.__h3_error__===!0}const Xb=/[^\u0009\u0020-\u007E]/g;function I0(n=""){return n.replace(Xb,"")}function Ff(n,e=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?e:n}const U0=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const vs=()=>bn()?.$router;function qb(n){const e=n.scope;let t=Hc();for(;t;){if(t===e)return!0;t=t.parent}return!1}const Md=()=>{if(od()){const n=bs();if(!n||qb(n))return no(U0,bn()._route)}return bn()._route};const jb=()=>{try{if(bn()._processingMiddleware)return!0}catch{return!1}return!1},$b=(n,e)=>{n||="/";const t=typeof n=="string"?n:"path"in n?Yb(n):vs().resolve(n).href;if(e?.open){const{protocol:u}=new URL(t,window.location.href);if(u&&Lf(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`);const{target:c="_blank",windowFeatures:f={}}=e.open,d=[];for(const[h,p]of Object.entries(f))p!==void 0&&d.push(`${h.toLowerCase()}=${p}`);return open(t,c,d.join(", ")),Promise.resolve()}const i=Ro(t,{acceptRelative:!0}),r=e?.external||i;if(r){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:u}=new URL(t,window.location.href);if(u&&Lf(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`)}const s=jb();if(!r&&s){if(e?.replace){if(typeof n=="string"){const{pathname:u,search:c,hash:f}=Jc(n);return{path:u,...c&&{query:_d(c)},...f&&{hash:f},replace:!0}}return{...n,replace:!0}}return n}const o=vs(),a=bn();if(r)return a._scope.stop(),e?.replace?location.replace(t):location.href=t,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve();const l=typeof n=="string"?Kb(n):n;return e?.replace?o.replace(l):o.push(l)};function Yb(n){return E0(n.path||"",n.query||{})+(n.hash||"")}function Kb(n){const e=Jc(n);return kS(zS(e.pathname))+e.search+e.hash}const N0="__nuxt_error",Sd=()=>_y(bn().payload,"error"),Jb=n=>{const e=bd(n);try{const t=Sd();bn().hooks.callHook("app:error",e),t.value||=e}catch{throw e}return e},Zb=async(n={})=>{const e=bn(),t=Sd();e.callHook("app:error:cleared",n),n.redirect&&await vs().replace(n.redirect),t.value=Db},Qb=n=>!!n&&typeof n=="object"&&N0 in n,bd=n=>{typeof n!="string"&&n.statusText&&(n.message??=n.statusText);const e=Gb(n);return Object.defineProperty(e,N0,{value:!0,configurable:!1,writable:!1}),Object.defineProperty(e,"status",{get:()=>e.statusCode,configurable:!0}),Object.defineProperty(e,"statusText",{get:()=>e.statusMessage,configurable:!0}),e},eE=-1,tE=-2,nE=-3,iE=-4,rE=-5,sE=-6,oE=-7,O0=2**32-1,Bf=O0-1;function aE(n){return!(!Number.isInteger(n)||n<0||n>Bf)}function lE(n){return!(!Number.isInteger(n)||n<0||n>O0)}function cE(n){return Uint8Array.fromBase64(n).buffer}function uE(n){return Uint8Array.from(Buffer.from(n,"base64")).buffer}function fE(n){const e=atob(n),t=e.length,i=new Uint8Array(t);for(let r=0;r<t;r++)i[r]=e.charCodeAt(r);return i.buffer}const hE=typeof Uint8Array.fromBase64=="function",dE=typeof process=="object"&&process.versions?.node!==void 0,pE=hE?cE:dE?uE:fE;function mE(n,e){return n}const gE=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,cm=typeof SharedArrayBuffer>"u"?void 0:Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype,"byteLength").get,_E={fromPrimitive:n=>n,fromISOString:n=>new Date(n),fromStringValue:(n,e)=>n==="URL"?new URL(e):n==="URLSearchParams"?new URLSearchParams(e):Temporal[n.slice(9)].from(e),fromArrayBuffer:n=>n,fromRegExpInfo:(n,e)=>new RegExp(n,e),fromViewInfo:(n,e,t,i)=>{try{gE.call(e)}catch(s){if(!cm)throw s;cm.call(e)}const r=globalThis[n];return t!==void 0?new r(e,t,i):new r(e)},box:n=>Object(n),createArray:n=>new Array(n),createSparseArray:n=>{const e=[];return e[Bf]=void 0,delete e[Bf],e.length=n,e},createObject:()=>({}),createNullPrototypeObject:()=>Object.create(null),createSet:()=>new Set,createMap:()=>new Map,set:(n,e,t)=>{n[e]=t},addValue:(n,e)=>{n.add(e)},addEntry:(n,e,t)=>{n.set(e,t)}},vE=Object.freeze(_E);function xE(n,e,t){return yE(JSON.parse(n),e)}function yE(n,e,t){const i=mE(vE);if(typeof n=="number")return a(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const r=n,s=Array(r.length);let o=null;function a(l,u=!1){if(l===eE)return i.fromPrimitive(void 0);if(l===nE)return i.fromPrimitive(NaN);if(l===iE)return i.fromPrimitive(1/0);if(l===rE)return i.fromPrimitive(-1/0);if(l===sE)return i.fromPrimitive(-0);if(u||typeof l!="number")throw new Error("Invalid input");if(l in s)return s[l];if(l>=r.length)throw new Error("Invalid input");const c=r[l];if(!c||typeof c!="object")s[l]=i.fromPrimitive(c);else if(Array.isArray(c))if(typeof c[0]=="string"){const f=c[0],d=e&&Object.hasOwn(e,f)?e[f]:void 0;if(d){let h=c[1];if(typeof h!="number"&&(h=r.push(c[1])-1),Object.hasOwn(s,h))return s[l]=d(s[h]);if(o??=new Set,o.has(h))throw new Error("Invalid circular reference");return o.add(h),s[l]=d(a(h)),o.delete(h),s[l]}switch(f){case"Date":s[l]=i.fromISOString(c[1]);break;case"Set":const h=i.createSet();s[l]=h;for(let _=1;_<c.length;_+=1)i.addValue(h,a(c[_]));break;case"Map":const p=i.createMap();s[l]=p;for(let _=1;_<c.length;_+=2)i.addEntry(p,a(c[_]),a(c[_+1]));break;case"RegExp":s[l]=i.fromRegExpInfo(c[1],c[2]);break;case"Object":{const _=c[1];if(typeof r[_]=="object"&&r[_][0]!=="BigInt")throw new Error("Invalid input");s[l]=i.box(a(_));break}case"BigInt":s[l]=i.fromPrimitive(BigInt(c[1]));break;case"null":const g=i.createNullPrototypeObject();s[l]=g;for(let _=1;_<c.length;_+=2){const m=c[_];if(typeof m!="string")throw new Error("Cannot parse an object with a non-string key");if(m==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");i.set(g,m,a(c[_+1]))}break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Float16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":case"DataView":{if(r[c[1]][0]!=="ArrayBuffer")throw new Error("Invalid data");const _=a(c[1]);s[l]=i.fromViewInfo(f,_,c[2],c[3]);break}case"ArrayBuffer":{const _=c[1];if(typeof _!="string")throw new Error("Invalid ArrayBuffer encoding");s[l]=i.fromArrayBuffer(pE(_));break}case"URL":case"URLSearchParams":case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{s[l]=i.fromStringValue(f,c[1]);break}default:throw new Error(`Unknown type ${f}`)}}else if(c[0]===oE){const f=c[1];if(!lE(f))throw new Error("Invalid input");const d=i.createSparseArray(f);s[l]=d;for(let h=2;h<c.length;h+=2){const p=c[h];if(!aE(p)||p>=f)throw new Error("Invalid input");i.set(d,p,a(c[h+1]))}}else{const f=i.createArray(c.length);s[l]=f;for(let d=0;d<c.length;d+=1){const h=c[d];h!==tE&&i.set(f,d,a(h))}}else{const f=i.createObject();s[l]=f;for(const d of Object.keys(c)){if(d==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");i.set(f,d,a(c[d]))}}return s[l]}return a(0)}const ME=new Set(["link","style","script","noscript"]),SE=new Set(["title","titleTemplate","script","style","noscript"]),kf=new Set(["base","meta","link","style","script","noscript"]),bE=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),EE=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),um=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),TE=new Set(["templateParams","htmlAttrs","bodyAttrs"]),wE=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Su=n=>typeof n=="number"?Number.isFinite(n):n;function F0(n){return n==="__proto__"||n==="constructor"||n==="prototype"}const zf=(n,e)=>n._w===e._w?n._p-e._p:n._w-e._w,fm={base:-10,title:10},AE={critical:-8,high:-1,low:2},hm={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},CE=/@import/,Ho=n=>n===""||n===!0;function RE(n,e){if(typeof e.tagPriority=="number")return e.tagPriority;let t=100;const i=AE[e.tagPriority]||0,r=n.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:hm;if(e.tag in fm)t=fm[e.tag];else if(e.tag==="meta"){const s=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;s&&(t=hm.meta[s])}else if(e.tag==="link"&&e.props.rel)t=r.link[e.props.rel];else if(e.tag==="script"){const s=String(e.props.type);Ho(e.props.async)?t=r.script.async:e.props.src&&!Ho(e.props.defer)&&!Ho(e.props.async)&&s!=="module"&&!s.endsWith("json")||e.innerHTML&&!s.endsWith("json")?t=r.script.sync:(Ho(e.props.defer)&&e.props.src&&!Ho(e.props.async)||s==="module")&&(t=r.script.defer)}else e.tag==="style"&&(t=e.innerHTML&&CE.test(e.innerHTML)?r.style.imported:r.style.sync);return(t||100)+i}function Hf(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?Hf(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const B0=(()=>{if(console.createTask)return console.createTask;const n={run:e=>e()};return()=>n})();function k0(n,e,t,i){for(let r=t;r<n.length;r+=1)try{const s=i?i.run(()=>n[r](...e)):n[r](...e);if(s&&typeof s.then=="function")return Promise.resolve(s).then(()=>k0(n,e,r+1,i))}catch(s){return Promise.reject(s)}}function PE(n,e,t){if(n.length>0)return k0(n,e,0,B0(t))}function LE(n,e,t){if(n.length>0){const i=B0(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}}function bu(n,e){for(const t of[...n])t(e)}var DE=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,e,t={}){if(!n||typeof e!="function")return()=>{};const i=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!t.allowDeprecated){let s=r.message;s||(s=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(e),()=>{e&&(this.removeHook(n,e),e=void 0)}}hookOnce(n,e){let t,i=(...r)=>(typeof t=="function"&&t(),t=void 0,i=void 0,e(...r));return t=this.hook(n,i),t}removeHook(n,e){const t=this._hooks[n];if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1),t.length===0&&(this._hooks[n]=void 0)}}clearHook(n){this._hooks[n]=void 0}deprecateHook(n,e){this._deprecatedHooks[n]=typeof e=="string"?{to:e}:e;const t=this._hooks[n]||[];this._hooks[n]=void 0;for(const i of t)this.hook(n,i)}deprecateHooks(n){for(const e in n)this.deprecateHook(e,n[e])}addHooks(n){const e=Hf(n),t=Object.keys(e).map(i=>this.hook(i,e[i]));return()=>{for(const i of t)i();t.length=0}}removeHooks(n){const e=Hf(n);for(const t in e)this.removeHook(t,e[t])}removeAllHooks(){this._hooks={}}callHook(n,...e){return this.callHookWith(PE,n,e)}callHookParallel(n,...e){return this.callHookWith(LE,n,e)}callHookWith(n,e,t){const i=this._before||this._after?{name:e,args:t,context:{}}:void 0;this._before&&bu(this._before,i);const r=n(this._hooks[e]?[...this._hooks[e]]:[],t,e);return r instanceof Promise?r.finally(()=>{this._after&&i&&bu(this._after,i)}):(this._after&&i&&bu(this._after,i),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const e=this._before.indexOf(n);e!==-1&&this._before.splice(e,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const e=this._after.indexOf(n);e!==-1&&this._after.splice(e,1)}}}};function IE(){return new DE}const UE=["name","property","http-equiv"],NE=new Set(["viewport","description","keywords","robots"]);function z0(n){const e=n.indexOf(":");if(e===-1)return!1;const t=n.indexOf(":",e+1),i=n.slice(e+1,t===-1?n.length:t);return i==="twitter"?n==="meta:twitter:image"||n.startsWith("meta:twitter:image:"):wE.has(i)}function Vf(n){const{props:e,tag:t}=n;if(EE.has(t))return t;if(t==="link"&&e.rel==="canonical")return"canonical";if(t==="link"&&e.rel==="alternate"){if(e.hreflang)return`alternate:${e.hreflang}`;if(e.type)return`alternate:${e.type}:${e.href||""}`}if(e.charset)return"charset";if(n.tag==="meta"){for(const i of UE)if(e[i]!==void 0){const r=e[i],s=r&&typeof r=="string"&&r.includes(":"),o=r&&NE.has(r),l=!(s||o)&&n.key?`:key:${n.key}`:"";return`${t}:${r}${l}`}}if(n.key)return`${t}:key:${n.key}`;if(e.id)return`${t}:id:${e.id}`;if(t==="link"&&e.rel==="alternate")return`alternate:${e.href||""}`;if(SE.has(t)){const i=n.textContent||n.innerHTML;if(i)return`${t}:content:${i}`}}function H0(n){const e=n._h||n._d;if(e)return e;const t=n.textContent||n.innerHTML;if(t)return t;const i=Object.keys(n.props).sort();return`${n.tag}:${i.map(r=>`${r}:${String(n.props[r])}`).join(",")}`}function bc(n,e,t){typeof n==="function"&&(!t||t!=="titleTemplate"&&!(t[0]==="o"&&t[1]==="n"))&&(n=n());const r=e?e(t,n):n;if(Array.isArray(r)){let s;for(let o=0;o<r.length;o++){const a=bc(r[o],e);s?s[o]=a:a!==r[o]&&(s=r.slice(0,o),s[o]=a)}return s||r}if(r?.constructor===Object){let s;for(const o in r){const a=F0(o),l=a?void 0:bc(r[o],e,o);if(!s&&(a||o==="_resolver"||l!==r[o])){s={};for(const c in r){if(c===o)break;s[c]=r[c]}}s&&!a&&(s[o]=l)}return s||r}return r}const OE=/[\s"'<>/=\x00-\x1F\x7F]/;function FE(n,e){const t=n==="style"?new Map:new Set;function i(r){if(r==null||r===void 0)return;const s=String(r).trim();if(s)if(n==="style"){const[o,...a]=s.split(":").map(l=>l?l.trim():"");o&&a.length&&t.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>t.add(o))}return typeof e=="string"?n==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(n==="style"?t.set(String(r).trim(),String(s)):i(r))}),t}function V0(n,e){if(n.props=n.props||{},!e)return n;if(n.tag==="templateParams")return n.props=e,n;const t=kf.has(n.tag)||n.tag==="htmlAttrs"||n.tag==="bodyAttrs";for(const i of Object.keys(e)){if(F0(i))continue;const r=i.startsWith("data-"),s=t&&!um.has(i),o=s&&!r?i.toLowerCase():i;if(s&&(!o||OE.test(o)))continue;const a=e[i];if(a===null){n.props[o]=null;continue}if(i==="class"||i==="style"){n.props[i]=FE(i,a);continue}if(um.has(i)){if((i==="textContent"||i==="innerHTML")&&typeof a=="object"){let c=e.type;if(e.type||(c="application/json"),!c?.endsWith("json")&&c!=="speculationrules")continue;e.type=c,n.props.type=c,n[i]=JSON.stringify(a)}else n[i]=a;continue}const l=String(a),u=n.tag==="meta"&&o==="content";l==="true"||l===""?n.props[o]=r||u?l:!0:!a&&r&&l==="false"?n.props[o]="false":a!==void 0&&(n.props[o]=a)}return n}function BE(n,e){const t=typeof e=="object"&&typeof e!="function"?e:{[n==="script"||n==="noscript"||n==="style"?"innerHTML":"textContent"]:e},i=V0({tag:n,props:{}},t);return i.key&&ME.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function kE(n,e){if(!n)return[];typeof n=="function"&&(n=n());const t=(r,s)=>{for(let o=0;o<e.length;o++)s=e[o](r,s);return s};n=t(void 0,n);const i=[];return n=bc(n,t),Object.entries(n||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push(BE(r,o))}),i.flat()}function dm(n,e){const t=typeof e=="function"?e(n):e,i=t.key||String(n.plugins.size+1);n.plugins.get(i)||(n.plugins.set(i,t),n.hooks.addHooks(t.hooks||{}))}function zE(n={}){const e=IE();e.addHooks(n.hooks||{});const t=!n.document,i=new Map,r=new Map,s=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:n,hooks:e,ssr:t,entries:i,headEntries(){return[...i.values()]},use:a=>dm(o,a),push(a,l){const u={...l||{}};delete u.head;const c=u._index??o._entryCount++,f={_i:c,input:a,options:u},d={_poll(h=!1){o.dirty=!0,!h&&s.add(c),e.callHook("entries:updated",o)},dispose(){i.delete(c)&&o.invalidate()},patch(h){(!u.mode||u.mode==="server"&&t||u.mode==="client"&&!t)&&(f.input=h,i.set(c,f),d._poll())}};return d.patch(a),d},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);s.size;){const d=s.values().next().value;s.delete(d);const h=i.get(d);if(h){const p={tags:kE(h.input,n.propResolvers||[]).map(g=>Object.assign(g,h.options)),entry:h};await e.callHook("entries:normalize",p),h._tags=p.tags.map((g,_)=>(g._w=RE(o,g),g._p=(h._i<<10)+_,g._d=Vf(g),g._d||(g._h=H0(g)),g))}}let l=!1;a.entries.flatMap(d=>(d._tags||[]).map(h=>({...h,props:{...h.props}}))).sort(zf).reduce((d,h)=>{const p=h._d||h._h;if(!d.has(p))return d.set(p,h);const g=d.get(p);if((h?.tagDuplicateStrategy||(TE.has(h.tag)?"merge":null)||(h.key&&h.key===g.key?"merge":null))==="merge"){const m={...g.props};Object.entries(h.props).forEach(([y,x])=>m[y]=y==="style"?new Map([...g.props.style||new Map,...x]):y==="class"?new Set([...g.props.class||new Set,...x]):x),d.set(p,{...h,props:m})}else h._p>>10===g._p>>10&&h.tag==="meta"&&z0(p)?(d.set(p,Object.assign([...Array.isArray(g)?g:[g],h],h)),l=!0):(h._w===g._w?h._p>g._p:h?._w<g?._w)&&d.set(p,h);return d},a.tagMap);const u=a.tagMap.get("title"),c=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,c){const d=c?.textContent;if(o._titleTemplate=d,d){let h=typeof d=="function"?d(u?.textContent):d;typeof h=="string"&&!o.plugins.has("template-params")&&(h=h.replace("%s",u?.textContent||"")),u?h===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:h}):(c.tag="title",c.textContent=h)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(zf)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const f=[];for(const d of a.tags){const{innerHTML:h,tag:p,props:g}=d;if(bE.has(p)&&!(Object.keys(g).length===0&&!Su(d.innerHTML)&&!Su(d.textContent))&&!(p==="meta"&&!Su(g.content)&&!g["http-equiv"]&&!g.charset)){if(p==="script"&&h){if(String(g.type).endsWith("json")){const _=typeof h=="string"?h:JSON.stringify(h);d.innerHTML=_.replace(/</g,"\\u003C")}else typeof h=="string"&&(d.innerHTML=h.replace(new RegExp(`</${p}`,"g"),`<\\/${p}`));d._d=Vf(d)}f.push(d)}}return f},invalidate(){for(const a of i.values())s.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(n?.plugins||[]).forEach(a=>dm(o,a)),o.hooks.callHook("init",o),n.init?.forEach(a=>a&&o.push(a)),o}const Eu="%separator";function HE(n,e,t=!1){let i;if(e==="s"||e==="pageTitle")i=n.pageTitle;else if(e.includes(".")){const r=e.indexOf(".");i=n[e.substring(0,r)]?.[e.substring(r+1)]}else i=n[e];if(i!==void 0)return t?(i||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):i||""}function gl(n,e,t,i=!1){if(typeof n!="string"||!n.includes("%"))return n;let r=n;try{r=decodeURI(n)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return n;const o=n.includes(Eu);return n=n.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Eu||!s.includes(a))return a;const l=HE(e,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(n=n.split(Eu).map(a=>a.trim()).filter(a=>a!=="").join(t?` ${t} `:" ")),n}const pm=n=>n.includes(":key")?n:n.split(":").join(":key:"),VE={key:"aliasSorting",hooks:{"tags:resolve":n=>{let e=!1;for(const t of n.tags){const i=t.tagPriority;if(!i)continue;const r=String(i);if(r.startsWith("before:")){const s=pm(r.slice(7)),o=n.tagMap.get(s);o&&(typeof o.tagPriority=="number"&&(t.tagPriority=o.tagPriority),t._p=o._p-1,e=!0)}else if(r.startsWith("after:")){const s=pm(r.slice(6)),o=n.tagMap.get(s);o&&(typeof o.tagPriority=="number"&&(t.tagPriority=o.tagPriority),t._p=o._p+1,e=!0)}}e&&(n.tags=n.tags.sort(zf))}}},GE={key:"deprecations",hooks:{"entries:normalize":({tags:n})=>{for(const e of n)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Gf(n){if(typeof n==="function")return n;if(n instanceof Promise)return await n;if(Array.isArray(n))return await Promise.all(n.map(t=>Gf(t)));if(n?.constructor===Object){const t={};for(const i of Object.keys(n))t[i]=await Gf(n[i]);return t}return n}const WE={key:"promises",hooks:{"entries:resolve":async n=>{const e=[];for(const t in n.entries)n.entries[t]._promisesProcessed||e.push(Gf(n.entries[t].input).then(i=>{n.entries[t].input=i,n.entries[t]._promisesProcessed=!0}));await Promise.all(e)}}},XE={meta:"content",link:"href",htmlAttrs:"lang"},qE=["innerHTML","textContent"],jE=n=>({key:"template-params",hooks:{"entries:normalize":e=>{const t=e.tags.filter(i=>i.tag==="templateParams"&&i.mode==="server")?.[0]?.props||{};Object.keys(t).length&&(n._ssrPayload={templateParams:{...n._ssrPayload?.templateParams||{},...t}})},"tags:resolve":({tagMap:e,tags:t})=>{const i=e.get("templateParams")?.props||{},r=i.separator||"|";delete i.separator,i.pageTitle=gl(i.pageTitle||n._title||"",i,r);for(const s of t){if(s.processTemplateParams===!1)continue;const o=XE[s.tag];if(o&&typeof s.props[o]=="string")s.props[o]=gl(s.props[o],i,r);else if(s.processTemplateParams||s.tag==="titleTemplate"||s.tag==="title")for(const a of qE)typeof s[a]=="string"&&(s[a]=gl(s[a],i,r,s.tag==="script"&&s.props.type.endsWith("json")))}n._templateParams=i,n._separator=r},"tags:afterResolve":({tagMap:e})=>{const t=e.get("title");t?.textContent&&t.processTemplateParams!==!1&&(t.textContent=gl(t.textContent,n._templateParams,n._separator))}}}),$E=(n,e)=>zt(e)?dy(e):e,G0="usehead";function YE(n){return{install(t){t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(G0,n)}}.install}function KE(){if(od()){const n=no(G0);if(n)return n}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function bD(n,e={}){const t=e.head||KE();return t.ssr?t.push(n||{},e):JE(t,n,e)}function JE(n,e,t={}){const i=Hc();if(i&&!i.active)return{patch(){},dispose(){},_poll(){}};const r=It(!1);let s;return Cy(()=>{const a=r.value?{}:bc(e,$E);s?s.patch(a):s=n.push(a,t)}),bs()&&(ja(()=>{s.dispose()}),O_(()=>{r.value=!0}),N_(()=>{r.value=!1})),s}const ZE={},W0=(n,e)=>[],QE=W0,eT=function(e){if(!e.includes("%"))return e;const t=e.indexOf("?"),i=t===-1?e:e.slice(0,t);try{return t===-1?decodeURI(i):decodeURI(i)+e.slice(t)}catch{return e}},mm=(n,e)=>{if(typeof n!="string")return n;const t=eT(n);return e?t.toLowerCase():t},tT=n=>ZE.sensitive?am({},...W0("",mm(n,!1)).map(e=>e.data).reverse()):am({},...QE("",mm(n,!0)).map(e=>e.data).reverse()),nT=tT;let Yl;function iT(){let n;return n=$fetch(yd(`builds/meta/${Ta().app.buildId}.json`),{responseType:"json"}).then(e=>{if(!e||typeof e!="object"||!Array.isArray(e.prerendered))throw new Error("[nuxt] Received malformed app manifest. Ensure that `builds/meta/*.json` is served as JSON by your hosting/proxy and not rewritten to an HTML fallback.");return e}),Yl=n,n.catch(e=>{Yl===n&&(Yl=void 0),console.error("[nuxt] Error fetching app manifest.",e)}),n}function Ed(){return Yl||iT()}function Ya(n){const e=typeof n=="string"?n:n.path;try{return nT(e)}catch(t){return console.error("[nuxt] Error matching route rules.",t),{}}}async function gm(n,e={}){if(await aT(n)){const t=await oT(n,e),i=Td(n)?"default":"force-cache";return await X0(t,i)||null}return null}const rT="_payload.json",sT="_b";async function oT(n,e={}){const t=new URL(n,"http://localhost");if(t.host!=="localhost"||Ro(t.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=Ta(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await lT(n)?s:i.app.baseURL,a=Kc(o,t.pathname,rT);return Td(n)||(t.search=""),r&&t.searchParams.set(sT,String(r)),a+t.search}async function X0(n,e){try{if(Lb){const t=await fetch(n,{cache:e});return t.ok?await $0(await t.text()):null}}catch(t){console.warn("[nuxt] Cannot load payload ",n,t)}return null}function q0(n){if(n.redirect)return!1;if(n.prerender)return!0}function Zc(n){return new URL(n,"http://localhost").pathname}function Td(n){return!!Ya({path:Zc(n)}).payload}async function j0(n){n=Zc(n),n=n==="/"?n:n.replace(/\/$/,"");try{return(await Ed()).prerendered.includes(n)}catch{return!1}}async function aT(n=Md().path){const e=Ya({path:Zc(n)});if(e.ssr===!1)return!1;const t=q0(e);return t!==void 0?t:e.payload?!0:await j0(n)}async function lT(n=Md().path){const e=q0(Ya({path:Zc(n)}));return e!==void 0?e:await j0(n)}let Hr=null;async function cT(){if(Hr)return Hr;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const e=await $0(n.textContent||""),t=n.dataset.src?await X0(n.dataset.src,e.prerenderedAt?"force-cache":"no-cache"):void 0;return Hr={...e,...t,...window.__NUXT__},Hr.config?.public&&(Hr.config.public=Cr(Hr.config.public)),Hr}async function $0(n){return await xE(n,bn()._payloadRevivers)}function uT(n,e){bn()._payloadRevivers[n]=e}const fT=[["NuxtError",n=>bd(n)],["EmptyShallowRef",n=>xf(n==="_"?void 0:n==="0n"?BigInt(0):yc(n))],["EmptyRef",n=>It(n==="_"?void 0:n==="0n"?BigInt(0):yc(n))],["ShallowRef",n=>xf(n)],["ShallowReactive",n=>Ys(n)],["Ref",n=>It(n)],["Reactive",n=>Cr(n)]],hT=Ur({name:"nuxt:revive-payload:client",order:-30,async setup(n){let e,t;for(const[i,r]of fT)uT(i,r);Object.assign(n.payload,([e,t]=Pb(()=>n.runWithContext(cT)),e=await e,t(),e)),window.__NUXT__=n.payload}});async function wd(n,e={}){const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return n._domUpdatePromise||(n._domUpdatePromise=new Promise(async r=>{const s=new Map,o=new Promise(h=>{n.resolveTags().then(p=>{h(p.map(g=>{const _=s.get(g._d)||0,m={tag:g,id:(_?`${g._d}:${_}`:g._d)||g._h,shouldRender:!0};return g._d&&z0(g._d)&&s.set(g._d,_+1),m}))})});let a=n._dom;if(!a){a={title:t.title,elMap:new Map().set("htmlAttrs",t.documentElement).set("bodyAttrs",t.body)};for(const h of["body","head"]){const p=t[h]?.children;for(const g of p){const _=g.tagName.toLowerCase();if(!kf.has(_))continue;const m=V0({tag:_,props:{}},{innerHTML:g.innerHTML,...g.getAttributeNames().reduce((y,x)=>(y[x]=g.getAttribute(x),y),{})||{}});if(m.key=g.getAttribute("data-hid")||void 0,m._d=Vf(m)||H0(m),a.elMap.has(m._d)){let y=1,x=m._d;for(;a.elMap.has(x);)x=`${m._d}:${y++}`;a.elMap.set(x,g)}else a.elMap.set(m._d,g)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(h,p,g){const _=`${h}:${p}`;a.sideEffects[_]=g,delete a.pendingSideEffects[_]}function u({id:h,$el:p,tag:g}){const _=g.tag.endsWith("Attrs");a.elMap.set(h,p),_||(g.textContent&&g.textContent!==p.textContent&&(p.textContent=g.textContent),g.innerHTML&&g.innerHTML!==p.innerHTML&&(p.innerHTML=g.innerHTML),l(h,"el",()=>{p?.remove(),a.elMap.delete(h)}));for(const m in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,m))continue;const y=g.props[m];if(m.startsWith("on")&&typeof y=="function"){const v=p?.dataset;if(v&&v[`${m}fired`]){const b=m.slice(0,-5);y.call(p,new Event(b.substring(2)))}p.getAttribute(`data-${m}`)!==""&&((g.tag==="bodyAttrs"?t.defaultView:p).addEventListener(m.substring(2),y.bind(p)),p.setAttribute(`data-${m}`,""));continue}const x=`attr:${m}`;if(m==="class"){if(!y)continue;for(const v of y)_&&l(h,`${x}:${v}`,()=>p.classList.remove(v)),!p.classList.contains(v)&&p.classList.add(v)}else if(m==="style"){if(!y)continue;for(const[v,b]of y)l(h,`${x}:${v}`,()=>{p.style.removeProperty(v)}),p.style.setProperty(v,b)}else y!==!1&&y!==null&&(p.getAttribute(m)!==y&&p.setAttribute(m,y===!0?"":String(y)),_&&l(h,x,()=>p.removeAttribute(m)))}}const c=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const h of d){const{tag:p,shouldRender:g,id:_}=h;if(g){if(p.tag==="title"){t.title=p.textContent,l("title","",()=>t.title=a.title);continue}h.$el=h.$el||a.elMap.get(_),h.$el?u(h):kf.has(p.tag)&&c.push(h)}}for(const h of c){const p=h.tag.tagPosition||"head";h.$el=t.createElement(h.tag.tag),u(h),f[p]=f[p]||t.createDocumentFragment(),f[p].appendChild(h.$el)}for(const h of d)await n.hooks.callHook("dom:renderTag",h,t,l);f.head&&t.head.appendChild(f.head),f.bodyOpen&&t.body.insertBefore(f.bodyOpen,t.body.firstChild),f.bodyClose&&t.body.appendChild(f.bodyClose);for(const h in a.pendingSideEffects)a.pendingSideEffects[h]();n._dom=a,await n.hooks.callHook("dom:rendered",{renders:d}),r()}).finally(()=>{n._domUpdatePromise=void 0,n.dirty=!1})),n._domUpdatePromise}function dT(n={}){const e=n.domOptions?.render||wd;n.document=n.document||(typeof window<"u"?document:void 0);const t=n.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1,i=zE({...n,plugins:[...n.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[t?JSON.parse(t):!1,...n.init||[]]});return i.ssr=!1,i}function pT(n,e){let t=0;return()=>{const i=++t;e(()=>{t===i&&n()})}}function mT(n={}){const e=dT({domOptions:{render:pT(()=>wd(e),t=>setTimeout(t,0))},...n});return e.install=YE(e),e}const gT={disableDefaults:!0,disableCapoSorting:!1,plugins:[GE,WE,jE,VE]},_T=Ur({name:"nuxt:head",enforce:"pre",setup(n){const e=mT(gT);n.vueApp.use(e);{let t=!0;const i=async()=>{t=!1,await wd(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!t}),n.hooks.hook("page:start",()=>{t=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i);const r=e.push.bind(e);e.push=((s,o)=>{const a=r(s,o),l=a.dispose.bind(a);return a.dispose=()=>{const u=n["~transitionPromise"];u?u.then(l):l()},a})}}}),vT=n=>{const e=Ya({path:n.path});if(e.redirect){const t=e.redirect.includes("#")?e.redirect:e.redirect+n.hash;return Ro(t,{acceptRelative:!0})?(window.location.href=t,!1):t}},xT=[vT];function Tu(n){const e=n&&typeof n=="object"?n:{};typeof n=="object"&&(n=vd({pathname:n.path||"",search:S0(n.query||{}),hash:n.hash||""}));const t=new URL(n.toString(),window.location.href);return{path:t.pathname,fullPath:n,query:_d(t.search),hash:t.hash,params:e.params||{},name:void 0,matched:e.matched||[],redirectedFrom:void 0,meta:e.meta||{},href:n}}const yT=Ur({name:"nuxt:router",enforce:"pre",setup(n){const e=ZS(window.location.pathname,Ta().app.baseURL)+window.location.search+window.location.hash,t=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(h,p)=>(i[h].push(p),()=>{const g=i[h].indexOf(p);g!==-1&&i[h].splice(g,1)}),s=Ta().app.baseURL,o=Cr(Tu(e));let a=0;async function l(h,p){const g=++a;try{const _=Tu(h);for(const m of i["navigate:before"]){const y=await m(_,o);if(g!==a||y===!1||y instanceof Error)return;if(typeof y=="string"&&y.length)return await l(y,!0)}for(const m of i["resolve:before"])if(await m(_,o),g!==a)return;Object.assign(o,_),window.history[p?"replaceState":"pushState"]({},"",Kc(s,_.fullPath)),n.isHydrating||await n.runWithContext(Zb);for(const m of i["navigate:after"])await m(_,o)}catch(_){for(const m of i.error)await m(_)}}const c={currentRoute:md(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:h=>l(h,!1),replace:h=>l(h,!0),back:()=>window.history.go(-1),go:h=>window.history.go(h),forward:()=>window.history.go(1),beforeResolve:h=>r("resolve:before",h),beforeEach:h=>r("navigate:before",h),afterEach:h=>r("navigate:after",h),onError:h=>r("error",h),resolve:Tu,addRoute:(h,p)=>{t.push(p)},getRoutes:()=>t,hasRoute:h=>t.some(p=>p.name===h),removeRoute:h=>{const p=t.findIndex(g=>g.name===h);p!==-1&&t.splice(p,1)}};n.vueApp.component("RouterLink",ld({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(h,{slots:p})=>{const g=()=>l(h.to,h.replace);return()=>{const _=c.resolve(h.to);return h.custom?p.default?.({href:h.to,navigate:g,route:_}):gd("a",{href:h.to,onClick:m=>(m.preventDefault(),g())},p)}}})),window.addEventListener("popstate",h=>{const p=h.target.location;c.replace(p.href.replace(p.origin,""))}),n._route=o,n._middleware||={global:[],named:{}};const f=n.payload.state._layout,d=n.payload.state._layoutProps;return n.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(h,p)=>{h.meta=Cr(h.meta||{}),n.isHydrating&&f&&!Mi(h.meta.layout)&&(h.meta.layout=f,h.meta.layoutProps=d),n._processingMiddleware=!0;{const g=new Set([...xT,...n._middleware.global]),_=Ya({path:h.path});if(_.appMiddleware)for(const m in _.appMiddleware){const y=n._middleware.named[m];y&&(_.appMiddleware[m]?g.add(y):g.delete(y))}for(const m of g){const y=await n.runWithContext(()=>m(h,p));if(y!==!0&&(y||y===!1))return y}}}),c.afterEach(()=>{delete n._processingMiddleware}),await c.replace(e),eb(o.fullPath,e)||await n.runWithContext(()=>$b(o.fullPath))}),{provide:{route:o,router:c}}}}),_m=globalThis.requestIdleCallback||(n=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{n(t)},1)}),ED=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),Ad=n=>{const e=bn();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{_m(()=>n())}):_m(()=>n())},MT=Ur({name:"nuxt:payload",setup(n){const e=new Set;vs().beforeResolve(async(t,i)=>{const r=Td(t.path),s=r?em(t.fullPath):t.path,o=r?em(i.fullPath):i.path;if(s===o)return;const a=await gm(s);if(a){for(const l of e)delete n.static.data[l];for(const l in a.data)l in n.static.data||e.add(l),n.static.data[l]=a.data[l]}}),Ad(()=>{n.hooks.hook("link:prefetch",async t=>{const{hostname:i}=new URL(t,window.location.href);i===window.location.hostname&&await gm(t).catch(()=>{console.warn("[nuxt] Error preloading payload for",t)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Ed,1e3)})}}),ST=Ur(()=>{const n=vs();Ad(()=>{n.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),bT=Ur(n=>{let e;async function t(){let i;try{i=await Ed()}catch(r){const s=r;if(!("status"in s&&(s.status===404||s.status===403)))throw s}e&&clearTimeout(e),e=setTimeout(t,sm);try{const r=await $fetch(yd("builds/latest.json")+`?${Date.now()}`);r.id!==i?.id&&(n.hooks.callHook("app:manifest:update",r),e&&clearTimeout(e))}catch{}}Ad(()=>{e=setTimeout(t,sm)})});function ET(n={}){const e=n.path||window.location.pathname,t=new URL(e,window.location.href);if(t.host!==window.location.host)throw new Error(`Cannot navigate to a URL with a different host: '${e}'.`);if(t.protocol&&Lf(t.protocol))throw new Error(`Cannot navigate to a URL with '${t.protocol}' protocol.`);let i={};try{i=yc(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||i?.path!==e||i?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:bn().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const TT=Ur({name:"nuxt:chunk-reload",setup(n){const e=vs(),t=Ta(),i=new Set;e.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o=Kc(t.app.baseURL,s.fullPath);ET({path:o,persistState:!0})}n.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),wT=Ur({name:"nuxt:global-components"}),AT=[hT,_T,yT,MT,ST,bT,TT,wT],CT="modulepreload",RT=function(n,e){return new URL(n,e).href},vm={},Wf=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let u=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=u(t.map(c=>{if(c=RT(c,i),c in vm)return;vm[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(i)for(let p=o.length-1;p>=0;p--){const g=o[p];if(g.href===c&&(!f||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":CT,f||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),f)return new Promise((p,g)=>{h.addEventListener("load",p),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};const Cd="177",PT=0,xm=1,LT=2,Y0=1,DT=2,qi=3,Pr=0,Mn=1,Jt=2,br=0,ao=1,Ec=2,ym=3,Mm=4,IT=5,is=100,UT=101,NT=102,OT=103,FT=104,BT=200,kT=201,zT=202,HT=203,Xf=204,qf=205,VT=206,GT=207,WT=208,XT=209,qT=210,jT=211,$T=212,YT=213,KT=214,jf=0,$f=1,Yf=2,go=3,Kf=4,Jf=5,Zf=6,Qf=7,K0=0,JT=1,ZT=2,Er=0,QT=1,e1=2,t1=3,J0=4,n1=5,i1=6,r1=7,Z0=300,_o=301,vo=302,eh=303,th=304,Qc=306,nh=1e3,os=1001,ih=1002,qn=1003,s1=1004,_l=1005,Li=1006,wu=1007,as=1008,Ni=1009,Q0=1010,ev=1011,wa=1012,Rd=1013,xs=1014,Di=1015,Ka=1016,Pd=1017,Ld=1018,Aa=1020,tv=35902,nv=1021,iv=1022,xi=1023,Ca=1026,Ra=1027,Dd=1028,Id=1029,rv=1030,Ud=1031,Nd=1033,Kl=33776,Jl=33777,Zl=33778,Ql=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,fh=37808,hh=37809,dh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,yh=37817,Mh=37818,Sh=37819,bh=37820,Eh=37821,ec=36492,Th=36494,wh=36495,sv=36283,Ah=36284,Ch=36285,Rh=36286,o1=3200,a1=3201,ov=0,l1=1,vr="",si="srgb",xo="srgb-linear",Tc="linear",dt="srgb",Ps=7680,Sm=519,c1=512,u1=513,f1=514,av=515,h1=516,d1=517,p1=518,m1=519,bm=35044,Od=35048,Em="300 es",Qi=2e3,wc=2001;class Po{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tm=1234567;const la=Math.PI/180,Pa=180/Math.PI;function Es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function Fd(n,e){return(n%e+e)%e}function g1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function _1(n,e,t){return n!==e?(t-n)/(e-n):0}function ca(n,e,t){return(1-t)*n+t*e}function v1(n,e,t,i){return ca(n,e,1-Math.exp(-t*i))}function x1(n,e=1){return e-Math.abs(Fd(n,e*2)-e)}function y1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function M1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function S1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function b1(n,e){return n+Math.random()*(e-n)}function E1(n){return n*(.5-Math.random())}function T1(n){n!==void 0&&(Tm=n);let e=Tm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function w1(n){return n*la}function A1(n){return n*Pa}function C1(n){return(n&n-1)===0&&n!==0}function R1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function P1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function L1(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*p,l*h,a*u);break;case"YXY":n.set(l*h,a*c,l*p,a*u);break;case"ZYZ":n.set(l*p,l*h,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const an={DEG2RAD:la,RAD2DEG:Pa,generateUUID:Es,clamp:Je,euclideanModulo:Fd,mapLinear:g1,inverseLerp:_1,lerp:ca,damp:v1,pingpong:x1,smoothstep:y1,smootherstep:M1,randInt:S1,randFloat:b1,randFloatSpread:E1,seededRandom:T1,degToRad:w1,radToDeg:A1,isPowerOfTwo:C1,ceilPowerOfTwo:R1,floorPowerOfTwo:P1,setQuaternionFromProperEuler:L1,normalize:gn,denormalize:$s};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ja{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],p=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(f!==g||l!==d||u!==h||c!==p){let _=1-a;const m=l*d+u*h+c*p+f*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const b=Math.sqrt(x),w=Math.atan2(b,m*y);_=Math.sin(_*w)/b,a=Math.sin(a*w)/b}const v=a*y;if(l=l*_+d*v,u=u*_+h*v,c=c*_+p*v,f=f*_+g*v,_===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+c*f+l*h-u*d,e[t+1]=l*p+c*d+u*f-a*h,e[t+2]=u*p+c*h+a*d-l*f,e[t+3]=c*p-a*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*h*p,this._y=u*h*f-d*c*p,this._z=u*c*p+d*h*f,this._w=u*c*f-d*h*p;break;case"YXZ":this._x=d*c*f+u*h*p,this._y=u*h*f-d*c*p,this._z=u*c*p-d*h*f,this._w=u*c*f+d*h*p;break;case"ZXY":this._x=d*c*f-u*h*p,this._y=u*h*f+d*c*p,this._z=u*c*p+d*h*f,this._w=u*c*f-d*h*p;break;case"ZYX":this._x=d*c*f-u*h*p,this._y=u*h*f+d*c*p,this._z=u*c*p-d*h*f,this._w=u*c*f+d*h*p;break;case"YZX":this._x=d*c*f+u*h*p,this._y=u*h*f+d*c*p,this._z=u*c*p-d*h*f,this._w=u*c*f-d*h*p;break;case"XZY":this._x=d*c*f-u*h*p,this._y=u*h*f-d*c*p,this._z=u*c*p+d*h*f,this._w=u*c*f+d*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new z,wm=new Ja;class $e{constructor(e,t,i,r,s,o,a,l,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],p=i[8],g=r[0],_=r[3],m=r[6],y=r[1],x=r[4],v=r[7],b=r[2],w=r[5],A=r[8];return s[0]=o*g+a*y+l*b,s[3]=o*_+a*x+l*w,s[6]=o*m+a*v+l*A,s[1]=u*g+c*y+f*b,s[4]=u*_+c*x+f*w,s[7]=u*m+c*v+f*A,s[2]=d*g+h*y+p*b,s[5]=d*_+h*x+p*w,s[8]=d*m+h*v+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,h=u*s-o*l,p=t*f+i*d+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=h*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new $e;function lv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ac(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function D1(){const n=Ac("canvas");return n.style.display="block",n}const Am={};function lo(n){n in Am||(Am[n]=!0,console.warn(n))}function I1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function U1(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function N1(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Cm=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rm=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O1(){const n={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=co(r.r),r.g=co(r.g),r.b=co(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?Tc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xo]:{primaries:e,whitePoint:i,transfer:Tc,toXYZ:Cm,fromXYZ:Rm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Cm,fromXYZ:Rm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),n}const st=O1();function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ls;class F1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=Ac("canvas")),Ls.width=e.width,Ls.height=e.height;const r=Ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ac("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B1=0;class Bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ru(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?F1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k1=0;const Pu=new z;class un extends Po{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=os,r=os,s=Li,o=as,a=xi,l=Ni,u=un.DEFAULT_ANISOTROPY,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Es(),this.name="",this.source=new Bd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pu).x}get height(){return this.source.getSize(Pu).y}get depth(){return this.source.getSize(Pu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Z0;un.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],p=l[9],g=l[2],_=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-g)<.01&&Math.abs(p-_)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+g)<.1&&Math.abs(p+_)<.1&&Math.abs(u+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,v=(h+1)/2,b=(m+1)/2,w=(c+d)/4,A=(f+g)/4,R=(p+_)/4;return x>v&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=A/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=R/s),this.set(i,r,s,t),this}let y=Math.sqrt((_-p)*(_-p)+(f-g)*(f-g)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(_-p)/y,this.y=(f-g)/y,this.z=(d-c)/y,this.w=Math.acos((u+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z1 extends Po{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new un(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends z1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cv extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H1 extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vl.copy(i.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),xl.subVectors(this.max,Vo),Ds.subVectors(e.a,Vo),Is.subVectors(e.b,Vo),Us.subVectors(e.c,Vo),ur.subVectors(Is,Ds),fr.subVectors(Us,Is),Vr.subVectors(Ds,Us);let t=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Vr.z,Vr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Vr.z,0,-Vr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Vr.y,Vr.x,0];return!Lu(t,Ds,Is,Us,xl)||(t=[1,0,0,0,1,0,0,0,1],!Lu(t,Ds,Is,Us,xl))?!1:(yl.crossVectors(ur,fr),t=[yl.x,yl.y,yl.z],Lu(t,Ds,Is,Us,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new z,new z,new z,new z,new z,new z,new z,new z],pi=new z,vl=new Ts,Ds=new z,Is=new z,Us=new z,ur=new z,fr=new z,Vr=new z,Vo=new z,xl=new z,yl=new z,Gr=new z;function Lu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gr.fromArray(n,s);const a=r.x*Math.abs(Gr.x)+r.y*Math.abs(Gr.y)+r.z*Math.abs(Gr.z),l=e.dot(Gr),u=t.dot(Gr),c=i.dot(Gr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const V1=new Ts,Go=new z,Du=new z;class Lo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):V1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Du)),this.expandByPoint(Go.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vi=new z,Iu=new z,Ml=new z,hr=new z,Uu=new z,Sl=new z,Nu=new z;class kd{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Iu.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(Iu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ml),a=hr.dot(this.direction),l=-hr.dot(Ml),u=hr.lengthSq(),c=Math.abs(1-o*o);let f,d,h,p;if(c>0)if(f=o*l-a,d=o*a-l,p=s*c,f>=0)if(d>=-p)if(d<=p){const g=1/c;f*=g,d*=g,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d<=-p?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=p?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Iu).addScaledVector(Ml,d),h}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,r,s){Uu.subVectors(t,e),Sl.subVectors(i,e),Nu.crossVectors(Uu,Sl);let o=this.direction.dot(Nu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Sl.crossVectors(hr,Sl));if(l<0)return null;const u=a*this.direction.dot(Uu.cross(hr));if(u<0||l+u>o)return null;const c=-a*hr.dot(Nu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,l,u,c,f,d,h,p,g,_){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,h,p,g,_)}set(e,t,i,r,s,o,a,l,u,c,f,d,h,p,g,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=h,m[7]=p,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,h=o*f,p=a*c,g=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=h+p*u,t[5]=d-g*u,t[9]=-a*l,t[2]=g-d*u,t[6]=p+h*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,p=u*c,g=u*f;t[0]=d+g*a,t[4]=p*a-h,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=h*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,p=u*c,g=u*f;t[0]=d-g*a,t[4]=-o*f,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*c,t[9]=g-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,h=o*f,p=a*c,g=a*f;t[0]=l*c,t[4]=p*u-h,t[8]=d*u+g,t[1]=l*f,t[5]=g*u+d,t[9]=h*u-p,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*u,p=a*l,g=a*u;t[0]=l*c,t[4]=g-d*f,t[8]=p*f+h,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=h*f+p,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,h=o*u,p=a*l,g=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+g,t[5]=o*c,t[9]=h*f-p,t[2]=p*f-h,t[6]=a*c,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G1,e,W1)}lookAt(e,t,i){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),dr.crossVectors(i,On),dr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),dr.crossVectors(i,On)),dr.normalize(),bl.crossVectors(On,dr),r[0]=dr.x,r[4]=bl.x,r[8]=On.x,r[1]=dr.y,r[5]=bl.y,r[9]=On.y,r[2]=dr.z,r[6]=bl.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],p=i[2],g=i[6],_=i[10],m=i[14],y=i[3],x=i[7],v=i[11],b=i[15],w=r[0],A=r[4],R=r[8],M=r[12],S=r[1],D=r[5],L=r[9],N=r[13],F=r[2],W=r[6],O=r[10],j=r[14],H=r[3],$=r[7],U=r[11],de=r[15];return s[0]=o*w+a*S+l*F+u*H,s[4]=o*A+a*D+l*W+u*$,s[8]=o*R+a*L+l*O+u*U,s[12]=o*M+a*N+l*j+u*de,s[1]=c*w+f*S+d*F+h*H,s[5]=c*A+f*D+d*W+h*$,s[9]=c*R+f*L+d*O+h*U,s[13]=c*M+f*N+d*j+h*de,s[2]=p*w+g*S+_*F+m*H,s[6]=p*A+g*D+_*W+m*$,s[10]=p*R+g*L+_*O+m*U,s[14]=p*M+g*N+_*j+m*de,s[3]=y*w+x*S+v*F+b*H,s[7]=y*A+x*D+v*W+b*$,s[11]=y*R+x*L+v*O+b*U,s[15]=y*M+x*N+v*j+b*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],p=e[3],g=e[7],_=e[11],m=e[15];return p*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*h-i*l*h)+g*(+t*l*h-t*u*d+s*o*d-r*o*h+r*u*c-s*l*c)+_*(+t*u*f-t*a*h-s*o*f+i*o*h+s*a*c-i*u*c)+m*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],p=e[12],g=e[13],_=e[14],m=e[15],y=f*_*u-g*d*u+g*l*h-a*_*h-f*l*m+a*d*m,x=p*d*u-c*_*u-p*l*h+o*_*h+c*l*m-o*d*m,v=c*g*u-p*f*u+p*a*h-o*g*h-c*a*m+o*f*m,b=p*f*l-c*g*l-p*a*d+o*g*d+c*a*_-o*f*_,w=t*y+i*x+r*v+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(g*d*s-f*_*s-g*r*h+i*_*h+f*r*m-i*d*m)*A,e[2]=(a*_*s-g*l*s+g*r*u-i*_*u-a*r*m+i*l*m)*A,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*h-i*l*h)*A,e[4]=x*A,e[5]=(c*_*s-p*d*s+p*r*h-t*_*h-c*r*m+t*d*m)*A,e[6]=(p*l*s-o*_*s-p*r*u+t*_*u+o*r*m-t*l*m)*A,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*h+t*l*h)*A,e[8]=v*A,e[9]=(p*f*s-c*g*s-p*i*h+t*g*h+c*i*m-t*f*m)*A,e[10]=(o*g*s-p*a*s+p*i*u-t*g*u-o*i*m+t*a*m)*A,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*h-t*a*h)*A,e[12]=b*A,e[13]=(c*g*r-p*f*r+p*i*d-t*g*d-c*i*_+t*f*_)*A,e[14]=(p*a*r-o*g*r-p*i*l+t*g*l+o*i*_-t*a*_)*A,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,h=s*c,p=s*f,g=o*c,_=o*f,m=a*f,y=l*u,x=l*c,v=l*f,b=i.x,w=i.y,A=i.z;return r[0]=(1-(g+m))*b,r[1]=(h+v)*b,r[2]=(p-x)*b,r[3]=0,r[4]=(h-v)*w,r[5]=(1-(d+m))*w,r[6]=(_+y)*w,r[7]=0,r[8]=(p+x)*A,r[9]=(_-y)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ns.set(r[0],r[1],r[2]).length();const o=Ns.set(r[4],r[5],r[6]).length(),a=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mi.copy(this);const u=1/s,c=1/o,f=1/a;return mi.elements[0]*=u,mi.elements[1]*=u,mi.elements[2]*=u,mi.elements[4]*=c,mi.elements[5]*=c,mi.elements[6]*=c,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,t.setFromRotationMatrix(mi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Qi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,p;if(a===Qi)h=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===wc)h=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Qi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,h=(i+r)*c;let p,g;if(a===Qi)p=(o+s)*f,g=-2*f;else if(a===wc)p=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ns=new z,mi=new pt,G1=new z(0,0,0),W1=new z(1,1,1),dr=new z,bl=new z,On=new z,Pm=new pt,Lm=new Ja;class Oi{constructor(e=0,t=0,i=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X1=0;const Dm=new z,Os=new Ja,Gi=new pt,El=new z,Wo=new z,q1=new z,j1=new Ja,Im=new z(1,0,0),Um=new z(0,1,0),Nm=new z(0,0,1),Om={type:"added"},$1={type:"removed"},Fs={type:"childadded",child:null},Ou={type:"childremoved",child:null};class Mt extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new z,t=new Oi,i=new Ja,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new $e}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,t){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?El.copy(e):El.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Wo,El,this.up):Gi.lookAt(El,Wo,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(Gi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($1),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,q1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,j1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new z(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new z,Wi=new z,Fu=new z,Xi=new z,Bs=new z,ks=new z,Fm=new z,Bu=new z,ku=new z,zu=new z,Hu=new Nt,Vu=new Nt,Gu=new Nt;class vi{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gi.subVectors(e,t),r.cross(gi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gi.subVectors(r,t),Wi.subVectors(i,t),Fu.subVectors(e,t);const o=gi.dot(gi),a=gi.dot(Wi),l=gi.dot(Fu),u=Wi.dot(Wi),c=Wi.dot(Fu),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-a*c)*d,p=(o*c-a*l)*d;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Hu.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),Hu.fromBufferAttribute(e,t),Vu.fromBufferAttribute(e,i),Gu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hu,s.x),o.addScaledVector(Vu,s.y),o.addScaledVector(Gu,s.z),o}static isFrontFacing(e,t,i,r){return gi.subVectors(i,t),Wi.subVectors(e,t),gi.cross(Wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),gi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Bs.subVectors(r,i),ks.subVectors(s,i),Bu.subVectors(e,i);const l=Bs.dot(Bu),u=ks.dot(Bu);if(l<=0&&u<=0)return t.copy(i);ku.subVectors(e,r);const c=Bs.dot(ku),f=ks.dot(ku);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Bs,o);zu.subVectors(e,s);const h=Bs.dot(zu),p=ks.dot(zu);if(p>=0&&h<=p)return t.copy(s);const g=h*u-l*p;if(g<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(i).addScaledVector(ks,a);const _=c*p-h*f;if(_<=0&&f-c>=0&&h-p>=0)return Fm.subVectors(s,r),a=(f-c)/(f-c+(h-p)),t.copy(r).addScaledVector(Fm,a);const m=1/(_+g+d);return o=g*m,a=d*m,t.copy(i).addScaledVector(Bs,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Wu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=Fd(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wu(o,s,e+1/3),this.g=Wu(o,s,e),this.b=Wu(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const i=uv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return st.workingToColorSpace(on.copy(this),e),Math.round(Je(on.r*255,0,255))*65536+Math.round(Je(on.g*255,0,255))*256+Math.round(Je(on.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(on.copy(this),t);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=si){st.workingToColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(Tl);const i=ca(pr.h,Tl.h,t),r=ca(pr.s,Tl.s,t),s=ca(pr.l,Tl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new je;je.NAMES=uv;let Y1=0;class Do extends Po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=ao,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xf,this.blendDst=qf,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hd extends Do{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new z,wl=new Ie;let K1=0;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bm,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$s(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$s(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$s(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bm&&(e.usage=this.usage),e}}class fv extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hv extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let J1=0;const ei=new pt,Xu=new Mt,zs=new z,Fn=new Ts,Xo=new Ts,Kt=new z;class qt extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?hv:fv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Fn.min,Xo.min),Fn.expandByPoint(Kt),Kt.addVectors(Fn.max,Xo.max),Fn.expandByPoint(Kt)):(Fn.expandByPoint(Xo.min),Fn.expandByPoint(Xo.max))}Fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Kt.fromBufferAttribute(a,u),l&&(zs.fromBufferAttribute(e,u),Kt.add(zs)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new z,l[R]=new z;const u=new z,c=new z,f=new z,d=new Ie,h=new Ie,p=new Ie,g=new z,_=new z;function m(R,M,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,S),c.sub(u),f.sub(u),h.sub(d),p.sub(d);const D=1/(h.x*p.y-p.x*h.y);isFinite(D)&&(g.copy(c).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(D),_.copy(f).multiplyScalar(h.x).addScaledVector(c,-p.x).multiplyScalar(D),a[R].add(g),a[M].add(g),a[S].add(g),l[R].add(_),l[M].add(_),l[S].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,M=y.length;R<M;++R){const S=y[R],D=S.start,L=S.count;for(let N=D,F=D+L;N<F;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new z,v=new z,b=new z,w=new z;function A(R){b.fromBufferAttribute(r,R),w.copy(b);const M=a[R];x.copy(M),x.sub(b.multiplyScalar(b.dot(M))).normalize(),v.crossVectors(w,M);const D=v.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,M=y.length;R<M;++R){const S=y[R],D=S.start,L=S.count;for(let N=D,F=D+L;N<F;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const p=e.getX(d+0),g=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let h=0,p=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*c;for(let m=0;m<c;m++)d[p++]=u[h++]}return new Sn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new pt,Wr=new kd,Al=new Lo,km=new z,Cl=new z,Rl=new z,Pl=new z,qu=new z,Ll=new z,zm=new z,Dl=new z;class Wt extends Mt{constructor(e=new qt,t=new Hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ll.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(qu.fromBufferAttribute(f,e),o?Ll.addScaledVector(qu,c):Ll.addScaledVector(qu.sub(t),c))}t.add(Ll)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(Al.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Al,km)===null||Wr.origin.distanceToSquared(km)>(e.far-e.near)**2))&&(Bm.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const _=d[p],m=o[_.materialIndex],y=Math.max(_.start,h.start),x=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let v=y,b=x;v<b;v+=3){const w=a.getX(v),A=a.getX(v+1),R=a.getX(v+2);r=Il(this,m,e,i,u,c,f,w,A,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const y=a.getX(_),x=a.getX(_+1),v=a.getX(_+2);r=Il(this,o,e,i,u,c,f,y,x,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const _=d[p],m=o[_.materialIndex],y=Math.max(_.start,h.start),x=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let v=y,b=x;v<b;v+=3){const w=v,A=v+1,R=v+2;r=Il(this,m,e,i,u,c,f,w,A,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const y=_,x=_+1,v=_+2;r=Il(this,o,e,i,u,c,f,y,x,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Z1(n,e,t,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pr,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Dl);return u<t.near||u>t.far?null:{distance:u,point:Dl.clone(),object:n}}function Il(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Cl),n.getVertexPosition(l,Rl),n.getVertexPosition(u,Pl);const c=Z1(n,e,t,i,Cl,Rl,Pl,zm);if(c){const f=new z;vi.getBarycoord(zm,Cl,Rl,Pl,f),r&&(c.uv=vi.getInterpolatedAttribute(r,a,l,u,f,new Ie)),s&&(c.uv1=vi.getInterpolatedAttribute(s,a,l,u,f,new Ie)),o&&(c.normal=vi.getInterpolatedAttribute(o,a,l,u,f,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new z,materialIndex:0};vi.getNormal(Cl,Rl,Pl,d.normal),c.face=d,c.barycoord=f}return c}class Za extends qt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(f,2));function p(g,_,m,y,x,v,b,w,A,R,M){const S=v/A,D=b/R,L=v/2,N=b/2,F=w/2,W=A+1,O=R+1;let j=0,H=0;const $=new z;for(let U=0;U<O;U++){const de=U*D-N;for(let Me=0;Me<W;Me++){const ae=Me*S-L;$[g]=ae*y,$[_]=de*x,$[m]=F,u.push($.x,$.y,$.z),$[g]=0,$[_]=0,$[m]=w>0?1:-1,c.push($.x,$.y,$.z),f.push(Me/A),f.push(1-U/R),j+=1}}for(let U=0;U<R;U++)for(let de=0;de<A;de++){const Me=d+de+W*U,ae=d+de+W*(U+1),K=d+(de+1)+W*(U+1),fe=d+(de+1)+W*U;l.push(Me,ae,fe),l.push(ae,K,fe),H+=6}a.addGroup(h,H,M),h+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=yo(n[t]);for(const r in i)e[r]=i[r]}return e}function Q1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const ew={clone:yo,merge:_n};var tw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Do{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tw,this.fragmentShader=nw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pv extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new z,Hm=new Ie,Vm=new Ie;class oi extends pv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,Hm,Vm),t.subVectors(Vm,Hm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Vs=1;class iw extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(Hs,Vs,e,t);r.layers=this.layers,this.add(r);const s=new oi(Hs,Vs,e,t);s.layers=this.layers,this.add(s);const o=new oi(Hs,Vs,e,t);o.layers=this.layers,this.add(o);const a=new oi(Hs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new oi(Hs,Vs,e,t);l.layers=this.layers,this.add(l);const u=new oi(Hs,Vs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class mv extends un{constructor(e=[],t=_o,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rw extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Za(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:br});s.uniforms.tEquirect.value=t;const o=new Wt(r,s),a=t.minFilter;return t.minFilter===as&&(t.minFilter=Li),new iw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Jo extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sw={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,i),m=this._getHandJoint(u,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,p=.005;u.inputState.pinching&&d>h+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Vd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Vd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ow extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class aw extends un{constructor(e=null,t=1,i=1,r,s,o,a,l,u=qn,c=qn,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gm extends Sn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new pt,Wm=new pt,Ul=[],Xm=new Ts,lw=new pt,qo=new Wt,jo=new Lo;class wn extends Wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,lw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Xm.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Xm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),jo.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(qo.geometry=this.geometry,qo.material=this.material,qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(i),e.ray.intersectsSphere(jo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gs),Wm.multiplyMatrices(i,Gs),qo.matrixWorld=Wm,qo.raycast(e,Ul);for(let o=0,a=Ul.length;o<a;o++){const l=Ul[o];l.instanceId=s,l.object=this,t.push(l)}Ul.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new aw(new Float32Array(r*this.count),r,this.count,Dd,Di));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $u=new z,cw=new z,uw=new $e;class Zr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$u.subVectors(i,t).cross(cw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uw.getNormalMatrix(e),r=this.coplanarPoint($u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Lo,Nl=new z;class Gd{constructor(e=new Zr,t=new Zr,i=new Zr,r=new Zr,s=new Zr,o=new Zr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],h=r[8],p=r[9],g=r[10],_=r[11],m=r[12],y=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-s,d-u,_-h,v-m).normalize(),i[1].setComponents(l+s,d+u,_+h,v+m).normalize(),i[2].setComponents(l+o,d+c,_+p,v+y).normalize(),i[3].setComponents(l-o,d-c,_-p,v-y).normalize(),i[4].setComponents(l-a,d-f,_-g,v-x).normalize(),t===Qi)i[5].setComponents(l+a,d+f,_+g,v+x).normalize();else if(t===wc)i[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Nl.x=r.normal.x>0?e.max.x:e.min.x,Nl.y=r.normal.y>0?e.max.y:e.min.y,Nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gv extends Do{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qm=new pt,Ph=new kd,Ol=new Lo,Fl=new z;class _v extends Mt{constructor(e=new qt,t=new gv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(r),Ol.radius+=s,e.ray.intersectsSphere(Ol)===!1)return;qm.copy(r).invert(),Ph.copy(e.ray).applyMatrix4(qm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let p=d,g=h;p<g;p++){const _=u.getX(p);Fl.fromBufferAttribute(f,_),jm(Fl,_,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let p=d,g=h;p<g;p++)Fl.fromBufferAttribute(f,p),jm(Fl,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jm(n,e,t,i,r,s,o){const a=Ph.distanceSqToPoint(n);if(a<t){const l=new z;Ph.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fw extends un{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vv extends un{constructor(e,t,i=xs,r,s,o,a=qn,l=qn,u,c=Ca,f=1){if(c!==Ca&&c!==Ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wd extends qt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new z,c=new Ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const h=i+f/t*r;u.x=e*Math.cos(h),u.y=e*Math.sin(h),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[d]/e+1)/2,c.y=(o[d+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mo extends qt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],h=[];let p=0;const g=[],_=i/2;let m=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(h,2));function y(){const v=new z,b=new z;let w=0;const A=(t-e)/i;for(let R=0;R<=s;R++){const M=[],S=R/s,D=S*(t-e)+e;for(let L=0;L<=r;L++){const N=L/r,F=N*l+a,W=Math.sin(F),O=Math.cos(F);b.x=D*W,b.y=-S*i+_,b.z=D*O,f.push(b.x,b.y,b.z),v.set(W,A,O).normalize(),d.push(v.x,v.y,v.z),h.push(N,1-S),M.push(p++)}g.push(M)}for(let R=0;R<r;R++)for(let M=0;M<s;M++){const S=g[M][R],D=g[M+1][R],L=g[M+1][R+1],N=g[M][R+1];(e>0||M!==0)&&(c.push(S,D,N),w+=3),(t>0||M!==s-1)&&(c.push(D,L,N),w+=3)}u.addGroup(m,w,0),m+=w}function x(v){const b=p,w=new Ie,A=new z;let R=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,_*S,0),d.push(0,S,0),h.push(.5,.5),p++;const D=p;for(let L=0;L<=r;L++){const F=L/r*l+a,W=Math.cos(F),O=Math.sin(F);A.x=M*O,A.y=_*S,A.z=M*W,f.push(A.x,A.y,A.z),d.push(0,S,0),w.x=W*.5+.5,w.y=O*.5*S+.5,h.push(w.x,w.y),p++}for(let L=0;L<r;L++){const N=b+L,F=D+L;v===!0?c.push(F,F+1,N):c.push(F+1,F,N),R+=3}u.addGroup(m,R,v===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xd extends Mo{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qd extends qt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new z,v=new z,b=new z;for(let w=0;w<t.length;w+=3)h(t[w+0],x),h(t[w+1],v),h(t[w+2],b),l(x,v,b,y)}function l(y,x,v,b){const w=b+1,A=[];for(let R=0;R<=w;R++){A[R]=[];const M=y.clone().lerp(v,R/w),S=x.clone().lerp(v,R/w),D=w-R;for(let L=0;L<=D;L++)L===0&&R===w?A[R][L]=M:A[R][L]=M.clone().lerp(S,L/D)}for(let R=0;R<w;R++)for(let M=0;M<2*(w-R)-1;M++){const S=Math.floor(M/2);M%2===0?(d(A[R][S+1]),d(A[R+1][S]),d(A[R][S])):(d(A[R][S+1]),d(A[R+1][S+1]),d(A[R+1][S]))}}function u(y){const x=new z;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function c(){const y=new z;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=_(y)/2/Math.PI+.5,b=m(y)/Math.PI+.5;o.push(v,1-b)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],b=o[y+4],w=Math.max(x,v,b),A=Math.min(x,v,b);w>.9&&A<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function p(){const y=new z,x=new z,v=new z,b=new z,w=new Ie,A=new Ie,R=new Ie;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),b.copy(y).add(x).add(v).divideScalar(3);const D=_(b);g(w,S+0,y,D),g(A,S+2,x,D),g(R,S+4,v,D)}}function g(y,x,v,b){b<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=b/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.vertices,e.indices,e.radius,e.details)}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,h=(o-c)/d;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ie:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,r=[],s=[],o=[],a=new z,l=new pt;for(let h=0;h<=e;h++){const p=h/e;r[h]=this.getTangentAt(p,new z)}s[0]=new z,o[0]=new z;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Je(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Je(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jd extends Bi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ie){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=u-this.aY;l=d*c-h*f+this.aX,u=d*f+h*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hw extends jd{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $d(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,h=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,h*=c,r(o,a,d,h)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Bl=new z,Yu=new $d,Ku=new $d,Ju=new $d;class dw extends Bi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new z){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Bl.subVectors(r[0],r[1]).add(r[0]),u=Bl);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Bl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let p=Math.pow(u.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(c),h);g<1e-4&&(g=1),p<1e-4&&(p=g),_<1e-4&&(_=g),Yu.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,p,g,_),Ku.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,p,g,_),Ju.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,p,g,_)}else this.curveType==="catmullrom"&&(Yu.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),Ku.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),Ju.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return i.set(Yu.calc(l),Ku.calc(l),Ju.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $m(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function pw(n,e){const t=1-n;return t*t*e}function mw(n,e){return 2*(1-n)*n*e}function gw(n,e){return n*n*e}function ua(n,e,t,i){return pw(n,e)+mw(n,t)+gw(n,i)}function _w(n,e){const t=1-n;return t*t*t*e}function vw(n,e){const t=1-n;return 3*t*t*n*e}function xw(n,e){return 3*(1-n)*n*n*e}function yw(n,e){return n*n*n*e}function fa(n,e,t,i,r){return _w(n,e)+vw(n,t)+xw(n,i)+yw(n,r)}class xv extends Bi{constructor(e=new Ie,t=new Ie,i=new Ie,r=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ie){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fa(e,r.x,s.x,o.x,a.x),fa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mw extends Bi{constructor(e=new z,t=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fa(e,r.x,s.x,o.x,a.x),fa(e,r.y,s.y,o.y,a.y),fa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yv extends Bi{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sw extends Bi{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mv extends Bi{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ua(e,r.x,s.x,o.x),ua(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bw extends Bi{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ua(e,r.x,s.x,o.x),ua(e,r.y,s.y,o.y),ua(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sv extends Bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set($m(a,l.x,u.x,c.x,f.x),$m(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ie().fromArray(r))}return this}}var Ym=Object.freeze({__proto__:null,ArcCurve:hw,CatmullRomCurve3:dw,CubicBezierCurve:xv,CubicBezierCurve3:Mw,EllipseCurve:jd,LineCurve:yv,LineCurve3:Sw,QuadraticBezierCurve:Mv,QuadraticBezierCurve3:bw,SplineCurve:Sv});class Ew extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ym[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Ym[r.type]().fromJSON(r))}return this}}class Km extends Ew{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new yv(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Mv(this.currentPoint.clone(),new Ie(e,t),new Ie(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new xv(this.currentPoint.clone(),new Ie(e,t),new Ie(i,r),new Ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Sv(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new jd(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class bv extends Km{constructor(e){super(e),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Km().fromJSON(r))}return this}}function Tw(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Ev(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=Pw(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let c=-1/0,f=-1/0;for(let d=t;d<r;d+=t){const h=n[d],p=n[d+1];h<a&&(a=h),p<l&&(l=p),h>c&&(c=h),p>f&&(f=p)}u=Math.max(c-a,f-l),u=u!==0?32767/u:0}return La(s,o,t,a,l,u,0),o}function Ev(n,e,t,i,r){let s;if(r===Hw(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Jm(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Jm(o/i|0,n[o],n[o+1],s);return s&&So(s,s.next)&&(Ia(s),s=s.next),s}function Ms(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(So(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Ia(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function La(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Nw(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,u=n.next;if(s?Aw(n,i,r,s):ww(n)){e.push(l.i,n.i,u.i),Ia(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=Cw(Ms(n),e),La(n,e,t,i,r,s,2)):o===2&&Rw(n,e,t,i,r,s):La(Ms(n),e,t,i,r,s,1);break}}}function ww(n){const e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=Math.min(r,s,o),f=Math.min(a,l,u),d=Math.max(r,s,o),h=Math.max(a,l,u);let p=i.next;for(;p!==e;){if(p.x>=c&&p.x<=d&&p.y>=f&&p.y<=h&&Zo(r,a,s,l,o,u,p.x,p.y)&&Rt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Aw(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Rt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,d=o.y,h=Math.min(a,l,u),p=Math.min(c,f,d),g=Math.max(a,l,u),_=Math.max(c,f,d),m=Lh(h,p,e,t,i),y=Lh(g,_,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=m&&v&&v.z<=y;){if(x.x>=h&&x.x<=g&&x.y>=p&&x.y<=_&&x!==r&&x!==o&&Zo(a,c,l,f,u,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=h&&v.x<=g&&v.y>=p&&v.y<=_&&v!==r&&v!==o&&Zo(a,c,l,f,u,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=h&&x.x<=g&&x.y>=p&&x.y<=_&&x!==r&&x!==o&&Zo(a,c,l,f,u,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=h&&v.x<=g&&v.y>=p&&v.y<=_&&v!==r&&v!==o&&Zo(a,c,l,f,u,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Cw(n,e){let t=n;do{const i=t.prev,r=t.next.next;!So(i,r)&&wv(i,t,t.next,r)&&Da(i,r)&&Da(r,i)&&(e.push(i.i,t.i,r.i),Ia(t),Ia(t.next),t=n=r),t=t.next}while(t!==n);return Ms(t)}function Rw(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bw(o,a)){let l=Av(o,a);o=Ms(o,o.next),l=Ms(l,l.next),La(o,e,t,i,r,s,0),La(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Pw(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=Ev(n,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(Fw(u))}r.sort(Lw);for(let s=0;s<r.length;s++)t=Dw(r[s],t);return t}function Lw(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Dw(n,e){const t=Iw(n,e);if(!t)return e;const i=Av(t,n);return Ms(i,i.next),Ms(t,t.next)}function Iw(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(So(n,t))return t;do{if(So(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let c=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Tv(r<u?i:s,r,l,u,r<u?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Da(t,n)&&(f<c||f===c&&(t.x>o.x||t.x===o.x&&Uw(o,t)))&&(o=t,c=f)}t=t.next}while(t!==a);return o}function Uw(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function Nw(n,e,t,i){let r=n;do r.z===0&&(r.z=Lh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ow(r)}function Ow(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Lh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Fw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Tv(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Zo(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Tv(n,e,t,i,r,s,o,a)}function Bw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!kw(n,e)&&(Da(n,e)&&Da(e,n)&&zw(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||So(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function So(n,e){return n.x===e.x&&n.y===e.y}function wv(n,e,t,i){const r=zl(Rt(n,e,t)),s=zl(Rt(n,e,i)),o=zl(Rt(t,i,n)),a=zl(Rt(t,i,e));return!!(r!==s&&o!==a||r===0&&kl(n,t,e)||s===0&&kl(n,i,e)||o===0&&kl(t,n,i)||a===0&&kl(t,e,i))}function kl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function zl(n){return n>0?1:n<0?-1:0}function kw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&wv(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Da(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function zw(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Av(n,e){const t=Dh(n.i,n.x,n.y),i=Dh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Jm(n,e,t,i){const r=Dh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ia(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Dh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hw(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Vw{static triangulate(e,t,i=2){return Tw(e,t,i)}}class ha{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ha.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Zm(e),Qm(i,e);let o=e.length;t.forEach(Zm);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Qm(i,t[l]);const a=Vw.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Zm(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Qm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Qa extends qd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qa(e.radius,e.detail)}}class Tr extends qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,h=[],p=[],g=[],_=[];for(let m=0;m<c;m++){const y=m*d-o;for(let x=0;x<u;x++){const v=x*f-s;p.push(v,-y,0),g.push(0,0,1),_.push(x/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+u*m,v=y+u*(m+1),b=y+1+u*(m+1),w=y+1+u*m;h.push(x,v,w),h.push(v,b,w)}this.setIndex(h),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(g,3)),this.setAttribute("uv",new xt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yd extends qt{constructor(e=new bv([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(s,3)),this.setAttribute("uv",new xt(o,2));function u(c){const f=r.length/3,d=c.extractPoints(t);let h=d.shape;const p=d.holes;ha.isClockWise(h)===!1&&(h=h.reverse());for(let _=0,m=p.length;_<m;_++){const y=p[_];ha.isClockWise(y)===!0&&(p[_]=y.reverse())}const g=ha.triangulateShape(h,p);for(let _=0,m=p.length;_<m;_++){const y=p[_];h=h.concat(y)}for(let _=0,m=h.length;_<m;_++){const y=h[_];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let _=0,m=g.length;_<m;_++){const y=g[_],x=y[0]+f,v=y[1]+f,b=y[2]+f;i.push(x,v,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Gw(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Yd(i,e.curveSegments)}}function Gw(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class el extends qt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new z,d=new z,h=[],p=[],g=[],_=[];for(let m=0;m<=i;m++){const y=[],x=m/i;let v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const w=b/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),p.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),_.push(w+v,1-x),y.push(u++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const x=c[m][y+1],v=c[m][y],b=c[m+1][y],w=c[m+1][y+1];(m!==0||o>0)&&h.push(x,v,w),(m!==i-1||l<Math.PI)&&h.push(v,b,w)}this.setIndex(h),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(g,3)),this.setAttribute("uv",new xt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zn extends Do{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ww extends Do{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xw extends Do{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cv extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qw extends Cv{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zu=new pt,eg=new z,tg=new z;class jw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tg),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rv extends pv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $w extends jw{constructor(){super(new Rv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yw extends Cv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new $w}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kw extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ng=new pt;class Jw{constructor(e,t,i=0,r=1/0){this.ray=new kd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ng),this}intersectObject(e,t=!0,i=[]){return Ih(e,this,i,t),i.sort(ig),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ih(e[r],this,i,t);return i.sort(ig),i}}function ig(n,e){return n.distance-e.distance}function Ih(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ih(s[o],e,t,!0)}}function rg(n,e,t,i){const r=Zw(i);switch(t){case nv:return n*e;case Dd:return n*e/r.components*r.byteLength;case Id:return n*e/r.components*r.byteLength;case rv:return n*e*2/r.components*r.byteLength;case Ud:return n*e*2/r.components*r.byteLength;case iv:return n*e*3/r.components*r.byteLength;case xi:return n*e*4/r.components*r.byteLength;case Nd:return n*e*4/r.components*r.byteLength;case Kl:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(n,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(n,8)*Math.max(e,8)/2;case lh:case ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ec:case Th:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sv:case Ah:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ch:case Rh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zw(n){switch(n){case Ni:case Q0:return{byteLength:1,components:1};case wa:case ev:case Ka:return{byteLength:2,components:1};case Pd:case Ld:return{byteLength:2,components:4};case xs:case Rd:case Di:return{byteLength:4,components:1};case tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);function Pv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qw(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){const p=f[d],g=f[h];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,f[d]=g)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){const g=f[h];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var eA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tA=`#ifdef USE_ALPHAHASH
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
#endif`,nA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oA=`#ifdef USE_AOMAP
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
#endif`,aA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lA=`#ifdef USE_BATCHING
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
#endif`,cA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dA=`#ifdef USE_IRIDESCENCE
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
#endif`,pA=`#ifdef USE_BUMPMAP
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
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bA=`#define PI 3.141592653589793
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
} // validated`,EA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TA=`vec3 transformedNormal = objectNormal;
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
#endif`,wA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PA="gl_FragColor = linearToOutputTexel( gl_FragColor );",LA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DA=`#ifdef USE_ENVMAP
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
#endif`,IA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UA=`#ifdef USE_ENVMAP
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
#endif`,NA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OA=`#ifdef USE_ENVMAP
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
#endif`,FA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HA=`#ifdef USE_GRADIENTMAP
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
}`,VA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XA=`uniform bool receiveShadow;
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
#endif`,qA=`#ifdef USE_ENVMAP
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
#endif`,jA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JA=`PhysicalMaterial material;
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
#endif`,ZA=`struct PhysicalMaterial {
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
}`,QA=`
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
#endif`,eC=`#if defined( RE_IndirectDiffuse )
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
#endif`,tC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cC=`#if defined( USE_POINTS_UV )
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
#endif`,uC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mC=`#ifdef USE_MORPHTARGETS
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
#endif`,gC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_C=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SC=`#ifdef USE_NORMALMAP
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
#endif`,bC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BC=`float getShadowMask() {
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
}`,kC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zC=`#ifdef USE_SKINNING
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
#endif`,HC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VC=`#ifdef USE_SKINNING
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
#endif`,GC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jC=`#ifdef USE_TRANSMISSION
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
#endif`,$C=`#ifdef USE_TRANSMISSION
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
#endif`,YC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eR=`uniform sampler2D t2D;
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
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`#include <common>
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
}`,oR=`#if DEPTH_PACKING == 3200
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
}`,aR=`#define DISTANCE
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
}`,lR=`#define DISTANCE
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
}`,cR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`uniform float scale;
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
}`,hR=`uniform vec3 diffuse;
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
}`,dR=`#include <common>
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
}`,pR=`uniform vec3 diffuse;
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
}`,mR=`#define LAMBERT
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
}`,gR=`#define LAMBERT
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
}`,_R=`#define MATCAP
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
}`,vR=`#define MATCAP
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
}`,xR=`#define NORMAL
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
}`,yR=`#define NORMAL
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
}`,MR=`#define PHONG
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
}`,SR=`#define PHONG
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
}`,bR=`#define STANDARD
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
}`,ER=`#define STANDARD
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
}`,TR=`#define TOON
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
}`,wR=`#define TOON
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
}`,AR=`uniform float size;
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
}`,CR=`uniform vec3 diffuse;
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
}`,RR=`#include <common>
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
}`,PR=`uniform vec3 color;
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
}`,LR=`uniform float rotation;
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
}`,DR=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:eA,alphahash_pars_fragment:tA,alphamap_fragment:nA,alphamap_pars_fragment:iA,alphatest_fragment:rA,alphatest_pars_fragment:sA,aomap_fragment:oA,aomap_pars_fragment:aA,batching_pars_vertex:lA,batching_vertex:cA,begin_vertex:uA,beginnormal_vertex:fA,bsdfs:hA,iridescence_fragment:dA,bumpmap_pars_fragment:pA,clipping_planes_fragment:mA,clipping_planes_pars_fragment:gA,clipping_planes_pars_vertex:_A,clipping_planes_vertex:vA,color_fragment:xA,color_pars_fragment:yA,color_pars_vertex:MA,color_vertex:SA,common:bA,cube_uv_reflection_fragment:EA,defaultnormal_vertex:TA,displacementmap_pars_vertex:wA,displacementmap_vertex:AA,emissivemap_fragment:CA,emissivemap_pars_fragment:RA,colorspace_fragment:PA,colorspace_pars_fragment:LA,envmap_fragment:DA,envmap_common_pars_fragment:IA,envmap_pars_fragment:UA,envmap_pars_vertex:NA,envmap_physical_pars_fragment:qA,envmap_vertex:OA,fog_vertex:FA,fog_pars_vertex:BA,fog_fragment:kA,fog_pars_fragment:zA,gradientmap_pars_fragment:HA,lightmap_pars_fragment:VA,lights_lambert_fragment:GA,lights_lambert_pars_fragment:WA,lights_pars_begin:XA,lights_toon_fragment:jA,lights_toon_pars_fragment:$A,lights_phong_fragment:YA,lights_phong_pars_fragment:KA,lights_physical_fragment:JA,lights_physical_pars_fragment:ZA,lights_fragment_begin:QA,lights_fragment_maps:eC,lights_fragment_end:tC,logdepthbuf_fragment:nC,logdepthbuf_pars_fragment:iC,logdepthbuf_pars_vertex:rC,logdepthbuf_vertex:sC,map_fragment:oC,map_pars_fragment:aC,map_particle_fragment:lC,map_particle_pars_fragment:cC,metalnessmap_fragment:uC,metalnessmap_pars_fragment:fC,morphinstance_vertex:hC,morphcolor_vertex:dC,morphnormal_vertex:pC,morphtarget_pars_vertex:mC,morphtarget_vertex:gC,normal_fragment_begin:_C,normal_fragment_maps:vC,normal_pars_fragment:xC,normal_pars_vertex:yC,normal_vertex:MC,normalmap_pars_fragment:SC,clearcoat_normal_fragment_begin:bC,clearcoat_normal_fragment_maps:EC,clearcoat_pars_fragment:TC,iridescence_pars_fragment:wC,opaque_fragment:AC,packing:CC,premultiplied_alpha_fragment:RC,project_vertex:PC,dithering_fragment:LC,dithering_pars_fragment:DC,roughnessmap_fragment:IC,roughnessmap_pars_fragment:UC,shadowmap_pars_fragment:NC,shadowmap_pars_vertex:OC,shadowmap_vertex:FC,shadowmask_pars_fragment:BC,skinbase_vertex:kC,skinning_pars_vertex:zC,skinning_vertex:HC,skinnormal_vertex:VC,specularmap_fragment:GC,specularmap_pars_fragment:WC,tonemapping_fragment:XC,tonemapping_pars_fragment:qC,transmission_fragment:jC,transmission_pars_fragment:$C,uv_pars_fragment:YC,uv_pars_vertex:KC,uv_vertex:JC,worldpos_vertex:ZC,background_vert:QC,background_frag:eR,backgroundCube_vert:tR,backgroundCube_frag:nR,cube_vert:iR,cube_frag:rR,depth_vert:sR,depth_frag:oR,distanceRGBA_vert:aR,distanceRGBA_frag:lR,equirect_vert:cR,equirect_frag:uR,linedashed_vert:fR,linedashed_frag:hR,meshbasic_vert:dR,meshbasic_frag:pR,meshlambert_vert:mR,meshlambert_frag:gR,meshmatcap_vert:_R,meshmatcap_frag:vR,meshnormal_vert:xR,meshnormal_frag:yR,meshphong_vert:MR,meshphong_frag:SR,meshphysical_vert:bR,meshphysical_frag:ER,meshtoon_vert:TR,meshtoon_frag:wR,points_vert:AR,points_frag:CR,shadow_vert:RR,shadow_frag:PR,sprite_vert:LR,sprite_frag:DR},be={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},wi={basic:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:_n([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:_n([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:_n([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:_n([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:_n([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:_n([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:_n([be.common,be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:_n([be.lights,be.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};wi.physical={uniforms:_n([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Hl={r:0,b:0,g:0},qr=new Oi,IR=new pt;function UR(n,e,t,i,r,s,o){const a=new je(0);let l=s===!0?0:1,u,c,f=null,d=0,h=null;function p(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function g(x){let v=!1;const b=p(x);b===null?m(a,l):b&&b.isColor&&(m(b,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(x,v){const b=p(v);b&&(b.isCubeTexture||b.mapping===Qc)?(c===void 0&&(c=new Wt(new Za(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:yo(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),qr.copy(v.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(IR.makeRotationFromEuler(qr)),c.material.toneMapped=st.getTransfer(b.colorSpace)!==dt,(f!==b||d!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new Wt(new Tr(2,2),new En({name:"BackgroundMaterial",uniforms:yo(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=st.getTransfer(b.colorSpace)!==dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,h=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function m(x,v){x.getRGB(Hl,dv(n)),i.buffers.color.setClear(Hl.r,Hl.g,Hl.b,v,o)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:g,addToRenderList:_,dispose:y}}function NR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,D,L,N,F){let W=!1;const O=f(N,L,D);s!==O&&(s=O,u(s.object)),W=h(S,N,L,F),W&&p(S,N,L,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(S,D,L,N),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,D,L){const N=L.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let W=F[D.id];W===void 0&&(W={},F[D.id]=W);let O=W[N];return O===void 0&&(O=d(l()),W[N]=O),O}function d(S){const D=[],L=[],N=[];for(let F=0;F<t;F++)D[F]=0,L[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:N,object:S,attributes:{},index:null}}function h(S,D,L,N){const F=s.attributes,W=D.attributes;let O=0;const j=L.getAttributes();for(const H in j)if(j[H].location>=0){const U=F[H];let de=W[H];if(de===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),U===void 0||U.attribute!==de||de&&U.data!==de.data)return!0;O++}return s.attributesNum!==O||s.index!==N}function p(S,D,L,N){const F={},W=D.attributes;let O=0;const j=L.getAttributes();for(const H in j)if(j[H].location>=0){let U=W[H];U===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(U=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(U=S.instanceColor));const de={};de.attribute=U,U&&U.data&&(de.data=U.data),F[H]=de,O++}s.attributes=F,s.attributesNum=O,s.index=N}function g(){const S=s.newAttributes;for(let D=0,L=S.length;D<L;D++)S[D]=0}function _(S){m(S,0)}function m(S,D){const L=s.newAttributes,N=s.enabledAttributes,F=s.attributeDivisors;L[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),F[S]!==D&&(n.vertexAttribDivisor(S,D),F[S]=D)}function y(){const S=s.newAttributes,D=s.enabledAttributes;for(let L=0,N=D.length;L<N;L++)D[L]!==S[L]&&(n.disableVertexAttribArray(L),D[L]=0)}function x(S,D,L,N,F,W,O){O===!0?n.vertexAttribIPointer(S,D,L,F,W):n.vertexAttribPointer(S,D,L,N,F,W)}function v(S,D,L,N){g();const F=N.attributes,W=L.getAttributes(),O=D.defaultAttributeValues;for(const j in W){const H=W[j];if(H.location>=0){let $=F[j];if($===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const U=$.normalized,de=$.itemSize,Me=e.get($);if(Me===void 0)continue;const ae=Me.buffer,K=Me.type,fe=Me.bytesPerElement,Ee=K===n.INT||K===n.UNSIGNED_INT||$.gpuType===Rd;if($.isInterleavedBufferAttribute){const ye=$.data,Ne=ye.stride,Ke=$.offset;if(ye.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe,ye.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)_(H.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Oe=0;Oe<H.locationSize;Oe++)x(H.location+Oe,de/H.locationSize,K,U,Ne*fe,(Ke+de/H.locationSize*Oe)*fe,Ee)}else{if($.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)m(H.location+ye,$.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ye=0;ye<H.locationSize;ye++)_(H.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ye=0;ye<H.locationSize;ye++)x(H.location+ye,de/H.locationSize,K,U,de*fe,de/H.locationSize*ye*fe,Ee)}}else if(O!==void 0){const U=O[j];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(H.location,U);break;case 3:n.vertexAttrib3fv(H.location,U);break;case 4:n.vertexAttrib4fv(H.location,U);break;default:n.vertexAttrib1fv(H.location,U)}}}}y()}function b(){R();for(const S in i){const D=i[S];for(const L in D){const N=D[L];for(const F in N)c(N[F].object),delete N[F];delete D[L]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const L in D){const N=D[L];for(const F in N)c(N[F].object),delete N[F];delete D[L]}delete i[S.id]}function A(S){for(const D in i){const L=i[D];if(L[S.id]===void 0)continue;const N=L[S.id];for(const F in N)c(N[F].object),delete N[F];delete L[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:y}}function OR(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let p=0;p<f;p++)h+=c[p];t.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<u.length;p++)o(u[p],c[p],d[p]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g]*d[g];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function FR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==xi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ni&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:w}}function BR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Zr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,h){const p=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,m=n.get(f);if(!r||p===null||p.length===0||s&&!_)s?c(null):u();else{const y=s?0:i,x=y*4;let v=m.clippingState||null;l.value=v,v=c(p,d,x,h);for(let b=0;b!==x;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,p){const g=f!==null?f.length:0;let _=null;if(g!==0){if(_=l.value,p!==!0||_===null){const m=h+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let x=0,v=h;x!==g;++x,v+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function kR(n){let e=new WeakMap;function t(o,a){return a===eh?o.mapping=_o:a===th&&(o.mapping=vo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eh||a===th)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new rw(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Zs=4,sg=[.125,.215,.35,.446,.526,.582],rs=20,Qu=new Rv,og=new je;let ef=null,tf=0,nf=0,rf=!1;const Qr=(1+Math.sqrt(5))/2,Ws=1/Qr,ag=[new z(-Qr,Ws,0),new z(Qr,Ws,0),new z(-Ws,0,Qr),new z(Ws,0,Qr),new z(0,Qr,-Ws),new z(0,Qr,Ws),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],zR=new z;class lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=zR}=s;ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),this._renderer.xr.enabled=rf,e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ka,format:xi,colorSpace:xo,depthBuffer:!1},r=cg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HR(s)),this._blurMaterial=VR(s,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Qu)}_sceneToCubeUV(e,t,i,r,s){const l=new oi(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(og),f.toneMapping=Er,f.autoClear=!1;const p=new Hd({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new Wt(new Za,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(og),_=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[y],s.y,s.z)):x===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[y]));const v=this._cubeSize;Vl(r,x*v,y>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_o||e.mapping===vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ag[(r-s-1)%ag.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Wt(this._lodPlanes[r],u),d=u.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*rs-1),g=s/p,_=isFinite(s)?1+Math.floor(c*g):rs;_>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${rs}`);const m=[];let y=0;for(let A=0;A<rs;++A){const R=A/g,M=Math.exp(-R*R/2);m.push(M),A===0?y+=M:A<_&&(y+=2*M)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-i;const v=this._sizeLods[r],b=3*v*(r>x-Zs?r-x+Zs:0),w=4*(this._cubeSize-v);Vl(t,b,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Qu)}}function HR(n){const e=[],t=[],i=[];let r=n;const s=n-Zs+1+sg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Zs?l=sg[o-n+Zs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,p=6,g=3,_=2,m=1,y=new Float32Array(g*p*h),x=new Float32Array(_*p*h),v=new Float32Array(m*p*h);for(let w=0;w<h;w++){const A=w%3*2/3-1,R=w>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(M,g*p*w),x.set(d,_*p*w);const S=[w,w,w,w,w,w];v.set(S,m*p*w)}const b=new qt;b.setAttribute("position",new Sn(y,g)),b.setAttribute("uv",new Sn(x,_)),b.setAttribute("faceIndex",new Sn(v,m)),e.push(b),r>Zs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cg(n,e,t){const i=new ys(n,e,t);return i.texture.mapping=Qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function VR(n,e,t){const i=new Float32Array(rs),r=new z(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function ug(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function fg(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Kd(){return`

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
	`}function GR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===eh||l===th,c=l===_o||l===vo;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new lg(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return u&&h&&h.height>0||c&&h&&r(h)?(t===null&&(t=new lg(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function WR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function XR(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function u(f){const d=[],h=f.index,p=f.attributes.position;let g=0;if(h!==null){const y=h.array;g=h.version;for(let x=0,v=y.length;x<v;x+=3){const b=y[x+0],w=y[x+1],A=y[x+2];d.push(b,w,w,A,A,b)}}else if(p!==void 0){const y=p.array;g=p.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const b=x+0,w=x+1,A=x+2;d.push(b,w,w,A,A,b)}}else return;const _=new(lv(d)?hv:fv)(d,1);_.version=g;const m=s.get(f);m&&e.remove(m),s.set(f,_)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function qR(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function u(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,d*o,p),t.update(h,i,p))}function c(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,i,1)}function f(d,h,p,g){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)u(d[m]/o,h[m],g[m]);else{_.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,g,0,p);let m=0;for(let y=0;y<p;y++)m+=h[y]*g[y];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function jR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $R(n,e,t){const i=new WeakMap,r=new Nt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;h===!0&&(x=1),p===!0&&(x=2),g===!0&&(x=3);let v=a.attributes.position.count*x,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*b*4*f),A=new cv(w,v,b,f);A.type=Di,A.needsUpdate=!0;const R=x*4;for(let S=0;S<f;S++){const D=_[S],L=m[S],N=y[S],F=v*b*4*S;for(let W=0;W<D.count;W++){const O=W*R;h===!0&&(r.fromBufferAttribute(D,W),w[F+O+0]=r.x,w[F+O+1]=r.y,w[F+O+2]=r.z,w[F+O+3]=0),p===!0&&(r.fromBufferAttribute(L,W),w[F+O+4]=r.x,w[F+O+5]=r.y,w[F+O+6]=r.z,w[F+O+7]=0),g===!0&&(r.fromBufferAttribute(N,W),w[F+O+8]=r.x,w[F+O+9]=r.y,w[F+O+10]=r.z,w[F+O+11]=N.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new Ie(v,b)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let g=0;g<u.length;g++)h+=u[g];const p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function YR(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Lv=new un,hg=new vv(1,1),Dv=new cv,Iv=new H1,Uv=new mv,dg=[],pg=[],mg=new Float32Array(16),gg=new Float32Array(9),_g=new Float32Array(4);function Io(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=dg[r];if(s===void 0&&(s=new Float32Array(r),dg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function eu(n,e){let t=pg[e];t===void 0&&(t=new Int32Array(e),pg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function KR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function JR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function ZR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function QR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function e2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,i))return;_g.set(i),n.uniformMatrix2fv(this.addr,!1,_g),$t(t,i)}}function t2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,i))return;gg.set(i),n.uniformMatrix3fv(this.addr,!1,gg),$t(t,i)}}function n2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,i))return;mg.set(i),n.uniformMatrix4fv(this.addr,!1,mg),$t(t,i)}}function i2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function r2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function s2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function a2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function l2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function c2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function u2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function f2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hg.compareFunction=av,s=hg):s=Lv,t.setTexture2D(e||s,r)}function h2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Iv,r)}function d2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Uv,r)}function p2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dv,r)}function m2(n){switch(n){case 5126:return KR;case 35664:return JR;case 35665:return ZR;case 35666:return QR;case 35674:return e2;case 35675:return t2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return r2;case 35668:case 35672:return s2;case 35669:case 35673:return o2;case 5125:return a2;case 36294:return l2;case 36295:return c2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return f2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return p2}}function g2(n,e){n.uniform1fv(this.addr,e)}function _2(n,e){const t=Io(e,this.size,2);n.uniform2fv(this.addr,t)}function v2(n,e){const t=Io(e,this.size,3);n.uniform3fv(this.addr,t)}function x2(n,e){const t=Io(e,this.size,4);n.uniform4fv(this.addr,t)}function y2(n,e){const t=Io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function M2(n,e){const t=Io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function S2(n,e){const t=Io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function b2(n,e){n.uniform1iv(this.addr,e)}function E2(n,e){n.uniform2iv(this.addr,e)}function T2(n,e){n.uniform3iv(this.addr,e)}function w2(n,e){n.uniform4iv(this.addr,e)}function A2(n,e){n.uniform1uiv(this.addr,e)}function C2(n,e){n.uniform2uiv(this.addr,e)}function R2(n,e){n.uniform3uiv(this.addr,e)}function P2(n,e){n.uniform4uiv(this.addr,e)}function L2(n,e,t){const i=this.cache,r=e.length,s=eu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lv,s[o])}function D2(n,e,t){const i=this.cache,r=e.length,s=eu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Iv,s[o])}function I2(n,e,t){const i=this.cache,r=e.length,s=eu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Uv,s[o])}function U2(n,e,t){const i=this.cache,r=e.length,s=eu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dv,s[o])}function N2(n){switch(n){case 5126:return g2;case 35664:return _2;case 35665:return v2;case 35666:return x2;case 35674:return y2;case 35675:return M2;case 35676:return S2;case 5124:case 35670:return b2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return w2;case 5125:return A2;case 36294:return C2;case 36295:return R2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return U2}}class O2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=m2(t.type)}}class F2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N2(t.type)}}class B2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const sf=/(\w+)(\])?(\[|\.)?/g;function vg(n,e){n.seq.push(e),n.map[e.id]=e}function k2(n,e,t){const i=n.name,r=i.length;for(sf.lastIndex=0;;){const s=sf.exec(i),o=sf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){vg(t,u===void 0?new O2(a,n,e):new F2(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new B2(a),vg(t,f)),t=f}}}class tc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);k2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function xg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const z2=37297;let H2=0;function V2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yg=new $e;function G2(n){st._getMatrix(yg,st.workingColorSpace,n);const e=`mat3( ${yg.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Tc:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+V2(n.getShaderSource(e),o)}else return r}function W2(n,e){const t=G2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X2(n,e){let t;switch(e){case QT:t="Linear";break;case e1:t="Reinhard";break;case t1:t="Cineon";break;case J0:t="ACESFilmic";break;case i1:t="AgX";break;case r1:t="Neutral";break;case n1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new z;function q2(){st.getLuminanceCoefficients(Gl);const n=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function $2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Y2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qo(n){return n!==""}function Sg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(n){return n.replace(K2,Z2)}const J2=new Map;function Z2(n,e){let t=Ye[e];if(t===void 0){const i=J2.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uh(t)}const Q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(n){return n.replace(Q2,eP)}function eP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function tP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===DT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function nP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _o:case vo:e="ENVMAP_TYPE_CUBE";break;case Qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iP(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===vo&&(e="ENVMAP_MODE_REFRACTION"),e}function rP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case K0:e="ENVMAP_BLENDING_MULTIPLY";break;case JT:e="ENVMAP_BLENDING_MIX";break;case ZT:e="ENVMAP_BLENDING_ADD";break}return e}function sP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function oP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tP(t),u=nP(t),c=iP(t),f=rP(t),d=sP(t),h=j2(t),p=$2(s),g=r.createProgram();let _,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qo).join(`
`),m.length>0&&(m+=`
`)):(_=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),m=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Er?X2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,W2("linearToOutputTexel",t.outputColorSpace),q2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Uh(o),o=Sg(o,t),o=bg(o,t),a=Uh(a),a=Sg(a,t),a=bg(a,t),o=Eg(o),a=Eg(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+_+o,v=y+m+a,b=xg(r,r.VERTEX_SHADER,x),w=xg(r,r.FRAGMENT_SHADER,v);r.attachShader(g,b),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(D){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(b).trim(),F=r.getShaderInfoLog(w).trim();let W=!0,O=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,b,w);else{const j=Mg(r,b,"vertex"),H=Mg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+j+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||F==="")&&(O=!1);O&&(D.diagnostics={runnable:W,programLog:L,vertexShader:{log:N,prefix:_},fragmentShader:{log:F,prefix:m}})}r.deleteShader(b),r.deleteShader(w),R=new tc(r,g),M=Y2(r,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,z2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let aP=0;class lP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cP(e),t.set(e,i)),i}}class cP{constructor(e){this.id=aP++,this.code=e,this.usedTimes=0}}function uP(n,e,t,i,r,s,o){const a=new zd,l=new lP,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function _(M,S,D,L,N){const F=L.fog,W=N.geometry,O=M.isMeshStandardMaterial?L.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),H=j&&j.mapping===Qc?j.image.height:null,$=p[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=U!==void 0?U.length:0;let Me=0;W.morphAttributes.position!==void 0&&(Me=1),W.morphAttributes.normal!==void 0&&(Me=2),W.morphAttributes.color!==void 0&&(Me=3);let ae,K,fe,Ee;if($){const et=wi[$];ae=et.vertexShader,K=et.fragmentShader}else ae=M.vertexShader,K=M.fragmentShader,l.update(M),fe=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const ye=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Ke=N.isInstancedMesh===!0,Oe=N.isBatchedMesh===!0,tt=!!M.map,nt=!!M.matcap,I=!!j,T=!!M.aoMap,J=!!M.lightMap,ie=!!M.bumpMap,ne=!!M.normalMap,q=!!M.displacementMap,le=!!M.emissiveMap,te=!!M.metalnessMap,se=!!M.roughnessMap,oe=M.anisotropy>0,P=M.clearcoat>0,E=M.dispersion>0,B=M.iridescence>0,V=M.sheen>0,ee=M.transmission>0,Y=oe&&!!M.anisotropyMap,he=P&&!!M.clearcoatMap,pe=P&&!!M.clearcoatNormalMap,xe=P&&!!M.clearcoatRoughnessMap,Ae=B&&!!M.iridescenceMap,ce=B&&!!M.iridescenceThicknessMap,Te=V&&!!M.sheenColorMap,Be=V&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,ve=!!M.specularColorMap,ze=!!M.specularIntensityMap,k=ee&&!!M.transmissionMap,Se=ee&&!!M.thicknessMap,me=!!M.gradientMap,Re=!!M.alphaMap,ge=M.alphaTest>0,ue=!!M.alphaHash,Le=!!M.extensions;let We=Er;M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(We=n.toneMapping);const at={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:K,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&N._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&N.instanceColor!==null,instancingMorph:Ke&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:xo,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:nt,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:J,bumpMap:ie,normalMap:ne,displacementMap:d&&q,emissiveMap:le,normalMapObjectSpace:ne&&M.normalMapType===l1,normalMapTangentSpace:ne&&M.normalMapType===ov,metalnessMap:te,roughnessMap:se,anisotropy:oe,anisotropyMap:Y,clearcoat:P,clearcoatMap:he,clearcoatNormalMap:pe,clearcoatRoughnessMap:xe,dispersion:E,iridescence:B,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:V,sheenColorMap:Te,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:ve,specularIntensityMap:ze,transmission:ee,transmissionMap:k,thicknessMap:Se,gradientMap:me,opaque:M.transparent===!1&&M.blending===ao&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:ge,alphaHash:ue,combine:M.combine,mapUv:tt&&g(M.map.channel),aoMapUv:T&&g(M.aoMap.channel),lightMapUv:J&&g(M.lightMap.channel),bumpMapUv:ie&&g(M.bumpMap.channel),normalMapUv:ne&&g(M.normalMap.channel),displacementMapUv:q&&g(M.displacementMap.channel),emissiveMapUv:le&&g(M.emissiveMap.channel),metalnessMapUv:te&&g(M.metalnessMap.channel),roughnessMapUv:se&&g(M.roughnessMap.channel),anisotropyMapUv:Y&&g(M.anisotropyMap.channel),clearcoatMapUv:he&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(M.sheenRoughnessMap.channel),specularMapUv:Pe&&g(M.specularMap.channel),specularColorMapUv:ve&&g(M.specularColorMap.channel),specularIntensityMapUv:ze&&g(M.specularIntensityMap.channel),transmissionMapUv:k&&g(M.transmissionMap.channel),thicknessMapUv:Se&&g(M.thicknessMap.channel),alphaMapUv:Re&&g(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ne||oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(tt||Re),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:le&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Le&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&M.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return at.vertexUv1s=u.has(1),at.vertexUv2s=u.has(2),at.vertexUv3s=u.has(3),u.clear(),at}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=p[M.type];let D;if(S){const L=wi[S];D=ew.clone(L.uniforms)}else D=M.uniforms;return D}function b(M,S){let D;for(let L=0,N=c.length;L<N;L++){const F=c[L];if(F.cacheKey===S){D=F,++D.usedTimes;break}}return D===void 0&&(D=new oP(n,S,M,s),c.push(D)),D}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:R}}function fP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ag(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,p,g,_){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:p,renderOrder:f.renderOrder,z:g,group:_},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=g,m.group=_),e++,m}function a(f,d,h,p,g,_){const m=o(f,d,h,p,g,_);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(f,d,h,p,g,_){const m=o(f,d,h,p,g,_);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||hP),i.length>1&&i.sort(d||wg),r.length>1&&r.sort(d||wg)}function c(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function dP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ag,n.set(i,[o])):r>=s.length?(o=new Ag,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new je};break;case"SpotLight":t={position:new z,direction:new z,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function mP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gP=0;function _P(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vP(n){const e=new pP,t=mP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new pt,o=new pt;function a(u){let c=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,p=0,g=0,_=0,m=0,y=0,x=0,v=0,b=0,w=0,A=0;u.sort(_P);for(let M=0,S=u.length;M<S;M++){const D=u[M],L=D.color,N=D.intensity,F=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=L.r*N,f+=L.g*N,d+=L.b*N;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],N);A++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,H=t.get(D);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=D.shadow.matrix,y++}i.directional[h]=O,h++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(L).multiplyScalar(N),O.distance=F,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[g]=O;const j=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,j.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[g]=j.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=W,v++}g++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(L).multiplyScalar(N),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=O,_++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const j=D.shadow,H=t.get(D);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=D.shadow.matrix,x++}i.point[p]=O,p++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(N),O.groundColor.copy(D.groundColor).multiplyScalar(N),i.hemi[m]=O,m++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==h||R.pointLength!==p||R.spotLength!==g||R.rectAreaLength!==_||R.hemiLength!==m||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==b||R.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=_,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,R.directionalLength=h,R.pointLength=p,R.spotLength=g,R.rectAreaLength=_,R.hemiLength=m,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=b,R.numLightProbes=A,i.version=gP++)}function l(u,c){let f=0,d=0,h=0,p=0,g=0;const _=c.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){const x=u[m];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(x.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),h++}else if(x.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),d++}else if(x.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:i}}function Cg(n){const e=new vP(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cg(n),e.set(r,[a])):s>=o.length?(a=new Cg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const yP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MP=`uniform sampler2D shadow_pass;
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
}`;function SP(n,e,t){let i=new Gd;const r=new Ie,s=new Ie,o=new Nt,a=new Ww({depthPacking:a1}),l=new Xw,u={},c=t.maxTextureSize,f={[Pr]:Mn,[Mn]:Pr,[Jt]:Jt},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:yP,fragmentShader:MP}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new qt;p.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wt(p,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let m=this.type;this.render=function(w,A,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(br),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=m!==qi&&this.type===qi,F=m===qi&&this.type!==qi;for(let W=0,O=w.length;W<O;W++){const j=w[W],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const $=H.getFrameExtents();if(r.multiply($),s.copy(H.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,H.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,H.mapSize.y=s.y)),H.map===null||N===!0||F===!0){const de=this.type!==qi?{minFilter:qn,magFilter:qn}:{};H.map!==null&&H.map.dispose(),H.map=new ys(r.x,r.y,de),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const U=H.getViewportCount();for(let de=0;de<U;de++){const Me=H.getViewport(de);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),L.viewport(o),H.updateMatrices(j,de),i=H.getFrustum(),v(A,R,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===qi&&y(H,R),H.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(M,S,D)};function y(w,A){const R=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ys(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,R,h,g,null)}function x(w,A,R,M){let S=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=S.uuid,N=A.uuid;let F=u[L];F===void 0&&(F={},u[L]=F);let W=F[N];W===void 0&&(W=S.clone(),F[N]=W,A.addEventListener("dispose",b)),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,M===qi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=n.properties.get(S);L.light=R}return S}function v(w,A,R,M,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===qi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const N=e.update(w),F=w.material;if(Array.isArray(F)){const W=N.groups;for(let O=0,j=W.length;O<j;O++){const H=W[O],$=F[H.materialIndex];if($&&$.visible){const U=x(w,$,M,S);w.onBeforeShadow(n,w,A,R,N,U,H),n.renderBufferDirect(R,null,N,U,w,H),w.onAfterShadow(n,w,A,R,N,U,H)}}}else if(F.visible){const W=x(w,F,M,S);w.onBeforeShadow(n,w,A,R,N,W,null),n.renderBufferDirect(R,null,N,W,w,null),w.onAfterShadow(n,w,A,R,N,W,null)}}const L=w.children;for(let N=0,F=L.length;N<F;N++)v(L[N],A,R,M,S)}function b(w){w.target.removeEventListener("dispose",b);for(const R in u){const M=u[R],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const bP={[jf]:$f,[Yf]:Zf,[Kf]:Qf,[go]:Jf,[$f]:jf,[Zf]:Yf,[Qf]:Kf,[Jf]:go};function EP(n,e){function t(){let k=!1;const Se=new Nt;let me=null;const Re=new Nt(0,0,0,0);return{setMask:function(ge){me!==ge&&!k&&(n.colorMask(ge,ge,ge,ge),me=ge)},setLocked:function(ge){k=ge},setClear:function(ge,ue,Le,We,at){at===!0&&(ge*=We,ue*=We,Le*=We),Se.set(ge,ue,Le,We),Re.equals(Se)===!1&&(n.clearColor(ge,ue,Le,We),Re.copy(Se))},reset:function(){k=!1,me=null,Re.set(-1,0,0,0)}}}function i(){let k=!1,Se=!1,me=null,Re=null,ge=null;return{setReversed:function(ue){if(Se!==ue){const Le=e.get("EXT_clip_control");ue?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Se=ue;const We=ge;ge=null,this.setClear(We)}},getReversed:function(){return Se},setTest:function(ue){ue?ye(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(ue){me!==ue&&!k&&(n.depthMask(ue),me=ue)},setFunc:function(ue){if(Se&&(ue=bP[ue]),Re!==ue){switch(ue){case jf:n.depthFunc(n.NEVER);break;case $f:n.depthFunc(n.ALWAYS);break;case Yf:n.depthFunc(n.LESS);break;case go:n.depthFunc(n.LEQUAL);break;case Kf:n.depthFunc(n.EQUAL);break;case Jf:n.depthFunc(n.GEQUAL);break;case Zf:n.depthFunc(n.GREATER);break;case Qf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ue}},setLocked:function(ue){k=ue},setClear:function(ue){ge!==ue&&(Se&&(ue=1-ue),n.clearDepth(ue),ge=ue)},reset:function(){k=!1,me=null,Re=null,ge=null,Se=!1}}}function r(){let k=!1,Se=null,me=null,Re=null,ge=null,ue=null,Le=null,We=null,at=null;return{setTest:function(et){k||(et?ye(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(et){Se!==et&&!k&&(n.stencilMask(et),Se=et)},setFunc:function(et,Un,Kn){(me!==et||Re!==Un||ge!==Kn)&&(n.stencilFunc(et,Un,Kn),me=et,Re=Un,ge=Kn)},setOp:function(et,Un,Kn){(ue!==et||Le!==Un||We!==Kn)&&(n.stencilOp(et,Un,Kn),ue=et,Le=Un,We=Kn)},setLocked:function(et){k=et},setClear:function(et){at!==et&&(n.clearStencil(et),at=et)},reset:function(){k=!1,Se=null,me=null,Re=null,ge=null,ue=null,Le=null,We=null,at=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,y=null,x=null,v=null,b=null,w=null,A=new je(0,0,0),R=0,M=!1,S=null,D=null,L=null,N=null,F=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=j>=2);let $=null,U={};const de=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),ae=new Nt().fromArray(de),K=new Nt().fromArray(Me);function fe(k,Se,me,Re){const ge=new Uint8Array(4),ue=n.createTexture();n.bindTexture(k,ue),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<me;Le++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(Se+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ue}const Ee={};Ee[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc(go),ie(!1),ne(xm),ye(n.CULL_FACE),T(br);function ye(k){c[k]!==!0&&(n.enable(k),c[k]=!0)}function Ne(k){c[k]!==!1&&(n.disable(k),c[k]=!1)}function Ke(k,Se){return f[k]!==Se?(n.bindFramebuffer(k,Se),f[k]=Se,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Oe(k,Se){let me=h,Re=!1;if(k){me=d.get(Se),me===void 0&&(me=[],d.set(Se,me));const ge=k.textures;if(me.length!==ge.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Le=ge.length;ue<Le;ue++)me[ue]=n.COLOR_ATTACHMENT0+ue;me.length=ge.length,Re=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Re=!0);Re&&n.drawBuffers(me)}function tt(k){return p!==k?(n.useProgram(k),p=k,!0):!1}const nt={[is]:n.FUNC_ADD,[UT]:n.FUNC_SUBTRACT,[NT]:n.FUNC_REVERSE_SUBTRACT};nt[OT]=n.MIN,nt[FT]=n.MAX;const I={[BT]:n.ZERO,[kT]:n.ONE,[zT]:n.SRC_COLOR,[Xf]:n.SRC_ALPHA,[qT]:n.SRC_ALPHA_SATURATE,[WT]:n.DST_COLOR,[VT]:n.DST_ALPHA,[HT]:n.ONE_MINUS_SRC_COLOR,[qf]:n.ONE_MINUS_SRC_ALPHA,[XT]:n.ONE_MINUS_DST_COLOR,[GT]:n.ONE_MINUS_DST_ALPHA,[jT]:n.CONSTANT_COLOR,[$T]:n.ONE_MINUS_CONSTANT_COLOR,[YT]:n.CONSTANT_ALPHA,[KT]:n.ONE_MINUS_CONSTANT_ALPHA};function T(k,Se,me,Re,ge,ue,Le,We,at,et){if(k===br){g===!0&&(Ne(n.BLEND),g=!1);return}if(g===!1&&(ye(n.BLEND),g=!0),k!==IT){if(k!==_||et!==M){if((m!==is||v!==is)&&(n.blendEquation(n.FUNC_ADD),m=is,v=is),et)switch(k){case ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFunc(n.ONE,n.ONE);break;case ym:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ym:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,x=null,b=null,w=null,A.set(0,0,0),R=0,_=k,M=et}return}ge=ge||Se,ue=ue||me,Le=Le||Re,(Se!==m||ge!==v)&&(n.blendEquationSeparate(nt[Se],nt[ge]),m=Se,v=ge),(me!==y||Re!==x||ue!==b||Le!==w)&&(n.blendFuncSeparate(I[me],I[Re],I[ue],I[Le]),y=me,x=Re,b=ue,w=Le),(We.equals(A)===!1||at!==R)&&(n.blendColor(We.r,We.g,We.b,at),A.copy(We),R=at),_=k,M=!1}function J(k,Se){k.side===Jt?Ne(n.CULL_FACE):ye(n.CULL_FACE);let me=k.side===Mn;Se&&(me=!me),ie(me),k.blending===ao&&k.transparent===!1?T(br):T(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const Re=k.stencilWrite;a.setTest(Re),Re&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(k){S!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),S=k)}function ne(k){k!==PT?(ye(n.CULL_FACE),k!==D&&(k===xm?n.cullFace(n.BACK):k===LT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),D=k}function q(k){k!==L&&(O&&n.lineWidth(k),L=k)}function le(k,Se,me){k?(ye(n.POLYGON_OFFSET_FILL),(N!==Se||F!==me)&&(n.polygonOffset(Se,me),N=Se,F=me)):Ne(n.POLYGON_OFFSET_FILL)}function te(k){k?ye(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function se(k){k===void 0&&(k=n.TEXTURE0+W-1),$!==k&&(n.activeTexture(k),$=k)}function oe(k,Se,me){me===void 0&&($===null?me=n.TEXTURE0+W-1:me=$);let Re=U[me];Re===void 0&&(Re={type:void 0,texture:void 0},U[me]=Re),(Re.type!==k||Re.texture!==Se)&&($!==me&&(n.activeTexture(me),$=me),n.bindTexture(k,Se||Ee[k]),Re.type=k,Re.texture=Se)}function P(){const k=U[$];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){ae.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ae.copy(k))}function Be(k){K.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function Pe(k,Se){let me=u.get(Se);me===void 0&&(me=new WeakMap,u.set(Se,me));let Re=me.get(k);Re===void 0&&(Re=n.getUniformBlockIndex(Se,k.name),me.set(k,Re))}function ve(k,Se){const Re=u.get(Se).get(k);l.get(Se)!==Re&&(n.uniformBlockBinding(Se,Re,k.__bindingPointIndex),l.set(Se,Re))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,U={},f={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,y=null,x=null,v=null,b=null,w=null,A=new je(0,0,0),R=0,M=!1,S=null,D=null,L=null,N=null,F=null,ae.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ye,disable:Ne,bindFramebuffer:Ke,drawBuffers:Oe,useProgram:tt,setBlending:T,setMaterial:J,setFlipSided:ie,setCullFace:ne,setLineWidth:q,setPolygonOffset:le,setScissorTest:te,activeTexture:se,bindTexture:oe,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:B,texImage2D:Ae,texImage3D:ce,updateUBOMapping:Pe,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:xe,texSubImage2D:V,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:he,scissor:Te,viewport:Be,reset:ze}}function TP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,E){return h?new OffscreenCanvas(P,E):Ac("canvas")}function g(P,E,B){let V=1;const ee=oe(P);if((ee.width>B||ee.height>B)&&(V=B/Math.max(ee.width,ee.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(V*ee.width),he=Math.floor(V*ee.height);f===void 0&&(f=p(Y,he));const pe=E?p(Y,he):f;return pe.width=Y,pe.height=he,pe.getContext("2d").drawImage(P,0,0,Y,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+he+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function _(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,E,B,V,ee=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=E;if(E===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8)),E===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),E===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8)),E===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),E===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),E===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),E===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),E===n.RGBA){const he=ee?Tc:st.getTransfer(V);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=he===dt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(P,E){let B;return P?E===null||E===xs||E===Aa?B=n.DEPTH24_STENCIL8:E===Di?B=n.DEPTH32F_STENCIL8:E===wa&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xs||E===Aa?B=n.DEPTH_COMPONENT24:E===Di?B=n.DEPTH_COMPONENT32F:E===wa&&(B=n.DEPTH_COMPONENT16),B}function b(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==qn&&P.minFilter!==Li?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&c.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),S(E)}function R(P){const E=i.get(P);if(E.__webglInit===void 0)return;const B=P.source,V=d.get(B);if(V){const ee=V[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(P),Object.keys(V).length===0&&d.delete(B)}i.remove(P)}function M(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const B=P.source,V=d.get(B);delete V[E.__cacheKey],o.memory.textures--}function S(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(E.__webglFramebuffer[V]))for(let ee=0;ee<E.__webglFramebuffer[V].length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[V][ee]);else n.deleteFramebuffer(E.__webglFramebuffer[V]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[V])}else{if(Array.isArray(E.__webglFramebuffer))for(let V=0;V<E.__webglFramebuffer.length;V++)n.deleteFramebuffer(E.__webglFramebuffer[V]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let V=0;V<E.__webglColorRenderbuffer.length;V++)E.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[V]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=P.textures;for(let V=0,ee=B.length;V<ee;V++){const Y=i.get(B[V]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[V])}i.remove(P)}let D=0;function L(){D=0}function N(){const P=D;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function F(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function W(P,E){const B=i.get(P);if(P.isVideoTexture&&te(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const V=P.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(B,P,E);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+E)}function O(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Ee(B,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+E)}function j(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Ee(B,P,E);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+E)}function H(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ye(B,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+E)}const $={[nh]:n.REPEAT,[os]:n.CLAMP_TO_EDGE,[ih]:n.MIRRORED_REPEAT},U={[qn]:n.NEAREST,[s1]:n.NEAREST_MIPMAP_NEAREST,[_l]:n.NEAREST_MIPMAP_LINEAR,[Li]:n.LINEAR,[wu]:n.LINEAR_MIPMAP_NEAREST,[as]:n.LINEAR_MIPMAP_LINEAR},de={[c1]:n.NEVER,[m1]:n.ALWAYS,[u1]:n.LESS,[av]:n.LEQUAL,[f1]:n.EQUAL,[p1]:n.GEQUAL,[h1]:n.GREATER,[d1]:n.NOTEQUAL};function Me(P,E){if(E.type===Di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Li||E.magFilter===wu||E.magFilter===_l||E.magFilter===as||E.minFilter===Li||E.minFilter===wu||E.minFilter===_l||E.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,$[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,$[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,$[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,U[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qn||E.minFilter!==_l&&E.minFilter!==as||E.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ae(P,E){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const V=E.source;let ee=d.get(V);ee===void 0&&(ee={},d.set(V,ee));const Y=F(E);if(Y!==P.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[Y].usedTimes++;const he=ee[P.__cacheKey];he!==void 0&&(ee[P.__cacheKey].usedTimes--,he.usedTimes===0&&M(E)),P.__cacheKey=Y,P.__webglTexture=ee[Y].texture}return B}function K(P,E,B){return Math.floor(Math.floor(P/B)/E)}function fe(P,E,B,V){const Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,B,V,E.data);else{Y.sort((ce,Te)=>ce.start-Te.start);let he=0;for(let ce=1;ce<Y.length;ce++){const Te=Y[he],Be=Y[ce],Pe=Te.start+Te.count,ve=K(Be.start,E.width,4),ze=K(Te.start,E.width,4);Be.start<=Pe+1&&ve===ze&&K(Be.start+Be.count-1,E.width,4)===ve?Te.count=Math.max(Te.count,Be.start+Be.count-Te.start):(++he,Y[he]=Be)}Y.length=he+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ce=0,Te=Y.length;ce<Te;ce++){const Be=Y[ce],Pe=Math.floor(Be.start/4),ve=Math.ceil(Be.count/4),ze=Pe%E.width,k=Math.floor(Pe/E.width),Se=ve,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,ze,k,Se,me,B,V,E.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Ee(P,E,B){let V=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(V=n.TEXTURE_3D);const ee=ae(P,E),Y=E.source;t.bindTexture(V,P.__webglTexture,n.TEXTURE0+B);const he=i.get(Y);if(Y.version!==he.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const pe=st.getPrimaries(st.workingColorSpace),xe=E.colorSpace===vr?null:st.getPrimaries(E.colorSpace),Ae=E.colorSpace===vr||pe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=g(E.image,!1,r.maxTextureSize);ce=se(E,ce);const Te=s.convert(E.format,E.colorSpace),Be=s.convert(E.type);let Pe=x(E.internalFormat,Te,Be,E.colorSpace,E.isVideoTexture);Me(V,E);let ve;const ze=E.mipmaps,k=E.isVideoTexture!==!0,Se=he.__version===void 0||ee===!0,me=Y.dataReady,Re=b(E,ce);if(E.isDepthTexture)Pe=v(E.format===Ra,E.type),Se&&(k?t.texStorage2D(n.TEXTURE_2D,1,Pe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ce.width,ce.height,0,Te,Be,null));else if(E.isDataTexture)if(ze.length>0){k&&Se&&t.texStorage2D(n.TEXTURE_2D,Re,Pe,ze[0].width,ze[0].height);for(let ge=0,ue=ze.length;ge<ue;ge++)ve=ze[ge],k?me&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,ve.width,ve.height,Te,Be,ve.data):t.texImage2D(n.TEXTURE_2D,ge,Pe,ve.width,ve.height,0,Te,Be,ve.data);E.generateMipmaps=!1}else k?(Se&&t.texStorage2D(n.TEXTURE_2D,Re,Pe,ce.width,ce.height),me&&fe(E,ce,Te,Be)):t.texImage2D(n.TEXTURE_2D,0,Pe,ce.width,ce.height,0,Te,Be,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Pe,ze[0].width,ze[0].height,ce.depth);for(let ge=0,ue=ze.length;ge<ue;ge++)if(ve=ze[ge],E.format!==xi)if(Te!==null)if(k){if(me)if(E.layerUpdates.size>0){const Le=rg(ve.width,ve.height,E.format,E.type);for(const We of E.layerUpdates){const at=ve.data.subarray(We*Le/ve.data.BYTES_PER_ELEMENT,(We+1)*Le/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,We,ve.width,ve.height,1,Te,at)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,ve.width,ve.height,ce.depth,Te,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Pe,ve.width,ve.height,ce.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,ve.width,ve.height,ce.depth,Te,Be,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Pe,ve.width,ve.height,ce.depth,0,Te,Be,ve.data)}else{k&&Se&&t.texStorage2D(n.TEXTURE_2D,Re,Pe,ze[0].width,ze[0].height);for(let ge=0,ue=ze.length;ge<ue;ge++)ve=ze[ge],E.format!==xi?Te!==null?k?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,ve.width,ve.height,Te,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?me&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,ve.width,ve.height,Te,Be,ve.data):t.texImage2D(n.TEXTURE_2D,ge,Pe,ve.width,ve.height,0,Te,Be,ve.data)}else if(E.isDataArrayTexture)if(k){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Pe,ce.width,ce.height,ce.depth),me)if(E.layerUpdates.size>0){const ge=rg(ce.width,ce.height,E.format,E.type);for(const ue of E.layerUpdates){const Le=ce.data.subarray(ue*ge/ce.data.BYTES_PER_ELEMENT,(ue+1)*ge/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ce.width,ce.height,1,Te,Be,Le)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,Be,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ce.width,ce.height,ce.depth,0,Te,Be,ce.data);else if(E.isData3DTexture)k?(Se&&t.texStorage3D(n.TEXTURE_3D,Re,Pe,ce.width,ce.height,ce.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,Be,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ce.width,ce.height,ce.depth,0,Te,Be,ce.data);else if(E.isFramebufferTexture){if(Se)if(k)t.texStorage2D(n.TEXTURE_2D,Re,Pe,ce.width,ce.height);else{let ge=ce.width,ue=ce.height;for(let Le=0;Le<Re;Le++)t.texImage2D(n.TEXTURE_2D,Le,Pe,ge,ue,0,Te,Be,null),ge>>=1,ue>>=1}}else if(ze.length>0){if(k&&Se){const ge=oe(ze[0]);t.texStorage2D(n.TEXTURE_2D,Re,Pe,ge.width,ge.height)}for(let ge=0,ue=ze.length;ge<ue;ge++)ve=ze[ge],k?me&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Te,Be,ve):t.texImage2D(n.TEXTURE_2D,ge,Pe,Te,Be,ve);E.generateMipmaps=!1}else if(k){if(Se){const ge=oe(ce);t.texStorage2D(n.TEXTURE_2D,Re,Pe,ge.width,ge.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Be,ce)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Te,Be,ce);_(E)&&m(V),he.__version=Y.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ye(P,E,B){if(E.image.length!==6)return;const V=ae(P,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const Y=i.get(ee);if(ee.version!==Y.__version||V===!0){t.activeTexture(n.TEXTURE0+B);const he=st.getPrimaries(st.workingColorSpace),pe=E.colorSpace===vr?null:st.getPrimaries(E.colorSpace),xe=E.colorSpace===vr||he===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,ce=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let ue=0;ue<6;ue++)!Ae&&!ce?Te[ue]=g(E.image[ue],!0,r.maxCubemapSize):Te[ue]=ce?E.image[ue].image:E.image[ue],Te[ue]=se(E,Te[ue]);const Be=Te[0],Pe=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),ze=x(E.internalFormat,Pe,ve,E.colorSpace),k=E.isVideoTexture!==!0,Se=Y.__version===void 0||V===!0,me=ee.dataReady;let Re=b(E,Be);Me(n.TEXTURE_CUBE_MAP,E);let ge;if(Ae){k&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ze,Be.width,Be.height);for(let ue=0;ue<6;ue++){ge=Te[ue].mipmaps;for(let Le=0;Le<ge.length;Le++){const We=ge[Le];E.format!==xi?Pe!==null?k?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,0,0,We.width,We.height,Pe,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,ze,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,0,0,We.width,We.height,Pe,ve,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,ze,We.width,We.height,0,Pe,ve,We.data)}}}else{if(ge=E.mipmaps,k&&Se){ge.length>0&&Re++;const ue=oe(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ce){k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Te[ue].width,Te[ue].height,Pe,ve,Te[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Te[ue].width,Te[ue].height,0,Pe,ve,Te[ue].data);for(let Le=0;Le<ge.length;Le++){const at=ge[Le].image[ue].image;k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,0,0,at.width,at.height,Pe,ve,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,ze,at.width,at.height,0,Pe,ve,at.data)}}else{k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe,ve,Te[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Pe,ve,Te[ue]);for(let Le=0;Le<ge.length;Le++){const We=ge[Le];k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,0,0,Pe,ve,We.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,ze,Pe,ve,We.image[ue])}}}_(E)&&m(n.TEXTURE_CUBE_MAP),Y.__version=ee.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ne(P,E,B,V,ee,Y){const he=s.convert(B.format,B.colorSpace),pe=s.convert(B.type),xe=x(B.internalFormat,he,pe,B.colorSpace),Ae=i.get(E),ce=i.get(B);if(ce.__renderTarget=E,!Ae.__hasExternalTextures){const Te=Math.max(1,E.width>>Y),Be=Math.max(1,E.height>>Y);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,xe,Te,Be,E.depth,0,he,pe,null):t.texImage2D(ee,Y,xe,Te,Be,0,he,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),le(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,ee,ce.__webglTexture,0,q(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,ee,ce.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(P,E,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const V=E.depthTexture,ee=V&&V.isDepthTexture?V.type:null,Y=v(E.stencilBuffer,ee),he=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=q(E);le(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Y,E.width,E.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Y,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Y,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,P)}else{const V=E.textures;for(let ee=0;ee<V.length;ee++){const Y=V[ee],he=s.convert(Y.format,Y.colorSpace),pe=s.convert(Y.type),xe=x(Y.internalFormat,he,pe,Y.colorSpace),Ae=q(E);B&&le(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,xe,E.width,E.height):le(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,xe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(E.depthTexture);V.__renderTarget=E,(!V.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ee=V.__webglTexture,Y=q(E);if(E.depthTexture.format===Ca)le(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Ra)le(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function tt(P){const E=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const V=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),V){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,V.removeEventListener("dispose",ee)};V.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=V}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const V=P.texture.mipmaps;V&&V.length>0?Oe(E.__webglFramebuffer[0],P):Oe(E.__webglFramebuffer,P)}else if(B){E.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[V]),E.__webglDepthbuffer[V]===void 0)E.__webglDepthbuffer[V]=n.createRenderbuffer(),Ke(E.__webglDepthbuffer[V],P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}else{const V=P.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ke(E.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(P,E,B){const V=i.get(P);E!==void 0&&Ne(V.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&tt(P)}function I(P){const E=P.texture,B=i.get(P),V=i.get(E);P.addEventListener("dispose",A);const ee=P.textures,Y=P.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=E.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let xe=0;xe<E.mipmaps.length;xe++)B.__webglFramebuffer[pe][xe]=n.createFramebuffer()}else B.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)B.__webglFramebuffer[pe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(he)for(let pe=0,xe=ee.length;pe<xe;pe++){const Ae=i.get(ee[pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&le(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){const xe=ee[pe];B.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const Ae=s.convert(xe.format,xe.colorSpace),ce=s.convert(xe.type),Te=x(xe.internalFormat,Ae,ce,xe.colorSpace,P.isXRRenderTarget===!0),Be=q(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Te,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Me(n.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ne(B.__webglFramebuffer[pe][xe],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else Ne(B.__webglFramebuffer[pe],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(E)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let pe=0,xe=ee.length;pe<xe;pe++){const Ae=ee[pe],ce=i.get(Ae);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Me(n.TEXTURE_2D,Ae),Ne(B.__webglFramebuffer,P,Ae,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),_(Ae)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,V.__webglTexture),Me(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ne(B.__webglFramebuffer[xe],P,E,n.COLOR_ATTACHMENT0,pe,xe);else Ne(B.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,pe,0);_(E)&&m(pe),t.unbindTexture()}P.depthBuffer&&tt(P)}function T(P){const E=P.textures;for(let B=0,V=E.length;B<V;B++){const ee=E[B];if(_(ee)){const Y=y(P),he=i.get(ee).__webglTexture;t.bindTexture(Y,he),m(Y),t.unbindTexture()}}}const J=[],ie=[];function ne(P){if(P.samples>0){if(le(P)===!1){const E=P.textures,B=P.width,V=P.height;let ee=n.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(P),pe=E.length>1;if(pe)for(let Ae=0;Ae<E.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const xe=P.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const ce=i.get(E[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,B,V,0,0,B,V,ee,n.NEAREST),l===!0&&(J.length=0,ie.length=0,J.push(n.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(J.push(Y),ie.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<E.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const ce=i.get(E[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function q(P){return Math.min(r.maxSamples,P.samples)}function le(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function te(P){const E=o.render.frame;c.get(P)!==E&&(c.set(P,E),P.update())}function se(P,E){const B=P.colorSpace,V=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==xo&&B!==vr&&(st.getTransfer(B)===dt?(V!==xi||ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=nt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=le}function wP(n,e){function t(i,r=vr){let s;const o=st.getTransfer(r);if(i===Ni)return n.UNSIGNED_BYTE;if(i===Pd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ld)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Q0)return n.BYTE;if(i===ev)return n.SHORT;if(i===wa)return n.UNSIGNED_SHORT;if(i===Rd)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===Ka)return n.HALF_FLOAT;if(i===nv)return n.ALPHA;if(i===iv)return n.RGB;if(i===xi)return n.RGBA;if(i===Ca)return n.DEPTH_COMPONENT;if(i===Ra)return n.DEPTH_STENCIL;if(i===Dd)return n.RED;if(i===Id)return n.RED_INTEGER;if(i===rv)return n.RG;if(i===Ud)return n.RG_INTEGER;if(i===Nd)return n.RGBA_INTEGER;if(i===Kl||i===Jl||i===Zl||i===Ql)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===ch)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===hh||i===dh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===yh||i===Mh||i===Sh||i===bh||i===Eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_h)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===Th||i===wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ec)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sv||i===Ah||i===Ch||i===Rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ec)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ah)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Aa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const AP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CP=`
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

}`;class RP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new En({vertexShader:AP,fragmentShader:CP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PP extends Po{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,p=null;const g=new RP,_=t.getContextAttributes();let m=null,y=null;const x=[],v=[],b=new Ie;let w=null;const A=new oi;A.viewport=new Nt;const R=new oi;R.viewport=new Nt;const M=[A,R],S=new Kw;let D=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=x[K];return fe===void 0&&(fe=new ju,x[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=x[K];return fe===void 0&&(fe=new ju,x[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=x[K];return fe===void 0&&(fe=new ju,x[K]=fe),fe.getHandSpace()};function N(K){const fe=v.indexOf(K.inputSource);if(fe===-1)return;const Ee=x[fe];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,u||o),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",W);for(let K=0;K<x.length;K++){const fe=v[K];fe!==null&&(v[K]=null,x[K].disconnect(fe))}D=null,L=null,g.reset(),e.setRenderTarget(m),h=null,d=null,f=null,r=null,y=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",F),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ye=null,Ne=null;_.depth&&(Ne=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=_.stencil?Ra:Ca,ye=_.stencil?Aa:xs);const Ke={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ys(d.textureWidth,d.textureHeight,{format:xi,type:Ni,depthTexture:new vv(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new ys(h.framebufferWidth,h.framebufferHeight,{format:xi,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(K){for(let fe=0;fe<K.removed.length;fe++){const Ee=K.removed[fe],ye=v.indexOf(Ee);ye>=0&&(v[ye]=null,x[ye].disconnect(Ee))}for(let fe=0;fe<K.added.length;fe++){const Ee=K.added[fe];let ye=v.indexOf(Ee);if(ye===-1){for(let Ke=0;Ke<x.length;Ke++)if(Ke>=v.length){v.push(Ee),ye=Ke;break}else if(v[Ke]===null){v[Ke]=Ee,ye=Ke;break}if(ye===-1)break}const Ne=x[ye];Ne&&Ne.connect(Ee)}}const O=new z,j=new z;function H(K,fe,Ee){O.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(Ee.matrixWorld);const ye=O.distanceTo(j),Ne=fe.projectionMatrix.elements,Ke=Ee.projectionMatrix.elements,Oe=Ne[14]/(Ne[10]-1),tt=Ne[14]/(Ne[10]+1),nt=(Ne[9]+1)/Ne[5],I=(Ne[9]-1)/Ne[5],T=(Ne[8]-1)/Ne[0],J=(Ke[8]+1)/Ke[0],ie=Oe*T,ne=Oe*J,q=ye/(-T+J),le=q*-T;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(le),K.translateZ(q),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const te=Oe+q,se=tt+q,oe=ie-le,P=ne+(ye-le),E=nt*tt/se*te,B=I*tt/se*te;K.projectionMatrix.makePerspective(oe,P,E,B,te,se),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let fe=K.near,Ee=K.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),S.near=R.near=A.near=fe,S.far=R.far=A.far=Ee,(D!==S.near||L!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,L=S.far),A.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,S.layers.mask=A.layers.mask|R.layers.mask;const ye=K.parent,Ne=S.cameras;$(S,ye);for(let Ke=0;Ke<Ne.length;Ke++)$(Ne[Ke],ye);Ne.length===2?H(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),U(K,S,ye)};function U(K,fe,Ee){Ee===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Pa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let de=null;function Me(K,fe){if(c=fe.getViewerPose(u||o),p=fe,c!==null){const Ee=c.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let ye=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,ye=!0);for(let Oe=0;Oe<Ee.length;Oe++){const tt=Ee[Oe];let nt=null;if(h!==null)nt=h.getViewport(tt);else{const T=f.getViewSubImage(d,tt);nt=T.viewport,Oe===0&&(e.setRenderTargetTextures(y,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(y))}let I=M[Oe];I===void 0&&(I=new oi,I.layers.enable(Oe),I.viewport=new Nt,M[Oe]=I),I.matrix.fromArray(tt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(tt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(nt.x,nt.y,nt.width,nt.height),Oe===0&&(S.matrix.copy(I.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ye===!0&&S.cameras.push(I)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Oe=f.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(e,Oe,r.renderState)}}for(let Ee=0;Ee<x.length;Ee++){const ye=v[Ee],Ne=x[Ee];ye!==null&&Ne!==void 0&&Ne.update(ye,fe,u||o)}de&&de(K,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),p=null}const ae=new Pv;ae.setAnimationLoop(Me),this.setAnimationLoop=function(K){de=K},this.dispose=function(){}}}const jr=new Oi,LP=new pt;function DP(n,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,dv(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,y,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),f(_,m)):m.isMeshPhongMaterial?(s(_,m),c(_,m)):m.isMeshStandardMaterial?(s(_,m),d(_,m),m.isMeshPhysicalMaterial&&h(_,m,v)):m.isMeshMatcapMaterial?(s(_,m),p(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),g(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,y,x):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Mn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Mn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,v=y.envMapRotation;x&&(_.envMap.value=x,jr.copy(v),jr.x*=-1,jr.y*=-1,jr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),_.envMapRotation.value.setFromMatrix4(LP.makeRotationFromEuler(jr)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,y,x){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*y,_.scale.value=x*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function h(_,m,y){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){const y=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IP(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function u(y,x){let v=r[y.id];v===void 0&&(p(y),v=c(y),r[y.id]=v,y.addEventListener("dispose",_));const b=x.program;i.updateUBOMapping(y,b);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function c(y){const x=f();y.__bindingPointIndex=x;const v=n.createBuffer(),b=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,b,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],v=y.uniforms,b=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,A=v.length;w<A;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=R.length;M<S;M++){const D=R[M];if(h(D,w,M,b)===!0){const L=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let W=0;W<N.length;W++){const O=N[W],j=g(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,L+F,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,F),F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,x,v,b){const w=y.value,A=x+"_"+v;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const R=b[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return b[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function p(y){const x=y.uniforms;let v=0;const b=16;for(let A=0,R=x.length;A<R;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,D=M.length;S<D;S++){const L=M[S],N=Array.isArray(L.value)?L.value:[L.value];for(let F=0,W=N.length;F<W;F++){const O=N[F],j=g(O),H=v%b,$=H%j.boundary,U=H+$;v+=$,U!==0&&b-U<j.storage&&(v+=b-U),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=j.storage}}}const w=v%b;return w>0&&(v+=b-w),y.__size=v,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function _(y){const x=y.target;x.removeEventListener("dispose",_);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}class UP{constructor(e={}){const{canvas:t=D1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=si;let w=0,A=0,R=null,M=-1,S=null;const D=new Nt,L=new Nt;let N=null;const F=new je(0);let W=0,O=t.width,j=t.height,H=1,$=null,U=null;const de=new Nt(0,0,O,j),Me=new Nt(0,0,O,j);let ae=!1;const K=new Gd;let fe=!1,Ee=!1;const ye=new pt,Ne=new pt,Ke=new z,Oe=new Nt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function I(){return R===null?H:1}let T=i;function J(C,G){return t.getContext(C,G)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cd}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ue,!1),T===null){const G="webgl2";if(T=J(G,C),T===null)throw J(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ie,ne,q,le,te,se,oe,P,E,B,V,ee,Y,he,pe,xe,Ae,ce,Te,Be,Pe,ve,ze,k;function Se(){ie=new WR(T),ie.init(),ve=new wP(T,ie),ne=new FR(T,ie,e,ve),q=new EP(T,ie),ne.reverseDepthBuffer&&d&&q.buffers.depth.setReversed(!0),le=new jR(T),te=new fP,se=new TP(T,ie,q,te,ne,ve,le),oe=new kR(v),P=new GR(v),E=new Qw(T),ze=new NR(T,E),B=new XR(T,E,le,ze),V=new YR(T,B,E,le),Te=new $R(T,ne,se),xe=new BR(te),ee=new uP(v,oe,P,ie,ne,ze,xe),Y=new DP(v,te),he=new dP,pe=new xP(ie),ce=new UR(v,oe,P,q,V,h,l),Ae=new SP(v,V,ne),k=new IP(T,le,ne,q),Be=new OR(T,ie,le),Pe=new qR(T,ie,le),le.programs=ee.programs,v.capabilities=ne,v.extensions=ie,v.properties=te,v.renderLists=he,v.shadowMap=Ae,v.state=q,v.info=le}Se();const me=new PP(v,T);this.xr=me,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const C=ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(O,j,!1))},this.getSize=function(C){return C.set(O,j)},this.setSize=function(C,G,Z=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,j=G,t.width=Math.floor(C*H),t.height=Math.floor(G*H),Z===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(O*H,j*H).floor()},this.setDrawingBufferSize=function(C,G,Z){O=C,j=G,H=Z,t.width=Math.floor(C*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(de)},this.setViewport=function(C,G,Z,Q){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,G,Z,Q),q.viewport(D.copy(de).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,G,Z,Q){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,G,Z,Q),q.scissor(L.copy(Me).multiplyScalar(H).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(C){q.setScissorTest(ae=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,Z=!0){let Q=0;if(C){let X=!1;if(R!==null){const _e=R.texture.format;X=_e===Nd||_e===Ud||_e===Id}if(X){const _e=R.texture.type,Ce=_e===Ni||_e===xs||_e===wa||_e===Aa||_e===Pd||_e===Ld,Fe=ce.getClearColor(),De=ce.getClearAlpha(),Xe=Fe.r,qe=Fe.g,ke=Fe.b;Ce?(p[0]=Xe,p[1]=qe,p[2]=ke,p[3]=De,T.clearBufferuiv(T.COLOR,0,p)):(g[0]=Xe,g[1]=qe,g[2]=ke,g[3]=De,T.clearBufferiv(T.COLOR,0,g))}else Q|=T.COLOR_BUFFER_BIT}G&&(Q|=T.DEPTH_BUFFER_BIT),Z&&(Q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ce.dispose(),he.dispose(),pe.dispose(),te.dispose(),oe.dispose(),P.dispose(),V.dispose(),ze.dispose(),k.dispose(),ee.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ue),me.removeEventListener("sessionend",lt),Ft.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=le.autoReset,G=Ae.enabled,Z=Ae.autoUpdate,Q=Ae.needsUpdate,X=Ae.type;Se(),le.autoReset=C,Ae.enabled=G,Ae.autoUpdate=Z,Ae.needsUpdate=Q,Ae.type=X}function ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Le(C){const G=C.target;G.removeEventListener("dispose",Le),We(G)}function We(C){at(C),te.remove(C)}function at(C){const G=te.get(C).programs;G!==void 0&&(G.forEach(function(Z){ee.releaseProgram(Z)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Z,Q,X,_e){G===null&&(G=tt);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Fe=il(C,G,Z,Q,X);q.setMaterial(Q,Ce);let De=Z.index,Xe=1;if(Q.wireframe===!0){if(De=B.getWireframeAttribute(Z),De===void 0)return;Xe=2}const qe=Z.drawRange,ke=Z.attributes.position;let Ze=qe.start*Xe,ht=(qe.start+qe.count)*Xe;_e!==null&&(Ze=Math.max(Ze,_e.start*Xe),ht=Math.min(ht,(_e.start+_e.count)*Xe)),De!==null?(Ze=Math.max(Ze,0),ht=Math.min(ht,De.count)):ke!=null&&(Ze=Math.max(Ze,0),ht=Math.min(ht,ke.count));const Tt=ht-Ze;if(Tt<0||Tt===1/0)return;ze.setup(X,Q,Fe,Z,De);let Dt,it=Be;if(De!==null&&(Dt=E.get(De),it=Pe,it.setIndex(Dt)),X.isMesh)Q.wireframe===!0?(q.setLineWidth(Q.wireframeLinewidth*I()),it.setMode(T.LINES)):it.setMode(T.TRIANGLES);else if(X.isLine){let He=Q.linewidth;He===void 0&&(He=1),q.setLineWidth(He*I()),X.isLineSegments?it.setMode(T.LINES):X.isLineLoop?it.setMode(T.LINE_LOOP):it.setMode(T.LINE_STRIP)}else X.isPoints?it.setMode(T.POINTS):X.isSprite&&it.setMode(T.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))it.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const He=X._multiDrawStarts,Qt=X._multiDrawCounts,ct=X._multiDrawCount,di=De?E.get(De).bytesPerElement:1,As=te.get(Q).currentProgram.getUniforms();for(let Nn=0;Nn<ct;Nn++)As.setValue(T,"_gl_DrawID",Nn),it.render(He[Nn]/di,Qt[Nn])}else if(X.isInstancedMesh)it.renderInstances(Ze,Tt,X.count);else if(Z.isInstancedBufferGeometry){const He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Qt=Math.min(Z.instanceCount,He);it.renderInstances(Ze,Tt,Qt)}else it.render(Ze,Tt)};function et(C,G,Z){C.transparent===!0&&C.side===Jt&&C.forceSinglePass===!1?(C.side=Mn,C.needsUpdate=!0,lr(C,G,Z),C.side=Pr,C.needsUpdate=!0,lr(C,G,Z),C.side=Jt):lr(C,G,Z)}this.compile=function(C,G,Z=null){Z===null&&(Z=C),m=pe.get(Z),m.init(G),x.push(m),Z.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),C!==Z&&C.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const Q=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _e=X.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){const Fe=_e[Ce];et(Fe,Z,X),Q.add(Fe)}else et(_e,Z,X),Q.add(_e)}),m=x.pop(),Q},this.compileAsync=function(C,G,Z=null){const Q=this.compile(C,G,Z);return new Promise(X=>{function _e(){if(Q.forEach(function(Ce){te.get(Ce).currentProgram.isReady()&&Q.delete(Ce)}),Q.size===0){X(C);return}setTimeout(_e,10)}ie.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Un=null;function Kn(C){Un&&Un(C)}function Ue(){Ft.stop()}function lt(){Ft.start()}const Ft=new Pv;Ft.setAnimationLoop(Kn),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){Un=C,me.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},me.addEventListener("sessionstart",Ue),me.addEventListener("sessionend",lt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(G),G=me.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,G,R),m=pe.get(C,x.length),m.init(G),x.push(m),Ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(Ne),Ee=this.localClippingEnabled,fe=xe.init(this.clippingPlanes,Ee),_=he.get(C,y.length),_.init(),y.push(_),me.enabled===!0&&me.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&hn(_e,G,-1/0,v.sortObjects)}hn(C,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,U),nt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,nt&&ce.addToRenderList(_,C),this.info.render.frame++,fe===!0&&xe.beginShadows();const Z=m.state.shadowsArray;Ae.render(Z,C,G),fe===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=_.opaque,X=_.transmissive;if(m.setupLights(),G.isArrayCamera){const _e=G.cameras;if(X.length>0)for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const De=_e[Ce];dn(Q,X,C,De)}nt&&ce.render(C);for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const De=_e[Ce];Bt(_,C,De,De.viewport)}}else X.length>0&&dn(Q,X,C,G),nt&&ce.render(C),Bt(_,C,G);R!==null&&A===0&&(se.updateMultisampleRenderTarget(R),se.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,G),ze.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(m=x[x.length-1],fe===!0&&xe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?_=y[y.length-1]:_=null};function hn(C,G,Z,Q){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){Q&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ne);const Ce=V.update(C),Fe=C.material;Fe.visible&&_.push(C,Ce,Fe,Z,Oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const Ce=V.update(C),Fe=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Oe.copy(Ce.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(Ne)),Array.isArray(Fe)){const De=Ce.groups;for(let Xe=0,qe=De.length;Xe<qe;Xe++){const ke=De[Xe],Ze=Fe[ke.materialIndex];Ze&&Ze.visible&&_.push(C,Ce,Ze,Z,Oe.z,ke)}}else Fe.visible&&_.push(C,Ce,Fe,Z,Oe.z,null)}}const _e=C.children;for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++)hn(_e[Ce],G,Z,Q)}function Bt(C,G,Z,Q){const X=C.opaque,_e=C.transmissive,Ce=C.transparent;m.setupLightsView(Z),fe===!0&&xe.setGlobalState(v.clippingPlanes,Z),Q&&q.viewport(D.copy(Q)),X.length>0&&Yt(X,G,Z),_e.length>0&&Yt(_e,G,Z),Ce.length>0&&Yt(Ce,G,Z),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function dn(C,G,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new ys(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Ka:Ni,minFilter:as,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const _e=m.state.transmissionRenderTarget[Q.id],Ce=Q.viewport||D;_e.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const Fe=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(F),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),nt&&ce.render(Z);const De=v.toneMapping;v.toneMapping=Er;const Xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),fe===!0&&xe.setGlobalState(v.clippingPlanes,Q),Yt(C,Z,Q),se.updateMultisampleRenderTarget(_e),se.updateRenderTargetMipmap(_e),ie.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ke=0,Ze=G.length;ke<Ze;ke++){const ht=G[ke],Tt=ht.object,Dt=ht.geometry,it=ht.material,He=ht.group;if(it.side===Jt&&Tt.layers.test(Q.layers)){const Qt=it.side;it.side=Mn,it.needsUpdate=!0,Or(Tt,Z,Q,Dt,it,He),it.side=Qt,it.needsUpdate=!0,qe=!0}}qe===!0&&(se.updateMultisampleRenderTarget(_e),se.updateRenderTargetMipmap(_e))}v.setRenderTarget(Fe),v.setClearColor(F,W),Xe!==void 0&&(Q.viewport=Xe),v.toneMapping=De}function Yt(C,G,Z){const Q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,_e=C.length;X<_e;X++){const Ce=C[X],Fe=Ce.object,De=Ce.geometry,Xe=Ce.group;let qe=Ce.material;qe.allowOverride===!0&&Q!==null&&(qe=Q),Fe.layers.test(Z.layers)&&Or(Fe,G,Z,De,qe,Xe)}}function Or(C,G,Z,Q,X,_e){C.onBeforeRender(v,G,Z,Q,X,_e),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(v,G,Z,Q,C,_e),X.transparent===!0&&X.side===Jt&&X.forceSinglePass===!1?(X.side=Mn,X.needsUpdate=!0,v.renderBufferDirect(Z,G,Q,X,C,_e),X.side=Pr,X.needsUpdate=!0,v.renderBufferDirect(Z,G,Q,X,C,_e),X.side=Jt):v.renderBufferDirect(Z,G,Q,X,C,_e),C.onAfterRender(v,G,Z,Q,X,_e)}function lr(C,G,Z){G.isScene!==!0&&(G=tt);const Q=te.get(C),X=m.state.lights,_e=m.state.shadowsArray,Ce=X.state.version,Fe=ee.getParameters(C,X.state,_e,G,Z),De=ee.getProgramCacheKey(Fe);let Xe=Q.programs;Q.environment=C.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(C.isMeshStandardMaterial?P:oe).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",Le),Xe=new Map,Q.programs=Xe);let qe=Xe.get(De);if(qe!==void 0){if(Q.currentProgram===qe&&Q.lightsStateVersion===Ce)return nl(C,Fe),qe}else Fe.uniforms=ee.getUniforms(C),C.onBeforeCompile(Fe,v),qe=ee.acquireProgram(Fe,De),Xe.set(De,qe),Q.uniforms=Fe.uniforms;const ke=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=xe.uniform),nl(C,Fe),Q.needsLights=Oo(C),Q.lightsStateVersion=Ce,Q.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMap.value=X.state.directionalShadowMap,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotShadowMap.value=X.state.spotShadowMap,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMap.value=X.state.pointShadowMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=qe,Q.uniformsList=null,qe}function No(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=tc.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function nl(C,G){const Z=te.get(C);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function il(C,G,Z,Q,X){G.isScene!==!0&&(G=tt),se.resetTextureUnits();const _e=G.fog,Ce=Q.isMeshStandardMaterial?G.environment:null,Fe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xo,De=(Q.isMeshStandardMaterial?P:oe).get(Q.envMap||Ce),Xe=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!Z.morphAttributes.position,Ze=!!Z.morphAttributes.normal,ht=!!Z.morphAttributes.color;let Tt=Er;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const Dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,it=Dt!==void 0?Dt.length:0,He=te.get(Q),Qt=m.state.lights;if(fe===!0&&(Ee===!0||C!==S)){const pn=C===S&&Q.id===M;xe.setState(Q,C,pn)}let ct=!1;Q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Qt.state.version||He.outputColorSpace!==Fe||X.isBatchedMesh&&He.batching===!1||!X.isBatchedMesh&&He.batching===!0||X.isBatchedMesh&&He.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&He.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||X.isInstancedMesh&&He.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&He.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&He.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&He.instancingMorph===!1&&X.morphTexture!==null||He.envMap!==De||Q.fog===!0&&He.fog!==_e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==xe.numPlanes||He.numIntersection!==xe.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==qe||He.morphTargets!==ke||He.morphNormals!==Ze||He.morphColors!==ht||He.toneMapping!==Tt||He.morphTargetsCount!==it)&&(ct=!0):(ct=!0,He.__version=Q.version);let di=He.currentProgram;ct===!0&&(di=lr(Q,G,X));let As=!1,Nn=!1,Fo=!1;const bt=di.getUniforms(),Jn=He.uniforms;if(q.useProgram(di.program)&&(As=!0,Nn=!0,Fo=!0),Q.id!==M&&(M=Q.id,Nn=!0),As||S!==C){q.buffers.depth.getReversed()?(ye.copy(C.projectionMatrix),U1(ye),N1(ye),bt.setValue(T,"projectionMatrix",ye)):bt.setValue(T,"projectionMatrix",C.projectionMatrix),bt.setValue(T,"viewMatrix",C.matrixWorldInverse);const Tn=bt.map.cameraPosition;Tn!==void 0&&Tn.setValue(T,Ke.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&bt.setValue(T,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&bt.setValue(T,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Nn=!0,Fo=!0)}if(X.isSkinnedMesh){bt.setOptional(T,X,"bindMatrix"),bt.setOptional(T,X,"bindMatrixInverse");const pn=X.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),bt.setValue(T,"boneTexture",pn.boneTexture,se))}X.isBatchedMesh&&(bt.setOptional(T,X,"batchingTexture"),bt.setValue(T,"batchingTexture",X._matricesTexture,se),bt.setOptional(T,X,"batchingIdTexture"),bt.setValue(T,"batchingIdTexture",X._indirectTexture,se),bt.setOptional(T,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(T,"batchingColorTexture",X._colorsTexture,se));const Zn=Z.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Te.update(X,Z,di),(Nn||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,bt.setValue(T,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Jn.envMap.value=De,Jn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(Jn.envMapIntensity.value=G.environmentIntensity),Nn&&(bt.setValue(T,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&St(Jn,Fo),_e&&Q.fog===!0&&Y.refreshFogUniforms(Jn,_e),Y.refreshMaterialUniforms(Jn,Q,H,j,m.state.transmissionRenderTarget[C.id]),tc.upload(T,No(He),Jn,se)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(tc.upload(T,No(He),Jn,se),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&bt.setValue(T,"center",X.center),bt.setValue(T,"modelViewMatrix",X.modelViewMatrix),bt.setValue(T,"normalMatrix",X.normalMatrix),bt.setValue(T,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const pn=Q.uniformsGroups;for(let Tn=0,su=pn.length;Tn<su;Tn++){const Fr=pn[Tn];k.update(Fr,di),k.bind(Fr,di)}}return di}function St(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Oo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,G,Z){const Q=te.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),te.get(C.texture).__webglTexture=G,te.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const Z=te.get(C);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const hi=T.createFramebuffer();this.setRenderTarget=function(C,G=0,Z=0){R=C,w=G,A=Z;let Q=!0,X=null,_e=!1,Ce=!1;if(C){const De=te.get(C);if(De.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(T.FRAMEBUFFER,null),Q=!1;else if(De.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(De.__hasExternalTextures)se.rebindTextures(C,te.get(C.texture).__webglTexture,te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(De.__boundDepthTexture!==ke){if(ke!==null&&te.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const qe=te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?X=qe[G][Z]:X=qe[G],_e=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?X=te.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?X=qe[Z]:X=qe,D.copy(C.viewport),L.copy(C.scissor),N=C.scissorTest}else D.copy(de).multiplyScalar(H).floor(),L.copy(Me).multiplyScalar(H).floor(),N=ae;if(Z!==0&&(X=hi),q.bindFramebuffer(T.FRAMEBUFFER,X)&&Q&&q.drawBuffers(C,X),q.viewport(D),q.scissor(L),q.setScissorTest(N),_e){const De=te.get(C.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,Z)}else if(Ce){const De=te.get(C.texture),Xe=G;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,De.__webglTexture,Z,Xe)}else if(C!==null&&Z!==0){const De=te.get(C.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,De.__webglTexture,Z)}M=-1},this.readRenderTargetPixels=function(C,G,Z,Q,X,_e,Ce,Fe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){q.bindFramebuffer(T.FRAMEBUFFER,De);try{const Xe=C.textures[Fe],qe=Xe.format,ke=Xe.type;if(!ne.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Q&&Z>=0&&Z<=C.height-X&&(C.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Fe),T.readPixels(G,Z,Q,X,ve.convert(qe),ve.convert(ke),_e))}finally{const Xe=R!==null?te.get(R).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,G,Z,Q,X,_e,Ce,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(G>=0&&G<=C.width-Q&&Z>=0&&Z<=C.height-X){q.bindFramebuffer(T.FRAMEBUFFER,De);const Xe=C.textures[Fe],qe=Xe.format,ke=Xe.type;if(!ne.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ze),T.bufferData(T.PIXEL_PACK_BUFFER,_e.byteLength,T.STREAM_READ),C.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Fe),T.readPixels(G,Z,Q,X,ve.convert(qe),ve.convert(ke),0);const ht=R!==null?te.get(R).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,ht);const Tt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await I1(T,Tt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,_e),T.deleteBuffer(Ze),T.deleteSync(Tt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,Z=0){const Q=Math.pow(2,-Z),X=Math.floor(C.image.width*Q),_e=Math.floor(C.image.height*Q),Ce=G!==null?G.x:0,Fe=G!==null?G.y:0;se.setTexture2D(C,0),T.copyTexSubImage2D(T.TEXTURE_2D,Z,0,0,Ce,Fe,X,_e),q.unbindTexture()};const rl=T.createFramebuffer(),sl=T.createFramebuffer();this.copyTextureToTexture=function(C,G,Z=null,Q=null,X=0,_e=null){_e===null&&(X!==0?(lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=X,X=0):_e=0);let Ce,Fe,De,Xe,qe,ke,Ze,ht,Tt;const Dt=C.isCompressedTexture?C.mipmaps[_e]:C.image;if(Z!==null)Ce=Z.max.x-Z.min.x,Fe=Z.max.y-Z.min.y,De=Z.isBox3?Z.max.z-Z.min.z:1,Xe=Z.min.x,qe=Z.min.y,ke=Z.isBox3?Z.min.z:0;else{const Zn=Math.pow(2,-X);Ce=Math.floor(Dt.width*Zn),Fe=Math.floor(Dt.height*Zn),C.isDataArrayTexture?De=Dt.depth:C.isData3DTexture?De=Math.floor(Dt.depth*Zn):De=1,Xe=0,qe=0,ke=0}Q!==null?(Ze=Q.x,ht=Q.y,Tt=Q.z):(Ze=0,ht=0,Tt=0);const it=ve.convert(G.format),He=ve.convert(G.type);let Qt;G.isData3DTexture?(se.setTexture3D(G,0),Qt=T.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(se.setTexture2DArray(G,0),Qt=T.TEXTURE_2D_ARRAY):(se.setTexture2D(G,0),Qt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);const ct=T.getParameter(T.UNPACK_ROW_LENGTH),di=T.getParameter(T.UNPACK_IMAGE_HEIGHT),As=T.getParameter(T.UNPACK_SKIP_PIXELS),Nn=T.getParameter(T.UNPACK_SKIP_ROWS),Fo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Dt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Dt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Xe),T.pixelStorei(T.UNPACK_SKIP_ROWS,qe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ke);const bt=C.isDataArrayTexture||C.isData3DTexture,Jn=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const Zn=te.get(C),pn=te.get(G),Tn=te.get(Zn.__renderTarget),su=te.get(pn.__renderTarget);q.bindFramebuffer(T.READ_FRAMEBUFFER,Tn.__webglFramebuffer),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,su.__webglFramebuffer);for(let Fr=0;Fr<De;Fr++)bt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,te.get(C).__webglTexture,X,ke+Fr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,te.get(G).__webglTexture,_e,Tt+Fr)),T.blitFramebuffer(Xe,qe,Ce,Fe,Ze,ht,Ce,Fe,T.DEPTH_BUFFER_BIT,T.NEAREST);q.bindFramebuffer(T.READ_FRAMEBUFFER,null),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||te.has(C)){const Zn=te.get(C),pn=te.get(G);q.bindFramebuffer(T.READ_FRAMEBUFFER,rl),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,sl);for(let Tn=0;Tn<De;Tn++)bt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Zn.__webglTexture,X,ke+Tn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Zn.__webglTexture,X),Jn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,pn.__webglTexture,_e,Tt+Tn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,pn.__webglTexture,_e),X!==0?T.blitFramebuffer(Xe,qe,Ce,Fe,Ze,ht,Ce,Fe,T.COLOR_BUFFER_BIT,T.NEAREST):Jn?T.copyTexSubImage3D(Qt,_e,Ze,ht,Tt+Tn,Xe,qe,Ce,Fe):T.copyTexSubImage2D(Qt,_e,Ze,ht,Xe,qe,Ce,Fe);q.bindFramebuffer(T.READ_FRAMEBUFFER,null),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Jn?C.isDataTexture||C.isData3DTexture?T.texSubImage3D(Qt,_e,Ze,ht,Tt,Ce,Fe,De,it,He,Dt.data):G.isCompressedArrayTexture?T.compressedTexSubImage3D(Qt,_e,Ze,ht,Tt,Ce,Fe,De,it,Dt.data):T.texSubImage3D(Qt,_e,Ze,ht,Tt,Ce,Fe,De,it,He,Dt):C.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,_e,Ze,ht,Ce,Fe,it,He,Dt.data):C.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,_e,Ze,ht,Dt.width,Dt.height,it,Dt.data):T.texSubImage2D(T.TEXTURE_2D,_e,Ze,ht,Ce,Fe,it,He,Dt);T.pixelStorei(T.UNPACK_ROW_LENGTH,ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,di),T.pixelStorei(T.UNPACK_SKIP_PIXELS,As),T.pixelStorei(T.UNPACK_SKIP_ROWS,Nn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Fo),_e===0&&G.generateMipmaps&&T.generateMipmap(Qt),q.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Z=null,Q=null,X=0){return lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,G,Z,Q,X)},this.initRenderTarget=function(C){te.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,q.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const Nv=n=>Math.min(1,Math.max(0,n)),es=n=>{const e=Nv(n);return e*e*(3-2*e)},of=(n,e,t)=>n.map((i,r)=>i+(e[r]-i)*t);function _r(n){return Math.sin(n*.13)*1.4+1}function tu(n){return _r(n)-es((-n-126)/14)*23}function NP(n,e={x:0,y:0}){const t=Nv(n/.58),i=es(t/.14),r=12-es(t)*140;let s=[_r(r)*i,3.1,r],o=[_r(r-12)*i,3.7-i*.6,r-12];if(n>.58&&n<=.7){const u=es((n-.58)/.12);s=of([_r(-128),3.1,-128],[0,3.8,-137],u),o=of([_r(-140),3.1,-140],[0,4,-150],u)}else if(n>.7&&n<=.83){const u=es((n-.7)/.13);s=of([0,3.8,-137],[0,8.5,-123],u),o=[0,4,-150]}else if(n>.83){const u=es((n-.83)/.17)*Math.PI*1.5;s=[Math.sin(u)*27,8.5+Math.sin(u)*.8,-150+Math.cos(u)*27],o=[0,4,-150]}s[0]+=e.x*(1.6-i*1.3),s[1]-=e.y*(.65-i*.47),o[0]+=e.x*(2-i*1.6),o[1]-=e.y*.2;const l=(_r(r-4)-_r(r+4))*.035*i*(1-es((n-.52)/.1));return{posicao:s,olhar:o,tunel:t,alinhamento:i,inclinacao:l}}function OP(n,e,t,i){let r=127;const s=()=>(r=r*16807%2147483647,(r-1)/2147483646),o=new Jo;o.position.set(0,0,-150),n.add(o);const a=document.createElement("canvas");a.width=a.height=256;const l=a.getContext("2d"),u=l.createRadialGradient(128,128,40,128,128,128);u.addColorStop(0,"#fff"),u.addColorStop(.62,"#fff"),u.addColorStop(1,"#000"),l.fillStyle=u,l.fillRect(0,0,256,256);const c=new Wt(e(new Wd(22,80)),e(new zn({color:"#658244",roughness:1,transparent:!0,depthWrite:!1,alphaMap:e(new fw(a))})));c.rotation.x=-Math.PI/2,c.position.y=-.12,o.add(c);const f=e(new zn({color:"#5b4933",roughness:1}));function d(L,N,F,W){const O=new z().subVectors(N,L),j=e(new Mo(W,F,O.length(),9)),H=new Wt(j,f);H.position.copy(L).add(N).multiplyScalar(.5),H.quaternion.setFromUnitVectors(new z(0,1,0),O.normalize()),o.add(H)}d(new z(0,0,0),new z(.25,5.6,.1),.65,.2);const h=[];for(let L=0;L<9;L++){const N=L/9*Math.PI*2,F=new z(Math.cos(N)*(2.6+s()),6+s()*2,Math.sin(N)*(2.7+s()));d(new z(.15,3.2+s()*1.8,.05),F,.25,.055),h.push(F),d(F.clone().multiplyScalar(.7).add(new z(0,1,0)),F.clone().add(new z(.7,1,.5)),.1,.025)}h.push(new z(0,8,0));const p=e(new Qa(1,1)),g=e(new zn({color:"#9dbb57",roughness:.88,flatShading:!0}));g.onBeforeCompile=L=>{L.uniforms.tempo=t,L.uniforms.vento=i,L.vertexShader=`uniform float tempo; uniform float vento;
`+L.vertexShader,L.vertexShader=L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float fase=instanceMatrix[3].x*1.7+instanceMatrix[3].z*1.3+instanceMatrix[3].y;
      transformed.x+=sin(tempo*1.3+fase)*.1+vento*.14;
      transformed.y+=cos(tempo*1.1+fase)*.06;`)};const _=1150,m=e(new wn(p,g,_)),y=new Mt,x=new je;for(let L=0;L<_;L++){const N=h[L%h.length],F=s()*Math.PI*2,W=Math.sqrt(s())*2.2;y.position.set(N.x+Math.cos(F)*W,N.y+(s()-.5)*2,N.z+Math.sin(F)*W),y.rotation.set(s()*3,s()*3,s()*3);const O=.2+s()*.42;y.scale.set(O,O*.72,O),y.updateMatrix(),m.setMatrixAt(L,y.matrix),x.setHSL(.22+s()*.075,.37+s()*.2,.16+s()*.14+(y.position.y-5)*.03),m.setColorAt(L,x)}o.add(m);const v=window.innerWidth<650?850:1600,b=e(new el(1,7,4)),w=e(new zn({color:"#f5f8df",roughness:.65,side:Jt}));w.onBeforeCompile=L=>{L.uniforms.tempo=t,L.uniforms.vento=i,L.vertexShader=`uniform float tempo; uniform float vento;
`+L.vertexShader,L.vertexShader=L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      transformed.x+=sin(tempo*1.2+instanceMatrix[3].x+instanceMatrix[3].z)*.07+vento*.09;`)};const A=e(new wn(b,w,v*6)),R=e(new wn(b,e(new zn({color:"#e4c853",roughness:.75})),v)),M=e(new wn(e(new Mo(.009,.016,1,4)),e(new zn({color:"#31532c",roughness:1})),v));for(let L=0;L<v;L++){let N,F;do{const O=s()*Math.PI*2,j=3+Math.sqrt(s())*9;N=Math.cos(O)*j,F=Math.sin(O)*j}while(Math.abs(N-tu(F-150))<2.8+Math.sin((F-150)*.09)*.8);const W=.45+s()*.5;y.position.set(N,W/2,F),y.rotation.set(0,0,0),y.scale.set(1,W,1),y.updateMatrix(),M.setMatrixAt(L,y.matrix),y.position.y=W,y.scale.set(.1,.07,.1),y.updateMatrix(),R.setMatrixAt(L,y.matrix);for(let O=0;O<6;O++){const j=O/6*Math.PI*2;y.position.set(N+Math.cos(j)*.18,W,F+Math.sin(j)*.18),y.rotation.set(0,-j,0),y.scale.set(.26,.045,.08),y.updateMatrix(),A.setMatrixAt(L*6+O,y.matrix),x.set(["#fffdf2","#fffdf2","#f4d27b","#fffdf2","#eab4a6","#d9d4ed"][L%6]),A.setColorAt(L*6+O,x)}}o.add(M,R,A);const S=e(new wn(b,w,240)),D=Array.from({length:240},()=>({angulo:s()*Math.PI*2,raio:4+s()*3.5,altura:1+s()*3,escala:.07+s()*.07}));return S.frustumCulled=!1,o.add(S),{atualizar(L,N){o.visible=N>.42,o.visible&&(D.forEach((F,W)=>{const O=F.angulo+L*.12;y.position.set(Math.cos(O)*F.raio,F.altura+Math.sin(L*.6+O)*.4,Math.sin(O)*F.raio),y.rotation.set(O+L*.3,O,O*.5),y.scale.set(F.escala,F.escala*.2,F.escala*.55),y.updateMatrix(),S.setMatrixAt(W,y.matrix)}),S.instanceMatrix.needsUpdate=!0,m.rotation.y=Math.sin(L*.3)*.012)}}}function FP(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new qt;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,h,c),u+=h}}if(t){let c=0;const f=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let p=0;p<h.count;++p)f.push(h.getX(p)+c);c+=n[d].attributes.position.count}l.setIndex(f)}for(const c in s){const f=Rg(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){const h=[];for(let g=0;g<o[c].length;++g)h.push(o[c][g][d]);const p=Rg(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(p)}}return l}function Rg(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const o=new e(s),a=new Sn(o,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=l/t;for(let d=0,h=c.count;d<h;d++)for(let p=0;p<t;p++){const g=c.getComponent(d,p);a.setComponent(d+f,p,g)}}else o.set(c.array,l);l+=c.count*t}return r!==void 0&&(a.gpuType=r),a}const ea=[{em:0,topo:"#6fa6bd",horizonte:"#e3e4c4",nevoa:"#c9d6b4",sol:"#fff1c9",luzSol:3.3,luzCeu:2.1,alturaSol:.3},{em:.5,topo:"#5f93b3",horizonte:"#f4d59a",nevoa:"#e2c994",sol:"#ffd98e",luzSol:3.5,luzCeu:1.8,alturaSol:.16},{em:.8,topo:"#4f7196",horizonte:"#f3c088",nevoa:"#b9a77c",sol:"#ffc27e",luzSol:3.1,luzCeu:1.6,alturaSol:.09},{em:1,topo:"#3a4f78",horizonte:"#eda56f",nevoa:"#7f7a60",sol:"#ffb27a",luzSol:2.5,luzCeu:1.4,alturaSol:.04}];ea.forEach(n=>{for(const e of["topo","horizonte","nevoa","sol"])n[e]=new je(n[e])});function Uo(n){let e=n;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Ov(n){return 2.5+Math.sin(n*.09)*.8}function BP(n,e,t,i){const r=e(new En({side:Mn,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{tempo:t,topo:i.topo,horizonte:i.horizonte,corSol:i.corSol,direcaoSol:i.direcaoSol},vertexShader:`varying vec3 direcao;
        void main(){ direcao=normalize(position); vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position=p.xyww; }`,fragmentShader:`uniform float tempo; uniform vec3 topo; uniform vec3 horizonte; uniform vec3 corSol; uniform vec3 direcaoSol; varying vec3 direcao;
        float ruido(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
          float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453);
          float b=fract(sin(dot(i+vec2(1.,0.),vec2(127.1,311.7)))*43758.5453);
          float c=fract(sin(dot(i+vec2(0.,1.),vec2(127.1,311.7)))*43758.5453);
          float d=fract(sin(dot(i+vec2(1.,1.),vec2(127.1,311.7)))*43758.5453);
          return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
        float nuvens(vec2 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=ruido(p)*a; p=p*2.03+vec2(1.7,.4); a*=.5; } return v; }
        void main(){
          vec3 d=normalize(direcao);
          float altura=clamp(d.y,0.,1.);
          vec3 cor=mix(horizonte,topo,pow(altura,.55));
          float alinhado=max(dot(d,normalize(direcaoSol)),0.);
          cor+=corSol*pow(alinhado,5.)*.22;
          cor+=corSol*pow(alinhado,60.)*.55;
          cor+=corSol*smoothstep(.9994,.9998,alinhado)*2.4;
          vec2 plano=d.xz/(d.y+.16);
          float massa=nuvens(plano*1.15+vec2(tempo*.012,tempo*.004));
          float nuvem=smoothstep(.5,.78,massa)*smoothstep(.015,.2,d.y);
          vec3 corNuvem=mix(horizonte*1.1,corSol*1.15,pow(alinhado,3.)*.8+.15);
          cor=mix(cor,corNuvem,nuvem*.72);
          gl_FragColor=vec4(cor,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`})),s=new Wt(e(new el(1,32,20)),r);return s.scale.setScalar(120),s.frustumCulled=!1,s.renderOrder=-10,n.add(s),s}function kP(n,e,t,i){const r=Uo(4021),o=window.innerWidth<650?170:300,a=[];let l=0;for(;a.length<o&&l++<12e3;){const w=(r()<.5?-1:1)*(8+Math.pow(r(),1.4)*52),A=8-r()*225;Math.abs(w-tu(A))<Ov(A)+4||Math.hypot(w,A+150)<37||a.push({x:w,z:A})}const u=[];for(let b=0;b<3;b++){const w=new Xd(1.25-b*.3,2.3,7,1);w.translate(0,2.3+b*1.35,0),u.push(w)}const c=e(FP(u));u.forEach(b=>b.dispose());const f=e(new Qa(1.5,1));f.scale(1,1.15,1),f.translate(0,3.5,0);const d=e(new Mo(.13,.24,2.4,6));d.translate(0,1.15,0);const h=e(new zn({color:"#ffffff",roughness:.92,flatShading:!0}));h.onBeforeCompile=b=>{b.uniforms.tempo=t,b.uniforms.vento=i,b.vertexShader=`uniform float tempo; uniform float vento;
`+b.vertexShader,b.vertexShader=b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float fase=instanceMatrix[3].x*.31+instanceMatrix[3].z*.23;
      float curva=position.y*position.y*.006;
      transformed.x+=(sin(tempo*.9+fase)+vento*1.6)*curva;
      transformed.z+=cos(tempo*.7+fase)*curva*.6;`)};const p=e(new zn({color:"#3f3226",roughness:1})),g=Math.ceil(a.length*.62),_=e(new wn(c,h,g)),m=e(new wn(f,h,a.length-g)),y=e(new wn(d,p,a.length)),x=new Mt,v=new je;a.forEach((b,w)=>{const A=1.1+r()*1.5;x.position.set(b.x,-.16,b.z),x.rotation.set(0,r()*Math.PI*2,0),x.scale.set(A,A*(.95+r()*.5),A),x.updateMatrix(),y.setMatrixAt(w,x.matrix),w<g?(_.setMatrixAt(w,x.matrix),v.setHSL(.33+r()*.06,.28+r()*.16,.14+r()*.09),_.setColorAt(w,v)):(m.setMatrixAt(w-g,x.matrix),v.setHSL(.2+r()*.09,.35+r()*.2,.2+r()*.13),m.setColorAt(w-g,v))}),n.add(_,m,y)}function zP(n,e){const t=Uo(7717),i=e(new Qa(1,1)),r=i.attributes.position;for(let u=0;u<r.count;u++){const c=new z().fromBufferAttribute(r,u),f=1+Math.sin(c.x*5.1+c.y*3.3)*.13+Math.cos(c.z*4.3)*.11;r.setXYZ(u,c.x*f,c.y*f*.68,c.z*f)}i.computeVertexNormals();const s=190,o=e(new wn(i,e(new zn({color:"#ffffff",roughness:.96,flatShading:!0})),s)),a=new Mt,l=new je;for(let u=0;u<s;u++){const c=14-t()*150,f=t()<.5?-1:1,d=u%7===0,h=tu(c)+f*(d?t()*1.6:Ov(c)+t()*.7),p=d?.1+t()*.2:.16+t()*.5;a.position.set(h,0,c),a.rotation.set(t()*.5,t()*6.28,t()*.5),a.scale.set(p*(1+t()*.7),p,p),a.updateMatrix(),o.setMatrixAt(u,a.matrix),l.setHSL(.2+t()*.1,.07+t()*.09,.26+t()*.24),o.setColorAt(u,l)}n.add(o)}function HP(n,e,t,i){const r=e(new En({transparent:!0,depthWrite:!1,blending:Ec,side:Jt,fog:!1,uniforms:{tempo:t,corSol:i,intensidade:{value:.3}},vertexShader:`varying vec2 faixa; varying float variacao;
        void main(){ faixa=uv; variacao=instanceMatrix[3].z; gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.); }`,fragmentShader:`uniform float tempo; uniform vec3 corSol; uniform float intensidade; varying vec2 faixa; varying float variacao;
        void main(){
          float lados=pow(sin(faixa.x*3.14159),2.);
          float queda=smoothstep(0.,.3,faixa.y)*(1.-smoothstep(.45,1.,faixa.y));
          float pulso=.72+.28*sin(tempo*.4+variacao);
          gl_FragColor=vec4(corSol,lados*queda*pulso*intensidade);
        }`})),s=16,o=e(new wn(e(new Tr(1,1)),r,s)),a=Uo(3301),l=new Mt;for(let u=0;u<s;u++){const c=2-u*11-a()*6,f=u%2?-1:1;l.position.set(f*(5+a()*9),10,c),l.rotation.set(0,.5+a()*.3,f*.32),l.scale.set(3+a()*3.5,26,1),l.updateMatrix(),o.setMatrixAt(u,l.matrix)}return o.frustumCulled=!1,n.add(o),r.uniforms.intensidade}function VP(n,e,t){const i=e(new qt);i.setAttribute("position",new xt([0,0,.26,0,0,-.2,-1,0,-.06,0,0,.26,1,0,-.06,0,0,-.2],3));const r=e(new En({side:Jt,uniforms:{tempo:t,cor:{value:new je("#1c2420")}},vertexShader:`uniform float tempo;
        void main(){ vec3 p=position; float fase=instanceMatrix[3].x*2.3+instanceMatrix[3].y*1.7;
          p.y+=abs(position.x)*sin(tempo*7.+fase)*.55;
          gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(p,1.); }`,fragmentShader:"uniform vec3 cor; void main(){ gl_FragColor=vec4(cor,1.); }"})),s=22,o=new wn(i,r,s);o.frustumCulled=!1,o.instanceMatrix.setUsage(Od),n.add(o);const a=Uo(9151),l=Array.from({length:s},(c,f)=>({x:(f%2?-1:1)*Math.ceil(f/2)*(1.5+a()),y:(a()-.5)*3,z:Math.ceil(f/2)*(1.3+a()),fase:a()*6.28,escala:.28+a()*.2})),u=new Mt;return(c,f)=>{const d=c*.045%1,h=new z,p=new z;f.getWorldDirection(p),p.y=0,p.normalize(),h.crossVectors(p,f.up);const g=f.position.clone().addScaledVector(p,62).addScaledVector(h,(d-.5)*150);g.y=19+Math.sin(c*.2)*2.5;const _=Math.atan2(-h.x,-h.z);l.forEach((m,y)=>{u.position.copy(g).addScaledVector(h,-m.z*1.3).addScaledVector(p,m.x),u.position.y+=m.y+Math.sin(c*.8+m.fase)*.4,u.rotation.set(0,_,0),u.scale.setScalar(m.escala),u.updateMatrix(),o.setMatrixAt(y,u.matrix)}),o.instanceMatrix.needsUpdate=!0}}function GP(n,e,t){const i=Uo(5519),r=340,s=new Float32Array(r*3),o=new Float32Array(r);for(let c=0;c<r;c++){const f=i()*Math.PI*2,d=3+Math.sqrt(i())*26;s[c*3]=Math.cos(f)*d,s[c*3+1]=.4+i()*5.5,s[c*3+2]=-150+Math.sin(f)*d,o[c]=i()*6.28}const a=e(new qt);a.setAttribute("position",new Sn(s,3)),a.setAttribute("fase",new Sn(o,1));const l=e(new En({transparent:!0,depthWrite:!1,blending:Ec,fog:!1,uniforms:{tempo:t,intensidade:{value:0},escala:{value:window.devicePixelRatio||1}},vertexShader:`uniform float tempo; uniform float escala; attribute float fase; varying float brilho;
        void main(){ vec3 p=position;
          p.x+=sin(tempo*.5+fase*3.)*.7; p.y+=sin(tempo*.8+fase)*.45; p.z+=cos(tempo*.4+fase*2.)*.7;
          brilho=pow(.5+.5*sin(tempo*1.9+fase*5.),3.);
          vec4 visao=modelViewMatrix*vec4(p,1.);
          gl_PointSize=escala*(18.+brilho*26.)*(14./max(1.,-visao.z));
          gl_Position=projectionMatrix*visao; }`,fragmentShader:`uniform float intensidade; varying float brilho;
        void main(){ float d=length(gl_PointCoord-.5); float halo=pow(max(0.,1.-d*2.),2.2);
          gl_FragColor=vec4(vec3(1.,.9,.42),halo*(.25+brilho*.75)*intensidade); }`})),u=new _v(a,l);return u.frustumCulled=!1,n.add(u),{pontos:u,intensidade:l.uniforms.intensidade}}function WP(n,e,t){const i=e(new qt);i.setAttribute("position",new xt([0,0,.5,0,0,-.5,1,0,.1,0,0,.5,-1,0,.1,0,0,-.5],3));const r=e(new En({side:Jt,uniforms:{tempo:t},vertexShader:`uniform float tempo; varying float tom;
        void main(){ vec3 p=position; float fase=instanceMatrix[3].x*3.1+instanceMatrix[3].z*1.3;
          p.y+=abs(position.x)*sin(tempo*15.+fase)*.8; tom=fract(fase*.37);
          gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(p,1.); }`,fragmentShader:`varying float tom;
        void main(){ vec3 a=vec3(.96,.55,.13), b=vec3(.97,.93,.78); gl_FragColor=vec4(mix(a,b,step(.55,tom)),1.);
          #include <colorspace_fragment>
        }`})),s=26,o=new wn(i,r,s);o.frustumCulled=!1,o.instanceMatrix.setUsage(Od),n.add(o);const a=Uo(6143),l=Array.from({length:s},()=>({angulo:a()*6.28,raio:4+a()*9,altura:.9+a()*1.8,ritmo:.15+a()*.25,escala:.09+a()*.07})),u=new Mt;return(c,f)=>{o.visible=f,f&&(l.forEach((d,h)=>{const p=d.angulo+c*d.ritmo,g=Math.sin(c*.9+d.angulo*3)*1.4;u.position.set(Math.cos(p)*(d.raio+g),d.altura+Math.sin(c*2.1+d.angulo)*.35,-150+Math.sin(p)*(d.raio+g)),u.rotation.set(.4,-p,0),u.scale.setScalar(d.escala),u.updateMatrix(),o.setMatrixAt(h,u.matrix)}),o.instanceMatrix.needsUpdate=!0)}}function XP({cena:n,guardar:e,tempo:t,vento:i,sol:r,luzCeu:s}){const o={topo:{value:new je},horizonte:{value:new je},corSol:{value:new je},direcaoSol:{value:new z}},a=BP(n,e,t,o);kP(n,e,t,i),zP(n,e);const l=HP(n,e,t,o.corSol),u=VP(n,e,t),c=GP(n,e,t),f=WP(n,e,t),d={value:new je};function h(p){let g=0;for(;g<ea.length-2&&p>ea[g+1].em;)g++;const _=ea[g],m=ea[g+1],y=an.smoothstep(p,_.em,m.em);o.topo.value.lerpColors(_.topo,m.topo,y),o.horizonte.value.lerpColors(_.horizonte,m.horizonte,y),o.corSol.value.lerpColors(_.sol,m.sol,y),d.value.lerpColors(_.nevoa,m.nevoa,y),n.fog.color.copy(d.value);const x=an.lerp(_.alturaSol,m.alturaSol,y);o.direcaoSol.value.set(-.42,x,-.9).normalize(),r.position.copy(o.direcaoSol.value).multiplyScalar(60),r.color.copy(o.corSol.value),r.intensity=an.lerp(_.luzSol,m.luzSol,y),s.intensity=an.lerp(_.luzCeu,m.luzCeu,y),s.color.lerpColors(o.horizonte.value,o.topo.value,.4)}return{corCeu:o.horizonte,corNevoa:d,atualizar(p,g,_){h(g),a.position.copy(_.position),l.value=(.12+an.smoothstep(g,.2,.55)*.12)*(1-an.smoothstep(g,.56,.68));const m=an.smoothstep(g,.72,.95);c.intensidade.value=m,c.pontos.visible=m>.01,u(p,_),f(p,g>.45)}}}const qP={key:0,class:"campo-alternativo","aria-hidden":"true"},jP={__name:"Campo",props:{movimento:Boolean},emits:["progresso"],setup(n,{emit:e}){const t=n,i=e,r=It(null),s=It(!0);let o,a,l,u,c,f,d=!0,h=0;const p={x:0,y:0},g=[],_={value:0},m={value:0},y={value:new je("#e3e4c4")},x={value:new je("#c9d6b4")};let v,b=0,w=0,A=0;const R=new Ie,M=new Ie;let S=0;const D=new Jw,L=new z,N=new z,F=new z;function W(){if(!v)return;const ae=v.getBoundingClientRect();b=an.clamp(-ae.top/Math.max(1,ae.height-window.innerHeight),0,1),i("progresso",b)}function O(){p.x=0,p.y=0,A=0}function j(ae){const K=r.value.getBoundingClientRect();if(!K.width||!K.height||ae.clientY<K.top||ae.clientY>K.bottom||ae.clientX<K.left||ae.clientX>K.right){O();return}const fe=(ae.clientX-K.left)/K.width-.5,Ee=(ae.clientY-K.top)/K.height-.5;S=Math.min(2,S+Math.hypot(fe-p.x,Ee-p.y)*5),p.x=fe,p.y=Ee,A=1}function H(ae){ae.relatedTarget||O()}function $(ae){return g.push(ae),ae}function U(){if(!o)return;const{width:ae,height:K}=r.value.getBoundingClientRect();!ae||!K||(o.setSize(ae,K),l.aspect=ae/K,l.fov=ae<650?62:47,l.updateProjectionMatrix(),W())}function de(ae){return tu(ae)}function Me(ae){return 2.5+Math.sin(ae*.09)*.8}return qa(()=>{v=r.value.closest(".percurso-campo"),window.addEventListener("pointermove",j,{passive:!0}),window.addEventListener("pointerout",H),window.addEventListener("blur",O),window.addEventListener("scroll",W,{passive:!0}),window.addEventListener("resize",W,{passive:!0}),W();try{let Un=function(Ue){if(Le++,We+=Ue,Le<50)return;const lt=We/Le;Le=0,We=0,lt>.027&&at>.75&&(at=Math.max(.75,at-.2),o.setPixelRatio(at),U())},Kn=function(Ue){u=requestAnimationFrame(Kn);const lt=Math.min((Ue-ge)/1e3,.05);if(ge=Ue,!d||document.hidden)return;Un(lt),t.movimento&&(h+=lt),_.value=h;const Ft=1-Math.exp(-lt*5);if(w+=(b-w)*Ft,!t.movimento&&et>=0&&Math.abs(w-et)<2e-5)return;et=w,ue=Math.min(1,ue+lt/2.6);const hn=1-Math.pow(1-ue,3);t.movimento&&(M.set(p.x,p.y),R.lerp(M,Ft),S*=Math.exp(-lt*2.5),m.value+=(R.x*A*(1+S)-m.value)*Ft,Se.rotation.y=h*.006);const Bt=NP(w,R);l.position.fromArray(Bt.posicao),l.position.y+=(1-hn)*2.6,l.position.z+=(1-hn)*7,F.fromArray(Bt.olhar),l.lookAt(F),l.rotateZ(Bt.inclinacao),l.updateMatrixWorld(),D.setFromCamera({x:p.x*2,y:-p.y*2},l);const dn=l.aspect<1,Yt=Math.min(1,w/.58),Or=an.smoothstep(Yt,0,.14),lr=an.smoothstep(Yt,.06,.38),No=an.smoothstep(w,.54,.7),nl=1-Math.exp(-lt*10),il=Math.max(0,12-l.position.z-24);Pe.forEach((St,Oo)=>{const hi=St.angulo+h*.16+Yt*Math.PI*3,rl=St.raio+Math.sin(h+St.fase)*.12;if(St.solta)V.position.set(Math.sin(St.fase*7+h*.12)*16,1+(St.fase*2+h*.23)%10,-12+Math.cos(St.fase)*10-il);else{const Z=-7+St.espessura+Math.cos(hi)*.7-lr*St.fase*2.8-il;V.position.set(an.lerp(dn?0:3.5,_r(Z),Or)+Math.cos(hi)*(rl+lr*1.4),an.lerp(5.5,3.1,Or)+Math.sin(hi)*(rl+lr*.6),Z)}const sl=St.angulo+h*.16+St.fase*.35,C=10+(St.raio-1.45)*7;if(V.position.lerp(L.set(Math.cos(sl)*C,.8+St.fase*1.05+Math.sin(h*.7+St.angulo)*.5,-150+Math.sin(sl)*C),No),t.movimento){D.ray.closestPointToPoint(V.position,L),N.subVectors(V.position,L);const Z=N.length();Number.isFinite(Z)||N.set(0,0,0);const Q=Math.max(0,1-Z/5.5)*A;N.normalize().multiplyScalar(Q*Math.min(4.2,(6.5+S*2)*St.resposta)),Number.isFinite(N.x)&&St.deslocamento.lerp(N,nl)}V.position.add(St.deslocamento),V.rotation.set(St.fase+h*.55,hi+h*.2,hi+St.fase);const G=an.smoothstep(V.position.distanceTo(l.position),.8,4.5);V.scale.setScalar(St.escala*(1-No*.3)*(.15+G*.85)),V.updateMatrix(),Be.setMatrixAt(Oo,V.matrix)}),Be.instanceMatrix.needsUpdate=!0,me.atualizar(h,w),Re.atualizar(h,w,l),B.forEach((St,Oo)=>{const hi=l.position.z-(4-Oo*24);St.visible=w>.67?Math.abs(hi)<85:hi>-20&&hi<85}),o.render(a,l)};o=new UP({antialias:!0,alpha:!1,powerPreference:"high-performance"}),o.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),o.toneMapping=J0,o.toneMappingExposure=1.08,r.value.appendChild(o.domElement),a=new ow,a.fog=new Vd("#c9d6b4",.017),l=new oi(47,1,.1,300),l.position.set(0,3.1,12),l.lookAt(0,3.7,-12);const ae=new qw("#f5ffe8","#16331b",2.1);a.add(ae);const K=new Yw("#fff1c9",3.3);K.position.set(-12,18,-8),a.add(K);const fe=$(new Tr(180,300,1,1)),Ee=$(new zn({color:"#263e20",roughness:1})),ye=new Wt(fe,Ee);ye.rotation.x=-Math.PI/2,ye.position.set(0,-.16,-115),a.add(ye);for(let Ue=0;Ue<4;Ue++){const lt=$(new Tr(190,22,100,1)),Ft=lt.attributes.position;for(let dn=0;dn<Ft.count;dn++){const Yt=Ft.getX(dn),Or=3.5+Ue*1.3+Math.sin(Yt*.065+Ue*2)*2.8+Math.cos(Yt*.16+Ue)*1.2;Ft.setY(dn,Ft.getY(dn)>0?Or:-6)}lt.computeVertexNormals();const hn=$(new Hd({color:["#354d36","#466349","#5c755b","#73886b"][Ue],side:Jt})),Bt=new Wt(lt,hn);Bt.position.z=-215-Ue*13,a.add(Bt)}const Ne=$(new el(1,20,12)),Ke=$(new zn({color:"#3b5831",roughness:1}));for(let Ue=0;Ue<14;Ue++){const lt=new Wt(Ne,Ke);lt.position.set((Ue%2?-1:1)*(24+Math.sin(Ue)*5),-2,-8-Ue*12),lt.scale.set(13,4+Math.sin(Ue*2)*2,19),a.add(lt)}const Oe=[],tt=[],nt=[],I=20,T=480;for(let Ue=0;Ue<=T;Ue++){const lt=17-Ue*.5,Ft=de(lt),hn=Me(lt);for(let Bt=0;Bt<=I;Bt++){const dn=Bt/I;if(Oe.push(Ft+(dn*2-1)*hn,.025,lt),tt.push(dn,Ue/T),Ue<T&&Bt<I){const Yt=Ue*(I+1)+Bt;nt.push(Yt,Yt+I+1,Yt+1,Yt+1,Yt+I+1,Yt+I+2)}}}const J=$(new qt);J.setAttribute("position",new xt(Oe,3)),J.setIndex(nt),J.setAttribute("uv",new xt(tt,2)),J.computeVertexNormals();const ie=$(J.clone());ie.translate(0,-.13,0);const ne=$(new En({uniforms:{tempo:_,corNevoa:x},vertexShader:"varying vec3 ponto; varying vec2 faixa; void main(){ ponto=position; faixa=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
        uniform float tempo; uniform vec3 corNevoa; varying vec3 ponto; varying vec2 faixa;
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
          gl_FragColor=vec4(mix(cor,corNevoa,nevoa*.45),1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,side:Jt}));a.add(new Wt(ie,ne));const q=$(new En({uniforms:{tempo:_,corCeu:y,corNevoa:x},vertexShader:`uniform float tempo; varying vec3 ponto; varying vec2 faixa;
          void main(){ vec3 posicao=position; faixa=uv;
            posicao.y+=(sin(position.x*2.2+position.z*1.4-tempo*.8)*.016+sin(position.z*3.3-position.x*1.7+tempo*.6)*.009)*sin(uv.x*3.14159);
            ponto=posicao; gl_Position=projectionMatrix*modelViewMatrix*vec4(posicao,1.);
          }`,fragmentShader:`uniform float tempo; uniform vec3 corCeu; uniform vec3 corNevoa; varying vec3 ponto; varying vec2 faixa;
          void main(){
            float a=ponto.x*2.2+ponto.z*1.4-tempo*.8;
            float b=ponto.z*3.3-ponto.x*1.7+tempo*.6;
            float c=ponto.x*7.1+ponto.z*5.2+sin(ponto.z*1.3+tempo*.4)-tempo*1.2;
            vec3 normal=normalize(vec3(-cos(a)*.07+cos(b)*.045+sin(c)*.018,1.,-cos(a)*.05-cos(b)*.08+cos(c)*.023));
            vec3 olhar=normalize(cameraPosition-ponto);
            float fresnel=.04+.96*pow(1.-max(dot(olhar,normal),0.),4.);
            vec3 ceu=mix(vec3(.04,.24,.28),corCeu,clamp(normal.z*3.+.58,0.,1.));
            vec3 cor=mix(vec3(.055,.49,.43),ceu,fresnel);
            vec3 meio=normalize(olhar+normalize(vec3(-.28,.52,-.8)));
            float brilho=pow(max(dot(normal,meio),0.),120.);
            cor+=vec3(1.,.98,.78)*brilho*1.6;
            float borda=pow(abs(faixa.x*2.-1.),14.);
            cor=mix(cor,vec3(.61,.83,.64),borda*.25);
            float nevoa=1.-exp(-length(cameraPosition-ponto)*.018);
            cor=mix(cor,corNevoa,nevoa*.35);
            gl_FragColor=vec4(cor,clamp(.32+fresnel*.32+brilho*.25,.32,.8));
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,side:Jt,transparent:!0,depthWrite:!1}));a.add(new Wt(J,q));const le=$(new Tr(.07,1,1,4));le.translate(0,.5,0);const te=le.attributes.position;for(let Ue=0;Ue<te.count;Ue++)te.setX(Ue,te.getX(Ue)*(1-te.getY(Ue)*.96));const se=$(new zn({color:"#638f39",roughness:.95,side:Jt}));se.onBeforeCompile=Ue=>{Ue.uniforms.tempo=_,Ue.uniforms.vento=m,Ue.vertexShader=`uniform float tempo; uniform float vento;
`+Ue.vertexShader,Ue.vertexShader=Ue.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float fase=instanceMatrix[3].x*.6+instanceMatrix[3].z*.5;
        transformed.x += (sin(tempo*1.4+fase)*.22+vento*.5)*position.y*position.y;
        transformed.z += cos(tempo*.9+fase)*position.y*position.y*.1;`)};const oe=10,P=window.innerWidth<650?4750:9500,E=P*oe,B=Array.from({length:oe},()=>$(new wn(le,se,P))),V=new Mt,ee=new je;let Y=913;const he=()=>(Y=Y*16807%2147483647,(Y-1)/2147483646);for(let Ue=0;Ue<E;Ue++){const lt=Math.floor(Ue/P),Ft=B[lt];let hn,Bt;do hn=(he()-.5)*(Ue%4===0?76:24),Bt=16-lt*24-he()*24;while(Math.abs(hn-de(Bt))<Me(Bt)+.12);V.position.set(hn,-.12,Bt),V.rotation.set((he()-.5)*.2,he()*Math.PI,(he()-.5)*.2);const dn=(.22+he()*.75)*an.lerp(.22,1,an.smoothstep(Math.hypot(hn,Bt+150),12,19));V.scale.set(.7+he(),dn,1),V.updateMatrix(),Ft.setMatrixAt(Ue%P,V.matrix),ee.setHSL(.23+he()*.065,.3+he()*.25,.12+he()*.2),Ft.setColorAt(Ue%P,ee)}a.add(...B);const pe=new bv;pe.moveTo(0,-.5),pe.bezierCurveTo(.43,-.16,.31,.28,0,.5),pe.bezierCurveTo(-.31,.24,-.42,-.17,0,-.5);const xe=$(new Yd(pe,5)),Ae=xe.attributes.position;for(let Ue=0;Ue<Ae.count;Ue++)Ae.setZ(Ue,Math.abs(Ae.getX(Ue))*.4);xe.computeVertexNormals();const ce=$(new zn({color:"#acdc69",roughness:.64,metalness:.12,side:Jt})),Te=window.innerWidth<650?3200:6e3,Be=new wn(xe,ce,Te);Be.instanceMatrix.setUsage(Od),Be.frustumCulled=!1;const Pe=Array.from({length:Te},(Ue,lt)=>(ee.setHSL(.19+he()*.14,.38+he()*.35,.18+he()*.47),Be.setColorAt(lt,ee),{angulo:he()*Math.PI*2,raio:2.05+(he()-.5)*1.2,espessura:(he()-.5)*1.7,escala:.12+he()*.24,fase:he()*10,solta:lt<240,resposta:lt%5<3?.18+he()*.12:.8+he()*.2,deslocamento:new z}));a.add(Be);const ve=$(new qt),ze=new Float32Array(480*3);for(let Ue=0;Ue<ze.length;Ue+=3)ze[Ue]=(he()-.5)*36,ze[Ue+1]=he()*12,ze[Ue+2]=7-he()*190;ve.setAttribute("position",new Sn(ze,3));const k=$(new gv({color:"#f0ffce",size:.025,transparent:!0,opacity:.6,depthWrite:!1})),Se=new _v(ve,k);a.add(Se);const me=OP(a,$,_,m),Re=XP({cena:a,guardar:$,tempo:_,vento:m,sol:K,luzCeu:ae});y.value=Re.corCeu.value,x.value=Re.corNevoa.value,c=new ResizeObserver(U),c.observe(r.value),U(),f=new IntersectionObserver(([Ue])=>{d=Ue.isIntersecting}),f.observe(r.value);let ge=0;W(),w=b;let ue=t.movimento&&w<.01?0:1,Le=0,We=0,at=Math.min(window.devicePixelRatio,1.5),et=-1;u=requestAnimationFrame(Kn)}catch{s.value=!1,o?.dispose()}}),ja(()=>{window.removeEventListener("scroll",W),window.removeEventListener("resize",W),window.removeEventListener("pointermove",j),window.removeEventListener("pointerout",H),window.removeEventListener("blur",O),cancelAnimationFrame(u),c?.disconnect(),f?.disconnect(),g.forEach(ae=>ae.dispose()),o?.dispose()}),(ae,K)=>(ut(),wt("div",{ref_key:"recipiente",ref:r,class:"campo-interativo",role:"img","aria-label":"Campo tridimensional: role para avançar pelo riacho e atravesse as folhas; mova o ponteiro para afastá-las e mudar a direção do vento"},[we(s)?Js("",!0):(ut(),wt("div",qP,[(ut(),wt(Ut,null,Jr(28,fe=>re("span",{key:fe,style:Ci({left:`${fe*17%100}%`,top:`${fe*23%80}%`,transform:`rotate(${fe*37}deg)`})},null,4)),64))]))],512))}},$P=/^[a-z][a-z0-9-]*$/i;function YP(n,e){return n&&$P.test(n)?n:e}const KP=Symbol.for("nuxt:client-only"),JP=ld({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:e,attrs:t}){const i=xf(!1);qa(()=>{i.value=!0});const r=bs();return r&&(r._nuxtClientOnly=!0),sd(KP,!0),()=>{if(i.value){const l=e.default?.();return l&&l.length===1?[rr(l[0],t)]:l}const s=e.fallback||e.placeholder;if(s)return gd(s);const o=n.fallback||n.placeholder||"",a=YP(n.fallbackTag||n.placeholderTag,"span");return wt(a,t,o)}}});function $i(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Fv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ua={duration:.5,overwrite:!1,delay:0},Jd,rn,Et,ai=1e8,gt=1/ai,Nh=Math.PI*2,ZP=Nh/4,QP=0,Bv=Math.sqrt,e3=Math.cos,t3=Math.sin,Zt=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},Zd=function(e){return typeof e>"u"},Fi=function(e){return typeof e=="object"},Rn=function(e){return e!==!1},Qd=function(){return typeof window<"u"},Wl=function(e){return Ot(e)||Zt(e)},kv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,n3=/random\([^)]+\)/g,i3=/,\s*/g,Pg=/(?:-?\.?\d|\.)+/gi,zv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,af=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hv=/[+-]=-?[.\d]+/,r3=/[^,'"\[\]\s]+/gi,s3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ct,Ei,Oh,ep,$n={},Cc={},Vv,Gv=function(e){return(Cc=bo(e,$n))&&In},tp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Na=function(e,t){return!t&&console.warn(e)},Wv=function(e,t){return e&&($n[e]=t)&&Cc&&(Cc[e]=t)||$n},Oa=function(){return 0},o3={suppressEvents:!0,isStart:!0,kill:!1},nc={suppressEvents:!0,kill:!1},a3={suppressEvents:!0},np={},wr=[],Fh={},Xv,Bn={},lf={},Lg=30,ic=[],ip="",rp=function(e){var t=e[0],i,r;if(Fi(t)||Ot(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ic.length;r--&&!ic[r].targetTest(t););i=ic[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new dx(e[r],i)))||e.splice(r,1);return e},ps=function(e){return e._gsap||rp(li(e))[0]._gsap},qv=function(e,t,i){return(i=e[t])&&Ot(i)?e[t]():Zd(i)&&e.getAttribute&&e.getAttribute(t)||i},Pn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},uo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},l3=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Rc=function(){var e=wr.length,t=wr.slice(0),i,r;for(Fh={},wr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},sp=function(e){return!!(e._initted||e._startAt||e.add)},jv=function(e,t,i,r){wr.length&&!rn&&Rc(),e.render(t,i,!!(rn&&t<0&&sp(e))),wr.length&&!rn&&Rc()},$v=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(r3).length<2?t:Zt(e)?e.trim():e},Yv=function(e){return e},Yn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},c3=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},bo=function(e,t){for(var i in t)e[i]=t[i];return e},Dg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Fi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Pc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},da=function(e){var t=e.parent||Ct,i=e.keyframes?c3(fn(e.keyframes)):Yn;if(Rn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},u3=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Kv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},nu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},f3=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bh=function(e,t,i,r){return e._startAt&&(rn?e._startAt.revert(nc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},h3=function n(e){return!e||e._ts&&n(e.parent)},Ig=function(e){return e._repeat?Eo(e._tTime,e=e.duration()+e._rDelay)*e:0},Eo=function(e,t){var i=Math.floor(e=At(e/t));return e&&i===e?i-1:i},Lc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},iu=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},ru=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=At(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),iu(e),i._dirty||ms(i,e)),e},Jv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Lc(e.rawTime(),t),(!t._dur||tl(0,t.totalDuration(),i)-t._tTime>gt)&&t.render(i,!0)),ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-gt}},Pi=function(e,t,i,r){return t.parent&&Lr(t),t._start=At((sr(i)?i:i||e!==Ct?ii(e,i,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Kv(e,t,"_first","_last",e._sort?"_start":0),kh(t)||(e._recent=t),r||Jv(e,t),e._ts<0&&ru(e,e._tTime),e},Zv=function(e,t){return($n.ScrollTrigger||tp("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},Qv=function(e,t,i,r,s){if(ap(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xv!==Hn.frame)return wr.push(e),e._lazy=[s,r],1},d3=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},kh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},p3=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&d3(e)&&!(!e._initted&&kh(e))||(e._ts<0||e._dp._ts<0)&&!kh(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=tl(0,e._tDur,t),c=Eo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Eo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||rn||r||e._zTime===gt||!t&&e._zTime){if(!e._initted&&Qv(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?gt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Bh(e,t,i,!0),e._onUpdate&&!i&&Gn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Lr(e,1),!i&&!rn&&(Gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},m3=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},To=function(e,t,i,r){var s=e._repeat,o=At(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:At(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ru(e,e._tTime=e._tDur*a),e.parent&&iu(e),i||ms(e.parent,e),e},Ug=function(e){return e instanceof An?ms(e):To(e,e._dur)},g3={_start:0,endTime:Oa,totalDuration:Oa},ii=function n(e,t,i){var r=e.labels,s=e._recent||g3,o=e.duration()>=ai?s.endTime(!1):e._dur,a,l,u;return Zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(fn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},pa=function(e,t,i){var r=sr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Rn(l.vars.inherit)&&l.parent;o.immediateRender=Rn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Vt(t[0],o,t[s+1])},Nr=function(e,t){return e||e===0?t(e):t},tl=function(e,t,i){return i<e?e:i>t?t:i},cn=function(e,t){return!Zt(e)||!(t=s3.exec(e))?"":t[1]},_3=function(e,t,i){return Nr(i,function(r){return tl(e,t,r)})},zh=[].slice,ex=function(e,t){return e&&Fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fi(e[0]))&&!e.nodeType&&e!==Ei},v3=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Zt(r)&&!t||ex(r,1)?(s=i).push.apply(s,li(r)):i.push(r)})||i},li=function(e,t,i){return Et&&!t&&Et.selector?Et.selector(e):Zt(e)&&!i&&(Oh||!wo())?zh.call((t||ep).querySelectorAll(e),0):fn(e)?v3(e,i):ex(e)?zh.call(e,0):e?[e]:[]},Hh=function(e){return e=li(e)[0]||Na("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return li(t,i.querySelectorAll?i:i===e?Na("Invalid scope")||ep.createElement("div"):e)}},tx=function(e){return e.sort(function(){return .5-Math.random()})},nx=function(e){if(Ot(e))return e;var t=Fi(e)?e:{each:e},i=gs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Zt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,h,p){var g=(p||t).length,_=o[g],m,y,x,v,b,w,A,R,M;if(!_){if(M=t.grid==="auto"?0:(t.grid||[1,ai])[1],!M){for(A=-ai;A<(A=p[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(_=o[g]=[],m=l?Math.min(M,g)*c-.5:r%M,y=M===ai?0:l?g*f/M-.5:r/M|0,A=0,R=ai,w=0;w<g;w++)x=w%M-m,v=y-(w/M|0),_[w]=b=u?Math.abs(u==="y"?v:x):Bv(x*x+v*v),b>A&&(A=b),b<R&&(R=b);r==="random"&&tx(_),_.max=A-R,_.min=R,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),_.b=g<0?s-g:s,_.u=cn(t.amount||t.each)||0,i=i&&g<0?L3(i):i}return g=(_[d]-_.min)/_.max||0,At(_.b+(i?i(g):g)*_.v)+_.u}},Vh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=At(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(sr(i)?0:cn(i))}},ix=function(e,t){var i=fn(e),r,s;return!i&&Fi(e)&&(r=i=e.radius||ai,e.values?(e=li(e.values),(s=!sr(e[0]))&&(r*=r)):e=Vh(e.increment)),Nr(t,i?Ot(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ai,c=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||sr(o)?c:c+cn(o)}:Vh(e))},rx=function(e,t,i,r){return Nr(fn(e)?!t:i===!0?!!(i=0):!r,function(){return fn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},x3=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},y3=function(e,t){return function(i){return e(parseFloat(i))+(t||cn(i))}},M3=function(e,t,i){return ox(e,t,0,1,i)},sx=function(e,t,i){return Nr(i,function(r){return e[~~t(r)]})},S3=function n(e,t,i){var r=t-e;return fn(e)?sx(e,n(0,e.length),t):Nr(i,function(s){return(r+(s-e)%r)%r+e})},b3=function n(e,t,i){var r=t-e,s=r*2;return fn(e)?sx(e,n(0,e.length-1),t):Nr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Fa=function(e){return e.replace(n3,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(i3);return rx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ox=function(e,t,i,r,s){var o=t-e,a=r-i;return Nr(s,function(l){return i+((l-e)/o*a||0)})},E3=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Zt(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(fn(e)&&!fn(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(p){p*=f;var g=Math.min(d,~~p);return c[g](p-g)},i=t}else r||(e=bo(fn(e)?[]:{},e));if(!c){for(l in t)op.call(a,e,l,"get",t[l]);s=function(p){return up(p,a)||(o?e.p:e)}}}return Nr(i,s)},Ng=function(e,t,i){var r=e.labels,s=ai,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(e,t,i){var r=e.vars,s=r[t],o=Et,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&wr.length&&Rc(),a&&(Et=a),c=l?s.apply(u,l):s.call(u),Et=o,c},ta=function(e){return Lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rn),e.progress()<1&&Gn(e,"onInterrupt"),e},eo,ax=[],lx=function(e){if(e)if(e=!e.name&&e.default||e,Qd()||e.headless){var t=e.name,i=Ot(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Oa,render:up,add:op,kill:H3,modifier:z3,rawVars:0},o={targetTest:0,get:0,getSetter:cp,aliases:{},register:0};if(wo(),e!==r){if(Bn[t])return;Yn(r,Yn(Pc(e,s),o)),bo(r.prototype,bo(s,Pc(e,o))),Bn[r.prop=t]=r,e.targetTest&&(ic.push(r),np[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wv(t,r),e.register&&e.register(In,r,Ln)}else ax.push(e)},mt=255,na={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},cf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*mt+.5|0},cx=function(e,t,i){var r=e?sr(e)?[e>>16,e>>8&mt,e&mt]:0:na.black,s,o,a,l,u,c,f,d,h,p;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),na[e])r=na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&mt,r&mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&mt,e&mt]}else if(e.substr(0,3)==="hsl"){if(r=p=e.match(Pg),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=cf(l+1/3,s,o),r[1]=cf(l,s,o),r[2]=cf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(zv),i&&r.length<4&&(r[3]=1),r}else r=e.match(Pg)||na.transparent;r=r.map(Number)}return t&&!p&&(s=r[0]/mt,o=r[1]/mt,a=r[2]/mt,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(h=f-d,u=c>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ux=function(e){var t=[],i=[],r=-1;return e.split(Ar).forEach(function(s){var o=s.match(Qs)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Og=function(e,t,i){var r="",s=(e+r).match(Ar),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=cx(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=ux(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ar,"1").split(Qs),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ar),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Ar=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in na)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),T3=/hsl[a]?\(/,fx=function(e){var t=e.join(" "),i;if(Ar.lastIndex=0,Ar.test(t))return i=T3.test(t),e[1]=Og(e[1],i),e[0]=Og(e[0],i,ux(e[1])),!0},Ba,Hn=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,h,p=function g(_){var m=n()-r,y=_===!0,x,v,b,w;if((m>e||m<0)&&(i+=m-t),r+=m,b=r-i,x=b-o,(x>0||y)&&(w=++f.frame,d=b-f.time*1e3,f.time=b=b/1e3,o+=x+(x>=s?4:s-x),v=1),y||(l=u(g)),v)for(h=0;h<a.length;h++)a[h](b,d,w,_)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Vv&&(!Oh&&Qd()&&(Ei=Oh=window,ep=Ei.document||{},$n.gsap=In,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(In.version),Gv(Cc||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),ax.forEach(lx)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(_){return setTimeout(_,o-f.time*1e3+1|0)},Ba=1,p(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ba=0,u=Oa},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,m,y){var x=m?function(v,b,w,A){_(v,b,w,A),f.remove(x)}:_;return f.remove(_),a[y?"unshift":"push"](x),wo(),x},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&h>=m&&h--},_listeners:a},f})(),wo=function(){return!Ba&&Hn.wake()},Qe={},w3=/^[\d.\-M][\d.\-,\s]/,A3=/["']/g,C3=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(A3,"").trim():+u,r=l.substr(a+1).trim();return t},R3=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},P3=function(e){var t=(e+"").split("("),i=Qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[C3(t[1])]:R3(e).split(",").map($v)):Qe._CE&&w3.test(e)?Qe._CE("",e):i},L3=function(e){return function(t){return 1-e(1-t)}},gs=function(e,t){return e&&(Ot(e)?e:Qe[e]||P3(e))||t},ws=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Pn(e,function(a){Qe[a]=$n[a]=s,Qe[o=a.toLowerCase()]=i;for(var l in s)Qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qe[a+"."+l]=s[l]}),s},hx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},uf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Nh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*t3((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:hx(a);return s=Nh/s,l.config=function(u,c){return n(e,u,c)},l},ff=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:hx(i);return r.config=function(s){return n(e,s)},r};Pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ws(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;ws("Elastic",uf("in"),uf("out"),uf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ws("Circ",function(n){return-(Bv(1-n*n)-1)});ws("Sine",function(n){return n===1?1:-e3(n*ZP)+1});ws("Back",ff("in"),ff("out"),ff());Qe.SteppedEase=Qe.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-gt;return function(a){return((r*tl(0,o,a)|0)+s)*i}}};Ua.ease=Qe["quad.out"];Pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return ip+=n+","+n+"Params,"});var dx=function(e,t){this.id=QP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qv,this.set=t?t.getSetter:cp},ka=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,To(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),Ba||Hn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,To(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(wo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ru(this,i),!s._dp||s.parent||Jv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===gt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),jv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ig(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ig(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Eo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Lc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-gt?0:this._rts,this.totalTime(tl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),iu(this),f3(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=At(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Pi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Rn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=a3);var r=rn;return rn=i,sp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),rn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ug(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Ug(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ii(this,i),Rn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Rn(r)),this._dur||(this._zTime=-gt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-gt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Ot(i)?i:Yv,l=function(){var c=r.then;r.then=null,s&&s(),Ot(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ta(this)},n})();Yn(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var An=(function(n){Fv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Rn(i.sortChildren),Ct&&Pi(i.parent||Ct,$i(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Zv($i(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return pa(0,arguments,this),this},t.from=function(r,s,o){return pa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return pa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Vt(r,s,ii(this,o),1),this},t.call=function(r,s,o){return Pi(this,Vt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Vt(r,o,ii(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,da(o).immediateRender=Rn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,da(a).immediateRender=Rn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:At(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,h,p,g,_,m,y,x,v,b,w,A;if(this!==Ct&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,v=this._start,x=this._ts,m=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(d=At(c%_),c===l?(g=this._repeat,d=u):(b=At(c/_),g=~~b,g&&g===b&&(d=u,g--),d>u&&(d=u)),b=Eo(this._tTime,_),!a&&this._tTime&&b!==g&&this._tTime-b*_-this._dur<=0&&(b=g),w&&g&1&&(d=u-d,A=1),g!==b&&!this._lock){var R=w&&b&1,M=R===(w&&g&1);if(g<b&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(A?0:At(g*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=m3(this,At(a),At(d)),y&&(c-=d-(d=y._start))),this._tTime=c,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!b&&(Gn(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(p=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!m){y=0,p&&(c+=this._zTime=-gt);break}}h=p}else{h=this._last;for(var S=r<0?r:d;h;){if(p=h._prev,(h._act||S<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(S-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(S-h._start)*h._ts,s,o||rn&&sp(h)),d!==this._time||!this._ts&&!m){y=0,p&&(c+=this._zTime=S?-gt:gt);break}}h=p}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-gt)._zTime=d>=a?1:-1,this._ts))return this._start=v,iu(this),this.render(r,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Lr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Gn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(sr(s)||(s=ii(this,s,r)),!(r instanceof ka)){if(fn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Zt(r))return this.addLabel(r,s);if(Ot(r))r=Vt.delayedCall(0,r);else return this}return this!==r?Pi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ai);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Vt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Zt(r)?this.removeLabel(r):Ot(r)?this.killTweensOf(r):(r.parent===this&&nu(this,r),r===this._recent&&(this._recent=this._last),ms(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(Hn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ii(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Vt.delayedCall(0,s||Oa,o);return a.data="isPause",this._hasPause=1,Pi(this,a,ii(this,r))},t.removePause=function(r){var s=this._first;for(r=ii(this,r);s;)s._start===r&&s.data==="isPause"&&Lr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=li(r),l=this._first,u=sr(s),c;l;)l instanceof Vt?l3(l._targets,a)&&(u?(!xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ii(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,h,p=Vt.to(o,Yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!h){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());p._dur!==_&&To(p,_,0,1).render(p._time,!0,!0),h=1}c&&c.apply(p,f||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Yn({startAt:{time:ii(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ng(this,ii(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ng(this,ii(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=At(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ms(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ms(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ai,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=At(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;To(o,o===Ct&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ct._ts&&(jv(Ct,Lc(r,Ct)),Xv=Hn.frame),Hn.frame>=Lg){Lg+=jn.autoSleep||120;var s=Ct._first;if((!s||!s._ts)&&jn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},e})(ka);Yn(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var D3=function(e,t,i,r,s,o,a){var l=new Ln(this._pt,e,t,0,1,xx,null,s),u=0,c=0,f,d,h,p,g,_,m,y;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=Fa(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),d=i.match(af)||[];f=af.exec(r);)p=f[0],g=r.substring(u,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),p!==d[c++]&&(_=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:_,c:p.charAt(1)==="="?uo(_,p)-_:parseFloat(p)-_,m:h&&h<4?Math.round:0},u=af.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Hv.test(r)||m)&&(l.e=0),this._pt=l,l},op=function(e,t,i,r,s,o,a,l,u,c){Ot(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Ot(f)?u?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,h=Ot(f)?u?F3:_x:lp,p;if(Zt(r)&&(~r.indexOf("random(")&&(r=Fa(r)),r.charAt(1)==="="&&(p=uo(d,r)+(cn(d)||0),(p||p===0)&&(r=p))),!c||d!==r||Gh)return!isNaN(d*r)&&r!==""?(p=new Ln(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?k3:vx,0,h),u&&(p.fp=u),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&tp(t,r),D3.call(this,e,t,d,r,h,l||jn.stringFilter,u))},I3=function(e,t,i,r,s){if(Ot(e)&&(e=ma(e,s,t,i,r)),!Fi(e)||e.style&&e.nodeType||fn(e)||kv(e))return Zt(e)?ma(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ma(e[a],s,t,i,r);return o},px=function(e,t,i,r,s,o){var a,l,u,c;if(Bn[e]&&(a=new Bn[e]).init(s,a.rawVars?t[e]:I3(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Ln(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==eo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},xr,Gh,ap=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,p=e._dur,g=e._startAt,_=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:_,x=e._overwrite==="auto"&&!Jd,v=e.timeline,b=r.easeReverse||f,w,A,R,M,S,D,L,N,F,W,O,j,H;if(v&&(!d||!s)&&(s="none"),e._ease=gs(s,Ua.ease),e._rEase=b&&(gs(b)||e._ease),e._from=!v&&!!r.runBackwards,e._from&&(e.ratio=1),!v||d&&!r.stagger){if(N=_[0]?ps(_[0]).harness:0,j=N&&r[N.prop],w=Pc(r,np),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!h?g.render(-1,!0):g.revert(c&&p?nc:o3),g._lazy=0),o){if(Lr(e._startAt=Vt.set(_,Yn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Rn(l),startAt:null,delay:0,onUpdate:u&&function(){return Gn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn||!a&&!h)&&e._startAt.revert(nc),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&p&&!g){if(t&&(a=!1),R=Yn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Rn(l),immediateRender:a,stagger:0,parent:m},w),j&&(R[N.prop]=j),Lr(e._startAt=Vt.set(_,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn?e._startAt.revert(nc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Rn(l)||l&&!p,A=0;A<_.length;A++){if(S=_[A],L=S._gsap||rp(_)[A]._gsap,e._ptLookup[A]=W={},Fh[L.id]&&wr.length&&Rc(),O=y===_?A:y.indexOf(S),N&&(F=new N).init(S,j||w,e,O,y)!==!1&&(e._pt=M=new Ln(e._pt,S,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function($){W[$]=M}),F.priority&&(D=1)),!N||j)for(R in w)Bn[R]&&(F=px(R,w,e,O,S,y))?F.priority&&(D=1):W[R]=M=op.call(e,S,R,"get",w[R],O,y,0,r.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),x&&e._pt&&(xr=e,Ct.killTweensOf(S,W,e.globalTime(t)),H=!e.parent,xr=0),e._pt&&l&&(Fh[L.id]=1)}D&&yx(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&v.render(ai,!0,!0)},U3=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,h;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(c=d[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Gh=1,e.vars[t]="+=0",ap(e,a),Gh=0,l?Na(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)f=u[h],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=kt(i)+cn(f.e)),f.b&&(f.b=c.s+cn(f.b))},N3=function(e,t){var i=e[0]?ps(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=bo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},O3=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(fn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ma=function(e,t,i,r,s){return Ot(e)?e.call(t,i,r,s):Zt(e)&&~e.indexOf("random(")?Fa(e):e},mx=ip+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",gx={};Pn(mx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return gx[n]=1});var Vt=(function(n){Fv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:da(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,p=l.keyframes,g=l.defaults,_=l.scrollTrigger,m=r.parent||Ct,y=(fn(i)||kv(i)?sr(i[0]):"length"in r)?[i]:li(i),x,v,b,w,A,R,M,S;if(a._targets=y.length?rp(y):Na("GSAP target "+i+" not found. https://gsap.com",!jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,p||d||Wl(u)||Wl(c)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(x=a.timeline=new An({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),x.kill(),x.parent=x._dp=$i(a),x._start=0,d||Wl(u)||Wl(c)){if(w=y.length,M=d&&nx(d),Fi(d))for(A in d)~mx.indexOf(A)&&(S||(S={}),S[A]=d[A]);for(v=0;v<w;v++)b=Pc(r,gx),b.stagger=0,D&&(b.easeReverse=D),S&&bo(b,S),R=y[v],b.duration=+ma(u,$i(a),v,R,y),b.delay=(+ma(c,$i(a),v,R,y)||0)-a._delay,!d&&w===1&&b.delay&&(a._delay=c=b.delay,a._start+=c,b.delay=0),x.to(R,b,M?M(v,R,y):0),x._ease=Qe.none;x.duration()?u=c=0:a.timeline=0}else if(p){da(Yn(x.vars.defaults,{ease:"none"})),x._ease=gs(p.ease||r.ease||"none");var L=0,N,F,W;if(fn(p))p.forEach(function(O){return x.to(y,O,">")}),x.duration();else{b={};for(A in p)A==="ease"||A==="easeEach"||O3(A,p[A],b,p.easeEach);for(A in b)for(N=b[A].sort(function(O,j){return O.t-j.t}),L=0,v=0;v<N.length;v++)F=N[v],W={ease:F.e,duration:(F.t-(v?N[v-1].t:0))/100*u},W[A]=F.v,x.to(y,W,L),L+=W.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return h===!0&&!Jd&&(xr=$i(a),Ct.killTweensOf(y),xr=0),Pi(m,$i(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!p&&a._start===At(m._time)&&Rn(f)&&h3($i(a))&&m.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-c)||0)),_&&Zv($i(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-gt&&!c?l:r<gt?0:r,d,h,p,g,_,m,y,x;if(!u)p3(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(d=At(f%g),f===l?(p=this._repeat,d=u):(_=At(f/g),p=~~_,p&&p===_?(d=u,p--):d>u&&(d=u)),m=this._yoyo&&p&1,m&&(d=u-d),_=Eo(this._tTime,g),d===a&&!o&&this._initted&&p===_)return this._tTime=f,this;p!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(At(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(Qv(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var b=v?a:u-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/u);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!_&&(Gn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Bh(this,r,s,o),Gn(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Bh(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Lr(this,1),!s&&!(c&&!a)&&(f||a||m)&&(Gn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ba||Hn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ap(this,u),c=this._ease(u/this._dur),U3(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(ru(this,0),this.parent||Kv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xr&&xr.vars.overwrite!==!0)._first||ta(this),this.parent&&o!==this.timeline.totalDuration()&&To(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?li(r):a,u=this._ptLookup,c=this._pt,f,d,h,p,g,_,m;if((!s||s==="all")&&u3(a,l))return s==="all"&&(this._pt=0),ta(this);for(f=this._op=this._op||[],s!=="all"&&(Zt(s)&&(g={},Pn(s,function(y){return g[y]=1}),s=g),s=N3(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=u[m],s==="all"?(f[m]=s,p=d,h={}):(h=f[m]=f[m]||{},p=s);for(g in p)_=d&&d[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&nu(this,_,"_pt"),delete d[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&c&&ta(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return pa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return pa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ct.killTweensOf(r,s,o)},e})(ka);Yn(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pn("staggerTo,staggerFrom,staggerFromTo",function(n){Vt[n]=function(){var e=new An,t=zh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var lp=function(e,t,i){return e[t]=i},_x=function(e,t,i){return e[t](i)},F3=function(e,t,i,r){return e[t](r.fp,i)},B3=function(e,t,i){return e.setAttribute(t,i)},cp=function(e,t){return Ot(e[t])?_x:Zd(e[t])&&e.setAttribute?B3:lp},vx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},k3=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},up=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},z3=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},H3=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?nu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},V3=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},yx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Ln=(function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||vx,this.d=l||this,this.set=u||lp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=V3,this.m=i,this.mt=s,this.tween=r},n})();Pn(ip+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return np[n]=1});$n.TweenMax=$n.TweenLite=Vt;$n.TimelineLite=$n.TimelineMax=An;Ct=new An({sortChildren:!1,defaults:Ua,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=fx;var _s=[],rc={},G3=[],Fg=0,W3=0,hf=function(e){return(rc[e]||G3).map(function(t){return t()})},Wh=function(){var e=Date.now(),t=[];e-Fg>2&&(hf("matchMediaInit"),_s.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Ei.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),hf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Fg=e,hf("matchMedia"))},Mx=(function(){function n(t,i){this.selector=i&&Hh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=W3++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Ot(i)&&(s=r,r=i,i=Ot);var o=this,a=function(){var u=Et,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Hh(s)),Et=o,f=r.apply(o,arguments),Ot(f)&&o._r.push(f),Et=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Ot?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Et;Et=null,i(this),Et=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Vt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof An?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Vt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=_s.length;o--;)_s[o].id===this.id&&_s.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),X3=(function(){function n(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Fi(i)||(i={matches:i});var o=new Mx(0,s||this.scope),a=o.conditions={},l,u,c;Et&&!o.selector&&(o.selector=Et.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Ei.matchMedia(i[u]),l&&(_s.indexOf(o)<0&&_s.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Wh):l.addEventListener("change",Wh)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Dc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return lx(r)})},timeline:function(e){return new An(e)},getTweensOf:function(e,t){return Ct.getTweensOf(e,t)},getProperty:function(e,t,i,r){Zt(e)&&(e=li(e)[0]);var s=ps(e||{}).get,o=i?Yv:$v;return i==="native"&&(i=""),e&&(t?o((Bn[t]&&Bn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Bn[a]&&Bn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=li(e),e.length>1){var r=e.map(function(c){return In.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Bn[t],a=ps(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;eo._pt=0,f.init(e,i?c+i:c,eo,0,[e]),f.render(1,f),eo._pt&&up(1,eo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=In.to(e,Yn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gs(e.ease,Ua.ease)),Dg(Ua,e||{})},config:function(e){return Dg(jn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Bn[a]&&!$n[a]&&Na(t+" effect requires "+a+" plugin.")}),lf[t]=function(a,l,u){return i(li(a),Yn(l||{},s),u)},o&&(An.prototype[t]=function(a,l,u){return this.add(lf[t](a,Fi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Qe[e]=gs(t)},parseEase:function(e,t){return arguments.length?gs(e,t):Qe},getById:function(e){return Ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new An(e),r,s;for(i.smoothChildTiming=Rn(e.smoothChildTiming),Ct.remove(i),i._dp=0,i._time=i._tTime=Ct._time,r=Ct._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Vt&&r.vars.onComplete===r._targets[0]))&&Pi(i,r,r._start-r._delay),r=s;return Pi(Ct,i,0),i},context:function(e,t){return e?new Mx(e,t):Et},matchMedia:function(e){return new X3(e)},matchMediaRefresh:function(){return _s.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Wh()},addEventListener:function(e,t){var i=rc[e]||(rc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=rc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:S3,wrapYoyo:b3,distribute:nx,random:rx,snap:ix,normalize:M3,getUnit:cn,clamp:_3,splitColor:cx,toArray:li,selector:Hh,mapRange:ox,pipe:x3,unitize:y3,interpolate:E3,shuffle:tx},install:Gv,effects:lf,ticker:Hn,updateRoot:An.updateRoot,plugins:Bn,globalTimeline:Ct,core:{PropTween:Ln,globals:Wv,Tween:Vt,Timeline:An,Animation:ka,getCache:ps,_removeLinkedListItem:nu,reverting:function(){return rn},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return Jd=e}}};Pn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Dc[n]=Vt[n]});Hn.add(An.updateRoot);eo=Dc.to({},{duration:0});var q3=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},j3=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=q3(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},df=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Zt(s)&&(l={},Pn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}j3(a,s)}}}},In=Dc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)rn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},df("roundProps",Vh),df("modifiers"),df("snap",ix))||Dc;Vt.version=An.version=In.version="3.15.0";Vv=1;Qd()&&wo();Qe.Power0;Qe.Power1;Qe.Power2;Qe.Power3;Qe.Power4;Qe.Linear;Qe.Quad;Qe.Cubic;Qe.Quart;Qe.Quint;Qe.Strong;Qe.Elastic;Qe.Back;Qe.SteppedEase;Qe.Bounce;Qe.Sine;Qe.Expo;Qe.Circ;var Bg,yr,fo,fp,ls,kg,hp,$3=function(){return typeof window<"u"},or={},ts=180/Math.PI,ho=Math.PI/180,Xs=Math.atan2,zg=1e8,dp=/([A-Z])/g,Y3=/(left|right|width|margin|padding|x)/i,K3=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},J3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Z3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Q3=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Sx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tL=function(e,t,i){return e.style[t]=i},nL=function(e,t,i){return e.style.setProperty(t,i)},iL=function(e,t,i){return e._gsap[t]=i},rL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sL=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},oL=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Pt="transform",Dn=Pt+"Origin",aL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ki(r,a)}):this.tfm[e]=o.x?o[e]:Ki(r,e),e===Dn&&(this.tfm.zOrigin=o.zOrigin);else return Ii.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Pt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},Ex=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(dp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=hp(),(!s||!s.isStart)&&!i[Pt]&&(Ex(i),r.zOrigin&&i[Dn]&&(i[Dn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Tx=function(e,t){var i={target:e,props:[],revert:lL,save:aL};return e._gsap||In.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},wx,qh=function(e,t){var i=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return i&&i.style?i:yr.createElement(e)},Wn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(dp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ao(t)||t,1)||""},Hg="O,Moz,ms,Ms,Webkit".split(","),Ao=function(e,t,i){var r=t||ls,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Hg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Hg[o]:"")+e},jh=function(){$3()&&window.document&&(Bg=window,yr=Bg.document,fo=yr.documentElement,ls=qh("div")||{style:{}},qh("div"),Pt=Ao(Pt),Dn=Pt+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wx=!!Ao("perspective"),hp=In.core.reverting,fp=1)},Vg=function(e){var t=e.ownerSVGElement,i=qh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),fo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),fo.removeChild(i),s},Gg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ax=function(e){var t,i;try{t=e.getBBox()}catch{t=Vg(e),i=1}return t&&(t.width||t.height)||i||(t=Vg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Gg(e,["x","cx","x1"])||0,y:+Gg(e,["y","cy","y1"])||0,width:0,height:0}:t},Cx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ax(e))},Dr=function(e,t){if(t){var i=e.style,r;t in or&&t!==Dn&&(t=Pt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(dp,"-$1").toLowerCase())):i.removeAttribute(t)}},Mr=function(e,t,i,r,s,o){var a=new Ln(e._pt,t,i,0,1,o?bx:Sx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Wg={deg:1,rad:1,turn:1},cL={grid:1,flex:1},Ir=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ls.style,l=Y3.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",p,g,_,m;if(r===o||!s||Wg[r]||Wg[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),m=e.getCTM&&Cx(e),(h||o==="%")&&(or[t]||~t.indexOf("adius")))return p=m?e.getBBox()[l?"width":"height"]:e[c],kt(h?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===yr||!g.appendChild)&&(g=yr.body),_=g._gsap,_&&h&&_.width&&l&&_.time===Hn.time&&!_.uncache)return kt(s/_.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,p=e[c],y?e.style[t]=y:Dr(e,t)}else(h||o==="%")&&!cL[Wn(g,"display")]&&(a.position=Wn(e,"position")),g===e&&(a.position="static"),g.appendChild(ls),p=ls[c],g.removeChild(ls),a.position="absolute";return l&&h&&(_=ps(g),_.time=Hn.time,_.width=g[c]),kt(d?p*s/f:p&&s?f/p*s:0)},Ki=function(e,t,i,r){var s;return fp||jh(),t in Ii&&t!=="transform"&&(t=Ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=Ha(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Uc(Wn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ic[t]&&Ic[t](e,t,i)||Wn(e,t)||qv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ir(e,t,s,i)+i:s},uL=function(e,t,i,r){if(!i||i==="none"){var s=Ao(t,e,1),o=s&&Wn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Wn(e,"borderTopColor"))}var a=new Ln(this._pt,e.style,t,0,1,xx),l=0,u=0,c,f,d,h,p,g,_,m,y,x,v,b;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Wn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Wn(e,t)||r,g?e.style[t]=g:Dr(e,t)),c=[i,r],fx(c),i=c[0],r=c[1],d=i.match(Qs)||[],b=r.match(Qs)||[],b.length){for(;f=Qs.exec(r);)_=f[0],y=r.substring(l,f.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),_!==(g=d[u++]||"")&&(h=parseFloat(g)||0,v=g.substr((h+"").length),_.charAt(1)==="="&&(_=uo(h,_)+v),m=parseFloat(_),x=_.substr((m+"").length),l=Qs.lastIndex-x.length,x||(x=x||jn.units[t]||v,l===r.length&&(r+=x,a.e+=x)),v!==x&&(h=Ir(e,t,g,x)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:h,c:m-h,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?bx:Sx;return Hv.test(r)&&(a.e=0),this._pt=a,a},Xg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fL=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Xg[i]||i,t[1]=Xg[r]||r,t.join(" ")},hL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],or[a]&&(l=1,a=a==="transformOrigin"?Dn:Pt),Dr(i,a);l&&(Dr(i,Pt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ha(i,1),o.uncache=1,Ex(r)))}},Ic={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Ln(e._pt,t,i,0,0,hL);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},za=[1,0,0,1,0,0],Rx={},Px=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qg=function(e){var t=Wn(e,Pt);return Px(t)?za:t.substr(7).match(zv).map(kt)},pp=function(e,t){var i=e._gsap||ps(e),r=e.style,s=qg(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?za:s):(s===za&&!e.offsetParent&&e!==fo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,fo.appendChild(e)),s=qg(e),l?r.display=l:Dr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):fo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$h=function(e,t,i,r,s,o){var a=e._gsap,l=s||pp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],p=l[1],g=l[2],_=l[3],m=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,w,A,R,M;i?l!==za&&(A=h*_-p*g)&&(R=v*(_/A)+b*(-g/A)+(g*y-_*m)/A,M=v*(-p/A)+b*(h/A)-(h*y-p*m)/A,v=R,b=M):(w=Ax(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(x[1]||x[0]).indexOf("%")?b/100*w.height:b)),r||r!==!1&&a.smooth?(m=v-u,y=b-c,a.xOffset=f+(m*h+y*g)-m,a.yOffset=d+(m*p+y*_)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Dn]="0px 0px",o&&(Mr(o,a,"xOrigin",u,v),Mr(o,a,"yOrigin",c,b),Mr(o,a,"xOffset",f,a.xOffset),Mr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},Ha=function(e,t){var i=e._gsap||new dx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Wn(e,Dn)||"0",c,f,d,h,p,g,_,m,y,x,v,b,w,A,R,M,S,D,L,N,F,W,O,j,H,$,U,de,Me,ae,K,fe;return c=f=d=g=_=m=y=x=v=0,h=p=1,i.svg=!!(e.getCTM&&Cx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),r.scale=r.rotate=r.translate="none"),A=pp(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),u=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),$h(e,j||u,!!j||i.originIsAbsolute,i.smooth!==!1,A)),b=i.xOrigin||0,w=i.yOrigin||0,A!==za&&(D=A[0],L=A[1],N=A[2],F=A[3],c=W=A[4],f=O=A[5],A.length===6?(h=Math.sqrt(D*D+L*L),p=Math.sqrt(F*F+N*N),g=D||L?Xs(L,D)*ts:0,y=N||F?Xs(N,F)*ts+g:0,y&&(p*=Math.abs(Math.cos(y*ho))),i.svg&&(c-=b-(b*D+w*N),f-=w-(b*L+w*F))):(fe=A[6],ae=A[7],U=A[8],de=A[9],Me=A[10],K=A[11],c=A[12],f=A[13],d=A[14],R=Xs(fe,Me),_=R*ts,R&&(M=Math.cos(-R),S=Math.sin(-R),j=W*M+U*S,H=O*M+de*S,$=fe*M+Me*S,U=W*-S+U*M,de=O*-S+de*M,Me=fe*-S+Me*M,K=ae*-S+K*M,W=j,O=H,fe=$),R=Xs(-N,Me),m=R*ts,R&&(M=Math.cos(-R),S=Math.sin(-R),j=D*M-U*S,H=L*M-de*S,$=N*M-Me*S,K=F*S+K*M,D=j,L=H,N=$),R=Xs(L,D),g=R*ts,R&&(M=Math.cos(R),S=Math.sin(R),j=D*M+L*S,H=W*M+O*S,L=L*M-D*S,O=O*M-W*S,D=j,W=H),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,m=180-m),h=kt(Math.sqrt(D*D+L*L+N*N)),p=kt(Math.sqrt(O*O+fe*fe)),R=Xs(W,O),y=Math.abs(R)>2e-4?R*ts:0,v=K?1/(K<0?-K:K):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Px(Wn(e,Pt)),j&&e.setAttribute("transform",j))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=kt(h),i.scaleY=kt(p),i.rotation=kt(g)+a,i.rotationX=kt(_)+a,i.rotationY=kt(m)+a,i.skewX=y+a,i.skewY=x+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Dn]=Uc(u)),i.xOffset=i.yOffset=0,i.force3D=jn.force3D,i.renderTransform=i.svg?pL:wx?Lx:dL,i.uncache=0,i},Uc=function(e){return(e=e.split(" "))[0]+" "+e[1]},pf=function(e,t,i){var r=cn(t);return kt(parseFloat(t)+parseFloat(Ir(e,"x",i+"px",r)))+r},dL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Lx(e,t)},$r="0deg",$o="0px",Yr=") ",Lx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,p=i.scaleX,g=i.scaleY,_=i.transformPerspective,m=i.force3D,y=i.target,x=i.zOrigin,v="",b=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==$r||c!==$r)){var w=parseFloat(c)*ho,A=Math.sin(w),R=Math.cos(w),M;w=parseFloat(f)*ho,M=Math.cos(w),o=pf(y,o,A*M*-x),a=pf(y,a,-Math.sin(w)*-x),l=pf(y,l,R*M*-x+x)}_!==$o&&(v+="perspective("+_+Yr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||o!==$o||a!==$o||l!==$o)&&(v+=l!==$o||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Yr),u!==$r&&(v+="rotate("+u+Yr),c!==$r&&(v+="rotateY("+c+Yr),f!==$r&&(v+="rotateX("+f+Yr),(d!==$r||h!==$r)&&(v+="skew("+d+", "+h+Yr),(p!==1||g!==1)&&(v+="scale("+p+", "+g+Yr),y.style[Pt]=v||"translate(0, 0)"},pL=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,p=i.xOrigin,g=i.yOrigin,_=i.xOffset,m=i.yOffset,y=i.forceCSS,x=parseFloat(o),v=parseFloat(a),b,w,A,R,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ho,u*=ho,b=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-u)*-d,R=Math.cos(l-u)*d,u&&(c*=ho,M=Math.tan(u-c),M=Math.sqrt(1+M*M),A*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),b*=M,w*=M)),b=kt(b),w=kt(w),A=kt(A),R=kt(R)):(b=f,R=d,w=A=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Ir(h,"x",o,"px"),v=Ir(h,"y",a,"px")),(p||g||_||m)&&(x=kt(x+p-(p*b+g*A)+_),v=kt(v+g-(p*w+g*R)+m)),(r||s)&&(M=h.getBBox(),x=kt(x+r/100*M.width),v=kt(v+s/100*M.height)),M="matrix("+b+","+w+","+A+","+R+","+x+","+v+")",h.setAttribute("transform",M),y&&(h.style[Pt]=M)},mL=function(e,t,i,r,s){var o=360,a=Zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ts:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*zg)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*zg)%o-~~(u/o)*o)),e._pt=d=new Ln(e._pt,t,i,r,u,J3),d.e=c,d.u="deg",e._props.push(i),d},jg=function(e,t){for(var i in t)e[i]=t[i];return e},gL=function(e,t,i){var r=jg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,h,p;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Pt]=t,a=Ha(i,1),Dr(i,Pt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Pt],o[Pt]=t,a=Ha(i,1),o[Pt]=u);for(l in or)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=cn(u),p=cn(c),f=h!==p?Ir(i,l,u,p):parseFloat(u),d=parseFloat(c),e._pt=new Ln(e._pt,a,l,f,d-f,Xh),e._pt.u=p||0,e._props.push(l));jg(a,r)};Pn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Ic[e>1?"border"+n:n]=function(a,l,u,c,f){var d,h;if(arguments.length<4)return d=o.map(function(p){return Ki(a,p,u)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(c+"").split(" "),h={},o.forEach(function(p,g){return h[p]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,h,f)}});var Dx={name:"css",register:jh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,h,p,g,_,m,y,x,v,b,w,A,R,M;fp||jh(),this.styles=this.styles||Tx(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Bn[g]&&px(g,t,i,r,e,s)))){if(h=typeof c,p=Ic[g],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=Fa(c)),p)p(this,e,g,c,i)&&(A=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ar.lastIndex=0,Ar.test(u)||(_=cn(u),m=cn(c),m?_!==m&&(u=Ir(e,g,u,m)+m):_&&(c+=_)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Zt(u)&&~u.indexOf("random(")&&(u=Fa(u)),cn(u+"")||u==="auto"||(u+=jn.units[g]||cn(Ki(e,g))||""),(u+"").charAt(1)==="="&&(u=Ki(e,g))):u=Ki(e,g),d=parseFloat(u),y=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),f=parseFloat(c),g in Ii&&(g==="autoAlpha"&&(d===1&&Ki(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),Mr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ii[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in or,x){if(this.styles.save(g),M=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Wn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=Wn(e,"perspective"),S?e.style.perspective=S:Dr(e,"perspective")}f=parseFloat(c)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ha(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new Ln(this._pt,a,Pt,0,1,b.renderTransform,b,0,-1),v.dep=1),g==="scale")this._pt=new Ln(this._pt,b,"scaleY",b.scaleY,(y?uo(b.scaleY,y+f):f)-b.scaleY||0,Xh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Dn,0,a[Dn]),c=fL(c),b.svg?$h(e,c,0,w,0,this):(m=parseFloat(c.split(" ")[2])||0,m!==b.zOrigin&&Mr(this,b,"zOrigin",b.zOrigin,m),Mr(this,a,g,Uc(u),Uc(c)));continue}else if(g==="svgOrigin"){$h(e,c,1,w,0,this);continue}else if(g in Rx){mL(this,b,g,d,y?uo(d,y+c):c);continue}else if(g==="smoothOrigin"){Mr(this,b,"smooth",b.smooth,c);continue}else if(g==="force3D"){b[g]=c;continue}else if(g==="transform"){gL(this,c,e);continue}}else g in a||(g=Ao(g)||g);if(x||(f||f===0)&&(d||d===0)&&!K3.test(c)&&g in a)_=(u+"").substr((d+"").length),f||(f=0),m=cn(c)||(g in jn.units?jn.units[g]:_),_!==m&&(d=Ir(e,g,u,m)),this._pt=new Ln(this._pt,x?b:a,g,d,(y?uo(d,y+f):f)-d,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?eL:Xh),this._pt.u=m||0,x&&M!==c?(this._pt.b=u,this._pt.e=M,this._pt.r=Q3):_!==m&&m!=="%"&&(this._pt.b=u,this._pt.r=Z3);else if(g in a)uL.call(this,e,g,u,y?y+c:c);else if(g in e)this.add(e,g,u||e[g],y?y+c:c,r,s);else if(g!=="parseTransform"){tp(g,c);continue}x||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,u||e[g])),o.push(g)}}A&&yx(this)},render:function(e,t){if(t.tween._time||!hp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ki,aliases:Ii,getSetter:function(e,t,i){var r=Ii[t];return r&&r.indexOf(",")<0&&(t=r),t in or&&t!==Dn&&(e._gsap.x||Ki(e,"x"))?i&&kg===i?t==="scale"?rL:iL:(kg=i||{})&&(t==="scale"?sL:oL):e.style&&!Zd(e.style[t])?tL:~t.indexOf("-")?nL:cp(e,t)},core:{_removeProperty:Dr,_getMatrix:pp}};In.utils.checkPrefix=Ao;In.core.getStyleSaver=Tx;(function(n,e,t,i){var r=Pn(n+","+e+","+t,function(s){or[s]=1});Pn(e,function(s){jn.units[s]="deg",Rx[s]=1}),Ii[r[13]]=n+","+e,Pn(i,function(s){var o=s.split(":");Ii[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){jn.units[n]="px"});In.registerPlugin(Dx);var ti=In.registerPlugin(Dx)||In;ti.core.Tween;const $g=""+new URL("rajahub-inicio.BPvnoCJd.jpg",import.meta.url).href,Yg=""+new URL("alfred.XsGMWS5U.png",import.meta.url).href,_L=""+new URL("rajahub.CFyN9aW7.png",import.meta.url).href,Kg=""+new URL("gostiki.BxmHK_iT.png",import.meta.url).href,vL="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiM3NzdiYjMiLz48dGV4dCB4PSIzMiIgeT0iNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjI1IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZmZmIj5waHA8L3RleHQ+PC9zdmc+",xL="data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%233776ab'%20d='M31%205c-13%200-12%206-12%206v9h13v3H14S5%2022%205%2034s8%2011%208%2011h6v-8s0-9%209-9h15s8%200%208-8V14s1-9-20-9zm-7%207a3%203%200%20110%206%203%203%200%20010-6z'/%3e%3cpath%20fill='%23ffd43b'%20d='M33%2059c13%200%2012-6%2012-6v-9H32v-3h18s9%201%209-11-8-11-8-11h-6v8s0%209-9%209H21s-8%200-8%208v6s-1%209%2020%209zm7-7a3%203%200%20110-6%203%203%200%20010%206z'/%3e%3c/svg%3e",yL="data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23092e20'%20d='M16%208h12v39c-4%201-7%202-12%202C7%2049%203%2045%203%2037s5-13%2014-13h2V8zm3%2021h-2c-4%200-6%202-6%207%200%204%202%206%205%206h3V29zm26-7H33V8h12v14zm0%205v24c0%208-1%2012-5%2016-3%203-8%205-15%207l-5-9c5-2%208-3%2010-6%202-2%203-5%203-10V27h12z'/%3e%3c/svg%3e",ML="data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23222'%20d='M25%205h14v4h-3v15l17%2027c3%205%200%209-6%209H17c-6%200-9-4-6-9l17-27V9h-3V5zm6%2023L18%2049h28L33%2028v-4h-2v4z'/%3e%3cpath%20fill='%23fff'%20d='M22%2043h20l4%206H18z'/%3e%3c/svg%3e",SL="data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2300758f'%20d='M8%2045c7-2%2011-9%2015-15%204-7%208-12%2014-11%205%201%207%206%2010%2010%202%203%204%205%209%205v4c-7%200-11-3-14-7-3-4-4-7-7-7-4-1-7%204-10%209-5%208-10%2015-20%2016z'/%3e%3cpath%20fill='%23f29111'%20d='M33%2020c7-5%2016-3%2021%204l-3%202c-4-5-10-6-15-3z'/%3e%3c/svg%3e",bL="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iI2Y3ZGYxZSIvPjx0ZXh0IHg9IjQ0IiB5PSI1MSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMxMTEiPkpTPC90ZXh0Pjwvc3ZnPg==",EL="data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23336791'%20d='M32%205c-11%200-20%207-20%2020%200%209%204%2015%2010%2018l-1%209%208-5c2%201%205%201%208%201%2012%200%2019-8%2019-21S47%205%2032%205zm-8%2017a3%203%200%20110%206%203%203%200%20010-6zm17%200a3%203%200%20110%206%203%203%200%20010-6zm-16%2012c5%205%2011%205%2016%200l3%203c-7%208-16%208-23%200z'/%3e%3cpath%20fill='none'%20stroke='%23336791'%20stroke-width='3'%20d='M13%2023c-6-1-8%202-7%206%201%203%205%203%208%202m37-8c6-1%208%202%207%206-1%203-5%203-8%202'/%3e%3c/svg%3e",TL=["aria-expanded"],wL={key:0,id:"menu-movel",class:"navegacao-movel","aria-label":"Navegação móvel"},AL={id:"conteudo"},CL={id:"inicio",class:"percurso-campo"},RL={class:"arte-abertura"},PL={class:"controles-percurso"},LL={class:"paradas",role:"group","aria-label":"Paradas do passeio"},DL=["onClick"],IL=["aria-pressed"],UL={id:"sobre",class:"sobre secao"},NL={class:"orbita-area revelar","aria-hidden":"true"},OL={class:"orbita"},FL=["src"],BL={id:"marcas",class:"faixa-marcas","aria-label":"Marcas e projetos em que trabalhei"},kL={class:"cabecalho-marcas"},zL=["aria-pressed"],HL={class:"cilindro-palco"},VL=["aria-hidden"],GL=["src","alt"],WL={key:1},XL={id:"tecnologias",class:"tecnologias secao"},qL={class:"pilha-area","aria-hidden":"true"},jL={class:"pilha"},$L={class:"tecnologias-texto"},YL={class:"lista-camadas"},KL=["onPointerenter"],JL={class:"itens-camada"},ZL={id:"projetos",class:"projetos secao"},QL={class:"grade-projetos"},eD={class:"projeto projeto-largo"},tD=["src"],nD={class:"projeto projeto-estreito"},iD=["src"],rD={class:"projeto projeto-estreito"},sD=["src"],oD={class:"projeto projeto-largo"},aD={id:"contato",class:"rodape secao"},lD={class:"chamada"},cD={class:"base-rodape"},uD={class:"preferencias"},fD=["aria-pressed"],hD=["aria-pressed"],dD=["aria-label"],pD={key:0,class:"conteudo-janela"},mD=["src"],gD={class:"nota-formulario",role:"status"},_D={__name:"app",setup(n){const e=[vL,xL,bL,SL,yL,ML,EL],t=[{id:"tela",nome:"Na tela",texto:"O que a pessoa vê e toca.",itens:["JavaScript","HTML","CSS"]},{id:"servidor",nome:"No servidor",texto:"As regras do negócio e as APIs.",itens:["PHP","Python","Flask","Django"]},{id:"banco",nome:"No banco",texto:"Onde os dados ficam guardados.",itens:["MySQL","PostgreSQL"]}],i=[{nome:"Alfred",logo:Yg},{nome:"RajaHub",logo:_L,invertida:!0},{nome:"Gostiki",logo:Kg},{nome:"PersonalFit"}],r=[{nome:"Riacho",em:.3},{nome:"Clareira",em:.64},{nome:"De longe",em:.8},{nome:"Entardecer",em:.97}],s=It(!1),o=It(!1),a=It(!1),l=It(!0),u=It(0),c=It(null),f=It(null),d=It(null),h=It(null),p=It(""),g=It(!1),_=It(!1),m=It(!1),y=md(()=>{const $=u.value;return $<.58?{id:1,a:"Fique à vontade.",b:"A casa é sua."}:$<.7?{id:2,a:"Pode ir",b:"sem pressa."}:$<.83?{id:3,a:"De longe,",b:"tudo muda."}:{id:4,a:"Agora, vamos",b:"aos projetos."}});function x($){f.value=$,cc(()=>d.value.showModal())}function v(){o.value=!1}function b($){const U=$.target.closest('a[href^="#"]');if(!U)return;const de=document.getElementById(U.getAttribute("href").slice(1));de&&($.preventDefault(),de.scrollIntoView({behavior:l.value?"smooth":"instant"}))}function w($){const U=document.querySelector(".percurso-campo");window.scrollTo({top:U.offsetTop+(U.offsetHeight-window.innerHeight)*$,behavior:l.value?"smooth":"instant"})}function A(){a.value=!a.value;try{localStorage.setItem("victor-theme",a.value?"dark":"light")}catch{}}function R(){if(!p.value.trim())return;const $=new Blob([`IDEIA DE PROJETO

${p.value.trim()}

Rascunho criado no portfólio de Victor. Este arquivo não foi enviado.
`],{type:"text/plain;charset=utf-8"}),U=URL.createObjectURL($),de=document.createElement("a");de.href=U,de.download="minha-ideia.txt",de.click(),setTimeout(()=>URL.revokeObjectURL(U),1e3),g.value=!0}let M=0;function S(){const $=window.scrollY,U=document.querySelector(".percurso-campo");_.value=U.offsetHeight>0&&$>U.offsetTop+U.offsetHeight-90,!(Math.abs($-M)<6)&&(m.value=$>M&&$>200&&!o.value,M=$)}function D($){if(!l.value||$.pointerType==="touch")return;const U=$.currentTarget,de=U.getBoundingClientRect(),Me=($.clientX-de.left)/de.width-.5,ae=($.clientY-de.top)/de.height-.5;U.style.setProperty("--giro-x",`${(-ae*11).toFixed(2)}deg`),U.style.setProperty("--giro-y",`${(Me*13).toFixed(2)}deg`)}function L($){$.currentTarget.style.setProperty("--giro-x","0deg"),$.currentTarget.style.setProperty("--giro-y","0deg")}let N,F,W;function O(){const $=document.querySelector(".orbita"),U=ti.utils.toArray(".orbita-item");if(!$||!U.length)return()=>{};const de={alvoX:0,alvoY:0,x:0,y:0},Me=fe=>{const Ee=$.getBoundingClientRect();de.alvoX=((fe.clientX-Ee.left)/Ee.width-.5)*.5,de.alvoY=((fe.clientY-Ee.top)/Ee.height-.5)*.35},ae=fe=>{de.x+=(de.alvoX-de.x)*.06,de.y+=(de.alvoY-de.y)*.06;const Ee=$.offsetWidth*.46;U.forEach((ye,Ne)=>{const Ke=fe*.32+Ne/U.length*Math.PI*2+de.x,Oe=Math.sin(Ke),tt=.34+de.y,nt=.68+(Oe+1)*.26;ye.style.transform=`translate3d(${(Math.cos(Ke)*Ee).toFixed(1)}px, ${(Oe*Ee*tt).toFixed(1)}px, 0) scale(${nt.toFixed(3)})`,ye.style.zIndex=Oe>0?3:1,ye.style.opacity=(.55+(Oe+1)*.225).toFixed(2)})};if(ae(.6),!l.value)return()=>{};const K=fe=>ae(fe);return ti.ticker.add(K),window.addEventListener("pointermove",Me,{passive:!0}),()=>{ti.ticker.remove(K),window.removeEventListener("pointermove",Me)}}function j(){F=O(),!(!l.value||!W)&&(N=ti.context(()=>{ti.utils.toArray(".revelar").forEach($=>{ti.from($,{y:46,rotateX:-14,transformOrigin:"50% 100%",opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:$,start:"top 88%",once:!0}})}),ti.fromTo(".pilha",{"--abertura":0,"--giro-pilha":"-18deg"},{"--abertura":1,"--giro-pilha":"-40deg",ease:"none",scrollTrigger:{trigger:".tecnologias",start:"top 75%",end:"center 45%",scrub:.8}}),ti.utils.toArray(".projeto").forEach($=>{ti.from($.querySelector(".capa"),{rotateX:22,y:90,scale:.93,ease:"none",scrollTrigger:{trigger:$,start:"top 98%",end:"top 45%",scrub:.6}})}),ti.fromTo(".chamada-texto",{rotateX:42,y:70,opacity:.2},{rotateX:0,y:0,opacity:1,ease:"none",scrollTrigger:{trigger:".rodape",start:"top 92%",end:"top 35%",scrub:.6}})}))}function H(){F?.(),F=null,N?.revert(),N=null}return ql(l,async()=>{H(),await cc(),j()}),qa(async()=>{try{a.value=localStorage.getItem("victor-theme")==="dark"}catch{}l.value=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,window.addEventListener("scroll",S,{passive:!0}),window.addEventListener("resize",S,{passive:!0}),S(),{ScrollTrigger:W}=await Wf(()=>import("./BrDuEirF.js"),[],import.meta.url),ti.registerPlugin(W),W.config({ignoreMobileResize:!0}),j()}),ja(()=>{window.removeEventListener("scroll",S),window.removeEventListener("resize",S),H()}),($,U)=>{const de=jP,Me=JP;return ut(),wt("div",{class:_i(["site",{escuro:we(a),"movimento-desativado":!we(l)}]),onClick:b},[U[60]||(U[60]=re("a",{class:"pular-conteudo",href:"#sobre"},"Pular para o conteúdo",-1)),re("header",{class:_i(["cabecalho",{solido:we(_),oculto:we(m)}])},[U[17]||(U[17]=PM('<a class="marca" href="#inicio" aria-label="Victor, início">victor<i>.</i></a><nav class="navegacao-principal" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#tecnologias">Tecnologias</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a></nav>',2)),re("button",{class:"alternar-menu",onClick:U[0]||(U[0]=ae=>o.value=!we(o)),"aria-expanded":we(o),"aria-controls":"menu-movel"},en(we(o)?"Fechar":"Menu"),9,TL)],2),we(o)?(ut(),wt("nav",wL,[re("a",{href:"#sobre",onClick:v},"Sobre"),re("a",{href:"#tecnologias",onClick:v},"Tecnologias"),re("a",{href:"#projetos",onClick:v},"Projetos"),re("a",{href:"#contato",onClick:v},"Contato")])):Js("",!0),re("main",AL,[re("div",CL,[re("section",{class:"abertura",style:Ci({"--progresso":we(u)}),"aria-label":"Passeio pelo campo em 3D"},[re("div",RL,[Lt(Me,null,{default:hc(()=>[Lt(de,{movimento:we(l),onProgresso:U[1]||(U[1]=ae=>u.value=ae)},null,8,["movimento"])]),_:1})]),U[19]||(U[19]=re("div",{class:"apresentacao"},[re("h1",{class:"titulo-abertura"},[re("span",null,"Oi, eu sou"),re("span",null,"o Victor.")]),re("p",{class:"subtitulo-abertura"}," Desenvolvedor web. Faço sites e sistemas, da tela ao banco de dados. Role a página: tem um caminho até os projetos. ")],-1)),re("div",{class:_i(["mensagem-percurso",{visivel:we(u)>.2&&we(u)<.97}])},[Lt(jM,{name:"frase",mode:"out-in"},{default:hc(()=>[(ut(),wt("h2",{key:we(y).id},[re("span",null,en(we(y).a),1),re("span",null,en(we(y).b),1)]))]),_:1})],2),re("div",PL,[re("div",LL,[(ut(),wt(Ut,null,Jr(r,ae=>re("button",{key:ae.nome,class:_i({passou:we(u)>=ae.em-.01}),onClick:K=>w(ae.em)},en(ae.nome),11,DL)),64)),re("span",{class:"barra-percurso","aria-hidden":"true",style:Ci({transform:`scaleX(${we(u)})`})},null,4)]),re("button",{class:"pausar",onClick:U[2]||(U[2]=ae=>l.value=!we(l)),"aria-pressed":!we(l)},en(we(l)?"Pausar":"Retomar"),9,IL),U[18]||(U[18]=re("a",{href:"#sobre",class:"pular"},"Pular o passeio",-1))]),re("div",{class:"cortina","aria-hidden":"true",style:Ci({opacity:Math.max(0,(we(u)-.975)/.025)})},null,4)],4)]),re("section",UL,[re("div",NL,[re("div",OL,[U[20]||(U[20]=re("span",{class:"orbita-centro"},"v.",-1)),(ut(),wt(Ut,null,Jr(e,ae=>re("span",{key:ae,class:"orbita-item"},[re("img",{src:ae,alt:"",width:"44",height:"44"},null,8,FL)])),64))])]),U[21]||(U[21]=re("div",{class:"sobre-texto"},[re("h2",{class:"revelar"},[oa("Entre sites"),re("br"),re("u",null,"e sistemas")]),re("p",{class:"revelar"}," Sou o Victor, desenvolvedor web. Já trabalhei em sites para empresas e sistemas de gestão, cuidando tanto das telas quanto da lógica e do banco de dados. Aqui reuni alguns desses projetos para mostrar um pouco do que faço. "),re("p",{class:"revelar"}," Gosto de entender como as coisas funcionam antes de sair programando. O que precisa aparecer na tela? O que dá para simplificar? É a partir dessas perguntas que começo a trabalhar. ")],-1))]),re("section",BL,[re("div",kL,[U[22]||(U[22]=re("p",null,"Marcas e projetos em que trabalhei",-1)),we(l)?(ut(),wt("button",{key:0,onClick:U[3]||(U[3]=ae=>s.value=!we(s)),"aria-pressed":we(s)},en(we(s)?"Girar de novo":"Parar de girar"),9,zL)):Js("",!0)]),re("div",HL,[re("div",{class:_i(["cilindro",{pausado:we(s)}])},[(ut(),wt(Ut,null,Jr(8,ae=>re("div",{key:ae,class:"face-marca",style:Ci({"--face":ae-1}),"aria-hidden":ae>4},[i[(ae-1)%4].logo?(ut(),wt("img",{key:0,src:i[(ae-1)%4].logo,alt:ae>4?"":i[(ae-1)%4].nome,class:_i({invertida:i[(ae-1)%4].invertida}),loading:"lazy"},null,10,GL)):(ut(),wt("span",WL,en(i[(ae-1)%4].nome),1))],12,VL)),64))],2)])]),re("section",XL,[re("div",qL,[re("div",jL,[(ut(),wt(Ut,null,Jr(t,(ae,K)=>re("div",{key:ae.id,class:_i(["placa",[`placa-${ae.id}`,{ativa:we(c)===K}]]),style:Ci({"--nivel":1-K})},[re("b",null,en(ae.nome),1),(ut(!0),wt(Ut,null,Jr(ae.itens,fe=>(ut(),wt("span",{key:fe},en(fe),1))),128))],6)),64))])]),re("div",$L,[U[23]||(U[23]=re("h2",{class:"revelar"},[oa("O que eu "),re("u",null,"uso")],-1)),U[24]||(U[24]=re("p",{class:"revelar"}," Um sistema tem camadas, e eu trabalho em todas elas. ",-1)),re("ul",YL,[(ut(),wt(Ut,null,Jr(t,(ae,K)=>re("li",{key:ae.id,class:"revelar",onPointerenter:fe=>c.value=K,onPointerleave:U[4]||(U[4]=fe=>c.value=null)},[re("h3",null,en(ae.nome),1),re("p",null,en(ae.texto),1),re("p",JL,en(ae.itens.join(", ")),1)],40,KL)),64))])])]),re("section",ZL,[U[39]||(U[39]=re("div",{class:"cabecalho-secao"},[re("h2",{class:"revelar"},[oa("Alguns "),re("u",null,"trabalhos")]),re("p",{class:"revelar"}," Sites para apresentar uma empresa e sistemas para organizar a rotina. Clique em um projeto para ver mais. ")],-1)),re("div",QL,[re("article",eD,[re("button",{class:"capa capa-raja","aria-label":"Ver detalhes: RajaHub",onClick:U[5]||(U[5]=ae=>x("RajaHub")),onPointermove:D,onPointerleave:L},[U[25]||(U[25]=re("span",{class:"capa-fundo"},null,-1)),re("img",{class:"capa-print",src:we($g),alt:"Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação.",loading:"lazy",width:"1265",height:"712"},null,8,tD)],32),U[26]||(U[26]=re("h3",null,"RajaHub",-1)),U[27]||(U[27]=re("p",null," Site do RajaHub, que apresenta suas frentes de atuação e conecta empreendedores e investidores. WordPress, PHP e JavaScript. ",-1))]),re("article",nD,[re("button",{class:"capa capa-alfred","aria-label":"Ver detalhes: Alfred",onClick:U[6]||(U[6]=ae=>x("Alfred")),onPointermove:D,onPointerleave:L},[U[28]||(U[28]=re("span",{class:"capa-fundo"},null,-1)),re("img",{class:"capa-logo",src:we(Yg),alt:"",loading:"lazy"},null,8,iD),U[29]||(U[29]=re("span",{class:"capa-numero"},"27 cidades",-1))],32),U[30]||(U[30]=re("h3",null,"Alfred",-1)),U[31]||(U[31]=re("p",null," Sistema hospitalar utilizado em 27 cidades, em cujo desenvolvimento participei. PHP, MySQL e JavaScript. ",-1))]),re("article",rD,[re("button",{class:"capa capa-gostiki","aria-label":"Ver detalhes: Gostiki",onClick:U[7]||(U[7]=ae=>x("Gostiki")),onPointermove:D,onPointerleave:L},[U[32]||(U[32]=re("span",{class:"capa-fundo"},null,-1)),re("img",{class:"capa-logo",src:we(Kg),alt:"",loading:"lazy"},null,8,sD),U[33]||(U[33]=re("span",{class:"capa-numero"},"Do balcão ao delivery",-1))],32),U[34]||(U[34]=re("h3",null,"Gostiki",-1)),U[35]||(U[35]=re("p",null," Sistema para a Gostiki Açaí & Sorvete, com vendas, pedidos e gestão de lojas. PHP, MySQL e JavaScript. ",-1))]),re("article",oD,[re("button",{class:"capa capa-personal","aria-label":"Ver detalhes: PersonalFit",onClick:U[8]||(U[8]=ae=>x("PersonalFit")),onPointermove:D,onPointerleave:L},[...U[36]||(U[36]=[re("span",{class:"capa-fundo"},null,-1),re("span",{class:"capa-nome"},"PersonalFit",-1),re("span",{class:"capa-numero"},"Alunos, treinos e avaliações",-1)])],32),U[37]||(U[37]=re("h3",null,"PersonalFit",-1)),U[38]||(U[38]=re("p",null," Gestão de alunos e treinos, com acesso para o personal e o aluno. PHP, MySQL e JavaScript. ",-1))])])]),re("footer",aD,[re("div",lD,[U[40]||(U[40]=re("h2",{class:"chamada-texto"},"Tem um projeto em mente?",-1)),re("button",{class:"botao-ideia",onClick:U[9]||(U[9]=ae=>we(h).showModal())}," Escrever minha ideia ")]),U[42]||(U[42]=re("p",{class:"bastidores"}," Este site foi feito com Nuxt, GSAP e Three.js. A paisagem lá de cima é toda gerada por código, sem nenhuma imagem. ",-1)),re("div",cD,[re("span",null,"© "+en(new Date().getFullYear())+" Victor",1),re("div",uD,[re("button",{onClick:A,"aria-pressed":we(a)},en(we(a)?"Tema claro":"Tema escuro"),9,fD),re("button",{onClick:U[10]||(U[10]=ae=>l.value=!we(l)),"aria-pressed":!we(l)},en(we(l)?"Desligar movimento":"Ligar movimento"),9,hD),U[41]||(U[41]=re("a",{href:"#inicio"},"Voltar ao topo",-1))])])])]),re("dialog",{ref_key:"dialog",ref:d,"aria-label":we(f)?"Detalhes do projeto: "+we(f):"Detalhes do projeto",class:"janela-detalhes",onClick:U[12]||(U[12]=ae=>{ae.target===we(d)&&we(d).close()})},[we(f)?(ut(),wt("div",pD,[re("button",{class:"fechar-janela",onClick:U[11]||(U[11]=ae=>we(d).close()),"aria-label":"Fechar detalhes"}," Fechar "),we(f)==="PersonalFit"?(ut(),wt(Ut,{key:0},[U[43]||(U[43]=re("h2",null,"PersonalFit",-1)),U[44]||(U[44]=re("p",null," Sistema com áreas separadas para personal e aluno. Reúne cadastro de alunos, montagem de treinos, agenda e avaliações físicas. O aluno pode consultar seus treinos e acompanhar o histórico. Também conta com uma API para acesso aos dados do aluno. ",-1)),U[45]||(U[45]=re("p",{class:"pilha-projeto"},"PHP, MySQL, JavaScript, HTML e CSS",-1))],64)):we(f)==="Alfred"?(ut(),wt(Ut,{key:1},[U[46]||(U[46]=re("h2",null,"Alfred",-1)),U[47]||(U[47]=re("p",null," Participei do desenvolvimento do Alfred, sistema hospitalar utilizado em 27 cidades. O sistema reúne recursos para organizar atendimentos, agendas e outras rotinas da saúde, com módulos para diferentes etapas da gestão hospitalar. ",-1)),U[48]||(U[48]=re("p",{class:"pilha-projeto"},"PHP, MySQL, JavaScript, HTML e CSS",-1))],64)):we(f)==="RajaHub"?(ut(),wt(Ut,{key:2},[U[49]||(U[49]=re("h2",null,"RajaHub",-1)),U[50]||(U[50]=re("p",null," Participei do desenvolvimento do site do RajaHub, voltado a empreendedorismo, tecnologia e inovação. O site apresenta as frentes de atuação do grupo e os caminhos para quem busca investimento ou quer investir. O projeto local utiliza WordPress, com templates em PHP e estilos próprios. ",-1)),re("img",{class:"print-detalhes",src:we($g),alt:"Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação.",width:"1265",height:"712"},null,8,mD),U[51]||(U[51]=re("p",{class:"pilha-projeto"},"WordPress, PHP, JavaScript, HTML e CSS",-1)),U[52]||(U[52]=re("a",{class:"link-texto",href:"https://rajahub.com.br/",target:"_blank",rel:"noopener noreferrer"},"Visitar o site",-1))],64)):we(f)==="Gostiki"?(ut(),wt(Ut,{key:3},[U[53]||(U[53]=re("h2",null,"Gostiki",-1)),U[54]||(U[54]=re("p",null," Participei do desenvolvimento do sistema da Gostiki Açaí & Sorvete. O projeto reúne ponto de venda, mesas, delivery, cadastro de produtos e complementos, além da gestão de lojas e clientes. Também inclui recursos de integração com o iFood e impressão de comandas pelo Gostiki Print. ",-1)),U[55]||(U[55]=re("p",{class:"pilha-projeto"},"PHP, MySQL, JavaScript, HTML e CSS",-1))],64)):Js("",!0)])):Js("",!0)],8,dD),re("dialog",{ref_key:"briefDialog",ref:h,"aria-label":"Escrever uma ideia de projeto",class:"janela-detalhes",onClick:U[16]||(U[16]=ae=>{ae.target===we(h)&&we(h).close()})},[re("form",{class:"conteudo-janela",onSubmit:yS(R,["prevent"])},[re("button",{type:"button",class:"fechar-janela",onClick:U[13]||(U[13]=ae=>we(h).close()),"aria-label":"Fechar rascunho"}," Fechar "),U[56]||(U[56]=re("h2",null,"Qual é a sua ideia?",-1)),U[57]||(U[57]=re("p",null," Os canais de contato serão adicionados em breve. Por enquanto, organize sua ideia e salve um rascunho no seu dispositivo. ",-1)),U[58]||(U[58]=re("label",{for:"ideia"},"O que você quer construir?",-1)),Ty(re("textarea",{id:"ideia","onUpdate:modelValue":U[14]||(U[14]=ae=>zt(p)?p.value=ae:null),required:"",maxlength:"5000",rows:"5",placeholder:"Conte sobre o projeto, o objetivo e o que você imagina…",onInput:U[15]||(U[15]=ae=>g.value=!1)},null,544),[[_S,we(p)]]),U[59]||(U[59]=re("button",{class:"salvar-ideia",type:"submit"},"Salvar minha ideia",-1)),re("p",gD,en(we(g)?"Rascunho preparado para download. Nenhuma mensagem foi enviada.":"Seu texto permanece no navegador. Nada é enviado."),1)],32)],512)],2)}}},vD={__name:"nuxt-error-page",props:{error:Object},setup(n){const t=n.error,i=Number(t.statusCode||500),r=i===404,s=t.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=t.message||t.toString(),a=void 0,c=r?Tp(()=>Wf(()=>import("./BYtLI9PQ.js"),__vite__mapDeps([0,1,2]),import.meta.url)):Tp(()=>Wf(()=>import("./D7iEXR8V.js"),__vite__mapDeps([3,1,4]),import.meta.url));return(f,d)=>(ut(),ns(we(c),Hx(f0({status:we(i),statusText:we(s),statusCode:we(i),statusMessage:we(s),description:we(o),stack:we(a)})),null,16))}},xD={key:0},Jg={__name:"nuxt-root",setup(n){const e=()=>null,t=bn(),i=t.deferHydration();if(t.isHydrating){const c=t.hooks.hookOnce("app:error",i),f=vs().beforeEach(()=>{c(),f()})}const r=!1;sd(U0,Md()),t.hooks.callHookWith(c=>c.map(f=>f()),"vue:setup",[]);const s=Sd(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;function l(c,f,d){const h=t.vueApp.config.errorHandler;if(h&&!h.__nuxt_default)try{h(c,f,d)}catch(p){console.error("[nuxt] Error in `app.config.errorHandler`",p)}}B_((c,f,d)=>{if(t.hooks.callHook("vue:error",c,f,d).catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),a.test(navigator.userAgent))return t.hooks.callHook("app:error",c),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,c),!1;if(Qb(c)&&(c.fatal||c.unhandled))return t.runWithContext(()=>Jb(c)),l(c,f,d),!1});const u=!1;return(c,f)=>(ut(),ns(bM,{onResolve:we(i)},{default:hc(()=>[we(o)?(ut(),wt("div",xD)):we(s)?(ut(),ns(we(vD),{key:1,error:we(s)},null,8,["error"])):we(u)?(ut(),ns(we(e),{key:2,context:we(u)},null,8,["context"])):we(r)?(ut(),ns(Jy(we(r)),{key:3})):(ut(),ns(we(_D),{key:4}))]),_:1},8,["onResolve"]))}};let Zg;{let n;Zg=async function(){if(n)return n;const i=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?ES(Jg):bS(Jg),r=Ob({vueApp:i});async function s(o){await r.callHook("app:error",o),r.payload.error||=bd(o)}s.__nuxt_default=!0,i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await kb(r,AT)}catch(o){s(o)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(Ib),await r.hooks.callHook("app:mounted",i),await cc()}catch(o){s(o)}return i},n=Zg().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{wt as A,re as B,en as C,Lt as D,hc as E,oa as F,bD as G,zb as H,od as I,no as J,G0 as K,bn as a,Ad as b,ja as c,ld as d,ED as e,yD as f,Kb as g,gd as h,It as i,Yb as j,we as k,md as l,Kc as m,$b as n,qa as o,_d as p,Ro as q,_m as r,xf as s,Lf as t,vs as u,Ta as v,If as w,b0 as x,SD as y,ut as z};
